---
id: license-info
title: License info
displayed_sidebar: docs
---

<!--REF #_command_.License info.Syntax-->**License info** : Object<!-- END REF-->

<!--REF #_command_.License info.Params-->

| Paramètres | Type   |                             | Description                        |
| ---------- | ------ | --------------------------- | ---------------------------------- |
| Résultat   | Object | &#8592; | Informations sur la licence active |

<!-- END REF-->

## Description

<!--REF #_command_.License info.Summary-->The **License info** command returns an object providing detailed information about the active license.<!-- END REF-->

Si la commande est exécutée sur une application 4D qui n'utilise pas de licence localement (par exemple 4D remote), la commande renvoie un objet Null.

L'objet retourné contient les propriétés suivantes :

```json
{
    "name": "string",
    "key": 0,
    "licenseNumber": "string",
    "version": "string",
    "attributes": ["string1", "string2"], // optional
    "userName": "string",
    "userMail": "string",
    "companyName": "string",
    "platforms": ["string1", "string2"],
    "expirationDate": { 
        // details here 
    }, // optional
    "renewalFailureCount": 0, // optional
    "products": [
        { // for each registered expansion product
            "id": 0,
            "name": "string",
            "usedCount": 0,
            "allowedCount": 0,
            "rights": [
                {
                    "count": 0,
                    "expirationDate": { 
                        // details here 
                    } // optional
                }
            ]
        }
    ]
}
```

| **Propriété**       | **Type**              | **Description**                                                                                                                                                                                                                                                          | **Example**                                                                                                                                       |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                | string                | Nom commercial                                                                                                                                                                                                                                                           | "4D Developer Professional vXX"                                                                                                                   |
| key                 | number                | ID du produit installé. Un numéro unique est associé à une application 4D (telle que 4D Server, 4D en mode local, 4D Desktop, etc.) installée sur une machine. Ce numéro est chiffré. | 12356789                                                                                                                                          |
| licenseNumber       | string                | Numéro de licence                                                                                                                                                                                                                                                        | "4DDP16XXXXX1123456789"                                                                                                                           |
| version             | string                | Numéro de version du produit                                                                                                                                                                                                                                             | "16", "16R2"                                                                                                                                      |
| attributes          | collection de chaînes | Type(s) de licence, le cas échéant (facultatif)                                                                                                                                                                                    | \["application","OEM"], ["evaluation"\] |
| userName            | string                | Nom du compte sur 4D store                                                                                                                                                                                                                                               | "John Smith"                                                                                                                                      |
| userMail            | string                | Mail du compte sur 4D store                                                                                                                                                                                                                                              | "john.smith@gmail.com"                                                                               |
| companyName         | string                | Nom de l'entreprise sur 4D store                                                                                                                                                                                                                                         | "Alpha Cie"                                                                                                                                       |
| platforms           | collection de chaînes | Plate-forme(s) de licence                                                                                                                                                                                                                             | \["macOS", "windows"\]                                                                      |
| expirationDate      | object                | Date d'expiration (facultatif)                                                                                                                                                                                                                        | {"day":2, "month":6, "year":2026}                                                                 |
| renewalFailureCount | number                | Nombre de tentatives de renouvellement automatique infructueuses pour au moins une des licences de produit (facultatif)                                                                                                                               | 3                                                                                                                                                 |
| products            | collection d'objets   | Description de la licence produit (un élément par licence produit). Voir ci-dessous.                                                                                                                                  |                                                                                                                                                   |

Chaque objet de la collection `products` peut avoir les propriétés suivantes :

| **Propriété** |                                                                                            | **Type**            | **Description**                                                                  | **Example**                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------ | ------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| id            |                                                                                            | number              | Numéro de licence                                                                | Pour les valeurs disponibles, voir la commande [Is license available](../commands-legacy/is-license-available.md) |
| name          |                                                                                            | string              | Nom de la licence                                                                | "4D Write - 4D Write Pro"                                                                                         |
| usedCount     |                                                                                            | number              | Nombre de connexions consommées                                                  | 8                                                                                                                 |
| allowedCount  |                                                                                            | number              | Connexions totales autorisées pour le produit par rapport aux dates d'expiration | 15                                                                                                                |
| rights        |                                                                                            | collection d'objets | Droits pour le produit (un élément par date d'expiration)     |                                                                                                                   |
|               | \[ \].count          | number              | Nombre de connexions autorisées                                                  | 15 (32767 signifie illimité)                                                                   |
|               | \[ \].expirationDate | object              | Date d'expiration (facultatif, même format que ci-dessus)     | {"day":1, "month":11, "year":2017}                                |

## Exemple

Vous souhaitez obtenir des informations sur votre licence 4D Server courante :

```4d
 var $obj : Object
 $obj:=License info
```

*$obj* peut contenir, par exemple :

```json
{
    "name": "4D Server v16 R3",
    "key": 123456789,
    "licenseNumber": "xxxx",
    "version": "16R3",
    "userName": "John DOE",
    "userMail": "john.doe@alpha.com",
    "companyName": "Alpha",
    "platforms": ["macOS", "windows"],
    "expirationDate": {"day":1, "month":1, "year":2018},
    "products":[
        {
            "allowedCount": 15,
            "id": 808464697,
            "name": "4D Write - 4D Write Pro",
            "rights": [
                {
                    "count": 5,
                    "expirationDate": {"day":1, "month":2, "year":2018}
                }, {
                    "count": 10,
                    "expirationDate": {"day":1, "month":11, "year":2017}
                }, {
                    "count": 10,
                    "expirationDate": {"day":1, "month":11, "year":2015} //expirée, non comptabilisée
                }
            ],
            "usedCount": 12
        },
        {...}
    ]
}
```

## Voir également

[CHANGE LICENSES](../commands-legacy/change-licenses.md)\
[Is license available](../commands-legacy/is-license-available.md)\
[WEB Get server info](../commands-legacy/web-get-server-info.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1489                        |
| Thread safe        | &check; |


