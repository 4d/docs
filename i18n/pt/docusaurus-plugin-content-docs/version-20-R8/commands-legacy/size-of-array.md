---
id: size-of-array
title: Size of array
slug: /commands/size-of-array
displayed_sidebar: docs
---

<!--REF #_command_.Size of array.Syntax-->**Size of array** ( *array* ) : Integer<!-- END REF-->
<!--REF #_command_.Size of array.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array cujo tamanho é retornado |
| Resultado | Integer | &#8592; | Retorna o número de elementos no array |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Size of array.Summary-->O comando Size of Array retorna o número de elementos no *array*.<!-- END REF-->

#### Exemplo 1 

O exemplo a seguir retorna o tamanho do array *anArray*:

```4d
 vlTalla:=Size of array(anArray) // vlTamanho recebe o tamanho de anArray
```

#### Exemplo 2 

O exemplo a seguir retorna o número de filas em um array bidimensional:

```4d
 vlFilas:=Size of array(a2DArray) // vlFilas recebe o tamanho de a2DArray
```

#### Exemplo 3 

O exemplo a seguir retorna o número de colunas em um array bidimensional:

```4d
 vlColunas:=Size of array(a2DArray{10}) // vlColunas recebe o tamanho de a2DArray{10}
```

#### Ver também 

[DELETE FROM ARRAY](delete-from-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 274 |
| Thread-seguro | &check; |


