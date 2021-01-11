---
id: pictures
title: Bilder
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





## Mauskoordinaten für Klicks auf ein Bild

4D ermöglicht, die lokalen Koordinaten eines Klicks oder Darüberziehen mit der Maus auf ein [Eingabeobjekt](FormObjects/input_overview.md) mit einem [Bildausdruck](FormObjects/properties_Object.md#expression-type) herauszufinden, auch wenn das Bild gescrollt oder gezoomt wurde. Dieser Vorgang ist ähnlich wie bei einem Bildmapping und lässt sich für scrollbare Schaltflächenleisten oder die Oberfläche bei kartografischer Software verwenden.

Die Koordinaten werden in den [Systemvariablen](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html) *MouseX* und *MouseY* zurückgegeben. Sie werden in Pixel angegeben, ausgehend von der oberen linken Ecke des Bildes (0,0). Ist die Maus außerhalb des Bildkoordinatensystems, wird -1 in *MouseX* und *MouseY* zurückgegeben.

Sie erhalten den Wert dieser Variablen in den Formularereignissen `On Clicked`, `On Double Clicked`, `On Mouse Up,` `On Mouse Enter` oder `On Mouse Move`.
