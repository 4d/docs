---
id: vp-convert-from-4d-view
title: VP Convert from 4D View
---

<!-- REF #_method_.VP Convert from 4D View.Syntax -->

**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->

<!-- REF #_method_.VP Convert from 4D View.Params -->

| Parámetros     | Tipo   |                             | Descripción                        |
| -------------- | ------ | --------------------------- | ---------------------------------- |
| 4DViewDocument | Blob   | ->                          | Documento 4D View                  |
| Result         | Object | <- | Objeto 4D View Pro<!-- END REF --> |

#### Descripción

El comando `VP Convert from 4D View` <!-- REF #_method_.VP Convert from 4D View.Summary -->permite convertir un documento heredado de 4D View en un objeto 4D View Pro<!-- END REF -->.

> Este comando no requiere que el plug-in 4D View esté instalado en su entorno.

En el parámetro *4DViewDocument*, pase una variable o un campo BLOB que contenga el documento 4D View a convertir. El comando devuelve un objeto 4D View Pro en el que toda la información almacenada originalmente en el documento 4D View se convierte en atributos 4D View Pro.

#### Ejemplo

Quiere obtener un objeto 4D View Pro a partir de un área 4D View almacenada en un BLOB:

```4d
C_OBJECT($vpObj)
$vpObj:=VP Convert from 4D View($pvblob)
```
