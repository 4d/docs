---
id: json-parse-array
title: JSON PARSE ARRAY
slug: /commands/json-parse-array
displayed_sidebar: docs
---

<!--REF #_command_.JSON PARSE ARRAY.Syntax-->**JSON PARSE ARRAY** ( *cadenaJSON* ; *array* )<!-- END REF-->
<!--REF #_command_.JSON PARSE ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| cadenaJSON | Text | &#8594;  | Cadena JSON a analizar |
| array | Array | &#8592; | Array que contiene el resultado del análisis de la cadena JSON |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.JSON PARSE ARRAY.Summary-->El comando **JSON PARSE ARRAY** analiza el contenido de una cadena con formato JSON y ubica los datos extraídos en el parámetro *array*.<!-- END REF--> Este comando deserializa los datos JSON, realiza la acción inversa del comando [JSON Stringify array](json-stringify-array.md).  

En *cadenaJSON*, pase la cadena con formato JSON cuyo contenido desea analizar. Esta cadena debe tener el formato correcto, de lo contrario se genera un error de análisis.  
  
En *array*, pase un array que debe recibir los resultados del análisis.

**Nota:** a partir de 4D v16 R4, **JSON PARSE ARRAY** por lo general puede ser sustituida por una llamada a [JSON Parse](json-parse.md) que devuelve una **colección**. Las colecciones se basan en arrays JSON y permiten almacenar datos de tipos mixtos, lo que ofrece más flexibilidad que los arrays.

#### Ejemplo 

En este ejemplo, los datos de los campos de los registros de una tabla se extraen y ubican en los arrays de objetos:

```4d
 var $ref : Object
 ARRAY OBJECT($sel;0)
 ARRAY OBJECT($sel2;0)
 var v_String : Text
 
 OB SET($ref;"name";->[Company]Company Name)
 OB SET($ref;"city";->[Company]City)
 
 While(Not(End selection([Company])))
    $ref_company:=OB Copy($ref;True)
    APPEND TO ARRAY($sel;$ref_company)
  // $sel{1}={"name":"4D SAS","city":"Clichy"}
  // $sel{2}={"name":"MyComp","city":"Lyon"}
  // ...
    NEXT RECORD([Company])
 End while
 
 v_String:=JSON Stringify array($sel)
  // v_String= [{"name":"4D SAS","city":"Clichy"},{"name":"MyComp","city":"Lyon"}...]
 JSON PARSE ARRAY(v_String;$sel2)
  // $sel2{1}={"name":"4D SAS","city":"Clichy"}
  // $sel2{2}={"name":"MyComp","city":"Lyon"}
  //...
```

#### Ver también 

[JSON Parse](json-parse.md)  
[JSON Stringify array](json-stringify-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1219 |
| Hilo seguro | &check; |


