---
id: vp-find
title: VP Find
---

<!-- REF #_method_.VP Find.Syntax -->

**VP Find** (  _rangeObj_ : Object ; _searchValue_ : Text ) : Object<br/>**VP Find** (  _rangeObj_ : Object ; _searchValue_ : Text ; _searchCondition_ : Object } ) : Object<br/>**VP Find** (  _rangeObj_ : Object ; _searchValue_ : Text ; _searchCondition_ : Object ; _replaceValue_ : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Find.Params -->

| Parámetros      | Tipo   |    | Descripción                                                                               |                  |
| --------------- | ------ | -- | ----------------------------------------------------------------------------------------- | ---------------- |
| rangeObj        | Object | -> | Objeto rango                                                                              |                  |
| searchValue     | Text   | -> | Valor de búsqueda                                                                         |                  |
| searchCondition | Object | -> | Objeto que contiene la(s) condición(es) de búsqueda |                  |
| replaceValue    | Text   | -> | Valor de reemplazo                                                                        |                  |
| Result          | Object | <- | Objeto rango                                                                              | <!-- END REF --> |

#### Descripción

El comando `VP Find` <!-- REF #_method_.VP Find.Summary -->busca en el _rangeObj_ el _searchValue_<!-- END REF -->. Se pueden utilizar parámetros opcionales para afinar la búsqueda y/o sustituir los resultados encontrados.

En el parámetro _rangeObj_, pase un objeto que contenga un rango a buscar.

El parámetro _searchValue_ permite pasar el texto a buscar dentro del _rangeObj_.

Puede pasar el parámetro opcional _searchCondition_ para especificar el funcionamiento de la búsqueda. Se soportan las siguientes propiedades:

| Propiedad   | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| afterColumn | Integer | El número de la columna justo antes de la columna inicial de la búsqueda. If the _rangeObj_ is a combined range, the column number given must be from the first range. Valor por defecto: -1 (inicio de _rangeObj_)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| afterRow    | Integer | El número de la línea justo antes de la línea inicial de la búsqueda. If the _rangeObj_ is a combined range, the row number given must be from the first range. Valor por defecto: -1 (inicio de _rangeObj_)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| all         | Boolean | <li>True - Se devuelven todas las celdas en *rangeObj* correspondientes a *searchValue*</li><li>False - (valor por defecto) Sólo se devuelve la primera celda de *rangeObj* correspondiente a *searchValue*</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| flags       | Integer | <table><tr><td>`vk find flag exact match`</td><td>The entire content of the cell must completely match the search value</td></tr><tr><td>`vk find flag ignore case`</td><td>Capital and lower-case letters are considered the same. Ex: "a" is the same as "A".</td></tr><tr><td>`vk find flag none`</td><td>no search flags are considered (default)</td></tr><tr><td>`vk find flag use wild cards`</td><td>Wildcard characters (\*,?) puede utilizarse en la cadena de búsqueda. Wildcard characters can be used in any string comparison to match any number of characters:<li>\* for zero or multiple characters (for example, searching for "bl*"  can find "bl", "black", or "blob")</li><li>? for a single character (for example, searching for "h?t" can find "hot", or "hit"</li></td></tr></table>These flags can be combined. For example: <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code> |
| order       | Integer | <table><tr><td>`vk find order by columns`</td><td>The search is performed by columns. Each row of a column is searched before the search continues to the next column.</td></tr><tr><td>`vk find order by rows`</td><td>The search is performed by rows. Each column of a row is searched before the search continues to the next row (default)</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| target      | Integer | <table><tr><td>`vk find target formula`</td><td>The search is performed in the cell formula</td></tr><tr><td>`vk find target tag`</td><td>The search is performed in the cell tag</td></tr><tr><td>`vk find target text`</td><td>The search is performed in the cell text (default)</td></tr></table><p>These flags can be combined. For example:<code>$search.target:=vk find target formula+vk find target text</code></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

En el parámetro opcional _replaceValue_, puede pasar un texto para que ocupe el lugar de toda instancia del texto en el _searchValue_ encontrado en _rangeObj_.

#### Objeto devuelto

La función devuelve un objeto de rango que describe cada valor de búsqueda encontrado o reemplazado. Se devuelve un objeto de rango vacío si no se encuentran resultados.

#### Ejemplo 1

Para encontrar la primera celda que contenga la palabra "Total":

```4d
var $range;$result : Object
 
$range:=VP All("ViewProArea")
 
$result:=VP Find($range;"Total")
```

#### Ejemplo 2

Para encontrar "Total" y reemplazarlo por "Grand Total":

```4d
var $range;$condition;$result : Object

$range:=VP All("ViewProArea")

$condition:=New object
$condition.target:=vk find target text
$condition.all:=True //Buscar en todo el documento
$condition.flags:=vk find flag exact match

  // Reemplazar las celdas que contienen sólo "Total" en la hoja actual con "Grand Total"
$result:=VP Find($range;"Total";$condition;"Grand Total")

  // Comprobar si el objeto de rango está vacío
If($result.ranges.length=0)
    ALERT("No result found")
Else
    ALERT($result.ranges.length+" results found")
End if
```
