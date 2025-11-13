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
| Servidor Web          | cooperativo                                                                                 | cooperativo                                                | *configuración web* |
| Servidor Web Services | cooperativo                                                                                 | cooperativo                                                | *configuración web* |

| 4D remoto/monopuesto  | Interpretado | Compilado           |
| --------------------- | ------------ | ------------------- |
| Servidor REST         | cooperativo  | apropiativo         |
| Servidor Web          | cooperativo  | *configuración web* |
| Servidor Web Services | cooperativo  | *configuración web* |

- Servidor REST: gestiona las [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md)
- Servidor web: maneja las [plantillas web](templates.md), [4DACTION y los métodos base](httpRequests.md)
- Servidor de servicios web: gestiona las peticiones SOAP
- ***web setting*** means that the preemptive mode depends on the [**scalable sessions**](sessions.md#enabling-web-sessions) status:
  - si las sesiones escalables están activadas, el modo apropiativo se utiliza automáticamente para los procesos web y servicios web.
  - si las sesiones escalables no están activadas:
    - for web processes, the [**Use preemptive processes**](webServerConfig.md#use-preemptive-processes) option is taken into account.
    - for web service processes (server or client), preemptive mode is supported at method level.

## Escribir código servidor web hilo seguro

Todo el código 4D ejecutado por el servidor web debe ser hilo seguro si quiere que sus procesos web se ejecuten en modo apropiativo. Cuando el [modo apropiativo está activo](#availability-of-preemptive-mode-for-web-processes), las siguientes partes de la aplicación serán evaluadas automáticamente por el compilador 4D:

- Todos los métodos base relacionados con la web:
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - `On REST Authentication`
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action)

- El método proyecto `compilador_web` (independientemente de su propiedad real "Modo de ejecución");

- Básicamente cualquier código procesado por el comando [`PROCESS 4D TAGS`](../commands-legacy/process-4d-tags.md) en el contexto web, por ejemplo a través de páginas .shtml

- Todo método proyecto con el atributo "Disponible a través de etiquetas 4D y URLs (`4DACTION`, etc.)

- Triggers para tablas con el atributo "Exponer como recurso REST"

- [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md) llamadas vía REST

For each of these methods and code parts, the compiler will check if the [thread-safety rules are respected](../Develop/preemptive.md#writing-a-thread-safe-method), and will return errors in case of issues.

## Código web 4D hilo seguro

La mayoría de los comandos y funciones 4D relacionados con la web, los métodos base y las URL son hilo seguro y pueden utilizarse en modo apropiativo.

### Comandos 4D y métodos base

Todos los comandos 4D relativos a la web son hilo seguro, *es decir*:

- todos los comandos del tema *Servidor Web*,
- todos los comandos del tema *Cliente HTTP*.

Los métodos base relacionados con la web son hilo seguro y pueden utilizarse en modo apropiativo (ver arriba): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Por supuesto, el código ejecutado por estos métodos también debe ser hilo seguro.

### URLs del servidor web

Las siguientes URLs 4D Web Server son hilo seguro y pueden ser utilizadas en modo apropiativo:

- *4daction/* (el método proyecto llamado también debe ser hilo seguro)
- *4dwebtest/*
- *4dblank/*
- *4dstats/*
- *4dhtmlstats/*
- *4dcacheclear/*
- *rest/*
- *4dimgfield/* (generado por `PROCESS 4D TAGS` para peticiones web en campos imagen)
- *4dimg/* (generado por `PROCESS 4D TAGS` para la petición web en las variables imagen)

### Icono de proceso web apropiativo

Tanto el Explorador de ejecución como la ventana de administración de 4D Server muestran un icono específico para los procesos web apropiativos:

| Tipo de proceso                                     | Icono                                       |
| --------------------------------------------------- | ------------------------------------------- |
| Método Web (proceso apropiativo) | ![](../assets/en/WebServer/processIcon.png) |
