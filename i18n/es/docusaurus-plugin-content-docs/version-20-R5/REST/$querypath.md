---
id: querypath
title: $querypath
---

Returns the query as it was executed by 4D Server (_e.g._, `$querypath=true`)

## Descripción

`$querypath` returns the query as it was executed by 4D Server. Si, por ejemplo, una parte de la petición pasada no devuelve ninguna entidad, el resto de la petición no se ejecuta. The query requested is optimized as you can see in this `$querypath`.

For more information about query paths, refer to [queryPlan and queryPath](genInfo.md#querypath-and-queryplan).

En la colección de pasos, hay un objeto con las siguientes propiedades que definen la petición ejecutada:

| Propiedad     | Tipo       | Descripción                                                                        |
| ------------- | ---------- | ---------------------------------------------------------------------------------- |
| description   | String     | Petición ejecutada o "AND" cuando hay varios pasos                                 |
| time          | Number     | Número de milisegundos necesarios para ejecutar la petición                        |
| recordsfounds | Number     | Número de registros encontrados                                                    |
| steps         | Collection | Una colección con un objeto que define el siguiente paso de la ruta de la petición |

## Ejemplo

Si pasó la siguiente petición:

`GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true`

Y no se encontraron entidades, se devolvería la siguiente ruta de petición, si escribe lo siguiente:

` GET /rest/$querypath`

**Response**:

```
__queryPath: {
 
    steps: [
        {
            description: "AND",
            time: 0,
            recordsfounds: 0,
            steps: [
                {
                    description: "Join on Table : Company : People.employer = Company.ID",
                    time: 0,
                    recordsfounds: 0,
                    steps: [
                        {
                            steps: [
                                {
                                    description: "Company.name = acme",
                                    time: 0,
                                    recordsfounds: 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
 
}
```

Si, por el contrario, la primera consulta devuelve más de una entidad, se ejecutará la segunda. Si ejecutamos la siguiente consulta:

`GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true`

Si se encuentra al menos una entidad, se devolverá la siguiente ruta de consulta, si se escribe lo siguiente:

`GET  /rest/$querypath`

**Respose**:

```
"__queryPath": {
    "steps": [
        {
            "description": "AND",
            "time": 1,
            "recordsfounds": 4,
            "steps": [
                {
                    "description": "Join on Table : Company : Employee.employer = Company. ID",
                    "time": 1,
                    "recordsfounds": 4,
                    "steps": [
                        {
                            "steps": [
                                {
                                    "description": "Company.name LIKE a*",
                                    "time": 0,
                                    "recordsfounds": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "description": "Employee.lastName # smith",
                    "time": 0,
                    "recordsfounds": 4
                }
            ]
        }
    ]
}
```
