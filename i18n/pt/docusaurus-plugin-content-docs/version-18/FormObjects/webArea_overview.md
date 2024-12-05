---
id: webAreaOverview
title: Área Web
---

## Visão Geral

The Web areas can display various types of Web content within your forms: HTML pages with static or dynamic contents, files, pictures, Javascript, etc. As áreas Web podem mostrar vários tipos de conteúdo web dentro de seus formulários: páginas HTML com conteúdos estáticos ou dinâmicos, arquivos, imagens, Javascript, etc. O motor de renderizado da área web depende da plataforma de execução da aplicação e de [a opção motor de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) selecionada.

É possível criar várias áreas Web no mesmo formulário. Note, however, that the use of Web areas must follow [several rules](#web-area-rules).

Several dedicated [standard actions](#standard-actions), numerous [language commands](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) as well as generic and specific [form events](#form-events) allow the developer to control the functioning of Web areas. Specific variables can be used to exchange information between the area and the 4D environment.
> The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level.

## Propriedades específicas

### Variáveis associadas

Duas variáveis específicas podem ser associadas a cada área da Web:

- [`URL`](properties_WebArea.md#url) --to control the URL displayed by the Web area
- [`Progression`](properties_WebArea.md#progression) -- to control the loading percentage of the page displayed in the Web area.

### Motor de renderização Web

Você pode escolher entre [dois motores de renderização](properties_WebArea.md#use-embedded-web-rendering-engine) para a área Web, dependendo das especificidades da sua aplicação.

Selecting the embedded web rendering engine allows you to call 4D methods from the Web area.

### Acesso a métodos 4D

When the [Access 4D methods](properties_WebArea.md#access-4d-methods) property is selected, you can call 4D methods from a Web area.

> Esta propriedade só está disponível se a área Web [utilizar o mecanismo de renderização Web incorporado](properties_WebArea.md#use-embedded-web-rendering-engine).

### Objecto $4d

O [motor de renderização web embebido de 4D](properties_WebArea.md#use-embedded-web-rendering-engine) fornece à área um objeto JavaScript chamado $4d que pode ser associado a qualquer método projeto 4D utilizando a notação objeto ".".

For example, to call the `HelloWorld` 4D method, you just execute the following statement:

```js
$4d. HelloWorld();
```
> JavaScript é sensível a maiúsculas e minúsculas, portanto é importante notar que o objeto tem o nome $4d (com uma letra minúscula "d").

A sintaxe das chamadas aos métodos 4D é a seguinte:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: You can pass as many parameters as you need to the 4D method. These parameters can be of any type supported by JavaScript (string, number, array, object).

- `function(result)`: função a passar como último argumento. Esta função "callback" é chamada de forma síncrona quando o método 4D termina de ser executado. Recebe o parâmetro `result`.

- `result`: Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). Você pode usar o comando `C_OBJECT` para retornar os objetos.

> Por padrão, 4D trabalha em UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding: `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Exemplo 1

Given a 4D project method named `today` that does not receive parameters and returns the current date as a string.

Código 4D do método `today`:

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

Na área Web, o método 4D pode ser chamado com a seguinte sintaxe:

```js
$4d.today()
```

The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. We want to display the date in the HTML page that is loaded by the Web area.

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

The 4D project method `calcSum` receives parameters (`$1...$n`) and returns their sum in `$0`:

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

O código JavaScript executado na área Web é:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // o resultado é 262.5
    });
```

## Ações padrão

Four specific standard actions are available for managing Web areas automatically: `Open Back URL`, `Open Next URL`, `Refresh Current URL` and `Stop Loading URL`. These actions can be associated with buttons or menu commands and allow quick implementation of basic Web interfaces. Estas ações são descritas em [ações standard](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).

## Eventos formulário

Specific form events are intended for programmed management of Web areas, more particularly concerning the activation of links:

- `On Begin URL Loading`
- `On URL Resource Loading`
- `On End URL Loading`
- `On URL Loading Error`
- `On URL Filtering`
- `On Open External Link`
- `On Window Opening Denied`

Além disso, as áreas da Web são compatíveis com os seguintes eventos de formulário genéricos:

- `On Load`
- `On Unload`
- `On Getting Focus`
- `On Losing Focus`

## Regras das áreas web

### Interface do usuário

When the form is executed, standard browser interface functions are available to the user in the Web area, which permit interaction with other form areas:

- **Edit menu commands**: When the Web area has the focus, the **Edit** menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.
- **Context menu**: It is possible to use the standard [context menu](properties_Entry.md#context-menu) of the system with the Web area. Display of the context menu can be controlled using the `WA SET PREFERENCE` command.
- **Drag and drop**: The user can drag and drop text, pictures and documents within the Web area or between a Web area and the 4D form objects, according to the 4D object properties. For security reasons, changing the contents of a Web area by means of dragging and dropping a file or URL is not allowed by default. Neste caso, o cursor do rato apresenta um ícone "proibido" ![](../assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE` command to explicitly allow the dropping of URLs or files in the area.

### Subformulários

For reasons related to window redrawing mechanisms, the insertion of a Web area into a subform is subject to the following constraints:

- O subformulário não deve poder deslocar-se
- Os limites da área Web não devem ultrapassar o tamanho do subformulário

> Superimposing a Web area on top of or beneath other form objects is not supported.

### Conflito entre a área Web e o servidor Web (Windows)

Under Windows, it is not recommended to access, via a Web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own Web server.

### Plugins Web e applets Java

The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level.

### Inserção de protocolo (macOS)

The URLs handled by programming in Web areas under macOS must begin with the protocol. Por exemplo, você precisa passar a cadeia de caracteres "http://www.mysite.com" e não apenas "www.mysite.com".

## Acesso ao inspetor Web

Você pode visualizar e usar um inspetor Web nas áreas Web dos seus formulários. O inspetor Web é um depurador fornecido pelo motor Web integrado. It allows to parse the code and the flow of information of the Web pages.

### Exibir o inspector Web

The following conditions must be met in order to view the Web inspector in a Web area:

- Você deve [selecionar o mecanismo de renderização Web incorporado](properties_WebArea.md#use-embedded-web-rendering-engine) para a área (o inspetor Web só está disponível com esta configuração).
- You must enable the [context menu](properties_Entry.md#context-menu) for the area (this menu is used to call the inspector)
- You must expressly enable the use of the inspector in the area by means of the following statement:

```4d
 WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

### Utilizar o inspetor Web

When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. Quando você seleciona essa opção, a janela do inspetor da Web é exibida.

> O inspetor Web está incluído no mecanismo de renderização Web incorporado. For a detailed description of the features of this debugger, refer to the documentation provided by the Web rendering engine.

## Propriedades compatíveis

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
