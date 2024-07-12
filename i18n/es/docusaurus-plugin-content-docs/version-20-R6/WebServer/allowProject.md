---
id: allowProject
title: Permitir métodos proyecto
---

Las etiquetas 4D como `4DEVAL`, `4DTEXT`, `4DHTML`... as well as the [`/4DACTION URL`](httpRequests.md#/4daction) allow you to trigger the execution of any project method of a 4D project published on the Web. Por ejemplo, la petición *http://www.server.com/4DACTION/login* provoca la ejecución del método proyecto ***login***, si existe.

Por lo tanto, este mecanismo presenta un riesgo de seguridad para la aplicación, en particular si un usuario de Internet activa intencionalmente (o no) un método no previsto para su ejecución a través de la web. Puede evitar este riesgo de las siguientes maneras:

- Filter the methods called via the URLS using the [`On Web Authentication`](authentication.md#on-web-authentication) database method. Inconvenientes: si la base de datos incluye un gran número de métodos, este sistema puede ser difícil de gestionar.

- Utilice la opción **Disponible a través de etiquetas 4D y URLs (4DACTION...)** que se encuentra en la caja de diálogo de propiedades del método:

![](../assets/en/WebServer/methodProperties.png)

Esta opción se utiliza para designar individualmente cada método del proyecto que puede ser llamado utilizando la URL especial `4DACTION`, o las etiquetas `4DTEXT`, `4DHTML`, `4DEVAL`, `4DSCRIPT`, `4DIF`, `4DELSEIF` o `4DLOOP`. Cuando no está marcada, el método proyecto en cuestión no puede ser ejecutado directamente a través de una petición HTTP. Por el contrario, puede ejecutarse mediante otro tipo de llamadas (fórmulas, otros métodos, etc.).

Esta opción está deseleccionada por defecto. Los métodos que se pueden ejecutar a través de `4DACTION` o de etiquetas específicas deben indicarse específicamente.

En el Explorador, los métodos proyecto con esta propiedad reciben un icono específico:

![](../assets/en/WebServer/methodIcon.png)
