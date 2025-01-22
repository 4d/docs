---
id: webAreaOverview
title: Área Web
---


As áreas da Web podem exibir vários conteúdo Web em seus formulários: páginas HTML com conteúdo estático ou dinâmico, arquivos, imagens, JavaScript, etc. As áreas web podem mostrar vários tipos de conteúdo web dentro de seus formulários: Páginas HTML com conteúdos estáticos ou dinâmicos, arquivos, imagens, Javascript, etc. O motor de renderizado da área web depende da plataforma de execução da aplicação e de [a opção motor de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) selecionada. As áreas web podem mostrar vários tipos de conteúdo web dentro de seus formulários: Páginas HTML com conteúdos estáticos ou dinâmicos, arquivos, imagens, Javascript, etc. O motor de renderizado da área web depende da plataforma de execução da aplicação e de [a opção motor de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) selecionada.

É possível criar várias áreas web no mesmo formulário. Note, however, that the use of web areas must follow [several rules](#web-areas-rules).

Várias [ações padrão](#standard-actions) dedicadas, numerosos [comandos de linguagem](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) assim como também [eventos formulário](#form-events) genéricos e específicos, permitem ao desenvolvedor controlar o funcionamento das áreas web. Variáveis específicas podem ser usadas para trocar informações entre a área e o ambiente 4D.


## Propriedades específicas

### Variáveis associadas

Duas variáveis específicas podem ser associadas a cada área web:
- [`URL`](properties_WebArea.md#url) --para controlar a URL que mostra a área web
- [`Progresión`](properties_WebArea.md#progression) -- para controlar a porcentagem de carga da página mostrada na área web.

> As of 4D v19 R5, the Progression variable is no longer updated in Web Areas using the [Windows system rendering engine](./webArea_overview.md#web-rendering-engine).

### Motor de renderização Web

Pode escolher entre [dois motores de renderização](properties_WebArea.md#use-embedded-web-rendering-engine) para a área web, dependendo das particularidades de sua aplicação.

Selecting the embedded web rendering engine allows you to call 4D methods from the web area. Selecting the system rendering engine is recommended when the web area is connected to the Internet because it always benefits from the latest security updates.

### Acessar métodos 4D

Quando selecionar a propriedade [Acessar aos métodos 4D](properties_WebArea.md#access-4d-methods), pode chamar aos métodos 4D desde uma área Web.

:::note Notas

- Esta propriedade só está disponível se a área web [utilizar o mecanismo de renderização web incorporado](properties_WebArea.md#use-embedded-web-rendering-engine).
- Por motivos de segurança, já que permite a execução de código 4D, essa opção só deve ser ativada para páginas confiáveis, como as páginas geradas pela aplicação.

:::


### Objecto $4d


O [motor de renderização web embebido de 4D](properties_WebArea.md#use-embedded-web-rendering-engine) fornece à área um objeto JavaScript chamado $4d que pode ser associado a qualquer método projeto 4D utilizando a notação objeto ".".

Por exemplo, para chamar o método `HelloWorld` 4D, basta executar a seguinte instrução:

```js
$4d. HelloWorld();
```
> JavaScript é sensível a maiúsculas e minúsculas, portanto é importante notar que o objeto tem o nome $4d (com uma letra minúscula "d").

A sintaxe das chamadas aos métodos 4D é a seguinte:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```
- `param1...paramN`: você pode passar tantos parâmetros quanto precisa para o método 4D. Esses parâmetros podem ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, número, array, objeto).

- `function(result)`: função a passar como último argumento. Esta função "callback" é chamada de forma síncrona quando o método 4D termina de ser executado. Recebe o parâmetro `result`.

- `result`: resultado da execução do método 4D, retornado na expressão "$0". Este resultado pode ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, número, array, objeto). Você pode usar o comando `C_OBJECT` para retornar os objetos.

> Por padrão, 4D trabalha em UTF-8. Quando você retornar texto contendo caracteres estendidos, por exemplo, caracteres com acentos, certifique-se de que a codificação da página exibida na área Web seja declarada como UTF-8, caso contrário, os caracteres poderão ser renderizados incorretamente. Nesse caso, adicione a seguinte linha na página HTML para declarar a codificação: `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Exemplo 1

Dado um método de projeto 4D chamado `today` que não recebe parâmetros e retorna a data atual como uma string.

Código 4D do método `today`:

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

Na área web, o método 4D pode ser chamado com a sintaxe abaixo:

```js
$4d.today()
```

O método 4D não recebe nenhum parâmetro, mas retorna o valor $0 para a função de callback chamada por 4D após a execução do método. Queremos mostrar a data na página HTML que é carrega pela área Web.

Aqui está o código da página HTML:

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 <script type="text/javascript">
$4d.today(function(dollarZero)
{
    var curDate = dollarZero;
    document.getElementById("mydiv").innerHTML=curDate;
});
</script>
</head>
<body>Today is: <div id="mydiv"></div>
</body>
</html>
```

#### Exemplo 2

O método `calcSum` do projeto 4D recebe parâmetros (`$1...$n`) e retorna sua soma em `$0`:

Código 4D do método `calcSum`:

```4d
 C_REAL(${1}) // recebe n parâmetros do tipo REAL
 C_REAL($0) // devolve um Real
 C_LONGINT($i;$n)
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+${$i}
 End for
```

O código JavaScript que roda na área web é:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // o resultado é 262.5
    });
```


## Ações padrão

Há quatro ações padrão específicas para gerenciar as áreas web de forma automática: `Open Back URL`, `Open Next URL`, `Refresh Current URL` e `Stop Loading URL`. Essas ações podem ser associadas com botões ou comandos de menu e permite implementação rápida de interfaces web básicas. Estas ações são descritas em [ações standard](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).


## Eventos formulário

Os eventos formulários específicos estão destinados à gestão programadas das áreas web, mais concretamente à ativação de links:

- [`On Begin URL Loading`](Events/onBeginUrlLoading.md)
- [`On URL Resource Loading`](Events/onUrlResourceLoading.md)
- [`On End URL Loading`](Events/onEndUrlLoading.md)
- [`On URL Loading Error`](Events/onUrlLoadingError.md)
- [`On URL Filtering`](Events/onUrlFiltering.md)
- [`On Open External Link`](Events/onOpenExternalLink.md)
- [`On Window Opening Denied`](Events/onWindowOpeningDenied.md)

Além disso, áreas web são compatíveis com os eventos de formulário genéricos abaixo:

- [`On Load`](Events/onLoad.md)
- [`On Unload`](Events/onUnload.md)
- [`On Getting Focus`](Events/onGettingFocus.md)
- [`On Losing Focus`](Events/onLosingFocus.md)


## Regras das áreas web

### Interface do usuário

Quando o formulário for executado, as funções da interface de navegador padrão estão disponíveis para o usuário na área web, o que permite a interação com outras áreas do formulário:

- **Comandos menu Edição**: quando a área web tiver o foco, os comandos do menu **Edição** podem ser utilizadas para realizar ações como copiar, colar, selecionar tudo, etc., segundo a seleção.
- **O menu contextual**: é possível utilizar o [menu contextual](properties_Entry.md#context-menu) padrão do sistema com a área web. A exibição do menu de contexto pode ser controlada com o comando `WA SET PREFERENCE`.
- **Arrastar e soltar**: o usuário pode arrastar e soltar texto, imagens e documentos dentro da área web ou entre uma área web e os objetos dos formulários 4D, segundo as propriedades dos objetos 4D. Por razões de segurança, não é permitido mudar os conteúdos da área Web arrastando e soltando seja um arquivo ou URL. In this case, the mouse cursor displays a "forbidden" icon ![](../assets/en/FormObjects/forbidden.png). Você precisa usar a instrução `WA SET PREFERENCE(*; "warea";WA enable URL drop;True)` para exibir um ícone "drop" e gerar o evento [`On Window Opening Denied`](Events/onWindowOpeningDenied.md). Neste caso, pode chamar o comando [`WA OPEN URL`](https://doc.4d.com/4dv19/help/command/en/page1020.html) ou definir a [variável URL](properties_WebArea.md#url) em resposta a uma queda do usuário.

> Os recursos de arrastar e soltar descritos acima não são suportados em áreas web usando o mecanismo de renderização do sistema [macOS](properties_WebArea.md#use-embedded-web-rendering-engine).


### Subformulários

Por razões relacionadas com os mecanismos de redesenho de janelas, a inserção de uma área web em um subformulário está sujeita às restrições abaixo:

- O subformulário não deve poder deslocar-se
- Os limites da área Web não devem ultrapassar o tamanho do subformulário

> Não é compatível sobrepor uma área Web no topo ou debaixo dos outros objetos formulário.


### Conflito entre a área Web e o servidor Web (Windows)

Em Windows, não é recomendado acessar, através de uma área web, o servidor web da aplicação 4D que contenha a área, já que esta configuração poderia provocar um conflito que paralise a aplicação. Com certeza um 4D remoto pode acessar ao servidor web de 4D Server, mas não ao seu próprio servidor web.

### Inserção de protocolo (macOS)

As URLs manejadas por programação em áreas web em macOS devem começar com o  protocolo. Por exemplo, você precisa passar a cadeia de caracteres "http://www.mysite.com" e não apenas "www.mysite.com".


## Access to web inspector

Pode ver e usar um inspetor web dentro das áreas web de seus formulários. The web inspector is a debugger which is provided by the embedded Web engine. It allows parsing the code and the flow of information of the web pages.

To display the web inspector, you can either execute the `WA OPEN WEB INSPECTOR` command, or use the context menu of the web area.

- **Execute the `WA OPEN WEB INSPECTOR` command**<br/> This command can be used directly with onscreen (form object) and offscreen web areas.

- **Use the web area context menu**<br/> This feature can only be used with onscreen web areas and requires that the following conditions are met:
    - o [menu de contexto](properties_Entry.md#context-menu) da área Web está ativado
    - o uso do inspetor é expressamente permitido na área por meio da seguinte declaração:
    ```4d
        WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  
    ```

> Com o mecanismo de renderização [do sistema Windows](properties_WebArea.md#use-embedded-web-rendering-engine), uma alteração nesta preferência requer uma ação de navegação na área (por exemplo, uma atualização de página) para ser tida em conta.

Para mais informações, consultar a descrição do comando `WA SET PREFERENCE`.

Quando você fez as configurações conforme descrito acima, você tem novas opções como **Inspecionar Elemento** no menu de contexto da área. Quando selecionar essa opção, a janela do inspetor Web é exibida.

> Para uma descrição detalhada nas funcionalidades do depurador, veja a documentação fornecida pelo motor de renderização web.




## Propriedades compatíveis

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 





