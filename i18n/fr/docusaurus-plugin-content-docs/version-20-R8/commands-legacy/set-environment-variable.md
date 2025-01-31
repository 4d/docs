---
id: set-environment-variable
title: SET ENVIRONMENT VARIABLE
slug: /commands/set-environment-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Syntax-->**SET ENVIRONMENT VARIABLE** ( *nomVar* ; *valeurVar* )<!-- END REF-->
<!--REF #_command_.SET ENVIRONMENT VARIABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomVar | Text | &#8594;  | Nom de la variable à fixer |
| valeurVar | Text | &#8594;  | Valeur de la variable ou "" pour rétablir la valeur par défaut |

<!-- END REF-->

:::info Compatibilité

Cette commande est maintenue pour des raisons de compatibilité uniquement. Il est maintenant recommandé d'utiliser la classe [`4D.HTTPRequest`](../API/HTTPRequestClass.md).

:::


#### Description 

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Summary-->La commande **SET ENVIRONMENT VARIABLE** vous permet de fixer la valeur d’une variable d’environnement sous macOS et Windows.<!-- END REF--> Elle est destinée à une utilisation conjointe avec la commande [LAUNCH EXTERNAL PROCESS](launch-external-process.md). Elle fonctionne également avec la commande [PHP Execute](php-execute.md).

Passez dans le paramètre *nomVar* le nom de la variable à définir et dans le paramètre *valeurVar* sa valeur.

* Pour obtenir la liste générale des variables d’environnement et leurs valeurs possibles, reportez-vous à la documentation technique de votre système d’exploitation.
* Trois variables d’environnement spécifiques peuvent être utilisées dans le contexte de la commande [LAUNCH EXTERNAL PROCESS](launch-external-process.md) :  
*\_4D\_OPTION\_CURRENT\_DIRECTORY*  
*\_4D\_OPTION\_HIDE\_CONSOLE* (Windows uniquement)  
*\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*

Pour plus d'informations sur ces variables, veuillez vous reporter à la documentation de la commande [LAUNCH EXTERNAL PROCESS](launch-external-process.md).

#### Exemple 

Reportez-vous aux exemples de la commande [LAUNCH EXTERNAL PROCESS](launch-external-process.md). 

#### Voir aussi 

[LAUNCH EXTERNAL PROCESS](launch-external-process.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 812 |
| Thread safe | &check; |


