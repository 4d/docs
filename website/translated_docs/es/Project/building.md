---
id: building
title: Construir un paquete proyecto
---

4D Developer incluye un generador de aplicaciones finales para crear un paquete de proyecto (versión final). Este generador simplifica el proceso de finalización y despliegue de las aplicaciones compiladas en 4D. Maneja automáticamente las funcionalidades específicas de los distintos sistemas operativos y facilita el despliegue de aplicaciones cliente-servidor.

El generador de aplicaciones le permite:

*   Generar una base de datos compilada, sin código interpretado,
*   Generar una aplicación autónoma ejecutable, *es decir*, fusionada con 4D Volume Desktop, el motor de base de datos 4D,
*   Generar diferentes aplicaciones a partir de la misma base de datos compilada mediante un proyecto XML,
*   Generar aplicaciones cliente-servidor homogéneas,
*   Generar aplicaciones cliente-servidor con actualización automática de los componentes del cliente y del servidor.
*   Guardar sus parámetros de generación para su uso futuro (botón *Guardar los parámetros*).



## Vista general del generador de aplicaciones

Generar un paquete de proyecto puede realizarse utilizando:

- el comando [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html),
- o la [Ventana Generador de aplicaciones](#application-builder).

Para mostrar la caja de diálogo Generar la aplicación, seleccione **Diseño** > **Generar la aplicación...** en la barra de menús.

![](assets/en/Project/buildappProj.png)

La caja de diálogo del generador de aplicaciones incluye varias páginas a las que se puede acceder mediante pestañas:

![](assets/en/Project/appbuilderProj.png)


La generación de la base sólo puede efectuarse una vez compilada la base de datos. Si selecciona este comando sin haber compilado previamente la base de datos, o si el código compilado no se corresponde con el código interpretado, aparece una caja de diálogo de advertencia que indica que la base de datos debe ser (re)compilada.


### Parámetros del generador de aplicaciones

Cada parámetro de generación de la aplicación se almacena como una llave XML en el archivo de la aplicación llamada "buildApp.4DSettings", ubicado en la carpeta Settings de la base de datos.

Los parámetros por defecto se utilizan la primera vez que se utiliza la caja de diálogo del Generador de aplicaciones. El contenido del archivo proyecto se actualiza, si es necesario, al hacer clic en **Construir** o **Guardar los parámetros**. Puede definir varios archivos de parámetros XML para el mismo proyecto y utilizarlos con el comando [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html).

Las llaves XML ofrecen opciones adicionales a las que se muestran en la caja de diálogo del Generador de aplicaciones. La descripción de estas llaves se detalla en el manual [4D XML Keys BuildApplication](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html).

### Archivo de historial

Cuando se crea una aplicación, 4D genera un archivo de historial en la carpeta **Logs**. El archivo de historial almacena la siguiente información para cada generación:
- El inicio y el fin de la generación de objetivos,
- El nombre y la ruta de acceso completa de los archivos generados,
- La fecha y la hora de la generación,
- Todos los errores que se han producido.



## Nombre de la aplicación y carpeta de destino

![](assets/en/Project/buidappstructureProj.png)

Introduzca el nombre de la aplicación en **Nombre de la aplicación**.

Especifique la carpeta para la aplicación generada en la **Carpeta de destino**. Si la carpeta especificada no existe todavía, 4D creará una carpeta *Build*.



## Página de estructura compilada

Esta pestaña le permite generar un archivo de estructura compilado estándar y/o un componente compilado:

![](assets/en/Project/appbuilderProj.png)


### Generar una estructura compilada

Genera una base de datos que sólo contiene código compilado.

Esta funcionalidad crea un archivo *.4dz* en una carpeta *Compiled Database*. Si ha llamado a su aplicación "MyProject", 4D creará:

*\<destination\>/Compiled Database/\<database name>/\MyProject.4dz*

> Un archivo .4dz es esencialmente una versión comprimida (empaquetada) de la carpeta del proyecto. Los archivos.4dz pueden ser utilizados por 4D Server, la licencia 4D Volume (aplicaciones fusionadas) y 4D Developer. El tamaño compacto y optimizado de los archivos .4dz hace que los paquetes de proyectos sean fáciles de desplegar.


#### Incluir las carpetas asociadas

Cuando se marca esta opción, todas las carpetas relacionadas con la base de datos se copian en la carpeta Build como carpetas *Components* y *Resources*. Para más información sobre estas carpetas, consulte [Arquitectura de la base de datos](https://livedoc.4d.com/4D-Design-Reference-18/Managing-4D-databases/Description-of-4D-files.300-4575698.en.html#100374).


### Generar un componente

Genera un componente compilado a partir de la estructura.

Un componente es un proyecto estándar 4D en el que se han desarrollado funcionalidades específicas. Una vez configurado e instalado el componente en otra base 4D (la base local), sus funcionalidades son accesibles desde la base local. Para más información sobre los componentes, consulte la documentación "Desarrollar e instalar componentes 4D ".
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

El principio consiste en fusionar el archivo 4D Volume Desktop con un archivo de estructura compilado. Las funcionalidades ofrecidas por el archivo 4D Volume Desktop están relacionadas con la oferta de productos a la que se ha suscrito. Para más información sobre este punto, consulte la documentación comercial y de [4D Store](http://www.4d.com/).

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

*   **Por nombre de la aplicación** (por defecto) - La aplicación 4D abre automáticamente el último archivo de datos abierto correspondiente al archivo de estructura. Esto le permite mover el paquete de aplicaciones libremente en el disco. Esta opción debe utilizarse generalmente para las aplicaciones fusionadas, a menos que necesite específicamente duplicar la aplicación.

*   **Ruta de la aplicación** - La aplicación 4D fusionada analizará el archivo *lastDataPath. xml* e intentará abrir el archivo de datos con un atributo "executablePath" que coincida con la ruta completa de la aplicación. Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath"). En caso contrario, se abrirá el último archivo de datos abierto (modo por defecto).

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
    -   Un paquete de software llamado MyProject.app que contiene tu aplicación y todos los elementos necesarios para su funcionamiento, incluyendo los plug-ins, componentes y licencias. Para más información sobre la integración de plug-ins y componentes, consulte la sección [Plugins y componentes](#plugins-and-components). Para obtener más información sobre la integración de licencias, consulte la sección [Licencias y certificados](#licenses-and-certificate). **Nota**: en macOS, el comando [Archivo de aplicación](https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html) del lenguaje 4D devuelve el nombre de la ruta del archivo ApplicationName (ubicado en la carpeta Contents:macOS del paquete de software) y no el del archivo .comp (carpeta Contents:Resources del paquete de software).


#### Personalización de la carpeta 4D Volume Desktop

Cuando se construye una aplicación independiente, 4D copia el contenido de la carpeta 4D Volume Desktop en la carpeta Destination > *Final Application*. A continuación, podrá personalizar el contenido de la carpeta 4D Volume Desktop original según sus necesidades. Puede, por ejemplo:

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
- Para lanzar la parte cliente, el usuario simplemente hace doble clic en la aplicación cliente, que se conecta directamente a la aplicación servidor. No es necesario elegir una base de datos en una caja de diálogo de conexión. El cliente se dirige al servidor usando su nombre, cuando el cliente y el servidor están en la misma subred, o utilizando su dirección IP, que se define utilizando la llave XML `IPAddress` en el archivo buildapp.4DSettings. Si la conexión falla, [se pueden implementar mecanismos alternativos específicos](#management-of-client-connections). Puede "forzar" la visualización de la caja de diálogo de conexión estándar presionando la tecla **Opción** (macOS) o **Alt** (Windows) mientras inicia la aplicación cliente. Sólo la parte cliente puede conectarse a la parte del servidor correspondiente. Si un usuario intenta conectarse a la parte servidor utilizando una aplicación 4D estándar, se devuelve un mensaje de error y la conexión es imposible.
- Se puede configurar una aplicación cliente/servidor para que la parte cliente [se actualice automáticamente a través de la red](#copy-of-client-applications-in-the-server-application).
- También es posible automatizar la actualización de la parte servidor mediante el uso de una secuencia de comandos del lenguaje ([SET UPDATE FOLDER](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html) y [RESTART 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html)).



### Construir aplicación de servidor

Marque esta opción para generar la parte del servidor de su aplicación durante la fase de construcción. Debe designar la ubicación en su disco de la aplicación 4D Server que va a utilizar. Este 4D Server debe corresponder a la plataforma actual (que también será la plataforma de la aplicación del servidor).

#### Ubicación de 4D Server

Haga clic en el botón **[...]** y utilice la caja de diálogo *Buscar carpeta* para localizar la aplicación 4D Server. En macOS, debe seleccionar el paquete de 4D Server directamente.

#### Versión actual

Se utiliza para indicar el número de versión actual de la aplicación generada. A continuación, podrá aceptar o rechazar las conexiones de las aplicaciones cliente en función de su número de versión. El intervalo de compatibilidad de las aplicaciones clientes y servidor se define mediante [llaves XML](#build-application-settings)).

#### Modo de enlace de datos

Esta opción permite elegir el modo de vinculación entre la aplicación fusionada y el archivo de datos local. Existen dos modos de vinculación de datos:

*   **Por nombre de la aplicación** (por defecto) - La aplicación 4D abre automáticamente el último archivo de datos abierto correspondiente al archivo de estructura. Esto le permite mover el paquete de aplicaciones libremente en el disco. Esta opción debe utilizarse generalmente para las aplicaciones fusionadas, a menos que necesite específicamente duplicar la aplicación.

*   **Ruta de la aplicación** - La aplicación 4D fusionada analizará el archivo *lastDataPath. xml* e intentará abrir el archivo de datos con un atributo "executablePath" que coincida con la ruta completa de la aplicación. Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath"). En caso contrario, se abrirá el último archivo de datos abierto (modo por defecto).

Para más información sobre el modo de vinculación de datos, consulte la sección [Último archivo de datos abierto.](#last-data-file-opened)


### Construir aplicación cliente

Marcando esta opción se genera la parte cliente de su aplicación durante la fase de construcción.

#### 4D Volume Desktop

Debe designar la ubicación en su disco de la aplicación 4D Volume Desktop a utilizar. Este 4D Volume Desktop debe corresponder a la plataforma actual (que será también la plataforma de la aplicación cliente). Si quiere generar una versión de la aplicación cliente para la plataforma "concurrente", debe realizar una operación de generación adicional utilizando una aplicación 4D que se ejecute en esa plataforma. Esto sólo es necesario para la versión inicial de la aplicación cliente, ya que las actualizaciones posteriores se pueden gestionar directamente en la misma plataforma utilizando el mecanismo de actualización automática. Para más información sobre este punto, consulte [Personalizar las carpetas 4D Server y/o 4D Client](#customizing-4d-server-and-or-4d-client-folders).

> El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition. Por ejemplo, si utiliza 4D Developer v18, debe seleccionar un 4D Volume Desktop v18.

Si desea que la aplicación cliente se conecte al servidor utilizando una dirección específica (distinta del nombre del servidor publicado en la subred), debe utilizar la llave XML `IPAddress` en el archivo buildapp.4DSettings. Para más información sobre este archivo, consulte la descripción del comando `BUILD APPLICATION`. También puede implementar mecanismos específicos en caso de fallo de la conexión. Los diferentes escenarios propuestos se describen en el párrafo [Gestión de las conexiones para las aplicaciones clientes](#management-of-client-connections).

#### Copia de las aplicaciones clientes en la aplicación servidor

Las opciones de esta área para configurar el mecanismo de actualización de las partes clientes de sus aplicaciones cliente/servidor utilizando la red cada vez que se genera una nueva versión de la aplicación.

- **Permitir la actualización automática de la aplicación cliente Windows** - Marque estas opciones para que su aplicación cliente/servidor Windows pueda aprovechar el mecanismo de actualización automática de los clientes a través de la red.
- **Permitir la actualización automática de la aplicación cliente Macintosh** - Marque estas opciones para que su aplicación cliente/servidor Macintosh pueda aprovechar el mecanismo de actualización automática para clientes a través de la red.

*   **Permitir la actualización automática de la aplicación cliente Macintosh** - Si desea crear una aplicación cliente multiplataforma, debe designar la ubicación en su disco de la aplicación 4D Volume Desktop que corresponde a la plataforma "concurrente" de la plataforma de construcción.

    Por ejemplo, si construye su aplicación en Windows, debe utilizar el botón **[...]** para designar la aplicación 4D Volume Desktop macOS (suministrada como paquete).



#### Mostrar la notificación de actualización

La notificación de actualización de la aplicación cliente se realiza automáticamente tras la actualización de la aplicación servidor.

Funciona de la siguiente manera: cuando se construye una nueva versión de la aplicación cliente/servidor utilizando el generador de aplicaciones, la nueva parte cliente se copia como un archivo comprimido en la subcarpeta **Upgrade4DClient** de la carpeta Server **ApplicationName** (en macOS, estas carpetas se incluyen en el paquete servidor). Si ha seguido el proceso de generación de una aplicación cliente multiplataforma, un archivo *4darchive* de actualización está disponible para cada plataforma:

Para activar las notificaciones de actualización de la aplicación cliente, basta con sustituir la versión antigua de la aplicación servidor por la nueva y ejecutarla. El resto del proceso es automático.<p

Del lado del cliente, cuando la aplicación cliente "antigua" intenta conectarse a la aplicación servidor actualizada, se muestra una caja de diálogo en la máquina cliente, indicando que hay una nueva versión disponible. El usuario puede actualizar su versión o cancelar la caja de diálogo.

*   Si el usuario hace clic en **Aceptar**, la nueva versión se descarga en el equipo cliente a través de la red. Una vez finalizada la descarga, se cierra la aplicación cliente antigua y se lanza la nueva versión, que se conecta al servidor. La versión antigua de la aplicación se pone entonces en la papelera de reciclaje de la máquina.
*   Si el usuario hace clic en **Cancelar**, la actualización se cancela; si la versión antigua de la aplicación cliente no está en el rango de versiones aceptadas por el servidor (consulte el siguiente párrafo), la aplicación se cierra y la conexión es imposible. En caso contrario (por defecto), se establece la conexión.

#### Forzar las actualizaciones automáticas

En algunos casos, es posible que desee evitar que las aplicaciones cliente puedan cancelar la descarga de actualizaciones. Por ejemplo, si ha utilizado una nueva versión de la aplicación fuente 4D Server, la nueva versión de la aplicación cliente debe instalarse absolutamente en cada máquina cliente.

Para forzar la actualización, simplemente excluya el número de versión actual de las aplicaciones clientes (X-1 y anteriores) en el rango de número de versión compatible con la aplicación servidor. En este caso, el mecanismo de actualización no permitirá que las aplicaciones cliente no actualizadas se conecten. Por ejemplo, si la nueva versión de la aplicación cliente-servidor es la 6, puede estipular que toda aplicación cliente con un número de versión inferior a la 6 no podrá conectarse.

El [número de versión actual](build-server-application) se define en la página Cliente/Servidor del generador de la aplicación. Los intervalos de los números autorizados se definen en el proyecto de la aplicación mediante unas llaves [XML](#build-application-settings) específicas.


#### Error de actualización

Si 4D no puede realizar la actualización de la aplicación cliente, la máquina cliente muestra el siguiente mensaje de error: "La actualización de la aplicación cliente ha fallado. La aplicación va a cerrarse ahora."

Hay muchas causas posibles de este error. Cuando le aparezca este mensaje, es aconsejable que compruebe primero los siguientes parámetros:

*   **Rutas de acceso** - Compruebe la validez de las rutas de acceso definidas en el proyecto de la aplicación a través de la caja de diálogo del Generador de aplicaciones o mediante las llaves XML (por ejemplo *ClientMacFolderToWin*). Más concretamente, verifique las rutas de acceso a las versiones de 4D Volume Desktop.
*   **Privilegios de lectura/escritura** - En el equipo cliente, verifique que el usuario actual tiene derechos de acceso de escritura para la actualización de la aplicación cliente.


### Archivos generados

Una vez construida la aplicación cliente/servidor, encontrará una nueva carpeta en la carpeta de destino llamada **Cliente Servidor ejecutable**. Esta carpeta contiene dos subcarpetas, *<ApplicationName>Client* y *<ApplicationName>Server*.
> Estas carpetas no se generan si se produce un error. En este caso, abra el [archivo-de-historial](#archivo-de-registro) para conocer la causa del error.

La carpeta *<ApplicationName>Client* contiene la parte cliente de la aplicación correspondiente a la plataforma de ejecución del generador de la aplicación. Esta carpeta debe instalarse en cada máquina cliente. La carpeta *<ApplicationName>Server* contiene la parte servidor de la aplicación.

El contenido de estas carpetas varía en función de la plataforma actual:

*   *Windows* - Cada carpeta contiene el archivo ejecutable de la aplicación, llamado  *\<ApplicationName>Client.exe* para la parte cliente y *\<ApplicationName>Server.exe* para la parte servidor, así como los archivos .rsr correspondientes. Las carpetas también contienen varios archivos y carpetas necesarios para el funcionamiento de las aplicaciones y los elementos personalizados que pueden estar en las carpetas 4D Volume Desktop y 4D Server de origen.
*   *macOS* - Cada carpeta contiene sólo el paquete de aplicaciones, llamado\<ApplicationName> Client para la parte cliente y \<ApplicationName> Server para la parte servidor. Cada paquete contiene todos los elementos necesarios para que la aplicación funcione. En macOS, se lanza un paquete haciendo doble clic en él.

    > Los paquetes macOS generados contienen los mismos elementos que las subcarpetas Windows. Se puede visualizar su contenido (**Control+clic** sobre el icono) para poder modificarlo.

Si ha marcado la opción "Permitir la actualización automática de la aplicación cliente", se añade una subcarpeta adicional llamada *Upgrade4DClient* en la carpeta/paquete *<ApplicationName>Server*. Esta subcarpeta contiene la aplicación cliente en formato macOS y/o Windows como archivo comprimido. Este archivo se utiliza durante la actualización automática de las aplicaciones clientes.

#### Personalizar la carpeta 4D Volume Desktop

Durante la creación de una aplicación ejecutable, 4D duplica el contenido de la carpeta 4D Volume Desktop en la subcarpeta Final Application de la carpeta de destino. A continuación, podrá personalizar el contenido de la carpeta 4D Volume Desktop original según sus necesidades. Puede, por ejemplo:

- Instalar una versión de 4D Volume Desktop correspondiente a un lenguaje específico;
- Añadir una carpeta PlugIns personalizada;
- Personalizar el contenido de la carpeta Resources.

#### Ubicación de los archivos web

Si la parte servidor y/o del cliente de su aplicación de doble clic se utiliza como servidor web, los archivos y carpetas requeridos por el servidor deben instalarse en ubicaciones específicas. Estos elementos son los siguientes:

- Archivos*cert.pem* y *key.pem* (opcional): estos archivos se utilizan para las conexiones SSL y por los comandos de encriptación de datos,
- Carpeta raíz Web por defecto (WebFolder).

Los elementos deben ser instalados:
*   **en Windows**
    *   **Aplicación servidor** - en la subcarpeta *ejecutable Client Server \ \<ApplicationName>Server\Server Database* subfolder.
    *   **Aplicación Cliente** - en la subcarpeta *ejecutable Client Server\ \<ApplicationName>Client*.

*   **en macOS**
    *   **Aplicación servidor** - junto al paquete de software *\<ApplicationName>Server*.
    *   **Aplicación Cliente** - junto al paquete de software *\<ApplicationName>Client*.





## Página plugins y componentes

En esta pestaña, define cada [plug-in](Concepts/plug-ins.md) y cada [componente](Concepts/components.md) que utilizará en su aplicación autónoma o cliente/servidor.

La página enumera los elementos cargados por la aplicación 4D actual:

![](assets/en/Project/buildapppluginsProj.png)

*    Columna **Active** - Indica que los elementos se integrarán en el paquete de aplicación creado. Todos los elementos están marcados por defecto. To exclude a plug-in or a component, deselect the check box next to it.

*   **Plugins and components** column - Displays the name of the plug-in/component.

*   **ID** column - Displays the plug-in/component's identification number (if any).

*   **Type** column - Indicates the type of item: plug-in or component.

If you want to integrate other plug-ins or components into the executable application, you just need to place them in a **PlugIns** or **Components** folder next to the 4D Volume Desktop application or next to the 4D Server application. El mecanismo de copia del contenido de la carpeta de la aplicación fuente (ver [Personalizar la carpeta 4D Volume Desktop](#customizing-4d-volume-desktop-folder)) puede utilizarse para integrar todo tipo de archivo en la aplicación ejecutable.

Si hay un conflicto entre dos versiones diferentes del mismo plug-in (una cargada por 4D y la otra ubicada en la carpeta de la aplicación fuente), tiene prioridad el plug-in instalado en la carpeta 4D Volume Desktop/4D Server. However, if there are two instances of the same component, the application will not open.
> The use of plug-ins and/or components in a deployment version requires the necessary license numbers.






## Licenses & Certificate page

The Licences & Certificate page can be used to:

*   designate the license number(s) that you want to integrate into your single-user stand-alone application
*   sign the application by means of a certificate in macOS.


![](assets/en/Project/buildapplicenseProj.png)

### Licenses

This tab displays the list of available deployment licenses that you can integrate into your application. Por defecto, la lista está vacía. Debe añadir explícitamente su licencia *4D Developer Professional*, así como cada licencia *4D Desktop Volume* que se vaya a utilizar en la aplicación generada. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.

To remove or add a license, use the **[+]** and **[-]** buttons at the bottom of the window.

When you click on the \[+] button, an open file dialog box appears displaying by default the contents of the *Licenses* folder of your machine. Para más información sobre la ubicación de esta carpeta, consulte el comando [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html).

Debe designar los archivos que contienen su licencia de desarrollador así como los que contienen sus licencias de despliegue. These files were generated or updated when the *4D Developer Professional* license and the *4D Desktop Volume* licenses were purchased.

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

You can also set specific [XML keys](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) in the buildApp.4DSettings file to designate each icon to use. Las siguientes llaves están disponibles:

- RuntimeVLIconWinPath
- RuntimeVLIconMacPath
- ServerIconWinPath
- ServerIconMacPath
- ClientMacIconForMacPath
- ClientWinIconForMacPath
- ClientMacIconForWinPath
- ClientWinIconForWinPath



## Gestión de archivo(s) de datos

### Apertura de archivo de datos

Cuando un usuario lanza una aplicación fusionada o una actualización (aplicaciones monopuesto o cliente/servidor), 4D intenta seleccionar un archivo de datos válido. Several locations are examined by the application successively.

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

With your compiled applications, 4D automatically uses the last data file opened. Por defecto, la ruta del archivo de datos se almacena en la carpeta de preferencias del usuario de la aplicación y está vinculada al **nombre de la aplicación**.

Esto puede ser inadecuado si se quiere duplicar una aplicación fusionada que pretende utilizar diferentes archivos de datos. Las aplicaciones duplicadas en realidad comparten la carpeta de preferencias del usuario de la aplicación y, por lo tanto, siempre utilizan el mismo archivo de datos - incluso si el archivo de datos se cambia de nombre, porque se abre el último archivo utilizado para la aplicación.

4D permite, por tanto, vincular la ruta del archivo de datos a la ruta de la aplicación. En este caso, el archivo de datos se relacionará con una ruta específica y no será simplemente el último archivo abierto. Asocie sus datos **por la ruta de aplicación**.

Este modo le permite duplicar sus aplicaciones fusionadas sin romper el vínculo con el archivo de datos. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the *lastDataPath.xml* file is updated accordingly).


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

- You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the database project folder. Este archivo debe suministrarse junto con todos los demás archivos necesarios, dependiendo de la configuración de la base: índice (.4DIndx), Blobs externos, journal, etc. Es su responsabilidad proveer un archivo de datos válido por defecto. Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.
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

The last used and validated server path is automatically saved in a file named "lastServer.xml" in the application's user preferences folder. Esta carpeta se almacena en la siguiente ubicación:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

Este mecanismo aborda el caso de que el servidor de destino primario no esté disponible temporalmente por alguna razón (modo mantenimiento, por ejemplo). When this case occurs for the first time, the server selection dialog box is displayed (if allowed, see below) and the user can manually select an alternate server, whose path is then saved if the connection is successful. Any subsequent unavailability would be handled automatically through the "lastServer.xml" path information.

> - When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) key in the "BuildApp.4DSettings" file. El mecanismo aborda los casos de indisponibilidad temporal.  
> - Pressing the **Alt/Option** key at startup to display the server selection dialog box is still supported in all cases.



### Availability of the server selection dialog box in case of error

You can choose whether or not to display the standard server selection dialog box on merged client applications when the server cannot be reached. The configuration depends on the value of the [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) XML key on the machine where the application was built:

- **Display of an error message with no access possible to the server selection dialog box**. Default operation. The application can only quit.  
  `ServerSelectionAllowed`: **False** or key omitted ![](assets/en/Project/connect1.png)

- **Display of an error message with access to the server selection dialog box possible**. El usuario puede acceder a la ventana de selección del servidor haciendo clic en el botón **Seleccionar...**.   
  `ServerSelectionAllowed`: **True** ![](assets/en/Project/connect2.png) ![](assets/en/Project/connect3.png)
