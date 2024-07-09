---
id: asArray
title: $asArray
---

Devuelve el resultado de una petición en un array (es decir, una colección) en lugar de un objeto JSON.

## Descripción

Si desea obtener la respuesta en un array, sólo tiene que añadir `$asArray` a su petición REST (_e.g._, `$asArray=true`).

## Ejemplo

Aquí hay un ejemplo de cómo recibir la respuesta en un array.

`GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true`

**Response**:

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

Los mismos datos en su formato JSON por defecto:

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
