---
id: catalog
title: $catalog
---

O catálogo descreve todos os dataclasses e atributos disponíveis na datastore.

## Sintaxe disponível

| Sintaxe                                                                 | Exemplo                | Descrição                                                                            |
| ----------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------ |
| [**$catalog**](#catalog)                                                | `/$catalog`            | Devolve uma lista dos valores de referência do seu projecto juntamente com dois URIs |
| [**$catalog/$all**](#catalogall)                                        | `/$catalog/$all`       | Devolve informação sobre todos os dataclasses do seu projecto e os seus atributos    |
| [**$catalog/{dataClass}**](#catalogdataclass)                           | `/$catalog/Employee`   | Retorna informação sobre um dataclass e os seus atributos                            |
| [**$catalog/DataStoreClassFunction**](ClassFunctions.md#function-calls) | `/$catalog/authentify` | Executes the datastore class function if it exists                                   |

## $catalog

Devolve uma lista dos dados do seu projecto juntamente com dois URIs: um para aceder à informação sobre a sua estrutura e outro para recuperar os dados no dataclass

### Descrição

When you call `$catalog`, a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore.

Nesta lista apenas são mostrados os dataclasses expostos para a datastore do seu projecto. For more information, please refer to [**Exposing tables and fields**](configuration.md#exposing-tables-and-fields) section.

Aqui está uma descrição das propriedades devolvidas para cada dataclass na datastore do seu projecto:

| Propriedade | Tipo   | Descrição                                                                                         |
| ----------- | ------ | ------------------------------------------------------------------------------------------------- |
| name        | String | Nome da dataclass.                                                                |
| uri         | String | Um URI que lhe permite obter informações sobre o \|dataclass e os seus atributos. |
| dataURI     | String | Uma URI que lhe permite visualizar os dados no dataclass.                         |

### Exemplo

`GET  /rest/$catalog`

**Resultado**:

```
{
    dataClasses: [
        {
            name: "Company",
            uri: "http://127.0.0.1:8081/rest/$catalog/Company",
            dataURI: "http://127.0.0.1:8081/rest/Company"
        },
        {
            name: "Employee",
            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",
            dataURI: "http://127.0.0.1:8081/rest/Employee"
        }
    ]
}
```

## $catalog/$all

Devolve informação sobre todos os dataclasses do seu projecto e os seus atributos

### Descrição

Calling `$catalog/$all` allows you to receive detailed information about the attributes in each of the dataclasses in your project's active model.

For more information about what is returned for each dataclass and its attributes, use [`$catalog/{dataClass}`](#catalogdataClass).

### Exemplo

`GET  /rest/$catalog/$all`

**Resultado**:

```
{
 
    "dataClasses": [
        {
            "name": "Company",
            "className": "Company",
            "collectionName": "CompanySelection",
            "tableNumber": 2,
            "scope": "public",
            "dataURI": "/rest/Company",
            "attributes": [
                {
                    "name": "ID",
                    "kind": "storage",
                    "fieldPos": 1,
                    "scope": "public",
                    "indexed": true,
                    "type": "long",
                    "identifying": true
                },
                {
                    "name": "name",
                    "kind": "storage",
                    "fieldPos": 2,
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "revenues",
                    "kind": "storage",
                    "fieldPos": 3,
                    "scope": "public",
                    "type": "number"
                },
                {
                    "name": "staff",
                    "kind": "relatedEntities",
                    "fieldPos": 4,
                    "scope": "public",
                    "type": "EmployeeSelection",
                    "reversePath": true,
                    "path": "employer"
                },
                {
                    "name": "url",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                }
            ],
            "key": [
                {
                    "name": "ID"
                }
            ]
        },
        {
            "name": "Employee",
            "className": "Employee",
            "collectionName": "EmployeeSelection",
            "tableNumber": 1,
            "scope": "public",
            "dataURI": "/rest/Employee",
            "attributes": [
                {
                    "name": "ID",
                    "kind": "storage",
                    "scope": "public",
                    "indexed": true,
                    "type": "long",
                    "identifying": true
                },
                {
                    "name": "firstname",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "lastname",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "employer",
                    "kind": "relatedEntity",
                    "scope": "public",
                    "type": "Company",
                    "path": "Company"
                }
            ],
            "key": [
                {
                    "name": "ID"
                }
            ]
        }
    ]
}
```

## $catalog/{dataClass}

Retorna informação sobre um dataclass e os seus atributos

### Descrição

Calling `$catalog/{dataClass}` for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the dataclasses in your project's datastore, use [`$catalog/$all`](#catalogall).

A informação que recupera diz respeito ao seguinte:

- Dataclass
- Atributo(s)
- Método(s), caso exista(m)
- Chave primária

### DataClass

As seguintes propriedades são devolvidas para um dataclass exposto:

| Propriedade    | Tipo   | Descrição                                                                                                       |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| name           | String | Nome da dataclass                                                                                               |
| collectionName | String | Nome de uma selecção de entidade no dataclass                                                                   |
| tableNumber    | Number | Número da tabela na base de dados 4D                                                                            |
| scope          | String | Scope for the dataclass (note that only dataclasses whose **Scope** is public are displayed) |
| dataURI        | String | Um URI para os dados no dataclass                                                                               |

### Atributo(s)

Aqui estão as propriedades para cada atributo exposto que são devolvidas:

| Propriedade | Tipo       | Descrição                                                                                                                                                                                |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | String     | o nome de atributo.                                                                                                                                                      |
| kind        | String     | Tipo de atributo (armazenamento ou relatedEntity).                                                                                                    |
| fieldPos    | Number     | Posição do campo na tabela da base de dados).                                                                                                                            |
| scope       | String     | Âmbito do atributo (apenas aparecerão os atributos cujo âmbito seja Público).                                                                         |
| indexed     | String     | If any **Index Kind** was selected, this property will return true. Caso contrário, esta propriedade não aparece.                                        |
| type        | String     | Attribute type (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, or word) or the dataclass for a N->1 relation attribute. |
| identifying | Parâmetros | Esta propriedade retorna True se o atributo for a chave primária. Caso contrário, esta propriedade não aparece.                                          |
| path        | String     | Nome da relação de um atributo relatedEntity ou relateEntities.                                                                                                          |
| foreignKey  | String     | foreignKey\|String   \|For a relatedEntity attribute, name of the related attribute.\|                                                                                   |
| inverseName | String     | inverseName \|String \|Name of the opposite relation for a relatedEntity or relateEntities attribute.\|                                                                  |

### Chave primária

The key object returns the **name** of the attribute defined as the **Primary Key** for the dataclass.

### Exemplo

Pode recuperar a informação relativa a uma classe de dados específica.

`GET  /rest/$catalog/Employee`

**Resultado**:

```
{
    name: "Employee",
    className: "Employee",
    collectionName: "EmployeeCollection",
    scope: "public",
    dataURI: "http://127.0.0.1:8081/rest/Employee",
    defaultTopSize: 20,
    extraProperties: {
        panelColor: "#76923C",
        __CDATA: "\n\n\t\t\n",
        panel: {
            isOpen: "true",
            pathVisible: "true",
            __CDATA: "\n\n\t\t\t\n",
            position: {
                X: "394",
                Y: "42"
            }
        }
    },
    attributes: [
        {
            name: "ID",
            kind: "storage",
            scope: "public",
            indexed: true,
            type: "long",
            identifying: true
        },
        {
            name: "firstName",
            kind: "storage",
            scope: "public",
            type: "string"
        },
        {
            name: "lastName",
            kind: "storage",
            scope: "public",
            type: "string"
        },
        {
            name: "fullName",
            kind: "calculated",
            scope: "public",
            type: "string",
            readOnly: true
        },
        {
            name: "salary",
            kind: "storage",
            scope: "public",
            type: "number",
            defaultFormat: {
                format: "$###,###.00"
            }
        },
        {
            name: "photo",
            kind: "storage",
            scope: "public",
            type: "image"
        },
        {
            name: "employer",
            kind: "relatedEntity",
            scope: "public",
            type: "Company",
            path: "Company"
        },
        {
            name: "employerName",
            kind: "alias",
            scope: "public",

            type: "string",
            path: "employer.name",
            readOnly: true
        },
        {
            name: "description",
            kind: "storage",
            scope: "public",
            type: "string",
            multiLine: true
        },
   ],
    key: [
        {
            name:
```
