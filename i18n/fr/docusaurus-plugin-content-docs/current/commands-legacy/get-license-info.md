---
id: get-license-info
title: Get license info
slug: /commands/get-license-info
displayed_sidebar: docs
---

<!--REF #_command_.Get license info.Syntax-->**Get license info** -> Résultat<!-- END REF-->
<!--REF #_command_.Get license info.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Objet | &#x1F850; | Informations sur la licence active |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get license info.Summary-->La commande **Get license info** retourne un objet fournissant les informations détaillées sur la licence active.<!-- END REF-->

Si la commande est exécutée dans une application 4D qui n'utilise pas localement de licence (comme un 4D distant), la commande retourne un objet nul.

L'objet retourné contient les propriétés suivantes :

```RAW
{    "name": string    "licenseNumber": string    "version": string    "attributes": optional, array of strings    "userName": string    "userMail": string    "companyName": string    "platforms": array of strings    "expirationDate": optional, object    "renewalFailureCount": optional, number    "products":[ //for each registered expansion product        {            "id": number            "name": string            "usedCount": number            "allowedCount": number            "rights": [                 {                    "count": number                    "expirationDate" optional, object                 }            ]        }    ]}
```

| **Nom de la propriété** | **Type**              | **Description**                                                                                | **Exemples**                                                                                   |
| ----------------------- | --------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| name                    | chaîne                | Nom commercial                                                                                 | "4D Developer Professional v16"                                                                |
| licenseNumber           | chaîne                | Numéro de licence                                                                              | "4DDP16XXXXX1123456789"                                                                        |
| version                 | chaîne                | Numéro de version de produit                                                                   | "16", "16R2"                                                                                   |
| attributes              | collection de chaînes | Type(s) de licences lorsque c'est applicable (optionnel)                                       | \["application","OEM"\]                                                                        |
| userName                | chaîne                | Nom du compte 4D Store                                                                         | "John Smith"                                                                                   |
| userMail                | chaîne                | Mail du compte 4D Store                                                                        | "john.smith@gmail.com"                                                                         |
| companyName             | chaîne                | Nom de Société du compte 4D Store                                                              | "Alpha Cie"                                                                                    |
| platforms               | collection de chaînes | Plateforme(s) de la licence                                                                    | \["macOS", "windows"\]                                                                         |
| expirationDate          | objet                 | Date d'expiration (optionnel)                                                                  | {"day":2, "month":6, "year":2018}                                                              |
| renewalFailureCount     | numérique             | Nombre de tentatives de renouvellement automatique de licence produit ayant échoué (optionnel) | 3                                                                                              |
| products                | collection d'objets   | Description des licences des produits (tableau d'objets, un élément par licence de produit)    |                                                                                                |
| \[ \].id                | numérique             | Identifiant de licence                                                                         | Pour les valeurs disponibles, voir la commande [Is license available](is-license-available.md) |
| \[ \].name              | chaîne                | Nom de licence                                                                                 | "4D Write - 4D Write Pro"                                                                      |
| \[ \].usedCount         | numérique             | Nombre de connexions utilisées                                                                 | 8                                                                                              |
| \[ \].allowedCount      | numérique             | Connexions totales autorisées pour le produit par rapport à la date d'expiration               | 15                                                                                             |
| \[ \].rights            | collection d'objets   | Droits pour le produit (un élément par date d'expiration)                                      |                                                                                                |
| \[ \].count             | numérique             | Nombre de connexions autorisées                                                                | 15 (32767 signifie illimité)                                                                   |
| \[ \].expirationDate    | objet                 | Date d'expiration (optionnel, même format que ci-dessus)                                       | {"day":1, "month":11, "year":2017}                                                             |

#### Exemple 

```undefined
{
    "name": "4D Server v16 R3",
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
                    "expirationDate": {"day":1, "month":11, "year":2015} //expired, not counted
                }
            ],
            "usedCount": 12
        },
        {...}
    ]
}
```

#### Voir aussi 

[CHANGE LICENSES](change-licenses.md)  
[Is license available](is-license-available.md)  
[WEB Get server info](web-get-server-info.md)  