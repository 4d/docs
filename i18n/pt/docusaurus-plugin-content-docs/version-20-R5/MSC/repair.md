---
id: repair
title: Página de reparação
sidebar_label: Página de reparação
---

Esta página é utilizada para reparar o ficheiro de dados quando este foi danificado. Generalmente, sólo utilizará estas funciones bajo la supervisión de los equipos técnicos de 4D, cuando se hayan detectado anomalías al abrir la aplicación o tras una [verificación](verify.md).

**Atención:** cada operación de reparación implica la duplicación del archivo original, lo que aumenta el tamaño de la carpeta de la aplicación. É importante ter isto em conta (especialmente em macOS onde as aplicações 4D aparecem como pacotes) para que o tamanho da aplicação não aumente excessivamente. Manually removing the copies of the original file inside the package can be useful to minimize the package size.

> Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). Se tentar fazer essa operação em modo padrão, um aviso informará que o banco de dados será fechado e reiniciado em modo manutenção.

> Quando o banco de dados está encriptado, a reparação dos dados inclui passos de desencriptação e encriptação e, por isso, requer a chave de encriptação de dados atual. If no valid encryption key has already been provided, a dialog requesting the passphrase or the encryption key is displayed (see Encrypt page).

## overview

### Ficheiro de dados a reparar

Nome do caminho do ficheiro de dados atual. El botón **[...]** puede utilizarse para especificar otro archivo de datos. When you click on this button, a standard Open document dialog is displayed so that you can designate the data file to be repaired. Si realiza una [reparación estándar](#standard-repair), debe seleccionar un archivo de datos que sea compatible con el archivo proyecto abierto. Si realiza una reparación [reparación por encabezados de registros](#recover-by-record-headers), puede seleccionar todo archivo de datos. Once this dialog has been validated, the pathname of the file to be repaired is indicated in the window.

### Pasta de cópia de segurança dos ficheiros originais

By default, the original data file will be duplicated before the repair operation. By default, the original data file will be duplicated before the repair operation. El segundo botón **[...]** se puede utilizar para especificar otra ubicación para guardar los archivos originales antes de iniciar la reparación. This option can be used more particularly when repairing voluminous files while using different disks.

### Ficheiros reparados

4D cria um ficheiro de dados em branco no local do ficheiro original. 4D creates a new blank data file at the location of the original file. O ficheiro em branco é preenchido com os dados recuperados.

## Reparação standard

A reparação padrão deve ser escolhida quando apenas alguns registos ou índices estão danificados (as tabelas de endereços estão intactas). Os dados são compactados e reparados. This type of repair can only be performed when the data and structure file match.

When the repair procedure is finished, the "Repair" page of the MSC is displayed. Uma mensagem indica se a reparação foi bem sucedida. Se for assim, pode abrir o banco de dados imediatamente.
![](../assets/en/MSC/MSC_RepairOK.png)

## Recuperar por cabeçalhos de registos

Use this low-level repair option only when the data file is severely damaged and after all other solutions (restoring from a backup, standard repair) have proven to be ineffective.

4D records vary in size, so it is necessary to keep the location where they are stored on disk in a specific table, named address table, in order to find them again. The program therefore accesses the address of the record via an index and the address table. If only records or indexes are damaged, the standard repair option is usually sufficient to resolve the problem. However, when the address table itself is affected, it requires a more sophisticated recovery since it will be necessary to reconstitute it. To do this, the MSC uses the marker located in the header of each record. The markers are compared to a summary of the record, including the bulk of their information, and from which it is possible to reconstruct the address table.

> Si ha desmarcado la opción **Registros eliminados definitivamente** en las propiedades de una tabla en la estructura, la reparación por marcadores de encabezados puede hacer que vuelvan a aparecer los registros que se eliminaron anteriormente.
>
> A recuperação por cabeçalhos não tem em conta as restrições de integridade. Más concretamente, tras esta operación puede obtener valores duplicados con campos únicos o valores NULL con campos declarados **Nunca Null**.

Al hacer clic en **Escanear y reparar...**, 4D realiza un análisis completo del archivo de datos. Quando a verificação estiver concluída, os resultados aparecem na janela seguinte:

![](../assets/en/MSC/mscrepair2.png)

> Se todos os registos e todas as tabelas tiverem sido atribuídos, apenas a área principal é mostrada.

The "Records found in the data file" area includes two tables summarizing the information from the scan of the data file.

- A primeira tabela lista as informações provenientes da verificação do ficheiro de dados. Cada linha mostra um grupo de registos recuperáveis no ficheiro de dados:
  - La columna **Orden** indica el orden de recuperación del grupo de registros.
  - La columna **Número** indica el número de los registros de la tabla.
  - La columna **Tabla de destino** indica los nombres de las tablas que se asignaron automáticamente a los grupos de registros identificados. Os nomes das tabelas atribuídas aparecem automaticamente a verde. Groups that were not assigned, i.e. tables that could not be associated with any records appear in red.
  - La columna **Recuperar** le permite indicar, para cada grupo, si quiere recuperar los registros. By default, this option is checked for every group with records that can be associated with a table.

- A segunda tabela lista as tabelas do ficheiro de projeto.

### Atribuição manual

If several groups of records could not be assigned to tables due to a damaged address table, you can assign them manually.
Para fazer isso, primeiro selecione um grupo de registros não atribuído na primeira tabela. The "Content of the records" area then displays a preview of the contents of the first records of the group to make it easier to assign them:

![](../assets/en/MSC/mscrepair3.png)

A continuación, seleccione la tabla que desea asignar al grupo en la tabla "Tablas no asignadas" y haga clic en el botón **Identificar tabla**. Também pode atribuir uma tabela utilizando a função arrastar e largar.
The group of records is then associated with the table and it will be recovered in this table. Os nomes das tabelas atribuídas manualmente aparecem a preto.
Utilice el botón **Ignorar registros** para eliminar la asociación realizada manualmente entre la tabla y el grupo de registros.

## Abrir arquivo de registo

Depois que a reparação terminar, 4D gera um arquivo de histórico na pasta Logs do banco de dados. Este arquivo permite visualizar todas as operações efectuadas. É criado no formato XML e chamado: _DatabaseName\*\*_Repair_Log_yyyy-mm-dd hh-mm-ss.xml_" onde:

- _ApplicationName_ es el nombre del archivo del proyecto sin ninguna extensión, por ejemplo "Facturas",
- _yyyy-mm-dd hh-mm-ss_ es la marca de tiempo del archivo, basada en la hora del sistema local cuando se inició la operación de mantenimiento, por ejemplo "2019-02-11 15-20-45".

Al presionar el botón **Abrir archivo de historial**, 4D muestra el archivo de historial más reciente en el navegador por defecto de la máquina.
