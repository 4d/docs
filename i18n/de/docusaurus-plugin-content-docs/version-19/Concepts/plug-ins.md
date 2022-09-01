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
- Ein **externer Prozess** ist ein eigenständiger Prozess, der normalerweise in einer Schleife läuft und so ziemlich alles Gewünschte ausführen kann. Der gesamte Prozess-Code gehört zum Plug-In. 4D dient nur dazu, Ereignisse vom Prozess zu empfangen und an ihn zu senden.

### Wichtiger Hinweis:

Ein Plug-In kann sehr einfach sein, mit nur einer Routine zum Ausführen einer kleinen Aufgabe, oder sehr komplex mit hunderten von Routinen und Bereichen. Es gibt virtuell kein Limit, was ein Plug-In tun kann. Jeder Plug-in-Entwickler sollte jedoch bedenken, dass ein Plug-in ein Musterteil von Code ist. Es ist das Plug-In, das in 4D läuft, und nicht andersherum. Als ein Code-Teil ist es der Host von 4D und keine eigenständige Anwendung. Es nutzt CPU Zeit und Speicher gemeinsam mit 4D und anderen Plug-Ins. Es sollte also ein freundlicher Code sein, der nur das enthält, was zur Ausführung notwendig ist. Beispielsweise sollte ein Plug-In in langen Schleifen `PA_Yield()` aufrufen, um dem 4D Planungssystem Zeit zu geben, es sei denn, seine Aufgabe ist sowohl für dieses als auch für die Datenbank kritisch.

## Ein Plug-In erstellen

4D bietet auf GitHub ein open-source [**Plug-In SDK**](https://github.com/4d/4D-Plugin-SDK) mit dem 4D Plugin API und dem 4D Plugin Wizard:

- Das [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), geschrieben in C, fügt über 400 Funktionen hinzu, mit denen Sie leicht eigene Plug-Ins erstellen und den Funktionsumfang Ihrer 4D Anwendung ergänzen können. 4D Plug-In API Funktionen verwalten alle Interaktionen zwischen der 4D Applikation und Ihrem Plug-In.
- Der [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) ist ein wichtiges Tool, das die Entwicklung von 4D Plug-Ins vereinfacht. Er schreibt den für 4D erforderlichen Code, um das Plug-In korrekt zu laden und damit zu interagieren. So können Sie sich auf Ihren eigenen Code konzentrieren.

## Ein Plug-In installieren

Um Plug-Ins in der 4D Umgebung zu installieren, kopieren Sie seine Dateien in die passenden Ordner.

Die Ordner "PluginName.bundle" (auf MacOS Paket) enthalten die Windows- und MacOS-Version der 4D Plug-Ins. Aufgrund ihrer spezifischen internen Architektur kann 4D Server, je nach der Plattform des Client-Rechners, die passende Version laden. Um ein Plug-In in Ihrer Umgebung zu installieren, legen Sie den Ordner "PluginName.bundle" oder das entsprechende Paket in den gewünschten Ordner **PlugIns**.

Sie können den Ordner PlugIns an zwei verschiedene Stellen legen:

- Auf dieselbe Ebene wie das ausführbare 4D Programm, z.B.:
  - Unter Windows neben die .exe Datei
  - Auf MacOS: auf die erste Ebene des Ordners Contents im Package der Anwendung. Dann sind die Plug-Ins in jedem Projekt verfügbar, das diese Anwendung öffnet.
- Auf dieselbe Ebene wie den Ordner Project. In diesem Fall sind die Plug-Ins nur in diesem spezifischen Projekt verfügbar.

Ihre Wahl richtet sich danach, wie Sie das Plug-In einsetzen wollen.

Liegt dasselbe Plug-In an beiden Stellen, lädt 4D nur das Plug-In, welches neben der Struktur liegt. Existieren in einer Anwendung mit einkompilierter 4D Volume Desktop mehrere Instanzen desselben Plug-In, lässt sich die Anwendung nicht öffnen.

4D lädt die Plug-Ins beim Starten des Programms. Beenden Sie deshalb 4D, bevor Sie diese installieren. Öffnen Sie dann Ihr Projekt mit 4D. Then open your database with 4D. If any plug-in requires a specific license for use, it will be loaded but not available for use.