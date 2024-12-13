---
id: overview
title: Overview
---

A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. A 4D project is primarily made of text-based files. 


## Project files

4D project files are open and edited using regular 4D platform applications (4D or 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a Code Editor, a form editor, a menu editor...
 
Since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor. 

In addition, 4D project files make it easier to program generically, create application templates, and share code. Project are organized internally in [folders and files](Project/architecture.md).


## Development

4D projects are developed using the **4D** application. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project. 

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications. 


## Final application

Project files can be [compiled](compiler.md) and easily deployed. 4D allows you to create three types of applications from your projects:

- [web](WebServer/webServer.md) applications,
- [mobile](https://developer.4d.com/go-mobile/) applications, 
- [desktop](Desktop/building.md) applications (client/server or single-user). 

Back end applications can be deployed using 4D Server, 4D, or [merged with 4D Volume Desktop](../Desktop/building.md).