---
id: information
title: Página de informação
sidebar_label: Página de informação
---

The Information page provides information about the 4D and system environments, as well as the database and application files. Cada página pode ser exibida usando controles de guia na parte superior da janela.

## Programa

This page indicates the name, version and location of the application as well as the active 4D folder (for more information about the active 4D folder, refer to the description of the `Get 4D folder` command in the *4D Language Reference* manual).

The central part of the window indicates the name and location of the database project and data files as well as the log file (if any). The lower part of the window indicates the name of the 4D license holder, the type of license, and the name of the database user when passwords have been activated (or Designer if this is not the case).

- **Display and selection of pathnames**: On the **Program** tab, pathnames are displayed in pop-up menus containing the folder sequence as found on the disk:  
  ![](../assets/en/MSC/MSC_popup.png) If you select a menu item (disk or folder), it is displayed in a new system window. The **Copy the path** command copies the complete pathname as text to the clipboard, using the separators of the current platform.

- **"Licenses" Folder** The **"Licenses" Folder** button displays the contents of the active Licenses folder in a new system window. All the license files installed in your 4D environment are grouped together in this folder, on your hard disk. When they are opened with a Web browser, these files display information concerning the licenses they contain and their characteristics. The location of the "Licenses" folder can vary depending on the version of your operating system. Para obter mais informações sobre a localização desta pasta, consulte o comando `Get 4D folder`. ***Note:** You can also access this folder from the “Update License” dialog box (available in the Help menu).*

## Tabelas

Esta página fornece uma visão geral das tabelas da sua base de dados:

![](../assets/en/MSC/MSC_Tables.png)
> As informações desta página estão disponíveis nos modos standard e de manutenção.

The page lists all the tables of the database (including invisible tables) as well as their characteristics:

- **ID**: número interno da tabela.
- **Tabelas**: nome da tabela. Names of deleted tables are displayed with parenthesis (if they are still in the trash).
- **Records**: Total number of records in the table. If a record is damaged or cannot be read, *Error* is displayed instead of the number. Neste caso, pode considerar a utilização das ferramentas de verificação e reparação.
- **Campos**: número de campos na tabela. Os campos invisíveis são contados, mas os campos apagados não são contados.
- **Indexes**: Número de índices de qualquer tipo na tabela
- **Encryptable**: If checked, the **Encryptable** attribute is selected for the table at the structure level (see Encryptable paragraph in the Design Reference Manual).
- **Encrypted**: If checked, the records of the table are encrypted in the data file. ***Note:** Any inconstency between Encryptable and Encrypted options requires that you check the encryption status of the data file in the **Encrypt page** of the database.*
- **Address Table Size**: Size of the address table for each table. The address table is an internal table which stores one element per record created in the table. Na verdade, associa os registos ao seu endereço físico. For performance reasons, it is not resized when records are deleted, thus its size can be different from the current number of records in the table. If this difference is significant, a data compacting operation with the "Compact address table" option checked can be executed to optimize the address table size (see [Compact](compact.md) page). ***Note:** Differences between address table size and record number can also result from an incident during the cache flush.*

## Dados

The **Data** page provides information about the available and used storage space in the data file.
> Esta página não pode ser acedida em modo manutenção

As informações são fornecidas sob a forma de gráficos:

![](../assets/en/MSC/MSC_Data.png)
> This page does not take into account any data that may be stored outside of the data file (see "External storage").

Arquivos que são muito fragmentados reduzem o desempenho do disco e, assim, do banco de dados. If the occupation rate is too low, 4D will indicate this by a warning icon (which is displayed on the Information button and on the tab of the corresponding file type) and specify that compacting is necessary:![](../assets/en/MSC/MSC_infowarn.png)

A warning icon is also displayed on the button of the [Compact](compact.md) page: ![](../assets/en/MSC/MSC_compactwarn.png)
