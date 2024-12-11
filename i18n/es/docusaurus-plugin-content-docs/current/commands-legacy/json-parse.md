---
id: json-parse
title: JSON Parse
slug: /commands/json-parse
displayed_sidebar: docs
---

<!--REF #_command_.JSON Parse.Syntax-->**JSON Parse** ( *cadenaJSON* {; *tipo*}{; *} ) : any<!-- END REF-->
<!--REF #_command_.JSON Parse.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| cadenaJSON | Text | &#8594;  | Cadena en JSON a analizar |
| tipo | Integer | &#8594;  | Tipo en el cual convertir los valores |
| * | Operador | &#8594;  | Agrega la posición de la línea y el desplazamiento de cada propiedad si el valor devuelto es un objeto |
| Resultado | any, Object | &#8592; | Valores extraídos de la cadena JSON |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.JSON Parse.Summary-->El comando **JSON Parse** analiza el contenido de una cadena con formato JSON y extrae los valores que puede almacenar en un campo o variable 4D.<!-- END REF--> Este comando deserializa los datos JSON, realiza la acción inversa del comando [JSON Stringify](json-stringify.md).  
  
En *cadenaJSON*, pase la cadena con formato JSON cuyo contenido desea analizar. Esta cadena debe tener el formato correcto, de lo contrario se genera un error de análisis.  
**JSON Parse** por lo tanto puede ser utilizado para validar cadenas JSON.   
  
**Nota**: si utiliza punteros, debe llamar al comando [JSON Stringify](json-stringify.md) antes de llamar a **JSON Parse**.  
  
Por defecto, si se omite el parámetro *tipo*, 4D intentará convertir el valor obtenido en el tipo de la variable o del campo que se utiliza para almacenar los resultados (si se ha definido). De lo contrario, 4D intenta deducir su tipo. También puede forzar la interpretación del tipo pasando el parámetro *tipo*: pase una de las siguientes constantes, disponibles en el tema *Tipos de campos y variables*:

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Is Boolean    | Entero largo | 6     |
| Is collection | Entero largo | 42    |
| Is date       | Entero largo | 4     |
| Is longint    | Entero largo | 9     |
| Is object     | Entero largo | 38    |
| Is real       | Entero largo | 1     |
| Is text       | Entero largo | 2     |
| Is time       | Entero largo | 11    |
  
  
**Notas**:
* Los valores de tipo Real deben ser incluidos en el rango ± 10.421e±10
* En los valores de tipo de texto, todos los caracteres especiales deben ser escapados, incluyendo las comillas (ver ejemplos)
* Por defecto cuando se utiliza la constante Is date, el comando considera que una cadena fecha contiene una hora local y no GMT. Puede modificar esta configuración utilizando el selector Dates inside objects del comando [SET DATABASE PARAMETER](set-database-parameter.md).
* A partir de 4D v16 R6, si la configuración de almacenamiento de fecha actual es "tipo fecha", las cadenas fecha JSON en formato "AAAA-MM-DD" son devueltas automáticamente como valores fecha por el comando **JSON Parse**. Para más información sobre esta configuración, consulte la opción "Utilizar tipo fecha en lugar de formato fecha ISO en objetos" en *Página Compatibilidad*.
* Un valor de tipo hora se pueden devolver a partir de números en cadenas. Por defecto, 4D considera que el valor es un número de segundos.

Si pasa el parámetro opcional *\** y si el parámetro *cadenaJSON* representa un objeto, el objeto devuelto contiene una propiedad adicional llamada \_\_*symbols* que da la ruta, posición de línea y desplazamiento de línea de cada propiedad y sub-propiedad del objeto. Esta información puede ser útil para fines de depuración. La estructura de la propiedad \_\_*symbols* es:

```json
__symbols:{//descripción del objeto
   myAtt.mySubAtt...:{ //ruta de la propiedad
      line:10, //número de línea de la propiedad
      offset:35 //offset de la propiedad desde el principio de la línea
      }
   }
```

**Nota:** el parámetro *\** se ignora si el valor devuelto no es del *tipo* objeto.

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

Usted desea analizar la siguiente cadena y obtener la posición de la línea y el desplazamiento de cada propiedad:

```json
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

Puede escribir:

```4d
 var $obInfo : Object
 $obInfo=JSON Parse("json_string";Is object;*) //* para obtener la propiedad __symbols
  //en el objeto $obInfo devuelto
```

El objeto *$obInfo* contiene:

```json
{alpha:4552,
beta:[{echo:45,delta:text1},{echo:52,golf:text2}],
__symbols:{alpha:{line:2,offset:4},
beta:{line:3,offset:4},
beta[0].echo:{line:5,offset:12},
beta[0].delta:{line:6,offset:12},
beta[1].echo:{line:9,offset:12},
beta[1].golf:{line:10,offset:12}}}
```

#### Ver también 

[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  
[JSON Validate](json-validate.md)  
*Tipos de campos y variables*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1218 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


