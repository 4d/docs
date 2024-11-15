---
id: locked-records-info
title: Locked records info
slug: /commands/locked-records-info
displayed_sidebar: docs
---

<!--REF #_command_.Locked records info.Syntax-->**Locked records info** ( *laTable* ) : Object<!-- END REF-->
<!--REF #_command_.Locked records info.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle vous souhaitez connaître les enregistrements verrouillés |
| Résultat | Object | &#8592; | Description des enregistrements verrouillés (le cas échéant) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Locked records info.Summary-->La commande **Locked records info** retourne un [objet](# "Données structurées sous forme d'objet natif 4D") décrivant le ou les enregistrement(s) actuellement verrouillé(s) dans *laTable*.<!-- END REF-->

**Note :** Cette commande fonctionne uniquement avec 4D et 4D Server. Elle retourne toujours un objet invalide lorsqu'elle est appelée depuis un 4D distant. Elle peut toutefois être appelée depuis un 4D distant si la méthode d'appel dispose de l'option "Exécuter sur serveur" ; elle retourne dans ce cas les informations relatives au serveur. Lorsqu'elle est appelée depuis un composant, elle s'applique à la base hôte.

L'objet retourné contient une propriété "records" qui est une collection d'objets :

```json
{    "records": [        objet description,        (…)    ]}
```

Chaque élément de collection "objet description" identifie un enregistrement verrouillé dans la table spécifiée. Il contient les propriétés suivantes en fonction de l'origine du "verrou" (process 4D ou API REST) :

* Si l'enregistrement a été verrouillé par un process 4D :

| **Propriété**     | **Type**      | **Description**                                                                                                                                                                                                                                                                                                                                  |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| contextID         | UUID (Chaîne) | UUID du contexte de la base à l'origine du verrouillage                                                                                                                                                                                                                                                                                          |
| contextAttributes | Objet         | Objet contenant des informations semblables à la commande [LOCKED BY](locked-by.md) mais appliquées à l'enregistrement, à la différence près que **Locked records info** retourne uniquement le nom de l'utilisateur défini dans le système (et pas celui de l'utilisateur 4D) ainsi que des informations supplémentaires (voir ci-dessous). |
| recordNumber      | Entier long   | Numéro de l'enregistrement verrouillé                                                                                                                                                                                                                                                                                                            |

L'objet *contextAttributes* est constitué des propriétés suivantes :

| **Propriété**                                                                                                                    | **Type**      | **Description**                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| task\_id                                                                                                                         | Numérique     | Numéro de référence du process                                                                                                 |
| user\_name                                                                                                                       | Chaîne        | Nom de l'utilisateur défini dans le système d'exploitation                                                                     |
| user4d\_alias                                                                                                                    | texte         | Alias utilisateur défini avec [SET USER ALIAS](set-user-alias.md), sinon le nom d'utilisateur dans le répertoire de la base 4D |
| user4d\_id                                                                                                                       | Numérique     | Numéro de l'utilisateur 4D(\*)                                                                                                 |
| host\_name                                                                                                                       | Chaîne        | Nom de la machine hôte                                                                                                         |
| task\_name                                                                                                                       | Chaîne        | Nom du process                                                                                                                 |
| client\_version                                                                                                                  | Numérique     | version de l'application cliente                                                                                               |
| *Uniquement lorsque la commande est exécutée sur 4D Server et si le verrouillage de l'enregistrement provient d'un 4D distant :* |               |                                                                                                                                |
| is\_remote\_context                                                                                                              | Booléen       | Indique si l'origine du verrouillage est un 4D distant (toujours *true* car non présent dans les autres cas)                   |
| client\_uid                                                                                                                      | UUID (Chaîne) | Identifiant UUID du 4D distant à l'origine du verrouillage                                                                     |

(\*) *Retourné uniquement dans les bases binaires.* Vous pouvez obtenir le nom d'utilisateur 4D à partir de la valeur de *user4d\_id* en utilisant le code suivant :  

```4d
 GET USER LIST($tabNoms;$tabIDs)
 $nom4DUser:=Find in array($tabIDs;user4d_id)
```

* Si l'enregistrement a été verrouillé par une *requête REST $lock* :

| **Propriété** | **Type** | **Description**                                                                                                                                                 |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host          | Chaîne   | URL avec laquelle l'entité a été verrouillée, par exemple "127.0.0.1:8044".                                                                                     |
| IPAddr        | Chaîne   | Adresse IP utilisée dans l'URL avec laquelle l'entité a été verrouillée, par exemple "127.0.0.1".                                                               |
| recordNumber  | Entier   | Numéro d'enregistrement de l'enregistrement verrouillé                                                                                                          |
| userAgent     | Chaîne   | Agent utilisateur du verrou, par exemple "Mozilla/5.0 (Windows NT 10.0 ; Win64 ; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36" |

#### Exemple 

Vous exécutez le code suivant :

```4d
 $vOlocked :=Locked records info([Table])
```

Si deux enregistrements sont verrouillés dans la table \[Table\], l'objet suivant est retourné dans $vOlocked :

```json
{    "records": [        {            "contextID": "A9BB84C0E57349E089FA44E04C0F2F25",            "contextAttributes": {                "task_id": 8,                 "user_name": "roland",                 "user4d_id": 1,                "host_name": "iMac de roland",                "task_name": "P_RandomLock",                 "client_version": -1342106592            },            "recordNumber": 1        },        {            "contextID": "8916338D1B8A4D86B857D92F593CCAC3",            "contextAttributes": {                "task_id": 9,                "user_name": "roland",                "user4d_id": 1,                "host_name": "iMac de roland",                "task_name": "P_RandomLock",                "client_version": -1342106592            },            "recordNumber": 2        }    ]}
```

Si le code est exécuté sur 4D Server et que le verrouillage est causé par un poste client distant, l'objet suivant est retourné dans $vOlocked :

```json
{    "records": [        {            "contextID": "B0EC087DC2FA704496C0EA15DC011D1C",            "contextAttributes": {                "task_id": 2,                 "user_name": "achim",                 "user4d_id": 1,                "host_name": "achim-pcwin",                "task_name": "P_RandomLock",                 "is_remote_context": true,                "client_uid": "0696E66F6CD731468E6XXX581A87554A",                "client_version": -268364752            },            "recordNumber": 1        }    ]}
```

#### Voir aussi 

[Locked](locked.md)  