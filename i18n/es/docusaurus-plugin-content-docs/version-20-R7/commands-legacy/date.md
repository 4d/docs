---
id: date
title: Date
slug: /commands/date
displayed_sidebar: docs
---

<!--REF #_command_.Date.Syntax-->**Date** ( *expresion* ) : Date<!-- END REF-->
<!--REF #_command_.Date.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| expresion | Text, Date | &#8594;  | Cadena que contiene la fecha a devolver |
| Resultado | Date | &#8592; | Fecha |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Date.Summary-->El comando Date evalúa *expresion* y devuelve una fecha.<!-- END REF-->

El parámetro *expresion* debe respetar el formato fecha ISO o los parámetros regionales del sistema.

**Formato fecha ISO**  
La cadena debe estar en el formato: "AAAA-MM-DD**T**HH:MM:SS", por ejemplo "2013-11-20T10:20:00". En este caso, **Date** evalúa el parámetro *expresion* correctamente, sin importar la configuración de lenguaje actual. Los decimales de segundos, precedidos por un punto, se soportan (ejemplo: "2013-11-20T10:20:00.9854").   
Si el formato *expresion* no respeta este esquema ISO, luego la fecha se evalúa como un formato fecha corto basado en los parámetros regionales del sistema.  
  
**Nota:** a partir de 4D v14, se recomienda utilizar el formato "YYYY-MM-DDTHH:MM:SS**Z**", conforme a la norma ISO y permitiéndole expresar la zona horaria.

**Parámetros regionales**  
Si *expresion* no corresponde al formato ISO, los parámetros regionales definidos en el sistema operativo para una fecha corta son utilizados para la evaluación. Por ejemplo, en la versión en español de 4D, por defecto la fecha debe estar en el orden MM/DD/AA (mes, día, año). El mes y el día pueden tener uno o dos dígitos. El año puede ser de dos o cuatro dígitos. Si el año es de dos dígitos, entonces Date considera si la fecha pertenece al siglo 20 o 21 en función del valor introducido. Por defecto el valor pivote es 30:

* si el valor introducido es superior o igual a 30, 4D considera que la fecha pertenece al siglo 20 y añade 19 delante del valor.
* si el valor introducido es inferior a 30, 4D considera que la fecha pertenece al siglo 21 y añade 20 delante del valor.

Este mecanismo puede configurarse utilizando el comando [SET DEFAULT CENTURY](set-default-century.md).  
Los siguientes caracteres son separadores de fecha válidos: barra oblicua (/), espacio, punto (.), coma (,) y guión (-).

* Si se pasa una fecha invalida (tal como "13/35/94" o "aa/12/94") en *expresion*, **Date** devolverá una fecha vacía (!00/00/00!). Es su responsabilidad verificar que *expresion* sea una fecha válida.
* Si la expresión *expresion* se evalúa como indefinida, **Date** devuelve una fecha vacía (!00/00/00!). Esto es útil cuando se espera que el resultado de una expresión (por ejemplo, un atributo objeto) sea una fecha, incluso si puede ser indefinido (por ejemplo un atributo objeto).

**Nota**: a partir de 4D v16 R6, las fechas pueden almacenarse en atributos objeto como valores de tipo de fecha. En versiones anteriores, solo podían almacenarse como cadenas (para más información sobre esta opción, consulte la sección *Página Compatibilidad*, "Utilizar el tipo fecha en lugar del formato fecha ISO en los objetos"). Para saber si un atributo contiene una fecha almacenada como una cadena o como una fecha, debe usar el comando [Value type](value-type.md) (ver el último ejemplo).

**Expresión tipo fecha**  
Si la *expresion* es del tipo de fecha, **Date** devuelve la fecha pasada en el parámetro 'tal como está'. Esto es particularmente útil en el contexto de la programación genérica utilizando punteros o atributos de objeto.

#### Ejemplo 1 

El siguiente ejemplo utiliza una caja para que el usuario introduzca una fecha. La cadena introducida por el usuario se convierte en una fecha y se guarda en la variable *reqFecha*:

```4d
 vdReqFecha:=Date(Request("Por favor introduzca una fecha:";String(Current date)))
 If(OK=1)
  // Hacer algo con la fecha guardada en vdReqFecha
 End if
```

#### Ejemplo 2 

Los siguientes ejemplos muestran varios casos:

```4d
 vdDate:=Date("12/25/94") //12/25/94 on a US system
 vdDate2:=Date("40/40/94") //00/00/00
 vdDate3:=Date("It was the 6/30/2016") //06/30/16
 var $vobj : Object
 $vobj:=New object("expDate";"2020-11-17T00:00:00.0000")
 vdDate4:=Date($vobj.expDate) //11/17/20
 vdDate5:=Date($vobj.creationDate) //00/00/00
```

#### Ejemplo 3 

Fecha de evaluación basada en una fecha en formato ISO:

```4d
 $vtDateISO:="2013-06-05T20:00:00"
 $vDate:=Date($vtDateISO)
  //$vDate representa el 5 de junio de 2013 sin importar el lenguaje del sistema
```

#### Ejemplo 4 

Usted desea obtener una fecha de un atributo objeto, sea cual sea la opción de almacenamiento de fecha del atributo actual:

```4d
 If(Value type($myObj.myDate)=Is date) //se almacena como fecha, no hay necesidad de convertir
    $vDate:=$myObj.myDate
 Else //es almacenado como cadena
    $vDate:=Date($myObj.myDate)
 End if
```

#### Ver también 

[Bool](bool.md)  
[String](string.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 102 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


