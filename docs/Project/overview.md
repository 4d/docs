---
id: overview
title: Overview
---

A 4D project contains all of the source code of a 4D database application, from the database structure to the user interface, including forms, menus, user settings, or any required resources. A 4D project is primarily made of text-based files.

4D projects are created and handled using the 4D Developer application. Project files are then used to build final application deployment files, that can be opened by 4D Server or 4D Volume license (merged applications).


## Project files

4D project files are open and edited using regular 4D platform applications. Full-featured editors are available to manage files, including a structure editor, a method editor, a form editor, a menu editor...

Moreover, since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor.


## Source control

4D project files make it easier to program generically, create application templates, and share code.

The flexibility of developing a 4D project is especially demonstrated when multiple developers need to work on the same part of an application, at the same time. 4D project files are particularly well suited to be managed by a **source control** repository (Perforce, Git, SVN, etc.), allowing development teams to take advantage of features such as:

- Versioning
- Revision comparisons
- Rollbacks


## Working with projects

You create a 4D database project by:

- creating a new, blank project -- see [Creating a 4D project](creating.md).
- exporting an existing 4D "binary" development to a project -- see "Export from a 4D database" on [doc.4d.com](https://doc.4d.com).

Project development is done locally, using the 4D Developer application -- see [Developing a project](developing.md). Team development interactions are handled by the source control tool.

4D projects can be compiled and easily deployed as single-user or client-server applications containing compacted versions of your project -- see [Building a project package](building.md).
