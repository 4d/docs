---
id: building
title: Building a project package
---

4D Developer includes a final application builder to create a project package (final build). This builder simplifies the finalization and deployment process for 4D compiled applications. It automatically handles the specific features of different operating systems and facilitates the deployment of client-server applications.

The application builder allows you to:

*   Generar una base de datos compilada, sin código interpretado,
*   Build a stand-alone, double-clickable application, *i.e.*, merged with 4D Volume Desktop, the 4D database engine,
*   Generar diferentes aplicaciones a partir de la misma base de datos compilada mediante un proyecto XML,
*   Build homogeneous client-server applications,
*   Build client-server applications with automatic updating of client and server parts.
*   Save your build settings for future use (*Save settings* button).



## Build application overview

Building a project package can be carried out using:

- el comando [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html),
- or the [Build Application window](#application-builder).

To display the Build Application dialog, select **Design** > **Build Application...** from the menu bar.

![](assets/en/Project/buildappProj.png)

The Build Application dialog includes several pages that can be accessed using tabs:

![](assets/en/Project/appbuilderProj.png)


La generación de la base sólo puede efectuarse una vez compilada la base de datos. Si selecciona este comando sin haber compilado previamente la base de datos, o si el código compilado no se corresponde con el código interpretado, aparece una caja de diálogo de advertencia que indica que la base de datos debe ser (re)compilada.


### Build application settings

Cada parámetro de generación de la aplicación se almacena como una llave XML en el archivo de la aplicación llamada "buildApp.4DSettings", ubicado en la carpeta Settings de la base de datos.

Default parameters are used the first time the Build Application dialog box is used. The contents of the project file are updated, if necessary, when you click **Build** or **Save settings**. You can define several other XML settings file for the same project and employ them using the [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html) command.

XML keys provide additional options besides those displayed in the Build Application dialog box. The description of these keys are detailed in the [4D XML Keys BuildApplication](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) manual.

### Log file

Cuando se crea una aplicación, 4D genera un archivo de historial en la carpeta **Logs**. The log file stores the following information for each build:
- The start and end of building of targets,
- The name and full access path of the files generated,
- The date and time of the build,
- Todos los errores que se han producido.



## Application name and destination folder

![](assets/en/Project/buidappstructureProj.png)

Enter the name of the application in **Application Name**.

Specify the folder for the built application in **Destination Folder**. If the specified folder does not already exist, 4D will create a *Build* folder for you.



## Compiled structure page

This tab allows you to build a standard compiled structure file and/or a compiled component:

![](assets/en/Project/appbuilderProj.png)


### Build compiled structure

Genera una base de datos que sólo contiene código compilado.

Esta funcionalidad crea un archivo *.4dz* en una carpeta *Compiled Database*. Si ha llamado a su aplicación "MyProject", 4D creará:

*\<destination\>/Compiled Database/\<database name>/\MyProject.4dz*

> A .4dz file is essentially a zipped (packed) version of the project folder. Los archivos.4dz pueden ser utilizados por 4D Server, la licencia 4D Volume (aplicaciones fusionadas) y 4D Developer. The compact and optimized size of .4dz files makes project packages easy to deploy.


#### Include related folders

Cuando se marca esta opción, todas las carpetas relacionadas con la base de datos se copian en la carpeta Build como carpetas *Components* y *Resources*. Para más información sobre estas carpetas, consulte [Arquitectura de la base de datos](https://livedoc.4d.com/4D-Design-Reference-18/Managing-4D-databases/Description-of-4D-files.300-4575698.en.html#100374).


### Build component

Builds a compiled component from the structure.

A component is a standard 4D project in which specific functionalities have been developed. Una vez configurado e instalado el componente en otra base 4D (la base local), sus funcionalidades son accesibles desde la base local. Para más información sobre los componentes, consulte la documentación "Desarrollar e instalar componentes 4D ".
Si ha llamado a su aplicación, *MiComponente*, 4D creará una carpeta Components que contiene la carpeta *MiComponente.4dbase*: <p>*\<destination>/Components/name.4dbase/\<name>.4DZ*.

La carpeta *MyComponent.4dbase* contiene:
-   *MyComponent.4DZ* file
-   Una carpeta *Resources* - todos los recursos asociados se copian automáticamente en esta carpeta. Todas las otras carpetas de componentes y/o plugins no se copian (un componente no puede utilizar plugins u otros componentes).


## Página de aplicación

Esta pestaña le permite construir una versión autónoma y monopuesto de su aplicación:

![](assets/en/Project/standaloneProj.png)

### Crear una aplicación autónoma

Seleccionando la opción **Crear una aplicación autónoma** y haciendo clic en **Generar** se creará una aplicación autónoma (con doble clic) directamente desde el proyecto de la base de datos.

Los siguientes elementos son necesarios para la generación:
- 4D Volume Desktop (el motor de la base de datos 4D),
- an [licencia apropiada](#licenses)

En Windows, esta funcionalidad crea un archivo ejecutable (.exe). En macOS, se encarga de la creación de paquetes de software.

El principio consiste en fusionar el archivo 4D Volume Desktop con un archivo de estructura compilado. The functionality provided by the 4D Volume Desktop file is linked with the product offer to which you have subscribed. Para más información sobre este punto, consulte la documentación comercial y de [4D Store](http://www.4d.com/).

Puede definir un archivo de datos por defecto o permitir a los usuarios crear y utilizar su propio archivo de datos (consulte la sección [Gestión de archivos de datos en las aplicaciones finales](https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html)).

Es posible automatizar la actualización de las aplicaciones monopuesto fusionadas mediante una secuencia de comandos de lenguaje (consulte la sección [Actualización automática de aplicaciones servidor o monopuesto](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html).

#### Localización de 4D Volume Desktop

Para generar una aplicación autónoma, primero debe designar la carpeta que contiene el archivo 4D Volume Desktop:

*   *Windows* - la carpeta contiene los archivos 4D Volume Desktop.4DE, 4D Volume Desktop.RSR, así como varios archivos y carpetas necesarios para su funcionamiento. Estos elementos deben colocarse al mismo nivel que la carpeta seleccionada.
*   *macOS* - 4D Volume Desktop se provee en forma de un paquete de software estructurado que contiene varios archivos y carpetas genéricas.

Para seleccionar la carpeta de 4D Volume Desktop, haga clic en el botón **[...]**. Aparece una caja de diálogo que le permite designar la carpeta (Windows) o el paquete (macOS) de 4D Volume Desktop.

Una vez seleccionada la carpeta, se muestra su nombre de ruta completo y, si realmente contiene 4D Volume Desktop, se activa la opción de construir una aplicación ejecutable.

> El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition. Por ejemplo, si utiliza 4D Developer v18, debe seleccionar un 4D Volume Desktop v18.

#### Modo de vinculo de datos

Esta opción permite elegir el modo de vinculación entre la aplicación fusionada y el archivo de datos local. Existen dos modos de vinculación de datos:

*   **Por nombre de la aplicación** (por defecto) - La aplicación 4D abre automáticamente el último archivo de datos abierto correspondiente al archivo de estructura. This allows you to move the application package freely on the disk. Esta opción debe utilizarse generalmente para las aplicaciones fusionadas, a menos que necesite específicamente duplicar la aplicación.

*   **Ruta de la aplicación** - La aplicación 4D fusionada analizará el archivo *lastDataPath. xml* e intentará abrir el archivo de datos con un atributo "executablePath" que coincida con la ruta completa de la aplicación. If such an entry is found, its corresponding data file (defined through its "dataFilePath" attribute) is opened. En caso contrario, se abrirá el último archivo de datos abierto (modo por defecto).

Para más información sobre el modo de vinculación de datos, consulte la sección [Último archivo de datos abierto](#último-archivo-de-datos-abierto).


#### Archivos generados

Cuando se hace clic en el botón **Construir**, 4D crea automáticamente una carpeta **Aplicación final** en la **Carpeta de destino** especificada. Dentro de la carpeta Final Application hay una subcarpeta con el nombre de la aplicación especificada en ella.

Si ha especificado "MyProject" como nombre de la aplicación, encontrará los siguientes archivos en esta subcarpeta (también conocida como MyProject):

*   *Windows*
    *   MyProject.exe - Su ejecutable y un MyProject.rsr (los recursos de la aplicación)
    *   Carpeta 4D Extensions, carpeta Resources, varias librerías (DLL), carpeta Native Components, carpeta SASL Plugins - Archivos necesarios para el funcionamiento de la aplicación
    *   Carpeta Database - Incluye una carpeta Resources y el archivo MyProject.4DZ. Constituyen la estructura compilada de la base, así como la carpeta Resources. **Nota**: esta carpeta también contiene la carpeta *Default Data*, si se ha definido (ver [Gestión del archivos de datos en aplicaciones finales](#data-file-management-in-final-applicatons).
    *   (Opcional) Carpeta Components y/o carpeta Plugins - contienen todos los componentes y/o archivos plug-in incluidos en la base. Para más información al respecto, consulte la sección [Plugins y componentes](#plugins-and-components).
    *   Carpeta Licenses - Un archivo XML de números de licencia integrados en la aplicación. Para más información al respecto, consulte la sección [Licencias y certificados](#licenses-and-certificate).
    *   Elementos adicionales añadidos a la carpeta 4D Volume Desktop, si los hay (ver [Personalización de la carpeta 4D Volume Desktop](#customizing-4d-volume-desktop-folder)).

    Todos estos elementos deben mantenerse en la misma carpeta para que el ejecutable funcione.</ul>

*   *macOS*
    -   Un paquete de software llamado MyProject.app que contiene tu aplicación y todos los elementos necesarios para su funcionamiento, incluyendo los plug-ins, componentes y licencias. For more information about integrating plug-ins and components, refer to the [Plugins and components](#plugins-and-components) section. For more information about integrating licenses, refer to the [Licenses & Certificate](#licenses-and-certificate) section. **Nota**: en macOS, el comando [Archivo de aplicación](https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html) del lenguaje 4D devuelve el nombre de la ruta del archivo ApplicationName (ubicado en la carpeta Contents:macOS del paquete de software) y no el del archivo .comp (carpeta Contents:Resources del paquete de software).


#### Personalización de la carpeta 4D Volume Desktop

Cuando se construye una aplicación independiente, 4D copia el contenido de la carpeta 4D Volume Desktop en la carpeta Destination > *Final Application*. You're then able to customize the contents of the original 4D Volume Desktop folder according to your needs. Puede, por ejemplo:

*   Instalar una versión de 4D Volume Desktop correspondiente a un lenguaje específico;
*   Añadir una carpeta *PlugIns* personalizada;
*   Personaliza el contenido de la carpeta *Resources*.
> En macOS, 4D Volume Desktop se proporciona en forma de paquete de software. Para modificarlo, primero hay que desplegar su contenido (**Control+clic** en el icono).


#### Localización de los archivos web

Si su aplicación ejecutable se utiliza como servidor web, los archivos y carpetas requeridos por el servidor deben instalarse en ubicaciones específicas. Estos elementos son los siguientes:

*   *archivoscert.pem* y *key.pem* (opcional): Estos archivos se utilizan para las conexiones SSL y por los comandos de encriptación de datos,.
* Marcador="*" level="0" spaces="0" spaces-after-marker="2"> carpeta raíz de la web por defecto..

Los elementos deben estar instalados:

- **en Windows**: en la subcarpeta *Aplicación final*..
- **en macOS**: junto al paquete de software *MyProject.app*.





## Página de cliente/servidor

En esta pestaña se pueden construir aplicaciones cliente-servidor personalizadas, homogéneas, multiplataforma y con opción de actualización automática.

![](assets/en/Project/buildappCSProj.png)

### ¿Qué es una aplicación Cliente/Servidor?

Una aplicación cliente/servidor surge de la combinación de tres elementos:

- Una base de datos compilada en 4D,
- La aplicación 4D Server,
- Marcador="-" level="0" spaces="0" spaces-after-marker="0">La aplicación 4D Volume Desktop (macOS y/o Windows)..

Una vez construida, una aplicación cliente/servidor se compone de dos partes personalizadas: la parte Servidor (única) y la parte Cliente (para instalar en cada máquina cliente).

También se personaliza la aplicación cliente/servidor y se simplifica su manejo:

- Para lanzar la parte del servidor, el usuario simplemente hace doble clic en la aplicación del servidor. No es necesario seleccionar la base de datos.
- Para lanzar la parte cliente, el usuario simplemente hace doble clic en la aplicación cliente, que se conecta directamente a la aplicación servidor. No es necesario elegir una base de datos en una caja de diálogo de conexión. The client targets the server either using its name, when the client and server are on the same sub-network, or using its IP address, which is set using the `IPAddress` XML key in the buildapp.4DSettings file. If the connection fails, [specific alternative mechanisms can be implemented](#management-of-client-connections). You can "force" the display of the standard connection dialog box by holding down the **Option** (macOS) or **Alt** (Windows) key while launching the client application. Only the client portion can connect to the corresponding server portion. Si un usuario intenta conectarse a la parte servidor utilizando una aplicación 4D estándar, se devuelve un mensaje de error y la conexión es imposible.
- Se puede configurar una aplicación cliente/servidor para que la parte cliente [se actualice automáticamente a través de la red](#copy-of-client-applications-in-the-server-application).
- También es posible automatizar la actualización de la parte servidor mediante el uso de una secuencia de comandos del lenguaje ([SET UPDATE FOLDER](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html) y [RESTART 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html)).



### Construir aplicación de servidor

Marque esta opción para generar la parte del servidor de su aplicación durante la fase de construcción. You must designate the location on your disk of the 4D Server application to be used. Este 4D Server debe corresponder a la plataforma actual (que también será la plataforma de la aplicación del servidor).

#### Ubicación de 4D Server

Haga clic en el botón **[...]** y utilice la caja de diálogo *Buscar carpeta* para localizar la aplicación 4D Server. En macOS, debe seleccionar el paquete de 4D Server directamente.

#### Versión actual

Se utiliza para indicar el número de versión actual de la aplicación generada. You may then accept or reject connections by client applications according to their version number. El intervalo de compatibilidad de las aplicaciones clientes y servidor se define mediante [llaves XML](#build-application-settings)).

#### Modo de enlace de datos

Esta opción permite elegir el modo de vinculación entre la aplicación fusionada y el archivo de datos local. Existen dos modos de vinculación de datos:

*   **Por nombre de la aplicación** (por defecto) - La aplicación 4D abre automáticamente el último archivo de datos abierto correspondiente al archivo de estructura. This allows you to move the application package freely on the disk. Esta opción debe utilizarse generalmente para las aplicaciones fusionadas, a menos que necesite específicamente duplicar la aplicación.

*   **Ruta de la aplicación** - La aplicación 4D fusionada analizará el archivo *lastDataPath. xml* e intentará abrir el archivo de datos con un atributo "executablePath" que coincida con la ruta completa de la aplicación. If such an entry is found, its corresponding data file (defined through its "dataFilePath" attribute) is opened. En caso contrario, se abrirá el último archivo de datos abierto (modo por defecto).

Para más información sobre el modo de vinculación de datos, consulte la sección [Último archivo de datos abierto.](#last-data-file-opened)


### Construir aplicación cliente

Marcando esta opción se genera la parte cliente de su aplicación durante la fase de construcción.

#### 4D Volume Desktop

Debe designar la ubicación en su disco de la aplicación 4D Volume Desktop a utilizar. This 4D Volume Desktop must correspond to the current platform (which will also be the platform of the client application). If you want to build a client application for a “concurrent” platform, you must carry out an additional build operation using a 4D application running on that platform. This is only necessary for the initial version of the client application since subsequent updates can be handled directly on the same platform using the automatic update mechanism. For more information about this point, see [Customizing 4D Server and/or 4D Client folders](#customizing-4d-server-and-or-4d-client-folders).

> The 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v18, you must select a 4D Volume Desktop v18.

If you want the client application to connect to the server using a specific address (other than the server name published on the sub-network), you must use the `IPAddress` XML key in the buildapp.4DSettings file. For more information about this file, refer to the description of the `BUILD APPLICATION` command. You can also implement specific mechanisms in the event of a connection failure. The different scenarios proposed are described in the [Management of connections by client applications](#management-of-client-connections) paragraph.

#### Copy of client applications in the server application

The options of this area to set up the mechanism for updating the client parts of your client/server applications using the network each time a new version of the application is generated.

- **Allow automatic update of Windows client application** - Check these options so that your Windows client/server application can take advantage of the automatic update mechanism for clients via the network.
- **Allow automatic update of Macintosh client application** - Check these options so that your Macintosh client/server application can take advantage of the automatic update mechanism for clients via the network.

*   **Allow automatic update of Macintosh client application** - If you want to create a cross-platform client application, you must designate the location on your disk of the 4D Volume Desktop application that corresponds to the “concurrent” platform of the build platform.

    For example, if you build your application in Windows, you must use the **[...]** button to designate the 4D Volume Desktop macOS application (provided as a package).



#### Displaying update notification

The client application update notification is carried out automatically following the server application update.

It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the **Upgrade4DClient** subfolder of the **ApplicationName** Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a .*4darchive* update file is available for each platform:

To trigger client application update notifications, simply replace the old version of the server application with the new one and then execute it. The rest of the process is automatic.

On the client side, when the “old” client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. The user can either update their version or cancel the dialog box.

*   If the user clicks **OK**, the new version is downloaded to the client machine over the network. Once the download is complete, the old client application is closed and the new version is launched and connects to the server. The old version of the application is then placed in the machine’s recycle bin.
*   If the user clicks **Cancel**, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. Otherwise (by default), the connection is established.

#### Forcing automatic updates

In some cases, you may want to prevent client applications from being able to cancel the update download. For example, if you used a new version of the 4D Server source application, the new version of the client application must absolutely be installed on each client machine.

To force the update, simply exclude the current version number of client applications (X-1 and earlier) in the version number range compatible with the server application. In this case, the update mechanism will not allow non-updated client applications to connect. For example, if the new version of the client-server application is 6, you can stipulate that any client application with a version number lower than 6 will not be allowed to connect.

The [current version number](build-server-application) is set on the Client/Server page of the Build Application dialog box. The intervals of authorized numbers are set in the application project using specific [XML keys](#build-application-settings).


#### Update Error

If 4D cannot carry out the update of the client application, the client machine displays the following error message: “The update of the client application failed. The application is now going to quit.”

There are many possible causes for this error. When you get this message, it is advisable to check the following parameters first off:

*   **Pathnames** - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example *ClientMacFolderToWin*). More particularly, check the pathnames to the versions of 4D Volume Desktop.
*   **Read/write privileges** - On the client machine, check that the current user has write access rights for the client application update.


### Generated files

Once a client/server application is built, you will find a new folder in the destination folder named **Client Server executable**. This folder contains two subfolders, *\<ApplicationName>Client* and *\<ApplicationName>Server*.
> These folders are not generated if an error occurs. In this case, open the [log file](#log-file) in order to find out the cause of the error.

The *\<ApplicationName>Client* folder contains the client portion of the application corresponding to the execution platform of the application builder. This folder must be installed on each client machine. The *\<ApplicationName>Server* folder contains the server portion of the application.

The contents of these folders vary depending on the current platform:

*   *Windows* - Each folder contains the application executable file, named *\<ApplicationName>Client.exe* for the client part and *\<ApplicationName>Server.exe* for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.
*   *macOS* - Each folder contains only the application package, named \<ApplicationName> Client for the client part and \<ApplicationName> Server for the server part. Each package contains all the necessary items for the application to work. Under macOS, launch a package by double-clicking it.

    > The macOS packages built contain the same items as the Windows subfolders. You can display their contents (**Control+click** on the icon) in order to be able to modify them.

If you checked the “Allow automatic update of client application” option, an additional subfolder called *Upgrade4DClient* is added in the *\<ApplicationName>Server* folder/package. This subfolder contains the client application in macOS and/or Windows format as a compressed file. This file is used during the automatic client application update.

#### Customizing 4D Volume Desktop folder

When building a double-clickable application, 4D copies the contents of the 4D Volume Desktop folder into the Final Application subfolder of the destination folder. You are then able to customize the contents of the original 4D Volume Desktop folder according to your needs. You can, for instance:

- Install a 4D Volume Desktop version corresponding to a specific language;
- Add a custom PlugIns folder;
- Customize the contents of the Resources folder.

#### Location of Web files

If the server and/or client part of your double-clickable application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:

- *cert.pem* and *key.pem* files (optional): These files are used for SSL connections and by data encryption commands,
- Default Web root folder (WebFolder).

Items must be installed:
*   **on Windows**
    *   **Server application** - in the *Client Server executable\ \<ApplicationName>Server\Server Database* subfolder.
    *   **Client application** - in the *Client Server executable\ \<ApplicationName>Client* subfolder.

*   **on macOS**
    *   **Server application** - next to the *\<ApplicationName>Server* software package.
    *   **Client application** - next to the *\<ApplicationName>Client* software package.





## Plugins & components page

On this tab, you set each [plug-in](Concepts/plug-ins.md) and each [component](Concepts/components.md) that you will use in your stand-alone or client/server application.

The page lists the elements loaded by the current 4D application:

![](assets/en/Project/buildapppluginsProj.png)

*    **Active** column - Indicates that the items will be integrated into the application package built. All the items are checked by default. To exclude a plug-in or a component, deselect the check box next to it.

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


![](assets/en/Project/buildapplicenseProj.png)

### Licenses

This tab displays the list of available deployment licenses that you can integrate into your application. By default, the list is empty. You must explicitly add your *4D Developer Professional* license as well as each *4D Desktop Volume* license to be used in the application built. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.

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


### OS X signing certificate

The application builder can sign merged 4D applications under macOS (single-user applications, 4D Server and client parts under macOS). Signing an application authorizes it to be executed using the Gatekeeper functionality of macOS when the "Mac App Store and identified Developers" option is selected (see "About Gatekeeper" below).

- Check the **Sign application** option to include certification in the application builder procedure for OS X. 4D will check the availability of elements required for certification when the build occurs:

![](assets/en/Project/buildapposxcertProj.png)

This option is displayed under both Windows and macOS, but it is only taken into account for macOS versions.

*   **Name of certificate** - Enter the name of your developer certificate validated by Apple in this entry area. The certificate name is usually the name of the certificate in the Keychain Access utility (part in red in the following example):

![](assets/en/Project/certificate.png)

To obtain a developer certificate from Apple, Inc., you can use the commands of the Keychain Access menu or go here: [http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html).
> This certificate requires the presence of the Apple codesign utility, which is provided by default and usually located in the “/usr/bin/” folder. If an error occurs, make sure that this utility is present on your disk.


#### About Gatekeeper

Gatekeeper is a security feature of OS X that controls the execution of applications downloaded from the Internet. If a downloaded application does not come from the Apple Store or is not signed, it is rejected and cannot be launched.

The **Sign application** option of the 4D application builder lets you generate applications that are compatible with this option by default.


#### About Notarization

Application notarization is highly recommended by Apple as of macOS 10.14.5 (Mojave) and 10.15 (Catalina), since non-notarized applications deployed via the internet are blocked by default.

In 4D v18, the [built-in signing features](#os-x-signing-certificate) have been updated to meet all of Apple's requirements to allow using the Apple notary service. The notarization itself must be conducted by the developer and is independent from 4D (note also that it requires installing Xcode). Please refer to [this 4D blog post](https://blog.4d.com/how-to-notarize-your-merged-4d-application/) that provides a step-by-step description of the notarization process.

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



## Management of data file(s)

### Opening the data file

When a user launches a merged application or an update (single-user or client/server applications), 4D tries to select a valid data file. Several locations are examined by the application successively.

The opening sequence for launching a merged application is:

1. 4D tries to open the last data file opened, [as described below](#last-data-file-opened) (not applicable during initial launch).
2. If not found, 4D tries to open the data file in a default data folder next to the .4DZ file in read-only mode.
3. If not found, 4D tries to open the standard default data file (same name and same location as the .4DZ file).
4. If not found, 4D displays a standard "Open data file" dialog box.


### Last data file opened

#### Path of last data file
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

4D therefore lets you link the data file path to the application path. In this case, the data file will be linked using a specific path and will not just be the last file opened. You therefore link your data **by application path**.

This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).


*Duplication when data linked by application name:* ![](assets/en/Project/datalinking1.png)

*Duplication when data linked by application path:* ![](assets/en/Project/datalinking2.png)

You can select the data linking mode during the build application process. You can either:

- Use the [Application page](#application) or [Client/Server page](#client-server) of the Build Application dialog box.
- Use the **LastDataPathLookup** XML key (single-user application or server application).


### Defining a default data folder

4D allows you to define a default data file at the application building stage. When the application is launched for the first time, if no local data file is found (see [opening sequence described above](#opening-the-data-file)), the default data file is automatically opened silently in read-only mode by 4D. This gives you better control over data file creation and/or opening when launching a merged application for the first time.

More specifically, the following cases are covered:

- Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.
- Allowing the distribution of merged applications with read-only data (for demo applications, for instance).


To define and use a default data file:

- You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the database project folder. This file must be provided along with all other necessary files, depending on the database configuration: index (.4DIndx), external Blobs, journal, etc. It is your responsibility to provide a valid default data file. Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.
- When the application is built, the default data folder is integrated into the merged application. All files within this default data folder are also embedded.

The following graphic illustrates this feature:

![](assets/en/Project/DefaultData.png)

When the default data file is detected at first launch, it is silently opened in read-only mode, thus allowing you to execute any custom operations that do not modify the data file itself.


## Management of client connection(s)

The management of connections by client applications covers the mechanisms by which a merged client application connects to the target server, once it is in its production environment.

### Connection scenario

The connection procedure for merged client applications supports cases where the dedicated server is not available. The startup scenario for a 4D client application is the following:

- The client application tries to connect to the server using the discovery service (based upon the server name, broadcasted on the same subnet).  
  OR  
  If valid connection information is stored in the "EnginedServer.4DLink" file within the client application, the client application tries to connect to the specified server address.
- If this fails, the client application tries to connect to the server using information stored in the application's user preferences folder ("lastServer.xml" file, see last step).
- If this fails, the client application displays a connection error dialog box.
    - If the user clicks on the **Select...** button (when allowed by the 4D developer at the build step, see below), the standard "Server connection" dialog box is displayed.
    - If the user clicks on the **Quit** button, the client application quits.
- If the connection is successful, the client application saves this connection information in the application's user preferences folder for future use.

### Storing the last server path

The last used and validated server path is automatically saved in a file named "lastServer.xml" in the application's user preferences folder. This folder is stored at the following location:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

This mechanism addresses the case where the primary targeted server is temporary unavailable for some reason (maintenance mode for example). When this case occurs for the first time, the server selection dialog box is displayed (if allowed, see below) and the user can manually select an alternate server, whose path is then saved if the connection is successful. Any subsequent unavailability would be handled automatically through the "lastServer.xml" path information.

> - When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) key in the "BuildApp.4DSettings" file. The mechanism addresses cases of temporary unavailability.  
> - Pressing the **Alt/Option** key at startup to display the server selection dialog box is still supported in all cases.



### Availability of the server selection dialog box in case of error

You can choose whether or not to display the standard server selection dialog box on merged client applications when the server cannot be reached. The configuration depends on the value of the [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) XML key on the machine where the application was built:

- **Display of an error message with no access possible to the server selection dialog box**. Default operation. The application can only quit.  
  `ServerSelectionAllowed`: **False** or key omitted ![](assets/en/Project/connect1.png)

- **Display of an error message with access to the server selection dialog box possible**. The user can access the server selection window by clicking on the **Select...** button.   
  `ServerSelectionAllowed`: **True** ![](assets/en/Project/connect2.png) ![](assets/en/Project/connect3.png)
