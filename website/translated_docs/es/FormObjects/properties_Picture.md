---
id: propertiesPicture
title: Imagen
---

---
## Ruta de acceso

Ruta de una imagen source estática para un [botón imagen](pictureButton_overview.md), [menú emergente de imagen](picturePopupMenu_overview.md), o [imagen estática](staticPicture.md). Debe utilizar la sintaxis POSIX.

Se pueden utilizar dos ubicaciones principales para la trayectoria de la imagen estática:

- en la carpeta **Resources** de la base proyecto. Apropiado cuando se desea compartir imágenes estáticas entre varios formularios de la base de datos. En este caso, el nombre de la ruta es "/RESOURCES/\<picture path\>".
- en una carpeta de imágenes (por ejemplo, llamada **Images**) dentro de la carpeta del formulario. Apropiado cuando las imágenes estáticas se utilizan sólo en el formulario y/o se quiere poder mover o duplicar todo el formulario dentro del proyecto o de diferentes proyectos. En este caso, el nombre de la ruta es ""\<picture path\>" y se resuelve desde la raíz de la carpeta del formulario.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                             |
|:------:|:--------------:| -------------------------------------------- |
| imagen |     texto      | Ruta relativa o filesystem en sintaxis POSIX |


#### Objetos soportados

[Botón imagen](pictureButton_overview.md) - [Menú emergente imagen](picturePopupMenu_overview.md) - [Imagen estática](staticPicture.md)


---
## Visualización


### A escala para ajustarse

`Gramática JSON: "scaled"`

The **Scaled to fit** format causes 4D to resize the picture to fit the dimensions of the area.

![](assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Replicado

`Gramática JSON: "tiled"`

When the area that contains a picture with the **Replicated** format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.

![](assets/en/FormObjects/property_pictureFormat_Replicated.png)

If the field is reduced to a size smaller than that of the original picture, the picture is truncated (non-centered).



### Centrado / Truncado (no centrado)

`JSON grammar: "truncatedCenter" / "truncatedTopLeft"`

El formato **Centro** hace que 4D centre la imagen en el área y recorte cualquier parte que no quepa dentro del área. 4D crops equally from each edge and from the top and bottom.

The **Truncated (non-centered)** format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. 4D crops from the right and bottom.
> When the picture format is **Truncated (non-centered)**, it is possible to add scroll bars to the input area.

![](assets/en/FormObjects/property_pictureFormat_Truncated.png)


#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                         |
| ------------- | -------------- | -------------------------------------------------------- |
| pictureFormat | cadena         | "scaled", "tiled", "truncatedCenter", "truncatedTopLeft" |

#### Objetos soportados

[Imagen estática](staticPicture.md)
