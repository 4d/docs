---
id: privileges
title: 権限
---

データ保護と、承認ユーザーによる迅速かつ容易なデータアクセスを両立することは、Webアプリケーションにとって大きな課題です。 ORDA のセキュリティアーキテクチャーはデータストアの中心に実装されており、プロジェクト内のさまざまなリソース (データストア、データクラス、関数など) に対して、すべての Web または REST ユーザーセッションに特定の権限を定義することができます。

## 概要

ORDA のセキュリティアーキテクチャーは、権限、許諾アクション (read、create など)、およびリソースの概念に基づいています。

Webユーザーまたは RESTユーザーがログインすると、そのセッションには自動的に関連する権限がロードされます。 Privileges are assigned to the session using the [`session.setPrivileges()`](../API/SessionClass.md#setprivileges) function.

Every user request sent within the session is evaluated against privileges defined in the project's `roles.json` file.

権限外のアクションをユーザーが実行しようとすると、権限エラーが生成されるか、あるいは読み取り権限がない属性の場合にはそのデータは送信されません。

![schema](../assets/en/ORDA/privileges-schema.png)

## Resources

プロジェクト内の以下の公開リソースに対して、許諾アクションと権限名を割り当てることができます (この設定をパーミッションと呼びます):

- データストア
- データクラス
- 属性 (計算属性およびエイリアス属性を含む)
- データモデルクラス関数

あるレベルにおいて定義されたパーミッションは基本的に下位レベルに継承されますが、パーミッションは複数のレベルで設定することもできます:

- データストアレベルで定義されたパーミッションは、自動的にすべてのデータクラスに割り当てられます。
- データクラスレベルで定義されたパーミッションは、データストアの設定をオーバーライドします (あれば)。 デフォルトでは、データクラスのすべての属性が、データクラスのパーミッションを継承します。
- データクラスとは異なり、属性レベルで定義されたパーミッションは、親のデータクラスの設定をオーバーライドするのではなく、それに追加されます。 たとえば、同じ許諾アクションに対し、データクラスのレベルでは "general" という権限名を、データクラスの属性のレベルでは "detail" という権限名を割り当てた場合、その属性にアクセスするには、セッションに "general" と "detail" の両方の権限が設定されている必要があります。

:::info

パーミッションは、データストアオブジェクトへのアクセスを制御します。 If you want to filter read data according to some criteria, you might consider [restricting entity selections](entities.md#restricting-entity-selections) which can be more appropriate in this case.

:::

## 許諾アクション

利用可能なアクションは対象となるリソースによります。

| アクション        | データストア                                                                 | dataclass                                                             | 属性                                                                        | データモデル関数                                                                                                |
| ------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **create**   | 任意のデータクラスにおいてエンティティを作成                                                 | 当該データクラスにおいてエンティティを作成                                                 | 当該属性に許可されたデフォルト値とは異なる値を持つエンティティを作成 (エイリアス属性の場合は無視されます) | n/a                                                                                                     |
| **read**     | 任意のデータクラスにおいて属性を読み取り                                                   | 当該データクラスにおいて属性を読み取り                                                   | 当該属性を読み取り                                                                 | n/a                                                                                                     |
| **update**   | 任意のデータクラスにおいて属性を更新                                                     | 当該データクラスにおいて属性を更新                                                     | 当該属性を更新 (エイリアス属性の場合は無視されます)                            | n/a                                                                                                     |
| **drop**     | 任意のデータクラスにおいてデータを削除                                                    | 当該データクラスにおいてデータを削除                                                    | 当該属性の null でない値を削除 (エイリアス属性と計算属性を除く)                   | n/a                                                                                                     |
| **execute**  | プロジェクトの任意の関数を実行 (データストア、データクラス、エンティティセレクション、エンティティ) | データクラスの任意の関数を実行。 データクラス関数、エンティティ関数、エンティティセレクション関数は、データクラスの関数として扱われます。 | n/a                                                                       | 当該関数を実行                                                                                                 |
| **describe** | /rest/$catalog API ですべてのデータクラスが利用可能                                    | /rest/$catalog API で当該データクラスが利用可能                                     | /rest/$catalog API で当該属性が利用可能                                             | /rest/$catalog API で当該関数が利用可能                                                                           |
| **promote**  | n/a                                                                    | n/a                                                                   | n/a                                                                       | 関数の実行に指定の権限を関連付けます。 権限は一時的にセッションに追加され、関数の実行終了とともに削除されます。 セキュリティ上、セッション全体ではなく、当該関数を実行するプロセスのみに権限が追加されます。 |

**注:**

- エイリアス属性の元である属性に対するアクセス権をセッションが持っていない場合でも、エイリアス属性へのアクセス権があれば、これを読み取ることができます。
- 計算属性を構成する属性に対するアクセス権をセッションが持っていない場合でも、計算属性へのアクセス権があれば、これを読み取ることができます。
- Default values: in the current implementation, only _Null_ is available as default value.

許諾の設定は一貫している必要があります。とくに:

- **update** and **drop** permissions also need **read** permission (but **create** does not need it)
- **promote** permission also need **describe** permission.

## 権限とロール

A **privilege** is the technical ability to run **actions** on **resources**, while a **role** is a privilege pusblished to be used by an administrator. 基本的にロールとは、ビジネスユーザーのプロフィールを定義するためにいくつかの権限を集めたものです。 たとえば、"manageInvoices" (請求書管理) は権限の例で、"secretary" (秘書) は ("manageInvoices" および他の権限を持つ) ロールの例です。

権限は、複数の "リソース+アクション" の組み合わせと関連付けることができます。 また、一つのアクションに複数の権限を関連付けることができます。 権限は、他の権限を含むことができます。

- You **create** privileges and/or roles in the `roles.json` file (see below). You **configure** their scope by assigning them to permission action(s) applied to resource(s).

- You **allow** privileges and/or roles to every user session using the [`.setPrivileges()`](../API/SessionClass.md#setprivileges) function of the `Session` class.

### 例題

セッションにおいて特定のロールを許可します:

```4d

exposed Function authenticate($identifier : Text; $password : Text)->$result : Text

    var $user : cs.UsersEntity

    Session.clearPrivileges()

    $result:="Your are authenticated as Guest"

    $user:=ds.Users.query("identifier = :1"; $identifier).first()

    If ($user#Null)
        If (Verify password hash($password; $user.password))
            Session.setPrivileges(New object("roles"; $user.role))
            $result:="Your are authenticated as "+$user.role
        End if
    End if


```

## `roles.json` file

The `roles.json` file describes the whole security settings for the project.

:::note

In a context other than _Qodly_ (cloud), you have to create this file at the following location: `<project folder>/Project/Sources/`. See [Architecture](../Project/architecture.md#sources) section.

:::

The `roles.json` file syntax is the following:

| プロパティ名      |                                                                                     |                                                                                   | タイプ                                | 必須 | 説明                                                                                           |
| ----------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------- | -- | -------------------------------------------------------------------------------------------- |
| privileges  |                                                                                     |                                                                                   | Collection of `privilege` objects  | X  | 定義された権限のリスト                                                                                  |
|             | \[].privilege  |                                                                                   | String                             |    | アクセス権の名称                                                                                     |
|             | \[].includes   |                                                                                   | String の Collection                |    | 内包する権限名のリスト                                                                                  |
| roles       |                                                                                     |                                                                                   | Collection of `role` objects       |    | 定義されたロールのリスト                                                                                 |
|             | \[].role       |                                                                                   | String                             |    | ロール名                                                                                         |
|             | \[].privileges |                                                                                   | String の Collection                |    | 内包する権限名のリスト                                                                                  |
| permissions |                                                                                     |                                                                                   | Object                             | X  | 設定されたパーミッションのリスト                                                                             |
|             | allowed                                                                             |                                                                                   | Collection of `permission` objects |    | 許可されたパーミッションのリスト                                                                             |
|             |                                                                                     | \[].applyTo  | String                             | X  | Targeted [resource](#resources) name                                                         |
|             |                                                                                     | \[].type     | String                             | X  | [Resource](#resources) type: "datastore", "dataclass", "attribute", "method" |
|             |                                                                                     | \[].read     | String の Collection                |    | 権限名のリスト                                                                                      |
|             |                                                                                     | \[].create   | String の Collection                |    | 権限名のリスト                                                                                      |
|             |                                                                                     | \[].update   | String の Collection                |    | 権限名のリスト                                                                                      |
|             |                                                                                     | \[].drop     | String の Collection                |    | 権限名のリスト                                                                                      |
|             |                                                                                     | \[].describe | String の Collection                |    | 権限名のリスト                                                                                      |
|             |                                                                                     | \[].execute  | String の Collection                |    | 権限名のリスト                                                                                      |
|             |                                                                                     | \[].promote  | String の Collection                |    | 権限名のリスト                                                                                      |
| forceLogin  |                                                                                     |                                                                                   | Boolean                            |    | True to enable the ["forceLogin" mode](../REST/authUsers.md#force-login-mode)                |

:::caution Reminder

- "WebAdmin" 権限名は、アプリケーションによって予約されています。 この名前をカスタムの権限名に使用することは推奨されません。
- `privileges` and `roles` names are case insensitive.

:::

### `Roles_Errors.json` file

The `roles.json` file is parsed by 4D at startup. このファイルへの変更を反映させるには、アプリケーションを再起動する必要があります。

In case of error(s) when parsing the `roles.json` file, 4D loads the project but disables the global access protection - this allows the developer to access the files and to fix the error. An error file named `Roles_Errors.json` is generated in the [`Logs` folder of the project](../Project/architecture.md#logs) and describes the error line(s). This file is automatically deleted when the `roles.json` file no longer contains error(s).

It is recommended to check at startup if a `Roles_Errors.json` file exists in the [Logs folder](../Project/architecture.md#logs), which means that there was a parsing error and that accesses will not limited. たとえば、次のように書くことができます:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // you can prevent the project to open
 ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")
 QUIT 4D
End if
```

## 運用のための権限の初期化

By default, if no specific parameters are defined in the `roles.json` file, accesses are not limited. これにより、アクセスを気にすることなくアプリケーションを開発することができます。

しかし、実際にアプリケーションを運用する前には、まずすべての権限をロックしてから、許可されたセッションに必要な部分のみを公開するよう、ファイルを構成することが推奨されます。 To lock all privileges on all resources, put the following `roles.json` file in your project folder (it includes examples of methods):

```json title="/Project/Sources/roles.json"
{
	"privileges": [
		{
			"privilege": "none",
			"includes": []
		}
	],

	"roles": [],

	"permissions": {
		"allowed": [{
			"applyTo": "ds",
			"type": "datastore",
			"read": [
				"none"
			],
			"create": [
				"none"
			],
			"update": [
				"none"
			],
			"drop": [
				"none"
			],
			"execute": [
				"none"
			],
			"describe": [
				"none"
			],
			"promote": [
				"none"
			]
		},
		{
			"applyTo": "ds.loginAs",
			"type": "method",
			"execute": [
					"guest"
				]
		},
		{
			"applyTo": "ds.hasPrivilege",
			"type": "method",
			"execute": [
					"guest"
				]
		},
		{
			"applyTo": "ds.clearPrivileges",
			"type": "method",
			"execute": [
					"guest"
				]
		},
		{
			"applyTo": "ds.isGuest",
			"type": "method",
			"execute": [
					"guest"
				]
		},
		{
			"applyTo": "ds.getPrivileges",
			"type": "method",
			"execute": [
					"guest"
				]
		},
		{
			"applyTo": "ds.setAllPrivileges",
			"type": "method",
			"execute": [
				"guest"
			]
	}

		]
	}
}
```
