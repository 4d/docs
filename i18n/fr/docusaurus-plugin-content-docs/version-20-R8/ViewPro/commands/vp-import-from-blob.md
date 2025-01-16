---
id: vp-import-from-blob
title: VP IMPORT FROM BLOB
---

<!-- REF #_method_.VP IMPORT FROM BLOB.Syntax -->

**VP IMPORT FROM BLOB** ( *vpAreaName* : Text ; *vpBlob* : 4D.blob { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM BLOB.Params -->

| Paramètres | Type                    |    | Description                             |                  |
| ---------- | ----------------------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text                    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| vpBlob     | 4D.Blob | -> | Blob contenant un document 4D View Pro  |                  |
| paramObj   | Object                  | -> | Options d'import                        | <!-- END REF --> |

#### Description

La commande `VP IMPORT FROM BLOB` <!-- REF #_method_.VP IMPORT FROM BLOB.Summary -->importe *vpBlob* dans la zone 4D View Pro *vpAreaName* et remplace son contenu<!-- END REF -->. *vpBlob* doit contenir un document 4D View Pro précédemment enregistré en tant que Blob soit en utilisant la commande [VP EXPORT TO BLOB](vp-export-to-blob.md) soit via l'interface 4D View Pro.

Dans *paramObj*, vous pouvez passer plusieurs propriétés :

| Propriété           | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula             | 4D.Function | Callback method to be launched when the import has completed. See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula).                                                                                                                                                                                                                                                                                                                                                                           |
| calcOnDemand        | Boolean                     | Whether to calculate formulas only when they are demanded, default=false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| dynamicReferences   | Boolean                     | Whether to calculate functions with dynamic reference, default=true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| fullRecalc          | Boolean                     | Indique si le calcul doit être effectué après le chargement des données json, la valeur par défaut est faux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| includeFormulas     | Boolean                     | Whether to include the formula when loading, default=true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| includeStyles       | Boolean                     | Whether to include the style when loading, default=true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| includeUnusedStyles | Boolean                     | Whether to include the unused name style when converting excel xml to the json, default=true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| openMode            | Integer                     | can be: <br/>0: normal open mode, without lazy and incremental. When opening document, UI and UI event could be refreshed and responsive at specific time points. <br/>1: lazy open mode. When opening document, only the active sheet will be loaded directly. Other sheets will be loaded only when they are be used. Other sheets will be loaded only when they are be used. <br/>2: incremental open mode. |

Les paramètres suivants peuvent être utilisés dans la méthode de rappel :

| Paramètres |                               | Type                    | Description                                              |
| :--------- | :---------------------------- | :---------------------- | :------------------------------------------------------- |
| param1     |                               | text                    | Nom de l'objet 4D View Pro                               |
| param2     |                               | 4D.Blob | Le blob importé                                          |
| param3     |                               | object                  | Une référence au paramètre *paramObj* de la commande     |
| param4     |                               | object                  | Objet retourné par la méthode avec un message de statut  |
|            | .success      | boolean                 | Vrai si l'import est réussi, Faux sinon. |
|            | .errorCode    | integer                 | Code d'erreur.                           |
|            | .errorMessage | text                    | Message d'erreur.                        |

#### Exemple

Vous souhaitez importer dans la "ViewProArea" un document 4D View Pro précédemment enregistré en tant que Blob dans la première entité de la dataclass Table.

```4d
var $myBlobDocument : 4D.Blob :=ds.Table.all().first().blob
VP IMPORT FROM BLOB("ViewProArea"; $myBlobDocument)

```

#### Voir également

[VP EXPORT TO BLOB](vp-export-to-blob.md)
