---
id: plug-ins
title: Plug-Ins
---

Beim Entwickeln einer 4D Anwendung entdecken Sie viele Fähigkeiten, die Sie beim Starten nicht bemerkt haben. Sie können sogar die Standardversion von 4D ergänzen, wenn Sie in Ihrer 4D Entwicklungsumgebung **Plug-Ins** hinzufügen.

## Was ist ein Plug-In und was kann es leisten?

A plug-in is a piece of code, written in any language such as C or C++, that 4D launches at start up. Es rüstet 4D mit zusätzlichen Funktionalitäten aus und macht es leistungsstärker. A plug-in usually contains a set of routines given to the 4D developer. It can handle external areas and run external processes.

## Where to find plug-ins?

Multiple plug-ins have already been written by the 4D community. Published plug-ins [can be found on GitHub](https://github.com/search?q=4d-plugin&type=Repositories). Additionnally, you can [develop your own plug-ins](Extensions/develop-plug-ins.md).


## Installing plug-ins

You install plug-ins in the 4D environment by copying their files into the **Plugins** folder, at the [same level as the Project folder](../Project/architecture.md#plugins).

4D lädt die Plug-Ins beim Starten des Programms. Beenden Sie deshalb 4D, bevor Sie diese installieren. If a plug-in requires a specific license for use, it will be loaded but not available for use.


## Using plug-ins

Plug-ins commands can be used as regular 4D commands in your 4D development. Plug-in commands appear in the **Plug-ins** page of the Explorer. 


