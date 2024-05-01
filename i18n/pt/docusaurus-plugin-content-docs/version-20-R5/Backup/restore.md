---
id: restore
title: Restaurar um backup
---

4D lhe permite restaurar conjuntos inteiros de dados de um banco de dados no caso de que se apresente um incidente, independentemente da causa do mesmo. Podem ocorrer dois tipos principais de incidentes:

- A parada inesperada do banco enquanto estiver em uso. Esse incidente pode ocorrer por causa de uma falha de energia, erro em um elemento do sistema, etc. Esse incidente pode ocorrer por causa de uma falha de energia, erro em um elemento do sistema, etc. This incident can occur because of a power outage, system element failure, etc. In this case, depending on the current state of the data cache at the moment of the incident, the restore of the database can require different operations:
  - Se a cache estiver vazia, o banco de dados abre normalmente. Quaisquer mudanças feitas no banco de dados foram registradas. Este caso não exige nenhuma operação particular
  - Se a cache conter operações, o arquivo de dados está intacto mas exige integrar o arquivo de histórico atual.
  - Se a cache estiver no processo de ser escrita, o arquivo de dados está provavelmente danificado. When restoring a backup and integrating the current log file in a encrypted database:

- A perda de um ou mais arquivos do banco de dados. This incident can occur because of defective sectors on the disk containing the database, a virus, manipulation error, etc. The last backup must be restored and then the current log file must be integrated. O último backup deve ser restaurado e o arquivo de histórico atual deve ser integrado. Para saber se um banco de dados foi danificado depois de um incidente, basta relançar o banco de dados com 4D. O programa realiza um autodiagnóstico e detalha as operações de restauração necessárias. Em modo automático, essas operações são realizadas diretamente sem precisar de ajuda da parte do usuário. Se usar uma estratégia de backup regulares, as ferramentas de restauração de 4D permite recuperar (na maioria dos casos) o banco de dados na mesma situação que estava antes do incidente.

> 4D pode lançar procedimentos automaticamente para recuperar os bancos de dados depois de um incidente. These mechanisms are managed using two options available on the **Backup/Backup & Restore** page of the Settings. For more information, refer to the [Automatic Restore](settings.md#automatic-restore) paragraph.\
> If the incident is the result of an inappropriate operation performed on the data (deletion of a record, for example), you can attempt to repair the data file using the "rollback" function in the log file. This function is available on the [Rollback](MSC/rollback.md) page of the MSC.

## Restaurar manualmente o backup (diálogo padrão)

Pode restaurar manualmente os conteúdos de um arquivo gerado pelo módulo de cópia de segurança. Uma restauração manual pode ser necessária, por exemplo, para restaurar os conteúdos completos de um arquivo (arquivos projetos e arquivos anexos) ou, para o propósito de realizar pesquisas entre os arquivos. A restauração manual pode também ser realizada junto com a integração do arquivo de histórico atual.

The manual restore of backups can be carried out either via the standard Open document dialog box, or via the [Restore](../MSC/restore.md) page of the MSC. A restauração através do MSC oferece mais opções e permite pré-visualizar os conteúdos dos arquivos. Restoring via the MSC provides more options and allows the archive contents to be previewed.

Para restaurar um banco de dados manualmente via uma caixa de diálogo padrão:

1. Choose **Restore...** in the 4D application **File** menu.
   Não é obrigatório que um banco de dados seja aberto.
   OR
   Execute the `RESTORE` command from a 4D method.
   Uma caixa de diálogo de abertura de arquivos vai aparecer.
2. Select a backup file (.4bk) or a log backup file (.4bl) to be restored and click **Open**.
   Aparece um diálogo que permite especificar o local onde os arquivos serão restaurados. By default, 4D restores the files in a folder named _Archivename_ (no extension) located next to the archive. Pode exibir a rota:

![](../assets/en/Backup/backup07.png)

You can also click on the **[...]** button to specify a different location.
3. Click on the **Restore** button.
4D extrai todos os arquivos de backup do local especificado.
Se o arquivo de histórico atual ou um arquivo de histórico de backup com o mesmo número que o arquivo de cópia de segurança for armazenado na mesma pasta, 4D examina seus conteúdos. Se conter operações não presentes no arquivo de dados, o programa vai perguntar se deseja integrar essas operações. Integration is done automatically if the **Integrate last log file...** option is checked (see [Automatic Restore](settings.md#automatic-restore)).

4.(Optional) Click **OK** to integrate the log file into the restored application.
Se a restauração e integração forem realizadas corretamente, 4D exibe uma caixa de diálogo indicando que a operação foi feita com sucesso.
5. Click **OK**.

A pasta de destino é mostrada. Durante a restauração, 4D coloca todos os arquivos de backup nessa pasta, independente da posição dos arquivos originais no disco quando o backup começou. Dessa forma seus arquivos serão mais fáceis de encontrar.

> Any content related to the data file (files and `Settings` folder) are automatically restored in a `Data` subfolder within the destination folder.

## Restaurar manualmente a cópia de segurança (MSC)

You can manually restore an archive of the current application using the [Restore page](MSC/restore.md) of the Maintenance and Security Center (MSC).

## Integração manual do histórico

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the application when 4D notices that the log file contains more operations than have been carried out in the data file.

![](../assets/en/Backup/backup08.png)

> Para que esse mecanismo funcione, 4D deve poder acessar o arquivo de histórico em seu local atual.

Pode escolher se quer ou não integrar o arquivo de histórico atual. Não integrar o arquivo de histórico atual permite evitar reproduzir erros feitos nos dados.
