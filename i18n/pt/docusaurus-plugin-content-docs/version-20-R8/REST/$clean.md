---
id: clean
title: $clean
---

Cria um conjunto de entidades a partir de um conjunto de entidades existente, mas sem suas entidades excluídas, se houver (*e.g.* `$clean=true`)

## Descrição

`$clean` creates a new entity set containing the same entities as `entitySetID` but without references to deleted entities (if any).

Por padrão, quando uma entidade é [excluída]($method.md#methoddelete), sua(s) referência(s) no(s) conjunto(s) de entidade(s) existente(s) se torna(m) *undefined*, mas não é(são) removida(s). They are also still included in the "count" property of the entity set. Chamar `$clean` no conjunto de entidades retorna um novo conjunto de entidades atualizado, sem referências de entidades *undefined*.

`$clean` pode ser seguido por [`$method=entityset`]($method.md#methodentityset) para criar a nova entidade definida no servidor:

`/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$clean=true&$method=entityset`

## Exemplo

1. Criamos um conjunto de entidades:

`GET /rest/Speciality?$filter="ID<=3"&$method=entityset`

Três entidades são recebidas e obtemos o conjunto de entidades `DF6903FB5879404A9A818884CFC6F62A`

```json
{
  "__ENTITYSET": "/rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A",
  "__DATACLASS": "Speciality",
  "__entityModel": "Speciality",
  "__GlobalStamp": 0,
  "__COUNT": 3,
  "__FIRST": 0,
  "__ENTITIES": [
    {
      "__KEY": "1",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 1,
      "name": "Surgery",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[1]/infos?$expand=infos"
        }
      }
    },
    {
      "__KEY": "2",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 2,
      "name": "Otolaryngology",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[2]/infos?$expand=infos"
        }
      }
    },
    {
      "__KEY": "3",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 3,
      "name": "Dentist",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[3]/infos?$expand=infos"
        }
      }
    },
  ],
  "__SENT": 3
}
```

2. Excluímos a entidade de `KEY=2` (consulte [how to delete an entity]($method.md#methoddelete)) e, em seguida, essa solicitação é enviada:

`GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A`

O conjunto de entidades é retornado e ainda contém 3 entidades. There is an undefined entity for the deleted entity (with stamp = 0):

```json
{
  "__DATACLASS": "Speciality",
  "__entityModel": "Speciality",
  "__GlobalStamp": 0,
  "__COUNT": 3,
  "__FIRST": 0,
  "__ENTITIES": [
    {
      "__KEY": "1",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 1,
      "name": "Surgery",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[1]/infos?$expand=infos"
        }
      }
    },
    {
      "__STAMP": 0
    },
    {
      "__KEY": "3",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 3,
      "name": "Dentist",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[3]/infos?$expand=infos"
        }
      }
    },
  ],
  "__SENT": 3
}
```

3. Se essa solicitação for enviada:

`GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A?$clean=true&$method=entityset`

We clean the entity set DF6903FB5879404A9A818884CFC6F62A and receive a new entity set (entity set D7BFBC49375B4FE5A94CDD17AA535F73) that does not contain the dropped entity:

```json
{
  "__ENTITYSET": "/rest/Speciality/$entityset/D7BFBC49375B4FE5A94CDD17AA535F73",
  "__DATACLASS": "Speciality",
  "__entityModel": "Speciality",
  "__GlobalStamp": 0,
  "__COUNT": 2,
  "__FIRST": 0,
  "__ENTITIES": [
    {
      "__KEY": "1",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 1,
      "name": "Surgery",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[1]/infos?$expand=infos"
        }
      }
    },
    {
      "__KEY": "3",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 3,
      "name": "Dentist",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[3]/infos?$expand=infos"
        }
      }
    }
  ],
  "__SENT": 2
}
```
