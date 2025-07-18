---
id: vp-suspend-computing
title: VP SUSPEND COMPUTING
---

<!-- REF #_method_.VP SUSPEND COMPUTING.Syntax -->

**VP SUSPEND COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP SUSPEND COMPUTING.Params -->

| Paramètres | Type |    | Description                             |                  |
| ---------- | ---- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro | <!-- END REF --> |

## Description

La commande `VP SUSPEND COMPUTING` <!-- REF #_method_.VP SUSPEND COMPUTING.Summary -->arrête le calcul de toutes les formules dans *vpAreaName*<!-- END REF -->. Cette commande est utile lorsque vous souhaitez suspendre les calculs dans cette zone 4D View Pro, afin de modifier manuellement les formules sans générer d'erreurs avant la fin de vos modifications.

La commande met en pause les calculs dans 4D View Pro. Les formules déjà calculées restent inchangées, mais les formules ajoutées après l'exécution de la commande `VP SUSPEND COMPUTING` ne sont pas calculées.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

> Le service de calcul de 4D View Pro maintient un compteur d'actions de suspension/reprise. Par conséquent, chaque exécution de la commande `VP SUSPEND COMPUTING` doit être balancée par une exécution correspondante de la commande `VP RESUME COMPUTING`. Toute formule modifiée durant la phase de suspension des calculs sera recalculée lorsque la commande sera exécutée.

## Exemple

Vous avez ajouté deux boutons au formulaire afin que l'utilisateur puisse suspendre/reprendre les calculs :

![](../../assets/en/ViewPro/cmd_vpStopCalculations.PNG)

Le code du bouton Suspend Computing :

```4d
 //mettre les calculs sur pause pendant que les utilisateurs saisissent les informations
 If(FORM Event.code=On Clicked)
 
    VP SUSPEND COMPUTING("ViewProArea")
 
 End if
```

```4d
If(FORM Event.code=On Clicked)
 
    VP RESUME COMPUTING("ViewProArea")
 
End if
```

## Voir également

[VP RECOMPUTE FORMULAS](vp-recompute-formulas.md)<br/>
[VP RESUME COMPUTING](vp-resume-computing.md)
