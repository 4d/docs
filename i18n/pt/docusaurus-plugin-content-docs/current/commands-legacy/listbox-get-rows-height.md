---
id: listbox-get-rows-height
title: LISTBOX Get rows height
slug: /commands/listbox-get-rows-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get rows height.Syntax-->**LISTBOX Get rows height** ( {* ;} *objeto* {; *unidade*} ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get rows height.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| unidade | Integer | &#8594;  | Unidade do valor da altura: 0 ou omitido = pixels, 1 = linhas |
| Resultado | Integer | &#8592; | altura da fila (em pixels) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX Get rows height.Summary-->O comando **LISTBOX Get rows height** devolve a altura atual (em píxels) das filas do objeto list box designado utilizando os parâmetros *objeto* e *\**.<!-- END REF--> O valor devolvido corresponde à altura de uma só linha.

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*.

Por padrão, se omitir o parâmetro *unidade*, a altura da linha devolvida é expressada em pixels. para definir outra *unidade*, no parâmetro unidade pode passar uma das seguintes constântes do tema *List box*:

| Constante | Tipo          | Valor | Comentário                                                                                 |
| --------- | ------------- | ----- | ------------------------------------------------------------------------------------------ |
| lk lines  | Inteiro longo | 1     | A altura designa um número de linhas. 4D calcula a altura de uma linha em função da fonte. |
| lk pixels | Inteiro longo | 0     | A altura é o número de pixels (por padrão).                                                |

**Nota:** para mais informação sobre o calculo de alturas de linhas, consulte o Manual de Desenho.

#### Ver também 

[LISTBOX Get auto row height ](listbox-get-auto-row-height.md)  
[LISTBOX Get row height ](listbox-get-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 836 |
| Thread-seguro | &cross; |


