---
id: before
title: Before
slug: /commands/before
displayed_sidebar: docs
---

<!--REF #_command_.Before.Syntax-->**Before**  -> Résultat<!-- END REF-->
<!--REF #_command_.Before.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si le cycle d'exécution est avant |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Before.Summary-->**Before** retourne Vrai pour le cycle d'exécution Avant.<!-- END REF-->

Si vous souhaitez que la phase **Before** du cycle d'exécution soit générée, assurez-vous que l'événement On Load a bien été sélectionné, en mode Développement, dans les propriétés du formulaire et/ou des objets concernés.

**Note :** Cette commande équivaut à utiliser la fonction [Form event code](form-event-code.md) et tester si elle retourne l'événement On Load.

#### Voir aussi 

[Form event code](form-event-code.md)  