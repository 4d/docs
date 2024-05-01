---
id: vp-create-table
title: VP CREATE TABLE
---

<details><summary>Historique</summary>

| Release | Modifications                                                                                                               |
| ------- | --------------------------------------------------------------------------------------------------------------------------- |
| 19 R8   | Support of theme options: `bandColumns`, `bandRows`, `highlightFirstColumn`, `highlightLastColumn`, `theme` |
| 19 R7   | Support of `allowAutoExpand` option                                                                                         |
| 19 R6   | Ajout                                                                                                                       |

</details>

<!-- REF #_method_.VP CREATE TABLE.Syntax -->

**VP CREATE TABLE** ( _rangeObj_ : Object ; _tableName_ : Text {; _source_ : Text} {; _options_ : cs.ViewPro.TableOptions} )<!-- END REF -->

<!-- REF #_method_.VP CREATE TABLE.Params -->

| Paramètres | Type                                                                                  |    | Description                                                  |                  |
| ---------- | ------------------------------------------------------------------------------------- | -- | ------------------------------------------------------------ | ---------------- |
| rangeObj   | Object                                                                                | -> | Objet plage                                                  |                  |
| tableName  | Text                                                                                  | -> | Nom de la table                                              |                  |
| source     | Text                                                                                  | -> | Nom de la propriété du Data context à afficher dans la table |                  |
| options    | [cs.ViewPro.TableOptions](../classes.md#tableoptions) | -> | Options supplémentaires                                      | <!-- END REF --> |

#### Description

The `VP CREATE TABLE` command <!-- REF #_method_.VP CREATE TABLE.Summary -->creates a table in the specified range<!-- END REF -->. Vous pouvez créer une table dans une plage de cellules pour faciliter la gestion et l'analyse d'un groupe de données connexes. A table typically contains related data in rows and columns, and takes advantage of a [data context](vp-set-data-context).

![](../../assets/en/ViewPro/vp-create-table.png)

In _rangeObj_, pass the cell range where the table will be created.

In _tableName_, pass a name for the table. Le nom doit :

- être unique dans la feuille
- inclure au moins 5 caractères
- ne pas inclure d'espaces ou commencer par un nombre

In _source_, you can pass a property name of a [data context](vp-set-data-context.md) to display its data in the table. This binds the table to the data context. When the data context is updated, the data displayed in the table is updated accordingly. The _source_ property must contain a collection of objects and each element represents a row.

- If you don't specify a _source_, the command creates an empty table with the size defined in _rangeObj_.
- If the specified _source_ cannot be fully displayed in the document, no table is created.

In the _options_ parameter, pass an object of the [`cs.ViewPro.TableOptions` class](../classes.md#tableoptions) that contains the table properties to set.

Within the _options_ object, the _tableColumns_ collection determines the structure of the table's columns. The length of the _tableColumns_ collection must be equal to the range column count:

- When the column count in _rangeObj_ exceeds the number of columns in _tableColumns_, the table is filled with additional empty columns.
- When the column count in _rangeObj_ is inferior to the number of _tableColumns_, the table displays a number of columns that match the range's column count.

If you pass a _source_ but no _tableColumn_ option, the command generates columns automatically. In this case, _rangeObj_ must be a cell range. Otherwise, the first cell of the range is used. When generating columns automatically, the following rules apply:

- If the data passed to the command is a collection of objects, the property names are used as column titles. Par exemple :

```4d
([{ LastName: \"Freehafer\", FirstName: \"Nancy\"},{ LastName: \"John\", FirstName: \"Doe\"})
```

Here the titles of the columns would be `LastName` and `FirstName`.

- If the data passed to the command is a collection of scalar values, it must contain a collection of subcollections:

  - La collection de premier niveau contient des sous-collections de valeurs. Chaque sous-collection définit une ligne. Passez une collection vide pour sauter une ligne. The number of values in the first subcollection determines how many columns are created.
  - The subcollections' indices are used as column titles.
  - Chaque sous-collection définit les valeurs des cellules de la ligne. Values can be `Integer`, `Real`, `Boolean`, `Text`, `Date`, `Null`, `Time` or `Picture`. A `Time` value must be an a object containing a time attribute, as described in [VP SET VALUE](vp-set-value.md).

> This only works when generating columns automatically. You cannot use a collection of scalar data with the _tableColumns_ option.

#### Exemple

Pour créer une table en utilisant un contexte de données :

```4d
// Définir un contexte de données
var $data : Object

$data:=New object()
$data.people:=New collection()
$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))
$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))


VP SET DATA CONTEXT("ViewProArea"; $data)

// Définir les colonnes de la table
var $options : cs.ViewPro.TableOptions

$options:=cs.ViewPro.TableOptions.new()
$options.tableColumns:=New collection()
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "First name"; "dataField"; "firstName"))
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Last name"; "dataField"; "lastName"))
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Email"; "dataField"; "email"))

// Créer une table à partir de la collection "people"
VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)
```

Voici le résultat :

![](../../assets/en/ViewPro/vp-create-table.png)

#### Voir également

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
