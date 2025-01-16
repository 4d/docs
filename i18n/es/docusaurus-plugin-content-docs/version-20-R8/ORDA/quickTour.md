---
id: quickTour
title: Un recorrido rápido en ORDA
---

Dado que ORDA está basado en objetos, su uso requiere conocimientos básicos de programación de objetos.

## Explorar el datastore

El datastore ORDA se basa automáticamente en una estructura de base de datos 4D, siempre que cumpla los [requisitos previos de ORDA](overview.md#orda-prerequisites).

Este ejemplo utilizará la siguiente estructura de base de datos 4D simple:

![](../assets/en/ORDA/struc.png)

Para saber qué se expone como datastore, cree un nuevo método proyecto, escriba la siguiente línea:

```code4d
TRACE
```

Ejecute el método -- simplemente llama la ventana del depurador.
En el área de Expresión, haga doble clic para insertar una expresión e introduzca `ds`. Devuelve el objeto del datastore.
Despliegue el objeto, puede ver que las tablas y los campos son expuestos automáticamente por ORDA como propiedades del objeto `ds`:

![](../assets/en/ORDA/debug1.png)

Esto significa por ejemplo que, siempre que necesite hacer referencia al campo city de la tabla [Company], en ORDA sólo tendrá que escribir:

```code4d
ds.Company.city // devuelve el nombre de la ciudad
```

> En el mundo ORDA, ds.Company es una **dataclass**. ds.Company.city es un **atributo**.

> ORDA es sensible a las mayúsculas y minúsculas. `ds.company.city` no hará referencia al atributo ds.Company.city.

También habrá notado la propiedad extra `hires` en la dataclass ds.Company. No corresponde a un campo. `hires` es en realidad el nombre de la relación _Uno a muchos_ entre Company y Employee:

![](../assets/en/ORDA/struc2s.png)
_Name of the relation as defined in the Inspector_

Es decir, siempre que necesite acceder a la lista de empleados que trabajan en una empresa, en ORDA sólo tiene que escribir:

```code4d
ds.Company.hires //devuelve la lista de empleados
```

Pero no vaya tan rápido. Veamos ahora cómo registrar datos en las clases de datos ORDA.

## Añadir datos

En ORDA, puede añadir un registro a una dataclass utilizando el comando `new()`.

> En el mundo ORDA, un registro es una **entidad** -- una entidad es en sí misma un objeto. Un comando que se adjunta a un objeto específico se denomina **método miembro**.

```code4d
$entity:=ds.Company.new() //crear una nueva referencia de entidad
//en la dataclass Company  
//y asignar a la variable $entity
```

Un nuevo objeto entidad contiene una "copia" de todos los atributos de su dataclass padre, por lo que puede asignarles los valores:

```code4d
$entity.name:="ACME, inc."  
$entity.city:="London"  
//$entity.ID se llena automáticamente
```

Por el momento, la entidad sólo existe en la memoria. Para almacenarlo en el archivo de datos, es necesario guardarlo utilizando el método miembro `save()`:

```code4d
$status:=$entity.save()
```
