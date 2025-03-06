---
id: propertiesWebArea
title: Área Web
---

---
## Acessar métodos 4D

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

A variável URL produz os mesmos efeitos que o comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html). No entanto, há que assinalar as seguintes diferenças:
- Para acesso a documentos, essa variável aceita apenas URLs em conformidade com a RFC ("file://c:/My%20Doc") e não nomes de caminho do sistema ("c:\MyDoc"). O comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) aceita ambas as notações.
- Se a variável URL contiver uma cadeia de caracteres vazia, a área Web não tentará carregar o URL. O comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) gera um erro nesse caso.
- Se a variável URL não contiver um protocolo (http, mailto, arquivo, etc.), a área Web adicionará "http://", o que não é o caso do comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html).
- Quando a área Web não é exibida no formulário (quando está localizada em outra página do formulário), a execução do comando [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html) não tem efeito, ao passo que a atribuição de um valor à variável URL pode ser usada para atualizar o URL atual.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis |
| --------- | ------------- | ----------------- |
| urlSource | string        | Um URL.           |

#### Objectos suportados

[Área Web](webArea_overview.md)






---
## Utilizar o motor de renderização Web integrado

Essa opção permite escolher entre dois mecanismos de renderização para a área Web, dependendo das especificidades de sua aplicação:

*   **desmarcado** - `Valor JSON: system` (padrão): neste caso, a 4D usa o mecanismo "melhor" correspondente ao sistema. No Windows, 4D usa automaticamente a versão mais recente do navegador encontrado na máquina (IE11, MS Edge, etc.). No macOS, 4D usa a versão atual do WebKit (Safari). Isso significa que você se beneficia automaticamente dos mais recentes avanços na renderização da Web, por HTML5 ou JavaScript. No entanto, você pode notar algumas diferenças de renderização entre as implementações do Internet Explorer/Edge e as do WebKit.
*   **checked** - `valor JSON: embedded`: nesse caso, 4D usa o mecanismo Blink do Google (CEF). Usar o mecanismo da Web incorporado significa que a renderização da área da Web e seu funcionamento em seu aplicativo são idênticos, independentemente da plataforma usada para executar 4D (pequenas variações de pixels ou diferenças relacionadas à implementação da rede podem, no entanto, ser observadas). Quando essa opção é escolhida, você não se beneficia mais das atualizações automáticas do mecanismo da Web realizadas pelo sistema operacional; no entanto, novas versões dos mecanismos são fornecidas por 4D.

O motor Blink tem as seguintes limitações:

- [WA SET PAGE CONTENT](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PAGE-CONTENT.301-5232965.en.html): o uso desse comando requer que pelo menos uma página já esteja carregada na área (por uma chamada para [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) ou uma atribuição à variável URL associada à área).
- Quando os drops de URL são ativados pelo seletor `WA enable URL drop` do comando \[WA SET PREFERENCE]\](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PREFERENCE.301-5232962.en.html), o primeiro drop deve ser precedido por pelo menos uma chamada a [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) ou uma atribuição à variável de URL associada à área.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis    |
| --------- | ------------- | -------------------- |
| webEngine | string        | "embedded", "system" |

#### Objectos suportados

[Área Web](webArea_overview.md)