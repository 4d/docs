---
id: on-system-event-database-method
title: On System Event database method
slug: /commands/on-system-event-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On System Event database method.Syntax-->$1 -> On System Event database method<!-- END REF-->
<!--REF #_command_.On System Event database method.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Integer | &#8592; | Code d'événement |

<!-- END REF-->

#### Description 

<!--REF #_command_.On System Event database method.Summary-->La **On System Event database method** est appelée à chaque fois qu’un événement système se produit.<!-- END REF--> Tous les environnements 4D sont concernés : 4D (tous modes), 4D Server ainsi que les applications 4D compilées et fusionnées avec 4D Volume Desktop.

Pour traiter un événement, vous devez tester la valeur du paramètre $1 à l’intérieur de la méthode, et la comparer à l’une des constantes suivantes, placées dans le thème *Evénements de la base* :

| Constante                      | Type        | Valeur | Comment                                 |
| ------------------------------ | ----------- | ------ | --------------------------------------- |
| On application background move | Entier long | 1      | L’application 4D passe à l’arrière plan |
| On application foreground move | Entier long | 2      | L’application 4D passe au premier plan  |

Ces événements sont générés lorsque l’application 4D change de plan, quelle que soit l’action utilisateur à l’origine du changement : 

* clic dans la fenêtre de l’application ou d’une autre application,
* sélection via le raccourci clavier **Alt+Tab** (Windows) ou **Commande+Tab** (Mac OS),
* sélection de la commande **Masquer** dans le dock (Mac OS),
* clic sur l’icône de l’application dans le dock ou la barre des tâches,
* clic sur le bouton de réduction de la fenêtre principale (Windows).

Vous devez impérativement déclarer le paramètre $1 (entier long) dans la méthode base. La structure du code de la méthode base sera donc :

```4d
  // Méthode base Sur événement système
 
 var $1 : Integer
 Case of
    :($1=On application background move)
  //Faire quelque chose
    :($1=On application foreground move)
  //Faire autre chose
 End case
```
