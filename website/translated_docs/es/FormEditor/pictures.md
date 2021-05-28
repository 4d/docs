---
id: pictures
title: Imágenes
---

4D includes specific support for pictures used in your forms.


## Native Formats Supported

4D integra la gestión nativa de los formatos de imagen. Esto significa que las imágenes se mostrarán y almacenarán en su formato original, sin ninguna interpretación en 4D. Las especificidades de los diferentes formatos (sombreado, áreas transparentes, etc.) se mantendrán cuando se copien y peguen, y se mostrarán sin alteraciones. Este soporte nativo es válido para todas las imágenes almacenadas en los formularios de 4D: [imágenes estáticas](FormObjects/staticPicture.md) pegadas en el modo Diseño, imágenes pegadas en [objetos de entrada](FormObjects/input_overview.md) en ejecución, etc.

Los formatos de imagen más comunes son soportados en ambas plataformas: .jpeg, .gif, .png, .tiff, .bmp, etc. En macOS, el formato .pdf también está disponible para su codificación y descodificación.

> The full list of supported formats varies according to the operating system and the custom codecs that are installed on the machines. To find out which codecs are available, you must use the `PICTURE CODEC LIST` command (see also the [picture data type](Concepts/dt_picture.md) description).




### Unavailable picture format

Se muestra un icono específico para las imágenes guardadas en un formato que no está disponible en la máquina. La extensión del formato que falta se muestra en la parte inferior del icono:

![](assets/en/FormEditor/picNoFormat.png)

El icono se utiliza automáticamente en todos los lugares en los que se pretende visualizar la imagen:

![](assets/en/FormEditor/picNoFormat2.png)

Este icono indica que la imagen no puede ser visualizada o manipulada localmente, pero puede ser guardada sin alteraciones para que pueda ser visualizada en otras máquinas. Este es el caso, por ejemplo, para las imágenes PDF en Windows, o las imágenes en formato PICT.


## High Resolution Pictures

4D supports high resolution pictures on both macOS and Windows platforms. High resolution pictures can be defined by either scale factor or dpi.

### Scale factor (macOS only)

High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the *scale factor* (*i.e.*, two times larger, three times larger, etc.).

When using high resolution pictures, you can specify the scale factor by adding "@nx" in the picture's name (where *n* designates the scale factor). In the table below, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.

| Display Type        | Scale Factor                                   | Ejemplo                                                                  |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------ |
| Standard Resolution | 1:1 pixel density.                             | **1x**<br>![](assets/en/FormEditor/pictureScale1.png) *circle.png* |
| High Resolution     | Pixel density increased by a factor of 2 or 3. | <table><th>2x</th><th>3x</th><tr><td>![](assets/en/FormEditor/pictureScale2.png)*circle@2x.png*</td><td>![](assets/en/FormEditor/pictureScale3.png)<br>*circle@3x.png*</td></tr></table>                                                |



High resolution pictures with the @nx convention can be used in the following objects:

*   [Static pictures](FormObjects/staticPicture.md)
*   [Buttons](FormObjects/button_overview.md)/[radio](FormObjects/radio_overview.md)/[check boxes](FormObjects/checkbox_overview.md)
*   [Picture buttons](FormObjects/pictureButton_overview.md)/[Picture pop-ups](FormObjects/picturePopupMenu_overview.md)
*   [Tab controls](FormObjects/tabControl.md)
*   [List box headers](FormObjects/listbox_overview.md#list-box-headers)
*   [Menu icons](Menus/properties.md#item-icon)



4D automatically prioritizes pictures with the highest resolution. <br><br> **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D  automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).
> Note that resolution prioritization occurs only for displaying pictures onscreen, there is no automatic prioritization made when printing.



### DPI (macOS and Windows)

While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi*(\*)*, and picture format:

| Operation                                                                                                                                | Behavior                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Drop or Paste                                                                                                                            | If the picture has:<ul><li>**72dpi or 96dpi** - The picture is "[Center](FormObjects/properties_Picture.md#center--truncated-non-centered)" formatted and the object containing the picture has the same number of pixels.</li><li>**Other dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)</li> <li>**No dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted.</li> |
| [Automatic Size](https://doc.4d.com/4Dv18/4D/18/Setting-object-display-properties.300-4575725.en.html#148057) (Form Editor context menu) | If the picture's display format  is:<ul><li>**[Scaled](FormObjects/properties_Picture.md#scaled-to-fit)** - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) </li> <li>**Not scaled** - The object containing the picture has the same number of pixels as the picture.</li></ul><p>                                  |

*(\*) Typically,  macOS = 72dpi, Windows = 96dpi*


## Dark mode pictures (macOS only)

You can define specific pictures and icons to be used instead of standard pictures when [forms use the dark scheme](properties_FormProperties.md#color-scheme).

A dark mode picture is defined in the following way:

- dark mode picture has the same name as the standard (light scheme) version with the suffix "`_dark`"
- dark mode picture is stored next to the standard version.

At runtime, 4D will automatically load the light or dark image according to the [current form color scheme](https://doc.4d.com/4dv19/help/command/en/1761.html).

![](assets/en/FormEditor/darkicon.png)



## Mouse Coordinates in a Picture

4D permite recuperar las coordenadas locales del ratón en un [objeto de entrada](FormObjects/input_overview.md) asociado a una [expresión de imagen](FormObjects/properties_Object.md#expression-type), en caso de que se haga clic o se pase por encima, incluso si se ha aplicado un desplazamiento o zoom a la imagen. Este mecanismo, similar al de un mapa de imágenes, puede utilizarse, por ejemplo, para manejar barras de botones desplazables o la interfaz de un software de cartografía.

Las coordenadas se devuelven en las *MouseX* and *MouseY* [Variables Sistema](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html). The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). Si el ratón está fuera del sistema de coordenadas de la imagen, se devuelve -1 en *MouseX* y *MouseY*.

You can get the value of these variables as part of the [`On Clicked`](Events/onClicked.md), [`On Double Clicked`](Events/onDoubleClicked.md), [`On Mouse up`](Events/onMouseUp.md), [`On Mouse Enter`](Events/onMouseEnter.md), or [`On Mouse Move`](Events/onMouseMove.md) form events.
