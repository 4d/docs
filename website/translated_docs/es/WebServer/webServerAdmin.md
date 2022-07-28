---
id: webServerAdmin
title: Administración
---

4D ofrece varias herramientas integradas para iniciar, detener o supervisar el servidor web integrado.


## Iniciar el servidor Web 4D

> Para poder lanzar el servidor web de 4D o 4D Server, debe tener una licencia "4D Web Application". Para más información, consulte el [sitio web de 4D](https://www.4d.com).


Un proyecto 4D puede iniciar y monitorizar un servidor web para la aplicación principal (host) así como para cada componente alojado.

El servidor web principal de 4D puede iniciarse de diferentes maneras:

*   Utilizando un botón o comando de menú.
    *   4D: **Ejecución > iniciar el servidor web**<br>![](assets/en/WebServer/start1.png)
    *   4D Server: en la página del servidor HTTP, haga clic en **Iniciar servidor HTTP**<br>![](assets/en/WebServer/start2.png)

*   Se inicia automáticamente cada vez que se abre la aplicación 4D. Para ello, despliegue la página **Web\/Configuración** de la Configuración y seleccione la casilla **Lanzar el servidor web al inicio**:<br>![](assets/en/WebServer/config.png)

*   Por programación, llamando la función [`webServer.start()`](API/WebServerClass.md#start) o el comando `WEB START SERVER`.

El servidor web de cualquier componente puede iniciarse llamando a la función [`webServer.start()`](API/WebServerClass.md#start) en el objeto servidor web del componente.
> No es necesario relanzar la aplicación 4D para iniciar o detener el servidor web.

## Detener el servidor Web 4D

El servidor web principal de 4D puede detenerse de diferentes maneras:

*   Utilizando el menú 4D **Ejecución\>Detener el servidor Web**, o vía el botón **Detener el servidor HTTP** de la página Servidor HTTP de 4D Server (ambos elementos muestran **Iniciar...** cuando el servidor no está ya iniciado).

*   Por programación, llamando la función [`webServer.stop()`](API/WebServerClass.md#stop) o el comando `WEB STOP SERVER`.

El servidor web de cualquier componente puede detenerse llamando a la función `webServer.stop()` en el objeto servidor web del componente.


## Probar el servidor Web 4D

El comando **Test Web Server** puede utilizarse para asegurarse de que el servidor web integrado funciona correctamente (sólo en 4D). Este comando es accesible en el menú **Ejecutar** cuando se lanza el servidor web:

![](assets/en/WebServer/test1.png)


Al seleccionar este comando, la página de inicio del sitio web publicado por la aplicación 4D se muestra en una ventana de su navegador web predeterminado:

![](assets/en/WebServer/defaultHomePage.png)


Este comando permite verificar que el servidor web, la visualización de la página de inicio, etc. funcionan correctamente. La página se llama utilizando la URL *localhost*, que es el atajo estándar que designa la dirección IP de la máquina en la que se ejecuta el navegador web. El comando tiene en cuenta el número de [puerto de publicación TCP](#http-port) especificado en los parámetros.



## Borrar la caché

En cualquier momento, puede vacíar la caché de las páginas y de las imágenes que contiene (si, por ejemplo, ha modificado una página estática y quiere volver a cargarla en la caché).

To do so, you just have to click on the **Clear Cache** button in the Web/Options (I) page of the Settings dialog box. La caché se borra inmediatamente.
> También puede utilizar la URL [/4DCACHECLEAR](#cacheclear).



## Explorador de ejecución

The **Watch** page (**Web** heading) in the Runtime Explorer displays web server information, particularly:

*   **Web Cache Usage**: indicates the number of pages present in the web cache as well as its use percentage. This information is only available if the web server is active and if the cache size is greater than 0.

*   **Web Server Elapsed Time**: indicates the duration of use (in hours:minutes:seconds format) of the Web server. Esta información sólo está disponible si el servidor web está activo.

*   **Web Hits Count**: indicates the total number of HTTP requests received since the web server boot, as well as an instantaneous number of requests per second (measure taken between two Runtime Explorer updates). Esta información sólo está disponible si el servidor web está activo.




## URL para la administración

Website administration URLS allow you to control the website published on your server. 4D Web Server accepts four particular URLs: */4DSTATS*, */4DHTMLSTATS*, /*4DCACHECLEAR* and */4DWEBTEST*.

> */4DSTATS*, */4DHTMLSTATS* y */4DCACHECLEAR* sólo están disponibles para el diseñador y el administrador de la base de datos. Si el sistema de contraseñas 4D no ha sido activado, estas URLs están disponibles para todos los usuarios. /4DWEBTEST está siempre disponible.


### /4DSTATS

The **/4DSTATS** URL returns several items of information in an HTML table (displayable in a browser):

| Elemento                  | Descripción                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| Tamaño actual de la caché | Tamaño actual de la caché del servidor web (en bytes)              |
| Tamaño máximo de la caché | Tamaño máximo de la caché (en bytes)                               |
| Cached Object Max Size    | Tamaño máximo de cada objeto en la caché (en bytes)                |
| Cache Use                 | Porcentaje de caché utilizado                                      |
| Cached Objects            | Número de objetos encontrados en la caché, **incluyendo imágenes** |

This information can allow you to check the functioning of your server and eventually adapt the corresponding parameters.
> El comando `WEB GET STATISTICS` permite obtener también información sobre cómo se está utilizando la caché de las páginas estáticas.

### /4DHTMLSTATS

The */4DHTMLSTATS* URL returns, also as an HTML table, the same information as the */4DSTATS* URL. The difference is that the **Cached Objects** field only counts HTML pages (without counting picture files). Moreover, this URL returns the **Filtered Objects** field.

| Elemento                  | Descripción                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------ |
| Tamaño actual de la caché | Tamaño actual de la caché del servidor web (en bytes)                                |
| Tamaño máximo de la caché | Tamaño máximo de la caché (en bytes)                                                 |
| Cached Object Max Size    | Tamaño máximo de cada objeto en la caché (en bytes)                                  |
| Cache Use                 | Porcentaje de caché utilizado                                                        |
| Cached Objects            | Número de objetos encontrados en la caché, **sin imágenes**                          |
| Objetos filtrados         | Número de objetos en la caché que no se cuentan por URL, en particular, las imágenes |


### /4DCACHECLEAR

The */4DCACHECLEAR* URL immediately clears the cache of the static pages and images. It allows you to therefore “force” the update of the pages that have been modified.

### /4DWEBTEST

The */4DWEBTEST* URL is designed to check the web server status. When this URL is called, 4D returns a text file with the following HTTP fields filled:

| Campo HTTP | Descripción                                 | Ejemplo                                                                                                                         |
| ---------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Fecha      | fecha actual en el formato RFC 822          | Mon, 7 Dec 2020 13:12:50 GMT                                                                                                    |
| Server     | 4D/Número de versión                        | 4D/18.5.0 (Build 18R5.257368)                                                                                                   |
| User-Agent | nombre y versión @ dirección IP del cliente | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36 @ 127.0.0.1 |



## Logs

4D le permite generar dos historiales de peticiones web:

- a debug log, useful in the web server development phase (*HTTPDebugLog.txt*),
- a standardized web request log, rather used for statistic purposes (*logweb.txt*).

Both log files are automatically created in the **Logs** folder of the application project.

### HTTPDebugLog.txt

The [http debug file](webServerConfig.md#debug-log) can be enabled using the [`web server` object](webServerObject.md) or the `WEB SET OPTION` command.

Este archivo de historial registra cada petición HTTP y cada respuesta en modo crudo. Se registran las solicitudes completas, incluidos los encabezados; opcionalmente, también se pueden registrar las partes del cuerpo.

Los siguientes campos se registran tanto para la solicitud como para la respuesta:

| Nombre del campo | Descripción                                                        |
| ---------------- | ------------------------------------------------------------------ |
| SocketID         | ID del socket utilizado para la comunicación                       |
| PeerIP           | Dirección IPv4 del host (cliente)                                  |
| PeerPort         | Puerto utilizado por host (cliente)                                |
| TimeStamp        | Timestamp en milisegundos (desde el inicio del sistema)            |
| ConnectionID     | Conexión UUID (UUID del VTCPSocket utilizado para la comunicación) |
| SequenceNumber   | Número de operación único y secuencial en la sesión de historial   |


### logweb.txt

The [web log recording file](webServerConfig.md#log-recording) can be enabled using the [`web server` object](webServerObject.md), the `WEB SET OPTION` command, or the **Web/Log (type)** page of the settings. Debe seleccionar el formato de historial.

#### CLF/DLF

Each line of the file represents a request, such as: *host rfc931 user \[DD/MMM/YYYY:HH:MM:SS] "request" state length* Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

DLF (Combined Log Format) format is similar to CLF (Common Log Format) format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent. Here is the description of CLF/DLF formats (not customizable):

| Nombre del campo     | Descripción                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host                 | Dirección IP del cliente (por ejemplo: "192.100.100.10)                                                                                                                   |
| rfc931               | información no generada por 4D, siempre es - (un signo menos                                                                                                              |
| user                 | nombre de usuario como está autenticado, o - (un signo menos). Si el nombre de usuario contiene espacios, se remplazan por _ (un guión bajo).                             |
| DD/MMM/YYYY:HH:MM:SS | DD: día, MMM: una abreviatura de 3 letras para el nombre del mes (Jan, Feb,...), YYYY: año, HH: hora, MM: minutos, SS: segundos. La fecha y hora son locales al servidor. |
| request              | solicitud enviada por el cliente (por ejemplo, GET /index.htm HTTP/1.0                                                                                                    |
| state                | respuesta dada por el servidor                                                                                                                                            |
| length               | tamaño de los datos devueltos (excepto el encabezado HTTP) o 0                                                                                                            |
| Referer              | Sólo DLF- Contiene la URL de la página que apunta al documento solicitado.                                                                                                |
| User-agent           | DLF únicamente - Contiene el nombre y la versión del navegador o del software del cliente en el origen de la solicitud                                                    |

#### ELF/WLF

The ELF (Extended Log Format) format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.

The WLF (WebStar Log Format) was developed specifically for the 4D WebSTAR server.

##### Configurar los campos

When you choose the ELF or WLF format, the “Web Log Token Selection” area displays the fields available for the chosen format. You will need to select each field to be included in the log. Para ello, marque los campos deseados.
> No puede seleccionar el mismo campo dos veces.

The following table lists the fields available for each format (in alphabetical order) and describes its contents:

| Campo          | ELF | WLF | Valor                                                                                                                                            |
| -------------- | --- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| BYTES_RECEIVED |     | X   | Número de bytes recibidos por el servidor                                                                                                        |
| BYTES_SENT     | X   | X   | Número de bytes enviados por el servidor al cliente                                                                                              |
| C_DNS          | X   | X   | IP address of the DNS (ELF: field identical to the C_IP field)                                                                                   |
| C_IP           | X   | X   | Dirección IP del cliente (por ejemplo 192.100.100.10)                                                                                            |
| CONNECTION_ID  |     | X   | Número de identificación de la conexión                                                                                                          |
| CS(COOKIE)     | X   | X   | Información sobre las cookies contenidas en la petición HTTP                                                                                     |
| CS(HOST)       | X   | X   | Campo Host de la petición HTTP                                                                                                                   |
| CS(REFERER)    | X   | X   | URL de la página que apunta al documento solicitado                                                                                              |
| CS(USER_AGENT) | X   | X   | Información sobre el software y el sistema operativo del cliente                                                                                 |
| CS_SIP         | X   | X   | Dirección IP del servidor                                                                                                                        |
| CS_URI         | X   | X   | URI sobre el que se realiza la petición                                                                                                          |
| CS_URI_QUERY | X   | X   | Parámetros de consulta de la petición                                                                                                            |
| CS_URI_STEM  | X   | X   | Parte de la petición sin los parámetros de consulta                                                                                              |
| DATE           | X   | X   | DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year                                                                       |
| METHOD         | X   | X   | Método HTTP utilizado para la petición enviada al servidor                                                                                       |
| PATH_ARGS      |     | X   | Parámetros CGI: cadena situada después del caracter "$"                                                                                          |
| STATUS         | X   | X   | Respuesta ofrecida por el servidor                                                                                                               |
| TIME           | X   | X   | HH: hour, MM: minutes, SS: seconds                                                                                                               |
| TRANSFER_TIME  | X   | X   | Tiempo solicitado por el servidor para generar la respuesta                                                                                      |
| USER           | X   | X   | Nombre de usuario si está autenticado; en caso contrario, - (signo menos). If the user name contains spaces, they are replaced by _ (underlines) |
| URL            |     | X   | URL solicitado por el cliente                                                                                                                    |

> Las fechas y horas se indican en GMT.


#### Frecuencia del backup

Dado que un archivo *logweb.txt* puede llegar a ser considerablemente grande, es posible establecer un mecanismo de archivo automático. La activación de una copia de seguridad puede basarse en un periodo de tiempo determinado (expresado en horas, días, semanas o meses), o en función del tamaño del archivo; cuando se alcanza el plazo establecido (o el tamaño del archivo), 4D cierra y archiva automáticamente el archivo de registro actual y crea uno nuevo.

Cuando se activa la copia de seguridad del archivo de registro web, el archivo de registro se archiva en una carpeta llamada "Archivos Logweb", que se crea en el mismo nivel que el archivo *logweb.txt*.

El fichero archivado se renombra según el siguiente ejemplo "DYYY_MM_DD_Thh_mm_ss.txt". Por ejemplo, para un fichero archivado el 4 de septiembre de 2020 a las 15:50. y 7 segundos: “D2020_09_04_T15_50_07.txt.”

#### Parámetros del backup

Los parámetros de copia de seguridad automáticadel logweb.txt se definen en la página **Web/Log (copia de seguridad)** de los parámetros:

![](assets/en/WebServer/backup.png)

Primero debe elegir la frecuencia (días, semanas, etc.) o el criterio de límite de tamaño de los archivos haciendo clic en el botón de opción correspondiente. A continuación, debe especificar el momento preciso de la copia de seguridad si es necesario.

*   **No Backup**: The scheduled backup function is deactivated.

*   **Every X hour(s)**: This option is used to program backups on an hourly basis. Puede introducir un valor entre 1 y 24 .
    *   **starting at**: Used to set the time at which the first back up will begin.

*   **Every X day(s) at X**: This option is used to program backups on a daily basis. Introduzca 1 si desea realizar una copia de seguridad diaria. When this option is checked, you must indicate the time when the backup must be started.

*   **Every X week(s), day at X**: This option is used to program backups on a weekly basis. Introduzca 1 si desea realizar una copia de seguridad semanal. Introduzca 1 si desea realizar una copia de seguridad semanal. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired.

*   **Every X month(s), Xth day at X**: This option is used to program backups on a monthly basis. Introduzca 1 si desea realizar una copia de seguridad mensual. Introduzca 1 si desea realizar una copia de seguridad mensual.

*   **Every X MB**: This option is used to program backups based on the size of the current request log file. A backup is automatically triggered when the file reaches the set size. Puede definir un límite de tamaño de 1, 10, 100 o 1000 MB.
