---
id: dom-get-xml-child-nodes
title: DOM GET XML CHILD NODES
slug: /commands/dom-get-xml-child-nodes
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML CHILD NODES.Syntax-->**DOM GET XML CHILD NODES** ( *elemRef* ; *arrTiposFilhos* ; *arrRefsNodos* )<!-- END REF-->
<!--REF #_command_.DOM GET XML CHILD NODES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| elemRef | Text | &#8594;  | Elemento XML de referência |
| arrTiposFilhos | Integer array | &#8592; | Tipos de nodos filhos |
| arrRefsNodos | Text array | &#8592; | Referência ou valores dos nodos filhos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM GET XML CHILD NODES.Summary-->O comando DOM GET XML CHILD NODES retorna os tipos e referências ou valores de todos os nodos filhos do elemento XML designado por *refElement*.<!-- END REF-->  

Os tipos dos nodos filhos são retornados no array *arrTiposFilhos*. Pode comparar os valores retornados pelo comando com as seguintes constantes do tema "*XML*":  
  
| Constante                  | Tipo          | Valor |
| -------------------------- | ------------- | ----- |
| XML comment                | Inteiro longo | 2     |
| XML processing instruction | Inteiro longo | 3     |
| XML DATA                   | Inteiro longo | 6     |
| XML CDATA                  | Inteiro longo | 7     |
| XML DOCTYPE                | Inteiro longo | 10    |
| XML ELEMENT                | Inteiro longo | 11    |
  
  
Para maior informação, consulte a descrição do comando [DOM Append XML child node](dom-append-xml-child-node.md).  
  
O array *arrRefsNodos* recebe os valores ou as referências dos elementos em função de sua natureza (conteúdos ou instruções).

#### Exemplo 

Dada a seguinte estrutura XML:  

```XML
<myElement>Olá<br/>Nova<br/>York</myElement>
```

Depois da execução destas instruções:  

```4d
 elementRef:=DOM Find XML element($root;"myElement")
 DOM GET XML CHILD NODES(elementRef;$typeArr;$textArr)
```

... os arrays $typeArr e $textArr conterão os seguintes valores:  

| $typeArr{1}=6  | $textArr{1} = "Olá"                                        |
| -------------- | ---------------------------------------------------------- |
| $typeArr{2}=11 | $textArr{2} = "AEF1233456878977" (element reference <Br/>) |
| $typeArr{3}=6  | $textArr{3} = "Nova"                                       |
| $typeArr{4}=11 | $textArr{4} = "AEF1237897734568" (element reference <Br/>) |
| $typeArr{5}=6  | $textArr{5} = "York"                                       |

#### Ver também 

[DOM Append XML child node](dom-append-xml-child-node.md)  
[DOM Get XML document ref](dom-get-xml-document-ref.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1081 |
| Thread-seguro | &check; |
| Proibido no servidor ||


