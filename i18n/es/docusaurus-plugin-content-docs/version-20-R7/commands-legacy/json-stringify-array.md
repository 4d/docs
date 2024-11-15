---
id: json-stringify-array
title: JSON Stringify array
slug: /commands/json-stringify-array
displayed_sidebar: docs
---

<!--REF #_command_.JSON Stringify array.Syntax-->**JSON Stringify array** ( *array* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.JSON Stringify array.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Text array, Real array, Boolean array, Pointer array, Object array | &#8594;  | Array cuyo contenido debe ser serializado |
| * | Operador | &#8594;  | Mejorar el formato |
| Resultado | Text | &#8592; | Cadena que contiene el array JSON serializado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.JSON Stringify array.Summary-->El comando **JSON Stringify array** convierte el array *array* 4D en un array JSON serializado.<!-- END REF--> Este comando realiza la acción inversa del comando [JSON PARSE ARRAY](json-parse-array.md).  
  
En *array*, pase un array 4D con los datos a serializar. Este array puede ser de tipo de texto, real, booleano, puntero u objeto.

**Nota:** si pasa una variable escalar o un campo en *array*, el comando devolverá simplemente el valor del parámetro entre "\[ \]". 

Puede pasar el parámetro opcional *\** para utilizar los caracteres de formato en la cadena resultante. Esta opción mejora la presentación de los datos JSON cuando se muestran en una página web (*pretty formatting*).

#### Ejemplo 1 

Conversión de un array texto:

```4d
 var $jsonString : Text
 ARRAY TEXT($ArrayFirstname;2)
 $ArrayFirstname{1}:="John"
 $ArrayFirstname{2}:="Jim"
 $jsonString :=JSON Stringify array($ArrayFirstname)
 
  // $jsonString = "["John","Jim"]"
```

#### Ejemplo 2 

Conversión de un array texto que contiene números:

```4d
 ARRAY TEXT($phoneNumbers;0)
 APPEND TO ARRAY($phoneNumbers ;"555-0100")
 APPEND TO ARRAY($phoneNumbers ;"555-0120")
 $string :=JSON Stringify array($phoneNumbers)
  // $string = "["555-0100","555-0120"]"
```

#### Ejemplo 3 

Conversión de un array objeto:

```4d
 var $ref_john : Object
 var $ref_jim : Object
 ARRAY OBJECT($myArray;0)
 OB SET($ref_john;"name";"John";"age";35)
 OB SET($ref_jim;"name";"Jim";"age";40)
 APPEND TO ARRAY($myArray ;$ref_john)
 APPEND TO ARRAY($myArray ;$ref_jim)
 $JsonString :=JSON Stringify array($myArray)
  // $JsonString = "[{"name":"John","age":35},{"name":"Jim","age":40}]"
 
  // Si desea visualizar el resultado en una página web,
  // pase el parámetro opcional *:
 $JsonStringPretty :=JSON Stringify array($myArray;*)
```

![](../assets/en/commands/pict1205072.fr.png)

#### Ejemplo 4 

Conversión de una selección 4D en un array objeto:

```4d
 var $jsonObject : Object
 var $jsonString : Text
 
 QUERY([Company];[Company]Company Name="a@")
 OB SET($jsonObject;"company name";->[Company]Company Name)
 OB SET($jsonObject;"city";->[Company]City)
 OB SET($jsonObject;"date";[Company]Date_input)
 OB SET($jsonObject;"time";[Company]Time_input)
 ARRAY OBJECT($arraySel;0)
 
 While(Not(End selection([Company])))
    $ref_value:=OB Copy($jsonObject;True)
  // Si no los copia, los valores serán cadenas vacías
    APPEND TO ARRAY($arraySel;$ref_value)
  // Cada elemento contiene los valores seleccionados, por ejemplo:
  // $arraySel{1} = // {"company name":"APPLE","time":43200000,"city":
  // "Paris","date":"2012-08-02T00:00:00Z"}
    NEXT RECORD([Company])
 End while
 
 $jsonString:=JSON Stringify array($arraySel)
  // $jsonString = "[{"company name":"APPLE","time":43200000,"city":
  //"Paris","date":"2012-08-02T00:00:00Z"},{"company name":
  //"ALMANZA",...}]"
```

#### Ver también 

[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  