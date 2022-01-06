---
id: stylesheets
title: Style sheets
---


A style sheet groups together a combination of attributes for form objects —  from text attributes to nearly any available object attribute.

In addition to harmonizing an application's interface, style sheets provide three major advantages:

*   Saves time during development: Each object has specific group of settings within a single operation.
*   Facilitates maintenance: Style sheets modify the appearance of any objects that uses them, so changing the font size in a style sheet will change the font size for all of the objects that use this same style sheet.
*   Controls multi-platform development: You can have a style sheets that apply to both macOS and Windows platforms, only macOS, or only Windows. When a style sheet is applied, 4D automatically uses the appropriate style sheet.

## Arquivos folhas de estilo

4D accepts three, specific style sheet files:

| Style Sheet             | Platform                                              |
| ----------------------- | ----------------------------------------------------- |
| styleSheets.css         | Default global style sheet for both macOS and Windows |
| styleSheets_mac.css     | For defining macOS only specific attribute styles     |
| styleSheets_windows.css | For defining Windows only specific attribute styles   |

Estes arquivos se armazenam na pasta "/SOURCES" do projeto. They can also be accessed directly via the [CSS Preview](formEditor.md#css-preview) in the Form editor toobar.


## Arquitetura das folhas de estilo

While adapted to meet the specific needs of 4D forms, style sheets for application projects generally follow CSS2 syntax and grammar.

Every style rule in a style sheet contains two parts:

*   a *Selector* - A selector defines where to apply the style. 4D supports "object type", "object name", "class", "all objects", as well as "attribute value" selectors.

*   a *Declaration* - The declaration defines the actual style to apply. Multiple declaration lines can be grouped together to form a declaration block. Each line in a CSS declaration block must end with a semicolon, and the entire block must be surrounded by curly braces.



## Seletores de folhas de estilo


### Tipo de objeto

Corresponding to the CSS element selector, the object type defines the type of object to style.

Specify the object type, then in curly braces, declare the style(s) to apply.

> The object type corresponds to the JSON [type](FormObjects/properties_Object.md#type) property of form objects.

In the following example, all objects of the *button* type will display text in the Helvetica Neue font, with a size of 20 pixels:

```
button {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

To apply the same style to multiple types of objects, specify the object types separated by a "," then in curly braces, declare the style(s) to apply:

```
text, input {
  text-align: left;
  stroke: grey;
}
```

### Object Name

Corresponding to the CSS **ID selector**, the object name defines a specific object to style since the object's name is unique within the form.

Designate the object with a "#" character before the object's name, then in curly braces, declare the style(s) to apply.

In the following example, the text of the object with the name "okButton" will be displayed in Helvetica Neue font, with a size of 20 pixels:

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```



### Class

Corresponding to the CSS **class selector**, the class defines the style for all form objects with the `class` attribute.

You can specify the classes to use with a "." character followed by the name of the class, and in curly braces, declare the style(s) to apply.

In the following example, the text of all objects with the `okButtons` class will be displayed in Helvetica Neue font, with a size of 20 pixels, aligned in the center:

```
.okButtons {
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align: center;
}
```

To designate that a style should be applied only to objects of a distinct type, specify the type followed by "." and the name of the class, then in curly braces, declare the style(s) to apply.

```
text.center {
  text-align: center;
  stroke: red;
}
```

In the 4D form description, you associate a class name to an object using the `class` attribute. This attribute contains one or several class names, separated by a space character:

```
class: "okButtons important"             
```


### Todos os objetos

Corresponding to the CSS **universal selector**, the "*" character indicates that the following style will be applied to all objects on the form.

Designate that a style should apply to all form objects with the "*" character, then in curly braces, declare the style(s) to apply.

In the following example, all objects will have a gray fill:

```
* {
  fill: gray;
}
```


### Atributos específicos

Corresponding to the CSS **attribute selectors**, styles can be applied to all form objects with a specific attribute.

Specify the attribute within brackets, then in curly braces, declare the style(s) to apply.

#### Supported syntaxes

| Sintaxe                   | Description                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| [attribute]               | matches objects with the `attribute`                                                                    |
| [attribute="value"]       | matches objects with the `attribute` value containing exactly the specified "value"                     |
| [attribute~="value"]      | matches objects with the `attribute` value containing the "value" among a space-separated list of words |
| [attribute&#124;="value"] | matches objects with an `attribute` whose value starts with "value"                                     |

#### Exemplos

All objects with the `borderStyle` attribute will have purple lines:

```
[borderStyle]
{
     stroke: purple;
}
```

All objects of the text type with a text attribute whose value is "Hello" will have blue letters:


```
text[text=Hello]
{
     stroke: blue;
}
```

All objects with a text attribute whose value contains "Hello" will have blue lines:

```
[text~=Hello]
{
     stroke: blue;
}

```

All objects of the text type with a text attribute whose value starts with "Hello" will have yellow letters:

```
text[text|=Hello]
{
     stroke: yellow;


}
```


## Declarações de folhas de estilo

### Media Queries

Media queries are used to apply color schemes to an application.

A media query is composed of a media feature and a value (e.g., \<media feature>:\<value> ).


Available media features:

*   `prefers-color-scheme`


Available media feature expressions:

*   **light**<br>For using a light scheme
*   **dark**<br>For using a dark scheme

> Color schemes are only supported on macOS.

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


### Object Attributes

A maioria dos atributos do objeto formulário podem ser definidos dentro de uma folha de estilo, exceto os seguintes atributos:
    - `method`
    - `type`
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
> 4D-specific values (*e.g.*, `sunken`) are not supported when using CSS attribute names.


#### Valores de atributos específicos

- Para os atributos `icon`, `picture` e `customBackgroundPicture` que são compatíveis com uma rota a uma imagem, a sintaxe é:

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* rota absoluta */
icon: url("edit.png"); /* rota relativa ao arquivo de formulário */
```

- Para `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` e `verticalLineStroke`, três sintaxes são compatíveis:

    - CSS color name: `fill: red;`
    - Hexa value: `fill: #FF0000;`
    - función `rgb()`: `fill:rgb(255,0,0)`

- Se uma string utilizar caracteres proibidos em CSS, pode rodear a string com aspas simples ou duplas. For example:
    - uma referencia xliff: `tooltip: ":xliff:CommonMenuFile";`
    - um datasource com a expressão de campo: `dataSource: "[Table_1:1]ID:1";`


## Ordem de prioridade

Os proetos 4D priorizam as definições de estilo em conflito, primeiro pela definição do formulário e depois pelas folhas de estilo.


### JSON vs Folha de estilo

Se um atributo estiver definido na descrição do formulário JSON e em uma folha de estilo, 4D utilizará o valor do arquivo JSON.

Para anular este comportamento, o valor do estilo deve ir seguido de uma declaração `!important`.

**Exemplo 1:**

| Descripción do formulário JSON | Style Sheet   | 4D exibe   |
| ------------------------------ | ------------- | ---------- |
| `"text": "Button",`            | `text: Edit;` | `"Button"` |

**Exemplo 2:**

| Descripción do formulário JSON | Style Sheet              | 4D exibe |
| ------------------------------ | ------------------------ | -------- |
| `"text": "Button",`            | `text: Edit !important;` | `"Edit"` |




### Folhas de estilo múltiplas

Durante a execução, 4D prioriza automaticamente as folhas de estilo na seguinte ordem:

1.  O formulário 4D carregará primeiro o arquivo CSS por padrão `/SOURCES/styleSheets.css`.
2.  Depois carregará o arquivo CSS para a plataforma atual `/SOURCES/styleSheets_mac.css` o `/SOURCES/styleSheets_windows.css`.
3.  Se existir, então carregará um arquivo CSS específico definido no formulário  JSON:

    *   um arquivo para ambas plataformas:

    ```
    "css": "<path>" 
    ```

    *   ou uma lista de arquivos para ambas plataformas:

    ```
    "css": [
         "<path1>",
         "<path2>" 
          ],
    ```

    *   ou uma lista de arquivos por plataforma:

    ```
     "css": [
            {"path": "<path>", "media": "mac"},
            {"path": "<path>", "media": "windows"},
        ],
    ```

> As rotas dos arquivos pedem ser relativas ou absolutas. * As rotas relativas se resolvem em relação com o arquivo de descrição do formulário JSON. * Por razões de segurança, só se aceitam as rotas do sistema de arquivos para as rotas absolutas. (*e.g.*, "/RESOURCES", "/DATA")


## Criação ou modificação de folhas de estilo

Pode criar folhas de estilo utilizando seu editor de texto preferido e salvando o arquivo com extensão ".css" na pasta "/SOURCES" do projeto.

A caixa de ferramentas de 4D oferece uma página **Hojas de estilo** como opção de acesso direto para criar e editar uma das três folhas de estilo com nomes específicas da plataforma.

1.  Abra a página **Estilos** escolhendo a **Caixa de ferramentas > Styles** do menu Design ou clique no ícone **Caixa de ferramentas** da barra de ferramentas do editor de formulários.

    ![](assets/en/FormEditor/stylesheets.png)

2.  Selecione o tipo de folha de estilo que deseja criar E cliquer no botão **Criar** ou **Editar**: ![](assets/en/FormEditor/createButton.png)

3. A folha de estilo se abrirá em seu editor de texto predeterminado.  
