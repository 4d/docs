---
id: listbox-get-array
title: LISTBOX Get array
slug: /commands/listbox-get-array
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get array.Syntax-->**LISTBOX Get array** ( {* ;} *objeto* ; *tipoArray* ) : Pointer<!-- END REF-->
<!--REF #_command_.LISTBOX Get array.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se for especificado, objeto é um nome de objeto (cadeia) Se for omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Variável (se * for omitido) |
| tipoArray | Integer | &#8594;  | Tipo de array |
| Resultado | Pointer | &#8592; | Ponteiro ao array associado a propriedade |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX Get array.Summary-->**Nota:** Este comando só funciona com os list box de tipo array.<!-- END REF-->

O comando **LISTBOX Get array** devolve um ponteiro ao array associado ao estilo ou a cor do list box ou da coluna de list box designada pelos parâmetros *objeto* e *\** .

Os arrays de estilo, cor ou cor de fundo podem estar associados aos list box de tipo de array usando a lista de propriedades em modo *Desenho* ou o comando [LISTBOX SET ARRAY](listbox-set-array.md).

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passa uma referência de variável no lugar de uma cadeia. Pode designar um list box ou uma coluna de list box como parâmetro *objeto*.

Passe em *tipoArray*, o tipo de array de propriedade a obter. Pode utilizar uma das seguintes constantes, do tema "*List box*":

| Constante                 | Tipo          | Valor | Comentário                    |
| ------------------------- | ------------- | ----- | ----------------------------- |
| lk background color array | Inteiro longo | 1     |                               |
| lk control array          | Inteiro longo | 3     |                               |
| lk font color array       | Inteiro longo | 0     |                               |
| lk row height array       | Inteiro longo | 4     | (licença 4D View Pro exigida) |
| lk style array            | Inteiro longo | 2     |                               |

O comando devolve um dos seguintes valores:

* [Is nil pointer](is-nil-pointer.md) Se nenhum array da propriedade solicitada está associado a coluna ou ao list box.
* Um ponteiro ao array da propriedade solicitada, definido pelo usuário.
* Um ponteiro ao array da propriedade solicitada, definido dinamicamente quando se chama ao comando [LISTBOX SET ROW COLOR](listbox-set-row-color.md) ou [LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md)

#### Exemplo 

Exemplos típicos de uso:

```4d
 vPtr:=LISTBOX Get array(*;"MyLB";lk font color array)
  // Devolve um ponteiro ao array de cores de fonte
  // Associado ao list box "MyLB"
 
 vPtr:=LISTBOX Get array(*;"Col4";lk style array)
  // Devolve um ponteiro ao array de estilos de fonte
  // Associado a coluna de list box "Col4"
```

#### Ver também 

[LISTBOX GET ARRAYS](listbox-get-arrays.md)  
[LISTBOX SET ARRAY](listbox-set-array.md)  