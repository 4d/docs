---
id: gettingStarted
title: Desarrollo web
---

Esta sección de "Primeros pasos" está orientada a los usuarios principiantes que desean una visión general sobre cómo pasar de cero a un sitio web 4D que maneja datos de la base. ¡Empecemos!

## Ejemplo Hello World

Empecemos por hacer que el servidor web envíe "Hello World" al navegador. The most simple way to do this is to create a project, start the web server and write a small code that returns a text in the `On Web Connection` database method.

### Inicio del servidor web

Para iniciar el servidor Web 4D:

1. Inicie su aplicación 4D y cree un nuevo proyecto 4D vacío.
2. In the **Run** menu, select **Start Web Server**.

¡Eso es todo! The web server is started (you can see that the menu item has become **Stop Web Server**). Ahora está listo para atender las peticiones. Para comprobarlo, mostraremos la página de inicio por defecto.

### Mostrar la página de inicio por defecto

The 4D web server creates automatically a default `index.html` page in the default `WebFolder` root folder, created at the same level as the Project folder.

1. Inicie un navegador web y conéctese a la dirección IP del servidor web (el puerto http por defecto del servidor web de 4D es el 80). If the web server and the browser are on the same machine, you can select **Test Web Server** in the **Run** menu.

Se muestra la página de inicio por defecto:

![](../assets/en/WebServer/defaultHomePage.png)

### Mostrar Hello World

1. Open the Explorer, display the Database Methods list and double-click on `On Web Connection`.

2. Introduzca el siguiente código:

```4d
Case of 
	: ($1="/hello")
		WEB SEND TEXT("Hello World!")
	Else 
		// Error 404 por ejemplo
End case 
```

The [`On Web Connection`](httpRequests.md#on-web-connection) database method is called for incoming requests and receives the target URL in the `$1` parameter. Este código tan sencillo sólo envía el texto al navegador.

3. En su navegador, introduzca la siguiente URL:

```
http://localhost/hello
```

El servidor web gestiona la solicitud y la devuelve:

![](../assets/en/WebServer/hello.png)

## Obtener datos de la base de datos

Ahora veremos lo sencillo que es obtener datos de la base. En primer lugar, crearemos una tabla y la llenaremos con algunos datos.

Cree una base de datos básica con, por ejemplo, una sola tabla que contenga algunos registros:

![](../assets/en/WebServer/hello2.png)
![](../assets/en/WebServer/hello3.png)

### Mostrar datos en una página

The most simple solution to display data is to call a [template page](templates.md) containing tags.

1. Utilizando cualquier editor de texto, cree un archivo que contenga las siguientes líneas:

```html
<html>
<body>
<!--#4DCODE ALL RECORDS([Friends])-->
<!--#4DLOOP [Friends]-->
<!--#4DTEXT [Friends]lastName--> <!--#4DTEXT [Friends]firstName--><br/>
<!--#4DENDLOOP-->
</body>
</html>
```

2. Name the file "friends.shtml" and save it in the **WebFolder** of your project.
3. En su navegador, introduzca la siguiente URL:

```
http://localhost/friends.shtml
```

`.shtml` pages are automatically processed by the web server. Se devuelve la página llena de datos:

![](../assets/en/WebServer/hello3bis.png)

### Petición REST

If we not only want to _display_ data, but to _use_ it, we can use ORDA and the REST server. Thanks to the [ORDA concept](ORDA/overview.md), the `Friends` table is automatically mapped to a dataclass and is available through [REST](REST/gettingStarted.md).

1. We will use the REST server to access data: go the **Settings** dialog box, select **Web** > **Web Features**, and check the **Expose as REST server** option.

![](../assets/en/WebServer/hello5.png)

2. En su navegador, introduzca la siguiente URL:

```
http://localhost/rest/$catalog
```

El servidor web devuelve los resultados en JSON:

```json
{
	"__UNIQID": "3F1B6ACFFE12B64493629AD76011922D",
	"dataClasses": [
		{
			"name": "Friends",
			"uri": "/rest/$catalog/Friends",
			"dataURI": "/rest/Friends"
		}
	]
}
```

Se obtiene el catálogo, es decir, la lista de clases de datos y atributos expuestos en el almacén de datos.

También puede obtener cualquier dato.

3. Introduzca el siguiente URL:

```
http://localhost/rest/Friends
```

El servidor devuelve las entidades, es decir, los datos, de la clase de datos Friends:

```json
{
	"__DATACLASS": "Friends",
	"__entityModel": "Friends",
	"__GlobalStamp": 0,
	"__COUNT": 4,
	"__FIRST": 0,
	"__ENTITIES": [
		{
			"__KEY": "1",
			"__TIMESTAMP": "2020-10-27T14:29:01.914Z",
			"__STAMP": 1,
			"ID": 1,
			"lastName": "Smith",
			"firstName": "John"
		},
		{
			"__KEY": "2",
			"__TIMESTAMP": "2020-10-27T14:29:16.035Z",
			"__STAMP": 1,
			"ID": 2,
			"lastName": "Brown",
			"firstName": "Danny"
		},
		{
			"__KEY": "3",
			"__TIMESTAMP": "2020-10-27T14:29:43.945Z",
			"__STAMP": 1,
			"ID": 3,
			"lastName": "Purple",
			"firstName": "Mark"
		},
		{
			"__KEY": "4",
			"__TIMESTAMP": "2020-10-27T14:34:58.457Z",
			"__STAMP": 1,
			"ID": 4,
			"lastName": "Dupont",
			"firstName": "Jenny"
		}
	],
	"__SENT": 4
}
```

This very simple example shows how the web server interacts transparently with the [REST server](REST/gettingStarted.md) to return any requested data, provided it is exposed. En sus interfaces web, puede vincular fácilmente el código javascript o html con los datos devueltos. See the built-in [Web Data Explorer](Admin/dataExplorer.md) to have an example of sophisticated web interface bound to dataclasses.

## Inicio de sesión y sesión

En las secciones anteriores, obtenemos acceso libre a la aplicación desde las peticiones web. Sin embargo, en el mundo de las aplicaciones web, la seguridad del acceso a los datos es la principal prioridad. Al conectarse al servidor web de 4D, los usuarios deben ser autentificados y su navegación controlada.

### Crear una tabla de usuarios

La forma más sencilla y segura de registrar un usuario en el servidor web de 4D se basa en el siguiente escenario:

- Users are stored in a dedicated, unexposed table (named _WebUsers_ for example)
- The _WebUsers_ table could be [encrypted](MSC/encrypt.md) and stores the user login and a hash of their password.

1. Cree una tabla con algunos campos, por ejemplo:

![](../assets/en/WebServer/helloUsers.png)

2. Escriba y ejecute el siguiente código para crear un usuario:

```4d
var $webUser : cs.WebUsersEntity

$webUser:=ds.WebUsers.new()
$webUser.firstName:="John"
$webUser.lastName:="Doe"
// la contraseña sería introducida por el usuario
$webUser.password:=Generate password hash("123")
$webUser.userId:="john@4d.com"
$webUser.save()
```

### Autenticación de los usuarios

> To be secure from end to end, it is necessary that the whole connection is established via [https](webServerConfig.md#enable-https).

1. Abra el Explorador y cree un método de proyecto llamado "login".

2. Escriba el siguiente código:

```4d
var $indexUserId; $indexPassword : Integer
var $userId; $password : Text
var $user; $info : Object
ARRAY TEXT($anames; 0)
ARRAY TEXT($avalues; 0)

// get values sent in the header of the request
WEB GET VARIABLES($anames; $avalues)

// look for header login fields
$indexUserId:=Find in array($anames; "userId")
$userId:=$avalues{$indexUserId}
$indexPassword:=Find in array($anames; "password")
$password:=$avalues{$indexPassword}

//look for a user with the entered name in the users table
$user:=ds.WebUsers.query("userId = :1"; $userId).first()

If ($user#Null) //a user was found
		//check the password
    If (Verify password hash($password; $user.password))
    		//password ok, fill the session
        $info:=New object()
        $info.userName:=$user.firstName+" "+$user.lastName
        Session.setPrivileges($info)
        	//You can use the user session to store any information
        WEB SEND TEXT("Welcome "+Session.userName)
    Else 
        WEB SEND TEXT("Wrong user name or password.")
    End if 
Else 
    WEB SEND TEXT("Wrong user name or password.")
End if 
```

3. Display the method properties by clicking on the **[i]** button in the code editor, check the `4D tags and URLs (4DACTION...)` option and click **OK**.

![](../assets/en/WebServer/hello0.png)

4. En su navegador, introduzca la siguiente URL:

```
http://localhost/4DACTION/login/?userID=john@4d.com&password=123
```

> No se recomienda el uso de este tipo de URLs, sólo se presenta aquí para mantener el ejemplo simple. Una solicitud de inicio de sesión más realista debe ser manejada a través de un formulario web y una petición POST. See [this page](sessions.md#example) for an example of form POST.

Entonces se registrará para la sesión:

![](../assets/en/WebServer/login1.png)

Las credenciales incorrectas serían rechazadas:

![](../assets/en/WebServer/login2.png)

Once a user is logged, you can handle the associated session using the `WEB Get Current Session ID` method. See the [User sessions](sessions.md) page.
