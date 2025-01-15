---
id: match-regex
title: Match regex
slug: /commands/match-regex
displayed_sidebar: docs
---

<!--REF #_command_.Match regex.Syntax-->**Match regex** ( *patron* ; *laCadena* ; *inicio* {; pos_encont. ; long_encont.}{; *} ) -> Resultado <br/>
**Match regex** ( *patron* ; *laCadena* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Match regex.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| patron | Text | &#8594;  | Expresión regular |
| laCadena | Text | &#8594;  | Cadena en la cual se efectúa la búsqueda |
| inicio | Integer | &#8594;  | Posición de laCadena donde comenzar la búsqueda |
| pos_encont. | Array entero largo, Variable entero largo | &#8592; | Posición de la ocurrencia |
| long_encont. | Array entero largo, Variable entero largo | &#8592; | Longitud de la ocurrencia |
| * | Operador | &#8594;  | Si se pasa: buscar únicamente en la posición indicada |
| Resultado | Boolean | &#8592; | True = la búsqueda ha encontrado una ocurrencia; De lo contrario, False. |
| Match regex ( patron ; laCadena ) -> Resultado |
| Parámetro | Tipo | Descripción |
| patron | Text | &#8594;  | Expresión regular (igualdad completa) |
| laCadena | Text | &#8594;  | Cadena en la cual se efectúa la búsqueda |
| Resultado | Boolean | &#8592; | True= la cadena encuentra una ocurrencia, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Match regex.Summary-->El comando Match regex permite probar la conformidad de una cadena de caracteres con respecto a un conjunto de reglas sintetizadas por medio de un metalenguaje llamado “expresión regular” o “expresión racional.<!-- END REF-->” La abreviación regex es comúnmente empleada para indicar esto tipos de notaciones.

Pase en *patrón* la expresión regular a buscar. Consiste de un conjunto de caracteres utilizado para describir una cadena de caracteres, utilizando caracteres especiales.

Pase en *laCadena* la cadena en la cual buscar la expresión regular.

Pase en *inicio*, la posición en *laCadena* donde debe comenzar la búsqueda.

Si *pos\_encont.*y *long\_encont* son variables, el comando devuelve la posición y la longitud de la ocurrencia en estas variables. Si pasa arrays, el comando devuelve la posición y la longitud de la ocurrencia en el elemento cero de los arrays y las posiciones y longitudes de los grupos capturadas por la expresión regular en los elementos siguientes.

El parámetro opcional *\** indica, cuando se pasa, que la búsqueda debe llevarse a cabo en la posición especificada por *inicio* sin buscar más allá en caso de falla.

El comando devuelve [True](true.md "True") si la búsqueda encuentra una ocurrencia.

Para mayor información sobre regex, consulte la siguiente dirección:  
*http://en.wikipedia.org/wiki/Regular\_expression*

Para mayor información sobre la sintaxis de las expresiones regulares pasadas en el parámetro *patrón*, consulte la siguiente dirección:  
*https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions*

#### Ejemplo 1 

Búsqueda de igualdad completa (sintaxis simple):  
  
*vencontrado:=Match regex(plantilla;mitexto)*  

```4d
 QUERY BY FORMULA([Empleados];Match regex(".*smith.*";[Empleados]nombre))
```

  
#### Ejemplo 2 

Búsqueda en el texto por posición:

```4d
 vencont:=Match regex(motivo;mitexto;inicio;pos_encont;long_encont)
```

Ejemplo para mostrar todas las etiquetas de $1:

```4d
 inicio:=1
 Repeat
    vencont:=Match regex("<.*>";$1;inicio;pos_encont;long_encont)
    If(vencont)
       ALERT(Substring($1;pos_encont;long_encont))
       inicio:=pos_encont+long_encont
    End if
 Until(Not(vencont))
```

#### Ejemplo 3 

Búsqueda con soporte de “grupos capturados” vía paréntesis. ( ) se utilizan para especificar grupos en los regex:    
*vencont:=Match regex(motivo;mitexto; inicio; pos\_encont; long\_encont\_array)* 

```4d
 ARRAY LONGINT(pos_encont_array;0)
 ARRAY LONGINT(long_encont_array;0)
 vencont:=Match regex("(.*)stuff(.*)";$1;1;pos_encont_array;long_encont_array)
 If(vencont)
    $grupo1:=Substring($1;pos_encont_array{1};long_encont_array{1})
    $grupo2:=Substring($1;pos_encont_array{2};long_encont_array{2})
 End if
```

#### Ejemplo 4 

Búsqueda limitando la comparación del motivo a la posición indicada:  
Añadir una estrella al final de una de las dos sintaxis anteriores.

```4d
 vencont:=Match regex("a.b";"---a-b---";1;$pos_encont;$long_encont )
  //devuelve True
 vencont:=Match regex("a.b";"---a-b---";1;$pos_encont;$long_encont ;*)
  //devuelve False
 vencont:=Match regex("a.b";"---a-b---";4;$pos_encont;$long_encont ;*)
  //devuelve True
```

**Nota:** las posiciones y largos devueltos son significativosn sólo en modo Unicode o si el texto manipulado es de tipo ASCII 7-bits.

#### Gestión de errores 

En caso de error, el comando genera un error que puede interceptar vía un método instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1019 |
| Hilo seguro | &check; |
| Modifica variables | error |


