---
id: dom-get-xml-element-value
title: DOM GET XML ELEMENT VALUE
slug: /commands/dom-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT VALUE.Syntax-->**DOM GET XML ELEMENT VALUE** ( *refElemento* ; *valorElemento* {; *cDATA*} )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT VALUE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| valorElemento | Variable | &#8592; | Valor do elemento |
| cDATA | Variable | &#8592; | Conteúdo de seção CDATA |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM GET XML ELEMENT VALUE.Summary-->O comando **DOM GET XML ELEMENT VALUE** retorna no parâmetro *valorElement*, o valor do elemento XML designado por *refElement*.<!-- END REF--> 4D tentará convertir o valor obtido no tipo de variável passada como parâmetro.Se o tipo de variável não for definido, o valor é retornado no tipo texto como padrão. 

O parâmetro opcional *cDATA* se utiliza para recuperar os conteúdos das seções CDATA do elemento XML *refElement*. Como com o parâmetro *valorElement*, 4D tentará converter o valor obtido para o mesmo tipo da variável passada como parâmetro, e se o tipo de variável não for definida, o tipo texto é usado como padrão.   
  
**Nota**: se o elemento designado por refElement for um BLOB processado pelo comando [DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md), tiver sido codificado automaticamente em banco64\. Portanto, o comando tentará automaticamente decodificar em base 64.

#### Exemplo 

Este método retorna o valor do elemento $xml\_Element\_Ref: 

```4d
 var $xml_Element_Ref : Text
 var $valor : Real
 
 DOM GET XML ELEMENT VALUE($xml_Element_Ref;$valor)
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Ver também 

[DOM Get XML element](dom-get-xml-element.md)  
[DOM GET XML ELEMENT NAME](dom-get-xml-element-name.md)  
[DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 731 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


