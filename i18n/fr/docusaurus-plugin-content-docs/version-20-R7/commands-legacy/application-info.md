---
id: application-info
title: Application info
slug: /commands/application-info
displayed_sidebar: docs
---

<!--REF #_command_.Application info.Syntax-->**Application info** : Object<!-- END REF-->
<!--REF #_command_.Application info.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Object | &#8592; | Information sur l'activité de l'application courante |

<!-- END REF-->

#### Description

<!--REF #_command_.Application info.Summary-->La commande **Application info** retourne un objet qui fournit des informations détaillées sur l'activité de l'application courante et sa configuration réseau.<!-- END REF-->

La commande peut être exécutée sur des applications locales ou client/serveur. Les informations retournées dépendent de l'environnement dans lequel la commande **Application info** est exécutée. Par exemple, si la commande est exécutée depuis un 4D distant, les informations concernent uniquement les postes distants. Si la commande est appelée dans une méthode exécutée sur serveur, les informations retournées concernent le serveur.

L'objet retourné contient les propriétés suivantes :

| **Propriété**               | **Type**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **Exemple**                                     |
| --------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| volumeShadowCopyStatus      | chaîne     | Retourne le statut du Volume Shadow Copy Service. Windows uniquement. Pour plus d'informations, consultez *Utiliser Volume Shadow Copy Service sous Windows*.  Valeurs possibles : <table> <thead> <tr> <td>Constante</td> <td>Valeur</td> <td>Comment</td> </tr> </thead> <tbody> <tr> <td>vss available</td> <td>available</td> <td>Le service est disponible.</td> </tr><tr> <td>vss error</td> <td>error</td> <td>Le service a rencontré une erreur.</td> </tr><tr> <td>vss not available</td> <td>notAvailable</td> <td>Le service est indisponible.</td> </tr><tr> <td>vss update required</td> <td>updateRequired</td> <td>Le service doit être mis à jour.</td> </tr> </tbody> </table> | "available"                                     |
| launchedAsService           | booléen    | Vrai si l'application est lancée en tant que service. Valeurs possibles : vrai, faux. Pour plus d'informations, consultez *Enregistrer une base comme service*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | faux                                            |
| portID                      | numérique  | 4D Server : port d'écoute active, 4D distant : port de connexions distantes. Non retourné en mode local. Minimum: 1\. Pour plus d'informations, consultez *Numéro de port*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 19814                                           |
| remoteDebuggerSessionID     | texte      | ID de la session de l'application distante à laquelle est associé le débogueur du serveur. Cet ID est également retourné par [Process activity](../commands/process-activity.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | "A838A40BJN3NJKH..."                            |
| SDIMode                     | booléen    | Vrai si l'application fonctionne en mode SDI sous Windows (inutile sous macOS). Valeurs possibles : vrai, faux. Pour plus d'informations, voir le [mode SDI](https://developer.4d.com/docs/fr/Menus/sdi/) sur *developer.4d.com*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | vrai                                            |
| TLSEnabled                  | booléen    | Vrai si TLS activé pour les communications client/serveur. Non retourné en mode local. Valeurs possibles : vrai, faux. Pour plus d'informations, consultez *Qu’est-ce que le protocole TLS dans le cadre des connexions client/serveur ?*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | vrai                                            |
| newConnectionsAllowed       | booléen    | 4D Server uniquement. Vrai si de nouvelles connexions sont autorisées. Valeurs possibles : vrai, faux. Pour plus d'informations, consultez .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | vrai                                            |
| cpuUsage(\*)                | numérique  | Pourcentage du processeur utilisé par 4D. Notez que, pour les Macs, le nombre affiché correspond à 1 cœur et représente une moyenne pour le processeur.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 10.03                                           |
| headless                    | booléen    | Vrai si l'application est lancée sans interface (mode *headless*). Valeurs possibles : vrai, faux. Pour plus d'informations, voir *Interface ligne de commande*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | faux                                            |
| uptime                      | numérique  | Temps écoulé (en secondes) depuis l'ouverture de la base locale 4D. Pour les connexions distantes, retourne le temps écoulé depuis que la connexion a été effectuée.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 143                                             |
| pid                         | numérique  | ID du process de l'instance de l'application 4D (fourni par le système d'exploitation) -- permet d'identifier chaque instance 4D en cours d'exécution, à partir d'un script externe par exemple                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 16600                                           |
| networkInputThroughput(\*)  | numérique  | Débit de données (octets/secondes) pour les entrées réseau de la machine exécutant l'application. En mode distant, le débit de la machine distante est retourné. Pour plus d'informations, consultez *Page Moniteur*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 37311495                                        |
| networkOutputThroughput(\*) | numérique  | Débit de données (octets/secondes) pour les sorties réseau de la machine exécutant l'application. En mode distant, le débit de la machine distante est retourné. Pour plus d'informations, consultez *Page Moniteur*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 88058023                                        |
| useLegacyNetworkLayer       | booléen    | Vrai si l'ancienne couche réseau est utilisée pour le serveur d'application. Non retourné en mode local. Valeurs possibles : vrai, faux. Pour plus d'informations, consultez *Activer ou désactiver l'ancienne couche réseau*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | faux                                            |
| IPAddressesToListen         | collection | 4D Server uniquement. Retourne les adresses IP écoutées par 4D Server. Pour plus d'informations, consultez *IP configuration*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | \["192.168.18.12","192.168.18.10"\]             |
| IPAddressesAllowDeny        | collection | 4D Server uniquement. Retourne une collection d'adresses IP autorisées ou refusées dans les paramètres de la base. Pour plus d'informations, consultez *IP configuration*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | \[{"mode": "allow", "ip": "192.168.\*"},{...}\] |
| \[ \].mode                  | chaîne     | Propriété décrivant si l'adresse IP est autorisée ou non. Valeurs possibles : "allow" ou "deny"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | "allow"                                         |
| \[ \].ip                    | chaîne     | Adresse IP                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | "192.167.1.2"                                   |
| useQUICNetworkLayer         | booléen    | Vrai si la couche réseau QUIC est utilisée pour le serveur d'application et le serveur db4d (*beta* dans 4D v20, voir *Page Compatibilité*). Non retourné en mode local. Valeurs possibles : vrai, faux. Pour plus d'informations, voir cet [article de blog.](https://blog.4d.com/quic-network/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | faux                                            |

(\*) Sur Windows, vous devez vous assurer que ce compteur est préalablement initialisé, en appelant par exemple la commande **Application info** dans la [On Startup database method](on-startup-database-method.md).

#### Exemple

Le code suivant retourne un objet contenant des informations sur l'application courante :

```4d
 var $appInfo : Object
 $appInfo:=Application info
```

Si le code est exécuté sur un 4D en mode local, l'objet contient (par exemple) :

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.035875,
  "uptime": 469,
  "headless": false,
  "pid": 16500,
  "networkInputThroughput": 377263157,
  "networkOutputThroughput": 12345242236
}
```

Si le code est exécuté depuis un 4D distant, l'objet contient (par exemple) :

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.035875,
  "portID": 19814,
  "TLSEnabled": false,
  "uptime": 143,
  "headless": false,
  "pid": 1550,
  "useLegacyNetworkLayer": true,
  "networkInputThroughput": 268047058,
  "networkOutputThroughput": 12207686274
}
```

Si le code est exécuté sur 4D Server, l'objet contient (par exemple) :

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.016125,
  "portID": 19814,
  "TLSEnabled": false,
  "uptime": 192,
  "headless": false,
  "pid": 9560,
  "useLegacyNetworkLayer": true,
  "useQUICNetworkLayer": false,
  "newConnectionsAllowed": true,
  "IPAddressesToListen": [
    "192.168.18.8",
    "192.168.18.7"
  ],
  "IPAddressesAllowDeny": [
    {
      "mode": "allow",
      "ip": "192.168.*"
    },
    {
      "mode": "deny",
      "ip": "192.167.15.3"
    },
    {
      "mode": "allow",
      "ip": "192.167.1.2"
    }
  ],
  "networkInputThroughput": 149014925,
  "networkOutputThroughput": 80238805
}
```

#### Voir aussi 

[Execute on server](execute-on-server.md)  
[Get database parameter](get-database-parameter.md)  
[System info](system-info.md)  
[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1599 |
| Thread safe | &check; |


