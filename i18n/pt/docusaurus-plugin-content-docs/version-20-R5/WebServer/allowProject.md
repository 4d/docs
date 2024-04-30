---
id: allowProject
title: Permitir métodos projeto
---

The 4D tags such as `4DEVAL`, `4DTEXT`, `4DHTML`... as well as the [`/4DACTION URL`](httpRequests.md#/4daction) allow you to trigger the execution of any project method of a 4D project published on the Web. For example, the request _http://www.server.com/4DACTION/login_ causes the execution of the _**login**_ project method, if it exists.

Este mecanismo representa, portanto, um risco de segurança para a aplicação, em especial se um utilizador da Internet acionar intencionalmente (ou não) um método não destinado a ser executado através da Web. Este risco pode ser evitado das seguintes formas:

- Filter the methods called via the URLS using the [`On Web Authentication`](authentication.md#on-web-authentication) database method. Desvantagens: Se a base de dados incluir um grande número de métodos, este sistema pode ser difícil de gerir.

- Use the **Available through 4D tags and URLs (4DACTION...)** option found in the Method properties dialog box:

![](../assets/en/WebServer/methodProperties.png)

This option is used to individually designate each project method that can be called using the `4DACTION` special URL, or the `4DTEXT`, `4DHTML`, `4DEVAL`, `4DSCRIPT`, `4DIF`, `4DELSEIF` or `4DLOOP` tags. Se não estiver assinalado, o método de projeto em causa não pode ser executado diretamente através de um pedido HTTP. Por outro lado, pode ser executado através de outros tipos de chamadas (fórmulas, outros métodos, etc.).

Esta opção não está selecionada por defeito. Methods that can be executed through `4DACTION` or specific tags must be specifically indicated.

No Explorador, os métodos de projeto com esta propriedade recebem um ícone específico:

![](../assets/en/WebServer/methodIcon.png)
