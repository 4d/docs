---
id: web-server-list
title: WEB Server list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list** : Collection<!-- END REF-->

<!--REF #_command_.WEB Server list.Params-->

| Paramètres | Type       |                                | Description                                    |
| ---------- | ---------- | ------------------------------ | ---------------------------------------------- |
| Résultat   | Collection | &amp;larr; | Collection of the available Web Server objects |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R3   | Ajout         |

</details>

#### Description

La commande `WEB Server list` <!-- REF #_command_.WEB Server list.Summary -->renvoie une collection de tous les objets serveur Web disponibles dans l'application 4D<!-- END REF -->.

Une application 4D peut contenir de un à plusieurs serveurs Web :

- un serveur Web pour la base de données hôte (serveur Web par défaut)
- un serveur Web pour chaque composant.

Tous les serveurs Web disponibles sont renvoyés par la commande `WEB Server list` , qu'ils soient en cours d'exécution ou non.

> L'objet serveur Web par défaut est automatiquement chargé par 4D au démarrage. On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](web-server.md) command.

You can use the [.name](../API/WebServerClass.md#name) property of the Web server object to identify the project or component to which each Web server object in the list is attached.

#### Exemple

Nous voulons savoir combien de serveurs web en fonctionnement sont disponibles :

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")
```

#### Voir également

[WEB Server](web-server.md)\
[webServer.stop()](../API/WebServerClass.md#stop)
