---
id: web-get-server-info
title: WEB Get server info
slug: /commands/web-get-server-info
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get server info.Syntax-->**WEB Get server info** {( *avecCache* )} : Object<!-- END REF-->
<!--REF #_command_.WEB Get server info.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| avecCache | Boolean | &#8594;  | Vrai pour obtenir la description du cache Web. Sinon (par défaut) la description du cache n'est pas retournée. |
| Résultat | Object | &#8592; | Informations sur le serveur Web et le serveur SOAP en cours d'exécution. |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Get server info.Summary-->La commande **WEB Get server info** retourne un objet contenant des informations détaillées sur la session courante du serveur Web 4D.<!-- END REF--> Les informations retournées incluent le serveur SOAP.

**Note :** Les informations retournées par cette commande décrivent les paramètres d'exécution du serveur Web. Ces paramètres peuvent différer de ceux retournés par la commande [WEB GET OPTION](web-get-option.md), car ils dépendent de la configuration système, des ressources disponibles, etc.

Par défaut, la commande ne retourne pas la propriété "cache", car elle peut être de taille importante. Toutefois, si vous souhaitez connaître les informations sur le cache, passez Vrai dans le paramètre optionnel *avecCache*.

L'objet retourné contient les propriétés suivantes (les noms des propriétés sont sensibles à la casse) :

| p**ropriété**               | **Type de la valeur** | **Description**                                                                                                                                                                          |
| --------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| started                     | Booléen               | true si le serveur http est lancé, false sinon                                                                                                                                           |
| uptime                      | Numérique             | Temps écoulé depuis le dernier lancement du serveur http                                                                                                                                 |
| httpRequestCount            | Numérique             | Nombre de hits http reçus par le serveur depuis son lancement                                                                                                                            |
| startMode                   | Chaîne                | "automatic" si “Lancer le serveur Web au démarrage" est coché, sinon "manual".                                                                                                           |
| SOAPServerStarted           | Booléen               | true si le serveur SOAP est lancé, false sinon                                                                                                                                           |
| cache                       | Objet                 | *Cette propriété est disponible seulement si le paramètre avecCache est à Vrai. Décrit le contenu du cache du serveur Web*. (voir *cache property* ci-dessous)                           |
| security                    | Objet                 | Etat actuel des diverses options de sécurité                                                                                                                                             |
| cipherSuite                 | Chaîne                | Liste de chiffrement utilisée par 4D pour le protocole sécurisé (correspond au paramètre base SSL cipher list)                                                                           |
| HTTPEnabled                 | Booléen               | true si HTTP est activé                                                                                                                                                                  |
| HTTPSEnabled                | Booléen               | true si HTTPS est activé                                                                                                                                                                 |
| HSTSEnabled                 | Booléen               | true si HSTS est activé sur le serveur                                                                                                                                                   |
| HSTSMaxAge                  | Numérique             | Age maximum (en secondes) pour HSTS. Par défaut, la durée est de 2 ans (63 072 000 secondes).                                                                                            |
| minTLSVersion               | Chaîne                | Version TLS minimale acceptée pour les connexions (correspond au paramètre base Min TLS version)                                                                                         |
| openSSLVersion              | Chaîne                | Version de la librairie OpenSSL utilisée                                                                                                                                                 |
| perfectForwardSecrecy       | Booléen               | true si PFS est disponible sur le serveur, false sinon                                                                                                                                   |
| options                     | Objet                 | Etat actuel des différentes options standard du serveur Web                                                                                                                              |
| CORSEnabled                 | Booléen               | Vrai si le service CORS est activé sur le serveur, sinon Faux (par défaut)                                                                                                               |
| CORSSettings                | Collection            | Collection d'objets CORS définissant la liste de méthode(s) et d'hôte(s) autorisés (voir l'option web Web CORS settings)                                                                 |
| webCharacterSet             | Chaîne                | Nom du jeu de caractères (correspond à l'option web Web character set)                                                                                                                   |
| webHTTPCompressionLevel     | Numérique             | Niveau de compression pour les échanges HTTP compressés (correspond à l'option web Web HTTP compression level)                                                                           |
| webHTTPCompressionThreshold | Numérique             | Seuil de compression (correspond à l'option web Web HTTP compression threshold)                                                                                                          |
| webHTTPSPortID              | Numérique             | Numéro de port TCP utilisé par le serveur Web pour les connexions sécurisées (correspond à l'option web Web HTTPS port ID)                                                               |
| *webInactiveProcessTimeout* | Numérique             | **Non significatif en mode sessions Web évolutives, voir *Gestion des sessions Web*.** Durée de vie des process inactifs (correspond à l'option web Web inactive process timeout)        |
| *webInactiveSessionTimeout* | Numérique             | **Non significatif en mode sessions Web évolutives, voir *Gestion des sessions Web*.** Durée de vie des sessions inactives (correspond à l'option web Web inactive session timeout)      |
| webIPAddressToListen        | Collection            | Adresse IP, dans le "format" défini, sur laquelle le serveur web reçoit des requêtes http (correspond à l'option web Web IP address to listen)                                           |
| *webMaxConcurrentProcesses* | Numérique             | **Non significatif en mode sessions Web évolutives, voir *Gestion des sessions Web*.** Nombre maximum de process web simultanés (correspond à l'option web Web max concurrent processes) |
| webPortID                   | Numérique             | Port TCP utilisé par le serveur Web (correspond à l'option web Web port ID)                                                                                                              |

##### Propriété Cache 

Si vous passez **Vrai** dans le paramètre *avecCache*, la commande retourne les propriétés de l'objet "cache" avec le contenu suivant :

| **Nom de la propriété** | **Type de la valeur** | **Description**                                                                                                                                        |
| ----------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cacheUsage              | Numérique             | Taux d'utilisation du cache                                                                                                                            |
| numOfLoads              | Numérique             | Nombre d'objets chargés                                                                                                                                |
| currentSize             | Numérique             | Taille actuelle du cache                                                                                                                               |
| maxSize                 | Numérique             | Taille maximale du cache                                                                                                                               |
| objectMaxSize           | Numérique             | Taille maximale des objets pouvant être chargés dans le cache                                                                                          |
| enabled                 | Booléen               | "true" si le serveur web est activé                                                                                                                    |
| nbCachedObjects         | Numérique             | Nombre d'objets dans le cache                                                                                                                          |
| cachedObjects           | Collection            | Collection d'objets dans le cache. Chaque objet mis en cache est défini par différentes propriétés (url, mimeType, expirationType, lastModified, etc.) |

#### Exemple 

Après exécution du code suivant :

```4d
$webServerInfo:=WEB Get server info(True)
```

... $webServerInfo contiendra par exemple :


```json
{
   "started": true,
   "uptime": 40,
   "SOAPServerStarted": true,
   "startMode": "manual",
   "httpRequestCount": 0,
   "options": {
      "CORSEnabled": false,
      "CORSSettings": null,
      "webCharacterSet": "UTF-8",
      "webHTTPCompressionLevel": 1,
      "webHTTPCompressionThreshold": 1024,
      "webHTTPSPortID": 443,
      "webIPAddressToListen": ["192.168.xxx.xxx"],
      "webInactiveProcessTimeout": 28800,
      "webInactiveSessionTimeout": 28800,
      "webMaxConcurrentProcesses": 100,
      "webPortID": 80
   },
   "security": {
      "HTTPEnabled": true,
      "cipherSuite": "ECDHE-RSA-AES128-GCM-SHA256:...:CAMELLIA128-SHA",
      "openSSLVersion": "OpenSSL 1.0.2h 3 May 2016",
      "perfectForwardSecrecy": true,
      "minTLSVersion": "1.2"
   },
    "cache": {
        "cacheUsage": 1,
        "numOfLoads": 24,
        "currentSize": 154219,
        "maxSize": 10485760,
        "objectMaxSize": 524288,
        "enabled": true,
        "nbCachedObjects": 23,
        "cachedObjects": [
            {...},{...}
         ]
   }
}```

#### Voir aussi 

[License info](license-info.md)  
[Process activity](../commands/process-activity.md)  
[SOAP REJECT NEW REQUESTS](soap-reject-new-requests.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1531 |
| Thread safe | &check; |


