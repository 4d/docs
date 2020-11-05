---
id: configuration
title: サーバー設定
---

Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, *i.e.* to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.

REST機能を使い始めるまえに、まずは 4D REST サーバーの設定をおこない、これを起動させる必要があります。

> - 4D Server上では、開かれる RESTセッションにつき、4D Client ライセンスが1消費されます。<br>
> - 4Dシングルユーザーにおいては、テスト用に 3つまでの REST セッションが開けます。   
>     特定のセッションを継続利用するには [セッション cookie](authUsers.md#セッション-cookie) を管理する必要があります。



## RESTサーバーを開始する

セキュリティ上の理由により、デフォルトでは、4D は RESTリクエストに応答しません。 If you want to start the REST Server, you must check the **Expose as REST server** option in the "Web/REST resource" page of the structure settings in order for REST requests to be processed.

![alt-text](assets/en/REST/Settings.png)

> RESTサービスは 4D の HTTPサーバーを使用するため、4D Webサーバーが開始されていることを確認してください。

このオプションが有効化されると、「警告: アクセス権が正しく設定されているか確認してください。」という警告メッセージが表示されます。これは REST接続の認証設定がされていない限り、デフォルトではデータベースオブジェクトに自由にアクセスできてしまうためです。


## アクセス権の設定

デフォルトでは、REST接続はすべてのユーザーに対してオープンですが、この状態はライセンス管理上もセキュリティ上も推奨されません。

REST接続は次の方法で制限することができます:
- assigning a **Read/Write** user group to REST services in the "Web/REST resource" page of the Structure Settings;
- `On REST Authentication` データベースメソッドに、RESTの初期リクエストを処理するコードを書きます。

> 上に挙げた 2つの方法を同時に使用することはできません。 Once an `On REST Authentication` database method has been defined, 4D fully delegates control of REST requests to it: any setting made using the "Read/Write" menu on the Web/REST resource page of the Structure Settings is ignored.


### Using the Structure Settings

The **Read/Write** menu in the "Web/REST resource" page of the structure settings specifies a group of 4D users that is authorized to establish the link to the 4D application using REST queries.

By default, the menu displays **\<Anyone>**, which means that REST accesses are open to all users. グループを指定すると、そのグループに所属する 4Dユーザーアカウントのみが [RESTリクエストを通して 4D にアクセス](authUsers.md) できるようになります。 このグループに所属していないアカウントの場合、4D はリクエストの送信者に対して認証エラーを返します。

> この設定を使用するには、`On REST Authentication` データベースメソッドを定義してはいけません。 If it exists, 4D ignores access settings defined in the Structure Settings.

### On REST Authentication データベースメソッドを使用する
`On REST Authentication` データベースメソッド は 4D 上で RESTセッションの開始を管理するための方法を提供します。 RESTリクエストによって新規セッションが開始される際、このデータベースメソッドは自動的に呼び出されます。 [RESTセッション開始のリクエスト](authUsers.md) を受信すると、そのリクエストヘッダーには接続の識別子が含まれています。 これらの識別子を評価するために `On REST Authentication` データベースメソッドは呼び出されます。 You can use the list of users for the 4D application or you can use your own table of identifiers. 詳細については `On REST Authentication` データベースメソッドの [ドキュメンテーション](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.ja.html) を参照ください。



## テーブルやフィールドの公開

Once REST services are enabled in the 4D application, by default a REST session can access all tables and fields of the 4D database through the [datastore interface](ORDA/dsMapping.md#datastore). Thus, it can use their data. たとえば、データベースに [Employee] テーブルが含まれている場合、次のように書くことができます:

```
http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"

```
このリクエストで、salary (給与) フィールドが 10000以上の社員データが取得されます。

> "非表示" 属性を選択されたテーブルやフィールドも、デフォルトで REST に公開されています。

REST 経由でアクセス可能なデータストアオブジェクトを制限するには、アクセス不可にするテーブルやフィールドについて "RESTリソースとして公開" オプションを選択解除する必要があります。 許可されていないリソースへの RESTリクエストがあった場合、4Dはエラーを返します。

### テーブルの公開

デフォルトでは、すべてのテーブルが REST に公開されています。

セキュリティ上の理由から、データベースの一部のテーブルのみを公開したい状況もあるでしょう。 たとえば、[Users] テーブルを作成し、その中にユーザー名とパスワードが保存されている場合、そのテーブルは公開しない方が賢明でしょう。

テーブルを公開したくない場合は:

1. ストラクチャーエディターにて対象となるテーブルを選択し、右クリックでコンテキストメニューを開いてテーブルプロパティを選択します。

2. **RESTリソースとして公開** オプションの選択を解除します: ![alt-text](assets/en/REST/table.png) 公開設定を変更する各テーブルに対して、この手順を繰り返します。


### フィールドの公開

デフォルトでは、すべての 4Dデータベースフィールドが REST に公開されています。

テーブルの一部のフィールドのみを非公開にしたい状況もあるでしょう。 たとえば、[Employees]Salary のようなフィールドは非公開の方がよいでしょう。

フィールドを非公開にするには:

1. ストラクチャーエディターにて対象となるフィールドを選択し、右クリックでコンテキストメニューを開いてフィールドプロパティを選択します。

2. フィールドの **RESTリソースとして公開** オプションの選択を解除します: ![alt-text](assets/en/REST/field.png) 公開設定を変更する各フィールドに対して、この手順を繰り返します。

> あるフィールドが REST を通してアクセス可能であるためには、その親テーブルも公開されている必要があります。 親テーブルが公開されていない場合、各フィールドの公開設定に関わらず、すべてのフィールドがアクセス不可になります。
