---
id: get-license-info
title: Get license info
slug: /commands/get-license-info
displayed_sidebar: docs
---

<!--REF #_command_.Get license info.Syntax-->**Get license info** -> Resultado<!-- END REF-->
<!--REF #_command_.Get license info.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Object | &larr; | Información sobre la licencia activa |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get license info.Summary-->El comando **Get license info** devuelve un objeto que ofrece información detallada sobre la licencia activa.<!-- END REF-->

Si el comando se ejecuta en una aplicación 4D que no utiliza localmente una licencia (por ejemplo, 4D remoto), el comando devuelve un objeto Null.

El objeto devuelto contiene las siguientes propiedades:

```RAW
{    "name": string    "licenseNumber": string    "version": string    "attributes": optional, array of strings    "userName": string    "userMail": string    "companyName": string    "platforms": array of strings    "expirationDate": optional, object    "renewalFailureCount": optional, number    "products":[ //para cada producto de expansión registrado        {            "id": number            "name": string            "usedCount": number            "allowedCount": number            "rights": [                {                    "count": number                    "expirationDate" optional, object                }            ]        }    ]}
```

| **Propiedad**        | **Tipo**             | **Descripción**                                                                                                 | **Ejemplo**                                                                           |
| -------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| name                 | cadena               | Nombre comercial                                                                                                | "4D Developer Professional v16"                                                       |
| licenseNumber        | string               | Número de licencia                                                                                              | "4DDP16XXXXX1123456789"                                                               |
| version              | cadena               | Número de versión del producto                                                                                  | "16", "16R2"                                                                          |
| attributes           | colección de cadenas | Tipo(s) de licencia cuando sea aplicable (opcional)                                                             | \["application","OEM"\]                                                               |
| userName             | cadena               | Nombre de la cuenta de la tienda 4D                                                                             | "John Smith"                                                                          |
| userMail             | cadena               | Correo de la cuenta de la tienda 4D                                                                             | "john.smith@gmail.com"                                                                |
| companyName          | cadena               | Nombre de la empresa de la cuenta de la tienda 4D                                                               | "Alpha Cie"                                                                           |
| platforms            | colección de cadenas | Plataforma(s) de licencia                                                                                       | \["macOS", "windows"\]                                                                |
| expirationDate       | objeto               | Fecha de vencimiento (opcional)                                                                                 | {"día":2, "mes":6, "año":2018}                                                        |
| renewalFailureCount  | número               | Número de intentos fallidos de renovación automática para al menos una de las licencias del producto (opcional) | 3                                                                                     |
| products             | colección de objetos | Descripción de la licencia del producto (un elemento por licencia de producto)                                  |                                                                                       |
| \[ \].id             | number               | License number                                                                                                  | For available values, see the [Is license available](is-license-available.md) command |
| \[ \].name           | cadena               | Número de licencia                                                                                              | "4D Write - 4D Write Pro"                                                             |
| \[ \].usedCount      | número               | Número de conexiones consumidas                                                                                 | 8                                                                                     |
| \[ \].allowedCount   | número               | Total de conexiones permitidas para el producto frente a las fechas de vencimiento                              | 15                                                                                    |
| \[ \].rights         | colección de cadenas | Derechos para el producto (un elemento por fecha de vencimiento)                                                |                                                                                       |
| \[ \].count          | número               | Número de conexiones permitidas                                                                                 | 15 (32767 significa ilimitado)                                                        |
| \[ \].expirationDate | objeto               | Fecha de vencimiento (opcional, el mismo formato que arriba))                                                   | {"día":1, "mes":11, "año":2017}                                                       |

#### Ejemplo 

Usted desea obtener información osobre su licencia 4D Server actual:

```4d
 var $obj : Object
 $obj:=Get license info
```

*$obj* puede contener, por ejemplo:

```undefined
{
    "name": "4D Server v16 R3",
    "licenseNumber": "xxxx",
    "version": "16R3",
    "userName": "John DOE",
    "userMail": "john.doe@alpha.com",
    "companyName": "Alpha",
    "platforms": ["macOS", "windows"],
    "expirationDate": {"day":1, "month":1, "year":2018},
    "products":[
        {
            "allowedCount": 15,
            "id": 808464697,
            "name": "4D Write - 4D Write Pro",
            "rights": [
                {
                    "count": 5,
                    "expirationDate": {"day":1, "month":2, "year":2018}
                }, {
                    "count": 10,
                    "expirationDate": {"day":1, "month":11, "year":2017}
                }, {
                    "count": 10,
                    "expirationDate": {"day":1, "month":11, "year":2015} //vencido, no se cuenta                }
            ],
            "usedCount": 12
        },
        {...}
    ]
}
```

#### Ver también 

[CHANGE LICENSES](change-licenses.md)  
[Is license available](is-license-available.md)  
[WEB Get server info](web-get-server-info.md)  