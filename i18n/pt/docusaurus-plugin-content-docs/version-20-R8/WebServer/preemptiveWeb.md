---
id: preemptiveWeb
title: Utilizar processos web preemptivos
---

The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible.

For in-depth information on preemptive process in 4D, please refer to the [Preemptive Processes](../Develop/preemptive.md) section.

## Disponibilidade do modo preemptivo para os processos web

A tabela a seguir indica se o modo preventivo está utilizado ou está disponível, dependendo do contexto de execução:

| 4D Server             | Interpretado ([asociado al depurador](../Debugging/debugging-remote.md)) | Interpretado (não associado ao depurador) | Compilado          |
| --------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------ |
| Servidor REST         | cooperativo                                                                                 | preemptive                                                   | preemptive         |
| Servidor Web          | cooperativo                                                                                 | cooperativo                                                  | *configuração web* |
| Servidor Web Services | cooperativo                                                                                 | cooperativo                                                  | *configuração web* |

| 4D remoto/usuário único | Interpretado | Compilado          |
| ----------------------- | ------------ | ------------------ |
| Servidor REST           | cooperativo  | preemptive         |
| Servidor Web            | cooperativo  | *configuração web* |
| Servidor Web Services   | cooperativo  | *configuração web* |

- Servidor REST: gestiona las [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md)
- Servidor web: maneja las [plantillas web](templates.md), [4DACTION y los métodos base](httpRequests.md)
- Servidor de serviços Web: trata dos pedidos SOAP
- ***web setting*** significa que el modo apropiativo depende de un valor de configuración:
    - quando a opção [**Sessões escalonáveis**](sessions.md#enabling-sessions) estiver selecionada, o [modo preventivo é usado automaticamente](sessions.md#preemptive-mode) para processos web.
    - caso contrário, a opção [**Usar processos preventivos**](webServerConfig.md#use-preemptive-processes) é tida em conta.
    - sobre processos de serviço Web (servidor ou cliente), modo preventivo é suportado no nível do método. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv20/4D/20.2/Subscribing-to-a-Web-Service-in-4D.300-6750336.en.html)) and make sure they are confirmed thread-safe by the compiler.

## Escrever código servidor Web hilo seguro

Todo o código 4D executado pelo servidor deve ser hilo seguro se você quiser que seus processos web sejam executados em modo preventivo. Cuando el [modo apropiativo está activo](#availability-of-preemptive-mode-for-web-processes), las siguientes partes de la aplicación serán evaluadas automáticamente por el compilador 4D:

- Todos os métodos bases relacionados com a Web:
    - [`On Web Authentication`](authentication.md#on-web-authentication)
    - [`On Web Connection`](httpRequests.md#on-web-connection)
    - [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
    - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action)

- El método proyecto `compilador_web` (independientemente de su propiedad real "Modo de ejecución");

- Basically any code processed by the [`PROCESS 4D TAGS`](https://doc.4d.com/4dv19R/help/command/en/page816.html) command in the web context, for example through .shtml pages

- Todo método proyecto con el atributo "Disponible a través de etiquetas 4D y URLs (`4DACTION`, etc.)

- Triggers para as tabelas com o atributo "Expor como recurso REST"

- [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md) llamadas vía REST

Para cada um desses métodos e partes de código, o compilador irá verificar se as regras de segurança de threads são respeitadas, e retornará erros em caso de problemas. Para más información sobre las reglas hilo seguro, consulte el párrafo *Escribir un método hilo seguro* en el capítulo *Procesos* del manual de [Lenguaje 4D](https://doc.4d.com).

## Código web 4D hilo seguro

A maioria dos comandos 4D relacionados à Web e funções, métodos de banco de dados e URLs são hilo seguro e podem ser usados em modo preventivo.

### Comandos 4D e métodos banco de dados

Todos los comandos 4D relativos a la web son hilo seguro, *es decir*:

- todos los comandos del tema *Servidor Web*,
- todos los comandos del tema *Cliente HTTP*.

Los métodos base relacionados con la web son hilo seguro y pueden utilizarse en modo apropiativo (ver arriba): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Obviamente, o código executado por esses métodos também deve ser hilo seguro.

### URLs do servidor Web

As seguintes URLs Web Server 4D são hilo seguro e podem ser usadas em modo preventivo:

- *4daction/* (el método proyecto llamado también debe ser hilo seguro)
- *4dcgi/* (los métodos base llamados también deben ser hilo seguro)
- *4dwebtest/*
- *4dblank/*
- *4dstats/*
- *4dhtmlstats/*
- *4dcacheclear/*
- *rest/*
- *4dimgfield/* (generado por `PROCESS 4D TAGS` para la petición web en los campos imagen)
- *4dimg/* (generado por `PROCESS 4D TAGS` para la petición web en las variables imagen)

### Ícone de processo web preemptivo

O Explorador de execução e a janela de administração de 4D Server mostram ícones específicos para os processos preemptivos:

| Tipo de processo      | Ícone                                       |
| --------------------- | ------------------------------------------- |
| Método web preventivo | ![](../assets/en/WebServer/processIcon.png) |
