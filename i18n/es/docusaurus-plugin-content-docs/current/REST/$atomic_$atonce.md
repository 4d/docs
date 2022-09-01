---
id: atomic_$atonce
title: '$atomic/$atonce'
---


Permite que las acciones de la solicitud REST estén en una transacción. Si no hay errores, la transacción se valida. En caso contrario, la transacción se cancela.


## Descripción
Cuando tiene varias acciones juntas, puede utilizar `$atomic/$atonce` para asegurarse de que ninguna de las acciones se complete si una de ellas falla. Puede utilizar `$atomic` o `$atonce`.


## Ejemplo
Llamamos a la siguiente petición REST en una transacción.

 `POST  /rest/Employee?$method=update&$atomic=true`

**Datos POST**:

````
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
````

Obtenemos el siguiente error en la segunda entidad y por lo tanto la primera entidad tampoco se guarda:

````
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
````
> Aunque el salario de la primera entidad tiene un valor de 45000, este valor no se guardó en el servidor y tampoco se modificó el *timestamp (__STAMP)*. Si recargamos la entidad, veremos el valor anterior.
