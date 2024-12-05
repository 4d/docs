---
id: listboxOverview
title: List Box
---

List boxes são objetos ativos complexos que permitem exibir e ingressar dados como colunas sincronizadas. Podem ser conectadas aos conteúdos de banco de dados como seleções de entidade e seleções de registro, ou para conteúdos de linguagem como coleções e arrays. Incluem características avançadas relativas à entrada de dados, classificação de colunas, gestão de eventos, aspecto personalizado, movimentação de colunas, etc.

![](../assets/en/FormObjects/listbox.png)

Uma list box contém uma ou mais colunas cujo conteúdos são automaticamente sincronizados. O número de colunas é teoricamente ilimitado (depende dos recursos da máquina).

## Visão Geral

### Funcionalidades de usuário básicas

Durante a execução, list boxes permitem exibir e ingressar dados como listas. Para tornar uma célula editável ([se a entrada for permitida para a coluna](#managing-entry)), basta clicar duas vezes no valor que ela contém:

![](../assets/en/FormObjects/listbox_edit.png)

Usuários podem ingressar e exibir o texto em várias linhas dentro de uma célula list box. Para adicionar uma quebra de linha pressione **Ctrl+Retorno de carro** em Windows ou **Opção+Retorno de Carro** em macOS.

Booleanos e imagens podem ser exibidos em células, assim como datas, horas ou números. É possível classificar os valores da coluna clicando em um cabeçalho ([classificação padrão](#managing-sorts)). Todas as colunas são sincronizadas automaticamente.

Também é possível redimensionar cada coluna, e o usuário pode modificar a ordem das [colunas](properties_ListBox.md#locked-columns-and-static-columns) e das [linhas](properties_Action.md#movable-rows) movendo-as com o mouse, se essa ação for autorizada. Observe que os list boxes podem ser usados no [modo hierárquico](#hierarchical-list-boxes).

O usuário pode selecionar um ou mais linhas usando os atalhos padrão: **Shift+clique** para uma seleção adjacente **Ctrl+clique** (Windows) ou **Comando+clique** (macOS) para uma seleção não adjacente.

### Partes de list box

Uma list box é composta de quatro partes diferentes:

- o objeto list box em sua globalidade
- colunas,
- cabeçalhos de coluna, e
- rodapés de colunas.

![](../assets/en/FormObjects/listbox_parts.png)

Cada parte tem seu próprio nome assim como propriedades específicas. Por exemplo, o número de colunas ou as cores alternativas de cada linha é estabelecida nas propriedades de objeto list box, a largura de cada coluna é estabelecida nas propriedades de colunas e a fonte do cabeçalho é estabelecida nas propriedades de cabeçalho.

É possível adicionar um método objeto para o objeto list box ou para cada coluna da list box. Métodos objetos são chamados na ordem abaixo:

1. Método objeto de cada coluna
2. Método objeto da list box

O método objeto de coluna obtém os eventos que ocorrem em seu [cabeçalho](#list-box-headers) e [rodapé](#list-box-footers).

### Tipos de List box

Há vários tipos de list boxes com seus próprios comportamentos e propriedades específicos. O tipo de list box depende de sua propriedade [Data Source](properties_Object.md#data-source):

- **Arrays**: cada coluna é vinculada a um array 4D. Os list boxes baseados em arrays podem ser exibidas como [list boxes hierárquicos](listbox_overview.md#hierarchical-list-boxes).
- **Seleção** (**Seleção atual** ou **Seleção temporária**): cada coluna é vinculada a uma expressão (por exemplo, um campo) avaliada para cada registro da seleção.
- **Coleção ou seleção de entidade**: cada coluna é conectada a uma expressão avaliada para todo elemento da coleção ou toda entidade da seleção de entidade.

> It is not possible to combine different list box types in the same list box object. A fonte de dados é estabelecida quando a list box é criada. Não é mais possível modificar por programação.

### Gerenciando list boxes

Pode configurar completamente um objeto list box através de suas propriedades e também pode gerenciar dinamicamente por programação.

A linguagem 4D inclui um tema "List Box" dedicado para comandos de list box, mas também podem ser usados comandos de vários outros temas, como comandos "Propriedades dos objetos" ou comandos `EDIT ITEM`, `Displayed line number`. Consulte a página [List Box Commands Summary] (https://doc.4d.com/4Dv17R6/4D/17-R6/List-Box-Commands-Summary.300-4311159.en.html) da *Referência da linguagem 4D* para obter mais informações.

## Objetos tipo list box

### List box de tipo array

Em um list box de tipo array, cada coluna deve estar associada a um array unidimensional 4D; podem ser utilizados todos os tipos de array, com exceção dos arrays de ponteiros. O número de linhas é baseado no número de elementos array.

Como padrão, 4D atribui o nome "ColumnX" para cada coluna. Você pode alterá-lo, assim como outras propriedades de coluna, nas [propriedades das colunas](listbox_overview.md#column-specific-properties). O formato de exibição de cada coluna também pode ser definido com o comando `OBJECT SET FORMAT`.

> Os list boxes do tipo array podem ser exibidos em [modo hierárquico](listbox_overview.md#hierarchical-list-boxes), com mecanismos específicos.

Com list box de tipo array, o valor ingressado ou exibido são gerenciados usando a linguagem 4D. Você também pode associar uma [lista de opções](properties_DataSource.md#choice-list) a uma coluna para controlar a entrada de dados.
Os valores das colunas são gerenciados através de comandos List box de alto nível (como `LISTBOX INSERT ROWS` ou `LISTBOX DELETE ROWS`), bem como por comandos de manipulação de arrays. Por exemplo, para iniciar os conteúdos da coluna, pode usar a instrução abaixo:

```4d
ARRAY TEXT(varCol;size)
```

Também pode usar uma lista:

```4d
LIST TO ARRAY("ListName";varCol)
```

> **Aviso**: quando uma list box contiver vários tamanhos diferentes de coluna, só o número de itens do menor array (coluna) será exibido. Tem que verificar que cada array tenha o mesmo número de elementos que os outros. Além disso, se uma coluna list box for vazia (isso ocorre quando o array associado não for corretamente declarado ou dimensionado usando a linguagem), a list box não exibe nada.

### List box de tipo seleção

Nesse tipo de list box, cada coluna pode ser associada com um campo (por exemplo, `[Employees]LastName)` ou uma expressão. A expressão pode ser baseada em um ou mais campos (por exemplo, `[Employees]FirstName+" "[Employees]LastName`) ou pode ser simplesmente uma fórmula (por exemplo, `String(Milliseconds)`). A expressão também pode ser um método de proejeto, uma variável ou um item array. Você pode usar os comandos `LISTBOX SET COLUMN FORMULA` e `LISTBOX INSERT COLUMN FORMULA` para modificar colunas programaticamente.

O conteúdo de cada linha é então avaliado de acordo com uma seleção de registros: a **seleção atual** de uma tabela ou uma **seleção nomeada**.

No caso de uma list box baseada na seleção atual de uma tablea, qualquer modificação feita do lado da database é refletida automaticamente na list box e vice versa. A seleção atual é portanto sempre a mesma em ambos os lugares.

### List boxes de coleção ou de seleção de entidade

Nesse tipo de list box, cada coluna deve ser associada a uma expressão. Os conteúdos de cada linha são então avaliados por elemento de coleção ou por entidade da seleção de entidade.

Cada elemento da coleção ou cada entidade está disponível como um objeto que pode ser acessado por meio da palavra-chave [This](../Concepts/classes.md#this). Uma expressão de coluna pode ser um caminho de propriedade, um método projeto, uma variável ou qualquer fórmula, acessando cada entidade ou objeto de elemento de coleção por `This`, por exemplo, `This.<propertyPath>` (ou `This.value` no caso de uma coleção de valores escalares). Você pode usar os comandos `LISTBOX SET COLUMN FORMULA` e `LISTBOX INSERT COLUMN FORMULA` para modificar colunas programaticamente.

Quando a fonte de dados for uma seleção de entidades, qualquer modificação feita no lado da list box são salvas automaticamente na database. Do outro lado, modificações feitas na database são visíveis na list box depois que as entidades tocadas foram recarregadas.

:::note

When entities are deleted, their references remain in the entity selection with an *undefined* value, thus displaying blank rows in the list box. In this case, you can call the [`.clean()`](API/EntitySelectionClass.md#clean) function to get a new entity selection but without the deleted entity references.

:::

Quando a fonte de dados for uma coleção, qualquer modificação feita nos valores da list box são refletidas na coleção. Por outro lado, se forem feitas modificações na coleção usando, por exemplo, as várias funções da [classe Collection] (.../API/CollectionClass.md), você precisará notificar explicitamente o 4D reatribuindo a variável da coleção a ela mesma, para que o conteúdo do list box seja atualizado. Por exemplo:

```4d
myCol:=myCol.push("new value") //exibir novo valor na list box
```

### Propriedades compatíveis

Propriedades compatíveis dependem do tipo de list box.

| Propriedade                                                                                                                                                                                               | List box array | List box seleção | List box coleção ou entity selection |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------- | ------------------------------------ |
| [Cor de fundo alternativa](properties_BackgroundAndBorder.md#alternate-background-color)                                                                                                                  | X              | X                | X                                    |
| [Background Color](properties_BackgroundAndBorder.md#background-color--fill-color)                                                                                                                        | X              | X                | X                                    |
| [Negrito](properties_Text.md#bold)                                                                                                                                                                        | X              | X                | X                                    |
| [Expressão de cor de fundo](properties_BackgroundAndBorder.md#background-color-expression)                                                                                                                |                | X                | X                                    |
| [Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style)                                                                                                                           | X              | X                | X                                    |
| [Inferior](properties_CoordinatesAndSizing.md#bottom)                                                                                                                                                     | X              | X                | X                                    |
| [Classe](properties_Object.md#css-class)                                                                                                                                                                  | X              | X                | X                                    |
| [Seleção de coleção ou entidade] (properties_Object.md#collection-or-entity-selection)        |                | X                | X                                    |
| [Redimensionamento automático de coluna] (properties_ResizingOptions.md#column-auto-resizing) | X              | X                | X                                    |
| [Item atual](properties_DataSource.md#current-item)                                                                                                                                                       |                |                  | X                                    |
| [Posição atual do item](properties_DataSource.md#current-item-position)                                                                                                                                   |                |                  | X                                    |
| [Fonte de dados](properties_Object.md#data-source)                                                                                                                                                        | X              | X                | X                                    |
| [Nome do formulário de detalhes] (properties_ListBox.md#detail-form-name)                     |                | X                |                                      |
| [Exibir cabeçalhos](properties_Headers.md#display-headers)                                                                                                                                                | X              | X                | X                                    |
| [Exibir rodapés] (properties_Footers.md#display-footers)                                      | X              | X                | X                                    |
| [Clique duas vezes na linha](properties_ListBox.md#double-click-on-row)                                                                                                                                   |                | X                |                                      |
| [Draggable](properties_Action.md#droppable)                                                                                                                                                               | X              | X                | X                                    |
| [Droppable](properties_Action.md#droppable)                                                                                                                                                               | X              | X                | X                                    |
| [Focusable](properties_Entry.md#focusable)                                                                                                                                                                | X              | X                | X                                    |
| [Fonte](properties_Text.md#font)                                                                                                                                                                          | X              | X                | X                                    |
| [Cor da fonte](properties_Text.md#font-color)                                                                                                                                                             | X              | X                | X                                    |
| [Expressão de Cor da Fonte](properties_Text.md#font-color-expression)                                                                                                                                     |                | X                | X                                    |
| [Tamanho fonte](properties_Text.md#font-size)                                                                                                                                                             | X              | X                | X                                    |
| [Altura (list box)](properties_CoordinatesAndSizing.md#height)                                                                                                                         | X              | X                | X                                    |
| [Altura (cabeçalhos)](properties_Headers.md#height)                                                                                                                                    | X              | X                | X                                    |
| [Altura (rodapés)](properties_Footers.md#height)                                                                                                                                       | X              | X                | X                                    |
| [Ocultar linhas em branco extras](properties_BackgroundAndBorder.md#hide-extra-blank-rows)                                                                                                                | X              | X                | X                                    |
| [Ocultar retângulo de foco](properties_Appearance.md#hide-focus-rectangle)                                                                                                                                | X              | X                | X                                    |
| [Ocultar destaque de seleção](properties_Appearance.md#hide-selection-highlight)                                                                                                                          | X              | X                | X                                    |
| [Hierarchical List Box](properties_Object.md#array-list-box)                                                                                                                                              | X              |                  |                                      |
| [Highlight Set](properties_ListBox.md#highlight-set)                                                                                                                                                      |                | X                |                                      |
| [Alinhamento Horizontal](properties_Text.md#horizontal-alignment)                                                                                                                                         | X              | X                | X                                    |
| [Horizontal Line Color](properties_Gridlines.md#horizontal-line-color)                                                                                                                                    | X              | X                | X                                    |
| [Horizontal Padding] (properties_CoordinatesAndSizing.md#horizontal-padding)                  | X              | X                | X                                    |
| [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar)                                                                                                                                   | X              | X                | X                                    |
| [Dimensionamento horizontal] (properties_ResizingOptions.md#horizontal-sizing)                | X              | X                | X                                    |
| [Italic](properties_Text.md#italic)                                                                                                                                                                       | X              | X                | X                                    |
| [Left](properties_CoordinatesAndSizing.md#left)                                                                                                                                                           | X              | X                | X                                    |
| [Tabela mestre](properties_DataSource.md#master-table)                                                                                                                                                    |                | X                |                                      |
| [Meta info expression](properties_Text.md#meta-info-expression)                                                                                                                                           |                |                  | X                                    |
| [Método](properties_Action.md#method)                                                                                                                                                                     | X              | X                | X                                    |
| [Movable Rows](properties_Action.md#movable-rows)                                                                                                                                                         | X              |                  |                                      |
| [Named Selection](properties_DataSource.md#selection-name)                                                                                                                                                |                | X                |                                      |
| [Number of Columns](properties_ListBox.md#number-of-columns)                                                                                                                                              | X              | X                | X                                    |
| [Number of Locked Columns](properties_ListBox.md#number-of-locked-columns)                                                                                                                                | X              | X                | X                                    |
| [Number of Static Columns](properties_ListBox.md#number-of-static-columns)                                                                                                                                | X              | X                | X                                    |
| [Object Name](properties_Object.md#object-name)                                                                                                                                                           | X              | X                | X                                    |
| [Right](properties_CoordinatesAndSizing.md#right)                                                                                                                                                         | X              | X                | X                                    |
| [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array)                                                                                                                | X              |                  |                                      |
| [Row Control Array](properties_ListBox.md#row-control-array)                                                                                                                                              | X              |                  |                                      |
| [Row Font Color Array](properties_Text.md#row-font-color-array)                                                                                                                                           | X              |                  |                                      |
| [Row Height](properties_CoordinatesAndSizing.md#row-height)                                                                                                                                               | X              |                  |                                      |
| [Row Height Array](properties_CoordinatesAndSizing.md#row-height-array)                                                                                                                                   | X              |                  |                                      |
| [Row Style Array](properties_Text.md#row-style-array)                                                                                                                                                     | X              |                  |                                      |
| [Selected Items](properties_DataSource.md#selected-items)                                                                                                                                                 |                |                  | X                                    |
| [Selection Mode](properties_ListBox.md#selection-mode)                                                                                                                                                    | X              | X                | X                                    |
| [Single-Click Edit](properties_Entry.md#single-click-edit)                                                                                                                                                | X              | X                | X                                    |
| [Ordenável](properties_Action.md#sortable)                                                                                                                                                                | X              | X                | X                                    |
| [Ação padrão](properties_Action.md#standard-action)                                                                                                                                                       | X              |                  |                                      |
| [Expressão de estilo](properties_Text.md#style-expression)                                                                                                                                                |                | X                | X                                    |
| [Top](properties_CoordinatesAndSizing.md#top)                                                                                                                                                             | X              | X                | X                                    |
| [Transparent](properties_BackgroundAndBorder.md#transparent)                                                                                                                                              | X              | X                | X                                    |
| [Tipo](properties_Object.md#type)                                                                                                                                                                         | X              | X                | X                                    |
| [Sublinhado](properties_Text.md#underline)                                                                                                                                                                | X              | X                | X                                    |
| [Variable or Expression](properties_Object.md#variable-or-expression)                                                                                                                                     | X              | X                |                                      |
| [Alinhamento vertical](properties_Text.md#vertical-alignment)                                                                                                                                             | X              | X                | X                                    |
| [Vertical Line Color](properties_Gridlines.md#vertical-line-color)                                                                                                                                        | X              | X                | X                                    |
| [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding)                                                                                                                                   | X              | X                | X                                    |
| [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar)                                                                                                                                       | X              | X                | X                                    |
| [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing)                                                                                                                                          | X              | X                | X                                    |
| [Visibilidade](properties_Display.md#visibility)                                                                                                                                                          | X              | X                | X                                    |
| [Largura](properties_CoordinatesAndSizing.md#width)                                                                                                                                                       | X              | X                | X                                    |

> Colunas list box, cabeçalhos e rodapés suportam propriedades específicas.

### Eventos formulário suportados

| Evento formulário    | Propiedades adicionales devueltas (ver [Evento formulario](https://doc.4d.com/4Dv18/4D/18/FORM-Event.301-4522191.en.html) para las propiedades principales)                                    | Comentários                                                                                                                                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On After Edit        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                                                                 |
| On After Keystroke   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                                                                 |
| On After Sort        | <li>[column](#additional-properties)</li><li>[columnName](#propriedadesadicionais)</li><li>[headerName](#propriedadesadicionais)</li>                                                                             | *fórmulas compostas não podem ser ordenadas. <br/>(por exemplo, This.firstName + This.lastName)*                                             |
| On Alternative Click | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      | *List box array unicamente*                                                                                                                                                                                     |
| On Before Data Entry | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                                                                 |
| On Before Keystroke  | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                                                                 |
| On Begin Drag Over   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                                                                 |
| On Clicked           | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                                                                 |
| On Close Detail      | <li>[row](#propriedades adicionais)</li>                                                                                                                                                                          | Pode usar a constante <code>lk inherited</code> para imitar a aparência atual da list box (por exemplo, cor de fonte, cor de fundo, estilo da fonte,  etc.). |
| On Collapse          | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      | *Apenas list box hierárquicos*                                                                                                                                                                                  |
| On Column Moved      | <li>[columnName](#propriedadesadicionais)</li><li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                        |                                                                                                                                                                                                                 |
| On Column Resize     | <li>[column](#additional-properties)</li><li>[columnName](#propriedadesadicionais)</li><li>[newSize](#propriedadesadicionais)</li><li>[oldSize](#additional-properties)</li>                                      |                                                                                                                                                                                                                 |
| On Data Change       | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                                                                 |
| On Delete Action     | <li>[row](#propriedades adicionais)</li>                                                                                                                                                                          |                                                                                                                                                                                                                 |
| On Display Detail    | <li>[isRowSelected](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                                                            |                                                                                                                                                                                                                 |
| On Double Clicked    | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                                                                 |
| On Drag Over         | <li>[área](#propriedadesadicionais)</li><li>[areaName](#propriedades adicionais)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                                                                 |
| On Drop              | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                                                                 |
| On Expand            | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      | *Apenas list box hierárquicos*                                                                                                                                                                                  |
| On Footer Click      | <li>[column](#additional-properties)</li><li>[columnName](#propriedadesadicionais)</li><li>[footerName](#propriedadesadicionais)</li>                                                                             | *List box arrays, seleção atual e seleção temporal apenas*                                                                                                                                                      |
| On Getting Focus     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      | *Propriedades adicionais devolvidas apenas quando se edita uma célula*                                                                                                                                          |
| On Header Click      | <li>[column](#additional-properties)</li><li>[columnName](#propriedadesadicionais)</li><li>[headerName](#propriedadesadicionais)</li>                                                                             |                                                                                                                                                                                                                 |
| On Load              |                                                                                                                                                                                                                   |                                                                                                                                                                                                                 |
| On Losing Focus      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      | *Propriedades adicionais devolvidas apenas quando a edição de uma célula tiver sido concluída*                                                                                                                  |
| On Mouse Enter       | <li>[área](#propriedadesadicionais)</li><li>[areaName](#propriedades adicionais)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                                                                 |
| On Mouse Leave       |                                                                                                                                                                                                                   |                                                                                                                                                                                                                 |
| On Mouse Move        | <li>[área](#propriedadesadicionais)</li><li>[areaName](#propriedades adicionais)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                                                                 |
| On Open Detail       | <li>[row](#propriedades adicionais)</li>                                                                                                                                                                          | Pode usar a constante <code>lk inherited</code> para imitar a aparência atual da list box (por exemplo, cor de fonte, cor de fundo, estilo da fonte,  etc.). |
| On Row Moved         | <li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                                                                      | *List box array unicamente*                                                                                                                                                                                     |
| On Selection Change  |                                                                                                                                                                                                                   |                                                                                                                                                                                                                 |
| On Scroll            | <li>[horizontalScroll](#propriedades adicionais)</li><li>[verticalScroll](#propriedadesadicionais)</li>                                                                                                           |                                                                                                                                                                                                                 |
| On Unload            |                                                                                                                                                                                                                   |                                                                                                                                                                                                                 |

#### Propriedades adicionais

Form events on list box or list box column objects may return the following additional properties:

| Propriedade          | Tipo          | Descrição                                                                    |
| -------------------- | ------------- | ---------------------------------------------------------------------------- |
| area                 | text          | Área de objeto List box ("header", "footer", "cell")      |
| areaName             | text          | Nome da zona                                                                 |
| column               | inteiro longo | Número da coluna                                                             |
| columnName           | text          | Nome da coluna                                                               |
| footerName           | text          | Nome do rodapé                                                               |
| headerName           | text          | Nome do cabeçalho                                                            |
| horizontalScroll     | inteiro longo | Positivo se a deslocação for para a direita, negativo se for para a esquerda |
| isRowSelected        | boolean       | True se a linha estiver selecionada, senão False                             |
| newPosition          | inteiro longo | Nova posição da coluna ou linha                                              |
| newSize              | inteiro longo | Novo tamanho (em pixéis) da coluna ou linha               |
| oldPosition          | inteiro longo | Posição anterior da coluna ou da linha                                       |
| oldSize              | inteiro longo | Tamanho anterior (em pixéis) da coluna ou linha           |
| row                  | inteiro longo | Número da linha                                                              |
| Alinhamento vertical | inteiro longo | Positivo se a deslocação for para baixo, negativo se for para cima           |

> If an event occurs on a "fake" column or row that doesn't exist, an empty string is typically returned.

## Colunas List box {#list-box-columns}

Uma list box é feita de um ou mais objetos coluna que têm propriedades específicas. Pode selecionar uma coluna list box no editor de Formulário clicando nela ou quando o objeto list box for selecionado:

![](../assets/en/FormObjects/listbox_column.png)

Você pode definir propriedades padrão (texto, cor de fundo, etc.) para cada coluna da caixa de listagem; essas propriedades têm prioridade sobre as propriedades do objeto da caixa de listagem.

> Você pode definir o [Expression type] (properties_Object.md#expression-type) para colunas da caixa de listagem de matriz (String, Text, Number, Date, Time, Picture, Boolean ou Object).

### Propriedades específicas de coluna

[Alpha Format](properties_Display.md#alpha-format) - [Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color) - [Automatic Row Height](properties_CoordinatesAndSizing.md#automatic-row-height) - [Background Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) - [Bold](properties_Text.md#bold) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Data Type (selection and collection list box column)](properties_DataSource.md#data-type) - [Date Format](properties_Display.md#date-format) - [Default Values](properties_DataSource.md#default-list-of-values) - [Display Type](properties_Display.md#display-type) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Excluded List](properties_RangeOfValues.md#excluded-list) - [Expression](properties_DataSource.md#expression) - [Expression Type (array list box column)](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding) - [Italic](properties_Text.md#italic) - [Invisible](properties_Display.md#visibility) - [Maximum Width](properties_CoordinatesAndSizing.md#maximum-width) - [Method](properties_Action.md#method) - [Minimum Width](properties_CoordinatesAndSizing.md#minimum-width) - [Multi-style](properties_Text.md#multi-style) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Picture Format](properties_Display.md#picture-format) - [Resizable](properties_ResizingOptions.md#resizable) - [Required List](properties_RangeOfValues.md#required-list) - [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) - [Row Font Color Array](properties_Text.md#row-font-color-array) - [Row Style Array](properties_Text.md#row-style-array) - [Save as](properties_DataSource.md#save-as) - [Style Expression](properties_Text.md#style-expression) - [Text when False/Text when True](properties_Display.md#text-when-falsetext-when-true) - [Time Format](properties_Display.md#time-format) - [Truncate with ellipsis](properties_Display.md#truncate-with-ellipsis) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

### Eventos formulário suportados

| Evento formulário    | Propiedades adicionales devueltas (ver [Evento formulario](https://doc.4d.com/4Dv18/4D/18/FORM-Event.301-4522191.en.html) para las propiedades principales)                                    | Comentários                                                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On After Edit        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                     |
| On After Keystroke   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                     |
| On After Sort        | <li>[column](#additional-properties)</li><li>[columnName](#propriedadesadicionais)</li><li>[headerName](#propriedadesadicionais)</li>                                                                             | *fórmulas compostas não podem ser ordenadas. <br/>(por exemplo, This.firstName + This.lastName)* |
| On Alternative Click | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      | *List box array unicamente*                                                                                                                                         |
| On Before Data Entry | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                     |
| On Before Keystroke  | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                     |
| On Begin Drag Over   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                     |
| On Clicked           | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                     |
| On Column Moved      | <li>[columnName](#propriedadesadicionais)</li><li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                        |                                                                                                                                                                     |
| On Column Resize     | <li>[column](#additional-properties)</li><li>[columnName](#propriedadesadicionais)</li><li>[newSize](#propriedadesadicionais)</li><li>[oldSize](#additional-properties)</li>                                      |                                                                                                                                                                     |
| On Data Change       | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                     |
| On Double Clicked    | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                     |
| On Drag Over         | <li>[área](#propriedadesadicionais)</li><li>[areaName](#propriedades adicionais)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                     |
| On Drop              | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      |                                                                                                                                                                     |
| On Footer Click      | <li>[column](#additional-properties)</li><li>[columnName](#propriedadesadicionais)</li><li>[footerName](#propriedadesadicionais)</li>                                                                             | *List box arrays, seleção atual e seleção temporal apenas*                                                                                                          |
| On Getting Focus     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      | *Propriedades adicionais devolvidas apenas quando se edita uma célula*                                                                                              |
| On Header Click      | <li>[column](#additional-properties)</li><li>[columnName](#propriedadesadicionais)</li><li>[headerName](#propriedadesadicionais)</li>                                                                             |                                                                                                                                                                     |
| On Load              |                                                                                                                                                                                                                   |                                                                                                                                                                     |
| On Losing Focus      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                      | *Propriedades adicionais devolvidas apenas quando a edição de uma célula tiver sido concluída*                                                                      |
| On Row Moved         | <li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                                                                      | *List box array unicamente*                                                                                                                                         |
| On Scroll            | <li>[horizontalScroll](#propriedades adicionais)</li><li>[verticalScroll](#propriedadesadicionais)</li>                                                                                                           |                                                                                                                                                                     |
| On Unload            |                                                                                                                                                                                                                   |                                                                                                                                                                     |

## Cabeçalhos de list box

> Para poder acessar as propriedades de cabeçalho de uma caixa de listagem, é necessário ativar a opção [Exibir cabeçalhos] (properties_Headers.md#display-headers) da caixa de listagem.

Quando mostrar os cabeçalhos, pode selecionar um cabeçalho no editor de formulários clicando nele quando o objeto List Box estiver selecioando:

![](../assets/en/FormObjects/listbox_header.png)

Pode estabelecer propriedades de texto padrão para cada cabeçalho de coluna da list box, nesse caso, essas propriedades tem prioriedade sobre aquelas da coluna ou da própria list box.

Além disso, tem acesso às propriedades específicas para cabeçalhos. Especificamente, um ícone pode ser exibido no cabeçalho ao lado ou no lugar do título da coluna, por exemplo, ao executar [classificações personalizadas] (#managing-sorts).

![](../assets/en/FormObjects/lbHeaderIcon.png)

No tempo de execução, os eventos que ocorrem em um cabeçalho são gerados no método de objeto [list box column object method] (#object-methods).

Quando o comando `OBJECT SET VISIBLE` é usado com um cabeçalho, ele é aplicado a todos os cabeçalhos, independentemente do elemento individual definido pelo comando. Por ejemplo, `OBJECT SET VISIBLE(*; "header3";False)` ocultará todos los encabezados del objeto list box al que pertenece *header3* y no simplemente este encabezado.

### Propriedades específicas de cabeçalho

[Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding) - [Icon Location](properties_TextAndPicture.md#icon-location) - [Italic](properties_Text.md#italic) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_TextAndPicture.md#picture-pathname) - [Title](properties_Object.md#title) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding) - [Width](properties_CoordinatesAndSizing.md#width)

## Rodapés de list box

> Para poder acessar as propriedades de cabeçalho de uma caixa de listagem, é necessário ativar a opção [Exibir cabeçalhos] (properties_Headers.md#display-headers) da caixa de listagem.

List boxes podem conter "cabeçalhos" não editáveis, exibindo informação adicional. No caso de dados mostrados em formato de tabela, os rodapés são geralmente usados para exibir cálculos como totais ou médias.

Quando cabeçalhos são exibidos, pode clicar para selecionar um quando o objeto list box for selecionado no editor de Formulário:

![](../assets/en/FormObjects/listbox_footers.png)

Para cada cabeçalho coluna List Box pode estabelecer propriedades texto padrão: nesse caso, essas propriedades têm prioridade sobre àquelas da coluna ou da list box. Pode também acessar propriedades específicas para cabeçalhos. Em particular, você pode inserir um [cálculo personalizado ou automático](properties_Object.md#variable-calculation).

No tempo de execução, são gerados eventos no rodapé no [método do objeto de coluna da lista](#object-methods).

Quando o comando OBJECT SET VISIBLE for usado com um rodapé, é aplicado a todos os rodapés, independente do elemento individual estabelecido pelo comando. Por exemplo, OBJECT SET VISIBLE(\*;"footer3";False) esconde todos os rodapés no objeto list box ao qual footer3 pertence e não apenas esse rodapé.

### Propriedades específicas do rodapé

[Alpha Format](properties_Display.md#alpha-format) - [Background Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding) - [Italic](properties_Text.md#italic) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Picture Format](properties_Display.md#picture-format) - [Time Format](properties_Display.md#time-format) - [Truncate with ellipsis](properties_Display.md#truncate-with-ellipsis) - [Underline](properties_Text.md#underline) - [Variable Calculation](properties_Object.md#variable-calculation) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

## Gerenciar entrada

Para uma célula list box ser editável, as duas condições abaixo devem ser atendidas:

- A coluna da célula deve ter sido definida como [Enterable](properties_Entry.md#enterable) (caso contrário, as células da coluna nunca poderão ser acessadas).
- No evento `On Before Data Entry`, $0 não retorna -1. Quando o cursor chega à célula, o evento `On Before Data Entry` é gerado no método da coluna. Se, no contexto desse evento, $0 for estabelecido a -1, a célula é considerada como não editável. Si el evento se generó después de presionar **Tab** o **Mayús+Tab**, el foco pasa a la siguiente celda o a la anterior, respectivamente. Se $0 não for -1 (como padrão $0 é 0), a célula for editável e trocar para o modo edição.

Vamos considerar o exemplo de uma lsit box contendo dois arrays: uma data e um texto. O array data não é editável mas o array texto é editável se a data não tiver sido passada.

![](../assets/en/FormObjects/listbox_entry.png)

Aqui está o método da coluna *arrText*:

```4d
Case of
    :(Form event=On Before Data Entry) // uma célua obtém o foco
       LISTBOX GET CELL POSITION(*;"lb";$col;$row)
  // identificação da célula       If(arrDate{$row}Current date) // se data for anterior que hoje
          $0:=-1 // célula NAO é editável
       Else
  // senão, célula é editável
       End if
 End case
```

O evento `No Antes da entrada de dados` é retornado antes de `Ao receber o foco`.

Para preservar consistência de dados para list boxes de tipo seleção e tipo seleção de entidade, qualquer registro/entidade modificada é automaticamente salva assim que a célula for validada, ou seja.:

- quando a célula for desativada (usuário pressiona tab, clica, etc)
- quando a listbox não estiver mais em foco,
- quando o formulário não tiver mais o foco.

A sequencia típica de eventos gerados durante a entrada de dados ou modificação é como a seguir:

| Ação                                                                                                                 | Tipos Listbox                        | Sequencia de eventos                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Uma célula muda para o modo de edição (ação do usuário ou uma chamada para o comando `EDIT ITEM`) | Todos                                | On Before Data Entry                                                                                                                                                                                                                                                                                            |
|                                                                                                                      | Todos                                | On Getting Focus                                                                                                                                                                                                                                                                                                |
| Quando o valor foi modificado                                                                                        | Todos                                | On Before Keystroke                                                                                                                                                                                                                                                                                             |
|                                                                                                                      | Todos                                | On After Keystroke                                                                                                                                                                                                                                                                                              |
|                                                                                                                      | Todos                                | On After Edit                                                                                                                                                                                                                                                                                                   |
| Um usuário valida e deixa a célula                                                                                   | List box de tipo seleção             | Salvar                                                                                                                                                                                                                                                                                                          |
|                                                                                                                      | List box de tipo seleção de registro | Ativação de On saving an existing record (se estabelecido)                                                                                                                                                                                                                                   |
|                                                                                                                      | List box de tipo seleção             | On Data Change(\*)                                                                                                                                                                                                                                                                           |
|                                                                                                                      | List box de tipo seleção de entidade | Entidade é salva com opção autofusão, trancamento otimista (ver entitity.save()). No caso de salvamento com sucesso, a entidade é recarregada com a última atualização. Se a operação de salvar falhar, um erro é exibido |
|                                                                                                                      | Todos                                | On Losing Focus                                                                                                                                                                                                                                                                                                 |

(\*) Com list boxes de seleção de entidade, no evento On Data Change:

- O objeto [Current item] (properties_DataSource.md#current-item) contém o valor antes da modificação.
- o objeto `This` contém o valor modificado.

> Entrada de dados em list boxes do tipo coleção/seleção de entidade tem uma limitação quando a expressão for analisada como null. Nesse caso, não é possível editar ou remover o valor null na célula.

## Gerenciar seleções

Seleções são gerenciadas diretamente, dependendo de se a list box é a baseada em um array, em uma seleção de registros ou em uma coleção/seleção de entidades:

- **Caixa de listagem de seleção**: As seleções são gerenciadas por um conjunto, que pode ser modificado se necessário, chamado `$ListboxSetX` por padrão (em que X começa em 0 e é incrementado com base no número de caixas de listagem no formulário). Esse conjunto é [definido nas propriedades](properties_ListBox.md#highlight-set) da caixa de listagem. É mantido automaticamente por 4D: se o usuário selecionar uma ou mais linhas na list box, o conjunto se atualiza imediatamente. Por outro lado, é também possível usar comandos do tema "Conjuntos" para modificar a seleção na list box via programação.

- **Caixa de listagem de seleção de coleção/entidade**: As seleções são gerenciadas por meio de propriedades dedicadas da caixa de listagem:
  - [Current item](properties_DataSource.md#current-item) é um objeto que receberá o elemento/entidade selecionado
  - [Selected Items](properties_DataSource.md#selected-items) is a collection/entity selection object of selected items
  - [Current item position](properties_DataSource.md#current-item-position) retorna a posição do elemento ou da entidade selecionada.

- **Caixa de listagem de matriz**: O comando `LISTBOX SELECT ROW` pode ser usado para selecionar uma ou mais linhas da caixa de listagem por meio de programação.
  A [variável vinculada ao objeto da caixa de listagem] (properties_Object.md#variable-or-expression) é usada para obter, definir ou armazenar seleções de linhas do objeto. Esta variável corresponde a um array de booleanos que é criado e mantido automaticamente por 4D. O tamanho deste array vem determinado pelo tamanho do list box: contém o mesmo número de elementos que o menor array associado às colunas.
  Cada elemento dessa matriz contém `True` se a linha correspondente for selecionada e `False` caso contrário. 4D atualiza o conteúdo deste array em função das ações de usuário. Do lado contrário, pode mduar o valor dos elementos array para mudar a seleção na list box.
  Mas não se pode inserir nem apagar linhas nesse array; nem se pode reescrever as linhas. O comando `Count in array` pode ser usado para descobrir o número de linhas selecionadas.
  Por exemplo, este método permite inverter a seleção da primeira línha de list box (tipo array):

```4d
 BOOLEANY ARRAY (tBListBox; 0)
  //tBListBox é o nome da variável da caixa de lista no formato
 If(tBListBox{1}=True)
    tBListBox{1}:=False
 Else
    tBListBox{1}:=Verdadeiro
 final, se
```

> O comando `OBJECT SET SCROLL POSITION` rola as linhas da caixa de listagem de modo que a primeira linha selecionada ou uma linha especificada seja exibida.

### Personalizar a aparência de linhas selecionadas

Quando a opção [Hide selection highlight] (properties_Appearance.md#hide-selection-highlight) estiver selecionada, você precisará tornar visíveis as seleções da caixa de listagem usando as opções de interface disponíveis. Como seleções não são gerenciadas totalmente por 4D, isso significa:

- Para array de tipo list boxes, deve analisar a variável array booleana associada com a list box para determinar quais linhas foram ou não selecionadas.
- Para caixas de listagem do tipo seleção, é necessário verificar se o registro atual (linha) pertence ao conjunto especificado na propriedade [Highlight Set] (properties_ListBox.md#highlight-set) da caixa de listagem.

Pode então definir cores de fundo especificas, cores de fonte ou estilos de fonte por programação para personalizar a aparência de linhas selecionadas. Isso pode ser feito usando arrays ou expressões, dependendo do tipo de list box sendo exibido (ver as seções abaixo).

> Você pode usar a constante `lk inherited` para imitar a aparência atual da caixa de listagem (por exemplo, cor da fonte, cor do plano de fundo, estilo da fonte etc.).

#### List box de tipo seleção

Para determinar quais linhas estão selecionadas, você deve verificar se elas estão incluídas no conjunto indicado na propriedade [Highlight Set] (properties_ListBox.md#highlight-set) da caixa de listagem. Pode então definir a aparência das linhas selecionadas usando um ou mais das cores ou estilos propriedades de estilo relevantes .

Lembre que essas expressões são automaticamente reavaliadas a cada vez que:

- a seleção de list box mudar.
- a list box obter ou perder o foco.
- a janela de formulário contendo a list box virar a janela mais à frente, ou deixar de estar à frente.

#### List box de tipo array

Você precisa analisar a matriz booleana [Variable or Expression] (properties_Object.md#variable-or-expression) associada à caixa de listagem para determinar se as linhas estão selecionadas ou não.

Em seguida, você pode definir a aparência das linhas selecionadas usando uma ou mais das propriedades relevantes de [matriz de cores ou estilos] (#using-arrays-and-expressions).

Observe que os conjuntos de caixas de listagem usados para definir a aparência das linhas selecionadas devem ser recalculados durante o evento de formulário `On Selection Change`; no entanto, você também pode modificar esses conjuntos com base nos seguintes eventos de formulário adicionais:

- `On Getting Focus` (propriedade da caixa de listagem)
- `On Losing Focus` (propiedad list box)
- `On Activate` (propiedad list box)
- `On Deactivate` (form property) ...depending on whether and how you want to visually represent changes of focus in selections.

##### Exemplo

Se escolher esconder os destaques do sistema e quiser exibir seleções de list box com uma cor de fundo verde, como mostrado aqui:

![](../assets/en/FormObjects/listbox_styles7.png)

Para uma caixa de lista de tipos de matriz, você precisa atualizar a [matriz de cor de fundo da linha de fundo](properties_BackgroundAndBorder.md#row-background-color-array) pela programação. No formulário JSON, se definiu o Array Row Background Color para a list box:

```
	"rowFillSource": "_ListboxBackground",
```

No método de objeto da list box, pode escrever:

```4d
 Case of
    :(Form event=On Selection Change)
       $n:=Size of array(LB_Arrays)
       ARRAY LONGINT(_ListboxBackground;$n) // cores de fundo linha
       For($i;1;$n)
          If(LB_Arrays{$i}=True) // selecionado
             _ListboxBackground{$i}:=0x0080C080 // fundo verde
          Else // não selecionado
             _ListboxBackground{$i}:=lk inherited
          End if
       End for
 End case
```

Em uma caixa de listagem do tipo seleção, para produzir o mesmo efeito, você pode usar um método para atualizar a [Background Color Expression] (properties_BackgroundAndBorder.md#background-color-expression) com base no conjunto especificado na propriedade [Highlight Set] (properties_ListBox.md#highlight-set).

Por exemplo, no formulário JSON, se definiu  HIghlight Set e Background Color Expression para o list box:

```
	"highlightSet": "$SampleSet",
	"rowFillSource": "UI_SetColor",
```

Você pode escrever no método *UI_SetColor*:

```4d
 If(Is in set("$SampleSet"))
    $color:=0x0080C080 // green background
 Else
    $color:=lk inherited
 End if

 $0:=$color
```

> Em caixas de listagem hierárquicas, as linhas de quebra não podem ser destacadas quando a opção [Ocultar destaque de seleção] (properties_Appearance.md#hide-selection-highlight) está marcada. Já que não é possível diferenciar cores de cabeçalho ao mesmo nível, não há uma maneira de ressaltar uma quebra de linha especifica por programação.

## Gestão de ordenações

Uma ordenação num list box pode ser padrão ou personalizada. Todas as colunas são sincronizadas automaticamente.

### Ordenação standard

como padrão, uma list box gerencia automaticamente ordenações de coluna padrão quando o cabeçalho for clicado. Uma ordenação normal é uma ordenação alfanumérica de valores de coluna, alternando entre ascendente e descendente com cada clique sucessivo.

Você pode ativar ou desativar a classificação padrão do usuário desativando a propriedade [Sortable](properties_Action.md#sortable) da caixa de listagem (ativada por padrão).

O suporte de ordenação padrão depende do tipo de list box:

| Tipo de list box              | Suporte de ordenação padrão | Comentários                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Uma coleção de objetos        | Sim                         | <ul><li>"This.a" or "This.a.b" columns are sortable.</li><li>The [list box source property](properties_Object.md#variable-or-expression) must be an [assignable expression](../Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Colecção de valores escalares | Não                         | Use a classificação personalizada com a função [`orderBy()`](../API/CollectionClass.md#orderby)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Seleção de entidades          | Sim                         | <li>A [propriedade de origem da caixa de listagem](properties_Object.md#variable-or-expression) deve ser uma [expressão atribuível](../Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).</li><li>Suportado: classifica propriedades de atributos de objetos (por exemplo,</li> "This.data<li>.</li>city" quando "data" é um<li>atributo de objeto</0>)<li>Suportado: classifica propriedades de atributos</0> relacionados<li>(por exemplo</0>, "This.company<li>.</li>name"<li>)</li>Suportado: classifica propriedades de atributos de objetos (por exemplo,<li>"This.data.city" quando "data" é um atributo de objeto)Suportado</li>: classifica<li>atributos relacionados (por exemplo, "This.company.name")</li><li>Não suportado: classifica propriedades de atributos de objetos por meio de atributos relacionados (por exemplo, "This.company.data.city"). For this, you need to use custom sort with [`orderByFormula()`](../API/EntitySelectionClass.md#orderbyformula) function (see example below)</li> |
| Selecção actual               | Sim                         | Somente expressões simples podem ser classificadas (por exemplo, `[Table_1]Field_2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Seleção temporal              | Não                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Arrays                        | Sim                         | As colunas ligadas a arrays de imagens e ponteiros não podem ser ordenadas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Ordenação personalizada

O desenvolvedor pode configurar tipos personalizados, por exemplo, usando o [`LISTBOX SORT COLUMNS`](https://doc.4d.com/4dv19/help/command/en/page916. comando tml) e/ou combinação dos eventos de formulário [`No Header Click`](../Events/onHeaderClick) e [`On Sort`](../Events/onAfterSort) e comandos 4D relevantes.

As ordenações personalizadas permitem-lhe:

- realizar classificações em vários níveis em várias colunas, graças ao comando [`LISTBOX SORT COLUMNS`] (https://doc.4d.com/4dv19/help/command/en/page916.html),
- Utilize funções como [`collection.orderByFormula()`](../API/CollectionClass.md#orderbyformula) ou [`entitySelection.orderByFormula()`](../API/EntitySelectionClass.md#orderbyformula) para classificar colunas com base em critérios complexos.

#### Exemplo

You want to sort a list box using values of a property stored in a related object attribute. Tem a seguinte estrutura:

![](../assets/en/FormObjects/relationLB.png)

Você projeta uma caixa de lista do tipo de seleção de entidades, vinculada à expressão `Form.child`. No evento de formulário `On Load`, você executa `Form.child:=ds.Child.all()`.

São exibidas duas colunas:

| Negrito     | Apelido do progenitor        |
| ----------- | ---------------------------- |
| `This.name` | `This.parent.extra.nickname` |

Se quiser ordenar o list box utilizando os valores da segunda coluna, tem de escrever:

```4d
If (Form event code=On Header Click)
	Form.child:=Form.child.orderByFormula("This.parent.extra.nickname"; dk ascending)
End if
```

### Variável de cabeçalho de coluna

O valor da [variável de cabeçalho de coluna] (properties_Object.md#variable-or-expression) permite que você gerencie informações adicionais: a classificação atual da coluna (leitura) e a exibição da seta de classificação.

- Se a variável for estabelecida como 0, a coluna não é ordenada e a flecha de ordenação não é exibida;\
  ![](../assets/en/FormObjects/sorticon0.png)

- Se a variável for definida como 1, a coluna será classificada em ordem crescente e a seta de classificação será exibida.
  ![](../assets/en/FormObjects/sorticon1.png)

- If the variable is set to 2, the column is sorted in descending order and the sort arrow is displayed.
  ![](../assets/en/FormObjects/sorticon2.png)

> Somente [variáveis] declaradas ou dinâmicas (Concepts/variables.md) podem ser usadas como variáveis de coluna de cabeçalho. Outros tipos de [expressions](Aceitações/quick-tour.md#expressions) como `Form.sortValue` não são suportados.

Pode estabelecer o valor da variável (por exemplo, Header2:=2) para  “forçar” a exibição da flecha de ordenação. A ordenação de coluna não é modificada nesse caso; depende do desenvolvedor como vai manejá-la.

> O comando [`OBJECT SET FORMAT`] (https://doc.4d.com/4dv19/help/command/en/page236.html) oferece suporte específico para ícones em cabeçalhos de caixas de listagem, o que pode ser útil quando você deseja trabalhar com um ícone de classificação personalizado.

## Gerenciar cores linha, estilos e exibição

Aqui estão algumas maneiras de estabelecer cores de fundo, cores de fonte e estilos de fonte para list boxes:

- no nível das [propriedades do objeto da caixa de listagem] (#list-box-objects),
- no nível das [propriedades da coluna] (#list-box-columns),
- usando [propriedades de matrizes ou expressões] (#using-arrays-and-expressions) para a caixa de listagem e/ou para cada coluna,
- no nível do texto de cada célula (se [texto multi-estilo](properties_Text.md#multi-style)).

### Prioridade e herança

Princípios de prioridade e herança são observados quando a mesma propriedade for estabelecida em mais de um nível.

| Nível de prioridade | Localização do parâmetro                                                                           |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| alta prioridade     | Célula (se texto multiestilo)                                                   |
|                     | Arrays/métodos de coluna                                                                           |
|                     | Arrays/métodos de Listbox                                                                          |
|                     | Propriedades da coluna                                                                             |
|                     | Propriedades de list box                                                                           |
| baixa prioridade    | Expressão Meta Info (para list boxes de tipo collection ou seleção de entidade) |

Por exemplo se estabelecer um estilo de fonte nas propriedades de list box e outro usando um array estilo para a coluna, este último será levado em consideração.

Para cada atributo (estilo, cor e cor de fundo), uma **herança** é implementada quando o valor padrão é usado:

- Para atributos de célula: atributos valores de linhas
- para atributos linhas: valores de atributos de colunas
- para atributos coluna: valores atributos no list box

Dessa maneira se quiser que um objeto herde o valor de atributo de um nível superior, pode usar a constante `lk inherited` (valor padrão) à definição de comando ou diretamente no elemento do array correspondente de estilo/cor. For example, given an array list box containing a standard font style with alternating colors:
![](../assets/en/FormObjects/listbox_styles3.png)

Pode realizar as modificações abaixo:

- Mude o fundo da linha 2 para vermelho usando a propriedade [Linha de Cor de Fundo Array](properties_BackgroundAndBorder.md#row-background-color-array) do objeto caixa de lista,
- altere o estilo de linha 4 para itálico usando a propriedade [Linha de Estilo Array](properties_Text.md#row-style-array) do objeto caixa de lista,
- dois elementos na coluna 5 são alterados para negrito usando a propriedade [Matriz de Estilo da Linha](properties_Text.md#row-style-array) do objeto da coluna 5,
- Os 2 elementos da coluna 1 e 2 são alterados para azul escuro usando a propriedade [Row Background Color Array] (properties_BackgroundAndBorder.md#row-background-color-array) para os objetos da coluna 1 e 2:

![](../assets/en/FormObjects/listbox_styles3.png)

Para restaurar a aparência original da list box, é possível:

- passe a constante `lk inherited` no elemento 2 das matrizes de cores de fundo para as colunas 1 e 2: então elas herdarão a cor de fundo vermelha da linha.
- passe a constante `lk inherited` nos elementos 3 e 4 da matriz de estilo da coluna 5: então eles herdam o estilo padrão, exceto o elemento 4, que muda para itálico conforme especificado na matriz de estilo da caixa de listagem.
- passar a constante 'lk herdado' no elemento 4 da matriz de estilo para a caixa de lista a fim de remover o estilo itálico.
- passe a constante `lk inherited` no elemento 2 da matriz de cores de fundo da caixa de listagem para restaurar a cor alternada original da caixa de listagem.

### Usar arrays e expressões

Dependendo do tipo de list box, pode usar diferentes propriedades para personalizar cores de linha, estilos e exibição:

| Propriedade     | List box array                                                                             | List box seleção                                                                           | List box coleção ou entity selection                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cor de fundo    | [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) | [Expressão de cor de fundo](properties_BackgroundAndBorder.md#background-color-expression) | [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) ou [Meta info expression](properties_Text.md#meta-info-expression) |
| Cor de fundo    | [Row Font Color Array](properties_Text.md#row-font-color-array)                            | [Expressão de Cor da Fonte](properties_Text.md#font-color-expression)                      | [Font Color Expression](properties_Text.md#font-color-expression) ou [Meta info expression](properties_Text.md#meta-info-expression)                            |
| Estilo de letra | [Row Style Array](properties_Text.md#row-style-array)                                      | [Expressão de estilo](properties_Text.md#style-expression)                                 | [Style Expression](properties_Text.md#style-expression) ou [Meta info expression](properties_Text.md#meta-info-expression)                                      |
| Visualização    | [Row Control Array](properties_ListBox.md#row-control-array)                               | -                                                                                          | -                                                                                                                                                               |

## Imprimir list boxes

Há dois modos de impressão disponíveis: **modo de visualização** - que pode ser usado para imprimir uma caixa de listagem como um objeto de formulário, e **modo avançado** - que permite controlar a impressão do próprio objeto da caixa de listagem dentro do formulário. Note que a aparência "Impressão" está disponível para objetos list box no editor de Formulário.

### Modo de vista previa

A impressão de uma caixa de listagem no modo de visualização consiste em imprimir diretamente a caixa de listagem e o formulário que a contém usando os comandos de impressão padrão ou o comando de menu **Print**. A list box é impressa como no formulário. Esse modo não permite controle preciso da impressão do objeto, especialmente não permite imprimir todas as linhas da list box que contenham mais linhas que podem ser exibidas.

### Modo avançado

Nesse modo, a impressão de caixas de listagem é realizada por programação, por meio do comando `Print object` (há suporte para formulários de projeto e formulários de tabela). O comando `LISTBOX GET PRINT INFORMATION` é usado para controlar a impressão do objeto.

Nesse modo:

- A altura do objeto list box é reduzida automaticamente quando o número de linhas a ser impresso for menor que a altura original do objeto (não há linhas "em branco" impressas). Por outro lado a altura não aumenta automaticamente de acordo com os conteúdos do objeto. O tamanho do objeto realmente impresso pode ser obtido por meio do comando `LISTBOX GET PRINT INFORMATION`.
- The list box object is printed "as is", in other words, taking its current display parameters into account: visibility of headers and gridlines, hidden and displayed rows, etc. These parameters also include the first row to be printed: if you call the <code>OBJECT SET SCROLL POSITION</code> command before launching the printing, the first row printed in the list box will be the one designated by the command.
  Esses parâmetros também incluem a primeira linha a ser impressa: se você chamar o comando `OBJECT SET SCROLL POSITION` antes de iniciar a impressão, a primeira linha impressa na caixa de listagem será a designada pelo comando.
- Um mecanismo automático facilita a impressão de caixas de listagem que contêm mais linhas do que é possível exibir: chamadas sucessivas para `Print object` podem ser usadas para imprimir um novo conjunto de linhas a cada vez. O comando `LISTBOX GET PRINT INFORMATION` pode ser usado para verificar o status da impressão enquanto ela estiver em andamento.

## List box hierárquicos.

Uma list box hierárquica é uma list box na qual o conteúdo da primeira coluna aparece em forma hierárquica. Esse tipo de representação se adapta à apresentação de informação que inclua valores repetidos ou que dependem de hierarquias (país/região/cidade e assim por diante).

> Apenas [caixas de lista de tipos de arrays](#array-list-boxes) podem ser hierárquicas.

As caixas de listagem hierárquica são uma forma particular de representar dados, mas não modificam a estrutura de dados (matrizes). As caixas de listagem hierárquica são geridas exactamente da mesma forma que as caixas de listagem normais.

### Definir a hierarquia

Para definir uma list box hierárquica há várias possibilidades:

- Configurar manualmente os elementos hierárquicos usando a lista Propriedade no editor de formulário (ou editar o formulário JSON).
- Gerar visualmente a hierarquia usando o menu emergente de gestão de list box no editor de formulários.
- Use os comandos [LISTBOX SET HIERARCHY](https://doc.4d.com/4Dv17R5/4D/17-R5/LISTBOX-SET-HIERARCHY.301-4127969.en.html) e [LISTBOX GET HIERARCHY](https://doc.4d.com/4Dv17R5/4D/17-R5/LISTBOX-GET-HIERARCHY.301-4127970.en.html), descritos no manual *Linguagem 4D*.

#### Propriedades de List Box hierárquico

Essa propriedade especifica que o list box deve ser exibido em forma hierárquica. No formulário JSON, esse recurso é acionado [quando o valor da propriedade *dataSource* da coluna é um array](properties_Object.md#array-list-box), ou seja, uma coleção.

Opções adicionais (**Variável 1...10**) estão disponíveis quando a opção *List Box hierárquico* é selecionada, correspondendo a cada elemento da array *dataSource* a ser usada como coluna de quebra. A cada vez que um valor é digitado em um campo, uma nova linha é adicionada. Podem ser especificadas até 10 variáveis. Essas variáveis estabelecem os níveis hierárquicos a serem exibidos na primeira coluna.

A primeira variável sempre corresponde ao nome da variável para a primeira coluna da list box (os dois valores são automaticamente conectados) Essa primeira variável é sempre visível e editável. Essa primeira variável é sempre visível e editável. Por exemplo: country.
A segunda variável é sempre visível e editável: especifica o segundo nível hierárquico. Por exemplo: regions.
A partir do terceiro campo, cada variável depende da variável que a antecedeu. Por exemplo: countries, cities etc. Pode ser especificado um máximo de dez níveis hierárquicos. Se remover um valor, a hierarquia inteira move um nível para cima.

A última variável nunca é hierárquica mesmo se vários valores idênticos existirem nesse nível. Por exemplo, referindo-se à configuração ilustrada acima, imagine que arr1 contém os valores  A A A B B B, arr2 tenha os valores 1 1 1 2 2 2 e arr3 os valores X X Y Y Y Z. Neste caso, A, B, 1 e 2 poderiam aparecer na forma colapsada, mas não  X e Y:

![](../assets/en/FormObjects/property_hierarchicalListBox.png)

Esse princípio não é aplicado quando apenas uma variável for especificada na hierarquia: nesse caso, valores idênticos podem ser agrupados.

> Se especificar uma hierarquia baseada nas primeiras colunas de uma list box existente, deve então remover ou esconder essas colunas (exceto a primeira) senão vão aparecer de forma duplicada na list box. Se especificar a hierarquia via o menu pop up do editor (ver abaixo), as colunas desnecessárias serão removidas automaticamente da list box.

#### Crie hierarquias usando o menu contextual

Quando se seleciona pelo menos uma coluna para além da primeira num objeto list box (do tipo array) no editor de formulários, o comando **Criar hierarquia** está disponível no menu de contexto:

![](../assets/en/FormObjects/listbox_hierarchy1.png)

Este comando é um atalho para definir a hierarquia. Quando for selecionado, as ações a seguir são realizadas:

- A opção **List box hierárquico** é marcada para o objeto na Lista de propriedades.
- As variváveis das colunas são usadas para especificar a hierarquia. Elas substituem qualquer variável já especificada.
- As colunas selecionadas não aparecem mais na list box (exceto para o título da primeira).

Exemplo: dado uma list box cujas primeiras colunas contém País, região, cidade e população. Quando País, região e cidade forem selecionadas, se escolher **Criar hierarquia** no menu contextual, uma hierarquia de três níveis é criada na primeira coluna, colunas número 2 e 3 são removidas e a coluna População vira a segunda:

![](../assets/en/FormObjects/listbox_hierarchy2.png)

##### Cancelar hierarquia

Quando a primeira coluna for selecionada e especificada como hierárquica pode usar o comando **Cancelar hierarquia**. Quando selecionar este comando, as ações abaixo serão realizadas:

- A opção **Hierarchical list box** é desmarcada para o objeto,
- Os níveis hierárquicos 2 a X são removidos e transformados em colunas adicionadas à list box.

### Como funciona

Quando um formulário que conter uma list box hierárquica for aberto pela primeira vez, como padrão todas as linhas são expandidas.

Uma linha de quebra e um "nó" hierárquico são automaticamente adicionados na caixa de listagem quando os valores são repetidos nas matrizes. Por exemplo, imagine uma caixa de listagem contendo quatro arrays especificando cidades, sendo cada cidade caracterizada pelo seu país, a sua região, o seu nome e o seu número de habitantes:

![](../assets/en/FormObjects/hierarch1.png)

Se esta caixa de listagem for apresentada de forma hierárquica (sendo as três primeiras arrays incluídas na hierarquia), obtém-se:

![](../assets/en/FormObjects/hierarch2.png)

As matrizes não são ordenadas antes de a hierarquia ser construída. Se, por exemplo, uma matriz contiver os dados AAABBAACC, a hierarquia obtida será:
\> A
\> B
\> A
\> C

Para expandir ou colapsar um "nó" hierárquico, pode simplesmente clicar sobre ele. Se você **Alt+click** (Windows) ou **Option+click** (macOS) no nó, todos os seus subelementos também serão expandidos ou recolhidos. Essas operações também podem ser executadas por meio de programação, usando os comandos `LISTBOX EXPAND` e `LISTBOX COLLAPSE`.

Quando valores do tipo de data ou hora são incluídos numa caixa de listagem hierárquica, eles são exibidos no formato de sistema curto.

#### Ordenar em caixas de listagem hierárquica

Numa caixa de listagem em modo hierárquico, uma ordenação padrão (realizada clicando no cabeçalho de uma coluna da caixa de listagem) é sempre construída da seguinte forma:

- Em primeiro lugar, todos os níveis da coluna hierárquica (primeira coluna) são automaticamente ordenados por ordem ascendente.
- A ordenação é então efectuada por ordem ascendente ou descendente (de acordo com a acção do utilizador) sobre os valores da coluna que foi clicada.
- Todas as colunas são sincronizadas.
- Durante ordenações posteriores realizadas em colunas não hierárquicas da caixa de listagem, apenas o último nível da primeira coluna é classificado. É possível modificar a ordenação desta coluna, clicando no seu cabeçalho.

Dada, por exemplo, a seguinte caixa de listagem, na qual não é especificado nenhum tipo específico:

![](../assets/en/FormObjects/hierarch3.png)

Se clicar no cabeçalho "População" para ordenar as populações por ordem ascendente (ou alternadamente descendente), os dados aparecem como se segue:

![](../assets/en/FormObjects/hierarch4.png)

Quanto a todas os list boxes, você pode [desativar o mecanismo de classificação padrão](properties_Action.md#sortable) e gerenciar as classificações usando programação.

#### Seleções e posições em caixas de listagem hierárquica

Uma caixa de listagem hierárquica exibe um número variável de linhas na tela, de acordo com o estado expandido/colocado dos nós hierárquicos. Isto não significa, contudo, que o número de filas das matrizes varie. Apenas o visor é modificado, não os dados. É importante compreender este princípio porque a gestão programada das caixas de listagem hierárquica é sempre baseada nos dados das matrizes, não nos dados apresentados. Em particular, as linhas de intervalo adicionadas automaticamente não são tidas em conta nas matrizes de opções de visualização (ver abaixo).

Vejamos, por exemplo, as seguintes matrizes:

![](../assets/en/FormObjects/hierarch5.png)

Se estes conjuntos forem representados hierarquicamente, a linha "Quimper" não será exibida na segunda linha, mas sim na quarta, devido às duas linhas de interrupção que são adicionadas:

![](../assets/en/FormObjects/hierarch6.png)

Independentemente de como os dados são exibidos na caixa da lista (hierarquicamente ou não), se quiser alterar a linha que contém "Quimper" para negrito, deve utilizar a declaração Style{2} = negrito. Apenas a posição da fila nas matrizes é tida em conta.

Este princípio é implementado para as matrizes internas que podem ser utilizadas para gerir:

- cores

- cores de fundo

- estilos

- filas ocultas

- seleções

Por exemplo, se quiser seleccionar a fila que contém Rennes, deve passar:

```4d
 ->MyListbox{3}:=True
```

Representação não hierárquica:
![](../assets/en/FormObjects/hierarch7.png)
Representação hierárquica:
![](../assets/en/FormObjects/hierarch8.png)

> Se uma ou mais filas estiverem escondidas porque os seus pais estão desmoronados, já não são seleccionados. Apenas as linhas visíveis (directamente ou por rolagem) podem ser seleccionadas. Por outras palavras, as filas não podem ser tanto escondidas como seleccionadas.

Tal como com as selecções, o comando `LISTBOX GET CELL POSITION` devolverá os mesmos valores para uma caixa de listagem hierárquica e um list box não hierárquico. Esto significa que en los dos ejemplos siguientes, `LISTBOX GET CELL POSITION` devolverá la misma posición: (3;2).

*Representação não hierárquica:*
![](../assets/en/FormObjects/hierarch9.png)

*Representação hierárquica:*
![](../assets/en/FormObjects/hierarch10.png)

Quando todas as filas de uma sub-hierarquia estão escondidas, a linha de quebra é automaticamente escondida. No exemplo acima, se as linhas 1 a 3 estiverem escondidas, a linha de quebra "Bretanha" não aparecerá.

#### Linhas de quebra

Se o usuário selecionar uma linha de interrupção, `LISTBOX GET CELL POSITION` retornará a primeira ocorrência da linha na matriz correspondente. No caso seguinte:

![](../assets/en/FormObjects/hierarch11.png)

... `LISTBOX GET CELL POSITION` retorna (2;4). Para selecionar uma linha de interrupção por programação, você precisará usar o comando `LISTBOX SELECT BREAK`.

As linhas de quebra não são tidas em conta nos arrays internos utilizados para gerir o aspecto gráfico das caixas de listagem (estilos e cores). No entanto, é possível modificar estas características para linhas de quebra através dos comandos de gestão gráfica dos objectos. Basta executar os comandos apropriados nas matrizes que constituem a hierarquia.

Dada, por exemplo, a seguinte caixa de listagem (os nomes dos arrays associados são especificados entre parênteses):

*Representação não hierárquica:*
![](../assets/en/FormObjects/hierarch12.png)

*Representação hierárquica:*
![](../assets/en/FormObjects/hierarch13.png)

No modo hierárquico, os níveis de interrupção não são levados em consideração pelas matrizes de modificação de estilo denominadas `tStyle` e `tColors`. Para modificar a cor ou o estilo dos níveis de quebra, é necessário executar as seguintes declarações:

```4d
 OBJECT SET RGB COLORS(T1;0x0000FF;0xB0B0B0)
 OBJECT SET FONT STYLE(T2;Bold)
```

> Neste contexto, apenas a sintaxe usando a variável array pode funcionar com os comandos de propriedade do objecto porque as arrays não têm nenhum objecto associado.

Resultados:

![](../assets/en/FormObjects/hierarch14.png)

#### Gestão otimizada da expansão/colapso

Pode optimizar a exibição e gerenciamento de caixas de listagem hierárquica usando os eventos de formulário `On Expand` e `On Collapse`.

Uma caixa de listagem hierárquica é construída a partir do conteúdo de seus arrays de modo a só poder ser exibida quando todas estas matrizes são carregadas na memória. Isto torna difícil construir grandes caixas de listagem hierárquica com base em arrays gerados a partir de dados (através do comando SELECTION TO ARRAY ), não só devido à velocidade de visualização mas também à memória utilizada.

Usando os formulários `On Expand` e `On Collapse`, os eventos podem ultrapassar estas restrições: por exemplo, é possível exibir apenas parte da hierarquia e carregar/descarregar as arrays a qualquer momento, com base nas ações dos usuários. No contexto destes eventos, o comando `LISTBOX GET CELL POSITION` devolve a célula onde o usuário clicou para expandir ou colapsar uma fila.

Neste caso, é necessário preencher e esvaziar os arrays através do código. Os princípios a serem implementados são os seguintes:

- Quando a list box é exibido, somente o primeiro array deve ser preenchido. No entanto, você deve criar um segundo array com valores vazios para que o list box exiba os botões expandir/colapsar:
  ![](../assets/en/FormObjects/hierarch15.png)

- Quando um usuário clicar num botão de expansão, pode processar o evento `On Expand`. O comando `LISTBOX GET CELL POSITION` devolve a célula em questão e permite-lhe construir a hierarquia apropriada: preenche o primeiro array com os valores repetidos e a segunda com os valores enviados do comando `SELECTION TO ARRAY` e insere tantas linhas quantas forem necessárias na caixa de listagem usando o comando `LISTBOX INSERT ROWS`.
  ![](../assets/en/FormObjects/hierarch16.png)

- Quando um usuário clicar num botão de colapso, pode processar o evento `On Collapse`. O comando `LISTBOX GET CELL POSITION` devolve a célula em questão: retira-se tantas filas quantas forem necessárias da caixa de listagem usando o comando `LISTBOX DELETE ROWS`.

## Arrays objetos nas colunas (4D View Pro)

As colunas da caixa de listagem podem tratar de arrays de objectos. Uma vez que os arrays de objectos podem conter diferentes tipos de dados, esta nova e poderosa característica permite-lhe misturar diferentes tipos de entrada nas linhas de uma única coluna, e exibir também vários widgets. Por exemplo, poderia inserir uma entrada de texto na primeira linha, uma caixa de verificação na segunda, e uma lista drop down na terceira. Os arrays de objetos também fornecem acesso a novos tipos de widgets, tais como botões ou seletores de cores.

A seguinte caixa de listagem foi concebida utilizando uma matriz de objectos:

![](../assets/en/FormObjects/listbox_column_objectArray.png)

### Configuração de uma coluna de matriz de objectos

Para atribuir um arrayz de objetos a uma coluna list box, basta definir o nome do array de objetos na lista de propriedades (campo "Variable Name") ou usar o comando [LISTBOX INSERT COLUMN](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-INSERT-COLUMN.301-4311153.en.html), como em qualquer coluna baseada em arrays. Na lista de propriedades, pode agora selecionar Objecto como "Tipo de Expressão" para a coluna:

![](../assets/en/FormObjects/listbox_column_objectArray_config.png)

Estão disponíveis propriedades padrão relacionadas com coordenadas, tamanho e estilo para colunas de objectos. Pode defini-los usando a lista de propriedades, ou programando o estilo, cor da fonte, cor de fundo e visibilidade para cada linha de uma coluna de caixa de lista de tipo de objecto. Estes tipos de colunas também podem ser ocultados.

No entanto, o tema Fonte de Dados não está disponível para as colunas da caixa de listagem tipo objecto. De fato, o conteúdo de cada célula de coluna é baseado em atributos encontrados no elemento correspondente da array de objectos. Cada elemento da array pode definir:

the value type (mandatory): text, color, event, etc. the value itself (optional): used for input/output.
the cell content display (optional): button, list, etc. additional settings (optional): depend on the value type To define these properties, you need to set the appropriate attributes in the object (available attributes are listed below). Por exemplo, pode escrever "Olá Mundo!" numa coluna de objectos usando este código simples:

```4d
ARRAY OBJECT(obColumn;0) //array de colunas
 C_OBJECT($ob) //primeiro elemento
 OB SET($ob; "valueType"; "text") //define o tipo de valor (obrigatório)
 OB SET($ob; "value"; "Hello World!") //define o valor
 APPEND TO ARRAY(obColumn;$ob)  
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld.png)

> O formato de visualização e os filtros de entrada não podem ser definidos para uma coluna de objectos. Dependem automaticamente do tipo de valor.

#### valueType e visualização de dados

Quando uma coluna de caixa de listagem é associada a uma array de objectos, a forma como uma célula é exibida, introduzida, ou editada, é baseada no atributo valueType do elemento da array. Os valores suportados são os tipos de valores:

- "texto": para um valor de texto
- "real": para um valor numérico que pode incluir separadores como `\<space>`, `<.>` ou `<,>`
- "integer": para um valor inteiro
- "booleano": para um valor Verdadeiro/Falso
- "cor": para definir uma cor de fundo
- "evento": para exibir um botão com um rótulo.

4D utiliza widgets padrão no que respeita ao valor "valueType" (ou seja, um "texto" é exibido como um widget de entrada de texto, um "booleano" como uma caixa de verificação), mas também estão disponíveis exibições alternativas através de opções (*por exemplo*, um real também pode ser representado como um menu drop-down). A tabela seguinte mostra a visualização por defeito, bem como as alternativas para cada tipo de valor:

| valueType | Widget padrão                                                          | Widgets alternativos                                                                                                                                  |
| --------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| text      | entrada de texto                                                       | menu drop-down (lista obrigatória) ou caixa combinada (lista de escolha)                                        |
| real      | entrada de texto controlada (números e separadores) | menu drop-down (lista obrigatória) ou caixa combinada (lista de escolha)                                        |
| integer   | entrada de texto controlada (apenas números)        | menu drop down (lista necessária) ou caixa combinada (lista de escolha) ou caixa de verificação de três estados |
| boolean   | caixa de verificação                                                   | menu drop-down (lista obrigatória)                                                                                                 |
| color     | cor de fundo                                                           | text                                                                                                                                                  |
| "event"   | botão com rótulo                                                       |                                                                                                                                                       |
|           |                                                                        | Todos os widgets podem ter um botão de alternância de unidade adicional ou um botão de elipse ligado à célula.                        |

Define-se a visualização e opções de células usando atributos específicos em cada objecto (ver abaixo).

#### Formatos de visualização e filtros de entrada

Não é possível definir formatos de exibição ou filtros de entrada para colunas de caixas de listagem de tipos de objectos. São automaticamente definidos de acordo com o tipo de valor. Estes estão listados na tabela seguinte:

| Tipo de valor | Formato predefinido                                                                           | Controlo de entrada                        |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------ |
| text          | o mesmo que definido no objecto                                                               | qualquer (sem controlo) |
| real          | o mesmo que definido no objeto (utilizando o separador decimal do sistema) | "0-9" e "." e "-"          |
|               |                                                                                               | "0-9" y "." si min>=0      |
| integer       | o mesmo que definido no objecto                                                               | "0-9" e "-"                                |
|               |                                                                                               | "0-9" if min>=0                            |
| Parâmetros    | caixa de verificação                                                                          | N/A                                        |
| color         | N/A                                                                                           | N/A                                        |
| "event"       | N/A                                                                                           | N/A                                        |

### Atributos

Cada elemento da array de objetos é um objecto que pode conter um ou mais atributos que definirão o conteúdo da célula e a exibição dos dados (ver exemplo acima).

O único atributo obrigatório é "valueType" e os seus valores suportados são "text", "real", "integer", "boolean", "color", e "event". A tabela seguinte lista todos os atributos suportados nas arrays de objectos da caixa de listagem, dependendo do valor "valueType" (quaisquer outros atributos são ignorados). Os formatos de exibição são detalhados e são fornecidos exemplos abaixo.

|                       | valueType                                             | text | real | integer | boolean | color | "event" |
| --------------------- | ----------------------------------------------------- | ---- | ---- | ------- | ------- | ----- | ------- |
| *Atributos*           | *Description*                                         |      |      |         |         |       |         |
| value                 | valor da célula (entrada ou saída) | x    | x    | x       |         |       |         |
| min                   | valor mínimo                                          |      | x    | x       |         |       |         |
| max                   | valor máximo                                          |      | x    | x       |         |       |         |
| behavior              | valor "threeStates"                                   |      |      | x       |         |       |         |
| requiredList          | lista drop down definida no objecto                   | x    | x    | x       |         |       |         |
| choiceList            | combo box definida no objecto                         | x    | x    | x       |         |       |         |
| requiredListReference | 4D lista ref, depende do valor "saveAs                | x    | x    | x       |         |       |         |
| requiredListName      | Nome da lista 4D, depende do valor "saveAs            | x    | x    | x       |         |       |         |
| saveAs                | "referência" ou "valor                                | x    | x    | x       |         |       |         |
| choiceListReference   | 4D lista ref, mostrar caixa combinada                 | x    | x    | x       |         |       |         |
| choiceListName        | Nome da lista 4D, mostrar caixa combinada             | x    | x    | x       |         |       |         |
| unitList              | array de X elementos                                  | x    | x    | x       |         |       |         |
| unitReference         | índice de elementos seleccionados                     | x    | x    | x       |         |       |         |
| unitsListReference    | 4D lista ref para unidades                            | x    | x    | x       |         |       |         |
| unitsListName         | 4D nome da lista para unidades                        | x    | x    | x       |         |       |         |
| alternateButton       | adicionar um botão alternativo                        | x    | x    | x       | x       | x     |         |

#### value

Os valores das células são armazenados no atributo "value". Este atributo é utilizado tanto para a entrada como para a saída. Também pode ser utilizada para definir valores por defeito quando se utilizam listas (ver abaixo).

```4d
 ARRAY OBJECT(obColumn;0) //column array
 C_OBJECT($ob1)
 $entry:="Hello world!"
 OB SET($ob1;"valueType";"text")
 OB SET($ob1;"value";$entry) // if the user enters a new value, $entry will contain the edited value
 C_OBJECT($ob2)
 OB SET($ob2;"valueType";"real")
 OB SET($ob2;"value";2/3)
 C_OBJECT($ob3)
 OB SET($ob3;"valueType";"boolean")
 OB SET($ob3;"value";True)

 APPEND TO ARRAY(obColumn;$ob1)
 APPEND TO ARRAY(obColumn;$ob2)
 APPEND TO ARRAY(obColumn;$ob3)
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld_value.png)

> Os valores Null são suportados e resultam numa célula vazia.

#### mín. e máx

When the "valueType" is "real" or "integer", the object also accepts min and max attributes with appropriate values (values must be of the same type as the valueType).

Estes atributos podem ser utilizados para controlar a gama de valores de entrada. When a cell is validated (when it loses the focus), if the input value is lower than the min value or greater than the max value, then it is rejected. In this case, the previous value is maintained and a tip displays an explanation.

```4d
 C_OBJECT($ob3)
 $entry3:=2015
 OB SET($ob3;"valueType";"integer")
 OB SET($ob3;"value";$entry3)
 OB SET($ob3;"min";2000)
 OB SET($ob3;"max";3000)
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld_minMax.png)

#### behavior

The behavior attribute provides variations to the regular representation of values. Em 4D v15, uma única variação é proposta:

| Atributo | Valor(es) disponível(eis) | valueType(s) | Descrição                                                                                                                                                                                               |
| -------- | --------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| behavior | threeStates                                                     | integer                         | Represents a numeric value as a three-states check box.<br/> 2=semi-checked, 1=checked, 0=unchecked, -1=invisible, -2=unchecked disabled, -3=checked disabled, -4=semi-checked disabled |

```4d
 C_OBJECT($ob3)
 OB SET($ob3;"valueType";"integer")

 OB SET($ob3;"value";-3)
 C_OBJECT($ob4)


 OB SET($ob4;"valueType";"integer")
 OB SET($ob4;"value";-3)
 OB SET($ob4;"behavior";"threeStates")
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld_behavior.png)

#### requiredList e choiceList

When a "choiceList" or a "requiredList" attribute is present inside the object, the text input is replaced by a drop-down list or a combo box, depending of the attribute:

- Se o atributo é "choiceList", a célula é apresentada como um combo box. Isto significa que o usuário pode selecionar ou escrever um valor.
- If the attribute is "requiredList" then the cell is displayed as a drop-down list and the user can only select one of the values provided in the list.

In both cases, a "value" attribute can be used to preselect a value in the widget.

> Os valores do widget são definidos através de um array. If you want to assign an existing 4D list to the widget, you need to use the "requiredListReference", "requiredListName", "choiceListReference", or "choiceListName" attributes.

Exemplos:

- You want to display a drop-down list with only two options: "Open" or "Closed". "Closed" deve ser pré-selecionada:

```4d
	ARRAY TEXT($RequiredList;0)
	APPEND TO ARRAY($RequiredList;"Open")
	APPEND TO ARRAY($RequiredList;"Closed")
	C_OBJECT($ob)
	OB SET($ob;"valueType";"text")
	OB SET($ob;"value";"Closed")
	OB SET ARRAY($ob;"requiredList";$RequiredList)
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld_openClosed.png)

- You want to accept any integer value, but display a combo box to suggest the most common values:

```4d
	ARRAY LONGINT($ChoiceList;0)
	APPEND TO ARRAY($ChoiceList;5)
	APPEND TO ARRAY($ChoiceList;10)
	APPEND TO ARRAY($ChoiceList;20)
	APPEND TO ARRAY($ChoiceList;50)
	APPEND TO ARRAY($ChoiceList;100)
	C_OBJECT($ob)
	OB SET($ob;"valueType";"integer")
	OB SET($ob;"value";10) //10 as default value
	OB SET ARRAY($ob;"choiceList";$ChoiceList)
```

![](../assets/en/FormObjects/listbox_column_objectArray_helloWorld_commonValues.png)

#### requiredListName e requiredListReference

The "requiredListName" and "requiredListReference" attributes allow you to use, in a list box cell, a list defined in 4D either in Design mode (in the Lists editor of the Tool box) or by programming (using the New list command). A célula será então apresentada como uma lista pendente. This means that the user can only select one of the values provided in the list.

Use "requiredListName" or "requiredListReference" depending on the origin of the list: if the list comes from the Tool box, you pass a name; otherwise, if the list has been defined by programming, you pass a reference. In both cases, a "value" attribute can be used to preselect a value in the widget.

> - If you want to define these values through a simple array, you need to use the "requiredList" attribute.
> - If the list contains text items representing real values, the decimal separator must be a period ("."), regardless of the local settings, e.g.: "17.6" "1234.456".

Exemplos:

- You want to display a drop-down list based on a "colors" list defined in the Tool box (containing the values "blue", "yellow", and "green"), save it as a value and display "blue" by default:

![](../assets/en/FormObjects/listbox_column_objectArray_colors.png)

```4d
	C_OBJECT($ob)
	OB SET($ob;"valueType";"text")
	OB SET($ob;"saveAs";"value")
	OB SET($ob;"value";"blue")
	OB SET($ob;"requiredListName";"colors")
```

![](../assets/en/FormObjects/listbox_column_objectArray_colorsResult.png)

- You want to display a drop-down list based on a list defined by programming and save it as a reference:

```4d
	<>List:=New list
	APPEND TO LIST(<>List;"Paris";1)
	APPEND TO LIST(<>List;"London";2)
	APPEND TO LIST(<>List;"Berlin";3)
	APPEND TO LIST(<>List;"Madrid";4)
	C_OBJECT($ob)
	OB SET($ob;"valueType";"integer")
	OB SET($ob;"saveAs";"reference")
	OB SET($ob;"value";2) //displays London by default
	OB SET($ob;"requiredListReference";<>List)
```

```
../assets/en/FormObjects/listbox_column_objectArray_cities.png
```

#### choiceListName e choiceListReference

The "choiceListName" and "choiceListReference" attributes allow you to use, in a list box cell, a list defined in 4D either in Design mode (in the Tool box) or by programming (using the New list command). The cell is then displayed as a combo box, which means that the user can select or type a value.

Use "choiceListName" or "choiceListReference" depending on the origin of the list: if the list comes from the Tool box, you pass a name; otherwise, if the list has been defined by programming, you pass a reference. In both cases, a "value" attribute can be used to preselect a value in the widget.

> - If you want to define these values through a simple array, you need to use the "choiceList" attribute.
> - If the list contains text items representing real values, the decimal separator must be a period ("."), regardless of the local settings, e.g.: "17.6" "1234.456".

Exemplo:

You want to display a combo box based on a "colors" list defined in the Tool box (containing the values "blue", "yellow", and "green") and display "green" by default:

![](../assets/en/FormObjects/listbox_column_objectArray_colors.png)

```4d
 C_OBJECT($ob)
 OB SET($ob;"valueType";"text")

 OB SET($ob;"value";"blue")
 OB SET($ob;"choiceListName";"colors")
```

![](../assets/en/FormObjects/listbox_column_objectArray_colorsResult.png)

#### unitsList, unitsListName, unitsListReference e unitReference

Você pode usar atributos específicos para adicionar unidades associadas aos valores das células (por exemplo: "10 cm", "20 pixels" etc.). Para definir a lista de unidades, pode utilizar um dos seguintes atributos:

- "unitsList": an array containing the x elements used to define the available units (e.g.: "cm", "inches", "km", "miles", etc.). Utilize este atributo para definir unidades no interior do objeto.
- "unitsListReference": uma referência de lista 4D que contém as unidades disponíveis. Use esse atributo para definir unidades com uma lista 4D criada com o comando [New list] (https://doc.4d.com/4Dv15/4D/15.6/New-list.301-3818474.en.html).
- "unitsListName": a name of a design-based 4D list that contains available units. Utilize este atributo para definir unidades com uma lista 4D criada na caixa de ferramentas.

Regardless of the way the unit list is defined, it can be associated with the following attribute:

- "unitReference": a single value that contains the index (from 1 to x) of the selected item in the "unitList", "unitsListReference" or "unitsListName" values list.

A unidade atual é exibida como um botão que percorre os valores "unitList", "unitsListReference" ou "unitsListName" sempre que é clicado (por exemplo, "pixels" -> "rows" -> "cm" -> "pixels" -> etc.)

Exemplo:

We want to set up a numeric input followed by two possible units: "rows" or "pixels". O valor atual é "2" + "linhas". Utilizamos valores definidos diretamente no objeto (atributo "unitsList"):

```4d
ARRAY TEXT($_units;0)
APPEND TO ARRAY($_units;"lines")
APPEND TO ARRAY($_units;"pixels")
C_OBJECT($ob)
OB SET($ob;"valueType";"integer")
OB SET($ob;"value";2) // 2 "units" OB SET($ob;"unitReference";1) //"lines" OB SET ARRAY($ob;"unitsList";$_units)
```

![](../assets/en/FormObjects/listbox_column_objectArray_unitList.png)

#### alternateButton

Se você quiser adicionar um botão de elipses [...] para uma célula, basta passar o "alternateButton" com o valor True no objeto. O botão será automaticamente apresentado na célula.

Quando esse botão for clicado por um usuário, será gerado um evento `On Alternate Click`, e você poderá tratá-lo como quiser (consulte o parágrafo "Gerenciamento de eventos" para obter mais informações).

Exemplo:

```4d
C_OBJECT($ob1)
$entry:="Hello world!"
OB SET($ob;"valueType";"text")
OB SET($ob;"alternateButton";True)
OB SET($ob;"value";$entry)
```

![](../assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

#### valueType color

O valueType "color" permite-lhe apresentar uma cor ou um texto.

- Se o valor for um número, é desenhado um retângulo colorido no interior da célula. Exemplo:

  ```4d
  C_OBJECT($ob4)
  OB SET($ob4;"valueType";"color")
  OB SET($ob4;"value";0x00FF0000)
  ```

![](../assets/en/FormObjects/listbox_column_objectArray_colorValue.png)

- Si el valor es un texto, entonces se muestra el texto (*por ejemplo*: "valor"; "Automatic").

#### event valueType

El "event" valueType muestra un botón que genera un evento `On Clicked` al ser presionado. Nenhum dado ou valor pode ser transmitido ou devolvido.

Opcionalmente, pode passar um atributo "label".

Exemplo:

```4d
C_OBJECT($ob)
OB SET($ob;"valueType";"event")
OB SET($ob;"label";"Edit...")
```

![](../assets/en/FormObjects/listbox_column_objectArray_eventValueType.png)

### Gestão de eventos

Vários eventos podem ser tratados durante o uso de um list box array de objetos:

- **On Data Change**: um evento `On Data Change` é acionado quando qualquer valor é modificado:
  - numa zona de introdução de texto
  - numa lista pendente
  - numa área combo box
  - num botão de unidade (mudar do valor x para o valor x+1)
  - numa caixa de verificação (alternar entre verificado/não verificado)
- **On Clicked**: quando o usuário clicar em um botão instalado usando o atributo "event" *valueType*, será gerado um evento `On Clicked`. Este evento é gerido pelo programador.
- **On Alternative Click**: quando o usuário clicar em um botão de reticências (atributo "alternateButton"), será gerado um evento `On Alternative Click`. Este evento é gerido pelo programador.
