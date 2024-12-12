---
id: on-web-legacy-close-session-database-method
title: On Web Legacy Close Session database method
slug: /commands/on-web-legacy-close-session-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Web Legacy Close Session database method.Syntax-->**On Web Legacy Close Session database method**<!-- END REF-->
<!--REF #_command_.On Web Legacy Close Session database method.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Note de compatibilité 

<!--REF #_command_.On Web Legacy Close Session database method.Summary-->Cette méthode base peut être utilisée uniquement avec d'**anciennes sessions Web**, disponibles dans les bases de données converties à partir de versions antérieures à 4D v18 R6\.<!-- END REF--> Elle n'est jamais appelée lorsque le mode **sessions Web extensibles** est activé (recommandé sous 4D v18 R6 et versions plus récentes). Pour plus d'informations, reportez-vous à la section *Gestion des sessions Web*.

#### 

La **On Web Legacy Close Session database method** est appelée par le serveur Web de 4D à chaque fois qu’une session Web est sur le point d’être refermée. Une session peut être refermée dans les cas suivants :

* lorsque le nombre maximum de sessions simultanées est atteint (100 par défaut, modifiable via la commande [WEB SET OPTION](web-set-option.md)), et que 4D a besoin d’en créer de nouvelles (4D détruit automatiquement le process de la session inactive la plus ancienne),
* lorsque la période maximale d’inactivité du process de la session est atteinte (480 minutes par défaut, modifiable via la commande [WEB SET OPTION](web-set-option.md)),
* lorsque la commande [WEB LEGACY CLOSE SESSION](web-legacy-close-session.md) est appelée.

Au moment de l’appel de la méthode base, le contexte de la session (variables et sélections générées par l’utilisateur) est toujours valide. Ce principe vous permet donc de stocker les données relatives à la session afin de pouvoir les réutiliser par la suite, en particulier via la [QR SET DESTINATION](qr-set-destination.md).

**Note :** Dans le contexte d'une session 4D Mobile (pouvant générer plusieurs process), la **On Web Legacy Close Session database method** est appelée pour chaque process Web refermé, vous permettant de sauvegarder tout type de donnée (variable, sélection, etc.) générée par le process de session 4D Mobile. 

Un exemple d’utilisation de la **On Web Legacy Close Session database method** est fourni dans la section *Gestion des sessions Web*. 

#### Voir aussi 

*Gestion des sessions Web*  
[WEB LEGACY CLOSE SESSION](web-legacy-close-session.md)  