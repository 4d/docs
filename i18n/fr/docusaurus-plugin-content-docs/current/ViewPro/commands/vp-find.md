---
id: vp-find
title: VP Find
---

<!-- REF #_method_.VP Find.Syntax -->

**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object } ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Find.Params -->

| Paramètres      | Type   |                             | Description                                                         |                  |
| --------------- | ------ | --------------------------- | ------------------------------------------------------------------- | ---------------- |
| rangeObj        | Object | ->                          | Objet plage                                                         |                  |
| searchValue     | Text   | ->                          | Valeur de recherche                                                 |                  |
| searchCondition | Object | ->                          | Objet contenant la/les condition(s) de recherche |                  |
| replaceValue    | Text   | ->                          | Valeur de remplacement                                              |                  |
| Résultat        | Object | <- | Objet plage                                                         | <!-- END REF --> |

#### Description

The `VP Find` command <!-- REF #_method_.VP Find.Summary -->searches the *rangeObj* for the *searchValue*<!-- END REF -->. Des paramètres facultatifs peuvent être utilisés pour affiner la recherche et/ou remplacer les résultats trouvés.

In the *rangeObj* parameter, pass an object containing a range to search.

The *searchValue* parameter lets you pass the text to search for within the *rangeObj*.

You can pass the optional *searchCondition* parameter to specify how the search is performed. Les propriétés suivantes sont prises en charge :

| Propriété   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| afterColumn | Integer | Le numéro de la colonne située juste avant la colonne de départ de la recherche. If the *rangeObj* is a combined range, the column number given must be from the first range. Default value: -1 (beginning of the *rangeObj*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| afterRow    | Integer | Le numéro de la colonne située juste avant la colonne de départ de la recherche. If the *rangeObj* is a combined range, the row number given must be from the first range. Default value: -1 (beginning of the *rangeObj*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| all         | Boolean | <li>True - All cells in *rangeObj* corresponding to *searchValue* are returned</li><li>False - (default value) Only the first cell in *rangeObj* corresponding to *searchValue* is returned</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| flags       | Integer | <table><tr><td>`vk find flag exact match`</td><td>The entire content of the cell must completely match the search value</td></tr><tr><td>`vk find flag ignore case`</td><td>Capital and lower-case letters are considered the same. Ex: "a" is the same as "A".</td></tr><tr><td>`vk find flag none`</td><td>no search flags are considered (default)</td></tr><tr><td>`vk find flag use wild cards`</td><td>Wildcard characters (\*,?) can be used in the search string. Wildcard characters can be used in any string comparison to match any number of characters:<li>\* for zero or multiple characters (for example, searching for "bl*"  can find "bl", "black", or "blob")</li><li>? for a single character (for example, searching for "h?t" can find "hot", or "hit"</li></td></tr></table>These flags can be combined. For example: <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code> |
| order       | Integer | <table><tr><td>`vk find order by columns`</td><td>The search is performed by columns. Each row of a column is searched before the search continues to the next column.</td></tr><tr><td>`vk find order by rows`</td><td>The search is performed by rows. Each column of a row is searched before the search continues to the next row (default)</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| target      | Integer | <table><tr><td>`vk find target formula`</td><td>The search is performed in the cell formula</td></tr><tr><td>`vk find target tag`</td><td>The search is performed in the cell tag</td></tr><tr><td>`vk find target text`</td><td>The search is performed in the cell text (default)</td></tr></table><p>These flags can be combined. For example:<code>$search.target:=vk find target formula+vk find target text</code></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

In the optional *replaceValue* parameter, you can pass text to take the place of any instance of the text in *searchValue* found in the *rangeObj*.

#### Objet retourné

La fonction retourne un objet de plage décrivant chaque valeur de recherche trouvée ou remplacée. Un objet de plage vide est retourné si aucun résultat n'est trouvé.

#### Exemple 1

Pour trouver la première cellule contenant le mot "Total" :

```4d
var $range;$result : Object
 
$range:=VP All("ViewProArea")
 
$result:=VP Find($range;"Total")
```

#### Exemple 2

Pour trouver "Total" et le remplacer par "Grand Total" :

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
