---
id: right-click
title: Right click
slug: /commands/right-click
displayed_sidebar: docs
---

<!--REF #_command_.Right click.Syntax-->**Right click**  -> Résultat<!-- END REF-->
<!--REF #_command_.Right click.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si un clic droit a été détecté, sinon Faux |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Right click.Summary-->La commande **Right click** retourne Vrai si un clic effectué avec le bouton droit de la souris a été effectué.<!-- END REF--> 

Cette commande doit être appelée uniquement dans le cadre de l’événement formulaire On Clicked. Il est donc nécessaire de vérifier en mode Développement que cet événement a bien été coché dans les Propriétés du formulaire et/ou de l’objet. 

#### Voir aussi 

[Contextual click](contextual-click.md)  
[Form event code](form-event-code.md)  