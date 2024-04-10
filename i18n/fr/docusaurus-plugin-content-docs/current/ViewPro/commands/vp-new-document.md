---
id: vp-new-document
title: VP NEW DOCUMENT
---

<!-- REF #_method_.VP NEW DOCUMENT.Syntax -->

**VP NEW DOCUMENT** ( _vpAreaName_ : Text ) <!-- END REF -->

<!-- REF #_method_.VP NEW DOCUMENT.Params -->

| Paramètres | Type |    | Description                             |                  |
| ---------- | ---- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro | <!-- END REF --> |

#### Description

The `VP NEW DOCUMENT` command <!-- REF #_method_.VP NEW DOCUMENT.Summary -->loads and display a new, default document in the 4D View Pro form area object _vpAreaName_<!-- END REF -->. Le nouveau document vide remplace toutes les données auparavant insérées dans la zone.

In _vpAreaName_, pass the name of the 4D View Pro area. Si vous passez un nom inexistant, une erreur est retournée.

#### Exemple

Vous souhaitez afficher un document vide dans l'objet formulaire "myVPArea" :

```4d
VP NEW DOCUMENT("myVPArea")
```

#### Voir également

[VP IMPORT DOCUMENT](vp-import-document.md)

---
