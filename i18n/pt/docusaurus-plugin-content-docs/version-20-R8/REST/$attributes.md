---
id: attributes
title: $attributes
---

Allows selecting the attribute(s) to get from the dataclass (*e.g.*, `Company(1)?$attributes=name,city`, `Company(1)?$attributes=employees.lastname`, or `Employee?$attributes=employer.name`).

## Descrição

If you have relation attributes in a dataclass, use `$attributes` to define the path of attributes whose values you want to get for the related entity or entities.

Puede aplicar `$attributes` a una entidad (*p. Ej.*, People(1)) o una entity selection (*p. Ej.*, People/$entityset/0AF4679A5C394746BFEB68D2162A19FF).

- Si `$attributes` no se especifica en una consulta, o si se pasa el valor "\*", se extraen todos los atributos disponibles. Los atributos \*\*de entidad relacionada \*\* se extraen con la forma simple: un objeto con la propiedad `__KEY` (llave primaria) y `URI`. Los atributos de las **entidades relacionadas** no se extraen.

- Si se especifica `$attributes` para los atributos **de entidad relacionada**:
 - `$attributes=relatedEntity`: se devuelve la entidad relacionada con forma simple (propiedad __KEY diferida (llave primaria)) y `URI`.
 - `$attributes=relatedEntity.*`: se devuelven todos los atributos de la entidad relacionada
 - `$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ...`: sólo se devuelven los atributos de la entidad relacionada.

- Si se especifica `$attributes` para los atributos **de entidades relacionadas**:
 - `$attributes=relatedEntities.*`: se devuelven todas las propiedades de todas las entidades relacionadas
 - `$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ...`: sólo se devuelven los atributos de las entidades relacionadas.

- If `$attributes` is specified for **storage** attributes:
 - `$attributes=attribute1, attribute2, ...`: only those attributes of the entities are returned.

## Exemplo com entidades relacionadas

Se passarmos a petição REST seguinte para nossa classe de dados Company (que tem um atributo de relação "empregados"):

`GET  /rest/Company(1)/?$attributes=employees.lastname`

**Response**:

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

Se se pretender obter todos os atributos dos empregados:

`GET  /rest/Company(1)/?$attributes=employees.*`

Se pretender obter os atributos apelido e nome da profissão dos empregados:

`GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname`

## Exemplo com entidade relacionada

Se passarmos a petição REST seguinte para nossa classe de dados Employee (que tem vários atributos relacionais, incluindo "employer"):

`GET  /rest/Employee(1)?$attributes=employer.name`

**Response**:

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

Se quiser obter todos os atributos do empregador:

`GET  /rest/Employee(1)?$attributes=employer.*`

Se quiser obter os sobrenomes de todos os funcionários da empresa:

`GET  /rest/Employee(1)?$attributes=employer.employees.lastname`