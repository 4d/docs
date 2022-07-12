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

> Un archivo .4dz es esencialmente una versión comprimida (empaquetada) de la carpeta del proyecto. Un archivo .4dz es esencialmente una versión comprimida (empaquetada) de la carpeta del proyecto. El tamaño compacto y optimizado de los archivos .4dz hace que los paquetes de proyectos sean fáciles de desplegar.


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

En Windows, esta funcionalidad crea un archivo ejecutable (.exe). En macOS, se encarga de la creación de paquetes de software. El principio consiste en fusionar el archivo 4D Volume Desktop con un archivo de estructura compilado. Las funcionalidades ofrecidas por el archivo 4D Volume Desktop están relacionadas con la oferta de productos a la que se ha suscrito. Para más información sobre este punto, consulte la documentación comercial y de [4D Store](http://www.4d.com/).

Puede definir un archivo de datos por defecto o permitir a los usuarios crear y utilizar su propio archivo de datos (consulte la sección [Gestión de archivos de datos en las aplicaciones finales](https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html)).

Es posible automatizar la actualización de las aplicaciones monopuesto fusionadas mediante una secuencia de comandos de lenguaje (consulte la sección [Actualización automática de aplicaciones servidor o monopuesto](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html).

#### Localización de 4D Volume Desktop

Para generar una aplicación autónoma, primero debe designar la carpeta que contiene el archivo 4D Volume Desktop:

*   *Windows* - la carpeta contiene los archivos 4D Volume Desktop.4DE, 4D Volume Desktop. RSR, así como varios archivos y carpetas necesarios para su funcionamiento. Estos elementos deben colocarse al mismo nivel que la carpeta seleccionada. Aparece una caja de diálogo que le permite designar la carpeta (Windows) o el paquete (macOS) de 4D Volume Desktop. *   *macOS* - 4D Volume Desktop se provee en forma de un paquete de software estructurado que contiene varios archivos y carpetas genéricas. Para seleccionar la carpeta de 4D Volume Desktop, haga clic en el botón **[...]**. Una vez seleccionada la carpeta, se muestra su nombre de ruta completo y, si realmente contiene 4D Volume Desktop, se activa la opción de construir una aplicación ejecutable. Por ejemplo, si utiliza 4D Developer v18, debe seleccionar un 4D Volume Desktop v18.</blockquote> #### Modo de vinculo de datos Esta opción permite elegir el modo de vinculación entre la aplicación fusionada y el archivo de datos local. Existen dos modos de vinculación de datos:</p>

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
    *   (Opcional) Carpeta Components y/o carpeta Plugins - contienen todos los componentes y/o archivos plug-in incluidos en la base. Para más información al respecto, consulte la sección \[Plugins y componentes\](#plugins-and-components). *   Carpeta Licenses - Un archivo XML de números de licencia integrados en la aplicación. Para más información al respecto, consulte la sección [Licencias y certificados](#licenses-and-certificate).
    *   Elementos adicionales añadidos a la carpeta 4D Volume Desktop, si los hay (ver [Personalización de la carpeta 4D Volume Desktop](#customizing-4d-volume-desktop-folder)).

    Todos estos elementos deben mantenerse en la misma carpeta para que el ejecutable funcione.</ul>

*   *macOS*
    -   Un paquete de software llamado MyProject.app que contiene tu aplicación y todos los elementos necesarios para su funcionamiento, incluyendo los plug-ins, componentes y licencias. Para más información sobre la integración de plug-ins y componentes, consulte la sección \[Plugins y componentes\](#plugins-and-components). Para obtener más información sobre la integración de licencias, consulte la sección \[Licencias y certificados\](#licenses-and-certificate). **Nota**: en macOS, el comando [Archivo de aplicación](https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html) del lenguaje 4D devuelve el nombre de la ruta del archivo ApplicationName (ubicado en la carpeta Contents:macOS del paquete de software) y no el del archivo .comp (carpeta Contents: Resources del paquete de software).


#### Personalización de la carpeta 4D Volume Desktop

Cuando se construye una aplicación independiente, 4D copia el contenido de la carpeta 4D Volume Desktop en la carpeta Destination > *Final Application*. A continuación, podrá personalizar el contenido de la carpeta 4D Volume Desktop original según sus necesidades. Puede, por ejemplo:

*   Instalar una versión de 4D Volume Desktop correspondiente a un lenguaje específico;
*   Añadir una carpeta *PlugIns* personalizada;
*   Personaliza el contenido de la carpeta *Resources*. > En macOS, 4D Volume Desktop se proporciona en forma de paquete de software. Para modificarlo, primero hay que desplegar su contenido (**Control+clic** en el icono). #### Localización de los archivos web Si su aplicación ejecutable se utiliza como servidor web, los archivos y carpetas requeridos por el servidor deben instalarse en ubicaciones específicas. Estos elementos son los siguientes:</p>

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

- Para lanzar la parte del servidor, el usuario simplemente hace doble clic en la aplicación del servidor. No es necesario seleccionar la base de datos. - Para lanzar la parte cliente, el usuario simplemente hace doble clic en la aplicación cliente, que se conecta directamente a la aplicación servidor. No es necesario elegir una base de datos en una caja de diálogo de conexión. Si desea que la aplicación cliente se conecte al servidor utilizando una dirección específica (distinta del nombre del servidor publicado en la subred), debe utilizar la llave XML `IPAddress` en el archivo buildapp.4DSettings. Si la conexión falla, \[se pueden implementar mecanismos alternativos específicos\](#management-of-client-connections). Puede "forzar" la visualización de la caja de diálogo de conexión estándar presionando la tecla **Opción** (macOS) o **Alt** (Windows) mientras inicia la aplicación cliente. Sólo la parte cliente puede conectarse a la parte del servidor correspondiente. Si un usuario intenta conectarse a la parte servidor utilizando una aplicación 4D estándar, se devuelve un mensaje de error y la conexión es imposible.
- Se puede configurar una aplicación cliente/servidor para que la parte cliente [se actualice automáticamente a través de la red](#copy-of-client-applications-in-the-server-application).
- También es posible automatizar la actualización de la parte servidor mediante el uso de una secuencia de comandos del lenguaje ([SET UPDATE FOLDER](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html) y [RESTART 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html)).



### Construir aplicación de servidor

Marque esta opción para generar la parte del servidor de su aplicación durante la fase de construcción. Debe designar la ubicación en su disco de la aplicación 4D Server que va a utilizar. Este 4D Server debe corresponder a la plataforma actual (que también será la plataforma de la aplicación del servidor). #### Ubicación de 4D Server Haga clic en el botón **\[...]** y utilice la caja de diálogo *Buscar carpeta* para localizar la aplicación 4D Server. En macOS, debe seleccionar el paquete de 4D Server directamente. #### Versión actual Se utiliza para indicar el número de versión actual de la aplicación generada. A continuación, podrá aceptar o rechazar las conexiones de las aplicaciones cliente en función de su número de versión. El intervalo de compatibilidad de las aplicaciones clientes y servidor se define mediante \[llaves XML\\](#build-application-settings)). #### Modo de enlace de datos Esta opción permite elegir el modo de vinculación entre la aplicación fusionada y el archivo de datos local. Existen dos modos de vinculación de datos:

*   **Por nombre de la aplicación** (por defecto) - La aplicación 4D abre automáticamente el último archivo de datos abierto correspondiente al archivo de estructura. Esto le permite mover el paquete de aplicaciones libremente en el disco. Esta opción debe utilizarse generalmente para las aplicaciones fusionadas, a menos que necesite específicamente duplicar la aplicación.

*   **Ruta de la aplicación** - La aplicación 4D fusionada analizará el archivo *lastDataPath. xml* e intentará abrir el archivo de datos con un atributo "executablePath" que coincida con la ruta completa de la aplicación. Si se encuentra una entrada de este tipo, se abre su correspondiente archivo de datos (definido a través de su atributo "dataFilePath"). En caso contrario, se abrirá el último archivo de datos abierto (modo por defecto).

Para más información sobre el modo de vinculación de datos, consulte la sección [Último archivo de datos abierto.](#last-data-file-opened)


### Construir aplicación cliente

Marcando esta opción se genera la parte cliente de su aplicación durante la fase de construcción.

#### 4D Volume Desktop

Debe designar la ubicación en su disco de la aplicación 4D Volume Desktop a utilizar. Este 4D Volume Desktop debe corresponder a la plataforma actual (que será también la plataforma de la aplicación cliente). Si quiere generar una versión de la aplicación cliente para la plataforma "concurrente", debe realizar una operación de generación adicional utilizando una aplicación 4D que se ejecute en esa plataforma. Esto sólo es necesario para la versión inicial de la aplicación cliente, ya que las actualizaciones posteriores se pueden gestionar directamente en la misma plataforma utilizando el mecanismo de actualización automática. Para más información sobre este punto, consulte \[Personalizar las carpetas 4D Server y/o 4D Client\](#customizing-4d-server-and-or-4d-client-folders). > El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition. Para más información sobre este punto, consulte \[Personalizar las carpetas 4D Server y/o 4D Client\](#customizing-4d-server-and-or-4d-client-folders). > El número de versión de 4D Volume Desktop debe coincidir con el número de versión de 4D Developer Edition. Si desea que la aplicación cliente se conecte al servidor utilizando una dirección específica (distinta del nombre del servidor publicado en la subred), debe utilizar la llave XML `IPAddress` en el archivo buildapp.4DSettings. Para más información sobre este archivo, consulte la descripción del comando `BUILD APPLICATION`. También puede implementar mecanismos específicos en caso de fallo de la conexión. Los diferentes escenarios propuestos se describen en el párrafo [Gestión de las conexiones para las aplicaciones clientes](#management-of-client-connections).

#### Copia de las aplicaciones clientes en la aplicación servidor

Las opciones de esta área para configurar el mecanismo de actualización de las partes clientes de sus aplicaciones cliente/servidor utilizando la red cada vez que se genera una nueva versión de la aplicación.

- **Permitir la actualización automática de la aplicación cliente Windows** - Marque estas opciones para que su aplicación cliente/servidor Windows pueda aprovechar el mecanismo de actualización automática de los clientes a través de la red.
- **Permitir la actualización automática de la aplicación cliente Macintosh** - Marque estas opciones para que su aplicación cliente/servidor Macintosh pueda aprovechar el mecanismo de actualización automática para clientes a través de la red.

*   **Permitir la actualización automática de la aplicación cliente Macintosh** - Si desea crear una aplicación cliente multiplataforma, debe designar la ubicación en su disco de la aplicación 4D Volume Desktop que corresponde a la plataforma "concurrente" de la plataforma de construcción.

    Por ejemplo, si construye su aplicación en Windows, debe utilizar el botón **[...]** para designar la aplicación 4D Volume Desktop macOS (suministrada como paquete).



#### Mostrar la notificación de actualización

La notificación de actualización de la aplicación cliente se realiza automáticamente tras la actualización de la aplicación servidor.

Funciona de la siguiente manera: cuando se construye una nueva versión de la aplicación cliente/servidor utilizando el generador de aplicaciones, la nueva parte cliente se copia como un archivo comprimido en la subcarpeta **Upgrade4DClient** de la carpeta Server **ApplicationName** (en macOS, estas carpetas se incluyen en el paquete servidor). Si ha seguido el proceso de generación de una aplicación cliente multiplataforma, un archivo *4darchive* de actualización está disponible para cada plataforma: Para activar las notificaciones de actualización de la aplicación cliente, basta con sustituir la versión antigua de la aplicación servidor por la nueva y ejecutarla. El resto del proceso es automático.<p Del lado del cliente, cuando la aplicación cliente "antigua" intenta conectarse a servidor actualizada, se muestra una caja de diálogo en máquina indicando que hay nueva versión disponible. El usuario puede actualizar su versión o cancelar la caja de diálogo.

*   Si el usuario hace clic en **Aceptar**, la nueva versión se descarga en el equipo cliente a través de la red. Una vez finalizada la descarga, se cierra la aplicación cliente antigua y se lanza la nueva versión, que se conecta al servidor. La versión antigua de la aplicación se pone entonces en la papelera de reciclaje de la máquina.
*   Si el usuario hace clic en **Cancelar**, la actualización se cancela; si la versión antigua de la aplicación cliente no está en el rango de versiones aceptadas por el servidor (consulte el siguiente párrafo), la aplicación se cierra y la conexión es imposible. En caso contrario (por defecto), se establece la conexión.

#### Forzar las actualizaciones automáticas

En algunos casos, es posible que desee evitar que las aplicaciones cliente puedan cancelar la descarga de actualizaciones. Por ejemplo, ha utilizado fuente 4D Server, debe instalarse absolutamente cada cliente. Para forzar actualización, simplemente excluya número actual clientes (X-1 anteriores) compatible con este caso, mecanismo permitirá actualizadas conecten. cliente-servidor 6, estipular toda un inferior 6 podrá conectarse. El \[número actual\](build-server-application) define página Cliente>Client* y *<ApplicationName>Server*.
> Estas carpetas no se generan si se produce un error. En este caso, el mecanismo de actualización no permitirá que las aplicaciones cliente no actualizadas se conecten. Por ejemplo, si la nueva versión de la aplicación cliente-servidor es la 6, puede estipular que toda aplicación cliente con un número de versión inferior a la 6 no podrá conectarse. > > El \[número de versión actual\](build-server-application) se define en la página Cliente/Servidor del generador de la aplicación. Los intervalos de los números autorizados se definen en el proyecto de la aplicación mediante unas llaves \[XML\](#build-application-settings) específicas. > > #### Error de actualización > > Si 4D no puede realizar la actualización de la aplicación cliente, la máquina cliente muestra el siguiente mensaje de error: La aplicación va a cerrarse ahora." > > Hay muchas causas posibles de este error. Cuando le aparezca este mensaje, es aconsejable que compruebe primero los siguientes parámetros:
> 
> * **Rutas de acceso** - Compruebe la validez de las rutas de acceso definidas en el proyecto de la aplicación a través de la caja de diálogo del Generador de aplicaciones o mediante las llaves XML (por ejemplo *ClientMacFolderToWin*). Más concretamente, verifique las rutas de acceso a las versiones de 4D Volume Desktop. > * **Privilegios de lectura/escritura** - En el equipo cliente, verifique que el usuario actual tiene derechos de acceso de escritura para la actualización de la aplicación cliente. > > ### Archivos generados > > Una vez construida la aplicación cliente/servidor, encontrará una nueva carpeta en la carpeta de destino llamada **Cliente Servidor ejecutable**. Esta carpeta contiene dos subcarpetas, *<ApplicationName>Client* y *<ApplicationName>Server*.</p> 
>     > Estas carpetas no se generan si se produce un error. En este caso, abra el \[archivo-de-historial\](#archivo-de-registro) para conocer la causa del error. La carpeta *<ApplicationName>Client* contiene la parte cliente de la aplicación correspondiente a la plataforma de ejecución del generador de la aplicación. Esta carpeta debe instalarse en cada máquina cliente. La carpeta *<ApplicationName>Server* contiene la parte servidor de la aplicación.
>     > 
>     > El contenido de estas carpetas varía en función de la plataforma actual:
>     > 
>     > * *Windows* - Cada carpeta contiene el archivo ejecutable de la aplicación, llamado  *\<ApplicationName>Client.exe* para la parte cliente y *\<ApplicationName>Server.exe* para la parte servidor, así como los archivos .rsr correspondientes. Las carpetas también contienen varios archivos y carpetas necesarios para el funcionamiento de las aplicaciones y los elementos personalizados que pueden estar en las carpetas 4D Volume Desktop y 4D Server de origen. * *macOS* - Cada carpeta contiene sólo el paquete de aplicaciones, llamado\<ApplicationName> Client para la parte cliente y \<ApplicationName> Server para la parte servidor. Cada paquete contiene todos los elementos necesarios para que la aplicación funcione. En macOS, se lanza un paquete haciendo doble clic en él. > Los paquetes macOS generados contienen los mismos elementos que las subcarpetas Windows. Se puede visualizar su contenido (**Control+clic** sobre el icono) para poder modificarlo.</p> </blockquote>
>     > 
>     > Si ha marcado la opción "Permitir la actualización automática de la aplicación cliente", se añade una subcarpeta adicional llamada *Upgrade4DClient* en la carpeta/paquete *<ApplicationName>Server*. Esta subcarpeta contiene la aplicación cliente en formato macOS y/o Windows como archivo comprimido. Este archivo se utiliza durante la actualización automática de las aplicaciones clientes.
>     > 
>     > #### Personalizar la carpeta 4D Volume Desktop
>     > 
>     > Durante la creación de una aplicación ejecutable, 4D duplica el contenido de la carpeta 4D Volume Desktop en la subcarpeta Final Application de la carpeta de destino. A continuación, podrá personalizar el contenido de la carpeta 4D Volume Desktop original según sus necesidades. * Marcador="*" level="0" spaces="0" spaces-after-marker="2"{\[--gt--]} carpeta raíz de la web por defecto.. Los elementos deben estar instalados: - **en Windows**: en la subcarpeta *Aplicación final*.. - **en macOS**: junto al paquete de software *MyProject.app*. ## Página de cliente/servidor En esta pestaña se pueden construir aplicaciones cliente-servidor personalizadas, homogéneas, multiplataforma y con opción de actualización automática. !\[\\](assets/en/Project/buildappCSProj.png) ### ¿Qué es una aplicación Cliente/Servidor? Una aplicación cliente/servidor surge de la combinación de tres elementos: - Una base de datos compilada en 4D, - La aplicación 4D Server, - Marcador="-" level="0" spaces="0" spaces-after-marker="0">La aplicación 4D Volume Desktop (macOS y/o Windows).. Estos elementos son los siguientes: > > > >     - Archivos*cert.pem* y *key.pem* (opcional): estos archivos se utilizan para las conexiones SSL y por los comandos de encriptación de datos, > >     - Carpeta raíz Web por defecto (WebFolder). Estos elementos son los siguientes: - Archivos*cert.pem* y *key.pem* (opcional): estos archivos se utilizan para las conexiones SSL y por los comandos de encriptación de datos, - Carpeta raíz Web por defecto (WebFolder). Estos elementos son los siguientes:
>     > 
>     > - Archivos*cert.pem* y *key.pem* (opcional): estos archivos se utilizan para las conexiones SSL y por los comandos de encriptación de datos,
>     > - Carpeta raíz Web por defecto (WebFolder).
>     > 
>     > Los elementos deben ser instalados:
>     > 
>     > * **en Windows**
>     >     
>     >     * **Aplicación servidor** - en la subcarpeta *ejecutable Client Server \ \<ApplicationName>Server\Server Database* subfolder.
>     >     * **Aplicación Cliente** - en la subcarpeta *ejecutable Client Server\ \<ApplicationName>Client*.
>     > * **en macOS**
>     >     
>     >     * **Aplicación servidor** - junto al paquete de software *\<ApplicationName>Server*.
>     >     * **Aplicación Cliente** - junto al paquete de software *\<ApplicationName>Client*.
>     > 
>     > ## Página plugins y componentes
>     > 
>     > En esta pestaña, define cada [plug-in](Concepts/plug-ins.md) y cada [componente](Concepts/components.md) que utilizará en su aplicación autónoma o cliente/servidor.
>     > 
>     > La página enumera los elementos cargados por la aplicación 4D actual:
>     > 
>     > ![](assets/en/Project/buildapppluginsProj.png)
>     > 
>     > * Columna **Active** - Indica que los elementos se integrarán en el paquete de aplicación creado. Todos los elementos están marcados por defecto. Para excluir un plug-in o un componente, desmarque la casilla junto a él.
>     > 
>     > * **Plugins y componentes**: muestra el nombre del plugin/componente.
>     > 
>     > * **ID**: muestra el número de identificación del plugin/componente (si lo hubiera).
>     > 
>     > * **Tipo**: columna indica el tipo de elemento: plug-in o componente.
>     > 
>     > Si desea integrar otros plug-ins o componentes en la aplicación ejecutable, solo debe colocarlos en una carpeta **PlugIns** o **Componentes** junto a la aplicación 4D Volume Desktop o de la aplicación 4D Server. El mecanismo de copia del contenido de la carpeta de la aplicación fuente (ver \[Personalizar la carpeta 4D Volume Desktop\](#customizing-4d-volume-desktop-folder)) puede utilizarse para integrar todo tipo de archivo en la aplicación ejecutable. > > Si hay un conflicto entre dos versiones diferentes del mismo plug-in (una cargada por 4D y la otra ubicada en la carpeta de la aplicación fuente), tiene prioridad el plug-in instalado en la carpeta 4D Volume Desktop/4D Server. Sin embargo, si hay dos instancias del mismo componente, la aplicación no se abrirá.
>     > 
>     > > El uso de plug-ins y/o componentes en una versión de despliegue requiere los números de licencia necesarios.
>     > 
>     > ## Página Licencias y Certificados
>     > 
>     > La página Licencias y Certificados se puede utilizar para:
>     > 
>     > * designar el número o los números de licencia que desea integrar en su aplicación autónoma de usuario único
>     > * firmar la aplicación mediante un certificado en macOS.
>     > 
>     > ![](assets/en/Project/buildapplicenseProj.png)
>     > 
>     > ### Licencias
>     > 
>     > Esta pestaña muestra la lista de licencias de despliegue disponibles que puedes integrar en su aplicación. Por defecto, la lista está vacía. Debe añadir explícitamente su licencia *4D Developer Professional*, así como cada licencia *4D Desktop Volume* que se vaya a utilizar en la aplicación generada. Puede añadir otro número de 4D Developer Professional y sus licencias asociadas distintas de la que se está utilizando actualmente. {\[--gt--]} > Para eliminar o añadir una licencia, utilice los botones **\[+]** y **\[-]** de la parte inferior de la ventana. Para más información sobre la ubicación de esta carpeta, consulte el comando \[Get 4D folder\\\\](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html). > > Debe designar los archivos que contienen su licencia de desarrollador así como los que contienen sus licencias de despliegue. Estos archivos se generaron o actualizaron cuando se adquirió la licencia *4D Developer Professional* y las licencias *4D Desktop Volume*.
>     > 
>     > Una vez seleccionado un archivo, la lista indicará las características de la licencia que contiene.
>     > 
>     > 

<li marcador="*" spaces-after->
  <strong x-id="1">Licencia #</strong> - Número de licencia del producto
</li>.
>     > 
>     > * **Licencia** - Nombre del producto
>     > * **Fecha de caducidad** - Fecha de caducidad de la licencia (si la hay).
>     > * **Ruta** - Ubicación en el disco.
>     > 
>     > Si una licencia no es válida, un mensaje le avisará.<p

Puede designar tantos archivos válidos como desee. Al generar una aplicación ejecutable, 4D utilizará la licencia más apropiada disponible.> Se requieren licencias "R" dedicadas para generar aplicaciones basadas en versiones "R-release" (los números de licencia de los productos "R" empiezan por "R-4DDP"). Después de generar la aplicación, se incluye automáticamente un nuevo archivo de licencia de despliegue en la carpeta Licencias junto a la aplicación ejecutable (Windows) o en el paquete (macOS). ### Certificado de firma de OS X

El generador de aplicaciones puede firmar aplicaciones 4D fusionadas bajo macOS (aplicaciones monopuesto, 4D Server y partes cliente en macOS). La firma de una aplicación autoriza su ejecución mediante la funcionalidad Gatekeeper de macOS cuando se selecciona la opción "Mac App Store y desarrolladores identificados" (ver "Acerca de Gatekeeper" más adelante).</p>

>     > 
>     > - Marque la opción **Firmar la aplicación** para incluir la certificación en el procedimiento de creación de aplicaciones para OS X. 4D verificará la disponibilidad de los elementos necesarios para la certificación cuando se produzca la creación:
>     > 
>     > <img src="assets/es/Project/buildapposxcertProj.png" alt=" />
>     > 
>     > Esta opción se muestra tanto en Windows como en macOS, pero sólo se tiene en cuenta para las versiones de macOS.
>     > 
>     > * **Nombre del certificado** - Introduzca el nombre de su certificado de desarrollador validado por Apple en esta área de entrada. El nombre del certificado suele ser el nombre del certificado en el utilitario Keychain Access (parte en rojo en el siguiente ejemplo): {\[--lt--]}img src="> Para obtener un certificado de desarrollador de Apple, Inc. puede utilizar los comandos del menú Keychain Access o hacer clic aquí: \[http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html\\](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html). > Este certificado requiere la presencia del utilitario Apple codesign, que se ofrece por defecto y suele estar en la carpeta "/usr/bin/". Si se produce un error, asegúrese de que este utilitario está presente en su disco. Si se produce un error, asegúrese de que este utilitario está presente en su disco.</p> </blockquote> #### Sobre Gatekeeper Gatekeeper es una función de seguridad de OS X que controla la ejecución de aplicaciones descargadas de Internet. La opción **Firmar la aplicación** del generador de aplicaciones 4D permite generar aplicaciones compatibles con esta opción por defecto. Si se produce un error, asegúrese de que este utilitario está presente en su disco.&lt;/p&gt; &lt;/blockquote&gt; 
&gt;     #### Sobre Gatekeeper
&gt;     
&gt;     Gatekeeper es una función de seguridad de OS X que controla la ejecución de aplicaciones descargadas de Internet. Si una aplicación descargada no proviene del Apple Store o no está firmada, se rechaza y no se puede lanzar.</p> 
>     >     La opción **Firmar la aplicación** del generador de aplicaciones 4D permite generar aplicaciones compatibles con esta opción por defecto.
>     >     
>     >     #### Sobre la notarización
>     >     
>     >     La notarización de aplicaciones es altamente recomendada por Apple a partir de macOS 10.14.5 (Mojave) y 10.15 (Catalina), ya que las aplicaciones no notarizadas desplegadas a través de internet se bloquean por defecto.
>     >     
>     >     En 4D v18, las [funcionalidades de firma integradas](#os-x-signing-certificate) han sido actualizadas para cumplir con todos los requisitos de Apple para permitir el uso del servicio Apple notary. La notarización en sí debe ser realizada por el desarrollador y es independiente de 4D (tenga en cuenta también que requiere la instalación de Xcode). Consulte [esta entrada del blog de 4D](https://blog.4d.com/how-to-notarize-your-merged-4d-application/) que ofrece una descripción paso a paso del proceso de notarización.
>     >     
>     >     Para más información sobre el concepto de notarización, consulte [esta página del sitio web para desarrolladores de Apple](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).
>     >     
>     >     ## Personalización de los iconos de las aplicaciones
>     >     
>     >     4D asocia un icono por defecto a las aplicaciones autónomas, servidor y clientes, sin embargo se puede personalizar el icono de cada aplicación.
>     >     
>     >     * **macOs** - Cuando se crea una aplicación con doble clic, 4D se encarga de personalizar el icono. Para ello, debe crear un archivo de iconos (tipo icns), antes de crear el archivo de la aplicación, y colocarlo junto a la carpeta del proyecto.
>     >         
>     >         > Apple, Inc. ofrece una herramienta específica para crear archivos de iconos*icns* (para más información, consulte [la documentación Apple](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).
>     >         
>     >         Su archivo de iconos debe tener el mismo nombre que el archivo de proyecto e incluir la extensión *.icns*. 4D tiene en cuenta automáticamente este archivo cuando crea la aplicación de doble clic (el archivo *.icns* pasa a llamarse *ApplicationName.icns* y se copia en la carpeta Resources; la entrada *CFBundleFileIcon* del archivo *info.plist* se actualiza). Para ello, debe crear un archivo ícono (extensión *.ico*), antes de crear el archivo de la aplicación, y colocarlo junto a la carpeta del proyecto. 4D tiene en cuenta automáticamente este archivo a la hora de construir la aplicación ejecutable. {\[--lt--]}/code{\[--gt--]}&lt;/pre&gt; También puede definir \[llaves XML\\\](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) específicas en el archivo buildApp.4DSettings para designar cada icono a utilizar. Las siguientes llaves están disponibles:
>     >         
>     >         - RuntimeVLIconWinPath
>     >         - RuntimeVLIconMacPath
>     >         - ServerIconWinPath
>     >         - ServerIconMacPath
>     >         - ClientMacIconForMacPath
>     >         - ClientWinIconForMacPath
>     >         - ClientMacIconForWinPath
>     >         - ClientWinIconForWinPath
>     >         ## Gestión de archivo(s) de datos
>     >         
>     >         ### Apertura de archivo de datos
>     >         
>     >         Cuando un usuario lanza una aplicación fusionada o una actualización (aplicaciones monopuesto o cliente/servidor), 4D intenta seleccionar un archivo de datos válido. La aplicación examina sucesivamente varias ubicaciones.
>     >         
>     >         La secuencia de apertura para lanzar una aplicación fusionada es:

<ol inicio="1" espacios="0" nivel="0">
  <li>
    4D intenta abrir el último archivo de datos abierto, <a href="#last-data-file-opened">como se describe a continuación</a> (no se aplica durante el lanzamiento inicial). </li>
  
  <li>
    Si no se encuentra, 4D intenta abrir el archivo de datos en una carpeta de datos por defecto junto al archivo .4DZ en modo de sólo lectura. </li>
  
  <li>
    Si no se encuentra, 4D intenta abrir el archivo de datos estándar por defecto (mismo nombre y misma ubicación que el archivo .4DZ). </li>
  
  <li>
    Si no se encuentra, 4D muestra una caja de diálogo estándar "Abrir archivo de datos"
  </li>. </ol>

>     >         
>     >         ### Último archivo de datos abierto
>     >         
>     >         #### Ruta del último archivo de datos
>     >         
>     >         Toda aplicación autónoma o servidor construida con 4D almacena la ruta del último archivo de datos abierto en la carpeta de preferencias del usuario de la aplicación.
>     >         
>     >         La ubicación de la carpeta de preferencias del usuario de la aplicación corresponde a la ruta devuelta por la siguiente instrucción:
>     >         
>     >         ```4d
>     >         userPrefs:=Get 4D folder(Active 4D Folder)
>     >         ```
>     >         
>     >         La ruta del archivo de datos se almacena en un archivo dedicado, llamado *lastDataPath.xml*.
>     >         
>     >         Gracias a esta arquitectura, cuando se ofrece una actualización de su aplicación, el archivo de datos del usuario local (último archivo de datos utilizado) se abre automáticamente en el primer lanzamiento.
>     >         
>     >         Este mecanismo suele ser adecuado para los despliegues estándar. Sin embargo, para necesidades específicas, por ejemplo, si duplica sus aplicaciones fusionadas, es posible que desee cambiar el modo de vinculación del archivo de datos con la aplicación (descrito a continuación).
>     >         
>     >         #### Configurar el modo de vinculación de datos
>     >         
>     >         Con sus aplicaciones compiladas, 4D utiliza automáticamente el último archivo de datos abierto. Sin embargo, para necesidades específicas, por ejemplo, si duplica sus aplicaciones fusionadas, es posible que desee cambiar el modo de vinculación del archivo de datos con la aplicación (descrito a continuación).
>     >         
>     >         #### Configurar el modo de vinculación de datos
>     >         
>     >         Con sus aplicaciones compiladas, 4D utiliza automáticamente el último archivo de datos abierto. Por defecto, la ruta del archivo de datos se almacena en la carpeta de preferencias del usuario de la aplicación y está vinculada al **nombre de la aplicación**. Esto puede ser inadecuado si se quiere duplicar una aplicación fusionada que pretende utilizar diferentes archivos de datos. Las aplicaciones duplicadas en realidad comparten la carpeta de preferencias del usuario de la aplicación y, por lo tanto, siempre utilizan el mismo archivo de datos - incluso si el archivo de datos se cambia de nombre, porque se abre el último archivo utilizado para la aplicación. 4D permite, por tanto, vincular la ruta del archivo de datos a la ruta de la aplicación. En este caso, el archivo de datos se relacionará con una ruta específica y no será simplemente el último archivo abierto. Este modo le permite duplicar sus aplicaciones fusionadas sin romper el vínculo con el archivo de datos. Sin embargo, con esta opción, si el paquete de la aplicación se mueve en el disco, se solicitará al usuario un archivo de datos, ya que la ruta de la aplicación ya no coincidirá con el atributo "executablePath" (después de que un usuario haya seleccionado un archivo de datos, el archivo *lastDataPath.xml* se actualiza en consecuencia). *Duplicación cuando los datos están vinculados por el nombre de la aplicación:* !\[](assets/en/Project/datalinking1.png) *Duplicación cuando los datos están vinculados por la ruta de la aplicación:* !\[\\](assets/en/Project/datalinking2.png) Puede seleccionar el modo de vinculación de datos durante el proceso de generación de la aplicación. Puede: - Utilizar la \[página Aplicación\](#aplicación) o \[página Cliente/Servidor\](#client-server) de la caja de diálogo Generar una aplicación. Puede:
>     >         
>     >         - Utilizar la [página Aplicación](#aplicación) o [página Cliente/Servidor](#client-server) de la caja de diálogo Generar una aplicación.
>     >         - Utilizar la llave XML **LastDataPathLookup** (aplicación monopuesto o aplicación servidor).
>     >         ### Definición de una carpeta de datos por defecto
>     >         
>     >         4D permite definir una carpeta de datos por defecto en la fase de generación de la aplicación. Cuando la aplicación se lanza por primera vez, si no se encuentra ningún archivo de datos local (ver \[secuencia de lanzamiento descrita anteriormente\](#opening-the-data-file)), el archivo de datos por defecto se abre automáticamente y de forma silenciosa en modo de sólo lectura por 4D. Esto le da un mejor control sobre la creación y/o apertura de archivos de datos al lanzar una aplicación fusionada por primera vez. Más concretamente, se cubren los siguientes casos: - Evitar la visualización de la caja de diálogo "Abrir archivo de datos" de 4D al lanzar una aplicación fusionada nueva o actualizada. Puede detectar, por ejemplo al inicio, que se ha abierto el archivo de datos por defecto y así ejecutar su propio código y/o diálogos para crear o seleccionar un archivo de datos local.</li> 
>     >         
>     >         - Permitir la distribución de aplicaciones fusionadas con datos de sólo lectura (para aplicaciones de demostración, por ejemplo).</ul> 
>     >         
>     >         Para definir y utilizar un archivo de datos por defecto:
>     >         
>     >         - Debe ofrecer un archivo de datos por defecto (llamado "Default.4DD") y lo almacena en una carpeta por defecto (llamada "Default Data") dentro de la carpeta del proyecto de la base. Este archivo debe suministrarse junto con todos los demás archivos necesarios, dependiendo de la configuración de la base: índice (.4DIndx), Blobs externos, journal, etc. Es su responsabilidad proveer un archivo de datos válido por defecto. Tenga en cuenta, sin embargo, que como un archivo de datos por defecto se abre en modo de sólo lectura, se recomienda desmarcar la opción "Utilizar archivo de historial" en el archivo de estructura original antes de crear el archivo de datos. - Cuando se genera la aplicación, la carpeta de datos por defecto se integra en la aplicación fusionada. Todos los archivos dentro de esta carpeta de datos por defecto también están anidados. El siguiente gráfico ilustra esta funcionalidad: !\[ mark=\](assets/es/Project/DefaultData.png) Cuando se detecta el archivo de datos por defecto en el primer lanzamiento, se abre silenciosamente en modo de sólo lectura, permitiendo así ejecutar cualquier operación personalizada que no modifique el propio archivo de datos. ## Gestión de la(s) conexión(es) cliente La gestión de las conexiones por parte de las aplicaciones cliente abarca los mecanismos por los que una aplicación cliente fusionada se conecta al servidor de destino, una vez que está en su entorno de producción. ### Escenario de conexión El procedimiento de conexión para aplicaciones cliente fusionadas soporta casos en los que el servidor dedicado no está disponible. El escenario de inicio de una aplicación cliente 4D es el siguiente: - La aplicación cliente intenta conectarse al servidor utilizando el servicio de descubrimiento (basado en el nombre del servidor, publicado en la misma subred). O Si la información de conexión válida se almacena en el archivo "EnginedServer.4DLink" dentro de la aplicación cliente, la aplicación cliente intenta conectarse a la dirección del servidor especificada. El escenario de inicio de una aplicación cliente 4D es el siguiente:&lt;/p&gt; - La aplicación cliente intenta conectarse al servidor utilizando el servicio de descubrimiento (basado en el nombre del servidor, publicado en la misma subred). El escenario de inicio de una aplicación cliente 4D es el siguiente:</p> - La aplicación cliente intenta conectarse al servidor utilizando el servicio de descubrimiento (basado en el nombre del servidor, publicado en la misma subred). El escenario de inicio de una aplicación cliente 4D es el siguiente:</p> 
>     >             - La aplicación cliente intenta conectarse al servidor utilizando el servicio de descubrimiento (basado en el nombre del servidor, publicado en la misma subred).  
>     >                 O  
>     >                 Si la información de conexión válida se almacena en el archivo "EnginedServer.4DLink" dentro de la aplicación cliente, la aplicación cliente intenta conectarse a la dirección del servidor especificada.
>     >             
>     >             - Si esto falla, la aplicación cliente intenta conectarse al servidor utilizando la información almacenada en la carpeta de preferencias del usuario de la aplicación (archivo "lastServer.xml", ver último paso).
>     >             
>     >             - Si esto falla, la aplicación cliente muestra una caja de diálogo de error de conexión. 
>     >                 - Si el usuario hace clic en el botón **Seleccionar...** (cuando lo permita el desarrollador de 4D en la etapa de creación, ver más adelante), se muestra la caja de diálogo estándar "Conexión servidor".
>     >                 - Si el usuario hace clic en el botón **Salir**, la aplicación cliente se cierra.
>     >             - Si la conexión tiene éxito, la aplicación cliente guarda esta información de conexión en la carpeta de preferencias del usuario de la aplicación para su uso futuro.
>     >             ### Guardar la última ruta del servidor
>     >             
>     >             La última ruta del servidor utilizada y validada se guarda automáticamente en un archivo llamado "lastServer.xml" en la carpeta de preferencias usuario de la aplicación. Esta carpeta se almacena en la siguiente ubicación: ```4d userPrefs:=Get 4D folder(Active 4D Folder) ``` Este mecanismo aborda el caso de que el servidor de destino primario no esté disponible temporalmente por alguna razón (modo mantenimiento, por ejemplo). Cuando se produce este caso por primera vez, se muestra la caja de diálogo de selección de servidor (si está permitido, ver más adelante) y el usuario puede seleccionar manualmente un servidor alternativo, cuya ruta se guarda si la conexión tiene éxito. Toda indisponibilidad posterior se gestionaría automáticamente a través de la información de la ruta "lastServer.xml".
>     >             
>     >             > - Cuando las aplicaciones cliente no pueden beneficiarse permanentemente del servicio de descubrimiento, por ejemplo debido a la configuración de la red, se recomienda que el desarrollador indique un nombre de host en el momento de la compilación utilizando la llave [DirecciónIP](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) en el archivo "BuildApp.4DSettings". El mecanismo aborda los casos de indisponibilidad temporal.  
>     >             > - Se sigue soportando en todos los casos la pulsación de la tecla **Alt/Option** al inicio para mostrar la caja de diálogo de selección de servidor.
>     >             
>     >             ### Disponibilidad de la caja de diálogo de selección de servidor en caso de error
>     >             
>     >             Puede elegir si desea o no mostrar la caja de diálogo de selección de servidor estándar en las aplicaciones cliente fusionadas cuando no se pueda acceder al servidor. La configuración depende del valor de la llave XML \[ServerSelectionAllowed\](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) en la máquina donde se generó la aplicación:
&gt;             
&gt;             - **Presentación de un mensaje de error sin acceso posible a la caja de diálogo de selección de servidor**. Funcionamiento por defecto. La aplicación sólo puede salir.  
>     >             `ServerSelectionAllowed`: **False** o llave omitida. ![ mark=](assets/es/Project/connect1.png)
>     >         
>     >         - **Visualización de un mensaje de error con acceso posible a la caja de diálogo de selección del servidor**. El usuario puede acceder a la ventana de selección del servidor haciendo clic en el botón **Seleccionar...**. `ServerSelectionAllowed`: **True** !\[](assets/en/Project/connect2.png) !\[\\](assets/en/Project/connect3.png)
