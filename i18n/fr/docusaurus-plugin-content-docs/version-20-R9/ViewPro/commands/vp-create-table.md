---
id: vp-create-table
title: VP CREATE TABLE
---

<details><summary>Historique</summary>

| Release | Modifications                                                                                                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 19 R8   | Prise en charge des options de thème : `bandColumns`, `bandRows`, `highlightFirstColumn`, `highlightLastColumn`, `theme` |
| 19 R7   | Support de l'option `allowAutoExpand`                                                                                                    |
| 19 R6   | Ajout                                                                                                                                    |

</details>

<!-- REF #_method_.VP CREATE TABLE.Syntax -->

**VP CREATE TABLE** ( *rangeObj* : Object ; *tableName* : Text {; *source* : Text} {; *options* : cs.ViewPro.TableOptions} )<!-- END REF -->

<!-- REF #_method_.VP CREATE TABLE.Params -->

| Paramètres | Type                                                                                  |    | Description                                                  |                  |
| ---------- | ------------------------------------------------------------------------------------- | -- | ------------------------------------------------------------ | ---------------- |
| rangeObj   | Object                                                                                | -> | Objet plage                                                  |                  |
| tableName  | Text                                                                                  | -> | Nom de la table                                              |                  |
| source     | Text                                                                                  | -> | Nom de la propriété du Data context à afficher dans la table |                  |
| options    | [cs.ViewPro.TableOptions](../classes.md#tableoptions) | -> | Options supplémentaires                                      | <!-- END REF --> |

## Description

La commande `VP CREATE TABLE` <!-- REF #_method_.VP CREATE TABLE.Summary -->crée une table dans la plage spécifiée<!-- END REF -->. Vous pouvez créer une table dans une plage de cellules pour faciliter la gestion et l'analyse d'un groupe de données connexes. Vous pouvez créer une table dans une plage de cellules pour faciliter la gestion et l'analyse d'un groupe de données connexes.

![](../../assets/en/ViewPro/vp-create-table.png)

Dans *rangeObj*, passez la plage de cellules où la table sera créée.

Dans *tableName*, passez un nom pour la table. Le nom doit :

- être unique dans la feuille
- inclure au moins 5 caractères
- ne pas inclure d'espaces ou commencer par un nombre

Dans *source*, vous pouvez passer un nom de propriété d'un [data context] (vp-set-data-context.md) pour afficher ses données dans le tableau. Cela relie la table au contexte de données. Lorsque le contexte de données est mis à jour, les données affichées dans la table sont mises à jour en conséquence. La propriété *source* doit contenir une collection d'objets et chaque élément représente une ligne.

- Si vous ne spécifiez pas de *source*, la commande crée une table vide avec la taille définie dans *rangeObj*.
- Si la *source* spécifiée ne peut pas être entièrement affichée dans le document, aucune table n'est créée.

Dans le paramètre *options*, passez un objet de la [classe`cs.ViewPro.TableOptions`](../classes.md#tableoptions) qui contient les propriétés de la table à définir.

Dans l'objet *options*, la collection *tableColumns* détermine la structure des colonnes de la table. La longueur de la collection *tableColumns* doit être égale au nombre de colonnes de la plage :

- Lorsque le nombre de colonnes dans *rangeObj* dépasse le nombre de colonnes dans *tableColumns*, la table est remplie avec des colonnes vides supplémentaires.
- Lorsque le nombre de colonnes dans *rangeObj* est inférieur au nombre de *tableColumns*, le tableau affiche un nombre de colonnes correspondant au nombre de colonnes de la plage.

Si vous passez une option *source* mais pas une option *tableColumn*, la commande génère automatiquement des colonnes. Dans ce cas, *rangeObj* doit être une plage de cellules. Sinon, la première cellule de la plage est utilisée. Lors de la génération automatique de colonnes, les règles suivantes s'appliquent :

- Si les données passées à la commande sont une collection d'objets, les noms de propriétés sont utilisés comme titres de colonnes. Par exemple :

```4d
([{ LastName: \"Freehafer\", FirstName: \"Nancy\"},{ LastName: \"John\", FirstName: \"Doe\"})
```

Ici, les titres des colonnes seraient `LastName` et `FirstName`.

- Si les données passées à la commande sont une collection de valeurs scalaires, elle doit contenir une collection de sous-collections :

  - La collection de premier niveau contient des sous-collections de valeurs. Chaque sous-collection définit une ligne. Passez une collection vide pour sauter une ligne. Le nombre de valeurs dans la première sous-collection détermine le nombre de colonnes créées.
  - Les indices des sous-collections sont utilisés comme titres de colonnes.
  - Chaque sous-collection définit les valeurs des cellules de la ligne. Les valeurs peuvent être `Integer`, `Real`, `Boolean`, `Text`, `Date`, `Null`, `Time` ou `Picture`. Une valeur `Time` doit être un objet contenant un attribut time, comme décrit dans [VP SET VALUE](vp-set-value.md).

> Cela ne fonctionne que lors de la génération automatique de colonnes. Vous ne pouvez pas utiliser une collection de données scalaires avec l'option *tableColumns*.

## Exemple

Pour créer une table en utilisant un contexte de données :

```4d
// Définition du contexte de données
var $data : Object

$data:=New object()
$data.people:=New collection()
$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))
$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))


VP SET DATA CONTEXT("ViewProArea"; $data)

// Définitions des colonnes de la table
var $options : cs.ViewPro.TableOptions

$options:=cs.ViewPro.TableOptions.new()
$options.tableColumns:=New collection()
$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "First name"; "dataField"; "firstName"))
$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "Last name"; "dataField"; "lastName"))
$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "Email"; "dataField"; "email"))

// Création d'une table à partir de la collection "people"
VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)
```

Voici le résultat :

![](../../assets/en/ViewPro/vp-create-table.png)

## Voir également

[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP Get table column index](vp-get-table-column-index.md)<br/>
[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE](vp-remove-table.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP SET DATA CONTEXT](vp-set-data-context.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP SET TABLE THEME](vp-set-table-theme.md)

