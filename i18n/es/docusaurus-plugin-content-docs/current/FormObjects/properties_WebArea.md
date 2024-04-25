---
id: propertiesWebArea
title: Área Web
---

---

## Acceder a los métodos 4D

Puede llamar a los métodos 4D desde el código JavaScript ejecutado en un área web y recibir valores a cambio. Para poder llamar a los métodos 4D desde un área Web, debe activar la propiedad de accesibilidad de los métodos 4D ("todos").

> This property is only available if the Web area [uses the embedded Web rendering engine](#use-embedded-web-rendering-engine).

When this property is on, a special JavaScript object named `$4d` is instantiated in the Web area, which you can [use to manage calls to 4D project methods](webArea_overview.md#4d-object).

#### Gramática JSON

| Nombre               | Tipos de datos | Valores posibles                               |
| -------------------- | -------------- | ---------------------------------------------- |
| methodsAccessibility | string         | "none" (por defecto), "all" |

#### Objetos soportados

[Web Area](webArea_overview.md)

---

## Variable Progression

Nombre de una variable de tipo Longint. Esta variable recibirá un valor entre 0 y 100, que representa el porcentaje de finalización de la carga de la página en el área web. Actualizado automáticamente por 4D, no puede ser modificado manualmente.

> As of 4D v19 R5, this variable is only updated on Windows if the Web area [uses the embedded Web rendering engine](#use-embedded-web-rendering-engine).

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles               |
| -------------- | -------------- | ------------------------------ |
| progressSource | string         | Nombre de una variable Longint |

#### Objetos soportados

[Web Area](webArea_overview.md)

---

## URL

La variable URL es de tipo cadena. Contiene la URL cargada o que está siendo cargada por el área web asociada. La asociación entre la variable y el área web funciona en ambas direcciones:

- Si el usuario asigna una nueva URL a la variable, esta URL es cargada automáticamente por el área web.
- Toda la navegación que se realice dentro del área web actualizará automáticamente el contenido de la variable.

Esquemáticamente, esta variable funciona como el área de direcciones de un navegador web. Puede representarlo a través de un área de texto sobre el área Web.

### Variable URL y comando WA OPEN URL

The URL variable produces the same effects as the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command. No obstante, hay que señalar las siguientes diferencias:

- Para el acceso a los documentos, esta variable sólo acepta URLs que cumplan con el RFC ("file://c:/My%20Doc") y no los nombres de ruta del sistema ("c:\MyDoc"). The [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command accepts both notations.
- Si la variable URL contiene una cadena vacía, el área web no intenta cargar la URL. The [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command generates an error in this case.
- If the URL variable does not contain a protocol (http, mailto, file, etc.), the Web area adds "http://", which is not the case for the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command.
- When the Web area is not displayed in the form (when it is located on another page of the form), executing the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles         |
| --------- | -------------- | ------------------------ |
| urlSource | string         | Una URL. |

#### Objetos soportados

[Web Area](webArea_overview.md)

---

## Utilizar el motor de renderizado web integrado

Esta opción permite elegir entre dos motores de renderizado para el área web, dependiendo de las particularidades de su aplicación:

- **unchecked** - `JSON value: system` (default): In this case, 4D uses the "best" engine corresponding to the system. Esto significa que usted se beneficia automáticamente de los últimos avances en la renderización web, a través de HTML5 o JavaScript. Sin embargo, es posible que note algunas diferencias de renderizado entre plataformas. En Windows, 4D utiliza Microsoft Edge WebView2. En macOS, 4D utiliza la versión actual de WebKit (Safari).

> En Windows, si Microsoft Edge WebView2 no está instalado, 4D utiliza el motor integrado como motor de renderizado del sistema. Para saber si está instalado en su sistema, busque "Microsoft Edge WebView2 Runtime" en su panel de aplicaciones.

- **checked** - `JSON value: embedded`: In this case, 4D uses the Chromium Embedded Framework (CEF). La utilización del motor web integrado significa que la representación de las áreas web y su funcionamiento en su aplicación son idénticos independientemente de la plataforma utilizada para ejecutar 4D (no obstante, pueden observarse ligeras variaciones de píxeles o diferencias relacionadas con la implementación de la red). La utilización del motor web integrado significa que la representación de las áreas web y su funcionamiento en su aplicación son idénticos independientemente de la plataforma utilizada para ejecutar 4D (no obstante, pueden observarse ligeras variaciones de píxeles o diferencias relacionadas con la implementación de la red).

El motor CEF tiene las siguientes limitaciones:

- [WA SET PAGE CONTENT](https://doc.4d.com/4dv19/help/command/en/page1037.html): using this command requires that at least one page is already loaded in the area (through a call to [`WA OPEN URL`](https://doc.4d.com/4dv19/help/command/en/page1020.html) or an assignment to the URL variable associated to the area).
- When URL drops are enabled by the `WA enable URL drop` selector of the [WA SET PREFERENCE](https://doc.4d.com/4dv19/help/command/en/page1041.html) command, the first drop must be preceded by at least one call to [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) or one assignment to the URL variable associated to the area.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles     |
| --------- | -------------- | -------------------- |
| webEngine | string         | "embedded", "system" |

#### Objetos soportados

[Web Area](webArea_overview.md)
