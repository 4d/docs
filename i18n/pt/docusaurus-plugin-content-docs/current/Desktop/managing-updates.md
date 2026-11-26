---
id: managing-updates
title: Gerenciando Atualizações
---

Em princípio, atualizar aplicações servidoras ou aplicações monousuário mescladas requer intervenção do usuário (ou programação de rotinas de sistema personalizadas): sempre que uma nova versão da aplicação mesclada estiver disponível, é necessário sair da aplicação em produção e substituir manualmente os arquivos antigos pelos novos; em seguida, reiniciar a aplicação e selecionar o arquivo de dados atual.

Você pode automatizar esse procedimento em grande parte utilizando os seguintes comandos de linguagem: [`SET UPDATE FOLDER`](../commands/set-update-folder), [`RESTART 4D`](../commands/restart-4d), e também [`Last update log path`](../commands/last-update-log-path) para monitoramento das operações. A ideia é implementar uma função em sua aplicação 4D que dispare a sequência de atualização automática descrita abaixo. Pode ser um comando de menu ou um processo rodando em segundo plano e verificando em intervalos regulares a presença de um arquivo compactado em um servidor.

> Você também dispõe de chaves XML para elevar privilégios de instalação, permitindo o uso de arquivos protegidos no Windows (consulte as [chaves XML do AutoUpdate](../BuildApplication/auto-update.md)).

Aqui está o cenário para atualizar uma aplicação servidora ou uma aplicação monousuário mesclada:

1. Você transfere, por exemplo utilizando um servidor HTTP, a nova versão da aplicação servidora ou da aplicação monousuário mesclada para a máquina em produção.
2. Na aplicação em produção, você chama o comando [`SET UPDATE FOLDER`](../commands/set-update-folder): este comando designa o local da pasta onde está a atualização "pendente" da aplicação atual. Opcionalmente, você pode copiar para essa pasta os elementos personalizados da versão em produção (arquivos do usuário).
3. Na aplicação em produção, chame o comando [`RESTART 4D`](../commands/restart-4d): este comando aciona automaticamente a execução de um programa utilitário chamado "updater" que encerra a aplicação atual, substitui-a utilizando a atualização "pendente" se houver uma especificada, e reinicia a aplicação com o arquivo de dados atual. A versão anterior é renomeada.

> Esta sequência é compatível com aplicações servidoras Windows [executadas como Serviço](../server/service.md).

### Log de atualização  

O procedimento de instalação gera um arquivo de log detalhando as operações de atualização de aplicações mescladas (cliente, servidor ou monousuário) nas máquinas de destino. Este arquivo é útil para analisar eventuais erros que ocorram durante o processo de instalação.

O log de atualização é nomeado como `YYYY-MM-DD_HH-MM-SS_log_X.txt`, por exemplo, `2021-08-25_14-23-00_log_1.txt` para um arquivo criado em 25 de agosto de 2021 às 14:23.

Este arquivo é criado na pasta da aplicação "Updater", dentro da pasta do usuário do sistema. Você pode descobrir a localização deste arquivo a qualquer momento utilizando o comando [`Last update log path`](../commands/last-update-log-path).

