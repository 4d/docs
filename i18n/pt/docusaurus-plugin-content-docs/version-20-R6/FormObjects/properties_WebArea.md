---
id: propertiesWebArea
title: Área Web
---

---

## Acesso a métodos 4D

Você pode chamar métodos 4D a partir do código JavaScript executado em uma área Web e obter valores em retorno. Para consegue chamar métodos 4D de uma área Web, você deve ativar o parâmetro de acessibilidade 4D ("todos").

> This property is only available if the Web area [uses the embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

Quando essa propriedade está ativada, um objeto JavaScript especial chamado `$4d` é instanciado na área Web, que você pode [usar para gerenciar chamadas para métodos projeto de 4D](webArea_overview.md#4d-object).

#### Gramática JSON

| Nome                 | Tipo de dados | Valores possíveis                         |
| -------------------- | ------------- | ----------------------------------------- |
| methodsAccessibility | string        | "none" (padrão), "all" |

#### Objectos suportados

[Área web](webArea_overview.md)

---

## Progressão

Nome de uma variável do tipo Longint. Essa variável receberá um valor entre 0 e 100, representando a porcentagem de conclusão do carregamento da página na área Web. Atualizado automaticamente por 4D, não pode ser modificado manualmente.

> As of 4D v19 R5, this variable is only updated on Windows if the Web area [uses the embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis            |
| -------------- | ------------- | ---------------------------- |
| progressSource | string        | Nome de uma variável Longint |

#### Objectos suportados

[Área web](webArea_overview.md)

---

## URL

Uma variável do tipo String que designa o URL carregado ou que está sendo carregado pela área Web associada. A associação entre a variável e a área Web funciona em ambas as direções:

- Se o usuário atribuir um novo URL à variável, esse URL será carregado automaticamente pela área Web.
- Qualquer navegação feita na área Web atualizará automaticamente o conteúdo da variável.

Esquematicamente, essa variável funciona como a área de endereço de um navegador Web. Pode representá-lo através de uma área de texto por cima da área Web.

### Variável URL e comando WA OPEN URL

La variable URL produce los mismos efectos que el comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html). No entanto, há que assinalar as seguintes diferenças:

- Para acesso a documentos, essa variável aceita apenas URLs em conformidade com a RFC ("file://c:/My%20Doc") e não nomes de caminho do sistema ("c:\MyDoc"). O comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) aceita ambas as notações.
- Se a variável URL contiver uma cadeia de caracteres vazia, a área Web não tentará carregar o URL. O comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) gera um erro nesse caso.
- Se a variável URL não contiver um protocolo (http, mailto, arquivo, etc.), a área Web adicionará "http://", o que não é o caso do comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html).
- Quando a área Web não é exibida no formulário (quando está localizada em outra página do formulário), a execução do comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) não tem efeito, ao passo que a atribuição de um valor à variável URL pode ser usada para atualizar o URL atual.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis       |
| --------- | ------------- | ----------------------- |
| urlSource | string        | Um URL. |

#### Objectos suportados

[Área web](webArea_overview.md)

---

## Utilizar o motor de renderização Web integrado

Essa opção permite escolher entre dois mecanismos de renderização para a área Web, dependendo das especificidades de sua aplicação:

- **desmarcada** - `valor JSON: system` (padrão): neste caso, 4D usa o mecanismo "melhor" correspondente ao sistema. This means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. No entanto, você poderá notar algumas diferenças de renderização entre as plataformas. No Windows, 4D usa Microsoft Edge WebView2. No macOS, 4D usa a versão atual do WebKit (Safari).

> On Windows, if Microsoft Edge WebView2 is not installed, 4D uses the embedded engine as system rendering engine. To know if it is installed in your system, look for "Microsoft Edge WebView2 Runtime" in your applications panel.

- **marcado** - `valor JSON: anidado`: en este caso, 4D utiliza Chromium Embedded Framework (CEF). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed).

The Blink engine has the following limitations:

- [WA SET PAGE CONTENT](https://doc.4d.com/4dv19/help/command/en/page1037.html): using this command requires that at least one page is already loaded in the area (through a call to [`WA OPEN URL`](https://doc.4d.com/4dv19/help/command/en/page1020.html) or an assignment to the URL variable associated to the area).
- When URL drops are enabled by the `WA enable URL drop` selector of the [WA SET PREFERENCE](https://doc.4d.com/4dv19/help/command/en/page1041.html) command, the first drop must be preceded by at least one call to [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) or one assignment to the URL variable associated to the area.

:::note

You can customize CEF area parameters by creating a local [4DCEFParameters.json configuration file](webAreaOverview#4dcefparametersjson).

:::

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis    |
| --------- | ------------- | -------------------- |
| webEngine | string        | "embedded", "system" |

#### Objectos suportados

[Área web](webArea_overview.md)
