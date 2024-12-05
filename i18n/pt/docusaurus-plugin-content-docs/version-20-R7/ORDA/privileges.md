---
id: privileges
title: Privilégios
---

Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. A arquitetura de segurança ORDA é implementada no cerne do seu datastore e permite que você defina privilégios específicos para todas as sessões de usuário da web ou REST para os vários recursos no seu projeto (datastore, dataclasses, funções, etc.).

## Visão Geral

The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources.

Quando os usuários da web ou os usuários do REST fazem login, sua sessão é automaticamente carregada com a(s) privilégio(s) associado(s). Os privilégios são atribuídos à sessão usando a função [`session.setPrivileges()`](../API/SessionClass.md#setprivileges).

Cada solicitação de usuário enviada dentro da sessão é avaliada em relação aos privilégios definidos no arquivo `roles.json` do projeto.

If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent.

![schema](../assets/en/ORDA/privileges-schema.png)

### Veja também

Para obter uma visão detalhada de toda a arquitetura de permissões, por favor leia o post do blog [**Filtre o acesso aos seus dados com um sistema completo de permissões**](https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/).

## Resources

You can assign specific permission actions to the following resources in your project:

- o armazenamento de dados
- uma classe de dados
- um atributo (inclusive calculado e aliases)
- uma função de classe de modelo de dados
- uma função [singleton](../REST/$singleton.md)

Each time a resource is accessed within a session (whatever the way it is accessed), 4D checks that the session has the appropriate permissions, and rejects the access if it is not authorized.

A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:

- A permission action defined at the datastore level is automatically assigned to all dataclasses.
- Uma ação de permissão definida ao nível da classe de dados substitui a definição do armazenamento de dados (se existir). By default, all attributes of the dataclass inherit from the dataclass permission(s).
- Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.

:::info

Permissões controlam o acesso a objetos ou funções de armazenamento de dados. Se você deseja filtrar os dados lidos de acordo com alguns critérios, você pode considerar [restringir as seleções de entidades](entities.md#restricting-entity-selections) que pode ser mais apropriado neste caso.

:::

## Acções de autorização

As ações disponíveis estão relacionadas com o recurso alvo.

| Acções       | armazém de dados                                                                                        | dataclass                                                                                                                                                            | atributo                                                                                                                                                 | função de modelo de dados ou função singleton                                                                                                                                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **create**   | Criar entidade em qualquer classe de dados                                                              | Criar entidade nesta classe de dados                                                                                                                                 | Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes). | n/a                                                                                                                                                                                                                                                                                                                   |
| **read**     | Ler atributos em qualquer dataclass                                                                     | Ler atributos nesta classe de dados                                                                                                                                  | Leia o conteúdo desse atributo                                                                                                                           | n/a                                                                                                                                                                                                                                                                                                                   |
| **update**   | Atualizar atributos em qualquer classe de dados.                                        | Atualiza os atributos nesta classe de dados.                                                                                                         | Atualiza o conteúdo deste atributo (ignorado para atributos alias).                                                   | n/a                                                                                                                                                                                                                                                                                                                   |
| **drop**     | Eliminar dados em qualquer classe de dados.                                             | Eliminar dados nesta classe de dados.                                                                                                                | Delete a not null value for this attribute (except for alias and computed attribute).                                 | n/a                                                                                                                                                                                                                                                                                                                   |
| **execute**  | Execute any function on the project (datastore, dataclass, entity selection, entity) | Executa qualquer função na classe de dados. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions | n/a                                                                                                                                                      | Executar esta função                                                                                                                                                                                                                                                                                                  |
| **describe** | Todas as classes de dados estão disponíveis na /rest/$catalog API                                       | Esta dataclass está disponível na API /rest/$catalog                                                                                                                 | Esse atributo está disponível na API /rest/$catalog.                                                                                     | Esta função de dataclass está disponível na API /rest/$catalog (não disponível com singletons)                                                                                                                                                                                                     |
| **promote**  | n/a                                                                                                     | n/a                                                                                                                                                                  | n/a                                                                                                                                                      | Associa um determinado privilégio durante a execução da função. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session. |

**Notas:**

- An alias can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias.
- A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built.
- Você pode atribuir uma ação de permissão a uma classe de singleton (tipo `singleton`), nesse caso ele será aplicado a todas as suas funções expostas, ou a uma função de singleton (tipo `singletonMethod`).
- Valores padrão: na implementação atual, apenas *Null* está disponível como valor padrão.
- No REST [modo de login](../REST/authUsers.md/#force-login-mode), a [função `authentify()`](../REST/authUsers.md#function-authentify) é sempre executável por usuários convidados, independentemente da configuração das permissões.

A definição das permissões deve ser coerente, nomeadamente:

- Permissões de **atualização** e **drop** também precisam da permissão **read** (mas **create** não precisa dela)
- Para funções do modelo de dados, permissão de **promoção** também precisa de permissão **descrever**.

## Privilégios e roles

Um **privilégio** é a habilidade técnica de executar **ações** em **recursos**, enquanto um **cargo** é um privilégio posto de uso por um administrador. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).

A privilege or a role can be associated to several "action + resource" combinations. Podem ser associados vários privilégios a uma ação. Um privilégio pode incluir outros privilégios.

- Você cria **privilégios** e/ou funções no arquivo `roles.json` (veja abaixo). Você **configurou** o escopo dele, atribuindo-lhes a ação de permissão aplicada aos recursos.

- Você **permite** privilégios e/ou funções para cada sessão do usuário usando a função [`.setPrivileges()`](../API/SessionClass.md#setprivileges) da classe `Session`.

### Exemplo

Para permitir uma função em uma sessão:

```4d

exposed Function authenticate($identifier : Text; $password : Text)->$result : Text

    var $user : cs.UsersEntity

    Session.clearPrivileges()

    $result:="Você está autenticado como Convidado"

    $user:=ds.Users.query("identifier = :1"; $identifier).first()

    If ($user#Null)
        If (Verify password hash($password; $user.password))
            Session.setPrivileges(New object("roles"; $user.role))
            $result:="Você está autenticado como "+$user.role
        End if
    End if


```

## arquivo `roles.json`

O arquivo `roles.json` descreve todas as configurações de segurança do projeto.

### Arquivo padrão

Quando você cria um projeto, um arquivo `roles.json` padrão é criado no seguinte local: `<project folder>/Project/Sources/` (consulte a seção [Arquitetura](../Project/architecture.md#sources)).

O arquivo padrão tem o seguinte conteúdo:

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

Para um nível máximo de segurança, o privilégio "none" é atribuído a todas as permissões no datastore, assim o acesso aos dados no objeto `ds` inteiro é desabilitado por padrão. É recomendado não modificar ou usar esse privilégio de bloqueio, mas adicionar permissões específicas a cada recurso que você deseja disponibilizar para solicitações da web ou REST (veja o exemplo abaixo).

:::caution

Quando nenhum parâmetro específico é definido no arquivo `roles.json`, os acessos não são limitados. Esta configuração permite que você desenvolva a aplicação sem se preocupar com acessos, mas não é recomendada em ambiente de produção.

:::

:::note Compatibidade

Em versões anteriores, o arquivo `roles.json` não foi criado por padrão. A partir de 4D 20 R6, ao abrir um projeto existente que não contém um `cargos. arquivo son` ou as configurações `"forceLogin": true`, a **Ativar autenticação REST através de d. Função uthentify()** está disponível na página [**Recursos Web** da caixa de diálogo Configurações](../settings/web.md#access). Este botão atualiza automaticamente suas configurações de segurança (você pode ter que modificar seu código, [veja este post de blog](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/)).
:::

:::note Qodly Studio

No Qodly Studio para 4D, o modo pode ser definido usando a opção [**Forçar login**](../WebServer/qodly-studio.md#force-login) no painel de Privilégios.

:::

### Sintaxe

A sintaxe do arquivo `roles.json` é a seguinte:

| Nome da propriedade |                                                                                     |                                                                                   | Tipo                               | Obrigatório | Descrição                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| privileges          |                                                                                     |                                                                                   | Coleção de objetos de 'privilégio' | X           | Lista de privilégios definidos                                                                                               |
|                     | \[].privilege  |                                                                                   | Text                               |             | Nome do privilégio                                                                                                           |
|                     | \[].includes   |                                                                                   | Coleção de strings                 |             | Lista de nomes de privilégios incluídos                                                                                      |
| roles               |                                                                                     |                                                                                   | Coleção de objetos `papel`         |             | Lista de roles definidos                                                                                                     |
|                     | \[].role       |                                                                                   | Text                               |             | Nome da role                                                                                                                 |
|                     | \[].privileges |                                                                                   | Coleção de strings                 |             | Lista de nomes de privilégios incluídos                                                                                      |
| permissions         |                                                                                     |                                                                                   | Object                             | X           | Lista de acções permitidas                                                                                                   |
|                     | allowed                                                                             |                                                                                   | Colección de objetos `permission`  |             | Lista de permissões permitidas                                                                                               |
|                     |                                                                                     | \[].applyTo  | Text                               | X           | Targeted [resource](#resources) name                                                                                         |
|                     |                                                                                     | \[].type     | Text                               | X           | [Resource](#resources) type: "datastore", "dataclass", "attribute", "method", "singletonMethod", "singleton" |
|                     |                                                                                     | \[].read     | Coleção de strings                 |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].create   | Coleção de strings                 |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].update   | Coleção de strings                 |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].drop     | Coleção de strings                 |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].describe | Coleção de strings                 |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].execute  | Coleção de strings                 |             | Lista de privilégios                                                                                                         |
|                     |                                                                                     | \[].promote  | Coleção de strings                 |             | Lista de privilégios                                                                                                         |
| forceLogin          |                                                                                     |                                                                                   | Parâmetros                         |             | True para habilitar el [modo "forceLogin"](../REST/authUsers.md#force-login-mode)                                            |

:::caution Lembrete

- O nome do privilégio "WebAdmin" está reservado à aplicação. Não se recomenda a utilização deste nome para privilégios personalizados.
- Os nomes de `privilégios` e `cargos` são insensíveis a maiúsculas e minúsculas.

:::

### Arquivo `Roles_Errors.json`

O arquivo `roles.json` é analisado pelo 4D na inicialização. You need to restart the application if you want modifications in this file to be taken into account.

Em caso de erro(s) ao analisar o arquivo `roles.json`, o 4D carrega o projeto, mas desabilita a proteção de acesso global - isso permite ao desenvolvedor acessar os arquivos e corrigir o erro. Um arquivo de erro chamado `Roles_Errors.json` é gerado na pasta [`Logs` do projeto](../Project/architecture.md#logs) e descreve a(s) linha(s) de erro. Este arquivo é automaticamente excluído quando o arquivo `roles.json` não contém mais erro(s).

Se recomienda comprobar al inicio si existe un archivo `Roles_Errors.json` en la carpeta [Logs](../Project/architecture.md#logs), lo que significa que se ha producido un error de análisis y que los accesos no estarán limitados. Pode escrever, por exemplo:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
Se (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Senão // você pode impedir o projeto de abrir
 ALERT("Os papéis. arquivo filho está malformado ou contém inconsistências, o aplicativo será encerrado.")
 QUIT 4D
Finalizado, se
```

## Exemplo de configuração de privilégios

A boa prática é manter todo o acesso aos dados bloqueado por padrão graças ao privilégio "none" e configurar o arquivo `roles.json` para abrir apenas partes controladas para sessões autorizadas. Por exemplo, para permitir alguns acessos às sessões de convidados:

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
