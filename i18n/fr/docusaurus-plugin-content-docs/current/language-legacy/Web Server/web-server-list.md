---
id: web-server-list
slug: /commands/web-server-list
title: WEB Server list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list** : Collection<!-- END REF-->

<!--REF #_command_.WEB Server list.Params-->

<div class="no-index">

| Paramètres | Type       |                             | Description                                  |
| ---------- | ---------- | --------------------------- | -------------------------------------------- |
| Résultat   | Collection | &#8592; | Collection des objets Web Server disponibles |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R3   | Ajout         |

</details>
</div>

## Description

La commande `WEB Server list` <!-- REF #_command_.WEB Server list.Summary -->renvoie une collection de tous les objets serveur Web disponibles dans l'application 4D<!-- END REF -->.

Une application 4D peut contenir de un à plusieurs serveurs Web :

- un serveur Web pour la base de données hôte (serveur Web par défaut)
- un serveur Web pour chaque composant.

Tous les serveurs Web disponibles sont renvoyés par la commande `WEB Server list` , qu'ils soient en cours d'exécution ou non.

> L'objet serveur Web par défaut est automatiquement chargé par 4D au démarrage. D'un autre côté, chaque serveur Web composant que vous voulez utiliser doit être instancié en utilisant la commande [`WEB Server`](../commands/web-server).

Vous pouvez utiliser la propriété [.name](../../API/WebServerClass.md#name) de l'objet serveur Web pour identifier le projet ou le composant auquel chaque objet serveur Web de la liste est attaché.

## Exemple

Nous voulons savoir combien de serveurs web en fonctionnement sont disponibles :

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")
```

## Voir également

[WEB Server](../commands/web-server)\
[webServer.stop()](../../API/WebServerClass.md#stop)

## Propriétés

|                    |      |
| ------------------ | ---- |
| Numéro de commande | 1716 |
| Thread safe        | oui  |


