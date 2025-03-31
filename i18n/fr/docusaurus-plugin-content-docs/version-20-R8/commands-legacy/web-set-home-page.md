---
id: web-set-home-page
title: WEB SET HOME PAGE
slug: /commands/web-set-home-page
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET HOME PAGE.Syntax-->**WEB SET HOME PAGE** ( *homePage* )<!-- END REF-->
<!--REF #_command_.WEB SET HOME PAGE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| homePage | Text | &#8594;  | Nom de page ou chemin d’accès HTML à la page ou "" pour ne pas envoyer de page d’accueil personnalisée |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SET HOME PAGE.Summary-->La commande **WEB SET HOME PAGE** vous permet de modifier la page d’accueil (page Home) personnalisée pour le process Web courant.<!-- END REF--> 

La page définie est liée au process Web, vous pouvez donc définir des pages d’accueil différentes en fonction, par exemple, de l’utilisateur connecté. Cette page peut être statique ou semi-dynamique.

Vous passez dans le paramètre *homePage* le nom de la page HTML d’accueil ou le chemin d’accès HTML complet à la page.

**Note :** Si la page définie par le paramètre *homePage* n'existe pas lorsque le process Web y accède pour la première fois, le serveur Web la crée et lui affecte le contenu de la . 

Pour ne plus envoyer *homePage* comme page d’accueil pour le process Web courant, appelez de nouveau la commande **WEB SET HOME PAGE** en passant une chaîne vide ("") dans *homePage*.

**Note :** La page d’accueil par défaut du serveur Web est définie dans les Propriétés de la base. 


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 639 |
| Thread safe | &check; |


