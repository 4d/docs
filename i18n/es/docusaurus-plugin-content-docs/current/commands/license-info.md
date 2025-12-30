---
id: license-info
title: License info
displayed_sidebar: docs
---

<!--REF #_command_.License info.Syntax-->**License info** : Object<!-- END REF-->

<!--REF #_command_.License info.Params-->

| Parámetros | Tipo   |                             | Descripción                          |
| ---------- | ------ | --------------------------- | ------------------------------------ |
| Resultado  | Object | &#8592; | Information about the active license |

<!-- END REF-->

## Descripción

<!--REF #_command_.License info.Summary-->The **License info** command returns an object providing detailed information about the active license.<!-- END REF-->

Si el comando se ejecuta en una aplicación 4D que no utiliza localmente una licencia (por ejemplo, 4D remote), el comando devuelve un objeto Null.

:::note

Este comando recarga los archivos de licencia desde el disco y actualiza los derechos asociados si han sido modificados.

:::

El objeto devuelto contiene las siguientes propiedades:

```json
{
    "name": "string",
    "key": 0,
    "licenseNumber": "string",
    "version": "string",
    "attributes": ["string1", "string2"], // optional
    "userName": "string",
    "userMail": "string",
    "companyName": "string",
    "platforms": ["string1", "string2"],
    "expirationDate": { 
        // details here 
    }, // optional
    "renewalFailureCount": 0, // optional
    "products": [
        { // for each registered expansion product
            "id": 0,
            "name": "string",
            "usedCount": 0,
            "allowedCount": 0,
            "rights": [
                {
                    "count": 0,
                    "expirationDate": { 
                        // details here 
                    } // optional
                }
            ]
        }
    ]
}
```

| **Propiedad**       | **Tipo**              | **Description**                                                                                                                                                                                                                                                             | **Ejemplo**                                                                                                                                       |
| ------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                | string                | Nombre comercial                                                                                                                                                                                                                                                            | "4D Developer Professional vXX"                                                                                                                   |
| key                 | number                | ID del producto instalado. Un número único está asociado a una aplicación 4D (como 4D Server, 4D en modo local, 4D Desktop, etc.) instalado en una máquina. Este número está encriptado. | 12356789                                                                                                                                          |
| licenseNumber       | string                | Número de licencia                                                                                                                                                                                                                                                          | "4DDP16XXXXX1123456789"                                                                                                                           |
| version             | string                | Número de versión del producto                                                                                                                                                                                                                                              | "16", "16R2"                                                                                                                                      |
| attributes          | colección de cadenas  | Tipo(s) de licencia si aplica (opcional)                                                                                                                                                                                              | \["application","OEM"], ["evaluation"\] |
| userName            | string                | Nombre de la cuenta de la tienda 4D                                                                                                                                                                                                                                         | "John Smith"                                                                                                                                      |
| userMail            | string                | Correo de la cuenta de la tienda 4D                                                                                                                                                                                                                                         | "john.smith@gmail.com"                                                                               |
| companyName         | string                | Nombre de la empresa 4D store                                                                                                                                                                                                                                               | "Alpha Cie"                                                                                                                                       |
| platforms           | colección de cadenas  | Plataforma(s) de licencia                                                                                                                                                                                                                                | \["macOS", "windows"\]                                                                      |
| expirationDate      | object                | Fecha de expiración (opcional)                                                                                                                                                                                                                           | {"day":2, "month":6, "year":2026}                                                                 |
| renewalFailureCount | number                | Número de intentos fallidos de renovación automática de al menos una de las licencias de producto (opcional)                                                                                                                                             | 3                                                                                                                                                 |
| products            | collection of objects | Descripción de la licencia producto (un elemento por licencia producto). Ver abajo.                                                                                                                                      |                                                                                                                                                   |

Cada objeto de la colección `products` puede tener las siguientes propiedades:

| **Propiedad** |                                                                                            | **Tipo**              | **Description**                                                                        | **Ejemplo**                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------ | --------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| id            |                                                                                            | number                | Número de licencia                                                                     | Para conocer los valores disponibles, consulte el comando [Is license available](../commands-legacy/is-license-available.md) |
| name          |                                                                                            | string                | Nombre de la licencia                                                                  | "4D Write - 4D Write Pro"                                                                                                    |
| usedCount     |                                                                                            | number                | Número de conexiones consumidas                                                        | 8                                                                                                                            |
| allowedCount  |                                                                                            | number                | Conexiones totales permitidas para el producto con respecto a las fechas de expiración | 15                                                                                                                           |
| rights        |                                                                                            | collection of objects | Derechos del producto (un elemento por fecha de caducidad)          |                                                                                                                              |
|               | \[ \].count          | number                | Número de conexiones permitidas                                                        | 15 (32767 significa ilimitado)                                                                            |
|               | \[ \].expirationDate | object                | Fecha de caducidad (opcional, el mismo formato que anterior)        | {"day":1, "month":11, "year":2017}                                           |

## Ejemplo

Desea obtener información sobre su licencia actual de 4D Server:

```4d
 var $obj : Object
 $obj:=License info
```

*$obj* puede contener, por ejemplo:

```json
{
    "name": "4D Server v16 R3",
    "key": 123456789,
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
                    "expirationDate": {"day":1, "month":11, "year":2015} //expired, not counted
                }
            ],
            "usedCount": 12
        },
        {...}
    ]
}
```

## Ver también

[CHANGE LICENSES](../commands-legacy/change-licenses.md)\
[Is license available](../commands-legacy/is-license-available.md)\
[WEB Get server info](../commands-legacy/web-get-server-info.md)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1489 |
| Hilo seguro       | sí   |


