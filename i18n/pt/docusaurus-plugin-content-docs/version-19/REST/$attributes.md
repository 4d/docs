---
id: attributes
title: '$attributes'
---

Allows selecting the attribute(s) to get from the dataclass (*e.g.*, `Company(1)?$attributes=name,city`, `Company(1)?$attributes=employees.lastname`, or `Employee?$attributes=employer.name`).


## Descrição

If you have relation attributes in a dataclass, use `$attributes` to define the path of attributes whose values you want to get for the related entity or entities.

É possível aplicar `$attributes` a uma entidade (*por exemplo*, People(1)) ou a uma seleção de entidades (*por exemplo*, People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) .


- Se `$attributes` não for especificado numa consulta, ou se for passado o valor "*", são extraídos todos os atributos disponíveis. **Os atributos da entidade relacionada** são extraídos de forma simples: um objeto com a propriedade `__KEY` (chave primária) e `URI`. Atributos de **Entidades relacionadas**  não são extraídos.

- Se `$attributes` for especificado para atributos de **entidade relacionada**:
    - `$attributes=relatedEntity`: a entidade relacionada é devolvida com um formulário simples (propriedade __KEY diferida (chave primária)) e `URI`.
    - `$attributes=relatedEntity.*`: todos os atributos da entidade relacionada são devolvidos
    - `$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ...`: só são devolvidos os atributos da entidade relacionada.


- Se `$attributes` for especificado para **entidades relacionadas** atributos:
    - `$attributes=relatedEntities.*`: todas as propriedades de todas as entidades relacionadas são devolvidas
    - `$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ...`: só são devolvidos os atributos das entidades relacionadas.


- If `$attributes` is specified for **storage** attributes:
    - `$attributes=attribute1, attribute2, ...`: only those attributes of the entities are returned.



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