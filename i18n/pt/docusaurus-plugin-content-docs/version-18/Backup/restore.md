---
id: restore
title: Restaurar um backup
---

4D lhe permite restaurar conjuntos inteiros de dados de um banco de dados no caso de que se apresente um incidente, independentemente da causa do mesmo. Podem ocorrer dois tipos principais de incidentes:

- A interrupção inesperada de um banco de dados durante o uso. Esse incidente pode ocorrer por causa de uma falha de energia, erro em um elemento do sistema, etc. Esse incidente pode ocorrer por causa de uma falha de energia, erro em um elemento do sistema, etc. Esse incidente pode ocorrer por causa de uma falha de energia, erro em um elemento do sistema, etc. In this case, depending on the current state of the data cache at the moment of the incident, the restore of the database can require different operations:
  - Se a cache estiver vazia, a base de dados abre-se normalmente. Todas as alterações efectuadas na base de dados foram registadas. Este caso não exige nenhuma operação particular
  - Se a cache conter operações, o arquivo de dados está intacto mas exige integrar o arquivo de histórico atual.
  - Se a cache estiver no processo de ser escrita, o arquivo de dados está provavelmente danificado. When restoring a backup and integrating the current log file in a encrypted database:

- A perda de ficheiro(s) de base de dados. This incident can occur because of defective sectors on the disk containing the database, a virus, manipulation error, etc. O último backup deve ser restaurado e o arquivo de histórico atual deve ser integrado. O último backup deve ser restaurado e o arquivo de histórico atual deve ser integrado. Para descobrir se uma base de dados foi danificada após um incidente, simplesmente reinicie a base de dados usando 4D. O programa realiza um autodiagnóstico e detalha as operações de restauração necessárias. Em modo automático, essas operações são realizadas diretamente sem precisar de ajuda da parte do usuário. Se usar uma estratégia de backup regulares, as ferramentas de restauração de 4D permite recuperar (geralmente) o banco de dados na mesma situação que estava antes do incidente.

> 4D pode lançar procedimentos automaticamente para recuperar os bancos de dados depois de um incidente. Estes mecanismos são gerenciados usando duas opções disponíveis no **Backup/Backup & Restaurar** página das configurações do banco de dados. Para mais informações, veja o parágrafo [Restauração automatica ](settings.md#automatic-restore).  
> Se o incidente for resultado de uma operação inadequada realizadas nos dados (eliminação de um registro, por exemplo) pode tentar reparar o banco de dados usando a função "rollback" do arquivo de histórico. Essa função está disponível na página [Rollback](MSC/rollback.md) do MSC.

## Restaurar manualmente o backup (diálogo padrão)

Pode restaurar manualmente os conteúdos de um arquivo gerado pelo módulo de cópia de segurança. Uma restauração manual pode ser necessária, por exemplo, para restaurar os conteúdos completos de um arquivo (arquivos projetos e arquivos anexos) ou, para o propósito de realizar pesquisas entre os arquivos. A restauração manual pode também ser realizada junto com a integração do arquivo de histórico atual.

A restauração manual de backups pode ser realizada via a caixa de diálogo de Abertura de documento ou através da página [Restaurar](MSC/restore) do CSM. A restauração através do MSC oferece mais opções e permite pré-visualizar os conteúdos dos arquivos. Por outro lado, apenas os arquivos associados com o banco de dados aberto podem ser restaurados.

Para restaurar um banco de dados manualmente via uma caixa de diálogo padrão:

1. **Content**: Contents of the backup file. Não é obrigatório que uma base de dados esteja aberta. OR Execute the `RESTORE` command from a 4D method. Uma caixa de diálogo de abertura de arquivos vai aparecer.
2. Selecione um arquivo de backup (.4bk) ou um arquivo de backup de histórico (.4bl) para ser restaurado e clique **Abrir**. Aparece um diálogo que permite especificar o local onde os arquivos serão restaurados. Como padrão 4D restaura os arquivos em uma pasta chamada *Archivename* (sem extensão) que fica do lado do arquivo. Pode exibir a rota:

![](../assets/en/Backup/backup07.png)

You can also click on the **Browse...** button found just under the area in order to open any other archive file from a different location.
3. The **Restore** button launches the manual restoration of the selected element(s). 4D extrai todos os arquivos de backup do local especificado. Se o arquivo de histórico atual ou um arquivo de histórico de backup com o mesmo número que o arquivo de cópia de segurança for armazenado na mesma pasta, 4D examina seus conteúdos. Se conter operações não presentes no arquivo de dados, o programa vai perguntar se deseja integrar essas operações. A integração é feita automaticamente se a opção **Integrar último arquivo de histórico...** for marcada (ver [Restauração automática](settings.md#automatic-restore)). 4. (Opcional) Clique em **OK** para integrar o arquivo de log no banco de dados restaurado. Se a restauração e integração forem realizadas corretamente, 4D exibe uma caixa de diálogo indicando que a operação foi feita com sucesso.
5. **Date and Time**: Date and time of backup. A pasta de destino é mostrada. Durante a restauração, 4D coloca todos os arquivos de backup nessa pasta, independente da posição dos arquivos originais no disco quando o backup começou. Dessa forma seus arquivos serão mais fáceis de encontrar.

## Restaurar manualmente a cópia de segurança (MSC)

Pode restaurar manualmente um arquivo do banco de dados atual utilizando a página [Restauração](MSC/restore.md) do Centro de Manutenção e Segurança (CMS).

## Integração manual do histórico

Se você não tiver marcado a opção para a integração automática do arquivo de registro na página Restore do MSC (consulte [Integração sucessiva de vários arquivos de registro](MSC/restore.md#successive-integration-of-several-data-log-files)), uma caixa de diálogo de aviso será exibida durante a abertura do banco de dados quando o 4D perceber que o arquivo de registro contém mais operações do que as que foram executadas no banco de dados.

![](../assets/en/Backup/backup08.png)

> Para que esse mecanismo funcione, 4D deve poder acessar o arquivo de histórico em seu local atual.

Pode escolher se quer ou não integrar o arquivo de histórico atual. Não integrar o arquivo de histórico atual permite evitar reproduzir erros feitos nos dados.
