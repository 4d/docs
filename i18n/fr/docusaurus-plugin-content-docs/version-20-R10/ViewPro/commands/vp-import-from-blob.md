---
id: vp-import-from-blob
title: VP IMPORT FROM BLOB
---

<!-- REF #_method_.VP IMPORT FROM BLOB.Syntax -->

**VP IMPORT FROM BLOB** ( *vpAreaName* : Text ; *vpBlob* : 4D.Blob { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM BLOB.Params -->

| Paramètres | Type                    |    | Description                             |                  |
| ---------- | ----------------------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text                    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| vpBlob     | 4D.Blob | -> | Blob contenant un document 4D View Pro  |                  |
| paramObj   | Object                  | -> | Options d'import                        | <!-- END REF --> |

<details><summary>Historique</summary>

| Release | Modifications                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------- |
| 20 R9   | Déclenchement de la fonction de rappel après que les fonctions personnalisées soient terminées |

</details>

## Description

La commande `VP IMPORT FROM BLOB` <!-- REF #_method_.VP IMPORT FROM BLOB.Summary -->importe *vpBlob* dans la zone 4D View Pro *vpAreaName* et remplace son contenu<!-- END REF -->. *vpBlob* doit contenir un document 4D View Pro précédemment enregistré en tant que Blob soit en utilisant la commande [VP EXPORT TO BLOB](vp-export-to-blob.md) soit via l'interface 4D View Pro.

Dans *paramObj*, vous pouvez passer plusieurs propriétés :

| Propriété           | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula             | 4D.Function | Méthode callback à lancer lorsque l'import est terminé. See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| calcOnDemand        | Boolean                     | Indique si les formules doivent être calculées uniquement lorsqu'elles sont demandées, la valeur par défaut = faux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| dynamicReferences   | Boolean                     | Indique si les fonctions doivent être calculées avec une référence dynamique, par défaut = vrai.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| fullRecalc          | Boolean                     | Indique si le calcul doit être effectué après le chargement des données json, la valeur par défaut est faux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| includeFormulas     | Boolean                     | Indique s'il faut inclure la formule lors du chargement, par défaut = vrai.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| includeStyles       | Boolean                     | Indique s'il faut inclure le style lors du chargement, default = vrai.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| includeUnusedStyles | Boolean                     | Indiquez si le style de nom inutilisé doit être inclus lors de la conversion du fichier Excel Xml en Json. Valeur par défaut = vrai.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| openMode            | Integer                     | peut être : <br/>0 : mode ouvert normal, sans paresse et sans incrémentation. Lors de l'ouverture d'un document, l'interface utilisateur et l'événement d'interface utilisateur pourraient être rafraîchis et réactifs à des moments précis. <br/>1 : mode ouvert paresseux (lazy). Lors de l'ouverture d'un document, seule la feuille active sera chargée directement. Les autres feuilles ne seront chargées que lorsqu'elles seront utilisées. <br/>2 : mode d'ouverture incrémentielle. Lors de l'ouverture d'un document, l'interface utilisateur et l'événement d'interface utilisateur peuvent être actualisés et réactifs directement. |

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

:::note

The callback function specified in the `formula` attribute is triggered after all [4D custom functions](../formulas.md#4d-functions) within the imported content have completed their calculations. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved.

::::

## Exemple

Vous souhaitez importer dans la "ViewProArea" un document 4D View Pro précédemment enregistré en tant que Blob dans la première entité de la dataclass Table.

```4d
var $myBlobDocument : 4D.Blob :=ds.Table.all().first().blob
VP IMPORT FROM BLOB("ViewProArea"; $myBlobDocument)

```

## Voir également

[VP EXPORT TO BLOB](vp-export-to-blob.md)