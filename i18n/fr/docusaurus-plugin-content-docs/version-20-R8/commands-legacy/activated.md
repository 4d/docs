---
id: activated
title: Activated
slug: /commands/activated
displayed_sidebar: docs
---

<!--REF #_command_.Activated.Syntax-->**Activated**  : Boolean<!-- END REF-->
<!--REF #_command_.Activated.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si le cycle d'exécution est en activation |

<!-- END REF-->

#### Description 

<!--REF #_command_.Activated.Summary-->**Activated** retourne Vrai dans une méthode formulaire lorsque la fenêtre contenant le formulaire passe au premier plan.<!-- END REF-->

**Note :** Cette commande équivaut à utiliser la fonction [Form event code](../commands/form-event-code.md) et tester si elle retourne l'événement On Activate.

**ATTENTION :** N'appelez pas de commandes telles que [TRACE](trace.md) ou [ALERT](alert.md) dans la phase **Activated** d'un formulaire, car cela provoquerait une boucle sans fin.

**Note :** Si vous voulez que le cycle d'exécution **Activated** soit généré, assurez-vous que la propriété d'événement On Activate du formulaire et/ou des objet(s) est sélectionnée en mode Développement. 

#### Voir aussi 

[Deactivated](deactivated.md)  
[Form event code](../commands/form-event-code.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 346 |
| Thread safe | &cross; |


