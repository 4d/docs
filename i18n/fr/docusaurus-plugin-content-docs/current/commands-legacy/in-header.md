---
id: in-header
title: In header
slug: /commands/in-header
displayed_sidebar: docs
---

<!--REF #_command_.In header.Syntax-->**In header**  -> Résultat<!-- END REF-->
<!--REF #_command_.In header.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#x1F850; | Vrai si le cycle d'exécution est en entête |

<!-- END REF-->

#### Description 

<!--REF #_command_.In header.Summary-->**In header** retourne Vrai pour le cycle d'exécution En entête.<!-- END REF--> 

Si vous souhaitez que le cycle d'exécution **In header** soit généré, assurez-vous que l'événement formulaire On Header a bien été activé dans la boîte de dialogue des propriétés du formulaire ou du (des) objet(s) sélectionné(s), en mode Développement.

**Note :** Cette commande équivaut à utiliser la commande [Form event code](form-event-code.md) et tester si elle retourne l'événement On Header.

#### Voir aussi 

*\_o\_During*  
[In break](in-break.md)  
[In footer](in-footer.md)  