---
id: privileges
title: Privilégios
---


Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).



## Visão Geral

The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources.

When users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the [`session.setPrivileges()`](../API/SessionClass.md#setprivileges) function.

Every user request sent within the session is evaluated against privileges defined in the project's `roles.json` file.

If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent.

![esquema](../assets/en/ORDA/privileges-schema.png)



## Resources

You can assign specific permission actions to the following resources in your project:

- o armazenamento de dados
- uma classe de dados
- um atributo (inclusive calculado e aliases)
- uma função de classe de modelo de dados

Each time a resource is accessed within a session (whatever the way it is accessed), 4D checks that the session has the appropriate permissions, and rejects the access if it is not authorized.

A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:

- A permission action defined at the datastore level is automatically assigned to all dataclasses.
- Uma ação de permissão definida ao nível da classe de dados substitui a definição do armazenamento de dados (se existir). By default, all attributes of the dataclass inherit from the dataclass permission(s).
- Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.


## Acções de autorização


As ações disponíveis estão relacionadas com o recurso alvo.

| Acções       | armazém de dados                                                                     | dataclass                                                                                                                                            | atributo                                                                                                              | função de modelo de dados                                                                                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **create**   | Criar entidade em qualquer classe de dados                                           | Criar entidade nesta classe de dados                                                                                                                 | Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes). | n/a                                                                                                                                                                                                                                                                   |
| **read**     | Ler atributos em qualquer dataclass                                                  | Ler atributos nesta classe de dados                                                                                                                  | Leia o conteúdo desse atributo                                                                                        | n/a                                                                                                                                                                                                                                                                   |
| **update**   | Atualizar atributos em qualquer classe de dados.                                     | Atualiza os atributos nesta classe de dados.                                                                                                         | Atualiza o conteúdo deste atributo (ignorado para atributos alias).                                                   | n/a                                                                                                                                                                                                                                                                   |
| **drop**     | Eliminar dados em qualquer classe de dados.                                          | Eliminar dados nesta classe de dados.                                                                                                                | Delete a not null value for this attribute (except for alias and computed attribute).                                 | n/a                                                                                                                                                                                                                                                                   |
| **execute**  | Execute any function on the project (datastore, dataclass, entity selection, entity) | Executa qualquer função na classe de dados. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions | n/a                                                                                                                   | Executar esta função                                                                                                                                                                                                                                                  |
| **describe** | Todas as classes de dados estão disponíveis na /rest/$catalog API                    | Esta dataclass está disponível na API /rest/$catalog                                                                                                 | Esse atributo está disponível na API /rest/$catalog.                                                                  | Esta função de classe de dados está disponível na API /rest/$catalog                                                                                                                                                                                                  |
| **promote**  | n/a                                                                                  | n/a                                                                                                                                                  | n/a                                                                                                                   | Associa um determinado privilégio durante a execução da função. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session. |

**Notas:**

- An alias can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias.
- A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built.
- Default values: in the current implementation, only *Null* is available as default value.

A definição das permissões deve ser coerente, nomeadamente:

- **update** and **drop** permissions also need **read** permission (but **create** does not need it)
- **promote** permission also need **describe** permission.



## Privilégios e roles

A **privilege** is the technical ability to run **actions** on **resources**, while a **role** is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).

A privilege or a role can be associated to several "action + resource" combinations. Podem ser associados vários privilégios a uma ação. Um privilégio pode incluir outros privilégios.

- You **create** privileges and/or roles in the `roles.json` file (see below). You **configure** their scope by assigning them to permission action(s) applied to resource(s).

- You **allow** privileges and/or roles to every user session using the [`.setPrivileges()`](../API/SessionClass.md#setprivileges) function of the `Session` class.


### Exemplo

Para permitir uma função em uma sessão:

```4d

exposed Function authenticate($identifier : Text; $password : Text)->$result : Text

    var $user : cs. UsersEntity

    Session.clearPrivileges()

    $result:="Your are authenticated as Guest"

    $user:=ds. Users.query("identifier = :1"; $identifier).first()

    If ($user#Null)
        If (Verify password hash($password; $user.password))
            Session.setPrivileges(New object("roles"; $user.role))
            $result:="Your are authenticated as "+$user.role
        End if
    End if


```



## ficheiro `roles.json`


The `roles.json` file describes the whole security settings for the project.

:::note

In a context other than *Qodly* (cloud), you have to create this file at the following location: `<project folder>/Project/Sources/`. Ver a seção [Arquitetura](../Project/architecture.md#sources).

:::


A sintaxe do ficheiro `roles.json` é a seguinte:

| Nome da propriedade |                 |               | Tipo                             | Obrigatório | Descrição                                                                    |
| ------------------- | --------------- | ------------- | -------------------------------- | ----------- | ---------------------------------------------------------------------------- |
| privileges          |                 |               | Coleção de objectos `privilege`  | X           | Lista de privilégios definidos                                               |
|                     | \[].privilege  |               | Text                             |             | Nome do privilégio                                                           |
|                     | \[].includes   |               | Coleção de strings               |             | Lista de nomes de privilégios incluídos                                      |
| roles               |                 |               | Coleção de objetos `role`        |             | Lista de roles definidos                                                     |
|                     | \[].role       |               | Text                             |             | Nome da role                                                                 |
|                     | \[].privileges |               | Coleção de strings               |             | Lista de nomes de privilégios incluídos                                      |
| permissions         |                 |               | Object                           | X           | Lista de acções permitidas                                                   |
|                     | allowed         |               | Coleção de objectos `permission` |             | Lista de permissões permitidas                                               |
|                     |                 | \[].applyTo  | Text                             | X           | Nome do [recurso](#resources) alvo                                           |
|                     |                 | \[].type     | Text                             | X           | [Resource](#resources) type: "datastore", "dataclass", "attribute", "method" |
|                     |                 | \[].read     | Coleção de strings               |             | Lista de privilégios                                                         |
|                     |                 | \[].create   | Coleção de strings               |             | Lista de privilégios                                                         |
|                     |                 | \[].update   | Coleção de strings               |             | Lista de privilégios                                                         |
|                     |                 | \[].drop     | Coleção de strings               |             | Lista de privilégios                                                         |
|                     |                 | \[].describe | Coleção de strings               |             | Lista de privilégios                                                         |
|                     |                 | \[].execute  | Coleção de strings               |             | Lista de privilégios                                                         |
|                     |                 | \[].promote  | Coleção de strings               |             | Lista de privilégios                                                         |


:::caution Lembrete

- O nome do privilégio "WebAdmin" está reservado à aplicação. Não se recomenda a utilização deste nome para privilégios personalizados.
- `privileges` and `roles` names are case insensitive.

:::

### ficheiro `Roles_Errors.json`

O arquivo `roles.json` é analisado por 4D na inicialização. You need to restart the application if you want modifications in this file to be taken into account.

In case of error(s) when parsing the `roles.json` file, 4D loads the project but disables the global access protection - this allows the developer to access the files and to fix the error. An error file named `Roles_Errors.json` is generated in the [`Logs` folder of the project](../Project/architecture.md#logs) and describes the error line(s). This file is automatically deleted when the `roles.json` file no longer contains error(s).

It is recommended to check at startup if a `Roles_Errors.json` file exists in the [Logs folder](../Project/architecture.md#logs), which means that there was a parsing error and that accesses will not limited. Pode escrever, por exemplo:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // you can prevent the project to open
 ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")
 QUIT 4D
 End if 
```

## Inicialização de privilégios para implantação

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
