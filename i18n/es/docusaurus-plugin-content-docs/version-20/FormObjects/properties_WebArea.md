---
id: propertiesWebArea
title: Área Web
---

---
## Acceder a los métodos 4D

Puede llamar a los métodos 4D desde el código JavaScript ejecutado en un área web y recibir valores a cambio. Para poder llamar a los métodos 4D desde un área Web, debe activar la propiedad de accesibilidad de los métodos 4D ("todos").

> Esta propiedad solo está disponible si el área web [utiliza el motor de renderizado web integrado](properties_WebArea.md#use-embedded-web-rendering-engine).

Cuando esta propiedad está activada, se instancia un objeto JavaScript especial llamado `$4d`en el área web, que puede [utilizar para gestionar las llamadas a los métodos proyecto de 4D](webArea_overview.md#4d-object).



#### Gramática JSON

| Nombre               | Tipos de datos | Valores posibles            |
| -------------------- | -------------- | --------------------------- |
| methodsAccessibility | string         | "none" (por defecto), "all" |

#### Objetos soportados

[Área Web](webArea_overview.md)


---
## Variable Progression

Nombre de una variable de tipo Longint. Esta variable recibirá un valor entre 0 y 100, que representa el porcentaje de finalización de la carga de la página en el área web. Actualizado automáticamente por 4D, no puede ser modificado manualmente.

> As of 4D v19 R5, this variable is only updated on Windows if the Web area [uses the embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles               |
| -------------- | -------------- | ------------------------------ |
| progressSource | string         | Nombre de una variable Longint |

#### Objetos soportados

[Área Web](webArea_overview.md)




---
## URL

La variable URL es de tipo cadena. Contiene la URL cargada o que está siendo cargada por el área web asociada. La asociación entre la variable y el área web funciona en ambas direcciones:

*   Si el usuario asigna una nueva URL a la variable, esta URL es cargada automáticamente por el área web.
*   Toda la navegación que se realice dentro del área web actualizará automáticamente el contenido de la variable.

Esquemáticamente, esta variable funciona como el área de direcciones de un navegador web. Puede representarlo a través de un área de texto sobre el área Web.

### Variable URL y comando WA OPEN URL

La variable URL produce los mismos efectos que el comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html). No obstante, hay que señalar las siguientes diferencias:
- Para el acceso a los documentos, esta variable sólo acepta URLs que cumplan con el RFC ("file://c:/My%20Doc") y no los nombres de ruta del sistema ("c:\MyDoc"). El comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) acepta ambas notaciones.
- Si la variable URL contiene una cadena vacía, el área web no intenta cargar la URL. El comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) genera un error en este caso.
- Si la variable URL no contiene un protocolo (http, mailto, archivo, etc.), el área web añade "http://", lo que no ocurre con el comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html).
- Cuando el área web no se muestra en el formulario (cuando se encuentra en otra página del formulario), la ejecución del comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) no tiene ningún efecto, mientras que la asignación de un valor a la variable URL puede utilizarse para actualizar la URL actual.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles |
| --------- | -------------- | ---------------- |
| urlSource | string         | Una URL.         |

#### Objetos soportados

[Área Web](webArea_overview.md)






---
## Utilizar el motor de renderizado web integrado

Esta opción permite elegir entre dos motores de renderizado para el área web, dependiendo de las particularidades de su aplicación:

*   **no marcado** - `valor JSON: sistema` (por defecto): en este caso, 4D utiliza el "mejor" motor correspondiente al sistema. Esto significa que usted se beneficia automáticamente de los últimos avances en la renderización web, a través de HTML5 o JavaScript. Sin embargo, es posible que note algunas diferencias de renderizado entre plataformas. En Windows, 4D utiliza Microsoft Edge WebView2. En macOS, 4D utiliza la versión actual de WebKit (Safari).

> En Windows, si Microsoft Edge WebView2 no está instalado, 4D utiliza el motor integrado como motor de renderizado del sistema. Para saber si está instalado en su sistema, busque "Microsoft Edge WebView2 Runtime" en su panel de aplicaciones.

*   **marcado** - `valor JSON: anidado`: en este caso, 4D utiliza Chromium Embedded Framework (CEF). La utilización del motor web integrado significa que la representación de las áreas web y su funcionamiento en su aplicación son idénticos independientemente de la plataforma utilizada para ejecutar 4D (no obstante, pueden observarse ligeras variaciones de píxeles o diferencias relacionadas con la implementación de la red). La utilización del motor web integrado significa que la representación de las áreas web y su funcionamiento en su aplicación son idénticos independientemente de la plataforma utilizada para ejecutar 4D (no obstante, pueden observarse ligeras variaciones de píxeles o diferencias relacionadas con la implementación de la red).

El motor CEF tiene las siguientes limitaciones:

- [WA SET PAGE CONTENT](https://doc.4d.com/4dv19/help/command/en/page1037.html): utilizar este comando requiere que al menos una página ya esté cargada en el área (a través de una llamada a [`WA OPEN URL`](https://doc.4d.com/4dv19/help/command/en/page1020.html) o una asignación a la variable URL asociada al área).
- Cuando se activa soltar URLs mediante el selector `WA enable URL drop` del comando [WA SET PREFERENCE](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PREFERENCE.301-5232962.en.html), la primera soltada debe ir precedida de al menos una llamada a [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) o una asignación a la variable URL asociada al área.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles     |
| --------- | -------------- | -------------------- |
| webEngine | string         | "embedded", "system" |

#### Objetos soportados

[Área Web](webArea_overview.md)
