---
id: vp-export-document
title: VP EXPORT DOCUMENT
---

<details><summary>Historique</summary>

| Release | Modifications                             |
| ------- | ----------------------------------------- |
| 20 R2   | Support of .sjs documents |

</details>

<!-- REF #_method_.VP EXPORT DOCUMENT.Syntax -->

**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->

<!-- REF #_method_.VP EXPORT DOCUMENT.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| filePath   | Text   | -> | Chemin d'accès du document              |                  |
| paramObj   | Object | -> | Options d'export                        | <!-- END REF --> |

#### Description

La commande `VP EXPORT DOCUMENT` <!-- REF #_method_.VP EXPORT DOCUMENT.Summary -->exporte l'objet 4D View Pro attaché à la zone 4D View Pro *vpAreaName* vers un document sur disque en fonction des paramètres *filePath* et *paramObj*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *filePath*, passez le chemin de destination et le nom du document à exporter. Si vous ne spécifiez pas de chemin, le document sera sauvegardé au même niveau que le dossier Projet.

Vous pouvez préciser le format du document en incluant une extension après son nom :

- 4D View Pro (".4vp")
- Microsoft Excel (".xlsx")
- PDF (".pdf")
- CSV (".txt", or ".csv")
- [SpreadJS document](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (".sjs")

If the extension is not included, but the format is specified in *paramObj*, the exported file will have the extension that corresponds to the format, except for the CSV format (no extension is added in this case).

The optional *paramObj* parameter allows you to define multiple properties for the exported 4D View Pro object, as well as launch a callback method when the export has completed.

| Propriété            | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format               | text                        | (optionnel) S'il est présent, désigne le format du fichier exporté : ".4vp" (par défaut), ".csv", ".xlsx", ".pdf", ou ".sjs". You can use the following constants:<li>`vk 4D View Pro format`</li><li>`vk csv format`</li><li>`vk MS Excel format`</li><li>`vk pdf format`</li><li>`vk sjs format`</li>4D adds the appropriate extension to the file name if needed. If the format specified doesn't correspond with the extension in *filePath*, it will be added to the end of *filePath*. If a format is not specified and no extension is provided in *filePath*, the default file format is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| password             | text                        | Microsoft Excel uniquement (optionnel) - Mot de passe utilisé pour protéger le document MS Excel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| formula              | 4D.Function | Méthode callback à lancer lorsque l'export est terminé. L'utilisation d'une méthode callback est nécessaire lorsque l'export est asynchrone (ce qui est le cas pour les formats PDF et Excel) si vous avez besoin d'un code à exécuter après l'export. The callback method must be passed with the [`Formula`](../../API/FunctionClass.md#formula) command. See [Passing a callback method (formula)](#passing-a-callback-method-formula).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| valuesOnly           | boolean                     | Précise que seules les valeurs issues de formules (le cas échéant) seront exportées.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| includeFormatInfo    | boolean                     | True pour inclure les informations de formatage, sinon False (True par défaut). Les informations de formatage sont utiles dans certains cas, par exemple pour un export en SVG. On the other hand, setting this property to **false** allows reducing export time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| includeBindingSource | boolean                     | 4DVP et Microsoft Excel uniquement. True (par défaut) pour exporter les valeurs du contexte de données courant en tant que valeurs de cellule dans le document exporté (les contextes de données eux-mêmes ne sont pas exportés). Sinon Faux. La liaison de cellule est toujours exportée. For data context and cell binding management, see [VP SET DATA CONTEXT](vp-set-data-context.md) and [VP SET BINDING PATH](vp-set-binding-path.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| sheetIndex           | number                      | PDF uniquement (optionnel) - Numéro de la feuille à exporter (débute à 0). -2=all visible sheets (**default**), -1=current sheet only                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| pdfOptions           | object                      | PDF only (optional) - Options for pdf export <p><table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>creator</td><td>text</td><td>name of the application that created the original document from which it was converted.</td></tr><tr><td>title</td><td>text</td><td>title of the document.</td></tr><tr><td>author</td><td>text</td><td>name of the person who created that document.</td></tr><tr><td>keywords</td><td>text</td><td>keywords associated with the document.</td></tr><tr><td>subject</td><td>text</td><td>subject of the document.</td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| csvOptions           | object                      | CSV only (optional) - Options for csv export <p><table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>range</td><td>object</td><td>Range object of cells</td></tr><tr><td>rowDelimiter</td><td>text</td><td>Row delimiter. Default: <code>"\r\n"</code></td></tr><tr><td>columnDelimiter</td><td>text</td><td>Column delimiter. Default: <code>","</code></td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| sjsOptions           | object                      | SJS only (optional) - Options for sjs export <p><table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>includeAutoMergedCells</td><td>boolean</td><td>whether to include the automatically merged cells, default is false.</td></tr><tr><td>includeBindingSource</td><td>boolean</td><td>whether to include the binding source, default is true.</td></tr><tr><td>includeCalcModelCache</td><td>boolean</td><td>whether to include the extra data of calculation. Can be faster when open the file with those data, default is false.</td></tr><tr><td>includeEmptyRegionCells</td><td>boolean</td><td>whether to include any empty cells (cells with no data or only style) outside the used data range, default is true.</td></tr><tr><td>includeFormulas</td><td>boolean</td><td>whether to include the formulas, default is true.</td></tr><tr><td>includeStyles</td><td>boolean</td><td>whether to include the style, default is true.</td></tr><tr><td>includeUnusedNames</td><td>boolean</td><td>whether to include the unused custom names, default is true.</td></tr><tr><td>saveAsView</td><td>boolean</td><td>whether to apply the format string to exporting values, default is false.</td></tr></table></p> |
| `\<customProperty>` | any                         | Propriété personnalisée qui sera disponible via le paramètre $3 dans la méthode de callback.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

**Notes about Excel format**:

- Lors de l'export d'un document 4D View Pro en un fichier au format Microsoft Excel, certains paramètres peuvent être perdus. Par exemple, les méthodes et formules 4D ne sont pas prises en charge par Excel. You can verify other settings with [this list from SpreadJS](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport).
- Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

**Notes about PDF format**:

- Lors de l'export d'un document 4D View Pro en un fichier au format PDF, les polices utilisées dans le document sont automatiquement intégrées dans le fichier PDF. Seules les polices OpenType (fichiers .OTF ou .TTF) ayant une table Unicode peuvent être intégrées. Si aucun fichier de polices valide n'est trouvé pour une police, une police par défaut est utilisée à sa place.
- Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

**Notes about CSV format**:

- Lors de l'export d'un document 4D View Pro en un fichier au format PDF, certains paramètres peuvent être perdus, car seuls le texte et les valeurs sont sauvegardés.
- Toutes les valeurs sont enregistrées sous la forme de chaînes entre guillemets. For more information on delimiter-separated values, see [this article on Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values).
- Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

**Notes about SpreadJS file format**:

- [SpreadJS files](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) are zipped files.
- Exporting in this format is run asynchronously, use the `formula` property of the *paramObj* for code to be executed after the export.

Once the export operation is finished, `VP EXPORT DOCUMENT` automatically triggers the execution of the method set in the *formula* property of the *paramObj*, if used.

#### Passer une méthode callback (formula)

When including the optional *paramObj* parameter, the command allows you to use the [`Formula`](../../API/FunctionClass.md#formula) command to call a 4D method which will be executed once the export has completed. La méthode callback recevra les valeurs suivantes dans des variables locales :

| Paramètres |                               | Type    | Description                                              |
| ---------- | ----------------------------- | ------- | -------------------------------------------------------- |
| param1     |                               | text    | Nom de l'objet 4D View Pro                               |
| param2     |                               | text    | Chemin d'accès de l'objet 4D View Pro exporté            |
| param3     |                               | object  | A reference to the command's *paramObj*                  |
| param4     |                               | object  | Objet retourné par la méthode avec un message de statut  |
|            | .success      | boolean | Vrai si l'export est réussi, Faux sinon. |
|            | .errorCode    | integer | Code d'erreur.                           |
|            | .errorMessage | text    | Message d'erreur.                        |

#### Exemple 1

Vous souhaitez exporter le contenu de la zone "VPArea" vers un document 4D View Pro sur le disque :

```4d
var $docPath: Text

$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
VP EXPORT DOCUMENT("VPArea";$docPath)
//MyExport.4VP est sauvegardé sur votre disque
```

#### Exemple 2

Vous souhaitez exporter la feuille courante au format PDF :

```4d
var $params: Object
$params:=New object
$params.format:=vk pdf format
$params.sheetIndex:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```

#### Exemple 3

Vous souhaitez exporter un document 4D View Pro au format ".xlsx" et appeler une méthode qui lance Microsoft Excel avec le document ouvert une fois que l'export est terminé :

```4d
 $params:=New object
 $params.formula:=Formula(AfterExport)
 $params.format:=vk MS Excel format //".xlsx"
 $params.valuesOnly:=True

 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile";$params)
```

***AfterExport*** method:

```4d
 #DECLARE($areaName : Text ; $filePath : Text ; $params : Object ; $status : Object )

 If($status.success=False)
    ALERT($status.errorMessage)
 Else
    LAUNCH EXTERNAL PROCESS("C:\\Program Files\\Microsoft Office\\Office15\\excel "+$filePath)
 End if
```

#### Exemple 4

You want to export the current sheet to a `.txt` file with pipe-separated values:

![example-export-csv](../../assets/en/ViewPro/vp-export-document-csv.png)

```4d
var $params : Object
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
$params.rowDelimiter:="\n"
$params.columnDelimiter:="|"
VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\data.txt";New object("format";vk csv format;"csvOptions";$params))
```

Voici le résultat :

![example-export-csv](../../assets/en/ViewPro/vp-export-document-csv-result.png)

#### Voir également

[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP Export to object](vp-export-to-object.md)<br/>
[VP IMPORT DOCUMENT](vp-import-document.md)<br/>
[VP Print](vp-print.md)
