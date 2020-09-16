---
id: plug-ins
title: Plug-Ins
---

Beim Entwickeln einer 4D Anwendung entdecken Sie viele Fähigkeiten, die Sie beim Starten nicht bemerkt haben. Sie können sogar die Standardversion von 4D ergänzen, wenn Sie in Ihrer 4D Entwicklungsumgebung **Plug-Ins** hinzufügen.

## Wofür wird ein Plug-In benötigt?

Auch wenn 4D hunderte von Methoden zum Verwalten von Objekten, Datensätzen und Steuern von Benutzeroberflächen enthält, wird für manche Fälle eine spezielle Verwendung oder Funktionalität (abhängig von der Plattform) benötigt: Einer benötigt ODBC unter Windows, ein anderer Apple-Dienste auf MacOS, und weitere möchten spezielle Statistik-Tools, bestimmte Zahlungsmodalitäten einbauen, Login für soziale Netzwerke oder Dateizugriff über das Netzwerk gewähren, eine branchenspezifische Benutzeroberfläche oder eine eigene Bildstruktur hinzufügen.

Würden all diese Bereiche für die beiden Betriebssysteme macOS und Windows über 4D Befehle abgedeckt, hätten wir als Effekt ein Produkt mit tausenden von Befehlen und gleichzeitig viele Benutzer, die solch einen Funktionsumfang gar nicht benötigen. Solch ein allumfassendes Tool würde die 4D Umgebung unglaublich komplex machen, so dass die meisten Anwender erst ein paar Monate studieren müssten, bevor sie brauchbare Ergebnisse liefern könnten.

Der modulare Aufbau der 4D Umgebung ermöglicht die Erstellung von Basisanwendungen, schließt aber die Entwicklung hochkomplexer Systeme nicht aus. Die 4D Plug-in Architektur öffnet die 4D Umgebung für jede Art von Anwendung oder Benutzer. 4D Plug-Ins vervielfachen die Leistung und Produktivität der Anwendung oder des Benutzers.

## Was ist ein Plug-In und was kann es leisten?

Ein Plug-In ist ein Stück Code, den 4D beim Starten aufruft. Es rüstet 4D mit zusätzlichen Funktionalitäten aus und macht es leistungsstärker.

In der Regel macht ein Plug-In Dinge, die:
- 4D nicht ausführen kann (z. B. spezifische Technologie einer Plattform)
- äußerst schwierig mit 4D zu bewerkstelligen wären
- nur als Einstieg über Plug-In verfügbar sind

Ein Plug-In enthält in der Regel einen Satz Routinen für den 4D Entwickler. Es kann einen externen Bereich verwalten und einen externen Prozess steuern.

- Eine **Plug-In Routine** ist eine Routine, die in native Programmiersprache (im allgemeinen C oder C++) geschrieben ist und die eine Aktion auslöst.
- Ein **externer Bereich** ist Teil eines Formulars, der fast alles anzeigen und bei Bedarf mit dem Benutzer interagieren kann.
- Ein **externer Prozess** ist ein eigenständiger Prozess, der normalerweise in eíner Schleife läuft und so ziemlich alles Gewünschte ausführen kann. Der gesamte Prozess-Code gehört zum Plug-In. 4D dient nur dazu, Ereignisse vom Prozess zu empfangen und an ihn zu senden.

### Wichtiger Hinweis:

Ein Plug-In kann sehr einfach sein, mit nur einer Routine zum Ausführen einer kleinen Aufgabe, oder sehr komplex mit hunderten von Routinen und Bereichen. There is virtually no limit to what a plug-in can do, however every plug-in developer should remember that a plug-in is a "sample" piece of code. It is the plug-in that runs within 4D, not the opposite. As a piece of code, it is the host of 4D; it is not a stand-alone application. It shares CPU time and memory with 4D and other plug-ins, thus, it should be a polite code, using just what is necessary to run. For example, in long loops, a plug-in should call `PA_Yield()` to give time to the 4D scheduler unless its task is critical for both it and the database.

## How to create a plug-in?

4D provides on GitHub an open-source [**plug-in SDK**](https://github.com/4d/4D-Plugin-SDK), containing the 4D Plugin API and the 4D Plugin Wizard:

- the [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API functions manage all the interactions between the 4D application and your plug-in.
- The [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) is an essential tool that simplifies the task of developing 4D plug-ins. It writes the code 4D needs to correctly load and interact with a plug-in, allowing you to concentrate on your own code.

## Ein Plug-In installieren

Um Plug-Ins in der 4D Umgebung zu installieren, kopieren Sie seine Dateien in die passenden Ordner.

Die Ordner "PluginName.bundle" (auf MacOS Paket) enthalten die Windows- und MacOS-Version der 4D Plug-Ins. Aufgrund ihrer spezifischen internen Architektur kann 4D Server, je nach der Plattform des Client-Rechners, die passende Version laden. Um ein Plug-In in Ihrer Umgebung zu installieren, legen Sie den Ordner "PluginName.bundle" oder das entsprechende Paket in den gewünschten Ordner **PlugIns**.

Sie können den Ordner PlugIns an zwei verschiedene Stellen legen:

- Auf dieselbe Ebene wie das ausführbare 4D Programm, z.B.:
  - Unter Windows neben die .exe Datei
  - Auf macOS auf die oberste Ebene des Ordners Contents im Software-Paket   
    In diesem Fall sind die Plug-Ins in jeder Anwendung verfügbar, die über dieses 4D Programm geöffnet wird.
- Auf dieselbe Ebene wie die Strukturdatei der Anwendung. In diesem Fall sind die Plug-Ins nur in dieser spezifischen Anwendung verfügbar.

Ihre Wahl richtet sich danach, wie Sie das Plug-In einsetzen wollen.

Liegt dasselbe Plug-In an beiden Stellen, lädt 4D nur das Plug-In, welches neben der Struktur liegt. Existieren in einer Anwendung mit einkompilierter 4D Volume Desktop mehrere Instanzen desselben Plug-In, lässt sich die Anwendung nicht öffnen.

4D lädt die Plug-Ins beim Starten des Programms. Beenden Sie deshalb 4D, bevor Sie diese installieren. Öffnen Sie dann Ihre Anwendung mit 4D. Erfordert ein Plug-In eine spezifische Benutzerlizenz, wird es geladen, jedoch nicht aktiviert.
