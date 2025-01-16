---
id: web-set-http-header
title: WEB SET HTTP HEADER
slug: /commands/web-set-http-header
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET HTTP HEADER.Syntax-->**WEB SET HTTP HEADER** ( encab|arrayCamp {; *arrayValores*} )<!-- END REF-->
<!--REF #_command_.WEB SET HTTP HEADER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| encab&#124;arrayCamp | Texto, Array texto | &#8594;  | Campo o variable que contiene el encabezado HTTP de la petición o Array de campos del encabezado HTTP |
| arrayValores | Text array | &#8594;  | Contenido de los campos del encabezado HTTP |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SET HTTP HEADER.Summary-->El comando **WEB SET HTTP HEADER** permite definir los campos del encabezado HTTP de la respuesta enviada al navegador web por 4D.<!-- END REF--> Sólo tiene efecto en un proceso web.  
Este comando le permite administrar las “cookies”. 

Hay dos sintaxis disponibles para este comando:

* **Primera sintaxis: WEB SET HTTP HEADER (encabezado)**  
Pase en el parámetro *encab*, de tipo variable o campo texto, los campos del encabezado HTTP que quiera definir. Esta sintaxis permite escribir tipos de encabezados tales como "HTTP/1.0 200 OK"+Char(13)+"Set-Cookie: C=HELLO". Los campos de encabezado deben estar separados por un retorno de carro o una secuencia cr/lf (retorno de carro + retorno de línea), bajo Windows y Mac OS, 4D se encarga del formato de la respuesta.

Este es un ejemplo de una “cookie” personalizada:

```4d
 var $vTcookie : Text
 $vTcookie:="Set-Cookie: USER="+String(Abs(Random))+"; PATH=/"
 WEB SET HTTP HEADER($vTcookie)
```

**Nota:** el comando no aceptará una constante de tipo texto literal en el parámetro *encab*; debe ser una variable o campo 4D.

Para mayor información sobre la sintaxis a aplicar, por favor consulte R.F.Cs (Request For Comments) en: <http://www.w3c.org>.

* **Segunda sintaxis**: **WEB SET HTTP HEADER** (arrayCamp; arrayValores)  
El encabezado HTTP está definido con la ayuda de dos arrays de texto, *arrayCamp* y *arrayValores*. El encabezado se escribirá así:  
    
```4d  
 fieldArray{1}:="X-VERSION"  
 fieldArray{2}:="X-STATUS"  
 fieldArray{3}:="Set-Cookie"  
 fieldArray{4}:="Server"  
   
 valueArray{1}:="HTTP/1.0"*  
 valueArray{2}:="200 OK"*  
 valueArray{3}:="C=HELLO"  
 valueArray{4}:="North_Carolina"  
```

\* Los dos primeros elementos son la primera línea de la respuesta. Cuando se introducen, deben ser los elementos 1 y 2 de los arrays. Sin embargo, es posible omitirlos y escribir únicamente lo siguiente (4D se encargará del formato del encabezado):

```4d
 fieldArray{1}:="Set-Cookie"
 valueArray{1}:="C=HELLO"
```

Si no especifica un estado, automáticamente será HTTP/1.0 200 OK. El campo **Server** es por defecto "4D/<version>".

Los campos **Date** y **Content-Length** siempre son definidos por defecto por 4D.

#### Ver también 

[WEB GET HTTP HEADER](web-get-http-header.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 660 |
| Hilo seguro | &check; |


