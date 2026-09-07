---
id: datastores
title: Datastores distants
---

Un **datastore distant** est une référence, dans une application 4D locale (4D ou 4D Server), à un [datastore](dsMapping.md#datastore) stocké dans une autre application 4D.

L'application 4D locale se connecte et référence le datastore distant à l'aide de la commande [`Open datastore`](../commands/open-datastore).

Sur la machine distante, 4D ouvre une [session](../WebServer/sessions.md) pour gérer les requêtes de l'application qui a appelé `Open datastore`. Requests internally use the [REST API](../REST/gettingStarted.md), which means that they require [**authentication** and **available licenses**](../REST/authUsers.md).

## Utiliser des sessions web

Lorsque vous travaillez avec un datastore distant référencé par des appels à la commande [`Open datastore`](../commands/open-datastore), la connexion avec les process de requête est gérée via des [sessions web](../WebServer/sessions.md) sur la machine distante.

La session web créée sur le datastore distant est identifiée à l'aide d'un ID de session interne, associé au `localID` du côté de l'application 4D. Cette session gère automatiquement l'accès aux données, aux entity selections et aux entités.

Le `localID` est local à la machine qui se connecte au datastore distant, ce qui signifie que :

- Si d'autres process de la même application doivent accéder au même datastore distant, ils peuvent utiliser le même `localID` et partager alors la même session.
- Si un autre process de la même application ouvre le même datastore distant, mais avec un autre `localID`, il créera une nouvelle session sur le datastore distant.
- Si un autre poste se connecte au même datastore distant avec le même `localID`, il créera une autre session avec un autre cookie.

Ces principes sont illustrés dans les graphiques suivants :

![](../assets/en/ORDA/sessions.png)

### Visualiser les sessions

Sessions for datastore access are shown in the 4D Server administration window as [**REST sessions**](../ServerWindow/sessions.md#rest-web-and-soap-sessions) with **4D** as user agent.

## Fermeture des sessions

Comme décrit dans le paragraphe [durée de vie de la session](../WebServer/sessions.md#session-lifetime), une session web est automatiquement fermée par 4D lorsqu'il n'y a pas eu d'activité pendant une durée déterminée par son timeout. The default timeout is 60 mn, but this value can be modified using the *connectionInfo* parameter of the [`Open datastore`](../commands/open-datastore) command.

Si une demande est envoyée au datastore distant après la fermeture de la session, elle est automatiquement recréée si possible (licence disponible, serveur non arrêté, etc.). Cependant, gardez à l'esprit que le contexte de la session concernant les verrous et les transactions est perdu (voir ci-dessous).

## Verrouillage et transactions

Les fonctionnalités ORDA relatives au verrouillage d'entité et aux transactions sont gérées au niveau du process dans les datastore distants, tout comme en mode client/serveur ORDA :

- Si un process verrouille une entité à partir d'un datastore distant, l'entité est verrouillée pour tous les autres process, même lorsque ces process partagent la même session (voir [Verrouillage d'entités](entities.md#entity-locking)). Si plusieurs entités pointant vers le même enregistrement ont été verrouillées dans un process, elles doivent toutes être déverrouillées dans le process pour supprimer le verrou. Si un verrou a été mis sur une entité, il est supprimé lorsqu'il n'existe plus de référence à cette entité en mémoire.
- Transactions can be started, validated or cancelled separately on each remote datastore using the [`dataStore.startTransaction()`](../API/DataStoreClass.md#starttransaction), [`dataStore.cancelTransaction()`](../API/DataStoreClass.md#canceltransaction), and [`dataStore.validateTransaction()`](../API/DataStoreClass.md#starttransaction) functions. Elles n’ont pas d’incidences sur les autres datastore.
- Les commandes classiques du langage 4D ([`START TRANSACTION`](../commands/start-transaction), [`VALIDATE TRANSACTION`](../commands/validate-transaction), [`CANCEL TRANSACTION`](../commands/cancel-transaction)) ne s'appliquent qu'au datastore principal (renvoyé par `ds`).
  Si une entité d'un datastore distant est verrouillée par une transaction dans un process, les autres process ne peuvent pas la mettre à jour, même si ces process partagent la même session.
- Les verrous sur les entités sont supprimés et les transactions sont annulées :
  - lorsque le process est tué.
  - quand la session est fermée sur le serveur
  - lorsque la session est arrêtée à partir de la fenêtre d’administration du serveur.

