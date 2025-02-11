---
id: webAdmin
title: WebAdmin
---

Un componente de servidor web integrado, llamado `WebAdmin`, es utilizado por 4D y 4D Server para dar un acceso web seguro a funciones de gestión específicas como el [Explorador de datos](dataExplorer.md). Puede conectarse local o remotamente a este servidor web desde un navegador o cualquier aplicación web y acceder a la aplicación 4D asociada.

El WebAdmin se encarga de la autenticación de los usuarios con privilegios "WebAdmin", para que puedan abrir sesiones de administración y acceder a las interfaces dedicadas.

Esta funcionalidad se puede utilizar en aplicaciones 4D que se ejecutan con o sin interfaces.

## Iniciar el servidor web WebAdmin

Por defecto, el
servidor web `WebAdmin` no se lanza. Es necesario configurar el lanzamiento al inicio, o (en las versiones con interfaz) lanzarlo manualmente mediante una opción de menú.

### Lanzamiento al inicio

Puede configurar el servidor web `WebAdmin` para que se lance al inicio de la aplicación 4D o 4D Server (antes de que se cargue cualquier proyecto).

- Si utiliza una aplicación 4D con interfaz, seleccione la opción de menú **Archivo > Administración web > Parámetros....**.

![alt-text](../assets/en/Admin/waMenu1.png)

Seleccione la opción **Iniciar servidor WebAdmin al inicio** en la caja de diálogo de parámetros:

![alt-text](../assets/en/Admin/waSettings.png)

- Tanto si utiliza la aplicación 4D con o sin interfaz, puede habilitar el modo de inicio automático utilizando el siguiente argumento *Interfaz de línea de comandos*:

```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> Si el puerto TCP utilizado por el servidor web `WebAdmin` ([HTTPS](#https-port) o [HTTP](#http-port), según la configuración) no está disponible al inicio, 4D intentará sucesivamente los 20 puertos siguientes, y utilizará el primero que esté disponible. Si no hay ningún puerto disponible, el servidor web no se lanza y se muestra un error o para las aplicaciones sin interfaz, aparece en la consola.

### Iniciar y detener

Si utiliza una aplicación 4D con interfaz, puede iniciar o detener el servidor web `WebAdmin` de su proyecto en cualquier momento:

Seleccione la opción de menú **Archivo > Administración web > Iniciar el servidor**.

![alt-text](../assets/en/Admin/waMenu2.png)

El elemento de menú se convierte en **Detener el servidor** cuando se lanza el servidor; seleccione **Detener el servidor** para detener el servidor web `WebAdmin`.

## Propiedades WebAdmin

La configuración del componente `WebAdmin` es obligatoria, en particular para definir la [**llave de acceso**](#access-key). Por defecto, cuando la clave de acceso no está configurada, no se permite el acceso a través de una URL.

Puede configurar el componente `WebAdmin` utilizando la [caja de diálogo Parámetros de la administración web](#settings-dialog-box) (ver abajo).

> Si utiliza una aplicación 4D sin interfaz, puede utilizar los [argumentos de la *Interfaz de Línea de Comandos*](#webadmin-headless-configuration) para definir la configuración básica. Tendrá que personalizar el archivo de configuración para definir los parámetros avanzados.

### Caja de diálogo de parámetros

Para abrir la caja de diálogo de configuración de administración web, seleccione **Archivo > Administración Web > Configuración....**.

![alt-text](../assets/en/Admin/waMenu1.png)

Se muestra la siguiente caja de diálogo:

![alt-text](../assets/en/Admin/waSettings2.png)

#### Iniciar el servidor WebAdmin al inicio

Marque esta opción si desea que el servidor web `WebAdmin` se lance automáticamente cuando la aplicación 4D o 4D Server se inicie ([ver arriba](#lanzamiento-al-inicio)). Por defecto, esta opción no está seleccionada.

#### Conexiones HTTP en localhost aceptadas

Cuando esta opción está seleccionada, podrá conectarse al servidor web `WebAdmin` a través de HTTP en la misma máquina que la aplicación 4D. Por defecto, esta opción está seleccionada.

**Notas:**

- Nunca se aceptan conexiones con HTTP que no sean localhost.
- Incluso si esta opción está activada, cuando [HTTPS aceptada](#accept-https) está activada y la configuración TLS es válida, las conexiones localhost utilizan HTTPS.

#### Puerto HTTP

Número de puerto a utilizar para las conexiones al servidor web `WebAdmin` a través de HTTP cuando la opción **Conexiones HTTP en localhost aceptadas** está marcada. El valor por defecto es 7080.

#### Aceptar HTTPS

Cuando esta opción está seleccionada, podrá conectarse al servidor web `WebAdmin` a través de HTTPS. Por defecto, esta opción está seleccionada.

#### Puerto HTTPS

Número de puerto a utilizar para las conexiones al servidor web `WebAdmin` a través de HTTPS cuando la opción **HTTPS aceptada** está marcada. El valor por defecto es 7443.

#### Ruta de la carpeta de certificados

Ruta de la carpeta donde se encuentran los archivos del certificado TLS. Por defecto, la ruta de la carpeta de certificados está vacía y 4D o 4D Server utiliza los archivos de certificados contenidos en la aplicación 4D (los certificados personalizados deben almacenarse junto a la carpeta de proyecto).

#### Modo de registro de depuración

Estado o formato del archivo de registro de peticiones HTTP (HTTPDebugLog_*nn*.txt, almacenado en la carpeta "Logs" de la aplicación -- *nn* es el número de archivo). Las siguientes opciones están disponibles:

- **Desactivado** (por defecto)
- **Con todas las partes del body** - activado con las partes del cuerpo en respuesta y petición
- \*\*Sin las partes del body \*\* - activado sin partes del cuerpo (se indica el tamaño del cuerpo)
- **Con los cuerpos de las peticiones** - activado con la partes del cuerpo únicamente en las peticiones
- **Con la respuesta body** - activado con la partes del cuerpo únicamente en las respuestas

#### Llave de acceso

La configuración de una llave de acceso es obligatoria para desbloquear el acceso al servidor web `WebAdmin` a través de una URL (el acceso a través de un comando del menú 4D no requiere una llave de acceso). Cuando no se define ninguna llave de acceso, no se permite que ningún cliente web se conecte a través de una URL a una interfaz de administración web como la [página Explorador de datos](dataExplorer.md). Se devuelve una página de error en caso de solicitud de conexión:

![alt-text](../assets/en/Admin/accessKey.png)

Una llave de acceso es similar a una contraseña pero no está asociada a un inicio de sesión.

- Para definir una nueva llave de acceso: haga clic en el botón **Definir**, introduzca la cadena de la llave de acceso en la caja de diálogo y haga clic en **OK**. La etiqueta del
  botón se convierte en **Modificar**.
- Para modificar la llave de acceso: haga clic en el botón **Modificar**, introduzca la nueva cadena de la llave de acceso en la caja de diálogo y haga clic en **OK**.
- Para eliminar la llave de acceso: haga clic en el botón **Modificar**, deje vacía el área de la llave de acceso y haga clic en **OK**.

#### Activar el acceso a Qodly Studio

:::note

Esta opción sólo aparece si la licencia de Qodly Studio está activa.

:::

Esta opción permite al usuario acceder a [Qodly Studio](../WebServer/qodly-studio.md) a nivel de la aplicación 4D. Tenga en cuenta que también necesita [habilitar el acceso en cada nivel de proyecto](../settings/web.md#enable-access-to-qodly-studio).

## Configuración de WebAdmin sin interfaz

Todos los [parámetros WebAdmin](#webadmin-settings) se almacenan en el archivo `WebAdmin.4DSettings`. Hay un archivo `WebAdmin.4DSettings` por defecto por cada aplicación 4D y 4D Server, por lo que es posible desplegar varias aplicaciones en la misma máquina local.

Cuando se ejecuta una aplicación 4D o 4D Server sin interfaz, se puede configurar y utilizar el archivo `WebAdmin.4DSettings` por defecto, o designar un archivo `.4DSettings` personalizado.

Para definir el contenido del archivo, puedes utilizar la [ventana de parámetros WebAdmin](#settings-dialog-box) de la aplicación 4D con interfaz y luego ejecutarla sin interfaz. Se utiliza entonces
el archivo por defecto `WebAdmin.4DSettings`.

O bien, puede definir un archivo personalizado `.4DSettings` (formato xml) y utilizarlo en lugar del archivo predeterminado. Hay varios argumentos dedicados disponibles en la [Interfaz de línea de comandos](cli.md) para soportar esta funcionalidad.

> La llave de acceso no se almacena de manera transparente en el archivo `.4DSettings`.

Ejemplo:

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key 
	"my Fabulous AccessKey" --webadmin-auto-start true   
	--webadmin-store-settings

```

## Autenticación y sesión

- Cuando se accede a una página de gestión web introduciendo una URL y sin identificación previa, se requiere una autenticación. El usuario debe introducir la [llave-de-acceso](#access-key) en una ventana de autenticación. Si la llave de acceso no fue definida en la configuración de `WebAdmin`, no es posible el acceso vía URL.

- Cuando se accede a una página de gestión web directamente desde un elemento de menú de 4D o 4D Server (como **Registros > Explorador de datos** o **Ventana > Explorador de datos** (4D Server)), el acceso se concede sin autenticación, el usuario se autentifica automáticamente.

Una vez concedido el acceso, se crea una [sesión web](WebServer/sessions.md) con el privilegio "WebAdmin" en la aplicación 4D. Mientras la sesión actual tenga el privilegio "WebAdmin", el componente `WebAdmin` entrega las páginas solicitadas.
