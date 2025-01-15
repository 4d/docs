---
id: vp-add-formula-name
title: VP ADD FORMULA NAME
---

<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->

**VP ADD FORMULA NAME** ( *vpAreaName* : Text ; *vpFormula* : Text ; *name* : Text { ; *options* : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

| Paramètres | Type   |    | Description                             |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| vpFormula  | Text   | -> | Formule 4D View Pro                     |                  |
| name       | Text   | -> | Nom de la formule                       |                  |
| options    | Object | -> | Options de la formule nommée            | <!-- END REF --> |

#### Description

La commande `VP ADD FORMULA NAME` <!-- REF #_method_.VP ADD FORMULA NAME.Summary -->permet de créer ou de modifier une formule nommée dans le document courant<!-- END REF -->.

> Les formules nommées créées par cette commande sont stockées dans le document.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez la formule 4D View Pro que vous souhaitez nommer dans *vpFormula*. Pour plus d'informations sur la syntaxe des formules, veuillez consulter la page [Formules et Fonctions](../formulas.md).

Passez le nouveau nom de la formule dans *name*. Si le nom est déjà utilisé dans le même scope, la nouvelle formule nommée remplace la formule existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

Vous pouvez passer un objet avec des propriétés additionnelles pour la formule nommée dans *options*. Les propriétés suivantes sont prises en charge :

| Propriété | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Number | Scope de la formule. Vous pouvez passer l'index de la feuille (la numérotation commence à zéro) ou utiliser les constantes suivantes : <li>`vk current sheet`</li><li>`vk workbook`</li>Le scope détermine si le nom d'une formule est propre à une feuille (*scope*=sheet index ou `vk current sheet`), ou s'il s'applique à l'ensemble du classeur (*scope*=`vk workbook`). |
| comment   | Text   | Commentaire associé à une formule nommée                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Exemple

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### Voir également

[Cell references](../formulas.md#cell-references)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Get names](vp-get-names.md)
