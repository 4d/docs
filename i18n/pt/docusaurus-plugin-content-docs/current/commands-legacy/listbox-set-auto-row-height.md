---
id: listbox-set-auto-row-height
title: LISTBOX SET AUTO ROW HEIGHT
slug: /commands/listbox-set-auto-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Syntax-->**LISTBOX SET AUTO ROW HEIGHT** ( {* ;} *objeto* ; *seletor* ; *valor* ; *unidade* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, o objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou variável (se * for omitido) |
| seletor | Integer | &#8594;  | Valor de altura a estabelecer: lk row min heigh ou lk row max heigh |
| valor | Integer | &#8594;  | Valor máximo ou mínimo de altura de linha |
| unidade | Integer | &#8594;  | Unidade de valor da altura: 0=pixels, 1=linhas |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Summary-->O comando **LISTBOX SET AUTO ROW HEIGHT** \[#descv\]lhe permite estabelecer o *valor* de altura de fila mínimo ou máximo no objeto de list box designado utilizando os parâmetros *objeto* e *\**\[#/descv\].<!-- END REF-->

**Nota**: este comando só é levado em consideração se o list box estiver configurado em modo de altura de fila automática (ver *Altura linha automática*). o qual está disponível para listboxes baseados em arrays, não hierárquicos. Do contrario, não tem nenhum efeito.

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto é um* nome de objeto (string). Se não passar este parâmetro, indica que o parâmetro *objeto* for uma variável. Neste caso, se passar uma referência de variável ao invés de uma string. Para saber mais sobre os nomes de objetos, consulte a seção *Propriedades dos objetos*.

Em *seletor*, passe o tipo de valor a definir. Pode utilizar uma das constantes abaixo do tema *List box*:

| Constante         | Tipo          | Valor |
| ----------------- | ------------- | ----- |
| lk row max height | Inteiro longo | 33    |
| lk row min height | Inteiro longo | 32    |

Em *valor*, passe o valor correspondente na *unidade* apropriada.

O parâmetro *unidade* pode ser ajustada utilizando uma das constantes abaixo do tema *List box*:

| Constante | Tipo          | Valor | Comentário                                                                                 |
| --------- | ------------- | ----- | ------------------------------------------------------------------------------------------ |
| lk lines  | Inteiro longo | 1     | A altura designa um número de linhas. 4D calcula a altura de uma linha em função da fonte. |
| lk pixels | Inteiro longo | 0     | A altura é o número de pixels (por padrão).                                                |

**Nota:** o comando não comprova a consistência dos valores. Entretanto, em tempo de execução, o valor mínimo se aplicará a ambos valores em caso de conflito. Por exemplo, se o valor mínimo for 5 linhas e o valor máximo for de 3 linhas (o que é inconsistente), a altura máxima aplicada às filas de list box será de 5 linhas.

#### Exemplo 

Se quiser definir as alturas mínimas e máximas para um list box com uma altura de fila automática:

```4d
 LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row min height;60;lk pixels) // 60 píxels para o valor mínimo
 LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row max height;100;lk pixels) //y 100 píxels para o valor máximo
```

#### Ver também 

[LISTBOX Get auto row height ](listbox-get-auto-row-height.md)  
[LISTBOX SET ROW HEIGHT](listbox-set-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  