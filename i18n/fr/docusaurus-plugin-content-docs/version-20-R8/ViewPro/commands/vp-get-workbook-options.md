---
id: vp-get-workbook-options
title: VP Get workbook options
---

###

<!-- REF #_method_.VP Get workbook options.Syntax -->

**VP Get workbook options** ( *vpAreaName* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get workbook options.Params -->

| Paramètres | Type   |                             | Description                             |                  |
| ---------- | ------ | --------------------------- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | ->                          | Nom d'objet formulaire zone 4D View Pro |                  |
| Résultat   | Object | <- | Objet contenant les options de workbook | <!-- END REF --> |

#### Description

`VP Get workbook options` <!-- REF #_method_.Get workbook options.Summary -->
retourne un objet contenant toutes les options du workbook dans *vpAreaName*<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

The returned object contains all the workbook options (default and modified ones), in the workbook.

La liste des options du workbook est référencée dans la description de [`VP SET WORKBOOK OPTIONS`](vp-set-workbook-options.md).

#### Exemple

```4d
var $workbookOptions : Object

$workbookOptions:=VP Get workbook options("ViewProArea")
```

#### Voir également

[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
