---
id: errorPages
title: Páginas de error HTTP personalizadas
---

El servidor web de 4D le permite personalizar las páginas de error HTTP enviadas a los clientes, basándose en el código de estado de la respuesta del servidor. Las páginas de error se refieren a:

- los códigos de estado que empiezan por 4 (errores del cliente), por ejemplo 404

- los códigos de estado que empiezan por 5 (errores del servidor), por ejemplo 501.

Para una descripción completa de los códigos de estado de error HTTP, puede consultar la [lista de códigos de estado HTTP](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) (Wikipedia).

## Reemplazo de las páginas por defecto

Para reemplazar las páginas de error predeterminadas de 4D Web Server por sus propias páginas, sólo tiene que:

- poner las páginas HTML personalizadas en el primer nivel de la carpeta web de la aplicación,

- nombrar las páginas personalizadas "\{statusCode\}.html" (por ejemplo, "404.html").

Puede definir una página de error por código de estado y/o una página de error genérica para un rango de errores, llamada "{number}xx.html". Por ejemplo, puede crear "4xx.html" para los errores genéricos del cliente. El servidor Web 4D buscará primero una página \{statusCode\}.html y luego, si no existe, una página genérica.

Por ejemplo, cuando una respuesta HTTP devuelve un código de estado 404:

1. 4D Web Server intenta enviar una página "404.html" ubicada en la carpeta web de la aplicación.

2. Si no se encuentra, 4D Web Server intenta enviar una página "404.html" ubicada en la carpeta web de la aplicación.

3. Si no se encuentra, 4D Web Server utiliza su página de error por defecto.

## Ejemplo

Si define las siguientes páginas personalizadas en su carpeta web:

![](../assets/en/WebServer/errorPage.png)

- se servirán las páginas "403.html" o "404.html" cuando se devuelvan respuestas HTTP 403 o 404 respectivamente,

- la página "4xx.html" se servirá para cualquier otro estado de error 4xx (400, 401, etc.),

- la página "5xx.html" se servirá para cualquier estado de error 5xx.
