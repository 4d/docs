---
id: vp-set-sheet-name
title: VP SET SHEET NAME
---

<!-- REF #_method_.VP SET SHEET NAME.Syntax -->

**VP SET SHEET NAME** ( _vpAreaName_ : Text ; _name_ : Text {; _sheet_: Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHEET NAME.Params -->

| Paramètres | Type    |    | Description                             |                  |
| ---------- | ------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| name       | Text    | -> | Nouveau nom de la feuille               |                  |
| sheet      | Integer | -> | Index de la feuille à renommer          | <!-- END REF --> |

#### Description

La commande `VP SET SHEET NAME` <!-- REF #_method_.VP SET SHEET NAME.Summary -->renomme une feuille dans le document chargé dans _vpAreaName_<!-- END REF -->.

Dans _vpAreaName_, passez le nom de la zone 4D View Pro.

Dans _name_, passez le nouveau nom de la feuille.

Dans _sheet_, passez le numéro de la feuille à renommer.

> La numérotation démarre à 0.

Si aucune _sheet_ n'est fournie, la commande renomme la feuille courante.

Le nouveau nom ne peut pas contenir les caractères suivants : `*, :, [, ], ?,\,/`

La commande ne fait rien si :

- le nouveau nom contient des caractères interdits
- la valeur du nouveau nom est vide
- le nouveau nom existe déjà
- l'index _sheet_ transmis n'existe pas

#### Exemple

Le nom de la troisième feuille est "Total premier trimestre" :

```4d
VP SET SHEET NAME("ViewProArea";"Total first quarter";2)
```

![](../../assets/en/ViewPro/vp-sheet-index-name.png)
