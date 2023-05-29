---
id: webAreaOverview
title: Área Web
---


The Web areas can display various types of Web content within your forms: HTML pages with static or dynamic contents, files, pictures, Javascript, etc. The rendering engine of the Web area depends on the execution platform of the application and the selected [rendering engine option](properties_WebArea.md#use-embedded-web-rendering-engine). As áreas web podem mostrar vários tipos de conteúdo web dentro de seus formulários: Páginas HTML com conteúdos estáticos ou dinâmicos, arquivos, imagens, Javascript, etc. O motor de renderizado da área web depende da plataforma de execução da aplicação e de [a opção motor de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) selecionada.

É possível criar várias áreas web no mesmo formulário. Note, however, that the use of web areas must follow [several rules](#web-areas-rules).

Várias [ações padrão](#standard-actions) dedicadas, numerosos [comandos de linguagem](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) assim como também [eventos formulário](#form-events) genéricos e específicos, permitem ao desenvolvedor controlar o funcionamento das áreas web. Specific variables can be used to exchange information between the area and the 4D environment.
> The use of web plugins and Java applets is not recommended in web areas because they may lead to instability in the operation of 4D, particularly at the event management level.

## Propriedades específicas

### Variáveis associadas

Duas variáveis específicas podem ser associadas a cada área web:

- [`URL`](properties_WebArea.md#url) --para controlar a URL que mostra a área web
- [`Progresión`](properties_WebArea.md#progression) -- para controlar a porcentagem de carga da página mostrada na área web.

### Motor de renderização Web

Pode escolher entre [dois motores de renderização](properties_WebArea.md#use-embedded-web-rendering-engine) para a área web, dependendo das particularidades de sua aplicação.

Selecting the embedded web rendering engine allows you to call 4D methods from the web area.

### Access 4D methods

Quando selecionar a propriedade [Acessar aos métodos 4D](properties_WebArea.md#access-4d-methods), pode chamar aos métodos 4D desde uma área Web.

> This property is only available if the Web area [uses the embedded Web rendering engine](#use-embedded-web-rendering-engine).

### Objecto $4d

O [motor de renderização web embebido de 4D](properties_WebArea.md#use-embedded-web-rendering-engine) fornece à área um objeto JavaScript chamado $4d que pode ser associado a qualquer método projeto 4D utilizando a notação objeto ".".

For example, to call the `HelloWorld` 4D method, you just execute the following statement:

```codeJS
$4d. HelloWorld();
```
> JavaScript is case sensitive so it is important to note that the object is named $4d (with a lowercase "d").

The syntax of calls to 4D methods is as follows:

```codeJS
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: You can pass as many parameters as you need to the 4D method. These parameters can be of any type supported by JavaScript (string, number, array, object).

- `function(result)`: Function to pass as last argument. This "callback" function is called synchronously once the 4D method finishes executing. It receives the `result` parameter.

- `result`: Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). You can use the `C_OBJECT` command to return the objects.

> By default, 4D works in UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding: `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Exemplo 1

Given a 4D project method named `today` that does not receive parameters and returns the current date as a string.

4D code of `today` method:

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

Na área web, o método 4D pode ser chamado com a sintaxe abaixo:

```js
$4d.today()
```

The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. Queremos mostrar a data na página HTML que é carrega pela área Web.

Here is the code of the HTML page:

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

The 4D project method `calcSum` receives parameters (`$1...$n`) and returns their sum in `$0`:

4D code of `calcSum` method:

```4d
 C_REAL(${1}) // receives n REAL type parameters
 C_REAL($0) // returns a Real
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

Há quatro ações padrão específicas para gerenciar as áreas web de forma automática: `Open Back URL`, `Open Next URL`, `Refresh Current URL` e `Stop Loading URL`. Essas ações podem ser associadas com botões ou comandos de menu e permite implementação rápida de interfaces web básicas. These actions are described in [Standard actions](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).

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
- **O menu contextual**: é possível utilizar o [menu contextual](properties_Entry.md#context-menu) padrão do sistema com a área web. Display of the context menu can be controlled using the `WA SET PREFERENCE` command.
- **Arrastar e soltar**: o usuário pode arrastar e soltar texto, imagens e documentos dentro da área web ou entre uma área web e os objetos dos formulários 4D, segundo as propriedades dos objetos 4D. Por razões de segurança, não é permitido mudar os conteúdos da área Web arrastando e soltando seja um arquivo ou URL. In this case, the mouse cursor displays a "forbidden" icon ![](../assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE` command to explicitly allow the dropping of URLs or files in the web area.

### Subformulários

Por razões relacionadas com os mecanismos de redesenho de janelas, a inserção de uma área web em um subformulário está sujeita às restrições abaixo:

- The subform must not be able to scroll
- Os limites da área Web não devem ultrapassar o tamanho do subformulário

> Não é compatível sobrepor uma área Web no topo ou debaixo dos outros objetos formulário.

### Web Area and Web server conflict (Windows)

Em Windows, não é recomendado acessar, através de uma área web, o servidor web da aplicação 4D que contenha a área, já que esta configuração poderia provocar um conflito que paralise a aplicação. Com certeza um 4D remoto pode acessar ao servidor web de 4D Server, mas não ao seu próprio servidor web.

### Insertion of protocol (macOS)

As URLs manejadas por programação em áreas web em macOS devem começar com o  protocolo. For example, you need to pass the string "http://www.mysite.com" and not just "www.mysite.com".

## Access to web inspector

Pode ver e usar um inspetor web dentro das áreas web de seus formulários. The web inspector is a debugger which is provided by the embedded Web engine. It allows parsing the code and the flow of information of the web pages.

### Displaying the web inspector

To display the web inspector, you can either execute the `WA OPEN WEB INSPECTOR` command, or use the context menu of the web area.

- **Execute the `WA OPEN WEB INSPECTOR` command**<br/> This command can be used directly with onscreen (form object) and offscreen web areas. In the case of an onscreen web area, you must have [selected the embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) for the area (the web inspector is only available with this configuration).

- **Use the web area context menu**<br/> This feature can only be used with onscreen web areas and requires that the following conditions are met:
  - the embedded web rendering engine is selected for the area
  - Deve ativar o [menu contextual](properties_Entry.md#context-menu) da área (este menu se utiliza para chamar ao inspetor)
  - Deve habilitar expressamente ao uso do inspetor na área mediante a instrução abaixo:

```4d
 WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

For more information, refer to the description of the `WA SET PREFERENCE` command.

### Using the web inspector

When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. Quando selecionar essa opção, a janela do inspetor Web é exibida.

> The web inspector is included in the embedded web rendering engine. Para uma descrição detalhada nas funcionalidades do depurador, veja a documentação fornecida pelo motor de renderização web.

## Propriedades compatíveis

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
