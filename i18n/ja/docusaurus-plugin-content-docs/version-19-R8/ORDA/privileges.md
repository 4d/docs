---
id: privileges
title: 権限
---


データ保護と、承認ユーザーによる迅速かつ容易なデータアクセスを両立することは、Webアプリケーションにとって大きな課題です。 ORDA のセキュリティアーキテクチャーはデータストアの中心に実装されており、プロジェクト内のさまざまなリソース (データストア、データクラス、関数など) に対して、すべてのユーザーセッションに特定の権限を定義することができます。



## 概要

ORDA のセキュリティアーキテクチャーは、権限、許諾アクション (read、create など)、およびリソースの概念に基づいています。

ユーザーがログインすると、そのセッションには自動的に関連する権限がロードされます。 権限は、[`session.setPrivileges()`](../API/SessionClass.md#setprivileges) 関数を使用して、セッションに割り当てられます。

セッション内で送信されるユーザーリクエストは、プロジェクトの `roles.json` ファイルで定義された権限に対して評価されます。

権限外のアクションをユーザーが実行しようとすると、権限エラーが生成されるか、あるいは読み取り権限がない属性の場合にはそのデータは送信されません。

![](../assets/en/ORDA/privileges-schema.png)


## Resources

プロジェクト内の以下の公開リソースに対して、許諾アクションをそれぞれ割り当てることができます:

- データストア
- データクラス
- 属性 (計算属性およびエイリアス属性を含む)
- データモデルクラス関数

あるレベルで定義された許諾アクションは基本的に下位レベルに継承されますが、複数のレベルで設定することもできます:

- データストアレベルで定義された許諾アクションは、自動的にすべてのデータクラスに割り当てられます。
- データクラスレベルで定義された許諾アクションは、データストアの設定をオーバーライドします (あれば)。 By default, all attributes of the dataclass inherit from the dataclass permission(s).
- Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.


## Permission actions


Available actions are related to target resource.

| アクション        | datastore                                                                            | dataclass                                                                                                                                       | attribute                                                                                                             | data model function                                                                                                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **create**   | Create entity in any dataclass                                                       | Create entity in this dataclass                                                                                                                 | Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes). | n/a                                                                                                                                                                                                                                                                      |
| **read**     | Read attributes in any dataclass                                                     | Read attributes in this dataclass                                                                                                               | Read this attribute content                                                                                           | n/a                                                                                                                                                                                                                                                                      |
| **update**   | Update attributes in any dataclass.                                                  | Update attributes in this dataclass.                                                                                                            | Update this attribute content (ignored for alias attributes).                                                         | n/a                                                                                                                                                                                                                                                                      |
| **drop**     | Delete data in any dataclass.                                                        | Delete data in this dataclass.                                                                                                                  | Delete a not null value for this attribute (except for alias and computed attribute).                                 | n/a                                                                                                                                                                                                                                                                      |
| **execute**  | Execute any function on the project (datastore, dataclass, entity selection, entity) | Execute any function on the dataclass. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions | n/a                                                                                                                   | Execute this function                                                                                                                                                                                                                                                    |
| **describe** | All the dataclasses are available in the /rest/$catalog API                          | This dataclass is available in the /rest/$catalog API                                                                                           | This attribute is available in the /rest/$catalog API.                                                                | This dataclass function is available in the /rest/$catalog API                                                                                                                                                                                                           |
| **promote**  | n/a                                                                                  | n/a                                                                                                                                             | n/a                                                                                                                   | Associates a given privilege during the execution of the function. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session. |

**注:**

- An alias can be read even if there is no permissions on the attributes upon which it is built.
- A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built.
- Default values: in the current implementation, only *Null* is available as default value.

Setting permissions requires to be consistent, in particular:

- **update** and **drop** permissions also need **read** permission (but **create** does not need it)
- **promote** permission also need **describe** permission.



## Privileges and Roles

A **privilege** is the technical ability to run **actions** on **resources**, while a **role** is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).

A privilege or a role can be associated to several "action + resource" combinations. Several privileges can be associated to an action. A privilege can include other privileges.

- You **create** privileges and/or roles in the `roles.json` file (see below). You **configure** their scope by assigning them to permission action(s) applied to resource(s).

- You **allow** privileges and/or roles to every user session using the [`.setPrivileges()`](../API/SessionClass.md#setprivileges) function of the `Session` class.


### 例題

To allow a role in a session:

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

In a context other than *Qodly* (cloud), you have to create this file at the following location: `<project folder>/Project/Sources/`. See [Architecture](../Project/architecture.md#sources) section.

:::


The `roles.json` file syntax is the following:

| プロパティ名      |                 |               | タイプ                                | 必須 | 説明                                                                           |
| ----------- | --------------- | ------------- | ---------------------------------- | -- | ---------------------------------------------------------------------------- |
| privileges  |                 |               | Collection of `privilege` objects  | X  | List of defined privileges                                                   |
|             | \[].privilege  |               | String                             |    | アクセス権の名称                                                                     |
|             | \[].includes   |               | String の Collection                |    | List of included privilege names                                             |
| roles       |                 |               | Collection of `role` objects       |    | List of defined roles                                                        |
|             | \[].role       |               | String                             |    | Role name                                                                    |
|             | \[].privileges |               | String の Collection                |    | List of included privilege names                                             |
| permissions |                 |               | Object                             | X  | List of allowed actions                                                      |
|             | allowed         |               | Collection of `permission` objects |    | List of allowed permissions                                                  |
|             |                 | \[].applyTo  | String                             | X  | Targeted [resource](#resources) name                                         |
|             |                 | \[].type     | String                             | X  | [Resource](#resources) type: "datastore", "dataclass", "attribute", "method" |
|             |                 | \[].read     | String の Collection                |    | List of privileges                                                           |
|             |                 | \[].create   | String の Collection                |    | List of privileges                                                           |
|             |                 | \[].update   | String の Collection                |    | List of privileges                                                           |
|             |                 | \[].drop     | String の Collection                |    | List of privileges                                                           |
|             |                 | \[].describe | String の Collection                |    | List of privileges                                                           |
|             |                 | \[].execute  | String の Collection                |    | List of privileges                                                           |
|             |                 | \[].promote  | String の Collection                |    | List of privileges                                                           |


:::caution Reminder

- The "WebAdmin" privilege name is reserved to the application. It is not recommended to use this name for custom privileges.
- `privileges` and `roles` names are case insensitive.

:::

### `Roles_Errors.json` file

The `roles.json` file is parsed by 4D at startup. You need to restart the application if you want modifications in this file to be taken into account.

In case of error(s) when parsing the `roles.json` file, 4D loads the project but disables the global access protection - this allows the developer to access the files and to fix the error. An error file named `Roles_Errors.json` is generated in the [`Logs` folder of the project](../Project/architecture.md#logs) and describes the error line(s). This file is automatically deleted when the `roles.json` file no longer contains error(s).

It is recommended to check at startup if a `Roles_Errors.json` file exists in the [Logs folder](../Project/architecture.md#logs), which means that there was a parsing error and that accesses will not limited. You can write for example:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // you can prevent the project to open
 ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")
 QUIT 4D
End if 
```

## Initializing privileges for deployment

By default, if no specific parameters are defined in the `roles.json` file, accesses are not limited. This configuration allows you to develop the application without having to worry about accesses.

However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. To lock all privileges on all resources, put the following `roles.json` file in your project folder (it includes examples of methods):

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
