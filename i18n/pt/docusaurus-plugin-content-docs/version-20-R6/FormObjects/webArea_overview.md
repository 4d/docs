---
id: webAreaOverview
title: Área Web
---

As áreas da Web podem exibir vários tipos de conteúdo da Web em seus formulários: Páginas HTML com conteúdo estático ou dinâmico, arquivos, imagens, JavaScript, etc. O mecanismo de renderização da área da Web depende da plataforma de execução do aplicativo e da [opção de mecanismo de renderização] selecionada (properties_WebArea.md#use-embedded-web-rendering-engine).

É possível criar várias áreas web no mesmo formulário. No entanto, observe que o uso de áreas web deve seguir [várias regras](#web-area-rules).

Várias [ações padrão] dedicadas (#standard-actions), vários [comandos de idioma] (https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html), bem como [eventos de formulário] genéricos e específicos (#form-events) permitem que o desenvolvedor controle o funcionamento das áreas da Web. Variáveis específicas podem ser usadas para trocar informações entre a área e o ambiente 4D.

## Propriedades específicas

### Variáveis associadas

Duas variáveis específicas podem ser associadas a cada área web:

- [`URL`](properties_WebArea.md#url) -- para controlar a URL exibida pela área da Web
- [`Progression`](properties_WebArea.md#progression) -- para controlar a porcentagem de carregamento da página exibida na área da Web.

> A partir do 4D v19 R5, a variável Progression não é mais atualizada em Web Areas usando o [mecanismo de renderização do sistema Windows](./webArea_overview.md#web-rendering-engine).

### Motor de renderização Web

Você pode escolher entre [dois mecanismos de renderização] (properties_WebArea.md#use-embedded-web-rendering-engine) para a área da Web, dependendo das especificidades do seu aplicativo.

A seleção do mecanismo de renderização da Web incorporado permite chamar métodos 4D da área da Web e garantir que os recursos do macOS e do Windows sejam semelhantes. A seleção do mecanismo de renderização do sistema é recomendada quando a área da web está conectada à internet, porque ela sempre se beneficia das últimas atualizações de segurança.

### Acesso a métodos 4D

Quando a propriedade [Access 4D methods](properties_WebArea.md#access-4d-methods) estiver selecionada, você pode chamar métodos 4D de uma área web.

:::note Notas

- Essa propriedade só estará disponível se a área da Web [usar o mecanismo de renderização da Web incorporado] (properties_WebArea.md#use-embedded-web-rendering-engine).
- Por motivos de segurança, já que permite a execução de código 4D, essa opção só deve ser ativada para páginas confiáveis, como as páginas geradas pelo aplicativo.

:::

### Objecto $4d

O [4D embedded web rendering engine] (properties_WebArea.md#use-embedded-web-rendering-engine) fornece à área um objeto JavaScript chamado $4d que você pode associar a qualquer método de projeto 4D usando a notação de objeto ".".

Por exemplo, para chamar o método `HelloWorld` 4D, basta executar a seguinte instrução:

```js
$4d. HelloWorld();
```

> JavaScript é sensível a maiúsculas e minúsculas, portanto é importante notar que o objeto tem o nome $4d (com uma letra minúscula "d").

A sintaxe das chamadas aos métodos 4D é a seguinte:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: Você pode passar tantos parâmetros quanto precisa para o método 4D.
  Esses parâmetros podem ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, número, matriz, objeto).

- `function(result)`: Função a ser passada como último argumento. Esta função "callback" é chamada de forma síncrona quando o método 4D termina de ser executado. Ele recebe o parâmetro `result`.

- `result`: Resultado da execução do método 4D, retornado na expressão "$0". Esse resultado pode ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, número, matriz, objeto). Você pode usar o comando `C_OBJECT` para retornar os objetos.

> Por padrão, 4D trabalha em UTF-8. Quando você retornar texto contendo caracteres estendidos, por exemplo, caracteres com acentos, certifique-se de que a codificação da página exibida na área da Web seja declarada como UTF-8, caso contrário, os caracteres poderão ser renderizados incorretamente. Nesse caso, adicione a seguinte linha na página HTML para declarar a codificação:
> `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

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

Quatro ações padrão específicas estão disponíveis para gerenciar áreas da Web automaticamente: `Abrir URL anterior`, `Abrir URL anterior`, `Refrescar URL atual` e `Parar de carregar URL`. Essas ações podem ser associadas com botões ou comandos de menu e permite implementação rápida de interfaces web básicas. Essas ações são descritas em [Ações Padrão](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).

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

- Comandos do menu **Editar**: Quando a área da Web está em foco, os comandos do menu **Edit** podem ser usados para executar ações como copiar, colar, selecionar tudo etc., de acordo com a seleção.
- **Menu de contexto**: É possível usar o [contexto menu](properties_Entry.md#context-menu) padrão do sistema com a área web. Exibição do menu de contexto pode ser controlado usando o comando `WA SET PREFERENCE`.
- **Arrastar e soltar**: O usuário pode arrastar e soltar texto, imagens e documentos dentro da área da Web ou entre uma área da Web e os objetos do formulário 4D, de acordo com as propriedades do objeto 4D.
  Por razões de segurança, não é permitido mudar os conteúdos da área Web arrastando e soltando seja um arquivo ou URL. Neste caso, o cursor exibe um ícone "proibido" ![](../assets/en/FormObjects/forbidden.png). Você precisa usar a instrução `WA SET PREFERENCE(*; "warea";WA enable URL drop;True)` para exibir um ícone "drop" e gerar o evento [`On Window Opening Denied`] (Events/onWindowOpeningDenied.md). Nesse caso, você pode chamar o comando [`WA OPEN URL`] (https://doc.4d.com/4dv19/help/command/en/page1020.html) ou definir a [variável URL] (properties_WebArea.md#url) em resposta a um drop do usuário.

> Os recursos de arrastar e soltar descritos acima não são compatíveis com as áreas da Web que usam o [mecanismo de renderização do sistema macOS] (properties_WebArea.md#use-embedded-web-rendering-engine).

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

Para exibir o inspetor da Web, você pode executar o comando `WA OPEN WEB INSPECTOR` ou usar o menu de contexto da área da Web.

- **Execute o comando `WA OPEN WEB INSPECTOR`**<br/>
  Esse comando pode ser usado diretamente com áreas da Web na tela (objeto de formulário) e fora da tela.

- **Use o menu de contexto da área da Web**<br/>
  Esse recurso só pode ser usado com áreas da Web na tela e requer que as seguintes condições sejam atendidas:
  - o [menu de contexto](properties_Entry.md#context-menu) para a área web está ativado
  - Deve habilitar expressamente ao uso do inspetor na área mediante a instrução abaixo:
  ```4d
  	WA SET PREFERENCE(*; "WA";WA enable Web inspector;True)  
  ```

> Com [engenharia de renderização de sistema Windows](properties_WebArea. d#use-embedded-web-rendering-engine), uma mudança nesta preferência requer que uma ação de navegação na área (por exemplo, uma atualização de página) seja levada em conta.

Para obter mais informações, consulte a descrição do comando `WA SET PREFERENCE`.

Quando você fez as configurações conforme descrito acima, você tem novas opções como **Inspecionar Elemento** no menu de contexto da área. Quando selecionar essa opção, a janela do inspetor Web é exibida.

> Para uma descrição detalhada nas funcionalidades do depurador, veja a documentação fornecida pelo motor de renderização web.

## Propriedades compatíveis

[Estilo de linha de bordo](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Menu de contexto](properties_Entry.md#context-menu) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Método](properties_Action.md#method) - [Nome do objeto](properties_Object.md#object-name) - [Progressão](properties_WebArea.md#progression) - [Dereita](properties_CoordinatesAndSizing.md#right) - [Topo](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Usar o mecanismo de renderização da Web](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - [Tamanho Vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)

## 4DCEFParameters.json

O 4DCEFParameters.json é um arquivo de configuração que permite a personalização dos parâmetros CEF para gerenciar o comportamento das áreas da Web nos aplicativos 4D.

[As opções padrão](#default-file) são fornecidas, mas você pode substituí-las usando um arquivo 4DCEFParameters.json personalizado.

Na fase de desenvolvimento (usando o aplicativo 4D), crie um arquivo 4DCEFParameters.json no seguinte local:

- Windows: `Users\[userName]\AppData\Roaming\4D\4DCEFParameters.json`
- macOS: `$HOME/Library/Application Support/4D/4DCEFParameters.json`

Antes de criar um aplicativo final, adicione o arquivo personalizado 4DCEFParameters.json à pasta Resources do projeto.

:::warning

A adição de um arquivo 4DCEFParameters.json personalizado pode afetar fundamentalmente todas as áreas da Web incorporadas 4D, incluindo [áreas 4D View Pro](../ViewPro/configuring.md#form-area-properties). É responsabilidade do desenvolvedor garantir que os switches personalizados não desestabilizem o aplicativo 4D.

:::

O formato do arquivo 4DCEFParameters.json é o seguinte:

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

A estrutura do arquivo 4DCEFParameters.json contém:

- **switches**: uma lista de switches CEF e seus valores correspondentes aplicados ao macOS e ao Windows.
- **macOS.switches**: switches CEF específicos do macOS.
- **windows.switches**: Comutadores CEF específicos do Windows.

Os interruptores no arquivo personalizado têm prioridade. Em caso de duplicação de switches no mesmo arquivo, os switches definidos na subseção específica da plataforma ("macOS.switches" ou "windows.switches") têm prioridade e são usados para configuração.

:::note

A lista de switches compatíveis está em constante evolução e é gerenciada pela equipe de desenvolvimento da CEF. Para obter informações sobre os switches disponíveis, você precisa consultar a comunidade de desenvolvedores da CEF.

:::

### Exemplos

#### Arquivo padrão

O arquivo 4DCEFParameters.json padrão contém os seguintes botões:

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

#### Exemplo de desativação do switch padrão

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

[Especifique seus próprios parâmetros para inicializar a área Web incorporada (postagem no blog)](https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area)
