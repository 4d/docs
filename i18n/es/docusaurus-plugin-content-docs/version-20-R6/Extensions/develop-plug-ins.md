---
id: develop-plug-ins
title: Plugins de desarrollo
---

## ¿Por qué es necesario un plug-in?

Aunque 4D ofrece cientos de métodos integrados para manipular objetos, registros e implementar la interfaz de usuario, es posible que se necesite algún uso o característica especial (que a veces depende de la plataforma): uno puede necesitar ODBC en Windows, otro puede necesitar los servicios de Apple en macOS, mientras que otro puede querer implementar herramientas estadísticas específicas, inicio de sesión en redes sociales, plataforma de pago, acceso a archivos a través de la red, una interfaz de usuario especial o una estructura de imagen privada.

Es evidente que cubrir todas las áreas de los sistemas operativos macOS y Windows por medio de los comandos de 4D sin duda conduciría a un producto con miles de comandos, y al mismo tiempo, la mayoría de los usuarios no tendrían necesidad de un conjunto tan grande de funcionalidades. Además, la creación de una herramienta tan completa haría que el entorno 4D fuera increíblemente complejo y llevaría a la mayoría de los usuarios meses de estudio antes de poder esperar resultados útiles.

La naturaleza modular del entorno 4D permite la creación de aplicaciones básicas, pero no impide el desarrollo de sistemas muy complejos. La arquitectura del plug-in 4D abre el entorno 4D a todo tipo de aplicaciones o de usuario. Los plug-ins 4D multiplican la potencia y la productividad de la aplicación o del usuario.

## ¿Qué es un plug-in y qué puede hacer?

Un plug-in es una pieza de código que 4D lanza al inicio. Añade funcionalidad a 4D y aumenta así su capacidad.

Normalmente, un plug-in hace cosas que:

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

- el [**Plugin API 4D**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), escrito en C, añade más de 400 funciones que le ayudan a crear fácilmente sus propios plug-ins para añadir nuevas funcionalidades a su aplicación 4D. Las funciones del plug-in de API de 4D gestionan todas las interacciones entre la aplicación 4D y su plug-in.
- El [**asistente de plugins 4D**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) es una herramienta esencial que simplifica la tarea de desarrollar plug-ins 4D. Escribe el código que 4D necesita para cargar e interactuar correctamente con un plug-in, permitiéndole concentrarse en su propio código.

## Compartir los plug-ins

Lo animamos a que apoye a la comunidad de desarrolladores 4D compartiendo sus plug-ins, preferiblemente en la [plataforma GitHub](https://github.com/topics/4d-plugin). Recomendamos que utilice el tema **`4d-plugin`** para ser referenciado correctamente.
