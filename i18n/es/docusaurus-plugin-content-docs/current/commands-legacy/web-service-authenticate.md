---
id: web-service-authenticate
title: WEB SERVICE AUTHENTICATE
slug: /commands/web-service-authenticate
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE AUTHENTICATE.Syntax-->**WEB SERVICE AUTHENTICATE** ( *nombre* ; *contraseña* {; *metAutenticacion*} {; *} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE AUTHENTICATE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombre | Text | &#8594;  | Nombre del usuario |
| contraseña | Text | &#8594;  | Contraseña del usuario |
| metAutenticacion | Integer | &#8594;  | Método de Autenticación 0 u omitido = no especificado, 1 = BASIC, 2 = DIGEST |
| * | Operador | &#8594;  | Si se pasa: autenticación por proxy |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SERVICE AUTHENTICATE.Summary-->El comando **WEB SERVICE AUTHENTICATE**  permite utilizar los servicios web que necesitan de la autenticación de la aplicación cliente.<!-- END REF--> Los métodos BASIC y DIGEST son soportados.  
  
**Nota:** para más información sobre los métodos de autenticación BASIC y DIGEST, por favor revise la sección *Seguridad de las conexiones*.

En los parámetros *nombre* y *contraseña*, pase la información de identificación requerida (nombre de usuario y contraseña). Esta información será codificada y añadida a la petición HTTP enviada al servicio web utilizando el comando [WEB SERVICE CALL](web-service-call.md). Es entonces necesario llamar al comando **WEB SERVICE AUTHENTICATE** antes de llamar al comando [WEB SERVICE CALL](web-service-call.md).  
  
La información de autenticación se reinicializa en cero después de cada petición. Por lo tanto, debe utilizar el comando **WEB SERVICE AUTHENTICATE** antes de llamar al comando [WEB SERVICE CALL](web-service-call.md). 

El parámetro opcional metAutenticacion permite indicar el método de autenticación a utilizar para la próxima llamada del comando [WEB SERVICE CALL](web-service-call.md). Puede pasar uno de los siguientes valores:

* 2 = utilizar el método de autenticación DIGEST
* 1 = utilizar el método de autenticación BASIC
* 0 (ó se omite el parámetro) = utilizar el método apropiado. En este caso, 4D envía una petición adicional para negociar el método de autenticación.

Por defecto, la información de autenticación se reinicia después de cada petición. Por lo tanto, debe utilizar el comando **WEB SERVICE AUTHENTICATE** antes de cada comando [WEB SERVICE CALL](web-service-call.md). Sin embargo es posible conservar temporalmente esta información utilizando una opción del comando [WEB SERVICE SET OPTION](web-service-set-option.md). En este caso, no es necesario ejecutar el comando **WEB SERVICE AUTHENTICATE** antes de cada [WEB SERVICE CALL](web-service-call.md).

Si la autenticación falla, el servidor SOAP devuelve un error que puede identificar utilizando el comando [WEB SERVICE Get info](web-service-get-info.md).

#### Ejemplo 

Autenticación con un servicio web ubicado detrás de un proxy:

```4d
  // Autenticación al servicio web en modo DIGEST
 WEB SERVICE AUTHENTICATE("SoapUser";"123";2)
  // Autenticación al proxy en modo por defecto
 WEB SERVICE AUTHENTICATE("ProxyUser";"456";*)
 WEB SERVICE CALL(...)
```

#### Ver también 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE Get info](web-service-get-info.md)  