---
id: vp-export-to-object
title: VP Export to object
---

<!-- REF #_method_.VP Export to object.Syntax -->

**VP Export to object** ( _vpAreaName_ : Text {; _options_ : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Export to object.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| options    | Object | -> | Opciones de exportación                      |                  |
| Result     | Object | <- | Objeto 4D View Pro                           | <!-- END REF --> |

#### Descripción

El comando `VP Export to object` <!-- REF #_method_.VP Export to object. ummary --> devuelve el objeto 4D View Pro adjunto al área 4D View Pro _vpAreaName_<!-- END REF -->. Puede utilizar este comando, por ejemplo, para almacenar el área 4D View Pro en un campo objeto de la base de datos 4D.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro _options_, puede pasar las siguientes opciones de exportación, si es necesario:

| Propiedad            | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeFormatInfo    | Boolean | True (por defecto) para incluir la información del formato, en caso contrario false. La información de formato es útil en algunos casos, por ejemplo, para una exportación a SVG. Por otro lado, poner esta propiedad en False permite reducir el tiempo de exportación. |
| includeBindingSource | Boolean | True (por defecto) para exportar los valores del contexto de datos actual como valores de celda en el objeto exportado (los contextos de datos en sí no se exportan). False en caso contrario. El enlace de la celda siempre se exporta.              |

For more information on 4D View Pro objects, please refer to the [4D View Pro object](../configuring.md#4d-view-pro-object) paragraph.

#### Ejemplo 1

Quiere obtener la propiedad "version" del área 4D View Pro actual:

```4d
var $vpAreaObj : Object
var $vpVersion : Number
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```

#### Ejemplo 2

Desea exportar el área, excluyendo la información de formato:

```4d
var $vpObj : Object
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```

#### Ver también

[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP IMPORT FROM OBJECT](vp-import-from-object.md)
