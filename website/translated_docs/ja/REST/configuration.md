---
id: configuration
title: サーバー設定
---

4D の RESTサーバーは、標準の HTTPリクエストを用いて外部アプリケーションがデータベースのデータにアクセスすることを可能にします。つまり、プロジェクトのデータクラス情報を取得したり、データを操作したり、Webアプリケーションにログインしたり、といったことが可能です。

REST機能を使い始めるまえに、まずは 4D REST サーバーの設定をおこない、これを起動させる必要があります。

> - 4D Server上では、開かれる RESTセッションにつき、4D Client ライセンスが1消費されます。<br>
> - 4Dシングルユーザーにおいては、テスト用に 3つまでの REST セッションが開けます。   
>     特定のセッションを継続利用するには [セッション cookie](authUsers.md#セッション-cookie) を管理する必要があります。



## RESTサーバーを開始する

セキュリティ上の理由により、デフォルトでは、4D は RESTリクエストに応答しません。 RESTサーバーを開始し、RESTリクエストを処理するには、データベース設定の "Web＞RESTリソース" ページにて **RESTサーバーとして公開** オプションを有効化する必要があります。

![alt-text](assets/en/REST/Settings.png)

> RESTサービスは 4D の HTTPサーバーを使用するため、4D Webサーバーが開始されていることを確認してください。

このオプションが有効化されると、「警告: アクセス権が正しく設定されているか確認してください。」という警告メッセージが表示されます。これは REST接続の認証設定がされていない限り、デフォルトではデータベースオブジェクトに自由にアクセスできてしまうためです。


## アクセス権の設定

デフォルトでは、REST接続はすべてのユーザーに対してオープンですが、この状態はライセンス管理上もセキュリティ上も推奨されません。

REST接続は次の方法で制限することができます:
- データベース設定の "Web＞RESTリソース" ページにて、RESTサービスに割り当てる **読み込み/書き出し** ユーザーグループを設定します;
- `On REST Authentication` データベースメソッドに、RESTの初期リクエストを処理するコードを書きます。

> 上に挙げた 2つの方法を同時に使用することはできません。 `On REST Authentication` データベースメソッドを定義した場合、4D は RESTリクエストの処理を同メソッドに委ねます。つまり、データベース設定の "Web＞RESTリソース" ページにて指定した "読み込み/書き出し" の設定は無視されます。


### データベース設定を使用する

データベース設定の "Web＞RESTリソース" ページにある **読み込み/書き出し** 設定は、RESTクエリを使って 4Dデータベースへのリンクを設立することのできる 4Dユーザーのグループを指定します。

デフォルトでは、メニューには **<Anyone>** が選択されています。これは、REST接続はすべてのユーザーに対してオープンであるという状態を示しています。 グループを指定すると、そのグループに所属する 4Dユーザーアカウントのみが [RESTリクエストを通して 4D にアクセス](authUsers.md) できるようになります。 If an account is used that does not belong to this group, 4D returns an authentication error to the sender of the request.

> In order for this setting to take effect, the `On REST Authentication` database method must not be defined. If it exists, 4D ignores access settings defined in the Database Settings.

### Using the On REST Authentication database method
The `On REST Authentication` database method provides you with a custom way of controlling the opening of REST sessions on 4D. This database method is automatically called when a new session is opened through a REST request. When a [request to open a REST session](authUsers.md) is received, the connection identifiers are provided in the header of the request. The `On REST Authentication` database method is called so that you can evaluate these identifiers. You can use the list of users for the 4D database or you can use your own table of identifiers. For more information, refer to the `On REST Authentication` database method [documentation](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html).



## Exposing tables and fields

Once REST services are enabled in the 4D database, by default a REST session can access all tables and fields of the datastore, and thus use their data. For example, if your database contains an [Employee] table, it is possible to write:

```
http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"

```
This request will return all employees whose salary field is higher than 10000.

> 4D tables and/or fields that have the "Invisible" attribute are also exposed in REST by default.

If you want to customize the datastore objects accessible through REST, you must disable the exposure of each table and/or field that you want to hide. When a REST request attempts to access an unauthorized resource, 4D returns an error.

### Exposing tables

By default, all tables are exposed in REST.

For security reasons, you may want to only expose certain tables of your datastore to REST calls. For instance, if you created a [Users] table storing user names and passwords, it would be better not to expose it.

To remove the REST exposure for a table:

1. Display the Table Inspector in the Structure editor and select the table you want to modify.

2. Uncheck the **Expose as REST resource** option: ![alt-text](assets/en/REST/table.png) Do this for each table whose exposure needs to be modified.


### Exposing fields

By default, all 4D database fields are exposed in REST.

You may not want to expose certain fields of your tables to REST. For example, you may not want to expose the [Employees]Salary field.

To remove the REST exposure for a field:

1. Display the Field Inspector in the Structure editor and select the field you want to modify.

2. Uncheck the **Expose as REST resource** for the field. ![alt-text](assets/en/REST/field.png) Repeat this for each field whose exposure needs to be modified.

> In order for a field to be accessible through REST, the parent table must be as well. If the parent table is not exposed, none of its fields will be, regardless of their status.
