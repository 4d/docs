---
id: after
title: After
slug: /commands/after
displayed_sidebar: docs
---

<!--REF #_command_.After.Syntax-->**After**  : Boolean<!-- END REF-->
<!--REF #_command_.After.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Retourne Vrai si le cycle d'exécution est après |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.After.Summary-->**After** retourne Vrai pour le cycle d'exécution Après.<!-- END REF-->

Si vous souhaitez que la phase **After** du cycle d'exécution soit générée, assurez-vous que l'événement On Validate a bien été sélectionné, en mode Développement, dans les propriétés du formulaire et/ou des objets concernés.

**Note :** Cette commande équivaut à utiliser la fonction [Form event code](form-event-code.md) et tester si elle retourne l'événement On Validate.

#### Voir aussi 

[Form event code](form-event-code.md)  