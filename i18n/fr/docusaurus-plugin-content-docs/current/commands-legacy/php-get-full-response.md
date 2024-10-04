---
id: php-get-full-response
title: PHP GET FULL RESPONSE
slug: /commands/php-get-full-response
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET FULL RESPONSE.Syntax-->**PHP GET FULL RESPONSE** ( *stdOut* {; *libellésErr* ; *valeursErr*} {; *chpsEnteteHttp* {; *valeursEnteteHttp*}} )<!-- END REF-->
<!--REF #_command_.PHP GET FULL RESPONSE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| stdOut | Variable texte, Variable BLOB | &#x1F858; | Contenu du buffer stdOut |
| libellésErr | Tableau texte | &#x1F858; | Libellés des erreurs |
| valeursErr | Tableau texte | &#x1F858; | Valeurs des erreurs |
| chpsEnteteHttp | Tableau texte | &#x1F858; | Noms des en-têtes HTTP |
| valeursEnteteHttp | Tableau texte | &#x1F858; | Valeurs des en-têtes HTTP |

<!-- END REF-->

#### Description 

<!--REF #_command_.PHP GET FULL RESPONSE.Summary-->La commande **PHP GET FULL RESPONSE** vous permet d’obtenir des informations supplémentaires sur la réponse retournée par l’interpréteur PHP.<!-- END REF--> Cette commande est particulièrement utile en cas d’erreur survenant au cours de l’exécution du script. 

Le script PHP peut écrire des données dans le buffer stdOut (echo, print...). La commande retourne directement ces données dans la variable *stdOut* et applique les mêmes principes de conversion que ceux décrits dans la commande [PHP Execute](php-execute.md). 

Les tableaux texte synchronisés *libellésErr* et *valeursErr* sont remplis lorsque l’exécution des scripts PHP provoque des erreurs. Ces tableaux fournissent des informations notamment sur l’origine, le script et la ligne de l’erreur. Ces deux tableaux sont indissociables : si *libellésErr* est passé, *valeursErr* doit être passé également. 

Comme les échanges entre 4D et l’interpréteur PHP s’effectuent via FastCGI, l’interpréteur PHP fonctionne comme s’il était appelé par un serveur HTTP et envoie donc des en-têtes HTTP. Vous pouvez récupérer ces en-têtes et leurs valeurs dans les tableaux *champsEnteteHttp* et *valeursEnteteHttp*.

#### Voir aussi 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  