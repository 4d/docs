---
id: privileges
title: Privilegios
---


Proteger los datos a la vez que se permite un acceso rápido y sencillo a los usuarios autorizados es un reto importante para las aplicaciones web. La arquitectura de seguridad ORDA se implementa en el corazón de su almacén de datos y le permite definir privilegios específicos a todas las sesiones de usuario para los distintos recursos de su proyecto (datastore, dataclasses, funciones, etc.).



## Generalidades

La arquitectura de seguridad ORDA se basa en los conceptos de privilegios, acciones de permiso (read, create, etc.) y recursos.

Cuando los usuarios se registran, su sesión se carga automáticamente con los privilegios asociados. Los privilegios se asignan a la sesión utilizando la función [`session.setPrivileges()`](../API/SessionClass.md#setprivileges).

Cada solicitud de usuario enviada dentro de la sesión se evalúa en función de los privilegios definidos en el archivo `roles.json` del proyecto.

Si un usuario intenta ejecutar una acción y no tiene los derechos de acceso adecuados, se genera un error de privilegio o, en el caso de que falte el permiso de Lectura en los atributos, no se envían.

![esquema](../assets/en/ORDA/privileges-schema.png)



## Resources

Puede asignar acciones de permiso específicas a los siguientes recursos en su proyecto:

- el almacén de datos
- una clase de datos
- un atributo (incluidos los calculados y los alias)
- una función de clase de modelo de datos

Cada vez que se accede a un recurso dentro de una sesión (sin importar la forma en que se acceda), 4D verifica que la sesión tenga los permisos apropiados y rechaza el acceso si no está autorizado.

Una acción de permiso definida en un nivel determinado se hereda por defecto en los niveles inferiores, pero se pueden establecer varios permisos:

- Una acción de permiso definida a nivel de almacén de datos se asigna automáticamente a todas las clases de datos.
- Una acción de permiso definida a nivel de clase de datos anula la configuración del almacén de datos (si existe). Por defecto, todos los atributos de la clase de datos heredan de los permisos de la clase de datos.
- A diferencia de los permisos de clase de datos, una acción de permiso definida a nivel de atributo no anula los permisos de clase de datos padre, sino que se añade a ellos. Por ejemplo, si asignó el privilegio "general" a una clase de datos y el privilegio "detail" a un atributo de la clase de datos, tanto el privilegio "general" como el privilegio "detail" deben definirse en la sesión para acceder al atributo.


## Acciones de autorización


Las acciones disponibles están relacionadas con el recurso de destino.

| Acciones     | Almacén de datos                                                                                         | dataclass                                                                                                                                                                | atributo                                                                                                                    | función de modelo de datos                                                                                                                                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **create**   | Crear entidad en cualquier clase de datos                                                                | Crear entidad en esta clase de datos                                                                                                                                     | Crea una entidad con un valor diferente del valor por defecto permitido para este atributo (ignorado para atributos alias). | n/a                                                                                                                                                                                                                                                                           |
| **read**     | Leer atributos en cualquier dataclass                                                                    | Leer atributos en esta clase de datos                                                                                                                                    | Lea el contenido de este atributo                                                                                           | n/a                                                                                                                                                                                                                                                                           |
| **update**   | Actualizar atributos en cualquier clase de datos.                                                        | Actualiza los atributos de esta clase de datos.                                                                                                                          | Actualiza el contenido de este atributo (ignorado para atributos alias).                                                    | n/a                                                                                                                                                                                                                                                                           |
| **drop**     | Borrar datos en cualquier clase de datos.                                                                | Borrar los datos de esta clase de datos.                                                                                                                                 | Eliminar un valor no nulo para este atributo (excepto para alias y atributo calculado).                                     | n/a                                                                                                                                                                                                                                                                           |
| **execute**  | Ejecutar toda función en el proyecto (almacén de datos, clase de datos, selección de entidades, entidad) | Ejecuta cualquier función en la clase de datos. Las funciones dataclass, las funciones entidad y las funciones selección de entidades se tratan como funciones dataclass | n/a                                                                                                                         | Ejecutar esta función                                                                                                                                                                                                                                                         |
| **describe** | Todas las clases de datos están disponibles en /rest/$catalog API                                        | Esta dataclass está disponible en la /rest/$catalog API                                                                                                                  | Este atributo está disponible en la API /rest/$catalog.                                                                     | Esta función dataclass está disponible en la API /rest/$catalog                                                                                                                                                                                                               |
| **promote**  | n/a                                                                                                      | n/a                                                                                                                                                                      | n/a                                                                                                                         | Asocia un privilegio determinado durante la ejecución de la función. El privilegio se añade temporalmente a la sesión y se elimina al final de la ejecución de la función. Por seguridad, sólo se añade el privilegio al proceso que ejecuta la función, no a toda la sesión. |

**Notas:**

- Un alias puede leerse tan pronto como los privilegios de sesión permitan el acceso al propio alias, aunque los privilegios de sesión no permitan el acceso a los atributos que resuelven el alias.
- Se puede acceder a un atributo calculado aunque no haya permisos en los atributos sobre los que se crea.
- Valores por defecto: en la implementación actual, solo *Null* está disponible como valor por defecto.

La definición de permisos requiere ser coherente, en particular:

- los permisos **update** y **drop** también necesitan el permiso **read** (pero **create** no lo necesita)
- el permiso **promote** también necesita el permiso **describe**.



## Privilegios y roles

Un **privilegio ** es la capacidad técnica de ejecutar **acciones ** en **recursos **, mientras que un **rol** es un privilegio publicado para ser utilizado por un administrador. Básicamente, un rol reúne varios privilegios para definir un perfil de usuario empresarial. Por ejemplo, "manageInvoices" podría ser un privilegio mientras que "secretary" podría ser un rol (que incluye "manageInvoices" y otros privilegios).

Un privilegio o un rol pueden asociarse a varias combinaciones "acción + recurso". Se pueden asociar varios privilegios a una acción. Un privilegio puede incluir otros privilegios.

- Usted **crea** privilegios y/o roles en el archivo `roles.json` (ver abajo). **Configura** su alcance asignándolos a acción(es) de permiso aplicadas a recurso(s).

- Usted **permite** privilegios y/o roles a cada sesión de usuario utilizando la función [`.setPrivileges()`](../API/SessionClass.md#setprivileges) de la clase `Session`.


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


El archivo `roles.json` describe todos los parámetros de seguridad del proyecto.

:::note

En un contexto que no sea *Qodly* (nube), debe crear este archivo en la siguiente ubicación: `<project folder>/Project/Sources/`. Ver la sección [Arquitectura](../Project/architecture.md#sources).

:::


La sintaxis del archivo `roles.json` es la siguiente:

| Nombre de propiedad |                 |               | Tipo                              | Obligatorio | Descripción                                                                    |
| ------------------- | --------------- | ------------- | --------------------------------- | ----------- | ------------------------------------------------------------------------------ |
| privileges          |                 |               | Colección de objetos `privilege`  | X           | Lista de privilegios definidos                                                 |
|                     | \[].privilege  |               | Text                              |             | Nombre del privilegio                                                          |
|                     | \[].includes   |               | Colección de cadenas              |             | Lista de nombres de privilegios incluidos                                      |
| roles               |                 |               | Colección de objetos `role`       |             | Lista de roles definidos                                                       |
|                     | \[].role       |               | Text                              |             | Nombre del rol                                                                 |
|                     | \[].privileges |               | Colección de cadenas              |             | Lista de nombres de privilegios incluidos                                      |
| permissions         |                 |               | Object                            | X           | Lista de acciones permitidas                                                   |
|                     | allowed         |               | Colección de objetos `permission` |             | Lista de permisos permitidos                                                   |
|                     |                 | \[].applyTo  | Text                              | X           | Targeted [resource](#resources) name                                           |
|                     |                 | \[].type     | Text                              | X           | tipo de [Recurso](#resources): "datastore", "dataclass", "attribute", "method" |
|                     |                 | \[].read     | Colección de cadenas              |             | Lista de privilegios                                                           |
|                     |                 | \[].create   | Colección de cadenas              |             | Lista de privilegios                                                           |
|                     |                 | \[].update   | Colección de cadenas              |             | Lista de privilegios                                                           |
|                     |                 | \[].drop     | Colección de cadenas              |             | Lista de privilegios                                                           |
|                     |                 | \[].describe | Colección de cadenas              |             | Lista de privilegios                                                           |
|                     |                 | \[].execute  | Colección de cadenas              |             | Lista de privilegios                                                           |
|                     |                 | \[].promote  | Colección de cadenas              |             | Lista de privilegios                                                           |


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
