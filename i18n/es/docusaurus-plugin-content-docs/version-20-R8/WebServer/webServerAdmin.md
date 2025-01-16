---
id: webServerAdmin
title: Administración
---

4D ofrece varias herramientas integradas para iniciar, detener o supervisar el servidor web integrado.

## Iniciar el servidor Web 4D

> Para poder lanzar el servidor web de 4D o 4D Server, debe tener una licencia "4D Web Application". Para más información, consulte el [sitio web de 4D](https://www.4d.com).

Un proyecto 4D puede iniciar y monitorizar un servidor web para la aplicación principal (host) así como para cada componente alojado.

El servidor web principal de 4D puede iniciarse de diferentes maneras:

- Utilizando un botón o comando de menú.
  - 4D: **Ejecutar\>Iniciar el servidor Web** menú<br/>![](../assets/en/WebServer/start1.png)
  - 4D Server: botón **Iniciar servidor HTTP** de la página Servidor HTTP<br/>![](../assets/en/WebServer/start2.png)

- Se inicia automáticamente cada vez que se abre la aplicación 4D. Para ello, despliegue la página **Web\/Configuración** de la Configuración y active la casilla **Lanzar servidor web al iniciar**:<br/>![](../assets/en/WebServer/config.png)

- Programáticamente, llamando a la función [`webServer.start()`](API/WebServerClass.md#start) o al comando `WEB START SERVER`.

El servidor web de todo componente puede ser lanzado llamando a la función [`webServer.start()`](API/WebServerClass.md#start) en el objeto servidor web del componente.

> No es necesario relanzar la aplicación 4D para iniciar o detener el servidor web.

## Detener el servidor Web 4D

El servidor web principal de 4D puede detenerse de diferentes maneras:

- Utilizando el menú 4D **Ejecución\>Detener el servidor Web**, o vía el botón **Detener el servidor HTTP** de la página Servidor HTTP de 4D Server (ambos elementos muestran **Iniciar...** cuando el servidor no está ya iniciado).

- Programáticamente, llamando a la función [`webServer.stop()`](API/WebServerClass.md#stop) o al comando `WEB STOP SERVER`.

El servidor web de cualquier componente puede detenerse llamando a la función `webServer.stop()` en el objeto servidor web del componente.

## Probar el servidor Web 4D

El comando **Test Web Server** puede utilizarse para asegurarse de que el servidor web integrado funciona correctamente (sólo en 4D). Este comando es accesible en el menú **Ejecutar** cuando se lanza el servidor web:

![](../assets/en/WebServer/test1.png)

Al seleccionar este comando, la página de inicio del sitio web publicado por la aplicación 4D se muestra en una ventana de su navegador web predeterminado:

![](../assets/en/WebServer/defaultHomePage.png)

Este comando permite verificar que el servidor web, la visualización de la página de inicio, etc. funcionan correctamente. La página se llama utilizando la URL _localhost_, que es el atajo estándar que designa la dirección IP de la máquina en la que se ejecuta el navegador web. El comando tiene en cuenta el número de [puerto de publicación TCP](#http-port) especificado en los parámetros.

## Borrar la caché

En cualquier momento, puede vacíar la caché de las páginas y de las imágenes que contiene (si, por ejemplo, ha modificado una página estática y quiere volver a cargarla en la caché).

Para ello, puede:

- 4D: haga clic en el botón **Borrar la caché** de la página [Web/Opciones (I)](../settings/web.md) de la caja de diálogo Parámetros.
- 4D Server: haga clic en el botón **Borrar la caché** de la página HTTP de la ventana Administración de 4D Server.

La caché se borra inmediatamente.

> También puede utilizar la URL [/4DCACHECLEAR](#cacheclear).

## Explorador de ejecución

La página **Watch** (sección **Web**) del Explorador de ejecución muestra la información del servidor web, en particular:

- **Uso de la caché web**: indica el número de páginas presentes en la caché web así como su porcentaje de uso. Esta información sólo está disponible si el servidor web está activo y si el tamaño de la caché es mayor que 0.

- **Tiempo de actividad del servidor web**: indica la duración del uso (en formato horas:minutos:segundos) del servidor web. Esta información sólo está disponible si el servidor web está activo.

- **Conteo de visitas web**: indica el número total de peticiones HTTP recibidas desde el arranque del servidor web, así como un número instantáneo de peticiones por segundo (medida tomada entre dos actualizaciones del Explorador de ejecución). Esta información sólo está disponible si el servidor web está activo.

## URL para la administración

Las URL de administración del sitio web le permiten controlar el sitio web publicado en su servidor. 4D Web Server acepta cuatro URLs específicas: _/4DSTATS_, _/4DHTMLSTATS_, /_4DCACHECLEAR_ y _/4DWEBTEST_.

> _/4DSTATS_, _/4DHTMLSTATS_ y _/4DCACHECLEAR_ sólo están disponibles para el diseñador y el administrador de la base de datos. Si el sistema de contraseñas 4D no ha sido activado, estas URLs están disponibles para todos los usuarios. /4DWEBTEST está siempre disponible.

### /4DSTATS

La URL **/4DSTATS** devuelve varios elementos de información en una tabla HTML (visualizable en un navegador):

| Elemento                  | Descripción                                                              |
| ------------------------- | ------------------------------------------------------------------------ |
| Tamaño actual de la caché | Tamaño actual de la caché del servidor web (en bytes) |
| Tamaño máximo de la caché | Tamaño máximo de la caché (en bytes)                  |
| Cached Object Max Size    | Tamaño máximo de cada objeto en la caché (en bytes)   |
| Cache Use                 | Porcentaje de caché utilizado                                            |
| Cached Objects            | Número de objetos encontrados en la caché, **incluyendo imágenes**       |

Esta información puede permitirle comprobar el funcionamiento de su servidor y, eventualmente, adaptar los parámetros correspondientes.

> El comando `WEB GET STATISTICS` permite obtener también información sobre cómo se está utilizando la caché de las páginas estáticas.

### /4DHTMLSTATS

La URL _/4DHTMLSTATS_ devuelve, también como una HTML, la misma información que la URL _/4DSTATS_. La diferencia es que el campo **Cached Objects** sólo cuenta las páginas HTML (sin contar los archivos de imágenes). Además, esta URL devuelve el campo **Objetos filtrados**.

| Elemento                  | Descripción                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------ |
| Tamaño actual de la caché | Tamaño actual de la caché del servidor web (en bytes)             |
| Tamaño máximo de la caché | Tamaño máximo de la caché (en bytes)                              |
| Cached Object Max Size    | Tamaño máximo de cada objeto en la caché (en bytes)               |
| Cache Use                 | Porcentaje de caché utilizado                                                        |
| Cached Objects            | Número de objetos encontrados en la caché, **sin imágenes**                          |
| Objetos filtrados         | Número de objetos en la caché que no se cuentan por URL, en particular, las imágenes |

### /4DCACHECLEAR

La URL _/4DCACHECLEAR_ elimina inmediatamente las páginas estáticas y las imágenes de la caché. Por tanto, permite "forzar" la actualización de las páginas que han sido modificadas.

### /4DWEBTEST

La URL _/4DWEBTEST_ permite verificar el estado del servidor web. Cuando se llama a esta URL, 4D devuelve un archivo texto con los campos HTTP siguientes llenos:

| Campo HTTP | Descripción                                              | Ejemplo                                                                                                                                                                                                                                                                                                                                            |
| ---------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fecha      | fecha actual en el formato RFC 822                       | Mon, 7 Dec 2020 13:12:50 GMT                                                                                                                                                                                                                                                                                       |
| Server     | 4D/Número de versión                                     | 4D/18.5.0 (Build 18R5.257368)                                                                                                                                                                                                                                                   |
| User-Agent | nombre y versión @ dirección IP del cliente | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36 @ 127.0.0.1 |

## Logs

4D le permite generar dos historiales de peticiones web:

- un historial de depuración, útil en la fase de desarrollo del servidor web (_HTTPDebugLog.txt_),
- un historial estandarizado de peticiones web, más bien utilizado con fines estadísticos (_logweb.txt_).

Ambos archivos de historial se crean automáticamente en la carpeta **Logs** del proyecto de aplicación.

### HTTPDebugLog.txt

El [archivo de depuración http](webServerConfig.md#debug-log) puede activarse utilizando el [objeto `web server`](webServerObject.md) o el comando `WEB SET OPTION`.

Este archivo de historial registra cada petición HTTP y cada respuesta en modo bruto (raw). Se registran las solicitudes completas, incluidos los encabezados; opcionalmente, también se pueden registrar las partes del cuerpo.

Los siguientes campos se registran tanto para la solicitud como para la respuesta:

| Nombre del campo | Descripción                                                                           |
| ---------------- | ------------------------------------------------------------------------------------- |
| SocketID         | ID del socket utilizado para la comunicación                                          |
| PeerIP           | Dirección IPv4 del host (cliente)                                  |
| PeerPort         | Puerto utilizado por host (cliente)                                |
| TimeStamp        | Timestamp en milisegundos (desde el inicio del sistema)            |
| ConnectionID     | Conexión UUID (UUID del VTCPSocket utilizado para la comunicación) |
| SequenceNumber   | Número de operación único y secuencial en la sesión de historial                      |

### logweb.txt

El [archivo de registro web](webServerConfig.md#log-recording) puede activarse utilizando el [`servidor web`](webServerObject.md), el comando `WEB SET OPTION`, o la página **Web/Log (tipo)** de las Propiedades. Debe seleccionar el formato de historial.

#### CLF/DLF

Each line of the file represents a request, such as: _host rfc931 user \[DD/MMM/YYYY:HH:MM:SS] "request" state length_ Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

El formato DLF (Combined Log Format) es similar al formato CLF (Common Log Format) y utiliza exactamente la misma estructura. Simplemente añade dos campos HTTP adicionales al final de cada petición: Referer y User-agent. Esta es la descripción de los formatos CLF/DLF (no personalizables):

| Nombre del campo                                                     | Descripción                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host                                                                 | Dirección IP del cliente (por ejemplo: "192.100.100.10)                                                                                                                                                                                                                                   |
| rfc931                                                               | información no generada por 4D, siempre es - (un signo menos                                                                                                                                                                                                                                                                                              |
| user                                                                 | nombre de usuario como está autenticado, o - (un signo menos). Si el nombre de usuario contiene espacios, se remplazan por _ (un guión bajo).                                                                                                                                     |
| DD/MMM/YYYY:HH:MM:SS | DD: día, MMM: una abreviatura de 3 letras para el nombre del mes (Jan, Feb,...), YYYY: año, HH: hora, MM: minutos, SS: segundos. La fecha y hora son locales al servidor. |
| request                                                              | solicitud enviada por el cliente (por ejemplo, GET /index.htm HTTP/1.0                                                                                                                                                                                                                                                    |
| state                                                                | respuesta dada por el servidor                                                                                                                                                                                                                                                                                                                                               |
| length                                                               | tamaño de los datos devueltos (excepto el encabezado HTTP) o 0                                                                                                                                                                                                                                                                                            |
| Referer                                                              | Sólo DLF- Contiene la URL de la página que apunta al documento solicitado.                                                                                                                                                                                                                                                                                   |
| User-agent                                                           | DLF únicamente - Contiene el nombre y la versión del navegador o del software del cliente en el origen de la solicitud                                                                                                                                                                                                                                                       |

#### ELF/WLF

El formato ELF (Extended Log Format) está muy extendido en el mundo de los navegadores HTTP. Puede utilizarse para construir historiales sofisticados que respondan a necesidades específicas. Por esta razón, el formato ELF se puede personalizar: es posible elegir los campos que se van a registrar, así como su orden de inserción en el archivo.

El formato WLF (WebStar Log Format) fue desarrollado específicamente para el servidor 4D WebSTAR.

##### Configurar los campos

Al elegir el formato ELF o WLF, el área "Web Log Token Selection" muestra los campos disponibles para el formato elegido. Deberá seleccionar cada campo para incluirlo en el registro. Para ello, marque los campos deseados.

> No puede seleccionar el mismo campo dos veces.

La siguiente tabla enumera los campos disponibles para cada formato (en orden alfabético) y describe su contenido:

| Campo                                                  | ELF | WLF | Valor                                                                                                                                                                                                                            |
| ------------------------------------------------------ | --- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BYTES_RECEIVED                    |     | X   | Número de bytes recibidos por el servidor                                                                                                                                                                                        |
| BYTES_SENT                        | X   | X   | Número de bytes enviados por el servidor al cliente                                                                                                                                                                              |
| C_DNS                             | X   | X   | Dirección IP del DNS (ELF: campo idéntico al campo C_IP)                                                                                                                 |
| C_IP                              | X   | X   | Dirección IP del cliente (por ejemplo 192.100.100.10)                                                                                                         |
| CONNECTION_ID                     |     | X   | Número de identificación de la conexión                                                                                                                                                                                          |
| CS(COOKIE)                          | X   | X   | Información sobre las cookies contenidas en la petición HTTP                                                                                                                                                                     |
| CS(HOST)                            | X   | X   | Campo Host de la petición HTTP                                                                                                                                                                                                   |
| CS(REFERER)                         | X   | X   | URL de la página que apunta al documento solicitado                                                                                                                                                                              |
| CS(USER_AGENT) | X   | X   | Información sobre el software y el sistema operativo del cliente                                                                                                                                                                 |
| CS_SIP                            | X   | X   | Dirección IP del servidor                                                                                                                                                                                                        |
| CS_URI                            | X   | X   | URI sobre el que se realiza la petición                                                                                                                                                                                          |
| CS_URI_QUERY | X   | X   | Parámetros de consulta de la petición                                                                                                                                                                                            |
| CS_URI_STEM  | X   | X   | Parte de la solicitud sin los parámetros de la consulta                                                                                                                                                                          |
| DATE                                                   | X   | X   | DD: día, MMM: abreviación de 3 letras para el mes (Jan, Feb,...), YYYY: año                                   |
| METHOD                                                 | X   | X   | Método HTTP utilizado para la solicitud enviada al servidor                                                                                                                                                                      |
| PATH_ARGS                         |     | X   | Parámetros CGI: cadena situada después del caracter "$"                                                                                                                                                          |
| STATUS                                                 | X   | X   | Respuesta ofrecida por el servidor                                                                                                                                                                                               |
| TIME                                                   | X   | X   | HH: hora, MM: minutos, SS: segundos                                                                                                                                              |
| TRANSFER_TIME                     | X   | X   | Tiempo solicitado por el servidor para generar la respuesta                                                                                                                                                                      |
| USER                                                   | X   | X   | Nombre de usuario si está autenticado; en caso contrario, - (signo menos). Si el nombre de usuario contiene espacios, se sustituyen por _ (subrayado) |
| URL                                                    |     | X   | URL solicitado por el cliente                                                                                                                                                                                                    |

> Las fechas y horas se indican en GMT.

#### Frecuencia del backup

Dado que un archivo _logweb.txt_ puede llegar a ser considerablemente grande, es posible establecer un mecanismo de archivo automático. La activación de una copia de seguridad puede basarse en un periodo de tiempo determinado (expresado en horas, días, semanas o meses), o en función del tamaño del archivo; cuando se alcanza el plazo establecido (o el tamaño del archivo), 4D cierra y archiva automáticamente el archivo de registro actual y crea uno nuevo.

Cuando se activa la copia de seguridad del archivo de registro web, el archivo de registro se archiva en una carpeta llamada "Archivos Logweb", que se crea en el mismo nivel que el archivo _logweb.txt_.

El fichero archivado se renombra según el siguiente ejemplo "DYYY_MM_DD_Thh_mm_ss.txt". For instance, for a file archived on September 4, 2020 at 3:50 p.m. and 7 seconds: “D2020_09_04_T15_50_07.txt.” y 7 segundos: “D2020_09_04_T15_50_07.txt.”

#### Parámetros de backup

Los parámetros de copia de seguridad automáticadel logweb.txt se definen en la página **Web/Log (copia de seguridad)** de los parámetros:

![](../assets/en/WebServer/backup.png)

Primero debe elegir la frecuencia (días, semanas, etc.) o el criterio de límite de tamaño de archivo haciendo clic en el botón de opción correspondiente. A continuación, debe especificar el momento preciso de la copia de seguridad si es necesario.

- **Sin copia de seguridad**: la función de copia de seguridad programada está desactivada.

- **Cada X hora(s)**: esta opción se utiliza para programar las copias de seguridad con una base horaria. Puede introducir un valor entre 1 y 24 .
  - **a partir de**: permite definir la hora de activación de la primera copia de seguridad.

- **Cada X día(s) a las X**: esta opción se utiliza para programar las copias de seguridad con una base diaria. Introduzca 1 si desea realizar una copia de seguridad diaria. Cuando esta opción está marcada, debe indicar la hora a la que debe comenzar la copia de seguridad.

- **Cada X semana(s), día a las X**: esta opción se utiliza para programar las copias de seguridad con una base semanal. Introduzca 1 si desea realizar una copia de seguridad semanal. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired.

- **Cada X mes(es), el día X a las X**: esta opción se utiliza para programar las copias de seguridad con una base mensual. Introduzca 1 si desea realizar una copia de seguridad mensual. Enter 1 if you want to perform a monthly backup.

- **Todos los X MB**: esta opción se utiliza para programar las copias de seguridad en función del tamaño del archivo de registro actual. Una copia de seguridad se activa automáticamente cuando el archivo alcanza el tamaño especificado. Puedes definir un límite de tamaño de 1, 10, 100 o 1000 MB.
