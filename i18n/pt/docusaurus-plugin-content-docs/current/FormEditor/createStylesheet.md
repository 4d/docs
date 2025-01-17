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

La caja de herramientas de 4D ofrece una página **Hojas de estilo** como opción de acceso directo para crear y editar una de las tres hojas de estilo con nombre específicas de la plataforma.

1. Abra la página **Estilos** eligiendo la **Caja de herramientas > Styles** del menú Diseño o haga clic en el icono **Caja de herramientas** de la barra de herramientas del editor de formularios.

![](../assets/en/FormEditor/stylesheets.png)

2. Selecione o tipo de folha de estilos a criar e clique no botão **Criar** ou **Editar**: ![](../assets/en/FormEditor/createButton.png)

3. A folha de estilo se abrirá em seu editor de texto predeterminado.

## Seletores de folhas de estilo

4D aceita três arquivos específicos de folhas de estilo:

| Folha de estilo                                              | Plataforma                                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------------------ |
| styleSheets.css                              | Folha de estilo global para macOS e Windows                              |
| styleSheets_mac.css     | Para definir os estilos de atributos específicos de macOS unicamente     |
| styleSheets_windows.css | Para definir os estilos de atributos específicos para Windows unicamente |

Estes arquivos se armazenam na pasta "/SOURCES" do projeto. También se puede acceder directamente a través del [CSS Preview](formEditor.md#css-preview) en la barra de herramientas del editor de formularios.

## Declarações de folhas de estilo

Apesar de adaptadas para satisfazer às necessidades específicas dos formulários 4D, as folhas de estilo dos bancos de dados projeto geralmente seguem a sintaxe e a gramática CSS2.

Cada régua de estilo em uma folha de estilo contém duas partes:

- un _selector_ - Un selector define dónde aplicar el estilo. 4D é compatível com os seletores "object type", "object name", "class", "all objects" e "attribute value".

- una _declaración_ - La declaración define el estilo real a aplicar. Podem ser agrupadas várias linhas de declaração para formar um bloco de declaração. Cada linha de um bloco de declaração CSS deve terminar com um ponto e linha, e o bloco inteiro deve ser rodeado por chaves.

## Declarações de folhas de estilo

### Tipo de objeto

O tipo de objeto define o tipo de objeto ao que vai aplicar o estilo, e corresponde ao seletor de elementos CSS.

Para aplicar o mesmo estilo para múltiplos tipos de objetos, especifique o tipo de objeto separado por um "," então em chaves, declare os estilos a aplicar:

> El tipo objeto corresponde a la propiedad JSON [tipo](FormObjects/properties_Object.md#type) de los objetos formulario.

En el siguiente ejemplo, todos los objetos del tipo _botón_ mostrarán el texto en la fuente Helvetica Neue, con un tamaño de 20 píxeles:

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

El nombre del objeto corresponde al **selector de ID** CSS y define un objeto específico al que hay que dar estilo, ya que el nombre del objeto es único dentro del formulario.

Determine o objeto com um caractere '#' antes do nome de objeto, depois entre chaves, declare os estilos a aplicar.

No exemplo abaio, o texto de objeto com o nome "okButton" será exibido em fonte Helvetica Neue, com um tamanho de 20 píxels:

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

### Class

Class corresponde al **selector class** CSS y define el estilo para todos los objetos formulario con el atributo `class`.

Para indicar que um estilo deve aplicar-se só aos objetos de um tipo determinado, especifique o tipo seguido de "." e o nome da classe, e depois, entre chaves, declare o estilo ou os estilos a aplicar.

En el siguiente ejemplo, el texto de todos los objetos con el nombre de la clase `okButtons` se mostrará en la fuente Helvetica Neue, con un tamaño de 20 píxeles, alineado al centro:

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

En la descripción del formulario 4D, se asocia un nombre de clase a un objeto mediante el atributo `class`. Este atributo contém um ou vários nomes de classe, separados por um espaço:

```
class: "okButtons important"       
```

### Todos os objetos

En correspondencia con el selector CSS **universal**, el carácter "\*" indica que el siguiente estilo se aplicará a todos los objetos del formulario.

Indique que um estilo deve aplicar-se a todos os objetos formulário com o carácter "\*" e, a seguir, entre chaves, declare os estilos que devem aplicar-se.

No seguinte exemplo, todos os objetos terão um fundo cinza:

```
* {
  fill: gray;
}
```

### Sintaxes compatíveis

Los estilos correspondientes a los **selectores de atributos** CSS se pueden aplicar a todos los objetos formulario con un atributo específico.

Especifique o tipo de atributo entre colchetes, depois entre chaves, declare os estilos a aplicar.

#### Sintaxes compatíveis

| Sintaxe                                                                                  | Descrição                                                                                                                        |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [attribute]                          | coincide con objetos con el `attribute`                                                                                          |
| [attribute="value"]                  | coincide con objetos cuyo valor del `attribute` contenga exactamente el "valor" especificado                                     |
| [attribute~="value"] | coincide con los objetos con el valor del `attribute` que contiene el "valor" entre una lista de palabras separadas por espacios |
| [attribute\|="value"]                | coincide con objetos con un `attribute` cuyo valor empieza por "valor"                                                           |

#### Exemplos

Todos los objetos con el atributo `borderStyle` tendrán líneas moradas:

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

As consultas de mídia são usadas para aplicar esquemas de cores as aplicações.

Una consulta de medios está formada por características y valores de medios (por ejemplo, `\<media feature>:\<value>` ).

Funcionalidades multimédia disponíveis:

- `prefers-color-scheme`

Expressões de funcionalidades multimédia disponíveis:

- **light**<br/>Para utilizar un esquema de luz
- **oscuro**<br/>Para utilizar un esquema oscuro

> Os esquemas de cores são suportados apenas no macOS.

##### Exemplo

Esse CSS define uma combinação de cores para o texto e o fundo do texto no esquema claro (padrão) e outra combinação quando o esquema escuro é selecionado:

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
- `choiceList`, `excludedList`, `labels`, `list`, `requiredList` (tipo de lista)

Los atributos del objeto formulario pueden declararse con su [nombre JSON](FormObjects/properties_Reference.md) como atributos CSS (sin incluir los tipos de objetos, métodos, eventos y listas).

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

> Los valores específicos 4D (_por ejemplo_, `hundido`) no se soportan cuando se utilizan nombres de atributos CSS.

#### Valores de atributos específicos

- Para los atributos `icon`, `picture` y `customBackgroundPicture` que soportan una ruta a una imagen, la sintaxis es:

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* rota absoluta */
icon: url("edit.png"); /* rota relativa ao arquivo de formulário */
```

- Para `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` y `verticalLineStroke`, se soportan tres sintaxis:

  - Nombre del color CSS: `fill: red;`
  - Valor hexadécimal: `fill: #FF0000;`
  - función `rgb()`: `fill:rgb(255,0,0)`

- Se uma string utilizar caracteres proibidos em CSS, pode rodear a string com aspas simples ou duplas. Por exemplo:
  - una referencia xliff: `tooltip: ":xliff:CommonMenuFile";`
  - un datasource con la expresión de campo: `dataSource: "[Table_1:1]ID:1";`

## Ordem de prioridade

Os projetos 4D priorizam as definições de estilo em conflito, primeiro pela definição do formulário e depois pelas folhas de estilo.

### JSON vs Folha de estilo

Se um atributo estiver definido na descrição do formulário JSON e em uma folha de estilo, 4D utilizará o valor do arquivo JSON.

Para anular este comportamiento, el valor del estilo debe ir seguido de una declaración `!important`.

**Exemplo 1:**

| Descripción do formulário JSON | Folha de estilo | 4D exibe   |
| ------------------------------ | --------------- | ---------- |
| `"text": "Button",`            | `text: Edit;`   | `"Button"` |

**Example 2:**

| Descripción do formulário JSON | Folha de estilo          | 4D exibe |
| ------------------------------ | ------------------------ | -------- |
| `"text": "Button",`            | `text: Edit !important;` | `"Edit"` |

### Folhas de estilo múltiplas

Durante a execução, 4D prioriza automaticamente as folhas de estilo na seguinte ordem:

1. El formulario 4D cargará primero el archivo CSS por defecto `/SOURCES/styleSheets.css`.
2. Luego cargará el archivo CSS para la plataforma actual `/SOURCES/styleSheets_mac.css` o `/SOURCES/styleSheets_windows.css`.
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

Veja a apresentação em vídeo [**CSS para Formulários 4D**](https://www.youtube.com/watch?v=3Hk4FUQENyQ).
