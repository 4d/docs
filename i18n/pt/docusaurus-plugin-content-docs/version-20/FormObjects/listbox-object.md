---
id: listbox-object
title: List Box Object
---

## List box de tipo array

Em um list box de tipo array, cada coluna deve estar associada a um array unidimensional 4D; podem ser utilizados todos os tipos de array, com exceção dos arrays de ponteiros. O número de linhas é baseado no número de elementos array.

Como padrão, 4D atribui o nome "ColumnX" para cada coluna. Você pode alterá-lo, assim como outras propriedades de coluna, nas [propriedades das colunas](listbox-column.md#column-specific-properties). O formato de exibição de cada coluna também pode ser definido com o comando `OBJECT SET FORMAT`.

> Os list boxes do tipo array podem ser exibidos em [modo hierárquico](listbox_overview.md#hierarchical-list-boxes), com mecanismos específicos.

Com list box de tipo array, o valor ingressado ou exibido são gerenciados usando a linguagem 4D. Você também pode associar uma [lista de opções](properties_DataSource.md#choice-list) a uma coluna para controlar a entrada de dados.
Os valores das colunas são gerenciados através de comandos List box de alto nível (como `LISTBOX INSERT ROWS` ou `LISTBOX DELETE ROWS`), bem como por comandos de manipulação de arrays. The values of columns are managed using high-level List box commands (such as [`LISTBOX INSERT ROWS`](../commands/listbox-insert-rows) or [`LISTBOX DELETE ROWS`](../commands/listbox-delete-rows)) as well as array manipulation commands.

```4d
ARRAY TEXT(varCol;size)
```

Também pode usar uma lista:

```4d
LIST TO ARRAY("ListName";varCol)
```

> **Aviso**: quando uma list box contiver vários tamanhos diferentes de coluna, só o número de itens do menor array (coluna) será exibido. Tem que verificar que cada array tenha o mesmo número de elementos que os outros. Além disso, se uma coluna list box for vazia (isso ocorre quando o array associado não for corretamente declarado ou dimensionado usando a linguagem), a list box não exibe nada.

## List box de tipo seleção

Nesse tipo de list box, cada coluna pode ser associada com um campo (por exemplo, `[Employees]LastName)` ou uma expressão. A expressão pode ser baseada em um ou mais campos (por exemplo, `[Employees]FirstName+" "[Employees]LastName`) ou pode ser simplesmente uma fórmula (por exemplo, `String(Milliseconds)`). A expressão também pode ser um método de proejeto, uma variável ou um item array. A expressão também pode ser um método de proejeto, uma variável ou um item array.

O conteúdo de cada linha é então avaliado de acordo com uma seleção de registros: a **seleção atual** de uma tabela ou uma **seleção nomeada**.

No caso de uma list box baseada na seleção atual de uma tablea, qualquer modificação feita do lado da database é refletida automaticamente na list box e vice versa. A seleção atual é portanto sempre a mesma em ambos os lugares.

## List boxes Collection ou Entity selection

Nesse tipo de list box, cada coluna deve ser associada a uma expressão. Os conteúdos de cada linha são então avaliados por elemento de coleção ou por entidade da seleção de entidade.

Cada elemento da coleção ou cada entidade está disponível como um objeto que pode ser acessado por meio da palavra-chave [This](../Concepts/classes.md#this). A column expression can be a property path, a project method, a variable, or any formula, accessing each entity or collection element object through `This`, for example `This.<propertyPath>` (or `This.value` in case of a collection of scalar values). A expressão também pode ser um método de proejeto, uma variável ou um item array.

Quando a fonte de dados for uma seleção de entidades, qualquer modificação feita no lado da list box são salvas automaticamente na database. Do outro lado, modificações feitas na database são visíveis na list box depois que as entidades tocadas foram recarregadas.

Quando a fonte de dados for uma coleção, qualquer modificação feita nos valores da list box são refletidas na coleção. Por outro lado, se forem feitas modificações na coleção usando, por exemplo, as várias funções da [classe Collection](.../API/CollectionClass.md), você precisará notificar explicitamente o 4D reatribuindo a variável da coleção a ela mesma, para que o conteúdo do list box seja atualizado. Por exemplo:

```4d
myCol:=myCol.push("new value") //exibir novo valor na list box
```

### Propriedades compatíveis

Propriedades compatíveis dependem do tipo de list box.

| Propriedade                                                                                  | List box array | List box seleção | List box coleção ou entity selection |
| -------------------------------------------------------------------------------------------- | -------------- | ---------------- | ------------------------------------ |
| [Cor de fundo alternativa](properties_BackgroundAndBorder.md#alternate-background-color)     | X              | X                | X                                    |
| [Cor de Fundo](properties_BackgroundAndBorder.md#background-color--fill-color)               | X              | X                | X                                    |
| [Negrito](properties_Text.md#bold)                                                           | X              | X                | X                                    |
| [Expressão de cor de fundo](properties_BackgroundAndBorder.md#background-color-expression)   |                | X                | X                                    |
| [Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style)              | X              | X                | X                                    |
| [Inferior](properties_CoordinatesAndSizing.md#bottom)                                        | X              | X                | X                                    |
| [Classe](properties_Object.md#css-class)                                                     | X              | X                | X                                    |
| [Seleção de coleção ou entidade](properties_Object.md#collection-or-entity-selection)        |                | X                | X                                    |
| [Redimensionamento automático de coluna](properties_ResizingOptions.md#column-auto-resizing) | X              | X                | X                                    |
| [Item atual](properties_DataSource.md#current-item)                                          |                |                  | X                                    |
| [Posição atual do item](properties_DataSource.md#current-item-position)                      |                |                  | X                                    |
| [Fonte de dados](properties_Object.md#data-source)                                           | X              | X                | X                                    |
| [Nome do formulário de detalhes](properties_ListBox.md#detail-form-name)                     |                | X                |                                      |
| [Exibir cabeçalhos](properties_Headers.md#display-headers)                                   | X              | X                | X                                    |
| [Exibir rodapés](properties_Footers.md#display-footers)                                      | X              | X                | X                                    |
| [Clique duas vezes na linha](properties_ListBox.md#double-click-on-row)                      |                | X                |                                      |
| [Draggable](properties_Action.md#droppable)                                                  | X              | X                | X                                    |
| [Droppable](properties_Action.md#droppable)                                                  | X              | X                | X                                    |
| [Focusable](properties_Entry.md#focusable)                                                   | X              | X                | X                                    |
| [Fonte](properties_Text.md#font)                                                             | X              | X                | X                                    |
| [Cor da fonte](properties_Text.md#font-color)                                                | X              | X                | X                                    |
| [Expressão de Cor da Fonte](properties_Text.md#font-color-expression)                        |                | X                | X                                    |
| [Tamanho fonte](properties_Text.md#font-size)                                                | X              | X                | X                                    |
| [Altura (list box)](properties_CoordinatesAndSizing.md#height)            | X              | X                | X                                    |
| [Altura (cabeçalhos)](properties_Headers.md#height)                       | X              | X                | X                                    |
| [Altura (rodapés)](properties_Footers.md#height)                          | X              | X                | X                                    |
| [Ocultar linhas em branco extras](properties_BackgroundAndBorder.md#hide-extra-blank-rows)   | X              | X                | X                                    |
| [Ocultar retângulo de foco](properties_Appearance.md#hide-focus-rectangle)                   | X              | X                | X                                    |
| [Ocultar destaque de seleção](properties_Appearance.md#hide-selection-highlight)             | X              | X                | X                                    |
| [List Box hierárquico](properties_Object.md#array-list-box)                                  | X              |                  |                                      |
| [Highlight Set](properties_ListBox.md#highlight-set)                                         |                | X                |                                      |
| [Alinhamento Horizontal](properties_Text.md#horizontal-alignment)                            | X              | X                | X                                    |
| [Horizontal Line Color](properties_Gridlines.md#horizontal-line-color)                       | X              | X                | X                                    |
| [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar)                      | X              | X                | X                                    |
| [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing)                | X              | X                | X                                    |
| [Italic](properties_Text.md#italic)                                                          | X              | X                | X                                    |
| [Left](properties_CoordinatesAndSizing.md#left)                                              | X              | X                | X                                    |
| [Tabela mestre](properties_DataSource.md#master-table)                                       |                | X                |                                      |
| [Meta info expression](properties_Text.md#meta-info-expression)                              |                |                  | X                                    |
| [Método](properties_Action.md#method)                                                        | X              | X                | X                                    |
| [Movable Rows](properties_Action.md#movable-rows)                                            | X              |                  |                                      |
| [Seleção temporária](properties_DataSource.md#selection-name)                                |                | X                |                                      |
| [Number of Columns](properties_ListBox.md#number-of-columns)                                 | X              | X                | X                                    |
| [Number of Locked Columns](properties_ListBox.md#number-of-locked-columns)                   | X              | X                | X                                    |
| [Number of Static Columns](properties_ListBox.md#number-of-static-columns)                   | X              | X                | X                                    |
| [Object Name](properties_Object.md#object-name)                                              | X              | X                | X                                    |
| [Right](properties_CoordinatesAndSizing.md#right)                                            | X              | X                | X                                    |
| [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array)   | X              |                  |                                      |
| [Row Control Array](properties_ListBox.md#row-control-array)                                 | X              |                  |                                      |
| [Row Font Color Array](properties_Text.md#row-font-color-array)                              | X              |                  |                                      |
| [Row Height](properties_CoordinatesAndSizing.md#row-height)                                  | X              |                  |                                      |
| [Row Height Array](properties_CoordinatesAndSizing.md#row-height-array)                      | X              |                  |                                      |
| [Row Style Array](properties_Text.md#row-style-array)                                        | X              |                  |                                      |
| [Selected Items](properties_DataSource.md#selected-items)                                    |                |                  | X                                    |
| [Selection Mode](properties_ListBox.md#selection-mode)                                       | X              | X                | X                                    |
| [Edição com um único clique](properties_Entry.md#single-click-edit)                          | X              | X                | X                                    |
| [Ordenável](properties_Action.md#sortable)                                                   | X              | X                | X                                    |
| [Ação padrão](properties_Action.md#standard-action)                                          | X              |                  |                                      |
| [Expressão de estilo](properties_Text.md#style-expression)                                   |                | X                | X                                    |
| [Top](properties_CoordinatesAndSizing.md#top)                                                | X              | X                | X                                    |
| [Transparente](properties_BackgroundAndBorder.md#transparent)                                | X              | X                | X                                    |
| [Tipo](properties_Object.md#type)                                                            | X              | X                | X                                    |
| [Sublinhado](properties_Text.md#underline)                                                   | X              | X                | X                                    |
| [Variável ou Expressão](properties_Object.md#variable-or-expression)                         | X              | X                |                                      |
| [Alinhamento vertical](properties_Text.md#vertical-alignment)                                | X              | X                | X                                    |
| [Cor da linha vertical](properties_Gridlines.md#vertical-line-color)                         | X              | X                | X                                    |
| [Barra de rolagem vertical](properties_Appearance.md#vertical-scroll-bar)                    | X              | X                | X                                    |
| [Tamanho Vertical](properties_ResizingOptions.md#vertical-sizing)                            | X              | X                | X                                    |
| [Visibilidade](properties_Display.md#visibility)                                             | X              | X                | X                                    |
| [Largura](properties_CoordinatesAndSizing.md#width)                                          | X              | X                | X                                    |

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

#### Additional Properties {#additional-properties}

Os eventos formulário nos list box ou colunas de list box podem retornar as seguintes propriedades adicionais:

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

> Se um evento ocorrer em uma coluna ou linha "falsa" que não exista, é normalmente retornada uma cadeia de caracteres vazia.
