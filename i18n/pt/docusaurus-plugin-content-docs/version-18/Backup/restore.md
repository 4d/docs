---
id: restore
title: Restaurar um backup
---

4D allows you to restore entire sets of database data in case of any incidents, regardless of the cause of the incident. Podem ocorrer dois tipos principais de incidentes:

- The unexpected stoppage of a database while in use. Esse incidente pode ocorrer por causa de uma falha de energia, erro em um elemento do sistema, etc. In this case, depending on the current state of the data cache at the moment of the incident, the restore of the database can require different operations:
  - If the cache was empty, the database opens normally. Todas as alterações efectuadas na base de dados foram registadas. Este caso não exige nenhuma operação particular
  - Se a cache conter operações, o arquivo de dados está intacto mas exige integrar o arquivo de histórico atual.
  - Se a cache estiver no processo de ser escrita, o arquivo de dados está provavelmente danificado. When restoring a backup and integrating the current log file in a encrypted database:

- A perda de ficheiro(s) de base de dados. This incident can occur because of defective sectors on the disk containing the database, a virus, manipulation error, etc. O último backup deve ser restaurado e o arquivo de histórico atual deve ser integrado. To find out if a database was damaged following an incident, simply relaunch the database using 4D. O programa realiza um autodiagnóstico e detalha as operações de restauração necessárias. Em modo automático, essas operações são realizadas diretamente sem precisar de ajuda da parte do usuário. If a regular backup strategy was put into place, the 4D restore tools will allow you to recover (in most cases) the database in the exact state it was in before the incident.

> 4D can launch procedures automatically to recover databases following incidents. These mechanisms are managed using two options available on the **Backup/Backup & Restore** page of the Database Settings. For more information, refer to the [Automatic Restore](settings.md#automatic-restore) paragraph.  
> If the incident is the result of an inappropriate operation performed on the data (deletion of a record, for example), you can attempt to repair the database using the "rollback" function in the log file. Essa função está disponível na página [Rollback](MSC/rollback.md) do MSC.

## Restaurar manualmente o backup (diálogo padrão)

Pode restaurar manualmente os conteúdos de um arquivo gerado pelo módulo de cópia de segurança. Uma restauração manual pode ser necessária, por exemplo, para restaurar os conteúdos completos de um arquivo (arquivos projetos e arquivos anexos) ou, para o propósito de realizar pesquisas entre os arquivos. A restauração manual pode também ser realizada junto com a integração do arquivo de histórico atual.

The manual restore of backups can be carried out either via the standard Open document dialog box, or via the [Restore](MSC/restore) page of the MSC. A restauração através do MSC oferece mais opções e permite pré-visualizar os conteúdos dos arquivos. On the other hand, only archives associated with the open database can be restored.

To restore a database manually via a standard dialog box:

1. **Content**: Contents of the backup file. Não é obrigatório que uma base de dados esteja aberta. OR Execute the `RESTORE` command from a 4D method. Uma caixa de diálogo de abertura de arquivos vai aparecer.
2. Selecione um arquivo de backup (.4bk) ou um arquivo de backup de histórico (.4bl) para ser restaurado e clique **Abrir**. Aparece um diálogo que permite especificar o local onde os arquivos serão restaurados. Como padrão 4D restaura os arquivos em uma pasta chamada *Archivename* (sem extensão) que fica do lado do arquivo. Pode exibir a rota:

![](../assets/en/Backup/backup07.png)

You can also click on the **Browse...** button found just under the area in order to open any other archive file from a different location.
3. The **Restore** button launches the manual restoration of the selected element(s). 4D extrai todos os arquivos de backup do local especificado. Se o arquivo de histórico atual ou um arquivo de histórico de backup com o mesmo número que o arquivo de cópia de segurança for armazenado na mesma pasta, 4D examina seus conteúdos. Se conter operações não presentes no arquivo de dados, o programa vai perguntar se deseja integrar essas operações. A integração é feita automaticamente se a opção **Integrar último arquivo de histórico...** for marcada (ver [Restauração automática](settings.md#automatic-restore)). 4.(Optional) Click **OK** to integrate the log file into the restored database. Se a restauração e integração forem realizadas corretamente, 4D exibe uma caixa de diálogo indicando que a operação foi feita com sucesso.
5. **Date and Time**: Date and time of backup. A pasta de destino é mostrada. Durante a restauração, 4D coloca todos os arquivos de backup nessa pasta, independente da posição dos arquivos originais no disco quando o backup começou. Dessa forma seus arquivos serão mais fáceis de encontrar.

## Restaurar manualmente a cópia de segurança (MSC)

You can manually restore an archive of the current database using the [Restore page](MSC/restore.md) of the Maintenance and Security Center (MSC).

## Integração manual do histórico

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the database when 4D notices that the log file contains more operations than have been carried out in the database.

![](../assets/en/Backup/backup08.png)

> Para que esse mecanismo funcione, 4D deve poder acessar o arquivo de histórico em seu local atual.

Pode escolher se quer ou não integrar o arquivo de histórico atual. Não integrar o arquivo de histórico atual permite evitar reproduzir erros feitos nos dados.
