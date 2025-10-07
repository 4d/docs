---
id: overview
title: 4D at a glance
slug: /GettingStarted/overview
---

A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. A 4D project is primarily made of text-based files. 


## Project files

4D project files are open and edited using regular 4D platform applications (4D or 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a [Code Editor](../code-editor/write-class-method.md), a [form editor](../FormEditor/formEditor.md), a menu editor...
 
Since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor. 

In addition, 4D project files make it easier to program generically, create application templates, and share code. Project are organized internally in [folders and files](Project/architecture.md).


## Development

4D projects are developed using the **4D** application. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project. 

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications. 


## Final application

Project files can be [compiled](compiler.md) and easily deployed. 4D allows you to create several types of application from your projects, including [web](WebServer/webServer.md) applications, [desktop](Desktop/building.md) applications (client/server or single-user), or mobile applications.

Back end applications can be deployed using 4D Server, 4D, or [merged with 4D Volume Desktop](../Desktop/building.md).