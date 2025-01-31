---
id: web-legacy-close-session
title: WEB LEGACY CLOSE SESSION
slug: /commands/web-legacy-close-session
displayed_sidebar: docs
---

<!--REF #_command_.WEB LEGACY CLOSE SESSION.Syntax-->**WEB LEGACY CLOSE SESSION** ( *idSession* )<!-- END REF-->
<!--REF #_command_.WEB LEGACY CLOSE SESSION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| idSession | Text | &#8594;  | UUID de session |

<!-- END REF-->

#### Note de compatibilité 

<!--REF #_command_.WEB LEGACY CLOSE SESSION.Summary-->Cette commande peut être utilisée uniquement avec les **anciennes sessions Web**, disponibles dans les bases de données converties à partir de versions antérieures à 4D v18 R6\.<!-- END REF--> Elle est ignorée lorsque le mode **sessions Web extensibles** est activé (recommandé dans 4D v18 R6 et versions plus récentes). Pour plus d'informations, reportez-vous à la section *Gestion des sessions Web*.

#### Description 

La commande **WEB LEGACY CLOSE SESSION** clôt la session Web existante désignée par le paramètre *idSession*. Si la session n’existe pas, la commande ne fait rien.

Lorsque cette commande est appelée depuis un process Web ou tout autre process :

* la date d’expiration du cookie est mise à 0,
* la [On Web Legacy Close Session database method](on-web-legacy-close-session-database-method.md) est appelée, vous permettant de stocker les informations de la session,
* les sélections courantes sont détruites, les enregistrements déverrouillés et les variables réinitialisées.

Après l’exécution de cette commande, si un client Web envoie une requête utilisant un cookie invalide, une nouvelle session est ouverte et un nouveau cookie est envoyé.

**Note :** Dans le contexte d'une session 4D Mobile, la commande **WEB LEGACY CLOSE SESSION** referme la session 4D Mobile dont l'ID a été passé dans *idSession*. Comme une session 4D Mobile peut gérer plusieurs process, cette commande demande en fait à tous les process Web liés à la session de terminer leur exécution. 

#### Voir aussi 

*Gestion des sessions Web*  
[On Web Legacy Close Session database method](on-web-legacy-close-session-database-method.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1208 |
| Thread safe | &check; |


