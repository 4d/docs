---
id: stylesheets
title: Folhas de estilo
---

Uma folha de estilo agrupa junto uma combinação de atributos para objetos formulário - de atributos de texto a quase qualquer atributo de objeto disponível.

Além de harmonizar uma interface de aplicação, folhas de estilo oferecem três vantagens principais:

- Poupa tempo durante o desenvolvimento: cada objeto tem agrupamentos de configurações específicos dentro de uma única operação.
- Manutenção facilitada: folhas de estilo modificam a aparência de qualquer objeto que as usa, então mudar o tamanho de fonte em uma folha de estilo vai mudar o estilo de fonte para todos os objetos que usarem essa mesma folha de estilo.
- Controle de desenvolvimento multiplataforma: as folhas de estilo podem ser aplicadas para plataformas macOS e Windows, apenas macOS ou só Windows. Quando uma folha de estilo for aplicada, 4D automaticamente usa a folha de estilo apropriada.

## Criação ou modificação de folhas de estilo

Pode criar folhas de estilo utilizando seu editor de texto preferido e salvando o arquivo com extensão ".css" na pasta "/SOURCES" do projeto.

The 4D Tool Box provides a **Style Sheets** page as a shortcut option to create and edit one of three platform-specific named style sheets.

1. Open the **Style Sheets** page by choosing the **Tool Box > Style Sheet** from the Design menu or click on the **Tool Box** icon in the Form Editor toolbar.

![](../assets/en/FormEditor/stylesheets.png)

2. Select the type of style sheet to create and click on the **Create** or **Edit** button: ![](../assets/en/FormEditor/createButton.png)

3. A folha de estilo se abrirá em seu editor de texto predeterminado.

## Seletores de folhas de estilo

4D aceita três arquivos específicos de folhas de estilo:

| Folha de estilo                                              | Plataforma                                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------------------ |
| styleSheets.css                              | Folha de estilo global para macOS e Windows                              |
| styleSheets_mac.css     | Para definir os estilos de atributos específicos de macOS unicamente     |
| styleSheets_windows.css | Para definir os estilos de atributos específicos para Windows unicamente |

Estes arquivos se armazenam na pasta "/SOURCES" do projeto. They can also be accessed directly via the [CSS Preview](formEditor.md#css-preview) in the Form editor toobar.

## Declarações de folhas de estilo

Apesar de adaptadas para satisfazer às necessidades específicas dos formulários 4D, as folhas de estilo dos bancos de dados projeto geralmente seguem a sintaxe e a gramática CSS2.

Cada régua de estilo em uma folha de estilo contém duas partes:

- a _Selector_ - A selector defines where to apply the style. 4D é compatível com os seletores "object type", "object name", "class", "all objects" e "attribute value".

- a _Declaration_ - The declaration defines the actual style to apply. Podem ser agrupadas várias linhas de declaração para formar um bloco de declaração. Cada linha de um bloco de declaração CSS deve terminar com um ponto e linha, e o bloco inteiro deve ser rodeado por chaves.

## Declarações de folhas de estilo

### Tipo de objeto

O tipo de objeto define o tipo de objeto ao que vai aplicar o estilo, e corresponde ao seletor de elementos CSS.

Para aplicar o mesmo estilo para múltiplos tipos de objetos, especifique o tipo de objeto separado por um "," então em chaves, declare os estilos a aplicar:

> The object type corresponds to the JSON [type](FormObjects/properties_Object.md#type) property of form objects.

In the following example, all objects of the _button_ type will display text in the Helvetica Neue font, with a size of 20 pixels:

```
button {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

Especifique o tipo de objeto, depois entre chaves, declare os estilos a aplicar.

```
text, input {
  text-align: left;
  stroke: grey;
}
```

### Nome de objeto

Corresponding to the CSS **ID selector**, the object name defines a specific object to style since the object's name is unique within the form.

Determine o objeto com um caractere '#' antes do nome de objeto, depois entre chaves, declare os estilos a aplicar.

No exemplo abaio, o texto de objeto com o nome "okButton" será exibido em fonte Helvetica Neue, com um tamanho de 20 píxels:

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

### Class

Corresponding to the CSS **class selector**, the class defines the style for all form objects with the `class` attribute.

Para indicar que um estilo deve aplicar-se só aos objetos de um tipo determinado, especifique o tipo seguido de "." e o nome da classe, e depois, entre chaves, declare o estilo ou os estilos a aplicar.

In the following example, the text of all objects with the `okButtons` class will be displayed in Helvetica Neue font, with a size of 20 pixels, aligned in the center:

```
.okButtons {
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align: center;
}
```

Pode especificar as classes a usar com um caractere "." seguido pelo nome da classe, e entre chaves, declare os estilos a aplicar.

```
text.center {
  text-align: center;
  stroke: red;
}
```

In the 4D form description, you associate a class name to an object using the `class` attribute. Este atributo contém um ou vários nomes de classe, separados por um espaço:

```
class: "okButtons important"       
```

### Todos os objetos

Corresponding to the CSS **universal selector**, the "\*" character indicates that the following style will be applied to all objects on the form.

Indique que um estilo deve aplicar-se a todos os objetos formulário com o carácter "\*" e, a seguir, entre chaves, declare os estilos que devem aplicar-se.

No seguinte exemplo, todos os objetos terão um fundo cinza:

```
* {
  fill: gray;
}
```

### Sintaxes compatíveis

Corresponding to the CSS **attribute selectors**, styles can be applied to all form objects with a specific attribute.

Especifique o tipo de atributo entre colchetes, depois entre chaves, declare os estilos a aplicar.

#### Sintaxes compatíveis

| Sintaxe                                                                                  | Descrição                                                                                               |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [attribute]                          | matches objects with the `attribute`                                                                    |
| [attribute="value"]                  | matches objects with the `attribute` value containing exactly the specified "value"                     |
| [attribute~="value"] | matches objects with the `attribute` value containing the "value" among a space-separated list of words |
| [attribute\|="value"]                | matches objects with an `attribute` whose value starts with "value"                                     |

#### Exemplos

All objects with the `borderStyle` attribute will have purple lines:

```
[borderStyle]
{
     stroke: purple;
}
```

Todos os objetos do tipo texto com um atributo de texto cujo valor comece com "Hello" terão as letras amarelas:

```
text[text=Hello]
{
     stroke: blue;
}
```

Todos os objetos de tipo texto cujos valores contenham "hello" terão linhas azuis:

```
[text~=Hello]
{
     stroke: blue;
}

```

Todos os objetos de tipo texto com um atributo texto cujo valor seja "Hello" terão letras azuis:

```
text[text|=Hello]
{
     stroke: yellow;
}
```

## Seletores de folhas de estilo

### Media Queries

Media queries are used to apply color schemes to an application.

A media query is composed of a media feature and a value (e.g., `\<media feature>:\<value>` ).

Funcionalidades multimédia disponíveis:

- `prefers-color-scheme`

Expressões de funcionalidades multimédia disponíveis:

- **light**<br/>For using a light scheme
- **dark**<br/>For using a dark scheme

> Os esquemas de cores são suportados apenas no macOS.

##### Exemplo

This CSS defines a color combination for text and text background in the light scheme (default) and another combination when the dark scheme is selected:

```
@media (prefers-color-scheme: light) {
 .textScheme {
   fill: LightGrey;
   stroke: Black;
  }
}

@media (prefers-color-scheme: dark) {
  .textScheme {
    fill: DarkSlateGray;
    stroke: LightGrey;
  }
}
```

### Atributos específicos

A maioria dos atributos do objeto formulário podem ser definidos dentro de uma folha de estilo, exceto os seguintes atributos:

- `method`
- `tipo`
- `class`
- `event`
- `choiceList`, `excludedList`, `labels`, `list`, `requiredList` (list type)

Form object attributes can be declared with their [JSON name](FormObjects/properties_Reference.md) as CSS attributes (not including object types, methods, events, and lists).

#### Mapa de atributos

Os atributos listados a continuação podem aceitar o nome 4D ou o nome CSS.

| 4D               | CSS                |
| ---------------- | ------------------ |
| `borderStyle`    | `border-style`     |
| `fill`           | `background-color` |
| `fontFamily`     | `font-family`      |
| `fontSize`       | `font-size`        |
| `fontStyle`      | `font-style`       |
| `fontWeight`     | `font-weight`      |
| `stroke`         | `color`            |
| `textAlign`      | `text-align`       |
| `textDecoration` | `text-decoration`  |
| `verticalAlign`  | `vertical-align`   |

> 4D-specific values (_e.g._, `sunken`) are not supported when using CSS attribute names.

#### Valores de atributos específicos

- For `icon`, `picture`, and `customBackgroundPicture` attributes that support a path to an image, the syntax is:

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* rota absoluta */
icon: url("edit.png"); /* rota relativa ao arquivo de formulário */
```

- For `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` and `verticalLineStroke`, three syntaxes are supported:

  - CSS color name: `fill: red;`
  - Hexa value: `fill: #FF0000;`
  - the `rgb()` function: `fill:rgb(255,0,0)`

- Se uma string utilizar caracteres proibidos em CSS, pode rodear a string com aspas simples ou duplas. Por exemplo:
  - a xliff reference: `tooltip: ":xliff:CommonMenuFile";`
  - a datasource with a field expression: `dataSource: "[Table_1:1]ID:1";`

## Ordem de prioridade

Os projetos 4D priorizam as definições de estilo em conflito, primeiro pela definição do formulário e depois pelas folhas de estilo.

### JSON vs Folha de estilo

Se um atributo estiver definido na descrição do formulário JSON e em uma folha de estilo, 4D utilizará o valor do arquivo JSON.

To override this behavior, the style value must be followed with an `!important` declaration.

**Example 1:**

| Descripción do formulário JSON | Folha de estilo | 4D exibe   |
| ------------------------------ | --------------- | ---------- |
| `"text": "Button",`            | `text: Edit;`   | `"Button"` |

**Example 2:**

| Descripción do formulário JSON | Folha de estilo          | 4D exibe |
| ------------------------------ | ------------------------ | -------- |
| `"text": "Button",`            | `text: Edit !important;` | `"Edit"` |

### Folhas de estilo múltiplas

Durante a execução, 4D prioriza automaticamente as folhas de estilo na seguinte ordem:

1. The 4D form will first load the default CSS file `/SOURCES/styleSheets.css`.
2. It will then load the CSS file for the current platform `/SOURCES/styleSheets_mac.css` or `/SOURCES/styleSheets_windows.css`.
3. Se existir, então carregará um arquivo CSS específico definido no formulário  JSON:

- ou uma lista de arquivos por plataforma:

```
"css": "<path>" 
```

- um arquivo para ambas plataformas:

```
"css": [
     "<path1>",
     "<path2>" 
      ],
```

- ou uma lista de arquivos para ambas plataformas:

```
 "css": [
        {"path": "<path>", "media": "mac"},
        {"path": "<path>", "media": "windows"},
    ],
```

> As rotas dos arquivos pedem ser relativas ou absolutas.
>
> - - As rotas relativas se resolvem em relação com o arquivo de descrição do formulário JSON.
> - - Por razões de segurança, só se aceitam as rotas do sistema de arquivos para as rotas absolutas. (_e.g._, "/RESOURCES", "/DATA")

## Veja também

See the [**CSS for 4D Forms**](https://www.youtube.com/watch?v=3Hk4FUQENyQ) video presentation.
