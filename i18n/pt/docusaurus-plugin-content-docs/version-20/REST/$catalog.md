---
id: catalog
title: '$catalog'
---


O catálogo descreve todos os dataclasses e atributos disponíveis na datastore.


## Sintaxe disponível

| Sintaxe                                           | Exemplo              | Descrição                                                                            |
| ------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------ |
| [**$catalog**](#catalog)                          | `/$catalog`          | Devolve uma lista dos valores de referência do seu projecto juntamente com dois URIs |
| [**$catalog/$all**](#catalogall)                  | `/$catalog/$all`     | Devolve informação sobre todos os dataclasses do seu projecto e os seus atributos    |
| [**$catalog/\{dataClass\}**](#catalogdataclass) | `/$catalog/Employee` | Retorna informação sobre um dataclass e os seus atributos                            |


## $catalog
Devolve uma lista dos dados do seu projecto juntamente com dois URIs: um para aceder à informação sobre a sua estrutura e outro para recuperar os dados no dataclass


### Descrição

Quando chama `$catalog`, é devolvida uma lista dos dataclasses juntamente com dois URIs para cada dataclass no datastore do seu projecto.

Nesta lista apenas são mostrados os dataclasses expostos para a datastore do seu projecto. Para mais informações, consulte por favor [**secção de tabelas e campos de exposição**](configuration.md#exposing-tables-and-fields) .

Aqui está uma descrição das propriedades devolvidas para cada dataclass na datastore do seu projecto:


| Propriedade | Tipo | Descrição                                                                        |
| ----------- | ---- | -------------------------------------------------------------------------------- |
| name        | Text | Nome da dataclass.                                                               |
| uri         | Text | Um URI que lhe permite obter informações sobre o |dataclass e os seus atributos. |
| dataURI     | Text | Uma URI que lhe permite visualizar os dados no dataclass.                        |


### Exemplo

`GET  /rest/$catalog`

**Resultadoi**:

````
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
````


## $catalog/$all

Devolve informação sobre todos os dataclasses do seu projecto e os seus atributos

### Descrição

Chamando `$catalog/$all` pode reciber informação detalhada sobre os atributos de cada uma das classes de dados do modelo ativo de projeto.

For more information about what is returned for each dataclass and its attributes, use [`$catalog/\{dataClass\}`](#catalogdataClass).


### Exemplo

`GET  /rest/$catalog/$all`

**Resultadoi**:

````
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
````


## $catalog/\{dataClass\}

Retorna informação sobre um dataclass e os seus atributos

### Descrição

Calling `$catalog/\{dataClass\}` for a specific dataclass will return the following information about the dataclass and the attributes it contains. Se quiser recuperar essa informação para todas as classes de dados do armazém de dados de seu projeto, use [`$catalog/$all`](#catalogall).

A informação que recupera diz respeito ao seguinte:

*   Dataclass
*   Atributo(s)
*   Método(s), caso exista(m)
*   Chave primária

### DataClass

As seguintes propriedades são devolvidas para um dataclass exposto:


| Propriedade    | Tipo   | Descrição                                                                                                 |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| name           | Text   | Nome da dataclass                                                                                         |
| collectionName | Text   | Nome de uma selecção de entidade no dataclass                                                             |
| tableNumber    | Number | Número da tabela na base de dados 4D                                                                      |
| scope          | Text   | Alcance da classe de dados (lembre que só são mostradas as classes de dados cujo **Alcance** for público) |
| dataURI        | Text   | Um URI para os dados no dataclass                                                                         |


### Atributo(s)

Aqui estão as propriedades para cada atributo exposto que são devolvidas:

| Propriedade | Tipo       | Descrição                                                                                                                                                            |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | Text       | o nome de atributo.                                                                                                                                                  |
| kind        | Text       | Tipo de atributo (armazenamento ou relatedEntity).                                                                                                                   |
| fieldPos    | Number     | Posição do campo na tabela da base de dados).                                                                                                                        |
| scope       | Text       | Âmbito do atributo (apenas aparecerão os atributos cujo âmbito seja Público).                                                                                        |
| indexed     | Text       | Se algum **Index Kind** foi seleccionado, esta propriedade voltará a ser verdadeira. Caso contrário, esta propriedade não aparece.                                   |
| type        | Text       | Tipo de atributo (booleano, blob, byte, data, duração, imagem, long, long64, número, string, uuid ou palavra) ou a classe de dados para um atributo de relação N->1. |
| identifying | Parâmetros | Esta propriedade retorna True se o atributo for a chave primária. Caso contrário, esta propriedade não aparece.                                                      |
| path        | Text       | Nome da relação de um atributo relatedEntity ou relateEntities.                                                                                                      |
| foreignKey  | Text       | foreignKey|String   |For a relatedEntity attribute, name of the related attribute.|                                                                                  |
| inverseName | Text       | inverseName |String |Name of the opposite relation for a relatedEntity or relateEntities attribute.|                                                                 |


### Chave primária

O objeto chave devolve o nome do atributo **name** definido como **chave primária** para a classe de dados.


### Exemplo
Pode recuperar a informação relativa a uma classe de dados específica.

`GET  /rest/$catalog/Employee`

**Resultadoi**:

````
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
````

