---
id: web-server
title: WEB Server
slug: /commands/web-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server.Syntax-->**WEB Server** {( *option* )} -> Résultat<!-- END REF-->
<!--REF #_command_.WEB Server.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| option | Entier long | &#x1F852; | Serveur Web à obtenir (par défaut si omis = serveur Web de la base) |
| Résultat | Objet | &#x1F850; | Objet serveur Web |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Server.Summary-->La commande **WEB Server** retourne l'objet serveur Web de la base, ou l'objet serveur Web défini à l'aide du paramètre *option*.<!-- END REF--> 

Par défaut, si le paramètre *option* est omis, la commande retourne une référence au serveur Web de la base, *i.e.* le serveur Web par défaut. Pour désigner le serveur Web à retourner, vous pouvez passer l'une des constantes suivantes du thème *Serveur Web* dans le paramètre *option* :

| Constante                    | Valeur | Comment                                               |
| ---------------------------- | ------ | ----------------------------------------------------- |
| Web server database          | 1      | Serveur Web de la base courante (par défaut si omis)  |
| Web server host database     | 2      | Serveur Web de la base hôte d'un composant            |
| Web server receiving request | 3      | Serveur Web ayant reçu la requête (Serveur Web cible) |

##### Objet retourné 

L'objet *serveur* *Web* retourné contient les propriétés et méthodes en lecture seule suivantes :

| **Propriété**              | **Type**  | **Description**                                                                                                                                                                                               |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| certificateFolder          | Texte     | Dossier dans lequel les fichiers de certificat sont sauvegardés. Format POSIX du chemin d'accès complet à l'aide de filesystem. Peut être passé comme objet [Folder](folder.md) dans le paramètre *settings.* |
| characterSet               | Numérique | Numéro du jeu de caractères                                                                                                                                                                                   |
| cipherSuite                | Texte     | Liste de chiffrement utilisée pour le protocole sécurisé                                                                                                                                                      |
| debugLog                   | Numérique | Valeur du sélecteur de journal de débogage                                                                                                                                                                    |
| defaultHomepage            | Texte     | Page d'accueil par défaut                                                                                                                                                                                     |
| HSTSEnabled                | Booléen   | Etat du protocole HSTS                                                                                                                                                                                        |
| HSTSMaxAge                 | Numérique | Durée de vie du HSTS                                                                                                                                                                                          |
| HTTPCompressionLevel       | Numérique | Niveau de compression du HTTP                                                                                                                                                                                 |
| HTTPCompressionThreshold   | Numérique | Seuil de compression du HTTP                                                                                                                                                                                  |
| HTTPEnabled                | Booléen   | Etat du protocole HTTP                                                                                                                                                                                        |
| HTTPPort                   | Numérique | Port d'écoute IP pour HTTP                                                                                                                                                                                    |
| HTTPTrace                  | Booléen   | Activation de HTTP TRACE                                                                                                                                                                                      |
| HTTPSEnabled               | Booléen   | Etat du protocole HTTPS                                                                                                                                                                                       |
| HTTPSPort                  | Numérique | Port d'écoute IP pour HTTPS                                                                                                                                                                                   |
| inactiveSessionTimeout     | Numérique | Durée de vie des process des sessions inactives                                                                                                                                                               |
| inactiveProcessTimeout     | Numérique | Durée de vie des sessions inactives                                                                                                                                                                           |
| IPAddressToListen          | Texte     | Adresse IP à écouter ou "0.0.0.0" pour Toutes                                                                                                                                                                 |
| isRunning                  | Booléen   | Etat d'exécution du serveur Web - *Ne peut pas être définie avec l'objet settings*                                                                                                                            |
| keepSession                | Booléen   | Etat de l'ancienne session                                                                                                                                                                                    |
| logRecording               | Numérique | Valeur d'enregistrement des requêtes                                                                                                                                                                          |
| maxConcurrentProcesses     | Numérique | Nombre maximal de process web simultanés                                                                                                                                                                      |
| maxRequestSize             | Numérique | Taille maximale de la requête                                                                                                                                                                                 |
| maxSessions                | Numérique | Sessions maximales                                                                                                                                                                                            |
| minTLSVersion              | Numérique | Version TLS minimale acceptée pour les connexions                                                                                                                                                             |
| name                       | Texte     | Nom de la base sur laquelle fonctionne le serveur Web - *Ne peut pas être définie avec l'objet settings*                                                                                                      |
| openSSLVersion             | Texte     | Version de la bibliothèque OpenSSL utilisée - *Ne peut pas être définie avec l'objet settings*                                                                                                                |
| perfectForwardSecrecy      | Booléen   | Disponibilité PFS sur le serveur - *Ne peut pas être définie avec l'objet settings*                                                                                                                           |
| rootFolder                 | Texte     | Chemin d'accès du dossier racine. Format POSIX du chemin complet à l'aide de filesystems. Peut être passé comme objet [Folder](folder.md) dans le paramètre *settings*                                        |
| scalableSession            | Booléen   | État de gestion de la session extensible                                                                                                                                                                      |
| sessionCookieDomain        | Texte     | Domaine du cookie de la session                                                                                                                                                                               |
| sessionCookieName          | Texte     | Nom du cookie de la session - Ne peut pas être défini avec l'objet de settings en mode gestion de session extensible                                                                                          |
| sessionCookiePath          | Texte     | Chemin d'accès du cookie de la session                                                                                                                                                                        |
| sessionIPAddressValidation | Booléen   | Validation de l'adresse IP de la session                                                                                                                                                                      |

Ces propriétés sont définies dans les paramètres de la base hôte ou du composant. Pour la base hôte, elles peuvent être redéfinies à l'aide de la commande [WEB SET OPTION](web-set-option.md).

**Note :** Ces propriétés peuvent également être modifiées à l'aide du paramètre *settings* de la méthode *webServer.start( )* (à l'exception de celles qui portent la mention comme *Ne peut pas être définie avec l'objet settings*). Une fois que le serveur Web est lancé, les valeurs modifiées par le paramètre *settings* sont mises à jour en conséquence dans l'objet retourné par **WEB Server**. Ces valeurs sont utilisées uniquement lors de la prochaine session du serveur Web (elles sont réinitialisées lorsque la méthode *webServer.stop( )* est appelée).

| **Méthode**          | **Description**       |
| -------------------- | --------------------- |
| *webServer.start( )* | Lance le serveur Web  |
| *webServer.stop( )*  | Stoppe le serveur Web |

#### Exemple 

Vous souhaitez savoir si, depuis votre composant, le serveur Web de votre base hôte est lancé :

```4d
  // Méthode du composant
 var $hostWS : Object
 $hostWS:=WEB Server(WEB Server de base de données hôte)

If($hostWS.isRunning)
 ...
End if


```

#### Voir aussi 

[WEB Server list](web-server-list.md)  
*webServer.stop( )*  