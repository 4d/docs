---
id: xml-get-error
title: XML GET ERROR
slug: /commands/xml-get-error
displayed_sidebar: docs
---

<!--REF #_command_.XML GET ERROR.Syntax-->**XML GET ERROR** ( *elementRef* ; *textoError* {; *linea* {; *columna*}} )<!-- END REF-->
<!--REF #_command_.XML GET ERROR.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| textoError | Variable | &#8592; | Texto del error |
| linea | Variable | &#8592; | Número de línea |
| columna | Variable | &#8592; | Número de columna |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.XML GET ERROR.Summary-->El comando XML GET ERROR devuelve en el parámetro *textoError* la descripción del error encontrado durante el proceso del elemento XML designado por el parámetro *refElement*.<!-- END REF--> La información devuelta es suministrada por la librería Xerces.DLL. 

Los parámetros opcionales *linea* y *columna* indican la ubicación del error: ellos recuperan respectivamente el número de línea y en esta línea, la posición del primer carácter de la expresión en el origen del error. 

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0\. 

#### Ver también 

[DOM Get XML information](dom-get-xml-information.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 732 |
| Hilo seguro | &check; |
| Modifica variables | OK |


