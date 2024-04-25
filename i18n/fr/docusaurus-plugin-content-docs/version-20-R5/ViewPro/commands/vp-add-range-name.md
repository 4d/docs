---
id: vp-add-range-name
title: VP ADD RANGE NAME
---

<!-- REF #_method_.VP ADD RANGE NAME.Syntax -->

**VP ADD RANGE NAME** ( _rangeObj_ : Object ; _name_ : Text { ; _options_ : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD RANGE NAME.Params -->

| Paramètres | Type   |    | Description                  |                  |
| ---------- | ------ | -- | ---------------------------- | ---------------- |
| rangeObj   | Object | -> | Objet plage                  |                  |
| name       | Text   | -> | Nom de la formule            |                  |
| options    | Object | -> | Options de la formule nommée | <!-- END REF --> |

#### Description

The `VP ADD RANGE NAME` command <!-- REF #_method_.VP ADD RANGE NAME.Summary -->creates or modifies a named range in the open document<!-- END REF -->.

> Les plages nommées créées par cette commande sont stockées dans le document.

In _rangeObj_, pass the range that you want to name and in _name_, pass the new name for the range. Si le nom est déjà utilisé dans le même scope, la nouvelle plage nommée remplace la plage existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

You can pass an object with additional properties for the named range in _options_. Les propriétés suivantes sont prises en charge :

| Propriété | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Number | Scope de la plage. You can pass the sheet index (counting begins at 0) or use the following constants: <li>`vk current sheet`</li><li>`vk workbook`</li>The scope determines whether a range name is local to a given worksheet (_scope_=sheet index or `vk current sheet`), or global across the entire workbook (_scope_=`vk workbook`). |
| comment   | Text   | Commentaire associé à une plage nommée                                                                                                                                                                                                                                                                                                                                                                                                              |

> - Une plage nommée est en réalité une formule nommée contenant des coordonnées. `VP ADD RANGE NAME` facilitates the creation of named ranges, but you can also use the [`VP ADD FORMULA NAME`](vp-add-formula-name.md) method to create named ranges.
> - Formulas defining named ranges can be retrieved with the [`VP Get formula by name`](vp-get-formula-by-name.md) method.

#### Exemple

Vous souhaitez créer une plage nommée à partir d'une plage contenant une cellule :

```4d
$range:=VP Cell("ViewProArea";2;10)
VP ADD RANGE NAME($range;"Total1")
```

#### Voir également

[VP Get names](vp-get-names.md)<br/>
[VP Name](vp-name.md)
