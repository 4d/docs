---
id: sax-get-xml-node
title: SAX Get XML node
slug: /commands/sax-get-xml-node
displayed_sidebar: docs
---

<!--REF #_command_.SAX Get XML node.Syntax-->**SAX Get XML node** ( *documento* ) : Integer<!-- END REF-->
<!--REF #_command_.SAX Get XML node.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| Resultado | Integer | &#8592; | Evento devuelto por la función |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX Get XML node.Summary-->El comando SAX Get XML node devuelve un entero largo indicando el tipo de evento SAX devuelto durante el análisis del documento XML referenciado por *documento*.<!-- END REF--> 

Los eventos que pueden devolverse están disponibles como constantes del tema “*XML*”:

| Constante                  | Tipo         | Valor |
| -------------------------- | ------------ | ----- |
| XML CDATA                  | Entero largo | 7     |
| XML Comment                | Entero largo | 2     |
| XML DATA                   | Entero largo | 6     |
| XML End Document           | Entero largo | 9     |
| XML End Element            | Entero largo | 5     |
| XML Entity                 | Entero largo | 8     |
| XML Processing Instruction | Entero largo | 3     |
| XML Start Document         | Entero largo | 1     |
| XML Start Element          | Entero largo | 4     |

#### Ejemplo 

El siguiente ejemplo procesa un evento: 

```4d
 DocRef:=Open document("";"xml";Read Mode)
 If(OK=1)
    Repeat
       MyEvent:=SAX Get XML node(DocRef)
       Case of
          :(MyEvent=XML Start Document)
             DoSomething
          :(MyEvent=XML Comment)
             DoSomethingElse
       End case
    Until(MyEvent=XML End Document)
    CLOSE DOCUMENT(DocRef)
 End if
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error. 


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 860 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


