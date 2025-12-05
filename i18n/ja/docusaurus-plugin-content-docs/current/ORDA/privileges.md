---
id: privileges
title: ロールと権限
---

データ保護と、承認ユーザーによる迅速かつ容易なデータアクセスを両立することは、Webアプリケーションにとって大きな課題です。 ORDA のセキュリティアーキテクチャーはデータストアの中心に実装されており、プロジェクト内のさまざまなリソース (データストア、データクラス、関数など) に対して、すべての Web または REST ユーザーセッションに特定の権限を定義することができます。

## 概要

ORDA のセキュリティアーキテクチャーは、権限、許諾アクション (read、create など)、およびリソースの概念に基づいています。

Webユーザーまたは RESTユーザーがログインすると、そのセッションには自動的に関連する権限がロードされます。  権限は、[`session.setPrivileges()`](../API/SessionClass.md#setprivileges) 関数によって、セッションに割り当てられます。 権限は、[`session.setPrivileges()`](../API/SessionClass.md#setprivileges) 関数によって、セッションに割り当てられます。

セッション内で送信されるユーザーリクエストは、プロジェクトの `roles.json` ファイルで定義された権限に対して評価されます。

権限外のアクションをユーザーが実行しようとすると、権限エラーが生成されるか、あるいは読み取り権限がない属性の場合にはそのデータは送信されません。

![schema](../assets/en/ORDA/privileges-schema.png)

:::tip 関連したBlog 記事

[**Filter access to your data with a complete system of permissions**](https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/)

:::

## Resources

プロジェクト内の以下のリソースに対して、許諾アクションと権限名を割り当てることができます (この設定をパーミッションと呼びます):

- [データストア](../ORDA/dsMapping.md#データストア)
- [データクラス](../ORDA/dsMapping.md#データクラス)
- [属性](../ORDA/dsMapping.md#属性) ([計算属性](./ordaClasses.md#計算属性-1) および [エイリアス属性](./ordaClasses.md#エイリアス属性-1)を含む)
- [データモデルクラス](../ORDA/ordaClasses.md) の関数
- [シングルトン](../REST/$singleton.md) 関数

セッションがリソースにアクセスするたびに (アクセス形式に関係なく)、4D はセッションの権限を確認し、許可されていない場合にはアクセスを拒否します。

## 権限

A permission is the ability to do an action on a resource. For example, *execute the ds.myTable.myFunction()* represents a **permission**. Permissions are defined for the project in the [`roles.json`](#rolesjson-file) file. Each permission can be given to one or more [privileges](#privileges-and-roles).

When **no specific permission** has been defined for a resource, access to the resource may be automatically **unrestricted** or **restricted** depending on the [default mode defined for the project](#restriction-modes).

### 許諾アクション

利用可能なアクションは対象となるリソースによります。

| アクション       | データストア                                                                        | dataclass                                                             | 属性                                                                        | データモデル関数またはシングルトン関数                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **create**  | 任意のデータクラスにおいてエンティティを作成                                                        | 当該データクラスにおいてエンティティを作成                                                 | 当該属性に許可されたデフォルト値とは異なる値を持つエンティティを作成 (エイリアス属性の場合は無視されます) | n/a                                                                                                                                                                   |
| **read**    | 任意のデータクラスにおいて属性を読み取り                                                          | 当該データクラスにおいて属性を読み取り                                                   | 当該属性を読み取り                                                                 | n/a                                                                                                                                                                   |
| **update**  | 任意のデータクラスにおいて属性を更新                                                            | 当該データクラスにおいて属性を更新                                                     | 当該属性を更新 (エイリアス属性の場合は無視されます)                            | n/a                                                                                                                                                                   |
| **drop**    | 任意のデータクラスにおいてデータを削除                                                           | 当該データクラスにおいてデータを削除                                                    | 当該属性の null でない値を削除 (エイリアス属性と計算属性を除く)                   | n/a                                                                                                                                                                   |
| **execute** | プロジェクトの任意の関数を実行 (データストア、データクラス、エンティティセレクション、エンティティ、シングルトン) | データクラスの任意の関数を実行。 データクラス関数、エンティティ関数、エンティティセレクション関数は、データクラスの関数として扱われます。 | n/a                                                                       | 当該関数を実行                                                                                                                                                               |
| **promote** | n/a                                                                           | n/a                                                                   | n/a                                                                       | 関数の実行に指定の権限を関連付けます。 The privilege is temporary added and removed at the end of the function execution. セキュリティ上、セッション全体ではなく、当該関数を実行するプロセスのみに権限が追加されます。 |

:::note 注記

- An [alias](./ordaClasses.md#alias-attributes-1) can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias.
- A [computed attribute](./ordaClasses.md#computed-attributes-1) can be accessed even if there are no permissions on the attributes upon which it is built.
- シングルトンクラス (`singleton` 型) には許諾アクションを割り当てることができます。その場合、そのシングルトンクラスの公開関数すべて、および、シングルトン関数 (`singletonMethod` 型）に適用されます。
- You can set/remove the **promote** action dynamically to a web process using the [`promote()`](../API/SessionClass.md#promote) and [`demote()`](../API/SessionClass.md#demote) functions.
- デフォルト値: 現在の実装では、*Null* のみデフォルト値として利用可能です。
- REST の [強制ログインモード](../REST/authUsers.md#強制ログインモード) では、[`authentify()`関数](../REST/authUsers.md#function-authentify) は、権限の設定に関係なく常にゲストユーザーによって実行可能です。

:::

権限の設定には一貫性が必要です。特に、**update** および **drop** 権限は**read** 権限も必要とします(ただし**create** はそれを必要としません)。

### Inherited permissions

あるレベルにおいて定義されたパーミッションは基本的に下位レベルに継承されますが、パーミッションは複数のレベルで設定することもできます:

- データストアレベルで定義されたパーミッションは、自動的にすべてのデータクラスに割り当てられます。 データストアレベルで定義されたパーミッションは、自動的にすべてのデータクラスに割り当てられます。 データストアレベルで定義された*execute* 権限アクションは、[シングルトン](../REST/$singleton.md) 関数を含めてプロジェクトの全ての関数に対して適用されます。
- データクラスレベルで定義されたパーミッションは、データストアの設定をオーバーライドします (あれば)。 デフォルトでは、データクラスのすべての属性が、データクラスのパーミッションを継承します。
- データクラスとは異なり、属性レベルで定義されたパーミッションは、親のデータクラスの設定をオーバーライドするのではなく、それに追加されます。 たとえば、同じ許諾アクションに対し、データクラスのレベルでは "general" という権限名を、データクラスの属性のレベルでは "detail" という権限名を割り当てた場合、その属性にアクセスするには、セッションに "general" と "detail" の両方の権限が設定されている必要があります。

:::info

パーミッションは、データストアオブジェクトや関数へのアクセスを制御します。 特定の条件に基づいて読み取りデータをフィルタリングしたい場合は、[制限付エンティティセレクション](entities.md#制限付エンティティセレクション) の利用がより適切かもしれません。

:::

### ORDA クラス関数の権限の設定

When configuring permissions, ORDA class functions are declared in the `applyTo` element using the following syntax:

```json
<DataclassName>.<functionName>
```

For example, if you want to apply a permission to the following function:

```4d
// cs.CityEntity class
Class extends Entity
  Function getPopulation() : Integer
   ...
```

... 以下のように記述します:

```json
"applyTo":"City.getPopulation"
```

It means that you cannot use the same function names in the various ORDA classes (entity, entity selection, dataclass) if you want them to be assigned privileges. In this case, you need to use distinct function names. For example, if you have created a "drop" function in both `cs.CityEntity` and `cs.CitySelection` classes, you need to give them different names such as `dropEntity()` and `dropSelection()`. You can then write in the "roles.json" file:

```json
	"permissions": {
		"allowed": [
			{
				"applyTo": "City.dropEntity",
				"type": "method",
				"promote": [
					"name"
				]
			},
			{
				"applyTo": "City.dropSelection",
				"type": "method",
				"promote": [
					"name"
				]
			}
    ]
```

## 権限とロール

**権限** とは、**リソース** に対して **アクション** を実行する技術的な能力であり、**ロール** は、管理者が使用するために公開された権限のことです。 基本的にロールとは、ビジネスユーザーのプロフィールを定義するためにいくつかの権限を集めたものです。 たとえば、"manageInvoices" (請求書管理) は権限の例で、"secretary" (秘書) は ("manageInvoices" および他の権限を持つ) ロールの例です。

権限は、複数の "リソース+アクション" の組み合わせと関連付けることができます。 また、一つのアクションに複数の権限を関連付けることができます。 権限は、他の権限を含むことができます。

- 権限やロールの **作成** は `roles.json` ファイル内にておこないます (後述参照)。 アクセス権の範囲を **設定** するには、リソースに適用される許諾アクションに権限名を割り当てます。

- 各ユーザーセッションに権限やロールを **許可** するには、`Session` クラスの [`.setPrivileges()`](../API/SessionClass.md#setprivileges) 関数を使用します。

### 例題

セッションにおいて特定のロールを許可します:

```4d

exposed Function authenticate($identifier : Text; $password : Text)->$result : Text

    var $user : cs.UsersEntity

    Session.clearPrivileges()

    $result:="ゲストとしてログインしています"

    $user:=ds.Users.query("identifier = :1"; $identifier).first()

    If ($user#Null)
        If (Verify password hash($password; $user.password))
            Session.setPrivileges(New object("roles"; $user.role))
            $result:=$user.role+"としてログインしています"
        End if
    End if



```

## `roles.json` ファイル

The `roles.json` file describes the whole web security settings for the project. `roles.json` ファイルの構文は次のとおりです:

| プロパティ名              |                                                                                     |                                                                                  | 型                               | 必須 | 説明                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------- | -- | ------------------------------------------------------------------------------------------------------------------ |
| privileges          |                                                                                     |                                                                                  | `privilege` オブジェクトの Collection  | X  | 定義された権限のリスト                                                                                                        |
|                     | \[].privilege  |                                                                                  | Text                            |    | アクセス権の名称                                                                                                           |
|                     | \[].includes   |                                                                                  | String の Collection             |    | 内包する権限名のリスト                                                                                                        |
| roles               |                                                                                     |                                                                                  | `role` オブジェクトの Collection       |    | 定義されたロールのリスト                                                                                                       |
|                     | \[].role       |                                                                                  | Text                            |    | ロール名                                                                                                               |
|                     | \[].privileges |                                                                                  | String の Collection             |    | 内包する権限名のリスト                                                                                                        |
| permissions         |                                                                                     |                                                                                  | Object                          | X  | 設定されたパーミッションのリスト                                                                                                   |
|                     | allowed                                                                             |                                                                                  | `permission` オブジェクトの Collection |    | 許可されたパーミッションのリスト                                                                                                   |
|                     |                                                                                     | \[].applyTo | Text                            | X  | 対象の [リソース](#リソース) 名                                                                                                |
|                     |                                                                                     | \[].type    | Text                            | X  | [リソース](#リソース) タイプ: "datastore", "dataclass", "attribute", "method", "singletonMethod", "singleton" |
|                     |                                                                                     | \[].read    | String の Collection             |    | 権限名のリスト                                                                                                            |
|                     |                                                                                     | \[].create  | String の Collection             |    | 権限名のリスト                                                                                                            |
|                     |                                                                                     | \[].update  | String の Collection             |    | 権限名のリスト                                                                                                            |
|                     |                                                                                     | \[].drop    | String の Collection             |    | 権限名のリスト                                                                                                            |
|                     |                                                                                     | \[].execute | String の Collection             |    | 権限名のリスト                                                                                                            |
|                     |                                                                                     | \[].promote | String の Collection             |    | 権限名のリスト                                                                                                            |
| restrictedByDefault |                                                                                     |                                                                                  | Boolean                         |    | If true, access to resources without explicit permissions is denied                                                |
| forceLogin          |                                                                                     |                                                                                  | Boolean                         |    | If true, enables ["forceLogin" mode](../REST/authUsers.md#force-login-mode)                                        |

:::caution 注記

- "WebAdmin" 権限名は、アプリケーションによって予約されています。 この名前をカスタムの権限名に使用することは推奨されません。
- `privileges` and `roles` names are case-insensitive.

:::

### Default File Location and Content

When a new project is created, a default `roles.json` file is generated at:

```
<project folder>/Project/Sources/ 
```

[アーキテクチャー](../Project/architecture.md#sources) を参照ください。

Default content:

```json title="/Project/Sources/roles.json"

{
  "privileges": [
  ],
  "roles": [
  ],
  "permissions": {
    "allowed": [
      {
        "applyTo": "ds",
        "type": "datastore",
        "read": [],
        "create": [],
        "update": [],
        "drop": [],
        "execute": [],
        "promote": []
      }
    ]
  },
  "restrictedByDefault": false,
  "forceLogin": false
}
```

:::note 互換性

以前のリリースでは、`roles.json` ファイルはデフォルトで作成されませんでした。 4D 20 R6 以降、`roles.json`ファイルを含まない、または `"forceLogin": true` の設定が含まれていない既存のプロジェクトを開く場合、[設定ダイアログボックスの **Web機能** ページ](../settings/web.md#アクセス権) で **ds.authentify() 関数を通しての REST認証を有効化** ボタンが利用可能になります。 このボタンはセキュリティ設定を自動的にアップグレードします (コードを修正する必要があるかもしれません。[このブログ記事を参照ください](https://blog.4d.com/ja/force-login-becomes-default-for-all-rest-auth))。

:::

:::note Qodly Studio

In Qodly Studio for 4D, the login mode can be set using the [**Force login** option](https://developer.4d.com/qodly/4DQodlyPro/force-login) in the Roles and Privileges panel.

:::

## Restriction Modes

The `restrictedByDefault` property configures how every [resource](#resources) are accessed when [no specific permission is defined for it](#permission):

- **Unrestricted mode** (`restrictedByDefault`: **false**): Resources without defined permissions are accessible to all requests. This mode is suitable for development environments where access can be gradually restricted.
- **Restricted mode** (`restrictedByDefault`: **true**): Resources without defined permissions are blocked by default. This mode is recommended for production environments where access must be explicitly granted.

:::note 互換性

- When **creating a new project**, the `restrictedByDefault` property is set to **false** in the *roles.json* file (see below). Keep in mind that this configuration is tailored for quick start and smooth development. In production environment, [it is recommended to set the `restrictedByDefault` and `forceLogin` properties to **true**](#configuring-restrictedbydefault-and-forcelogin-properties).
- In **projects converted from previous releases**; when enabling access to Qodly Studio using the [One-click configuration dialog](https://developer.4d.com/qodly/4DQodlyPro/gettingStarted#one-click-configuration), the `restrictedByDefault` property is added with value **true** in the *roles.json* file.

:::

### Recommended Configuration

Depending on your environment, the recommended settings are:

- **Production**: Set both `restrictedByDefault` and [`forceLogin`](../REST/authUsers.md#force-login-mode) to **true**. This ensures maximum security by requiring user authentication and explicitly defined permissions for resource access.
- **Development**: Set both `restrictedByDefault` and [`forceLogin`](../REST/authUsers.md#force-login-mode) to **false**. This allows easier access during development and debugging, with the possibility to gradually apply restrictions.

### `Roles_Errors.json` ファイル

`roles.json` ファイルは、4D 起動時に解析されます。  このファイルへの変更を反映させるには、アプリケーションを再起動する必要があります。

`roles.json` ファイルを解析する際にエラーが発生した場合、4D はプロジェクトを読み込みますが、グローバルアクセス保護は無効になります。これにより、開発者はエラー修正のためファイルにアクセスすることができます。  また、`Roles_Errors.json` という名前のエラーファイルが [プロジェクトの `Logs` フォルダー](../Project/architecture.md#logs) に生成され、エラー行が記述されています。 このファイルは、`roles.json` ファイルのエラーがすべて修正されると、自動的に削除されます。

`Roles_Errors.json` ファイルが [Logs フォルダー](../Project/architecture.md#logs) に存在するかどうか、起動時に確認することをお勧めします。存在する場合、解析エラーが発生し、アクセスが制限されないことを意味します。  たとえば、次のように書くことができます:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // プロジェクトが開かれるのを防ぐことができます
 ALERT("roles.json ファイルが不正なため、アプリケーションを終了します。")
 QUIT 4D
End if

```

## 権限設定の例

```json title="/Project/Sources/roles.json"

{
	"forceLogin": true,
	"restrictedByDefault": true,
	"permissions": {
		"allowed": [
						{
				"applyTo": "People",
				"type": "dataclass",
				"read": [
					"viewPeople"
				]
			}
		]
	},
	"privileges": [
		{
			"privilege": "viewPeople",
			"includes": []
		}
	],
	"roles": []
}
```
