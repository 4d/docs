---
id: json-to-selection
title: JSON TO SELECTION
slug: /commands/json-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.JSON TO SELECTION.Syntax-->**JSON TO SELECTION** ( *laTabla* ; *objetoJson* )<!-- END REF-->
<!--REF #_command_.JSON TO SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Puntero a la tabla 4D |
| objetoJson | Text | &#8594;  | Cadena en JSON |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.JSON TO SELECTION.Summary-->El comando **JSON TO SELECTION** copia el contenido del array de objetos JSON *jsonArray* en la selección de registros de *laTabla*.<!-- END REF--> 

El parámetro *jsonArray* es un [texto](# "A character string that may contain from 0 to 2 GB of text") representando un array de objetos JSON y contiene uno o más elementos. La sintaxis es del tipo:

```json
"[{"attribute1":"value1","attribute2":"value2",...},...,{"attribute1":"valueN","attribute2":"valueN",...}]"
```

Si una selección existe para *laTabla* en el momento de la llamada, los elementos del array JSON se copian en los registros en función del orden del array y del orden de los registros. Si el número de elementos definidos en el array JSON es mayor que el número de registros de la selección actual, se crean nuevos registros. Los registros, ya sean nuevos o existentes, se guardan automáticamente.

**Nota:** este comando soporta los campos de tipo objeto: los datos JSON se convierten automáticamente.

**Advertencia:** como **JSON TO SELECTION** reemplaza la información presente en los registros existentes, este comando se debe utilizar con prudencia.

Si un registro está bloqueado por otro proceso durante la ejecución del comando, no se modifica. Todos los registros bloqueados se ubican en el *Conjunto sistema LockedSet*. Después de la ejecución de **JSON TO SELECTION**, puede probar si el conjunto *LockedSet* contiene los registros que estaban bloqueados.

#### Ejemplo 

Uso del comando **JSON TO SELECTION** para añadir los registros a la tabla \[Company\]: 

```4d
 var $Object1;$Object2;$Object3;$Object4 : Object
 var $ObjectString : Text
 ARRAY OBJECT($arrayObject;0)
 
 OB SET($Object1;"ID";"200";"Company Name";"4D SAS";"City";"Clichy")
 APPEND TO ARRAY($arrayObject;$Object1)
 
 OB SET($Object2;"ID";"201";"Company Name";"APPLE";"City";"Paris")
 APPEND TO ARRAY($arrayObject;$Object2)
 
 OB SET($Object3;"ID";"202";"Company Name";"IBM";"City";"London")
 APPEND TO ARRAY($arrayObject;$Object3)
 
 OB SET($Object4;"ID";"203";"Company Name";"MICROSOFT";"City";"New York")
 APPEND TO ARRAY($arrayObject;$Object4)
 
 $ObjectString:=JSON Stringify array($arrayObject)
 
  // $ObjectString = "[{"ID":"200","City":"Clichy","Company Name":"4D
  // SAS"},{"ID":"201","City":"Paris","Company Name":"APPLE"},{"ID":"202",
  //"City":"London","Company Name":"IBM"},{"ID":"203","City":"New
  //York","Company Name":"MICROSOFT"}]"
 
 JSON TO SELECTION([Company];$ObjectString)
  // Usted crea 4 registros en la tabla [Company], llena los campos ID,
  //Nombres de empresa y ciudad
```

#### Ver también 

[Selection to JSON](selection-to-json.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1235 |
| Hilo seguro | &check; |


