---
id: listbox-sort-columns
title: LISTBOX SORT COLUMNS
slug: /commands/listbox-sort-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SORT COLUMNS.Syntax-->**LISTBOX SORT COLUMNS** ( {* ;} *objeto* ; *numColuna* ; *ordenar* {; *numColuna2* ; *ordenar2* ; ... ; *numColunaN* ; *ordenarN*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SORT COLUMNS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| numColuna | Integer | &#8594;  | Número da coluna a ordenar |
| ordenar | * | &#8594;  | ">" para ordernar em ordem ascendente ou "<" para ordenar em ordem descendente |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX SORT COLUMNS.Summary-->O comando LISTBOX SORT COLUMNS \[descv\] ordena as filas do list box designado pelos parâmetros objeto e \* em função dos valores de uma ou várias colunas.<!-- END REF-->\[#/descv\]

Nota: uma ordenação padrão se aplica em bancos de dados a um único valor de coluna quando o usuário clicar no cabeçalho da coluna (ver *Ordenação padrão*).

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*.

Em *numCol*, passe o número de coluna cujos valores quer utilizar como critério de ordenação. Pode utilizar todo tipo de dados, a exceção de imagens e ponteiros.

Em *ordem*, passe o símbolo > ou < para indicar o critério de ordenação. Se *ordem* contém o símbolo “maior que”(>), o critério de ordenação é ascendente. Se *ordem* contém o símbolo “menor que” (<), o critério de ordenação es descendente.

Pode definir ordenações multiniveis: para fazer isso, passe tantos pares (*numCol;orden*) como seja necessário. O nível de ordenação é definido pela posição do parâmetro na chamada.

Conforme com o princípio de funcionamento do list box, as colunas estão sincronizadas, o que significa que a ordenação de uma coluna repercute automaticamente em todas as outras colunas do objeto.

Nota: O comando LISTBOX SORT COLUMNS não leva em consideração a propriedade de listbox *Ordenável* .
