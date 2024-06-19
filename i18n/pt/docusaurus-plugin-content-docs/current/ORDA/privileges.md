---
id: privileges
title: Privilégios
---

Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all web or REST user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).

## Visão Geral

The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources.

When web users or REST users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the [`session.setPrivileges()`](../API/SessionClass.md#setprivileges) function.

Cada solicitud de usuario enviada dentro de la sesión se evalúa en función de los privilegios definidos en el archivo `roles.json` del proyecto.

If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent.

![schema](../assets/en/ORDA/privileges-schema.png)

## Resources

You can assign specific permission actions to the following exposed resources in your project:

- o armazenamento de dados
- uma classe de dados
- um atributo (inclusive calculado e aliases)
- uma função de classe de modelo de dados

A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:

- A permission action defined at the datastore level is automatically assigned to all dataclasses.
- Uma ação de permissão definida ao nível da classe de dados substitui a definição do armazenamento de dados (se existir). By default, all attributes of the dataclass inherit from the dataclass permission(s).
- Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.

:::info

Permissions control access to datastore objects. Si desea filtrar los datos leídos según algún criterio, puede considerar [restringir las selecciones de entidades](entities.md#restricting-entity-selections) que puede ser más apropiado en este caso.

:::

## Acções de autorização

As ações disponíveis estão relacionadas com o recurso alvo.

| Acções       | armazém de dados                                                                                                                                                    | dataclass                                                                                                                                                            | atributo                                                                                                                                                 | função de modelo de dados                                                                                                                                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **create**   | Criar entidade em qualquer classe de dados                                                                                                                          | Criar entidade nesta classe de dados                                                                                                                                 | Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes). | n/a                                                                                                                                                                                                                                                                                                                   |
| **read**     | Ler atributos em qualquer dataclass                                                                                                                                 | Ler atributos nesta classe de dados                                                                                                                                  | Leia o conteúdo desse atributo                                                                                                                           | n/a                                                                                                                                                                                                                                                                                                                   |
| **update**   | Atualizar atributos em qualquer classe de dados.                                                                                                    | Atualiza os atributos nesta classe de dados.                                                                                                         | Atualiza o conteúdo deste atributo (ignorado para atributos alias).                                                   | n/a                                                                                                                                                                                                                                                                                                                   |
| **drop**     | Eliminar dados em qualquer classe de dados.                                                                                                         | Eliminar dados nesta classe de dados.                                                                                                                | Delete a not null value for this attribute (except for alias and computed attribute).                                 | n/a                                                                                                                                                                                                                                                                                                                   |
| **execute**  | Execute any function on the project (datastore (except `authentify()`, see Notes below), dataclass, entity selection, entity) | Executa qualquer função na classe de dados. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions | n/a                                                                                                                                                      | Executar esta função                                                                                                                                                                                                                                                                                                  |
| **describe** | Todas as classes de dados estão disponíveis na /rest/$catalog API                                                                                                   | Esta dataclass está disponível na API /rest/$catalog                                                                                                                 | Esse atributo está disponível na API /rest/$catalog.                                                                                     | Esta função de classe de dados está disponível na API /rest/$catalog                                                                                                                                                                                                                                                  |
| **promote**  | n/a                                                                                                                                                                 | n/a                                                                                                                                                                  | n/a                                                                                                                                                      | Associa um determinado privilégio durante a execução da função. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session. |

**Notas:**

- An alias can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias.
- A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built.
- Valores por defecto: en la implementación actual, solo _Null_ está disponible como valor por defecto.
- In REST [force login mode](../REST/authUsers.md/#force-login-mode), the [`authentify()` function](../REST/authUsers.md#function-authentify) is always executable by guest users, even if there is no specific **execute** permission on it for the datastore.

A definição das permissões deve ser coerente, nomeadamente:

- los permisos **update** y **drop** también necesitan el permiso **read** (pero **create** no lo necesita)
- el permiso **promote** también necesita el permiso **describe**.

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

:::note

En un contexto que no sea _Qodly_ (nube), debe crear este archivo en la siguiente ubicación: `<project folder>/Project/Sources/`. Ver la sección [Arquitectura](../Project/architecture.md#sources).

:::

La sintaxis del archivo `roles.json` es la siguiente:

| Nome da propriedade |                                                                                     |                                                                                   | Tipo                              | Obrigatório | Descrição                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| privileges          |                                                                                     |                                                                                   | Colección de objetos `privilege`  | X           | Lista de privilégios definidos                                                                 |
|                     | \[].privilege  |                                                                                   | String                            |             | Nome do privilégio                                                                             |
|                     | \[].includes   |                                                                                   | Coleção de strings                |             | Lista de nomes de privilégios incluídos                                                        |
| roles               |                                                                                     |                                                                                   | Colección de objetos `role`       |             | Lista de roles definidos                                                                       |
|                     | \[].role       |                                                                                   | String                            |             | Nome da role                                                                                   |
|                     | \[].privileges |                                                                                   | Coleção de strings                |             | Lista de nomes de privilégios incluídos                                                        |
| permissions         |                                                                                     |                                                                                   | Object                            | X           | Lista de acções permitidas                                                                     |
|                     | allowed                                                                             |                                                                                   | Colección de objetos `permission` |             | Lista de permissões permitidas                                                                 |
|                     |                                                                                     | \[].applyTo  | String                            | X           | Targeted [resource](#resources) name                                                           |
|                     |                                                                                     | \[].type     | String                            | X           | tipo de [Recurso](#resources): "datastore", "dataclass", "attribute", "method" |
|                     |                                                                                     | \[].read     | Coleção de strings                |             | Lista de privilégios                                                                           |
|                     |                                                                                     | \[].create   | Coleção de strings                |             | Lista de privilégios                                                                           |
|                     |                                                                                     | \[].update   | Coleção de strings                |             | Lista de privilégios                                                                           |
|                     |                                                                                     | \[].drop     | Coleção de strings                |             | Lista de privilégios                                                                           |
|                     |                                                                                     | \[].describe | Coleção de strings                |             | Lista de privilégios                                                                           |
|                     |                                                                                     | \[].execute  | Coleção de strings                |             | Lista de privilégios                                                                           |
|                     |                                                                                     | \[].promote  | Coleção de strings                |             | Lista de privilégios                                                                           |
| forceLogin          |                                                                                     |                                                                                   | Parâmetros                        |             | True para habilitar el [modo "forceLogin"](../REST/authUsers.md#force-login-mode)              |

:::caution Reminder

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

## Inicialização de privilégios para implantação

Por defecto, si no se definen parámetros específicos en el archivo `roles.json`, los accesos no están limitados. This configuration allows you to develop the application without having to worry about accesses.

However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. Para bloquear todos los privilegios en todos los recursos, coloque el siguiente archivo `roles.json` en la carpeta de su proyecto (incluye ejemplos de métodos):

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
