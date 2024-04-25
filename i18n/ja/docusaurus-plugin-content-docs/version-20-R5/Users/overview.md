---
id: overview
title: アクセスコントロールの概要
---

クライアントサーバーアーキテクチャーや Webインターフェースなど、複数のユーザーがアプリケーションを使用する場合は、アクセスを制御したり、接続ユーザーに応じて異なる機能を提供したりする必要が生じます。 シングルユーザーアプリケーションにおいても、機密性の高いデータを保護することは重要です。

運用環境によって、4D アクセスコントロールの方法は異なります:

- マルチユーザーアプリケーションでは、4D のユーザー＆グループ機能を利用することができます。
- in single-user applications, user access is controlled through the system session, using commands such as [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html).

> For an overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).

## マルチユーザーアプリケーションのアクセスコントロール

マルチユーザーアプリケーションは、4D Server を使って運用します。 これにはクライアントサーバー、Web、および RESTアプリケーションが含まれます。

In multi-user applications, access control is done through [4D users and groups](handling_users_groups.md). ユーザーを作成してパスワードを割り当て、アプリケーションにおいて異なるレベルの権限を持つアクセスグループを作成します。

You initiate the 4D password access control system with 4D Server by [assigning a password to the Designer user](handling_users_groups.md#designer-and-administrator). Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have [set up users and groups](handling_users_groups.md) (when the application opens, no ID is required). つまり、アプリケーションのあらゆる部分を開くことができます。

デザイナーにパスワードが指定されると、すべてのアクセス権が有効になります。 In order to connect to the application or to a [server with protected access](handling_users_groups.md#assigning-group-access), remote users must enter a login/password.

パスワードアクセスシステムを無効にするには、デザイナーのパスワードを削除します。

## シングルユーザーアプリケーションのアクセスコントロール

シングルユーザーアプリケーションとは、4D で運用する、または 4D Volume Desktop が組み込まれたデスクトップアプリケーションのことです。 In single-user applications all users opening the application are [Designers](handling_users_groups.md#designer-and-administrator), they have all privileges and their name is "Designer". Access control is not based upon 4D users and groups, but upon **user sessions**.

### ユーザー認証

To identify the current user in a 4D single-user application, you can rely on the [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html) command, which returns the user who opened the system session. つまり、ユーザー認証は OSレベルに委ねられています。

この場合、次のようなコードを使用して、アプリケーション内でアクセスを許可または拒否することができます:

```4d
If(Current system user = $user) //you can store users in a database table
	// give access to some features
End if
```

If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the [`SET USER ALIAS`](https://doc.4d.com/4dv19R/help/command/en/page1666.html) command, for example:

```4d
SET USER ALIAS(Current system user)
```

### アクセスの保護

#### 権限

複数のユーザーが共有しているマシンでは、4Dアプリケーションをフォルダーにインストールし、そのフォルダーに対するアクセス権を適切なユーザーに OSレベルで与えることができます。

#### データの暗号化

If you want to protect access to the application data, we recommend to [encrypt data](MSC/encrypt.md) and provide the encryption key to the authorized user(s).
