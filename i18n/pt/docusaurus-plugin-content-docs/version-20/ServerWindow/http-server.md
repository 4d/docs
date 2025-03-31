---
id: http-server
title: Página Servidor HTTP
---


A página **HTTP Server** agrupa as informações sobre as operações do servidor Web e do servidor SOAP de 4D Server. O servidor web permite que você publique conteúdo Web como páginas HTML ou imagens para navegadores Web e para lidar com solicitações REST. O servidor SOAP gere a publicação de serviços Web. Esses servidores dependem do servidor HTTP interno de 4D Server.

![](../assets/en/Admin/server-admin-web-page.png)


A parte superior da página fornece informações sobre o estado atual do servidor HTTP do 4D Server.

- **Estado**: Iniciado ou Parado
- **Hora de início**: data e hora em que o servidor HTTP foi iniciado pela última vez.
- **Tempo de atividade**: tempo decorrido desde a última inicialização do servidor HTTP.
- **Total de hits HTTP**: Número de hits (em baixo nível) HTTP recebidos pelo servidor HTTP desde que foi iniciado.


## Iniciar/parar o servidor HTTP

Esse botão alterna e pode ser usado para controlar a ativação do servidor HTTP do 4D Server.

- Quando o estado do servidor HTTP é "Iniciado", o botão é intitulado **Iniciar o servidor HTTP**. Se você clicar neste botão, o servidor HTTP 4D é parado imediatamente; o servidor Web, o servidor REST e o servidor SOAP não aceitam mais quaisquer solicitações.
- Quando o estado do servidor HTTP é "interrompido", o botão é intitulado **Iniciar o servidor HTTP**. Se você clicar nesse botão, o servidor HTTP de 4D Server será iniciado imediatamente; solicitações Web, REST e SOAP serão aceitas.

> Você deve ter uma licença adequada para poder iniciar o servidor HTTP.
> 
> O servidor HTTP também pode ser iniciado automaticamente na inicialização do aplicativo (configurações) ou pela programação.

## Informação Web

Esta área fornece informações específicas sobre o servidor Web de 4D Server.

- **Pedidos Web**: aceites ou rejeitados. Esta informação indica se o servidor Web está ativado. Como o servidor da Web está diretamente vinculado ao servidor HTTP, as solicitações Web são aceitas quando o servidor HTTP é iniciado e rejeitadas quando ele é interrompido.
- **Máximo de conexões**: Número máximo de conexões da Web permitido. Este valor depende da licença instalada na máquina do servidor.

## Informação SOAP

Esta área fornece informações específicas sobre o servidor SOAP do 4D Server e inclui um botão de controle.

- **Pedidos SOAP**: aceites ou rejeitados. Esta informação indica se o servidor SOAP está ativado. Para que as solicitações SOAP sejam aceitas, o servidor HTTP deve ser iniciado e o servidor SOAP deve aceitar explicitamente as solicitações (consulte o botão Aceitar/Rejeitar).
- **Máximo de ligações**: Número máximo de ligações SOAP permitidas. Este valor depende da licença instalada na máquina do servidor.
- **Aceitar/Rejeitar SOAP requests** : Este botão alterna e pode ser usado para controlar a ativação do servidor SOAP do servidor 4D. Este botão modifica o valor do **Permitir pedidos de serviços web** opção na página "Serviços da Web" das Configurações (e vice-versa). Você também pode usar o comando [`SOAP REJEITAR NOVOS REQUESTS`](https://doc.4d.com/4dv19/help/command/en/page1636.html) para recusar novas solicitações SOAP, no entanto, isto não modifica o valor do **Permitir a opção de Requisições de Serviços Web**.

Se você clicar no botão **Aceitar solicitações SOAP** e o servidor HTTP for interrompido, o 4D automaticamente o inicia.

## Configuração servidor HTTP

Esta área fornece informações sobre os parâmetros de configuração e a operação do servidor HTTP:

- **Auto-iniciado na inicialização**: parâmetro definido através das configurações.
- **Processos servidor HTTP (usados/total)**: número de processos HTTP criados no servidor (número atual de processos / total de todos os processos criados).
- **Cache de memória**: tamanho da memória de cache do servidor HTTP, quando ativado (tamanho realmente usado pelo cache / tamanho máximo alocado para o cache nas Configurações). Você pode clicar no botão **Limpar Cache** para esvaziar o cache atual.
- **Listening to IP**, **HTTP Port** (80 é o padrão), **TLS ativado** para conexões HTTP (não influencia conexões 4D ou SQL) e **HTTPS Port** usada:  [parâmetros](WebServer/webServerConfig.md) atuais do servidor HTTP, especificados nas configurações ou por programação.
- **Informação do arquivo de log**: nome, formato e data do próximo backup automático do log do servidor HTTP (arquivo logweb.txt)

