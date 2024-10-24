---
id: dom-get-parent-xml-element
title: DOM Get parent XML element
slug: /commands/dom-get-parent-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get parent XML element.Syntax-->**DOM Get parent XML element** ( *refElemento* {; *nomeElemPai* {; *valorElemPai*}} ) -> Resultado<!-- END REF-->
<!--REF #_command_.DOM Get parent XML element.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &rarr; | Referência de elemento XML |
| nomeElemPai | Text | &larr; | Nome do elemento XML pai |
| valorElemPai | Text | &larr; | Valor do elemento XML pai |
| Resultado | Text | &larr; | Referencia do elemento XML pai |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Get parent XML element.Summary-->O comando DOM Get parent XML element retorna uma referência XML ao “pai” do elemento XML passado como referência em *refElemento*.<!-- END REF--> Esta referência pode ser utilizada com os outros comandos de análise XML.  

Os parâmetros opcionais *nomElemPai* e *valorElemPai*, quando se passam, recebem respectivamente o nome e o valor do elemento pai.

Se utiliza este comando em um nó documento 

Quando passa um elemento raíz em *refElement*, o comando devolve a referencia "#document". O nó documento é o pai de um elemento raíz.   
Se utiliza este comando em um nó documento, o comando devolve uma referencia nula ("0000000000000000") e a variável OK toma o valor 0\. 

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK assume o valor 1\. Do contrário, assume o valor 0.

#### Ver também 

[DOM Get first child XML element](dom-get-first-child-xml-element.md)  
[DOM Get last child XML element](dom-get-last-child-xml-element.md)  
[DOM Get Root XML element](dom-get-root-xml-element.md)  