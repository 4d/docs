---
id: editing
title: 4Dユーザー＆グループの管理
---

## デザイナーと管理者

4Dは、ユーザーに対して標準的なアクセス権と特定の権限を与えます。 ユーザー＆グループシステムが起動されると、これらの標準的な権限が有効になります。

最も強力なユーザーは **デザイナー (Designer)** です。 No aspect of the application is closed to the Designer. デザイナーは次のことができます:
- access all application servers without restriction,
- ユーザーやグループを作成する。
- グループにアクセス権を割り当てる。
- デザインモードを使用する。 シングルユーザー環境では、常にデザイナーアクセス権が使用されます。 クライアント/サーバー環境にといては、デザイナーにパスワードを割り当てることで、4Dユーザーログインダイアログが表示されるようになります。  この環境では、デザインモードは読み取り専用です。

デザイナーの次に強力なユーザーは **管理者 (Administrator)**であり、通常はパスワードアクセスシステムや管理機能を扱う役割を与えられています。

管理者は次のことができます:
- ユーザーやグループを作成する。
- 4D Server 管理画面とモニターにアクセスする。
- バックアップ、復元、サーバーの監視のため、MSC にアクセスする。

管理者は次のことができません:
- デザイナーユーザーを編集する。
- by default, access to protected parts of the application. とくにデザインモードが制限されている場合には、管理者はアクセスすることができません。 The Administrator must be part of one or more groups to have access privileges in the application. 管理者はすべての新規グループに含まれますが、任意のグループから管理者の名前を取り除くことができます。

Both the Designer and Administrator are available by default in all applications. [ユーザー管理のダイアログボックス](#ユーザーエディター)において、デザイナーと管理者のアイコンは、それぞれ赤色と緑色で表示されます:

- デザイナーアイコン: ![](assets/en/Users/IconDesigner.png)
- 管理者アイコン: ![](assets/en/Users/IconAdmin.png)

デザイナーと管理者の名前は変更することができます。 ランゲージにおいて、デザイナーと管理者の ID値は、常に 1 と 2 に設定されます。

デザイナーと管理者は、それぞれ 16,000 のグループと 16,000 のユーザーを作成することができます。



## ユーザーエディター

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

3. 新しいユーザー名を入力します。 This name will be used by the user to open the application. ユーザー名をいつでも変更することができます。変更するにはコンテキストメニューの **名称変更** コマンドを使用するか、Alt+クリック (Windows) または Option+クリック (macOS) ショートカットを使用、または変更したい名前を 2回クリックします。

4. ユーザーのパスワードを設定するには、プロパティエリアで **編集...** ボタンをクリックして、ダイアログボックスの 2つのパスワード欄に同じパスワードをそれぞれ入力します。 パスワードには 15桁までの英数字を使用することができます。 パスワードでは文字の大小が区別されます。

> Users can change their password at any time according to the options in the "Security" page of the structure settings, or using the `CHANGE PASSWORD` command.

5. グループメンバー表を用いて、そのユーザーが所属するグループを設定します。 メンバーカラムの該当するオプションをチェックして、選択したユーザーをグループに対して追加・削除することができます。

[グループページ](#グループの設定) を使用して、各グループの所属ユーザーを設定することもできます。

### ユーザーの削除

ユーザーを削除するには、そのユーザーを選択してから削除ボタンをクリックするか、またはコンテキストメニューの **削除** コマンドを使用します。 ![](assets/en/Users/MinussNew.png)

削除されたユーザー名は、その後ユーザーエディターには表示されません。 削除されたユーザーの ID番号は、新規アカウント作成の際に再度割り当てられるという点に注意してください。

### ユーザープロパティ

- **ユーザーの種類**: "デザイナー"、"管理者"、または (それ以外のすべてのユーザーの場合にあ) "ユーザー"

- **Startup Method**: Name of an associated method that will be automatically executed when the user opens the application (optional). このメソッドを使って、たとえばユーザー設定をロードできます。


## グループエディター

グループのエディターは 4Dのツールボックスにあります。

### グループの設定

You use the groups editor to set the elements that each group contains (users and/or other groups) and to distribute access to plug-ins.

Keep in mind that once a group has been created, it cannot be deleted. If you want to deactivate a group, you just need to remove any users it contains.

To create a group:

1. Select **Tool Box > Groups** in the **Design** menu or click  on the **Tool Box** button of the 4D toolbar then on the **Groups** button. 4D displays the groups editor window. The list of groups displays all the groups of the application project.

2. Click on the ![](assets/en/Users/PlussNew.png) button located below the list of groups.  
   OR  
   Right-click in the list of groups and choose the **Add** or **Duplicate** command in the context menu.

> The Duplicate command can be used to create several groups having the same characteristics quickly.

4D adds a new group to the list, named "New groupX" by default.

3. Enter the name of the new group. The group name can be up to 15 characters long. You can rename a group at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.


### Placing users or groups into groups

You can place any user or group into a group, and you can also place the group itself into several other groups. It is not mandatory to place a user in a group.

To place a user or group in a group, you simply need to check the "Member" option for each user or group in the member attribution area:

![](assets/en/Users/groups.png)

If you check the name of a user, this user is added to the group. If you check the name of a group, all the users of the group are added to the new group. The affiliated user or group will then have the same access privileges as those assigned to the new group.

Placing groups into other groups lets you create a user hierarchy. The users of a group placed in another group will have the access privileges of both groups. See "[An access hierarchy scheme](#an-access-hierarchy-scheme)" below.

To remove a user or group from another group, you just need to deselect the corresponding option in the member attribution area.

### Assigning a group to a plug-in or to a server

You can assign a group privileges to any plug-ins installed in the project. This includes all the 4D plug-ins and any third-party plug-ins.

Distributing access to the plug-ins lets you control the use of the licenses you possess for these plug-ins. Any users that do not belong to the access group of a plug-in cannot load this plug-in.

> Used licenses remain attached to 4D user accounts in the group for the whole 4D session.

The “Plug-in” area on the Groups page of the tool box lists all the plug-ins loaded by the 4D application. To give a group access to a plug-in, you simply need to check the corresponding option.

![](assets/en/Users/plugins.png)

The **4D Client Web Server** and **4D Client SOAP Server** items lets you control the possibility of Web and SOAP (Web Services) publication for each 4D in remote mode. These licenses are considered as plug-in licenses by 4D Server. Therefore, in the same way as for plug-ins, you can restrict the right to use these licenses to a specific group of users.


### An access hierarchy scheme

The best way to ensure the security of your application and provide users with different levels of access is to use an access hierarchy scheme. Users can be assigned to appropriate groups and groups can be nested to create a hierarchy of access rights. This section discusses several approaches to such a scheme.

In this example, a user is assigned to one of three groups depending on their level of responsibility. Users assigned to the Accounting group are responsible for data entry. Users assigned to the Finances group are responsible for maintaining the data, including updating records and deleting outdated records. Users assigned to the General Management group are responsible for analyzing the data, including performing searches and printing analytical reports.

The groups are then nested so that privileges are correctly distributed to the users of each group.

- The General Management group contains only “high-level” users. ![](assets/en/Users/schema1.png)

- The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well. ![](assets/en/Users/schema2.png)

- The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well. ![](assets/en/Users/schema3.png)

You can decide which access privileges to assign to each group based on the level of responsibility of the users it includes.

Such a hierarchical system makes it easy to remember to which group a new user should be assigned. You only have to assign each user to one group and use the hierarchy of groups to determine access.
