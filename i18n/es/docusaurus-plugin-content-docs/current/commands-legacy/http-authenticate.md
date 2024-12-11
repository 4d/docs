---
id: http-authenticate
title: HTTP AUTHENTICATE
slug: /commands/http-authenticate
displayed_sidebar: docs
---

<!--REF #_command_.HTTP AUTHENTICATE.Syntax-->**HTTP AUTHENTICATE** ( *nombre* ; *clave* {; *metodoAut*} {; *} )<!-- END REF-->
<!--REF #_command_.HTTP AUTHENTICATE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombre | Text | &#8594;  | Nombre de usuario |
| clave | Text | &#8594;  | Clave de usuario |
| metodoAut | Integer | &#8594;  | Método de autenticación: 0 o se omite = no definido, 1 = BASIC, 2 = DIGEST |
| * | Operador | &#8594;  | Si se pasa: autenticación por proxy |

<!-- END REF-->

:::info Compatibilidad

Este comando se mantiene sólo por razones de compatibilidad. Ahora se recomienda utilizar [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### Descripción 

<!--REF #_command_.HTTP AUTHENTICATE.Summary-->El comando **HTTP AUTHENTICATE** permite efectuar peticiones HTTP a los servidores que necesitan la autenticación de la aplicación cliente.<!-- END REF--> Los métodos BASIC y DIGEST son compatibles, así como también la presencia de un proxy.  
  
En los parámetros *nombre* y *clave*, pase la información de identificación requerida(nombre de usuario y contraseña). Esta información se codifica y añade a la siguiente petición HTTP enviada utilizando el comando [HTTP Request](http-request.md) o [HTTP Get](http-get.md), de manera que es necesario llamar al comando **HTTP AUTHENTICATE** antes de cada petición HTTP.  
  
El parámetro opcional *metodoAut* permite indicar el método de autenticación a utilizar. Puede pasar una de las siguientes constantes, del tema *HTTP Client*:

| Constante   | Tipo         | Valor | Comentario                                 |
| ----------- | ------------ | ----- | ------------------------------------------ |
| HTTP basic  | Entero largo | 1     | Utilizar el método de autenticación BASIC  |
| HTTP digest | Entero largo | 2     | Utilizar el método de autenticación DIGEST |
  
  
Si omite el parámetro *metodoAut* (o pasa 0), deja que el programa elija el método apropiado a utilizar. En este caso, 4D envía una petición adicional con el fin de negociar el método de autenticación.  
  
Si pasa el parámetro *\**, indica que la información de autenticación se dirige a un proxy HTTP. Esta configuración debe implementarse cuando hay un proxy que requiere autenticación entre el cliente y el servidor HTTP. Si el servidor mismo se autentica, es necesaria una autenticación doble.

Por defecto, la información de autenticación se conserva y reutiliza en el proceso actual. Sin embargo, es posible reiniciar esta información utilizando una opción del comando [HTTP SET OPTION](http-set-option.md). En este caso, será necesario ejecutar el comando **HTTP AUTHENTICATE** antes de cada llamada a [HTTP Request](http-request.md) o [HTTP Get](http-get.md).

#### Ejemplo 

Ejemplos de peticiones con autenticación:

```4d
  // Autenticación en un servidor HTTP en modo DIGEST
 HTTP AUTHENTICATE("httpUser";"123";2)
  // Autenticación en un proxy en modo por defecto
 HTTP AUTHENTICATE("ProxyUser";"456";*)
 $httpStatus:=HTTP Get(...)
```

#### Ver también 

[HTTP SET OPTION](http-set-option.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1161 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


