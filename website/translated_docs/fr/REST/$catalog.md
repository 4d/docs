---
id: catalog
title: '$catalog'
---


Le catalogue décrit toutes les dataclass et les attributs disponibles dans le datastore.

## Syntaxe

| Syntaxe                                       | Exemple              | Description                                                                            |
| --------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                      | `/$catalog`          | Retourne une liste des dataclasse de votre projet avec deux URI                        |
| [**$catalog/$all**](#catalogall)              | `/$catalog/$all`     | Retourne des informations sur toutes les dataclasse de votre projet et leurs attributs |
| [**$catalog/{dataClass}**](#catalogdataclass) | `/$catalog/Employee` | Renvoie des informations sur une dataclass et ses attributs                            |


## $catalog

Retourne une liste de dataclass dans votre projet avec deux URI : une pour accéder aux informations sur sa structure et une pour récupérer les données de la dataclass

### Description

Lorsque vous appelez `$catalog`, une liste des dataclass est retournée avec deux URI pour chaque dataclass dans le datastore de votre projet.

Seules les dataclass exposées apparaissent dans cette liste pour le datastore de votre projet. Pour plus d'informations, reportez-vous à la section [**Exposition des tableaux et des champs**](configuration.md#exposing-tables-and-fields).

Voici une description des propriétés retournées pour chaque dataclass dans le datastore de votre projet :

| Propriété | Type   | Description                                                                          |
| --------- | ------ | ------------------------------------------------------------------------------------ |
| name      | Chaine | Nom de la dataclass.                                                                 |
| uri       | Chaine | Un URI vous permettant d'obtenir des informations sur la dataclass et ses attributs. |
| dataURI   | Chaine | URI vous permettant d'afficher les données dans la dataclass.                        |


### Exemple

`GET  /rest/$catalog`

**Résultat** :

    {
        dataClasses: [
            {
                name: "Company",
                uri: "http://127.0.0.1:8081/rest/$catalog/Company",
                dataURI: "http://127.0.0.1:8081/rest/Company"
            },
            {
                name: "Employee",
                uri: "http://127.0.0.1:8081/rest/$catalog/Employee",
                dataURI: "http://127.0.0.1:8081/rest/Employee"
            }
        ]
    }
    

## $catalog/$all

Retourne des informations sur toutes les dataclasse de votre projet et leurs attributs

### Description

En appelant `$catalog/$all`, vous pouvez recevoir des informations détaillées sur les attributs de chacune des classes du datastore du modèle courant de votre projet. A noter que la portée des classes du datastore et de leurs attributs doit être **publique** pour que toutes les informations soient retournées.

Pour plus d'informations sur ce qui est retourné pour chaque classe du datastore et ses attributs, utilisez [`$catalog/{dataClass}`](#catalogdataClass).

### Exemple

`GET  /rest/$catalog/$all`

**Résultat** :

    {
    
        "dataClasses": [
            {
                "name": "Company",
                "className": "Company",
                "collectionName": "CompanyCollection",
                "scope": "public",
                "dataURI": "/rest/Company",
                "attributes": [
                    {
                        "name": "ID",
                        "kind": "storage",
                        "scope": "public",
                        "indexed": true,
                        "type": "long",
                        "identifying": true
                    },
                    {
                        "name": "name",
                        "kind": "storage",
                        "scope": "public",
                        "type": "string"
                    },
                    {
                        "name": "revenues",
                        "kind": "storage",
                        "scope": "public",
                        "type": "number"
                    },
                    {
                        "name": "staff",
                        "kind": "relatedEntities",
                        "matchColumn": "employees,staff",
                        "scope": "public",
                        "type": "EmployeeCollection",
                        "reversePath": true,
                        "path": "employer"
                    },
                    {
                        "name": "url",
                        "kind": "storage",
                        "scope": "public",
                        "type": "string"
                    }
                ],
                "key": [
                    {
                        "name": "ID"
                    }
                ]
            },
            {
                "name": "Employee",
                "className": "Employee",
                "collectionName": "EmployeeCollection",
                "scope": "public",
                "dataURI": "/rest/Employee",
                "attributes": [
                    {
                        "name": "ID",
                        "kind": "storage",
                        "scope": "public",
                        "indexed": true,
                        "type": "long",
                        "identifying": true
                    },
                    {
                        "name": "firstname",
                        "kind": "storage",
                        "scope": "public",
                        "type": "string"
                    },
                    {
                        "name": "lastname",
                        "kind": "storage",
                        "scope": "public",
                        "type": "string"
                    },
                    {
                        "name": "employer",
                        "kind": "relatedEntity",
                        "scope": "public",
                        "type": "Company",
                        "path": "Company"
                    }
                ],
                "key": [
                    {
                        "name": "ID"
                    }
                ]
            }
        ]
    }
    

## $catalog/{dataClass}

Retourne des informations sur une dataclass et ses attributs

### Description

L'appel de `$catalog/{dataClass}` pour une dataclass spécifique retournera les informations suivantes sur la dataclass et les attributs qu'elle contient. Si vous souhaitez récupérer ces informations pour toutes les classes de datastore dans le datastore de votre projet, utilisez [`$catalog/$all`](#catalogall).

Les informations que vous récupérez concernent :

* Dataclass
* Attribut(s)
* Méthode(s) le cas échéant
* Clé primaire

### DataClass

Les propriétés suivantes sont retournées pour une dataclass exposée :

| Propriété      | Type   | Description                                                                                                      |
| -------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| name           | Chaine | Nom de la dataclass                                                                                              |
| collectionName | Chaine | Nom de la collection de la dataclass                                                                             |
| scope          | Chaine | Étendue de la dataclass (à noter que seules les classes du datastore dont l'étendue est publique sont affichées) |
| dataURI        | Chaine | Un URI aux données de la dataclass                                                                               |


### Attribut(s)

Voici les propriétés de chaque attribut exposé qui sont retournées :

| Propriété     | Type      | Description                                                                                                                                                                      |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | Chaine    | Le nom de l’attribut.                                                                                                                                                            |
| kind          | Chaine    | Le type d'attribut (stockage, calculé, relatedEntity et alias).                                                                                                                  |
| scope         | Chaine    | Portée de l'attribut (seuls les attributs dont la portée est publique apparaîtront).                                                                                             |
| indexed       | Chaine    | Si un **type d'index** a été sélectionné, cette propriété retournera true. Sinon, cette propriété n'apparaîtra pas.                                                              |
| type          | Chaine    | Type d'attribut de chaîne (booléen, blob, octet, date, durée, image, long, long64, numérique, chaîne, uuid ou mot) ou la classe de datastore pour un attribut de relation N-> 1. |
| minLength     | Numérique | Cette propriété renvoie la valeur saisie pour la propriété **MinLength**, si elle a été saisie.                                                                                  |
| maxLength     | Numérique | Cette propriété renvoie la valeur saisie pour la propriété **MaxLength**, si elle a été saisie.                                                                                  |
| autoComplete  | Booléen   | Cette propriété renvoie True si la propriété **Autocomplete** a été vérifiée. Sinon, cette propriété n'apparaîtra pas.                                                           |
| identifying   | Booléen   | Cette propriété renvoie True si la propriété **Identifying** a été vérifiée. Sinon, cette propriété n'apparaîtra pas.                                                            |
| multiLine     | Booléen   | Cette propriété renvoie True si la propriété **Multiline** a été vérifiée. Sinon, cette propriété n'apparaîtra pas.                                                              |
| path          | Chaine    | Pour un attribut d'alias, le type est un chemin (par exemple, employer.name)                                                                                                     |
| readOnly      | Booléen   | Cette propriété est mise à True si l'attribut est de type calculé ou alias.                                                                                                      |
| defaultFormat | Objet     | Si vous définissez un format pour l'attribut dans la propriété **defaultFormat**, il apparaîtra dans la propriété "format".                                                      |


### Méthode(s)

Définit les méthodes projet associées à la dataclass, le cas échéant.

### Clé primaire

L'objet clé retourne le nom de l'attribut (**name**) défini comme **clé primaire** pour la classe du datastore.

### Exemple

Vous pouvez récupérer les informations concernant une classe de datastore spécifique.

`GET  /rest/$catalog/Employee`

**Résultat** :

    {
        name: "Employee",
        className: "Employee",
        collectionName: "EmployeeCollection",
        scope: "public",
        dataURI: "http://127.0.0.1:8081/rest/Employee",
        defaultTopSize: 20,
        extraProperties: {
            panelColor: "#76923C",
            __CDATA: "\n\n\t\t\n",
            panel: {
                isOpen: "true",
                pathVisible: "true",
                __CDATA: "\n\n\t\t\t\n",
                position: {
                    X: "394",
                    Y: "42"
                }
            }
        },
        attributes: [
            {
                name: "ID",
                kind: "storage",
                scope: "public",
                indexed: true,
                type: "long",
                identifying: true
            },
            {
                name: "firstName",
                kind: "storage",
                scope: "public",
                type: "string"
            },
            {
                name: "lastName",
                kind: "storage",
                scope: "public",
                type: "string"
            },
            {
                name: "fullName",
                kind: "calculated",
                scope: "public",
                type: "string",
                readOnly: true
            },
            {
                name: "salary",
                kind: "storage",
                scope: "public",
                type: "number",
                defaultFormat: {
                    format: "$###,###.00"
                }
            },
            {
                name: "photo",
                kind: "storage",
                scope: "public",
                type: "image"
            },
            {
                name: "employer",
                kind: "relatedEntity",
                scope: "public",
                type: "Company",
                path: "Company"
            },
            {
                name: "employerName",
                kind: "alias",
                scope: "public",
                type: "string",
                path: "employer.name",
                readOnly: true
            },
            {
                name: "description",
                kind: "storage",
                scope: "public",
                type: "string",
                multiLine: true
            },
       ],
        key: [
            {
                name: "ID"
            }
        ]
    }