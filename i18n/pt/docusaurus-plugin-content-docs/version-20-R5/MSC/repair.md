---
id: repair
title: Página de reparação
sidebar_label: Página de reparação
---

Esta página é utilizada para reparar o ficheiro de dados quando este foi danificado. Generally, you will only use these functions under the supervision of 4D technical teams, when anomalies have been detected while opening the application or following a [verification](verify.md).

**Warning:** Each repair operation involves the duplication of the original file, which increases the size of the application folder. É importante ter isto em conta (especialmente em macOS onde as aplicações 4D aparecem como pacotes) para que o tamanho da aplicação não aumente excessivamente. Manually removing the copies of the original file inside the package can be useful to minimize the package size.

> Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). Se tentar fazer essa operação em modo padrão, um aviso informará que o banco de dados será fechado e reiniciado em modo manutenção.

> Quando o banco de dados está encriptado, a reparação dos dados inclui passos de desencriptação e encriptação e, por isso, requer a chave de encriptação de dados atual. If no valid encryption key has already been provided, a dialog requesting the passphrase or the encryption key is displayed (see Encrypt page).

## overview

### Ficheiro de dados a reparar

Nome do caminho do ficheiro de dados atual. The **[...]** button can be used to specify another data file. When you click on this button, a standard Open document dialog is displayed so that you can designate the data file to be repaired. If you perform a [standard repair](#standard-repair), you must select a data file that is compatible with the open project file. If you perform a [recover by record headers](#recover-by-record-headers) repair, you can select any data file. Once this dialog has been validated, the pathname of the file to be repaired is indicated in the window.

### Pasta de cópia de segurança dos ficheiros originais

By default, the original data file will be duplicated before the repair operation. By default, the original data file will be duplicated before the repair operation. The second **[...]** button can be used to specify another location for the original files to be saved before repairing begins. This option can be used more particularly when repairing voluminous files while using different disks.

### Ficheiros reparados

4D cria um ficheiro de dados em branco no local do ficheiro original. 4D creates a new blank data file at the location of the original file. O ficheiro em branco é preenchido com os dados recuperados.

## Reparação standard

A reparação padrão deve ser escolhida quando apenas alguns registos ou índices estão danificados (as tabelas de endereços estão intactas). Os dados são compactados e reparados. This type of repair can only be performed when the data and structure file match.

When the repair procedure is finished, the "Repair" page of the MSC is displayed. Uma mensagem indica se a reparação foi bem sucedida. Se for assim, pode abrir o banco de dados imediatamente.
![](../assets/en/MSC/MSC_RepairOK.png)

## Recuperar por cabeçalhos de registos

Use this low-level repair option only when the data file is severely damaged and after all other solutions (restoring from a backup, standard repair) have proven to be ineffective.

4D records vary in size, so it is necessary to keep the location where they are stored on disk in a specific table, named address table, in order to find them again. The program therefore accesses the address of the record via an index and the address table. If only records or indexes are damaged, the standard repair option is usually sufficient to resolve the problem. However, when the address table itself is affected, it requires a more sophisticated recovery since it will be necessary to reconstitute it. To do this, the MSC uses the marker located in the header of each record. The markers are compared to a summary of the record, including the bulk of their information, and from which it is possible to reconstruct the address table.

> If you have deselected the **Records definitively deleted** option in the properties of a table in the structure, performing a recovery by header markers may cause records that were previously deleted to reappear.
>
> A recuperação por cabeçalhos não tem em conta as restrições de integridade. More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared **Never Null**.

When you click on **Scan and repair...**, 4D performs a complete scan of the data file. Quando a verificação estiver concluída, os resultados aparecem na janela seguinte:

![](../assets/en/MSC/mscrepair2.png)

> Se todos os registos e todas as tabelas tiverem sido atribuídos, apenas a área principal é mostrada.

The "Records found in the data file" area includes two tables summarizing the information from the scan of the data file.

- A primeira tabela lista as informações provenientes da verificação do ficheiro de dados. Cada linha mostra um grupo de registos recuperáveis no ficheiro de dados:
  - The **Order** column indicates the recovery order for the group of records.
  - The **Count** column indicates the number of the records in the table.
  - The **Destination table** column indicates the names of tables that were automatically assigned to the groups of identified records. Os nomes das tabelas atribuídas aparecem automaticamente a verde. Groups that were not assigned, i.e. tables that could not be associated with any records appear in red.
  - The **Recover** column lets you indicate, for each group, whether you want to recover the records. By default, this option is checked for every group with records that can be associated with a table.

- A segunda tabela lista as tabelas do ficheiro de projeto.

### Atribuição manual

If several groups of records could not be assigned to tables due to a damaged address table, you can assign them manually.
Para fazer isso, primeiro selecione um grupo de registros não atribuído na primeira tabela. The "Content of the records" area then displays a preview of the contents of the first records of the group to make it easier to assign them:

![](../assets/en/MSC/mscrepair3.png)

Next select the table you want to assign to the group in the "Unassigned tables" table and click on the **Identify table** button. Também pode atribuir uma tabela utilizando a função arrastar e largar.
The group of records is then associated with the table and it will be recovered in this table. Os nomes das tabelas atribuídas manualmente aparecem a preto.
Use the **Ignore records** button to remove the association made manually between the table and the group of records.

## Abrir arquivo de registo

Depois que a reparação terminar, 4D gera um arquivo de histórico na pasta Logs do banco de dados. Este arquivo permite visualizar todas as operações efectuadas. É criado no formato XML e chamado: _DatabaseName\*\*_Repair_Log_yyyy-mm-dd hh-mm-ss.xml_" onde:

- _ApplicationName_ is the name of the project file without any extension, for example "Invoices",
- _yyyy-mm-dd hh-mm-ss_ is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.
