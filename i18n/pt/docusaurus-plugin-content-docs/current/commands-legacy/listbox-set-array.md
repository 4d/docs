---
id: listbox-set-array
title: LISTBOX SET ARRAY
slug: /commands/listbox-set-array
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ARRAY.Syntax-->**LISTBOX SET ARRAY** ( {* ;} *objeto* ; *tipoArray* ; *proArray* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou variável (se * for omitido) |
| tipoArray | Integer | &#8594;  | Tipo de Array |
| proArray | Pointer | &#8594;  | Array a associar com propriedade |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX SET ARRAY.Summary-->**Nota**: este comando só funciona com os list box de tipo array.<!-- END REF-->  
  
O comando **LISTBOX SET ARRAY** associa um array de tipo *tipoArray* ao list box ou a coluna de list box designada pelos parâmetros *objeto e* *\** .  
  
**Nota**: os arrays de estilo, de cores ou de cor de fundo ou de controle de linhas também podem estar associados aos list box de tipo array utilizando a lista de propriedades em modo Desenho.  
  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto é* um nome de objeto (string). Se não passar este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referência de variável ao invés de uma string. Pode designar como parâmetro *objeto* um list box ou uma coluna de list box.  
  
Em *tipoArray*, passe o tipo de array a associar ao list box ou a coluna. Pode utilizar uma das seguintes constantes do tema "*List box*":

| Constante                 | Tipo          | Valor | Comentário                    |
| ------------------------- | ------------- | ----- | ----------------------------- |
| lk background color array | Inteiro longo | 1     |                               |
| lk control array          | Inteiro longo | 3     |                               |
| lk font color array       | Inteiro longo | 0     |                               |
| lk row height array       | Inteiro longo | 4     | (licença 4D View Pro exigida) |
| lk style array            | Inteiro longo | 2     |                               |
  
  
No parâmetro *proArray*, se passa um ponteiro ao array a utilizar para suportar o tipo de propriedade.

#### Exemplo 1 

Usted quiere volver a utilizar el array de colores de fuente de la columna 4ta para la columna 10ma:

```4d
  // recuperar un puntero al array de la columna 4
 $Pointer:=LISTBOX Get array(*;"Col4";lk font color array)
  // verificar que existe
 If(Not(Nil($Pointer)))
  //transferir a la columna 10
    LISTBOX SET ARRAY(*;"Col10";lk font color array;$Pointer)
 End if
```

#### Exemplo 2 

Se quiser definir um array de altura de linha para um list box:

```4d
 LISTBOX SET ARRAY(*;"LB";lk row height array;->RowHeightArray)
```

#### Ver também 

[LISTBOX Get array](listbox-get-array.md)  
[LISTBOX GET ARRAYS](listbox-get-arrays.md)  