---
id: listbox-get-footers-height
title: LISTBOX Get footers height
slug: /commands/listbox-get-footers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get footers height.Syntax-->**LISTBOX Get footers height** ( {* ;} *objeto* {; *unidade*} ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get footers height.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ouVariável (se omitido *) |
| unidade | Integer | &#8594;  | Unidade de valor de altura:0 se omitido = píxeles, 1 = linhas |
| resultado | Integer | &#8592; | Alto da linha |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX Get footers height.Summary-->O comando **LISTBOX Get footers height** devolve a altura da linha de rodapé do list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->  
  
Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referencia de variável em lugar de uma cadeia. Pode designar indiferentemente o list box ou todo rodapé do list box.  
  
Por defeito, é omitido o parâmetro *unidad*e, a altura de linha devolvida se expressa em píxeles. Para definir uma unidade diferente, pode passar uma das seguintes constantes (do tema *List box*), no parâmetro *unidade*:  
  
| Constante | Tipo          | Valor | Comentário                                                                                 |
| --------- | ------------- | ----- | ------------------------------------------------------------------------------------------ |
| lk lines  | Inteiro longo | 1     | A altura designa um número de linhas. 4D calcula a altura de uma linha em função da fonte. |
| lk pixels | Inteiro longo | 0     | A altura é o número de pixels (por padrão).                                                |
  
  
**Nota**: para maior informação sobre o cálculo da altura de linnhas, consulte o manual de *Desenho*.

#### Ver também 

[LISTBOX SET FOOTERS HEIGHT](listbox-set-footers-height.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1146 |
| Thread-seguro | &cross; |


