---
id: privileges
title: 権限
---


データ保護と、承認ユーザーによる迅速かつ容易なデータアクセスを両立することは、Webアプリケーションにとって大きな課題です。 ORDA のセキュリティアーキテクチャーはデータストアの中心に実装されており、プロジェクト内のさまざまなリソース (データストア、データクラス、関数など) に対して、すべてのユーザーセッションに特定の権限を定義することができます。



## 概要

ORDA のセキュリティアーキテクチャーは、権限、許諾アクション (read、create など)、およびリソースの概念に基づいています。

ユーザーがログインすると、そのセッションには自動的に関連する権限がロードされます。 権限は、[`session.setPrivileges()`](../API/SessionClass.md#setprivileges) 関数によって、セッションに割り当てられます。

セッション内で送信されるユーザーリクエストは、プロジェクトの `roles.json` ファイルで定義された権限に対して評価されます。

権限外のアクションをユーザーが実行しようとすると、権限エラーが生成されるか、あるいは読み取り権限がない属性の場合にはそのデータは送信されません。

![スキーマ](../assets/en/ORDA/privileges-schema.png)



## Resources

プロジェクト内の以下のリソースに対して、許諾アクションと権限名を割り当てることができます (この設定をパーミッションと呼びます):

- データストア
- データクラス
- 属性 (計算属性およびエイリアス属性を含む)
- データモデルクラス関数

セッションがリソースにアクセスするたびに (アクセス形式に関係なく)、4D はセッションの権限を確認し、許可されていない場合にはアクセスを拒否します。

あるレベルにおいて定義されたパーミッションは基本的に下位レベルに継承されますが、パーミッションは複数のレベルで設定することもできます:

- データストアレベルで定義されたパーミッションは、自動的にすべてのデータクラスに割り当てられます。
- データクラスレベルで定義されたパーミッションは、データストアの設定をオーバーライドします (あれば)。 デフォルトでは、データクラスのすべての属性が、データクラスのパーミッションを継承します。
- データクラスとは異なり、属性レベルで定義されたパーミッションは、親のデータクラスの設定をオーバーライドするのではなく、それに追加されます。 たとえば、同じ許諾アクションに対し、データクラスのレベルでは "general" という権限名を、データクラスの属性のレベルでは "detail" という権限名を割り当てた場合、その属性にアクセスするには、セッションに "general" と "detail" の両方の権限が設定されている必要があります。


## 許諾アクション


利用可能なアクションは対象となるリソースによります。

| アクション        | データストア                                              | dataclass                                                             | 属性                                                     | データモデル関数                                                                                                |
| ------------ | --------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| **create**   | 任意のデータクラスにおいてエンティティを作成                              | 当該データクラスにおいてエンティティを作成                                                 | 当該属性に許可されたデフォルト値とは異なる値を持つエンティティを作成 (エイリアス属性の場合は無視されます) | n/a                                                                                                     |
| **read**     | 任意のデータクラスにおいて属性を読み取り                                | 当該データクラスにおいて属性を読み取り                                                   | 当該属性を読み取り                                              | n/a                                                                                                     |
| **update**   | 任意のデータクラスにおいて属性を更新                                  | 当該データクラスにおいて属性を更新                                                     | 当該属性を更新 (エイリアス属性の場合は無視されます)                            | n/a                                                                                                     |
| **drop**     | 任意のデータクラスにおいてデータを削除                                 | 当該データクラスにおいてデータを削除                                                    | 当該属性の null でない値を削除 (エイリアス属性と計算属性を除く)                   | n/a                                                                                                     |
| **execute**  | プロジェクトの任意の関数を実行 (データストア、データクラス、エンティティセレクション、エンティティ) | データクラスの任意の関数を実行。 データクラス関数、エンティティ関数、エンティティセレクション関数は、データクラスの関数として扱われます。 | n/a                                                    | 当該関数を実行                                                                                                 |
| **describe** | /rest/$catalog API ですべてのデータクラスが利用可能                 | /rest/$catalog API で当該データクラスが利用可能                                     | /rest/$catalog API で当該属性が利用可能                          | /rest/$catalog API で当該関数が利用可能                                                                           |
| **promote**  | n/a                                                 | n/a                                                                   | n/a                                                    | 関数の実行に指定の権限を関連付けます。 権限は一時的にセッションに追加され、関数の実行終了とともに削除されます。 セキュリティ上、セッション全体ではなく、当該関数を実行するプロセスのみに権限が追加されます。 |

**注:**

- エイリアス属性の元である属性に対するアクセス権をセッションが持っていない場合でも、エイリアス属性へのアクセス権があれば、これを読み取ることができます。
- 計算属性を構成する属性に対するアクセス権をセッションが持っていない場合でも、計算属性へのアクセス権があれば、これを読み取ることができます。
- デフォルト値: 現在の実装では、*Null* のみデフォルト値として利用可能です。

許諾の設定は一貫している必要があります。とくに:

- **update** および **drop** アクションには **read** が必要です (**create** には不要です)
- **promote** アクションには **describe** が必要です



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


`roles.json` ファイルは、プロジェクトのセキュリティ設定の全体を記述します。

:::note

*Qodly* (クラウド) 以外のコンテキストでは、このファイルを次の場所に作成する必要があります: `<project folder>/Project/Sources/`。 [アーキテクチャー](../Project/architecture.md#sources) を参照ください。

:::


`roles.json` ファイルの構文は次のとおりです:

| プロパティ名      |                 |               | 型                          | 必須 | 説明                                                                 |
| ----------- | --------------- | ------------- | -------------------------- | -- | ------------------------------------------------------------------ |
| privileges  |                 |               | `privilege` オブジェクトのコレクション  | X  | 定義された権限のリスト                                                        |
|             | \[].privilege  |               | Text                       |    | アクセス権の名称                                                           |
|             | \[].includes   |               | String の Collection        |    | 内包する権限名のリスト                                                        |
| roles       |                 |               | `role` オブジェクトのコレクション       |    | 定義されたロールのリスト                                                       |
|             | \[].role       |               | Text                       |    | ロール名                                                               |
|             | \[].privileges |               | String の Collection        |    | 内包する権限名のリスト                                                        |
| permissions |                 |               | Object                     | X  | 設定されたパーミッションのリスト                                                   |
|             | allowed         |               | `permission` オブジェクトのコレクション |    | 許可されたパーミッションのリスト                                                   |
|             |                 | \[].applyTo  | Text                       | X  | 対象の [リソース](#リソース) 名                                                |
|             |                 | \[].type     | Text                       | X  | [リソース](#リソース) タイプ: "datastore", "dataclass", "attribute", "method" |
|             |                 | \[].read     | String の Collection        |    | 権限名のリスト                                                            |
|             |                 | \[].create   | String の Collection        |    | 権限名のリスト                                                            |
|             |                 | \[].update   | String の Collection        |    | 権限名のリスト                                                            |
|             |                 | \[].drop     | String の Collection        |    | 権限名のリスト                                                            |
|             |                 | \[].describe | String の Collection        |    | 権限名のリスト                                                            |
|             |                 | \[].execute  | String の Collection        |    | 権限名のリスト                                                            |
|             |                 | \[].promote  | String の Collection        |    | 権限名のリスト                                                            |


:::caution 留意事項

- "WebAdmin" 権限名は、アプリケーションによって予約されています。 この名前をカスタムの権限名に使用することは推奨されません。
- `privileges` および `roles` の名称においては文字の大小が区別されます。

:::

#### ORDA クラス関数の権限の設定

ORDA クラス関数の権限は、以下の形式で`applyTo` 要素に記述します:

```json
<データクラス名>.<関数名>
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

It means that you cannot use the same function names in the various ORDA classes (entity, entity selection, dataclass) if you want them to be assigned privileges. In this case, you need to use distinct function names. たとえば、`cs.CityEntity` および `cs.CitySelection` クラスの両方に "drop" 関数を作成するのであれば、`dropEntity()`、`dropSelection()` といった具合に別々の関数名を設定する必要があります。 You can then write in the "roles.json" file:

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


### `Roles_Errors.json` ファイル

`roles.json` ファイルは、4D 起動時に解析されます。 このファイルへの変更を反映させるには、アプリケーションを再起動する必要があります。

`roles.json` ファイルを解析する際にエラーが発生した場合、4D はプロジェクトを読み込みますが、グローバルアクセス保護は無効になります。これにより、開発者はエラー修正のためファイルにアクセスすることができます。 また、`Roles_Errors.json` という名前のエラーファイルが [プロジェクトの `Logs` フォルダー](../Project/architecture.md#logs) に生成され、エラー行が記述されています。 このファイルは、`roles.json` ファイルのエラーがすべて修正されると、自動的に削除されます。

`Roles_Errors.json` ファイルが [Logs フォルダー](../Project/architecture.md#logs) に存在するかどうか、起動時に確認することをお勧めします。存在する場合、解析エラーが発生し、アクセスが制限されないことを意味します。 たとえば、次のように書くことができます:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // プロジェクトが開かれるのを防ぐことができます
 ALERT("roles.json ファイルが不正なため、アプリケーションを終了します。")
 QUIT 4D
End if 
```

## 運用のための権限の初期化

`roles.json` ファイルに特定のパラメーターが定義されていない場合のデフォルトでは、アクセスは制限されません。 これにより、アクセスを気にすることなくアプリケーションを開発することができます。

しかし、実際にアプリケーションを運用する前には、まずすべての権限をロックしてから、許可されたセッションに必要な部分のみを公開するよう、ファイルを構成することが推奨されます。 すべてのリソースに対してすべての権限をロックするには、次の `roles.json` ファイルをプロジェクトフォルダーに置きます (メソッドの例が含まれています)。

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
