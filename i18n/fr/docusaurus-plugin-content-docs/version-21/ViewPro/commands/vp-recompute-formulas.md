---
id: vp-recompute-formulas
title: VP RECOMPUTE FORMULAS
---

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->

**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->

| Paramètres | Type |    | Description                             |                  |
| ---------- | ---- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro | <!-- END REF --> |

## Description

La commande `VP RECOMPUTE FORMULAS` <!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->évalue immédiatement toutes les formules dans *vpAreaName*<!-- END REF -->. Par défaut, 4D calcule automatiquement les formules lorsqu'elles sont insérées, importées ou exportées. `VP RECOMPUTE FORMULAS` vous permet de forcer le calcul à tout moment (par exemple, si des modifications sont apportées aux formules ou si les formules contiennent des appels à la base de données). La commande lance l'exécution de la commande [VP FLUSH COMMANDS](vp-flush-commands.md) pour exécuter toutes les commandes stockées et vider le buffer de commandes, puis calcule toutes les formules du classeur.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

> Assurez-vous que la commande [VP SUSPEND COMPUTING](vp-suspend-computing.md) n'a pas été exécutée avant d'utiliser `VP RECOMPUTE FORMULAS`, sinon la commande ne fait rien.

## Exemple

Pour actualiser toutes les forumules du workbook, saisissez le code suivant :

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

## Voir également

[VP RESUME COMPUTING](vp-resume-computing.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)
