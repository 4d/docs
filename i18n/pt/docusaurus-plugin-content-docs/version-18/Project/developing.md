---
id: developing
title: Desenvolver um projeto
---

## Ferramentas de desenvolvimento

Os projetos bancos de dados 4D são criados localmente, utilizando a aplicação **4D Developer**. Para abrir um projeto desde 4D Developer, selecione o arquivo principal do projeto, chamado *databaseName.4DProject* (ver [Arquitetura de um projeto 4D](architecture.md)). Lembre que também pode trabalhar com qualquer editor de texto, já que a maioria dos arquivos de projeto 4D são arquivos texto. Concurrent file access is handled via a file access manager (see below).

4D Server pode abrir os arquivos *nome do banco de dados.4DProject* para realizar provas: as máquinas 4D remotas podem conectar-se e utilizar o banco de dados, mas todos os arquivos da estrutura do banco de dados são de apenas leitura.

O desenvolvimento multiusuário é gerenciado através de ferramentas padrão de controle de versão padrão, quer permitem aos desenvolvedores trabalhar em diferentes ramos e comparar, fusionar ou reverter as modificações.

## Acesso ao arquivo de projeto

When working on a project in 4D Developer, you can use built-in 4D editors to create, modify, or save structure items, methods, forms, etc. Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations. Quando trabalhar em um projeto em 4D Developer, pode usar os editores integrados de 4D para criar, modificar ou salvar elementos da estrutura, os métodos, os formulários, etc. Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations. For example, if the same method is edited in a method editor window *and* in a text editor, saving both modifications will result in a conflict.

4D Developer incluem um gestor de acesso aos arquivos para controlar os acessos simultâneos:

- if an open file which is read-only at the OS level, a locked icon is displayed in the editor: ![](../assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog box when trying to save the changes:![](../assets/en/Project/projectReload.png)
  - **Sim**: ignorar as mudanças do editor e voltar a carregar
  - **No**: save changes and overwrite the other version
  - **Cancel**: do not save

Esta funcionalidade está habilitada para todos os editores integrados:

- Editor de estrutura
- Editor de formulários
- Editor de método
- Editor de parâmetros
- Editor de toolbox
