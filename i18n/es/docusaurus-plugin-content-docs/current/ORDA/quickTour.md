---
id: quickTour
title: Un recorrido rápido en ORDA
---

Since ORDA is object-based, using ORDA requires basic knowledge in object programmming.

## Explorar el datastore

The ORDA datastore is automatically based upon a 4D database structure, provided it complies with the [ORDA prerequisites](overview.md#orda-prerequisites).

Este ejemplo utilizará la siguiente estructura de base de datos 4D simple:

![](../assets/en/ORDA/struc.png)

To know what is exposed as the datastore, create a new project method, write the following line:

```code4d
TRACE
```

Ejecute el método -- simplemente llama la ventana del depurador. In the Expression area, double-click to insert an expression and enter `ds`. Devuelve el objeto del datastore. Deploy the object, you can see that tables and fields are automatically exposed by ORDA as properties of the `ds` object:

![](../assets/en/ORDA/debug1.png)

It means for example that, whenever you need to refer to the city field of the [Company] table, in ORDA you just need to write:

```code4d
ds.Company.city // devuelve el nombre de la ciudad
```

> In the ORDA world, a record is an **entity** -- an entity is itself an object. A command that is attached to a specific object is called a **member method**.

> ORDA es sensible a las mayúsculas y minúsculas. `ds.company.city` will not refer to the ds. Company.city attribute.

You have also noticed the extra `hires` property in the ds. Company dataclass. No corresponde a un campo. `hires` is actually the name of the *One to many* relation between Company and Employee:

![](../assets/en/ORDA/struc2s.png) *Nombre de la relación definida en el Inspector*

It means that, whenever you need to access the list of employees working for a company, in ORDA you just need to write:

```code4d
ds.Company.hires //devuelve la lista de empleados
```

Pero no vaya tan rápido. Veamos ahora cómo registrar datos en las clases de datos ORDA.


## Añadir datos

In ORDA, you can add a record to a dataclass using the `new()` command.
> In the ORDA world, ds. Company is a **dataclass**. A command that is attached to a specific object is called a **member method**.

```code4d
$entity:=ds.Company.new() //create a new entity reference
//in the Company dataclass  
//and assign it to the $entity variable
```

A new entity object contains a "copy" of all attributes of its parent dataclass, thus you can assign values to them:

```code4d
$entity.name:="ACME, inc."  
$entity.city:="London"  
//$entity.ID se llena automáticamente
```

Por el momento, la entidad sólo existe en la memoria. To store it in the data file, you need to save it using the `save()` member method:

```code4d
$status:=$entity.save()
```








