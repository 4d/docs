---
id: editing
title: 4Dユーザー＆グループの管理
---

マルチユーザーアプリケーションにおいて、4Dはユーザーに対して標準的なアクセス権と特定の権限を与えます。 ユーザー＆グループシステムが起動されると、これらの標準的な権限が有効になります。

## プロジェクトにおけるユーザー＆グループ

プロジェクトアプリケーション (.4DProject および .4dz ファイル) では、シングルユーザーおよびマルチユーザー環境の両方でユーザーとグループを設定することができます。 However, **access control** is only effective with 4D Server. 次の表は、主なユーザーとグループの機能と、それらが利用かどうかを一覧に示します:

|                              | 4D (シングルユーザー)        | 4D Server |
| ---------------------------- | --------------------------------------- | --------- |
| ユーザーとグループの追加/編集              | ◯                                       | ◯         |
| ユーザー/グループにサーバーアクセスを割り振る      | ◯                                       | ◯         |
| ユーザー認証                       | × (すべてのユーザーがデザイナーです) | ◯         |
| デザイナーへのパスワード設定によるアクセスシステムの起動 | × (すべてのアクセスがデザイナーです) | ◯         |

> For information about user identification and access control in single-user deployments, see [this paragraph](overview.md#access-control-in-single-user-applications).

## デザイナーと管理者

The most powerful user is named **Designer**. デザイナーは、アプリケーションに関するあらゆる操作をおこなうことができます。
デザイナーは次のことができます:

- 制限なく、すべてのアプリケーションサーバーにアクセスする。
- ユーザーやグループを作成する。
- グループにアクセス権を割り当てる。
- デザインモードを使用する。
  シングルユーザー環境では、常にデザイナーアクセス権が使用されます。
  クライアント/サーバー環境においては、デザイナーにパスワードを割り当てることで、4Dユーザーログインダイアログが表示されるようになります。  この環境では、デザインモードは読み取り専用です。

After the Designer, the next most powerful user is the **Administrator**, who is usually given the tasks of managing the access system and administration features.

管理者は次のことができます:

- ユーザーやグループを作成する。
- 4D Server 管理ウィンドウとモニターにアクセスする。
- バックアップ、復元、サーバーの監視のため、MSC にアクセスする。

管理者は次のことができません:

- デザイナーユーザーを編集する。
- アプリケーションの保護された領域にアクセスする。 とくにデザインモードが制限されている場合には、管理者はアクセスすることができません。 管理者がアプリケーション内でアクセス権を得るには、1つ以上のグループに属さなければなりません。 管理者はすべての新規グループに含まれますが、任意のグループから管理者の名前を取り除くことができます。

デザイナーと管理者は、すべてのアプリケーションにおいてデフォルトで利用可能です。 In the [user management dialog box](#users-and-groups-editor), the icons of the Designer and Administrator are displayed in red and green respectively:

- Designer icon: ![](../assets/en/Users/iconDesigner.png)
- Administrator icon: ![](../assets/en/Users/iconAdmin.png)

デザイナーと管理者の名前は変更することができます。 ランゲージにおいて、デザイナーと管理者の ID値は、常に 1 と 2 に設定されます。

デザイナーと管理者は、それぞれ 16,000 のグループと 16,000 のユーザーを作成することができます。

## ユーザーエディター

ユーザーのエディターは 4Dのツールボックスにあります。

![](../assets/en/Users/editor.png)

> Users and groups editor can be displayed at runtime using the [EDIT ACCESS](https://doc.4d.com/4dv19R/help/command/en/page281.html) command.
> The whole users and groups configuration can also be edited during application execution using 4D language commands of the `Users and Groups` theme.

### ユーザーの追加と変更

ユーザーエディターを使用して、ユーザーアカウントの作成やプロパティの設定、各グループへの割り当てをおこないます。

ユーザーを追加するには:

1. Select **Tool Box > Users** from the **Design** menu or click on the **Tool Box** button of the 4D toolbar.
   4Dはユーザーエディターを表示します。

The list of users displays all the users, including the [Designer and the Administrator](#designer-and-administrator).

2. Click on the ![](../assets/en/Users/PlussNew.png) button located below the list of users.
   OR
   Right-click in the list of users and choose **Add** or **Duplicate** in the context menu.

> The **Duplicate** command can be used to create several users having the same characteristics quickly.

4D は新規ユーザーをリストに追加し、デフォルトとして "新規ユーザーX" という名前を設定します。

3. 新しいユーザー名を入力します。
   この名前は、ユーザーがアプリケーションを開く際に使用されます。 You can rename a user at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.

4. To enter a password for the user, click the **Edit...** button in the user properties area and enter the password twice in the dialog box.
   パスワードには 15桁までの英数字を使用することができます。 パスワードでは文字の大小が区別されます。

> Users can change their password at any time according to the options in the "Security" page of the structure settings, or using the `CHANGE PASSWORD` command.

5. グループメンバー表を用いて、そのユーザーが所属するグループを設定します。
   メンバーカラムの該当するオプションをチェックして、選択したユーザーをグループに対して追加・削除することができます。

The membership of users to different groups can also be set by group on the [Groups page](#configuring-access-groups).

### ユーザーの削除

To delete a user, select it then click the deletion button or use the **Delete** command of the context menu.
![](../assets/en/Users/MinussNew.png)

削除されたユーザー名は、その後ユーザーエディターには表示されません。 削除されたユーザーの ID番号は、新規アカウント作成の際に再度割り当てられるという点に注意してください。

### ユーザープロパティ

- **User Kind**: The User Kind field contains "Designer", "Administrator", or (for all other users) "User".

- **Startup Method**: Name of an associated method that will be automatically executed when the user opens the application (optional). このメソッドを使って、たとえばユーザー設定をロードできます。

## グループエディター

グループのエディターは 4Dのツールボックスにあります。

### グループの設定

グループエディターを使用して、各グループ内に納める要素 (ユーザーや他のグループ) を設定したり、プラグインへのアクセス権を割り当てることができます。

グループは一旦作成されると、削除できないということに留意が必要です。 グループを使用したくない場合は、そのグループの所属ユーザーをすべて取り除きます。

グループを作成するには:

1. Select **Tool Box > Groups** in the **Design** menu or click  on the **Tool Box** button of the 4D toolbar then on the **Groups** button.
   4D はグループエディターウインドウを表示します: グループリストには、アプリケーションプロジェクトのすべてのグループが表示されます。

2. Click on the ![](../assets/en/Users/PlussNew.png) button located below the list of groups.\
   OR\
   Right-click in the list of groups and choose the **Add** or **Duplicate** command in the context menu.

> 複製コマンドを使用すると、同じ特性を持つ複数のグループを素早く作成することができます。

4D は新規グループをリストに追加し、デフォルトとして "新規グループX" という名前を設定します。

3. 新しいグループの名前を入力します。
   グループ名には 15桁までの文字を使用できます。
   You can rename a group at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.

### ユーザーやグループをグループに入れる

任意のユーザーやグループをグループ内に配置することができます。さらに、そのグループ自体を他のいくつかのグループ内に入れることも可能です。 必ずしもユーザーをグループに入れる必要はありません。

ユーザーやグループをグループに配置するには、当該グループのユーザー/グループ一覧にてメンバーカラムにチェックを入れます:

![](../assets/en/Users/groups.png)

ユーザー名をチェックすると、そのユーザーがグループに追加されます。 グループ名をチェックした場合は、そのグループの全ユーザーがグループへ追加されます。
メンバーの一員となったユーザーやグループには、そのグループに割り当てられたものと同じアクセス権が与えられます。

グループを別のグループ内に入れることにより、ユーザーの階層構造が作成されます。 別のグループの配下に入れられたグループのユーザーは、両グループのアクセス権を保持します。 See "[An access hierarchy scheme](#an-access-hierarchy-scheme)" below.

ユーザーやグループをグループから取り除くには、ユーザー/グループ一覧でチェックを解除します。

### プラグインやサーバーにグループを割り当てる

プロジェクトにインストールされたプラグインへのアクセス権をグループに割り当てることができます。 これには 4D のプラグインと任意のサードパーティープラグインが含まれます。

プラグインへのアクセス権を割り当てると、所有するプラグインライセンスの使用を管理できるようになります。 プラグインのアクセスグループに属さないユーザーは、そのプラグインをロードすることができません。

> 使用されたライセンスは 4Dセッションの間、当該グループに所属する 4Dユーザーアカウントに紐づけられます。

ツールボックスのグループページにある "プラグイン" エリアには、4Dアプリケーションによりロードされたプラグインがすべて表示されます。 プラグインへのアクセス権をグループに与えるには、該当するオプションをチェックします。

![](../assets/en/Users/plugins.png)

The **4D Client Web Server** and **4D Client SOAP Server** items lets you control the possibility of Web and SOAP (Web Services) publication for each 4D in remote mode. これらのライセンスは 4D Server 側ではプラグインライセンスとしてみなされます。 したがって、プラグインと同じ方法で、これらのライセンスの使用権を特定のユーザーグループに限定することができます。

### アクセス権の階層構造

アプリケーションのセキュリティを確保し、ユーザーに異なるアクセスレベルを提供する最も効果的な方法は、アクセス権の階層構造を利用することです。 ユーザーを適切なグループに割り振り、各グループをネストすることで、アクセス権の階層構造を形成できます。 この節では、このような構造の取り扱い方について説明します。

この例題では、ユーザーは担当業務に応じて 3つあるグループの 1つに割り振られます。 データ入力担当のユーザーは、Accounting (会計) グループに割り当てます。 レコードの更新や無効データの削除などデータ管理を担当するユーザーは、Finances (財務) グループに割り当てます。 検索の実行や分析レポートの印刷などデータ分析を担当するユーザーは、General Management (総合管理) グループに割り当てます。

割り当て完了後は、各グループのユーザーに権限が正しく配分されるようにグループをネストします。

- General Managementグループには "高レベル" のユーザーだけが含まれます。
  ![](../assets/en/Users/schema1.png)

- Financesグループには、データ管理ユーザーと General Managementグループが含まれます。したがって、General Managementグループのユーザーは Financesグループの権限も保持します。
  ![](../assets/en/Users/schema2.png)

- Accountingグループには、データ入力をおこなうユーザーと Financesグループが含まれます。したがって、Financesグループのユーザーと General Managementグループのユーザーは Accountingグループの権限も利用できます。
  ![](../assets/en/Users/schema3.png)

所属ユーザーの責務に基づいて、各グループに割り当てるアクセス権を決定します。

このような階層システムを使用すると、新規ユーザーに割り当てるべきグループがわかりやすくなります。 各ユーザーを 1つのグループに割り当てるだけで、グループの階層を介してアクセス権を決定できます。

## 権限を割り当てる

グループには、アプリケーションの特定機能へのアクセス権が割り当てられます:

- デザイン環境やランタイムエクスプローラー
- HTTPサーバー
- RESTサーバー
- SQLサーバー

これらのアクセス権はストラクチャー設定で定義します。 次の図は、デザインおよびランタイムエクスプローラーアクセス権を "Devs" グループに割り当てている様子を表しています (データベース設定の "セキュリティ" タブ):

![](../assets/en/Users/Access1.png)

You also use groups to [distribute available licenses](#assigning-a-group-to-a-plug-in-or-to-a-server). この割り当ては、グループエディターで定義します。

## Directory.json ファイル

Users, groups, as well as their access rights are stored in a specific project file named **directory.json**.

必要に応じて、このフォルダーは次の場所に保存することができます:

- If you want to use the same directory for all data files (or if you use a single data file), store the **directory.json** file in the user settings folder, i.e. in the "Settings" folder at the [same level as the "Project" folder](Project/architecture.md#project-folder) (default location).
- If you want to use a specific directory file per data file, store the **directory.json** file in the data settings folder, i.e. in the ["Settings" folder of the "Data" folder](Project/architecture.md#settings). If a **directory.json** file is present at this location, it takes priority over the file in the user settings folder. アプリケーションをアップグレードしても、このカスタム/ローカルなユーザー＆グループ設定はそのままです。

> To allow for safe changes of passwords and group memberships in a deployed environment, you can include your **directory.json** file in the server application during the build, using the [corresponding build application option](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application).
