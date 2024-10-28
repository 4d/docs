---
id: method-called-on-event
title: Method called on event
slug: /commands/method-called-on-event
displayed_sidebar: docs
---

<!--REF #_command_.Method called on event.Syntax-->**Method called on event**  -> Résultat<!-- END REF-->
<!--REF #_command_.Method called on event.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom de la méthode d’appel sur evenement |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Method called on event.Summary-->La commande **Method called on event** retourne le nom de la méthode installée par la commande [ON EVENT CALL](on-event-call.md).<!-- END REF--> 

Si aucune méthode d’appel sur événement n’a été installée, une chaîne vide ("") est retournée.

#### Voir aussi 

[ON EVENT CALL](on-event-call.md)  