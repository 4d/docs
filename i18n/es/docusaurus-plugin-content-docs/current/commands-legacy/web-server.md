---
id: web-server
title: WEB Server
slug: /commands/web-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server.Syntax-->**WEB Server** {( *opcion* )} -> Resultado<!-- END REF-->
<!--REF #_command_.WEB Server.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| opcion | Entero largo | &#x1F852; | Servidor web a obtener (predeterminado si se omite = servidor web de la base de datos) |
| Resultado | Objeto | &#x1F850; | Objeto servidor web |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB Server.Summary-->El comando **WEB Server** devuelve el objeto servidor web de la base de datos o el objeto servidor web definido a través del parámetro *opcion*.<!-- END REF--> 

De forma predeterminada, si se omite el parámetro *opcion*, el comando devuelve una referencia al servidor web de la base de datos, es decir, el servidor web predeterminado. Para designar el servidor web para que regrese, puede pasar una de las siguientes constantes desde el tema *Servidor web* en el parámetro *opcion*:

| Constante                    | Valor | Comentario                                                     |
| ---------------------------- | ----- | -------------------------------------------------------------- |
| Web server database          | 1     | Servidor web de la base actual (predeterminado si se omite)    |
| Web server host database     | 2     | Servidor web de la base de datos local de un componente        |
| Web server receiving request | 3     | Servidor web que recibió la petición (servidor web de destino) |

##### Objeto devuelto 

El objeto del *servidor web* devuelto contiene las siguientes propiedades y métodos de solo lectura:

| **Propiedad <br/>** | **Tipo <br/>** | **Descripción**                                                                                                                                                                            |
| --------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| certificateFolder           | Texto                  | Carpeta donde se guardan los archivos del certificado. Formato de ruta completa POSIX utilizando filesystems. Se puede pasar como un objeto [Folder ](folder.md) en el parámetro *params*. |
| characterSet                | Número                 | Número definido de caracteres                                                                                                                                                              |
| cipherSuite                 | Texto                  | Lista de cifrado utilizada para el protocolo seguro                                                                                                                                        |
| CORSEnabled                 | Booleano               | Estado de servicio CORS                                                                                                                                                                    |
| CORSSettings                | Colección              | Lista de hosts y métodos permitidos para el servicio CORS (colección de objetos con propiedades de texto *host* y *métodos*)                                                               |
| debugLog                    | Número                 | Valor del selector de registro de depuración                                                                                                                                               |
| defaultHomepage             | Texto                  | Página de inicio predeterminada                                                                                                                                                            |
| HSTSEnabled                 | Booleano               | Estado del protocolo HSTS                                                                                                                                                                  |
| HSTSMaxAge                  | Número                 | Duración de la vida HSTS                                                                                                                                                                   |
| HTTPCompressionLevel        | Número                 | Nivel de compresión HTTP                                                                                                                                                                   |
| HTTPCompressionThreshold    | Número                 | Umbral de compresión HTTP                                                                                                                                                                  |
| HTTPEnabled                 | Booleano               | Estado de protocolo HTTP                                                                                                                                                                   |
| HTTPPort                    | Número                 | Listening IP port for HTTP                                                                                                                                                                 |
| HTTPTrace                   | Booleano               | HTTP TRACE activation                                                                                                                                                                      |
| HTTPSEnabled                | Booleano               | HTTPS protocol state                                                                                                                                                                       |
| HTTPSPort                   | Número                 | Puerto IP de escucha para HTTPS                                                                                                                                                            |
| inactiveSessionTimeout      | Númeo                  | Duración de la vida de los procesos de sesión inactivos                                                                                                                                    |
| inactiveProcessTimeout      | Número                 | Duración de la vida de las sesiones inactivas                                                                                                                                              |
| IPAddressToListen           | Texto                  | Dirección IP de texto para escuchar o "0.0.0.0" para todos                                                                                                                                 |
| isRunning                   | Booleano               | Estado de ejecución del servidor web: *no se puede establecer con el objeto de configuración*                                                                                              |
| keepSession                 | Booleano               | Estado de sesión heredado                                                                                                                                                                  |
| logRecording                | Número                 | Valor de registro de historial                                                                                                                                                             |
| maxConcurrentProcesses      | Número                 | Número máximo de procesos web concurrentes                                                                                                                                                 |
| maxRequestSize              | Número                 | Tamaño máximo de petición                                                                                                                                                                  |
| maxSessions                 | Número                 | Sesiones max                                                                                                                                                                               |
| minTLSVersion               | Número                 | Versión mínima de TLS aceptada para conexiones                                                                                                                                             |
| name                        | Texto                  | Nombre de la base de datos del servidor web: *no se puede definir con el objeto de configuración*                                                                                          |
| openSSLVersion              | Texto                  | Versión de la librería OpenSSL utilizada: *no se puede definir con el objeto de configuración*                                                                                             |
| perfectForwardSecrecy       | Booleano               | Disponibilidad de PFS en el servidor: *no se puede definir con el objeto de configuración*                                                                                                 |
| rootFolder                  | Texto                  | Ruta de la carpeta raíz. Formato de ruta completa POSIX utilizando filesystems. Se puede pasar como un objeto [Folder ](folder.md) en el parámetro *settings<br/>*                 |
| scalableSession             | Booleano               | Estado de gestión de sesión escalable                                                                                                                                                      |
| sessionCookieDomain         | Texto                  | Sesión dominio de cookies                                                                                                                                                                  |
| sessionCookieName           | Texto                  | Sesión nombre de cookie - *No se puede configurar con los parámetros objeto en modo de gestión de sesión escalable*                                                                        |
| sessionCookiePath           | Texto                  | Sesión ruta de cookies                                                                                                                                                                     |
| sessionIPAddressValidation  | Booleano               | Sesión de validación de dirección IP                                                                                                                                                       |

Estas propiedades se definen en la configuración de la base de la base local o del componente. Para la base local, se pueden reemplazar utilizando el comando [WEB SET OPTION](web-set-option.md).

**Nota:** estas propiedades también se pueden modificar utilizando el parámetro *params* del método *webServer.start( )* (excepto las etiquetadas *No se puede definir con el objeto de configuración*). Una vez que se ha iniciado el servidor web, los valores modificados por el parámetro *params* se actualizan en consecuencia en el objeto devuelto por **WEB Server**. Estos valores se utilizan solo durante la sesión posterior del servidor web (se restablecen cuando se llama al método *webServer.stop( )*). 

| **Método**           | **Descripción**         |
| -------------------- | ----------------------- |
| *webServer.start( )* | Inicia el servidor web  |
| *webServer.stop( )*  | Detiene el servidor web |

#### Ejemplo 

Desde su componente, desea saber si el servidor web de la base de datos local se ha iniciado:

```4d
  // Método de un componente
 var $hostWS : Object
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

#### Ver también 

[WEB Server list](web-server-list.md)  
*webServer.stop( )*  