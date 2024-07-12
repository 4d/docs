---
id: manData
title: Manipulación de datos
---

Todos [los atributos, dataclasses expuestos](configuration.md#exposing-tables-and-fields) y todas las [funciones](ClassFunctions.md) pueden ser accedidos a través de REST. Los nombres de clases de datos, de atributos y de funciones son sensibles a las mayúsculas y minúsculas; sin embargo, los datos de las búsquedas no lo son.

## Buscar datos

To query data directly, you can do so using the [`$filter`]($filter.md) function. Por ejemplo, para encontrar a una persona llamada "Smith", podría escribir:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`

## Añadir, modificar y eliminar entidades

Con la API REST, puede realizar todas las manipulaciones a los datos como puede hacerlo en 4D.

To add and modify entities, you can call [`$method=update`]($method.md#methodupdate). If you want to delete one or more entities, you can use [`$method=delete`]($method.md#methoddelete).

Besides retrieving a single entity in a dataclass using [\{dataClass\}({key})](dataClass.md#dataclasskey), you can also write a [class function](ClassFunctions.md#function-calls) that returns an entity selection (or a collection).

Before returning a selection, you can also sort it by using [`$orderby`]($orderby.md) one one or more attributes (even relation attributes).

## Navegación de datos

Add the [`$skip`]($skip.md) (to define with which entity to start) and [`$top/$limit`]($top_$limit.md) (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities.

## Creación y gestión del conjunto de entidades

Un conjunto de entidades (también conocido como *selección de entidades*) es una colección de entidades obtenidas a través de una petición REST que se almacena en la caché de 4D Server. El uso de un conjunto de entidades evita que se consulte continuamente la aplicación para obtener los mismos resultados. El acceso a un conjunto de entidades es mucho más rápido y puede mejorar la velocidad de su aplicación.

Para crear un conjunto de entidades, llame a [`$method=entityset`]($method.md#methodentityset) en su solicitud REST. As a measure of security, you can also use [`$savedfilter`]($savedfilter.md) and/or [`$savedorderby`]($savedorderby.md) when you call [`$filter`]($filter.md) and/or [`$orderby`]($orderby.md) so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before.

Para acceder al conjunto de entidades, debe utilizar `$entityset/\{entitySetID\}`, por ejemplo:

`/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`

Por defecto, un conjunto de entidades se almacena durante dos horas; sin embargo, puede cambiar el tiempo de espera pasando un nuevo valor a [`$timeout`]($timeout.md). El tiempo de espera se restablece continuamente al valor definido para su tiempo de espera (ya sea el predeterminado o el que usted defina) cada vez que lo utilice.

Si desea eliminar un conjunto de entidades de la caché de 4D Server, puede utilizar [`$method=release`]($method.md#methodrelease).

Si se modifica alguno de los atributos de la entidad en el conjunto de entidades, los valores se actualizarán. Sin embargo, si se modifica un valor que formaba parte de la consulta ejecutada para crear el conjunto de entidades, no se eliminará del conjunto de entidades aunque ya no se ajuste a los criterios de búsqueda.

Las entidades que elimine, por supuesto, dejarán de formar parte del conjunto de entidades. However, by default their reference will remain in the entity set with an *undefined* value, and they will still be included in the entity set count. Call [`$clean`]($clean.md) on the entity set to create a new, up-to-date entity set without *undefined* entity references.

Si el conjunto de entidades ya no existe en la caché de 4D Server, se recreará con un nuevo tiempo de espera por defecto de 10 minutos. El conjunto de entidades se refrescará (pueden incluirse ciertas entidades y eliminarse otras) desde la última vez que se creó, si ya no existía antes de recrearlo.

Utilizando [`$entityset/\{entitySetID\}?$logicOperator... &$otherCollection`]($entityset.md#entitysetentitysetidoperatorothercollection), puede combinar dos conjuntos de entidades que haya creado previamente. Puede combinar los resultados en ambos, devolver sólo lo que es común entre los dos, o devolver lo que no es común entre los dos.

A new selection of entities is returned; however, you can also create a new entity set by calling [`$method=entityset`]($method.md#methodentityset) at the end of the REST request.

## Cálculo de datos

By using [`$compute`]($compute.md), you can compute the **average**, **count**, **min**, **max**, or **sum** for a specific attribute in a dataclass. También puede calcular todos los valores con la palabra clave $all.

Por ejemplo, para obtener el salario más alto:

`/rest/Employee/salary/?$compute=max`

Para calcular todos los valores y devolver un objeto JSON:

`/rest/Employee/salary/?$compute=$all`

## Llamar las funciones de clase del modelo de datos

Puede llamar las [funciones de clase usuarios](ClassFunctions.md) ORDA del modelo de datos vía las peticiones POST, para poder beneficiarse del API de la aplicación objetivo. Por ejemplo, si ha definido una función `getCity()` en la dataclass City, podría llamarla utilizando la siguiente petición:

`/rest/City/getCity`

con los datos en el cuerpo de la petición: `["Paris"]`

> Las llamadas a los métodos proyecto 4D que se exponen como servicio REST aún se soportan, pero son obsoletas.

## Selección de atributos a obtener

Siempre se puede definir qué atributos devolver en la respuesta REST después de una solicitud inicial pasando su ruta en la solicitud (*por ejemplo*, `Company(1)/name,revenues/`)

Puede aplicar este filtro de las siguientes maneras:

| Object                  | Sintaxis                                                                                                                                  | Ejemplo                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Dataclass               | \{dataClass\}/{att1,att2...}                                                            | /People/firstName,lastName                                                      |
| Collection de entidades | \{dataClass\}/{att1,att2...}/?$filter="{filter}"                                        | /People/firstName,lastName/?$filter="lastName='a@'"                |
| Entidad específica      | \{dataClass\}({ID})/{att1,att2...}                                   | /People(1)/firstName,lastName                                |
|                         | \{dataClass\}:\{attribute\}(value)/{att1,att2...}/ | /People:firstName(Larry)/firstName,lastName/ |
| Entity selection        | \{dataClass\}/{att1,att2...}/$entityset/\{entitySetID\}                               | /People/firstName/$entityset/528BF90F10894915A4290158B4281E61                   |

Los atributos deben estar delimitados por una coma, *i.e.*, `/Employee/firstName,lastName,salary`. Se pueden pasar atributos de almacenamiento o relacionales.

### Ejemplos

A continuación se presentan algunos ejemplos, que muestran cómo especificar qué atributos devolver en función de la técnica utilizada para recuperar las entidades.

Puede aplicar esta técnica a:

- Clases de datos (todas o una colección de entidades en una clase de datos)
- Entidades específicas
- Conjuntos de entidades

#### Ejemplo con una dataclass

Las siguientes peticiones devuelven sólo el nombre y el apellido de la clase de datos People (ya sea toda la clase de datos o una selección de entidades basada en la búsqueda definida en `$filter`).

`GET  /rest/People/firstName,lastName/`

**Resultado**:

```
{
    __entityModel: "People",
    __COUNT: 4,
    __SENT: 4,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 1,
            firstName: "John",
            lastName: "Smith"
        },
        {
            __KEY: "2",
            __STAMP: 2,
            firstName: "Susan",
            lastName: "O'Leary"
        },
        {
            __KEY: "3",
            __STAMP: 2,
            firstName: "Pete",
            lastName: "Marley"
        },
        {
            __KEY: "4",
            __STAMP: 1,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
```

`GET  /rest/People/firstName,lastName/?$filter="lastName='A@'"/`

**Resultado**:

```
{
    __entityModel: "People",
    __COUNT: 1,
    __SENT: 1,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "4",
            __STAMP: 4,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
```

#### Ejemplo de entidad

La siguiente petición devuelve sólo los atributos de nombre y apellido de una entidad específica de la clase de datos People:

`GET  /rest/People(3)/firstName,lastName/`

**Resultado**:

```
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Marley"
}
```

`GET  /rest/People(3)/`

**Resultado**:

```
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    ID: 3,
    firstName: "Pete",
    lastName: "Marley",
    salary: 30000,
    employer: {
        __deferred: {
            uri: "http://127.0.0.1:8081/rest/Company(3)",
            __KEY: "3"
        }
    },
    fullName: "Pete Marley",
    employerName: "microsoft"
 
}
```

#### Ejemplo de conjunto de entidades

Una vez que haya [creado un conjunto de entidades](#creating-and-managing-entity-set), puede filtrar la información que contiene definiendo qué atributos debe devolver:

`GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer`

## Visualización de un atributo de imagen

Si desea visualizar un atributo de imagen en su totalidad, escriba lo siguiente:

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).

## Guardar un atributo BLOB en el disco

Si quiere guardar un BLOB almacenado en su clase de datos, puedes escribir lo siguiente:

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`

## Recuperar sólo una entidad

You can use the [`\{dataClass\}:\{attribute\}(value)`](%7BdataClass%7D.html#dataclassattributevalue) syntax when you want to retrieve only one entity. Es especialmente útil cuando se quiere hacer una búsqueda relacionada que no se crea en la llave primaria de la clase de datos. Por ejemplo, puede escribir:

`GET  /rest/Company:companyCode("Acme001")`
