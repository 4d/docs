---
id: list-to-array
title: LIST TO ARRAY
slug: /commands/list-to-array
displayed_sidebar: docs
---

<!--REF #_command_.LIST TO ARRAY.Syntax-->**LIST TO ARRAY** ( *lista* ; *array* {; *itemRefs*} )<!-- END REF-->
<!--REF #_command_.LIST TO ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| lista | Text, Integer | &#8594;  | Lista da qual copiar os itens de primeiro nível |
| array | Array | &#8592; | Array para o qual copiar os itens da lista |
| itemRefs | Array | &#8592; | Números de referência da lista de itens |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LIST TO ARRAY.Summary-->O comando LIST TO ARRAY cria ou substitui o array *array* com os elementos de primeiro nível da lista ou da lista de seleção designada por *lista*.<!-- END REF--> 

No parâmetro *lista* pode passar o nome de uma lista de seleção (cadeia), ou uma referência de lista hierárquica (RefList).

Se não definir previamente o array como de tipo Alfa ou Texto, LIST TO ARRAY cria um novo array de tipo Texto por padrão. 

**Nota:** em modo compilado, o *array* deve ter sido definido previamente e não pode ser digitado novamente.

O parâmetro opcional *itemRefs* (um array de tipo numérico) retorna os números de referência dos elementos da lista. 

É possível continuar utilizando LIST TO ARRAY para construir um array baseado nos elementos de primeiro nível de uma lista. Entretanto, este comando não lhe permite trabalhar com os elementos das sub-listas. Para trabalhar com listas hierárquicas, utilize os comandos de listas hierárquicas, em particular [Load list](load-list.md).

#### Exemplo 1 

O exemplo a seguir copia os elementos de uma lista chamada Regiões no array chamado *atRegioes*:

```4d
 LIST TO ARRAY("Regions";atRegions)
```

#### Exemplo 2 

Dada uma lista hierárquica criada como é visto a continuação:

```4d
 myList2:=New list
 APPEND TO LIST(myList2;"Scotland";1)
 APPEND TO LIST(myList2;"England";2)
 APPEND TO LIST(myList2;"Wales";3)
 myList1:=New list
 APPEND TO LIST(myList1;"France";1)
 APPEND TO LIST(myList1;"Germany";2)
 APPEND TO LIST(myList1;"Spain";3)
 APPEND TO LIST(myList1;"Great Britain";4;myList2;True)
 APPEND TO LIST(myList1;"Portugal";5)
 APPEND TO LIST(myList1;"Belgium";6)
 APPEND TO LIST(myList1;"Italy";7)
 APPEND TO LIST(myList1;"Netherlands";8)
 APPEND TO LIST(myList1;"Ireland";9)
```

Esta lista pode estar representada como:

![](../assets/en/commands/pict1214045.en.png)

Se executa a seguinte instrução:

```4d
 LIST TO ARRAY(myList1;$MyArray)
```

...obtém

```4d
 $MyArray{1}="France"
 $MyArray{2}="Germany"
 $MyArray{3}="Spain"
 $MyArray{4}="Great Britain"
 $MyArray{5}="Portugal"
 ...
```

#### Ver também 

[ARRAY TO LIST](array-to-list.md)  
[Load list](load-list.md)  
[SAVE LIST](save-list.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 288 |
| Thread-seguro | &check; |
| Proibido no servidor ||


