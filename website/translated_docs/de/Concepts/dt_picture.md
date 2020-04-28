---
id: picture
title: Bild
---

Datenfelder, Variablen oder Ausdrücke vom Typ Bild können im Windows- oder im Macintosh-Format sein. Dazu gehört jedes Bild, das Sie in die Zwischenablage legen oder mit Befehlen von 4D bzw. Plug-Ins von der Festplatte lesen können.

## Native Unterstützung von Formaten

4D enthält die native Verwaltung von Bildformaten, d. h. die Bilder werden in ihrem Originalformat angezeigt und gespeichert, ohne jegliche Interpretation durch 4D. Die spezifischen Merkmale der verschiedenen Formate, wie Schatten, transparente Bereiche, o. ä. werden beim Kopieren und Einsetzen beibehalten und ohne Veränderung angezeigt. Die native Verwaltung gilt für alle in 4D gespeicherten Bilder: Bilder aus der Objektbibliothek, im Designmodus in Formulare eingefügte Bilder, im Anwendungsmodus in Datenfelder oder Variablen eingefügte Bilder, etc.

4D verwendet native APIs, um Felder und Variablen vom Typ Bild unter Windows und auf macOS zu codieren (schreiben) bzw. decodieren (lesen). Dies bietet Zugriff auf zahlreiche native Formate, inkl. RAW, dem gängigen Format für Digitalkameras.

- Unter Windows verwendet 4D WIC (Windows Imaging Component)
- Auf macOS verwendet 4D ImageIO. 

Die gängigsten Bildformate werden auf beiden Plattformen unterstützt: jpeg, gif, png, tiff, bmp, etc. Auf macOS ist auch das Format pdf zum Codieren und Decodieren verfügbar.

Die unterstützten Formate variieren unter Windows und auf macOS je nach Betriebssystem und den eigenen Codecs, die auf den Rechnern installiert sind. Um herauszufinden, welche Codecs verfügbar sind, müssen Sie den Befehl `PICTURE CODEC LIST` einsetzen. Beachten Sie, dass die Liste der verfügbaren Codecs zum Lesen und Schreiben unterschiedlich sein können, da für Codecs zum Codieren u. U. spezifische Lizenzen erforderlich sind.

**Hinweis:** Mit WIC und ImageIO lassen sich auch Metadaten in Bildern verwenden. Für diesen Zweck können Sie die beiden Befehle `SET PICTURE METADATA` und `GET PICTURE METADATA` einsetzen.

### Bild Codec Kennung

Der Befehl `PICTURE CODEC LIST` gibt von 4D erkannte Bildformate als Codec Kennung für Bilder zurück. Es gibt folgende Formen:

- Als Endung (zum Beispiel “.gif”)
- Als Mime Typ (zum Beispiel “image/jpeg”)

Die vom Befehl zurückgegebene Form richtet sich nach der Art, wie der Codec auf Ebene des Betriebssystems gespeichert ist. Die meisten 4D Befehle zur Bildverwaltung können eine Codec Kennung als Parameter empfangen. Deshalb muss unbedingt die vom Befehl `PICTURE CODEC LIST` zurückgegebene ID des Systems verwendet werden.

### Nicht verfügbares Bildformat

Für Bildformate, die auf dem verwendeten Rechner nicht verfügbar sind, erscheint ein spezifischer Icon. Die Endung des fehlenden Bildformats wird darunter angezeigt. Dieser Icon erscheint automatisch beim Anzeigen der betroffenen Bilder:

![](assets/en/Concepts/missingpict.en.png)

Es gibt an, dass das Bild nicht angezeigt bzw. konvertiert werden kann -- es lässt sich aber speichern und ggf. auf anderen Rechnern anzeigen. Das ist z. B. bei PDF Bildern auf Windows oder veralteten Bildern im PICT-Format der Fall.

## Bildoperatoren

| Operation                    | Syntax             | Ergibt | Aktion                                                                                                                                                               |
| ---------------------------- | ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Horizontal Aneinanderfügen   | Bild1 + Bild2      | Bild   | Fügt Bild2 rechts von Bild1 an                                                                                                                                       |
| Vertikal Aneinanderfügen     | Bild1 / Bild2      | Bild   | Fügt Bild2 unter Bild1 an                                                                                                                                            |
| Exklusives Aufeinandersetzen | Bild1 & Bild2      | Bild   | Setzt Bild2 vor Bild1 (Bild2 ist vorne) Liefert dasselbe Ergebnis wie `COMBINE PICTURES(pict3;pict1;Superimposition;pict2)`                                          |
| Inklusives Aufeinandersetzen | Bild1 &#124; Bild2 | Bild   | Setzt Bild2 auf Bild1 und gibt Ergebnisbild zurück, wenn beide Bilder dieselbe Größe haben Liefert dasselbe Ergebnis wie `$equal:=Equal pictures(Pict1;Pict2;Pict3)` |
| Horizontal Verschieben       | Bild + Zahl        | Bild   | Verschiebt Bild horizontal um n Pixel                                                                                                                                |
| Vertikal Verschieben         | Bild / Zahl        | Bild   | Verschiebt Bild vertikal um n Pixel                                                                                                                                  |
| Zoomen                       | Bild * Zahl        | Bild   | Verändert Bildgröße gemäß Faktor n                                                                                                                                   |
| Horizontal Skalieren         | Bild *+ Zahl       | Bild   | Skaliert Bild horizontal gemäß Faktor n                                                                                                                              |
| Vertikal Skalieren           | Bild *&#124; Zahl  | Bild   | Skaliert Bild vertikal gemäß Faktor n                                                                                                                                |


**Hinweise:**

- Beim Operator | müssen Bild1 und Bildt2 exakt dieselben Ausmaße haben. Haben sie unterschiedliche Ausmaße, ergibt die Operation Bild1 | Bild2 ein leeres Bild.
- Mit dem Befehl `COMBINE PICTURES` können Sie Bilder übereinanderlegen und die Merkmale jedes Ausgangsbildes im Ergebnisbild beibehalten.
- Die Bildoperatoren geben Vektorbilder zurück, wenn beide Ausgangsbilder Vektorbilder sind. Beachten Sie jedoch, dass Bilder im Anzeigeformat Auf Hintergrund als Bitmap gedruckt werden.
- Additional operations can be performed on pictures using the `TRANSFORM PICTURE` command.
- There is no comparison operators on pictures, however 4D proposes the `Equal picture` command to compare two pictures. 
- 4D lets you retrieve the local coordinates of the mouse in a picture field or variable in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. This mechanism, similar to that of a picture map, can be used, for example, to handle scrollable button bars or the interface of cartography software. The coordinates are returned in the *MouseX* and *MouseY* **System Variables**. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in *MouseX* and *MouseY*. You can get the value of these variables as part of the **On Clicked**, **On Double Clicked**, **On Mouse up**, **On Mouse Enter**, or **On Mouse Move** form events.

### Beispiele

Folgende Beispiele zeigen alle Bilder im Format **Auf Hintergrund**.

Bild 1 ist ein Kreis: ![](assets/en/Concepts/Circle.en.png)

Bild 2 ist ein Rechteck: ![](assets/en/Concepts/rectangle.en.png)

Nachfolgend sehen Sie die Syntax für die jeweilige Operation und die entsprechende grafische Darstellung.

Horizontal Aneinanderfügen

```4d
 circle+rectangle //Place the rectangle to the right of the circle
 rectangle+circle //Place the circle to the right of the rectangle
```

![](assets/en/Concepts/concatHor.en.png) ![](assets/en/Concepts/concatHor2.en.png)

Vertikal Aneinanderfügen

```4d
 circle/rectangle //Place the rectangle under the circle
 rectangle/circle //Place the circle under the rectangle
```

![](assets/en/Concepts/concatVer.en.png) ![](assets/en/Concepts/concatVer2.en.png)

Exklusives Aufeinandersetzen

```4d
Pict3:=Pict1 & Pict2 // Superimposes Pict2 on top of  Pict1
```

![](assets/en/Concepts/superimpoExc.fr.png)

Inklusives Aufeinandersetzen

```4d
Pict3:=Pict1|Pict2 // Recovers resulting mask from superimposing two pictures of the same size
```

![](assets/en/Concepts/superimpoInc.fr.png)

Horizontal Verschieben

```4d
rectangle+50 //Move the rectangle 50 pixels to the right
rectangle-50 //Move the rectangle 50 pixels to the left
```

![](assets/en/Concepts/hormove.en.png)

Vertikal Verschieben

```4d
rectangle/50 //Move the rectangle down by 50 pixels
rectangle/-20 //Move the rectangle up by 20 pixels
```

![](assets/en/Concepts/vertmove.en.png)![](assets/en/Concepts/vertmove2.en.png)

Zoomen

```4d
rectangle*1.5 //The rectangle becomes 50% bigger
rectangle*0.5 //The rectangle becomes 50% smaller
```

![](assets/en/Concepts/resize.en.png)![](assets/en/Concepts/resisze2.en.png)

Horizontal Skalieren

```4d
circle*+3 //The circle becomes 3 times wider
circle*+0.25 //The circle's width becomes a quarter of what it was
```

![](assets/en/Concepts/Horscaling.en.png)![](assets/en/Concepts/Horscaling2.en.png)

Vertikal Skalieren

```4d
circle*|2 //The circle becomes twice as tall
circle*|0.25 //The circle's height becomes a quarter of what it was
```

![](assets/en/Concepts/vertscaling.en.png)![](assets/en/Concepts/veticalscaling2.en.png)