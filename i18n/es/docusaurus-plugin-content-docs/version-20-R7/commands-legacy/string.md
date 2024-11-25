---
id: string
title: String
slug: /commands/string
displayed_sidebar: docs
---

<!--REF #_command_.String.Syntax-->**String** ( *expresion* {; *formato* {; *agregarHora*}} ) : Text<!-- END REF-->
<!--REF #_command_.String.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| expresion | Expression | &#8594;  | Expresión a convertir en cadena (puede ser de tipo Real, Entero, Entero largo, Fecha, Hora, String, Texto, Booleana, Indefinido o Null) |
| formato | Integer, Text | &#8594;  | Formato de visualización |
| agregarTime | Time | &#8594;  | Hora a añadir si expresión es una fecha |
| Resultado | Text | &#8592; | Expresión convertida en cadena alfanumérica |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.String.Summary-->El comando String devuelve en forma de cadena alfanumérica la expresión de tipo numérico, Fecha, Hora, cadena o Booleana que se pasa en *expresion*.<!-- END REF-->

Si no pasa el parámetro opcional *formato*, la cadena se devuelve en el formato por defecto del tipo de datos correspondiente. Si pasa *formato*, puede definir el formato de la cadena resultante.

El parámetro opcional *agregarHora* añade una hora a una fecha en un formato combinado. Sólo puede utilizarse cuando el parámetro *expresion* es una fecha (ver a continuación).

**Expresiones numéricas**  
Si *expresion* es una expresión numérica (Real, Entero, Entero largo), puede pasar el formato de la cadena opcional. Estos son algunos ejemplos:

| **Ejemplo**                       | **Resultado**           | **Comentarios**                       |
| --------------------------------- | ----------------------- | ------------------------------------- |
| String(2^15)                      | "32768"                 | Formato por defecto                   |
| String(2^15;"###,##0 habitantes") | "32,768 habitantes"     |                                       |
| String(1/3;"##0.00000")           | "0.33333"               |                                       |
| String(1/3)                       | "0.3333333333333330000" | Formato por defecto(\*)               |
| String(Arctan(1)\*4)              | "3.141592653589790000"  | Formato por defecto(\*)               |
| String(Arctan(1)\*4;"##0.00")     | "3.14"                  |                                       |
| String(-1;"&x")                   | "0xFFFFFFFF"            |                                       |
| String(-1;"&$")                   | "$FFFFFFFF"             |                                       |
| String(0 ?+ 7;"&x")               | "0x0080"                |                                       |
| String(0 ?+ 7;"&$")               | "$80"                   |                                       |
| String(0 ?+ 14;"&x")              | "0x4000"                |                                       |
| String(0 ?+ 14;"&$")              | "$4000"                 |                                       |
| String(50,3;"&xml")               | "50.3"                  | Siempre "." como un separador decimal |
| String(Num(1=1);"True;;False")    | "True"                  |                                       |
| String(Num(1=1);"True;;False")    | "True"                  |                                       |
| String(Num(1=2);"True;;False")    | "False"                 |                                       |
| String(Log(-1))                   | ""                      | Número indefinido                     |
| String(1/0)                       | "INF"                   | Número infinito positivo              |
| String(-1/0)                      | "-INF"                  | Número infinito positivo              |

(\*) El algoritmo de conversión de valores reales a texto está basado en 13 dígitos significativos.

El formato se especifica de la misma forma que para un campo numérico en un formulario. Para mayor información sobre formatos numéricos, consulte la sección *Formatos de salida* del manual de Diseño de 4D. Igualmente puede pasar el nombre de un estilo personalizado en *formato*. El nombre del estilo personalizado debe estar precedido por el carácter *“|”*.  
  
**Nota:** la función **String** no es compatible con campos de tipo "Entero 64 bits" en modo compilado.

**Expresiones de tipo Fecha**  
Si *expresion* es de tipo Fecha, la cadena se devuelve en el formato por defecto definido en el sistema.

De lo contrario, en el parámetro *formato*, puede pasar:

* o un formato predefinido disponible a través de las siguientes constantes del tema *Formatos de salida de fechas* (valor longint): 
 
|Constante                   | Valor | Comentario                                                                                                                 |  
| --------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------- |  
| Blank if null date          | 100   | A añadir a la constante de formato. Indica que en caso de valor null, 4D debe devolver una cadena vacía en lugar de ceros. |  
| Date RFC 1123               | 10    | Fri, 10 Sep 2010 13:07:20 GMT                                                                                              |  
| Internal date abbreviated   | 6     | 29 dic, 2006                                                                                                               |  
| Internal date long          | 5     | 29 diciembre 2006                                                                                                          |  
| Internal date short         | 7     |                                                                                                                            |  
| Internal date short special | 4     | 12/29/06 (pero 12/29/1896 o 12/29/2096)                                                                                    |  
| ISO Date                    | 8     | 2006-12-29T00:00:00                                                                                                        |  
| ISO Date GMT                | 9     | 2010-09-13T16:11:53Z                                                                                                       |  
| System date abbreviated     | 2     | dom. 29 de 2006                                                                                                            |  
| System date long            | 3     | domingo 29 diciembre 2006                                                                                                  |  
| System date short           | 1     |                                                                                                                            |  
    
Ejemplos:  
```4d  
 $vsResult:=String(!2023-11-27!) //"11/27/2023"  
 $vsResult:=String(!2023-11-27!;Internal date long) // "November 27, 2023"  
 $vsResult:=String(!2023-11-27!;ISO Date GMT) // "2023-11-26T23:00:00Z" en zona horaria de Francia  
```
* o un [formato personalizado basado en un modelo](https://developer.4d.com/docs/es/Project/date-time-formats) (valor string)  
Ejemplos:  
    
```4d  
 $vsResult:=String(!2023-11-27!;"EEEE d MMMM y GGGG") //"Monday 27 November 2023 Anno Domini"  
 $vsResult:=String(!2023-11-27!;"E dd/MM/yyyy zzzz") //"Mon 27/11/2023 GMT+01:00" in French timezone  
```

**Nota:** los formatos pueden variar dependiendo de la configuración del sistema.

**Parámetro** ***agregarHora*** 

Al procesar expresiones de fecha, también puede pasar una hora en el parámetro *agregarHora*. Este parámetro permite combinar una fecha con una hora para generar marcas de tiempo conformes a las normas vigentes (constantes ISO Date GMT y Date RFC 1123). Estos formatos son especialmente útiles en el contexto del procesamiento xml y Web. El parámetro *agregarHora* sólo puede utilizarse cuando el parámetro *expresion* es una fecha.   
  
Este parámetro puede utilizarse con formatos de fecha predefinidos o basados en patrones. Ejemplos:

```4d
 $dateTime:=String(!2010-09-09!;ISO date GMT;Current time) //"2010-09-09T08:30:41Z"
 $dateTime2:=String(!2023-11-27!;"E dd/MM/yyyy 'at' hh:mm aa O";?11:15:00?) //"Mon 27/11/2023 at 11:15 AM GMT+1"
```

**Notas para los formatos combinados fecha/hora:**

* El formato ISO Date GMT corresponde a la norma ISO8601 estándar y contiene una fecha y una hora expresada con respecto a la zona horaria (GMT).  
```4d  
 $mydate:=String(Current date;ISO Date GMT;Current time) // devuelve por ejemplo, 2010-09-13T16:11:53Z en Francia  
```  
    
Note que el caracter "Z" al final indica el formato GMT.  
Si no pasa el parámetro *addTime*, el comando devuelve la fecha a la media noche (hora local) expresada en hora GMT lo cual puede causar que la fecha se mueva hacia adelante o hacia atrás dependiendo de la zona horaria local:  
```4d  
 $mydate:=String(!13/09/2010!;ISO Date GMT) // devuelve 2010-09-12T22:00:00Z en Francia  
```
* El formato ISO Date es similar al formato ISO Date GMT, excepto que expresa la fecha y la hora con respecto a la zona del huso horario. Note que como este formato no cumple con el estándar ISO8601, su uso deber reservarse a propósitos muy específicos.  
```4d  
 $mydate:=String(!13/09/2010!;ISO Date) // devuelve 2010-09-13T00:00:00 sin importar la zona horaria  
 $mydate:=String(Current date;ISO Date;Current time) // devuelve 2010-09-13T18:11:53  
```
* El formato Date RFC 1123 permite formatear un conjunto fecha/hora siguiendo la norma definida por los RFC 822 y 1123\. Este formato es necesario por ejemplo para fijar la fecha de vencimiento de las cookies en un encabezado HTTP.  
```4d  
 $mydate:=String(Current date;Date RFC 1123;Current time) // devuelve, por ejemplo Fri, 10 Sep 2010 13:07:20 GMT  
```  
    
La hora expresada tiene en cuenta la hora del huso horario (zona GMT). Si pasa una fecha, el comando devuelve la fecha a la media noche (hora loca) expresada en hora GMT lo que puede hacer que la fecha se mueva hacia adelante o hacia atrás dependiendo de la zona horaria local:  
```4d  
 $mydate:=String(Current date;Date RFC 1123) // devuelve Thu, 09 Sep 2010 22:00:00 GMT  
```

**Expresiones de tipo Hora**  
Si *expresion* es de tipo Hora, la cadena se devuelve utilizando el formato por defecto HH:MM:SS. Si es de otra forma, en el parámetro *formato*, puede pasar:

* o un formato predefinido disponible a través de las siguientes constantes del tema *Formatos de salida de hora* (valor longint): 
 
|Constante                    | Valor | Comentario                                                                                                                                                                                                                          |  
| ---------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Blank if null time           | 100   | "" en lugar de 0                                                                                                                                                                                                                    |  
| HH MM                        | 2     |                                                                                                                                                                                                                                     |  
| HH MM AM PM                  | 5     |                                                                                                                                                                                                                                     |  
| HH MM SS                     | 1     |                                                                                                                                                                                                                                     |  
| Hour min                     | 4     | 1 hora 2 minutos                                                                                                                                                                                                                    |  
| Hour min sec                 | 3     | 1 hora 2 minutos 3 segundos                                                                                                                                                                                                         |  
| ISO time                     | 8     | 0000-00-00T01:02:03\. Corresponde a la norma ISO8601 y contiene, en teoría, una fecha y una hora. Como este formato no soporta fechas/horas combinadas, la parte de la fecha se rellena con 0s. Este formato expresa la hora local. |  
| Min sec                      | 7     | 62 minutos 3 segundos                                                                                                                                                                                                               |  
| MM SS                        | 6     |                                                                                                                                                                                                                                     |  
| System time long             | 11    | 1:02:03 AM HNEC (Mac únicamente)                                                                                                                                                                                                    |  
| System time long abbreviated | 10    | 1•02•03 AM (Mac únicamente)                                                                                                                                                                                                         |  
| System time short            | 9     |                                                                                                                                                                                                                                     |  
    
Ejemplos:  
    
```4d  
 $vsResult:=String(?17:30:45?;HH MM AM PM) //"5:30 PM"  
 $vsResult:=String(?17:30:45?;Hour Min Sec) //"17 hours 30 minutes 45 seconds"  
```
* o un [formato personalizado basado en un modelo](https://developer.4d.com/docs/es/Project/date-time-formats) (valor string)  
Ejemplos:  
    
```4d  
 $vsResult:=String(?17:30:45?;"hh:mm aa O") //"05:30 PM GMT+1"  
 $vsResult:=String(?17:30:45?;"'It is' K a") //"It is 5 PM"  
```

**Expresiones de tipo cadena**  
Si *expresion* es de tipo Alfa o Texto, el comando devuelve el mismo valor que se pasa en el parámetro. Esto puede ser útil particularmente en programación genérica utilizando punteros.  
En este caso, si se pasa el parámetro *formato* se ignora.

**Expresiones de tipo Booleano**  
Si *expresion* es de tipo Booleano, el comando devuelve la cadena “True” o “False” en el lenguaje de la aplicación (por ejemplo, “Vrai” o “Faux” en una versión francesa de 4D).  
En este caso si se pasa el parámetro *formato*, se ignora.

**Expresiones indefinidas**  
Si *expresion* se evalúa como indefinida, el comando devuelve una cadena vacía. Esto es útil cuando se espera que el resultado de una expresión (por ejemplo, un atributo objeto) sea una cadena, incluso si puede ser indefinido.

**Expresiones Null** 

Si *expresion* se evalúa como Null, el comando devuelve la cadena "null". Esto es útil cuando se espera que el resultado de una expresión (por ejemplo, un atributo objeto) sea una cadena, incluso si puede ser null.

#### Ver también 

[Bool](bool.md)  
[Date](date.md)  
[Num](num.md)  
[Time string](time-string.md)  
[Timestamp](timestamp.md)  