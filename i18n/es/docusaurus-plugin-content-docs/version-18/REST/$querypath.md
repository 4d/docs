---
id: querypath
title: "$querypath"
---
   	
Devuelve la petición tal y como se ejecutó por 4D Server (*por ejemplo, *, `$querypath=true`)

## Descripción

`$querypath` devuelve la petición tal y como fue ejecutada por 4D Server. Si, por ejemplo, una parte de la petición pasada no devuelve ninguna entidad, el resto de la petición no se ejecuta. La petición de consulta está optimizada como se puede ver en este `$querypath`.

Para más información sobre las rutas de petición, consulte [queryPlan y queryPath](genInfo.md#querypath-and-queryplan).

En la colección de pasos, hay un objeto con las siguientes propiedades que definen la petición ejecutada:

| Propiedad     | Tipo       | Descripción                                                                        |
| ------------- | ---------- | ---------------------------------------------------------------------------------- |
| description   | Text       | Petición ejecutada o "AND" cuando hay varios pasos                                 |
| time          | Number     | Número de milisegundos necesarios para ejecutar la petición                        |
| recordsfounds | Number     | Número de registros encontrados                                                    |
| steps         | Collection | Una colección con un objeto que define el siguiente paso de la ruta de la petición |

## Ejemplo

Si pasó la siguiente petición:

 `GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true`

Y no se encontraron entidades, se devolvería la siguiente ruta de petición, si escribe lo siguiente:

`GET  /rest/$querypath`

**Respuesta**:

```
__queryPath: {

    steps: [
        {
            description: "AND",
            time: 0,
            recordsfounds: 0,
            steps: [
                {
                    description: "Join on Table : Company : People.employer = Company. ID",
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

**Respuesta**:

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
