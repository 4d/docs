---
id: php-get-full-response
title: PHP GET FULL RESPONSE
slug: /commands/php-get-full-response
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET FULL RESPONSE.Syntax-->**PHP GET FULL RESPONSE** ( *stdOut* {; *etiquetasErr* ; *valoresErr*} {; *camposEncHttp* {; *valoresEncHttp*}} )<!-- END REF-->
<!--REF #_command_.PHP GET FULL RESPONSE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| stdOut | Text, Blob | &#8592; | Contenido del buffer stdOut |
| etiquetasErr | Text array | &#8592; | Etiquetas de los errores |
| valoresErr | Text array | &#8592; | Valores de los errores |
| camposEncHttp | Text array | &#8592; | Nombres de los encabezados HTTP |
| valoresEncHttp | Text array | &#8592; | Valores de los encabezados HTTP |

<!-- END REF-->

:::info Compatibilidad

**PHP es obsoleto en 4D**. Se recomienda utilizar la clase [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::

#### Descripción 

<!--REF #_command_.PHP GET FULL RESPONSE.Summary-->El comando PHP GET FULL RESPONSE permite obtener información adicional sobre la respuesta devuelta por el intérprete PHP.<!-- END REF--> Este comando es especialmente útil en el caso de que ocurra un error durante la ejecución del script.   
  
El script PHP puede escribir datos en el buffer stdOut (eco, print, etc.) El comando devuelve directamente los datos en la variable *stdOut* y aplica los mismos principios de conversión descritos en el comando [PHP Execute](php-execute.md "PHP Execute").  
  
Los arrays texto sincronizados *etiquetasErr* y *valoresErrV* se llenan cuando la ejecución de los scripts PHP provoca errores. Estos arrays, en particular, proporcionan información sobre el origen, el script y la línea de error. Estas dos arrays son inseparables: si se pasa *etiquetasErr*, se debe pasar también *valoresErr*.   
  
Dado que los intercambios entre 4D y el intérprete PHP se efectúan a través de FastCGI, el intérprete PHP funciona como si fuera llamado por un servidor HTTP y por tanto, envía encabezados HTTP. Puede recuperar estos encabezados y sus valores en los arrays *camposEncHttp* y *valoresEncHttp*.

#### Ver también 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1061 |
| Hilo seguro | &cross; |


