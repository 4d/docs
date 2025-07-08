---
id: web-get-current-session-id
title: WEB Get current session ID
slug: /commands/web-get-current-session-id
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get current session ID.Syntax-->**WEB Get current session ID**  : Text<!-- END REF-->
<!--REF #_command_.WEB Get current session ID.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | UUID de la session |

<!-- END REF-->

## Description 

<!--REF #_command_.WEB Get current session ID.Summary-->La commande **WEB Get current session ID** retourne l’ID de la session ouverte pour la requête Web.<!-- END REF--> Cet ID a été généré automatiquement par 4D sous la forme d’un UUID. 

Si cette commande est appelée hors du contexte d’une session Web, elle retourne une chaîne vide "". 

## Voir aussi 

*Gestion des sessions Web*  
[WEB LEGACY GET SESSION EXPIRATION](web-legacy-get-session-expiration.md)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1162 |
| Thread safe | &check; |


