---
id: vp-find
title: VP Find
---

<!-- REF #_method_.VP Find.Syntax -->

**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Find.Params -->

<div class="no-index">

| Paramètres      | Type   |                             | Description                                                         |
| --------------- | ------ | --------------------------- | ------------------------------------------------------------------- |
| rangeObj        | Object | ->                          | Objet plage                                                         |
| searchValue     | Text   | ->                          | Valeur de recherche                                                 |
| searchCondition | Object | ->                          | Objet contenant la/les condition(s) de recherche |
| replaceValue    | Text   | ->                          | Valeur de remplacement                                              |
| Résultat        | Object | <- | Objet plage                                                         |

</div>
<!-- END REF -->

## Description

La commande `VP Find` <!-- REF #_method_.VP Find.Summary -->recherche le paramètre *rangeObj* pour la *searchValue*<!-- END REF -->. Des paramètres facultatifs peuvent être utilisés pour affiner la recherche et/ou remplacer les résultats trouvés.

Dans le paramètre *rangeObj*, passez un objet contenant une plage à rechercher.

Le paramètre *searchValue* vous permet de passer le texte à rechercher dans *rangeObj*.

Vous pouvez passer le paramètre optionnel *searchCondition* pour préciser la manière dont la recherche est effectuée. Les propriétés suivantes sont prises en charge :

| Propriété   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| afterColumn | Integer | Le numéro de la colonne située juste avant la colonne de départ de la recherche. Si *rangeObj* est une plage combinée, le numéro de colonne indiqué doit provenir de la première plage. Valeur par défaut : -1 (début de *rangeObj*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| afterRow    | Integer | Le numéro de la colonne située juste avant la colonne de départ de la recherche. Le numéro de la colonne située juste avant la colonne de départ de la recherche. Valeur par défaut : -1 (début de *rangeObj*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| all         | Boolean | <li>True - Toutes les cellules de *rangeObj* correspondant à *searchValue* sont renvoyées</li><li>False - (valeur par défaut) Seule la première cellule de *rangeObj* correspondant à *searchValue* est renvoyée</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| flags       | Integer | <table><tr><td>`vk find flag exact match`</td><td>Le contenu entier de la cellule doit correspondre exactement à la valeur recherchée</td></tr><tr><td>`vk find flag ignore case`</td><td>Les majuscules et les minuscules sont considérées comme identiques. <table><tr><td>`vk find flag exact match`</td><td>The entire content of the cell must completely match the search value</td></tr><tr><td>`vk find flag ignore case`</td><td>Capital and lower-case letters are considered the same.Ex : "a" est la même chose que "A".</td> peuvent être utilisé dans la chaîne de recherche. Les caractères joker peuvent être utilisés dans toute comparaison de chaînes de caractères pour correspondre à un nombre quelconque de caractères :<li>* pour zéro ou plusieurs caractères (par exemple, la recherche de « bl* » permet de trouver « bl », « black » ou « blob »)</li><li>? pour un seul caractère (par exemple, une recherche sur « h?t » permet de trouver « hot » ou « hit »</li></td></tr></table>Ces options peuvent être combinées. Par exemple: <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code> |
| order       | Integer | <table><tr><td>`vk find order by columns`</td><td>La recherche s'effectue par colonnes. <table><tr><td>`vk find order by columns`</td><td>The search is performed by columns.Chaque ligne d'une colonne est recherchée avant que la recherche ne passe à la colonne suivante.</td> Chaque colonne d'une ligne est parcourue avant que la recherche ne passe à la ligne suivante (par défaut)</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| target      | Integer | <table><tr><td>`vk find target formula`</td><td>La recherche est effectuée dans la formule de cellule</td></tr><tr><td>`vk find target tag`</td><td>La recherche est effectuée dans la balise de cellule</td></tr><tr><td> `vk find target text`</td><td>La recherche est effectuée dans le texte de la cellule (défaut)</td></tr></table><p>Ces options peuvent être combinées. Par exemple ::<code>$search.target:=vk find target formula+vk find target text</code></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

Dans le paramètre optionnel *replaceValue*, vous pouvez passer du texte pour remplacer toute instance du texte dans la *searchValue* trouvée dans *rangeObj*.

## Objet retourné

La fonction retourne un objet de plage décrivant chaque valeur de recherche trouvée ou remplacée. Un objet de plage vide est retourné si aucun résultat n'est trouvé.

## Exemple 1

Pour trouver la première cellule contenant le mot "Total" :

```4d
var $range;$result : Object
 
$range:=VP All("ViewProArea")
 
$result:=VP Find($range;"Total")
```

## Exemple 2

Pour trouver "Total" et le remplacer par "Grand Total" :

```4d
var $range;$condition;$result : Object
 
$range:=VP All("ViewProArea")
 
$condition:=New object
$condition.target:=vk find target text
$condition.all:=True //Search entire document
$condition.flags:=vk find flag exact match
 
  // Remplacer les cellules contenant uniquement 'Total' dans la feuille actuelle par "Grand Total".


$result:=VP Find($range;"Total";$condition;"Grand Total")
 
  // Vérifier si l'objet de plage est vide
If($result.ranges.length=0)
    ALERT("No result found")
Else
    ALERT($result.ranges.length+" results found")
End if
```


