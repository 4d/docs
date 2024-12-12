---
id: in-footer
title: In footer
slug: /commands/in-footer
displayed_sidebar: docs
---

<!--REF #_command_.In footer.Syntax-->**In footer**  : Boolean<!-- END REF-->
<!--REF #_command_.In footer.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si le cycle d'exécution est en pied |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.In footer.Summary-->**In footer** retourne Vrai pour le cycle d'exécution En pied.<!-- END REF-->

Si vous voulez que le cycle d'exécution **In footer** soit généré, vérifiez que la propriété d'événement On Printing Footer du formulaire et/ou des objets est sélectionnée en mode Développement. 

**Note :** Cette fonction équivaut à utiliser la fonction [Form event code](form-event-code.md) et tester si elle retourne l'événement On Printing Footer.

#### Voir aussi 

[In break](in-break.md)  
[In header](in-header.md)  