---
id: verify
title: Página Verificação
sidebar_label: Página Verificação
---

Esta página é utilizada para verificar a integridade dos dados. A verificação pode ser efetuada em registos e/ou índices.
Esta página apenas verifica a integridade dos dados. If errors are found and repairs are needed, you will be advised to use the [Repair page](repair.md).

## Acções

A página contém botões de ação que fornecem acesso direto às funções de verificação.

> When the database is encrypted, verification includes validation of encrypted data consistency. If no valid data key has already been provided, a dialog requesting the passphrase or the data key is displayed.

- **Verify the records and the indexes:** Starts the total data verification procedure.
- **Verify the records only**: Starts the verification procedure for records only (indexes are not verified).
- **Verify the indexes only**: Starts the verification procedure for indexes only (records are not verified).

> \> > Verification of records and indexes can also be carried out in detail mode, table by table (see the Details section below).

## Abrir arquivo de registo

Regardless of the verification requested, 4D generates a log file in the `Logs` folder of the application. This file lists all the verifications carried out and indicates any errors encountered, when applicable ([OK] is displayed when the verification is correct). It is created in XML format and is named: _ApplicationName__Verify_Log__yyyy-mm-dd hh-mm-ss_.xml where:

- _ApplicationName_ is the name of the project file without any extension, for example "Invoices",
- _yyyy-mm-dd hh-mm-ss_ is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.

## Detalhes

The **Table list** button displays a detailed page that can be used to view and select the actual records and indexes to be checked:

![](../assets/en/MSC/MSC_Verify.png)

Specifying the items to be verified lets you save time during the verification procedure.

A lista principal apresenta todas as tabelas da base de dados. Para cada tabela, é possível limitar a verificação aos registros e/ou a cada índice. Expand the contents of a table or the indexed fields and select/deselect the checkboxes as desired. Por padrão, tudo está selecionado. You can also use the **Select all**, **Deselect all**, **All records** and **All indexes** shortcut buttons.

Para cada linha da tabela, a coluna "Ação" indica as operações a realizar. When the table is expanded, the "Records" and "Indexed fields" rows indicate the number of items concerned.

The "Status" column displays the verification status of each item using symbols:

| ![](../assets/en/MSC/MSC_OK.png)  | A verificação foi efetuada sem problema      |
| --------------------------------- | -------------------------------------------- |
| ![](../assets/en/MSC/MSC_KO2.png) | Verificação efectuada, problemas encontrados |
| ![](../assets/en/MSC/MSC_KO3.png) | Verificação parcialmente efectuada           |
| ![](../assets/en/MSC/MSC_KO.png)  | Verificação não efectuada                    |

Click on **Verify** to begin the verification or on **Standard** to go back to the standard page.

The **Open log file** button can be used to display the log file in the default browser of the machine (see [Open log file](#open-log-file) above).

> The standard page will not take any modifications made on the detailed page into account: when you click on a verification button on the standard page, all the items are verified. On the other hand, the settings made on the detailed page are kept from one session to another.
