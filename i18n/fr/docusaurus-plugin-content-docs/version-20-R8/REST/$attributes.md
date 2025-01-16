---
id: attributes
title: $attributes
---

Permet de sélectionner les attributs relationnels à obtenir à partir de la dataclass (par exemple, `Company(1)?$attributes=employees.lastname` ou `Employee?$attributes=employer.name`).

## Description

Lorsque vous avez des attributs relationnels dans une dataclass, utilisez `$attributes` pour définir le chemin des attributs dont vous souhaitez obtenir les valeurs pour l'entité ou les entités associées.

Vous pouvez appliquer des `$attributes` à une entité (par exemple, People (1)) ou à une entity selection (par exemple, People/$entityset/0AF4679A5C394746BFEB68D2162A19FF).

- Si `$attributes` n'est pas spécifié dans une requête, ou si la valeur "\*" est passée, tous les attributs disponibles sont extraits. Les attributs de type **related entity** sont extraits avec la forme simple : un objet avec la propriété `__KEY` (clé primaire) et `URI`. Les attributs de type **related entities** ne sont pas extraits.

- Si `$attributes` est spécifié pour les attributs **related entity** :
  - `$attributes=relatedEntity` : l'entité liée est retournée sous une forme simple (propriété __KEY différée (clé primaire)) et `URI`.
  - `$attributes=relatedEntity.*` : tous les attributs de l'entité liée sont retournés
  - `$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ...` : seuls ces attributs de l'entité liée sont retournés.

- Si `$attributes` est spécifié pour les attributs **related entities** :
  - `$attributes=relatedEntities.*` : toutes les propriétés des entités liées sont retournées

  - `$attributes=relatedEntities.attributePath1, relatedEntity.attributePath2, ...` : seuls ces attributs des entités liées sont retournés.

## Exemple avec plusieurs entités liées

Si nous exécutons la requête REST suivante pour la dataclass Company (qui possède un attribut relatif "employees"):

`GET  /rest/Company(1)/?$attributes=employees.lastname`

**Réponse** :

```
{
    "__entityModel": "Company",
    "__KEY": "1",  
    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",
    "__STAMP": 2,
    "employees": {
		"__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",
		"__GlobalStamp": 50,
		"__COUNT": 135,
		"__FIRST": 0,
		"__ENTITIES": [
			{
				"__KEY": "1",
				"__TIMESTAMP": "2019-12-01T20:18:26.046Z",
				"__STAMP": 5,
				"lastname": "ESSEAL"
			},
			{
				"__KEY": "2",
				"__TIMESTAMP": "2019-12-04T10:58:42.542Z",
				"__STAMP": 6,
				"lastname": "JONES"
			},
			...
    }
}
```

Si vous souhaitez obtenir tous les attributs des employés :

`GET  /rest/Company(1)/?$attributes=employees.*`

Si vous souhaitez obtenir le nom de famille et les attributs de nom de poste des employés :

`GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname`

## Exemple avec une entité liée

Si nous passons la requête REST suivante pour la dataclass Employee (qui a plusieurs attributs relationnels, y compris "employer") :

`GET  /rest/Employee(1)?$attributes=employer.name`

**Réponse** :

```
{
	"__entityModel": "Employee",
	"__KEY": "1",
	"__TIMESTAMP": "2019-12-01T20:18:26.046Z",
	"__STAMP": 5,
	"employer": {
		"__KEY": "1",
		"__TIMESTAMP": "2018-04-25T14:41:16.237Z",
		"__STAMP": 0,
		"name": "Adobe"
	}
}
```

Si vous souhaitez obtenir tous les attributs de l'employeur :

`GET  /rest/Employee(1)?$attributes=employer.*`

Si vous souhaitez obtenir les noms de famille de tous les employés de l'employeur :

`GET  /rest/Employee(1)?$attributes=employer.employees.lastname`
