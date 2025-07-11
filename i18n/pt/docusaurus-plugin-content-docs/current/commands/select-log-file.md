---
id: select-log-file
title: SELECT LOG FILE
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LOG FILE.Syntax-->**SELECT LOG FILE** ( *logFile* )<br/>**SELECT LOG FILE** ( * )<!-- END REF-->

<!--REF #_command_.SELECT LOG FILE.Params-->

| Parâmetro | Tipo |                             | Descrição                   |
| --------- | ---- | --------------------------- | --------------------------- |
| logFile   | Text | &#8594; | Nome do arquivo de registro |
| \*        |      | &#8594; | Close the current log file  |

<!-- END REF-->

## Descrição

<!--REF #_command_.SELECT LOG FILE.Summary-->O comando **SELECT LOG FILE** cria ou fecha o arquivo de registro de acordo com o valor passado no parâmetro<!-- END REF-->.

Em *logFile*, passe o nome ou o caminho completo do arquivo de registro a ser criado. If you only pass a name, the file will be created in the "Logs" folder of the database located next to the database structure file.

If you pass an empty string in *logFile*, **SELECT LOG FILE** presents an Save File dialog box, allowing the user to choose the name and location of the log file to be created. If the file is created correctly, the OK variable is set to 1. Otherwise, if the user clicks Cancel or if the log file could not be created, OK is set to 0.

**Note:** The new log file is not generated immediately after execution of the command, but after the next backup (the parameter is kept in the data file and will be taken into account even if the database is closed in the meantime) or a call to the [New log file](new-log-file.md) command. Você pode chamar o comando [BACKUP](../commands-legacy/backup.md) para acionar a criação do arquivo de log.

Se você passar *\** em *logFile*, **SELECT LOG FILE** fechará o arquivo de log atual do banco de dados. The OK variable is set to 1 when the log file is closed.

## Variáveis e configurações do sistema

OK is set to 1 if the log file is correctly created, or closed.

## Veja também

[New log file](new-log-file.md)\
[ON ERR CALL](../commands-legacy/on-err-call.md)

## Propriedades

|                       |                             |
| --------------------- | --------------------------- |
| Número de comando     | 345                         |
| Thread safe           | &cross; |
| Modifica as variáveis | OK, error                   |

