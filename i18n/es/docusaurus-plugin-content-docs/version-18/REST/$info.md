---
id: info
title: "$info"
---

Devuelve información sobre los conjuntos de entidades almacenados actualmente en la caché de 4D Server, así como las sesiones usuario

## Descripción
Cuando llama a esta petición para su proyecto, se recupera la información en las propiedades siguientes:

| Propiedad      | Tipo       | Descripción                                                                                 |
| -------------- | ---------- | ------------------------------------------------------------------------------------------- |
| cacheSize      | Number     | Tamaño de la caché del servidor 4D.                                                         |
| usedCache      | Number     | Cuánto se ha utilizado de la caché de 4D Server.                                            |
| entitySetCount | Number     | Número de selecciones de entidades.                                                         |
| entitySet      | Collection | Una colección en la que cada objeto contiene información sobre cada selección de entidades. |
| ProgressInfo   | Collection | Una colección que contiene información sobre el indicador de progreso.                      |
| sessionInfo    | Collection | Una colección en la que cada objeto contiene información sobre cada sesión usuario.         |

### entitySet
Para cada selección de entidad almacenada actualmente en la caché de 4D Server, se devuelve la siguiente información:


| Propiedad     | Tipo    | Descripción                                                                                                                                                                                                                                                                                              |
| ------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | Text    | Un UUID que hace referencia al conjunto de entidades.                                                                                                                                                                                                                                                    |
| dataClass     | Text    | Nombre de la dataclass.                                                                                                                                                                                                                                                                                  |
| selectionSize | Number  | Número de entidades en la selección de entidades.                                                                                                                                                                                                                                                        |
| sorted        | Boolean | Devuelve true si el conjunto fue ordenado ( utilizando `$orderby`) o false si no está ordenado.                                                                                                                                                                                                          |
| refreshed     | Fecha   | Cuando se creó el conjunto de entidades o la última vez que se utilizó.                                                                                                                                                                                                                                  |
| expires       | Fecha   | Cuándo expirará el conjunto de entidades (esta fecha/hora cambia cada vez que se actualiza el conjunto de entidades). La diferencia entre refrescado y vencido es el tiempo de espera de un conjunto de entidades. Este valor es de dos horas por defecto o lo que hayas definido utilizando `$timeout`. |

Para obtener información sobre cómo crear una selección de entidades, consulte `$method=entityset`. Si desea eliminar la selección de entidades de la caché de 4D Server, utilice `$method=release`.
> 4D también crea sus propias selecciones de entidades con fines de optimización, por lo que las que se crean con `$method=entityset` no son las únicas que se devuelven.
> **IMPORTANT** If your project is in **Controlled Admin Access Mode**, you must first log into the project as a user in the Admin group.

### sessionInfo

Para cada sesión de usuario, se devuelve la siguiente información en la colección *sessionInfo*:

| Propiedad  | Tipo   | Descripción                                                       |
| ---------- | ------ | ----------------------------------------------------------------- |
| sessionID  | Text   | Un UUID que referencia la sesión.                                 |
| userName   | Text   | El nombre del usuario que ejecuta la sesión.                      |
| lifeTime   | Number | La duración de una sesión usuario en segundos (3600 por defecto). |
| expiration | Fecha  | La fecha y la hora actuales de caducidad de la sesión de usuario. |

## Ejemplo

Recupera la información sobre los conjuntos de entidades almacenados actualmente en la caché de 4D Server, así como las sesiones usuario:

`GET /rest/$info`

**Resultado**:

```
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
> La información del indicador de progreso que aparece después de las selecciones de entidades es utilizada internamente por 4D.