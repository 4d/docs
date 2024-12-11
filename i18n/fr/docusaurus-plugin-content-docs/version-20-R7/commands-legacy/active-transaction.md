---
id: active-transaction
title: Active transaction
slug: /commands/active-transaction
displayed_sidebar: docs
---

<!--REF #_command_.Active transaction.Syntax-->**Active transaction** : Boolean<!-- END REF-->
<!--REF #_command_.Active transaction.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Faux si la transaction courante est suspendue |

<!-- END REF-->

#### Description 

<!--REF #_command_.Active transaction.Summary-->La commande **Active transaction** retourne **Vrai** si le process courant est en transaction et si cette transaction n'est pas suspendue.<!-- END REF--> Elle retourne **Faux** s'il n'y a pas de transaction en cours, ou si la transaction en cours est suspendue. Une transaction peut être suspendue à l'aide de la commande [SUSPEND TRANSACTION](suspend-transaction.md). 

Comme cette commande retourne également **Faux** lorsque le process courant n'est pas en transaction, vous aurez besoin d'utiliser la commande [In transaction](in-transaction.md) afin de vérifier que le process est bien en transaction. 

Pour plus d'informations, reportez-vous à la section *Suspendre des transactions*. 

#### Description 

Vous voulez connaître le statut courant de transaction :

```4d
 If(In transaction)
    If(Not(Active transaction))
       ALERT("La transaction courante est suspendue")
    Else
       ALERT("La transaction courante est active")
    End if
 Else
    ALERT("Nous ne sommes pas en transaction")
 End if
```

#### Voir aussi 

[In transaction](in-transaction.md)  
[RESUME TRANSACTION](resume-transaction.md)  
[SUSPEND TRANSACTION](suspend-transaction.md)  
*Suspendre des transactions*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1387 |
| Thread safe | &check; |
| Interdite sur le serveur ||


