---
id: overview
title: 概要
---

クライアントサーバーアーキテクチャーや Webインターフェースなど、複数のユーザーがデータベースを使用する場合は、アクセスを制御したり、接続ユーザーに応じて異なる機能を提供したりする必要が生じます。 機密性の高いデータを保護することは重要です。 ユーザーにパスワードを割り当て、データやデータベース操作へのアクセスレベルが異なるアクセスグループを作成することで、これらのデータを保護することができます。

> 4Dのセキュリティ機能の概要については、[4D Security guide](https://blog.4d.com/4d-security-guide/) をご覧ください。





## 権限を割り当てる

4D のパスワードアクセスシステムは、ユーザーとグループに基づいています。 ユーザーを作成してパスワードを割り当てたり、ユーザーをグループに入れて、各グループに対しデータベースの適切な部分へのアクセス権を割り当てます。

グループには、アクセス可能なメソッドや、HTTPサーバー、SQLサーバーなど、任意の機能へのアクセス権が割り当てられます。

次の図は、デザインおよびランタイムエクスプローラーアクセス権を "Devs" グループに割り当てている様子を表しています (データベース設定の "セキュリティ" タブ):

![](assets/en/Users/Access1.png)



## アクセスシステムを起動する

クライアントサーバーにおいて、4D のパスワードアクセスシステムを起動するには、**デザイナー (Designer) にパスワードを割り当て** ます。

Until you give the Designer a password, all database access are done with the Designer's access rights, even if you have set up users and groups (when the database opens, no ID is required). Any part of the database can be opened.

When a password is assigned to the Designer, all the access privileges take effect. In order to connect to the database, remote users must enter a password.

To disable the password access system, you just need to remove the Designer password.


## Users and groups in project architecture

In project databases (.4DProject or .4dz files), 4D users and groups can be configured in both single-user and client-server environments. However, access control is only effective in 4D Server databases. The following table lists the main users and groups features and their availability:

|                                                               | 4D Developer (single-user)   | 4D Server |
| ------------------------------------------------------------- | ---------------------------- | --------- |
| Adding/editing users and groups                               | yes                          | yes       |
| Assigning user/group access to servers                        | yes                          | yes       |
| User identification                                           | no (all users are Designer)  | yes       |
| Access control once the Designer has been assigned a password | no (all access are Designer) | yes       |





## ツールボックス

The editors for users and groups are located in the toolbox of 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc.

![](assets/en/Users/editor.png)

> Users and groups editor can be displayed at runtime using the [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html) command.



## Directory.json file

Users, groups, as well as their access rights are stored in a specific database file named **directory.json**.

This file can be stored at the following locations:

- in the user database settings folder, i.e. in the "Settings" folder at the same level as the "Project" folder. These settings are used by default for the database.
- in the data settings folder,  i.e. in the "Settings" folder in the "Data" folder. If a directory.json file is present at this location, it takes priority over the file in the user database settings folder. This feature allows you to define custom/local Users and Groups configurations. The custom configuration will left untouched by a database upgrade.

> If users and groups management is not active, the directory.json is not created.
