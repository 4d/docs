---
id: dom-get-xml-element
title: DOM Get XML element
slug: /commands/dom-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML element.Syntax-->**DOM Get XML element** ( *refElemento* ; *nomeElemento* ; *index* ; *valorElemento* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML element.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| nomeElemento | Text | &#8594;  | Nome do elemento a obter |
| index | Integer | &#8594;  | Número de índice do elemento a obter |
| valorElemento | Variable | &#8592; | Valor do elemento |
| Resultado | Text | &#8592; | referência XML (16 caracteres) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Get XML element.Summary-->O comando DOM Get XML element retorna uma referência XML ao elemento “filho” dependente dos parâmetros *nomeElemento* e *index*.<!-- END REF-->  
  
O valor do elemento também se retorna no parâmetro *valorElemento*.  
  
**Nota:** como padrão, **DOM Get XML element** diferencia entre maiúsculas e minúsculas no parâmetro *nomeElemento* (regras xml). Pode controlar a diferenciação entre maiúsculas e minúsculas do comando usando o seletor XML DOM case sensitivity ou o comando \[#cmd id="1090"/\].

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema OK assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Ver também 

[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 725 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |
| Proibido no servidor ||


