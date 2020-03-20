---
id: version-18R2_BETA-pictures
title: Pictures
original_id: pictures
---

## Native Unterstützung von Formaten

4D enthält die native Verwaltung von Bildformaten, d. h. die Bilder werden in ihrem Originalformat angezeigt und gespeichert, ohne jegliche Interpretation durch 4D. Die spezifischen Merkmale der verschiedenen Formate, wie Schatten, transparente Bereiche, o. ä. werden beim Kopieren und Einsetzen beibehalten und ohne Veränderung angezeigt. Die native Verwaltung gilt für alle in 4D gespeicherten Bilder: Bilder aus der Objektbibliothek, im Designmodus in Formulare eingefügte Bilder, im Anwendungsmodus in Datenfelder oder Variablen eingefügte Bilder, etc.

4D verwendet native APIs, um Felder und Variablen vom Typ Bild unter Windows und auf macOS zu codieren (schreiben) bzw. decodieren (lesen). Dies bietet Zugriff auf zahlreiche native Formate, inkl. RAW, dem gängigen Format für Digitalkameras.

* Windows, 4D uses WIC (Windows Imaging Component). 
* macOS, 4D uses ImageIO.

Die gängigsten Bildformate werden auf beiden Plattformen unterstützt: jpeg, gif, png, tiff, bmp, etc. Auf macOS ist auch das Format pdf zum Codieren und Decodieren verfügbar.

Die unterstützten Formate variieren unter Windows und auf macOS je nach Betriebssystem und den eigenen Codecs, die auf den Rechnern installiert sind. To find out which codecs are available, you must use the PICTURE CODEC LIST command. Beachten Sie, dass die Liste der verfügbaren Codecs zum Lesen und Schreiben unterschiedlich sein können, da für Codecs zum Codieren u. U. spezifische Lizenzen erforderlich sind.

> WIC and ImageIO permit the use of metadata in pictures. Two commands, SET PICTURE METADATA and GET PICTURE METADATA, let you benefit from metadata in your developments.

### Bild Codec Kennung

Picture formats recognized by 4D are returned by the PICTURE CODEC LIST command as picture Codec IDs. Es gibt folgende Formen:

* Als Endung (zum Beispiel “.gif”)
* Als Mime Typ (zum Beispiel “image/jpeg”)

Die vom Befehl zurückgegebene Form richtet sich nach der Art, wie der Codec auf Ebene des Betriebssystems gespeichert ist.

Die meisten 4D Befehle zur Bildverwaltung können eine Codec Kennung als Parameter empfangen. It is therefore imperative to use the system ID returned by the PICTURE CODEC LIST command.

### Nicht verfügbares Bildformat

Für Bildformate, die auf dem verwendeten Rechner nicht verfügbar sind, erscheint ein spezifischer Icon. The extension of the missing format is shown at the bottom of the icon:

![](assets/en/Project/picNoFormat.png)

Dieser Icon erscheint automatisch beim Anzeigen der betroffenen Bilder:

![](assets/en/Project/picNoFormat2.png)

Es gibt an, dass das Bild nicht angezeigt bzw. konvertiert werden kann -- es lässt sich aber speichern und ggf. auf anderen Rechnern anzeigen. This is the case, for instance, for PDF pictures on Windows, or for PICT format pictures.

## Picture Resolution

4D supports both standard and high resolution displays on both macOS and Windows platforms.

High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the *scale factor* (*i.e.*, two times larger, three times larger, etc.).

The following table demonstrates the difference between display resolution and picture pixel density.

| Display Type        | Scale Factor                                   | Beispiel                                                         |
| ------------------- | ---------------------------------------------- | ---------------------------------------------------------------- |
| Standard Resolution | 1:1 pixel density.                             | **1x**  
![](assets/en/Project/pictureScale1.png)  
*circle.png* |
| High Resolution     | Pixel density increased by a factor of 2 or 3. |                                                                  |


<table>
  <th>
    2x
  </th>
  
  <th>
    3x
  </th>
  
  <tr>
    <td>
      ![](assets/en/Project/pictureScale2.png)<br />*circle@2x.png*
    </td>
    
    <td>
      ![](assets/en/Project/pictureScale3.png)<br />*circle@3x.png*
    </td>
  </tr>
</table>

When using high resolution pictures, the scale factor is specified by adding "@nx" in the picture's name (*n* designates the scale factor). In the table above, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.

> 4D automatically prioritizes pictures with the highest resolution. <br />  
> **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).

This resolution behavior is supported by all [4D form objects](../FormObjects/formObjectsOverview.html) which support images.

## Mouse Coordinates in a Picture

4D lets you retrieve the local coordinates of the mouse in a picture field or variable in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. This mechanism, similar to that of a picture map, can be used, for example, to handle scrollable button bars or the interface of cartography software.

The coordinates are returned in the MouseX and MouseY System Variables. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in MouseX and MouseY.

You can get the value of these variables as part of the On Clicked, On Double Clicked, On Mouse up, On Mouse Enter, or On Mouse Move form events.

## Picture Operators

4D allows you to carry out operations on 4D pictures, such as concatenation, superimposing, etc. This point is covered in the Picture Operators section.