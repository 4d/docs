---
id: catalog
title: $catalog
---

The catalog describes all the dataclasses, attributes, and [interprocess (shared) singletons](../Concepts/classes.md#singleton-classes) available in the project.

## Sintaxe disponível

| Sintaxe                                                                 | Exemplo                | Descrição                                                                                                                                         |
| ----------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                                                | `/$catalog`            | Returns [shared singletons](#singletons) (if any) and a list of the dataclasses in your project along with two URIs            |
| [**$catalog/$all**](#catalogall)                                        | `/$catalog/$all`       | Returns [shared singletons](#singletons) (if any) and information about all of your project's dataclasses and their attributes |
| [**$catalog/\{dataClass\}**](#catalogdataclass)                       | `/$catalog/Employee`   | Retorna informação sobre um dataclass e os seus atributos                                                                                         |
| [**$catalog/DataStoreClassFunction**](ClassFunctions.md#function-calls) | `/$catalog/authentify` | Executa a função de classe do datastore se ela existir                                                                                            |

## $catalog

Returns [shared singletons](#singletons) (if any) and a list of the dataclasses in your project along with two URIs: one to access the information about its structure and one to retrieve the data in the dataclass

### Descrição

Cuando se llama a `$catalog`, se devuelve una lista de las clases de datos junto con dos URI para cada clase de datos en el almacén de datos de su proyecto.

Nesta lista apenas são mostrados os dataclasses expostos para a datastore do seu projecto. Para obter mais informações, consulte a seção [**Expondo tabelas e campos**](configuration.md#exposing-tables-and-fields).

Aqui está uma descrição das propriedades devolvidas para cada dataclass na datastore do seu projecto:

| Propriedade | Tipo | Descrição                                                                                         |
| ----------- | ---- | ------------------------------------------------------------------------------------------------- |
| name        | Text | Nome da dataclass.                                                                |
| uri         | Text | Um URI que lhe permite obter informações sobre o \|dataclass e os seus atributos. |
| dataURI     | Text | Uma URI que lhe permite visualizar os dados no dataclass.                         |

### Exemplo

`GET  /rest/$catalog`

**Resultado**:

```json
{
    dataClass: [
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

Returns [shared singletons](#singletons) (if any) and information about all of your project's dataclasses and their attributes

### Descrição

Llamando `$catalog/$all` puede recibir información detallada sobre los atributos de cada una de las clases de datos del modelo activo del proyecto.

For more information about what is returned for each dataclass and its attributes, use [`$catalog/\{dataClass\}`](#catalogdataclass).

### Exemplo

`GET  /rest/$catalog/$all`

**Resultado**:

```json
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
                    "path":
```

## $catalog/\{dataClass\}

Retorna informação sobre um dataclass e os seus atributos

### Descrição

Calling `$catalog/\{dataClass\}` for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the dataclasses in your project's datastore, use [`$catalog/$all`](#catalogall).

A informação que recupera diz respeito ao seguinte:

- Dataclass
- Atributo(s)
- Método(s), caso exista(m)
- Chave primária

### DataClass

As seguintes propriedades são devolvidas para um dataclass exposto:

| Propriedade    | Tipo   | Descrição                                                                                                                              |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| name           | Text   | Nome da dataclass                                                                                                                      |
| collectionName | Text   | Nome de uma selecção de entidade no dataclass                                                                                          |
| tableNumber    | Number | Número da tabela na base de dados 4D                                                                                                   |
| scope          | Text   | Alcance de la clase de datos (tenga en cuenta que sólo se muestran las clases de datos cuyo **Alcance** es público) |
| dataURI        | Text   | Um URI para os dados no dataclass                                                                                                      |

### Atributo(s)

Aqui estão as propriedades para cada atributo exposto que são devolvidas:

| Propriedade | Tipo       | Descrição                                                                                                                                                                                                |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | Text       | o nome de atributo.                                                                                                                                                                      |
| kind        | Text       | Tipo de atributo (armazenamento ou relatedEntity).                                                                                                                    |
| fieldPos    | Number     | Posição do campo na tabela da base de dados).                                                                                                                                            |
| scope       | Text       | Âmbito do atributo (apenas aparecerão os atributos cujo âmbito seja Público).                                                                                         |
| indexed     | Text       | Si se seleccionó algún **tipo de índice**, esta propiedad devolverá true. Caso contrário, esta propriedade não aparece.                                                  |
| type        | Text       | Tipo de atributo (booleano, blob, byte, fecha, duración, imagen, long, long64, número, cadena, uuid o palabra) o la clase de datos para un atributo de relación N->1. |
| identifying | Parâmetros | Esta propriedade retorna True se o atributo for a chave primária. Caso contrário, esta propriedade não aparece.                                                          |
| path        | Text       | Nome da relação de um atributo relatedEntity ou relateEntities.                                                                                                                          |
| foreignKey  | Text       | foreignKey\|String   \|For a relatedEntity attribute, name of the related attribute.\|                                                                                                   |
| inverseName | Text       | inverseName \|String \|Name of the opposite relation for a relatedEntity or relateEntities attribute.\|                                                                                  |

### Chave primária

El objeto llave devuelve el nombre del atributo **name** definido como **llave primaria** para la clase de datos.

### Exemplo

Pode recuperar a informação relativa a uma classe de dados específica.

`GET  /rest/$catalog/Employee`

**Resultado**:

```json
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

## singletons

If you have defined [shared singletons](../Concepts/classes.md#singleton-classes) containing at least one [exposed function](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions), a `singletons` section is added to the returned json for both the `/$catalog` and `/$catalog/$all` syntaxes. Ele contém a coleção de classes singleton como objetos com seu **nome** e **métodos** (ou seja, funções expostas).

As funções singleton podem ser chamadas por solicitações REST usando o comando [`$singleton`]($singleton.md).

### Exemplo

`GET  /rest/$catalog/$all`

**Resultado**:

```json
{...
	singletons": [
    {
      "name": "VehicleFactory",
      "methods": [
        {
          "name": "buildVehicle",
          "allowedOnHTTPGET": false,
          "exposed": true
        }
      ]
    }
  ],

	dataClasses: [...]
}
```
