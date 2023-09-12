---
id: preemptiveWeb
title: Uso de procesos web apropiativos
---


El servidor web de 4D le permite aprovechar al máximo los ordenadores multinúcleo utilizando procesos web apropiativos en sus aplicaciones compiladas. Puede configurar su código relacionado con la web, incluidas las etiquetas 4D y los métodos de base de datos web, para que se ejecute simultáneamente en tantos núcleos como sea posible.

Para obtener información detallada sobre los procesos apropiativos en 4D, consulte la sección *Procesos 4D apropiativos* del [*manual de lenguaje*](https://doc.4d.com).

## Disponibilidad del modo apropiativo para los procesos web

La siguiente tabla indica si el modo apropiativo se utiliza o está disponible, dependiendo del contexto de ejecución:

| 4D Server             | Interpretado, proyecto ([cliente conectado localmente](../Desktop/clientServer.md#using-4d-and-4d-server-on-the-same-machine)) | Interpretado, proyecto (sin cliente conectado localmente) o binario | Compilado       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | --------------- |
| Servidor REST         | cooperativo                                                                                                                    | apropiativo                                                         | apropiativo     |
| Servidor Web          | cooperativo                                                                                                                    | cooperativo                                                         | *parámetro web* |
| Servidor Web Services | cooperativo                                                                                                                    | cooperativo                                                         | *parámetro web* |
| Legado REST           | cooperativo                                                                                                                    | *parámetro web*                                                     | *parámetro web* |

| 4D remoto/monopuesto  | Interpretado | Compilado       |
| --------------------- | ------------ | --------------- |
| Servidor REST         | cooperativo  | apropiativo     |
| Servidor Web          | cooperativo  | *parámetro web* |
| Servidor Web Services | cooperativo  | *parámetro web* |
| Legado REST           | cooperativo  | *parámetro web* |

- Servidor REST: gestiona las [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md)
- Servidor web: maneja las [plantillas web](templates.md), [4DACTION y los métodos base](httpRequests.md)
- Servidor de servicios web: gestiona las peticiones SOAP
- REST heredado: peticiones directas a métodos 4D (`/rest/{table}/{methodName}`)
- ***web setting*** significa que el modo apropiativo depende de un valor de configuración:
  - cuando la opción [**sesiones escalables**](sessions.md#enabling-sessions) está seleccionada, el [modo apropiativo se utiliza automáticamente](sessions.md#preemptive-mode) para los procesos web.
  - de lo contrario, la opción [**Utilizar procesos apropiativos**](webServerConfig.md#use-preemptive-processes) se tiene en cuenta.
  - en lo que respecta a los procesos de servicios web (servidor o cliente), se soporta el modo apropiativo a nivel del método. Sólo tiene que seleccionar la propiedad " Puede ejecutarse en procesos apropiativos " para los métodos del servidor SOAP publicados (ver [Publicación de un servicio web con 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) o los métodos del cliente proxy (ver [Suscripción a un servicio web en 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) y asegurarse de que el compilador confirme que son hilo seguro.

## Escribir código servidor web hilo seguro

Todo el código 4D ejecutado por el servidor web debe ser hilo seguro si quiere que sus procesos web se ejecuten en modo apropiativo. Cuando la opción **Utilizar procesos apropiativos** está marcada en la caja de diálogo Parámetros, las siguientes partes de la aplicación serán evaluadas automáticamente por el compilador 4D:

- Todos los métodos base relacionados con la web:
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication)

- El método proyecto `compilador_web` (independientemente de su propiedad real "Modo de ejecución");

- Básicamente todo código procesado por el comando `PROCESS 4D TAGS` en el contexto web, por ejemplo a través de páginas .shtml.

- Todo método proyecto con el atributo "Disponible a través de etiquetas 4D y URLs (`4DACTION`, etc.)

- Triggers para tablas con el atributo "Exponer como recurso REST"

- [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md) llamadas vía REST

- Métodos proyecto con la propiedad "Servidor REST" marcada (llamadas REST heredadas)

Para cada uno de estos métodos y partes de código, el compilador comprobará si se respetan las reglas de seguridad de hilos, y devolverá errores en caso de que haya problemas. Para más información sobre las reglas hilo seguro, consulte el párrafo *Escribir un método hilo seguro* en el capítulo *Procesos* del manual de [Lenguaje 4D](https://doc.4d.com).

## Código web 4D hilo seguro

La mayoría de los comandos y funciones 4D relacionados con la web, los métodos base y las URL son hilo seguro y pueden utilizarse en modo apropiativo.

### Comandos 4D y métodos base

Todos los comandos 4D relativos a la web son hilo seguro, *es decir*:

- todos los comandos del tema *Servidor Web*,
- todos los comandos del tema *Cliente HTTP*.

Los métodos base relacionados con la web son hilo seguro y pueden utilizarse en modo apropiativo (ver abajo): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Por supuesto, el código ejecutado por estos métodos también debe ser hilo seguro.

### URLs del servidor web

Las siguientes URLs 4D Web Server son hilo seguro y pueden ser utilizadas en modo apropiativo:

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

### Icono de proceso web apropiativo

Tanto el Explorador de ejecución como la ventana de administración de 4D Server muestran un icono específico para los procesos web apropiativos:

| Tipo de proceso                  | Icono                                       |
| -------------------------------- | ------------------------------------------- |
| Método Web (proceso apropiativo) | ![](../assets/en/WebServer/processIcon.png) |
