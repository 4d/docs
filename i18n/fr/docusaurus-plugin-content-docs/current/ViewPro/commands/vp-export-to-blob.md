---
id: vp-export-to-blob
title: VP EXPORT TO BLOB
---

<!-- REF #_method_.VP EXPORT TO BLOB.Syntax -->

**VP EXPORT TO BLOB** ( *vpAreaName* : Text ; *paramObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP EXPORT TO BLOB.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| paramObj   | Object | -> | Options d'export                        | <!-- END REF --> |

#### Description

La commande `VP EXPORT TO BLOB` <!-- REF #_method_.VP EXPORT TO BLOB.Summary -->exporte le document 4D View Pro *vpAreaName* dans un 4D.Blob en fonction des options *paramObj*.<!-- END REF --> Le blob exporté est disponible par le callback export. Exporting and importing 4D View Pro areas as blobs is fast and memory-efficient.

Dans *paramObj*, vous pouvez passer plusieurs propriétés :

| Propriété               | Type                        | Description                                                                                                                                                                                                                                            |
| ----------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| formula                 | 4D.Function | (obligatoire) Méthode de rappel à lancer lorsque l'exportation est terminée. See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula). |
| includeAutoMergedCells  | Boolean                     | Whether to include the automatically merged cells when saving, default=false.                                                                                                                                                          |
| includeBindingSource    | Boolean                     | Whether to include the binding source when saving, default=true.                                                                                                                                                                       |
| includeCalcModelCache   | Boolean                     | Whether to include the extra data of calculation. Can impact the speed of opening the file, default=false.                                                                                                             |
| includeEmptyRegionCells | Boolean                     | Whether to include any empty cells(cells with no data or only style) outside the used data range, default=true                                                                                                                      |
| includeFormulas         | Boolean                     | Whether to include the formula when saving, default=true.                                                                                                                                                                              |
| includeStyles           | Boolean                     | Whether to include the style when saving, default=true.                                                                                                                                                                                |
| includeUnusedNames      | Boolean                     | Whether to include the unused custom name when saving, default=true.                                                                                                                                                                   |
| saveAsView              | Boolean                     | Whether to apply the format string to exporting value when saving, default=false.                                                                                                                                                      |

Les paramètres suivants peuvent être utilisés dans la méthode de rappel :

| Paramètres |                               | Type                    | Description                                              |
| :--------- | :---------------------------- | :---------------------- | :------------------------------------------------------- |
| param1     |                               | text                    | Nom de l'objet 4D View Pro                               |
| param2     |                               | 4D.blob | Le blob exporté                                          |
| param3     |                               | object                  | Une référence au paramètre *paramObj* de la commande     |
| param4     |                               | object                  | Objet retourné par la méthode avec un message de statut  |
|            | .success      | boolean                 | Vrai si l'export est réussi, Faux sinon. |
|            | .errorCode    | integer                 | Code d'erreur.                           |
|            | .errorMessage | text                    | Message d'erreur.                        |

#### Exemple

La commande `VP EXPORT TO BLOB` est asynchrone. Vous devez créer une méthode de callback (nommée *VPBlobCallback* dans notre exemple) pour utiliser les résultats d'exportation.

```4d
//Exporter le document VP
VP EXPORT TO BLOB("ViewProArea"; {formula: Formula(VPBlobCallback)})
```

```4d
//Méthode VPBlobCallback
#DECLARE($area : Text; $data : 4D.Blob; $parameters : Object; $status : Object)
var $myEntity : cs.myTableEntity

If ($status.success)
   // Enregistrer le document dans un tableau
   $myEntity:=ds.myTable.new()
   $myEntity.blob:=$data
   $myEntity.save()
End if

```

#### Voir également

[VP IMPORT FROM BLOB](vp-import-from-blob.md)
