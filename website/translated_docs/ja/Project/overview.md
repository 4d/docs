---
id: overview
title: 概要
---

A 4D project contains all of the source code of a 4D application, whatever its deployement type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. 4D プロジェクトは主にテキストファイルによって構成されています。


## プロジェクトファイル

4D project files are open and edited using regular 4D platform applications (4D or 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a method editor, a form editor, a menu editor...

Since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor.

In addition, 4D project files make it easier to program generically, create application templates, and share code. Project are organized internally in [folders and files](Project/architecture.md).

4D プロジェクト開発の柔軟性が一番顕著になるのは、複数のデベロッパーがアプリケーションの同じ部分で同時に作業しなければならないときです。 4D プロジェクトファイルの管理には、Perforce、Git、SVNなどの**ソース管理**リポジトリがとくに適しており、これらによって開発チームはつぎのような機能を活用できます:

- バージョン管理
- リビジョン比較
- ロールバック

## Development

Your 4D application can open projects **locally** or **remotely**:

- **[locally](creating.md#opening-a-local-project)** - project files are stored on the same machine as the 4D application; they are executed and edited by a single 4D application.
- **[remotely](creating.md#opening-a-remote-project)** - project files are stored on the 4D Server machine; 4D applications connect to the server and open the project in read-only mode, usually for testing purposes. However, a project opened by 4D Server is editable by 4D if [both applications are on the same machine](Project/developing.md#using-4d-developer-on-the-same-machine).

![](assets/en/getStart/localremote.png)

When you select the project to open, you also select the mode to be used.


## Deployment

Project files can be compiled and easily deployed for your web, mobile, or desktop (client-server or single-user) application.

Final application deployment files are generated during the building process, using the [4D build manager](Admin/building.md). Applications can be opened by 4D Server, 4D, or merged with 4D Volume license.

