---
id: web-service-get-result
title: WEB SERVICE GET RESULT
slug: /commands/web-service-get-result
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE GET RESULT.Syntax-->**WEB SERVICE GET RESULT** ( *valorDevuelto* {; *nombreDevuelto* {; *}} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE GET RESULT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| valorDevuelto | Variable | &#8592; | Valor devuelto por el servicio web |
| nombreDevuelto | Text | &#8594;  | Nombre del parámetro a recuperar |
| * | Operator |  &#8594;  | Liberar memoria |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SERVICE GET RESULT.Summary-->El comando **WEB SERVICE GET RESULT** permite recuperar un valor enviado por el servicio web como resultado del proceso realizado.<!-- END REF--> 

**Nota:** este comando debe utilizarse únicamente después del comando [WEB SERVICE CALL](web-service-call.md). 

El parámetro *valorDevuelto* recibe el valor reenviado por el servicio web. Pase en este parámetro una variable 4D. Esta variable es generalmente $0, que corresponde al valor devuelto por el método proxy. Sin embargo, es posible utilizar variables intermediarias (debe utilizar las variables de proceso únicamente). 

**Nota:** cada variable 4D o array utilizado debe ser declarado previamente utilizando los comandos de los temas “Compilador” y “Arrays”.

El parámetro opcional *nombreDevuelto* se utiliza para especificar el nombre del parámetro a recuperar. Sin embargo, como la mayoría de los servicios web devuelven un solo valor, por lo general este parámetro no es necesario.

El parámetro opcional *\*,* indica al programa que libere la memoria dedicada al procesamiento de la petición. Debe pasar este parámetro después de recuperar el último valor enviado por el servicio web.

#### Ejemplo 

Imagine un servicio web que devuelve la hora actual en cualquier ciudad del mundo. Los parámetros recibidos por el servicio web son el nombre de la ciudad y el código del país. El servicio web devuelve la correspondiente. El método proxy de llamada puede ser de la siguiente forma:

```4d
 var $1 : Text
 var $2 : Text
 var $0 : Time
 WEB SERVICE SET PARAMETER("ciudad";$1)
 WEB SERVICE SET PARAMETER("codigo_pais";$2)
 
 WEB SERVICE CALL("http://www.ciudadesdelmundo.com/WS";"WSTime#City_time";"City_time";"http://www.ciudadesdelmundo.com/namespace/default")
 
 If(OK=1)
    WEB SERVICE GET RESULT($0;"devolver";*)
 End if
```

#### Ver también 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)  