---
id: listbox-get-arrays
title: LISTBOX GET ARRAYS
slug: /commands/listbox-get-arrays
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET ARRAYS.Syntax-->**LISTBOX GET ARRAYS** ( {* ;} *objeto* ; *arrNomsCols* ; *arrNomsTitulos* ; *arrVarCols* ; *arrVarTitulos* ; *arrColsVisiveis* ; *arrEstilos* {; *arrFooterNames* ; *arrFootersVars*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET ARRAYS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * for omitido) |
| arrNomsCols | Text array | &#8592; | Nomes de objetos de colunas |
| arrNomsTitulos | Text array | &#8592; | Nomes dos objetos títulos cabeçalhos |
| arrVarCols | Pointer array | &#8592; | Ponteiros para variáveis de colunas ou Ponteiros para campos coluna ou Nil |
| arrVarTitulos | Pointer array | &#8592; | Ponteiros para variáveis de título |
| arrColsVisiveis | Boolean array | &#8592; | Visibilidade de cada coluna |
| arrEstilos | Pointer array | &#8592; | Ponteiros para arrays ou estilos, cores e variáveis de visibilidade ou Nil |
| arrFooterNames | Text array | &#8592; | Nomes de objetos do rodapé da coluna |
| arrFootersVars | Pointer array | &#8592; | Ponteiros para variáveis de rodapé de coluna |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX GET ARRAYS.Summary-->O comando **LISTBOX GET ARRAYS** devolve um conjunto de arrays sincronizados oferecendo informação sobre cada coluna (visível ou invisível) do list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passa o parâmetro opcional \*, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*. 

Quando se executa o comando:   
• o array *arrNomsCol*s contém a lista dos nomes dos objetos para cada coluna da list box.   
• o array *arrNomsTitulos* contém a lista dos nomes dos objetos para cada título de coluna do list box.   
• o array *arrVarCols* contém os ponteiros até as variáveis (arrays) associadas a cada coluna da list box. Para um listbox de tipo seleção, arrColVars contém:   
 \- Para uma coluna associada a um campo, um ponteiro ao campo associado,   
 \- Para uma coluna associada a uma variável, um ponteiro a variável,   
 \- Para uma coluna associada a uma expressão, um ponteiro Nil.  
• o array *arrVarTitulos* contém ponteiros até as variáveis associadas a cada título de coluna do list box.   
• o array *arrColVisiveis* contém um valor Booleano para cada coluna, indicando se a coluna é visível ([True](true.md "True")) ou oculta ([False](false.md "False")) no list box.   
• o array *arrEstilos* contém os três ponteiros até os três arrays que permitem aplicar um estilo específico, uma cor de fonte e uma cor de fundo a cada fila da list box. Estes arrays são associados no list box na Lista de propriedades do ambiente Desenho. Se um array não for especificado para a list box, o elemento correspondente em *arrEstilos* conterá um ponteiro Nil.  
O quarto ponteiro corresponde seja a um array booleano (array de linhas ocultas), ou a um array inteiro longo (array utilizado para definir as linhas ocultas, desativadas e não selecionáveis), em função da implementação utilizada para o array de controle de linhas (ver *Propriedades específicas dos list Box*).

Para seleção de registro, list boxes do tipo coleção ou seleção de entidade arrStyles contém: :  
\- Por cada configuração definida através de uma variável, um ponteiro a variável,  
\- Por cada configuração definida através de uma expressão, um ponteiro Nil.

#### Ver também 

[LISTBOX Get array](listbox-get-array.md)  
[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET ARRAY](listbox-set-array.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 832 |
| Thread-seguro | &cross; |


