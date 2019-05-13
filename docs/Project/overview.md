---
id: overview
title: Overview
---

A 4D project is a 4D database application where all the development part is stored into multiple text-based, human-readable files. These files contain everything from the structure of an application, to its code, and even the application’s forms, settings or user preferences.

## Creation

To create a 4D database project, you have two possibilities:

- create a new, blank project -- see [Creating a 4D project](creating.md). 
- export an existing 4D "binary" development to a project -- see [Export from a 4D database](exporting.md). 


## Project mode vs Binary mode

A project is a specific database configuration. When you [create a database project](creating.md), you select the "project mode" and it will not be possible to switch to the "binary mode" for this database (which is the only mode available until 4D v17 R5). 

On the other hand, you can export a "binary mode" database to a project mode" database (see [Exporting from a 4D Database](exporting.md)) but therefore both databases become independant.


## Project files

4D project files are created, modified, and deployed using regular 4D platform applications. Full-featured editors are available to handle files, including structure editor, method editor, form editor, menu editor...
 
Moreover, since projects are in plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor. 


## Source control

4D project files make it easier to program generically, create application templates, and also to share code. 

The flexibility of developing a 4D project is especially demonstrated when multiple developers need to work on the same part of an application, at the same time. 4D project files are ideal for defining modules and storing them in a **source control** repository (Perforce, Git, SVN, etc.), allowing development teams to take advantage of features such as: 

- Versioning
- Revision comparisons
- Rollbacks


## Deployment

4D project-based applications can be compiled and easily deployed in single-user or client-server configurations through compressed files (.4dz extension). 

With 4D projects, development is made locally, using the 4D Developer application. Team development interaction is handled by the source control tool. 4D Server can however be used to run projects for testing purposes.

