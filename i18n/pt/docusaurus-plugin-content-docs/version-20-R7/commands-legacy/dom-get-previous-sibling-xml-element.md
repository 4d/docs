---
id: dom-get-previous-sibling-xml-element
title: DOM Get previous sibling XML element
slug: /commands/dom-get-previous-sibling-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get previous sibling XML element.Syntax-->**DOM Get previous sibling XML element** ( *refElemento* {; *nomeElemIrmao* {; *valorElemIrmao*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get previous sibling XML element.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| nomeElemIrmao | Text | &#8592; | Nome do elemento XML irmão |
| valorElemIrmao | Text | &#8592; | Valor do elemento XML irmão |
| Resultado | Text | &#8592; | Elemento de referência XML irmão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Get previous sibling XML element.Summary-->O comando DOM Get previous sibling XML element retorna uma referência ao “irmão” anterior do elemento XML passado em referência.<!-- END REF--> Esta referência pode ser utilizada com os outros comandos de análise XML.  

Os parâmetros opcionais *nomElemIrmao* e *valorElemIrmao*, se forem passados, recebem respectivamente o nome e o valor do elemento “irmão” anterior.  
  
Este comando pode ser utilizado para navegar entre os “filhos” de um elemento XML.  
  
Antes do primeiro “irmão,” a variável sistema OK tem o valor 0

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente e se o elemento referenciado não for o primeiro "filho" da estrutura, a variável sistema OK assume o valor 1\. Se ocorre um erro ou se o elemento analisado for o primeiro "filho" da estrutura, assume o valo 0.

#### Ver também 

[DOM Get next sibling XML element](dom-get-next-sibling-xml-element.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 924 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


