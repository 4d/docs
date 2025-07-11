---
id: vp-find
title: VP Find
---

<!-- REF #_method_.VP Find.Syntax -->

**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object } ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Find.Params -->

| Parámetros      | Tipo   |                             | Descripción                                                                               |                  |
| --------------- | ------ | --------------------------- | ----------------------------------------------------------------------------------------- | ---------------- |
| rangeObj        | Object | ->                          | Objeto rango                                                                              |                  |
| searchValue     | Text   | ->                          | Valor de búsqueda                                                                         |                  |
| searchCondition | Object | ->                          | Objeto que contiene la(s) condición(es) de búsqueda |                  |
| replaceValue    | Text   | ->                          | Valor de reemplazo                                                                        |                  |
| Resultado       | Object | <- | Objeto rango                                                                              | <!-- END REF --> |

## Descripción

El comando `VP Find` <!-- REF #_method_.VP Find.Summary -->busca en el *rangeObj* el *searchValue*<!-- END REF -->. Se pueden utilizar parámetros opcionales para afinar la búsqueda y/o sustituir los resultados encontrados.

En el parámetro *rangeObj*, pase un objeto que contenga un rango a buscar.

El parámetro *searchValue* permite pasar el texto a buscar dentro del *rangeObj*.

Puede pasar el parámetro opcional *searchCondition* para especificar el funcionamiento de la búsqueda. Se soportan las siguientes propiedades:

| Propiedad   | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| afterColumn | Integer | El número de la columna justo antes de la columna inicial de la búsqueda. Si *rangeObj* es un rango combinado, el número de columna indicado debe ser del primer rango. Valor por defecto: -1 (inicio de *rangeObj*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| afterRow    | Integer | El número de la línea justo antes de la línea inicial de la búsqueda. Si *rangeObj* es un rango combinado, el número de línea indicado debe ser del primer rango. Valor por defecto: -1 (inicio de *rangeObj*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| all         | Boolean | <li>True - Se devuelven todas las celdas en *rangeObj* correspondientes a *searchValue*</li><li>False - (valor por defecto) Sólo se devuelve la primera celda de *rangeObj* correspondiente a *searchValue*</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| flags       | Integer | <table><tr><td>`vk find flag exact match`</td><td>El contenido completo de la celda debe coincidir completamente con el valor de búsqueda</td></tr><tr><td>`vk find flag ignore case`</td><td>Las mayúsculas y minúsculas se consideran iguales. Ex: "a" is the same as "A".</td></tr><tr><td>`vk find flag none`</td><td>no search flags are considered (default)</td></tr><tr><td>`vk find flag use wild cards`</td><td>Wildcard characters (\*,?) puede utilizarse en la cadena de búsqueda. Los caracteres comodín se pueden utilizar en cualquier comparación de cadenas para coincidir con cualquier número de caracteres:<li>\* para cero o varios caracteres (por ejemplo, al buscar "bl*" se puede encontrar "bl", "black" o "blob")</li><li>? para un solo carácter (por ejemplo, la búsqueda de "h?t" puede encontrar "hot", o "hit"</li></td></tr></table>Estos indicadores pueden combinarse. Por ejemplo: <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code> |
| order       | Integer | <table><tr><td>`vk find order by columns`</td><td>La búsqueda se realiza por columnas. Each row of a column is searched before the search continues to the next column.</td></tr><tr><td>`vk find order by rows`</td><td>The search is performed by rows. Se busca en cada columna de una linea antes de continuar con la siguiente linea (por defecto)</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| target      | Integer | <table><tr><td>`vk find target formula`</td><td>La búsqueda se realiza en la fórmula de la celda</td></tr><tr><td>`vk find target tag`</td><td>La búsqueda se realiza en la etiqueta de la celda</td></tr><tr><td>`vk find target text`</td><td>La búsqueda se realiza en el texto de la celda (predeterminado)</td></tr></table><p>Estas banderas pueden combinarse. Por ejemplo:<code>$search.target:=vk find target formula+vk find target text</code></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

En el parámetro opcional *replaceValue*, puede pasar un texto para que ocupe el lugar de toda instancia del texto en el *searchValue* encontrado en *rangeObj*.

## Objeto devuelto

La función devuelve un objeto de rango que describe cada valor de búsqueda encontrado o reemplazado. Se devuelve un objeto de rango vacío si no se encuentran resultados.

## Ejemplo 1

Para encontrar la primera celda que contenga la palabra "Total":

```4d
var $range;$result : Object
 
$range:=VP All("ViewProArea")
 
$result:=VP Find($range;"Total")
```

## Ejemplo 2

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


