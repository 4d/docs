---
id: info
title: $info
---

Renvoie des informations sur les entity sets actuellement stockés dans le cache de 4D Server ainsi que sur les sessions utilisateur

## Description

En appelant cette requête pour votre projet, vous récupérez des informations dans les propriétés suivantes :

| Propriété      | Type       | Description                                                                                                                                                                                                                                     |
| -------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cacheSize      | Number     | Taille du cache du serveur 4D.                                                                                                                                                                                                  |
| usedCache      | Number     | La quantité de cache du serveur 4D utilisée.                                                                                                                                                                                    |
| entitySetCount | Number     | Nombre d'entity sets.                                                                                                                                                                                                           |
| entitySet      | Collection | Une collection dans laquelle chaque objet contient des informations sur chaque entity set.                                                                                                                                      |
| ProgressInfo   | Collection | Une collection contenant des informations sur les indicateurs de progression.                                                                                                                                                   |
| sessionInfo    | Collection | Une collection dans laquelle chaque objet contient des informations sur chaque session utilisateur.                                                                                                                             |
| privileges     | Object     | Un objet avec une propriété "privileges" (collection d'objets). Chaque objet de la collection a une propriété "privilege" avec le nom d'un privilège de la session utilisateur comme valeur. |

### entitySet

Pour chaque sélection d'entités stocké dans le cache de 4D Server, les informations retournées sont les suivantes :

| Propriété     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                  |
| ------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | Text    | Un UUID qui référence l'entity set.                                                                                                                                                                                                                                                                                                                          |
| dataClass     | Text    | Nom de la dataclass.                                                                                                                                                                                                                                                                                                                                         |
| selectionSize | Number  | Nombre d'entités dans l'entity set.                                                                                                                                                                                                                                                                                                                          |
| sorted        | Boolean | Retourne vrai si l'ensemble a été trié (à l'aide de `$orderby`) ou faux s'il n'est pas trié.                                                                                                                                                                                                                                              |
| refreshed     | Date    | Date de la création ou de la dernière utilisation de l'entity set.                                                                                                                                                                                                                                                                                           |
| expires       | Date    | Date d'expiration de l'entity set (cette date/heure change chaque fois que l'entity set est actualisé). La différence entre refreshed et expires est le timeout pour un entity set. Cette valeur correspond soit à deux heures par défaut, soit à la valeur que vous avez définie à l'aide de `$timeout`. |

Pour plus d'informations sur la création d'un entity set, reportez-vous à `$method=entityset`. Si vous souhaitez supprimer la sélection d'entités du cache de 4D Server, utilisez `$method=release`.

> 4D crée également ses propres entity sets à des fins d'optimisation, de sorte que ceux que vous créez avec `$method=entityset` ne soient pas les seuls à être retournés.

> **IMPORTANT**
> Si votre projet est en **mode d'accès administrateur contrôlé**, vous devez d'abord vous connecter au projet en tant qu'utilisateur du groupe Admin.

### sessionInfo

Pour chaque session utilisateur, les informations suivantes sont retournées dans la collection _sessionInfo_ :

| Propriété  | Type   | Description                                                                                          |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------- |
| sessionID  | Text   | Un UUID qui référence la session.                                                    |
| userName   | Text   | Nom de l'utilisateur qui lance la session.                                           |
| lifeTime   | Number | La durée d'une session utilisateur en secondes (3600 par défaut). |
| expiration | Date   | Date et heure d'expiration courante de la session utilisateur.                       |

## Exemple

Retourne des informations sur les entity sets stockés dans le cache de 4D Server ainsi que sur les sessions utilisateur:

`GET /rest/$info`

**Résultat** :

```json
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

> Les informations de l'indicateur de progression répertoriées après les sélections d'entités sont utilisées en interne par 4D.
