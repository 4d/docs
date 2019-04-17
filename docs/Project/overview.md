---
id: overview
title: Overview
---

A 4D project is a 4D application where all the development part is stored into multiple text-based, human-readable files. These files contain everything from the structure of an application, to its code, and even the application’s forms, settings or user preferences.

## Development

4D projects are created, developed, and deployed using the regular 4D development platform. Full-featured editors are available to handle project files, including structure editor, method editor, form editor, menu editor, and more. 

Since project are in plain text files (JSON, XML, etc.), they can be read and edited manually by the developers. Project files make it easier to program generically, create application templates, and also to share code. 

The flexibility of developing a 4D project is especially demonstrated when multiple developers need to work on the same part of an application, at the same time. 4D project files are ideal for defining modules and storing them in a **source control** repository (Perforce, Git, SVN, etc.), allowing development teams to take advantage of features such as: 

- Versioning
- Revision comparisons
- Rollbacks

With 4D projects, development is made locally, with a source control tool for managing team interactions. Client-server architecture is supported for deployment (see below).

## Deployment

4D project-based applications can be compiled and easily deployed in single-user or client-server architecture through compressed files (.4dz extension). 

## Creation

To create a 4D project, you have two possibilities:

- create a new, empty project
- export an existing 4D "binary" development -- see [Export to 4D project](exporting.md). 
