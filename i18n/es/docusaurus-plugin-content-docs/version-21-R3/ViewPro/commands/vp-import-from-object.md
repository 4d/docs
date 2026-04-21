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

<div class="no-index">

| Parámetros | Tipo   |    | Descripción                                           |
| ---------- | ------ | -- | ----------------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro          |
| viewPro    | Object | -> | Objeto 4D View Pro                                    |
| paramObj   | Object | -> | (Opcional) opciones de importación |

</div>
<!-- END REF -->

## Descripción

El comando `VP IMPORT FROM OBJECT` <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->importa y muestra el objeto *viewPro* de 4D View Pro en el área *vpAreaName* de 4D View Pro<!-- END REF -->. El contenido del objeto importado sustituye todos los datos insertados en el área.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *viewPro*, pase un objeto 4D View Pro válido. Este objeto puede haber sido creado utilizando [VP Export to object](vp-export-to-object.md) o manualmente. Para más información sobre los objetos 4D View Pro, consulte la sección [Objeto 4D View Pro](../configuring.md#4d-view-pro-object).

Se devuelve un error si el objeto *viewPro* no es válido.

En *paramObj*, puede pasar la siguiente propiedad:

| Propiedad | Tipo                        | Descripción                                                                                                                                                                                                                                                                                                              |
| --------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| formula   | 4D.Function | (Opcional) Función de retrollamada a ser ejecutada cuando el objeto está cargado y todas las funciones personalizadas 4D han respondido. Ver [Pasar un método de retrollamada (fórmula)](vp-export-document.md#passing-a-callback-method-formula). |

Los siguientes parámetros se pueden utilizar en el método de retrollamada:

| Parámetros |                               | Tipo    | Descripción                                                                       |
| ---------- | ----------------------------- | ------- | --------------------------------------------------------------------------------- |
| param1     |                               | Text    | El nombre del objeto de área 4D View Pro                                          |
| param2     |                               | Text    | Reservado por compatibilidad, este parámetro está siempre vacío                   |
| param3     |                               | Object  | Referencia al parámetro *paramObj* del comando                                    |
| param4     |                               | Object  | Un objeto devuelto por el método con un mensaje de estado                         |
|            | .success      | Boolean | `True` si la importación se ha realizado correctamente, `False` en caso contrario |
|            | .errorCode    | Integer | Código de error                                                                   |
|            | .errorMessage | Text    | Mensaje de error                                                                  |

:::note

La función callback especificada en el atributo `formula` se activa después de que todas las [funciones personalizadas 4D](../formulas.md#4d-functions) dentro del contenido importado hayan completado sus cálculos. De este modo se garantiza que los procesos dependientes, como las modificaciones o exportaciones de documentos, solo se realicen una vez que se hayan resuelto por completo todos los cálculos basados en fórmulas.

:::

## Ejemplo

Desea importar una hoja de cálculo previamente guardada en un campo objeto, y activar una función de retrollamada después de que todas las funciones personalizadas 4D hayan respondido:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)

VP IMPORT FROM OBJECT("ViewProArea1"; [VPWorkBooks]SPBook; {formula: Formula(onImportComplete)})
```

```4d
// Método 'onImportComplete'
#DECLARE($name : Text; $path : Text; $paramObj : Object; $status : Object)
   ALERT("The document has been imported, and all custom functions have finished processing.")
```

## Ver también

[VP Export to object](vp-export-to-object.md)