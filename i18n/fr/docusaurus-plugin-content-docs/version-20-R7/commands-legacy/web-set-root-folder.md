---
id: web-set-root-folder
title: WEB SET ROOT FOLDER
slug: /commands/web-set-root-folder
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET ROOT FOLDER.Syntax-->**WEB SET ROOT FOLDER** ( *dossierRacine* )<!-- END REF-->
<!--REF #_command_.WEB SET ROOT FOLDER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| dossierRacine | Text | &#8594;  | Chemin d'accès du dossier racine du serveur Web |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SET ROOT FOLDER.Summary-->La commande **WEB SET ROOT FOLDER** permet de modifier le dossier racine par défaut dans lequel 4D ira rechercher les fichiers HTML demandés au serveur Web.<!-- END REF-->

Cette commande ne tient pas compte du dossier racine HTML par défaut éventuellement défini dans les Propriétés de la base. Pour plus d'informations sur ce dossier, reportez-vous à la section *Sécurité des connexions*.

L'emplacement du dossier racine peut être exprimé soit en syntaxe HTML (type URL), soit en syntaxe système (chemin absolu) :

* Syntaxe HTML : les noms de dossiers sont séparés par une barre oblique ("/"), quelle que soit la plate-forme que vous utilisez.
* Syntaxe système : chemin d’accès absolu (“nom long”) respectant la syntaxe de la plate-forme courante, par exemple :  
   * (Mac OS) Disque:Applications:monserv:dossier  
   * (Windows) C:\\Applications\\monserv\\dossier

**Notes :**

* La prise en compte du nouveau dossier racine nécessite le redémarrage du serveur Web.
* Vous pouvez connaître à tout moment l'emplacement du dossier racine courant à l'aide de la commande [Get 4D folder](get-4d-folder.md).

Si vous passez un chemin d'accès invalide, une erreur liée à la gestion de fichiers du système d'exploitation est générée. Vous pouvez intercepter l'erreur à l'aide d'une méthode installée par la commande [ON ERR CALL](on-err-call.md). Si la méthode affiche une boîte de dialogue d'alerte ou de message, celle-ci apparaît sur l'écran du navigateur. 

#### Voir aussi 

[Get 4D folder](get-4d-folder.md)  
[ON ERR CALL](on-err-call.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 634 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


