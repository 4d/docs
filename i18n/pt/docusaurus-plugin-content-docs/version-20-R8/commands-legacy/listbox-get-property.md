---
id: listbox-get-property
title: LISTBOX Get property
slug: /commands/listbox-get-property
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get property.Syntax-->**LISTBOX Get property** ( {* ;} *objeto* ; *propriedade* ) : any<!-- END REF-->
<!--REF #_command_.LISTBOX Get property.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| propriedade | Integer | &#8594;  | Informação a obter |
| Resultado | Integer, Text | &#8592; | Valor atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX Get property.Summary-->O comando **LISTBOX Get property** devolve diferente informação relacionada com o tamanho e a visibilidade dos títulos e as barras de rolagem do objeto list box designado usandoos parâmetros *objeto* e *\**.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos* .  
  
Nota: se o list box ou coluna especificado utilizando os parâmetros objeto e \* não existir, o comando LISTBOX Get property devolve -1 para as propriedades numéricas ou uma string vazia.  
  
No parâmetro *propriedade*, passe um valor indicando o tipo de informação que queira obter. Pode utilizar um valor ou uma das seguintes constantes do tema *List box*:

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

\*Estas propriedades só se aplicam às colunas list box; se passar um list box como parâmetro com uma destas propriedades, LISTBOX Get property devolve -1, ou uma string vazia, dependendo da propriedade passada.

  
Em geral, para indicar um resultado não válido LISTBOX Get property devolve -1 ao recuperar as propriedades que têm valores numéricos, ou uma string vazia; Entretanto, não são gerados erros. Mais específicamente, isto ocorre nos seguintes casos:  
  
 Se passar uma propriedade que não existir  
 Se passar uma propriedade que não está disponível para a list box ou coluna especificada, por exemplo, pode passar a propriedade lk font color expression com um list box de tipo array  
 Se passar uma coluna como parâmetro com uma propriedade que se aplique a um list box, e viceversa, se passar um list box como parâmetro com uma propriedade que se aplique a uma coluna (ver acima \*)  
  
Além disso, não é possível devolver valores de mais de uma coluna por vez; se tentar utilizar o símbolo "@" a parte do nome de coluna para indicar várias colunas com nomes similares, LISTBOX Get property devolve o primeiro valor coincidente que encontre; como resultado, o valor devolvido não tem verdadeira importância.

* As constantes lk display footer e lk display header são úteis para calcular o tamanho de uma área de list box em um formulário.
* Quando utilize as constantes lk hor scrollbar position ou lk ver scrollbar position, o comando **LISTBOX Get property** devolve a posição do cursor de rolagem em relação com sua posição original, ou seja, o tamanho da parte oculta da janela, expresso em píxels. Como padrão, esta posição corresponde a 0\. Combinando, por exemplo, com informação relativa à altura da fila, este valor lhe permite encontrar o conteúdo mostrado no listbox. Entretanto, estas constantes são obsoletas e podem ser substituídas pelo comando [OBJECT GET SCROLL POSITION](object-get-scroll-position.md).
* A declaração **LISTBOX Get property**(vLB;lk footer height) retorna o mesmo valor que o comando [LISTBOX Get footers height](listbox-get-footers-height.md) quando rodapés são exibidos. No entanto, se rodapés não são exibidos, **LISTBOX Get property** retornas 0 enquanto [LISTBOX Get footers height](listbox-get-footers-height.md) ainda retorna a altura, neste caso teórico, dos rodapés.

#### Exemplo 1 

Dado um listbox"MyListbox", é executada a seguinte instrução:

```4d
 $Value:=LISTBOX Get property(*;"MyListbox";lk selection mode) // o valor devolvido indica o modo de seleção
```

Neste caso, o resultado devolvido indica se várias linhas podem ser selecionadas.

#### Exemplo 2 

Dado um list box "MyListbox", é executada a seguinte instrução:

```4d
 $resizable:=LISTBOX Get property(*;"MyListbox";lk column resizable)
```

**LISTBOX Get property** devolve -1 porque a propriedade lk column resizable aplica a colunas e um list box foi passado como parâmetro.

#### Ver também 

[LISTBOX SET GRID](listbox-set-grid.md)  
[LISTBOX SET PROPERTY](listbox-set-property.md)  
[OBJECT SET SCROLLBAR](object-set-scrollbar.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 917 |
| Thread-seguro | &cross; |


