---
id: clean
title: $clean
---

Crea un nuevo conjunto de entidades a partir de un conjunto de entidades existente pero sin sus entidades eliminadas, si las hubiera (*por ejemplo* `$clean=true`)

## Descripción

`$clean` crea un nuevo conjunto de entidades que contiene las mismas entidades que `entitySetID` pero sin referencias a las entidades eliminadas (si las hubiera).

Por defecto, cuando una entidad es [eliminada]($method.md#methoddelete), su(s) referencia(s) en el(los) conjunto(s) de entidades existente(s) se vuelven *inexistentes* pero no se eliminan. También están incluidos en la propiedad "count" del conjunto de entidades. Llamar a `$clean` en el conjunto de entidades devuelve un nuevo conjunto de entidades actualizado sin referencias a entidades *undefined*.

`$clean` puede ser seguido por [`$method=entityset`]($method.md#methodentityset) para crear el nuevo conjunto de entidades en el servidor:

`/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$clean=true&$method=entityset`

## Ejemplo

1. Creamos un conjunto de entidades:

`GET /rest/Speciality?$filter="ID<=3"&$method=entityset`

Se reciben tres entidades y obtenemos el conjunto de entidades `DF6903FB5879404A9A818884CFC6F62A`

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

2. Eliminamos la entidad con `KEY=2` (ver [cómo eliminar una entidad]($method.md#methoddelete)), luego se envía esta solicitud:

`GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A`

Se devuelve el conjunto de entidades y sigue conteniendo 3 entidades. Hay una entidad indefinida para la entidad eliminada (con sello = 0):

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

3. Si se envía esta petición:

`GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A?$clean=true&$method=entityset`

Limpiamos el conjunto de entidades DF6903FB5879404A9A818884CFC6F62A y recibimos un nuevo conjunto de entidades (conjunto de entidades D7BFBC49375B4FE5A94CDD17AA535F73) que no contiene la entidad eliminada:

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
