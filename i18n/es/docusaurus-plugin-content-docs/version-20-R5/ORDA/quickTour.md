---
id: quickTour
title: Un recorrido rápido en ORDA
---

Dado que ORDA está basado en objetos, su uso requiere conocimientos básicos de programación de objetos.

## Explorar el datastore

The ORDA datastore is automatically based upon a 4D database structure, provided it complies with the [ORDA prerequisites](overview.md#orda-prerequisites).

Este ejemplo utilizará la siguiente estructura de base de datos 4D simple:

![](../assets/en/ORDA/struc.png)

Para saber qué se expone como datastore, cree un nuevo método proyecto, escriba la siguiente línea:

```code4d
TRACE
```

Ejecute el método -- simplemente llama la ventana del depurador.
In the Expression area, double-click to insert an expression and enter `ds`. Devuelve el objeto del datastore.
Deploy the object, you can see that tables and fields are automatically exposed by ORDA as properties of the `ds` object:

![](../assets/en/ORDA/debug1.png)

Esto significa por ejemplo que, siempre que necesite hacer referencia al campo city de la tabla [Company], en ORDA sólo tendrá que escribir:

```code4d
ds.Company.city // devuelve el nombre de la ciudad
```

> In the ORDA world, ds.Company is a **dataclass**. ds.Company.city is an **attribute**.

> ORDA es sensible a las mayúsculas y minúsculas. `ds.company.city` will not refer to the ds.Company.city attribute.

You have also noticed the extra `hires` property in the ds.Company dataclass. No corresponde a un campo. `hires` is actually the name of the _One to many_ relation between Company and Employee:

![](../assets/en/ORDA/struc2s.png)
_Name of the relation as defined in the Inspector_

Es decir, siempre que necesite acceder a la lista de empleados que trabajan en una empresa, en ORDA sólo tiene que escribir:

```code4d
ds.Company.hires //devuelve la lista de empleados
```

Pero no vaya tan rápido. Veamos ahora cómo registrar datos en las clases de datos ORDA.

## Añadir datos

In ORDA, you can add a record to a dataclass using the `new()` command.

> In the ORDA world, a record is an **entity** -- an entity is itself an object. A command that is attached to a specific object is called a **member method**.

```code4d
$entity:=ds.Company.new() //crear una nueva referencia de entidad
//en la dataclass Company  
//y asignar a la variable $entity
```

Un nuevo objeto entidad contiene una "copia" de todos los atributos de su dataclass padre, por lo que puede asignarles los valores:

```code4d
$entity.name:="ACME, inc."  
$entity.city:="London"  
//$entity.ID is automatically filled
```

Por el momento, la entidad sólo existe en la memoria. To store it in the data file, you need to save it using the `save()` member method:

```code4d
$status:=$entity.save()
```
