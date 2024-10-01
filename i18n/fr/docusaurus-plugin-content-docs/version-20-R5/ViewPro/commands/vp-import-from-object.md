---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( _vpAreaName_ : Text  { ; _viewPro_ : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| viewPro    | Object | -> | Objet 4D View Pro                       | <!-- END REF --> |

#### Description

La commande `VP IMPORT FROM OBJECT` <!-- REF #_method_.VP IMPORT FROM OBJECT. ummary -->importe et affiche l'objet 4D View Pro _viewPro_ dans la zone 4D View Pro _vpAreaName_<!-- END REF -->. Le contenu de l'objet importé remplace toutes les données insérées auparavant dans la zone.

Dans _vpAreaName_, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans _viewPro_, passez un objet 4D View Pro valide. Cet objet peut avoir été créé en utilisant [VP Export to object](vp-export-to-object.md) ou manuellement. Pour plus d'informations sur les objets 4D View Pro, veuillez consulter la section [Objet 4D View Pro](../configuring.md#4d-view-pro-objet).

Une erreur est retournée si l'objet _viewPro_ est invalide.

#### Exemple

Vous souhaitez importer une feuille de calcul précédemment stockée dans un champ objet :

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### Voir également

[VP Export to object](vp-export-to-object.md)
