---
id: json-parse
title: JSON Parse
slug: /commands/json-parse
displayed_sidebar: docs
---

<!--REF #_command_.JSON Parse.Syntax-->**JSON Parse** ( *cadenaJSON* {; *tipo*}{; *} ) -> Resultado<!-- END REF-->
<!--REF #_command_.JSON Parse.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| cadenaJSON | Text | &#x1F852; | Cadena en JSON a analizar |
| tipo | Integer | &#x1F852; | Tipo en el cual convertir los valores |
| * | Operador | &#x1F852; | Agrega la posición de la línea y el desplazamiento de cada propiedad si el valor devuelto es un objeto |
| Resultado | any, Object | &#x1F850; | Valores extraídos de la cadena JSON |

<!-- END REF-->

#### Descripción 

```undefined
__symbols:{//descripción del objeto
   myAtt.mySubAtt...:{ //ruta de la propiedad
      line:10, //número de línea de la propiedad
      offset:35 //offset de la propiedad desde el principio de la línea
      }
   }
```

#### Ejemplo 1 

Ejemplos de conversiones simples:

```4d
 var $r : Real
 $r:=JSON Parse("42.17") //$r = 42,17 (Real)
 
 var $el : Integer
 $el:=JSON Parse("120.13";Is longint) //$el=120
 
 var $t : Text
 $t:=JSON Parse("\"Year 42\"";Is text) // $t="Year 42" (text)
 
 var $o : Object
 $o:=JSON Parse("{\"name\":\"john\"}")
  // $o = {"name":"john"} (4D object)
 
 var $b : Boolean
 $b:=JSON Parse("{\"manager\":true}";Is Boolean) // $b=true
 
 var $h : Time
 $h:=JSON Parse("5120";Is time) //$h=01:25:20
```

#### Ejemplo 2 

Ejemplo de conversión de datos de tipo fecha: 

```4d
 $test:=JSON Parse("\"1990-12-25T12:00:00Z\"")
  // $test="1990-12-25T12:00:00Z"
 var $date;$date2;$date3 : Date
 $date:=JSON Parse("\"2008-01-01T12:00:00Z\"";Is date)
  //$date=01/01/08
 $date2:=JSON Parse("\"2017-07-13T23:00:00.000Z\"";Is date)
  //$date2=14/07/17 (Paris time zone)
 SET DATABASE PARAMETER(Dates inside objects;String type without time zone)
 $date3:=JSON Parse("\"2017-07-13T23:00:00.000Z\"";Is date)
  //$date3=13/07/17
```

#### Ejemplo 3 

Si la configuración de almacenamiento de fecha actual es "tipo fecha", puede escribir:

```4d
 var $o : Object
 var $json : Text
 var $birthday : Date
 
 $json:="{\"name\":\"Marcus\",\"birthday\":\"2017-10-16\"}"
 $o:=JSON Parse($json)
 $birthday:=$o.birthday
  //$birthday=16/10/17
```

**Nota:** para más información sobre esta configuración, consulte la opción "Utilizar tipo fecha en lugar de formato de fecha ISO en objetos" en la *Página Compatibilidad*. 

#### Ejemplo 4 

Este ejemplo muestra el uso combinado de los comandos [JSON Stringify](json-stringify.md) y **JSON Parse**:

```4d
 var $JSONContact : Text
 var $Contact;$Contact2 : Object
 $Contact:=New object("name";"Monroe";"firstname";"Alan")
 
  // JSON Stringify: conversion of an object into a JSON string
 $JSONContact:=JSON Stringify($Contact)
 
  // JSON Parse: conversion of JSON string into a new object
 $Contact2:=JSON Parse($JSONContact)
```

#### Ejemplo 5 

Usted desea crear una colección 4D desde un array JSON:

```4d
 var $myCol : Collection
 $myCol:=JSON Parse("[\"Monday\",10,\"Tuesday\",11,\"Wednesday\",12,false]")
```

#### Ejemplo 6 

```undefined
{
    "alpha": 4552,
    "beta": [
        {
            "echo": 45,
            "delta": "text1" 
        },
        {
            "echo": 52,
            "golf": "text2" 
        }
    ]
}
```

#### Ver también 

[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  
[JSON Validate](json-validate.md)  
*Tipos de campos y variables*  