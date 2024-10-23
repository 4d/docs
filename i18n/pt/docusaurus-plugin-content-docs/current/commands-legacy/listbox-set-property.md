---
id: listbox-set-property
title: LISTBOX SET PROPERTY
slug: /commands/listbox-set-property
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET PROPERTY.Syntax-->**LISTBOX SET PROPERTY** ( {* ;} *objeto* ; *propriedade* ; *valor* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET PROPERTY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou Variável (se * for omitido) |
| propriedade | Integer | &#8594;  | Propriedade List box ou coluna |
| valor | Integer, Text | &#8594;  | Valor de propriedade |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX SET PROPERTY.Summary-->O comando **LISTBOX SET PROPERTY** define o *valor* da *propriedade* da coluna list box ou list box especificada utilizando os parâmetros *objeto* e *\**.<!-- END REF-->

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto é* um nome de objeto (string). Se não passar este parâmetro, indica que o parâmetro *objeto* for uma variável. Neste caso, se passar uma referência variável ao invés de uma string.

**Nota:** se o list box ou a coluna list box especificada utilizando os parâmetros *objeto* e *\** não existe, o comando não faz nada e não se dispara nenhum erro.

Nos parâmetros *propriedade e valor*, se indica, respectivamente, a propriedade a definir utilizando seu novo valor. Pode usar uma das constantes do tema:“*List box*”:

| Constante                      | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk allow wordwrap              | 14    | Propriedade **Retorno de linha**<br/>Aplica a: Coluna\*<br/>Valores possíveis:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                                |
| lk auto row height             | 31    | Propriedade **Altura de fila automática**. <br/>Aplica a: List box ou coluna<br/>Valores possíveis:lk yes lk no**4D View Pro apenas:** esta funcionalidade requer uma licença 4D View Pro. Para mais informação, consulte *4D View Pro*.                                                                                                      |
| lk background color expression | 22    | **Propriedade Background Color Expression** para list box de tipo seleção<br/>Aplica a: List box ou coluna                                                                                                                                                                                                                                            |
| lk cell horizontal padding     | 36    | Padding horizontal da célula em pixels (mesmo valor para a distância da borda ao conteúdo a partir da esquerda ou direita) Se aplica a: list box, coluna, cabeçalho rodapé                                                                                                                                                                                    |
| lk cell vertical padding       | 37    | Padding vertical da célula em pixels (mesmo valor para a distância do conteúdo à borda superior ou inferior) Se aplica a: list box, coluna, cabeçalho, rodapé                                                                                                                                                                                                 |
| lk column max width            | 26    | Propriedade **Maximum Width**<br/>Aplica a: Coluna\*                                                                                                                                                                                                                                                                                                  |
| lk column min width            | 25    | **Minimum Width** propriedade<br/>Aplicada a: Coluna\*                                                                                                                                                                                                                                                                                                |
| lk column resizable            | 15    | Propriedade **Resizable** <br/>Aplica a: Coluna\*<br/>Valores possíveis:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                                      |
| lk detail form name            | 19    | Propriedade **Detail Form Name** para a seleção de tipo list box <br/>Aplica a: List box                                                                                                                                                                                                                                                              |
| lk display footer              | 8     | 0=oculto, 1=mostrado                                                                                                                                                                                                                                                                                                                                          |
| lk display header              | 0     | 0=oculto, 1=mostrado                                                                                                                                                                                                                                                                                                                                          |
| lk display type                | 21    | Propriedade **Tipo de visualização** para colunas numéricas <br/>Aplica a: Coluna\*<br/>Valores possíveis:**<br/>**lk numeric format (0): mostra valores em formato numéricolk three states checkbox (1): mostra valores como caixas de seleção de três estados                                                                       |
| lk double click on row         | 18    | Propriedade **Duplo clique na linha** para os list box de tipo seleção<br/>Aplica a: List box<br/>Valores possíveis:lk do nothing (0): não desencadeia nenhuma ação automáticalk edit record (1): mostra o registro correspondente em modo leitura-escrituralk display record (2): mostra o registro correspondente em modo de apenas leitura |
| lk extra rows                  | 13    | Propriedade **Ocultar linhas vazias finais** <br/>Aplica a: List box<br/>Valores possíveis:**<br/>**lk display (0)lk hide (1)                                                                                                                                                                                                         |
| lk font color expression       | 23    | Propriedade **Expressão cor fonte**para list box de tipo seleção<br/>Aplica a: List box ou coluna                                                                                                                                                                                                                                                     |
| lk font style expression       | 24    | Propriedade **Expressão estilo** para list boxes de tipo seleção e coleção<br/>Aplica a: List box ou coluna<br/>                                                                                                                                                                                                                              |
| lk hide selection highlight    | 16    | Propriedade **Ocultar ressaltado de seleção**<br/>Aplica a: List box<br/>Valores possíveis:**<br/>**lk no (0)lk yes (1)                                                                                                                                                                                                               |
| lk highlight set               | 27    | **Highlight Set** propriedade para seleção tipo list box<br/>Aplica a: List box                                                                                                                                                                                                                                                                       |
| lk hor scrollbar height        | 3     | Altura em pixels                                                                                                                                                                                                                                                                                                                                              |
| lk meta expression             | 34    | Propriedade **Expression** **Meta Info** dos list box de tipo coleção ou seleção de entidades.<br/>Aplica a: List box                                                                                                                                                                                                                                 |
| lk movable rows                | 35    | A propriedade **Linhas móveis** para list box de tipo array <br/>Se aplica a: List box (excluindo o modo hierárquico) <br/>Valores possíveis: lk no (0): as linhas não podem ser movidas o se pueden mover durante execução lk yes (1): as linhas podem ser movidas durante execução (pré-determinado)                                        |
| lk multi style                 | 30    | **Multi-style** propriedade <br/>Aplica a: Column\*<br/>Valores possíveis:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                                    |
| lk named selection             | 28    | Propriedade **Named Selection** para list box de tipo seleção<br/>Aplica a: List box                                                                                                                                                                                                                                                                  |
| lk resizing mode               | 11    | **Column Auto-Resizing** proriedade <br/>Aplica a: List box<br/>Possíveis valores:<br/>lk manual (0)lk automatic (2)                                                                                                                                                                                                                  |
| lk row height unit             | 17    | Unidade de propriedade **Row Height** <br/>Aplica a: List box<br/>Possíveis valores:**<br/>**lk lines (1)<br/>lk pixels (0)<br/>                                                                                                                                                                                      |
| lk selection mode              | 10    | Propriedade **Selection Mode** <br/>Aplica a: List box<br/>Valores possíveis: **<br/>**lk none (0)<br/>lk single (1)<br/>lk multiple (2)                                                                                                                                                                              |
| lk single click edit           | 29    | Propriedade **Single-Click Edit**<br/>Aplica a: List box<br/>Possíveis valores:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                               |
| lk sortable                    | 20    | **Propriedade** Sortable <br/>Aplica a: List box<br/>Valores possíveis:**<br/>**lk no (0)lk yes (1)                                                                                                                                                                                                                                   |
| lk truncate                    | 12    | Propriedade **Truncate with ellipsis** <br/>Aplica a: List box ou coluna<br/>Valores possiveis:**<br/>**lk without ellipsis (0)lk with ellipsis (1)                                                                                                                                                                                   |
| lk ver scrollbar width         | 5     | Largura em pixels.                                                                                                                                                                                                                                                                                                                                            |

\*Estas propriedades só podem ser aplicadas à colunas list box; Entretanto, se passar um list box como parâmetro, **LISTBOX SET PROPERTY** aplica a *propriedade* a cada coluna de list box.

**Nota:** se passar uma *propriedade* que não existir, o que não está disponível para o list box ou coluna especificado, por exemplo lk font style expression no caso de um list box de tipo array, o comando não faz nada e não se dispara nenhum erro.

#### Exemplo 1 

Se quiser ter certeza de que todas as colunas de list box "MyListbox" sejam redimensionáveis:

```4d
 LISTBOX SET PROPERTY(*;"MyListbox";lk column resizable;lk yes) //Todas as colunas de list box "MyListbox" são definidas como redimensionáveis
```

#### Exemplo 2 

Se quiser definir a largura máxima da coluna "ProductNumber":

```4d
 LISTBOX SET PROPERTY(*;"ProductNumber";lk column max width;200) //Esta coluna terá uma largura máxima de 200
```

#### Ver também 

  
*List box*  
[LISTBOX Get property](listbox-get-property.md)  