---
id: outside-call
title: Outside call
slug: /commands/outside-call
displayed_sidebar: docs
---

<!--REF #_command_.Outside call.Syntax-->**Outside call**  : Boolean<!-- END REF-->
<!--REF #_command_.Outside call.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si le cycle d'exécution est appel extérieur |

<!-- END REF-->

#### Description 

<!--REF #_command_.Outside call.Summary-->**Outside call** retourne Vrai pour le cycle d'exécution Appel extérieur.<!-- END REF--> 

Si vous voulez que le cycle d'exécution **Outside call** soit généré, vérifiez que la propriété d'événement On Outside Call du formulaire et/ou des objets est sélectionnée en mode Développement. 

**Note :** Cette fonction équivaut à utiliser la fonction [Form event code](../commands/form-event-code.md) et tester si elle retourne un événement tel que On Outside Call.

#### Voir aussi 

[Form event code](../commands/form-event-code.md)  
[POST OUTSIDE CALL](post-outside-call.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 328 |
| Thread safe | &cross; |


