---
id: vp-import-document
title: VP IMPORT DOCUMENT
---

<details><summary>Historique</summary>

| Release | Modifications                             |
| ------- | ----------------------------------------- |
| 20 R2   | Support of .sjs documents |

</details>

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->

**VP IMPORT DOCUMENT** ( _vpAreaName_ : Text ; _filePath_ : Text { ; _paramObj_ : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| filePath   | Text   | -> | Chemin d'accès du document              |                  |
| paramObj   | Object | -> | Options d'import                        | <!-- END REF --> |

#### Description

The `VP IMPORT DOCUMENT` command <!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->imports and displays the document designated by _filePath_ in the 4D View Pro area _vpAreaName_<!-- END REF -->. Le document importé remplace toutes les données déjà présentes dans la zone.

In _vpAreaName_, pass the name of the 4D View Pro area. Si vous passez un nom inexistant, une erreur est retournée.

In _filePath_, pass the path and name of the document to be imported. Les formats suivants sont pris en charge :

- Les documents 4D View Pro (extension ".4vp")
- Microsoft Excel (extension ".xlsx")
- documents texte (extension ".txt", ".csv", le document doit être en utf-8)
- [SpreadJS documents](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (extension ".sjs")

If the document extension is not a recognized extension, such as `.4vp` or `.xlsx`, the document is considered a text document. Vous devez passer un chemin d'accès complet, sauf si le document est situé au même niveau que le dossier Project, auquel cas vous pouvez simplement passer son nom.

An error is returned if the `filePath` parameter is invalid, or if the file is missing or malformed.

The optional _paramObj_ parameter allows you to define properties for the imported document:

| Paramètres |                     | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    |                     | 4D.Function | Une méthode callback à lancer lorsque l'import est terminé. You must use a formula returned by the [`Formula`](../../API/FunctionClass.md#formula) command. See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula).                                                                                                                            |
| password   |                     | text                        | Microsoft Excel uniquement (optionnel) - Mot de passe utilisé pour protéger un document Microsoft Excel.                                                                                                                                                                                                                                                                                                                   |
| csvOptions |                     | object                      | options d'import csv                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|            | range               | object                      | Plage de cellules contenant la première cellule dans laquelle les données seront saisies. Si la plage spécifiée n'est pas une plage de cellules, seule la première cellule de la plage est utilisée.                                                                                                                                                                                                                          |
|            | rowDelimiter        | text                        | Délimiteur de ligne. S'il n'est pas défini, le délimiteur est automatiquement déterminé par 4D.                                                                                                                                                                                                                                                                                                                               |
|            | columnDelimiter     | text                        | Délimiteur de colonne. Par défaut : ","                                                                                                                                                                                                                                                                                                                                                                                       |
| sjsOptions |                     | object                      | options d'import sjs                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|            | calcOnDemand        | boolean                     | Indique si les formules doivent être calculées uniquement lorsqu'elles sont demandées, la valeur par défaut est faux.                                                                                                                                                                                                                                                                                                                         |
|            | dynamicReferences   | boolean                     | Indique si les fonctions doivent être calculées avec des références dynamiques, la valeur par défaut est vrai.                                                                                                                                                                                                                                                                                                                                |
|            | fullRecalc          | boolean                     | Indique si le calcul doit être effectué après le chargement des données json, la valeur par défaut est faux.                                                                                                                                                                                                                                                                                                                                  |
|            | includeFormulas     | boolean                     | Whether to include the formulas when loading, default is true.                                                                                                                                                                                                                                                                                                                                                                                |
|            | includeStyles       | boolean                     | Whether to include the styles when loading, default is true.                                                                                                                                                                                                                                                                                                                                                                                  |
|            | includeUnusedStyles | boolean                     | Whether to include the unused name styles when converting excel xml to the json, default is true.                                                                                                                                                                                                                                                                                                                                             |
|            | openMode            | entier                      | <li>0 (normal): normal open mode, without lazy and incremental. When opening file, UI and UI event could be refreshed and responsive at specific time points.</li><li>1 (lazy): lazy open mode. When opening file, only the active sheet will be loaded directly. Other sheets will be loaded only when they are be used.</li><li>2 (incremental): incremental open mode. When opening file, UI and UI event could be refreshed and responsive directly.</li> |

:::note Notes

- Importing files in .xslx, .csv, and .sjs formats is **asynchronous**. With these formats, you must use the `formula` attribute if you want to start an action at the end of the document processing.
- When importing a Microsoft Excel-formatted file into a 4D View Pro document, some settings may be lost. You can verify your settings with [this list from SpreadJS](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport).
- For more information on the CSV format and delimiter-separated values in general, see [this article on Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values)

:::

#### Exemple 1

Vous souhaitez importer un document 4D View Pro stocké sur le disque, à l'ouverture du formulaire :

```4d
C_TEXT($docPath)
If(Form event code=On VP Ready) //La zone 4D View Pro est chargée et prête
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

#### Exemple 2

Vous souhaitez importer un document Microsoft Excel protégé par un mot de passe dans 4D View Pro :

```4d
	//Import code
var $o : Object
$o:=New object
$o.password:="excel123"
$o.formula:=Formula(myImport)
 
VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfilefile.xlsx";$o)
```

```4d
	//myImport callback method
#DECLARE($area : Text; $filePath : Text; $param : Object; $status : Object)

If ($status.success)
     ALERT("Import successfully completed")
Else 
     ALERT("Error: "+$status.errorMessage)
End if
```

#### Exemple 3

You want to import a `.txt` file that uses a comma (",") as delimiter:

![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

Here's the result:
![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv-result.png)

#### Voir également

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP NEW DOCUMENT](vp-new-document.md)
