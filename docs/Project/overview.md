---
id: overview
title: Overview
---

A 4D project contains the whole source code of a 4D database application, from the database structure to the user interface, including forms, menus, user settings, or any required resources. A 4D project is made of multiple text-based, human-readable files. 

4D projects are created and handled using the 4D Developer application. Project files are then used to build final application deployment files (.4dz). 


## Creation

To create a 4D database project, you have two possibilities:

- create a new, blank project -- see [Creating a 4D project](creating.md). 
- export an existing 4D "binary" development to a project -- see [Export from a 4D database](exporting.md). 


## Project vs Binary

A project is a specific database configuration. When you [create a database project](creating.md), you select a configuration and it will not be possible to switch to the "binary" development for this database. 

On the other hand, you can export a binary database as a project database (see [Exporting from a 4D Database](exporting.md)). This will, however, make both databases independent of each other.


## Project files

4D project files are open and edited using regular 4D platform applications. Full-featured editors are available to manage files, including a structure editor, a method editor, a form editor, a menu editor...
 
Moreover, since projects are in plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor. 


## Source control

4D project files make it easier to program generically, create application templates, and share code. 

The flexibility of developing a 4D project is especially demonstrated when multiple developers need to work on the same part of an application, at the same time. 4D project files are particularly well suited to be managed by a **source control** repository (Perforce, Git, SVN, etc.), allowing development teams to take advantage of features such as: 

- Versioning
- Revision comparisons
- Rollbacks


## Deployment

4D project-based applications can be compiled and easily deployed in single-user or client-server configurations using a single packed file (.4dz) containing all your project. 

