---
id: pictures
title: Imágenes
---

## Formatos nativos soportados

4D integra la gestión nativa de los formatos de imagen. Esto significa que las imágenes se mostrarán y almacenarán en su formato original, sin ninguna interpretación en 4D. Las especificidades de los diferentes formatos (sombreado, áreas transparentes, etc.) se mantendrán cuando se copien y peguen, y se mostrarán sin alteraciones. Este soporte nativo es válido para todas las imágenes almacenadas en los formularios de 4D: [imágenes estáticas](FormObjects/staticPicture.md) pegadas en el modo Diseño, imágenes pegadas en [objetos de entrada](FormObjects/input_overview.md) en ejecución, etc.

Los formatos de imagen más comunes son soportados en ambas plataformas: .jpeg, .gif, .png, .tiff, .bmp, etc. En macOS, el formato .pdf también está disponible para su codificación y descodificación.

> La lista completa de formatos soportados varía según el sistema operativo y los códecs personalizados que estén instalados en las máquinas. Para saber qué códecs están disponibles, debe utilizar el comando `PICTURE CODEC LIST` (ver también la descripción de [tipo de datos imagen](Concepts/dt_picture.md)).

### Formato de imagen no disponible

Se muestra un icono específico para las imágenes guardadas en un formato que no está disponible en la máquina. La extensión del formato que falta se muestra en la parte inferior del icono:

![](../assets/en/FormEditor/picNoFormat.png)

El icono se utiliza automáticamente en todos los lugares en los que se pretende visualizar la imagen:

![](../assets/en/FormEditor/picNoFormat2.png)

Este icono indica que la imagen no puede ser visualizada o manipulada localmente, pero puede ser guardada sin alteraciones para que pueda ser visualizada en otras máquinas. Este es el caso, por ejemplo, para las imágenes PDF en Windows, o las imágenes en formato PICT.

## Coordenadas del ratón en una imagen

4D permite recuperar las coordenadas locales del ratón en un [objeto de entrada](FormObjects/input_overview.md) asociado a una [expresión de imagen](FormObjects/properties_Object.md#expression-type), en caso de que se haga clic o se pase por encima, incluso si se ha aplicado un desplazamiento o zoom a la imagen. Este mecanismo, similar al de un mapa de imágenes, puede utilizarse, por ejemplo, para manejar barras de botones desplazables o la interfaz de un software de cartografía.

Las coordenadas se devuelven en las *MouseX* and *MouseY* [Variables Sistema](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html). Las coordenadas se expresan en píxeles con respecto a la esquina superior izquierda de la imagen (0,0). Si el ratón está fuera del sistema de coordenadas de la imagen, se devuelve -1 en *MouseX* y *MouseY*.

Puede obtener el valor de estas variables como parte de los eventos formulario `On Clicked`, `On Double Clicked`, `On Mouse up`, `On Mouse Enter`, u `On Mouse Move`.
