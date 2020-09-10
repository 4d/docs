---
id: pictures
title: Pictures
---

## Native Unterstützung von Formaten

4D enthält die native Verwaltung von Bildformaten, d. h. die Bilder werden in ihrem Originalformat angezeigt und gespeichert, ohne jegliche Interpretation durch 4D. Die spezifischen Merkmale der verschiedenen Formate, wie Schatten, transparente Bereiche, o. ä. werden beim Kopieren und Einsetzen beibehalten und ohne Veränderung angezeigt. Die native Verwaltung gilt für alle in 4D Formularen gespeicherten Bilder: [statische Bilder](FormObjects/staticPicture.md), die in den Designmodus übertragen wurden, Bilder, die im Anwendungsmodus in [Eingabeobjekte](FormObjects/input_overview.md) eingefügt wurden, etc.

Die gängigsten Bildformate werden auf beiden Plattformen unterstützt: .jpeg, .gif, .png, .tiff, .bmp, etc. Auf macOS ist auch das Format .pdf zum Codieren und Decodieren verfügbar.

> Die unterstützten Formate variieren unter Windows und auf macOS je nach Betriebssystem und den eigenen Codecs, die auf den Rechnern installiert sind. To find out which codecs are available, you must use the `PICTURE CODEC LIST` command (see also the [picture data type](Concepts/dt_picture.md) description).




### Nicht verfügbares Bildformat

Für Bildformate, die auf dem verwendeten Rechner nicht verfügbar sind, erscheint ein spezifischer Icon. The extension of the missing format is shown at the bottom of the icon:

![](assets/en/FormEditor/picNoFormat.png)

Dieser Icon erscheint automatisch beim Anzeigen der betroffenen Bilder:

![](assets/en/FormEditor/picNoFormat2.png)

Es gibt an, dass das Bild nicht angezeigt bzw. konvertiert werden kann -- es lässt sich aber speichern und ggf. auf anderen Rechnern anzeigen. This is the case, for example, for PDF pictures on Windows, or for PICT format pictures.





## Mouse Coordinates in a Picture

4D lets you retrieve the local coordinates of the mouse in an [input object](FormObjects/input_overview.md) associated with a [picture expression](FormObjects/properties_Object.md#expression-type), in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. Dieser Vorgang ist ähnlich wie bei einem Bildmapping und lässt sich für scrollbare Schaltflächenleisten oder die Oberfläche bei kartografischer Software verwenden.

The coordinates are returned in the *MouseX* and *MouseY* [System Variables](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html). Sie werden in Pixel angegeben, ausgehend von der oberen linken Ecke des Bildes (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in *MouseX* and *MouseY*.

You can get the value of these variables as part of the `On Clicked`, `On Double Clicked`, `On Mouse up`, `On Mouse Enter`, or `On Mouse Move` form events.
