---
id: glossary
title: Glosario
---

## Visión general de los principales conceptos

![](../assets/en/ORDA/mainConcepts.png)



## Atributo

Un atributo es la celda de almacenamiento más pequeña de una base de datos relacional (ver también [Atributo relacional](#relación-atributo)). No hay que confundir los atributos de la dataclass con los atributos de las entidades:

*   En un objeto dataclass, cada propiedad es un atributo de dataclass que se asigna a un campo correspondiente en la tabla correspondiente (mismo nombre y tipo).
*   En un objeto entity, los atributos de entidades son propiedades que contienen los valores para los atributos del almacén de datos correspondientes.
> Attributes and properties are similar concepts. "Atributo" se utiliza para designar las propiedades de la dataclass que almacena datos, mientras que "propiedad" es más genérico y define un dato almacenado dentro de un objeto.

## AttributePath

Un attributePath es la ruta de un atributo al interior de una determinada clase de datos o de una entidad. Ver también [PropertyPath](#propertyPath).


## Class code

Código para la(s) función(es) de clase usuarios.


## Atributo calculado

Un atributo calculado no almacena realmente información. En cambio, determina su valor basándose en otros valores de la misma entidad o de otras entidades, atributos o funciones. Cuando se hace referencia a un atributo calculado, se evalúa el "cálculo" subyacente para determinar el valor. Los atributos calculados pueden incluso asignarse a valores en los que el código definido por el usuario determina qué hacer durante la asignación.

## Data model class

Clase extendida disponible para un objeto del modelo de datos.

## Data model object

Objetos de base de datos disponibles a través del concepto ORDA, es decir, datastore, dataclasses, entities y entity selections.

## Data model function

Función de una clase de modelo de datos ORDA.

## Dataclass

Una dataclass es un modelo de objeto que describe los datos. Las tablas de la base de datos suministradas por el datastore se manejan mediante clases de datos. Cada tabla de la base de datos ofrecida por el almacén de datos tiene una clase de datos correspondiente con el mismo nombre. Cada campo de la tabla es un atributo de la dataclass.

Un dataclass está relacionado con un único datastore.


## DataClass class

Clase para los objetos dataclass específicos, en la que se pueden añadir funciones personalizadas.

## Datastore

Un dtastore es el objeto de interfaz suministrado por ORDA para referenciar una estructura y acceder a sus datos. La base de datos principal, devuelta por el comando `ds`, está disponible como datastore (el datastore principal).

Un datastore ofrece:

*   una conexión a la base de datos 4D
*   un conjunto de clases de datos para trabajar con la base de datos

La base puede ser una base local 4D (el datastore principal), o una base 4D Server expuesta como recurso REST (un datastore remoto).

Un datastore referencia solo a una base de datos. Sin embargo, es posible abrir varios datastores para acceder a varias bases.

## DataStore class

Clase para los objetos datastore, en la que puede agregar funciones personalizadas.


## DataStoreImplementation

Nombre interno de la clase genérica DataStore en el class store `4D`.

## Copia profunda

Una copia profunda (deep copy) duplica un objeto y todas las referencias que contiene. Tras una copia profunda, una colección copiada contiene elementos duplicados y, por tanto, nuevas referencias de todos los elementos originales. Ver también Copia superficial.

## ds

`ds` es el comando del lenguaje 4D que devuelve una referencia de objeto [datastore](dsMapping.md#datastore). Coincide con el datastore disponible en la base de datos principal 4D.

## Entity

Una entidad es un objeto que corresponde a un modelo de dataclass. Una entidad contiene los mismos atributos que la dataclass.

Una entidad puede verse como una instancia de la dataclass, como un registro de la tabla correspondiente a la dataclass en su datastore asociado. Sin embargo, una entidad también contiene los datos relacionados. La finalidad de la entidad es gestionar los datos (crear, actualizar, eliminar).

Para más información, consulte Entidades.

## Entity selection

Una selección de entidades es un objeto. Cuando se consulta el datastore, se devuelve una selección de entidades. Una selección de entidades es un conjunto de referencias a las entidades relacionadas con la dataclass.

Una selección de entidades contiene:

*   un conjunto de 0 a X referencias de entidades,
*   una propiedad length (siempre),
*   las propiedades queryPlan y queryPath (si se preguntan durante la consulta).

Una selección de entidades también puede estar vacía.


## Generic class

Clase integrada para los objetos ORDA tales como las entidades o las dataclasses. Las funciones y propiedades de las clases genéricas están disponibles automáticamente en las clases usuario extendidas, por ejemplo `EmployeeEntity`.


## Lazy loading

Dado que las entidades se gestionan como referencias, los datos sólo se cargan cuando es necesario, es decir, cuando se accede a ellos en el código o a través de los widgets de la interfaz. Este principio de optimización se denomina "lazy loading".

## Datastore principal

El objeto Datastore correspondiente a la base 4D abierta (autónoma o cliente/servidor). El datastore principal es devuelto por el comando ds.

## Método

Los objetos ORDA, como los datastores, dataclasses, entity selections y entities, definen las clases de objetos. Proporcionan los métodos específicos para interactuar directamente con ellos. Estos métodos también se llaman funciones miembros (member functions). Estos métodos se utilizan llamándolos sobre una instancia del objeto.

Por ejemplo, el método `query()` es una member function de dataclass. Si ha almacenado un objeto dataclass en la variable `$myClass`, puede escribir:

```code4d
$myClass.query("name = smith")
```

## Tipo de datos mixtos

En esta documentación, el tipo de datos "Mixto" se utiliza para designar los distintos tipos de valores que pueden almacenarse en los atributos de las clases de datos. Incluye:

*   number
*   text
*   null
*   boolean
*   date
*   object
*   collection
*   imagen(\*)

*(\*) el tipo Imagen no es soportado por los métodos estadísticos tales como* `entitySelection.max( )`.

## Bloqueo optimista

In "optimistic lock" mode, entities are not locked explicitly before updating them. Each entity has an internal stamp that is automatically incremented each time the entity is saved on disk. The entity.save( ) or entity.drop( ) methods will return an error if the stamp of the loaded entity (in memory) and the stamp of the entity on disk do not match, or if the entity has been dropped. El bloqueo optimista sólo está disponible en la implementación ORDA. Ver también " Bloqueo pesimista ".

## Bloqueo pesimista

A "pessimistic lock" means that an entity is locked prior to its being accessed, using the entity.lock( ) method. Other processes can neither update nor drop the entity until it is unlocked. El lenguaje 4D clásico sólo permite bloqueos pesimistas. Ver "Bloqueo optimista".

## Propiedad

Ver [Atributo](#attribute).
> > *Attributes* and *properties* are similar concepts. "Atributo" se utiliza para designar las propiedades de la dataclass que almacena datos, mientras que "propiedad" es más genérico y define un dato almacenado dentro de un objeto.

## PropertyPath

Un propertyPath es la ruta de acceso a una propiedad en un objeto dado. Si la propiedad está anidada en varios niveles, cada nivel estará separado por un punto (".").

## Regular class

Clase usuario no relacionada a un objeto ORDA.

## Related dataclass

Estas son dataclasses vinculadas por los atributos de relación.

## Atributo relacional

Relation attributes are used to conceptualize relations between dataclasses (many-to-one and one-to-many).

*   Many-to-one relation (dataclassA references an occurrence of dataclassB): a relation attribute is available in dataclassA and references one instance of dataclassB.
*   One-to-many relation (an occurence of dataclassB references several occurrences of dataclassA): a relation attribute is available in dataclassB and references several instances of dataclassA.

Una dataclass puede tener atributos de relación recursivos.

In an entity, the value of a relation attribute can be an entity or an entity selection.

## Related entities

A related entity can be seen as the instance of a relation attribute in a dataclass.

Entity selections may refer to related entities according to the relation attributes defined in the corresponding dataclasses.

## Remote datastore

A 4D database opened on a 4D or 4D Server (available through HTTP) and exposed as a REST resource. This database can be referenced locally as a Datastore from other workstations, where it is assigned a locaID. The remote datastore can be used through ORDA concepts (datastore, dataclass, entity selection...). Este uso se somete a un sistema de licencia.

## Session

When the 4D application connects to a Remote datastore, a session is created on the 4D Server (HTTP). Se genera una cookie de sesión y se asocia al identificador del datastore local.

Cada vez que se abre una nueva sesión, se utiliza una licencia. Cada vez que se cierra una sesión, se libera la licencia.

Las sesiones inactivas se cierran automáticamente después de un tiempo de espera. The default timeout is 48 hours, it can be set by the developer (it must be >= 60 minutes).

## Copia superficial (Shallow copy)

A shallow copy only duplicates the structure of elements, and keeps the same internal references. After a shallow copy, two collections will both share the individual elements. Ver también Copia profunda.

## Stamp

Utilizado en tecnología de bloqueo "optimista". All entities have an internal counter, the stamp, which is incremented each time the entity is saved. By automatically comparing stamps between an entity being saved and its version stored on disk, 4D can prevent concurrent modifications on the same entities.

## Atributo de almacenamiento

A storage attribute (sometimes referred to as a scalar attribute) is the most basic type of attribute in a datastore class and most directly corresponds to a field in a relational database. Un atributo de almacenamiento contiene un único valor para cada entidad de la clase.
