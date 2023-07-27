---
id: attributes
title: '$attributes'
---

Allows selecting the related attribute(s) to get from the dataclass (*e.g.*, `Company(1)?$attributes=employees.lastname` or `Employee?$attributes=employer.name`).


## Descrição

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



## Exemplo com entidades relacionadas

Se passarmos a petição REST seguinte para nossa classe de dados Company (que tem um atributo de relação "empregados"):

 `GET  /rest/Company(1)/?$attributes=employees.lastname`

**Resposta**:

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

**Resposta**:

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