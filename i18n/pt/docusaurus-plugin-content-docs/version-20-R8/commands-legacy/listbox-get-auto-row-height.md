---
id: listbox-get-auto-row-height
title: LISTBOX Get auto row height
slug: /commands/listbox-get-auto-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get auto row height.Syntax-->**LISTBOX Get auto row height**  ( {* ;} *objeto* ; *seletor* {; *unidade*} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get auto row height.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou de variável (se * for omitido) |
| seletor | Integer | &#8594;  | Valor de altura a obter: lk row min height ou lk row max height |
| unidade | Integer | &#8594;  | Valor da unidade de altura 0 em píxels, 1 em linhas |
| Resultado | Integer | &#8592; | Valor de altura de linha selecionado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX Get auto row height.Summary-->O comando **LISTBOX Get auto row height**  devolve o valor de altura de fila mínimo ou máximo actual definido para o objeto list box designado utilizando os parâmetros *objeto* e *\**.<!-- END REF-->

O valor atual mínimo ou máximo da altura da fila pode ser definido na lista de propriedades (ver *Altura linha automática*) ou no processo atual utilizando o comando [LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md).

**Nota**: Esse comando só pode ser usado com list boxes não hierárquicas baseadas em array.

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se não passar este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, se passar uma referência de variável ao invés de uma string. Para mais informação sobre os nomes de objetos, consulte a seção *Propriedades dos objetos*.

Em *seletor*, passe o tipo de valor a obter. Pode utilizar uma das constantes abaixo do tema *List box*:

| Constante         | Tipo          | Valor |
| ----------------- | ------------- | ----- |
| lk row max height | Inteiro longo | 33    |
| lk row min height | Inteiro longo | 32    |

De forma predeterminada, o comando devolve o valor em píxels. Pode passar uma das constantes abaixo do tema *List box* no parâmetro *unidade* para definir a unidade a utilizar:

| Constante | Tipo          | Valor | Comentário                                                                                 |
| --------- | ------------- | ----- | ------------------------------------------------------------------------------------------ |
| lk lines  | Inteiro longo | 1     | A altura designa um número de linhas. 4D calcula a altura de uma linha em função da fonte. |
| lk pixels | Inteiro longo | 0     | A altura é o número de pixels (por padrão).                                                |

#### Exemplo 

Se quiser obter o número máximo de linhas para uma fila de list box:

```4d
 var vhMaxInteger

vhMax:=LISTBOX Get auto row height(*;"LB";lk row max height;lk lines)


```

#### Ver também 

[LISTBOX Get row height ](listbox-get-row-height.md)  
[LISTBOX Get rows height](listbox-get-rows-height.md)  
[LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1502 |
| Thread-seguro | &cross; |


