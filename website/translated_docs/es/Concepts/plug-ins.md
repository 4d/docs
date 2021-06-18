---
id: plug-ins
title: Plug-ins
---

As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding **plug-ins** to your 4D development environment.

## Why the need for a plug-in?

Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure.

It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected.

The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. 4D Plug-ins multiply that application or user's power and productivity.

## What is a plug-in and what can it do?

A plug-in is a piece of code that 4D launches at start up. It adds functionality to 4D and thus increases its capacity.

Usually, a plug-in does things that:
- 4D no puede efectuar (es decir, una tecnología de plataforma específica),
- será muy difícil de escribir sólo con 4D,
- sólo están disponibles como punto de entrada del plug-in

Un plug-in suele contener un conjunto de rutinas entregadas al desarrollador 4D. Puede manejar un Área Externa y ejecutar un proceso externo.

- Una **rutina de conexión** es una rutina escrita en lenguaje nativo (normalmente C o C++) que provoca una acción.
- Un **área externa** es una parte de un formulario que puede mostrar casi todo e interactuar con el usuario cuando sea necesario.
- Un **proceso externo** es un proceso que se ejecuta solo, normalmente en un bucle, haciendo casi todo lo que quiere. Todo el código del proceso pertenece al plug-in, 4D simplemente está presente para recibir/enviar eventos al proceso.

### Nota importante

Un plug-in puede ser muy sencillo, con una sola rutina que realice una tarea muy pequeña, o puede ser muy complejo, con cientos de rutinas y áreas. Prácticamente no hay límite para lo que puede hacer un plug-in, sin embargo todo desarrollador de plug-ins debe recordar que un plug-in es una parte de código "de muestra". Es el plug-in que se ejecuta dentro de 4D, no lo contrario. Como parte de código, es el anfitrión de 4D; no es una aplicación independiente. Comparte el tiempo de la CPU y la memoria con 4D y otros plug-ins, por lo tanto, debería ser un código conciso, utilizando sólo lo necesario para funcionar. Por ejemplo, en los bucles largos, un plug-in debe llamar a `PA_Yield()` para dar tiempo al planificador 4D a menos que su tarea sea crítica tanto para él como para la aplicación.

## ¿Cómo crear un plug-in?

4D ofrece en GitHub un código abierto [**plug-in SDK**](https://github.com/4d/4D-Plugin-SDK), que contiene el plug-in API 4D y el asistente de plugins 4D:

- el [**Plugin API de 4D **](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), escrito en C, añade más de 400 funciones que le ayudan a crear fácilmente sus propios plug-ins para añadir nuevas funcionalidades a su aplicación 4D. Las funciones del plug-in de API de 4D gestionan todas las interacciones entre la aplicación 4D y su plug-in.
- [**El Asistente de plug-in 4D**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) es una herramienta esencial que simplifica la tarea de desarrollar plugins 4D. Escribe el código que 4D necesita para cargar e interactuar correctamente con un plug-in, permitiéndole concentrarse en su propio código.

## ¿Cómo instalar un plug-in?

Los plug-ins se instalan en el entorno 4D copiando sus archivos en la carpeta correspondiente.

Las carpetas "PluginName.bundle" contienen las versiones para Windows y macOS de los plug-ins 4D. Su arquitectura interna específica permite a 4D Server cargar la versión adecuada según la plataforma en la que se ejecutará la máquina cliente. Para instalar un plug-in en su entorno, sólo tiene que poner la carpeta "PluginName.bundle" o el paquete correspondiente en la carpeta **Plugins** deseada.

Puede colocar la carpeta Plugins en dos lugares diferentes:

- A nivel de la aplicación 4D ejecutable, es decir:
  - En Windows: junto al archivo .exe
  - En macOS: en el primer nivel de la carpeta Contents dentro del paquete de la aplicación. En este caso, los plug-ins están disponibles en cada proyecto abierto por esta aplicación.
- En el mismo nivel que la carpeta Project. En este caso, los plug-ins sólo están disponibles en esta aplicación en particular.

La elección de la ubicación depende de cómo quiera utilizar el plug-in.

Si se coloca el mismo plug-in en ambas ubicaciones, 4D sólo cargará el que esté situado junto a la estructura. En una aplicación compilada y fusionada con 4D Volume Desktop, si hay varias instancias del mismo plug-in presentes, esto impedirá que la aplicación se abra.

Los plug-ins son cargados por 4D cuando se lanza la aplicación, por lo que tendrá que salir de su aplicación 4D antes de instalarlos. A continuación, abra su proyecto con 4D. Si algún plug-in requiere una licencia específica, se cargará pero no estará disponible para su uso.