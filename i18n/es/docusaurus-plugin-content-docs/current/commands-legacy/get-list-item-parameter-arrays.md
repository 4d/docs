---
id: get-list-item-parameter-arrays
title: GET LIST ITEM PARAMETER ARRAYS
slug: /commands/get-list-item-parameter-arrays
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Syntax-->**GET LIST ITEM PARAMETER ARRAYS** ( {* ;} *lista* ; *refElemento* ; *arrSelectores* {; *arrValores*} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena)Si se omite, lista es un número de referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista oNombre de objeto de tipo lista (si se pasa *) |
| refElemento | Integer, * | &#8594;  | Número de referencia del elemento o 0 para el último elemento añadido a la lista o * para el elemento actual de la lista |
| arrSelectores | Text array | &#8592; | Array de los nombres de parámetros |
| arrValores | Text array | &#8592; | Array de los valores de los parámetros |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Summary-->El comando **GET LIST ITEM PARAMETER ARRAYS** permite recuperar en una sola llamada el conjunto de los parámetros (así como también, opcionalmente, sus valores) asociados al elemento *refElemento* de la lista jerárquica cuya referencia o nombre de objeto se pasó en el parámetro *lista*.<!-- END REF-->

Los parámetros asociados a los elementos permiten almacenar información adicional sobre cada elemento. Se definen con la ayuda del comando [SET LIST ITEM PARAMETER](set-list-item-parameter.md).

Si pasa el primer parámetro opcional *\**, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de lista en el formulario. Si no pasa este parámetro, indica que el parámetro *lista* es una referencia de lista jerárquica (*RefList*). Si utiliza una sola representación de lista o trabaja con los elementos estructurales (el segundo *\** se omite), puede utilizar indiferentemente una u otra sintaxis. Sin embargo, si utiliza varias representaciones de una misma lista y trabaja con el elemento actual (se pasa el segundo \*), debe utilizar la sintaxis basada en el nombre del objeto, ya que cada representación puede tener su propio elemento actual.

**GET LIST ITEM PARAMETER ARRAYS** devuelve los parámetros definidos para el elemento *refElemento* en el array texto *arrSelectores*. Cuando se pasa el array texto *arrValores*, el comando lo utiliza para devolver los valores asociados con estos parámetros.

*arrValores* debe ser un array de tipo texto. Si tiene valores asociados que no son textuales (tipo numérico o Booleano), convertidos en cadenas (True="1", False="0").

#### Ejemplo 

Dada la siguiente lista jerárquica: 

```4d
 <>HL:=New list
 $ID:=30
 APPEND TO LIST(<>HL;"Martin";$ID)
  //5 parámetros
 SET LIST ITEM PARAMETER(<>HL;$ID;"Nombre";"Phil")
 SET LIST ITEM PARAMETER(<>HL;$ID;"Fecha de nacimiento";"01/02/1978")
 SET LIST ITEM PARAMETER(<>HL;$ID;"Hombre";True) //Booleano
 SET LIST ITEM PARAMETER(<>HL;$ID;"Edad";33) //número
 SET LIST ITEM PARAMETER(<>HL;$ID;"Ciudad";"Dallas")
```

Para mayor simplicidad la lista se asoció a una lista objeto con el mismo nombre ("<>HL").

Cuando el elemento "Martin" se selecciona en la lista, puede recuperar sus parámetros ejecutando el siguiente código:

```4d
 ARRAY TEXT(arrParamNames;0)
 GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";arrParamNames)
  // arrParamNames{1} contiene "Nombre"
  // arrParamNames{2} contiene "Fecha de nacimiento"
  // arrParamNames{3} contiene "Hombre"
  // arrParamNames{4} contiene "Edad"
  // arrParamNames{5} contiene "Ciudad"
```

Si también quiere obtener los valores de los parámetros, escriba:

```4d
 ARRAY TEXT(arrParamNames;0)
 ARRAY TEXT(arrParamValues;0)
 GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";arrParamNames;arrParamValues)
  // arrParamValues{1} contiene "Phil"
  // arrParamValues{2} contiene "01/02/1978"
  // arrParamValues{3} contiene "1"
  // arrParamValues{4} contiene "33"
  // arrParamValues{5} contiene "Dallas"
```

#### Ver también 

[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1195 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


