---
id: vp-find
title: VP Find
---

<!-- REF #_method_.VP Find.Syntax -->

**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object } ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Find.Params -->

| Parâmetro       | Tipo   |                             | Descrição                                                      |                  |
| --------------- | ------ | --------------------------- | -------------------------------------------------------------- | ---------------- |
| rangeObj        | Object | ->                          | Objeto intervalo                                               |                  |
| searchValue     | Text   | ->                          | Valor da pesquisa                                              |                  |
| searchCondition | Object | ->                          | Objeto que contém condição(ões) de pesquisa |                  |
| replaceValue    | Text   | ->                          | Valor de substituição                                          |                  |
| Resultados      | Object | <- | Objeto intervalo                                               | <!-- END REF --> |

#### Descrição

O comando `VP Find` <!-- REF #_method_.VP Find.Summary -->pesquisa o *rangeObj* para o *searchValue*<!-- END REF -->. Podem ser utilizados parâmetros opcionais para refinar a pesquisa e/ou substituir quaisquer resultados encontrados.

In the *rangeObj* parameter, pass an object containing a range to search.

The *searchValue* parameter lets you pass the text to search for within the *rangeObj*.

You can pass the optional *searchCondition* parameter to specify how the search is performed. As propriedades abaixo são compatíveis:

| Propriedade | Tipo       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| afterColumn | Integer    | O número da coluna imediatamente anterior à coluna inicial da pesquisa. If the *rangeObj* is a combined range, the column number given must be from the first range. Valor padrão: -1 (início do *rangeObj*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| afterRow    | Integer    | O número da linha imediatamente anterior à linha inicial da pesquisa. If the *rangeObj* is a combined range, the row number given must be from the first range. Valor padrão: -1 (início do *rangeObj*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| all         | Parâmetros | <li>True - All cells in *rangeObj* corresponding to *searchValue* are returned</li><li>False - (default value) Only the first cell in *rangeObj* corresponding to *searchValue* is returned</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| flags       | Integer    | <table><tr><td>`vk find flag exact match`</td><td>The entire content of the cell must completely match the search value</td></tr><tr><td>`vk find flag ignore case`</td><td>Capital and lower-case letters are considered the same. Ex: "a" is the same as "A".</td></tr><tr><td>`vk find flag none`</td><td>no search flags are considered (default)</td></tr><tr><td>`vk find flag use wild cards`</td><td>Wildcard characters (\*,?) pode ser usado na string de pesquisa. Wildcard characters can be used in any string comparison to match any number of characters:<li>\* for zero or multiple characters (for example, searching for "bl*"  can find "bl", "black", or "blob")</li><li>? for a single character (for example, searching for "h?t" can find "hot", or "hit"</li></td></tr></table>These flags can be combined. Por exemplo: <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code> |
| order       | Integer    | <table><tr><td>`vk find order by columns`</td><td>A pesquisa é feita por colunas. Each row of a column is searched before the search continues to the next column.</td></tr><tr><td>`vk find order by rows`</td><td>The search is performed by rows. Each column of a row is searched before the search continues to the next row (default)</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| target      | Integer    | <table><tr><td>`vk find target formula`</td><td>The search is performed in the cell formula</td></tr><tr><td>`vk find target tag`</td><td>The search is performed in the cell tag</td></tr><tr><td>`vk find target text`</td><td>The search is performed in the cell text (default)</td></tr></table><p>These flags can be combined. Por exemplo:<code>$search.target:=vk find target formula+vk find target text</code></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

In the optional *replaceValue* parameter, you can pass text to take the place of any instance of the text in *searchValue* found in the *rangeObj*.

#### Objecto devolvido

A função retorna um objeto de intervalo que descreve cada valor de pesquisa que foi encontrado ou substituído. É devolvido um objeto de intervalo vazio se não forem encontrados resultados.

#### Exemplo 1

Para encontrar a primeira célula que contém a palavra "Total":

```4d
var $range;$result : Object
 
$range:=VP All("ViewProArea")
 
$result:=VP Find($range;"Total")
```

#### Exemplo 2

Para encontrar "Total" e substituí-lo por "Total geral":

```4d
var $range;$condition;$result : Object
 
$range:=VP All("ViewProArea")
 
$condition:=New object
$condition.target:=vk find target text
$condition.all:=True //Search entire document
$condition.flags:=vk find flag exact match
 
  // Replace the cells containing only 'Total' in the current sheet with "Grand Total"


$result:=VP Find($range;"Total";$condition;"Grand Total")
 
  // Check for empty range object 
If($result.ranges.length=0)
    ALERT("No result found")
Else
    ALERT($result.ranges.length+" results found")
End if
```
