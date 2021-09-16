---
id: stylesheets
title: Folhas de estilo
---

## Visão Geral

Uma folha de estilo agrupa junto uma combinação de atributos para objetos formulário - de atributos de texto a quase qualquer atributo de objeto disponível.

Além de harmonizar uma interface de aplicação, folhas de estilo oferecem três vantagens principais:

*   Poupa tempo durante o desenvolvimento: cada objeto tem agrupamentos de configurações específicos dentro de uma única operação.
*   Manutenção facilitada: folhas de estilo modificam a aparência de qualquer objeto que as usa, então mudar o tamanho de fonte em uma folha de estilo vai mudar o estilo de fonte para todos os objetos que usarem essa mesma folha de estilo.
*   Controle de desenvolvimento multiplataforma: as folhas de estilo podem ser aplicadas para plataformas macOS e Windows, apenas macOS ou só Windows. Quando uma folha de estilo for aplicada, 4D automaticamente usa a folha de estilo apropriada.

### Arquivos folhas de estilo

4D aceita três arquivos específicos de folhas de estilo:

| Folha de Estilo         | Plataforma                                                               |
| ----------------------- | ------------------------------------------------------------------------ |
| styleSheets.css         | Folha de estilo global para macOS e Windows                              |
| styleSheets_mac.css     | Para definir os estilos de atributos específicos de macOS unicamente     |
| styleSheets_windows.css | Para definir os estilos de atributos específicos para Windows unicamente |

Estes arquivos se armazenam na pasta "/SOURCES" do projeto.


### Arquitetura das folhas de estilo

Apesar de adaptadas para satisfazer às necessidades específicas dos formulários 4D, as folhas de estilo dos bancos de dados projeto geralmente seguem a sintaxe e a gramática CSS2.

Cada régua de estilo em uma folha de estilo contém duas partes:

*   a *Selector* - Um seletor define onde aplicar o estilo. 4D é compatível com os seletores "object type", "object name", "class", "all objects" e "attribute value".

*   uma *declaração* - A declaração define o estilo real a aplicar. Podem ser agrupadas várias linhas de declaração para formar um bloco de declaração. Cada linha de um bloco de declaração CSS deve terminar com um ponto e linha, e o bloco inteiro deve ser rodeado por chaves.



## Seletores de folhas de estilo


### Tipo de objeto

O tipo de objeto define o tipo de objeto ao que vai aplicar o estilo, e corresponde ao seletor de elementos CSS.

Especifique o tipo de objeto, depois entre chaves, declare os estilos a aplicar.

> O tipo de objeto corresponde ao JSON [tipo](FormObjects/properties_Object.md#type) propriedade de objetos formulários.

No exemplo abaixo, todos os objetos do tipo *button* vai exibir texto na fonte Helvetica Neue, com um tamanho de 20 píxels:

```
button {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

Para aplicar o mesmo estilo para múltiplos tipos de objetos, especifique o tipo de objeto separado por um "," então em chaves, declare os estilos a aplicar:

```
text, input {
  text-align: left;
  stroke: grey;
}
```

### Nome de objeto

O nome de objeto corresponde ao **seletor de ID** CSS e define um objeto específico ao que há que dar estilo, já que o nome do objeto é único dentro do formulário.

Determine o objeto com um caractere '#' antes do nome de objeto, depois entre chaves, declare os estilos a aplicar.

No exemplo abaio, o texto de objeto com o nome "okButton" será exibido em fonte Helvetica Neue, com um tamanho de 20 píxels:

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```



### Classe

Class corresponde ao **selector class** CSS e define o estilo para todos os objetos formulário com o atributo `class`.

Pode especificar as classes a usar com um caractere "." seguido pelo nome da classe, e entre chaves, declare os estilos a aplicar.

No exemplo abaixo, o texto de todos os objetos com o nome da classe `okButtons` se mostrará na fonte Helvetica Neue, com um tamanho de 20 píxels, alinhado ao centro:

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

| Syntax                    | Description                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| [attribute]               | matches objects with the `attribute`                                                                    |
| [attribute="value"]       | matches objects with the `attribute` value containing exactly the specified "value"                     |
| [attribute~="value"]      | matches objects with the `attribute` value containing the "value" among a space-separated list of words |
| [attribute&#124;="value"] | matches objects with an `attribute` whose value starts with "value"                                     |

#### Examples

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

The majority of form object attributes can be defined within a style sheet, except the following attributes:
    - "method"
    - "type"
    - "class"
    - "event"
    - choiceList, excludedList, labels, list, requiredList (list type)

Form object attributes can be declared with their JSON name as CSS attributes (not including object types, methods, events, and lists). For more information, see the **Dynamic Forms** page in the Design Reference.

### Mapa de atributos

The attributes listed below are able to accept either the 4D name or the CSS name.

| 4D             | CSS              |
| -------------- | ---------------- |
| borderStyle    | border-style     |
| fill           | background-color |
| fontFamily     | font-family      |
| fontSize       | font-size        |
| fontStyle      | font-style       |
| fontWeight     | font-weight      |
| stroke         | color            |
| textAlign      | text-align       |
| textDecoration | text-decoration  |
| verticalAlign  | vertical-align   |
> 4D-specific values (*e.g.*, "sunken") are not supported when using CSS attribute names.


### Valores de atributos específicos

- For `icon`, `picture`, and `customBackgroundPicture` attributes that support a path to an image, the syntax is:

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* absolute path */
icon: url("edit.png"); /* relative path to the form file */
```

- For `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` and `verticalLineStroke`, three syntaxes are supported:

    - css color name: `fill: red;`
    - valor hexadécimal: `fill: #FF0000;`
    - the `rgb()` function: `fill:rgb(255,0,0)`

- If a string uses forbidden characters in CSS, you can surround the string with simple or double quotes. For example:
    - a xliff reference: `tooltip: ":xliff:CommonMenuFile";`
    - a datasource with a field expression: `dataSource: "[Table_1:1]ID:1";`


## Ordem de prioridade

4D projects prioritizes conflicting style definitions first by the form definition, then by the style sheets.


### JSON vs Folha de estilo

If an attribute is defined in the JSON form description and a style sheet, 4D will use the value in the JSON file.

To override this behavior, the style value must be followed with an `!important` declaration.

**Example 1:**

| JSON form description | Style Sheet   | 4D displays |
| --------------------- | ------------- | ----------- |
| `"text": "Button",`   | `text: Edit;` | `"Button"`  |


**Example 2:**

| JSON form description | Style Sheet              | 4D displays |
| --------------------- | ------------------------ | ----------- |
| `"text": "Button",`   | `text: Edit !important;` | `"Edit"`    |



### Folhas de estilo múltiplas

At runtime, 4D automatically prioritizes style sheets in the following order:

1.  The 4D form will first load the default CSS file `/SOURCES/styleSheets.css`.
2.  It will then load the CSS file for the current platform `/SOURCES/styleSheets_mac.css` or `/SOURCES/styleSheets_windows.css`.
3.  If it exists, it will then load a specific CSS file defined in the JSON form:

    *   a file for both platforms:

    ```
    "css": "<path>"
    ```

    *   or a list of files for both platforms:

    ```
    "css": [
         "<path1>",
         "<path2>"
          ],
    ```

    *   or a list of files per platform:

    ```
     "css": [
            {"path": "<path>", "media": "mac"},
            {"path": "<path>", "media": "windows"},
        ],
    ```

> Filepaths can be relative or absolute. *  Relative paths are resolved relative to the JSON form description file. *  For security reasons, only filesystem paths are accepted for absolute paths. (*e.g.*, "/RESOURCES", "/DATA")








## Criação ou modificação de folhas de estilo

You can create style sheets using your preferred text editor and saving the file with a ".css" extension in the project's "/SOURCES" folder.

The 4D Tool Box provides a **Style Sheets** page as a shortcut option to create and edit one of three platform-specific named style sheets.

1.  Open the **Style Sheets** page by choosing the **Tool Box > Style Sheet** from the Design menu or click on the **Tool Box** icon in the Form Editor toolbar.

    ![](assets/en/FormEditor/stylesheets.png)

2.  Select the type of style sheet to create and click on the **Create** or **Edit** button: ![](assets/en/FormEditor/createButton.png)

3. The style sheet will open in your default text editor.  
