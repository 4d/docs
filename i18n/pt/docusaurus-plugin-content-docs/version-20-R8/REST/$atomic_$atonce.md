---
id: atomic_$atonce
title: $atomic/$atOnce
---

Permite que as ações no pedido REST estejam numa transação. Se não houver erros, a transação é validada. Caso contrário, a transação é cancelada.

## Descrição

Cuando tiene varias acciones juntas, puede utilizar `$atomic/$atOnce` para asegurarse de que ninguna de las acciones se complete si una de ellas falla. Puede utilizar `$atomic` o `$atOnce`.

## Exemplo

Chamamos o seguinte pedido REST numa transação.

`POST  /rest/Employee?$method=update&$atomic=true`

**Datos POST**:

```json
[
{
    "__KEY": "200",
    "firstname": "John"
},
{
    "__KEY": "201",
    "firstname": "Harry"
}
]
```

Obtemos o seguinte erro na segunda entidade e, por conseguinte, a primeira entidade também não é guardada:

```json
{
    "__STATUS": {
        "success": true
    },
    "__KEY": "200",
    "__STAMP": 1,
    "uri": "/rest/Employee(200)",
    "__TIMESTAMP": "!!2020-04-03!!",
    "ID": 200,
    "firstname": "John",
    "lastname": "Keeling",
    "isWoman": false,
    "numberOfKids": 2,
    "addressID": 200,
    "gender": false,
    "address": {
        "__deferred": {
            "uri": "/rest/Address(200)",
            "__KEY": "200"
        }
    },
    "__ERROR": [
        {
            "message": "Cannot find entity with \"201\" key in the \"Employee\" dataclass",
            "componentSignature": "dbmg",
            "errCode": 1542
        }
    ]
}
```

> Embora o salário da primeira entidade tenha um valor de 45000, este valor não foi guardado no servidor e o _timestamp (__STAMP)_ também não foi modificado. Se recarregarmos a entidade, veremos o valor anterior.
