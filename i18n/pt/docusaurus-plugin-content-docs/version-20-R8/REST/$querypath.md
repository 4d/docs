---
id: querypath
title: $querypath
---

Devuelve la petición tal y como se ejecutó por 4D Server (\*por ejemplo, \*, `$querypath=true`)

## Descrição

`$querypath` devuelve la petición tal y como fue ejecutada por 4D Server. Se, por exemplo, uma parte da consulta passada não devolver nenhuma entidade, o resto da consulta não é executada. La petición de consulta está optimizada como se puede ver en este `$querypath`.

Para más información sobre las rutas de petición, consulte [queryPlan y queryPath](genInfo.md#querypath-and-queryplan).

Na coleção de etapas, existe um objeto com as seguintes propriedades que definem a consulta executada:

| Propriedade   | Tipo       | Descrição                                                                       |
| ------------- | ---------- | ------------------------------------------------------------------------------- |
| description   | Text       | Consulta executada ou "AND" quando existem várias etapas                        |
| time          | Number     | Número de milissegundos necessários para executar a consulta                    |
| recordsfounds | Number     | Número de registos encontrados                                                  |
| steps         | Collection | Uma coleção com um objeto que define a etapa subsequente do caminho da consulta |

## Exemplo

Se passou a seguinte consulta:

`GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true`

E não foram encontradas entidades, seria devolvido o seguinte caminho de consulta, se escrever o seguinte:

` GET  /rest/$querypath`

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

Se, por outro lado, a primeira consulta devolver mais do que uma entidade, será executada a segunda. Se executarmos a seguinte consulta:

`GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true`

Se pelo menos uma entidade for encontrada, será devolvido o seguinte caminho de consulta, se escrever o seguinte:

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
                    "description": "Join on Table : Company : Employee.employer = Company.ID",
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
