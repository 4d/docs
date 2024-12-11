---
id: web-is-server-running
title: WEB Is server running
slug: /commands/web-is-server-running
displayed_sidebar: docs
---

<!--REF #_command_.WEB Is server running.Syntax-->**WEB Is server running** : Boolean<!-- END REF-->
<!--REF #_command_.WEB Is server running.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si le serveur Web est démarré, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Is server running.Summary-->La commande **WEB Is server running** retourne **Vrai** si le serveur Web intégré de 4D est démarré, et **Faux** si le serveur Web est stoppé.<!-- END REF-->

La commande retourne le statut du serveur Web de la machine sur laquelle elle est exécutée : 

| **Contexte d'exécution**                                     | **Retourne le statut de** |
| ------------------------------------------------------------ | ------------------------- |
| 4D monoposte                                                 | Serveur Web 4D local      |
| 4D Server                                                    | Serveur Web 4D Server     |
| 4D mode distant (process local)                              | Serveur Web 4D local      |
| 4D mode distant (procédure stockée sur 4D Server)            | Serveur Web 4D Server     |
| 4D mode distant (procédure stockée sur une autre 4D distant) | Serveur Web 4D distant    |

#### Exemple 

Vous souhaitez tester si le serveur Web de 4D est lancé :

```4d
 If(WEB Is server running)
    ... //effectuer les actions appropriées
 End if
```


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1313 |
| Thread safe | &check; |
| Interdite sur le serveur ||


