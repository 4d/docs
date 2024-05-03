---
id: allowProject
title: Permitir métodos proyecto
---

The 4D tags such as `4DEVAL`, `4DTEXT`, `4DHTML`... as well as the [`/4DACTION URL`](httpRequests.md#/4daction) allow you to trigger the execution of any project method of a 4D project published on the Web. For example, the request _http://www.server.com/4DACTION/login_ causes the execution of the _**login**_ project method, if it exists.

Por lo tanto, este mecanismo presenta un riesgo de seguridad para la aplicación, en particular si un usuario de Internet activa intencionalmente (o no) un método no previsto para su ejecución a través de la web. Puede evitar este riesgo de las siguientes maneras:

- Filter the methods called via the URLS using the [`On Web Authentication`](authentication.md#on-web-authentication) database method. Inconvenientes: si la base de datos incluye un gran número de métodos, este sistema puede ser difícil de gestionar.

- Use the **Available through 4D tags and URLs (4DACTION...)** option found in the Method properties dialog box:

![](../assets/en/WebServer/methodProperties.png)

This option is used to individually designate each project method that can be called using the `4DACTION` special URL, or the `4DTEXT`, `4DHTML`, `4DEVAL`, `4DSCRIPT`, `4DIF`, `4DELSEIF` or `4DLOOP` tags. Cuando no está marcada, el método proyecto en cuestión no puede ser ejecutado directamente a través de una petición HTTP. Por el contrario, puede ejecutarse mediante otro tipo de llamadas (fórmulas, otros métodos, etc.).

Esta opción está deseleccionada por defecto. Methods that can be executed through `4DACTION` or specific tags must be specifically indicated.

En el Explorador, los métodos proyecto con esta propiedad reciben un icono específico:

![](../assets/en/WebServer/methodIcon.png)
