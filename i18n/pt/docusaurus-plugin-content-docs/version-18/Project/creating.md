---
id: creating
title: Criar um projeto 4D
---

## Requisitos

New 4D projects can only be created from **4D Developer** (see [Developing a project](developing.md)).

**Note:** 4D Server can open .4DProject files in read-only mode, for testing purposes only. Para implantação, os projetos 4D são fornecidos como arquivos .4dz (arquivos compactados). For more information, please refer to [Building a project package](building.md).

> You can create project databases by exporting existing binary databases. Consulte "Exportar de um banco de dados 4D" em [doc.4d.com](https://doc.4d.com).

## Criar arquivos do projeto

Para criar um novo projeto de base de dados:

1. Lançar uma aplicação 4D Developer.
2. Select **New > Database Project...** from the **File** menu: ![](../assets/en/Project/project-create1.png) OR Select **Database Project...** from the **New** toolbar button: ![](../assets/en/Project/projectCreate2.png) A standard **Save** dialog box appears so that you can choose the name and location of the 4D database project main folder.
1. Coloque o nome de sua pasta de projeto e clique **Save**. Este nome será utilizado:
 - as the name of the main project folder (named "MyFirstProject" in the [Architecture of a 4D Project](Project/architecture.md) section example),
 - as the name of the .4DProject file at the first level of the "Project" folder. Pode escolher qualquer nome permitido pelo seu sistema operacional. *Warning:* if your database project is intended to work on other systems or to be saved via a source control tool, you must take their specific naming recommendations into account.

When you validate the dialog box, 4D closes the current database (if any), creates a project folder at the indicated location, and puts all the files needed for proper operation of the database project into it. Para saber mais, consulte [Arquitetura de um projeto 4D](Project/architecture.md).

Next, the 4D application window is displayed with the Explorer in the foreground. You can then, for example, create project forms or display the Structure editor and add tables, fields, etc.
