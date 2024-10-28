---
id: mobile-app-refresh-sessions
title: MOBILE APP REFRESH SESSIONS
slug: /commands/mobile-app-refresh-sessions
displayed_sidebar: docs
---

<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Syntax-->**MOBILE APP REFRESH SESSIONS**<!-- END REF-->
<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Summary-->La commande **MOBILE APP REFRESH SESSIONS** vérifie tous les fichiers de session d'application mobile situés dans le dossier MobileApps du serveur et met à jour le contenu de la session existante en mémoire pour tous les fichiers modifiés.<!-- END REF-->

Cette commande est conçue pour être utilisée par 4D pour les développeurs iOS et Android afin de "forcer" le rechargement des informations de session utilisateur après la modification de leurs fichiers locaux. Par exemple, si une session doit être réinitialisée, vous pouvez supprimer le fichier de session, puis appeler **MOBILE APP REFRESH SESSIONS**. Pour plus d'informations sur les sessions d'applications mobiles, reportez-vous à la [documentation de Go Mobile](https://developer.4d.com/go-mobile/fr/).

La commande vérifie la conformité de chaque fichier de session dans le dossier MobileApps (syntaxe json, shéma json, données de session). Si le fichier est conforme et a été modifié, la session correspondante est actualisée en mémoire (si elle existe déjà) avec le contenu modifié.

Si un fichier de session n'est pas valide ou a été supprimé, la session correspondante est supprimée de la mémoire.

La commande peut renvoyer l'une des erreurs suivantes, qui peuvent être traitées via les commandes [ON ERR CALL](on-err-call.md) et [Last errors](last-errors.md)  :

| **Nom du composant** | **Code d'erreur** | **Description**                                                     |
| -------------------- | ----------------- | ------------------------------------------------------------------- |
| mobi                 | 1                 | L'emplacement du fichier json ne correspond pas à son contenu       |
| mobi                 | 2                 | Le fichier json n'est pas correctement formé                        |
| mobi                 | 3                 | Le fichier json ne valide pas le shéma json                         |
| mobi                 | 4                 | Le jeton de connexion n'est pas conforme aux informations courantes |

#### Exemple 

Vous souhaitez réinitialiser toutes les sessions en cours pour toutes les applications mobiles :

```4d
 var $sessionsPath : Text
 $sessionsPath:=Get 4D folder(MobileApps folder)
 DELETE FOLDER($sessionsPath;Delete with contents)
 MOBILE APP REFRESH SESSIONS
```

#### Voir aussi 

[On Mobile App Authentication database method](on-mobile-app-authentication-database-method.md)  