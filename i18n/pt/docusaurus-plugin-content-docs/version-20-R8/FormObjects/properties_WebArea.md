---
id: propertiesWebArea
title: Área Web
---

---

## Acesso a métodos 4D

You can call 4D methods from the JavaScript code executed in a Web area and get values in return. To be able to call 4D methods from a Web area, you must activate the 4D methods accessibility property ("all").

> Esta propriedade só está disponível se a área Web [usar o mecanismo de renderização Web incorporado](properties_WebArea.md#use-embedded-web-rendering-engine).

When this property is on, a special JavaScript object named `$4d` is instantiated in the Web area, which you can [use to manage calls to 4D project methods](webArea_overview.md#4d-object).

#### Gramática JSON

| Nome                 | Tipo de dados | Valores possíveis                         |
| -------------------- | ------------- | ----------------------------------------- |
| methodsAccessibility | string        | "none" (padrão), "all" |

#### Objectos suportados

[Área web](webArea_overview.md)

---

## Progressão

Nome de uma variável do tipo Longint. This variable will receive a value between 0 and 100, representing the page load completion percentage in the Web area. Atualizado automaticamente por 4D, não pode ser modificado manualmente.

> A partir de 4D v19 R5, esta variável só será atualizada no Windows se as áreas Web [usar o mecanismo de renderização Web embutido](properties_WebArea.md#use-embedded-web-rendering-engine).

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis            |
| -------------- | ------------- | ---------------------------- |
| progressSource | string        | Nome de uma variável Longint |

#### Objectos suportados

[Área web](webArea_overview.md)

---

## URL

A String type variable that designates the URL loaded or being loading by the associated Web area. The association between the variable and the Web area works in both directions:

- If the user assigns a new URL to the variable, this URL is automatically loaded by the Web area.
- Any browsing done within the Web area will automatically update the contents of the variable.

Schematically, this variable functions like the address area of a Web browser. Pode representá-lo através de uma área de texto por cima da área Web.

### Variável URL e comando WA OPEN URL

La variable URL produce los mismos efectos que el comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html). No entanto, há que assinalar as seguintes diferenças:

- For access to documents, this variable only accepts URLs that are RFC-compliant ("file://c:/My%20Doc") and not system pathnames ("c:\MyDoc"). O comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) aceita ambas as notações.
- If the URL variable contains an empty string, the Web area does not attempt to load the URL. O comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) gera um erro nesse caso.
- If the URL variable does not contain a protocol (http, mailto, file, etc.), the Web area adds "http://", which is not the case for the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command.
- When the Web area is not displayed in the form (when it is located on another page of the form), executing the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis       |
| --------- | ------------- | ----------------------- |
| urlSource | string        | Um URL. |

#### Objectos suportados

[Área web](webArea_overview.md)

---

## Utilizar o motor de renderização Web integrado

This option allows choosing between two rendering engines for the Web area, depending on the specifics of your application:

- **unchecked** - `JSON value: system` (default): In this case, 4D uses the "best" engine corresponding to the system. Isso significa que você se beneficia automaticamente dos mais recentes avanços na renderização da Web, por meio de HTML5 ou JavaScript. No entanto, você poderá notar algumas diferenças de renderização entre as plataformas. No Windows, 4D usa Microsoft Edge WebView2. No macOS, 4D usa a versão atual do WebKit (Safari).

> No Windows, se o Microsoft Edge WebView2 não estiver instalado, o 4D usa o mecanismo incorporado como mecanismo de renderização do sistema. Para saber se ele está instalado no seu sistema, procure "tempo de execução do Microsoft Edge WebView2" no painel de aplicações.

- **marcado** - `valor JSON: anidado`: en este caso, 4D utiliza Chromium Embedded Framework (CEF). Usar o mecanismo da Web incorporado significa que a renderização da área da Web e seu funcionamento em seu aplicativo são idênticos, independentemente da plataforma usada para executar 4D (pequenas variações de pixels ou diferenças relacionadas à implementação da rede podem, no entanto, ser observadas). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed).

The Blink engine has the following limitations:

- [CONTEÚDO DE SEGURO](https://doc.4d.com/4dv19/help/command/en/page1037. tml): usar este comando requer que pelo menos uma página já esteja carregada na área (por meio de uma chamada para [`WA OPEN URL`](https://doc. d.com/4dv19/help/command/en/page1020.html) ou uma atribuição à variável URL associada à área)
- Quando os drops de URL são ativados pelo seletor `WA enable URL drop` do comando [WA SET PREFERENCE](https://doc.4d.com/4dv19/help/command/en/page1041.html), o primeiro drop deve ser precedido por pelo menos uma chamada a [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) ou uma atribuição à variável de URL associada à área.

:::note

You can customize CEF area parameters by creating a local [4DCEFParameters.json configuration file](webArea_overview.md#4dcefparametersjson).

:::

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis    |
| --------- | ------------- | -------------------- |
| webEngine | string        | "embedded", "system" |

#### Objectos suportados

[Área web](webArea_overview.md)
