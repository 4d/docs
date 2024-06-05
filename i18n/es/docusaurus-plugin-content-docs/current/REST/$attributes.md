---
id: attributes
title: $attributes
---

Permite seleccionar los atributos relacionales a obtener de la dataclass (_por ejemplo_, `Company(1)?$attributes=employees.lastname` o `Employee?$attributes=employer.name`).

## Descripción

Cuando tenga atributos relacionales en una dataclass, utilice `$attributes` para definir la ruta de los atributos cuyos valores desea obtener para la entidad o entidades relacionadas.

Puede aplicar `$attributes` a una entidad (_p. Ej._, People(1)) o una entity selection (_p. Ej._, People/$entityset/0AF4679A5C394746BFEB68D2162A19FF).

- Si `$attributes` no se especifica en una consulta, o si se pasa el valor "\*", se extraen todos los atributos disponibles. Los atributos \*\*de entidad relacionada \*\* se extraen con la forma simple: un objeto con la propiedad `__KEY` (llave primaria) y `URI`. Los atributos de las **entidades relacionadas** no se extraen.

- Si se especifica `$attributes` para los atributos **de entidad relacionada**:
  - `$attributes=relatedEntity`: se devuelve la entidad relacionada con forma simple (propiedad __KEY diferida (llave primaria)) y `URI`.
  - `$attributes=relatedEntity.*`: se devuelven todos los atributos de la entidad relacionada
  - `$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ...`: sólo se devuelven los atributos de la entidad relacionada.

- Si se especifica `$attributes` para los atributos **de entidades relacionadas**:
  - `$attributes=relatedEntities.*`: se devuelven todas las propiedades de todas las entidades relacionadas

  - `$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ...`: sólo se devuelven los atributos de las entidades relacionadas.

## Ejemplo con varias entidades relacionadas

Si pasamos la petición REST siguiente para nuestra clase de datos Company (que tiene un atributo de relación "empleados"):

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

Si desea obtener todos los atributos de los empleados:

`GET  /rest/Company(1)/?$attributes=employees.*`

Si quiere obtener el apellido y los atributos de nombre del trabajo de los empleados:

`GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname`

## Ejemplo con una entidad relacionada

Si pasamos la petición REST siguiente para nuestra clase de datos Employee (que tiene varios atributos relacionales, incluyendo "employer"):

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

Si desea obtener todos los atributos del empleador:

`GET  /rest/Employee(1)?$attributes=employer.*`

Si desea obtener los apellidos de todos los empleados de la empresa:

`GET  /rest/Employee(1)?$attributes=employer.employees.lastname`
