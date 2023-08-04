---
id: analysis
title: Página análise de atividades
sidebar_label: Página análise de atividades
---

A página Análise da atividade permite visualizar o conteúdo do ficheiro de registo atual. This function is useful for parsing the use of a database or detecting the operation(s) that caused errors or malfunctions. In the case of a database in client-server mode, it allows verifying operations performed by each client machine.
> It is also possible to rollback the operations carried out on the data of the database. For more information, refer to [Rollback page](rollback.md).

![](../assets/en/MSC/MSC_analysis.png)

Cada operação registada no ficheiro de registo aparece como uma linha. The columns provide various information on the operation. You can reorganize the columns as desired by clicking on their headers.

This information allows you to identify the source and context of each operation:

- **Operation**: Sequence number of operation in the log file.
- **Ação**: tipo de operação efetuada sobre os dados. Esta coluna pode conter uma das seguintes operações:
  - Abertura de ficheiro de dados: Abertura de um ficheiro de dados.
  - Encerramento do ficheiro de dados: encerramento de um ficheiro de dados aberto.
  - Criação de um contexto: criação de um processo que especifica um contexto de execução.
  - Encerramento de um contexto: encerramento de um processo.
  - Adição: Criação e armazenamento de um registo.
  - Adicionar um BLOB: armazenamento de um BLOB num campo BLOB.
  - Eliminação: Eliminação de um registo.
  - Modificação: modificação de um registo.
  - Início da transação: A transação foi iniciada.
  - Validação da transação: transação validada.
  - Cancelamento da transação: transação cancelada.

- **Table**: Table to which the added/deleted/modified record or BLOB belongs.
- **Primary Key/BLOB**: contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation.
- **Process**: Internal number of process in which the operation was carried out. This internal number corresponds to the context of the operation.
- **Size**: Size (in bytes) of data processed by the operation.
- **Date and Hour**: Date and hour when the operation was performed.
- **User**: Name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the ID of the user is displayed. If the 4D passwords are not enabled, this column is blank.
- **Values**: Values of fields for the record in the case of addition or modification. Os valores são separados por ";". Only values represented in alphanumeric form are displayed.  
  ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*
- **Registos**: número de registo.

Click on **Analyze** to update the contents of the current log file of the selected database (named by default dataname.journal). The Browse button can be used to select and open another log file for the database. The **Export...** button can be used to export the contents of the file as text.
