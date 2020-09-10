---
id: pictures
title: Pictures
---

## Native Unterstützung von Formaten

4D enthält die native Verwaltung von Bildformaten, d. h. die Bilder werden in ihrem Originalformat angezeigt und gespeichert, ohne jegliche Interpretation durch 4D. Die spezifischen Merkmale der verschiedenen Formate, wie Schatten, transparente Bereiche, o. ä. werden beim Kopieren und Einsetzen beibehalten und ohne Veränderung angezeigt. Die native Verwaltung gilt für alle in 4D Formularen gespeicherten Bilder: [statische Bilder](FormObjects/staticPicture.md), die in den Designmodus übertragen wurden, Bilder, die im Anwendungsmodus in [Eingabeobjekte](FormObjects/input_overview.md) eingefügt wurden, etc.

Die gängigsten Bildformate werden auf beiden Plattformen unterstützt: .jpeg, .gif, .png, .tiff, .bmp, etc. Auf macOS ist auch das Format .pdf zum Codieren und Decodieren verfügbar.

> Die unterstützten Formate variieren unter Windows und auf macOS je nach Betriebssystem und den eigenen Codecs, die auf den Rechnern installiert sind. Um herauszufinden, welche Codecs verfügbar sind, müssen Sie den Befehl `PICTURE CODEC LIST` verwenden (siehe auch unter [Bild Codec Kennung](Concepts/dt_picture.md)).




### Nicht verfügbares Bildformat

Für Bildformate, die auf dem verwendeten Rechner nicht verfügbar sind, erscheint ein spezifischer Icon. Die Endung des fehlenden Bildformats wird darunter angezeigt:

![](assets/en/FormEditor/picNoFormat.png)

Dieser Icon erscheint automatisch beim Anzeigen der betroffenen Bilder:

![](assets/en/FormEditor/picNoFormat2.png)

Es gibt an, dass das Bild nicht angezeigt bzw. konvertiert werden kann -- es lässt sich aber speichern und ggf. auf anderen Rechnern anzeigen. Das ist z. B. bei PDF Bildern auf Windows oder Bildern im PICT-Format der Fall.


## High Resolution Pictures

4D supports high resolution pictures on both macOS and Windows platforms. High resolution pictures can be defined by either scale factor or dpi.

### Scale factor (macOS only)

High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the *scale factor* (*i.e.*, two times larger, three times larger, etc.).

When using high resolution pictures, you can specify the scale factor by adding "@nx" in the picture's name (where *n* designates the scale factor). In the table below, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.

| Display Type        | Scale Factor                                   | Beispiel                                                                 |
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



### DPI (macOs and Windows)

While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi*(\*)*, and picture format:

| Operation                                                                                                                                | Behavior                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Drop or Paste                                                                                                                            | If the picture has:<ul><li>**72dpi or 96dpi** - The picture is "[Center](FormObjects/properties_Picture.md#center--truncated-non-centered)" formatted and the object containing the picture has the same number of pixels.</li><li>**Other dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)</li> <li>**No dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted.</li> |
| [Automatic Size](https://doc.4d.com/4Dv18/4D/18/Setting-object-display-properties.300-4575725.en.html#148057) (Form Editor context menu) | If the picture's display format  is:<ul><li>**[Scaled](FormObjects/properties_Picture.md#scaled-to-fit)** - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) </li> <li>**Not scaled** - The object containing the picture has the same number of pixels as the picture.</li></ul><p>                                  |

*(\*) Typically,  macOS = 72dpi, Windows = 96dpi*





## Mauskoordinaten für Klicks auf ein Bild

4D ermöglicht, die lokalen Koordinaten eines Klicks oder Darüberziehen mit der Maus auf ein [Eingabeobjekt](FormObjects/input_overview.md) mit einem [Bildausdruck](FormObjects/properties_Object.md#expression-type) herauszufinden, auch wenn das Bild gescrollt oder gezoomt wurde. Dieser Vorgang ist ähnlich wie bei einem Bildmapping und lässt sich für scrollbare Schaltflächenleisten oder die Oberfläche bei kartografischer Software verwenden.

Die Koordinaten werden in den [Systemvariablen](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html) *MouseX* und *MouseY* zurückgegeben. Sie werden in Pixel angegeben, ausgehend von der oberen linken Ecke des Bildes (0,0). Ist die Maus außerhalb des Bildkoordinatensystems, wird -1 in *MouseX* und *MouseY* zurückgegeben.

Sie können den Wert dieser Variablen als Teil der Formularereignisse [`On Clicked`](Events/onClicked.md), [`On Double Clicked`](Events/onDoubleClicked.md), [`On Mouse up`](Events/onMouseUp.md), [`On Mouse Enter`](Events/onMouseEnter.md) oder [`On Mouse Move`](Events/onMouseMove.md) erhalten.
