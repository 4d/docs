---
id: sql-server
title: Página servidor SQL
---

La página **Servidor SQL** agrupa información sobre el servidor SQL integrado de 4D Server. También incluye un botón que puede utilizarse para controlar la activación del servidor.

![](../assets/en/Admin/server-admin-sql-page.png)

La parte superior de la página provee información sobre el estado actual del servidor SQL de 4D Server.

- **Estado**: Iniciado o Detenido
- **Hora de inicio**: fecha y hora en que el servidor SQL se inició por última vez.
- **Duración del funcionamiento**: tiempo transcurrido desde el último arranque del servidor SQL.

## Iniciar/detener el servidor SQL

Este botón se alterna y puede utilizarse para controlar la activación del servidor SQL de 4D Server.

- Cuando el estado del servidor SQL es "Iniciado", el botón se etiqueta **Detener el servidor SQL**. Si presiona este botón, el servidor SQL de 4D Server se detiene inmediatamente; ya no responde a ninguna petición SQL externa recibida en el puerto TCP designado.
- Cuando el estado del servidor SQL es "Detenido", el botón se etiqueta **Iniciar el servidor SQL**. Si presiona este botón, el servidor SQL de 4D Server se inicia inmediatamente; responde a las peticiones SQL externas recibida en el puerto TCP designado. Tenga en cuenta que necesitará una licencia adecuada para poder utilizar el servidor SQL de 4D.

> El servidor SQL también puede iniciarse automáticamente al iniciar la aplicación (opción de las Preferencias) o por programación.

## Información

### Configuración

Esta área ofrece información sobre los parámetros de configuración del servidor SQL: lanzamiento automático al inicio, dirección IP de escucha, puerto TCP (19812 por defecto) y habilitación de SSL para conexiones SQL (no afecta a las conexiones 4D ni HTTP).

Estos parámetros pueden modificarse a través de las Preferencias de 4D.

### Conecciones

Número de conexiones SQL abiertas actualmente en 4D Server.

### Conexiones máximas

Número máximo de conexiones SQL simultáneas autorizadas. Este valor depende de la licencia instalada en el equipo servidor.
