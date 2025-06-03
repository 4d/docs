---
id: propertiesText
title: Text
---

---

## Permitir a selecção de tipo de letra/cor

Quando essa propriedade está ativada, os comandos [OPEN FONT PICKER](../commands-legacy/open-font-picker.md) e [OPEN COLOR PICKER](../commands-legacy/open-color-picker.md) podem ser chamados para exibir as janelas do seletor de fontes e cores do sistema. Usando essas janelas, os usuários podem alterar a fonte ou a cor de um objeto formulário que tenha o foco diretamente ao clicar. Quando essa propriedade está desativada (padrão), os comandos do seletor de abertura não têm efeito.

#### Gramática JSON

| Propriedade          | Tipo de dados | Valores possíveis                       |
| -------------------- | ------------- | --------------------------------------- |
| allowFontColorPicker | boolean       | false (padrão), true |

#### Objectos suportados

[Entrada](input_overview.md)

---

## Negrito

Define o texto selecionado para aparecer mais escuro e mais pesado.

Você pode definir essa propriedade usando o comando [**OBJECT SET FONT STYLE**](../commands-legacy/object-set-font-style.md).

> Este é um texto normal.<br/>
> **Este é um texto em negrito.**

#### Gramática JSON

| Propriedade | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| fontWeight  | text          | "normal", "bold"  |

#### Objectos suportados

[Botão](button_overview.md) - [Caixa de verificação](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista de seleção](dropdownList_Overview.md) - [Caixa de Grupo](groupBox.md) - [Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Coluna de List Box](listbox_overview.md#list-box-columns) - [Rodapé da List Box](listbox_overview.md#list-box-footers) - [Cabeçalho de List Box](listbox_overview.md#list-box-headers) - [Botão de opção](radio_overview.md) - [Área de Texto](text.md)

---

## Itálico

Define o texto selecionado como ligeiramente inclinado para a direita.

Você também pode definir essa propriedade por meio do comando [**OBJECT SET FONT STYLE**](../commands-legacy/object-set-font-style.md).

> Este é um texto normal.<br/>
> *Este é o texto em itálico.*

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis  |
| --------- | ------------- | ------------------ |
| fontStyle | string        | "normal", "italic" |

#### Objectos suportados

[Botão](button_overview.md) - [Caixa de verificação](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista de seleção](dropdownList_Overview.md) - [Caixa de Grupo](groupBox.md) - [Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Coluna de List Box](listbox_overview.md#list-box-columns) - [Rodapé da List Box](listbox_overview.md#list-box-footers) - [Cabeçalho de List Box](listbox_overview.md#list-box-headers) - [Botão de opção](radio_overview.md) - [Área de Texto](text.md)

---

## Sublinhado

Define o texto para ter uma linha por baixo.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis     |
| -------------- | ------------- | --------------------- |
| textDecoration | string        | "normal", "underline" |

#### Objectos suportados

[Botão](button_overview.md) - [Caixa de verificação](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista de seleção](dropdownList_Overview.md) - [Caixa de Grupo](groupBox.md) - [Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Coluna de List Box](listbox_overview.md#list-box-columns) - [Rodapé da List Box](listbox_overview.md#list-box-footers) - [Cabeçalho de List Box](listbox_overview.md#list-box-headers) - [Botão de opção](radio_overview.md) - [Área de Texto](text.md)

---

## Fonte

Esta propiedad permite indicar el **tema de la fuente** o la **familia de fuente** utilizada en el objeto.

> Las propiedades **Tema de la fuente** y de la **familia de la fuente** son mutuamente excluyentes. Um tema de tipo de letra controla os atributos do tipo de letra, incluindo o tamanho. Uma família de tipos de letra permite-lhe definir o nome, o tamanho e a cor do tipo de letra.

### Tema Fonte

A propriedade de tema do tipo de letra designa um nome de estilo automático. Os estilos automáticos determinam a família, o tamanho e a cor da fonte a serem usados no objeto de forma dinâmica, conforme os parâmetros do sistema. Esses parâmetros dependem de:

- a plataforma,
- a língua do sistema,
- e o tipo de objeto de formulário.

Com o tema de fonte, você tem a garantia de que os títulos serão sempre exibidos conforme os padrões atuais de interface do sistema. No entanto, o seu tamanho pode variar de uma máquina para outra.

Estão disponíveis três temas de tipos de letra:

- **normal**: estilo automático, aplicado por defecto a todo nuevo objeto creado en el editor de formularios.
- Los temas de fuentes **principales** y **suplementarios** solo son soportados por las [áreas de texto](text.md) y las [áreas de entrada](input_overview.md). Estes temas destinam-se principalmente a desenho de caixas de diálogo. Eles se referem aos estilos de fonte usados, respectivamente, para o texto principal e para as informações adicionais em suas janelas de interface. Aqui estão as caixas de diálogo típicas (macOS e Windows) que utilizam estes temas de tipos de letra:

![](../assets/en/FormObjects/FontThemes.png)

> Os temas de tipo de letra gerem o tipo de letra, bem como o seu tamanho e cor. Entretanto, pode aplicar propriedades de estilo personalizadas (Negrito, Itálico ou Subscrito) sem alterar seu funcionamento.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis              |
| --------- | ------------- | ------------------------------ |
| fontTheme | string        | "normal", "main", "additional" |

#### Objectos suportados

[Botão](button_overview.md) - [Caixa de verificação](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista de seleção](dropdownList_Overview.md) - [Caixa de Grupo](groupBox.md) - [Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Coluna de List Box](listbox_overview.md#list-box-columns) - [Rodapé da List Box](listbox_overview.md#list-box-footers) - [Cabeçalho de List Box](listbox_overview.md#list-box-headers) - [Botão de opção](radio_overview.md) - [Área de Texto](text.md)

### Família de letras

Existem dois tipos de nomes de famílias de letras:

- *family-name:* El nombre de una familia de fuentes, como "times", "courier", "arial", etc.
- *generic-family:* El nombre de una familia genérica, como "serif", "sans-serif", "cursive", "fantasy", "monospace".

Você pode definir isso usando o comando [`OBJECT SET FONT`](../commands-legacy/object-set-font.md).

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis             |
| ---------- | ------------- | ----------------------------- |
| fontFamily | string        | Nome da família de fontes CSS |

> 4D recomienda utilizar sólo fuentes [seguras para la web](https://www.w3schools.com/cssref/css_websafe_fonts.asp).

#### Objectos suportados

[Botão](button_overview.md) - [Caixa de verificação](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista de seleção](dropdownList_Overview.md) - [Caixa de Grupo](groupBox.md) - [Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Coluna de List Box](listbox_overview.md#list-box-columns) - [Rodapé da List Box](listbox_overview.md#list-box-footers) - [Cabeçalho de List Box](listbox_overview.md#list-box-headers) - [Botão de opção](radio_overview.md) - [Área de Texto](text.md)

---

## Tamanho fonte

Permite definir o tamanho da fonte do objeto em pontos.

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis                                                           |
| -------- | ------------- | --------------------------------------------------------------------------- |
| fontSize | integer       | Tamanho da letra em pontos. Valor mínimo: 0 |

#### Objectos suportados

[Botão](button_overview.md) - [Caixa de verificação](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista de seleção](dropdownList_Overview.md) - [Caixa de Grupo](groupBox.md) - [Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Coluna de List Box](listbox_overview.md#list-box-columns) - [Rodapé da List Box](listbox_overview.md#list-box-footers) - [Cabeçalho de List Box](listbox_overview.md#list-box-headers) - [Botão de opção](radio_overview.md) - [Área de Texto](text.md)

---

## Cor fonte

Designa a cor do tipo de letra.

> Esta propriedade também define a cor da borda do objeto (se houver) quando o estilo "plaino" ou "pontilhado" é usado.

A cor pode ser especificada por:

- um nome de cor - como "red"
- um valor HEX - como "#ff0000"
- um valor RGB - como "rgb(255,0,0)"

Você também pode definir essa propriedade usando o comando [**OBJECT SET RGB COLORS**](../commands-legacy/object-set-rgb-colors.md).

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                        |
| ------ | ------------- | ---------------------------------------- |
| stroke | string        | um valor css, "transparent", "automatic" |

#### Objectos suportados

[Botão](button_overview.md) - [Caixa de verificação](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista de seleção](dropdownList_Overview.md) - [Caixa de Grupo](groupBox.md) - [Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Coluna de List Box](listbox_overview.md#list-box-columns) - [Rodapé da List Box](listbox_overview.md#list-box-footers) - [Cabeçalho de List Box](listbox_overview.md#list-box-headers) - [Indicadores de progresso](progressIndicator.md) - [Regra](ruler.md) - [Botão de opção](radio_overview.md) - [Área de Texto](text.md)

---

## Expressão cor fonte

`List box do tipo coleção/seleção de entidade`

Utilizado para aplicar uma cor de letra personalizada a cada linha do list box. É necessário utilizar valores de cor RGB. Para más información al respecto, consulte la descripción del comando [OBJECT SET RGB COLORS](../commands-legacy/object-set-rgb-colors.md) en el manual Lenguaje de 4D.

Deve introduzir uma expressão ou uma variável (não podem ser utilizadas variáveis do tipo array). A expressão ou variável será avaliada para cada linha exibida. Você pode usar as constantes descritas no comando [`OBJECT SET RGB COLORS`](../commands-legacy/object-set-rgb-colors.md).

También puede definir esta propiedad utilizando el comando `LISTBOX SET PROPERTY` con la constante `lk font color expression`.

> Esta propiedad también puede definirse mediante una [Expresión Meta Info](properties_Text.md#meta-info-expression).

El siguiente ejemplo utiliza un nombre de variable: introduzca *CompanyColor* para la **Expresión color fuente** y, en el método formulario, escriba el siguiente código:

```4d
CompanyColor:=Choose([Companies]ID;Background color;Light shadow color; Foreground color;Dark shadow color)
```

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis   |
| --------------- | ------------- | ------------------- |
| rowStrokeSource | string        | Expressão cor fonte |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Expressão estilo

`List box do tipo coleção/seleção de entidade`

Utilizado para aplicar um estilo de carácter personalizado a cada linha do list box ou a cada célula da coluna.

Deve introduzir uma expressão ou uma variável (não podem ser utilizadas variáveis do tipo array). A expressão ou variável será avaliada para cada linha apresentada (se aplicada à list box) ou para cada célula apresentada (se aplicada a uma coluna). Você pode usar as constantes listadas no comando [`LISTBOX SET ROW FONT STYLE`](../commands-legacy/listbox-set-row-font-style.md).

Exemplo:

```4d
Choose([Companies]ID;Bold;Plain;Italic;Underline)
```

También puede definir esta propiedad utilizando el comando `LISTBOX SET PROPERTY` con la constante `lk font style expression`.

> Esta propiedad también puede definirse mediante una [Expresión Meta Info](properties_Text.md#meta-info-expression).

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                                                     |
| -------------- | ------------- | --------------------------------------------------------------------- |
| rowStyleSource | string        | Expressão de estilo a avaliar para cada linha/célula. |

#### Objectos suportados

[List Box](listbox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Alihamento horizontal

Localização horizontal do texto na área que o contém.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis                                 |
| --------- | ------------- | ------------------------------------------------- |
| textAlign | string        | "right", "center", "left", "automatic", "justify" |

:::note

- "automatic" no es compatible con [casillas de selección](checkbox_overview.md) y [botones radio](radio_overview.md)
- "justify" sólo es compatible con las [entradas ](input_overview.md) y [áreas de texto](text.md)

:::

#### Objectos suportados

[Botão](button_overview.md) - [Caixa de seleção](checkbox_overview.md) (todos os estilos, exceto Regular e Flat) - [Combo Box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Coluna List Box](listbox_overview.md#list-box-columns) - [Cabeçalho List Box](listbox_overview.md#list-box-headers) - [Rodapé List Box](listbox_overview.md#list-box-footers) - [Botão de opção](radio_overview.md) (todos os estilos, exceto Regular e Flat) - [Área de texto](text.md)

---

## Cor linha vertical

Localização vertical do texto na área que o contém.

La opción **Predeterminado** (`automático` valor JSON) define la alineación según el tipo de datos que se encuentran en cada columna:

- `abajo` para todos los datos (excepto las imágenes) y
- `arriba` para los datos del tipo imagen.

Esta propiedad también puede ser manejada por los comandos [OBJECT Get vertical alignment](../commands-legacy/object-get-vertical-alignment.md) y [OBJECT SET VERTICAL ALIGNMENT](../commands-legacy/object-set-vertical-alignment.md).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                      |
| ------------- | ------------- | -------------------------------------- |
| verticalAlign | string        | "automatic", "top", "middle", "bottom" |

#### Objectos suportados

[List Box](listbox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Pie de List Box](listbox_overview.md#list-box-footers) - [Encabezado List Box](listbox_overview.md#list-box-headers)

---

## Meta Info expression

`List box do tipo Collection ou entity selection`

Especifica uma expressão ou uma variável que será avaliada para cada linha exibida. Permite definir um conjunto completo de atributos de texto das linhas. Debe pasar una **variable objeto** o una **expresión que devuelva un objeto**. As propriedades abaixo são compatíveis:

| Nome da propriedade | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke              | string  | Cor de fundo. Qualquer cor CSS (por exemplo, "#FF00FF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                                                                                                                                                  |
| fill                | string  | Cor de fundo. Qualquer cor CSS (por exemplo, "#F00FFF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                                                                                                                                                  |
| fontStyle           | string  | "normal","italic"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| fontWeight          | string  | "normal","bold"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| textDecoration      | string  | "normal","underline"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| unselectable        | boolean | Designa la línea correspondiente como no seleccionable (\* es decir, \*, no es posible el resaltado). As áreas inseríveis deixam de o ser se esta opção estiver ativada, a menos que a opção "Editar com um clique" também esteja ativada. Os controlos como as caixas de verificação e as listas permanecem funcionais. Esta definição é ignorada se o modo de seleção do list box é "Nenhum". Valor padrão: False. |
| disabled            | boolean | Desactiva a linha correspondente. As áreas acessíveis deixam de ser acessíveis se esta opção estiver activada. Texto e controles (caixas de seleção, listas, etc.) parecem escurecidos ou acinzentados. Valor padrão: False.                                                                                                                                                                                         |

A propriedade especial "célula" permite-lhe aplicar um conjunto de propriedades a uma única coluna:

| Nome da propriedade |              |                | Tipo   | Descrição                                                                                                                                                                                                                                                                                                                  |
| ------------------- | ------------ | -------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cell                |              |                | object | Propriedades a serem aplicadas a coluna(s) única(s)                                                                                                                                                                                                                                  |
|                     | *columnName* |                | object | *columnName* es el nombre del objeto de la columna del list box                                                                                                                                                                                                                                                            |
|                     |              | *propertyName* | string | as propriedades "stroke", "fill", "fontStyle", "fontWeight" ou "textDecoration" (ver acima). **Nota**: las propiedades "no seleccionable" y "desactivada" sólo pueden definirse a nivel de la línea. São ignorados se forem passados no objeto "célula" |

> As configurações de estilo feitas com esta propriedade são ignoradas se outras configurações de estilo já estão definidas através de expressões (\*i.e., [Expressão de estilo](#style-expression), [Expressão de cor de Fonte](#font-color-expression), [Expressão de cor de fundo](./properties_BackgroundAndBorder.md#background-color-expression)).

**Exemplos**

En un método proyecto *Color*, escriba el siguiente código:

```4d
//Método Color
//Define a cor da fonte para determinadas linhas e a cor de fundo para as colunas Col2 e Col3
Form.meta:=New object
If(This.ID>5) //ID é um atributo de objetos/entidades
  Form.meta.stroke:="purple"
  Form.meta.cell:=New object("Col2";New object("fill";"black");\
  	"Col3";New object("fill";"red"))
Else
  Form.meta.stroke:="orange"
End if
```

**Buenas prácticas:** por razones de optimización, normalmente se recomienda crear el objeto `meta.cell` una vez en el método del formulario:

```4d
  //método formulário
 Case of
    :(Form event code=On Load)
       Form.colStyle:=New object("Col2";New object("fill";"black");\
       	"Col3";New object("fill";"red"))  
 // você também pode definir outros conjuntos de estilos
       Form.colStyle2:=New object("Col2";New object("fill";"green");\
       	"Col3";New object("fontWeight";"bold"))  
 End case
```

Entonces, el método *Color* contendría:

```4d
  //Método de cor
 ...
 If(This.ID>5)
    Form.meta.stroke:="purple"
    Form.meta.cell:=Form.colStyle //reutilize o mesmo objeto para melhorar o desempenho
 Else
 	Form.meta.stroke:="orange"
	Form.meta.cell:=Form.colStyle2
 End if
 ...
```

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                     |
| ---------- | ------------- | --------------------------------------------------------------------- |
| metaSource | string        | Expressão do objeto a avaliar para cada linha/célula. |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Multistyle

Esta propriedade ativa a possibilidade de usar estilos específicos na área selecionada. Cuando esta opción está marcada, 4D interpreta todas las etiquetas `<SPAN> HTML` presentes en el área.

Por defeito, esta opção não está activada.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis |
| ---------- | ------------- | ----------------- |
| styledText | boolean       | true, false       |

#### Objectos suportados

[Área de entrada](input_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Orientação

Modifica a orientação (rotação) de uma área texto. Áreas texto pode ser rodadas por incrementos de 90°. Cada valor de orientação é aplicado enquanto mantém o mesmo ponto inferior esquerdo para o objeto:

| Valor de orientação             | Resultados                                     |
| ------------------------------- | ---------------------------------------------- |
| 0 (o padrão) | ![](../assets/en/FormObjects/orientation1.png) |
| 90                              | ![](../assets/en/FormObjects/orientation2.png) |
| 180                             | ![](../assets/en/FormObjects/orientation3.png) |
| 270                             | ![](../assets/en/FormObjects/orientation4.png) |

Además de [áreas de texto estáticas](text.md), los objetos de texto de las [áreas de entrada](input_overview.md) pueden girar cuando no son[editables](properties_Entry.md#enterable). Quando uma propriedade rotação for aplicada a um objeto input, a propriedade digitável é removida (se houver). Esse objeto é então excluído da ordem de entrada.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis |
| --------- | ------------- | ----------------- |
| textAngle | number        | 0, 90, 180, 270   |

#### Objectos suportados

[Entrada](input_overview.md) (no editable) - [Área de texto](text.md)

---

## Array cores de Fonte

`List boxes de tipo array`

Permite estabelecer uma cor de fonte personalizada para cada linha do list box ou cada célula da coluna.

O nome do array LongInt deve ser usado. Cada elemento deste array corresponde a uma linha do list box (se aplicada o list box) ou a uma célula da coluna (se aplicada a uma coluna), pelo que o array deve ter o mesmo tamanho que o array associado à coluna. Você pode usar as constantes descritas no comando [`OBJECT SET RGB COLORS`](../commands-legacy/object-set-rgb-colors.md). Você pode usar as constantes do tema <a href="https://doc.4d.com/4Dv20/4D/20.1/SET-RGB-COLORS.302-6481080.en.html">SET RGB COLORS</a>.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis          |
| --------------- | ------------- | -------------------------- |
| rowStrokeSource | string        | O nome de um array longint |

#### Objectos suportados

[List Box](listbox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Array estilo linha

`List boxes de tipo array`

Permite estabelecer um estilo de fonte personalizado para cada linha do list box ou cada célula da coluna.

O nome do array LongInt deve ser usado. Cada elemento deste array corresponde a uma linha do list box (se aplicada o list box) ou a uma célula da coluna (se aplicada a uma coluna), pelo que o array deve ter o mesmo tamanho que o array associado à coluna. Para preencher o array (usando um método), use as constantes listadas no comando [`LISTBOX SET SET ROW STYLE`](../commands-legacy/listbox-set-row-font-style.md). Pode acionar constantes juntas para combinar estilos. Se quiser que a célula herde o estilo definido no nível mais alto, passe o valor -255 para o elemento array correspondente.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                           |
| -------------- | ------------- | ------------------------------------------- |
| rowStyleSource | string        | O nome de um array longint. |

#### Objectos suportados

[List Box](listbox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Armazenar com etiquetas de estilo predefinidas

Esta propiedad sólo está disponible para un área de entrada [Multi-estilo](#multi-estilo).
Quando essa propriedade for ativada, a área armazena as tags de estilo com o texto, mesmo se nenhuma modificação for feita. Nesse caso, as tags correspondem ao estilo padrão. Quando essa propriedade for desativada, só as tags de estilo modificadas são armazenadas.

Por exemplo, aqui está um texto que inclui uma modificação de estilo:

![](../assets/en/FormObjects/tagStyle1.png)

Quando a propriedade for desativada, a área só armazena a modificação. Os conteúdos armazenados são entretanto:

```
Que <SPAN STYLE="font-size:13.5pt">belo</SPAN> dia!
```

Quando a propriedade for ativada, a área armazena todas as informações de formatação. A primeira tag genérica descreve o estilo padrão quando cada variação no sujeito for um par de tags aninhadas. Os conteúdos armazenados na área são portanto:

```
<SPAN STYLE="font-family:'Arial';font-size:9pt;text-align:left;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FFFFFF">Que <SPAN STYLE="font-size:13.5pt">belo</SPAN> dia!</SPAN>
```

#### Gramática JSON

| Nome              | Tipo de dados | Valores possíveis                                        |
| ----------------- | ------------- | -------------------------------------------------------- |
| storeDefaultStyle | boolean       | true, false (padrão). |

#### Objectos suportados

[Entrada](input_overview.md)
