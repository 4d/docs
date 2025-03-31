---
id: building
title: Generar un paquete proyecto
---

4D Developer incluye un generador de aplicaciones finales para crear un paquete de proyecto (versión final). Este generador simplifica el proceso de finalización y despliegue de las aplicaciones compiladas en 4D. Maneja automáticamente las funcionalidades específicas de los distintos sistemas operativos y facilita el despliegue de aplicaciones cliente-servidor.

El generador de aplicaciones le permite:

* Generar una base de datos compilada, sin código interpretado,
* Generar una aplicación autónoma ejecutable, *es decir*, fusionada con 4D Volume Desktop, el motor de base de datos 4D,
* Generar diferentes aplicaciones a partir de la misma base de datos compilada mediante un proyecto XML,
* Generar aplicaciones cliente-servidor homogéneas,
* Generar aplicaciones cliente-servidor con actualización automática de los componentes del cliente y del servidor.
* Guardar sus parámetros de generación para su uso futuro (botón *Guardar los parámetros*).

## Vista general del generador de aplicaciones

Generar un paquete de proyecto puede realizarse utilizando:

* el comando [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html),
* o la ventana Crear aplicación.

Para mostrar la caja de diálogo Generar la aplicación, seleccione **Diseño** > **Generar la aplicación...** en la barra de menús.

![](../assets/en/Project/buildappProj.png)

La caja de diálogo del generador de aplicaciones incluye varias páginas a las que se puede acceder mediante pestañas:

![](../assets/en/Project/appbuilderProj.png)

La generación de la base sólo puede efectuarse una vez compilada la base de datos. Si selecciona este comando sin haber compilado previamente la base de datos, o si el código compilado no se corresponde con el código interpretado, aparece una caja de diálogo de advertencia que indica que la base de datos debe ser (re)compilada.

### Parámetros del generador de aplicaciones

Cada parámetro de generación de la aplicación se almacena como una llave XML en el archivo de la aplicación llamada "buildApp.4DSettings", ubicado en la carpeta Settings de la base de datos.

Los parámetros por defecto se utilizan la primera vez que se utiliza la caja de diálogo del Generador de aplicaciones. El contenido del archivo proyecto se actualiza, si es necesario, al hacer clic en **Construir** o **Guardar los parámetros**. Puede definir varios archivos de parámetros XML para el mismo proyecto y utilizarlos con el comando [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html).

Las llaves XML ofrecen opciones adicionales a las que se muestran en la caja de diálogo del Generador de aplicaciones. XML keys provide additional options besides those displayed in the Build Application dialog box.

### Archivo de historial

Cuando se crea una aplicación, 4D genera un archivo de historial en la carpeta **Logs**. El archivo de historial almacena la siguiente información para cada generación:

* El inicio y el fin de la generación de objetivos,
* El nombre y la ruta de acceso completa de los archivos generados,
* La fecha y la hora de la generación,
* Todos los errores que se han producido.

## Nombre de la aplicación y carpeta de destino

![](../assets/en/Project/buidappstructureProj.png)

Introduzca el nombre de la aplicación en **Nombre de la aplicación**.

Especifique la carpeta para la aplicación generada en la **Carpeta de destino**. Si la carpeta especificada no existe todavía, 4D creará una carpeta *Build*.

## Página de estructura compilada

Esta pestaña le permite generar un archivo de estructura compilado estándar y/o un componente compilado:

![](../assets/en/Project/appbuilderProj.png)

### Generar una estructura compilada

Genera una base de datos que sólo contiene código compilado.

Esta funcionalidad crea un archivo *.4dz* en una carpeta *Compiled Database*. Si ha llamado a su aplicación "MyProject", 4D creará:

`\&#060;destination\&#062;/Compiled Database/\&#060;database name&#062;/\MyProject.4dz`

> Un archivo .4dz es esencialmente una versión comprimida (empaquetada) de la carpeta del proyecto. A .4dz file is essentially a zipped (packed) version of the project folder. El tamaño compacto y optimizado de los archivos .4dz hace que los paquetes de proyectos sean fáciles de desplegar.

#### Incluir las carpetas asociadas

Cuando se marca esta opción, todas las carpetas relacionadas con la base de datos se copian en la carpeta Build como carpetas *Components* y *Resources*. Para más información sobre estas carpetas, consulte [Arquitectura de la base de datos](https://livedoc.4d.com/4D-Design-Reference-18/Managing-4D-databases/Description-of-4D-files.300-4575698.en.html#100374).

### Generar un componente

Genera un componente compilado a partir de la estructura.

Un componente es un proyecto estándar 4D en el que se han desarrollado funcionalidades específicas. Una vez configurado e instalado el componente en otra base 4D (la base local), sus funcionalidades son accesibles desde la base local. Para más información sobre los componentes, consulte la documentación "Desarrollar e instalar componentes 4D ".

Si ha llamado a su aplicación, *MiComponente*, 4D creará una carpeta Components que contiene la carpeta *MiComponente.4dbase*:

`\&#060;destination&#062;/Components/name.4dbase/\&#060;name&#062;.4DZ`

La carpeta *MyComponent.4dbase* contiene:

* archivo *MyComponent.4DZ*
* Una carpeta *Resources*: todos los resources asociados se copian automáticamente en esta carpeta. Los otros componentes y/o carpetas de plugins no se copian (un componente no puede utilizar plugins u otros componentes).

## Página Application

Esta pestaña le permite crear una versión autónoma y monopuesto de su aplicación:

![](../assets/en/Project/standaloneProj.png)

### Crear una aplicación autónoma

Al marcar la opción **Crear una aplicación autónoma** y hacer clic en **Generar** se creará una aplicación autónoma (con doble clic) directamente desde su proyecto de base datos.

Los siguientes elementos son necesarios para la creación:

* 4D Volume Desktop (el motor de la base de datos 4D),
* una [licencia apropiada](#licenses)

En Windows, esta función crea un archivo ejecutable (.exe). En macOS, se encarga de la creación de paquetes de software.

El principio consiste en fusionar un archivo de estructura compilado con 4D Volume Desktop. Las funcionalidades ofrecidas por el archivo 4D Volume Desktop están relacionadas con la oferta de productos a la que se ha suscrito. Las funcionalidades ofrecidas por el archivo 4D Volume Desktop están relacionadas con la oferta de productos a la que se ha suscrito.

Puede definir un archivo de datos por defecto o permitir que los usuarios creen y utilicen su propio archivo de datos (consulte la sección [Gestión de archivos de datos](#management-of-data-files)).

Es posible automatizar la actualización de las aplicaciones monopuesto fusionadas mediante una secuencia de comandos de lenguaje (ver [Actualización automática de aplicaciones servidor o monopuesto](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html).

#### Ubicación de 4D Volume Desktop

Para crear una aplicación autónoma, primero debe designar la carpeta que contiene el archivo 4D Volume Desktop:

* *Windows* - la carpeta contiene los archivos 4D Volume Desktop.4DE, 4D Volume Desktop. RSR, así como varios archivos y carpetas necesarios para su funcionamiento. Estos elementos deben colocarse al mismo nivel que la carpeta seleccionada.
* *macOS* - 4D Volume Desktop se entrega en forma de un paquete de software estructurado que contiene varios archivos y carpetas genéricos.

Para seleccionar la carpeta 4D Volume Desktop, haga clic en el botón **[...]**. Aparece una caja de diálogo que le permite designar la carpeta de 4D Volume Desktop (Windows) o el paquete (macOS).

Una vez seleccionada la carpeta, se muestra su ruta completa y, si realmente contiene 4D Volume Desktop, se activa la opción de generación de una aplicación ejecutable.

> El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition. Por ejemplo, si utiliza 4D Developer v18, debe seleccionar un 4D Volume Desktop v18.

#### Modo de enlace de datos

Esta opción permite elegir el modo de enlace entre la aplicación fusionada y el archivo de datos local. Hay dos modos de enlazar disponibles:

* **Por nombre de la aplicación** (por defecto) - La aplicación 4D abre automáticamente el archivo de datos abierto más recientemente correspondiente al archivo de estructura. Esto le permite mover el paquete de aplicaciones libremente en el disco. Esta opción debería usarse generalmente para aplicaciones fusionadas, a menos que necesite específicamente duplicar su aplicación.

* **Por ruta de la aplicación** - La aplicación 4D fusionada analizará el archivo *lastDataPath.xml* de la aplicación e intentará abrir el archivo de datos con un atributo "executablePath" que coincida con la ruta completa de la aplicación. Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath"). Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath").

Para más información sobre el modo de vinculación de datos, consulte la sección [Último archivo de datos abierto](#last-data-file-opened).

#### Archivos generados

Al hacer clic en el botón **Generar**, 4D crea automáticamente una carpeta **Final Application** en la **carpeta de destino** definida. Dentro de la carpeta Final Application hay una subcarpeta con el nombre de la aplicación especificada.

Si ha especificado "MyProject" como nombre de la aplicación, encontrará los siguientes archivos en esta subcarpeta (MyProject):

* *Windows*
  * MyProject.exe - Su ejecutable y un MyProject.rsr (los recursos de la aplicación)
  * Las carpetas 4D Extensions y Resources, varias librerías (DLL), la carpeta Native Components y SASL Plugins - Archivos necesarios para el funcionamiento de la aplicación
  * Una carpeta Database  - Incluye una carpeta Resources y un archivo MyProject.4DZ. Database folder  - Includes a Resources folder and  MyProject.4DZ file. **Nota**: esta carpeta también contiene la carpeta *Datos por defecto*, si se ha definido (ver [Gestión de archivos de datos](#management-of-data-files).
  * (Opcional) Carpeta de componentes y/o carpeta Plugins - Contiene todos los componentes y/o archivos de plugins incluidos en la base. Para más información al respecto, consulte la sección [de la página Plugins y componentes](#plugins--components-page).
  * Carpeta Licenses - Un archivo XML de números de licencia integrados en la aplicación. Para obtener más información sobre este punto, consulte la sección [Licencias y certificados](#licenses-and-certificate).
  * Elementos adicionales añadidos a la carpeta 4D Volume Desktop, si los hay (ver [Personalizar la carpeta 4D Volume Desktop](#customizing-4d-volume-desktop-folder)).

 Todos estos elementos deben estar en la misma carpeta para que el ejecutable funcione.

* *macOS*
  * Un paquete de software llamado MyProject.app que contiene su aplicación y todos los elementos necesarios para su funcionamiento, incluyendo los plug-ins, componentes y licencias. Para más información sobre la integración de plug-ins y componentes, consulte la sección [Plugins y componentes](#plugins--components-page). Para obtener más información sobre la integración de licencias, consulte la sección [Licencias y certificados](#licenses-and-certificate). **Nota**: en macOS, el comando [Archivo aplicación](https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html) del lenguaje 4D devuelve la ruta del archivo NombreApplication (situado en la carpeta Contents:macOS del paquete de software) y no la del archivo .comp (carpeta Contents:

#### Personalizar la carpeta 4D Volume Desktop

Cuando se construye una aplicación independiente, 4D copia el contenido de la carpeta 4D Volume Desktop en la carpeta Destination > *Final Application*. A continuación, podrá personalizar el contenido de la carpeta 4D Volume Desktop original según sus necesidades. Puede, por ejemplo:

* Instalar una versión de 4D Volume Desktop correspondiente a un lenguaje específico;
* Añadir una carpeta *PlugIns* personalizada;
* Personalizar el contenido de la carpeta *Resources*.
> The macOS packages built contain the same items as the Windows subfolders. You can display their contents (**Control+click** on the icon) in order to be able to modify them.

#### Ubicación de los archivos web

Si su aplicación ejecutable se utiliza como servidor web, los archivos y los archivos y carpetas requeridos por el servidor deben instalarse en ubicaciones específicas. Estos elementos son los siguientes:

* archivos *cert.pem* y *key.pem* (opcional): etos archivos se utilizan para las conexiones SSL y por los comandos de encriptación de datos,
* carpeta raíz web por defecto.

Los elementos deben ser instalados:

* **En Windows**: en la subcarpeta *Final Application\MyProject\Database*.
* **En macOS**: junto al paquete de software *MyProject.app*.

## Página Cliente/Servidor

En esta pestaña, usted puede construir aplicaciones cliente y servidor personalizadas que son homogénicas, multiplataforma y con una opción de actualización automática.

![](../assets/en/Project/buildappCSProj.png)

### ¿Qué es una aplicación cliente/servidor?

Una aplicación cliente/servidor proviene de la combinación de tres elementos:

* Una base de datos 4D compilada,
* La aplicación 4D Server,
* La aplicación 4D Volumen Desktop (macOS y/o Windows).

Una vez generada, una aplicación cliente/servidor se compone de dos partes personalizadas: la parte Servidor (única) y la parte Cliente (a instalar en cada máquina cliente).

Además, se personaliza la aplicación cliente/servidor y se simplifica su manejo:

* Para lanzar la parte del servidor, el usuario simplemente hace doble clic en la aplicación servidor. No es necesario seleccionar la base de datos.
* Para lanzar la parte cliente, el usuario simplemente hace doble clic en la aplicación cliente, que se conecta directamente a la aplicación servidor. No es necesario elegir una base de datos en una caja de diálogo de conexión. Si desea que la aplicación cliente se conecte al servidor utilizando una dirección específica (distinta del nombre del servidor publicado en la subred), debe utilizar la llave XML `IPAddress` en el archivo buildapp.4DSettings. Si la conexión falla, \[se pueden implementar mecanismos alternativos específicos\](#management-of-client-connections). Puede "forzar" la visualización de la caja de diálogo de conexión estándar presionando la tecla **Opción** (macOS) o **Alt** (Windows) mientras inicia la aplicación cliente. Sólo la parte cliente puede conectarse a la parte del servidor correspondiente. Si un usuario intenta conectarse a la parte servidor utilizando una aplicación estándar 4D, se devuelve un mensaje de error y la conexión es imposible.
* Una aplicación cliente/servidor puede configurarse para que la parte cliente [se actualice automáticamente a través de la red](#copy-of-client-applications-in-the-server-application).
* También es posible automatizar la actualización de la parte del servidor mediante el uso de una secuencia de comandos del lenguaje ([SET UPDATE FOLDER](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html) y [RESTART 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html)).

### Construir aplicación servidor

Marque esta opción para generar la parte del servidor de su aplicación durante la fase de construcción. Debe designar la ubicación en su disco de la aplicación 4D Server que va a utilizar. Debe designar la ubicación en su disco de la aplicación 4D Server que va a utilizar.

#### Ubicación de 4D Server

Haga clic en el botón **[...]** y utilice la caja de diálogo *Navegar carpeta* para localizar la aplicación 4D Server. En macOS, debe seleccionar directamente el paquete 4D Server.

#### Versión actual

Se utiliza para indicar el número de versión actual de la aplicación generada. A continuación, podrá aceptar o rechazar las conexiones de las aplicaciones cliente en función de su número de versión. El intervalo de compatibilidad de las aplicaciones del cliente y del servidor se define mediante el uso de [llaves XML](#build-application-settings) específicas).

#### Modo de enlace de datos

Esta opción permite elegir el modo de enlace entre la aplicación fusionada y el archivo de datos local. Hay dos modos de enlazar disponibles:

* **Por nombre de la aplicación** (por defecto) - La aplicación 4D abre automáticamente el archivo de datos abierto más recientemente correspondiente al archivo de estructura. Esto le permite mover el paquete de aplicaciones libremente en el disco. Esta opción debería usarse generalmente para aplicaciones fusionadas, a menos que necesite específicamente duplicar su aplicación.

* **Por ruta de la aplicación** - La aplicación 4D fusionada analizará el archivo *lastDataPath.xml* de la aplicación e intentará abrir el archivo de datos con un atributo "executablePath" que coincida con la ruta completa de la aplicación. Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath"). Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath").

Para más información sobre el modo de vinculación de datos, consulte la sección [Último archivo de datos abierto](#last-data-file-opened).

### Construir la aplicación cliente

Marque esta opción para generar la parte cliente de su aplicación durante la fase de construcción.

#### 4D Volume Desktop

Debe designar la ubicación en su disco de la aplicación 4D Volume Desktop a utilizar. Este 4D Volume Desktop debe corresponder a la plataforma actual (que será también la plataforma de la aplicación cliente). Si quiere generar una versión de la aplicación cliente para la plataforma "concurrente", debe realizar una operación de generación adicional utilizando una aplicación 4D que se ejecute en esa plataforma. Esto sólo es necesario para la versión inicial de la aplicación cliente, ya que las actualizaciones posteriores se pueden gestionar directamente en la misma plataforma utilizando el mecanismo de actualización automática.

> El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition. Por ejemplo, si utiliza 4D Developer v18, debe seleccionar un 4D Volume Desktop v18.

Si desea que la aplicación cliente se conecte al servidor utilizando una dirección específica (distinta del nombre del servidor publicado en la subred), debe utilizar la llave XML `IPAddress` en el archivo buildapp.4DSettings. Para más información sobre este archivo, consulte la descripción del comando `BUILD APPLICATION`. También puede implementar mecanismos específicos en caso de fallo de la conexión. También puede implementar mecanismos específicos en caso de fallo de la conexión.

#### Copia de las aplicaciones clientes en la aplicación servidor

Las opciones de esta área para configurar el mecanismo de actualización de las partes cliente de sus aplicaciones cliente/servidor que utilizan la red cada vez que se genera una nueva versión de la aplicación.

* **Permitir la actualización automática de la aplicación cliente Windows** - Marque estas opciones para que su aplicación cliente/servidor Windows pueda aprovechar el mecanismo de actualización automática de clientes a través de la red.
* **Permitir la actualización automática de la aplicación cliente Macintosh** - Marque estas opciones para que su aplicación cliente/servidor Macintosh pueda aprovechar el mecanismo de actualización automática de clientes a través de la red.

* **Permitir la actualización automática de la aplicación cliente Macintosh** - Si desea crear una aplicación cliente multiplataforma, debe designar la ubicación en su disco de la aplicación 4D Volume Desktop que corresponde a la plataforma "concurrente" de la plataforma de generación.

 Por ejemplo, si crea su aplicación en Windows, debe utilizar el botón **[...]** para designar la aplicación 4D Volume Desktop macOS (suministrada como paquete).

#### Visualización de la notificación de actualización

La notificación de actualización de la aplicación cliente se realiza automáticamente tras la actualización de la aplicación servidor.

Funciona de la siguiente manera: cuando se genera una nueva versión de la aplicación cliente/servidor utilizando el generador de aplicaciones, la nueva parte cliente se copia como un archivo comprimido en la subcarpeta **Upgrade4DClient** de la carpeta **NomApplication** Server (en macOS, estas carpetas se incluyen en el paquete servidor). Si ha seguido el proceso de generación de una aplicación cliente multiplataforma, un archivo de actualización .*4darchive* está disponible para cada plataforma:

Para activar las notificaciones de actualización de la aplicación cliente, basta con sustituir la versión antigua de la aplicación servidor por la nueva y ejecutarla. El resto del proceso es automático.

Del lado del cliente, cuando la aplicación cliente "antigua" intenta conectarse a la aplicación servidor actualizada, se muestra una caja de diálogo en la máquina cliente, indicando que hay nueva versión disponible. El usuario puede actualizar su versión o cancelar la caja de diálogo.

* Si el usuario hace clic en **OK**, la nueva versión se descarga en el equipo cliente a través de la red. Una vez finalizada la descarga, se cierra la aplicación cliente antigua y se lanza la nueva versión, que se conecta al servidor. Una vez finalizada la descarga, se cierra la aplicación cliente antigua y se lanza la nueva versión, que se conecta al servidor.
* Si el usuario hace clic en **Cancelar**, la actualización se cancela; si la versión antigua de la aplicación cliente no está en el rango de versiones aceptadas por el servidor (consulte el siguiente párrafo), la aplicación se cierra y la conexión es imposible. En caso contrario (por defecto), se establece la conexión.

#### Forzar las actualizaciones automáticas

En algunos casos, es posible que desee evitar que las aplicaciones cliente puedan cancelar la descarga de la actualización. Por ejemplo, si ha utilizado una nueva versión de la aplicación fuente de 4D Server, la nueva versión de la aplicación cliente debe estar instalada en cada máquina cliente.

Para forzar la actualización, basta con excluir el número de versión actual de las aplicaciones cliente (X-1 y anteriores) en el rango de número de versión compatible con la aplicación servidor. En este caso, el mecanismo de actualización no permitirá que las aplicaciones cliente no actualizadas se conecten. En este caso, el mecanismo de actualización no permitirá que las aplicaciones cliente no actualizadas se conecten.

El [número de versión actual](build-server-application) se define en la página Cliente/Servidor del generador de la aplicación. Los intervalos de números autorizados se definen en el proyecto de aplicación vía las [llaves XML](#build-application-settings) específicas.

#### En caso de error

Si 4D no puede efectuar la actualización de la aplicación cliente, la máquina cliente muestra el siguiente mensaje de error: "La actualización de la aplicación cliente falló. La aplicación va a cerrar ahora.”

Hay muchas causas posibles para este error. Cuando reciba este mensaje, es aconsejable que compruebe primero los siguientes parámetros:

* **Nombres de ruta**: compruebe la validez de los nombres de ruta definidos en el proyecto de la aplicación a través del diálogo del Generador de aplicaciones o mediante las llaves XML (por ejemplo, *ClientMacFolderToWin*). Más concretamente, compruebe los nombres de ruta de las versiones de 4D Volume Desktop.
* **Privilegios lectura/escritura**: en la máquina cliente, compruebe que el usuario actual tiene derechos de acceso de escritura para la actualización de la aplicación cliente.

### Archivos generados

Una vez creada la aplicación cliente/servidor, encontrará una nueva carpeta en la carpeta de destino llamada **Client Server executable**. Esta carpeta contiene dos subcarpetas, `\&#060;ApplicationName&#062;Client` y `\&#060;ApplicationName&#062;Server`.
> Estas carpetas no se generan si ocurre un error. En este caso, abra el [archivo de historial](#log-file) para averiguar la causa del error.

La carpeta `&#060;ApplicationName&#062;Client` contiene la parte cliente de la aplicación correspondiente a la plataforma de ejecución del generador de aplicaciones. Esta carpeta debe instalarse en cada máquina cliente. La carpeta `\&#060;ApplicationName&#062;Server` contiene la parte del servidor de la aplicación.

El contenido de estas carpetas varía en función de la plataforma actual:

* *Windows* - Cada carpeta contiene el archivo ejecutable de la aplicación, llamado `\&#060;ApplicationName&#062;Client.exe` para la parte cliente y `\&#060;ApplicationName&#062;Server.exe` para la parte servidor, así como los archivos .rsr correspondientes. Las carpetas también contienen varios archivos y carpetas necesarios para que las aplicaciones funcionen y elementos personalizados que pueden estar en las carpetas originales de 4D Volume Desktop y 4D Server.
* *macOS* - Cada carpeta contiene únicamente el paquete de la aplicación, denominado `\&#060;ApplicationName&#062; Client` para la parte cliente y `\&#060;ApplicationName&#062; Server` para la parte servidor. Cada paquete contiene todos los elementos necesarios para que la aplicación funcione. En macOS, un paquete se lanza haciendo doble clic en él.

 > Los paquetes macOS generados contienen los mismos elementos que las subcarpetas Windows. Puede visualizar su contenido (**Control+clic** en el icono) para poder modificarlo.

Si ha marcado la opción "Permitir la actualización automática de la aplicación cliente", se añadirá una subcarpeta adicional llamada *Upgrade4DClient* en la carpeta/paquete `\&#060;ApplicationName&#062;Server`. Esta subcarpeta contiene la aplicación cliente en formato macOS y/o Windows como archivo comprimido. Esta subcarpeta contiene la aplicación cliente en formato macOS y/o Windows como archivo comprimido.

#### Personalizar la carpeta 4D Volume Desktop

Cuando se crea una aplicación con doble clic, 4D copia el contenido de la carpeta 4D Volume Desktop en la subcarpeta Final Application de la carpeta de destino. A continuación, podrá personalizar el contenido de la carpeta 4D Volume Desktop original según sus necesidades. Puede, por ejemplo:

* Instalar una versión de 4D Volume Desktop correspondiente a un lenguaje específico;
* Añadir una carpeta personalizada PlugIns;
* Personalizar el contenido de la carpeta Resources.

#### Ubicación de los archivos web

Si la parte servidor y/o la del cliente de su aplicación ejecutable se utiliza como servidor web, los archivos y carpetas requeridos por el servidor deben instalarse en ubicaciones específicas. Estos elementos son los siguientes:

* archivos *cert.pem* y *key.pem* (opcional): etos archivos se utilizan para las conexiones SSL y por los comandos de encriptación de datos,
* Carpeta raíz web por defecto (WebFolder).

Los elementos deben ser instalados:

* **en Windows**
  * **Aplicación servidor** - en la subcarpeta `Client Server executable\ \&#060;ApplicationName&#062;Server\Server Database`.
  * **Aplicación cliente** - en la subcarpeta `Client Server executable\&#060;ApplicationName&#062;Client`.

* **en macOS**
  * **Aplicación servidor** - junto al paquete de software `\&#060;ApplicationName&#062;Server`.
  * **Aplicación cliente** - junto al paquete de software `\&#060;ApplicationName&#062;Client`.

## Página Plugins y componentes {#plugins--components-page}

En esta pestaña, configure cada [plug-in ](Concepts/plug-ins.md) y cada [componente](Concepts/components.md) que vaya a utilizar en su aplicación autónoma o cliente/servidor.

La página lista los elementos cargados por la aplicación 4D actual:

![](../assets/en/Project/buildapppluginsProj.png)

* La columna **Activa** indica los elementos que se integrarán en la aplicación generada. Todos los elementos están marcados por defecto. Para excluir un plug-in o un componente, anule la selección de la casilla situada junto a él.

* columna **Plugins y componentes** - Muestra el nombre del plug-in/componente.

* Columna **ID** - Muestra el número de identificación del plug-in/componente (si existe).

* **Tipo** columna - Indica el tipo de elemento: plug-in o componente.

Si desea integrar otros plug-ins o componentes en la aplicación ejecutable, sólo tiene que colocarlos en una carpeta **PlugIns** o **Components** junto a la aplicación 4D Volume Desktop o junto a la aplicación 4D Server. El mecanismo para copiar el contenido de la carpeta de la aplicación fuente (ver [Personalizar la carpeta 4D Volume Desktop](#customizing-4d-volume-desktop-folder)) puede utilizarse para integrar todo tipo de archivo en la aplicación ejecutable.

Si hay un conflicto entre dos versiones diferentes del mismo plug-in (una cargada por 4D y la otra ubicada en la carpeta de la aplicación fuente), la prioridad la tiene el plug-in instalado en la carpeta de 4D Volume Desktop/4D Server. Sin embargo, si hay dos instancias de un mismo componente, la aplicación no se abrirá.
> El uso de plug-ins y/o componentes en una versión de despliegue requiere los números de licencia necesarios.

## Página licencias y certificados

La página de Licencias y certificados puede utilizarse para:

* designe el número o los números de licencia que desea integrar en su aplicación ejecutable monopuesto
* firmar la aplicación mediante un certificado en macOS.

![](../assets/en/Project/buildapplicenseProj.png)

### Licencias

Esta pestaña muestra la lista de licencias de despliegue disponibles que puede integrar en su aplicación. Por defecto, la lista está vacía. Debe añadir explícitamente su licencia *4D Developer Professional*, así como cada licencia *4D Desktop Volume* que se vaya a utilizar en la aplicación generada. Puede añadir otro número 4D Developer Professional y sus licencias asociadas que no sea el que se está utilizando actualmente.

Para eliminar o añadir una licencia, utilice los botones **[+]** y **[-]** de la parte inferior de la ventana.

Al hacer clic en el botón \N-[+], aparece una caja de diálogo para abrir archivos que muestra por defecto el contenido de la carpeta *Licencias* de su máquina. Para obtener más información sobre la ubicación de esta carpeta, consulte el comando [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html).

Debe designar los archivos que contienen su licencia Developer, así como los que contienen sus licencias de despliegue. Estos archivos se generaron o actualizaron al adquirir la licencia *4D Developer Professional* y las licencias *4D Desktop Volume*.

Una vez seleccionado un archivo, la lista indicará las características de la licencia que contiene.

* **Licencia #** - número de licencia del producto
* **Licencia** - Nombre del producto
* **Fecha de vencimiento**: fecha de vencimiento de la licencia (si la hay)
* **Ruta de acceso** - Ubicación en el disco

Si una licencia no es válida, un mensaje le avisará.

Puede designar tantos archivos válidos como desee. Al generar una aplicación ejecutable, 4D utilizará la licencia más apropiada disponible.
> Se necesitan licencias "R" dedicadas para generar aplicaciones basadas en las versiones "R-release" (los números de licencia de los productos "R" empiezan por "R-4DDP").

Una vez generada la aplicación, se incluye automáticamente un nuevo archivo de licencia de despliegue en la carpeta Licencias junto a la aplicación ejecutable (Windows) o en el paquete (macOS).

### Certificación de las aplicaciones en OS X

El generador de aplicaciones puede firmar aplicaciones 4D fusionadas bajo macOS (aplicaciones monopuesto, 4D Server y partes cliente bajo macOS). La firma de una aplicación autoriza su ejecución por la funcionalidad Gatekeeper de macOS cuando se selecciona la opción "Mac App Store y desarrolladores identificados" (ver "Acerca de Gatekeeper" más adelante).

* Marque la opción **Firmar la aplicación** para incluir la certificación en los procesos de generación de aplicaciones para OS X. 4D comprobará la disponibilidad de los elementos necesarios para la certificación cuando se produzca la generación:

![](../assets/en/Project/buildapposxcertProj.png)

Esta opción aparece tanto en Windows como en macOS, pero sólo se tiene en cuenta en las versiones de macOS.

* **Nombre del certificado**: introduzca en esta área el nombre de su certificado desarrollador validado por Apple. El nombre del certificado suele ser el nombre del certificado en el utilitario Keychain Access (la parte en rojo en el siguiente ejemplo):

![](../assets/en/Project/certificate.png)

Para obtener un certificado de desarrollador de Apple, Inc., puede utilizar los comandos del menú de acceso al llavero o ir aquí: [http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html).
> Este certificado requiere la presencia del utilitario codesign de Apple, que se ofrece por defecto y suele estar ubicado en la carpeta "/usr/bin/". Si se produce un error, asegúrese de que este utilitario esté presente en su disco.

#### Sobre Gatekeeper

Gatekeeper es una función de seguridad de OS X que controla la ejecución de las aplicaciones descargadas de Internet. Si una aplicación descargada no procede del Apple Store o no está firmada, se rechaza y no se puede ser lanzada.

La opción **Firmar la aplicación** del Generador de aplicaciones de 4D le permite generar aplicaciones compatibles con esta opción por defecto.

#### Sobre la notarización

La notarización de las aplicaciones es muy recomendada por Apple a partir de macOS 10.14.5 (Mojave) y 10.15 (Catalina), ya que las aplicaciones no notarizadas que se despliegan a través de internet se bloquean por defecto.

En 4D v18, las [funcionalidades de firma integradas](#os-x-signing-certificate) han sido actualizadas para cumplir con todos los requisitos de Apple para permitir el uso del servicio de notarización de Apple. La notarización en sí debe ser realizada por el desarrollador y es independiente de 4D (tenga en cuenta también que requiere la instalación de Xcode). La notarización en sí debe ser realizada por el desarrollador y es independiente de 4D (tenga en cuenta también que requiere la instalación de Xcode).

Para más información sobre el concepto de notarización, consulte [esta página en el sitio web para desarrolladores de Apple](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).

## Personalizar los iconos de una aplicación

4D asocia un icono por defecto a las aplicaciones ejecutables (monopuestos y cliente-servidor). Sin embargo puede personalizar el icono para cada aplicación.

* **macOs** - cuando se crea una aplicación con doble clic, 4D se encarga de la personalización del icono. Para ello, debe crear un archivo de iconos (tipo icns), antes de crear el archivo de la aplicación, y colocarlo junto a la carpeta del proyecto.
> Apple, Inc. ofrece una herramienta específica para generar los archivos de iconos *icns* (para más información, consulte la [documentación de Apple](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).

 Su archivo de iconos debe tener el mismo nombre que el archivo del proyecto e incluir la extensión *.icns*. 4D tiene en cuenta automáticamente este archivo cuando genera la aplicación de doble clic (el archivo *.icns* es renombrado *NomApplication.icns* y copiado en la carpeta Resources; la entrada *CFBundleFileIcon* del archivo *info.plist* es actualizada).

* **Windows** - Cuando se crea una aplicación con doble clic, 4D se encarga de la personalización de su icono. Para ello, debe crear un archivo de iconos (extensión *.ico*), antes de crear el archivo de la aplicación, y colocarlo junto a la carpeta del proyecto.

 Su archivo de iconos debe tener el mismo nombre que el archivo del proyecto e incluir la extensión *.ico*. 4D tiene en cuenta automáticamente este archivo cuando genera la aplicación de doble clic.

También puede definir las [llaves XML](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) específicas en el archivo buildApp.4DSettings para designar cada icono a utilizar. Están disponibles las siguientes llaves:

* RuntimeVLIconWinPath
* RuntimeVLIconMacPath
* ServerIconWinPath
* ServerIconMacPath
* ClientMacIconForMacPath
* ClientWinIconForMacPath
* ClientMacIconForWinPath
* ClientWinIconForWinPath

## Gestión de archivos de datos

### Apertura del archivo de datos

Cuando un usuario lanza una aplicación fusionada o una actualización (aplicaciones monopuesto o cliente/servidor), 4D intenta seleccionar un archivo de datos válido. Varias ubicaciones son examinadas sucesivamente por la aplicación.

La secuencia de lanzamiento de una aplicación fusionada es:

1. 4D intenta abrir el último archivo de datos abierto, [como se describe a continuación](#last-data-file-opened) (no aplicable durante el lanzamiento inicial).
2. Si no se encuentra, 4D intenta abrir el archivo de datos en una carpeta de datos por defecto junto al archivo .4DZ en modo de sólo lectura.
3. Si no se encuentra, 4D intenta abrir el archivo de datos estándar por defecto (mismo nombre y misma ubicación que el archivo .4DZ).
4. Si no se encuentra, 4D muestra una caja de diálogo estándar "Abrir archivo de datos".

### Último archivo de datos abierto

#### Ruta del último archivo de datos

Toda aplicación autónoma o servidor generada con 4D almacena la ruta de acceso del último archivo de datos abierto en la carpeta de preferencias del usuario de la aplicación.

La ubicación de la carpeta de preferencias del usuario de la aplicación corresponde a la ruta devuelta por la instrucción siguiente:

```4d
userPrefs:=Get 4D folder(Carpeta 4D activa)
```

La ruta del archivo de datos se almacena en un archivo dedicado, llamado *lastDataPath.xml*.

Gracias a esta arquitectura, cuando usted ofrece una actualización de su aplicación, el archivo de datos del usuario local (último archivo de datos utilizado) se abre automáticamente en el primer lanzamiento.

Este mecanismo suele ser adecuado para los despliegues estándar. Sin embargo, para necesidades específicas, por ejemplo, si duplica sus aplicaciones fusionadas, es posible que desee cambiar la forma en que el archivo de datos está vinculado a la aplicación (se describe a continuación).

#### Configurar el modo de enlace de los datos

Con sus aplicaciones compiladas, 4D utiliza automáticamente el último archivo de datos abierto. Por defecto, la ruta del archivo de datos se almacena en la carpeta de preferencias del usuario de la aplicación y está vinculada al **nombre de la aplicación**.

Esto puede ser inadecuado si se quiere duplicar una aplicación fusionada destinada a utilizar diferentes archivos de datos. Las aplicaciones duplicadas en realidad comparten la carpeta de preferencias del usuario de la aplicación y, por lo tanto, siempre utilizan el mismo archivo de datos - incluso si el archivo de datos se cambia de nombre, porque se abre el último archivo utilizado para la aplicación.

Por lo tanto, 4D le permite vincular la ruta del archivo de datos a la ruta de la aplicación. En este caso, el archivo de datos se relacionará con una ruta específica y no será simplemente el último archivo abierto. En este caso, el archivo de datos se relacionará con una ruta específica y no será simplemente el último archivo abierto.

Este modo le permite duplicar sus aplicaciones fusionadas sin romper el vínculo con el archivo de datos. Sin embargo, con esta opción, si el paquete de la aplicación se mueve en el disco, se pedirá al usuario un archivo de datos, ya que la ruta de la aplicación ya no coincidirá con el atributo "executablePath" (después de que el usuario haya seleccionado un archivo de datos, el archivo *lastDataPath.xml* se actualiza en consecuencia).

*Duplicación cuando los datos están vinculados por el nombre de la aplicación:* ![](../assets/en/Project/datalinking1.png)

*Duplicación cuando los datos están vinculados por la ruta de la aplicación:* ![](../assets/en/Project/datalinking2.png)

Puede seleccionar el modo de vinculación de datos durante el proceso de generación de la aplicación. Puede:

* Utilice la [Página Aplicación](#application-page) o la [Página Cliente/Servidor](#clientserver-page) de la caja de diálogo del Generador de aplicaciones.
* Utilice la llave XML **LastDataPathLookup** (aplicación monopuesto o aplicación servidor).

### Definir una carpeta de datos por defecto

4D le permite definir un archivo de datos por defecto en la fase de construcción de la aplicación. Cuando la aplicación se lanza por primera vez, si no se encuentra ningún archivo de datos local (ver \[secuencia de lanzamiento descrita anteriormente\](#opening-the-data-file)), el archivo de datos por defecto se abre automáticamente y de forma silenciosa en modo de sólo lectura por 4D. Cuando la aplicación se lanza por primera vez, si no se encuentra ningún archivo de datos local (ver \[secuencia de lanzamiento descrita anteriormente\](#opening-the-data-file)), el archivo de datos por defecto se abre automáticamente y de forma silenciosa en modo de sólo lectura por 4D.

Más específicamente, se cubren los siguientes casos:

* Evitar la visualización de la caja de diálogo "Abrir archivo de datos" de 4D al lanzar una nueva aplicación fusionada o actualizada. Puede detectar, por ejemplo al inicio, que se ha abierto el archivo de datos por defecto y así ejecutar su propio código y/o diálogos para crear o seleccionar un archivo de datos local.
* Permitir la distribución de aplicaciones fusionadas con datos de sólo lectura (para aplicaciones de demostración, por ejemplo).

Para definir y utilizar un archivo de datos por defecto:

* Debe suministrar un archivo de datos por defecto (llamado "Default.4DD") y almacenarlo en una carpeta específica por defecto (llamada "Default Data") dentro de la carpeta del proyecto de la base. Este archivo debe suministrarse junto con todos los demás archivos necesarios, dependiendo de la configuración de la base: índice (.4DIndx), Blobs externos, journal, etc. Es su responsabilidad proveer un archivo de datos válido por defecto. Es su responsabilidad proveer un archivo de datos válido por defecto.
* Cuando se genera la aplicación, la carpeta de datos por defecto se integra en la aplicación fusionada. Todos los archivos dentro de esta carpeta por defecto también están anidados.

El siguiente gráfico ilustra esta funcionalidad:

![](../assets/en/Project/DefaultData.png)

Cuando se detecta el archivo de datos por defecto en el primer lanzamiento, se abre silenciosamente en modo de sólo lectura, lo que le permite ejecutar toda operación personalizada que no modifique el archivo de datos en sí.

## Gestión de la conexión(es) de las aplicaciones clientes

La gestión de las conexiones de las aplicaciones clientes abarca los mecanismos por los que una aplicación cliente fusionada se conecta al servidor objetivo, una vez que está en su entorno de producción.

### Escenario de conexión

El procedimiento de conexión para las aplicaciones cliente fusionadas admite los casos en los que el servidor dedicado no está disponible. El escenario de inicio de una aplicación cliente 4D es el siguiente:

* La aplicación cliente intenta conectarse al servidor utilizando el servicio de localización (basado en el nombre del servidor, difundido en la misma subred).  
  O  
  Si la información de conexión válida está almacenada en el archivo "EnginedServer.4DLink" dentro de la aplicación cliente, la aplicación cliente intenta conectarse a la dirección del servidor especificada.
* Si esto falla, la aplicación cliente intenta conectarse al servidor utilizando la información almacenada en la carpeta de preferencias del usuario de la aplicación (archivo "lastServer.xml", ver último paso).
* Si esto falla, la aplicación cliente muestra una caja de diálogo de error de conexión.
  * Si el usuario hace clic en el botón **Seleccionar...** (cuando lo permite el desarrollador 4D al momento de la generación, ver más abajo), se muestra la caja de diálogo estándar "Conexión al servidor".
  * Si el usuario hace clic en el botón **Salir**, la aplicación cliente se cierra.
* Si la conexión tiene éxito, la aplicación cliente guarda esta información de conexión en la carpeta de preferencias usuario de la aplicación para su uso futuro.

### Almacenando la última ruta del servidor

La última ruta servidor utilizada y validada se guarda automáticamente en un archivo llamado "lastServer.xml" en la carpeta de preferencias usuario de la aplicación. Esta carpeta se guarda en la siguiente ubicación:

```4d
userPrefs:=Get 4D folder(Carpeta 4D activa)
```

Este mecanismo aborda el caso en el que el servidor objetivo primario esté disponible temporalmente por alguna razón (modo mantenimiento, por ejemplo). Cuando se produce este caso por primera vez, se muestra la caja de diálogo de selección de servidor (si está permitido, ver más adelante) y el usuario puede seleccionar manualmente un servidor alternativo, cuya ruta se guarda si la conexión tiene éxito. Toda indisponibilidad posterior se gestionaría automáticamente a través de la información de la ruta "lastServer.xml".

> * Cuando las aplicaciones cliente no pueden beneficiarse permanentemente del servicio de descubrimiento, por ejemplo debido a la configuración de la red, se recomienda que el desarrollador indique un nombre de host en el momento de la generación utilizando la llave [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) en el archivo "BuildApp.4DSettings". El mecanismo aborda los casos de indisponibilidad temporal.  
> * Presionar la tecla **Alt/Opción** al inicio para mostrar la caja de diálogo de selección del servidor sigue siendo soportado en todos los casos.

### Disponibilidad de la caja de diálogo de selección del servidor en caso de error

Puede elegir si mostrar o no la caja de diálogo estándar de selección de servidor en las aplicaciones cliente fusionadas cuando no se puede acceder al servidor. La configuración depende del valor de la [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) La llave XML en la máquina donde se generó la aplicación:

* **Visualización de un mensaje de error sin poder acceder a la caja de diálogo de selección del servidor**. Funcionamiento por defecto. La aplicación sólo puede salir.  
  `ServerSelectionAllowed`: **False** o se omite la llave ![](../assets/en/Project/connect1.png)

* **Visualización de un mensaje de error con acceso posible a la caja de diálogo de selección del servidor**. El usuario puede acceder a la ventana de selección del servidor haciendo clic en el botón **Seleccionar...**. `ServerSelectionAllowed`: **True** ![](../assets/en/Project/connect2.png) ![](../assets/en/Project/connect3.png)
