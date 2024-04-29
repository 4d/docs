---
id: overview
title: ORDA
---

ORDA stands for **Object Relational Data Access**. Se trata de una tecnología avanzada que permite acceder tanto al modelo como a los datos de una base a través de objetos.

Relations are transparently included in the concept, in combination with [lazy loading](glossary.md#lazy-loading), to remove all the typical hassles of data selection or transfer from the developer.

With ORDA, data is accessed through an abstraction layer, the [datastore](dsMapping.md#datastore). Un datastore es un objeto que ofrece una interfaz al modelo de base de datos y a los datos a través de objetos y de clases. For example, a table is mapped to a [dataclass](dsMapping.md#dataclass) object, a field is an [attribute](dsMapping.md##attribute) of a dataclass, and records are accessed through [entities](dsMapping.md#entity) and [entity selections](dsMapping.md#entity-selection).

## ¿Por qué utilizar ORDA?

En lugar de representar la información como tablas, registros y campos, ORDA utiliza un enfoque alternativo que asigna con mayor precisión los datos a conceptos concretos.

Imagine la posibilidad de desnormalizar una estructura relacional sin que afectar la eficacia. Imagine que describe todo lo relativo a los objetos de su aplicación de tal forma que el uso de los datos se convierte en algo sencillo y directo y elimina la necesidad de comprender por completo la estructura relacional.

En el modelo de datos ORDA, una única clase de datos puede incorporar todos los elementos que componen una tabla de base de datos relacional tradicional, pero también puede incluir valores de entidades padres relacionadas y las referencias directas a las entidades y a las selecciones de entidades relacionadas.

Una petición devuelve una lista de entidades denominada selección de entidades, que cumple la función de un conjunto de líneas de una petición SQL. La diferencia es que cada entidad "sabe" cuál es su lugar en el modelo de datos y "comprende" su relación con las demás entidades. Esto significa que un desarrollador no necesita explicar en una petición cómo relacionar las distintas piezas de información, ni en una actualización cómo volver a escribir los valores modificados en la estructura relacional.

Además, los objetos ORDA, como las selecciones de entidades o las entidades, pueden vincularse fácilmente a los objetos de interfaz de usuario, como los list box o las variables. Combined with powerful features such as the `This` and `Form` commands, they allow the building modern and modular interfaces based upon objects and collections.

## ¿Cómo utilizar ORDA?

Fundamentalmente, ORDA gestiona objetos. En ORDA, todos los conceptos principales, incluido el propio datastore, están disponibles a través de objetos. In 4D, the datastore is automatically [mapped upon the 4D structure](dsMapping.md).

Los objetos en ORDA pueden manejarse como los objetos estándar 4D, pero se benefician automáticamente de propiedades y de métodos específicos.

Los objetos ORDA son creados e instanciados cuando es necesario por los métodos 4D (no necesitas crearlos). However, ORDA data model objects are associated with [classes where you can add custom functions](ordaClasses.md).
