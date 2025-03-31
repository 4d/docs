---
id: webServer
slug: overview
title: Servidor Web
---

4D no modo local, 4D em modo remoto e 4D Server incluem um mecanismo de servidor web (também conhecido como servidor http) que permite a você projetar e publicar poderosas aplicações web que podem aproveitar ao máximo seus bancos de dados 4D.

## Monitorização fácil

Você pode iniciar ou parar a publicação da aplicação web a qualquer momento. Para fazer isso, você só precisa selecionar um comando de menu ou executar uma única linha de código.

Monitorar o servidor 4D é fácil e pode ser feito usando a janela de administração do Servidor 4D ou através de [URLs especiais](webServerAdmin.md#administration-urls).

## Pronto a usar

O servidor 4D cria automaticamente uma pasta raiz padrão e uma página inicial padrão para uma disponibilidade instantânea.

## Segurança

A segurança dos dados está presente em todos os estágios das implementações do servidor web 4D. Os níveis de segurança são escalonáveis e as configurações padrão geralmente selecionam as opções mais seguras. A segurança do servidor web 4D é baseada nos seguintes elementos:

* Suporte estendido do [**protocolo TLS (HTTPS)**](../Admin/tls.md),

* **Autenticação**: recursos de autenticação [flexíveis e personalizáveis](authentication.md) com base em configurações built-it bem como métodos de banco de dados ([`On Web Authentication`](authentication.md#on-web-authentication) para o servidor web e [`On REST Authentication`](../REST/configuration.md#using-the-on-rest-authentication-database-method) para o servidor REST),

* **Controle do conteúdo exposto**: apenas elementos que você expõe explicitamente podem estar disponíveis a partir de solicitações web diretas ou REST. É necessário declarar:
  * [Project methods](templates.md#accessing-4d-methods-via-the-web) exposed through HTTP requests
  * Funções [ORDA](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) são expostas através de solicitações REST
  * [Tabelas e campos](REST/configuration.md#exposing-tables-and-fields) que você não quer estar disponível para solicitações REST.

* **Sandboxing** através da definição de uma pasta [HTML raiz](webServerConfig.md#root-folder) por padrão

* **Controle do uso de recursos do servidor** (por exemplo, opção de [processos da Web simultâneos máximos](webServerConfig.md#maximum-concurrent-web-processes)).
> Para uma visão geral das funções de segurança de 4D, consulte o [Guia de segurança de 4D](https://blog.4d.com/4d-security-guide/).

## Sessões Usuário

O servidor Web 4D inclui recursos automáticos para gerenciar facilmente [sessões Web](sessions.md) (sessões usuário) com base em cookies.

## Ponto de acesso para solicitações REST

O servidor web 4D permite acessar os dados armazenados em suas aplicações 4D através de solicitações REST. Solicitações REST fornecem acesso direto a qualquer operação de banco de dados, como adicionar, ler, editar, ordenar ou pesquisar dados.

As solicitações REST são detalhadas na seção [Servidor REST](REST/gettingStarted.md).

## Extensão dos parâmetros

A configuração do servidor Web 4D é definida através de um conjunto abrangente de configurações ao nível da aplicação que também pode ser personalizado para a sessão usando as propriedades do objeto `webServer` ou o comando `WEB SET OPTION`.

## Modelos e URLs

O servidor web 4D suporta acesso a dados armazenados em suas aplicações 4D através de páginas de modelos e URLs específicas.

* As páginas de modelo contêm [etiquetas especiais](templates.md) que iniciam o processamento de servidor web no momento em que são enviadas para os navegadores.

* [URLs específicos](httpRequests.md) permitem que 4D seja chamado para executar qualquer ação; esses URLs também podem ser usados como ações de formulário para acionar o processamento quando o usuário publica formulários HTML.

## Métodos banco de dados dedicados

Os métodos banco de dados `On Web Authentication`, `On Web Connection`, e `On REST Authentication` são os pontos de entrada de solicitações no servidor web; eles podem ser usados para avaliar e rotear qualquer tipo de pedido.
