---
id: propertiesWebArea
title: Área Web
---

---

## Acesso a métodos 4D

You can call 4D methods from the JavaScript code executed in a Web area and get values in return. To be able to call 4D methods from a Web area, you must activate the 4D methods accessibility property ("all").

> Esta propiedad sólo está disponible si el área web [utiliza el motor de renderizado web integrado](#use-embedded-web-rendering-engine).

Cuando esta propiedad está activada, se instancia un objeto JavaScript especial llamado `$4d`en el área web, que puede [utilizar para gestionar las llamadas a los métodos proyecto de 4D](webArea_overview.md#4d-object).

#### Gramática JSON

| Nome                 | Tipo de dados | Valores possíveis                         |
| -------------------- | ------------- | ----------------------------------------- |
| methodsAccessibility | string        | "none" (padrão), "all" |

#### Objectos suportados

[Web Area](webArea_overview.md)

---

## Progressão

Nome de uma variável do tipo Longint. This variable will receive a value between 0 and 100, representing the page load completion percentage in the Web area. Atualizado automaticamente por 4D, não pode ser modificado manualmente.

> As of 4D v19 R5, this variable is no longer updated in Web Areas using the [Windows system rendering engine](./webArea_overview.md#web-rendering-engine).

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis            |
| -------------- | ------------- | ---------------------------- |
| progressSource | string        | Nome de uma variável Longint |

#### Objectos suportados

[Web Area](webArea_overview.md)

---

## URL

A String type variable that designates the URL loaded or being loading by the associated Web area. The association between the variable and the Web area works in both directions:

- If the user assigns a new URL to the variable, this URL is automatically loaded by the Web area.
- Any browsing done within the Web area will automatically update the contents of the variable.

Schematically, this variable functions like the address area of a Web browser. Pode representá-lo através de uma área de texto por cima da área Web.

### Variável URL e comando WA OPEN URL

La variable URL produce los mismos efectos que el comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html). No entanto, há que assinalar as seguintes diferenças:

- For access to documents, this variable only accepts URLs that are RFC-compliant ("file://c:/My%20Doc") and not system pathnames ("c:\MyDoc"). El comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) acepta ambas notaciones.
- If the URL variable contains an empty string, the Web area does not attempt to load the URL. El comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) genera un error en este caso.
- Si la variable URL no contiene un protocolo (http, mailto, archivo, etc.), el área web añade "http://", lo que no ocurre con el comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html).
- When the Web area is not displayed in the form (when it is located on another page of the form), executing the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis       |
| --------- | ------------- | ----------------------- |
| urlSource | string        | Um URL. |

#### Objectos suportados

[Web Area](webArea_overview.md)

---

## Utilizar o motor de renderização Web integrado

This option allows choosing between two rendering engines for the Web area, depending on the specifics of your application:

- **no marcado** - `valor JSON: sistema` (por defecto): en este caso, 4D utiliza el "mejor" motor correspondiente al sistema. This means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. No entanto, você poderá notar algumas diferenças de renderização entre as plataformas. No Windows, 4D usa Microsoft Edge WebView2. No macOS, 4D usa a versão atual do WebKit (Safari).

> On Windows, if Microsoft Edge WebView2 is not installed, 4D uses the embedded engine as system rendering engine. To know if it is installed in your system, look for "Microsoft Edge WebView2 Runtime" in your applications panel.

- **marcado** - `valor JSON: anidado`: en este caso, 4D utiliza Chromium Embedded Framework (CEF). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed).

The Blink engine has the following limitations:

- [WA SET PAGE CONTENT](https://doc.4d.com/4dv19/help/command/en/page1037.html): using this command requires that at least one page is already loaded in the area (through a call to [`WA OPEN URL`](https://doc.4d.com/4dv19/help/command/en/page1020.html) or an assignment to the URL variable associated to the area).
- When URL drops are enabled by the `WA enable URL drop` selector of the [WA SET PREFERENCE](https://doc.4d.com/4dv19/help/command/en/page1041.html) command, the first drop must be preceded by at least one call to [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) or one assignment to the URL variable associated to the area.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis    |
| --------- | ------------- | -------------------- |
| webEngine | string        | "embedded", "system" |

#### Objectos suportados

[Web Area](webArea_overview.md)
