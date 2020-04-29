---
id: info
title: '$info'
---

Renvoie des informations sur les ensembles d'entités stockés couramment dans le cache de 4D Server ainsi que sur les sessions utilisateur

## Description

En appelant cette requête pour votre projet, vous récupérez des informations dans les propriétés suivantes :

| Propriété      | Type    | Description                                                                                    |
| -------------- | ------- | ---------------------------------------------------------------------------------------------- |
| cacheSize      | Nombre  | Wakanda Server's cache size.                                                                   |
| usedCache      | Nombre  | How much of Wakanda Server's cache has been used.                                              |
| entitySetCount | Nombre  | Number of entity sets.                                                                         |
| entitySet      | Tableau | An array in which each object contains information about each entity set.                      |
| ProgressInfo   | Tableau | An array containing information about progress indicator information.                          |
| sessionInfo    | Tableau | An array in which each object contains information about each user session.                    |
| jsContextInfo  | Tableau | An array containing one object that returns the information about the JavaScript context pool. |


### entitySet

For each entity set currently stored in 4D Server's cache, the following information is returned:

| Propriété     | Type    | Description                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | Chaine  | Un UUID qui référence l'ensemble d'entités.                                                                                                                                                                                                                                                                                   |
| tableName     | Chaine  | Nom de la classe du datastore.                                                                                                                                                                                                                                                                                                |
| selectionSize | Nombre  | Number of entities in the entity set.                                                                                                                                                                                                                                                                                         |
| sorted        | Booléen | Retourne vrai si l'ensemble a été trié (à l'aide de `$orderby`) ou faux s'il n'est pas trié.                                                                                                                                                                                                                                  |
| refreshed     | Date    | Date de création de l'ensemble d'entités ou de la dernière utilisation.                                                                                                                                                                                                                                                       |
| expires       | Date    | Date d'expiration de l'ensemble d'entités (cette date/heure change chaque fois que l'ensemble d'entités est actualisé). La différence entre actualisé et expire est le timeout d'un ensemble d'entités. Cette valeur correspond soit à deux heures par défaut, soit à la valeur que vous avez définie à l'aide de `$timeout`. |


For information about how to create an entity set, refer to `$method=entityset`. If you want to remove the entity set from 4D Server's cache, use `$method=release`.

> 4D also creates its own entity sets for optimization purposes, so the ones you create with `$method=entityset` are not the only ones returned.
> 
> **IMPORTANT** Si votre projet est en **mode d'accès administrateur contrôlé**, vous devez d'abord vous connecter au projet en tant qu'utilisateur du groupe Admin.

### sessionInfo

For each user session, the following information is returned in the *sessionInfo* array:

| Propriété  | Type   | Description                                                       |
| ---------- | ------ | ----------------------------------------------------------------- |
| sessionID  | Chaine | Un UUID qui référence la session.                                 |
| userID     | Chaine | A UUID that references the user who runs the session.             |
| userName   | Chaine | Nom de l'utilisateur qui lance la session.                        |
| lifeTime   | Nombre | La durée d'une session utilisateur en secondes (3600 par défaut). |
| expiration | Date   | Date et heure d'expiration courante de la session utilisateur.    |


### jsContextInfo

The object in the **jsContextInfo** array details the JavaScript context pool:

| Propriété             | Type    | Description                                                                           |
| --------------------- | ------- | ------------------------------------------------------------------------------------- |
| contextPoolSize       | Nombre  | Maximum number of reusable contexts that can be stored in the JS pool (50 by default) |
| activeDebugger        | Booléen | Debugger state (false by default)                                                     |
| usedContextCount      | Nombre  | Number of used contexts                                                               |
| usedContextMaxCount   | Nombre  | Maximum number of contexts that have been used simultaneously                         |
| reusableContextCount  | Nombre  | Number of reusable contexts (both used and unused)                                    |
| unusedContextCount    | Nombre  | Number of unused contexts                                                             |
| createdContextCount   | Nombre  | Number of contexts created since the project was started                              |
| destroyedContextCount | Nombre  | Number of contexts destroyed since the project was started                            |


## Exemple

Retourne des informations sur les ensembles d'entités stockés couramment dans le cache de 4D Server ainsi que sur les sessions utilisateur:

`GET /rest/$info`

**Résultat** :

    {
    cacheSize: 209715200,
    usedCache: 3136000,
    entitySetCount: 4,
    entitySet: [
        {
            id: "1418741678864021B56F8C6D77F2FC06",
            tableName: "Company",
            selectionSize: 1,
            sorted: false,
            refreshed: "2011-11-18T10:30:30Z",
            expires: "2011-11-18T10:35:30Z"
        },
        {
            id: "CAD79E5BF339462E85DA613754C05CC0",
            tableName: "People",
            selectionSize: 49,
            sorted: true,
            refreshed: "2011-11-18T10:28:43Z",
            expires: "2011-11-18T10:38:43Z"
        },
        {
            id: "F4514C59D6B642099764C15D2BF51624",
            tableName: "People",
            selectionSize: 37,
            sorted: false,
            refreshed: "2011-11-18T10:24:24Z",
            expires: "2011-11-18T12:24:24Z"
        }
    ],
    ProgressInfo: [
        {
            UserInfo: "flushProgressIndicator",
            sessions: 0,
            percent: 0
        },
        {
            UserInfo: "indexProgressIndicator",
            sessions: 0,
            percent: 0
        }
    ],
    sessionInfo: [
        {
            sessionID: "6657ABBCEE7C3B4089C20D8995851E30",
            userID: "36713176D42DB045B01B8E650E8FA9C6",
            userName: "james",
            lifeTime: 3600,
            expiration: "2013-04-22T12:45:08Z"
        },
        {
            sessionID: "A85F253EDE90CA458940337BE2939F6F",
            userID: "00000000000000000000000000000000",
            userName: "default guest",
            lifeTime: 3600,
            expiration: "2013-04-23T10:30:25Z"
    }
    ],
    jsContextInfo: [
        {
            "contextPoolSize": 50,
            "activeDebugger": false,
            "usedContextCount": 1,
            "usedContextMaxCount": 1,
            "reusableContextCount": 1,
            "unusedContextCount": 0,
            "createdContextCount": 4,
            "destroyedContextCount": 3
        }
    ]
    }
    

> The progress indicator information listed after the entity sets is used internally by 4D.