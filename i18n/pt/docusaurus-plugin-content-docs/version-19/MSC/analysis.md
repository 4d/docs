---
id: analysis
title: Página análise de atividades
sidebar_label: Página análise de atividades
---

A página Análise da atividade permite visualizar o conteúdo do ficheiro de registo atual. Esta função é útil para analisar o uso de um banco de dados ou detectar as operações que causaram erros ou mal funcionamento. No caso de um banco de dados em modo cliente-servidor, permite verificar as operações realizadas por cada máquina cliente.
> It is also possible to rollback the operations carried out on the data of the database. For more information, refer to [Rollback page](rollback.md).

![](../assets/en/MSC/MSC_analysis.png)

Every operation recorded in the log file appears as a row. The columns provide various information on the operation. You can reorganize the columns as desired by clicking on their headers.

This information allows you to identify the source and context of each operation:

- **Operation**: Sequence number of operation in the log file.
- **Action**: Type of operation performed on the data. This column can contain one of the following operations:
  - Abertura de ficheiro de dados: Abertura de um ficheiro de dados.
  - Closing of Data File: Closing of an open data file.
  - Creation of a Context: Creation of a process that specifies an execution context.
  - Encerramento de um contexto: encerramento de um processo.
  - Adição: Criação e armazenamento de um registo.
  - Adding a BLOB: Storage of a BLOB in a BLOB field.
  - Eliminação: Eliminação de um registo.
  - Modificação: modificação de um registo.
  - Início da transação: A transação foi iniciada.
  - Validation of Transaction: Transaction validated.
  - Cancellation of Transaction: Transaction cancelled.
  - Update context: Change in extra data (e.g. a call to `CHANGE CURRENT USER` or `SET USER ALIAS`).

- **Table**: Table to which the added/deleted/modified record or BLOB belongs.
- **Primary Key/BLOB**: contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation.
- **Process**: Internal number of process in which the operation was carried out. This internal number corresponds to the context of the operation.
- **Size**: Size (in bytes) of data processed by the operation.
- **Date and Hour**: Date and hour when the operation was performed.
- **Usuario**: nome de usuário que realizou a operação. Em modo cliente-servidor, o nome da máquina do lado do cliente é exibido; em modo monousuário, a ID do usuário é exibida.
- **4D User**: 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name.
- **Values**: Values of fields for the record in the case of addition or modification. The values are separated by “;”. Only values represented in alphanumeric form are displayed.  
  ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*
- **Records**: Record number.

Clique em **Analisar** para atualizar o conteúdo do arquivo de histórico atual do banco selecionada (chamado como padrão dataname.journal). O botão Navegar pode ser usado para selecionar e abrir outro arquivo de histórico para o banco de dados. The **Export...** button can be used to export the contents of the file as text.
