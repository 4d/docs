---
id: dom-append-xml-element
title: DOM Append XML element
slug: /commands/dom-append-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Append XML element.Syntax-->**DOM Append XML element** ( *refElementoTarget* ; *refElementoFonte* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Append XML element.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElementoTarget | Text | &#8594;  | Referência do elemento XML pai |
| refElementoFonte | Text | &#8594;  | Referência do elemento XML a anexar |
| Resultado | Text | &#8592; | Referência do novo elemento XML |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Append XML element.Summary-->O comando DOM Append XML element se utiliza para adicionar um novo elemento XML ao filho do elemento XML cuja referência se passa no parâmetro *refElementFonte* .<!-- END REF-->   
  
No parâmetro *refElementFonte*, passe o elemento a adicionar. Este elemento deve ser passado como referência de um elemento XML existente em uma árvore DOM. É adicionada depois do último elemento filho existente de *refElementTarget*.

#### Exemplo 

Ver o exemplo do comando [DOM Insert XML element](dom-insert-xml-element.md "DOM Insert XML element").

#### Ver também 

[DOM Insert XML element](dom-insert-xml-element.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1082 |
| Thread-seguro | &check; |


