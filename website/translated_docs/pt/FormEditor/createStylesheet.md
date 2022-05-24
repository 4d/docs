---
id: stylesheets
title: Folhas de estilo
---


Uma folha de estilo agrupa junto uma combinação de atributos para objetos formulário - de atributos de texto a quase qualquer atributo de objeto disponível.

Além de harmonizar uma interface de aplicação, folhas de estilo oferecem três vantagens principais:

*   Poupa tempo durante o desenvolvimento: cada objeto tem agrupamentos de configurações específicos dentro de uma única operação.
*   Manutenção facilitada: folhas de estilo modificam a aparência de qualquer objeto que as usa, então mudar o tamanho de fonte em uma folha de estilo vai mudar o estilo de fonte para todos os objetos que usarem essa mesma folha de estilo.
*   Controle de desenvolvimento multiplataforma: as folhas de estilo podem ser aplicadas para plataformas macOS e Windows, apenas macOS ou só Windows. Quando uma folha de estilo for aplicada, 4D automaticamente usa a folha de estilo apropriada.



## Criação ou modificação de folhas de estilo

Pode criar folhas de estilo utilizando seu editor de texto preferido e salvando o arquivo com extensão ".css" na pasta "/SOURCES" do projeto.

A caixa de ferramentas de 4D oferece uma página **Hojas de estilo** como opção de acesso direto para criar e editar uma das três folhas de estilo com nomes específicas da plataforma.

1.  Abra a página **Estilos** escolhendo a **Caixa de ferramentas > Styles** do menu Design ou clique no ícone **Caixa de ferramentas** da barra de ferramentas do editor de formulários.

    ![](assets/en/FormEditor/stylesheets.png)

2.  Selecione o tipo de folha de estilo que deseja criar E cliquer no botão **Criar** ou **Editar**: ![](assets/en/FormEditor/createButton.png)

3. A folha de estilo se abrirá em seu editor de texto predeterminado.



## Arquivos folhas de estilo

4D aceita três arquivos específicos de folhas de estilo:

| Folha de Estilo         | Plataforma                                                               |
| ----------------------- | ------------------------------------------------------------------------ |
| styleSheets.css         | Folha de estilo global para macOS e Windows                              |
| styleSheets_mac.css     | Para definir os estilos de atributos específicos de macOS unicamente     |
| styleSheets_windows.css | Para definir os estilos de atributos específicos para Windows unicamente |

Estes arquivos se armazenam na pasta "/SOURCES" do projeto. They can also be accessed directly via the [CSS Preview](formEditor.md#css-preview) in the Form editor toobar.


## Arquitetura das folhas de estilo

While adapted to meet the specific needs of 4D forms, style sheets for application projects generally follow CSS2 syntax and grammar.

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

Para indicar que um estilo deve aplicar-se só aos objetos de um tipo determinado, especifique o tipo seguido de "." e o nome da classe, e depois, entre chaves, declare o estilo ou os estilos a aplicar.

```
text.center {
  text-align: center;
  stroke: red;
}
```

Na descrição do formulário 4D, se associa um nome de classe a um objeto mediante o atributo `class`. Este atributo contém um ou vários nomes de classe, separados por um espaço:

```
class: "okButtons important"             
```


### Todos os objetos

Em correspondência com o seletor CSS **universal**, o caractere "*" indica que o seguinte estilo se aplicará a todos os objetos do formulário.

Indique que um estilo deve aplicar-se a todos os objetos formulário com o carácter "*" e, a seguir, entre chaves, declare os estilos que devem aplicar-se.

No seguinte exemplo, todos os objetos terão um fundo cinza:

```
* {
  fill: gray;
}
```


### Atributos específicos

Os estilos correspondentes aos **seletores de atributos** CSS se pedem aplicar a todos os objetos formulário com um atributo específico.

Especifique o tipo de atributo entre colchetes, depois entre chaves, declare os estilos a aplicar.

#### Sintaxes compatíveis

| Sintaxe                   | Descrição                                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [attribute]               | coincide com objetos com o `attribute`                                                                                     |
| [attribute="value"]       | coincide com objetos cujo valor do `attribute` conteha exatamente o "valor" especificado                                   |
| [attribute~="value"]      | coincide com os objetos com o valor do `attribute` que contém o  "valor" entre uma lista de palavras separadas por espaços |
| [attribute&#124;="value"] | coincide com objetos com um `attribute` cujo valor começa por "valor"                                                      |

#### Exemplos

Todos os objetos com o atributo `borderStyle` terão línhas roxas:

```
[borderStyle]
{
     stroke: purple;
}
```

Todos os objetos de tipo texto com um atributo texto cujo valor seja "Hello" terão letras azuis:


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

Todos os objetos do tipo texto com um atributo de texto cujo valor comece com "Hello" terão as letras amarelas:

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

- Se uma string utilizar caracteres proibidos em CSS, pode rodear a string com aspas simples ou duplas. Por exemplo:
    - uma referencia xliff: `tooltip: ":xliff:CommonMenuFile";`
    - um datasource com a expressão de campo: `dataSource: "[Table_1:1]ID:1";`


## Ordem de prioridade

Os proetos 4D priorizam as definições de estilo em conflito, primeiro pela definição do formulário e depois pelas folhas de estilo.


### JSON vs Folha de estilo

Se um atributo estiver definido na descrição do formulário JSON e em uma folha de estilo, 4D utilizará o valor do arquivo JSON.

Para anular este comportamento, o valor do estilo deve ir seguido de uma declaração `!important`.

**Exemplo 1:**

| Descripción do formulário JSON | Folha de Estilo | 4D exibe   |
| ------------------------------ | --------------- | ---------- |
| `"text": "Button",`            | `text: Edit;`   | `"Button"` |

**Exemplo 2:**

| Descripción do formulário JSON | Folha de Estilo          | 4D exibe |
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


## See also

See the [**CSS for 4D Forms**](https://www.youtube.com/watch?v=3Hk4FUQENyQ) video presentation.