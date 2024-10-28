---
id: listbox-get-cell-coordinates
title: LISTBOX GET CELL COORDINATES
slug: /commands/listbox-get-cell-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET CELL COORDINATES.Syntax-->**LISTBOX GET CELL COORDINATES** ( {* ;} *objeto* ; *coluna* ; *linha* ; *esquerda* ; *superior* ; *direita* ; *inferior* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET CELL COORDINATES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado = objeto é um nome de objeto (cadeia) |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou variável (se * for omitido) |
| coluna | Integer | &#8594;  | Número de coluna |
| linha | Integer | &#8594;  | Número de linha |
| esquerda | Integer | &#8592; | Coordenada esquerda do objeto |
| superior | Integer | &#8592; | Coordenada superior do objeto |
| direita | Integer | &#8592; | Coordenada direita do objeto |
| inferior | Integer | &#8592; | Coordenada inferior do objeto |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX GET CELL COORDINATES.Summary-->O comando LISTBOX GET CELL COORDINATES devolve nas variáveis ou campos *esq*, *sup*, *dir* e *inf* as coordenadas (em pontos) da célula designada pelos parâmetros *coluna* e *linha*, no list box definido por *\** e *objeto*.<!-- END REF-->

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passar o parâmetro opcional *\**, indica que o objeto é um campo ou uma variável. Neste caso, passa uma referência de campo ou variável (campo ou variável de tipo de objeto unicamente) em vez de uma cadeia.

Por coerência com o comando *OBJECT GET COORDINATES*, a origem é a esquina superior esquerda do formulário que contém a célula. Além disso, as coordenadas devolvidas são teóricas; que levam em conta o estado de deslocamento do list box antes de que ocorra qualquer recorte. Como resultado, a célula pode ser não visível (ou só parcialmente) em suas coordenadas, e estas coordenadas podem estar fora dos limites do formulário (ou inclusive negativas). Para saber se a célula é visível (e que parte dela é visível) é necessário comparar as coordenadas devolvidas com as coordenadas do listbox, levando em conta as seguintes regras:  
* Todas as células se cortam com as coordenadas de seu list box pai (como os devolvidos por *OBJECT GET COORDINATES* no list box).
* Os Sub-objetos cabeçalho e rodapé de página se mostram sobre o conteúdo da coluna: quando as coordenadas de uma célula se cruzam as coordenadas das linhas de cabeçalho ou rodapé de página, a célula não é mostrada nesta interseção.
* Os elementos das colunas bloqueadas são mostradas sobre os elementos das colunas deslocáveis: quando as coordenadas de um elemento em uma coluna deslocável cruzam as coordenadas de uma coluna bloqueada, então que não é mostrada nesta interseção.

Para mais informação, consulte a descrição do comando *OBJECT GET COORDINATES*.

#### Exemplo 

Você quer desenhar um retângulo vermelho arredor da célula selecionada de um listbox:

```4d
 OBJECT SET VISIBLE(*;"RedRect";False) //inicializar um retângulo vermelho
  //o rectângulo é definido em algum lugar já sob a forma
 LISTBOX GET CELL POSITION(*;"LB1";$col;$row)
 LISTBOX GET CELL COORDINATES(*;"LB1";$col;$row;$x1;$y1;$x2;$y2)
 OBJECT SET VISIBLE(*;"RedRect";True)
 OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
```

![](../assets/en/commands/pict1741070.en.png)

#### Ver também 

[LISTBOX GET CELL POSITION](listbox-get-cell-position.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  