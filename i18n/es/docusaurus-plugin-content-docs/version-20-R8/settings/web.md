---
id: web
title: Página Web
---

A través de las pestañas de la página **Web**, puede configurar varios aspectos del servidor web integrado de 4D (seguridad, inicio, conexiones, servicios web, etc.). Para más información sobre el funcionamiento del servidor web de 4D, consulte [Servidor web](../WebServer/webServer.md). Para más información sobre los servicios web de 4D, consulte el capítulo [Publicación y uso de los servicios web](https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html).

## Configuración

### Información de publicación

#### Lanzar el servidor web al inicio

Indica si el servidor web se lanzará al iniciar la aplicación 4D. Esta opción se describe en la sección [Administración del servidor web](../WebServer/webServerAdmin.md#starting-the-4d-web-server).

#### Activar HTTP

Indica si el servidor web aceptará o no conexiones no seguras. Ver [Activar HTTP](../WebServer/webServerConfig.md#enable-http).

#### Puerto HTTP

Número de puerto IP (TCP) de escucha para HTTP. Ver [Puerto HTTP](../WebServer/webServerConfig.md#http-port).

#### Dirección IP

Dirección IP en la que el servidor web 4D recibirá las peticiones HTTP (4D local y 4D Server). Ver [Dirección IP a escuchar](../WebServer/webServerConfig.md#ip-address-to-listen).

#### Activar HTTPS

Indica si el servidor web acepta conexiones seguras. Ver [Activar HTTPS](../WebServer/webServerConfig.md#enable-https).

#### Puerto HTTPS

Permite modificar el número de puerto TCP/IP utilizado por el servidor web para las conexiones HTTP seguras sobre TLS (protocolo HTTPS). Ver [Puerto HTTPS](../WebServer/webServerConfig.md#https-port).

#### Autorizar el acceso a la base de datos a través de las URL 4DSYNC

*Nota de compatibilidad:* esta opción es [obsoleta](../WebServer/webServerConfig.md#deprecated-settings). Para el acceso a la base de datos a través de HTTP, ahora se recomienda utilizar las funcionalidades del almacén de datos remoto ORDA y las peticiones REST.

### Rutas

#### Raíz HTML por defecto

Definir la ubicación por defecto de los archivos del sitio web e indicar el nivel jerárquico en el disco por encima del cual los archivos no serán accesibles. Ver [Carpeta raíz](../WebServer/webServerConfig.md#root-folder).

#### Página de inicio por defecto

Designa una página de inicio por defecto para el servidor web. Ver [Página de inicio por defecto](../WebServer/webServerConfig.md#default-home-page).

## Options (I)

### Caché

#### Utilizar la caché Web de 4D

Activa la caché de la página web. Ver [Caché](../WebServer/webServerConfig.md#cache).

#### Tamaño de la caché de las páginas

Define el tamaño de la caché. Ver [Caché](../WebServer/webServerConfig.md#cache).

#### Vaciar la caché

En cualquier momento, puede vacíar la caché de las páginas y de las imágenes que contiene (si, por ejemplo, ha modificado una página estática y quiere volver a cargarla en la caché).
At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache). La caché se borra inmediatamente.

> También puede utilizar la URL especial [/4DCACHECLEAR](../WebServer/webServerAdmin.md#4dcacheclear).

### Procesos Web

Esta área le permite configurar cómo el servidor web manejará las sesiones usuario y sus procesos asociados.

> La opción **Sesiones heredadas** solo está disponible para la compatibilidad en las bases/proyectos creados con las versiones de 4D anteriores a 4D v18 R6.

#### Sesiones extensibles (sesiones multiproceso)

Cuando selecciona esta opción (recomendado), una sesión usuario se gestiona a través de un objeto **Session**. Ver la [página Sesiones usuario](../WebServer/sessions.md#enabling-sessions).

#### Sin sesiones

Cuando se selecciona esta opción, el servidor web no ofrece ningún soporte específico para las [sesiones usuario](../WebServer/sessions.md). Las solicitudes de sucesivas de los clientes web siempre son independientes y no se mantiene ningún contexto en el servidor.

En este modo, puede configurar los parámetros del servidor web adicionales:

- [Máximo de procesos web simultáneos](#maximum-concurrent-web-processes)
- [Reutilización de contextos temporales (4D en modo remoto)](#reuse-temporary-contexts)
- [Usar procesos apropiativos](#use-preemptive-web-processes)

#### Sesiones antiguas (sesiones procesos únicos)

*Nota de compatibilidad:* esta opción sólo está disponible en las bases/proyectos creados con una versión 4D anterior a 4D v18 R6.

Esta opción permite gestionar las antiguas sesiones usuario por el servidor HTTP de 4D. Este mecanismo se describe en la sección [Gestión de Sesiones Web (Legado)](https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html). Ver [Mantener sesión](../WebServer/webServerConfig.md#keep-session).

Cuando se selecciona, la opción [Reutilización de los contextos temporales (4D en modo remoto)](#reuse-temporary-contexts) es marcada automáticamente (y bloqueada).

#### Procesos Web simultáneos maximos

No disponible con las [sesiones extensibles](../WebServer/sessions.md).

Límite estrictamente superior de procesos web simultáneos. Ver [Procesos Web simultáneos máximos](../WebServer/webServerConfig.md#maximum-concurrent-web-processes).

#### Reutilización de los contextos temporales

No disponible con las [sesiones extensibles](../WebServer/sessions.md).

Le permite optimizar el funcionamiento del servidor Web de 4D en modo remoto. Ver [Reutilización de los contextos temporales en modo remoto)](../WebServer/webServerConfig.md#reuse-temporary-contexts-in-remote-mode).

#### Utilizar procesos apropiativos

No disponible con las [sesiones extensibles](../WebServer/sessions.md).

Activa los procesos web apropiativos en sus aplicaciones compiladas. Cuando se selecciona **Utilizar los procesos apropiativos**, la elegibilidad de su código relacionado con la web (incluyendo las etiquetas 4D y los métodos base Web) para la ejecución apropiativa será evaluada durante la compilación. Para más información, consulte [Utilizar los procesos web apropiativos](../WebServer/preemptiveWeb.md).

> Esta opción no se aplica a las sesiones extensibles, a los procesos REST (modo compilado) ni a los procesos de servicios web (servidor o cliente).  Ver [Activar el modo apropiativo para el servidor web](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server).

#### Tiempo de espera del proceso inactivo

No disponible con las [sesiones extensibles](../WebServer/sessions.md).

Le permite definir el tiempo de espera máximo antes de cerrar los procesos Web inactivos en el servidor. Ver [Duración de los procesos inactivos](../WebServer/webServerConfig.md#inactive-process-timeout).

### Contraseñas Web

Define el sistema de autenticación que desea aplicar a su servidor web. Se proponen tres opciones:

Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol

Se recomienda utilizar la autenticación **personalizada**. Ver el capítulo [**Autenticación**](../WebServer/authentication.md) en la documentación *Desarrollo Web*.

## Options (II)

### Conversión texto

#### Enviar directamente los caracteres extendidos

Ver [Propiedades obsoletas](../WebServer/webServerConfig.md#deprecated-settings).

#### Standard Set

Define el conjunto de caracteres a utilizar por el servidor web 4D. Ver [Conjunto de caracteres](../WebServer/webServerConfig.md#character-set).

### Conexiones Keep-Alive

Ver [Propiedades obsoletas](../WebServer/webServerConfig.md#keep-alive-connections).

### Parámetros CORS

#### Activar CORS

Activa el servicio Cross-origin resource sharing (CORS). Ver [Activar Cors](../WebServer/webServerConfig.md#activer-cors).

#### Nombres de dominios/métodos HTTP permitidos

Lista de hosts y métodos permitidos para el servicio CORS. Ver [Parámetros CORS](../WebServer/webServerConfig.md#cors-settings).

## Historial (tipo)

### Formato del historial

Inicia o detiene el registro de las peticiones recibidas por el servidor web 4D en el archivo *logweb.txt* y define su formato. Ver [Registro de logs](../WebServer/webServerConfig.md#log-recording).

> La activación y desactivación del archivo de historial de peticiones también se puede efectuar por programación utilizando el comando [WEB SET OPTION](https://doc.4d.com/4dv19R/help/command/en/page1210.html).

El menú de formato de registro ofrece las siguientes opciones:

- **Sin archivo de registro**: cuando se selecciona esta opción, 4D no generará un archivo de historial de peticiones.

- **CLF (Common Log Format)**: cuando se selecciona esta opción, el historial de peticiones se genera en formato CLF. Con el formato CLF, cada línea del archivo representa una solicitud, como:\
  host rfc931 user [DD/MMM/AAAA:HH:MM:SS] "request" state length\
  Cada campo está separado por un espacio y cada línea termina con la secuencia CR/LF (character 13, character 10).

  - host: dirección IP del cliente (por ejemplo: "192.100.100.10)
  - rfc931: información no generada por 4D, siempre es - (un signo menos)
  - usuario: nombre del usuario como está autenticado, o - (un signo menos). Si el nombre de usuario contiene espacios, se remplazan por _ (un guión bajo).
  - DD: día, MMM: una abreviatura de 3 letras para el nombre del mes (Jan, Feb,...), YYYY: año, HH: hora, MM: minutos, SS: segundos

> La fecha y hora son locales al servidor.

- petición: solicitud enviada por el cliente (por ejemplo, GET /index.htm HTTP/1.0)
- estado: respuesta dada por el servidor.
- longitud: tamaño de los datos devueltos (excepto el encabezado HTTP) o 0.

> **Nota:** por razones de rendimiento, las operaciones se guardan en una memoria búfer por paquetes de 1Kb antes de ser escritas en el disco. Las operaciones también se escriben en disco si no se ha enviado ninguna petición cada 5 segundos.
> Los posibles valores de estado son los siguientes
> 200: OK
> 204: No contents
> 302: Redirection
> 304: Not modified
> 400: Incorrect request
> 401: Authentication required
> 404: Not found
> 500: Internal error
> El formato CLF no puede personalizarse.

- **DLF (Combined Log Format)**: cuando se selecciona esta opción, el historial de peticiones se genera en formato DLF. El formato DLF es similar al formato CLF y utiliza exactamente la misma estructura. Simplemente añade dos campos HTTP adicionales al final de cada petición: Referer y User-agent.

  - Referer: contiene la URL de la página que apunta al documento solicitado.
  - User-agent: contiene el nombre y la versión del navegador o del software cliente en el origen de la petición.

> El formato DLF no se puede personalizar.

- **ELF (Extended Log Format)**: cuando se selecciona esta opción, el historial de peticiones se genera en formato ELF. El formato ELF está muy extendido en el mundo de los navegadores HTTP. Puede utilizarse para construir historiales sofisticados que respondan a necesidades específicas. Por esta razón, el formato ELF se puede personalizar: es posible elegir los campos que se van a registrar, así como su orden de inserción en el archivo.

- **WLF (WebStar Log Format)**: cuando se selecciona esta opción, el historial de peticiones se genera en formato WLF. El formato WLF se desarrolló específicamente para el servidor 4D WebSTAR. Es similar al formato ELF, con sólo unos pocos campos adicionales. Al igual que el formato ELF, se puede personalizar.

**Configuring the fields** When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. Deberá seleccionar cada campo para incluirlo en el registro. You will need to select each field to be included in the log.

**Nota**: no puede seleccionar el mismo campo dos veces.

La siguiente tabla enumera los campos disponibles para cada formato (en orden alfabético) y describe su contenido:

| Campo                                                  | ELF | WLF | Valor                                                                                                                                                                                          |
| ------------------------------------------------------ | --- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BYTES_RECEIVED                    |     | X   | Número de bytes recibidos por el servidor                                                                                                                                                      |
| BYTES_SENT                        | X   | X   | Número de bytes enviados por el servidor al cliente                                                                                                                                            |
| C_DNS                             | X   | X   | Dirección IP del DNS (ELF: campo idéntico al campo C_IP)                                                                               |
| C_IP                              | X   | X   | Dirección IP del cliente (por ejemplo 192.100.100.10)                                                                       |
| CONNECTION_ID                     |     | X   | Número de identificación de la conexión                                                                                                                                                        |
| CS(COOKIE)                          | X   | X   | Información sobre las cookies contenidas en la petición HTTP                                                                                                                                   |
| CS(HOST)                            | X   | X   | Campo Host de la petición HTTP                                                                                                                                                                 |
| CS(REFERER)                         | X   | X   | URL de la página que apunta al documento solicitado                                                                                                                                            |
| CS(USER_AGENT) | X   | X   | Información sobre el software y el sistema operativo del cliente                                                                                                                               |
| CS_SIP                            | X   | X   | Dirección IP del servidor                                                                                                                                                                      |
| CS_URI                            | X   | X   | URI sobre el que se realiza la petición                                                                                                                                                        |
| CS_URI_QUERY | X   | X   | Parámetros de consulta de la petición                                                                                                                                                          |
| CS_URI_STEM  | X   | X   | Parte de la solicitud sin los parámetros de la consulta                                                                                                                                        |
| DATE                                                   | X   | X   | DD: día, MMM: abreviación de 3 letras para el mes (Jan, Feb,...), YYYY: año |
| METHOD                                                 | X   | X   | Método HTTP utilizado para la solicitud enviada al servidor                                                                                                                                    |
| PATH_ARGS                         |     | X   | Parámetros de la CGI: cadena situada después del caracter "$"                                                                                                                  |
| STATUS                                                 | X   | X   | Respuesta ofrecida por el servidor                                                                                                                                                             |
| TIME                                                   | X   | X   | HH: hora, MM: minutos, SS: segundos                                                                                                            |
| TRANSFER_TIME                     | X   | X   | Tiempo solicitado por el servidor para generar la respuesta                                                                                                                                    |
| USER                                                   | X   | X   | Nombre de usuario si está autenticado; en caso contrario, - (signo menos).                                                                                  |
|                                                        |     |     | Si el nombre de usuario contiene espacios, se sustituyen por _ (subrayado)                                                                             |
| URL                                                    |     | X   | URL solicitado por el cliente                                                                                                                                                                  |

> Las fechas y horas se indican en GMT.

## Historial (periodicidad)

Configure los parámetros de copia de seguridad automática para el registro de las peticiones. Primero debe elegir la frecuencia (días, semanas, etc.) o el criterio de límite de tamaño de archivo haciendo clic en el botón de opción correspondiente. A continuación, debe especificar el momento preciso de la copia de seguridad si es necesario.

- **Sin copia de seguridad**: la función de copia de seguridad programada está desactivada.
- **Cada X hora(s)**: esta opción se utiliza para programar las copias de seguridad con una base horaria. Puede introducir un valor entre 1 y 24 .

  - **a partir de**: permite definir la hora de activación de la primera copia de seguridad.
- **Cada X día(s) a las X**: esta opción se utiliza para programar las copias de seguridad con una base diaria. Introduzca 1 si desea realizar una copia de seguridad diaria. Cuando esta opción está marcada, debe indicar la hora a la que debe comenzar la copia de seguridad.
- **Cada X semana(s), día a las X**: esta opción se utiliza para programar las copias de seguridad con una base semanal. Introduzca 1 si desea realizar una copia de seguridad semanal. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired.
- **Cada X mes(es), el día X a las X**: esta opción se utiliza para programar las copias de seguridad con una base mensual. Introduzca 1 si desea realizar una copia de seguridad mensual. Enter 1 if you want to perform a monthly backup.
- **Todos los X MB**: esta opción se utiliza para programar las copias de seguridad en función del tamaño del archivo de registro actual. Una copia de seguridad se activa automáticamente cuando el archivo alcanza el tamaño especificado. Puedes definir un límite de tamaño de 1, 10, 100 o 1000 MB.

> En el caso de las copias de seguridad programadas, si el servidor web no fue lanzado cuando se programó la copia de seguridad, en el siguiente lanzamiento 4D considera que la copia de seguridad ha fallado y aplica los parámetros adecuados, definidos en las Propiedades de la base.

## Web Services

Las opciones de esta pestaña permiten activar y configurar los servicios Web para el proyecto 4D, tanto por su publicación (lado del servidor) y su suscripción (lado del cliente).

Para más información sobre el soporte de los servicios web en 4D, consulte el capítulo [Publicación y uso de los servicios web](https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html).

### Servidor

Esta área contiene varias opciones relativas con el uso de 4D como un "servidor" de Servicios Web, es decir la publicación de los métodos proyecto en forma de Servicios Web.

- **Autorizar peticiones de servicios web**: esta opción le permite inicializar la publicación de servicios web. Si esta opción no ha sido seleccionada, 4D rechaza las peticiones SOAP y no genera una WSDL - incluso si los métodos tienen el atributo *Publicado en WSDL*. Cuando esta opción está marcada, 4D crea el archivo WSDL.
- **Nombre del Servicio Web**: esta área le permite cambiar el "nombre genérico" del Servicio Web. Este nombre se utiliza para diferenciar los servicios tanto a nivel de servidor SOAP (cuando el servidor publica varios Servicios Web diferentes), así como en los directorios de Servicios Web. Por defecto, 4D utiliza el nombre A_WebService.
- **Espacio de nombres de Servicios Web**: esta área se utiliza para cambiar el espacio de nombres (namespace) de los Servicios Web publicados por 4D. Cada Servicio Web publicado en Internet debe ser único. La unicidad de los nombres de los Servicios Web se asegura mediante el uso de espacios de nombres XML. Un namespace es una cadena de caracteres arbitraria usada para identificar de manera única un conjunto de etiquetas XML. Por lo general, el espacio de nombres comienza por la URL de la empresa (http://mycompany.com/mynamespace). En este caso, no es indispensable tener nada en particular en la URL indicada; lo que importa es que la cadena de caracteres utilizada sea única. Por defecto, 4D utiliza el siguiente espacio de nombres: http://www.4d.com/namespace/default.

> Conforme al estándar XML para los nombres de etiquetas, las cadenas de caracteres utilizadas no deben contener espacios ni comenzar con un número. Además, para evitar cualquier riesgo de incompatibilidad, recomendamos que no utilice ningún caracter extendido (como los caracteres acentuados).

### Cliente

Esta área contiene varias opciones relacionadas con el uso de 4D como un "cliente" de Servicios Web, es decir, suscribirse a los servicios publicados en la red.

- **Prefijo de los métodos creados por el asistente**: esta área le permite cambiar el prefijo que se añade automáticamente por 4D al nombre de los métodos proxy generados por el asistente de servicios web. Los métodos proyecto proxy forman un enlace entre la aplicación 4D y el servidor de Servicios Web. Por defecto, 4D utiliza el prefijo "proxy_".

## Funcionalidades Web

Esta página contiene las opciones utilizadas para activar y controlar las funcionalidades web avanzadas, como el servidor REST.

### Publicación

#### Activar el servicio REST

Inicia y detiene el servidor REST. Ver [Configuración del servidor REST](../REST/configuration.md).

### Acceso

:::info Obsoleto

**Esta sección está obsoleta** a partir de 4D 20 R6. Si la configuración actual del proyecto es obsoleta y debe actualizarse, se mostrará esta sección, incluido el botón **Activar la autenticación REST mediante la función ds.authentify()** (ver más abajo). Si su proyecto ya es compatible con el modo [Force login](../REST/authUsers.md#force-login-mode), la sección falta y puede ignorar este párrafo.

:::

See [Users and sessions](../REST/authUsers.md) to know the recommended way to control and manage REST access in your 4D projects.

#### Activar la autenticación REST mediante la función ds.authentify()

Haga clic en el botón **Activar la autenticación REST mediante la función ds.authentify()** para actualizar automáticamente su proyecto en lo que respecta al acceso de usuarios REST. Tenga en cuenta que esta operación no puede revertirse y puede requerir que modifique su código (aparece un cuadro de diálogo de advertencia al presionar el botón).

:::note

Este botón solo está disponible en los proyectos abiertos con la aplicación 4D (monopuesto).

:::

El botón activa la siguiente secuencia de actualización:

- Se elimina el grupo de usuarios de la API REST definido en el menú **Leer/Escribir**.
- Se elimina el método base `On REST Authentication` (se traslada a la papelera del sistema).
- Se crea un archivo ["roles.json"](../ORDA/privileges.md#rolesjson-file) por defecto en la carpeta [Sources](../Project/architecture.md#sources) del proyecto si no existe, con su atributo `forceLogin` a `True`.

Recuerde reiniciar su proyecto después de realizar esta actualización.

El siguiente paso es modificar su código en consecuencia. [**Vea esta entrada del blog para saber cómo proceder**](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/).

### Qodly Studio

#### Activar el acceso a Qodly Studio

:::note

Esta opción sólo aparece si la licencia de Qodly Studio está activa.

:::

Esta opción permite el acceso del usuario a [Qodly Studio](../WebServer/qodly-studio.md) para el proyecto actual. Tenga en cuenta que el acceso global debe permitirse al [nivel de la aplicación](../Admin/webAdmin.md).
