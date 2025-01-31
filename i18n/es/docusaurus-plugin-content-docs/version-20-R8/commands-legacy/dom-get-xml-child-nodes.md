---
id: dom-get-xml-child-nodes
title: DOM GET XML CHILD NODES
slug: /commands/dom-get-xml-child-nodes
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML CHILD NODES.Syntax-->**DOM GET XML CHILD NODES** ( *refElement* ; *ArrTiposHijos* ; *arrRefsNodos* )<!-- END REF-->
<!--REF #_command_.DOM GET XML CHILD NODES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refElement | Text | &#8594;  | Referencia del elemento XML |
| ArrTiposHijos | Integer array | &#8592; | Tipos de nodos hijos |
| arrRefsNodos | Text array | &#8592; | Referencias o Valores de los nodos hijos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM GET XML CHILD NODES.Summary-->El comando DOM GET XML CHILD NODES devuelve los tipos y referencias o valores de todos los nodos hijos del elemento XML designado por *refElement*.<!-- END REF-->

Los tipos de los nodos hijos se devuelven en el array *arrTiposHijos*. Puede comparar los valores devueltos por el comando con las siguientes constantes del tema "":

| Constante                  | Tipo         | Valor |
| -------------------------- | ------------ | ----- |
| XML comment                | Entero largo | 2     |
| XML processing instruction | Entero largo | 3     |
| XML DATA                   | Entero largo | 6     |
| XML CDATA                  | Entero largo | 7     |
| XML DOCTYPE                | Entero largo | 10    |
| XML ELEMENT                | Entero largo | 11    |

Para mayor información, consulte la descripción del comando [DOM Append XML child node](dom-append-xml-child-node.md "DOM Append XML child node").

El array *arrRefsNodos* recibe los valores o las referencias de los elementos en función de su naturaleza (contenidos o instrucciones).

#### Ejemplo 

Dada la siguiente estructura XML:  

```XML
<myElement>Hola<br/>Nueva<br/>York</myElement>
```

Después de la ejecución de estas instrucciones:  

```4d
 elementRef:=DOM Find XML element($root;"myElement")
 DOM GET XML CHILD NODES(elementRef;$typeArr;$textArr)
```

... los arrays $typeArr y $textArr contendrán los siguientes valores:  

| $typeArr{1}=6  | $textArr{1} = "Hola"                                       |
| -------------- | ---------------------------------------------------------- |
| $typeArr{2}=11 | $textArr{2} = "AEF1233456878977" (element reference <Br/>) |
| $typeArr{3}=6  | $textArr{3} = "Nueva"                                      |
| $typeArr{4}=11 | $textArr{4} = "AEF1237897734568" (element reference <Br/>) |
| $typeArr{5}=6  | $textArr{5} = "York"                                       |

#### Ver también 

[DOM Append XML child node](dom-append-xml-child-node.md)  
[DOM Get XML document ref](dom-get-xml-document-ref.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1081 |
| Hilo seguro | &check; |


