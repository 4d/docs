---
id: license-usage
title: License usage
slug: /commands/license-usage
displayed_sidebar: docs
---

<!--REF #_command_.License usage.Syntax-->**License usage** : Collection<!-- END REF-->
<!--REF #_command_.License usage.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Collection | &#8592; | Une collection d'objets contenant des informations sur les licences utilisées |

<!-- END REF-->

#### Description 

<!--REF #_command_.License usage.Summary-->La commande **License usage** retourne une collection d'objets contenant des informations sur les licences utilisées\[#/descv\].<!-- END REF-->

Chaque objet de la collection retournée possède les attributs suivants :

| **Nom de la propriété** | **Type**  | **Description**                                                                                                                           |
| ----------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| productId               | Numérique | ID du type de licence                                                                                                                     |
| productName             | Texte     | Nom du type de licence                                                                                                                    |
| productUsedCount        | Numérique | Nombre de licences utilisées (y compris celle-ci) lorsque la licence a été utilisée.                                                      |
| productBalance          | Numérique | Nombre de licences restantes pour le produit (juste après l'action)                                                                       |
| globalProductUsedCount  | Numérique | Lorsque plusieurs serveurs fonctionnent sur la même machine, la propriété indique le nombre de licences utilisées pour tous ces serveurs. |
| token                   | Numérique | ID unique de l'opération                                                                                                                  |
| time                    | Texte     | Horodatage indiquant la période d'utilisation de la licence, au format ISO 8601                                                           |
| reason                  | Texte     | Le motif/l'appelant de cette utilisation de licence                                                                                       |
| session                 | Objet     | Contient des informations spécifiques sur la session de la licence utilisée.                                                              |

Selon le type de session (client 4D ou REST par exemple), le contenu de l'objet *session* dans le tableau ci-dessus varie. Voir ci-dessous pour plus de détails.

#### Objet session pour les sessions 4D clientes 

Dans la collection retournée pour les sessions 4D, chaque élément contient un objet session identique à celui retourné par la commande [Process activity](../commands/process-activity.md) :

| **Nom de la propriété** | **Type**      | **Description**                                                                 |
| ----------------------- | ------------- | ------------------------------------------------------------------------------- |
| type                    | Texte (enum)  | Type de session. Valeurs possibles : "remote", "storedProcedure", "web", "rest" |
| userName                | Texte         | Nom d'utilisateur                                                               |
| machineName             | Texte         | Nom de la machine distante                                                      |
| systemUserName          | Texte         | Nom de la session du système ouverte sur la machine distante                    |
| IPAddress               | Texte         | Adresse IP de la machine distante                                               |
| hostType                | Texte (enum)  | Type d'hôte. Valeurs possibles : "windows", "mac", "browser"                    |
| creationDateTime        | Date ISO 8601 | Date et heure de connexion de la machine distante                               |
| state                   | Texte (enum)  | Etat de la session. Valeurs possibles : "active", "postponed", "sleeping"       |
| ID                      | Texte         | UUID de la session                                                              |
| persistentID            | Texte         | ID persistant de la session                                                     |

#### Objet session pour les sessions SQL 

Ce tableau détaille le contenu de l'objet session des sessions SQL : 

| **Nom de la propriété** | **Type** | **Description**          |
| ----------------------- | -------- | ------------------------ |
| IPAddress               | Text     | Adresse IP de la session |
| userAgent               | Text     | Agent utilisateur        |
| userName                | Text     | Nom d'utilisateur        |
| userId                  | Number   | ID utilisateur           |

#### Objet session pour les sessions REST 

Ce tableau détaille le contenu de l'objet session des sessions REST :

| **Nom de la propriété** | **Type** | **Description**                                 |
| ----------------------- | -------- | ----------------------------------------------- |
| userName                | Texte    | Nom d'utilisateur                               |
| sessionID               | Texte    | ID sessions REST                                |
| IPAddress               | Texte    | ID du client ayant initié la session REST       |
| isDatastore             | Booléen  | Vrai si la requête REST provient d'un datastore |


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1782 |
| Thread safe | &cross; |


