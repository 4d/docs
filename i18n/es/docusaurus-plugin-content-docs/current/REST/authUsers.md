---
id: authUsers
title: Usuarios y sesiones
---

## Sesiones

When [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions) (recommended), REST requests can create and use [web user sessions](WebServer/sessions.md), providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges.

Cuando se abre una sesión de usuario web, puede manejarla a través del objeto `Session` y la [Session API](API/SessionClass.md). Las siguientes peticiones REST reutilizan la misma cookie de sesión.

Una sesión se abre después de que el usuario haya iniciado sesión correctamente (ver más abajo).

> - En 4D Server, para abrir una sesión REST es necesario disponer de una licencia gratuita cliente 4D.<br/>
> - En 4D monopuesto, puede abrir hasta tres sesiones REST para realizar pruebas.

## Forzar el modo de inicio de sesión

:::note Compatibilidad

El modo de inicio de sesión heredado basado en el método base `On REST Authentication` está **obsoleto** a partir de 4D 20 R6. It is now recommended to [use the **force login mode**](../ORDA/privileges.md#rolesjson-file) (automatically enabled in new projects) and to implement the [`ds.authentify()` function](#dsauthentify). In converted projects, [a button in the Settings dialog box](../settings/web.md#activate-rest-authentication-through-dsauthentify-function) will help you upgrade your configuration. En Qodly Studio for 4D, el modo se puede definir utilizando la opción [**Forzar inicio de sesión**](../WebServer/qodly-studio.md#force-login) en el panel de Privilegios.

:::

La secuencia de inicio de sesión del usuario es la siguiente:

1. En la primera llamada REST (para una llamada webform, por ejemplo), se crea una sesión de usuario web "invitado". No tiene privilegios, no tiene derechos para ejecutar solicitudes que no sean [peticiones REST descriptivas](#descriptive-rest-requests), no tiene consumo de licencia.\
   Las solicitudes REST descriptivas siempre son procesadas por el servidor, aunque no se abra ninguna sesión de usuario web que utilice una licencia. En este caso, son procesados a través de sesiones "invitado".

2. You call your [`authentify()` function](#authentify) (created beforehand), in which you check the user credentials and call [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) with appropriate privileges. `authentify()` must be an exposed [datastore class function](../ORDA/ordaClasses.md#datastore-class).

3. La petición `/rest/$catalog/authentify` se envía al servidor junto con las credenciales del usuario. Este paso sólo requiere un formulario de inicio de sesión básico que no tenga acceso a datos; puede ser un [formulario Qodly](. /WebServer/qodly-studio.md) (llamado a través de la solicitud `/rest/$getWebForm`).

4. Si el usuario se autentica correctamente, se consume una licencia 4D en el servidor y se aceptan todas las peticiones REST.

![alt-text](../assets/en/REST/force-login-2.jpeg)

En la fase de inicio de sesión del usuario, el uso de la licencia está desconectado de las sesiones de usuario web. Sólo se requiere una licencia cuando se ejecuta el comando [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges), lo que permite controlar el número de licencias utilizadas.

All other REST requests (handling data or executing a function) will only be processed if they are executed within a web session with appropriate privileges, otherwise they return an error. To assign privileges to a web session, you need to execute the [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) function for the session. Ejecutar esta función activa el consumo de la licencia 4D.

### Peticiones REST descriptivas

Las peticiones REST descriptivas pueden procesarse en sesiones de usuario web que no requieren licencias (sesiones "invitado"). Estas peticiones son:

- [`/rest/$catalog`]($catalog.md) requests (e.g. `/rest/$catalog/$all`) - access to available dataclasses
- `/rest/$catalog/authentify` - la función del almacén de datos utilizada para iniciar sesión del usuario
- `/rest/$getWebForm` - la renderización de un formulario Qodly

![alt-text](../assets/en/REST/force-login-1.jpeg)

## `Function authentify`

### Sintaxis

```4d
exposed Function authentify({params : type}) {-> result : type}
	// código
```

La función `authentify()` debe estar implementada en la [clase DataStore](../ORDA/ordaClasses.md#datastore-class) del proyecto y debe ser llamada a través de una petición REST.

This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.

:::note

The `authentify()` function can always be executed by a REST guest session, whatever the [`roles.json` file](../ORDA/privileges.md#rolesjson-file) configuration.

:::

La función puede recibir cualquier información de autenticación o contextual como [parámetro(s)](ClassFunctions.md#parameters) y puede devolver cualquier valor. Dado que esta función sólo puede ser llamada desde una petición REST, los parámetros deben ser pasados a través del cuerpo de la petición POST.

Esta función debe contener dos partes:

- algún código para identificar y autenticar al remitente de la petición REST,
- si la autenticación tiene éxito, una llamada a [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) que asigna los privilegios apropiados a la sesión.

If the function does not call [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges), no privileges are assigned, no license is consumed and subsequent non-descriptive REST requests are rejected.

### Ejemplo

Sólo quiere conocer a los usuarios para abrir una sesión web en el servidor. Ha creado la siguiente función `authentify()` en la clase datastore:

```4d
exposed Function authentify($credentials : Object) : Text

var $users : cs.UsersSelection
var $user : cs.UsersEntity

$users:=ds.Users.query("name = :1"; $credentials.name)
$user:=$users.first()

If ($user#Null) //the user is known
	If (Verify password hash($credentials.password; $user.password))
		Session.setPrivileges("vip")
	Else

		return "Wrong password"
	End if
Else
        return "Wrong user"
End if
```

Para llamar a la función `authentify()`:

**POST** `127.0.0.1:8111/rest/$catalog/authentify`

Cuerpo de la petición:

```json
[{"name":"Henry",
"password":"123"}]
```
