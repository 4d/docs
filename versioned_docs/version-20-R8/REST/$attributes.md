---
id: attributes
title: $attributes 
---

Allows selecting the related attribute(s) to get from the dataclass (*e.g.*, `Company(1)?$attributes=employees.lastname` or `Employee?$attributes=employer.name`).


## Description   

When you have relation attributes in a dataclass, use `$attributes` to define the path of attributes whose values you want to get for the related entity or entities.

You can apply `$attributes` to an entity (*e.g.*, People(1)) or an entity selection (*e.g.*, People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) .


- If `$attributes` is not specified in a query, or if the "*" value is passed, all available attributes are extracted. **Related entity** attributes are extracted with the simple form: an object with property `__KEY` (primary key) and `URI`. **Related entities** attributes are not extracted.

- If `$attributes` is specified for **related entity** attributes:
	- `$attributes=relatedEntity`: the related entity is returned with simple form (deferred __KEY property (primary key)) and `URI`.
	- `$attributes=relatedEntity.*`: all the attributes of the related entity are returned
	- `$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ...`: only those attributes of the related entity are returned.


- If `$attributes` is specified for **related entities** attributes:
	- `$attributes=relatedEntities.*`: all the properties of all the related entities are returned
	- `$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ...`: only those attributes of the related entities are returned.

  
  
## Example with related entities

If we pass the following REST request for our Company dataclass (which has a relation attribute "employees"):

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

If you want to get all attributes from employees:

 `GET  /rest/Company(1)/?$attributes=employees.*`

If you want to get last name and job name attributes from employees:

 `GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname`
 

## Example with related entity

If we pass the following REST request for our Employee dataclass (which has several relation attributes, including "employer"):


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

If you want to get all attributes of the employer:

 `GET  /rest/Employee(1)?$attributes=employer.*`

If you want to get the last names of all employees of the employer:

 `GET  /rest/Employee(1)?$attributes=employer.employees.lastname`