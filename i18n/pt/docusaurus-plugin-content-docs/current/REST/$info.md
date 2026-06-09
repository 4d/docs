---
id: info
title: $info
---

Devolve informação sobre os conjuntos de entidades armazenados atualmente na cache de 4D Server, bem como as sessões utilizador

## Descrição

Ao chamar este pedido para o seu projeto, recupera informações nas seguintes propriedades:

| Propriedade    | Tipo       | Descrição                                                                                                                                                                                                                       |
| -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cacheSize      | Number     | Tamanho da cache do servidor 4D.                                                                                                                                                                                |
| usedCache      | Number     | Quanto do cache do 4D Server foi usado.                                                                                                                                                                         |
| entitySetCount | Number     | Number of entity sets.                                                                                                                                                                                          |
| entitySet      | Collection | A collection in which each object contains information about each entity set.                                                                                                                                   |
| ProgressInfo   | Collection | Uma coleção que contém informações sobre os indicadores de progresso.                                                                                                                                           |
| sessionInfo    | Collection | Uma coleção em que cada objeto contém informações sobre cada sessão de usuário.                                                                                                                                 |
| privileges     | Object     | An object with a "privileges" property (collection of objects). Each object of the collection has a "privilege" property with a privilege name of the user session as value. |

### entitySet

For each entity set currently stored in 4D Server's cache, the following information is returned:

| Propriedade   | Tipo       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | Text       | Um UUID que faz referência ao conjunto de entidades.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| dataClass     | Text       | Nome da dataclass.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| selectionSize | Number     | Number of entities in the entity set.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| sorted        | Parâmetros | Devuelve true si el conjunto fue ordenado ( utilizando `$orderby`) o false si no está ordenado.                                                                                                                                                                                                                                                                                                                                                            |
| refreshed     | Date       | Quando o conjunto de entidades foi criado ou utilizado a última vez.                                                                                                                                                                                                                                                                                                                                                                                                          |
| expires       | Date       | Quando o conjunto de entidades expirará (esta data/hora muda sempre que o conjunto de entidades é atualizado). A diferença entre refreshed e expires é o tempo limite para um conjunto de entidades. Este valor es de dos horas por defecto o lo que hayas definido utilizando `$timeout`. It can also be modified for the session through the [`Session.quotas`](../API/SessionClass.md#quotas) property. |

For information about how to create an entity set, refer to [`$method=entityset`](./$method.md#methodentityset). If you want to remove the entity selection from 4D Server's cache, use [`$entityset/$release`](./$entityset.md#entitysetrelease).

> 4D también crea sus propias selecciones de entidades con fines de optimización, por lo que las que se crean con `$method=entityset` no son las únicas que se devuelven.

> **IMPORTANT**
> If your project is in **Controlled Admin Access Mode**, you must first log into the project as a user in the Admin group.

### sessionInfo

Para cada sesión de usuario, se devuelve la siguiente información en la colección *sessionInfo*:

| Propriedade | Tipo   | Descrição                                                                                                     |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| sessionID   | Text   | Um UUID que faz referência à sessão.                                                          |
| userName    | Text   | O nome do usuário que executa a sessão.                                                       |
| lifeTime    | Number | O tempo de vida de uma sessão usuário em segundos (3600 por predefinição). |
| expiration  | Date   | A data e hora de expiração atuais da sessão do usuário.                                       |

## Exemplo

Recupera informação sobre os conjuntos de entidades atualmente armazenados na cache de 4D Server assim como sessões usuário:

`GET /rest/$info`

**Resultado**:

```json
{
cacheSize: 209715200,
usedCache: 3136000,
entitySetCount: 4,
entitySet: [
    {
        id: "1418741678864021B56F8C6D77F2FC06",
        tableName: "Company",
        selectionSize: 1,
        sorted: false,
        refreshed: "2011-11-18T10:30:30Z",
        expires: "2011-11-18T10:35:30Z"
    },
    {
        id: "CAD79E5BF339462E85DA613754C05CC0",
        tableName: "People",
        selectionSize: 49,
        sorted: true,
        refreshed: "2011-11-18T10:28:43Z",
        expires: "2011-11-18T10:38:43Z"
    },
    {
        id: "F4514C59D6B642099764C15D2BF51624",
        tableName: "People",
        selectionSize: 37,
        sorted: false,
        refreshed: "2011-11-18T10:24:24Z",
        expires: "2011-11-18T12:24:24Z"
    }
],
ProgressInfo: [
    {
        UserInfo: "flushProgressIndicator",
        sessions: 0,
        percent: 0
    },
    {
        UserInfo: "indexProgressIndicator",
        sessions: 0,
        percent: 0
    }
],
sessionInfo: [
    {
        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",
        userID: "36713176D42DB045B01B8E650E8FA9C6",
        userName: "james",
        lifeTime: 3600,
        expiration: "2013-04-22T12:45:08Z"
    },
    {
        sessionID: "A85F253EDE90CA458940337BE2939F6F",
        userID: "00000000000000000000000000000000",
        userName: "default guest",
        lifeTime: 3600,
        expiration: "2013-04-23T10:30:25Z"
}
]
}
```

> A informação do indicador de progresso listada após as seleções de entidades é usada internamente por 4D.
