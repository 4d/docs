---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                   |
| ----------- | -------------------------------- |
| 20 R9       | Soporte del parámetro *paramObj* |

</details>

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object { ; *paramObj* : Object} } ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| Parámetros | Tipo   |    | Descripción                                           |
| ---------- | ------ | -- | ----------------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro          |
| viewPro    | Object | -> | Objeto 4D View Pro                                    |
| paramObj   | Object | -> | (Opcional) opciones de importación |

<!-- END REF -->

## Descripción

El comando `VP IMPORT FROM OBJECT` <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->importa y muestra el objeto *viewPro* de 4D View Pro en el área *vpAreaName* de 4D View Pro<!-- END REF -->. El contenido del objeto importado sustituye todos los datos insertados en el área.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *viewPro*, pase un objeto 4D View Pro válido. Este objeto puede haber sido creado utilizando [VP Export to object](vp-export-to-object.md) o manualmente. Para más información sobre los objetos 4D View Pro, consulte la sección [Objeto 4D View Pro](../configuring.md#4d-view-pro-object).

Se devuelve un error si el objeto *viewPro* no es válido.

In *paramObj*, you can pass the following property:

| Propiedad | Tipo                        | Descripción                                                                                                                                                                                                                                                                                       |
| --------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula   | 4D.Function | (Optional) Callback function to be executed when the object is loaded and all 4D custom functions have responded. Ver [Pasar un método de retrollamada (fórmula)](vp-export-document.md#passing-a-callback-method-formula). |

Los siguientes parámetros se pueden utilizar en el método de retrollamada:

| Parámetros |                               | Tipo    | Descripción                                                |
| ---------- | ----------------------------- | ------- | ---------------------------------------------------------- |
| param1     |                               | Text    | El nombre del objeto de área 4D View Pro                   |
| param2     |                               | Text    | Reserved for compatibility, this parameter is always empty |
| param3     |                               | Object  | Referencia al parámetro *paramObj* del comando             |
| param4     |                               | Object  | Un objeto devuelto por el método con un mensaje de estado  |
|            | .success      | Boolean | `True` if import was successful, `False` otherwise         |
|            | .errorCode    | Integer | Código de error                                            |
|            | .errorMessage | Text    | Mensaje de error                                           |

:::note

The callback function specified in the `formula` attribute is triggered after all [4D custom functions](../formulas.md#4d-functions) within the imported content have completed their calculations. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved.

:::

## Ejemplo

You want to import a spreadsheet that was previously saved in an object field, and trigger a callback function after all 4D custom functions have responded:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)

VP IMPORT FROM OBJECT("ViewProArea1"; [VPWorkBooks]SPBook; {formula: Formula(onImportComplete)})
```

```4d
// Method 'onImportComplete'
#DECLARE($name : Text; $path : Text; $paramObj : Object; $status : Object)
   ALERT("The document has been imported, and all custom functions have finished processing.")
```

## Ver también

[VP Export to object](vp-export-to-object.md)