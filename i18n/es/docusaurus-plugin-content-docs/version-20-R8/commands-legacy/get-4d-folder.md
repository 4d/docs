---
id: get-4d-folder
title: Get 4D folder
slug: /commands/get-4d-folder
displayed_sidebar: docs
---

<!--REF #_command_.Get 4D folder.Syntax-->**Get 4D folder** {( *carpeta* {; *opciones*} {; *})} : Text<!-- END REF-->
<!--REF #_command_.Get 4D folder.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| carpeta | Integer | &#8594;  | Tipo de carpeta (si se omite = carpeta activa 4D) |
| opciones | Object | &#8594;  | Configuración de la ruta de la carpeta de la base 4D Client |
| * | Operador | &#8594;  | Devuelve la carpeta de la base local |
| Resultado | Text | &#8592; | Ruta de acceso a la carpeta designada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get 4D folder.Summary-->El comando **Get 4D folder** devuelve la ruta de acceso a la carpeta 4D activa de la aplicación actual o de la carpeta del entorno 4D especificada por los parámetros *opciones* y *carpeta*, si se pasa.<!-- END REF--> Este comando le permite obtener la ruta de acceso actual a las carpetas utilizadas por la aplicación 4D. Utilizando este comando, asegura que su código funcionará correctamente en todas las plataformas que se ejecuten en un sistema localizado.

En *carpeta*, puede pasar una de las siguientes constantes, ubicadas en el tema "*Entorno 4D*" (a continuación encontrará una descripción de cada carpeta):

| Constante                   | Tipo         | Valor |
| --------------------------- | ------------ | ----- |
| 4D Client database folder   | Entero largo | 3     |
| Active 4D Folder            | Entero largo | 0     |
| Current resources folder    | Entero largo | 6     |
| Data folder                 | Entero largo | 9     |
| Database folder             | Entero largo | 4     |
| Database folder Unix syntax | Entero largo | 5     |
| HTML Root folder            | Entero largo | 8     |
| Licenses folder             | Entero largo | 1     |
| Logs folder                 | Entero largo | 7     |
| MobileApps folder           | Entero largo | 10    |

El parámetro *opciones* permite personalizar la ruta de la carpeta de recursos locales. Sólo se tiene en cuenta cuando se utiliza la constante 4D Client database folder (ver abajo).   
  
**Nota**: si el comando **Get 4D folder** es llamado desde un 4D remoto, la ruta devuelta es la de la máquina remota, no la de 4D Server.

##### Carpeta 4D activa 

Las aplicaciones del entorno 4D utilizan una carpeta especifica para almacenar la siguiente información:

* Archivos de preferencias utilizados por las aplicaciones 4D
* Archivo Shortcuts.xml (atajos de teclado personalizados)
* Carpeta Macros v2 (macro comandos del editor de métodos)
* Carpeta Favorites v1x, por ejemplo Favorites v13 (rutas de acceso de las bases locales y remotas que se hayan abierto)
* Carpeta Logs para registros de mantenimiento y cuando los datos son de solo lectura

La carpeta 4D activa es creada por defecto en la siguiente ubicación:

* En Windows: *{Disk}:\\Users\\{userName}\\AppData\\Roaming\\{applicationName}*
* En macOS: *{Disk}:Users:{userName}:Library:Application Support:{applicationName}*

##### Carpeta Licencias 

Carpeta que contiene los archivos de licencia del equipo.

**Nota:** en el caso de una aplicación fusionada con 4D Volume Desktop, la carpeta de licencias está incluída en el paquete de la aplicación.

##### Carpeta de datos 

Ruta de la carpeta que contiene el archivo de datos actual. La ruta de acceso se expresa utilizando la sintaxis estándar de la plataforma actual.

##### Carpeta base 4D Client 

Ruta de la carpeta 4D creada en máquinas remotas 4D para guardar archivos y carpetas relacionados con la base (recursos, plug-ins, carpeta Resources, etc.). El comando puede devolver:

* la ruta para la aplicación actual cuando se llama en una máquina remota y se omite el parámetro *opciones*,
* la ruta para toda aplicación cuando se utiliza el parámetro *opciones* (en cuyo caso **Get 4D folder** puede llamarse en cualquier máquina).

Por defecto, la ruta es: 

* En Windows: {**Disk}:\\Users\\{UserAccount}\\AppData\\Local\\{ApplicationName}\\{StructureName\_IP\_Port\_key}*  
ej.: C:\\Users\\John Doe\\AppData\\Local\\myApp\\myApp\_192\_168\_2\_134\_19813\_157
* En macOS: *{Disk}:Users:{UserAccount}:Library:Caches:{ApplicationName} Client:{StructureName\_IP\_Port\_key}.*  
ej.:Users:John Doe:Library:Caches:myApp Client:myApp\_192\_168\_2\_134\_19813\_933

Se utilizan carpetas diferentes si se ejecutan simultáneamente varias instancias de la aplicación cliente en el mismo equipo.

**Nota:** en Windows, en los proyectos cliente fusionados, la ubicación de esta carpeta se modifica si se utiliza la llave BuildApp *ShareLocalResourcesOnWindowsClient* .

**Uso de la carpeta base 4D Client con el parámetro *opciones***

Puede utilizar el parámetro *opciones* si desea calcular cualquier ruta de carpeta local de base 4D. En este caso, la ruta se construye a partir de la información que usted suministra en el objeto *opciones* y el comando puede ser utilizado de una aplicación 4D, 4D Server, o remota. Gracias a esta funcionalidad, puede precalcular las rutas de sus carpetas de recursos, por ejemplo para precargar contenidos.

Puede pasar las siguientes propiedades en el objeto *opciones*:

| **Propiedad**                      | **Tipo** | **Descripción**                                                                                                                                                                   |
| ---------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| remoteAppPath                      | Text     | Opcional - Ruta del sistema ejecutable de la aplicación remota. Por defecto es la ruta ejecutable de la aplicación actual.                                                        |
| buildApplicationName               | Text     | Opcional: nombre de la aplicación (igual que el valor de la llave xml BuildApp *BuildApplicationName* ). Por defecto es el nombre de la aplicación actual.                        |
| structureName                      | Text     | Obligatorio excepto si está definido el atributo *clientServerSystemFolderName* \- Nombre de la estructura.                                                                       |
| ipAddress                          | Text     | Obligatorio excepto si se define el atributo *clientServerSystemFolderName* \- Dirección IP del servidor (igual que el valor de la llave xml BuildApp *IPAddress* ).              |
| portNumber                         | Number   | Obligatorio excepto si se define el atributo *clientServerSystemFolderName* \- Puerto de publicación del servidor (el mismo que el valor de la llave xml BuildApp *PortNumber* ). |
| clientServerSystemFolderName       | Text     | Opcional - Opcional - Nombre personalizado de la carpeta final de recursos locales (igual que el valor de la llave xml BuildApp *ClientServerSystemFolderName*  BuildApp).        |
| shareLocalResourcesOnWindowsClient | Boolean  | Opcional - Carpeta de recursos locales compartidos (igual que el valor de la llave xml BuildApp *ShareLocalResourcesOnWindowsClient* ).                                           |

**Nota:** la ruta devuelta se expresa utilizando la sintaxis del sistema de la máquina que ejecuta el comando.

##### Carpeta base (Database Folder) 

Carpeta que contiene el archivo de estructura de la base. La ruta de acceso se expresa utilizando la sintaxis estándar de la plataforma actual. 

Con la aplicación 4D Client, esta constante es estrictamente equivalente a la constante anterior *4D Client Database Folder*: el comando devuelve la ruta de acceso de la carpeta creada localmente.

##### Carpeta base sintaxis Unix (Database Folder Unix Syntax) 

Carpeta que contiene el archivo de estructura de la base. Esta constante designa la misma carpeta que la anterior pero la ruta de acceso que devuelve se expresa utilizando sintaxis Unix (Posix), de tipo/Usuarios/... Esta sintaxis se usa principalmente cuando utiliza el comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md) bajo OS X.

##### Carpeta Resources actual 

Carpeta Resources de la base. Esta carpeta contiene los elementos adicionales (imágenes, textos) utilizados por la interfaz de la base. Un componente puede tener su propia carpeta Resources.

En modo cliente/servidor, esta carpeta permite organizar la transferencia de datos personalizados (imágenes, archivos, subcarpetas...) entre el equipo servidor y los equipos clientes. El contenido de esta carpeta se actualiza automáticamente cada vez que un equipo cliente se conecta. Todos los mecanismos de referenciación asociados a la carpeta Resources son soportados en modo cliente/servidor (carpeta .lproj, XLIFF, imágenes...). Adicionalmente, 4D ofrece varias herramientas que pueden utilizarse para administrar y actualizar esta carpeta dinámicamente, particularmente un explorador de recursos.

**Notas:** 

* si la carpeta Resources no existe para la base, se creará ejecutando el comando Get 4D folder con la constante Current resources folder.
* En Windows, en los proyectos cliente fusionados, la ubicación de esta carpeta se modifica si se utiliza la llave BuildApp *ShareLocalResourcesOnWindowsClient* .

##### Carpeta Logs 

La carpeta Logs de la base, ubicada al mismo nivel del archivo de datos, centraliza los archivos de historial de la base actual:

* conversión de la base,
* peticiones al servidor web,
* diario de actividades backup/restaurar,
* depuración de los comandos,
* peticiones 4D server (generadas en equipos cliente y en el servidor).

**Notas**: 

* Una carpeta Logs adicional, ubicada en la carpeta de preferencias del usuario del sistema (Active 4D Folder), se utiliza para los archivos de registro de mantenimiento (compactar, verificar, reparar). Se recomienda llamar a [Get 4D file](get-4d-file.md)(archivo de registro de compactación), por ejemplo, cuando desee acceder a dichos archivos de registro. Esta carpeta de registros también se utiliza en los casos en que la carpeta de registros normales no se puede escribir.
* si la carpeta Logs no existe para la base, ejecutando el comando **Get 4D folder** con la constante Logs folder se provoca su creación.

##### Carpeta raíz HTML 

Carpeta raíz HTML actual de la base. La ruta de acceso devuelta se expresa con la sintaxis estándar de la plataforma actual. La carpeta raíz HTML es la carpeta en la cual el servidor web de 4D busca las páginas y archivos web solicitados. Por defecto, se llama **WebFolder** y se encuentra junto al archivo de estructura. Su ubicación puede definirse en la página Web/Configuración de las Preferencias o dinámicamente vía el comando [WEB SET ROOT FOLDER](web-set-root-folder.md).

**Nota:** en Windows, en los proyectos cliente fusionados, la ubicación de esta carpeta se modifica si se utiliza la llave BuildApp *ShareLocalResourcesOnWindowsClient* .

##### MobileApps Folder 

Carpeta que contiene todos los archivos de sesión existentes (.json) utilizados por la aplicación 4D para hacer referencia a sesiones de usuarios de aplicaciones móviles (es decir, sesiones de 4D para aplicaciones iOS o 4D for Android). Los archivos de sesión se agrupan en subcarpetas de aplicaciones y se crean automáticamente. Para más información, consulte la [documentación go mobile ](https://developer.4d.com/go-mobile/).

Esta carpeta se encuentra en el mismo nivel que el archivo de datos 4D actual.

##### 

El parámetro opcional *\** es útil en el caso de una arquitectura que utiliza componentes: puede utilizarse para determinar la base de datos (local o componente) para la que se desea obtener el nombre de la ruta de la carpeta. Este parámetro sólo es válido para las carpetas Database folder, Database folder UNIX syntax y Current resources folder. Se ignora en todos los demás casos.

Cuando se llama al comando desde un componente:

* Si se pasa el parámetro *\**, el comando devuelve la ruta de la carpeta de la base de datos local,
* Si no se pasa el parámetro *\**, el comando devuelve la ruta de la carpeta del componente.  
La carpeta de la base de datos (Database folder y Database folder UNIX syntax) devuelta difiere según el tipo de arquitectura del componente:  
   * En el caso de una carpeta/paquete .4dbase, el comando devuelve la ruta de la carpeta/paquete .4dbase,  
   * En el caso de un archivo .4db o .4dc, el comando devuelve la ruta de la carpeta "Componentes",  
   * En el caso de un alias o un acceso directo, el comando devuelve el nombre de la ruta de la carpeta que contiene la base de datos matriz original. El resultado difiere según el formato de esta base de datos (carpeta/paquete .4dbase o archivo .4db/.4dc), como se ha descrito anteriormente.  
 Cuando se llama al comando desde la base de datos local, siempre devuelve el nombre de la ruta de la carpeta de la base de datos del host, independientemente de que se pase o no el parámetro *\**.

#### Ejemplo 1 

Durante el inicio de una base monousuario, usted quiere cargar (o crear) sus propios parámetros en un archivo ubicado en la carpeta 4D. Para hacer esto, en el [Método base On Startup](metodo-base-on-startup.md), puede escribir código similar a este:

```4d
 $vsPrefDocName:=Get 4D folder+"MyPrefs.prf" //Construir la ruta de acceso al archivo Preferencias
  // Verificar si el archivo existe
 If(Test path name($vsPrefDocName)#Is a document)
    $vtPrefDocRef:=Create document($vsPrefDocName.prf) //Si no, crearlo
 Else
    $vtPrefDocRef:=Open document($vsPrefDocName.prf) //Si sí, abrirlo
 End if
 If(OK=1)
  //Procesar el contenido del documento
    CLOSE DOCUMENT($vtPrefDocRef)
 Else
  //Manejar el error
 End if
```

#### Ejemplo 2 

Este ejemplo ilustra el uso de la constante Database Folder Unix Syntax bajo Mac OS para listar el contenido de la carpeta de la base:

```4d
 $posixpath:="\""+Get 4D folder(Database folder Unix syntax)+"\""
 $myfolder:="ls -l "+$posixpath
 $in:=""
 $out:=""
 $err:=""
 LAUNCH EXTERNAL PROCESS($myfolder;$in;$out;$err)
```

**Nota:** bajo Mac OS, es necesario colocar las rutas de acceso entre comillas cuando contienen los nombres de archivos o de carpetas con espacios. La secuencia de escape "\\" permite insertar el carácter comillas en la cadena. También puede utilizar la instrucción Char(Double quote). 

#### Variables y conjuntos del sistema 

Si el parámetro *carpeta* no es válido o si la ruta de acceso devuelta está vacía, la varible sistema OK toma el valor 0.

#### Ver también 

[COMPONENT LIST](component-list.md)  
[System folder](system-folder.md)  
[Temporary folder](temporary-folder.md)  
[Test path name](test-path-name.md)  
[WEB SET ROOT FOLDER](web-set-root-folder.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 485 |
| Hilo seguro | &check; |
| Modifica variables | OK |


