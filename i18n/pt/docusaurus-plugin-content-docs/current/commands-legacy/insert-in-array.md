---
id: insert-in-array
title: INSERT IN ARRAY
slug: /commands/insert-in-array
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN ARRAY.Syntax-->**INSERT IN ARRAY** ( *array* ; *onde* {; *quantos*} )<!-- END REF-->
<!--REF #_command_.INSERT IN ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Nome do array |
| onde | Integer | &#8594;  | Onde inserir os elementos |
| quantos | Integer | &#8594;  | Número de elementos a serem inseridos, ou 1 elemento se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.INSERT IN ARRAY.Summary-->O comando INSERT IN ARRAY insere um ou mais elementos no *array*.<!-- END REF--> Os novos elementos são inseridos antes do elemento especificado por *onde*, e são inicializados no valor vacio do tipo de array. Todos os elementos além de *onde* são movidos consequentemente no array por um valor de um ou pelo valor especificado em *quantos*.

Se *onde* é maior que o tamanho do array, os elementos são adicionados ao final do array.

O parâmetro *quantos* é o número de elementos a ser inserido. Se não for especificado *quantos*, então apenas um elemento é inserido. O tamanho do array aumenta em *quantos*.

#### Exemplo 1 

O exemplo a seguir insere cinco novos elementos, começando no elemento 10:

```4d
 INSERT IN ARRAY(anArray;10;5)
```

#### Exemplo 2 

O exemplo a seguir adiciona um elemento a um array:

```4d
 $vlElem:=Size of array(anArray)+1
 INSERT IN ARRAY(anArray;$vlElem)
 anArray{$vlElem}:=...
```

#### Ver também 

[DELETE FROM ARRAY](delete-from-array.md)  
[Size of array](size-of-array.md)  