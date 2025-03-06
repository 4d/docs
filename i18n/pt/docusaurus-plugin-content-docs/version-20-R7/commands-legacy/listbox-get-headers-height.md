---
id: listbox-get-headers-height
title: LISTBOX Get headers height
slug: /commands/listbox-get-headers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get headers height.Syntax-->**LISTBOX Get headers height** ( {* ;} *objeto* {; *unidade*} ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get headers height.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| unidade | Integer | &#8594;  | Unidade de valor de altura:0 ou se omitida = pixeles, 1 = linhas |
| resultado | Integer | &#8592; | Alto da linha |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX Get headers height.Summary-->O comando **LISTBOX Get headers height** devolve a altura da linha horizontais de cabeçalho do list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia. 

Por defeito, se omitido o parâmetro *unidade*, a altura de linha devolvida se expressa em pixeles. Para definir uma unidade diferente, pode passar uma das seguintes constantes (do tema *List box*), no parâmetro *unidade*:  
  
| Constante | Tipo          | Valor | Comentário                                                                                 |
| --------- | ------------- | ----- | ------------------------------------------------------------------------------------------ |
| lk lines  | Inteiro longo | 1     | A altura designa um número de linhas. 4D calcula a altura de uma linha em função da fonte. |
| lk pixels | Inteiro longo | 0     | A altura é o número de pixels (por padrão).                                                |

**Nota**: para maior informação sobre o cálculo da altura de linhas, consulte o manual de *Desenho*.

#### Ver também 

[LISTBOX SET HEADERS HEIGHT](listbox-set-headers-height.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1144 |
| Thread-seguro | &cross; |


