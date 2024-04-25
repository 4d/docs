---
id: vp-add-formula-name
title: VP ADD FORMULA NAME
---

<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->

**VP ADD FORMULA NAME** ( _vpAreaName_ : Text ; _vpFormula_ : Text ; _name_ : Text { ; _options_ : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| vpFormula  | Text   | -> | Formule 4D View Pro                     |                  |
| name       | Text   | -> | Nom de la formule                       |                  |
| options    | Object | -> | Options de la formule nommée            | <!-- END REF --> |

#### Description

The `VP ADD FORMULA NAME` command <!-- REF #_method_.VP ADD FORMULA NAME.Summary -->creates or modifies a named formula in the open document<!-- END REF -->.

> Les formules nommées créées par cette commande sont stockées dans le document.

In _vpAreaName_, pass the name of the 4D View Pro area. Si vous passez un nom inexistant, une erreur est retournée.

Pass the 4D View Pro formula that you want to name in _vpFormula_. For detailed information about formula syntax, see [Formulas and Functions](../formulas.md) page.

Pass the new name for the formula in _name_. Si le nom est déjà utilisé dans le même scope, la nouvelle formule nommée remplace la formule existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

You can pass an object with additional properties for the named formula in _options_. Les propriétés suivantes sont prises en charge :

| Propriété | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Number | Scope de la formule. You can pass the sheet index (counting begins at 0) or use the following constants: <li>`vk current sheet`</li><li>`vk workbook`</li>The scope determines whether a formula name is local to a given worksheet (_scope_=sheet index or `vk current sheet`), or global across the entire workbook (_scope_=`vk workbook`). |
| comment   | Text   | Commentaire associé à une formule nommée                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Exemple

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### Voir également

[Cell references](../formulas.md#cell-references)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Get names](vp-get-names.md)
