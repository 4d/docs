---
id: privileges
title: Privilegios
---


Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).



## Generalidades

The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources.

When users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the [`session.setPrivileges()`](../API/SessionClass.md#setprivileges) function.

Every user request sent within the session is evaluated against privileges defined in the project's `roles.json` file.

If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent.

![esquema](../assets/en/ORDA/privileges-schema.png)



## Resources

You can assign specific permission actions to the following exposed resources in your project:

- the datastore
- una clase de datos
- an attribute (including computed and alias)
- a data model class function

A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:

- A permission action defined at the datastore level is automatically assigned to all dataclasses.
- A permission action defined at a dataclass level overrides the datastore setting (if any). By default, all attributes of the dataclass inherit from the dataclass permission(s).
- Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.


## Permission actions


Las acciones disponibles están relacionadas con el recurso de destino.

| Acciones     | datastore                                                                            | dataclass                                                                                                                                       | attribute                                                                                                             | data model function                                                                                                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **create**   | Create entity in any dataclass                                                       | Create entity in this dataclass                                                                                                                 | Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes). | n/a                                                                                                                                                                                                                                                                      |
| **read**     | Read attributes in any dataclass                                                     | Read attributes in this dataclass                                                                                                               | Read this attribute content                                                                                           | n/a                                                                                                                                                                                                                                                                      |
| **update**   | Update attributes in any dataclass.                                                  | Update attributes in this dataclass.                                                                                                            | Update this attribute content (ignored for alias attributes).                                                         | n/a                                                                                                                                                                                                                                                                      |
| **drop**     | Delete data in any dataclass.                                                        | Delete data in this dataclass.                                                                                                                  | Delete a not null value for this attribute (except for alias and computed attribute).                                 | n/a                                                                                                                                                                                                                                                                      |
| **execute**  | Execute any function on the project (datastore, dataclass, entity selection, entity) | Execute any function on the dataclass. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions | n/a                                                                                                                   | Execute this function                                                                                                                                                                                                                                                    |
| **describe** | All the dataclasses are available in the /rest/$catalog API                          | This dataclass is available in the /rest/$catalog API                                                                                           | This attribute is available in the /rest/$catalog API.                                                                | This dataclass function is available in the /rest/$catalog API                                                                                                                                                                                                           |
| **promote**  | n/a                                                                                  | n/a                                                                                                                                             | n/a                                                                                                                   | Associates a given privilege during the execution of the function. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session. |

**Notas:**

- An alias can be read even if there is no permissions on the attributes upon which it is built.
- Se puede acceder a un atributo calculado aunque no haya permisos en los atributos sobre los que se crea.
- Default values: in the current implementation, only *Null* is available as default value.

Setting permissions requires to be consistent, in particular:

- los permisos **update** y **drop** también necesitan el permiso **read** (pero **create** no lo necesita)
- **promote** permission also need **describe** permission.



## Privileges and Roles

A **privilege** is the technical ability to run **actions** on **resources**, while a **role** is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).

A privilege or a role can be associated to several "action + resource" combinations. Se pueden asociar varios privilegios a una acción. A privilege can include other privileges.

- Usted **crea** privilegios y/o roles en el archivo `roles.json` (ver abajo). You **configure** their scope by assigning them to permission action(s) applied to resource(s).

- You **allow** privileges and/or roles to every user session using the [`.setPrivileges()`](../API/SessionClass.md#setprivileges) function of the `Session` class.


### Ejemplo

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



## archivo `roles.json`


El archivo `roles.json` describe todos los parámetros de seguridad del proyecto.

:::note

En un contexto que no sea *Qodly* (nube), debe crear este archivo en la siguiente ubicación: `<project folder>/Project/Sources/`. Ver la sección [Arquitectura](../Project/architecture.md#sources).

:::


La sintaxis del archivo `roles.json` es la siguiente:

| Nombre de propiedad |                 |               | Tipo                               | Obligatorio | Descripción                                                                  |
| ------------------- | --------------- | ------------- | ---------------------------------- | ----------- | ---------------------------------------------------------------------------- |
| privileges          |                 |               | Colección de objetos `privilege`   | X           | Lista de privilegios definidos                                               |
|                     | \[].privilege  |               | String                             |             | Nombre del privilegio                                                        |
|                     | \[].includes   |               | Colección de cadenas               |             | Lista de nombres de privilegios incluidos                                    |
| roles               |                 |               | Colección de objetos `role`        |             | List of defined roles                                                        |
|                     | \[].role       |               | String                             |             | Role name                                                                    |
|                     | \[].privileges |               | Colección de cadenas               |             | Lista de nombres de privilegios incluidos                                    |
| permissions         |                 |               | Object                             | X           | List of allowed actions                                                      |
|                     | allowed         |               | Collection of `permission` objects |             | List of allowed permissions                                                  |
|                     |                 | \[].applyTo  | String                             | X           | Targeted [resource](#resources) name                                         |
|                     |                 | \[].type     | String                             | X           | [Resource](#resources) type: "datastore", "dataclass", "attribute", "method" |
|                     |                 | \[].read     | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].create   | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].update   | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].drop     | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].describe | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].execute  | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].promote  | Colección de cadenas               |             | List of privileges                                                           |


:::caution Recordatorio

- El nombre de privilegio "WebAdmin" está reservado a la aplicación. No se recomienda utilizar este nombre para los privilegios personalizados.
- los nombres de `privileges` y `roles` son insensibles a mayúsculas y minúsculas.

:::

### Archivo `Roles_Errors.json`

El archivo `roles.json` es analizado por 4D al inicio. Debe reiniciar la aplicación si desea que se tengan en cuenta las modificaciones en este archivo.

En caso de error(es) al analizar el archivo `roles.json`, 4D carga el proyecto pero desactiva la protección de acceso global - esto permite al desarrollador acceder a los archivos y solucionar el error. Se genera un archivo de error llamado `Roles_Errors.json` en la carpeta [`Logs` del proyecto](../Project/architecture.md#logs) y describe la(s) línea(s) de error. Este archivo se elimina automáticamente cuando el archivo `roles.json` deja de contener errores.

Se recomienda comprobar al inicio si existe un archivo `Roles_Errors.json` en la carpeta [Logs](../Project/architecture.md#logs), lo que significa que se ha producido un error de análisis y que los accesos no estarán limitados. Puede escribir, por ejemplo:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // puede evitar que el proyecto se abra
 ALERT("El archivo roles.json está malformado o contiene inconsistencias, la aplicación se cerrará.")
 QUIT 4D
End if 
```

## Inicialización de privilegios para el despliegue

Por defecto, si no se definen parámetros específicos en el archivo `roles.json`, los accesos no están limitados. Esta configuración le permite desarrollar la aplicación sin tener que preocuparse por los accesos.

Sin embargo, cuando la aplicación está a punto de desplegarse, una buena práctica es bloquear todos los privilegios y, a continuación, configurar el archivo para que sólo abra las partes controladas a las sesiones autorizadas. Para bloquear todos los privilegios en todos los recursos, coloque el siguiente archivo `roles.json` en la carpeta de su proyecto (incluye ejemplos de métodos):

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
