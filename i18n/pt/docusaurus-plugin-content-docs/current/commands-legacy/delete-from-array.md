---
id: delete-from-array
title: DELETE FROM ARRAY
slug: /commands/delete-from-array
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM ARRAY.Syntax-->**DELETE FROM ARRAY** ( *array* ; *posição* {; *quantos*} )<!-- END REF-->
<!--REF #_command_.DELETE FROM ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array do qual apagar os elementos |
| posição | Integer | &#8594;  | Elemento onde se inicia o processo |
| quantos | Integer | &#8594;  | Número de elementos a apagar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DELETE FROM ARRAY.Summary-->O comando DELETE FROM ARRAY apaga um ou mais elementos de um *array*.<!-- END REF--> Elementos se apagam iniciando no elemento especificado por *posição*.

O parâmetro *quantos* é o número de elementos a serem deletados. Se este parâmetro não é especificado, então o elemento é deletado. O tamanho do array se reduz de acordo com a *quantos*.

#### Exemplo 1 

O exemplo a seguir deleta três elementos, iniciando no elemento 5:

```4d
 DELETE FROM ARRAY(anArray;5;3)
```

#### Exemplo 2 

O exemplo a seguir deleta o última elemento de um array, se ele existir:

```4d
 $vlElem:=Size of array(anArray)
 If($vlElem>0)
    DELETE FROM ARRAY(anArray;$vlElem)
 End if
```

#### Ver também 

[INSERT IN ARRAY](insert-in-array.md)  
[Size of array](size-of-array.md)  