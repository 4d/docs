---
id: listbox-set-headers-height
title: LISTBOX SET HEADERS HEIGHT
slug: /commands/listbox-set-headers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Syntax-->**LISTBOX SET HEADERS HEIGHT** ( {* ;} *objeto* ; *altura* {; *unidade*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| altura | Integer | &#8594;  | Alto da linha |
| unidade | Integer | &#8594;  | Unidade de valor de altura: 0 ou se omitido = pixeles, 1 = linhas |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Summary-->O comando **LISTBOX SET HEADERS HEIGHT** modifica por programação a altura da linha de cabeçalho do list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->  
  
Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia.   
  
Pode designar indiferentemente o list box ou todo o cabeçalho do list box.  
  
Passe no parâmetro *altura* a altura a definir. Por defeito, se omitido o parâmetro unidade, esta altura se expressa em pixeles. Para definir uma unidade diferente, pode passar uma das seguintes constantes (do tema *List box*), no parâmetro *unidade*:  
  
| Constante | Tipo          | Valor | Comentário                                                                                 |
| --------- | ------------- | ----- | ------------------------------------------------------------------------------------------ |
| lk lines  | Inteiro longo | 1     | A altura designa um número de linhas. 4D calcula a altura de uma linha em função da fonte. |
| lk pixels | Inteiro longo | 0     | A altura é o número de pixels (por padrão).                                                |

  
Cabeçalhos devem respeitar a altura mínima estabelecida pelo sistema. Esta altura é de 24 pixels em Windows e 17 pixels em Mac OS. Se quiser passar um valor menor no parametro *altura*, a altura mínima é aplicada.   
  
**Nota**: para obter mais informação sobre o cálculo das alturas de linhas, consulte o manual de *Desenho*.

#### Ver também 

[LISTBOX Get headers height](listbox-get-headers-height.md)  