---
id: version-18.0-info
title: '$info'
original_id: info
---

Renvoie des informations sur les ensembles d'entités stockés couramment dans le cache de 4D Server ainsi que sur les sessions utilisateur

## Description

En appelant cette requête pour votre projet, vous récupérez des informations dans les propriétés suivantes :

| Propriété      | Type    | Description                                                                                  |
| -------------- | ------- | -------------------------------------------------------------------------------------------- |
| cacheSize      | Nombre  | Taille du cache du serveur Wakanda.                                                          |
| usedCache      | Nombre  | La quantité de cache du serveur Wakanda utilisée.                                            |
| entitySetCount | Nombre  | Nombre d'ensembles d'entités.                                                                |
| entitySet      | Tableau | Un tableau dans lequel chaque objet contient des informations sur chaque ensemble d'entités. |
| ProgressInfo   | Tableau | Tableau contenant des informations sur les indicateurs de progression.                       |
| sessionInfo    | Tableau | Tableau dans lequel chaque objet contient des informations sur chaque session utilisateur.   |
| jsContextInfo  | Tableau | Un tableau contenant un objet qui retourne les informations sur le contexte JavaScript.      |


### entitySet

Pour chaque ensemble d'entités stocké dans le cache de 4D Server, les informations retournées sont les suivantes :

| Propriété     | Type    | Description                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | Chaine  | Un UUID qui référence l'ensemble d'entités.                                                                                                                                                                                                                                                                                   |
| tableName     | Chaine  | Nom de la classe du datastore.                                                                                                                                                                                                                                                                                                |
| selectionSize | Nombre  | Nombre d'entités dans l'ensemble d'entités.                                                                                                                                                                                                                                                                                   |
| sorted        | Booléen | Retourne vrai si l'ensemble a été trié (à l'aide de `$orderby`) ou faux s'il n'est pas trié.                                                                                                                                                                                                                                  |
| refreshed     | Date    | Date de création de l'ensemble d'entités ou de la dernière utilisation.                                                                                                                                                                                                                                                       |
| expires       | Date    | Date d'expiration de l'ensemble d'entités (cette date/heure change chaque fois que l'ensemble d'entités est actualisé). La différence entre actualisé et expire est le timeout d'un ensemble d'entités. Cette valeur correspond soit à deux heures par défaut, soit à la valeur que vous avez définie à l'aide de `$timeout`. |


Pour plus d'informations sur la création d'un ensemble d'entités, reportez-vous à `$method=entityset`. Si vous souhaitez supprimer l'ensemble d'entités du cache de 4D Server, utilisez `$method=release`.

> 4D crée également ses propres ensembles d'entités à des fins d'optimisation, de sorte que ceux que vous créez avec `$method=entityset` ne soient pas les seuls à être retournés.
> 
> **IMPORTANT** Si votre projet est en **mode d'accès administrateur contrôlé**, vous devez d'abord vous connecter au projet en tant qu'utilisateur du groupe Admin.

### sessionInfo

Pour chaque session utilisateur, les informations suivantes sont retournées dans le tableau *sessionInfo* :

| Propriété  | Type   | Description                                                       |
| ---------- | ------ | ----------------------------------------------------------------- |
| sessionID  | Chaine | Un UUID qui référence la session.                                 |
| userID     | Chaine | Un UUID qui référence l'utilisateur qui lance la session.         |
| userName   | Chaine | Nom de l'utilisateur qui lance la session.                        |
| lifeTime   | Nombre | La durée d'une session utilisateur en secondes (3600 par défaut). |
| expiration | Date   | Date et heure d'expiration courante de la session utilisateur.    |


### jsContextInfo

L'objet du tableau **jsContextInfo** détaille le contexte JavaScript :

| Propriété             | Type    | Description                                                                                    |
| --------------------- | ------- | ---------------------------------------------------------------------------------------------- |
| contextPoolSize       | Nombre  | Nombre maximum de contextes réutilisables pouvant être stockés dans le pool JS (50 par défaut) |
| activeDebugger        | Booléen | Etat du débogueur (faux par défaut)                                                            |
| usedContextCount      | Nombre  | Nombre de contextes utilisés                                                                   |
| usedContextMaxCount   | Nombre  | Nombre maximum de contextes qui ont été utilisés simultanément                                 |
| reusableContextCount  | Nombre  | Nombre de contextes réutilisables (utilisés et non utilisés)                                   |
| unusedContextCount    | Nombre  | Nombre de contextes inutilisés                                                                 |
| createdContextCount   | Nombre  | Nombre de contextes créés depuis le démarrage du projet                                        |
| destroyedContextCount | Nombre  | Nombre de contextes détruits depuis le démarrage du projet                                     |


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
    

> Les informations de l'indicateur de progression répertoriées après les ensembles d'entités sont utilisées en interne par 4D.