---
id: privileges
title: Roles y privilegios
---

Proteger los datos a la vez que se permite un acceso rápido y sencillo a los usuarios autorizados es un reto importante para las aplicaciones web. La arquitectura de seguridad ORDA se implementa en el corazón de su almacén de datos y le permite definir privilegios específicos a todas las sesiones usuario REST o web para los distintos recursos de su proyecto (datastore, dataclasses, funciones, etc.).

## Generalidades

La arquitectura de seguridad ORDA se basa en los conceptos de privilegios, acciones de permiso (read, create, etc.) y recursos.

Cuando los usuarios web o REST se registran, su sesión se carga automáticamente con los privilegios asociados. Los privilegios se asignan a la sesión mediante la función [`session.setPrivileges()`](../API/SessionClass.md#setprivileges).

Cada solicitud de usuario enviada dentro de la sesión se evalúa en función de los privilegios definidos en el archivo `roles.json` del proyecto.

Si un usuario intenta ejecutar una acción y no tiene los derechos de acceso adecuados, se genera un error de privilegio o, en el caso de que falte el permiso de Lectura en los atributos, no se envían.

![schema](../assets/en/ORDA/privileges-schema.png)

:::tip Entradas de blog relacionadas

[**Filter access to your data with a complete system of permissions**](https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/)

:::

## Resources

Puede asignar acciones de permiso específicas a los siguientes recursos en su proyecto:

- the [datastore](../ORDA/dsMapping.md#datastore)
- the [dataclasses](../ORDA/dsMapping.md#dataclass)
- [attributes](../ORDA/dsMapping.md#attribute) (including [computed](./ordaClasses.md#computed-attributes-1) and [alias](./ordaClasses.md#alias-attributes-1))
- functions of the [data model classes](../ORDA/ordaClasses.md)
- [singleton](../REST/$singleton.md) functions

Cada vez que se accede a un recurso dentro de una sesión (sin importar la forma en que se acceda), 4D verifica que la sesión tenga los permisos apropiados y rechaza el acceso si no está autorizado.

## Permissions

A permission is the ability to do an action on a resource. For example, *execute the ds.myTable.myFunction()* represents a **permission**. Permissions are defined for the project in the [`roles.json`](#rolesjson-file) file. Cada permiso se puede dar a uno o más [privilegios](#privileges-and-roles).

When **no specific permission** has been defined for a resource, access to the resource may be automatically **unrestricted** or **restricted** depending on the [default mode defined for the project](#restriction-modes).

### Acciones de autorización

Las acciones disponibles están relacionadas con el recurso de destino.

| Acciones    | Almacén de datos                                                                                                                       | dataclass                                                                                                                                                                                | atributo                                                                                                                                                       | función del modelo de datos o función singleton                                                                                                                                                                                                                                                                   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **create**  | Crear entidad en cualquier clase de datos                                                                                              | Crear entidad en esta clase de datos                                                                                                                                                     | Crea una entidad con un valor diferente del valor por defecto permitido para este atributo (ignorado para atributos alias). | n/a                                                                                                                                                                                                                                                                                                               |
| **read**    | Leer atributos en cualquier dataclass                                                                                                  | Leer atributos en esta clase de datos                                                                                                                                                    | Lea el contenido de este atributo                                                                                                                              | n/a                                                                                                                                                                                                                                                                                                               |
| **update**  | Actualizar atributos en cualquier clase de datos.                                                                      | Actualiza los atributos de esta clase de datos.                                                                                                                          | Actualiza el contenido de este atributo (ignorado para atributos alias).                                                    | n/a                                                                                                                                                                                                                                                                                                               |
| **drop**    | Borrar datos en cualquier clase de datos.                                                                              | Borrar los datos de esta clase de datos.                                                                                                                                 | Eliminar un valor no nulo para este atributo (excepto para alias y atributo calculado).                                     | n/a                                                                                                                                                                                                                                                                                                               |
| **execute** | Ejecutar toda función en el proyecto (almacén de datos, clase de datos, selección de entidades, entidad, singleton) | Ejecuta cualquier función en la clase de datos. Las funciones dataclass, las funciones entidad y las funciones selección de entidades se tratan como funciones dataclass | n/a                                                                                                                                                            | Ejecutar esta función                                                                                                                                                                                                                                                                                             |
| **promote** | n/a                                                                                                                                    | n/a                                                                                                                                                                                      | n/a                                                                                                                                                            | Asocia un privilegio determinado durante la ejecución de la función. El privilegio se añade temporalmente y se elimina al final de la ejecución de la función. Por seguridad, sólo se añade el privilegio al proceso que ejecuta la función, no a toda la sesión. |

:::note Notas

- Una [alias](./ordaClasses.md#alias-attributes-1) puede leerse tan pronto como los privilegios de sesión permitan el acceso al alias en sí. incluso si los privilegios de sesión no permiten el acceso a los atributos resolviendo el alias.
- Se puede acceder a un [atributo calculado](./ordaClasses.md#computed-attributes-1) incluso si no hay permisos en los atributos sobre los que se construye.
- Puede asignar una acción de permiso a una clase singleton (tipo `singleton`), en cuyo caso se aplicará a todas sus funciones expuestas, o a una función singleton (tipo `singletonMethod`).
- Puede definir/eliminar la acción **promote** dinámicamente a un proceso web utilizando las funciones [`promote()`](../API/SessionClass.md#promote) y [`demote()`](../API/SessionClass.md#demote).
- Valores por defecto: en la implementación actual, solo *Null* está disponible como valor por defecto.
- En modo REST [force login](../REST/authUsers.md#force-login-mode), la función [`authentify()`](../REST/authUsers.md#function-authentify) es siempre ejecutable por usuarios invitados, cualquiera que sea la configuración de permisos.

:::

Los parámetros de permisos requieren ser consistentes, en particular los permisos **update** y **drop** también necesitan el permiso **read** (pero **create** no lo necesita).

### Permisos heredados

Una acción de permiso definida en un nivel determinado se hereda por defecto en los niveles inferiores, pero se pueden establecer varios permisos:

- Una acción de permiso definida a nivel de almacén de datos se asigna automáticamente a todas las clases de datos. La acción de permiso *execute* definida en el nivel del datastore se aplica a todas las funciones del proyecto, incluyendo todas las funciones [singleton](../REST/$singleton.md).
- Una acción de permiso definida a nivel de clase de datos anula la configuración del almacén de datos (si existe). Por defecto, todos los atributos de la clase de datos heredan de los permisos de la clase de datos.
- A diferencia de los permisos de clase de datos, una acción de permiso definida a nivel de atributo no anula los permisos de clase de datos padre, sino que se añade a ellos. Por ejemplo, si asignó el privilegio "general" a una clase de datos y el privilegio "detail" a un atributo de la clase de datos, tanto el privilegio "general" como el privilegio "detail" deben definirse en la sesión para acceder al atributo.

:::info

Los permisos controlan el acceso a los objetos o funciones del almacén de datos. Si desea filtrar los datos leídos según algún criterio, puede considerar [restringir las selecciones de entidades](entities.md#restricting-entity-selections) que puede ser más apropiado en este caso.

:::

### Asignación de permisos a las funciones de la clase ORDA

Al configurar los permisos, las funciones de clase ORDA se declaran en el elemento `applyTo` usando la siguiente sintaxis:

```json
<DataclassName>.<functionName>
```

Por ejemplo, si desea aplicar un permiso a la siguiente función:

```4d
// cs.CityEntity class
Class extends Entity
  Function getPopulation() : Integer
   ...
```

... tiene que escribir:

```json
"applyTo":"City.getPopulation"
```

Significa que no puede utilizar los mismos nombres de función en las distintas clases ORDA (entidad, selección de entidad, dataclass) si desea que se les asignen privilegios. En este caso, debe utilizar nombres de función distintos. Por ejemplo, si has creado una función "drop" en ambas clases `cs.CityEntity` y `cs.CitySelection`, necesita darles nombres diferentes como `dropEntity()` y `dropSelection()`. A continuación, puede escribir en el archivo "roles.json":

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

## Privilegios y roles

Un \*\*privilegio \*\* es la capacidad técnica de ejecutar \*\*acciones \*\* en \*\*recursos \*\*, mientras que un **rol** es un privilegio publicado para ser utilizado por un administrador. Básicamente, un rol reúne varios privilegios para definir un perfil de usuario empresarial. Por ejemplo, "manageInvoices" podría ser un privilegio mientras que "secretary" podría ser un rol (que incluye "manageInvoices" y otros privilegios).

Un privilegio o un rol pueden asociarse a varias combinaciones "acción + recurso". Se pueden asociar varios privilegios a una acción. Un privilegio puede incluir otros privilegios.

- Usted **crea** privilegios y/o roles en el archivo `roles.json` (ver abajo). **Configura** su alcance asignándolos a acción(es) de permiso aplicadas a recurso(s).

- Usted **autoriza** los privilegios y/o roles para cada sesión usuario usando la función [`.setPrivileges()`](../API/SessionClass.md#setprivileges) de la clase `Session`.

### Ejemplo

Para permitir un rol en una sesión:

```4d

exposed Function authenticate($identifier : Text; $password : Text)->$result : Text

    var $user : cs.UsersEntity

    Session.clearPrivileges()

    $result:="Está autentificado como Invitado"

    $user:=ds.Users.query("identifier = :1"; $identifier).first()

    If ($user#Null)
        If (Verify password hash($password; $user.password))
            Session.setPrivileges(New object("roles"; $user.role))
            $result:="Está autentificado como "+$user.role
        End if
    End if


```

## archivo `roles.json`

El archivo `roles.json` describe todos los parámetros de seguridad web del proyecto. La sintaxis del archivo `roles.json` es la siguiente:

| Nombre de propiedad |                                                                                     |                                                                                  | Tipo                              | Obligatorio | Descripción                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| privileges          |                                                                                     |                                                                                  | Colección de objetos `privilege`  | X           | Lista de privilegios definidos                                                                                                 |
|                     | \[].privilege  |                                                                                  | Text                              |             | Nombre del privilegio                                                                                                          |
|                     | \[].includes   |                                                                                  | Colección de cadenas              |             | Lista de nombres de privilegios incluidos                                                                                      |
| roles               |                                                                                     |                                                                                  | Colección de objetos `role`       |             | Lista de roles definidos                                                                                                       |
|                     | \[].role       |                                                                                  | Text                              |             | Nombre del rol                                                                                                                 |
|                     | \[].privileges |                                                                                  | Colección de cadenas              |             | Lista de nombres de privilegios incluidos                                                                                      |
| permissions         |                                                                                     |                                                                                  | Object                            | X           | Lista de acciones permitidas                                                                                                   |
|                     | allowed                                                                             |                                                                                  | Colección de objetos `permission` |             | Lista de permisos permitidos                                                                                                   |
|                     |                                                                                     | \[].applyTo | Text                              | X           | Targeted [resource](#resources) name                                                                                           |
|                     |                                                                                     | \[].type    | Text                              | X           | Tipo de [recurso](#resources): "datastore", "dataclass", "attribute", "method", "singletonMethod", "singleton" |
|                     |                                                                                     | \[].read    | Colección de cadenas              |             | Lista de privilegios                                                                                                           |
|                     |                                                                                     | \[].create  | Colección de cadenas              |             | Lista de privilegios                                                                                                           |
|                     |                                                                                     | \[].update  | Colección de cadenas              |             | Lista de privilegios                                                                                                           |
|                     |                                                                                     | \[].drop    | Colección de cadenas              |             | Lista de privilegios                                                                                                           |
|                     |                                                                                     | \[].execute | Colección de cadenas              |             | Lista de privilegios                                                                                                           |
|                     |                                                                                     | \[].promote | Colección de cadenas              |             | Lista de privilegios                                                                                                           |
| restrictedByDefault |                                                                                     |                                                                                  | Boolean                           |             | Si es true, se niega el acceso a recursos sin permisos explícitos                                                              |
| forceLogin          |                                                                                     |                                                                                  | Boolean                           |             | If true, enables ["forceLogin" mode](../REST/authUsers.md#force-login-mode)                                                    |

:::caution Recordatorio

- El nombre de privilegio "WebAdmin" está reservado a la aplicación. No se recomienda utilizar este nombre para los privilegios personalizados.
- `privileges` and `roles` names are case-insensitive.

:::

### Default File Location and Content

When a new project is created, a default `roles.json` file is generated at:

```
<project folder>/Project/Sources/ 
```

Ver la sección [Arquitectura](../Project/architecture.md#sources).

Contenido predeterminado:

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

:::note Compatibilidad

En versiones anteriores, el archivo `roles.json` no fue creado por defecto. A partir de 4D 20 R6, al abrir un proyecto existente que no contiene un archivo `roles.json` o los parámetros `"forceLogin": true`, el botón **Activar la autenticación REST mediante la función ds.authentify()** está disponible en la página [**Funcionalidades web** de la caja de diálogo Parámetros](../settings/web.md#access). Este botón actualiza automáticamente su configuración de seguridad (es posible que tenga que modificar su código, [ver esta publicación del blog](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/)).

:::

:::note Qodly Studio

In Qodly Studio for 4D, the login mode can be set using the [**Force login** option](https://developer.4d.com/qodly/4DQodlyPro/force-login) in the Roles and Privileges panel.

:::

## Restriction Modes

The `restrictedByDefault` property configures how every [resource](#resources) are accessed when [no specific permission is defined for it](#permission):

- **Unrestricted mode** (`restrictedByDefault`: **false**): Resources without defined permissions are accessible to all requests. Este modo es adecuado para entornos de desarrollo donde el acceso se puede restringir gradualmente.
- **Restricted mode** (`restrictedByDefault`: **true**): Resources without defined permissions are blocked by default. Este modo se recomienda para entornos de producción donde el acceso debe ser otorgado explícitamente.

:::note Compatibilidad

- When **creating a new project**, the `restrictedByDefault` property is set to **false** in the *roles.json* file (see below). Tenga en cuenta que esta configuración está hecha a medida para un inicio rápido y un desarrollo fluido. In production environment, [it is recommended to set the `restrictedByDefault` and `forceLogin` properties to **true**](#configuring-restrictedbydefault-and-forcelogin-properties).
- In **projects converted from previous releases**; when enabling access to Qodly Studio using the [One-click configuration dialog](https://developer.4d.com/qodly/4DQodlyPro/gettingStarted#one-click-configuration), the `restrictedByDefault` property is added with value **true** in the *roles.json* file.

:::

### Configuración recomendada

Depending on your environment, the recommended settings are:

- **Production**: Set both `restrictedByDefault` and [`forceLogin`](../REST/authUsers.md#force-login-mode) to **true**. Esto garantiza la máxima seguridad al requerir autenticación de usuario y permisos explícitamente definidos para el acceso a recursos.
- **Development**: Set both `restrictedByDefault` and [`forceLogin`](../REST/authUsers.md#force-login-mode) to **false**. This allows easier access during development and debugging, with the possibility to gradually apply restrictions.

### Archivo `Roles_Errors.json`

El archivo `roles.json` es analizado por 4D al inicio. Debe reiniciar la aplicación si desea que se tengan en cuenta las modificaciones en este archivo.

En caso de error(es) al analizar el archivo `roles.json`, 4D carga el proyecto pero desactiva la protección de acceso global - esto permite al desarrollador acceder a los archivos y solucionar el error. Se genera un archivo de error llamado `Roles_Errors.json` en la [`carpeta Logs del proyecto`](../Project/architecture.md#logs) y describe la(s) línea(s) de error. Este archivo se elimina automáticamente cuando el archivo `roles.json` deja de contener errores.

Se recomienda comprobar al inicio si existe un archivo `Roles_Errors.json` en la carpeta [Logs](../Project/architecture.md#logs), lo que significa que se ha producido un error de análisis y que los accesos no estarán limitados. Puede escribir, por ejemplo:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // puede evitar que el proyecto abra
 ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")
 QUIT 4D
End if
```

## Ejemplo de configuración de privilegios

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
