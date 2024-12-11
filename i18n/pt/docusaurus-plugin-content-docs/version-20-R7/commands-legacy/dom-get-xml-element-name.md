---
id: dom-get-xml-element-name
title: DOM GET XML ELEMENT NAME
slug: /commands/dom-get-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT NAME.Syntax-->**DOM GET XML ELEMENT NAME** ( *refElemento* ; *nomeElemento* )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT NAME.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| nomeElemento | Variable | &#8592; | Nome do elemento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM GET XML ELEMENT NAME.Summary-->O comando DOM GET XML ELEMENT NAME retorna no parâmetro *nomeElemento*, o nome do elemento XML designado por *refElemento*.<!-- END REF--> Se o tipo de variável nomeElemento não for definido, o tipo texto é usado como padrão.   
  
Para maior informação sobre os nomes de elementos XML, consulte a seção *Visão Geral dos comandos XML DOM*

#### Exemplo 

Este método devolve o nome do elemento $xml\_Element\_Ref: 

```4d
 var $xml_Element_Ref : Text
 var $nom : Text
 
 DOM GET XML ELEMENT NAME($xml_Element_Ref;$nom)
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Ver também 

[DOM Get XML element](dom-get-xml-element.md)  
[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[DOM SET XML ELEMENT NAME](dom-set-xml-element-name.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 730 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


