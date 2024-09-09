---
id: clean
title: $clean
---

Crée un nouvel entity set à partir d'un entity set existant mais sans ses entités supprimées, le cas échéant (*par exemple* `$clean=true`)

## Description

`$clean` crée un nouvel entity set contenant les mêmes entités que `entitySetID`, mais sans les références aux entités supprimées (le cas échéant).

Par défaut, lorsqu'une entité est [supprimée]($method.md#methoddelete), sa ou ses référence(s) dans les entity sets existants deviennent *undefined* mais ne sont pas supprimée(s). Elles sont également toujours incluses dans la propriété "count" de l'entity set. Appeler `$clean` sur l'entity set renvoie un nouvel entity set à jour, sans références d'entités *undefined*.

`$clean` peut être suivi de [`$method=entityset`]($method.md#methodentityset) pour créer le nouvel entity set sur le serveur:

`/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$clean=true&$method=entityset`

## Exemple

1. Nous créons un entity set :

`GET /rest/Speciality?$filter="ID<=3"&$method=entityset`

Trois entités sont reçues et nous obtenons l'entity set `DF6903FB5879404A9A818884CFC6F62A`

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

2. Nous supprimons l'entité de `KEY=2` (voir [comment supprimer une entité]($method.md#methoddelete)), puis cette requête est envoyée :

`GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A`

L'entity set est renvoyé et contient toujours 3 entités. Il y a une entité undefined pour l'entité supprimée (avec stamp = 0) :

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

3. Si cette requête est exécutée :

`GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A?$clean=true&$method=entityset`

Nous nettoyons l'entity set DF6903FB5879404A9A818884CFC6F62A et recevons un nouvel entity set (entity set D7BFBC49375B4FE5A94CDD17AA535F73) qui ne contient pas l'entité supprimée :

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
