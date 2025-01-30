---
id: preemptiveWeb
title: Utilizar processos web preemptivos
---


O servidor Web de 4D permite que você aproveite ao máximo vários computadores centrais usando processos web preemptivos em suas aplicações compilados. Você pode configurar seu código relacionado à web, incluindo etiquetas 4D e métodos de banco de dados web, para executar simultaneamente em tantos núcleos quanto possível.

Para informações aprofundadas sobre o processo preventivo em 4D, por favor consulte *Processos 4D preventivos* seção na referência de linguagem[*4D*](https://doc.4d.com).

## Disponibilidade do modo preemptivo para os processos web

A tabela a seguir indica se o modo preventivo está utilizado ou está disponível, dependendo do contexto de execução:

| 4D Server             | Interpretado, projeto ([cliente conectado localmente](../Desktop/clientServer.md#using-4d-and-4d-server-on-the-same-machine)) | Interpretado, projeto (nenhum cliente ligado localmente) ou binário | Compilado       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | --------------- |
| Servidor REST         | cooperativo                                                                                                                   | preemptive                                                          | preemptive      |
| Servidor Web          | cooperativo                                                                                                                   | cooperativo                                                         | *parâmetro web* |
| Servidor Web Services | cooperativo                                                                                                                   | cooperativo                                                         | *parâmetro web* |
| Legado REST           | cooperativo                                                                                                                   | *parâmetro web*                                                     | *parâmetro web* |

| 4D remoto/usuário único | Interpretado | Compilado       |
| ----------------------- | ------------ | --------------- |
| Servidor REST           | cooperativo  | preemptive      |
| Servidor Web            | cooperativo  | *parâmetro web* |
| Servidor Web Services   | cooperativo  | *parâmetro web* |
| Legado REST             | cooperativo  | *parâmetro web* |

- Servidor REST: lida com as[funções de classe do modelo de dados ORDA](../REST/ClassFunctions.md)
- Servidor Web: lida com os modelos Web [](templates.md), [4DACTION e métodos de banco de dados](httpRequests.md)
- Servidor de serviços Web: trata dos pedidos SOAP
- REST herdado: peticiones diretas a métodos 4D (`/rest/{table}/{methodName}`)
- ***parâmetro web*** significa que o modo preventivo depende de um valor de configuração:
  - quando [**Sessões escalonáveis**](sessions.md#enabling-sessions) estiver selecionada, o [modo preemptivo será usado automaticamente](sessions.md#preemptive-mode) para os processos Web.
  - caso contrário, o opção [**usa processos preventivos**](webServerConfig.md#use-preemptive-processes) é levado em conta.
  - regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler.

## Escrever código servidor Web hilo seguro

All 4D code executed by the web server must be thread-safe if you want your web processes to be run in preemptive mode. When the **Use preemptive processes** option is checked in the Settings dialog box, the following parts of the application will be automatically evaluated by the 4D compiler:

- Todos os métodos bases relacionados com a Web:
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication)

- The `compiler_web` project method (regardless of its actual "Execution mode" property);

- Basically any code processed by the `PROCESS 4D TAGS` command in the web context, for example through .shtml pages.

- Any project method with the "Available through 4D tags and URLS (`4DACTION`, etc.)" attribute

- Triggers para as tabelas com o atributo "Expor como recurso REST"

- [ORDA data model class functions](../REST/ClassFunctions.md) called via REST

- Métodos projeto com a propriedade "Servidor REST" marcada (chamadas REST herdadas)

For each of these methods and code parts, the compiler will check if the thread-safety rules are respected, and will return errors in case of issues. For more information about thread-safety rules, please refer to the *Writing a thread-safe method* paragraph in the *Processes* chapter of the [4D Language Reference](https://doc.4d.com) manual.

## Código web 4D hilo seguro

Most of the web-related 4D commands and functions, database methods and URLs are thread-safe and can be used in preemptive mode.

### Comandos 4D e métodos base

Todos os comandos 4D relacionados à Web são thread-safe, *i.e.*:

- todos os comandos do tema *Servidor Web*,
- todos os comandos do tema *Cliente HTTP*.

The web-related database methods are thread-safe and can be used in preemptive mode (see below): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Obviamente, o código executado por esses métodos também deve ser thread-safe.

### URLs do servidor Web

The following 4D Web Server URLs are thread-safe and can be used in preemptive mode:

- *4daction/* (the called project method must also be thread-safe)
- *4dcgi/* (the called database methods must also be thread-safe)
- *4dwebtest/*
- *4dblank/*
- *4dstats/*
- *4dhtmlstats/*
- *4dcacheclear/*
- *rest/*
- *4dimgfield/* (generated by `PROCESS 4D TAGS` for web request on picture fields)
- *4dimg/* (generated by `PROCESS 4D TAGS` for web request on picture variables)

### Ícone de processo web preemptivo

Both the Runtime Explorer and the 4D Server administration window display a specific icon for preemptive web processes:

| Tipo de processo      | Ícone                                       |
| --------------------- | ------------------------------------------- |
| Método web preventivo | ![](../assets/en/WebServer/processIcon.png) |
