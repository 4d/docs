---
id: errorPages
title: Páginas de erro HTTP personalizadas
---

The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. As páginas de erro referem-se a:

* os códigos de estado que começam por 4 (erros do cliente), por exemplo, 404

* os códigos de estado que começam por 5 (erros do servidor), por exemplo, 501.

For a full description of HTTP error status codes, you can refer to the [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) (Wikipedia).

## Substituir páginas predefinidas

To replace default 4D Web Server error pages with your own pages you just need to:

* put custom HTML pages at the first level of the application's web folder,

* name the custom pages "{statusCode}.html" (for example, "404.html").

You can define one error page per status code and/or a generic error page for a range of errors, named "{number}xx.html". For example, you can create "4xx.html" for generic client errors. The 4D Web Server will first look for a {statusCode}.html page then, if it does not exist, a generic page.

Por exemplo, quando uma resposta HTTP devolve um código de estado 404:

1. 4D Web Server tries to send a "404.html" page located in the application's web folder.

2. If it is not found, 4D Web Server tries to send a "4xx.html" page located in the application's web folder.

3. Se não for encontrado, 4D Web Server usa sua página de erro padrão.

## Exemplo

Se definir as seguintes páginas personalizadas na sua pasta Web:

![](../assets/en/WebServer/errorPage.png)

* the "403.html" or "404.html" pages will be served when 403 or 404 HTTP responses are returned respectively,

* the "4xx.html" page will be served for any other 4xx error status (400, 401, etc.),

* a página "5xx.html" será apresentada para qualquer estado de erro 5xx.
