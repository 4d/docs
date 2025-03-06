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
  - sobre processos de serviço Web (servidor ou cliente), modo preventivo é suportado no nível do método. Você só precisa selecionar "Pode ser executado em processos preventivos" para métodos de servidor SOAP publicados (consulte [publicar um Serviço Web com 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) ou os métodos de cliente proxy (veja [Inscrevendo um Serviço Web em 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) e certifique-se de que eles são confirmados pelo compilador.

## Escrever código servidor Web hilo seguro

Todo o código 4D executado pelo servidor deve ser hilo seguro se você quiser que seus processos web sejam executados em modo preventivo. Quando a opção **Usar processos preventivos** é marcada na caixa de diálogo Propriedades, as seguintes partes da aplicação serão automaticamente avaliadas pelo compilador 4D:

- Todos os métodos bases relacionados com a Web:
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication)

- O método projeto `compiler_web` (independentemente da sua propriedade "Modo de execução");

- Basicamente, qualquer código processado pelo comando `PROCESS 4D TAGS` no contexto web, por exemplo, através de páginas .shtml.

- Qualquer método do projeto com o atributo "Disponível através de etiquetas 4D e URLs (`4DACTION`, etc.)"

- Triggers para as tabelas com o atributo "Expor como recurso REST"

- [Funções de classe de modelo de dados ORDA](../REST/ClassFunctions.md) chamadas via REST

- Métodos projeto com a propriedade "Servidor REST" marcada (chamadas REST herdadas)

Para cada um desses métodos e partes de código, o compilador irá verificar se as regras de segurança de threads são respeitadas, e retornará erros em caso de problemas. Para mais informações sobre as regras hilo seguro, por favor, consulte o parágrafo *que escreve um método hilo seguro* no capítulo *Processos* do [manual de linguagem 4D](https://doc.4d.com).

## Código web 4D hilo seguro

A maioria dos comandos 4D relacionados à Web e funções, métodos de banco de dados e URLs são hilo seguro e podem ser usados em modo preventivo.

### Comandos 4D e métodos banco de dados

Todos os comandos 4D relacionados à Web são hilo seguro *i.e.*:

- todos os comandos do tema *Servidor Web*,
- todos os comandos do tema *Cliente HTTP*.

Os métodos banco de dados relacionados à web são hilo seguro e podem ser usados em modo preventivo (veja abaixo): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Obviamente, o código executado por esses métodos também deve ser hilo seguro.

### URLs do servidor Web

As seguintes URLs Web Server 4D são hilo seguro e podem ser usadas em modo preventivo:

- *4daction/* (o método chamado projeto também deve ser hilo seguro)
- *4dcgi/* (os métodos banco de dados chamados também devem ser hilo seguro)
- *4dwebtest/*
- *4dblank/*
- *4dstats/*
- *4dhtmlstats/*
- *4dcacheclear/*
- *rest/*
- *4dimgfield/* (gerado por `PROCESS 4D TAGS` para solicitação na web nos campos imagem)
- *4dimg/* (gerada por `PROCESS 4D TAGS` para solicitações web em variáveis imagem)

### Ícone de processo web preemptivo

O Explorador de execução e a janela de administração de 4D Server mostram ícones específicos para os processos preemptivos:

| Tipo de processo      | Ícone                                       |
| --------------------- | ------------------------------------------- |
| Método web preventivo | ![](../assets/en/WebServer/processIcon.png) |
