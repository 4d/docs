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

La commande `VP ADD RANGE NAME` <!-- REF #_method_.VP ADD RANGE NAME.Summary -->crée ou modifie une plage nommée dans le document courant<!-- END REF -->.

> Les plages nommées créées par cette commande sont stockées dans le document.

Dans _rangeObj_, passez la plage que vous souhaitez nommer et dans _name_, passez le nouveau nom pour la plage. Si le nom est déjà utilisé dans le même scope, la nouvelle plage nommée remplace la plage existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

Vous pouvez passer un objet avec des propriétés supplémentaires pour la plage nommée dans _options_. Les propriétés suivantes sont prises en charge :

| Propriété | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Number | Scope de la plage. Vous pouvez passer l'index de la feuille (la numérotation commence à zéro) ou utiliser les constantes suivantes: <li>`vk current sheet`</li><li>`vk workbook`</li>Le scope détermine si le nom d'une plage est propre à une feuille (_scope_=sheet index ou `vk current sheet`), ou s'il s'applique à l'ensemble du classeur (_scope_=`vk workbook`). |
| comment   | Text   | Commentaire associé à une plage nommée                                                                                                                                                                                                                                                                                                                                                                                                                                            |

> - Une plage nommée est en réalité une formule nommée contenant des coordonnées. La commande `VP ADD RANGE NAME` facilite la création de plages nommées, mais vous pouvez également utiliser la méthode [`VP ADD FORMULA NAME`](vp-add-formula-name.md) pour créer des plages nommées.
> - Les formules définissant des plages nommées peuvent être récupérées à l'aide de la commande [`VP Get formula by name`](vp-get-formula-by-name.md).

#### Exemple

Vous souhaitez créer une plage nommée à partir d'une plage contenant une cellule :

```4d
$range:=VP Cell("ViewProArea";2;10)
VP ADD RANGE NAME($range;"Total1")
```

#### Voir également

[VP Get names](vp-get-names.md)<br/>
[VP Name](vp-name.md)
