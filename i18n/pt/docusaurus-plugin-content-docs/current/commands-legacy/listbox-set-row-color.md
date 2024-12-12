---
id: listbox-set-row-color
title: LISTBOX SET ROW COLOR
slug: /commands/listbox-set-row-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROW COLOR.Syntax-->**LISTBOX SET ROW COLOR** ( {* ;} *objeto* ; *fila* ; *cor* {; *tipoCor*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROW COLOR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Variável (se * for omitido) |
| fila | Integer | &#8594;  | Numero de fila |
| cor | Text, Integer | &#8594;  | Valor de cor RGB |
| tipoCor | Integer | &#8594;  | Cor de fonte do Listbox (por padrão) ou cor de fundo do Listbox |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX SET ROW COLOR.Summary-->**Nota:** Este comando só funciona com listboxes de tipo array.<!-- END REF-->

O comando **LISTBOX SET ROW COLOR** define a cor de uma fila ou uma célula no listbox de tipo array designado pelos parâmetros *objeto* e *\**.

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, se passar uma referência de variável no lugar de uma cadeia.

Pode designar um listbox ou uma coluna do listbox no parâmetro *objeto*:

* Quando o *objeto* designa um listbox, o comando se aplica a fila.
* Quando o *objeto* designa uma coluna do listbox, o comando se aplica a célula localizada na interseção de coluna/fila.

Em *fila*, passe o número da fila na que deseja aplicar a nova cor.

**Nota:** O comando não leva em conta nenhum estado oculto/visível das filas do listbox.

Em *cor*, passe um valor de cor RGB. Para obter mais informação sobre as cores RGB, consulte a descrição do comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md). Se deseja que a fila herde o conjunto de cores para o nível mais alto, você pode passar a constante lk inherited no parâmetro *cor*.

No parâmetro *tipoCor*, passe as constantes lk background color ou lk font color para indicar se deseja aplicar a cor para o fundo ou para a cor de fonte da fila. Se omitir este parâmetro, a cor se aplica para a cor de fonte.

Este comando modifica os valores que se encontram no array de cores que podem ter sido definido para a coluna do listbox. Se estes acertos não estão definidos, o comando cria de forma dinâmica arrays que podem acessar mediante o comando [LISTBOX Get array](listbox-get-array.md).  
  
Se os valores de cor em conflito se definem usando as propriedades para os listboxes ou colunas do listbox, se aplica uma ordem de prioridade. Para obter mais informação, consulte o manual de *Desenho*.

#### Exemplo 

Em um array de tipo list box, queremos estabelecer as cores de uma fila e para uma célula desta fila:

```4d
  // Definição de cor de fonte para célula
 LISTBOX SET ROW COLOR(*;"Col5";3;"yellow")
 
  // Definição de fundo e cor de fonte para a fila 3
 LISTBOX SET ROW COLOR(*;"ListBox";3;"red";lk background color)
 LISTBOX SET ROW COLOR(*;"ListBox";3;"blue")
```

![](../assets/en/commands/pict1205393.fr.png)

#### Ver também 

*List box*  
[LISTBOX Get row color](listbox-get-row-color.md)  
[LISTBOX Get row color as number](listbox-get-row-color-as-number.md)  
[LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md)  