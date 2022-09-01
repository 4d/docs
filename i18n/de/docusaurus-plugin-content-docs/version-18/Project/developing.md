---
id: developing
title: Developing a project
---

## Development tools

4D database projects are created locally, using the **4D Developer** application. To open a project from 4D Developer, select the project's main file, named *databaseName.4DProject* (see [Architecture of a 4D project](architecture.md)). Note that you can also work with any text editor since most of the 4D project files are text files. Concurrent file access is handled via a file access manager (see below).

4D Server can open *databaseName.4DProject* files for testing purposes: remote 4D machines can connect and use the database, but all database structure files are read-only.

Multi-user development is managed through standard source control tools, which allow developers to work on different branches, and compare, merge, or revert modifications.

## Project file access

When working on a project in 4D Developer, you can use built-in 4D editors to create, modify, or save structure items, methods, forms, etc. Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations. Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations. For example, if the same method is edited in a method editor window *and* in a text editor, saving both modifications will result in a conflict.

The 4D Developer framework includes a file access manager to control concurrent access:

- if an open file which is read-only at the OS level, a locked icon is displayed in the editor: ![](../assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog box when trying to save the changes: ![](../assets/en/Project/projectReload.png)
  - **Yes**: discard editor changes and reload
  - **No**: save changes and overwrite the other version
  - **Cancel**: do not save

This feature is enabled for all built-in editors:

- Structure editor
- Form editor
- Method editor
- Settings editor
- Toolbox editor
