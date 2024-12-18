---
id: web-legacy-get-session-expiration
title: WEB LEGACY GET SESSION EXPIRATION
slug: /commands/web-legacy-get-session-expiration
displayed_sidebar: docs
---

<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Syntax-->**WEB LEGACY GET SESSION EXPIRATION** ( *idSession* ; *dateExp* ; *heureExp* )<!-- END REF-->
<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| idSession | Text | &#8594;  | UUID de session |
| dateExp | Date | &#8592; | Date d’expiration du cookie |
| heureExp | Time | &#8592; | Heure d’expiration du cookie |

<!-- END REF-->

#### Note de compatibilité 

<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Summary-->Cette commande peut être utilisée uniquement avec les **anciennes sessions Web**, disponibles dans les bases de données converties à partir de versions antérieures à 4D v18 R6\.<!-- END REF--> Elle retourne des valeurs null, date et heure lorsque le mode **sessions Web extensibles** est activé (recommandé sous 4D v18 R6 et versions plus récentes). Pour plus d'informations, reportez-vous à la section *Gestion des sessions Web*.

#### Description 

La commande **WEB LEGACY GET SESSION EXPIRATION** retourne les informations relatives à l’expiration du cookie de la session dont vous avez passé l’UUID dans *idSession*. 

Le paramètre *dateExp* reçoit la date d’expiration et le paramètre *heureExp* reçoit l’heure d’expiration du cookie. 

**Note :** À chaque requête Web, la date et l’heure d’expiration du cookie sont réinitialisées à une valeur correspondant à l’instant de la requête+la valeur de l'option Web inactive session timeout. Par exemple :   
*Première requête, Lundi à 01h00*   
 \-> envoi du cookie 4DSID xxxyyy expiration I+24h = Mardi 01:00  
*Deuxième requête, Lundi à 01h10*   
 \-> envoi du cookie 4DSID xxxyyy expiration I+24h = Mardi 01:10  
*Troisième requête, Mardi à 04h00 : cookie expiré*  
 \-> envoi du cookie 4DSID aaabbb expiration I+24h = Mercredi 01:00

#### Voir aussi 

*Gestion des sessions Web*  
[WEB Get Current Session ID](web-get-current-session-id.md)  
[WEB SET OPTION](web-set-option.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1207 |
| Thread safe | &check; |


