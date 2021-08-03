---
id: log
title: Arquivo de Log (.journal)
---

Um banco de dados de uso continuo sempre registra mudanças, adições ou apagamentos. Realizar backups ou cópias de segurança regularmente é importante mas lembre que não permite (em caso de problemas) restaurar os dados registrados depois do último backup. Para responder à essa necessidade, 4D oferece agora uma ferramenta específica: o arquivo de log. Este arquivo permite garantir a segurança permanente dos dados do banco de dados.

Além disso, 4D trabalha constantemente com dados cache em memória. Todas as mudanças realizadas nos dados do banco de dados são armazenados temporariamente na cache antes de serem escritas no disco rígido. Isso acelera a operação das aplicações; na verdade, acessar a memória é mais rápido que acessar o disco rígido. Se acontecer algo no banco de dados antes que armazenagem dos dados na cache possa ser gravada no disco rígido, precisa incluir o arquivo de histórico atual para poder restaurar o banco de dados por completo.

Por último, 4D possui funções que analisam os conteúdos do arquivo de histórico, tornando possível reverter as operações realizadas sobre os dados do banco de dados. Essa funções estão disponíveis no MSC: veja a página de[Análise de atividade](MSC/analysis.md) e a página [Rollback](MSC/rollback.md).

## como o arquivo de histórico funciona

O arquivo de histórico gerado por 4D contém uma descrição de todas as operações realizadas nos dados das tbelas registradas no diário do banco de dados, as quais são registradas de forma sequencial. Como padrão, todas as tabelas são registradas, ou seja, incluidas no arquivo de histórico, mas pode desmarcar as tabelas individuais usando a propriedade de tabela **Incluir no arquivo de histórico**.

Dessa forma, cada operação realizada por um usuário causa duas ações simultâneas: a primeira no banco de dados (instrução é realizada normalmente) e a segunda ação no arquivo de histórico (a descrição da ação é registrada). O arquivo de historial se cria de forma independente, sem perturbar nem ralentar o trabalho do usuário. Um banco de dados só pode funcionar com um arquivo de histórico de cada vez. O arquivo de historial registra os seguintes tipos de ações:

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
- Conserva os arquivos de histórico correspondentes às cópias de segurança para poder analisar ou reparar um banco de dados em um momento posterior. A integração de um arquivo de histórico só pode ser realizada no banco de dados ao qual corresponde. Para poder integrar corretamente um arquivo de historial em uma cópia de segurança, é importante que as cópias de segurança e os arquivos de historial se arquivem simultaneamente.


## Criar o arquivo de histórico

Como padrão, todo banco de dados criado com 4D utiliza um arquivo de histórico (opção definida na página **Geral** das Preferências). The log file is named *data.journal* and is placed in the Data folder.

Pode averiguar se seu banco de dados utiliza um arquivo de histórico a qualquer momento: só precisa comprovar se a opção **Utilizar o arquivo de histórico** estiver selecionada na página **Backup/Configuración** das Propriedades do banco. Se desmarcar essa opção, ou se usar um banco de dados sem arquivo de histórico, e quiser estabelecer uma estratégia de backup com um arquivo de histórico, vai precisar criar um.

To create a log file:

1. Na página **Cópia de segurança/Configuração** das Propriedades do banco de dados, marque a opção **Utilizar o arquivo de histórico**. The program displays a standard open/new file dialog box. By default, the log file is named *data.journal*.

2. Keep the default name or rename it, and then select the file location. Se tiver pelo menos dois discos rígidos, é recomendado que coloque o arquivo de histórico no disco que não tenha seu banco de dados. Se perder o disco rígido do banco de dados, poderá então recuperar o arquivo de histórico.

3. Click **Save**. The disk and the name of the open log file are now displayed in the **Use Log** area of the dialog box. You can click on this area in order to display a pop-up menu containing the log path on the disk.

4. Valide a caixa de diálogo das Propriedades do banco de dados.

Para poder criar um arquivo de histórico diretamente, o banco de dados deve estar em uma das situações abaixo:

- The data file is blank,
- Acaba de realizar uma cópia de segurança do banco de dados e ainda não foram realizadas mudanças nos dados.

Em todos os outros casos, quando validar a caixa de diálogo Propriedades de Banco de Dados, um diálogo de alerta informará que é necessário fazer um backup. If you click **OK**, the backup begins immediately, then the log file is activated. Si clicar em **Cancelar**, a solicitação é salva mas a criação do arquivo de histórico é adiada e só criará depois da próxima cópia de segurança do banco de dados. Essa precaução é indispensável porque, para restaurar o banco de dados depois de um incidente, é preciso uma cópia do banco de dados na qual se integrarão às operações registradas no arquivo de histórico.

Sem ter que fazer nada a mais, todas as operações realizadas sobre os dados são registradas nesse arquivo, e são usadas no futuro quando abrir o banco de dados.

You must create another log file if you create a new data file. You must set or create another log file if you open another data file that is not linked to a log file (or if the log file is missing).


## Stopping a log file

Se quiser parar as operações de registro no arquivo de histórico atual, apenas desmarque a opção **Use Log|Usar o arquivo de histórico ** na página **Backup/Configuration** das Propriedades do banco de dados.

4D then displays an alert message to remind you that this action prevents you from taking advantage of the security that the log file provides:

![](assets/en/Backup/backup06.png)

Se clicar **Stop**, o arquivo de histórico é imediatamente fechado (a caixa de diálogo Propriedades do banco de dados não precisa ser validada depois).

If you wish to close the current log file because it is too large, you might consider performing a data file backup, which will cause the log file to be backed up as well.

> **4D Server:** The `New log file` command automatically closes the current log file and starts a new one. If for some reason the log file becomes unavailable during a working session, error 1274 is generated and 4D Server does not allow users to write data anymore. When the log file is available again, it is necessary to do a backup.
