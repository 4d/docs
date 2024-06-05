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

> 4D pode lançar procedimentos automaticamente para recuperar os bancos de dados depois de um incidente. Estos mecanismos se gestionan mediante dos opciones disponibles en la página **Backup/Backup y Restauración** de las Propiedades. For more information, refer to the [Automatic Restore](settings.md#automatic-restore) paragraph.\
> If the incident is the result of an inappropriate operation performed on the data (deletion of a record, for example), you can attempt to repair the data file using the "rollback" function in the log file. Esta función está disponible en la página [Retroceder](MSC/rollback.md) del CSM.

## Restaurar manualmente o backup (diálogo padrão)

Pode restaurar manualmente os conteúdos de um arquivo gerado pelo módulo de cópia de segurança. Uma restauração manual pode ser necessária, por exemplo, para restaurar os conteúdos completos de um arquivo (arquivos projetos e arquivos anexos) ou, para o propósito de realizar pesquisas entre os arquivos. A restauração manual pode também ser realizada junto com a integração do arquivo de histórico atual.

La restauración manual de las copias de seguridad puede realizarse a través de la caja de diálogo estándar de apertura de documento, o a través de la página [Restitución](../MSC/restore.md) del CSM. A restauração através do MSC oferece mais opções e permite pré-visualizar os conteúdos dos arquivos. Restoring via the MSC provides more options and allows the archive contents to be previewed.

Para restaurar um banco de dados manualmente via uma caixa de diálogo padrão:

1. Elija **Restituir...** en el menú de la aplicación 4D **Archivo**.
   Não é obrigatório que um banco de dados seja aberto.
   OR Execute the `RESTORE` command from a 4D method.
   Uma caixa de diálogo de abertura de arquivos vai aparecer.
2. Seleccione un archivo de copia de seguridad (.4bk) o un archivo de copia de seguridad del historial (.4bl) que desee restaurar y haga clic en **Abrir**.
   Aparece um diálogo que permite especificar o local onde os arquivos serão restaurados. Por defecto, 4D restaura los archivos en una carpeta llamada _Nomarchivo_ (sin extensión) situada junto al archivo. Pode exibir a rota:

![](../assets/en/Backup/backup07.png)

También puede hacer clic en el botón **[...]** para especificar una ubicación diferente.
3. Haga clic en el botón **Restaurar**.
4D extrai todos os arquivos de backup do local especificado.
Se o arquivo de histórico atual ou um arquivo de histórico de backup com o mesmo número que o arquivo de cópia de segurança for armazenado na mesma pasta, 4D examina seus conteúdos. Se conter operações não presentes no arquivo de dados, o programa vai perguntar se deseja integrar essas operações. La integración se realiza automáticamente si la opción **de integración automática del historial** está seleccionada (ver [Restauración automática](settings.md#automatic-restore)).

4.(Opcional) Haga clic en **OK** para integrar el archivo de historial en la aplicación restaurada.
Se a restauração e integração forem realizadas corretamente, 4D exibe uma caixa de diálogo indicando que a operação foi feita com sucesso.
5. Haga clic en **OK**.

A pasta de destino é mostrada. Durante a restauração, 4D coloca todos os arquivos de backup nessa pasta, independente da posição dos arquivos originais no disco quando o backup começou. Dessa forma seus arquivos serão mais fáceis de encontrar.

> Todo el contenido relacionado con el archivo de datos (carpeta archivos y `Settings`) se restaura automáticamente en una subcarpeta `Data` dentro de la carpeta de destino.

## Restaurar manualmente a cópia de segurança (MSC)

Puede restaurar manualmente un archivo de la aplicación actual utilizando la página [Restauración](MSC/restore.md) del Centro de Mantenimiento y Seguridad (CMS).

## Integração manual do histórico

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the application when 4D notices that the log file contains more operations than have been carried out in the data file.

![](../assets/en/Backup/backup08.png)

> Para que esse mecanismo funcione, 4D deve poder acessar o arquivo de histórico em seu local atual.

Pode escolher se quer ou não integrar o arquivo de histórico atual. Não integrar o arquivo de histórico atual permite evitar reproduzir erros feitos nos dados.
