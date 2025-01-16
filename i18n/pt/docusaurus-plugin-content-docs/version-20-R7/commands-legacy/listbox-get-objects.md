---
id: listbox-get-objects
title: LISTBOX GET OBJECTS
slug: /commands/listbox-get-objects
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET OBJECTS.Syntax-->**LISTBOX GET OBJECTS** ( {* ;} *objeto* ; *arrayNomObjeto* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET OBJECTS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se for especificado, o objeto é um nome de objeto (cadeia)<br/>Se for omitido, o objeto é uma variável |
| objeto | any | &#8594;  | Nome do objeto (se * for especificado) ou Variável (se * for omitido) |
| arrayNomObjeto | Text array | &#8592; | Nomes dos sub objetos do list box (cabeçalhos, colunas, pés) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX GET OBJECTS.Summary-->O comando **LISTBOX GET OBJECTS** devolve um array que contém os nomes de todos os objetos que compõem o list box designado pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
Ao passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, é passada uma referência de variável no lugar de uma cadeia.  
  
Em *arrayNomObjeto*, passe um array texto que é enchido automaticamente pelo comando. Os nomes dos objetos são devolvidos em sua ordem de apresentação, com a seguinte sequência:

| nomCol1    |
| ---------- |
| nomCabCol1 |
| nomPeCol1  |
| nomCol2    |
| nomCabCol2 |
| nomPeCol2  |
| ...        |

O array devolve os nomes dos objetos de todas as colunas (incluindo os pés de coluna), independentemente de se são ou não visíveis.  
  
Este comando é útil no contexto da análise de um formulário utilizando os comandos [FORM LOAD](form-load.md), [FORM GET OBJECTS](form-get-objects.md) e [OBJECT Get type](object-get-type.md). Se pode utilizar, quando seja necessário, para obter os nomes dos sub objetos dos list box.

#### Exemplo 

Você quer carregar um formulário e obter a lista de todos os objetos dos list boxes que contém.

```4d
 FORM LOAD("MyForm")
 ARRAY TEXT(arrObjects;0)
 FORM GET OBJECTS(arrObjects)
 ARRAY LONGINT(ar_type;Size of array(arrObjects))
 For($i;1;Size of array(arrObjects))
    ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})
    If(ar_type{$i}=Object type listbox)
       ARRAY TEXT(arrLBObjects;0)
       LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)
    End if
 End for
 FORM UNLOAD
```

#### Ver também 

[FORM LOAD](form-load.md)  
[OBJECT Get type](object-get-type.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1302 |
| Thread-seguro | &cross; |


