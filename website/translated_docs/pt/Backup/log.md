---
id: log
title: Arquivo de Log (.journal)
---

Uma aplicação de uso continuo sempre registra mudanças, adições ou eliminações. Realizar backups ou cópias de segurança regularmente é importante mas lembre que não permite (em caso de problemas) restaurar os dados registrados depois do último backup. Para responder à essa necessidade, 4D oferece agora uma ferramenta específica: o arquivo de log. Este arquivo permite garantir a segurança permanente dos dados.

Além disso, 4D trabalha constantemente com dados cache em memória. Qualquer mudança feita para os dados da aplicação são armazenados temporariamente na cache antes de serem escritas no disco rigido. Isso acelera a operação das aplicações; na verdade, acessar a memória é mais rápido que acessar o disco rígido. Se acontecer algo na aplicação antes que armazenagem dos dados na cache possa ser gravada no disco rígido, precisa incluir o arquivo de histórico atual para poder restaurar a aplicação por completo.

Por último, 4D possui funções que analisam os conteúdos do arquivo de histórico, tornando possível reverter as operações realizadas sobre os dados da aplicação. Essa funções estão disponíveis no MSC: veja a página de[Análise de atividade](MSC/analysis.md) e a página [Rollback](MSC/rollback.md).

## como o arquivo de histórico funciona

O arquivo de histórico gerado por 4D contém uma descrição de todas as operações realizadas nos dados das tbelas registradas no diário, as quais são registradas de forma sequencial. Como padrão, todas as tabelas são registradas, ou seja, incluidas no arquivo de histórico, mas pode desmarcar as tabelas individuais usando a propriedade de tabela **Incluir no arquivo de histórico**.

Dessa forma, cada operação realizada por um usuário causa duas ações simultâneas: a primeira é no arquivo de dados (a instrução é executada normalmente) e a segunda é no arquivo de histórico ( a descrição da operação é registrada). O arquivo de historial se cria de forma independente, sem perturbar nem ralentar o trabalho do usuário. Uma aplicação só pode trabalhar com um arquivo de historial por vez. O arquivo de historial registra os seguintes tipos de ações:

- Abertura e fechamento de arquivos de dados,
- Abertura e fechamento de processos (contextos),
- Adição de registros ou BLOBs,
- Modificação de registros,
- Eliminação de registros,
- Criar ou fechar as transações.

Para saber mais sobre essas ações, consulte a página [Análise de atividades](MSC/analysis.md) do CSM.

4D gerencia o arquivo de historial. Leva em consideração todas as operações que afetam o arquivo de dados por igual, independente das manipulações realizadas pelo usuário, métodos 4D, o motor SQL, os plug-ins, ou um navegador web ou uma aplicação móvel.

A instrução abaixo resume o funcionamento do arquivo de historial:

![](assets/en/Backup/backup05.png)


O arquivo de historial atual se guarda automaticamente com o arquivo de dados atual. Este mecanismo tem duas vantagens distintas:

- Evitar a saturação do volume de disco onde se armazena o arquivo de historial. Sem uma cópia de segurança, o arquivo de histórico ficaria cada vez maior com o  uso, e acabaria utilizando todo o espaço disponível no disco. Para cada cópia de segurnça do arquivo de dados, 4D ou 4D Server fecha o arquivo de histórico atual e  imediatamente inicia um novo arquivo vazio, evitando assim o riesco de saturação. A continuação, o arquivo de historial antigo se arquiva e, finalmente, se destrói em função do mecanismo de gestão dos conjuntos de cópias de seguriança.
- Conservar os arquivos de historial correspondentes às copias de segurança para poder analisar o reparar uma aplicação em um momento posterior. A integração de um arquivo de historial só pode ser feita na aplicação à que corresponde. Para poder integrar corretamente um arquivo de historial em uma cópia de segurança, é importante que as cópias de segurança e os arquivos de historial se arquivem simultaneamente.


## Criar o arquivo de histórico

By default, any application project created with 4D uses a log file (option set in the **General** page of the Preferences). The log file is named *data.journal* and is placed in the Data folder.

You can find out if your application uses a log file at any time: just check whether the **Use Log** option is selected on the **Backup/Configuration** page of the Settings. If you deselected this option, or if you use an application without a log file and wish to set up a backup strategy with a log file, you will have to create one.

To create a log file:

1. On the **Backup/Configuration** page of the Structure Settings, check the **Use Log** option. The program displays a standard open/new file dialog box. By default, the log file is named *data.journal*.

2. Keep the default name or rename it, and then select the file location. If you have at least two hard drives, it is recommended that you place the log file on a disk other than the one containing the application project. If the application hard drive is lost, you can still recall your log file.

3. Click **Save**. The disk and the name of the open log file are now displayed in the **Use Log** area of the dialog box. You can click on this area in order to display a pop-up menu containing the log path on the disk.

4. Validate the Settings dialog box.

In order for you to be able to create a log file directly, the data must be in one of the following situations:

- The data file is blank,
- You just performed a backup and no changes have yet been made to the data.

In all other cases, when you validate the Settings dialog box, an alert dialog box will appear to inform you that it is necessary to perform a backup. If you click **OK**, the backup begins immediately, then the log file is activated. If you click **Cancel**, the request is saved but the creation of the log file is postponed and it will actually be created only after the next backup of the application. This precaution is indispensable because, in order to restore an application after any incidents, you will need a copy of the application into which the operations recorded in the log file will be integrated.

Without having to do anything else, all operations performed on the data are logged in this file and it will be used in the future when the application is opened.

You must create another log file if you create a new data file. You must set or create another log file if you open another data file that is not linked to a log file (or if the log file is missing).



## Stopping a log file

If you would like to stop logging operations to the current log file, simply deselect the **Use Log** option on the **Backup/Configuration** page of the Settings.

4D then displays an alert message to remind you that this action prevents you from taking advantage of the security that the log file provides:

![](assets/en/Backup/backup06.png)

If you click **Stop**, the current log file is immediately closed (the Settings dialog box does not need to be validated afterwards).

If you wish to close the current log file because it is too large, you might consider performing a data file backup, which will cause the log file to be backed up as well.

> **4D Server:** The `New log file` command automatically closes the current log file and starts a new one. If for some reason the log file becomes unavailable during a working session, error 1274 is generated and 4D Server does not allow users to write data anymore. When the log file is available again, it is necessary to do a backup.