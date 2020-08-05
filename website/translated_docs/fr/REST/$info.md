---
id: info
title: '$info'
---

Renvoie des informations sur les ensembles d'entités stockés couramment dans le cache de 4D Server ainsi que sur les sessions utilisateur

## Description
En appelant cette requête pour votre projet, vous récupérez des informations dans les propriétés suivantes :

| Propriété      | Type       | Description                                                                         |
| -------------- | ---------- | ----------------------------------------------------------------------------------- |
| cacheSize      | Nombre     | 4D Server's cache size.                                                             |
| usedCache      | Nombre     | How much of 4D Server's cache has been used.                                        |
| entitySetCount | Nombre     | Number of entity selections.                                                        |
| entitySet      | Collection | A collection in which each object contains information about each entity selection. |
| ProgressInfo   | Collection | A collection containing information about progress indicator information.           |
| sessionInfo    | Collection | A collection in which each object contains information about each user session.     |

### entitySet
For each entity selection currently stored in 4D Server's cache, the following information is returned:


| Propriété     | Type    | Description                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | Chaine  | Un UUID qui référence l'ensemble d'entités.                                                                                                                                                                                                                                                                                   |
| dataClass     | Chaine  | Nom de la classe du datastore.                                                                                                                                                                                                                                                                                                |
| selectionSize | Nombre  | Number of entities in the entity selection.                                                                                                                                                                                                                                                                                   |
| sorted        | Booléen | Retourne vrai si l'ensemble a été trié (à l'aide de `$orderby`) ou faux s'il n'est pas trié.                                                                                                                                                                                                                                  |
| refreshed     | Date    | Date de création de l'ensemble d'entités ou de la dernière utilisation.                                                                                                                                                                                                                                                       |
| expires       | Date    | Date d'expiration de l'ensemble d'entités (cette date/heure change chaque fois que l'ensemble d'entités est actualisé). La différence entre actualisé et expire est le timeout d'un ensemble d'entités. Cette valeur correspond soit à deux heures par défaut, soit à la valeur que vous avez définie à l'aide de `$timeout`. |

For information about how to create an entity selection, refer to `$method=entityset`. If you want to remove the entity selection from 4D Server's cache, use `$method=release`.
> 4D also creates its own entity selections for optimization purposes, so the ones you create with `$method=entityset` are not the only ones returned.
> **IMPORTANT** If your project is in **Controlled Admin Access Mode**, you must first log into the project as a user in the Admin group.

### sessionInfo

For each user session, the following information is returned in the *sessionInfo* collection:

| Propriété  | Type   | Description                                                       |
| ---------- | ------ | ----------------------------------------------------------------- |
| sessionID  | Chaine | Un UUID qui référence la session.                                 |
| userName   | Chaine | Nom de l'utilisateur qui lance la session.                        |
| lifeTime   | Nombre | La durée d'une session utilisateur en secondes (3600 par défaut). |
| expiration | Date   | Date et heure d'expiration courante de la session utilisateur.    |

## Exemple

Retourne des informations sur les ensembles d'entités stockés couramment dans le cache de 4D Server ainsi que sur les sessions utilisateur:

`GET /rest/$info`

**Result**:

```
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
]
}
```
> The progress indicator information listed after the entity selections is used internally by 4D.