---
id: creating
title: Criar um projeto 4D
---

## Requisitos

Os novos projetos 4D só podem ser criados desde **4D Developer** (ver [Desenvolver um projeto](developing.md)).


**Nota:** Servidor 4D pode abrir arquivos .4DProject em modo apenas leitura, mas apenas para propósitos de teste. Para lançamento, projetos 4D são oferecidos como arquivos .4dz (arquivos compactados zipados). Para saber mais, consulte [Construir um pacote de projetos](building.md).

> Pode criar bancos de dados projeto exportando os bancos binários existentes. Ver "Exportar desde um banco de dados 4D" em [doc.4d.com](https://doc.4d.com).

## Criar arquivos de projeto

Para criar um novo projeto de banco de dados:

1. Lance uma aplicação 4D Developer.
2. Selecione **Novo > Banco de dados projeto...** no menu **Arquivo**: ![](assets/en/Project/project-create1.png) O Selecione **Banco de dados projeto...** desde o botão **Novo** da barra de ferramentas: ![](assets/en/Project/projectCreate2.png)   
   Aparecerá uma caixa de diálogo padrão **Guardar** para que possa escolher o nome e o local da pasta principal do banco projeto 4D.
1. Enter the name of your project folder and click **Save**. This name will be used:
    - as the name of the main project folder (named "MyFirstProject" in the [Architecture of a 4D Project](Project/architecture.md) section example),
    - as the name of the .4DProject file at the first level of the "Project" folder. You can choose any name allowed by your operating system. *Warning:* if your database project is intended to work on other systems or to be saved via a source control tool, you must take their specific naming recommendations into account.

When you validate the dialog box, 4D closes the current database (if any), creates a project folder at the indicated location, and puts all the files needed for proper operation of the database project into it. For more information, refer to [Architecture of a 4D Project](Project/architecture.md).

Next, the 4D application window is displayed with the Explorer in the foreground. You can then, for example, create project forms or display the Structure editor and add tables, fields, etc.
