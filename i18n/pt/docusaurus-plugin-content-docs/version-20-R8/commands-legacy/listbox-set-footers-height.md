---
id: listbox-set-footers-height
title: LISTBOX SET FOOTERS HEIGHT
slug: /commands/listbox-set-footers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Syntax-->**LISTBOX SET FOOTERS HEIGHT** ( {* ;} *objeto* ; *altura* {; *unidade*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| altura | Integer | &#8594;  | Alto de linha |
| unidade | Integer | &#8594;  | Unidade de valor de altura:0 ou se omitida = pixeles, 1 = linhas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Summary-->O comando **LISTBOX SET FOOTERS HEIGHT** modifica por programação a altura da linha de rodapé do list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->  
  
Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia.   
  
Passe no parâmetro *altura* a altura a definir. Por defeito, é omitido o parâmetro *unidade*, esta altura se expressa em pixeles. Para definir uma unidade diferente, pode passar uma das seguintes constantes (do tema *List box*), no parâmetro *unidade*:  
  
| Constante | Tipo          | Valor | Comentário                                                                                 |
| --------- | ------------- | ----- | ------------------------------------------------------------------------------------------ |
| lk lines  | Inteiro longo | 1     | A altura designa um número de linhas. 4D calcula a altura de uma linha em função da fonte. |
| lk pixels | Inteiro longo | 0     | A altura é o número de pixels (por padrão).                                                |
  
  
**Nota**: para obter mais informação sobre o cálculo das alturas de linhas, consulte o manual de *Desenho*.

#### Ver também 

[LISTBOX Get footers height](listbox-get-footers-height.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1145 |
| Thread-seguro | &cross; |


