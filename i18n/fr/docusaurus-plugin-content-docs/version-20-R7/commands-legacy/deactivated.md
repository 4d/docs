---
id: deactivated
title: Deactivated
slug: /commands/deactivated
displayed_sidebar: docs
---

<!--REF #_command_.Deactivated.Syntax-->**Deactivated**  : Boolean<!-- END REF-->
<!--REF #_command_.Deactivated.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si le cycle d'exécution est en désactivation |

<!-- END REF-->

#### Description 

<!--REF #_command_.Deactivated.Summary-->**Deactivated** retourne Vrai dans une méthode formulaire ou méthode objet lorsque la fenêtre appartenant au process du premier plan, contenant le formulaire, passe à l'arrière-plan.<!-- END REF-->

Si vous voulez que le cycle d'exécution **Deactivated** soit généré, vérifiez que la propriété d'événement On Deactivate du formulaire et/ou des objets est sélectionnée en mode Développement. 

**Note :** Cette commande équivaut à utiliser la fonction [Form event code](form-event-code.md) et tester si elle retourne l'événement On Deactivate.

#### Voir aussi 

[Activated](activated.md)  
[Form event code](form-event-code.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 347 |
| Thread safe | &check; |
| Interdite sur le serveur ||


