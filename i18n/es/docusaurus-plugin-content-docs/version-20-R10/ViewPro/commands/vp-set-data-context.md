---
id: vp-set-data-context
title: VP SET DATA CONTEXT
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #_method_.VP SET DATA CONTEXT.Syntax -->

**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataObj* : Object {; *options* : Object } {; *sheet* : Integer} )<br/>**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataColl* : Collection ; {*options* : Object } {; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET DATA CONTEXT.Params -->

| Parámetros | Tipo       |    | Descripción                                      |                  |
| ---------- | ---------- | -- | ------------------------------------------------ | ---------------- |
| vpAreaName | Text       | -> | Nombre de objeto formulario área 4D View Pro     |                  |
| dataObj    | Object     | -> | Objeto datos a cargar en el contexto de datos    |                  |
| dataColl   | Collection | -> | Colección datos a cargar en el contexto de datos |                  |
| options    | Object     | -> | Opciones adicionales                             |                  |
| sheet      | Integer    | -> | Índice de la hoja                                | <!-- END REF --> |

## Descripción

El comando `VP SET DATA CONTEXT` <!-- REF #_method_.VP SET DATA CONTEXT.Summary -->define el contexto de datos de una hoja<!-- END REF -->. Un contexto de datos es un objeto o una colección vinculada a una hoja de cálculo, y cuyo contenido puede utilizarse para llenar automáticamente las celdas de la hoja, ya sea utilizando una opción de autogeneración o el método [VP SET BINDING PATH](vp-set-binding-path). Por otro lado, el comando [VP Get data context](vp-get-data-context.md) puede devolver un contexto que contenga modificaciones del usuario.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *dataObj* o *dataColl*, pase un objeto o una colección que contenga los datos a cargar en el contexto de datos. Las imágenes se convierten en esquemas URI de datos.

Para pasar un valor de tiempo en *dataObj* o *dataColl*, encapsúlelo en un objeto con las siguientes propiedades (ver [ejemplo 4](#ejemplo-4---date-and-time-syntax)):

| Propiedad | Tipo                                     | Descripción                                                                |
| --------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Null | Valor a poner en el contexto                                               |
| time      | Real                                     | Valor de tiempo (en segundos) para poner en el contexto |

En *options*, puede pasar un objeto que especifique las opciones adicionales. Las propiedades posibles son:

| Propiedad           | Tipo   | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| reset               | Object | True para restablecer el contenido de la hoja antes de cargar el nuevo contexto, False (por defecto) en caso contrario.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| autoGenerateColumns | Object | Sólo se utiliza cuando los datos son una colección. True (por defecto) para especificar que las columnas deben generarse automáticamente cuando se vincula el contexto de datos. In this case, the following rules apply: <ul><li>If *dataColl* is a collection of objects, attribute names are used as column titles (see example 2).</li><li>If *dataColl* contains subcollections of scalar values, each subcollection defines the values in a row (see example 3). La primera subcolección determina cuántas columnas se crean.</li></ul> |

En *sheet*, pase el índice de la hoja que recibirá el contexto de datos. Si no se pasa ningún índice, el contexto se aplica a la hoja actual.

Si exporta su documento a un objeto utilizando [VP Export to object](vp-export-to-object.md), o a un documento 4DVP utilizando [VP EXPORT DOCUMENT](vp-export-document.md), la opción `includeBindingSource` le permite copiar el contenido de los contextos actuales como valores de celda en el objeto o documento exportado. Para más detalles, consulte la descripción de esos métodos.

## Ejemplo

Pasa un objeto y vincula los datos del contexto a las celdas en la primera línea:

```4d
var $data : Object

$data:=New object

$data.firstName:="Freehafer"
$data.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $data)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

```

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

## Ejemplo 2

Pasa una colección de objetos y genera columnas automáticamente:

```4d
var $options : Object
var $data : Collection

$data:=New collection()
$data.push(New object("firstname"; "John"; "lastname"; "Smith"))
$data.push(New object("firstname"; "Mary"; "lastname"; "Poppins"))

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../../assets/en/ViewPro/vp-set-data-context-2.png)

## Ejemplo 3

*data* pasado como parámetro es una colección que contiene subcolecciones. Cada subcolección define el contenido de una línea:

```4d
var $data : Collection
var $options : Object

$data:=New collection
$data.push(New collection(1; 2; 3; False; ""))  // Se crean 5 columnas
$data.push(New collection)  // La segunda línea está vacía
$data.push(New collection(4; 5; Null; "hello"; "world"))  // La tercera línea tiene 5 valores
$data.push(New collection(6; 7; 8; 9))  // La cuarta línea tiene 4 valores

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../../assets/en/ViewPro/vp-set-data-context-3.png)

## Ejemplo 4 - Sintaxis de fecha y hora

```4d
var $data : Collection
var $options : Object

$data:= New collection()

// Las fechas pueden pasarse como valores escalares
$data.push(New collection("Date"; Current date)) 

// Los valores hora deben pasarse como atributos objeto
$data.push(New collection("Time"; New object("time"; 5140)))

// Ejemplo de fecha + hora
$data.push(New collection("Date + Time"; New object("value"; Current date; "time"; 5140))) 

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

Este es el resultado una vez que se generan las columnas:

![](../../assets/en/ViewPro/vp-set-data-context-date-time.png)

## Ver también

[VP SET BINDING PATH](vp-set-binding-path.md)<br/>
[VP Get binding path](vp-get-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)