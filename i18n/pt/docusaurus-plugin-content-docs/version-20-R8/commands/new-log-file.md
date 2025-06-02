---
id: new-log-file
title: New log file
displayed_sidebar: docs
---

<!--REF #_command_.New log file.Syntax-->**New log file** : Text<!-- END REF-->

<!--REF #_command_.New log file.Params-->

| Parâmetro | Tipo |                             | Descrição                        |
| --------- | ---- | --------------------------- | -------------------------------- |
| Resultado | Text | &#8592; | Full pathname of closed log file |

<!-- END REF-->

## Descrição

**Nota preliminar:** esse comando só funciona com 4D Server. Ele só pode ser executado por meio do comando [Execute on server](../commands-legacy/execute-on-server.md) ou em um procedimento armazenado.

<!--REF #_command_.New log file.Summary-->The **New log file** command closes the current log file, renames it and creates a new one with the same name in the same location as the previous one<!-- END REF-->. This command is meant to be used for setting up a backup system using a logical mirror (see the section *Setting up a logical mirror* in the [4D Server Reference Manual](https://doc/4d.com)). 

The command returns the full pathname (access path + name) of the log file being closed (called the “segment”). Este arquivo está armazenado no mesmo local que o arquivo de log atual (especificado na [página de configuração](../Backup/settings.md#configuration) no tema de Backup das Configurações). The command does not carry out any processing (compression, segmentation) on the saved file. Não aparece nenhuma caixa de diálogo.

The file is renamed with the current backup numbers of the database and of the log file, as shown in the following example: DatabaseName\[BackupNum-LogBackupNum\].journal. Por exemplo:

- If the MyDatabase.4DD database has been saved 4 times, the last backup file will be named MyDatabase\[0004\].4BK. The name of the first “segment” of the log file will therefore be MyDatabase\[0004-0001\].journal.
- If the MyDatabase.4DD database has been saved 3 times and the log file has been saved 5 times since, the name of the 6th backup of the log file will be MyDatabase\[0003-0006\].journal.

:::warning

A log file must always be related to a data file. If you call this command just after a log file activation (without backup) using [`SELECT LOG FILE`](select-log-file.md) or the [Settings dialog box](../Backup/settings.md#configuration), make sure to have a matching copy of your data file, otherwise the log file could not be integrated.

:::

## Gestão de erros

No caso de um erro, o comando gera um código que pode ser interceptado com o comando [ON ERR CALL] (../commands-legacy/on-err-call.md).

## Veja também

[SELECT LOG FILE](select-log-file.md)