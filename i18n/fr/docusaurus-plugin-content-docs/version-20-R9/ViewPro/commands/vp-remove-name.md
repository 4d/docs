---
id: vp-remove-name
title: VP REMOVE NAME
---

<!-- REF #_method_.VP REMOVE NAME.Syntax -->

**VP REMOVE NAME** ( *vpAreaName* : Text  ; *name*  : Text { ; *scope* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP REMOVE NAME.Params -->

| Paramètres | Type    |    | Description                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                        |                  |
| name       | Text    | -> | Nom de la plage nommée ou de la formule nommée à supprimer     |                  |
| scope      | Integer | -> | "Scope" cible (par défaut=feuille courante) | <!-- END REF --> |

## Description

La commande `VP REMOVE NAME` <!-- REF #_method_.VP REMOVE NAME.Summary -->supprime la plage nommée ou la formule nommée passée dans le paramètre *name* dans le *scope* défini<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez la plage nommée ou la formule nommée que vous voulez supprimer avec *name*.

Vous pouvez définir où supprimer le nom dans *scope* en utilisant soit l'index de la feuille (le comptage commence à 0), soit les constantes suivantes :

- `vk current sheet`
- `vk workbook`

## Exemple

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
//$formula=null
```

## Voir également

[VP Name](vp-name.md)