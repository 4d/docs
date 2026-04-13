---
id: application-info
title: Application info
slug: /commands/application-info
displayed_sidebar: docs
---

<!--REF #_command_.Application info.Syntax-->**Application info** : Object<!-- END REF-->

<!--REF #_command_.Application info.Params-->

<div class="no-index">

| Paramètres | Type   |                             | Description                                         |
| ---------- | ------ | --------------------------- | --------------------------------------------------- |
| Résultat   | Object | &#8592; | Informations sur l'activité de l'application active |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

| Release | Modifications                                            |
| ------- | -------------------------------------------------------- |
| 21 R2   | Support des propriétés "useFluentUI" et "canUseFluentUI" |

</details>
</div>

## Description

<!--REF #_command_.Application info.Summary-->La commande **Application info** renvoie un objet fournissant des informations détaillées sur l'activité de l'application active et la configuration du réseau.<!-- END REF-->

La commande peut être exécutée sur des applications fonctionnant dans des environnements autonomes ou client/serveur. Les informations retournées dépendent de l'endroit où la commande **Application info** est exécutée. Par exemple, si elle est exécutée à partir d'un poste de travail distant, l'information ne concerne que le poste de travail distant. Si la commande est appelée dans une méthode exécutée sur le serveur, les informations renvoyées concernent au serveur.

L'objet retourné contient les propriétés suivantes :

| **Propriété**                                                                    | **Type**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **Exemple**                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| canUseFluentUI                                                                   | boolean    | True si la configuration courante (application et système) [permet à l'application d'utiliser Fluent UI sous Windows](../FormEditor/forms.md#requirements) (inutile sous macOS). Valeurs possibles : true, false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | true                                                                                                                                                                                                                  |
| cpuUsage(\*)                                                  | number     | Pourcentage du processeur utilisé par 4D. A noter que pour les Mac, le nombre affiché correspond à un cœur et représente une moyenne pour le processeur.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 10.03                                                                                                                                                                                                 |
| headless                                                                         | boolean    | True si l'application fonctionne en mode headless. Valeurs possibles : true, false. Pour plus d'informations, voir [Interface en ligne de commande](../Admin/cli.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | false                                                                                                                                                                                                                 |
| IPAddressesAllowDeny                                                             | collection | Serveur 4D uniquement. Renvoie une collection des adresses IP autorisées ou rejetées dans les paramètres de la base de données. Pour plus d'informations, voir [Configuration IP](../settings/client-server.md#ip-configuration-page).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \[{"mode": "allow", "ip": "192.168.\*"},{...}\] |
| \[ \].mode | string     | Propriété décrivant si l'adresse IP est autorisée ou non. Valeurs possibles : "allow" (autoriser) ou "deny" (refuser)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | "allow"                                                                                                                                                                                                               |
| \[ \].ip   | string     | Adresse IP                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | "192.167.1.2"                                                                                                                                                         |
| IPAddressesToListen                                                              | collection | Serveur 4D uniquement. Renvoie les adresses IP que 4D Server écoute. Pour plus d'informations, voir [Configuration IP](../settings/client-server.md#ip-configuration-page).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | \["192.168.18.12","192.168.18.10"\]                             |
| launchedAsService                                                                | boolean    | Vrai si l'application est lancée en tant que service. Valeurs possibles : true, false. Pour plus d'informations, voir *Enregistrer une base de données en tant que service*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | false                                                                                                                                                                                                                 |
| networkInputThroughput(\*)                                    | number     | Le débit de données (octets/secondes) pour l'entrée réseau de la machine qui exécute l'application. En mode distant, le taux de la machine distante est renvoyé. Pour plus d'informations, voir la [Page Moniteur](../ServerWindow/monitor.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 37311495                                                                                                                                                                                                              |
| networkOutputThroughput(\*)                                   | number     | Le débit de données (octets/secondes) pour la sortie réseau de la machine qui exécute l'application. En mode distant, le taux de la machine distante est renvoyé. Pour plus d'informations, voir la [Page Moniteur](../ServerWindow/monitor.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 88058023                                                                                                                                                                                                              |
| newConnectionsAllowed                                                            | boolean    | Serveur 4D uniquement. True si de nouvelles connexions sont autorisées. Valeurs possibles : true, false. Pour plus d'informations, voir [Bouton d'acceptation/refus des nouvelles connexions](../ServerWindow/application-server.md#acceptreject-new-connections).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | true                                                                                                                                                                                                                  |
| pid                                                                              | number     | ID du process de l'instance de l'application 4D (fourni par le système d'exploitation) -- permet d'identifier chaque instance 4D en cours d'exécution, par exemple à partir d'un script externe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 16600                                                                                                                                                                                                                 |
| portID                                                                           | number     | 4D Server : port pour l'écoute active, 4D distant : port pour les connexions distantes. Non retourné dans un environnement autonome. Minimum: 1\. Pour plus d'informations, voir [Numéro de port](../settings/client-server.md#port-number).                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 19814                                                                                                                                                                                                                 |
| remoteDebuggerSessionID                                                          | text       | ID de session de l'application distante à laquelle le débogueur de serveur est attaché. Cet identifiant est également renvoyé par [Process activity](../commands/process-activity.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | "A838A40BJN3NJKH..."                                                                                                                                                  |
| SDIMode                                                                          | boolean    | True si l'application fonctionne en mode SDI sous Windows (inutile sous macOS). Valeurs possibles : true, false. Pour plus d'informations, voir [Mode SDI](../Menus/sdi.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | true                                                                                                                                                                                                                  |
| TLSEnabled                                                                       | boolean    | True si TLS est activé pour les communications client/serveur. Non retourné dans un environnement autonome. Valeurs possibles : true, false. Pour plus d'informations, voir [Encrypter les communications Client-Serveur](../settings/client-server.md#encrypt-client-server-communications).                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                       |
| uptime                                                                           | number     | Temps écoulé (en secondes) depuis l'ouverture de la base de données 4D locale. Pour les connexions distantes, renvoie le temps écoulé depuis l'établissement de la connexion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 143                                                                                                                                                                                                                   |
| useFluentUI                                                                      | boolean    | True si l'application est [exécutée en Fluent UI](../FormEditor/forms.md#fluent-ui-rendering) sous Windows (inutile sous macOS). Valeurs possibles : true, false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | true                                                                                                                                                                                                                  |
| useLegacyNetworkLayer                                                            | boolean    | True si l'ancienne couche réseau est utilisée pour le serveur d'application. Non retourné dans un environnement autonome. Valeurs possibles : true, false. Pour plus d'informations, voir [Couche réseau](../settings/client-server.md#network-layer).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | false                                                                                                                                                                                                                 |
| useQUICNetworkLayer                                                              | boolean    | True si la couche réseau QUIC est utilisée pour le serveur d'application et le serveur db4d. Non retourné dans un environnement autonome. Valeurs possibles : true, false. Pour plus d'informations, voir [cet article de blog](https://blog.4d.com/quic-network/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | false                                                                                                                                                                                                                 |
| volumeShadowCopyStatus                                                           | string     | Retourne l'état du service Volume Shadow Copy. Windows uniquement. Pour plus d'informations, voir *Utilisation de Volume Shadow Copy Service sous Windows*.  Valeurs possibles : <table> <thead> <tr> <td>Constante</td> <td>Valeur</td> <td>Commentaire</td> </tr> </thead> <tbody> <tr> <td>vss available</td> <td>available</td> <td>Le service est disponible.</td> </tr><tr> <td>vss error</td> <td>erreur</td> <td>Le service a rencontré une erreur.</td> </tr><tr> <td>vss not available</td> <td>notAvailable</td> <td>Le service est indisponible.</td> </tr><tr> <td>vss update required</td> <td>updateRequired</td> <td>Le service doit être mis à jour.</td> </tr> </tbody> </table> | "available"                                                                                                                                                                                                           |

(\*) Sous Windows, ce compteur doit être préalablement initialisé, par exemple par un appel à la commande **Application info** dans la méthode base [On Startup](../commands-legacy/on-startup-database-method.md).

## Exemple

Le code suivant renvoie un objet contenant des informations sur l'application en cours :

```4d
 var $appInfo : Object
 $appInfo:=Application info
```

Si le code est exécuté à partir d'un environnement autonome, l'objet contient (par exemple) :

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

Si le code est exécuté à partir d'un client distant 4D, l'objet contient (par exemple) :

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

## Voir également

[Execute on server](../commands-legacy/execute-on-server.md)  
[Get database parameter](../commands-legacy/get-database-parameter.md)  
[System info](../commands-legacy/system-info.md)  
[REJECT NEW REMOTE CONNECTIONS](../commands-legacy/reject-new-remote-connections.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1599                        |
| Thread safe        | &check; |


