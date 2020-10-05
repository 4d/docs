---
id: quickTour
title: A Quick Tour in ORDA
---

Since ORDA is object-based, using ORDA requires basic knowledge in object programmming.

## Exploring the datastore

The ORDA datastore is automatically based upon a 4D database structure, provided it complies with the [ORDA prerequisites](overview.md#orda-prerequisites).

This example will use the following simple 4D database structure:

![](assets/en/ORDA/struc.png)

To know what is exposed as the datastore, create a new project method, write the following line:

```code4d
TRACE
```

Execute the method -- it simply calls the debugger window. In the Expression area, double-click to insert an expression and enter `ds`. It returns the datastore object. Deploy the object, you can see that tables and fields are automatically exposed by ORDA as properties of the `ds` object:

![](assets/en/ORDA/debug1.png)

It means for example that, whenever you need to refer to the city field of the [Company] table, in ORDA you just need to write:

```code4d
ds.Company.city //returns the name of the city
```

> In the ORDA world, ds.Company is a **dataclass**. ds.Company.city is an **attribute**.

> ORDA is case sensitive. `ds.company.city` will not refer to the ds.Company.city attribute.

You have also noticed the extra `hires` property in the ds.Company dataclass. It does not correspond to a field. `hires` is actually the name of the *One to many* relation between Company and Employee:

![](assets/en/ORDA/struc2s.png) *Name of the relation as defined in the Inspector*

It means that, whenever you need to access the list of employees working for a company, in ORDA you just need to write:

```code4d
ds.Company.hires //returns the list of employees
```

But don't go too fast. Let's see now how to record data in ORDA dataclasses.


## Adding data

In ORDA, you can add a record to a dataclass using the `new()` command.
> In the ORDA world, a record is an **entity** -- an entity is itself an object. A command that is attached to a specific object is called a **member method**.

```code4d
$entity:=ds.Company.new() //create a new entity reference
//in the Company dataclass  
//and assign it to the $entity variable
```

A new entity object contains a "copy" of all attributes of its parent dataclass, thus you can assign values to them:

```code4d
$entity.name:="ACME, inc."  
$entity.city:="London"  
//$entity.ID is automatically filled
```

Right now, the entity only exists in memory. To store it in the data file, you need to save it using the `save()` member method:

```code4d
$status:=$entity.save()
```








ユーザーのエディターは 4Dのツールボックスにあります。

![](assets/en/Users/editor.png)

### ユーザーの追加と変更

ユーザーエディターを使用して、ユーザーアカウントの作成やプロパティの設定、各グループへの割り当てをおこないます。

ユーザーを追加するには:

1. **デザイン** メニューから **ツールボックス＞ユーザー** を選択、または 4Dツールバーの **ツールボックス** ボタンをクリックします。 4Dはユーザーエディターを表示します。

ユーザーリストには、[デザイナーと管理者](#デザイナーと管理者) を含むすべてのユーザーが表示されます:

2. ユーザーリストの下にある追加ボタン ![](assets/en/Users/PlussNew.png) をクリックします。 または<br /> ユーザーリスト上で右クリックし、コンテキストメニューから **追加** または **複製** を選択する。

> **複製** コマンドを使用すると、同じ特性を持つ複数のユーザーを素早く作成することができます。

4D は新規ユーザーをリストに追加し、デフォルトとして "新規ユーザーX" という名前を設定します。

3. 新しいユーザー名を入力します。 この名前は、ユーザーがデータベースを開く際に使用されます。 ユーザー名をいつでも変更することができます。変更するにはコンテキストメニューの **名称変更** コマンドを使用するか、Alt+クリック (Windows) または Option+クリック (macOS) ショートカットを使用、または変更したい名前を 2回クリックします。

4. ユーザーのパスワードを設定するには、プロパティエリアで **編集...** ボタンをクリックして、ダイアログボックスの 2つのパスワード欄に同じパスワードをそれぞれ入力します。 パスワードには 15桁までの英数字を使用することができます。 パスワードでは文字の大小が区別されます。

> データベース設定の "セキュリティ" ページで許可されていれば、ユーザーは自分のパスワードを変更できます。また、パスワードは `CHANGE PASSWORD` コマンドを使って変更することもできます。

5. グループメンバー表を用いて、そのユーザーが所属するグループを設定します。 メンバーカラムの該当するオプションをチェックして、選択したユーザーをグループに対して追加・削除することができます。

[グループページ](#グループの設定) を使用して、各グループの所属ユーザーを設定することもできます。

### ユーザーの削除

ユーザーを削除するには、そのユーザーを選択してから削除ボタンをクリックするか、またはコンテキストメニューの **削除** コマンドを使用します。 ![](assets/en/Users/MinussNew.png)

削除されたユーザー名は、その後ユーザーエディターには表示されません。 削除されたユーザーの ID番号は、新規アカウント作成の際に再度割り当てられるという点に注意してください。

### ユーザープロパティ

- **ユーザーの種類**: "デザイナー"、"管理者"、または (それ以外のすべてのユーザーの場合にあ) "ユーザー"

- **開始メソッド**: ユーザーがデータベースを開いたときに自動実行されるメソッドの名称 (任意) このメソッドを使って、たとえばユーザー設定をロードできます。


## グループエディター

グループのエディターは 4Dのツールボックスにあります。

### グループの設定

グループエディターを使用して、各グループ内に納める要素 (ユーザーや他のグループ) を設定したり、プラグインへのアクセス権を割り当てることができます。

グループは一旦作成されると、削除できないということに留意が必要です。 グループを使用したくない場合は、そのグループの所属ユーザーをすべて取り除きます。

グループを作成するには:

1. **デザイン** メニューから **ツールボックス＞ユーザーグループ** を選択、または 4Dツールバーの **ツールボックス** ボタンをクリックし、**グループ** ページを開きます。 4D はグループエディターウインドウを表示します: グループリストには、データベースのすべてのグループが表示されます。

2. グループリストの下にある追加ボタン ![](assets/en/Users/PlussNew.png) をクリックします。  
   または  
   グループリスト上で右クリックし、コンテキストメニューから **追加** または **複製** を選択します。

> 複製コマンドを使用すると、同じ特性を持つ複数のグループを素早く作成することができます。

4D は新規グループをリストに追加し、デフォルトとして "新規グループX" という名前を設定します。

3. 新しいグループの名前を入力します。 グループ名には 15桁までの文字を使用できます。 グループ名をいつでも変更することができます。変更するにはコンテキストメニューの **名称変更** コマンドを使用するか、Alt+クリック (Windows) または Option+クリック (macOS) ショートカットを使用、または変更したい名前を 2回クリックします。


### ユーザーやグループをグループに入れる

任意のユーザーやグループをグループ内に配置することができます。さらに、そのグループ自体を他のいくつかのグループ内に入れることも可能です。 必ずしもユーザーをグループに入れる必要はありません。

ユーザーやグループをグループに配置するには、当該グループのユーザー/グループ一覧にてメンバーカラムにチェックを入れます:

![](assets/en/Users/groups.png)

ユーザー名をチェックすると、そのユーザーがグループに追加されます。 グループ名をチェックした場合は、そのグループの全ユーザーがグループへ追加されます。 メンバーの一員となったユーザーやグループには、そのグループに割り当てられたものと同じアクセス権が与えられます。

グループを別のグループ内に入れることにより、ユーザーの階層構造が作成されます。 別のグループの配下に入れられたグループのユーザーは、両グループのアクセス権を保持します。 後述の [アクセス権の階層構造](#アクセス権の階層構造) を参照してください。

ユーザーやグループをグループから取り除くには、ユーザー/グループ一覧でチェックを解除します。

### プラグインやサーバーにグループを割り当てる

データベースにインストールされたプラグインへのアクセス権をグループに割り当てることができます。 これには 4D のプラグインと任意のサードパーティープラグインが含まれます。

プラグインへのアクセス権を割り当てると、所有するプラグインライセンスの使用を管理できるようになります。 プラグインのアクセスグループに属さないユーザーは、そのプラグインをロードすることができません。

また、プラグインアクセスエリアを使用して、4D Client Webサーバーと SOAPサーバーの使用を制限することも可能です。

ツールボックスのグループページにある "プラグイン" エリアには、4Dアプリケーションによりロードされたプラグインがすべて表示されます。 プラグインへのアクセス権をグループに与えるには、該当するオプションをチェックします。

![](assets/en/Users/plugins.png)

**4D Client Web Server** や **4D Client SOAP Server** 項目を使用し、リモートモードの 4D がそれぞれ Web および SOAP (Webサービス) 公開をおこなえるかどうかを管理することができます。 これらのライセンスは 4D Server 側ではプラグインライセンスとしてみなされます。 したがって、プラグインと同じ方法で、これらのライセンスの使用権を特定のユーザーグループに限定することができます。


### アクセス権の階層構造

データベースのセキュリティを確保し、ユーザーに異なるアクセスレベルを提供する最も効果的な方法は、アクセス権の階層構造を利用することです。 ユーザーを適切なグループに割り振り、各グループをネストすることで、アクセス権の階層構造を形成できます。 この節では、このような構造の取り扱い方について説明します。

この例題では、ユーザーは担当業務に応じて 3つあるグループの 1つに割り振られます。 Users assigned to the Accounting group are responsible for data entry. Users assigned to the Finances group are responsible for maintaining the data, including updating records and deleting outdated records. Users assigned to the General Management group are responsible for analyzing the data, including performing searches and printing analytical reports.

The groups are then nested so that privileges are correctly distributed to the users of each group.

- The General Management group contains only “high-level” users. ![](assets/en/Users/schema1.png)

- The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well. ![](assets/en/Users/schema2.png)

- The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well. ![](assets/en/Users/schema3.png)

You can decide which access privileges to assign to each group based on the level of responsibility of the users it includes.

Such a hierarchical system makes it easy to remember to which group a new user should be assigned. You only have to assign each user to one group and use the hierarchy of groups to determine access.
