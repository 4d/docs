---
id: propertiesWebArea
title: Área Web
---

---

## Acessar métodos 4D

Você pode chamar métodos 4D a partir do código JavaScript executado em uma área Web e obter valores em retorno. Para consegue chamar métodos 4D de uma área Web, você deve ativar o parâmetro de acessibilidade 4D ("todos").

> Esta propriedade só está disponível se a área Web [usar o mecanismo de renderização Web incorporado](properties_WebArea.md#use-embedded-web-rendering-engine).

Quando essa propriedade estiver ativada, um objeto JavaScript especial chamado `$4d` é instanciado na área Web, que você pode [usar para gerenciar chamadas para métodos projeto de 4D](webArea_overview.md#4d-object).

#### Gramática JSON

| Nome                 | Tipo de dados | Valores possíveis                         |
| -------------------- | ------------- | ----------------------------------------- |
| methodsAccessibility | string        | "none" (padrão), "all" |

#### Objectos suportados

[Área web](webArea_overview.md)

---

## Progressão

Nome de uma variável do tipo Longint. Essa variável receberá um valor entre 0 e 100, representando a porcentagem de conclusão do carregamento da página na área Web. Atualizado automaticamente por 4D, não pode ser modificado manualmente.

> A partir de 4D v19 R5, esta variável só será atualizada no Windows se as áreas Web [usar o mecanismo de renderização Web embutido](properties_WebArea.md#use-embedded-web-rendering-engine).

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
- Quando a área Web não for exibida no formulário (quando estiver localizada em outra página do formulário), executando o comando [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) não tem efeito, Enquanto atribuir um valor à variável URL pode ser usado para atualizar a URL atual.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis       |
| --------- | ------------- | ----------------------- |
| urlSource | string        | Um URL. |

#### Objectos suportados

[Área web](webArea_overview.md)

---

## Utilizar o motor de renderização Web integrado

Essa opção permite escolher entre dois mecanismos de renderização para a área Web, dependendo das especificidades de sua aplicação:

- **desmarcada** - `valor JSON: system` (padrão): neste caso, 4D usa o mecanismo "melhor" correspondente ao sistema. Isso significa que você se beneficia automaticamente dos mais recentes avanços na renderização da Web, por HTML5 ou JavaScript. No entanto, você poderá notar algumas diferenças de renderização entre as plataformas. No Windows, 4D usa Microsoft Edge WebView2. No macOS, 4D usa a versão atual do WebKit (Safari).

> No Windows, se o Microsoft Edge WebView2 não estiver instalado, o 4D usa o mecanismo incorporado como mecanismo de renderização do sistema. Para saber se ele está instalado no seu sistema, procure "Microsoft Edge WebView2 Runtime" no painel de aplicações.

- **marcado** - `valor JSON: anidado`: en este caso, 4D utiliza Chromium Embedded Framework (CEF). Usar o mecanismo da Web incorporado significa que a renderização da área da Web e seu funcionamento em seu aplicativo são idênticos, independentemente da plataforma usada para executar 4D (pequenas variações de pixels ou diferenças relacionadas à implementação da rede podem, no entanto, ser observadas). Usar o mecanismo Web incorporado significa que a renderização da área da Web e seu funcionamento em seu aplicativo são idênticos, independentemente da plataforma usada para executar 4D (pequenas variações de pixels ou diferenças relacionadas à implementação da rede podem, no entanto, ser observadas).

The Blink engine has the following limitations:

- [CONTEÚDO DA SEGURANÇA PÁ](https://doc.4d.com/4dv19/help/command/en/page1037.html): o uso deste comando requer que pelo menos uma página já esteja carregada na área (por meio de uma chamada para [`URL ABERTO ABERTO`](https://doc.4d.com/4dv19/help/command/en/page1020.html) ou uma atribuição à variável de URL associada à área).
- Quando os drops de URL forem ativados pelo seletor `WA enable URL drop` do comando [WA SET PREFERENCE](https://doc.4d.com/4dv19/help/command/en/page1041.html), o primeiro drop deve ser precedido por pelo menos uma chamada a [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) ou uma atribuição à variável de URL associada à área.

:::note

Você pode personalizar os parâmetros da área CEF criando um arquivo de configuração local [4DCEFParameters.json](webArea_overview.md#4dcefparametersjson).

:::

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis    |
| --------- | ------------- | -------------------- |
| webEngine | string        | "embedded", "system" |

#### Objectos suportados

[Área web](webArea_overview.md)
