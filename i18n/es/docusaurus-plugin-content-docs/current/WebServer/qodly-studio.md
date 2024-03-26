---
id: qodly-studio
title: Qodly Studio in 4D
---

:::caution Vista previa para desarrolladores

Qodly Studio en 4D se encuentra actualmente en la fase **Developer Preview**. No debe utilizarse en producción.

:::

**Qodly Studio** es un creador de interfaces para aplicaciones web. Ofrece a los desarrolladores un editor gráfico de formularios para diseñar aplicaciones que se ejecutan en navegadores web o smartphones. Soporta nativamente los objetos [ORDA](../ORDA/overview.md).

Puede utilizar Qodly Studio directamente desde su **entorno 4D** para crear interfaces modernas y sofisticadas que puede integrar fácilmente a sus proyectos 4D existentes y desplegar **in situ**.

Qodly Studio también puede utilizarse en la plataforma [**Qodly Cloud**](https://qodly.com), dedicada al desarrollo de aplicaciones empresariales web.

Con Qodly Studio, descubrirá una interfaz de usuario web totalmente nueva, se familiarizará con el concepto de fuentes de datos y aprenderá a:

- crear formularios Qodly colocando componentes en una página
- mapear componentes a datos
- activar código 4D configurando eventos
- y mucho más.

:::info

El desarrollo con Qodly Studio en 4D requiere al menos una [licencia Partner Silver 4D](https://us.4d.com/4d-partner-program). Las opciones y elementos de menú de Qodly Studio no aparecerán si la licencia no está activada.

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

As a first security level, you need to [allow access to Qodly Studio on the WebAdmin web server](../Admin/webAdmin.md#enable-access-to-qodly-studio). Esta configuración se aplica a la aplicación 4D (4D o 4D Server) en la máquina local. Todos los proyectos abiertos con esa aplicación 4D tienen en cuenta esta configuración.

Mantenga esta opción desmarcada si desea asegurarse de que no se permite el acceso a Qodly Studio en la aplicación. Marque esta opción para poder acceder a Qodly Studio. Sin embargo, sigue siendo necesario activarla en cada nivel del proyecto.

Additionally, you can [configure the WebAdmin web server's HTTP/HTTPS port used](../Admin/webAdmin.md#accept-http-connections-on-localhost).

:::note

After any change to these settings, you must [restart the WebAdmin web server](../Admin/webAdmin.md#start-and-stop) for the new configuration to be effective.

:::

#### A nivel del proyecto

Después de haber habilitado el acceso a Qodly Studio en el nivel 4D, es necesario designar explícitamente cada proyecto al que se puede acceder. The **Enable access to Qodly Studio** option must be enabled on the [Web Features page of the 4D application's Settings](../settings/web.md#enable-access-to-qodly-studio).

Keep in mind that [user settings](../settings/overview.md) can be defined at several levels, and that priorities apply.


### Activando la autenticación

La autenticación en el servidor web WebAdmin se realiza utilizando una llave de acceso. For more details, see [Access key](../Admin/webAdmin.md#access-key).


### Gestión de proyectos

De acuerdo con la gestión de proyectos 4D, sólo se admiten los siguientes usos:

- el desarrollo con Qodly Studio debe realizarse a través de **4D** (monousuario).
- el despliegue de aplicaciones 4D alimentadas con formularios Qodly debe hacerse utilizando **4D Server**.





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

### Documentation

La documentación oficial de Qodly Studio está disponible en el [sitio web de documentación Qodly](https://developer.qodly.com/docs/studio/overview).

Puede confiar en esta documentación y sus recursos asociados para desarrollar aplicaciones web basadas en formularios Qodly. However, depending on implementation stage, 4D developers will either use Qodly Studio or 4D IDE (see [Feature comparison](#feature-comparison)).

Code examples are provided in [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript), but since QodlyScript inherits from the 4D Language, you won't be lost. For more information, see the [From QodlyScript to 4D Language](from-qodlyscript-to-4d.md) page.

:::info

No existe compatibilidad directa entre las aplicaciones implementadas con 4D y las implementadas con Qodly.

:::

### Comparación de funcionalidades

|                                                               | Qodly Studio para desarrolladores 4D que utilizan 4D IDE                                        | Qodly Studio para desarrolladores Qodly                                             |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Ver y editar tablas (clases de datos), atributos y relaciones | Editor de estructura 4D(1)                                                                      | Qodly Studio Model Editor                                                           |
| Formulario Qodly                                              | Qodly Studio Webform Editor                                                                     | Qodly Studio Webform Editor                                                         |
| Formularios de escritorio                                     | 4D IDE                                                                                          | *no soportado*                                                                      |
| Lenguaje de programación                                      | Lenguaje 4D con ORDA                                                                            | [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript) featuring ORDA |
| IDE de código                                                 | Editor de código IDE 4D/VS Code con [extensión 4D](https://github.com/4d/4D-Analyzer-VSCode)(2) | Editor de código Qodly Studio                                                       |
| Depurador                                                     | Depurador 4D IDE                                                                                | Qodly Studio debugger                                                               |
| Roles y privilegios REST/Web                                  | Edición directa de roles.json/Editor de roles y permisos Qodly Studio                           | Editor de roles y privilegios de Qodly Studio                                       |

(1) Si hace clic en el botón **Model** en Qodly Studio, no ocurre nada. (2) Cuando abre algún código 4D en Qodly Studio, el coloreado de sintaxis no está disponible y se muestra una advertencia "Lsp not loaded".



### Lenguaje

The following commands and classes are dedicated to the server-side management of Qodly forms:

- [`Web Form`](../API/WebFormClass.md#web-form) command: returns the Qodly form as an object.
- [`Web Event`](../API/WebFormClass.md#web-event) command: returns events triggered within Qodly form components.
- [`WebForm`](../API/WebFormClass.md) class: functions and properties to manage the rendered Qodly form.
- [`WebFormItem`](../API/WebFormItemClass.md) class: functions and properties to manage Qodly form components.


### Uso métodos proyecto

Recomendamos utilizar funciones clase en lugar de métodos proyecto. Sólo las funciones de clase pueden ser llamadas desde los componentes. Sin embargo, puede seguir utilizando sus métodos de proyecto en Qodly Studio de dos maneras:

- Puede llamar a sus métodos desde funciones clase.
- Puede [ejecutar sus métodos](https://developer.qodly.com/docs/studio/coding#methods-and-classes) directamente desde el Explorador de Qodly.


### Uso sin conexión

Puede desarrollar con Qodly Studio mientras su ordenador no esté conectado a Internet. En este caso, sin embargo, las siguientes funciones no están disponibles:

- [Plantillas](https://developer.qodly.com/docs/studio/design-webforms/templates): la librería de plantillas está vacía
- Consejos de interfaz de usuario: no se muestran al hacer clic en los iconos ![alt-text](../assets/en/WebServer/tips.png).


## Deployment

### Activación del renderizado

Qodly Studio encapsulates Qodly forms, including layout, data connections, and event-driven logic, in a structured JSON file. This JSON file is processed on-the-fly by the **Qodly renderer** to serve a fully functional web page.

:::info

See [this page](https://developer.qodly.com/docs/studio/rendering) for detailed information on how to render Qodly forms in Qodly.

:::

Para habilitar el renderizado de formularios Qodly, deben configurarse las siguientes opciones.

* The 4D project's **Settings** > **Web** > **Web Features** > [**Expose as REST server**](../settings/web.md#exposed-as-rest-server) option must be activated.
* The [4D web server](webServer.md) must be running.

:::note

[Renderer buttons](https://developer.qodly.com/docs/studio/rendering#how-to-render-a-webform) are not available if the configuration options are not activated.

:::

### Scope of Qodly forms

When rendering Qodly forms in the Qodly Studio, the renderer will connect to the 4D web server through HTTP or HTTPS, depending on the settings, following the same HTTP/HTTPS connection pattern as for the [4D WebAdmin web server](../Admin/webAdmin.md#accept-http-connections-on-localhost). See also [this paragraph](#about-license_usage) about URL schemes and license usage.


Keep in mind that Qodly Studio runs through the 4D WebAdmin web server. Cuando utiliza Qodly Studio como desarrollador, incluso cuando previsualiza un formulario Qodly en el estudio, está utilizando el servidor web 4D WebAdmin. Esto le permite ver, por ejemplo, clases de datos, funciones y atributos que no están expuestos como recursos REST (aparecen en gris).

However, form rendering happens outside Qodly Studio, and is served by the standard 4D web server. En esta situación, su aplicación web no puede acceder a activos que no estén expuestos como recursos REST. Consulte [Funciones expuestas frente a no expuestas](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) y [Exposición de tablas](../REST/configuration.md#exposing-tables) para obtener más información sobre cómo exponer activos.




### Accessing Qodly forms

Para el despliegue, el servidor WebAdmin no es necesario. El acceso del usuario final a su aplicación web realizada con Qodly Studio se basa en el protocolo 4D REST, y como tal, funciona como a través de una aplicación remota 4D convencional.

Your Qodly forms are available through the following url:

```
IP:port/$lib/renderer/?w=QodlyFormName
```

...where *IP:port* represents the address of the web server and *QodlyFormName* is the name of the Qodly form.

Por ejemplo:

```
https://www.myWebSite.com/$lib/renderer/?w=welcome
```




## Sobre la licencia de uso

Para renderizar formularios Qodly, debe tener una licencia disponible, ya que al renderizar un formulario Qodly se abre una sesión en el servidor web principal de la base de datos del proyecto.

### Esquemas URL

La configuración del esquema URL de Qodly Studio (HTTP y HTTPS) determina cuántas licencias se retienen al renderizar los formularios Qodly. Con la configuración adecuada, puede evitar retener licencias innecesarias.

Como se explica en la sección [configuración](#configuration), el servidor web WebAdmin ofrece un acceso web seguro a Qodly Studio. Por otro lado, el renderizador [](#rendering-webforms) se comunica con el servidor web 4D de la base de datos mediante peticiones REST. Como tal, se comporta como un Cliente 4D convencional.

Si ejecuta el renderizador desde Qodly Studio y no se accede a estos dos servidores web a través del mismo esquema de URL (HTTP o HTTPS), es posible que el conteo de licencias sea incorrecto.

#### Ejemplo

1. Ejecuta Qodly Studio en un esquema URL HTTPS (por ejemplo, `https://127.0.0.1:7443/studio/`)

2. El servidor web de su base de datos se inicia sólo en un puerto HTTP.

![alt-text](../assets/en/WebServer/schemes.png)

3. In Qodly Studio, you click on the **Preview** icon. Se le advierte que los dos servidores web se están iniciando en esquemas diferentes, pero a pesar de esto, usted hace clic en el botón **Confirm**.

![alt-text](../assets/en/WebServer/render-button.png)

Como resultado, se conservan dos licencias.

:::note

Puede activar/desactivar la visualización de la ventana emergente del renderizador utilizando los parámetros de usuario de Qodly Studio.

:::

### Atributo SameSite

El comportamiento descrito anteriormente se debe a la cookie de sesión del servidor web 4D. Esta cookie de sesión tiene un atributo `SameSite` que determina si la cookie de sesión se envía al servidor web.

Si el valor del atributo `SameSite` es `Strict` (por defecto), la cookie de sesión no se envía al servidor web, por lo que se abre una nueva sesión cada vez que se renderiza o actualiza una página.

For more information on the `SameSite` attribute, check out [this blog post](https://blog.4d.com/get-ready-for-the-new-SameSite-and-secure-attributes-for-cookies/).

### Recomendaciones

Para evitar utilizar más licencias de las necesarias, recomendamos hacer una de las siguientes cosas:

- Ejecutar el renderizador en otra pestaña del navegador (introduciendo la URL renderizada de su formulario Web: `IP:port/$lib/renderer/?w=QodlyFormName`).
- Asegúrese de que Qodly Studio y su base de datos se alcanzan en el mismo esquema URL.
- Utilice el valor `Lax` para la cookie de sesión [](webServerConfig.md#session-cookie-samesite) del servidor web de la base de datos de su proyecto.




## Hello, World

Este vídeo de 5 minutos ofrece un ejemplo "Hello World" y cubre cómo activar el acceso al estudio, crear una interfaz básica y configurar un evento que salude al usuario por su nombre:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GwIdic4OhPQ" title="Reproductor de vídeo YouTube" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
