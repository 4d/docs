---
id: select-list-items-by-reference
title: SELECT LIST ITEMS BY REFERENCE
slug: /commands/select-list-items-by-reference
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Syntax-->**SELECT LIST ITEMS BY REFERENCE** ( *lista* ; *refElem* {; *refArray*} )<!-- END REF-->
<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Número de referência da lista |
| refElem | Integer | &#8594;  | Número de referência do elemento ou 0 para o último elemento adicionado à lista |
| refArray | Integer array | &#8594;  | Array de números de referência de elementos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Summary-->O comando SELECT LIST ITEMS BY REFERENCE seleciona os elementos cujo número de referência se passa em *refElem* e opcionalmente em *refArray*, na lista cujo número de referência se passa em *lista*.<!-- END REF-->

Se nenhum elemento tem o número de referência que passou, o comando não faz nada. 

Se um elemento não é visível atualmente (por exemplo, se estiver localizado em uma lista contraída), o comando expande as sub-listas correspondentes de maneira que fiquem visíveis.

Se não passar o parâmetro *refArray*, o parâmetro *refElem* representa a referência do elemento a ser selecionado. Se o número de elemento não corresponde a nenhum elemento da lista, o comando não faz nada. Igualmente pode passar o valor 0 neste parâmetro para designar o último elemento adicionado à lista.

O parâmetro opcional *refArray* lhe permite selecionar vários elementos simultaneamente na lista. Em *refArray*, deve passar um array onde cada linha indique a referência fixa de um elemento a ser selecionado.   
Neste caso, o elemento designado pelo parâmetro *refElem* determina o novo elemento atual da lista na seleção resultante, o qual pode pertencer ou não ao conjunto de elementos definido pelo array. O elemento atual é, mais particularmente, o que é editado pelo comando [EDIT ITEM](edit-item.md "EDIT ITEM").

**Nota:** para selecionar vários elementos simultaneamente em uma lista hierárquica (manualmente ou por programação), a propriedade *multi-selecionavel* deve ter sido selecionada para a lista. Esta propriedade é definida utilizando o comando [SET LIST PROPERTIES](set-list-properties.md "SET LIST PROPERTIES").

Se trabalha com os números de referência dos elementos, tenha certeza de construir uma lista na qual os elementos tenham números de referência únicos; do contrário não poderá diferenciá-los. Para maior informação, consulte a descrição do comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

#### Exemplo 

*hList* é uma lista cujos elementos tem números de referência únicos. O método a seguir de objeto para um botão seleciona o item pai (se o houver) do elemento selecionado atualmente:

```4d
 $vlItemPos:=Selected list items(hList) // Obter a posição do elemento selecionado
 GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText) // Obter o número de referência do elemento selecionado
 $vlParentItemRef:=List item parent(hList;$vlItemRef) // Obter número de referência do item pai (se o houver)
 If($vlParentItemRef>0)
    SELECT LIST ITEM BY REFERENCE(hList;List item parent(hList;$vlItemRef)) // Seleçao do elemento pai End if
```

#### Ver também 

[EDIT ITEM](edit-item.md)  
[SELECT LIST ITEMS BY POSITION](select-list-items-by-position.md)  
[Selected list items](selected-list-items.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 630 |
| Thread-seguro | &check; |
| Proibido no servidor ||


