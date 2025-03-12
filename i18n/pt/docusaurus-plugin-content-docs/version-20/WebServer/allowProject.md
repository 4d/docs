---
id: allowProject
title: Permitir métodos projeto
---

  
The 4D tags such as `4DEVAL`, `4DTEXT`, `4DHTML`... as well as the [`/4DACTION URL`](./httpRequests.md#4daction) allow you to trigger the execution of any project method of a 4D project published on the Web. Por exemplo, o pedido *http://www.server.com/4DACTION/login* provoca a execução do método de projeto ***login*** , se existir.

Este mecanismo representa, portanto, um risco de segurança para a aplicação, em especial se um utilizador da Internet acionar intencionalmente (ou não) um método não destinado a ser executado através da Web. Este risco pode ser evitado das seguintes formas:

*   Filtre os métodos chamados através dos URLS utilizando o método de base de dados [`On Web Authentication`](authentication.md#on-web-authentication) . Desvantagens: Se a base de dados incluir um grande número de métodos, este sistema pode ser difícil de gerir.

*   Use a opção **Available through 4D tags and URLs (4DACTION...)** encontrada na caixa de diálogo Method properties:

![](../assets/en/WebServer/methodProperties.png)

Esta opção é utilizada para designar individualmente cada método de projeto que pode ser chamado utilizando o URL especial `4DACTION` , ou as etiquetas `4DTEXT`, `4DHTML`, `4DEVAL`, `4DSCRIPT`, `4DIF`, `4DELSEIF` ou `4DLOOP` . Se não estiver assinalado, o método de projeto em causa não pode ser executado diretamente através de um pedido HTTP. Por outro lado, pode ser executado através de outros tipos de chamadas (fórmulas, outros métodos, etc.).

Esta opção não está selecionada por defeito. Os métodos que podem ser executados através de `4DACTION` ou de etiquetas específicas devem ser especificamente indicados.

No Explorador, os métodos de projeto com esta propriedade recebem um ícone específico:

 ![](../assets/en/WebServer/methodIcon.png)
