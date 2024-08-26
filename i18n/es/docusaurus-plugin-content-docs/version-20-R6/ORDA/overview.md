---
id: overview
title: ORDA
---

ORDA significa **Object Relational Data Access**. Se trata de una tecnología avanzada que permite acceder tanto al modelo como a los datos de una base a través de objetos.

Las relaciones se incluyen de forma transparente en el concepto, en combinación con el principio del [lazy loading](glossary.md#lazy-loading), para eliminar todas las molestias típicas de la selección o la transferencia de datos del desarrollador.

Con ORDA, se accede a los datos a través de una capa de abstracción, el [datastore](dsMapping.md#datastore). Un datastore es un objeto que ofrece una interfaz al modelo de base de datos y a los datos a través de objetos y de clases. Por ejemplo, una tabla corresponde a un objeto [dataclass](dsMapping.md#dataclass), un campo es un [atributo](dsMapping.md##attribute) de una dataclass, y se accede a los registros a través de [entidades](dsMapping.md#entity) y [entity selections](dsMapping.md#entity-selection).

## ¿Por qué utilizar ORDA?

En lugar de representar la información como tablas, registros y campos, ORDA utiliza un enfoque alternativo que asigna con mayor precisión los datos a conceptos concretos.

Imagine la posibilidad de desnormalizar una estructura relacional sin que afectar la eficacia. Imagine que describe todo lo relativo a los objetos de su aplicación de tal forma que el uso de los datos se convierte en algo sencillo y directo y elimina la necesidad de comprender por completo la estructura relacional.

En el modelo de datos ORDA, una única clase de datos puede incorporar todos los elementos que componen una tabla de base de datos relacional tradicional, pero también puede incluir valores de entidades padres relacionadas y las referencias directas a las entidades y a las selecciones de entidades relacionadas.

Una petición devuelve una lista de entidades denominada selección de entidades, que cumple la función de un conjunto de líneas de una petición SQL. La diferencia es que cada entidad "sabe" cuál es su lugar en el modelo de datos y "comprende" su relación con las demás entidades. Esto significa que un desarrollador no necesita explicar en una petición cómo relacionar las distintas piezas de información, ni en una actualización cómo volver a escribir los valores modificados en la estructura relacional.

Además, los objetos ORDA, como las selecciones de entidades o las entidades, pueden vincularse fácilmente a los objetos de interfaz de usuario, como los list box o las variables. Combinadas con las funcionalidades poderosas tales como los comandos `This` y `Form`, permiten construir interfaces modernas y modulares basadas en objetos y colecciones.

## ¿Cómo utilizar ORDA?

Fundamentalmente, ORDA gestiona objetos. En ORDA, todos los conceptos principales, incluido el propio datastore, están disponibles a través de objetos. En 4D, el datastore es automáticamente [mapeado sobre la estructura 4D](dsMapping.md).

Los objetos en ORDA pueden manejarse como los objetos estándar 4D, pero se benefician automáticamente de propiedades y de métodos específicos.

Los objetos ORDA son creados e instanciados cuando es necesario por los métodos 4D (no necesitas crearlos). Sin embargo, los objetos del modelo de datos ORDA están asociados a las [clases en las que se pueden añadir funciones personalizadas](ordaClasses.md).
