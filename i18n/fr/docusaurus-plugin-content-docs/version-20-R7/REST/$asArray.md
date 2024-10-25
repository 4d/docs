---
id: asArray
title: $asArray
---

Retourne le résultat d'une requête sous forme de tableau (c'est-à-dire une collection) au lieu d'un objet JSON.

## Description

Si vous souhaitez obtenir la réponse sous forme de tableau, il vous suffit d'ajouter `$asArray` à votre requête REST (_ex :_, `$asArray=true`).

## Exemple

Voici un exemple pour obtenir une réponse sous forme de tableau.

`GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true`

**Réponse** :

```
[
	{
		"__KEY": 15,
		"__STAMP": 0,
		"ID": 15,
		"name": "Alpha North Yellow",
		"creationDate": "!!0000-00-00!!",
		"revenues": 82000000,
		"extra": null,
		"comments": "",
		"__GlobalStamp": 0
	},
	{
		"__KEY": 34,
		"__STAMP": 0,
		"ID": 34,
		"name": "Astral Partner November",
		"creationDate": "!!0000-00-00!!",
		"revenues": 90000000,
		"extra": null,
		"comments": "",
		"__GlobalStamp": 0
	},
	{
		"__KEY": 47,
		"__STAMP": 0,
		"ID": 47,
		"name": "Audio Production Uniform",
		"creationDate": "!!0000-00-00!!",
		"revenues": 28000000,
		"extra": null,
		"comments": "",
		"__GlobalStamp": 0
	}
]
```

Les mêmes données au format JSON par défaut :

```
{
	"__entityModel": "Company",
	"__GlobalStamp": 50,
	"__COUNT": 52,
	"__FIRST": 0,
	"__ENTITIES": [
		{
			"__KEY": "15",
			"__TIMESTAMP": "2018-03-28T14:38:07.434Z",
			"__STAMP": 0,
			"ID": 15,
			"name": "Alpha North Yellow",
			"creationDate": "0!0!0",
			"revenues": 82000000,
			"extra": null,
			"comments": "",
			"__GlobalStamp": 0,
			"employees": {
				"__deferred": {
					"uri": "/rest/Company(15)/employees?$expand=employees"
				}
			}
		},
		{
			"__KEY": "34",
			"__TIMESTAMP": "2018-03-28T14:38:07.439Z",
			"__STAMP": 0,
			"ID": 34,
			"name": "Astral Partner November",
			"creationDate": "0!0!0",
			"revenues": 90000000,
			"extra": null,
			"comments": "",
			"__GlobalStamp": 0,
			"employees": {
				"__deferred": {
					"uri": "/rest/Company(34)/employees?$expand=employees"
				}
			}
		},
		{
			"__KEY": "47",
			"__TIMESTAMP": "2018-03-28T14:38:07.443Z",
			"__STAMP": 0,
			"ID": 47,
			"name": "Audio Production Uniform",
			"creationDate": "0!0!0",
			"revenues": 28000000,
			"extra": null,
			"comments": "",
			"__GlobalStamp": 0,
			"employees": {
				"__deferred": {
					"uri": "/rest/Company(47)/employees?$expand=employees"
				}
			}
		}
	],
"__SENT": 3
}
```
