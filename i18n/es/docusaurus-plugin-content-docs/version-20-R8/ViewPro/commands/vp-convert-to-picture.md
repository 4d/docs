---
id: vp-convert-to-picture
title: VP Convert to picture
---

<!-- REF #_method_.VP Convert to picture.Syntax -->

**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->

<!-- REF #_method_.VP Convert to picture.Params -->

| Parámetros | Tipo    |                             | Descripción                                         |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------- | ---------------- |
| vpObject   | Object  | ->                          | Objeto 4D View Pro que contiene el área a convertir |                  |
| rangeObj   | Object  | ->                          | Objeto rango                                        |                  |
| Result     | Picture | <- | Imagen SVG del área                                 | <!-- END REF --> |

#### Descripción

El comando `VP Convert to picture` <!-- REF #_method_.VP Convert to picture.Summary -->convierte el objeto *vpObject* de 4D View Pro (o el rango *rangeObj* dentro de *vpObject*) en una imagen SVG<!-- END REF -->.

Este comando es útil, por ejemplo:

- para integrar un documento de 4D View Pro en otro documento, como un documento de 4D Write Pro
- para imprimir un documento 4D View Pro sin tener que cargarlo en un área de 4D View Pro.

En *vpObject*, pase el objeto 4D View Pro a convertir. Este objeto debe haber sido analizado previamente utilizando [VP Export to object](vp-export-to-object.md) o guardado utilizando [VP EXPORT DOCUMENT](vp-export-document.md).

> El proceso de conversión a SVG requiere que las expresiones y formatos (ver [Formato de celdas](../configuring.md#cell-format)) incluidos en el área 4D View Pro se evalúen al menos una vez, para que puedan exportarse correctamente. Si convierte un documento que no ha sido evaluado previamente, las expresiones o los formatos pueden aparecer de forma inesperada.

En *rangeObj*, pase un rango de celdas a convertir. Por defecto, si se omite este parámetro, se convierte todo el contenido del documento.

El contenido del documento se convierte con respecto a sus atributos de visualización, incluidos los formatos (ver la nota anterior), la visibilidad de los encabezados, las columnas y las líneas. La conversión de los siguientes elementos es soportada:

- Texto: estilo / fuente / tamaño / alineación / orientación / rotación / formato
- Fondo de la celda : color / imagen
- Bordes de las celdas : grosor / color / estilo
- Fusión de celdas
- Imágenes
- Altura de líneas
- Ancho de columnas
- Columnas / líneas ocultas.

> La visibilidad de la línea de la rejilla depende del atributo del documento definido con [VP SET PRINT INFO](vp-set-print-info.md).

#### Resultado

El comando devuelve una imagen en formato SVG.

#### Ejemplo

Quiere convertir un área 4D View Pro en SVG, previsualizar el resultado y enviarlo a una variable imagen:

```4d
C_OBJECT($vpAreaObj)
C_PICTURE($vPict)
$vpAreaObj:=VP Export to object("ViewProArea")
$vPict:=VP Convert to picture($vpAreaObj) //exportar toda el área
```

#### Ver también

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP Export to object](vp-export-to-object.md)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
