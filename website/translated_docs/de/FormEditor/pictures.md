---
id: pictures
title: Bilder
---

4D bietet gezielte Unterstützung für Bilder in Ihren Formularen.


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


## Hochauflösende Bilder

4D unterstützt hochauflösende Bilder auf den beiden Plattformen Windows und macOS. Sie lassen sich über den Skalierungsfaktor oder dpi definieren.

### Skalierungsfaktor (nur macOS)

Hochauflösende Anzeigen haben eine höhere Pixeldichte als herkömmliche Standardanzeigen. Damit Bilder auf hochauflösenden Anzeigen korrekt dargestellt werden, muss die Anzahl der Pixel im Bild mit dem *Skalierungsfaktor* multipliziert werden (*d.h.*, zwei Mal größer, drei Mal größer usw.).

When using high resolution pictures, you can specify the scale factor by adding "@nx" in the picture's name (where *n* designates the scale factor). In der Tabelle unten sehen Sie, dass der Skalierungsfaktor in den Namen der hochauflösenden Bilder, *circle@2x.png* und *circle@3x.png*, angegeben ist.

| Anzeigetyp        | Skalierungsfaktor                          | Beispiel                                                                 |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------------------ |
| Standardauflösung | 1:1 Pixel Dichte                           | **1x**<br>![](assets/en/FormEditor/pictureScale1.png) *circle.png* |
| Hohe Auflösung    | Um den Faktor 2 oder 3 erhöhte Pixeldichte | <table><th>2x</th><th>3x</th><tr><td>![](assets/en/FormEditor/pictureScale2.png)*circle@2x.png*</td><td>![](assets/en/FormEditor/pictureScale3.png)<br>*circle@3x.png*</td></tr></table>                                                |



Hochauflösende Bilder mit der @nx-Konvention lassen sich in folgenden Objekten verwenden:

*   [Static pictures](FormObjects/staticPicture.md)
*   [Buttons](FormObjects/button_overview.md)/[radio](FormObjects/radio_overview.md)/[check boxes](FormObjects/checkbox_overview.md)
*   [Picture buttons](FormObjects/pictureButton_overview.md)/[Picture pop-ups](FormObjects/picturePopupMenu_overview.md)
*   [Tab controls](FormObjects/tabControl.md)
*   [List box headers](FormObjects/listbox_overview.md#list-box-headers)
*   [Menu icons](Menus/properties.md#item-icon)



4D priorisiert automatisch die Bilder mit der höchsten Auflösung. <br><br> **Beispiel**: Wenn Sie zwei Bildschirme verwenden (ein hochauflösendes Display, ein Standard-Display) und Sie ein Formular von einem Bildschirm auf den anderen verschieben, rendert 4D automatisch die höchstmögliche Auflösung des Bildes. Selbst wenn ein Befehl oder eine Eigenschaft *circle.png* angibt, wird *circle@3x.png* verwendet (wenn es existiert).
> Beachten Sie, dass die Priorisierung der Auflösung nur für die Anzeige von Bildern auf dem Bildschirm erfolgt, beim Drucken wird keine automatische Priorisierung vorgenommen.



### DPI (macOS und Windows)

While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi*(\*)*, and picture format:

| Operation                                                                                                                                | Verhalten                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Drop or Paste                                                                                                                            | Hat das Bild:<ul><li>**72dpi oder 96dpi** - Das Bild ist "[Center](FormObjects/properties_Picture.md#center--truncated-non-centered)" formatiert und das Objekt, das das Bild enthält, hat die gleiche Anzahl von Pixel.</li><li>**Other dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)</li> <li>**No dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted.</li> |
| [Automatic Size](https://doc.4d.com/4Dv18/4D/18/Setting-object-display-properties.300-4575725.en.html#148057) (Form Editor context menu) | If the picture's display format  is:<ul><li>**[Scaled](FormObjects/properties_Picture.md#scaled-to-fit)** - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) </li> <li>**Not scaled** - The object containing the picture has the same number of pixels as the picture.</li></ul><p>                            |

*(\*) Typically,  macOS = 72dpi, Windows = 96dpi*





## Mauskoordinaten für Klicks auf ein Bild

4D ermöglicht, die lokalen Koordinaten eines Klicks oder Darüberziehen mit der Maus auf ein [Eingabeobjekt](FormObjects/input_overview.md) mit einem [Bildausdruck](FormObjects/properties_Object.md#expression-type) herauszufinden, auch wenn das Bild gescrollt oder gezoomt wurde. Dieser Vorgang ist ähnlich wie bei einem Bildmapping und lässt sich für scrollbare Schaltflächenleisten oder die Oberfläche bei kartografischer Software verwenden.

Die Koordinaten werden in den [Systemvariablen](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html) *MouseX* und *MouseY* zurückgegeben. Sie werden in Pixel angegeben, ausgehend von der oberen linken Ecke des Bildes (0,0). Ist die Maus außerhalb des Bildkoordinatensystems, wird -1 in *MouseX* und *MouseY* zurückgegeben.

Sie können den Wert dieser Variablen als Teil der Formularereignisse [`On Clicked`](Events/onClicked.md), [`On Double Clicked`](Events/onDoubleClicked.md), [`On Mouse up`](Events/onMouseUp.md), [`On Mouse Enter`](Events/onMouseEnter.md) oder [`On Mouse Move`](Events/onMouseMove.md) erhalten.
