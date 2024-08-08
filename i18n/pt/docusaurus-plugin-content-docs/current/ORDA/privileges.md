---
id: privileges
title: Privilégios
---

Proteger dados enquanto permitir acesso rápido e fácil para usuários autorizados é um desafio importante para aplicações web. A arquitetura de segurança ORDA é implementada no cerne do seu datastore e permite que você defina privilégios específicos para todas as sessões de usuário da web ou REST para os vários recursos no seu projeto (datastore, dataclasses, funções, etc.).

## Visão Geral

A arquitetura de segurança da ORDA é baseada nos conceitos de privilégios, ações de permissão (ler, criar, etc.) e recursos.

Quando os usuários da web ou os usuários do REST fazem login, sua sessão é automaticamente carregada com a(s) privilégio(s) associado(s). Os privilégios são atribuídos à sessão usando a função [`session.setPrivileges()`](../API/SessionClass.md#setprivileges).

Cada solicitação de usuário enviada dentro da sessão é avaliada em relação aos privilégios definidos no arquivo `roles.json` do projeto.

Se um usuário tentar executar uma ação e não tiver os direitos de acesso adequados, um erro de privilégio é gerado ou, no caso de falta de permissão de leitura nos atributos, eles não são enviados.

![schema](../assets/en/ORDA/privileges-schema.png)

### Veja também

Para obter uma visão detalhada de toda a arquitetura de permissões, por favor leia o post do blog [**Filtre o acesso aos seus dados com um sistema completo de permissões**](https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/).

## Resources

Você pode atribuir ações de permissão específicas aos seguintes recursos expostos em seu projeto:

- o armazenamento de dados
- uma classe de dados
- um atributo (inclusive calculado e aliases)
- uma função de classe de modelo de dados
- uma função [singleton](../REST/$singleton.md)

Uma ação de permissão definida em um determinado nível é herdada por padrão em níveis inferiores, mas várias permissões podem ser configuradas:

- Uma ação de permissão definida no nível do datastore é automaticamente atribuída a todas as dataclasses.
- Uma ação de permissão definida ao nível da classe de dados substitui a definição do armazenamento de dados (se existir). Por padrão, todos os atributos do dataclass herdam das permissões de banco de dados.
- Ao contrário das permissões da classe de dados, uma ação de permissão definida no nível do atributo não substitui a(s) permissão(ões) pai da classe de dados, mas é adicionada a ela. Por exemplo, se você atribuiu o privilégio "geral" a uma classe de dados e o privilégio "detalhe" a um atributo da classe de dados, ambos os privilégios "geral" e "detalhe" devem ser definidos na sessão para acessar o atributo.

:::info

Permissões controlam o acesso a objetos ou funções de armazenamento de dados. Se você deseja filtrar os dados lidos de acordo com alguns critérios, você pode considerar [restringir as seleções de entidades](entities.md#restricting-entity-selections) que pode ser mais apropriado neste caso.

:::

## Acções de autorização

As ações disponíveis estão relacionadas com o recurso alvo.

| Acções       | armazém de dados                                                                                             | dataclass                                                                                                                                                                                    | atributo                                                                                                                                                      | função de modelo de dados ou função singleton                                                                                                                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **create**   | Criar entidade em qualquer classe de dados                                                                   | Criar entidade nesta classe de dados                                                                                                                                                         | Criar uma entidade com um valor diferente do valor padrão permitido para este atributo (ignorado para atributos de alias). | n/a                                                                                                                                                                                                                                                                                                              |
| **read**     | Ler atributos em qualquer dataclass                                                                          | Ler atributos nesta classe de dados                                                                                                                                                          | Leia o conteúdo desse atributo                                                                                                                                | n/a                                                                                                                                                                                                                                                                                                              |
| **update**   | Atualizar atributos em qualquer classe de dados.                                             | Atualiza os atributos nesta classe de dados.                                                                                                                                 | Atualiza o conteúdo deste atributo (ignorado para atributos alias).                                                        | n/a                                                                                                                                                                                                                                                                                                              |
| **drop**     | Eliminar dados em qualquer classe de dados.                                                  | Eliminar dados nesta classe de dados.                                                                                                                                        | Excluir um valor não nulo para este atributo (exceto para alias e atributo calculado).                                     | n/a                                                                                                                                                                                                                                                                                                              |
| **execute**  | Executar qualquer função no projeto (datastore, dataclass, seleção de entidade, entidade) | Executa qualquer função na classe de dados. Funções de Dataclass e funções de seleção de entidades, e funções de seleção de entidades são tratadas como funções de dataclass | n/a                                                                                                                                                           | Executar esta função                                                                                                                                                                                                                                                                                             |
| **describe** | Todas as classes de dados estão disponíveis na /rest/$catalog API                                            | Esta dataclass está disponível na API /rest/$catalog                                                                                                                                         | Esse atributo está disponível na API /rest/$catalog.                                                                                          | Esta função de dataclass está disponível na API /rest/$catalog (não disponível com singletons)                                                                                                                                                                                                |
| **promote**  | n/a                                                                                                          | n/a                                                                                                                                                                                          | n/a                                                                                                                                                           | Associa um determinado privilégio durante a execução da função. O privilégio é temporariamente adicionado à sessão e removido no final da execução da função. Por segurança, só o processo de execução da função é acrescentado o privilégio, não toda a sessão. |

**Notas:**

- Um apelido pode ser lido assim que os privilégios de sessão permitir o acesso ao apelido em si, Mesmo que os privilégios de sessão não permitam o acesso aos atributos que resolvem o apelido.
- Um atributo calculado pode ser acessado mesmo que não haja permissões sobre os atributos sobre os quais ele é construído.
- You can assign a permission action to a singleton class (`singleton` type), in which case it will be applied to all its exposed functions, or to a singleton function (`singletonMethod` type).
- Valores por defecto: en la implementación actual, solo _Null_ está disponible como valor por defecto.
- In REST [force login mode](../REST/authUsers.md/#force-login-mode), the [`authentify()` function](../REST/authUsers.md#function-authentify) is always executable by guest users, whatever the permissions configuration.

A definição das permissões deve ser coerente, nomeadamente:

- los permisos **update** y **drop** también necesitan el permiso **read** (pero **create** no lo necesita)
- For data model functions, **promote** permission also needs **describe** permission.

## Privilégios e roles

Un \*\*privilegio \*\* es la capacidad técnica de ejecutar \*\*acciones \*\* en \*\*recursos \*\*, mientras que un **rol** es un privilegio publicado para ser utilizado por un administrador. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).

A privilege or a role can be associated to several "action + resource" combinations. Podem ser associados vários privilégios a uma ação. Um privilégio pode incluir outros privilégios.

- Usted **crea** privilegios y/o roles en el archivo `roles.json` (ver abajo). **Configura** su alcance asignándolos a acción(es) de permiso aplicadas a recurso(s).

- You **allow** privileges and/or roles to every user session using the [`.setPrivileges()`](../API/SessionClass.md#setprivileges) function of the `Session` class.

### Exemplo

Para permitir uma função em uma sessão:

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

## archivo `roles.json`

El archivo `roles.json` describe todos los parámetros de seguridad del proyecto.

### Arquivo padrão

When you create a project, a default `roles.json` file is created at the following location: `<project folder>/Project/Sources/` (see [Architecture](../Project/architecture.md#sources) section).

The default file has the following contents:

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
        "allowed": [
            {
                "applyTo": "ds",
                "type": "datastore",
                "read": ["none"],
                "create": ["none"],
                "update": ["none"],
                "drop": ["none"],
                "describe": ["none"],
                "execute": ["none"],
                "promote": ["none"]                
            }
        ]
    },

    "forceLogin": true

}

```

For a highest level of security, the "none" privilege is assigned to all permissions in the datastore, thus data access on the whole `ds` object is disabled by default. It is recommended not to modified or use this locking privilege, but to add specific permissions to each resource you wish to make available from web or REST requests ([see example below](#example-of-privilege-configuration)).

:::caution

When no specific parameters are defined in the `roles.json` file, accesses are not limited. This configuration allows you to develop the application without having to worry about accesses, but is not recommended in production environment.

:::

:::note Compatibidade

In previous releases, the `roles.json` file was not created by default. As of 4D 20 R6, when opening an existing project that does not contain a `roles.json` file or the `"forceLogin": true` settings, the **Activate REST authentication through ds.authentify() function** button is available in the [**Web Features** page of the Settings dialog box](../settings/web.md#access). This button automatically upgrades your security settings (you may have to modify your code, [see this blog post](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/)).
:::

:::note Qodly Studio

In Qodly Studio for 4D, the mode can be set using the [**Force login** option](../WebServer/qodly-studio.md#force-login) in the Privileges panel.

:::

### Sintaxe

La sintaxis del archivo `roles.json` es la siguiente:

| Nome da propriedade |                                                                                     |                                                                                   | Tipo                              | Obrigatório | Descrição                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| privileges          |                                                                                     |                                                                                   | Colección de objetos `privilege`  | X           | Lista de privilégios definidos                                                                                               |
|                     | \[].privilege  |                                                                                   | String                            |             | Nome do privilégio                                                                                                           |
|                     | \[].includes   |                                                                                   | Coleção de strings                |             | Lista de nomes de privilégios incluídos                                                                                      |
| roles               |                                                                                     |                                                                                   | Colección de objetos `role`       |             | Lista de roles definidos                                                                                                     |
|                     | \[].role       |                                                                                   | String                            |             | Nome da role                                                                                                                 |
|                     | \[].privileges |                                                                                   | Coleção de strings                |             | Lista de nomes de privilégios incluídos                                                                                      |
| permissions         |                                                                                     |                                                                                   | Object                            | X           | Lista de acções permitidas                                                                                                   |
|                     | allowed                                                                             |                                                                                   | Colección de objetos `permission` |             | Lista de permissões permitidas                                                                                               |
|                     |                                                                                     | \[].applyTo  | String                            | X           | Targeted [resource](#resources) name                                                                                         |
|                     |                                                                                     | \[].type     | String                            | X           | [Resource](#resources) type: "datastore", "dataclass", "attribute", "method", "singletonMethod", "singleton" |
|                     |                                                                                     | \[].read     | Coleção de strings                |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].create   | Coleção de strings                |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].update   | Coleção de strings                |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].drop     | Coleção de strings                |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].describe | Coleção de strings                |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].execute  | Coleção de strings                |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].promote  | Coleção de strings                |             | Lista de privilégios                                                                                                         |
| forceLogin          |                                                                                     |                                                                                   | Parâmetros                        |             | True para habilitar el [modo "forceLogin"](../REST/authUsers.md#force-login-mode)                                            |

:::caution Lembrete

- O nome do privilégio "WebAdmin" está reservado à aplicação. Não se recomenda a utilização deste nome para privilégios personalizados.
- los nombres de `privileges` y `roles` son insensibles a mayúsculas y minúsculas.

:::

### Archivo `Roles_Errors.json`

El archivo `roles.json` es analizado por 4D al inicio. You need to restart the application if you want modifications in this file to be taken into account.

En caso de error(es) al analizar el archivo `roles.json`, 4D carga el proyecto pero desactiva la protección de acceso global - esto permite al desarrollador acceder a los archivos y solucionar el error. An error file named `Roles_Errors.json` is generated in the [`Logs` folder of the project](../Project/architecture.md#logs) and describes the error line(s). Este archivo se elimina automáticamente cuando el archivo `roles.json` deja de contener errores.

Se recomienda comprobar al inicio si existe un archivo `Roles_Errors.json` en la carpeta [Logs](../Project/architecture.md#logs), lo que significa que se ha producido un error de análisis y que los accesos no estarán limitados. Pode escrever, por exemplo:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // you can prevent the project to open
 ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")
 QUIT 4D
End if
```

## Example of privilege configuration

The good practice is to keep all data access locked by default thanks to the "none" privilege and to configure the `roles.json` file to only open controlled parts to authorized sessions. For example, to allow some accesses to guest sessions:

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
    "allowed": [
      {
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
      },
      {
        "applyTo": "mySingletonClass.createID",
        "type": "singletonMethod",
        "execute": [
          "guest"
        ]
      }
    ]
  },
  "forceLogin": true
}
```
