---
id: maintenance
title: Página Manutenção
---


A página **Manutenção** da janela de Administração de Servidor 4D fornece informações sobre a operação atual da aplicação. Ele também fornece acesso às funções básicas de manutenção:

![](../assets/en/Admin/server-maintenance.png)


## Última verificação/compactação

Estas áreas indicam a data, hora e estado da última [verificação de dados](MSC/verify.md) e [operação de compactação](MSC/compact.md) realizadas no banco de dados.

### Verificar registos e índices

Este botão pode ser usado para iniciar a operação de verificação diretamente, sem interromper o servidor. Observe que o servidor pode ficar visivelmente mais lento durante a operação.

Todos os registros e todos os índices do banco de dados são verificados. Se você quer ser capaz de direcionar a verificação ou ter opções adicionais disponíveis, você precisará usar o [Manutenção e Centro de Segurança](MSC/overview.md) (MSC).

After verification, a report file is generated in XML format on the server in the [maintenance Logs](../Project/architecture.md#logs) folder. Botão **Visualizar Relatório** (chamado **Download Relatório** se a operação foi realizada de uma máquina remota) permite que você exiba o arquivo em seu navegador.

### Compactar dados...

Assim, o botão pode ser usado para executar uma operação de compactação de dados diretamente. Esta operação requer parar o servidor: quando você clicar neste botão, a caixa de diálogo de desligamento do Servidor 4D aparece para que você possa escolher como interromper a operação:

![](../assets/en/Admin/server-shut.png)

Após a interrupção real do serviço de aplicação, 4D Server realiza uma operação padrão de compactação nos dados da base de dados. Se você deseja ter opções adicionais disponíveis, você precisará usar o [MSC](MSC/overview.md).

Quando a compactação terminar, o servidor 4D reinicia automaticamente o aplicativo. Os usuários 4D podem então ser reconectados.

> Se o pedido de compactação foi realizado a partir de uma máquina remota 4D remota, esta máquina é automaticamente reconectada pelo Servidor 4D.

After verification, a report file is generated in XML format on the server in the [maintenance Logs](../Project/architecture.md#logs) folder. Botão **Visualizar Relatório** (chamado **Download Relatório** se a operação foi realizada de uma máquina remota) permite que você exiba o arquivo em seu navegador.


## Tempo de funcionamento

Esta área indica a duração da execução do aplicativo 4D Server desde a última vez que foi iniciado (dias, horas e minutos).


### Reiniciar o servidor...

Este botão pode ser usado para fechar e reiniciar imediatamente o projeto. Quando você clica neste botão, a caixa de diálogo de desligamento do Servidor 4D aparece para que você possa escolher como interromper a operação. Após a validação, 4D Server fecha e reabre automaticamente o projeto. Os usuários 4D podem então ser reconectados.

> Se o pedido de reinicialização foi feito a partir de uma máquina 4D remota, esta máquina é automaticamente reconectada pelo Servidor 4D.

## Última cópia de segurança

Esta área indica a data e hora do [último backup](MSC/backup.md) do banco de dados e fornece informação sobre o próximo backup programa (se houver). Os backups automáticos são configurados utilizando a página **Agendador** das configurações de estrutura.

- **Último backup**: data e hora do último backup.
- **Next backup**: data e hora do próximo backup programado.
- **Espaço necessário**: espaço estimado necessário para o backup. O tamanho real do arquivo de backup pode variar de acordo com as configurações (compressão, etc.) e de acordo com as variações do arquivo de dados.
- **Available space**: espaço disponível do volume de backup.


O botão **Iniciar backup** pode ser usado para fazer backup do banco de dados imediatamente usando os parâmetros de backup atuais (backup de arquivos, backup localização de arquivos, opções, etc.). Você pode ver esses parâmetros clicando no botão **Configurações...**. Durante um backup no servidor, as máquinas do cliente são "bloqueadas" (mas não desconectadas) e não é possível que qualquer novo cliente se conecte.


## Histórico de solicitações e depuração

Esta área indica a duração da gravação dos arquivos de log do servidor (quando os arquivos de log são ativados) e permite a você controlar a ativação deles.

Consulte a seção [**Descrição dos arquivos de log**](Debugging/debugLogFiles.md) para detalhes dos arquivos de log.

### Iniciar/Parar Logs de Solicitação e Depuração

O botão **Iniciar solicitação e depurar logs** inicia arquivos de log. Uma vez que isto pode deteriorar significativamente o desempenho do servidor, deve ser reservado para a fase de desenvolvimento da aplicação.

> Este botão registra apenas operações executadas no servidor.

Quando os logs forem ativados, o título do botão muda para **Parar Requisição e Depurar Logs**, , para que você possa parar a gravação dos pedidos a qualquer momento. Preste atenção ao fato de que reiniciar o log após parar "erva" o arquivo anterior.

### Ver relatório

O botão **Visualizar Relatório** (chamado **Relatório de Download** se a operação foi realizada a partir de um cliente desktop remoto) permite que você abra uma janela do sistema exibindo o arquivo de registro de solicitações.

### Carregar arquivo e configuração dos registos

Este botão permite carregar um arquivo de configuração [servidor especial de log](Debugging/debugLogFiles.md#using-a-log-configuration-file) (`.json` file). Este arquivo pode ser fornecido por serviços técnicos 4D para acompanhar e estudar casos específicos.


### Pausar no registo

Este botão suspende todas as operações de registro atualmente iniciadas no servidor. Esta funcionalidade pode ser útil para aligeirar temporariamente as tarefas do servidor.

Quando os logs forem pausados, o título do botão muda para **Retomar o registro**, para que possa retomar as operações de registro.

> É possível pausar e retomar o registro em log usando o comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html).
