---
id: get-license-info
title: Get license info
slug: /commands/get-license-info
displayed_sidebar: docs
---

<!--REF #_command_.Get license info.Syntax-->**Get license info** -> Function result<!-- END REF-->
<!--REF #_command_.Get license info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Object | &#x1F850; | Information about the active licence |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get license info.Summary-->The **Get license info** command returns an object providing detailed information about the active license.<!-- END REF-->

If the command is executed on a 4D application that does not use locally a license (e.g. 4D remote), the command returns a Null object.

The returned object contains the following properties:

```RAW
{    "name": string    "licenseNumber": string    "version": string    "attributes": optional, array of strings    "userName": string    "userMail": string    "companyName": string    "platforms": array of strings    "expirationDate": optional, object    "renewalFailureCount": optional, number    "products":[ //for each registered expansion product        {            "id": number            "name": string            "usedCount": number            "allowedCount": number            "rights": [                 {                    "count": number                    "expirationDate" optional, object                 }            ]        }    ]}
```

| **Property**         | **Type**              | **Description**                                                                                       | **Example**                                                                           |
| -------------------- | --------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| name                 | string                | Commercial name                                                                                       | "4D Developer Professional v16"                                                       |
| licenseNumber        | string                | License number                                                                                        | "4DDP16XXXXX1123456789"                                                               |
| version              | string                | Product version number                                                                                | "16", "16R2"                                                                          |
| attributes           | collection of strings | License type(s) when applicable (optional)                                                            | \["application","OEM"\]                                                               |
| userName             | string                | Name of 4D store account                                                                              | "John Smith"                                                                          |
| userMail             | string                | Mail of 4D store account                                                                              | "john.smith@gmail.com"                                                                |
| companyName          | string                | Company name of 4D store account                                                                      | "Alpha Cie"                                                                           |
| platforms            | collection of strings | License platform(s)                                                                                   | \["macOS", "windows"\]                                                                |
| expirationDate       | object                | Date of expiration (optional)                                                                         | {"day":2, "month":6, "year":2018}                                                     |
| renewalFailureCount  | number                | Number of unsuccessful automatic renewal attempts for at least one of the product licenses (optional) | 3                                                                                     |
| products             | collection of objects | Description of product license (one element per product license)                                      |                                                                                       |
| \[ \].id             | number                | License number                                                                                        | For available values, see the [Is license available](is-license-available.md) command |
| \[ \].name           | string                | License name                                                                                          | "4D Write - 4D Write Pro"                                                             |
| \[ \].usedCount      | number                | Number of consumed connections                                                                        | 8                                                                                     |
| \[ \].allowedCount   | number                | Total connections allowed for the product against the expiry dates                                    | 15                                                                                    |
| \[ \].rights         | collection of objects | Rights for the product (one element per expiration date)                                              |                                                                                       |
| \[ \].count          | number                | Number of allowed connections                                                                         | 15 (32767 means unlimited)                                                            |
| \[ \].expirationDate | object                | Date of expiration (optional, same format as above)                                                   | {"day":1, "month":11, "year":2017}                                                    |

#### Example 

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
                    "expirationDate": {"day":1, "month":11, "year":2015} //expired, not counted
                }
            ],
            "usedCount": 12
        },
        {...}
    ]
}
```

#### See also 

[CHANGE LICENSES](change-licenses.md)  
[Is license available](is-license-available.md)  
[WEB Get server info](web-get-server-info.md)  