---
id: get-license-info
title: Get license info
slug: /commands/get-license-info
displayed_sidebar: docs
---

<!--REF #_command_.Get license info.Syntax-->**Get license info** -> Resultado<!-- END REF-->
<!--REF #_command_.Get license info.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Object | &#x1F850; | Informação sobre a licença ativa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get license info.Summary-->O comando **Get license info** devolve um objeto que oferece informação detalhada sobre a licença ativa.<!-- END REF-->

Se o comando for executado em uma aplicação 4D que não utiliza localmente uma licença (por exemplo, 4D remoto), o comando devolve um objeto Null.

O objeto devolvido contém as seguintes propriedades:

```RAW
{    "name": string    "licenseNumber": string    "version": string    "attributes": optional, array of strings    "userName": string    "userMail": string    "companyName": string    "platforms": array of strings    "expirationDate": optional, object    "products":[ //para cada produto de expansão registrado        {            "id": number            "name": string            "usedCount": number            "allowedCount": number            "rights": [                 {                    "count": number                    "expirationDate" optional, object                 }            ]        }    ]}
```

| Nome de propriedade  | Descrição                                                                                                | Exemplos                                                                                                 |
| -------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| name                 | Nome comercial                                                                                           | "4D Developer Professional v16"                                                                          |
| licenseNumber        | Número de licença                                                                                        | "4DDP16XXXXX1123456789"                                                                                  |
| version              | Número de versão de producto                                                                             | "16", "16R2"                                                                                             |
| attributes           | Tipo(s) de licença quando for aplicável (opcional)                                                       | \["application","OEM"\]                                                                                  |
| userName             | Nome de conta da loja 4D                                                                                 | "John Smith"                                                                                             |
| userMail             | Correio de conta de loja 4D                                                                              | "john.smith@gmail.com"                                                                                   |
| companyName          | Nome de empresa da conta de loja 4D                                                                      | "Alpha Cie"                                                                                              |
| platforms            | Plataforma(s) de licença                                                                                 | \["macOS", "windows"\]                                                                                   |
| expirationDate       | Data de vencimento (opcional)                                                                            | {"dia":2, "mês":6, "ano":2018}                                                                           |
| renewalFailureCount  | Número de tentativas falhas de renovação automática para ao menos uma das licenças de produto (opcional) | 3                                                                                                        |
| products             | Descrição de licença de produto (array de objetos, um elemento por licença de produto)                   |                                                                                                          |
| \[ \].id             | Número de licença                                                                                        | Para conhecer os valores disponíveis, consulte o comando [Is license available](is-license-available.md) |
| \[ \].name           | Nome de licença                                                                                          | "4D Write - 4D Write Pro"                                                                                |
| \[ \].usedCount      | Número de créditos consumidos                                                                            | 8                                                                                                        |
| \[ \].allowedCount   | Total de créditos permitidos para o producto em função das datas de vencimento                           | 15                                                                                                       |
| \[ \].rights         | Direitos para o produto (array de objetos, um elemento por data de vencimento)                           |                                                                                                          |
| \[ \].count          | Número de créditos permitidos                                                                            | 15 (32767 signifca ilimitado)                                                                            |
| \[ \].expirationDate | Data de vencimento (o mesmo formato que o anterior)                                                      | {"dia":1, "mês":11, "ano":2017}                                                                          |

#### Exemplo 

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
                    "expirationDate": {"day":1, "month":11, "year":2015} //vencido, não é contado                }
            ],
            "usedCount": 12
        },
        {...}
    ]
}
```

#### Ver também 

[CHANGE LICENSES](change-licenses.md)  
[Is license available](is-license-available.md)  
[WEB Get server info](web-get-server-info.md)  