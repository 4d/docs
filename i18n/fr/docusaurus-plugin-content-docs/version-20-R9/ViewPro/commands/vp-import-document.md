---
id: vp-import-document
title: VP IMPORT DOCUMENT
---

<details><summary>Historique</summary>

| Release | Modifications                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------- |
| 20 R9   | Déclenchement de la fonction de rappel après que les fonctions personnalisées soient terminées |
| 20 R2   | Prise en charge des documents .sjs                                             |

</details>

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->

**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| filePath   | Text   | -> | Chemin d'accès du document              |                  |
| paramObj   | Object | -> | Options d'import                        | <!-- END REF --> |

## Description

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

| Paramètres   |                           | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula      |                           | 4D.Function | Une méthode callback à lancer lorsque l'import est terminé. Vous devez utiliser une formule retournée par la commande [`Formula`](../../commands/formula.md). See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula).                                                                                                                          |
| password     |                           | text                        | Microsoft Excel uniquement (optionnel) - Mot de passe utilisé pour protéger un document Microsoft Excel.                                                                                                                                                                                                                                                                                                                   |
| csvOptions   |                           | object                      | options d'import csv                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|              | range                     | object                      | Plage de cellules contenant la première cellule dans laquelle les données seront saisies. Si la plage spécifiée n'est pas une plage de cellules, seule la première cellule de la plage est utilisée.                                                                                                                                                                                                                          |
|              | rowDelimiter              | text                        | Délimiteur de ligne. S'il n'est pas défini, le délimiteur est automatiquement déterminé par 4D.                                                                                                                                                                                                                                                                                                                               |
|              | columnDelimiter           | text                        | Délimiteur de colonne. Par défaut : ","                                                                                                                                                                                                                                                                                                                                                                                       |
| sjsOptions   |                           | object                      | options d'import sjs                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|              | calcOnDemand              | boolean                     | Indique si les formules doivent être calculées uniquement lorsqu'elles sont demandées, la valeur par défaut est faux.                                                                                                                                                                                                                                                                                                                         |
|              | dynamicReferences         | boolean                     | Indique si les fonctions doivent être calculées avec des références dynamiques, la valeur par défaut est vrai.                                                                                                                                                                                                                                                                                                                                |
|              | fullRecalc                | boolean                     | Indique si le calcul doit être effectué après le chargement des données json, la valeur par défaut est faux.                                                                                                                                                                                                                                                                                                                                  |
|              | includeFormulas           | boolean                     | Whether to include the formulas when loading, default is true.                                                                                                                                                                                                                                                                                                                                                                                |
|              | includeStyles             | boolean                     | Whether to include the styles when loading, default is true.                                                                                                                                                                                                                                                                                                                                                                                  |
|              | includeUnusedStyles       | boolean                     | Whether to include the unused name styles when converting excel xml to the json, default is true.                                                                                                                                                                                                                                                                                                                                             |
|              | openMode                  | integer                     | <li>0 (normal): normal open mode, without lazy and incremental. When opening file, UI and UI event could be refreshed and responsive at specific time points.</li><li>1 (lazy): lazy open mode. When opening file, only the active sheet will be loaded directly. Other sheets will be loaded only when they are be used.</li><li>2 (incremental): incremental open mode. When opening file, UI and UI event could be refreshed and responsive directly.</li> |
| excelOptions |                           | object                      | Excel only (optional) - Options for Excel export                                                                                                                                                                                                                                                                                                                                                                                           |
|              | includeStyles             | boolean                     | Whether to include the style when importing, default true.                                                                                                                                                                                                                                                                                                                                                                                    |
|              | includeFormulas           | boolean                     | Whether to include the formula when importing, default true.                                                                                                                                                                                                                                                                                                                                                                                  |
|              | frozenColumnsAsRowHeaders | boolean                     | Whether to treat the frozen columns as row headers when importing, default false.                                                                                                                                                                                                                                                                                                                                                             |
|              | frozenRowsAsColumnHeaders | boolean                     | Whether to treat the frozen rows as column headers when importing, default false.                                                                                                                                                                                                                                                                                                                                                             |
|              | fullRecalc                | boolean                     | Indique si le calcul doit être effectué après le chargement des données json, la valeur par défaut est faux.                                                                                                                                                                                                                                                                                                                                  |
|              | dynamicReferences         | boolean                     | Whether to calculate functions with dynamic reference, default true.                                                                                                                                                                                                                                                                                                                                                                          |
|              | calcOnDemand              | boolean                     | Whether to calculate formulas only when they are demanded, default false.                                                                                                                                                                                                                                                                                                                                                                     |
|              | includeUnusedStyles       | boolean                     | Whether to include the unused name style when converting excel xml to the json, default true.                                                                                                                                                                                                                                                                                                                                                 |
|              | password                  | text                        | The password to open the workbook.                                                                                                                                                                                                                                                                                                                                                                                                            |
|              | openMode                  | text                        | The open mode of normal, lazy and incremental. By default is normal.                                                                                                                                                                                                                                                                                                                                                          |

:::note Notes

- L'importation de fichiers aux formats .xslx, .csv et .sjs est **asynchrone**. Avec ces formats, vous devez utiliser l'attribut `formula` si vous voulez démarrer une action à la fin du traitement du document.
- Lors de l'importation d'un fichier au format Microsoft Excel dans un document 4D View Pro, certains paramètres peuvent être perdus. Vous pouvez vérifier vos paramètres avec [cette liste de SpreadJS](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport).
- Pour plus d'informations sur le format CSV et les valeurs séparées par des délimiteurs en général, voir [cet article sur Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values)
- L'utilisation de l'objet *excelOptions* est recommandée pour l'importation du format ".xlsx". Make sure to not mix this object with legacy first level property *password* to avoid potiental issues.
- The callback function specified in the `formula` attribute is triggered after all [4D custom functions](../formulas.md#4d-functions) within the imported content have completed their calculations. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved.

:::

## Exemple 1

Vous souhaitez importer un document 4D View Pro stocké sur le disque, à l'ouverture du formulaire :

```4d
var $docPath : text
If(Form event code=On VP Ready) //Zone 4D View Pro chargée et prête
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

## Exemple 2

Vous souhaitez importer un document Microsoft Excel protégé par un mot de passe dans 4D View Pro :

```4d
	//Code import
var $o:={}
$o.formula:=Formula(myImport)
$excelOptions:={includeStyles:false;includeFormulas:true;password:"excel123"}
$o.excelOptions:=$excelOptions
 
VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfile.xlsx";$o)
```

```4d
	//Méthode de callback myImport
#DECLARE($area : Text; $filePath : Text; $param : Object; $status : Object)

If ($status.success)
     ALERT("Import successfully completed")
Else 
     ALERT("Error: "+$status.errorMessage)
End if
```

## Exemple 3

Vous souhaitez importer un fichier `.txt` qui utilise une virgule (",") comme délimiteur:

![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv.png)

```4d
var $params:={}
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

Voici le résultat :
![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv-result.png)

## Voir également

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP NEW DOCUMENT](vp-new-document.md)<br/>
[4D View Pro: Excel import/export update (blog post)](https://blog.4d.com/4d-view-pro-excel-import-export-update)

