---
id: authUsers
title: Usuarios y sesiones
---

Cuando las [sesiones escalables están activadas](WebServer/sessions.md#enabling-sessions) (recomendadas), las peticiones REST pueden crear y usar [sesiones usuario web](WebServer/sessions.md), ofreciendo funcionalidades adicionales como la gestión de múltiples peticiones, el intercambio de datos entre procesos web clientes y el control de los privilegios usuario.

Cuando se abre una sesión de usuario web, puede manejarla a través del objeto `Session` y la [Session API](API/SessionClass.md). Las siguientes peticiones REST reutilizan la misma cookie de sesión.

> - En el servidor 4D, abrir una sesión REST puede requerir que esté disponible una licencia gratuita del cliente 4D, dependiendo del [modo de inicio de sesión del usuario](#modos-inicio-sesión-usuario).<br/>
> - En 4D monopuesto, puede abrir hasta tres sesiones REST para realizar pruebas.

## Modos de inicio de sesión de usuario

El modo de inicio de sesión del usuario le permite controlar cómo las peticiones REST adquieren licencias 4D Client. Puedes elegir entre dos modos de inicio de sesión de usuario: "predeterminado" o "inicio de sesión forzado".

Definee el modo de inicio de sesión del usuario a través de la propiedad `forceLogin` en el archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file):

- el **modo predeterminado** se utiliza si la propiedad "forceLogin" no se encuentra o se define en "false",
- el modo **force login** se utiliza si la propiedad "forceLogin" es "true".

:::caution

Si modifica esta propiedad, el servidor debe reiniciarse para tener en cuenta el cambio.

:::

:::note

En Qodly Studio for 4D, el modo se puede definir utilizando la opción [**Forzar inicio de sesión**](../WebServer/qodly-studio.md#force-login) en el panel de Privilegios.

:::

### Modo por defecto

En el modo predeterminado, toda petición REST se procesa en una sesión usuario web que consume automáticamente una licencia (la sesión usuario web se crea si aún no existe). Puede utilizar este modo simple si no necesita controlar cuántas licencias se conservan en el servidor.
Cuando el modo por defecto está activado, puede autenticar usuarios a través del método base `On REST Authentication` (ver más abajo).

### Forzar el modo de inicio de sesión

En el modo "inicio de sesión forzada", el uso de la licencia está desconectado de las sesiones de usuario web. Sólo se requiere una licencia cuando se ejecuta el comando [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges), lo que permite controlar el número de licencias utilizadas.

Las [peticiones REST descriptivas](#descriptive-rest-requests) siempre son procesadas por el servidor, aunque no se abra una sesión usuario web que utilice una licencia. En este caso, son procesados a través de sesiones "invitado".

Todas las demás peticiones REST (manejando datos o ejecutando una función) sólo serán procesadas si son ejecutadas dentro de una sesión web con privilegios apropiados, de lo contrario devuelven un error. Para asignar privilegios a una sesión web, debe ejecutar la función [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) para la sesión. Ejecutar esta función activa el consumo de la licencia 4D.

Este modo le permite implementar la siguiente secuencia de acceso:

1. En la primera llamada REST (para una llamada webform, por ejemplo), se crea una sesión de usuario web "invitado". No tiene privilegios, ni derechos para ejecutar peticiones que no sean descriptivas, ni consumo de licencias.
2. Usted llama a su función expuesta de la [clase datastore](../ORDA/ordaClasses.md#datastore-class) llamada [`authentify()`](#function-authentify) (creada de antemano), en la cual verifica las credenciales del usuario y llama a [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) con los privilegios correspondientes.
3. La petición `/rest/$catalog/authentify` se envía al servidor junto con las credenciales del usuario. Este paso sólo requiere un formulario de acceso básico que no acceda a datos; puede ser un formulario Qodly (llamado a través de la petición `/rest/$getWebForm`).
4. Si el usuario se autentica correctamente, se consume una licencia 4D en el servidor y se aceptan todas las peticiones REST.

![alt-text](../assets/en/REST/force-login-2.jpeg)

### Peticiones REST descriptivas

Las peticiones REST descriptivas pueden procesarse en sesiones de usuario web que no requieren licencias (sesiones "invitado"). Estas peticiones son:

- peticiones [`/rest/$catalog`]($catalog.md) (por ejemplo, `/rest/$catalog/$all`) - acceso a las dataclasse disponibles
- `/rest/$catalog/authentify` - la función del almacén de datos utilizada para iniciar sesión del usuario
- `/rest/$getWebForm` - la renderización de un formulario Qodly

![alt-text](../assets/en/REST/force-login-1.jpeg)

### `Function authentify`

#### Sintaxis

```4d
exposed Function authentify({params : type}) {-> result : type}
	// código
```

La función `authentify()` debe estar implementada en la [clase DataStore](../ORDA/ordaClasses.md#datastore-class) del proyecto y debe ser llamada a través de una petición REST.

This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.

:::note

La función `authentify()` siempre puede ser ejecutada por una sesión de invitado de REST, independientemente de la configuración del archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file).

:::

La función puede recibir cualquier información de autenticación o contextual como [parámetro(s)](ClassFunctions.md#parameters) y puede devolver cualquier valor. Dado que esta función sólo puede ser llamada desde una petición REST, los parámetros deben ser pasados a través del cuerpo de la petición POST.

Esta función debe contener dos partes:

- algún código para identificar y autenticar al remitente de la petición REST,
- si la autenticación tiene éxito, una llamada a [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) que asigna los privilegios apropiados a la sesión.

Si la función no llama a [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges), no se asignan privilegios, no se consume ninguna licencia y las solicitudes REST no descriptivas posteriores son rechazadas.

#### Ejemplo

Sólo quiere conocer a los usuarios para abrir una sesión web en el servidor. Ha creado la siguiente función `authentify()` en la clase datastore:

```4d
exposed Function authentify($credentials : Object) : Text

var $users : cs.UsersSelection
var $user : cs.UsersEntity

$users:=ds.Users.query("name = :1"; $credentials.name)
$user:=$users.first()

If ($user#Null) //el usuario es conocido
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

## Usando `On REST Authentication`

En el modo de inicio de sesión por defecto (es decir, el modo "forzar inicio de sesión" está desactivado), puede iniciar la sesión de un usuario en su aplicación llamando a [`$directory/login`]($directory.md#directorylogin) en una petición POST incluyendo el nombre y la contraseña del usuario en el encabezado. Esta petición llama al método base `On REST Authentication` (si existe), donde se pueden comprobar las credenciales del usuario (ver ejemplo abajo).

Si no se ha definido el método base `On REST Authentication`, se abre una sesión `guest`.

### Ejemplo

En este ejemplo, el usuario introduce su correo electrónico y contraseña en una página html que solicita [`$directory/login`]($directory.md#directorylogin) en un POST (se recomienda utilizar una conexión HTTPS para enviar la página html). Se llama al método base `On REST Authentication` para validar las credenciales y establecer la sesión.

Página de inicio de sesión HTML:

![alt-text](../assets/en/REST/login.png)

```html
<html><body bgcolor="#ffffff">

<div id="demo">
	<FORM name="myForm">
Email: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>
Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>
<button type="button" onclick="onClick()">
Login
</button>
<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>
</FORM>
</div>

<script>
function sendData(data) {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (this.status == 200) {      
      window.location = "authenticationOK.shtml";
      }
      else {
      document.getElementById("authenticationFailed").style.visibility = "visible";
      }
  };

  XHR.open('POST', 'http://127.0.0.1:8044/rest/$directory/login'); //dirección de servidor rest

  XHR.setRequestHeader('username-4D', data.userId);
  XHR.setRequestHeader('password-4D', data.password);
  XHR.setRequestHeader('session-4D-length', data.timeout);

  XHR.send();
};
function onClick()
{
sendData({userId:document.forms['myForm'].elements['userId'].value , password:document.forms['myForm'].elements['password'].value , timeout:120})
}
</script></body></html>

```

Cuando la página de inicio de sesión se envía al servidor, se llama al método base `On REST Authentication`:

```4d
	//On REST Authentication

#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean
var $sales : cs.SalesPersonsEntity

$Accepted:=False

	//A '/rest' URL has been called with headers username-4D and password-4D
If ($userId#"")
    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()
    If ($sales#Null)
        If (Verify password hash($password; $sales.password))
            fillSession($sales)
            $Accepted:=True
        End if
    End if
End if
```

> Tan pronto como se ha llamado y devuelto `True`, el método base `On REST Authentication` deja de llamarse en la sesión.

El método proyecto `fillSession` inicializa la sesión usuario, por ejemplo:

```4d
#DECLARE($sales : cs.SalesPersonsEntity)
var $info : Object

$info:=New object()
$info.userName:=$sales.firstname+" "+$sales.lastname

Session.setPrivileges($info)

Use (Session.storage)
    If (Session.storage.myTop3=Null)
        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)
    End if
End use
```
