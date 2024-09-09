---
id: vp-get-formula-by-name
title: VP Get formula by name
---

<!-- REF #_method_.VP Get formula by name.Syntax -->

**VP Get formula by name** ( _vpAreaName_ : Text ; _name_ : Text { ; _scope_ : Number } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get formula by name.Params -->

| Paramètres | Type   |    | Description                                                    |                  |
| ---------- | ------ | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro                        |                  |
| name       | Text   | -> | Nom de la plage nommée                                         |                  |
| scope      | Number | -> | "Scope" cible (par défaut=feuille courante) |                  |
| Résultat   | Object | <- | Définition de la formule nommée ou de la plage nommée          | <!-- END REF --> |

#### Description

The `VP Get formula by name` command <!-- REF #_method_.VP Get formula by name.Summary --> returns the formula and comment corresponding to the named range or named formula passed in the _name_ parameter, or **null** if it does not exist in the defined scope<!-- END REF -->.

Dans _vpAreaName_, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Pass the named range or named formula that you want to get in _name_. A noter que les plages nommées sont retournées sous forme de formules contenant des références absolues de cellules.

You can define where to get the formula in _scope_ using either the sheet index (counting begins at 0) or the following constants:

- `vk current sheet`
- `vk workbook`

##### Objet retourné

L'objet retourné contient les propriétés suivantes :

| Propriété | Type | Description                                                                                                                                                                               |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula   | Text | Texte de la formule correspondant à la formule nommée ou à la plage nommée. Pour les plages nommées, la formule est une séquence de coordonnées absolues. |
| comment   | Text | Commentaire correspondant à la formule nommée ou à la plage nommée                                                                                                                        |

#### Exemple

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1
 
$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (if not existing)
```

#### Voir également

[VP ADD FORMULA NAME](vp-add-formula-name.md)<br/>
[VP Get names](vp-get-names.md)
