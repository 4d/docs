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

**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| filePath   | Text   | -> | Chemin d'accès du document              |                  |
| paramObj   | Object | -> | Options d'import                        | <!-- END REF --> |

#### Description

La commande `VP IMPORT DOCUMENT` <!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->importe et affiche le document désigné par *filePath* dans la zone 4D View Pro *vpAreaName*<!-- END REF -->. Le document importé remplace toutes les données déjà présentes dans la zone.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *filePath*, passez le chemin et le nom du document à importer. Les formats suivants sont pris en charge :

- Les documents 4D View Pro (extension ".4vp")
- Microsoft Excel (extension ".xlsx")
- documents texte (extension ".txt", ".csv", le document doit être en utf-8)
- [Documents SpreadJS](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (extension ".sjs")

Si l'extension du document n'est pas une extension reconnue, telle que `.4vp` ou `.xlsx`, le document est considéré comme un document texte. Vous devez passer un chemin d'accès complet, sauf si le document est situé au même niveau que le dossier Project, auquel cas vous pouvez simplement passer son nom.

Une erreur est retournée si le paramètre `filePath` est invalide, ou si le fichier est manquant ou mal-formé.

Le paramètre optionnel *paramObj* vous permet de définir les propriétés du document importé:

| Paramètres |                     | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    |                     | 4D.Function | Une méthode callback à lancer lorsque l'import est terminé. Vous devez utiliser une formule retournée par la commande [`Formula`](../../API/FunctionClass.md#formula). See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula).                                                                                                                 |
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
|            | openMode            | integer                     | <li>0 (normal): normal open mode, without lazy and incremental. When opening file, UI and UI event could be refreshed and responsive at specific time points.</li><li>1 (lazy): lazy open mode. When opening file, only the active sheet will be loaded directly. Other sheets will be loaded only when they are be used.</li><li>2 (incremental): incremental open mode. When opening file, UI and UI event could be refreshed and responsive directly.</li> |

:::note Notes

- Importing files in .xslx, .csv, and .sjs formats is **asynchronous**. With these formats, you must use the `formula` attribute if you want to start an action at the end of the document processing.
- When importing a Microsoft Excel-formatted file into a 4D View Pro document, some settings may be lost. You can verify your settings with [this list from SpreadJS](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport).
- Pour plus d'informations sur le format CSV et les valeurs séparées par des délimiteurs en général, voir [cet article sur Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values)

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

Vous souhaitez importer un fichier `.txt` qui utilise une virgule (",") comme délimiteur:

![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

Voici le résultat :
![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv-result.png)

#### Voir également

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP NEW DOCUMENT](vp-new-document.md)
