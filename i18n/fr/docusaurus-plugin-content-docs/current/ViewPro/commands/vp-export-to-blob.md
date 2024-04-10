---
id: vp-export-to-blob
title: VP EXPORT TO BLOB
---

<!-- REF #_method_.VP EXPORT TO BLOB.Syntax -->

**VP EXPORT TO BLOB** ( _vpAreaName_ : Text ; _paramObj_ : Object ) <!-- END REF -->

<!-- REF #_method_.VP EXPORT TO BLOB.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| paramObj   | Object | -> | Options d'export                        | <!-- END REF --> |

#### Description

The `VP EXPORT TO BLOB` command <!-- REF #_method_.VP EXPORT TO BLOB.Summary -->exports the _vpAreaName_ 4D View Pro document in a 4D.Blob according to the _paramObj_ options.<!-- END REF --> The exported blob is available through the export callback. Exporting and importing 4D View Pro areas as blobs is fast and memory-efficient.

In _paramObj_, you can pass several properties:

| Propriété               | Type                        | Description                                                                                                                                                                                                                                         |
| ----------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula                 | 4D.Function | (mandatory) Callback method to be launched when the export has completed. See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula). |
| includeAutoMergedCells  | Boolean                     | Whether to include the automatically merged cells when saving, default=false.                                                                                                                                                       |
| includeBindingSource    | Boolean                     | Whether to include the binding source when saving, default=true.                                                                                                                                                                    |
| includeCalcModelCache   | Boolean                     | Whether to include the extra data of calculation. Can impact the speed of opening the file, default=false.                                                                                                          |
| includeEmptyRegionCells | Boolean                     | Whether to include any empty cells(cells with no data or only style) outside the used data range, default=true                                                                                                                   |
| includeFormulas         | Boolean                     | Whether to include the formula when saving, default=true.                                                                                                                                                                           |
| includeStyles           | Boolean                     | Whether to include the style when saving, default=true.                                                                                                                                                                             |
| includeUnusedNames      | Boolean                     | Whether to include the unused custom name when saving, default=true.                                                                                                                                                                |

|saveAsView|Boolean|Whether to apply the format string to exporting value when saving, default=false.|

Les paramètres suivants peuvent être utilisés dans la méthode de rappel :

| Paramètres |                               | Type                    | Description                                              |
| :--------- | :---------------------------- | :---------------------- | :------------------------------------------------------- |
| param1     |                               | text                    | Nom de l'objet 4D View Pro                               |
| param2     |                               | 4D.blob | The exported blob                                        |
| param3     |                               | object                  | A reference to the command's _paramObj_ parameter        |
| param4     |                               | object                  | Objet retourné par la méthode avec un message de statut  |
|            | .success      | boolean                 | Vrai si l'export est réussi, Faux sinon. |
|            | .errorCode    | entier                  | Code d'erreur.                           |
|            | .errorMessage | text                    | Message d'erreur.                        |

#### Exemple

The command `VP EXPORT TO BLOB` is asynchronous. You must create a callback method (named _VPBlobCallback_ in our example) to use the export results.

```4d
//Export the VP document
VP EXPORT TO BLOB("ViewProArea"; {formula: Formula(VPBlobCallback)})
```

```4d
//VPBlobCallback method
#DECLARE($area : Text; $data : 4D.Blob; $parameters : Object; $status : Object)
var $myEntity : cs.myTableEntity

If ($status.success)
   // Save the document in a table
   $myEntity:=ds.myTable.new()
   $myEntity.blob:=$data
   $myEntity.save()
End if

```

#### Voir également

[VP IMPORT FROM BLOB](vp-import-from-blob.md)
