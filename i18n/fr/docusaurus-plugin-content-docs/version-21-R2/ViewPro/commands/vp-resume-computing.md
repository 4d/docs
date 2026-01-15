---
id: vp-resume-computing
title: VP RESUME COMPUTING
---

<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->

**VP RESUME COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RESUME COMPUTING.Params -->

| Paramètres | Type |    | Description                             |                  |
| ---------- | ---- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro | <!-- END REF --> |

## Description

La commande `VP RESUME COMPUTING` <!-- REF #_method_.VP RESUME COMPUTING.Summary --> relance le calcul des formules dans *vpAreaName*<!-- END REF -->.

La commande réactive le service de calcul de 4D View Pro. Toutes les formules impactées par les changements effectués pendant que les calculs étaient suspendus sont mises à jour, et les formules ajoutées après l'exécution de `VP RESUME COMPUTING` sont calculées.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

> Le service de calcul de 4D View Pro maintient un compteur d'actions de suspension/reprise. Par conséquent, chaque exécution de `VP RESUME COMPUTING` doit être équilibrée par une exécution correspondante de la commande [VP SUSPEND COMPUTING](vp-suspend-computing.md).

## Exemple

Voir l'exemple dans [VP SUSPEND COMPUTING](vp-suspend-computing.md).

## Voir également

[VP RECOMPUTE FORMULAS](vp-recompute-formulas.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)