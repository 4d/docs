---
id: propertiesWebArea
title: Área Web
---

---
## Acesso a métodos 4D

Você pode chamar métodos 4D a partir do código JavaScript executado em uma área Web e obter valores em retorno. Para consegue chamar métodos 4D de uma área Web, você deve ativar o parâmetro de acessibilidade 4D ("todos").

> Esta propriedade só está disponível se a área Web [utilizar o mecanismo de renderização Web incorporado](properties_WebArea.md#use-embedded-web-rendering-engine).

Quando essa propriedade está ativada, um objeto JavaScript especial chamado `$4d` é instanciado na área Web, que pode ser [usado para gerenciar chamadas para os métodos projeto de 4D](webArea_overview.md#4d-object).



#### Gramática JSON

| Nome                 | Tipo de dados | Valores possíveis      |
| -------------------- | ------------- | ---------------------- |
| methodsAccessibility | string        | "none" (padrão), "all" |

#### Objectos suportados

[Área Web](webArea_overview.md)


---
## Progressão

Nome de uma variável do tipo Longint. Essa variável receberá um valor entre 0 e 100, representando a porcentagem de conclusão do carregamento da página na área Web. Atualizado automaticamente por 4D, não pode ser modificado manualmente.

> A partir de 4D v19 R5, esta variável só é atualizada no Windows se a área Web [utilizar o mecanismo de renderização Web incorporado](properties_WebArea.md#use-embedded-web-rendering-engine).

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis            |
| -------------- | ------------- | ---------------------------- |
| progressSource | string        | Nome de uma variável Longint |

#### Objectos suportados

[Área Web](webArea_overview.md)




---
## URL

Uma variável do tipo String que designa o URL carregado ou que está sendo carregado pela área Web associada. A associação entre a variável e a área Web funciona em ambas as direções:

*   Se o usuário atribuir um novo URL à variável, esse URL será carregado automaticamente pela área Web.
*   Qualquer navegação feita na área Web atualizará automaticamente o conteúdo da variável.

Esquematicamente, essa variável funciona como a área de endereço de um navegador Web. Pode representá-lo através de uma área de texto por cima da área Web.

### Variável URL e comando WA OPEN URL

A variável URL produz os mesmos efeitos que o comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html). No entanto, há que assinalar as seguintes diferenças:
- Para acesso a documentos, essa variável aceita apenas URLs em conformidade com a RFC ("file://c:/My%20Doc") e não nomes de caminho do sistema ("c:\MyDoc"). O comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) aceita ambas as notações.
- Se a variável URL contiver uma cadeia de caracteres vazia, a área Web não tentará carregar o URL. O comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) gera um erro nesse caso.
- Se a variável URL não contiver um protocolo (http, mailto, arquivo, etc.), a área Web adicionará "http://", o que não é o caso do comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html).
- When the Web area is not displayed in the form (when it is located on another page of the form), executing the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis |
| --------- | ------------- | ----------------- |
| urlSource | string        | Um URL.           |

#### Objectos suportados

[Área Web](webArea_overview.md)






---
## Utilizar o motor de renderização Web integrado

Essa opção permite escolher entre dois mecanismos de renderização para a área Web, dependendo das especificidades de sua aplicação:

*   **desmarcado** - `Valor JSON: system` (padrão): neste caso, a 4D usa o mecanismo "melhor" correspondente ao sistema. Isso significa que você se beneficia automaticamente dos mais recentes avanços na renderização da Web, por meio de HTML5 ou JavaScript. No entanto, você poderá notar algumas diferenças de renderização entre as plataformas. No Windows, 4D usa Microsoft Edge WebView2. No macOS, 4D usa a versão atual do WebKit (Safari).

> No Windows, se o Microsoft Edge WebView2 não estiver instalado, o 4D usa o mecanismo incorporado como mecanismo de renderização do sistema. To know if it is installed in your system, look for "Microsoft Edge WebView2 Runtime" in your applications panel.

*   **checked** - `JSON value: embedded`: In this case, 4D uses Blink engine from Google (CEF). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed).

The Blink engine has the following limitations:

- [WA SET PAGE CONTENT](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PAGE-CONTENT.301-5232965.en.html): usar esse comando exige que pelo menos uma página já esteja carregado na área (através da chamada a [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) ou uma atribuição à variável URL associada à área).
- Quando se ativa soltar URLs mediante o seletor `WA enable URL drop` do comando [WA SET PREFERENCE](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PREFERENCE.301-5232962.en.html), a primeira soltada deve ir precedida de ao menos uma chamada a [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) ou uma atribuição à variável URL associada à área.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis    |
| --------- | ------------- | -------------------- |
| webEngine | string        | "embedded", "system" |

#### Objectos suportados

[Área Web](webArea_overview.md)
