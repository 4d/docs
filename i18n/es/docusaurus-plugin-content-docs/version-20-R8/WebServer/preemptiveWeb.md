---
id: preemptiveWeb
title: Uso de procesos web apropiativos
---

El servidor web de 4D le permite aprovechar al máximo los ordenadores multinúcleo utilizando procesos web apropiativos en sus aplicaciones. Puede configurar su código relacionado con la web, incluyendo las etiquetas 4D, los métodos base Web o las funciones de clase REST de ORDA para que se ejecuten simultáneamente en tantos núcleos como sea posible.

Para obtener información detallada sobre el proceso apropiativo en 4D, por favor consulte la sección [Procesos apropiativos](../Develop/preemptive.md).

## Disponibilidad del modo apropiativo para los procesos web

La siguiente tabla indica si el modo apropiativo se utiliza o está disponible, dependiendo del contexto de ejecución:

| 4D Server             | Interpretado ([asociado al depurador](../Debugging/debugging-remote.md)) | Interpretado (no asociado al depurador) | Compilado           |
| --------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------- |
| Servidor REST         | cooperativo                                                                                 | apropiativo                                                | apropiativo         |
| Servidor Web          | cooperativo                                                                                 | cooperativo                                                | _configuración web_ |
| Servidor Web Services | cooperativo                                                                                 | cooperativo                                                | _configuración web_ |

| 4D remoto/monopuesto  | Interpretado | Compilado           |
| --------------------- | ------------ | ------------------- |
| Servidor REST         | cooperativo  | apropiativo         |
| Servidor Web          | cooperativo  | _configuración web_ |
| Servidor Web Services | cooperativo  | _configuración web_ |

- Servidor REST: gestiona las [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md)
- Servidor web: maneja las [plantillas web](templates.md), [4DACTION y los métodos base](httpRequests.md)
- Servidor de servicios web: gestiona las peticiones SOAP
- _**web setting**_ significa que el modo apropiativo depende de un valor de configuración:
  - cuando se selecciona la opción de [**sesiones escalables**](sessions.md#enabling-sessions), el [modo apropiativo se utiliza automáticamente](sessions.md#preemptive-mode) para los procesos web.
  - en caso contrario, se tendrá en cuenta la opción [**Utilizar procesos apropiativos**](webServerConfig.md#use-preemptive-processes).
  - en lo que respecta a los procesos de servicios web (servidor o cliente), se soporta el modo apropiativo a nivel del método. Sólo tiene que seleccionar la propiedad "Puede ejecutarse en procesos apropiativos" para los métodos del servidor SOAP publicados (ver [Publicación de un servicio web con 4D](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html)) o los métodos del cliente proxy (ver [Suscripción a un servicio web en 4D](https://doc.4d.com/4Dv20/4D/20.2/Subscribing-to-a-Web-Service-in-4D.300-6750336.en.html)) y asegurarse de que el compilador confirme que son hilo seguro.

## Escribir código servidor web hilo seguro

Todo el código 4D ejecutado por el servidor web debe ser hilo seguro si quiere que sus procesos web se ejecuten en modo apropiativo. Cuando el [modo apropiativo está activo](#availability-of-preemptive-mode-for-web-processes), las siguientes partes de la aplicación serán evaluadas automáticamente por el compilador 4D:

- Todos los métodos base relacionados con la web:
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action)

- El método proyecto `compilador_web` (independientemente de su propiedad real "Modo de ejecución");

- Básicamente cualquier código procesado por el comando [`PROCESS 4D TAGS`](https://doc.4d.com/4dv19R/help/command/en/page816.html) en el contexto web, por ejemplo a través de páginas .shtml

- Todo método proyecto con el atributo "Disponible a través de etiquetas 4D y URLs (`4DACTION`, etc.)

- Triggers para tablas con el atributo "Exponer como recurso REST"

- [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md) llamadas vía REST

Para cada uno de estos métodos y partes de código, el compilador comprobará si se respetan las reglas de seguridad de hilos, y devolverá errores en caso de que haya problemas. Para más información sobre las reglas hilo seguro, consulte el párrafo _Escribir un método hilo seguro_ en el capítulo _Procesos_ del manual de [Lenguaje 4D](https://doc.4d.com).

## Código web 4D hilo seguro

La mayoría de los comandos y funciones 4D relacionados con la web, los métodos base y las URL son hilo seguro y pueden utilizarse en modo apropiativo.

### Comandos 4D y métodos base

Todos los comandos 4D relativos a la web son hilo seguro, _es decir_:

- todos los comandos del tema _Servidor Web_,
- todos los comandos del tema _Cliente HTTP_.

Los métodos base relacionados con la web son hilo seguro y pueden utilizarse en modo apropiativo (ver arriba): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Por supuesto, el código ejecutado por estos métodos también debe ser hilo seguro.

### URLs del servidor web

Las siguientes URLs 4D Web Server son hilo seguro y pueden ser utilizadas en modo apropiativo:

- _4daction/_ (el método proyecto llamado también debe ser hilo seguro)
- _4dcgi/_ (los métodos base llamados también deben ser hilo seguro)
- _4dwebtest/_
- _4dblank/_
- _4dstats/_
- _4dhtmlstats/_
- _4dcacheclear/_
- _rest/_
- _4dimgfield/_ (generado por `PROCESS 4D TAGS` para peticiones web en campos imagen)
- _4dimg/_ (generado por `PROCESS 4D TAGS` para la petición web en las variables imagen)

### Icono de proceso web apropiativo

Tanto el Explorador de ejecución como la ventana de administración de 4D Server muestran un icono específico para los procesos web apropiativos:

| Tipo de proceso                                     | Icono                                       |
| --------------------------------------------------- | ------------------------------------------- |
| Método Web (proceso apropiativo) | ![](../assets/en/WebServer/processIcon.png) |
