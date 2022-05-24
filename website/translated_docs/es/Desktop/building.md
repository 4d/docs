---
id: building
title: Generador de aplicaciones
---

4D includes an application builder to create a project package (final build). Este generador simplifica el proceso de finalización y despliegue de las aplicaciones compiladas en 4D. Maneja automáticamente las funcionalidades específicas de los distintos sistemas operativos y facilita el despliegue de aplicaciones cliente-servidor.

El generador de aplicaciones le permite:

*   Build a compiled structure, without interpreted code,
*   Generar una aplicación autónoma ejecutable, *es decir*, fusionada con 4D Volume Desktop, el motor de base de datos 4D,
*   Build different applications from the same compiled structure via an XML project,
*   Generar aplicaciones cliente-servidor homogéneas,
*   Generar aplicaciones cliente-servidor con actualización automática de los componentes del cliente y del servidor.
*   Guardar sus parámetros de generación para su uso futuro (botón *Guardar los parámetros*).

> Compiled applications are based upon [.4dz files](#build-compiled-structure) that are **read-only**. Keep in mind that using commands or functions that modify the source files (such as `CREATE INDEX` or `CREATE TABLE` (SQL)) is not possible by default in compiled applications. Sin embargo, puede crear aplicaciones específicas que soporten modificaciones locales utilizando la llave XML `PackProject` (ver [doc.4d.com](https://doc.4d.com)).


## Generalidades

Generar un paquete de proyecto puede realizarse utilizando:

- either the [`BUILD APPLICATION`](https://doc.4d.com/4dv19/help/command/en/page871.html) command,
- or the [Build Application dialog](#application-builder).


### Build application dialog

To display the Build application dialog, select **Design** > **Build Application...** from the menu bar.

![](assets/en/Project/buildappProj.png)

La caja de diálogo del generador de aplicaciones incluye varias páginas a las que se puede acceder mediante pestañas:

![](assets/en/Project/appbuilderProj.png)


Building can only be carried out once the project is compiled. If you select this command without having previously compiled the project, or if the compiled code does not correspond to the interpreted code, a warning dialog box appears indicating that the project must be (re)compiled.


### Parámetros del generador de aplicaciones


Cada parámetro de generación de la aplicación se almacena como una llave XML en el archivo proyecto de la aplicación llamada `"buildApp.4DSettings"`, ubicado en la carpeta `Settings` del proyecto.

Los parámetros por defecto se utilizan la primera vez que se utiliza la caja de diálogo del Generador de aplicaciones. El contenido del archivo proyecto se actualiza, si es necesario, al hacer clic en **Construir** o **Guardar los parámetros**. You can define several other XML settings file for the same project and employ them using the [BUILD APPLICATION](https://doc.4d.com/4dv19/help/command/en/page871.html) command.

Las llaves XML ofrecen opciones adicionales a las que se muestran en la caja de diálogo del Generador de aplicaciones. La descripción de estas llaves se detalla en el manual [4D XML Keys BuildApplication](https://doc.4d.com/4Dv19/4D/19/4D-XML-Keys-BuildApplication.100-5447429.en.html).

### Archivo de historial

When an application is built, 4D generates a log file named *BuildApp.log.xml* in the **Logs** folder of the project. El archivo de historial almacena la siguiente información para cada generación:

- El inicio y el fin de la generación de objetivos,
- El nombre y la ruta de acceso completa de los archivos generados,
- La fecha y la hora de la generación,
- Todos los errores que se han producido,
- Any signing issues (e.g. a non-signed plug-in).

Checking this file may help you saving time during the subsequent deployment steps, for example if you intend to notarize your application.

> Use the `Get 4D file(Build application log file)` command to get the log file location.


## Nombre de la aplicación y carpeta de destino

![](assets/en/Project/buidappstructureProj.png)

Introduzca el nombre de la aplicación en **Nombre de la aplicación**.

Especifique la carpeta para la aplicación generada en la **Carpeta de destino**. Si la carpeta especificada no existe todavía, 4D creará una carpeta *Build*.



## Página de estructura compilada

Esta pestaña le permite generar un archivo de estructura compilado estándar y/o un componente compilado:

![](assets/en/Project/appbuilderProj.png)


### Generar una estructura compilada

Builds an application containing only compiled code.

This feature creates a *.4dz* file within a *Compiled Database/\<project name>* folder. Por ejemplo, si ha llamado a su aplicación "MyProject", 4D creará:

*\<destination\>/Compiled Database/MyProject/MyProject.4dz*

Un archivo .4dz es esencialmente una versión comprimida (empaquetada) de la carpeta del proyecto. Los archivos .4dz pueden ser utilizados por 4D Server, 4D Volume license (aplicaciones fusionadas) y 4D. El tamaño compacto y optimizado de los archivos .4dz hace que los paquetes de proyectos sean fáciles de desplegar.

> When generating .4dz files, 4D uses a **standard** zip format by default. The advantage of this format is that it is easily readable by any unzip tool. If you do not want to use this standard format, add the `UseStandardZipFormat` XML key with value `False` in your [`buildApp.4DSettings`](#build-application-settings) file (for more information, see the *4D XML Keys Backup* manual on [doc.4d.com](https://doc.4d.com)).




#### Incluir las carpetas asociadas

Cuando se marca esta opción, todas las carpetas relacionadas con el proyecto se copian en la carpeta Build como carpetas *Components* y *Resources*. Para más información sobre estas carpetas, consulte la [descripción de la arquitectura del proyecto](Project/architecture.md).


### Generar un componente

Genera un componente compilado a partir de la estructura.

Un componente es un proyecto estándar 4D en el que se han desarrollado funcionalidades específicas. Una vez configurado e instalado el componente en otra base 4D (el proyecto de aplicación local), sus funcionalidades son accesibles desde el proyecto local.

Si ha llamado a su aplicación, *MiComponente*, 4D creará una carpeta *Components* que contiene la carpeta *MiComponente.4dbase*:

*\<destination>/Components/MyComponent.4dbase/MyComponent.4DZ*.

La carpeta *MyComponent.4dbase* contiene:
-   *MyComponent.4DZ* file
-   A *Resources* folder - any associated Resources are automatically copied into this folder. Any other components and/or plugins folders are not copied (a component cannot use plug-ins or other components).


## Página Application

Esta pestaña le permite crear una versión autónoma y monopuesto de su aplicación:

![](assets/en/Project/standaloneProj.png)

### Crear una aplicación autónoma

Al marcar la opción **Crear una aplicación autónoma** y hacer clic en **Generar** se creará una aplicación autónoma (con doble clic) directamente desde su proyecto de aplicación.

Los siguientes elementos son necesarios para la creación:
- 4D Volume Desktop (the 4D database engine),
- an [appropriate license](#licenses)

En Windows, esta función crea un archivo ejecutable (.exe). En macOS, se encarga de la creación de paquetes de software.

El principio consiste en fusionar un archivo de estructura compilado con 4D Volume Desktop. Las funcionalidades ofrecidas por el archivo 4D Volume Desktop están relacionadas con la oferta de productos a la que se ha suscrito. Para más información sobre este punto, consulte la documentación de ventas y la [Tienda 4D](http://www.4d.com/).

Puede definir un archivo de datos por defecto o permitir a los usuarios crear y utilizar su propio archivo de datos (ver la sección [Gestión de archivos de datos en las aplicaciones finales](https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html)).

Es posible automatizar la actualización de las aplicaciones monopuesto fusionadas mediante una secuencia de comandos de lenguaje (ver [Actualización automática de aplicaciones servidor o monopuesto](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html).

#### 4D Volume Desktop Location

Para crear una aplicación autónoma, primero debe designar la carpeta que contiene el archivo 4D Volume Desktop:

*   *Windows* - the folder contains the 4D Volume Desktop.4DE, 4D Volume Desktop.RSR, as well as various files and folders required for its operation. These items must be placed at the same level as the selected folder.
*   *macOS* - 4D Volume Desktop is provided in the form of a structured software package containing various generic files and folders.

Para seleccionar la carpeta 4D Volume Desktop, haga clic en el botón **[...]**. Aparece una caja de diálogo que le permite designar la carpeta de 4D Volume Desktop (Windows) o el paquete (macOS).

Una vez seleccionada la carpeta, se muestra su ruta completa y, si realmente contiene 4D Volume Desktop, se activa la opción de generación de una aplicación ejecutable.

> El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition. Por ejemplo, si utiliza 4D Developer v18, debe seleccionar un 4D Volume Desktop v18.

#### Modo de enlace de datos

Esta opción permite elegir el modo de enlace entre la aplicación fusionada y el archivo de datos local. Hay dos modos de enlazar disponibles:

*   **By application name** (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. Esto le permite mover el paquete de aplicaciones libremente en el disco. This option should generally be used for merged applications, unless you specifically need to duplicate your application.

*   **By application path** - The merged 4D application will parse the application's *lastDataPath.xml* file and try to open the data file with an "executablePath" attribute that matches the application's full path. Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath"). Otherwise, the last opened data file is opened (default mode).

Para más información sobre el modo de vinculación de datos, consulte la sección [Último archivo de datos abierto](#last-data-file-opened).


#### Archivos generados

Al hacer clic en el botón **Generar**, 4D crea automáticamente una carpeta **Final Application** en la **carpeta de destino** definida. Dentro de la carpeta Final Application hay una subcarpeta con el nombre de la aplicación especificada.

Si ha especificado "MyProject" como nombre de la aplicación, encontrará los siguientes archivos en esta subcarpeta (MyProject):

*   *Windows*
    *   MyProject.exe  - Your executable and a MyProject.rsr (the application resources)
    *   4D Extensions folder, Resources folder, various libraries (DLL), Native Components folder, SASL Plugins folder - Files necessary for the operation of the application
    *   Database folder  - Includes a Resources folder and  MyProject.4DZ file. They make up the compiled structure of the project as well as the project Resources folder. **Note**: This folder also contains the *Default Data* folder, if it has been defined (see [Data file management in final applications](#data-file-management-in-final-applicatons).
    *   (Optional) Components folder and/or Plugins folder - Contains any components and/or plug-in files included in the project. For more information about this, refer to the [Plugins and components](#plugins-and-components) section.
    *   Licenses folder - An XML file of license numbers integrated into the application. For more information about this, refer to the [Licenses & Certificate](#licenses-and-certificate) section.
    *   Additional items added to the 4D Volume Desktop folder, if any (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)).

    All these items must be kept in the same folder in order for the executable to operate.

*   *macOS*
    -   A software package named MyProject.app containing your application and all the items necessary for its operation, including the plug-ins, components and licenses. Para más información sobre la integración de plug-ins y componentes, consulte la sección \[Plugins y componentes\](#plugins-and-components). Para obtener más información sobre la integración de licencias, consulte la sección \[Licencias y certificados\](#licenses-and-certificate). **Note**: In macOS, the [Application file](https://doc.4d.com/4Dv18R4/4D/18-R4/Application-file.301-4982855.en.html) command of the 4D language returns the pathname of the ApplicationName file (located in the Contents:macOS folder of the software package) and not that of the .comp file (Contents:Resources folder of the software package).


#### Customizing 4D Volume Desktop folder

Cuando se construye una aplicación independiente, 4D copia el contenido de la carpeta 4D Volume Desktop en la carpeta Destination > *Final Application*. A continuación, podrá personalizar el contenido de la carpeta 4D Volume Desktop original según sus necesidades. Puede, por ejemplo:

*   Install a 4D Volume Desktop version corresponding to a specific language;
*   Add a custom *PlugIns* folder;
*   Customize the contents of the *Resources* folder.
> En macOS, 4D Volume Desktop se ofrece en forma de paquete de software. Para modificarlo, primero hay que mostrar su contenido (**Control+clic** en el icono).


#### Ubicación de los archivos web

Si su aplicación ejecutable se utiliza como servidor web, los archivos y los archivos y carpetas requeridos por el servidor deben instalarse en ubicaciones específicas. Estos elementos son los siguientes:

*   *cert.pem* and *key.pem* files (optional): These files are used for TLS connections and by data encryption commands,
*   carpeta raíz web por defecto.

Los elementos deben ser instalados:

- **on Windows**: in the *Final Application\MyProject\Database* subfolder.
- **on macOS**: next to the *MyProject.app* software package.





## Página Cliente/Servidor

On this tab, you can build customized client-server applications that are homogenous, cross-platform and with an automatic update option.

![](assets/en/Project/buildappCSProj.png)

### What is a Client/Server application?

A client/server application comes from the combination of three items:

- Un proyecto 4D compilado,
- The 4D Server application,
- The 4D Volume Desktop application (macOS and/or Windows).

Once built, a client/server application is composed of two customized parts: the Server portion (unique) and the Client portion (to install on each client machine).

> If you want to deploy a client/server application in an heterogeneous environment (client applications running on Intel/AMD and Apple Silicon machines), it is recommended to [compile the project for all processors](Project/compiler.md#compilation-target) on a macOS machine, so that all client applications will run natively.

Also, the client/server application is customized and its handling simplified:

- To launch the server portion, the user simply double-clicks on the server application. The project file does not need to be selected.
- To launch the client portion, the user simply double-clicks the client application, which connects directly to the server application. You do not need to choose a server in a connection dialog box. El cliente se dirige al servidor usando su nombre, cuando el cliente y el servidor están en la misma subred, o utilizando su dirección IP, que se define utilizando la llave XML `IPAddress` en el archivo buildapp.4DSettings. Si la conexión falla, \[se pueden implementar mecanismos alternativos específicos\](#management-of-client-connections). Puede "forzar" la visualización de la caja de diálogo de conexión estándar presionando la tecla **Opción** (macOS) o **Alt** (Windows) mientras inicia la aplicación cliente. Sólo la parte cliente puede conectarse a la parte del servidor correspondiente. If a user tries to connect to the server portion using a standard 4D application, an error message is returned and connection is impossible.
- A client/server application can be set so that the client portion [can be updated automatically over the network](#copy-of-client-applications-in-the-server-application). You only need to create and distribute an initial version of the client application, subsequent updates are handled using the automatic update mechanism.
- It is also possible to automate the update of the server part through the use of a sequence of language commands ([SET UPDATE FOLDER](https://doc.4d.com/4dv19/help/command/en/page1291.html) and [RESTART 4D]((https://doc.4d.com/4dv19/help/command/en/page1292.html)).



### Construir aplicación servidor

Check this option to generate the server part of your application during the building phase. Debe designar la ubicación en su disco de la aplicación 4D Server que va a utilizar. This 4D Server must correspond to the current platform (which will also be the platform of the server application).

#### Ubicación de 4D Server

Click on the **[...]** button and use the *Browse for folder* dialog box to locate the 4D Server application. In macOS, you must select the 4D Server package directly.

#### Versión actual

Used to indicate the current version number for the application generated. A continuación, podrá aceptar o rechazar las conexiones de las aplicaciones cliente en función de su número de versión. El intervalo de compatibilidad de las aplicaciones del cliente y del servidor se define mediante el uso de [llaves XML](#build-application-settings) específicas).

#### Allow connection of Silicon Mac clients

When building a server on Windows, check this option to allow Apple Silicon clients to connect to your server application. You can then specify a path to the structure compiled for Apple Silicon/Intel.

To allow Apple Silicon clients to connect to a Server application built on Windows, you must first build a client application on macOS, with a project compiled for Apple Silicon and Intel. This automatically creates a compiled structure, identical to the one created with the **[Build compiled structure](#build-compiled-structure)** option (without the related folders).

Then, you can copy that structure to your Windows machine, and use it to build the server application:

![](assets/en/Desktop/allow-mac-clients.png)

#### Compiled structure location

Path to compiled structure of the Apple Silicon/Intel client application used to build a Windows Server (see [Allow connection of Silicon Mac clients](#allow-connection-of-silicon-mac-clients).

#### Modo de enlace de datos

Esta opción permite elegir el modo de enlace entre la aplicación fusionada y el archivo de datos local. Hay dos modos de enlazar disponibles:

*   **By application name** (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. Esto le permite mover el paquete de aplicaciones libremente en el disco. This option should generally be used for merged applications, unless you specifically need to duplicate your application.

*   **By application path** - The merged 4D application will parse the application's *lastDataPath.xml* file and try to open the data file with an "executablePath" attribute that matches the application's full path. Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath"). Otherwise, the last opened data file is opened (default mode).

Para más información sobre el modo de vinculación de datos, consulte la sección [Último archivo de datos abierto](#last-data-file-opened).


### Construir la aplicación cliente

Checking this option generates the client part of your application during the building phase.

Puede marcar esta opción:

- along with the [**Build server application**](#build-server-application) option to build matching server and client parts for the current platform and (optionally) include the automatic update archive files,
- without selecting the [**Build server application**](#build-server-application) option, usually to build the update archive file to be selected from the "concurrent" platform when building the server part.

#### 4D Volume Desktop Location

Designates the location on your disk of the 4D Volume Desktop application to be used to build the client part of your application.

> El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition. Por ejemplo, si utiliza 4D v19, debe seleccionar un 4D Volume Desktop v19.

The 4D Volume Desktop must correspond to the current platform (which will also be the platform of the client application). If you want to build a client application for the "concurrent" platform, you must carry out an additional build operation using a 4D application running on that platform.

If you want the client application to connect to the server using a specific address (other than the server name published on the sub-network), you must use the `IPAddress` XML key in the buildapp.4DSettings file. Para más información sobre este archivo, consulte la descripción del comando [`BUILD APPLICATION`](https://doc.4d.com/4dv19/help/command/en/page871.html). También puede implementar mecanismos específicos en caso de fallo de la conexión. The different scenarios proposed are described in the [Management of connections by client applications](#management-of-client-connections) paragraph.

#### Copy of client applications inside the server application

The options of this area set up the mechanism for updating the client part(s) of your client/server applications using the network each time a new version of the application is generated. These options are only enabled when the **Build client application** option is checked.

- **Allow automatic update of Windows client application** - Check this option to build a `.4darchive` file that can be sent to your client applications on the Windows platform in case of update.
- **Allow automatic update of Macintosh client application** - Check this option to build a `.4darchive` file that can be sent to your client applications on the Macintosh platform in case of update.

The `.4darchive` is copied at the following location:

```
<ApplicationName>_Build/Client Server executable/Upgrade4DClient/
```

#### Selecting client archive for the concurrent platform




You can check the **Allow automatic update...** option for client applications running on the concurrent platform. This option is only enabled if:

- the **Build server application** option is checked,
- the **Allow automatic update...** option for client applications running on the current platform is checked.

This feature requires that you click on the **[...]** button and designate the location on your disk of the file to use for the update. The file to select depends on the current server platform:

| Plataforma del servidor actual | Archivo requerido                                           | Detalles                                                                                                                                                                   |
| ------------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS                          | Windows 4D Volume Desktop *o* Windows client update archive | By default, you select the `4D Volume Desktop` application for Windows. To select a `.4darchive` file previously built on Windows, press **Shift** while clicking on [...] |
| Windows                        | macOS client update archive                                 | Select a signed `.4darchive` file previously built on macOS                                                                                                                |

You can build specific a `.4darchive` file on the concurrent platform by selecting only the [**Build client application**](#build-client-application) and the appropriate [**Allow automatic update...**](#copy-of-client-applications-inside-the-server-application) option.


#### Displaying update notification

The client application update notification is carried out automatically following the server application update.

It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the **Upgrade4DClient** subfolder of the **ApplicationName** Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a .*4darchive* update file is available for each platform:

To trigger client application update notifications, simply replace the old version of the server application with the new one and then execute it. The rest of the process is automatic.

On the client side, when the “old” client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. The user can either update their version or cancel the dialog box.

*   If the user clicks **OK**, the new version is downloaded to the client machine over the network. Una vez finalizada la descarga, se cierra la aplicación cliente antigua y se lanza la nueva versión, que se conecta al servidor. The old version of the application is then placed in the machine’s recycle bin.
*   If the user clicks **Cancel**, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. Otherwise (by default), the connection is established.

#### Forcing automatic updates

In some cases, you may want to prevent client applications from being able to cancel the update download. For example, if you used a new version of the 4D Server source application, the new version of the client application must absolutely be installed on each client machine.

To force the update, simply exclude the current version number of client applications (X-1 and earlier) in the version number range compatible with the server application. En este caso, el mecanismo de actualización no permitirá que las aplicaciones cliente no actualizadas se conecten. Por ejemplo, si la nueva versión de la aplicación cliente-servidor es 6, puede estipular que toda aplicación cliente con un número de versión inferior a 6 no podrá conectarse.

The [current version number](#current_version) is set on the Client/Server page of the Build Application dialog box. The intervals of authorized numbers are set in the application project using specific [XML keys](#build-application-settings).


#### En caso de error

If 4D cannot carry out the update of the client application, the client machine displays the following error message: “The update of the client application failed. The application is now going to quit.”

There are many possible causes for this error. When you get this message, it is advisable to check the following parameters first off:

*   **Pathnames** - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example *ClientMacFolderToWin*). More particularly, check the pathnames to the versions of 4D Volume Desktop.
*   **Read/write privileges** - On the client machine, check that the current user has write access rights for the client application update.


### Archivos generados

Once a client/server application is built, you will find a new folder in the destination folder named **Client Server executable**. This folder contains two subfolders, *\<ApplicationName>Client* and *\<ApplicationName>Server*.
> These folders are not generated if an error occurs. In this case, open the [log file](#log-file) in order to find out the cause of the error.

The *\<ApplicationName>Client* folder contains the client portion of the application corresponding to the execution platform of the application builder. Esta carpeta debe instalarse en cada máquina cliente. The *\<ApplicationName>Server* folder contains the server portion of the application.

The contents of these folders vary depending on the current platform:

*   *Windows* - Each folder contains the application executable file, named *\<ApplicationName>Client.exe* for the client part and *\<ApplicationName>Server.exe* for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.
*   *macOS* - Each folder contains only the application package, named \<ApplicationName> Client for the client part and \<ApplicationName> Server for the server part. Cada paquete contiene todos los elementos necesarios para que la aplicación funcione. Under macOS, launch a package by double-clicking it.

    > The macOS packages built contain the same items as the Windows subfolders. Puede visualizar su contenido (**Control+clic** en el icono) para poder modificarlo.

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. Esta subcarpeta contiene la aplicación cliente en formato macOS y/o Windows como archivo comprimido. This file is used during the automatic client application update.


#### Ubicación de los archivos web

If the server and/or client part of your double-clickable application is used as a Web server, the files and folders required by the server must be installed in specific locations. Estos elementos son los siguientes:

- archivos *cert.pem* y *key.pem* (opcional): etos archivos se utilizan para las conexiones SSL y por los comandos de encriptación de datos,
- Default Web root folder (WebFolder).

Los elementos deben ser instalados:
*   **en Windows**
    *   **Server application** - in the *Client Server executable\ \<ApplicationName>Server\Server Database* subfolder.
    *   **Client application** - in the *Client Server executable\ \<ApplicationName>Client* subfolder.

*   **en macOS**
    *   **Server application** - next to the *\<ApplicationName>Server* software package.
    *   **Client application** - next to the *\<ApplicationName>Client* software package.


### Embedding a single-user client application

4D allows you to embed a compiled structure in the Client application. This feature can be used, for example, to provide users with a "portal" application, that gives access to different server applications thanks to the `OPEN DATABASE` command executing a `.4dlink` file.

To enable this feature, add the `DatabaseToEmbedInClientWinFolder` and/or `DatabaseToEmbedInClientMacFolder` keys in the *buildApp* settings file. When one of these keys is present, the client application building process generates a single-user application: the compiled structure, instead of the *EnginedServer.4Dlink* file, is placed in the "Database" folder.

- If a default data folder exists in the single-user application, a licence is embedded.
- If no default data folder exists in the single-user application, it will be executed without data file and without licence.

El escenario básico es:

1. In the Build application dialog box, select the "Build compiled structure" option to produce a .4DZ or .4DC for the application to be used in single-user mode.
2. In the *buildApp.4DSettings* file of the client-server application, use following xml key(s) to indicate the path to the folder containing the compiled single user application:
    - `DatabaseToEmbedInClientWinFolder`
    - `DatabaseToEmbedInClientMacFolder`
3. Build the client-server application. This will have following effects:
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

On this tab, you set each [plug-in](Concepts/plug-ins.md) and each [component](Concepts/components.md) that you will use in your stand-alone or client/server application.

The page lists the elements loaded by the current 4D application:

![](assets/en/Project/buildapppluginsProj.png)

*    **Active** column - Indicates that the items will be integrated into the application package built. Todos los elementos están marcados por defecto. To exclude a plug-in or a component, deselect the check box next to it.



*   **Plugins and components** column - Displays the name of the plug-in/component.

*   **ID** column - Displays the plug-in/component's identification number (if any).

*   **Type** column - Indicates the type of item: plug-in or component.

If you want to integrate other plug-ins or components into the executable application, you just need to place them in a **PlugIns** or **Components** folder next to the 4D Volume Desktop application or next to the 4D Server application. The mechanism for copying the contents of the source application folder (see [Customizing the 4D Volume Desktop folder](#customizing-4d-volume-desktop-folder)) can be used to integrate any type of file into the executable application.

If there is a conflict between two different versions of the same plug-in (one loaded by 4D and the other located in the source application folder), priority goes to the plug-in installed in the 4D Volume Desktop/4D Server folder. However, if there are two instances of the same component, the application will not open.
> The use of plug-ins and/or components in a deployment version requires the necessary license numbers.






## Licenses & Certificate page

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
*   **Path** -  Location on disk

If a license is not valid, a message will warn you.

You can designate as many valid files as you want. When building an executable application, 4D will use the most appropriate license available.
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

Las [funciones de firma integradas](#os-x-signing-certificate) de 4D se han adaptado para cumplir con todos los requisitos de Apple para permitir el uso del servicio de notario de Apple. La notarización en sí debe ser realizada por el desarrollador y es independiente de 4D (tenga en cuenta también que requiere la instalación de Xcode). Please refer to [this 4D blog post](https://blog.4d.com/how-to-notarize-your-merged-4d-application/) that provides a step-by-step description of the notarization process.

For more information on the notarization concept, please refer to [this page on the Apple developer website](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).

## Customizing application icons

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
userPrefs:=Get 4D folder(Active 4D Folder)
```

The data file path is stored in a dedicated file, named *lastDataPath.xml*.

Thanks to this architecture, when you provide an update of your application, the local user data file (last data file used) is opened automatically at first launch.

This mechanism is usually suitable for standard deployments. However, for specific needs, for example if you duplicate your merged applications, you might want to change the way that the data file is linked to the application (described below).

#### Configuring the data linking mode

With your compiled applications, 4D automatically uses the last data file opened. By default, the path of the data file is stored in the application's user preferences folder and is linked to the **application name**.

This may be unsuitable if you want to duplicate a merged application intended to use different data files. Duplicated applications actually share the application's user preferences folder and thus, always use the same data file -- even if the data file is renamed, because the last file used for the application is opened.

4D therefore lets you link the data file path to the application path. En este caso, el archivo de datos se relacionará con una ruta específica y no será simplemente el último archivo abierto. You therefore link your data **by application path**.

This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).


*Duplication when data linked by application name:* ![](assets/en/Project/datalinking1.png)

*Duplication when data linked by application path:* ![](assets/en/Project/datalinking2.png)

You can select the data linking mode during the build application process. Puede:

- Use the [Application page](#application) or [Client/Server page](#client-server) of the Build Application dialog box.
- Use the **LastDataPathLookup** XML key (single-user application or server application).


### Defining a default data folder

4D allows you to define a default data file at the application building stage. Cuando la aplicación se lanza por primera vez, si no se encuentra ningún archivo de datos local (ver \[secuencia de lanzamiento descrita anteriormente\](#opening-the-data-file)), el archivo de datos por defecto se abre automáticamente y de forma silenciosa en modo de sólo lectura por 4D. This gives you better control over data file creation and/or opening when launching a merged application for the first time.

More specifically, the following cases are covered:

- Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.
- Allowing the distribution of merged applications with read-only data (for demo applications, for instance).


To define and use a default data file:

- You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the application project folder. This file must be provided along with all other necessary files, depending on the project configuration: index (.4DIndx), external Blobs, journal, etc. Es su responsabilidad proveer un archivo de datos válido por defecto. Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.
- When the application is built, the default data folder is integrated into the merged application. All files within this default data folder are also embedded.

The following graphic illustrates this feature:

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

The last used and validated server path is automatically saved in a file named "lastServer.xml" in the application's user preferences folder. This folder is stored at the following location:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
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
