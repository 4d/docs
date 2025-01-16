---
id: in-break
title: In break
slug: /commands/in-break
displayed_sidebar: docs
---

<!--REF #_command_.In break.Syntax-->**In break**  : Boolean<!-- END REF-->
<!--REF #_command_.In break.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si le cycle d'exécution est en rupture |

<!-- END REF-->

#### Description 

<!--REF #_command_.In break.Summary-->**In break** retourne Vrai pour le cycle d'exécution En rupture.<!-- END REF--> 

Si vous souhaitez que le cycle d'exécution **In break** soit généré, assurez-vous que l'événement formulaire On Printing Break a bien été activé dans la boîte de dialogue des propriétés du formulaire ou du (des) objet(s) sélectionné(s), en mode Développement. 

**Note :** Cette commande équivaut à utiliser la commande [Form event code](form-event-code.md) et tester si elle retourne l'événement On Printing Break.

#### Voir aussi 

[In footer](in-footer.md)  
[In header](in-header.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 113 |
| Thread safe | &cross; |


