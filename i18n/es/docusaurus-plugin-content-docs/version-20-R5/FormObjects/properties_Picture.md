---
id: propertiesPicture
title: Picture
---

## Ruta de acceso

Pathname of a static source picture for a [picture button](pictureButton_overview.md), [picture pop-up Menu](picturePopupMenu_overview.md), or [static picture](staticPicture.md). Debe utilizar la sintaxis POSIX.

Las siguientes ubicaciones pueden utilizarse para las imágenes estáticas:

- in the **Resources** folder of the project. Apropiado cuando se desea compartir imágenes estáticas entre varios formularios en el proyecto. In this case, the Pathname is "/RESOURCES/\<picture path\>".
- in an image folder (e.g. named **Images**) within the form folder. Apropiado cuando las imágenes estáticas se utilizan sólo en el formulario y/o se quiere poder mover o duplicar todo el formulario dentro del proyecto o de diferentes proyectos. In this case, the Pathname is "\<picture path\>" and is resolved from the root of the form folder.
- en una variable imagen 4D. La imagen debe cargarse en la memoria cuando se ejecuta el formulario. En este caso, el nombre de la ruta es "var:\<variableName\>".

#### Gramática JSON

|  Nombre | Tipos de datos | Valores posibles                                                                                                                   |
| :-----: | :------------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| picture |      text      | Ruta relativa o del sistema de archivos en sintaxis POSIX, o "var:\<variableName\>" para una variable tipo imagen |

#### Objetos soportados

[Picture button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Static Picture](staticPicture.md)

---

## Visualización

### A escala para ajustarse

`Gramática JSON: "scaled"`

The **Scaled to fit** format causes 4D to resize the picture to fit the dimensions of the area.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Replicado

`Gramática JSON: "tiled"`

When the area that contains a picture with the **Replicated** format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

Si el campo se reduce a un tamaño menor que el de la imagen original, la imagen queda truncada (no centrada).

### Centrado / Truncado (no centrado)

`Gramática JSON: "truncatedCenter" / "truncatedTopLeft"`

The **Center** format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 4D recorta por igual desde cada borde y desde la parte superior e inferior.

The **Truncated (non-centered)** format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. 4D corta desde la derecha y desde abajo.

> When the picture format is **Truncated (non-centered)**, it is possible to add scroll bars to the input area.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                         |
| ------------- | -------------- | -------------------------------------------------------- |
| pictureFormat | string         | "scaled", "tiled", "truncatedCenter", "truncatedTopLeft" |

#### Objetos soportados

[Static Picture](staticPicture.md)
