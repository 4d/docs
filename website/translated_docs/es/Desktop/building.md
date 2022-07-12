---
id: building
title: Generador de aplicaciones
---

4D incluye un generador de aplicaciones para crear un paquete de proyecto (versión final). Este generador simplifica el proceso de finalización y despliegue de las aplicaciones compiladas en 4D. Maneja automáticamente las funcionalidades específicas de los distintos sistemas operativos y facilita el despliegue de aplicaciones cliente-servidor.

El generador de aplicaciones le permite:

*   Generar una estructura compilada, sin código interpretado,
*   Generar una aplicación autónoma ejecutable, *es decir*, fusionada con 4D Volume Desktop, el motor de base de datos 4D,
*   Generar diferentes aplicaciones a partir de la misma estructura compilada mediante un proyecto XML,
*   Generar aplicaciones cliente-servidor homogéneas,
*   Generar aplicaciones cliente-servidor con actualización automática de los componentes del cliente y del servidor.
*   Guardar sus parámetros de generación para su uso futuro (botón *Guardar los parámetros*).

> Las aplicaciones compiladas se basan en archivos [.4dz](#build-compiled-structure) que son **de sólo lectura**. Tenga en cuenta que el uso de comandos o funciones que modifican los archivos fuente (como `CREATE INDEX` o `CREATE TABLE` (SQL)) no es posible por defecto en las aplicaciones compiladas. Sin embargo, puede crear aplicaciones específicas que soporten modificaciones locales utilizando la llave XML `PackProject` (ver [doc.4d.com](https://doc.4d.com)).


## Generalidades

Generar un paquete de proyecto puede realizarse utilizando:

- el comando [`BUILD APPLICATION`](https://doc.4d.com/4dv19/help/command/en/page871.html),
- o el diálogo del [Generador de aplicaciones](#application-builder).


### Diálogo crear aplicación

Para mostrar la caja de diálogo Generar la aplicación, seleccione **Diseño** > **Generar la aplicación...** en la barra de menús.

![](assets/en/Project/buildappProj.png)

La caja de diálogo del generador de aplicaciones incluye varias páginas a las que se puede acceder mediante pestañas:

![](assets/en/Project/appbuilderProj.png)


La generación sólo puede efectuarse una vez compilado el proyecto. Si selecciona este comando sin haber compilado previamente el proyecto, o si el código compilado no se corresponde con el código interpretado, aparece una caja de diálogo de advertencia que indica que el proyecto debe ser (re)compilado.


### buildApp.4DSettings


Cada parámetro de generación de la aplicación se almacena como una llave XML en el archivo proyecto de la aplicación llamada `"buildApp.4DSettings"`, ubicado en la carpeta [`Settings` del proyecto](../Project/architecture.md#settings-1).

Los parámetros por defecto se utilizan la primera vez que se utiliza la caja de diálogo del Generador de aplicaciones. El contenido del archivo proyecto se actualiza, si es necesario, al hacer clic en **Construir** o **Guardar los parámetros**. Puede definir varios archivos de parámetros XML para el mismo proyecto y utilizarlos con el comando [BUILD APPLICATION](https://doc.4d.com/4dv19/help/command/en/page871.html).

Las llaves XML ofrecen opciones adicionales a las que se muestran en la caja de diálogo del Generador de aplicaciones. La descripción de estas llaves se detalla en el manual [4D XML Keys BuildApplication](https://doc.4d.com/4Dv19/4D/19/4D-XML-Keys-BuildApplication.100-5447429.en.html).

### Archivo de historial

Cuando se crea una aplicación, 4D genera un archivo de registro llamado *BuildApp.log.xml* en la carpeta **Logs** del proyecto. El archivo de historial almacena la siguiente información para cada generación:

- El inicio y el fin de la generación de objetivos,
- El nombre y la ruta de acceso completa de los archivos generados,
- La fecha y la hora de la generación,
- Todos los errores que se han producido,
- Todo problema de firma (por ejemplo, un plug-in no firmado).

La verificación de este archivo puede ayudarle a ahorrar tiempo durante los siguientes pasos de despliegue, por ejemplo, si tiene la intención de notarizar su aplicación.

> Utilice el comando `Get 4D file(Build application log file)` para obtener la ubicación del archivo de registro.


## Nombre de la aplicación y carpeta de destino

![](assets/en/Project/buidappstructureProj.png)

Introduzca el nombre de la aplicación en **Nombre de la aplicación**.

Especifique la carpeta para la aplicación generada en la **Carpeta de destino**. Si la carpeta especificada no existe todavía, 4D creará una carpeta *Build*.



## Página de estructura compilada

Esta pestaña le permite generar un archivo de estructura compilado estándar y/o un componente compilado:

![](assets/en/Project/appbuilderProj.png)


### Generar una estructura compilada

Genera una aplicación que sólo contiene código compilado.

Esta funcionalidad crea un archivo *.4dz* en una carpeta *Compiled Database/\<project name>*. Por ejemplo, si ha llamado a su aplicación "MyProject", 4D creará:

*\<destination\>/Compiled Database/MyProject/MyProject.4dz*

Un archivo .4dz es esencialmente una versión comprimida (empaquetada) de la carpeta del proyecto. Un archivo .4dz es esencialmente una versión comprimida (empaquetada) de la carpeta del proyecto. El tamaño compacto y optimizado de los archivos .4dz hace que los paquetes de proyectos sean fáciles de desplegar.

> Al generar archivos .4dz, 4D utiliza por defecto un formato zip **estándar**. La ventaja de este formato es que es fácilmente legible por cualquier herramienta unzip. Si no desea utilizar este formato estándar, añada la llave XML `UseStandardZipFormat` con el valor `False` en su archivo [`buildApp. 4DSettings`](#build-application-settings) (para más información, consulte el manual [4D XML Keys BuildApplication](https://doc.4d.com/4Dv19/4D/19/4D-XML-Keys-BuildApplication.100-5447429.en.html)).




#### Incluir las carpetas asociadas

Cuando se marca esta opción, todas las carpetas relacionadas con el proyecto se copian en la carpeta Build como carpetas *Components* y *Resources*. Para más información sobre estas carpetas, consulte la [descripción de la arquitectura del proyecto](Project/architecture.md).


### Generar un componente

Genera un componente compilado a partir de la estructura.

Un componente es un proyecto estándar 4D en el que se han desarrollado funcionalidades específicas. Un componente es un proyecto estándar 4D en el que se han desarrollado funcionalidades específicas.

Si ha llamado a su aplicación, *MiComponente*, 4D creará una carpeta *Components* que contiene la carpeta *MiComponente.4dbase*:

*\<destination>/Components/MyComponent.4dbase/MyComponent.4DZ*.

La carpeta *MyComponent.4dbase* contiene:
-   archivo *MyComponent.4DZ*
-   Una carpeta *Resources*: todos los resources asociados se copian automáticamente en esta carpeta. Los otros componentes y/o carpetas de plugins no se copian (un componente no puede utilizar plugins u otros componentes).


## Página Application

Esta pestaña le permite crear una versión autónoma y monopuesto de su aplicación:

![](assets/en/Project/standaloneProj.png)

### Crear una aplicación autónoma

Al marcar la opción **Crear una aplicación autónoma** y hacer clic en **Generar** se creará una aplicación autónoma (con doble clic) directamente desde su proyecto de aplicación.

Los siguientes elementos son necesarios para la creación:
- 4D Volume Desktop (el motor de la base de datos 4D),
- una [licencia apropiada](#licenses)

En Windows, esta función crea un archivo ejecutable (.exe). En macOS, se encarga de la creación de paquetes de software.

El principio consiste en fusionar un archivo de estructura compilado con 4D Volume Desktop. Las funcionalidades ofrecidas por el archivo 4D Volume Desktop están relacionadas con la oferta de productos a la que se ha suscrito. Las funcionalidades ofrecidas por el archivo 4D Volume Desktop están relacionadas con la oferta de productos a la que se ha suscrito.

Puede definir un archivo de datos por defecto o permitir a los usuarios crear y utilizar su propio archivo de datos (ver la sección [Gestión de archivos de datos en las aplicaciones finales](https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html)).

Es posible automatizar la actualización de las aplicaciones monopuesto fusionadas mediante una secuencia de comandos de lenguaje (ver [Actualización automática de aplicaciones servidor o monopuesto](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html).

#### Ubicación de 4D Volume Desktop

Para crear una aplicación autónoma, primero debe designar la carpeta que contiene el archivo 4D Volume Desktop:

*   *Windows* - la carpeta contiene los archivos 4D Volume Desktop.4DE, 4D Volume Desktop. RSR, así como varios archivos y carpetas necesarios para su funcionamiento. Estos elementos deben colocarse al mismo nivel que la carpeta seleccionada.
*   *macOS* - 4D Volume Desktop se entrega en forma de un paquete de software estructurado que contiene varios archivos y carpetas genéricos.

Para seleccionar la carpeta 4D Volume Desktop, haga clic en el botón **[...]**. Aparece una caja de diálogo que le permite designar la carpeta de 4D Volume Desktop (Windows) o el paquete (macOS).

Una vez seleccionada la carpeta, se muestra su ruta completa y, si realmente contiene 4D Volume Desktop, se activa la opción de generación de una aplicación ejecutable.

> El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition. Por ejemplo, si utiliza 4D Developer v18, debe seleccionar un 4D Volume Desktop v18.

#### Modo de enlace de datos

Esta opción permite elegir el modo de enlace entre la aplicación fusionada y el archivo de datos local. Hay dos modos de enlazar disponibles:

*   **Por nombre de la aplicación** (por defecto) - La aplicación 4D abre automáticamente el archivo de datos abierto más recientemente correspondiente al archivo de estructura. Esto le permite mover el paquete de aplicaciones libremente en el disco. Esta opción debería usarse generalmente para aplicaciones fusionadas, a menos que necesite específicamente duplicar su aplicación.

*   **Por ruta de la aplicación** - La aplicación 4D fusionada analizará el archivo *lastDataPath.xml* de la aplicación e intentará abrir el archivo de datos con un atributo "executablePath" que coincida con la ruta completa de la aplicación. Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath"). Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath").

Para más información sobre el modo de vinculación de datos, consulte la sección [Último archivo de datos abierto](#last-data-file-opened).


#### Archivos generados

Al hacer clic en el botón **Generar**, 4D crea automáticamente una carpeta **Final Application** en la **carpeta de destino** definida. Dentro de la carpeta Final Application hay una subcarpeta con el nombre de la aplicación especificada.

Si ha especificado "MyProject" como nombre de la aplicación, encontrará los siguientes archivos en esta subcarpeta (MyProject):

*   *Windows*
    *   MyProject.exe - Su ejecutable y un MyProject.rsr (los recursos de la aplicación)
    *   Las carpetas 4D Extensions y Resources, varias librerías (DLL), la carpeta Native Components y SASL Plugins - Archivos necesarios para el funcionamiento de la aplicación
    *   Una carpeta Database  - Incluye una carpeta Resources y un archivo MyProject.4DZ. Constituyen la estructura compilada del proyecto, así como también la carpeta Resources. **Nota**: esta carpeta también contiene la carpeta *Default Data*, si se ha definido (ver [Gestión de archivos de datos en las aplicaciones finales](#data-file-management-in-final-applicatons).
    *   (Opcional) Carpeta de componentes y/o carpeta Plugins - Contiene todos los componentes y/o archivos de plugins incluidos en el proyecto. Para más información sobre este punto, consulte la sección [Plugins y componentes](#plugins-and-components).
    *   Carpeta Licenses - Un archivo XML de números de licencia integrados en la aplicación. Para obtener más información sobre este punto, consulte la sección [Licencias y certificados](#licenses-and-certificate).
    *   Elementos adicionales añadidos a la carpeta 4D Volume Desktop, si los hay (ver [Personalizar la carpeta 4D Volume Desktop](#customizing-4d-volume-desktop-folder)).

    Todos estos elementos deben estar en la misma carpeta para que el ejecutable funcione.

*   *macOS*
    -   Un paquete de software llamado MyProject.app que contiene su aplicación y todos los elementos necesarios para su funcionamiento, incluyendo los plug-ins, componentes y licencias. Para más información sobre la integración de plug-ins y componentes, consulte la sección \[Plugins y componentes\](#plugins-and-components). Para obtener más información sobre la integración de licencias, consulte la sección \[Licencias y certificados\](#licenses-and-certificate). **Nota**: en macOS, el comando [Archivo aplicación](https://doc.4d.com/4Dv18R4/4D/18-R4/Application-file.301-4982855.en.html) del lenguaje 4D devuelve la ruta del archivo NombreApplication (situado en la carpeta Contents:macOS del paquete de software) y no la del archivo .comp (carpeta Contents:


#### Personalizar la carpeta 4D Volume Desktop

Cuando se construye una aplicación independiente, 4D copia el contenido de la carpeta 4D Volume Desktop en la carpeta Destination > *Final Application*. A continuación, podrá personalizar el contenido de la carpeta 4D Volume Desktop original según sus necesidades. Puede, por ejemplo:

*   Instalar una versión de 4D Volume Desktop correspondiente a un lenguaje específico;
*   Añadir una carpeta *PlugIns* personalizada;
*   Personalizar el contenido de la carpeta *Resources*.
> En macOS, 4D Volume Desktop se ofrece en forma de paquete de software. Puede visualizar su contenido (**Control+clic** en el icono) para poder modificarlo.


#### Ubicación de los archivos web

Si su aplicación ejecutable se utiliza como servidor web, los archivos y los archivos y carpetas requeridos por el servidor deben instalarse en ubicaciones específicas. Estos elementos son los siguientes:

*   archivos *cert.pem* y *key.pem* (opcional): etos archivos se utilizan para las conexiones TLS y por los comandos de encriptación de datos,
*   carpeta raíz web por defecto.

Los elementos deben ser instalados:

- **En Windows**: en la subcarpeta *Final Application\MyProject\Database*.
- **En macOS**: junto al paquete de software *MyProject.app*.





## Página Cliente/Servidor

En esta pestaña, usted puede construir aplicaciones cliente y servidor personalizadas que son homogénicas, multiplataforma y con una opción de actualización automática.

![](assets/en/Desktop/client-server-buildapp.png)

### ¿Qué es una aplicación cliente/servidor?

Una aplicación cliente/servidor proviene de la combinación de tres elementos:

- Un proyecto 4D compilado,
- La aplicación 4D Server,
- La aplicación 4D Volumen Desktop (macOS y/o Windows).

Una vez generada, una aplicación cliente/servidor se compone de dos partes personalizadas: la parte Servidor (única) y la parte Cliente (a instalar en cada máquina cliente).

> Si desea desplegar una aplicación cliente/servidor en un entorno heterogéneo (aplicaciones cliente ejecutándose en máquinas Intel/AMD y Apple Silicon), se recomienda [compilar el proyecto para todos los procesadores](Project/compiler.md#compilation-target) en una máquina macOS, para que todas las aplicaciones clientes funcionen de forma nativa.

Además, se personaliza la aplicación cliente/servidor y se simplifica su manejo:

- Para lanzar la parte del servidor, el usuario simplemente hace doble clic en la aplicación servidor. No es necesario seleccionar el archivo proyecto.
- Para lanzar la parte cliente, el usuario simplemente hace doble clic en la aplicación cliente, que se conecta directamente a la aplicación servidor. No es necesario elegir un servidor en una caja de diálogo de conexión. Si desea que la aplicación cliente se conecte al servidor utilizando una dirección específica (distinta del nombre del servidor publicado en la subred), debe utilizar la llave XML `IPAddress` en el archivo buildapp.4DSettings. Si la conexión falla, \[se pueden implementar mecanismos alternativos específicos\](#management-of-client-connections). Puede "forzar" la visualización de la caja de diálogo de conexión estándar presionando la tecla **Opción** (macOS) o **Alt** (Windows) mientras inicia la aplicación cliente. Sólo la parte cliente puede conectarse a la parte del servidor correspondiente. Si un usuario intenta conectarse a la parte servidor utilizando una aplicación estándar 4D, se devuelve un mensaje de error y la conexión es imposible.
- Una aplicación cliente/servidor puede configurarse para que la parte cliente [se actualice automáticamente a través de la red](#copy-of-client-applications-in-the-server-application). Sólo es necesario crear y distribuir una versión inicial de la aplicación cliente, las actualizaciones posteriores se gestionan mediante el mecanismo de actualización automática.
- También es posible automatizar la actualización de la parte del servidor mediante el uso de una secuencia de comandos del lenguaje ([SET UPDATE FOLDER](https://doc.4d.com/4dv19/help/command/en/page1291.html) y [RESTART 4D]((https://doc.4d.com/4dv19/help/command/en/page1292.html)).



### Construir aplicación servidor

Marque esta opción para generar la parte del servidor de su aplicación durante la fase de construcción. Debe designar la ubicación en su disco de la aplicación 4D Server que va a utilizar. Debe designar la ubicación en su disco de la aplicación 4D Server que va a utilizar.

#### Ubicación de 4D Server

Haga clic en el botón **[...]** y utilice la caja de diálogo *Navegar carpeta* para localizar la aplicación 4D Server. En macOS, debe seleccionar directamente el paquete 4D Server.

#### Versión actual

Se utiliza para indicar el número de versión actual de la aplicación generada. A continuación, podrá aceptar o rechazar las conexiones de las aplicaciones cliente en función de su número de versión. El intervalo de compatibilidad para las aplicaciones cliente y servidor se define mediante el uso de [llaves XML](#buildapp4dsettings) específicas).

#### Integrar el proyecto Usuarios y Grupos en la aplicación servidor creada

**Nota preliminar:** en esta sección se utilizan los siguientes términos:

| Nombre                                 | Definición                                                                                                                                                                    |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Archivo de directorio del proyecto     | archivo [directory.json](../Users/handling_users_groups.md#directoryjson-file) ubicado en la [carpeta Settings](../Project/architecture.md#settings-1) del proyecto           |
| Archivo de directorio de la aplicación | archivo [directory.json](../Users/handling_users_groups.md#directoryjson-file) ubicado en la [carpeta Settings](../Project/architecture.md#settings-1) del servidor 4D creado |
| Archivo de directorio de datos         | archivo [directory.json](../Users/handling_users_groups.md#directoryjson-file) en la carpeta [Data > Settings](../Project/architecture.md#settings)                           |

When you check this option, the project directory file is copied to the application directory file at build time.

Cuando ejecute una aplicación de servidor 4D generada:
* If the server has a data directory file, it is loaded.
* If the server does not have a data directory file, the application directory file is loaded.

El archivo de directorio de la aplicación es de sólo lectura. Modifications made to users, groups and permissions during server execution are stored in the data directory file. If no data directory file already exists, it is automatically created. If the application directory file was embedded, it is duplicated as data directory file.

Embedding the project directory file allows you to deploy a client/server application with a basic security user and group configuration. Subsequent modifications are added to the data directory file.

#### Autorizar la conexión de los clientes Silicon Mac

When building a server on Windows, check this option to allow Apple Silicon clients to connect to your server application. You can then specify a path to the structure compiled for Apple Silicon/Intel.

To allow Apple Silicon clients to connect to a Server application built on Windows, you must first build a client application on macOS, with a project compiled for Apple Silicon and Intel. This automatically creates a compiled structure, identical to the one created with the **[Build compiled structure](#build-compiled-structure)** option (without the related folders).

Then, you can copy that structure to your Windows machine, and use it to build the server application:

![](assets/en/Desktop/allow-mac-clients.png)

#### Compiled structure location

Path to compiled structure of the Apple Silicon/Intel client application used to build a Windows Server (see [Allow connection of Silicon Mac clients](#allow-connection-of-silicon-mac-clients).

#### Modo de enlace de datos

Esta opción permite elegir el modo de enlace entre la aplicación fusionada y el archivo de datos local. Hay dos modos de enlazar disponibles:

*   **Por nombre de la aplicación** (por defecto) - La aplicación 4D abre automáticamente el archivo de datos abierto más recientemente correspondiente al archivo de estructura. Esto le permite mover el paquete de aplicaciones libremente en el disco. Esta opción debería usarse generalmente para aplicaciones fusionadas, a menos que necesite específicamente duplicar su aplicación.

*   **Por ruta de la aplicación** - La aplicación 4D fusionada analizará el archivo *lastDataPath.xml* de la aplicación e intentará abrir el archivo de datos con un atributo "executablePath" que coincida con la ruta completa de la aplicación. Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath"). Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath").

Para más información sobre el modo de vinculación de datos, consulte la sección [Último archivo de datos abierto](#last-data-file-opened).


### Construir la aplicación cliente

Checking this option generates the client part of your application during the building phase.

Puede marcar esta opción:

- along with the [**Build server application**](#build-server-application) option to build matching server and client parts for the current platform and (optionally) include the automatic update archive files,
- without selecting the [**Build server application**](#build-server-application) option, usually to build the update archive file to be selected from the "concurrent" platform when building the server part.

#### Ubicación de 4D Volume Desktop

Designates the location on your disk of the 4D Volume Desktop application to be used to build the client part of your application.

> El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition. El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition.

The 4D Volume Desktop must correspond to the current platform (which will also be the platform of the client application). If you want to build a client application for the "concurrent" platform, you must carry out an additional build operation using a 4D application running on that platform.

If you want the client application to connect to the server using a specific address (other than the server name published on the sub-network), you must use the `IPAddress` XML key in the buildapp.4DSettings file. Para más información sobre este archivo, consulte la descripción del comando [`BUILD APPLICATION`](https://doc.4d.com/4dv19/help/command/en/page871.html). También puede implementar mecanismos específicos en caso de fallo de la conexión. También puede implementar mecanismos específicos en caso de fallo de la conexión.

#### Copy of client applications inside the server application

The options of this area set up the mechanism for updating the client part(s) of your client/server applications using the network each time a new version of the application is generated. These options are only enabled when the **Build client application** option is checked.

- **Allow automatic update of Windows client application** - Check this option to build a `.4darchive` file that can be sent to your client applications on the Windows platform in case of update.
- **Allow automatic update of Macintosh client application** - Check this option to build a `.4darchive` file that can be sent to your client applications on the Macintosh platform in case of update.

The `.4darchive` is copied at the following location:

```
<ApplicationName>_Build/Client Server executable/Upgrade4DClient/
```

#### Selecting client archive for the concurrent platform




You can check the **Allow automatic update...** option for client applications running on the concurrent platform. Esta opción sólo se activa si:

- the **Build server application** option is checked,
- the **Allow automatic update...** option for client applications running on the current platform is checked.

This feature requires that you click on the **[...]** button and designate the location on your disk of the file to use for the update. The file to select depends on the current server platform:

| Plataforma del servidor actual | Archivo requerido                                           | Detalles                                                                                                                                                                   |
| ------------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS                          | Windows 4D Volume Desktop *o* Windows client update archive | By default, you select the `4D Volume Desktop` application for Windows. To select a `.4darchive` file previously built on Windows, press **Shift** while clicking on [...] |
| Windows                        | macOS client update archive                                 | Select a signed `.4darchive` file previously built on macOS                                                                                                                |

You can build specific a `.4darchive` file on the concurrent platform by selecting only the [**Build client application**](#build-client-application) and the appropriate [**Allow automatic update...**](#copy-of-client-applications-inside-the-server-application) option.


#### Visualización de la notificación de actualización

The client application update notification is carried out automatically following the server application update.

It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the **Upgrade4DClient** subfolder of the **ApplicationName** Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a .*4darchive* update file is available for each platform:

To trigger client application update notifications, simply replace the old version of the server application with the new one and then execute it. El resto del proceso es automático.

On the client side, when the “old” client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. The user can either update their version or cancel the dialog box.

*   If the user clicks **OK**, the new version is downloaded to the client machine over the network. Una vez finalizada la descarga, se cierra la aplicación cliente antigua y se lanza la nueva versión, que se conecta al servidor. Una vez finalizada la descarga, se cierra la aplicación cliente antigua y se lanza la nueva versión, que se conecta al servidor.
*   If the user clicks **Cancel**, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. Otherwise (by default), the connection is established.

#### Forzar las actualizaciones automáticas

In some cases, you may want to prevent client applications from being able to cancel the update download. For example, if you used a new version of the 4D Server source application, the new version of the client application must absolutely be installed on each client machine.

To force the update, simply exclude the current version number of client applications (X-1 and earlier) in the version number range compatible with the server application. En este caso, el mecanismo de actualización no permitirá que las aplicaciones cliente no actualizadas se conecten. En este caso, el mecanismo de actualización no permitirá que las aplicaciones cliente no actualizadas se conecten.

The [current version number](#current_version) is set on the Client/Server page of the Build Application dialog box. The intervals of authorized numbers are set in the application project using specific [XML keys](#buildapp4dsettings).


#### En caso de error

If 4D cannot carry out the update of the client application, the client machine displays the following error message: "The update of the client application failed. La aplicación va a cerrar ahora."

Hay muchas causas posibles para este error. When you get this message, it is advisable to check the following parameters first off:

*   **Pathnames** - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example *ClientMacFolderToWin*). More particularly, check the pathnames to the versions of 4D Volume Desktop.
*   **Read/write privileges** - On the client machine, check that the current user has write access rights for the client application update.


### Archivos generados

Once a client/server application is built, you will find a new folder in the destination folder named **Client Server executable**. This folder contains two subfolders, *\<ApplicationName>Client* and *\<ApplicationName>Server*.
> These folders are not generated if an error occurs. In this case, open the [log file](#log-file) in order to find out the cause of the error.

The *\<ApplicationName>Client* folder contains the client portion of the application corresponding to the execution platform of the application builder. Esta carpeta debe instalarse en cada máquina cliente. The *\<ApplicationName>Server* folder contains the server portion of the application.

The contents of these folders vary depending on the current platform:

*   *Windows* - Each folder contains the application executable file, named *\<ApplicationName>Client.exe* for the client part and *\<ApplicationName>Server.exe* for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.
*   *macOS* - Each folder contains only the application package, named \<ApplicationName> Cliente para la parte cliente y \<ApplicationName> Server para la parte del servidor. Cada paquete contiene todos los elementos necesarios para que la aplicación funcione. Under macOS, launch a package by double-clicking it.

    > The macOS packages built contain the same items as the Windows subfolders. Para modificarlo, primero hay que mostrar su contenido (**Control+clic** en el icono).

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. Esta subcarpeta contiene la aplicación cliente en formato macOS y/o Windows como archivo comprimido. Esta subcarpeta contiene la aplicación cliente en formato macOS y/o Windows como archivo comprimido.


#### Ubicación de los archivos web

If the server and/or client part of your double-clickable application is used as a Web server, the files and folders required by the server must be installed in specific locations. Estos elementos son los siguientes:

- archivos *cert.pem* y *key.pem* (opcional): etos archivos se utilizan para las conexiones TLS y por los comandos de encriptación de datos,
- Carpeta raíz web por defecto (WebFolder).

Los elementos deben ser instalados:
*   **en Windows**
    *   **Server application** - in the *Client Server executable\/\<ApplicationName>Server/Server Database* subfolder.
    *   **Client application** - in the *Client Server executable\/\<ApplicationName>Client* subfolder.

*   **en macOS**
    *   **Server application** - next to the *\<ApplicationName>Server* software package.
    *   **Client application** - next to the *\<ApplicationName>Client* software package.


### Integrar una aplicación cliente monopuesto

4D allows you to embed a compiled structure in the Client application. This feature can be used, for example, to provide users with a "portal" application, that gives access to different server applications thanks to the `OPEN DATABASE` command executing a `.4dlink` file.

To enable this feature, add the `DatabaseToEmbedInClientWinFolder` and/or `DatabaseToEmbedInClientMacFolder` keys in the *buildApp* settings file. When one of these keys is present, the client application building process generates a single-user application: the compiled structure, instead of the *EnginedServer.4Dlink* file, is placed in the "Database" folder.

- If a default data folder exists in the single-user application, a licence is embedded.
- If no default data folder exists in the single-user application, it will be executed without data file and without licence.

El escenario básico es:

1. In the Build application dialog box, select the "Build compiled structure" option to produce a .4DZ or .4DC for the application to be used in single-user mode.
2. In the *buildApp.4DSettings* file of the client-server application, use following xml key(s) to indicate the path to the folder containing the compiled single user application:
    - `DatabaseToEmbedInClientWinFolder`
    - `DatabaseToEmbedInClientMacFolder`
3. Genere la aplicación cliente-servidor. This will have following effects:
    - the whole folder of the single user application is copied inside the "Database" folder of the merged client
    - the *EnginedServer.4Dlink* file of the "Database" folder is not generated
    - the .4DC, .4DZ, .4DIndy files of the single user application copy are renamed using the name of the merged client
    - the `PublishName` key is not copied in the *info.plist* of the merged client
    - if the single-user application does not have a "Default data" folder, the merged client will run with no data.

Automatic update 4D Server features ([Current version](#current-version) number, `SET UPDATE FOLDER` command...) work with single-user application as with standard remote application. At connection, the single-user application compares its `CurrentVers` key to the 4D Server version range. If outside the range, the updated client application is downloaded from the server and the Updater launches the local update process.


### Customizing client and/or server cache folder names

Client and server cache folders are used to store shared elements such as resources or components. They are required to manage exchanges between server and remote clients. Client/server applications use default pathnames for both client and server system cache folders.

In some specific cases, you might need to customize the names of these folders to implement specific architectures (see below). 4D provides you with the `ClientServerSystemFolderName` and `ServerStructureFolderName` keys to be set in the *buildApp* settings file.


#### Carpeta de caché cliente

Customizing the client-side cache folder name can be useful when your client application is used to connect to several merged servers which are similar but use different data sets. In this case, to save multiple unnecessary downloads of identical local resources, you can use the same custom local cache folder.

- Default configuration (*for each connection to a server, a specific cache folder is downloaded/updated*):

![](assets/en/Admin/cachea.png)

- Using the `ClientServerSystemFolderName` key (*a single cache folder is used for all servers*):

![](assets/en/Admin/cacheb.png)


#### Carpeta de caché del servidor

Customizing the server-side cache folder name is useful when you run several identical server applications built with different 4D versions on the same computer. If you want each server to use its own set of resources, you need to customize the server cache folder.

- Default configuration (*same server applications share the same cache folder*):

![](assets/en/Admin/cacheServera.png)

- Using the `ServerStructureFolderName` key (*a dedicated cache folder is used for each server application*):

![](assets/en/Admin/cacheServerb.png)




## Página Plugins y componentes

On this tab, you set each [**plug-in**](Concepts/plug-ins.md), [**component**](Concepts/components.md), and [**module**](#deselecting-modules) that you will use in your stand-alone or client/server application.


The page lists the elements loaded by the current 4D application:

![](assets/en/Desktop/buildappcomps.png)

*    **Active** column - Indicates that the items will be integrated into the application package built. Todos los elementos están marcados por defecto. To exclude a plug-in, a component, or a module, deselect the check box next to it.

*   **Plugins and components** column - Displays the name of the plug-in/component/module.

*   **ID** column - Displays the element's identification number (if any).

*   **Type** column - Indicates the type of item: Plug-in, Component, or Module.

### Adding plug-ins or components

If you want to integrate other plug-ins or components into the executable application, you just need to place them in a **PlugIns** or **Components** folder next to the 4D Volume Desktop application or next to the 4D Server application. The mechanism for copying the contents of the source application folder (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)) can be used to integrate any type of file into the executable application.

If there is a conflict between two different versions of the same plug-in (one loaded by 4D and the other located in the source application folder), priority goes to the plug-in installed in the 4D Volume Desktop/4D Server folder. However, if there are two instances of the same component, the application will not open.
> The use of plug-ins and/or components in a deployment version may require license numbers.


### Desmarcar módulos

A module is a built-in code library used by 4D to control specific features. If you know that your built application does not use any of the features covered by a module, you can deselect it in the list to reduce the size of your application files.

> **Warning:** Deselecting a module could prevent your built application from working as expected. If you are not 100% certain that a module is never called by your application, it is recommended to keep it selected.

Los siguientes módulos opcionales pueden ser deseleccionados:

- **CEF**: Chromium embedded library. It is necessary to run [Web areas](../FormObjects/webArea_overview.md) that use the embedded rendering engine and [4D View Pro areas](../FormObjects/viewProArea_overview.md). Calling such areas when CEF is deselected will display blank areas and/or generate errors.
- **MeCab**: Library used for text indexing in Japanese language (see this [settings paragraph](../settings/database.md#support-of-mecab-japanese-version)). Deselecting this module will force text indexes to be rebuilt in Japanese language.
> If you deselect MeCab for an application in Japanese language used on heterogeneous platforms, make sure to deselect it on both client/server build and [client application build](#build-client-application) (for the concurrent platform), otherwise major malfunctions will occur in the application.

- **PHP**: Necessary to use PHP features and commands in 4D (see this [settings paragraph](../settings/php.md)).
- **SpellChecker**: Used for built-in [spellchecking features](../FormObjects/properties_Entry.md#auto-spellcheck) and commands available for input areas and 4D Write Pro areas.
- **4D Updater**: Controls the [automatic update](#what-is-a-clientserver-application) of client parts and is used by the `SET UPDATE FOLDER` command for [automated server updates](#automatic-updating-of-server-or-single-user-applications).



## Página Licences & Certificado

The Licences & Certificate page can be used to:

*   designate the license number(s) that you want to integrate into your single-user stand-alone application
*   sign the application by means of a certificate in macOS.

![](assets/en/Admin/buildappCertif.png)

### Licencias

This tab displays the list of available deployment licenses that you can integrate into your application. Por defecto, la lista está vacía. Debe añadir explícitamente su licencia *4D Developer Professional*, así como cada licencia *4D Desktop Volume* que se vaya a utilizar en la aplicación generada. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.

To remove or add a license, use the **[+]** and **[-]** buttons at the bottom of the window.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine. For more information about the location of this folder, refer to the [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) command.

You must designate the files that contain your Developer license as well as those containing your deployment licenses. These files were generated or updated when the *4D Developer Professional* license and the *4D Desktop Volume* licenses were purchased.

Once you have selected a file, the list will indicate the characteristics of the license that it contains.

*   **License #** - Product license number
*   **License** - Name of the product
*   **Expiration date** - Expiration date of the license (if any)
*   **Ruta de acceso** - Ubicación en el disco

If a license is not valid, a message will warn you.

Puede designar tantos archivos válidos como desee. When building an executable application, 4D will use the most appropriate license available.
> Dedicated "R" licenses are required to build applications based upon "R-release" versions (license numbers for "R" products start with "R-4DDP").

After the application is built, a new deployment license file is automatically included in the Licenses folder next to the executable application (Windows) or in the package (macOS).


### Certificación de las aplicaciones en OS X

El generador de aplicaciones puede firmar aplicaciones 4D fusionadas bajo macOS (aplicaciones monopuesto, componentes, 4D Server y partes cliente bajo macOS). Signing an application authorizes it to be executed using the Gatekeeper functionality of macOS when the "Mac App Store and identified Developers" option is selected (see "About Gatekeeper" below).

- Check the **Sign application** option to include certification in the application builder procedure for OS X. 4D will check the availability of elements required for certification when the build occurs:

![](assets/en/Admin/buildapposxcertProj.png)

This option is displayed under both Windows and macOS, but it is only taken into account for macOS versions.

*   **Name of certificate** - Enter the name of your developer certificate validated by Apple in this entry area. The certificate name is usually the name of the certificate in the Keychain Access utility (part in red in the following example):

![](assets/en/Project/certificate.png)

To obtain a developer certificate from Apple, Inc., you can use the commands of the Keychain Access menu or go here: [http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html).
> This certificate requires the presence of the Apple codesign utility, which is provided by default and usually located in the “/usr/bin/” folder. If an error occurs, make sure that this utility is present on your disk.

* **Generate self-signed certificate** - runs the "Certificate Assistant" that allows you to generate a self-signed certificate. If you do not have an Apple developer certificate, you need to provide a self-signed certificate. With this certificate, no alert message is displayed if the application is deployed internally. If the application is deployed externally (i.e. through http or email), at launch macOS displays an alert message that the application's developer is unidentified. The user can "force" the opening of the application. <p>In the "Certificate Assistant", be sure to select the appropriate options: ![](assets/en/Admin/Cert1.png) ![](assets/en/Admin/Cert2.png)

> 4D recommends to subscribe to the Apple Developer Program to get access to Developer Certificates that are necessary to notarize applications (see below).


#### Sobre Gatekeeper

Gatekeeper is a security feature of OS X that controls the execution of applications downloaded from the Internet. If a downloaded application does not come from the Apple Store or is not signed, it is rejected and cannot be launched.

> On Apple Silicon machines, 4D [components](#components) need to be actually signed. An unsigned component will generate an error at application startup ("lib4d-arm64.dylib can't be opened...").

La opción **Firmar la aplicación** del Generador de aplicaciones de 4D le permite generar aplicaciones y componentes compatibles con esta opción por defecto.


#### Sobre la notarización

Application notarization is highly recommended by Apple as of macOS 10.14.5 (Mojave) and 10.15 (Catalina), since non-notarized applications deployed via the internet are blocked by default.

Las [funciones de firma integradas](#os-x-signing-certificate) de 4D se han adaptado para cumplir con todos los requisitos de Apple para permitir el uso del servicio de notario de Apple. La notarización en sí debe ser realizada por el desarrollador y es independiente de 4D (tenga en cuenta también que requiere la instalación de Xcode). La notarización en sí debe ser realizada por el desarrollador y es independiente de 4D (tenga en cuenta también que requiere la instalación de Xcode).

For more information on the notarization concept, please refer to [this page on the Apple developer website](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).

## Personalizar los iconos de una aplicación

4D associates a default icon with stand-alone, server, and client applications, however you can customize the icon for each application.

*   **macOs** - When building a double-clickable application, 4D handles the customizing of the icon. In order to do this, you must create an icon file (icns type), prior to building the application file, and place it next to the project folder.
> Apple, Inc. provides a specific tool for building *icns* icon files (for more information, please refer to [Apple documentation](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).

    Your icon file must have the same name as the project file and include the *.icns* extension. 4D automatically takes this file into account when building the double-clickable application (the *.icns* file is renamed *ApplicationName.icns* and copied into the Resources folder; the *CFBundleFileIcon* entry of the *info.plist* file is updated).

*   **Windows** - When building a double-clickable application, 4D handles the customizing of its icon. In order to do this, you must create an icon file (*.ico* extension), prior to building the application file, and place it next to the project folder.

    Your icon file must have the same name as the project file and include the *.ico* extension. 4D automatically takes this file into account when building the double-clickable application.

You can also set specific [XML keys](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) in the buildApp.4DSettings file to designate each icon to use. The following keys are available:

- RuntimeVLIconWinPath
- RuntimeVLIconMacPath
- ServerIconWinPath
- ServerIconMacPath
- ClientMacIconForMacPath
- ClientWinIconForMacPath
- ClientMacIconForWinPath
- ClientWinIconForWinPath



## Gestión de archivos de datos


### Apertura del archivo de datos

When a user launches a merged application or an update (single-user or client/server applications), 4D tries to select a valid data file. Several locations are examined by the application successively.

The opening sequence for launching a merged application is:

1. 4D tries to open the last data file opened, [as described below](#last-data-file-opened) (not applicable during initial launch).
2. If not found, 4D tries to open the data file in a default data folder next to the .4DZ file in read-only mode.
3. If not found, 4D tries to open the standard default data file (same name and same location as the .4DZ file).
4. If not found, 4D displays a standard "Open data file" dialog box.


### Último archivo de datos abierto

#### Ruta del último archivo de datos
Any standalone or server applications built with 4D stores the path of the last data file opened in the application's user preferences folder.

The location of the application's user preferences folder corresponds to the path returned by the following statement:


```4d
userPrefs:=Get 4D folder(Carpeta 4D activa)
```

The data file path is stored in a dedicated file, named *lastDataPath.xml*.

Thanks to this architecture, when you provide an update of your application, the local user data file (last data file used) is opened automatically at first launch.

This mechanism is usually suitable for standard deployments. However, for specific needs, for example if you duplicate your merged applications, you might want to change the way that the data file is linked to the application (described below).

#### Configuring the data linking mode

With your compiled applications, 4D automatically uses the last data file opened. By default, the path of the data file is stored in the application's user preferences folder and is linked to the **application name**.

This may be unsuitable if you want to duplicate a merged application intended to use different data files. Duplicated applications actually share the application's user preferences folder and thus, always use the same data file -- even if the data file is renamed, because the last file used for the application is opened.

4D therefore lets you link the data file path to the application path. En este caso, el archivo de datos se relacionará con una ruta específica y no será simplemente el último archivo abierto. En este caso, el archivo de datos se relacionará con una ruta específica y no será simplemente el último archivo abierto.

This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).


*Duplication when data linked by application name:* ![](assets/en/Project/datalinking1.png)

*Duplication when data linked by application path:* ![](assets/en/Project/datalinking2.png)

You can select the data linking mode during the build application process. Puede:

- Use the [Application page](#application) or [Client/Server page](#client-server) of the Build Application dialog box.
- Use the **LastDataPathLookup** XML key (single-user application or server application).


### Definir una carpeta de datos por defecto

4D allows you to define a default data file at the application building stage. Cuando la aplicación se lanza por primera vez, si no se encuentra ningún archivo de datos local (ver \[secuencia de lanzamiento descrita anteriormente\](#opening-the-data-file)), el archivo de datos por defecto se abre automáticamente y de forma silenciosa en modo de sólo lectura por 4D. Cuando la aplicación se lanza por primera vez, si no se encuentra ningún archivo de datos local (ver \[secuencia de lanzamiento descrita anteriormente\](#opening-the-data-file)), el archivo de datos por defecto se abre automáticamente y de forma silenciosa en modo de sólo lectura por 4D.

More specifically, the following cases are covered:

- Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.
- Allowing the distribution of merged applications with read-only data (for demo applications, for instance).


Para definir y utilizar un archivo de datos por defecto:

- You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the application project folder. This file must be provided along with all other necessary files, depending on the project configuration: index (.4DIndx), external Blobs, journal, etc. Es su responsabilidad proveer un archivo de datos válido por defecto. Es su responsabilidad proveer un archivo de datos válido por defecto.
- When the application is built, the default data folder is integrated into the merged application. All files within this default data folder are also embedded.

El siguiente gráfico ilustra esta funcionalidad:

![](assets/en/Project/DefaultData.png)

When the default data file is detected at first launch, it is silently opened in read-only mode, thus allowing you to execute any custom operations that do not modify the data file itself.


## Management of client connection(s)

The management of connections by client applications covers the mechanisms by which a merged client application connects to the target server, once it is in its production environment.

### Escenario de conexión

The connection procedure for merged client applications supports cases where the dedicated server is not available. The startup scenario for a 4D client application is the following:

1.  If valid connection information is stored in the "EnginedServer.4DLink" file within the client application, the client application connects to the specified server address.  
   OR  
   The client application tries to connect to the server using the discovery service (based upon the server name, broadcasted on the same subnet).

2.  If this fails, the client application tries to connect to the server using information stored in the application's user preferences folder ("lastServer.xml" file, see last step).
3.  If this fails, the client application displays a connection error dialog box.
    - If the user clicks on the **Select...** button (when allowed by the 4D developer at the build step, see below), the standard "Server connection" dialog box is displayed.
    - If the user clicks on the **Quit** button, the client application quits.
4. If the connection is successful, the client application saves this connection information in the application's user preferences folder for future use.

The whole procedure is described in the following diagram:

![](assets/en/Desktop/client-connect.png)



### Storing the last server path

The last used and validated server path is automatically saved in a file named "lastServer.xml" in the application's user preferences folder. Esta carpeta se guarda en la siguiente ubicación:

```4d
userPrefs:=Get 4D folder(Carpeta 4D activa)
```

This mechanism addresses the case where the primary targeted server is temporary unavailable for some reason (maintenance mode for example). Cuando se produce este caso por primera vez, se muestra la caja de diálogo de selección de servidor (si está permitido, ver más adelante) y el usuario puede seleccionar manualmente un servidor alternativo, cuya ruta se guarda si la conexión tiene éxito. Any subsequent unavailability would be handled automatically through the "lastServer.xml" path information.

> - When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) key in the "BuildApp.4DSettings" file. El mecanismo aborda los casos de indisponibilidad temporal.  
> - Pressing the **Alt/Option** key at startup to display the server selection dialog box is still supported in all cases.



### Availability of the server selection dialog box in case of error

You can choose whether or not to display the standard server selection dialog box on merged client applications when the server cannot be reached. The configuration depends on the value of the [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) XML key on the machine where the application was built:

- **Display of an error message with no access possible to the server selection dialog box**. Funcionamiento por defecto. The application can only quit.  
  `ServerSelectionAllowed`: **False** or key omitted ![](assets/en/Project/connect1.png)

- **Display of an error message with access to the server selection dialog box possible**. The user can access the server selection window by clicking on the **Select...** button.   
  `ServerSelectionAllowed`: **True** ![](assets/en/Project/connect2.png) ![](assets/en/Project/connect3.png)


## Automatic updating of server or single-user applications

In principle, updating server applications or merged single-user applications require user intervention (or programming custom system routines): whenever a new version of the merged application is available, you have to exit the application in production and manually replace the old files with the new ones; then restart the application and select the current data file.

You can automate this procedure to a large extent using the following language commands: [`SET UPDATE FOLDER`](https://doc.4d.com/4dv19/help/command/en/page1291.html), [`RESTART 4D`](https://doc.4d.com/4dv19/help/command/en/page1292.html), and also [`Get last update log path`](https://doc.4d.com/4dv19/help/command/en/page1301.html) for monitoring operations. The idea is to implement a function in your 4D application triggering the automatic update sequence described below. It can be a menu command or a process running in the background and checking at regular intervals for the presence of an archive on a server.

> You also have XML keys to elevate installation privileges so that you can use protected files under Windows (see the [4D XML Keys BuildApplication](https://doc.4d.com/4Dv19/4D/19/4D-XML-Keys-BuildApplication.100-5447429.en.html) manual).


Here is the scenario for updating a server or merged single-user application:

1. You transfer, for example using an HTTP server, the new version of the server application or the merged single-user application onto the machine in production.
2. In the application in production, you call the `SET UPDATE FOLDER` command: this command designates the location of the folder where the "pending" update of the current application is found. Optionally, you can copy in this folder the custom elements of the version in production (user files).
3. In the application in production, call the `RESTART 4D` command: this command automatically triggers execution of a utility program named "updater" that exits the current application, replaces it using the "pending" update if one is specified, and restarts the application with the current data file. The former version is renamed.

> This sequence is compatible with Windows server applications run as a Service.


### Update log

The installation procedure produces a log file detailing the update operations of merged applications (client, server or single-user) on the target machines. This file is useful for analyzing any errors that occur during the installation process.

The update log is named `YYYY-MM-DD_HH-MM-SS_log_X.txt`, for example, `2021-08-25_14-23-00_log_1.txt` for a file created on August 25, 2021 at 14:23.

This file is created in the "Updater" application folder, within the system user folder. You can find out the location of this file at any time using the [`Get last update log path`](https://doc.4d.com/4dv19/help/command/en/page1301.html) command.