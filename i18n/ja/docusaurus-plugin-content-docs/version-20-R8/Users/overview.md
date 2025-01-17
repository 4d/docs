---
id: overview
title: アクセスコントロールの概要
---

クライアントサーバーアーキテクチャーや Webインターフェースなど、複数のユーザーがアプリケーションを使用する場合は、アクセスを制御したり、接続ユーザーに応じて異なる機能を提供したりする必要が生じます。 シングルユーザーアプリケーションにおいても、機密性の高いデータを保護することは重要です。

運用環境によって、4D アクセスコントロールの方法は異なります:

- マルチユーザーアプリケーションでは、4D のユーザー＆グループ機能を利用することができます。
- in single-user applications, user access is controlled through the system session, using commands such as [`Current system user`](../commands-legacy/current-system-user.md).

> 4Dのセキュリティ機能の概要については、[4D Security guide](https://blog.4d.com/4d-security-guide/) をご覧ください。

## マルチユーザーアプリケーションのアクセスコントロール

マルチユーザーアプリケーションは、4D Server を使って運用します。 これにはクライアントサーバー、Web、および RESTアプリケーションが含まれます。

マルチユーザーアプリケーションでは、[4D ユーザー＆グループ](handling_users_groups.md) によってアクセスコントロールがおこなわれます。 ユーザーを作成してパスワードを割り当て、アプリケーションにおいて異なるレベルの権限を持つアクセスグループを作成します。

4D Server のパスワードアクセスシステムを起動するには、[デザイナー (Designer) ユーザーにパスワードを割り当て](handling_users_groups.md#designer-and-administrator) ます。 [ユーザーとグループを作成](handling_users_groups.md) しても、デザイナーにパスワードが指定されるまでは、すべてのアプリケーションアクセスがデザイナーアクセス権でおこなわれます (アプリケーション開始時に ID を求められません)。 つまり、アプリケーションのあらゆる部分を開くことができます。

デザイナーにパスワードが指定されると、すべてのアクセス権が有効になります。 アプリケーションや [アクセスが制限されたサーバー](handling_users_groups.md#権限を割り当てる) に接続するには、リモートユーザーはログイン/パスワードを入力する必要があります。

パスワードアクセスシステムを無効にするには、デザイナーのパスワードを削除します。

## シングルユーザーアプリケーションのアクセスコントロール

Single-user applications are desktop applications, deployed with 4D or merged with 4D Volume Desktop. シングルユーザーアプリケーションでは、アプリケーションを開くユーザーはすべて [デザイナー](handling_users_groups.md#デザイナーと管理者) です。つまり、ユーザー名は "Designer" で、すべての権限を持ちます。 アクセスコントロールは、4D のユーザー＆グループではなく、**ユーザーセッション** に基づいておこなわれます。

### ユーザー認証

To identify the current user in a 4D single-user application, you can rely on the [`Current system user`](../commands-legacy/current-system-user.md) command, which returns the user who opened the system session. つまり、ユーザー認証は OSレベルに委ねられています。

この場合、次のようなコードを使用して、アプリケーション内でアクセスを許可または拒否することができます:

```4d
If(Current system user = $user) // データベースのテーブルにユーザーを保存することができます
    // 特定機能へのアクセス権を付与します
End if

```

If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the [`SET USER ALIAS`](../commands-legacy/set-user-alias.md) command, for example:

```4d
SET USER ALIAS(Current system user)
```

### アクセスの保護

#### 権限

複数のユーザーが共有しているマシンでは、4Dアプリケーションをフォルダーにインストールし、そのフォルダーに対するアクセス権を適切なユーザーに OSレベルで与えることができます。

#### データの暗号化

アプリケーションのデータへのアクセスを保護したい場合は、[データを暗号化](MSC/encrypt.md) し、適切なユーザーに暗号化キーを提供することが推奨されます。
