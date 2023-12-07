---
id: qodly-studio
title: Qodly Studio
---

:::caution Vista previa para desarrolladores

Qodly Studio en 4D se encuentra actualmente en la fase **Developer Preview**. No debe utilizarse en producción.

:::

**Qodly Studio** forma parte de la **plataforma Qodly**, dedicada al desarrollo de aplicaciones web profesionales diseñadas, probadas y publicadas íntegramente en Qodly Cloud.

A partir de 4D v20 R2, puede utilizar Qodly Studio directamente desde 4D para crear interfaces web modernas y sofisticadas que puede integrar fácilmente a sus proyectos 4D existentes y desplegar **in situ**.

Con Qodly Studio, descubrirá una interfaz de usuario web totalmente nueva, se familiarizará con el concepto de fuentes de datos y aprenderá a:

- crear formularios web colocando componentes en una página
- mapear componentes a datos
- activar código 4D configurando eventos
- y mucho más.

:::info

El uso de Qodly Studio en 4D requiere una licencia específica. Las opciones y elementos de menú de Qodly Studio no aparecerán si la licencia no está activada.

:::

## Configuración

### Requisitos

#### Navegador

Qodly Studio soporta los siguientes navegadores web:

- Chrome
- Edge
- FireFox

La resolución recomendada es 1920x1080.

#### Aplicación 4D

- Desarrollo: 4D v20 R2 o superior
- Despliegue: 4D Server v20 R2 o superior
- Qodly Studio solo funciona con proyectos 4D (no soporta bases de datos binarias).


### Acceso a Qodly Studio

Por defecto, no se permite el acceso a Qodly Studio.

Qodly Studio es servido por el [servidor web WebAdmin](../Admin/webAdmin.md) y muestra datos de proyectos 4D gestionados por el [servidor web 4D](webServer.md).

Para permitir el acceso a Qodly Studio, debe permitirlo explícitamente en dos niveles:

* a nivel 4D (4D o 4D Server)
* a nivel del proyecto

Si uno de los dos niveles (o ambos) no están habilitados, se niega el acceso a Qodly Studio (se devuelve una página 403).

#### En nivel 4D

Como primer nivel de seguridad, necesita [permitir el acceso a Qodly Studio en el servidor web WebAdmin](../Admin/webAdmin.md#enable-access-to-qodly-studio).

Esta configuración se aplica a la aplicación 4D (4D o 4D Server) en la máquina local. Todos los proyectos abiertos con esa aplicación 4D tienen en cuenta esta configuración.

Mantenga esta opción desmarcada si desea asegurarse de que no se permite el acceso a Qodly Studio en la aplicación.

Marque esta opción para poder acceder a Qodly Studio. Sin embargo, sigue siendo necesario activarla en cada nivel del proyecto.

Además, puede [configurar el puerto HTTP/HTTPS del servidor web WebAdmin utilizado](../Admin/webAdmin.md#accept-http-connections-on-localhost).

:::note

Después de cualquier cambio en estos parámetros, debe [reiniciar el servidor web WebAdmin](../Admin/webAdmin.md#start-and-stop) para que la nueva configuración sea efectiva.

:::

#### A nivel del proyecto

Después de haber habilitado el acceso a Qodly Studio en el nivel 4D, es necesario designar explícitamente cada proyecto al que se puede acceder. La opción **Enable access to Qodly Studio** debe estar habilitada en la página [Funcionalidades Web de los parámetros de la aplicación 4D](../settings/web.md#enable-access-to-qodly-studio).

Tenga en cuenta que los [parámetros de usuario](../settings/overview.md) pueden definirse a varios niveles y que se aplican prioridades.


### Activando la autenticación

La autenticación en el servidor web WebAdmin se realiza utilizando una llave de acceso. Para más detalles, consulte [Llave de acceso](../Admin/webAdmin.md#access-key).

### Activación del renderizado

Para habilitar el renderizado de los webforms que se crean en Qodly Studio, se deben configurar las siguientes opciones.

* El proyecto 4D debe tener activada la opción **Parámetros** > **Web** > **Funcionalidades Web** > [**Exponer como servidor REST**](../settings/web.md#exposed-as-rest-server)
* El [servidor web 4D](webServer.md) debe estar en ejecución

Al renderizar webforms en el Web Studio, el renderizador se conectará al servidor web 4D a través de HTTP o HTTPS, dependiendo de la configuración, siguiendo el mismo patrón de conexión HTTP/HTTPS que para el [servidor web WebAdmin](../Admin/webAdmin.md#accept-http-connections-on-localhost).

:::info

Consulte [esta página](https://developer.qodly.com/docs/studio/rendering) para obtener información sobre cómo renderizar formularios web en Qodly.

:::

Tenga en cuenta que cuando presione el botón "Vista previa en una nueva pestaña", se abrirá una pestaña en `IP:port/$lib/renderer/?w=WebFormName` en su máquina.

Tenga en cuenta que Qodly Web Studio se ejecuta a través del servidor web 4D WebAdmin. Cuando utiliza Qodly Web Studio como desarrollador, incluso cuando previsualiza un formulario web en el estudio, está utilizando el servidor web 4D WebAdmin. Esto le permite ver, por ejemplo, clases de datos, funciones y atributos que no están expuestos como recursos REST (aparecen en gris).

Sin embargo, el renderizado del formulario web ocurre fuera de 4D Web Studio, y es servido por el servidor web estándar de 4D. En esta situación, su aplicación web no puede acceder a activos que no estén expuestos como recursos REST. Consulte [Funciones expuestas frente a no expuestas](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) y [Exposición de tablas](../REST/configuration.md#exposing-tables) para obtener más información sobre cómo exponer activos.

:::note

Los [botones del renderizador](https://developer.qodly.com/docs/studio/rendering#how-to-render-a-webform) se ocultan si las opciones de configuración no están activadas.

:::

### Servidor WebAdmin y despliegue

Para el despliegue, el servidor WebAdmin no es necesario. El acceso del usuario final a su aplicación web realizada con Qodly Studio se basa en el protocolo 4D REST, y como tal, funciona como a través de una aplicación remota 4D convencional.


### Uso métodos proyecto

Recomendamos utilizar funciones clase en lugar de métodos proyecto. Sólo las funciones de clase pueden ser llamadas desde los componentes. Sin embargo, puede seguir utilizando sus métodos de proyecto en Qodly Studio de dos maneras:

- Puede llamar a sus métodos desde funciones clase.
- Puede [ejecutar sus métodos](https://developer.qodly.com/docs/studio/coding#methods-and-classes) directamente desde el Explorador de Qodly.

## Abrir Qodly Studio

La página de Qodly Studio está disponible cuando el [servidor web WebAdmin](../Admin/webAdmin.md#start-and-stop) se está ejecutando y la autenticación está activada (ver arriba).

Hay dos formas de acceder a Qodly Studio:

* desde su aplicación monopuesto 4D, vaya a **Diseño** > **Qodly Studio...**. Si el servidor web WebAdmin ya está en funcionamiento, dependiendo de su configuración, su navegador por defecto se abre en `IPaddress:HTTPPort/studio` o `IPaddress:HTTPSPort/studio`. De lo contrario, se le preguntará si desea iniciar primero el servidor web WebAdmin.

* en un navegador, con el servidor web WebAdmin en ejecución (lanzado desde 4D o 4D Server), introduzca la siguiente dirección:

`IPaddress:HTTPPort/studio`

o:

`IPaddress:HTTPSPort/studio`

Por ejemplo, después de iniciar un servidor web local en el puerto 7080, escriba esta dirección en su navegador:

`localhost:7080/studio`

A continuación, se le pedirá que introduzca la [llave de acceso](../Admin/webAdmin.md#access-key) para acceder a Qodly Studio.


## Utilizar Qodly Studio

La documentación oficial de Qodly Studio está disponible en el [sitio web de documentación Qodly](https://developer.qodly.com/docs/studio/overview).

Puede confiar en esta documentación y sus recursos asociados para desarrollar aplicaciones web basadas en formularios web. Sin embargo, dependiendo de la fase de implementación, los desarrolladores 4D utilizarán Qodly Studio o 4D IDE.

:::info

No existe compatibilidad directa entre las aplicaciones implementadas con 4D y las implementadas con Qodly.

:::

### Comparación de funcionalidades

|                                                               | Qodly Studio para desarrolladores 4D que utilizan 4D IDE                                        | Qodly Studio para desarrolladores Qodly       |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Ver y editar tablas (clases de datos), atributos y relaciones | Editor de estructura 4D(1)                                                                      | Qodly Studio Model Editor                     |
| Webforms                                                      | Qodly Studio Webform Editor                                                                     | Qodly Studio Webform Editor                   |
| Formularios de escritorio                                     | 4D IDE                                                                                          | *no soportado*                                |
| Lenguaje de programación                                      | Lenguaje 4D con ORDA                                                                            | QodlyScript con ORDA                          |
| Coding IDE                                                    | Editor de código IDE 4D/VS Code con [extensión 4D](https://github.com/4d/4D-Analyzer-VSCode)(2) | Editor de código Qodly Studio                 |
| Debugger                                                      | Depurador 4D IDE                                                                                | Qodly Studio debugger                         |
| REST/Web roles and privileges                                 | roles.json direct edit/Qodly Studio roles and privileges editor                                 | Editor de roles y privilegios de Qodly Studio |

(1) If you click on the **Model** button in Qodly Studio, nothing happens. (2) When you open some 4D code in Qodly Studio, syntax coloring is not available and a "Lsp not loaded" warning is displayed.


### Gestión de proyectos

In accordance with the management of 4D projects, only the following usages are supported:

- development with Qodly Studio must be done using **4D** (single-user).
- deployment of 4D applications powered with Qodly webforms must be done using **4D Server**.


### Problema conocido

- In the current implementation, building merged 4D applications (stand-alone and server) that use Qodly webforms requires that the *.4dz* packed architecture be disabled, otherwise 404 errors are returned. If you build such merged applications, make sure you set the [`PackProject` XML key](https://doc.4d.com/4Dv20R2/4D/20-R2/PackProject.300-6439954.en.html) to `False` in the buildApp.4DSettings file.


### De QodlyScript al lenguaje 4D

4D developers can use the [Qodly Studio documentation](developer.qodly.com/docs/studio) to learn how to design their webforms in Qodly Studio. Code examples are provided in QodlyScript, but since QodlyScript inherits from the 4D Language, you won't be lost. Converting QodlyScript code to 4D language is easy, it only requires some adaptations:

#### Nombres de variables

QodlyScript only support local variables, so variables in QodlyScript examples are not prefixed with `$`. In the 4D code, make sure to **prefix variable names with `$`** so that they are identifed as local variables by 4D.

#### Símbolos y palabras clave

Some basic symbols, operators, and keywords differ in QodlyScript and must be adapted to the 4D Language. Estas se listan a continuación:

| QodlyScript | Lenguaje 4D                                                 | Comentario              |
| ----------- | ----------------------------------------------------------- | ----------------------- |
| ,           | ;                                                           | separador de argumentos |
| =           | :=                                                          | operador de asignación  |
| ==          | =                                                           | operador de comparación |
| declare     | #Declare                                                    |                         |
| switch      | Case of                                                     |                         |
| constructor | Class constructor                                           |                         |
| extends     | Class extends                                               |                         |
| end         | End for, End For each, End if, End case, End use, End while |                         |
| forEach     | For each                                                    |                         |
| string      | Text                                                        | tipo de variable        |
| number      | Real                                                        | tipo de variable        |

Some other items have a different case (ex: `this` vs `This`) but can be pasted directly in 4D code.


#### Nombres de comandos

QodlyScript command names are written in camel case without spaces. You might need to adapt these commands to the 4D Language.

- Normalmente, sólo tendrá que convertir los nombres. For example, `newCollection` in QodlyScript is `New collection` in 4D Language.
- However, some command have been renamed for a better compliance. Estas se listan a continuación:

| QodlyScript            | Lenguaje 4D      |
| ---------------------- | ---------------- |
| `atan`                 | `Arctan`         |
| `highestProcessNumber` | `Count tasks`    |
| `callChain`            | `Get call chain` |
| `objectClass`          | `OB Class`       |
| `objectCopy`           | `OB Copy`        |
| `objectEntries`        | `OB Entries`     |
| `instanceOf`           | `OB Instance of` |
| `objectIsDefined`      | `OB Is defined`  |
| `objectIsEmpty`        | `OB Is empty`    |
| `objectIsShared`       | `OB Is shared`   |
| `objectKeys`           | `OB Keys`        |
| `objectRemove`         | `OB REMOVE`      |
| `objectValues`         | `OB Values`      |
| `sqrt`                 | `Square root`    |


#### Ejemplo

- Código QodlyScript:

```qs
 declare(entitySelection : 4D.EntitySelection)  
 var dataClass : 4D.DataClass
 var entity, duplicate : 4D.Entity
 var status : object
 dataClass=entitySelection.getDataClass()
 forEach(entity,entitySelection)
    duplicate=dataClass.new()
    duplicate.fromObject(entity.toObject())
    duplicate[dataClass.getInfo().primaryKey]=null
    status=duplicate.save()
 end
```



- Código 4D equivalente:

```4d
 #DECLARE ( $entitySelection : 4D.EntitySelection )  
 var $dataClass : 4D.DataClass
 var $entity; $duplicate : 4D.Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null
    $status:=$duplicate.save()
 End for each

```

## Sobre la licencia de uso

To render webforms, you must have an available license, as rendering a webform opens a session on the project database's main web server.

### Esquemas URL

Qodly Studio's URL scheme configuration (HTTP and HTTPS) determines how many licenses are retained when rendering webforms. With the appropriate configuration, you can avoid unnecessary license retaining.

As explained in the [configuration](#configuration) section, the WebAdmin web server provides a secured web access to Qodly Studio. On the other hand, the [renderer](#rendering-webforms) communicates with the 4D web server of the database using REST requests. Como tal, se comporta como un Cliente 4D convencional.

If you run the renderer from the Qodly Studio and these two web servers are not reached through the same URL scheme (HTTP or HTTPS), it might lead to wrong licence counting.

#### Ejemplo

1. You run the Qodly Studio on an HTTPS URL scheme (e.g. `https://127.0.0.1:7443/studio/`)

2. The web server of your database is started only on an HTTP port.

![alt-text](../assets/en/WebServer/schemes.png)

3. In Qodly Studio, you click on the **rendering** icon. You are warned that the two web servers are started on different schemes, but despite this you click on the **Confirm** button.

![alt-text](../assets/en/WebServer/render-button.png)

Como resultado, se conservan dos licencias.

:::note

You can enable/disable the display of the renderer pop over using a Qodly Studio user setting.

:::

### Atributo SameSite

The behavior previously described is due to the session cookie of the 4D web server. This session cookie has a `SameSite` attribute that determines if the session cookie is sent to the web server.

If the `SameSite` attribute's value is `Strict` (default), the session cookie is not sent to the web server, so a new session is opened each time a page is rendered or refreshed.

For more information on the `SameSite` attribute, check out [this blog post](https://blog.4d.com/get-ready-for-the-new-SameSite-and-secure-attributes-for-cookies/).

### Recomendaciones

Para evitar utilizar más licencias de las necesarias, recomendamos hacer una de las siguientes cosas:

- Ejecutar el renderizador en otra pestaña del navegador (introduciendo la URL renderizada de su formulario Web: `IP:port/$lib/renderer/?w=NombreFormularioWeb`).
- Ensure the Qodly Studio and your database are reached on the same URL scheme.
- Use the `Lax` value for the [session cookie](webServerConfig.md#session-cookie-samesite) of your project database's web server.




## Hello, World

Este vídeo de 5 minutos ofrece un ejemplo "Hello World" y cubre cómo activar el acceso al estudio, crear una interfaz básica y configurar un evento que salude al usuario por su nombre:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GwIdic4OhPQ" title="Reproductor de vídeo YouTube" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
