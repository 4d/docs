---
id: overview
title: ORDA
---

ORDA significa **Object Relational Data Access**. It is an enhanced technology allowing to access both the model and the data of a database through objects.

Las relaciones se incluyen de forma transparente en el concepto, en combinación con el principio del [lazy loading](glossary.md#lazy-loading), para eliminar todas las molestias típicas de la selección o la transferencia de datos del desarrollador.

Con ORDA, se accede a los datos a través de una capa de abstracción, el [datastore](dsMapping.md#datastore). A datastore is an object that provides an interface to the database model and data through objects and classes. For example, a table is mapped to a [dataclass](dsMapping.md#dataclass) object, a field is an [attribute](dsMapping.md##attribute) of a dataclass, and records are accessed through [entities](dsMapping.md#entity) and [entity selections](dsMapping.md#entity-selection).

## Porquê utilizar ORDA?

Instead of representing information as tables, records, and fields, ORDA uses an alternate approach that more accurately maps data to real-world concepts.

Imagine the ability to denormalize a relational structure, yet not affect efficiency. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure.

In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections.

Uma consulta retorna uma lista de entidades chamada seleção de entidades, que cumpre o papel de um conjunto de linhas de uma consulta SQL. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.

In addition, ORDA objects such as entity selections or entities can be easily bound to UI objects such as list boxes or variables. Combinadas con las funcionalidades poderosas tales como los comandos `This` y `Form`, permiten construir interfaces modernas y modulares basadas en objetos y colecciones.

## Como utilizar ORDA?

Basicamente, o ORDA lida com objetos. No ORDA, todos os conceitos principais, incluindo o próprio datastore, estão disponíveis através de objectos. En 4D, el datastore es automáticamente [mapeado sobre la estructura 4D](dsMapping.md).

ORDA objects can be handled like 4D standard objects, but they automatically benefit from specific properties and methods.

ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). Sin embargo, los objetos del modelo de datos ORDA están asociados a las [clases en las que se pueden añadir funciones personalizadas](ordaClasses.md).
