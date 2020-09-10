---
id: plug-ins
title: Plug-ins
---

Beim Entwickeln einer 4D Anwendung entdecken Sie viele Fähigkeiten, die Sie beim Starten nicht bemerkt haben. Sie können sogar die Standardversion von 4D ergänzen, wenn Sie in Ihrer 4D Entwicklungsumgebung **Plug-Ins** hinzufügen.

## Wofür wird ein Plug-In benötigt?

Auch wenn 4D hunderte von integrierten Methoden zum Verwalten von Objekten, Datensätzen und Steuern von Benutzeroberflächen bietet, ist u.U. eine spezielle Verwendung oder Funktionalität (manchmal abhängig von der Plattform) erforderlich: Einer benötigt ODBC unter Windows, ein anderer Apple-Dienste auf MacOS, und weitere möchten spezielle Statistik-Tools, Zahlungsmodalitäten einbauen, Login für soziale Netzwerke oder Dateizugriff über das Netzwerk gewähren, eine branchenspezifische Benutzeroberfläche oder eine eigene Bildstruktur hinzufügen.

It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected.

The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. 4D Plug-ins multiply that application or user's power and productivity.

## What is a plug-in and what can it do?

A plug-in is a piece of code that 4D launches at start up. It adds functionality to 4D and thus increases its capacity.

Usually, a plug-in does things that:
- 4D cannot do (ie, specific platform technology),
- will be very hard to write just using 4D,
- are only available as Plug-in Entrypoint

A plug-in usually contains a set of routines given to the 4D Developer. It can handle an External Area and run an external process.

- A **plug-in routine** is a routine written in native language (usually C or C++) that causes an action.
- An **external area** is a part of a form that can display almost everything and interact with the user when necessary.
- An **external process** is a process that runs alone, usually in a loop, doing almost everything it wants. All process code belongs to the plug-in, 4D is simply present to receive/send events to the process.

### Important note

A plug-in can be very simple, with just one routine performing a very small task, or it can be very complex, involving hundred of routines and areas. There is virtually no limit to what a plug-in can do, however every plug-in developer should remember that a plug-in is a "sample" piece of code. It is the plug-in that runs within 4D, not the opposite. As a piece of code, it is the host of 4D; it is not a stand-alone application. It shares CPU time and memory with 4D and other plug-ins, thus, it should be a polite code, using just what is necessary to run. For example, in long loops, a plug-in should call `PA_Yield()` to give time to the 4D scheduler unless its task is critical for both it and the application.

## How to create a plug-in?

4D provides on GitHub an open-source [**plug-in SDK**](https://github.com/4d/4D-Plugin-SDK), containing the 4D Plugin API and the 4D Plugin Wizard:

- the [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API functions manage all the interactions between the 4D application and your plug-in.
- The [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) is an essential tool that simplifies the task of developing 4D plug-ins. It writes the code 4D needs to correctly load and interact with a plug-in, allowing you to concentrate on your own code.

## Ein Plug-In installieren

Um Plug-Ins in der 4D Umgebung zu installieren, kopieren Sie seine Dateien in die passenden Ordner.

Die Ordner "PluginName.bundle" (auf MacOS Paket) enthalten die Windows- und MacOS-Version der 4D Plug-Ins. Aufgrund ihrer spezifischen internen Architektur kann 4D Server, je nach der Plattform des Client-Rechners, die passende Version laden. To install a plug-in in your environment, you just need to put the “PluginName.bundle” folder or package concerned into the desired **Plugins** folder.

You can put the Plugins folder in two different places:

- Auf dieselbe Ebene wie das ausführbare 4D Programm, z.B.:
  - Unter Windows neben die .exe Datei
  - Under macOS: at the first level of the Contents folder inside the application package. In this case, plug-ins are available in every project opened by this application.
- At the same level as the Project folder. In this case, plug-ins are only available in this particular project.

Ihre Wahl richtet sich danach, wie Sie das Plug-In einsetzen wollen.

Liegt dasselbe Plug-In an beiden Stellen, lädt 4D nur das Plug-In, welches neben der Struktur liegt. Existieren in einer Anwendung mit einkompilierter 4D Volume Desktop mehrere Instanzen desselben Plug-In, lässt sich die Anwendung nicht öffnen.

4D lädt die Plug-Ins beim Starten des Programms. Beenden Sie deshalb 4D, bevor Sie diese installieren. Then open your project with 4D. Erfordert ein Plug-In eine spezifische Benutzerlizenz, wird es geladen, jedoch nicht aktiviert.