---
id: webAreaOverview
title: Área Web
---

As áreas da Web podem exibir vários conteúdo Web em seus formulários: páginas HTML com conteúdo estático ou dinâmico, arquivos, imagens, JavaScript, etc. As áreas web podem mostrar vários tipos de conteúdo web dentro de seus formulários: Páginas HTML com conteúdos estáticos ou dinâmicos, arquivos, imagens, Javascript, etc. O motor de renderizado da área web depende da plataforma de execução da aplicação e de <a href="properties_WebArea.md#use-embedded-web-rendering-engine">a opção motor de renderizado</a> selecionada. The rendering engine of the web area depends on the execution platform of the application and the selected [rendering engine option](properties_WebArea.md#use-embedded-web-rendering-engine).

É possível criar várias áreas web no mesmo formulário. No entanto, observe que o uso de áreas web deve seguir [várias regras](#web-area-rules).

Several dedicated [standard actions](#standard-actions), numerous [language commands](../category/web-area) as well as generic and specific [form events](#form-events) allow the developer to control the functioning of web areas. Variáveis específicas podem ser usadas para trocar informações entre a área e o ambiente 4D.

## Propriedades específicas

### Variáveis associadas

Duas variáveis específicas podem ser associadas a cada área web:

- [`URL`](properties_WebArea.md#url) -- para controlar a URL exibida pela área Web
- [`Progression`](properties_WebArea.md#progression) -- para controlar a porcentagem de carregamento da página exibida na área Web.

> As of 4D v19 R5, the Progression variable is no longer updated in Web Areas using the [Windows system rendering engine](./webArea_overview.md#web-rendering-engine).

### Motor de renderização Web

You can choose between [two rendering engines](properties_WebArea.md#use-embedded-web-rendering-engine) for the web area, depending on the specifics of your application.

A seleção do motor de renderização web aninhado permite chamar aos métodos 4D desde a área web. A seleção do mecanismo de renderização do sistema é recomendada quando a área da web está conectada à internet, porque ela sempre se beneficia das últimas atualizações de segurança.

### Acessar métodos 4D

Quando a propriedade [Acessar aos métodos 4D](properties_WebArea.md#access-4d-methods) estiver selecionada, você pode chamar métodos 4D de uma área web.

:::note Notas

- This property is only available if the web area [uses the embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).
- Por motivos de segurança, já que permite a execução de código 4D, essa opção só deve ser ativada para páginas confiáveis, como as páginas geradas pela aplicação.

:::

### Objecto $4d

The [4D embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.

For example, to call the `HelloWorld` 4D method, you just execute the following statement:

```js
$4d. HelloWorld();
```

> JavaScript is case sensitive so it is important to note that the object is named **$4d** (with a lowercase "d").

A sintaxe das chamadas aos métodos 4D é a seguinte:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: You can pass as many parameters as you need to the 4D method.
  Esses parâmetros podem ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, número, array, objeto).

- `function(result)`: Function to pass as last argument. Esta função "callback" é chamada de forma síncrona quando o método 4D termina de ser executado. It receives the `result` parameter.

- `result`: Execution result of the 4D method. Este resultado pode ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, número, array, objeto).

> Por padrão, 4D trabalha em UTF-8. Quando você retornar texto contendo caracteres estendidos, por exemplo, caracteres com acentos, certifique-se de que a codificação da página exibida na área Web seja declarada como UTF-8, caso contrário, os caracteres poderão ser renderizados incorretamente. In this case, add the following line in the HTML page to declare the encoding:
> `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Exemplo 1

Given a 4D project method named `today` that does not receive parameters and returns the current date as a string.

Código 4D do método `today`:

```4d
 #DECLARE : Text
 return String(Current date;System date long)
```

Na área web, o método 4D pode ser chamado com a sintaxe abaixo:

```js
$4d.today()
```

The 4D method does not receive any parameters but it does return the result to the callback function called by 4D after the execution of the method. Queremos mostrar a data na página HTML que é carrega pela área Web.

Aqui está o código da página HTML:

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 <script type="text/javascript">
$4d.today(function(result)
{
    var curDate = result;
    document.getElementById("mydiv").innerHTML=curDate;
});
</script>
</head>
<body>Today is: <div id="mydiv"></div>
</body>
</html>
```

#### Exemplo 2

The 4D project method `calcSum` receives parameters and returns their sum:

4D code of `calcSum` method:

```4d
 #DECLARE (... : Real) -> $sum : Real 
  // receives n Real type parameters
  // and returns a Real
 var $i; $n : Integer
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+${$i}
 End for
```

O código JavaScript que roda na área web é:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(theSum)
    {
        var result = theSum // result is 262.5
    });
```

## Ações padrão

Four specific standard actions are available for managing web areas automatically: `Open Back URL`, `Open Forward URL`, `Refresh Current URL` and `Stop Loading URL`. Essas ações podem ser associadas com botões ou comandos de menu e permite implementação rápida de interfaces web básicas. Essas ações podem ser associadas com botões ou comandos de menu e permite implementação rápida de interfaces web básicas.

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

- **Edit menu commands**: When the web area has the focus, the **Edit** menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.
- **Menu contextual**: é possível usar o [menu contextual](properties_Entry.md#context-menu) padrão do sistema com a área web. Display of the context menu can be controlled using the [`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md) command.
- **Drag and drop**: The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties.
  Por razões de segurança, não é permitido mudar os conteúdos da área Web arrastando e soltando seja um arquivo ou URL. Neste caso, o cursor exibe um ícone "proibido" ![](../assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE(*;"warea";WA enable URL drop;True)` statement to display a "drop" icon and generate the [`On Window Opening Denied`](Events/onWindowOpeningDenied.md) event. In this event, you can call the [`WA OPEN URL`](../commands-legacy/wa-open-url.md) command or set the [URL variable](properties_WebArea.md#url) in response to a user drop.

> Drag and drop features described above are not supported in web areas using the [macOS system rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

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

To display the Web inspector, you can either execute the `WA OPEN WEB INSPECTOR` command, or use the context menu of the web area.

- **Execute the `WA OPEN WEB INSPECTOR` command**<br/>
  This command can be used directly with onscreen (form object) and offscreen web areas.

- **Use the web area context menu**<br/>
  This feature can only be used with onscreen web areas and requires that the following conditions are met:
  - o [menu contextual](properties_Entry.md#context-menu) para a área web está ativado
  - o uso do inspetor é expressamente permitido na área por meio da seguinte declaração:
  ```4d
  	WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  
  ```

> With [Windows system rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine), a change in this preference requires a navigation action in the area (for example, a page refresh) to be taken into account.

For more information, refer to the description of the [`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md) command.

When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. Quando selecionar essa opção, a janela do inspetor Web é exibida.

> Para uma descrição detalhada nas funcionalidades do depurador, veja a documentação fornecida pelo motor de renderização web.

## Propriedades compatíveis

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## 4DCEFParameters.json

The 4DCEFParameters.json is a configuration file that allows customization of CEF parameters to manage the behavior of web areas within 4D applications.

Os [Interruptores padrão](#default-file) são fornecidos, mas você pode substituí-los usando um arquivo 4DCEFParameters.json personalizado.

In the development phase (using 4D application), create a 4DCEFParameters.json file at the following location:

- Windows: `Users\[userName]\AppData\Roaming\4D\4DCEFParameters.json`
- macOS: `$HOME/Library/Application Support/4D/4DCEFParameters.json`

Before building a final application, add the custom 4DCEFParameters.json file to the Resources folder of the project.

:::warning

Adding a custom 4DCEFParameters.json file can fundamentally impact all 4D embedded web areas, including [4D View Pro areas](../ViewPro/configuring.md#form-area-properties). It is the developer's responsibility to ensure that the custom switches do not destabilize the 4D application.

:::

The 4DCEFParameters.json file format is as the following:

```json

{
  "switches":{
     "key":value
  },
  "macOS":{
    "switches": {
     "key":value
    }
  },
  "windows": {
    "switches": {
     "key":value
    }
  }
}
```

The 4DCEFParameters.json file structure contains:

- **switches**: a list of CEF switches and their corresponding values applied for both macOS and Windows.
- **macOS.switches**: macOS-specific CEF switches.
- **windows.switches**: Windows-specific CEF switches.

The switches in the custom file take precedence. In case of duplication of switches within the same file, the switches defined in the platform-specific subsection ("macOS.switches" or "windows.switches") are given priority and used for configuration.

:::note

The list of supported switches is constantly evolving and is managed by the CEF development team. For information about available switches, you need to refer to the CEF developer community.

:::

### Exemplos

#### Arquivo padrão

The default 4DCEFParameters.json file contains the following switches:

```json
{
  "switches":{
     "enable-media-stream":true,
     "enable-print-preview":true
  },
  "macOS":{
    "switches": {
      "use-mock-keychain": true
    }
  },
  "windows": {
    "switches": {
      "disable-features": "WinUseBrowserSpellChecker"
    }
  }
}

```

#### Example of disabling default Switch

```json
{
  "switches": {
    "disable-javascript": true,
    "disable-web-security": true
  }
}
```

#### Exemplo para Autoplay

```json
{
  "switches":{
     "autoplay-policy": "no-user-gesture-required"
  }
}
```

### Veja também

[Specify your own parameters to initialize the embedded web area (blog post)](https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area)
