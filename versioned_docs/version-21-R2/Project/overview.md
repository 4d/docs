---
id: overview
title: 4D at a glance
slug: /GettingStarted/overview
---

A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, desktop, or mobile), from the database structure to the user interface, including code, web pages, forms, menus, user settings, or any required resources. A 4D project is primarily made of text-based files. 


## Project files

4D project files are open and edited using regular 4D platform applications (4D or 4D Server), on Windows or macOS. With 4D, full-featured editors are available to manage files, including a [code editor](../code-editor/write-class-method.md), a [web interface builder (4D Qodly Pro)](https://developer.4d.com/qodly/), a [form editor](../FormEditor/formEditor.md), a structure editor, a menu editor...
 
Since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor. 

In addition, 4D project files make it easier to program generically, create application templates, and share code. Project are organized internally in [folders and files](../Project/architecture.md).


## Development

4D projects are developed using the **4D** application. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a web interface builder, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project. 

### Source control

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications. 

### Development mode on 4D Server

If you are a small-size development team and you do not want to use a source control tool, you can use the [**Development mode**](../Desktop/clientServer.md#development-mode) of 4D Server, allowing developers to work online on the same project with 4D in remote mode. Note that this alternative mode should be used in specific cases; using an organisation based upon source control tools (see above) is usually recommended. 




## Deployment

Project files can be [compiled](compiler.md) and easily deployed. 4D allows you to create several types of application from your projects, including [web](WebServer/webServer.md) applications, [desktop](Desktop/building.md) applications (client/server or single-user), or [mobile applications](https://developer.4d.com/go-mobile/).

Back end applications can be deployed using 4D Server, 4D, or [merged with 4D Volume Desktop](../Desktop/building.md).