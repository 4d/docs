---
id: vp-get-sheet-options
title: VP Get sheet options
---

<!-- REF #_method_.VP Get sheet options.Syntax -->

**VP Get sheet options** ( _vpAreaName_ : Text {; _sheet_ : Integer } ) ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get sheet options.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Object  | <- | Objet options de la feuille                                                 | <!-- END REF --> |

#### Description

The `VP Get sheet options` command <!-- REF #_method_.VP Get sheet options.Summary -->returns an object containing the current sheet options of the _vpAreaName_ area<!-- END REF -->.

Pass the name of the 4D View Pro area in _vpAreaName_. Si vous passez un nom inexistant, une erreur est retournée.

In the optional _sheet_ parameter, you can designate a specific spreadsheet (counting begins at 0). If omitted or if you pass `vk current sheet`, the current spreadsheet is used.

#### Objet retourné

La commande retourne un objet contenant les valeurs courantes pour toutes les options de feuille disponibles. An option value may have been modified by the user or by the [VP SET SHEET OPTIONS](vp-set-sheet-options.md) method.

To view the full list of the options, see [Sheet Options](../configuring.md#sheet-options).

#### Exemple

```4d
$options:=VP Get sheet options("ViewProArea")
 If($options.colHeaderVisible) //les en-têtes des colonnes sont visibles
    ... //faire quelque chose
 End if
```

#### Voir également

[4D VIEW PRO SHEET OPTIONS](../configuring.md#sheet-options)<br/>
[VP SET SHEET OPTIONS](vp-set-sheet-options.md)
