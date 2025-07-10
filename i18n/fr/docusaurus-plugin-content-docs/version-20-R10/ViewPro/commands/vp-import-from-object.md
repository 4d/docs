---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<details><summary>Historique</summary>

| Release | Modifications                   |
| ------- | ------------------------------- |
| 20 R9   | Support of *paramObj* parameter |

</details>

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object { ; *paramObj* : Object} } ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| Paramètres | Type   |    | Description                                  |
| ---------- | ------ | -- | -------------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro      |
| viewPro    | Object | -> | Objet 4D View Pro                            |
| paramObj   | Object | -> | (Optional) import options |

<!-- END REF -->

## Description

La commande `VP IMPORT FROM OBJECT` <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->importe et affiche l'objet 4D View Pro *viewPro* dans la zone 4D View Pro *vpAreaName*<!-- END REF -->. Le contenu de l'objet importé remplace toutes les données insérées auparavant dans la zone.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *viewPro*, passez un objet 4D View Pro valide. Cet objet peut avoir été créé en utilisant [VP Export to object](vp-export-to-object.md) ou manuellement. Pour plus d'informations sur les objets 4D View Pro, veuillez consulter la section [Objet 4D View Pro](../configuring.md#4d-view-pro-objet).

Une erreur est retournée si l'objet *viewPro* est invalide.

In *paramObj*, you can pass the following property:

| Propriété | Type                        | Description                                                                                                                                                                                                                                                                                 |
| --------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula   | 4D.Function | (Optional) Callback function to be executed when the object is loaded and all 4D custom functions have responded. See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula). |

Les paramètres suivants peuvent être utilisés dans la méthode de rappel :

| Paramètres |                               | Type    | Description                                                |
| ---------- | ----------------------------- | ------- | ---------------------------------------------------------- |
| param1     |                               | Text    | Nom de l'objet 4D View Pro                                 |
| param2     |                               | Text    | Reserved for compatibility, this parameter is always empty |
| param3     |                               | Object  | Une référence au paramètre *paramObj* de la commande       |
| param4     |                               | Object  | Objet retourné par la méthode avec un message de statut    |
|            | .success      | Boolean | `True` if import was successful, `False` otherwise         |
|            | .errorCode    | Integer | Code d'erreur                                              |
|            | .errorMessage | Text    | Message d'erreur                                           |

:::note

The callback function specified in the `formula` attribute is triggered after all [4D custom functions](../formulas.md#4d-functions) within the imported content have completed their calculations. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved.

:::

## Exemple

You want to import a spreadsheet that was previously saved in an object field, and trigger a callback function after all 4D custom functions have responded:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)

VP IMPORT FROM OBJECT("ViewProArea1"; [VPWorkBooks]SPBook; {formula: Formula(onImportComplete)})
```

```4d
// Method 'onImportComplete'
#DECLARE($name : Text; $path : Text; $paramObj : Object; $status : Object)
   ALERT("The document has been imported, and all custom functions have finished processing.")
```

## Voir également

[VP Export to object](vp-export-to-object.md)