---
id: maintenance
title: Página Manutenção
---

La página **Mantenimiento** de la ventana de administración de 4D Server ofrece información relativa al funcionamiento actual de la aplicación. Ele também fornece acesso às funções básicas de manutenção:

![](../assets/en/Admin/server-maintenance.png)

## Última verificação/compactação

Estas áreas indican la fecha, la hora y el estado de la última [verificación de datos](MSC/verify.md) y [operación de compactación](MSC/compact.md) efectuadas en la base.

### Verificar registos e índices

Este botão pode ser usado para iniciar a operação de verificação diretamente, sem interromper o servidor. Observe que o servidor pode ficar visivelmente mais lento durante a operação.

Todos os registros e todos os índices do banco de dados são verificados. Si desea poder orientar la verificación o disponer de opciones adicionales, deberá utilizar el [Centro de mantenimiento y seguridad](MSC/overview.md) (CSM).

After verification, a report file is generated in XML format on the server in the [maintenance Logs](../Project/architecture.md#logs) folder. El botón **Ver informe** (llamado **Descargar informe** si la operación se ha realizado desde una máquina remota) le permite visualizar el archivo en su navegador.

### Compactar dados...

Assim, o botão pode ser usado para executar uma operação de compactação de dados diretamente. Esta operação requer parar o servidor: quando você clicar neste botão, a caixa de diálogo de desligamento do Servidor 4D aparece para que você possa escolher como interromper a operação:

![](../assets/en/Admin/server-shut.png)

Após a interrupção real do serviço de aplicação, 4D Server realiza uma operação padrão de compactação nos dados da base de dados. Si desea disponer de opciones adicionales, deberá utilizar el [Centro de seguridad y de mantenimiento (CSM)](MSC/overview.md).

Quando a compactação terminar, o servidor 4D reinicia automaticamente o aplicativo. Os usuários 4D podem então ser reconectados.

> Se o pedido de compactação foi realizado a partir de uma máquina remota 4D remota, esta máquina é automaticamente reconectada pelo Servidor 4D.

After verification, a report file is generated in XML format on the server in the [maintenance Logs](../Project/architecture.md#logs) folder. El botón **Ver informe** (llamado **Descargar informe** si la operación se ha realizado desde una máquina remota) le permite visualizar el archivo en su navegador.

## Tempo de funcionamento

Esta área indica a duração da execução do aplicativo 4D Server desde a última vez que foi iniciado (dias, horas e minutos).

### Reiniciar o servidor...

Este botão pode ser usado para fechar e reiniciar imediatamente o projeto. Quando você clica neste botão, a caixa de diálogo de desligamento do Servidor 4D aparece para que você possa escolher como interromper a operação. Após a validação, 4D Server fecha e reabre automaticamente o projeto. Os usuários 4D podem então ser reconectados.

> Se o pedido de reinicialização foi feito a partir de uma máquina 4D remota, esta máquina é automaticamente reconectada pelo Servidor 4D.

## Última cópia de segurança

Esta área indica la fecha y la hora de la [última copia de seguridad](MSC/backup.md) de la base y ofrece información sobre la próxima copia de seguridad automática programada (si la hay). Las copias de seguridad automáticas se configuran en la página **Periodicidad** de las propiedades de estructura.

- **Última copia de seguridad**: fecha y hora de la última copia de seguridad.
- **Próxima copia de seguridad**: fecha y hora de la próxima copia de seguridad programada.
- **Espacio necesario**: espacio estimado necesario para la copia de seguridad. The actual size of the backup file may vary according to the settings (compression, etc.) e de acordo com as variações do arquivo de dados.
- **Espacio disponible**: espacio disponible en el volumen de copia de seguridad.

El botón **Iniciar copia de seguridad** permite realizar una copia de seguridad inmediata de la base utilizando los parámetros de copia de seguridad actuales (archivos de copia de seguridad, ubicación de los archivos, opciones, etc.). Puede ver estos parámetros haciendo clic en el botón **Propiedades...**. Durante um backup no servidor, as máquinas do cliente são "bloqueadas" (mas não desconectadas) e não é possível que qualquer novo cliente se conecte.

## Histórico de solicitações e depuração

Esta área indica a duração da gravação dos arquivos de log do servidor (quando os arquivos de log são ativados) e permite a você controlar a ativação deles.

Consulte a seção [**Descrição dos arquivos de log**](Debugging/debugLogFiles.md) para obter detalhes sobre os arquivos de log.

### Iniciar/Parar Logs de Solicitação e Depuração

El botón **Iniciar los registros de peticiones y de depuración** inicia los archivos de registro. Uma vez que isto pode deteriorar significativamente o desempenho do servidor, deve ser reservado para a fase de desenvolvimento da aplicação.

> Este botão registra apenas operações executadas no servidor.

Una vez activados los registros, el título del botón cambia a **Detener los registros de peticiones y depurar**, para que pueda detener el registro de peticiones en cualquier momento. Preste atenção ao fato de que reiniciar o log após parar "erva" o arquivo anterior.

### Ver relatório

El botón **Ver informe** (llamado **Descargar el informe** si la operación se ha realizado desde un cliente de escritorio remoto) permite abrir una ventana sistema en la que se muestra el archivo de registro de peticiones.

### Carregar arquivo e configuração dos registos

Este botón le permite cargar un [archivo de configuración de log](Debugging/debugLogFiles.md#using-a-log-configuration-file)(archivo`.json`) para un servidor específico. Este arquivo pode ser fornecido por serviços técnicos 4D para acompanhar e estudar casos específicos.

### Pausar no registo

Este botão suspende todas as operações de registro atualmente iniciadas no servidor. Esta funcionalidade pode ser útil para aligeirar temporariamente as tarefas do servidor.

Cuando los registros se han puesto en pausa, el título del botón cambia a **Reanudar registro**, para que pueda reanudar las operaciones de registro.

> Puede pausar y reanudar el registro utilizando el comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html).
