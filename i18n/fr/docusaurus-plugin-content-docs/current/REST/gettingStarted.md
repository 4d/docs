---
id: gettingStarted
title: Prise en main
---

4D vous fournit un serveur REST puissant, qui permet d'accéder directement aux données stockées dans vos applications 4D.

The REST server is included in 4D and 4D Server, it is automatically available in your 4D applications [once it is configured](configuration.md).

Cette section est destinée à vous familiariser avec la fonctionnalité REST à l'aide d'un exemple simple. Nous allons :

- créer et configurer un projet d'application 4D basique
- accéder aux données du projet 4D via REST à l'aide d'un navigateur standard.

Pour simplifier l'exemple, nous allons utiliser 4D et un navigateur qui s'exécutent sur la même machine. Bien entendu, vous pouvez également utiliser une architecture distante.

## Créer et configurer le projet 4D

1. Lancez votre application 4D ou 4D Server et créez un nouveau projet. Vous pouvez, par exemple, le nommer "Emp4D".

2. Dans l'éditeur de structure, créez une table [Employees] et ajoutez-y les champs suivants :
   - Lastname (Alpha)
   - Firstname (Alpha)
   - Salary (Longint)

![](../assets/en/REST/getstarted1.png)

> L'option "Exposer une ressource REST" est cochée par défaut pour la table et pour chaque champ ; ne modifiez pas ce paramètre.

3. Créez des formulaires, puis créez quelques employés :

![](../assets/en/REST/getstarted2.png)

4. Open the **Web > Web Features** page of the Settings dialog box and [check the Expose as REST server](configuration.md#starting-the-rest-server) option.

5. In the **Run** menu, select **Start Web Server** (if necessary), then select **Test Web Server**.

4D affiche la page d'accueil par défaut du serveur Web 4D.

## Accéder aux données 4D avec le navigateur

Vous pouvez désormais lire et modifier des données dans 4D uniquement via les requêtes REST.

Any 4D REST URL request starts with `/rest`, to be inserted after the `address:port` area. Par exemple, pour voir le contenu du datastore 4D, vous pouvez écrire :

```
http://127.0.0.1/rest/$catalog
```

Le serveur REST répond :

```
{
	"__UNIQID": "96A49F7EF2ABDE44BF32059D9ABC65C1",
	"dataClasses": [
		{
			"name": "Employees",
			"uri": "/rest/$catalog/Employees",
			"dataURI": "/rest/Employees"
		}
	]
}
```

Cela signifie que le datastore contient le dataclass Employees. Vous pouvez voir les attributs de la dataclass en tapant :

```
/rest/$catalog/Employees
```

Si vous souhaitez obtenir toutes les entités de la dataclass Employee, vous pouvez écrire :

```
/rest/Employees
```

**Response:**

```
{
	"__entityModel": "Employees",
	"__GlobalStamp": 0,
	"__COUNT": 3,
	"__FIRST": 0,
	"__ENTITIES": [
		{
			"__KEY": "1",
			"__TIMESTAMP": "2020-01-07T17:07:52.467Z",
			"__STAMP": 2,
			"ID": 1,
			"Lastname": "Brown",
			"Firstname": "Michael",
			"Salary": 25000
		},
		{
			"__KEY": "2",
			"__TIMESTAMP": "2020-01-07T17:08:14.387Z",
			"__STAMP": 2,
			"ID": 2,
			"Lastname": "Jones",
			"Firstname": "Maryanne",
			"Salary": 35000
		},
		{
			"__KEY": "3",
			"__TIMESTAMP": "2020-01-07T17:08:34.844Z",
			"__STAMP": 2,
			"ID": 3,
			"Lastname": "Smithers",
			"Firstname": "Jack",
			"Salary": 41000
		}
	],
	"__SENT": 3
}
```

Il existe plusieurs possibilités pour filtrer les données à recevoir. Par exemple, pour obtenir uniquement la valeur de l'attribut "Lastname" de la 2ème entité, vous pouvez simplement écrire :

```
/rest/Employees(2)/Lastname
```

**Response:**

```
{
	"__entityModel": "Employees",
	"__KEY": "2",
	"__TIMESTAMP": "2020-01-07T17:08:14.387Z",
	"__STAMP": 2,
	"Lastname": "Jones"
}
```

The 4D [REST API](REST_requests.md) provides various commands to interact with the 4D applications.
