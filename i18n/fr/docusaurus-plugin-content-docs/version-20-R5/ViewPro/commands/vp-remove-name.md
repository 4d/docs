---
id: vp-remove-name
title: VP REMOVE NAME
---

<!-- REF #_method_.VP REMOVE NAME.Syntax -->

**VP REMOVE NAME** ( _vpAreaName_ : Text  ; _name_  : Text { ; _sheet_ : Integer } )<!-- END REF -->

<!-- REF #_method_.VP REMOVE NAME.Params -->

| Paramètres | Type    |    | Description                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                        |                  |
| name       | Text    | -> | Nom de la plage nommée ou de la formule nommée à supprimer     |                  |
| scope      | Integer | -> | "Scope" cible (par défaut=feuille courante) | <!-- END REF --> |

#### Description

The `VP REMOVE NAME` command <!-- REF #_method_.VP REMOVE NAME.Summary -->removes the named range or named formula passed in the _name_ parameter in the defined _scope_<!-- END REF -->.

Dans _vpAreaName_, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Pass the named range or named formula that you want to remove in _name_.

You can define where to remove the name in _scope_ using either the sheet index (counting begins at 0) or the following constants:

- `vk current sheet`
- `vk workbook`

#### Exemple

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
//$formula=null
```

#### Voir également

[VP Name](vp-name.md)
