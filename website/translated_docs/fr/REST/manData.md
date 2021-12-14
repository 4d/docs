---
id: manData
title: Manipulation des données
---

Tous [les attributs, dataclasses exposés](configuration.md#exposing-tables-and-fields) et toutes les [fonctions](ClassFunctions.md) sont accessibles via REST. Les noms de dataclass, d'attributs et de fonctions sont sensibles à la casse; contrairement aux données des requêtes.

## Rechercher des données

Pour rechercher directement des données, vous pouvez utiliser la fonction [`$filter`]($filter.md). Par exemple, pour trouver une personne nommée "Smith", vous pouvez écrire :

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`




## Adding, modifying, and deleting entities

Avec l'API REST, vous pouvez effectuer toutes les manipulations de données souhaitées dans 4D.

Pour ajouter et modifier des entités, vous pouvez appeler [`$method=update`]($method.md#methodupdate). Si vous souhaitez supprimer une ou plusieurs entités, vous pouvez utiliser [`$method=delete`]($method.md#methoddelete).

Outre la récupération d'un attribut dans une dataclass à l'aide de [{dataClass}({key})](%7BdataClass%7D_%7Bkey%7D.html), vous pouvez également écrire une [class function](ClassFunctions.md#function-calls) qui retourne une entity selection (ou une collection).

Avant de retourner la sélection, vous pouvez également la trier en utilisant [`$orderby`]($orderby.md) un ou plusieurs attributs (même les attributs de relation).


## Navigating data

Ajoutez le [`$skip`]($skip.md) (pour définir avec quelle entité commencer) et [`$top/$limit`]($top_$limit.md) (pour définir le nombre d'entités à retourner) des requêtes REST à vos requêtes ou entity selections pour parcourir la collection d'entités.



## Creating and managing entity set

Un ensemble d'entités (également appelé *entity set* ou <0>entity selection</0>) est une collection d'entités obtenue via une requête REST stockée dans le cache de 4D Server. L'utilisation d'un entity set vous empêche de lancer continuellement des requêtes à votre application pour obtenir les mêmes résultats. L'accès à un entity set est beaucoup plus rapide et peut améliorer la vitesse de votre application.

Pour créer un entity set, appelez [`$method=entityset`]($method.md#methodentityset) dans votre requête REST. Par mesure de sécurité, vous pouvez également utiliser [`$savedfilter`]($savedfilter.md) et/ou [`$savedorderby`]($savedorderby.md) lorsque vous appelez [`$filter`]($filter.md) et/ou [`$orderby`]($orderby.md) afin que l'entité définie puisse être rapidement récupérée avec le même ID que précédemment, dans le cas où elle expireait ou serait supprimée du serveur.

Pour accéder à l'entity set, vous devez utiliser `$entityset/{entitySetID}`, par exemple :

`/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`


Par défaut, un entity set est stocké pendant deux heures; cependant, vous pouvez modifier le timeout en passant une nouvelle valeur à [`$timeout`]($timeout.md). Le timeout est continuellement réinitialisé à la valeur définie (soit par défaut soit à celle que vous définissez) chaque fois que vous l'utilisez.

Si vous souhaitez supprimer un entity set du cache de 4D Server, vous pouvez utiliser [`$method=release`]($method.md#methodrelease).

Si vous modifiez l'un des attributs de l'entité dans l'entity set, les valeurs seront mises à jour. Toutefois, si vous modifiez une valeur qui faisait partie de la requête exécutée pour créer l'entity set, elle ne sera pas supprimée de l'entity set même si elle ne correspond plus aux critères de recherche. Bien entendu, les entités que vous supprimez ne feront plus partie de l'entity set.

Si l'ensemble d'entités ne se trouve plus dans le cache de 4D Server, il sera recréé avec un nouveau timeout de 10 minutes. L'ensemble d'entités sera actualisé (certaines entités peuvent être incluses tandis que d'autres peuvent être supprimées) depuis la dernière fois qu'il a été créé, s'il n'existait plus avant de le recréer.

Using [`$entityset/{entitySetID}?$logicOperator... &$otherCollection`]($entityset.md#entitysetentitysetidoperatorothercollection), you can combine two entity sets that you previously created. Vous pouvez combiner les résultats dans les deux, retourner uniquement ce qui est commun aux deux, ou renvoyer ce qui n'est pas commun aux deux.

Une nouvelle sélection d'entités est renvoyée; vous pouvez néanmoins créer un nouvel ensemble d'entités en appelant [`$method=entityset`]($method.md#methodentityset) à la fin de la requête REST.



## Calculating data

En utilisant [`$compute`]($compute.md), vous pouvez calculer la **moyenne**, le **nombre**, le **min**, le **max** ou la **somme** pour un attribut spécifique d'une dataclass. Vous pouvez également calculer toutes les valeurs avec le mot clé $all.

Par exemple, pour obtenir le salaire le plus élevé :

`/rest/Employee/salary/?$compute=max`

Pour calculer toutes les valeurs et retourner un objet JSON :

`/rest/Employee/salary/?$compute=$all`


## Appeler les fonctions de classe du modèle de données

Vous pouvez appeler des [fonctions de classe utilisateurs](ClassFunctions.md) ORDA du modèle de données via des requêtes POST, afin de pouvoir bénéficier de l'API de l'application ciblée. Par exemple, si vous avez défini une fonction `getCity()` dans la dataclass City, vous pouvez l'appeler à l'aide de la requête suivante :

`/rest/City/getCity`

avec des données contenues dans le corps de la requête : `["Paris"]`


> Les appels aux méthodes projet 4D exposées en tant que service REST sont toujours pris en charge mais sont obsolètes.


## Selecting Attributes to get

Vous pouvez toujours définir les attributs à retourner dans la réponse REST après une requête initiale en passant leur chemin d'accès dans la requête (par exemple, `Company(1)/name,revenues/`)

Vous pouvez appliquer ce filtre comme suit :

| Object               | Syntaxe                                             | Exemple                                                       |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------- |
| Dataclass            | {dataClass}/{att1,att2...}                          | /People/firstName,lastName                                    |
| Collection d'entités | {dataClass}/{att1,att2...}/?$filter="{filter}"      | /People/firstName,lastName/?$filter="lastName='a@'"           |
| Entité spécifique    | {dataClass}({ID})/{att1,att2...}                    | /People(1)/firstName,lastName                                 |
|                      | {dataClass}:{attribute}(value)/{att1,att2...}/      | /People:firstName(Larry)/firstName,lastName/                  |
| Entity selection     | {dataClass}/{att1,att2...}/$entityset/{entitySetID} | /People/firstName/$entityset/528BF90F10894915A4290158B4281E61 |

Les attributs doivent être délimités par une virgule, c'est-à-dire `/Employee/firstName,lastName,salary`. Des attributs de stockage ou des attributs relationnels peuvent être transmis.


### Exemples
Voici quelques exemples vous permettant d'indiquer les attributs à retourner en fonction de la méthode employée pour récupérer les entités.

Vous pouvez appliquer cette méthode à :

- Dataclass (tout ou une collection d'entités dans une dataclass)
- Entités spécifiques
- Entity sets

#### Exemple avec une dataclass

Les requêtes suivantes retournent uniquement le prénom et le nom de la dataclass People (soit la dataclass entière, soit une sélection d'entités basée sur la recherche définie dans `$filter`).

 `GET  /rest/People/firstName,lastName/`


**Résultat** :

````
{
    __entityModel: "People",
    __COUNT: 4,
    __SENT: 4,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 1,
            firstName: "John",
            lastName: "Smith"
        },
        {
            __KEY: "2",
            __STAMP: 2,
            firstName: "Susan",
            lastName: "O'Leary"
        },
        {
            __KEY: "3",
            __STAMP: 2,
            firstName: "Pete",
            lastName: "Marley"
        },
        {
            __KEY: "4",
            __STAMP: 1,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
````


`GET  /rest/People/firstName,lastName/?$filter="lastName='A@'"/`

**Résultat** :

````
{
    __entityModel: "People",
    __COUNT: 1,
    __SENT: 1,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "4",
            __STAMP: 4,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
````


#### Exemple d'entité

La requête suivante retourne uniquement les attributs de prénom et nom à partir d'une entité spécifique de la dataclass People :

 `GET  /rest/People(3)/firstName,lastName/`

**Résultat** :

````
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Marley"
}
````


 `GET  /rest/People(3)/`

**Résultat** :

````
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    ID: 3,
    firstName: "Pete",
    lastName: "Marley",
    salary: 30000,
    employer: {
        __deferred: {
            uri: "http://127.0.0.1:8081/rest/Company(3)",
            __KEY: "3"
        }
    },
    fullName: "Pete Marley",
    employerName: "microsoft"

}
````

#### Exemple d'ensemble d'entités

Once you have [created an entity set](#creating-and-managing-entity-set), you can filter the information in it by defining which attributes to return:

 `GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer`


## Affichage d'un attribut d'image

Si vous souhaitez afficher intégralement un attribut d'image, saisissez ce qui suit :

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

Pour plus d'informations sur les formats d'image, reportez-vous à [`$imageformat`]($imageformat.md). Pour plus d'informations sur le paramètre de version, reportez-vous à [`$version`]($version.md).

## Enregistrement d'un attribut BLOB sur le disque

Si vous souhaitez enregistrer un BLOB stocké dans votre dataclass, vous pouvez écrire ce qui suit :

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`


## Récupérer une seule entité

Vous pouvez utiliser la syntaxe[`{dataClass}:{attribute}(value)`](%7BdataClass%7D.html#dataclassattributevalue) lorsque vous souhaitez récupérer une seule entité. C'est particulièrement utile lorsque vous souhaitez lancer une recherche associée qui n'est pas créée sur la clé primaire de la dataclass. Par exemple, vous pouvez écrire :

 `GET  /rest/Company:companyCode("Acme001")`
 
 
