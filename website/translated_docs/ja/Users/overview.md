---
id: overview
title: 概要
---

If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. 機密性の高いデータを保護することは重要です。 You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the application or to application operations.

> 4Dのセキュリティ機能の概要については、[4D Security guide](https://blog.4d.com/4d-security-guide/) をご覧ください。





## 権限を割り当てる

4D のパスワードアクセスシステムは、ユーザーとグループに基づいています。 You create users and assign passwords, put users in groups, and assign each group access rights to appropriate parts of the application.

Groups can then be assigned access privileges to specific parts or features of the application (Design access, HTTP server, SQL server, etc.), or any custom part.

次の図は、デザインおよびランタイムエクスプローラーアクセス権を "Devs" グループに割り当てている様子を表しています (データベース設定の "セキュリティ" タブ):

![](assets/en/Users/Access1.png)



## アクセスシステムを起動する

クライアントサーバーにおいて、4D のパスワードアクセスシステムを起動するには、**デザイナー (Designer) にパスワードを割り当て** ます。

Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have set up users and groups (when the application opens, no ID is required). Any part of the application can be opened.

デザイナーにパスワードが指定されると、すべてのアクセス権が有効になります。 In order to connect to the application, remote users must enter a password.

パスワードアクセスシステムを無効にするには、デザイナーのパスワードを削除します。


## プロジェクトアーキテクチャーにおけるユーザー＆グループ

In project applications (.4DProject or .4dz files), 4D users and groups can be configured in both single-user and client-server environments. However, access control is only effective with 4D Server. The following table lists the main users and groups features and their availability:

|                                                               | 4D (single-user)             | 4D Server |
| ------------------------------------------------------------- | ---------------------------- | --------- |
| Adding/editing users and groups                               | yes                          | yes       |
| Assigning user/group access to servers                        | yes                          | yes       |
| User identification                                           | no (all users are Designer)  | yes       |
| Access control once the Designer has been assigned a password | no (all access are Designer) | yes       |





## ツールボックス

The editors for users and groups are located in the toolbox of 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc.

![](assets/en/Users/editor.png)

> Users and groups editor can be displayed at runtime using the [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html) command. The whole users and groups configuration can also be edited during application execution using 4D language commands of the [Users and Groups](https://doc.4d.com/4Dv18R3/4D/18-R3/Users-and-Groups.201-4900438.en.html) theme.



## Directory.json file

Users, groups, as well as their access rights are stored in a specific project file named **directory.json**.

This file can be stored at the following locations:

- in the user settings folder, i.e. in the "Settings" folder at the same level as the "Project" folder. These settings are used by default for the application.
- in the data settings folder,  i.e. in the "Settings" folder in the "Data" folder. If a **directory.json** file is present at this location, it takes priority over the file in the user settings folder. This feature allows you to define custom/local Users and Groups configurations. The custom configuration will left untouched by an application upgrade.

> If users and groups management is not active, the **directory.json** is not created.

