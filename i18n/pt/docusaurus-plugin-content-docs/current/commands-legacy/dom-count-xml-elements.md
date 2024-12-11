---
id: dom-count-xml-elements
title: DOM Count XML elements
slug: /commands/dom-count-xml-elements
displayed_sidebar: docs
---

<!--REF #_command_.DOM Count XML elements.Syntax-->**DOM Count XML elements** ( *refElemento* ; *nomeElemento* ) : Integer<!-- END REF-->
<!--REF #_command_.DOM Count XML elements.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| nomeElemento | Text | &#8594;  | Nome do elemento XML a ser contado |
| Resultado | Integer | &#8592; | Número de elementos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Count XML elements.Summary-->O comando DOM Count XML elements devolve o número de elementos “filho” dependentes do elemento pai *refElemento* e chamado *nomeElemento*.<!-- END REF-->como padrão, **DOM Count XML elements** diferencia maiúsculas de minúsculas relativas ao parâmetro *nomeElemento* (regras xml). Pode controlar se o comando diferencia maiúsculas de minúsculas usando o seletor XML DOM case sensitivity ou o comando [XML SET OPTIONS](xml-set-options.md).

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema OK assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Ver também 

[DOM Get XML element](dom-get-xml-element.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 726 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


