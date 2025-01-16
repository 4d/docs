---
id: xml-decode
title: XML DECODE
slug: /commands/xml-decode
displayed_sidebar: docs
---

<!--REF #_command_.XML DECODE.Syntax-->**XML DECODE** ( valor XML ; *objeto4D* )<!-- END REF-->
<!--REF #_command_.XML DECODE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| valor XML | Texto | &#8594;  | Valor de tipo texto proveniente de una estructura XML |
| objeto4D | Field, Variable | &#8592; | Variable o campo 4D que recibe el valor XML convertido |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.XML DECODE.Summary-->El comando **XML DECODE** convierte un valor guardado como una cadena XML en un valor 4D.<!-- END REF--> La conversión se efectúa automáticamente en función de las siguientes reglas: 

| **Valor** | **Ejemplos**                                                                         | Conversión en sistema inglés                                                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| numérico  | <Price>8,5</Price><Price>8.5</Price>                                                 | Real: 8.5                                                                                                                                                                                                           |
| Booleano  | <Double>1</Double> <Double>0</Double> o <Double>true</Double> <Double>false</Double> | Booleano: True/False                                                                                                                                                                                                |
| BLOB      | Decodificación Base64                                                                |                                                                                                                                                                                                                     |
| Imágenes  | Decodificación Base64 + comando BLOB to picture                                      |                                                                                                                                                                                                                     |
| Fechas    | 2009-10-25T01:03:20+01:00                                                            | !10/25/2009! -> Supresión de la parte hora y de la zona horaria                                                                                                                                                     |
| Horas     | 2009-10-25T01:03:20+01:00                                                            | ?01:03:20? -> Supresión de la parte fecha. *Atención*: la zona horaria se tiene en cuenta si es diferente de la hora local. Por ejemplo: "2009-10-25T01:03:20+05:00" se decodificará ?21:03:20? en UTC+1 hora local |

Si el tipo de parámetro *4Dvar* no está definido, el tipo texto se utiliza por defecto. 

#### Ejemplo 

Importación de datos desde un documento XML en el cual los valores se guardan como atributos.  
Ejemplo del documento XML:  

```XML
<CD Date="2003-01-01T00:00:00Z" Description="This double CD reissued by EMI in 1995 combines 4 Stabat mater hymns. One by Rossini interpreted by the Berlin Symphony Orchestra, directed by Karl Forster. Followed by a work of Verdi, by the Philharmonic Orchestra, directed by Carlo Maria Giulini. On the second CD, you will find Francis Poulenc interpreted by Régine Crespin. This compilation ends with a little-known version, that of the Polish composer Karol Szymanowski. Polish National Radio Symphony Orchestra directed by Antoni Wit" Double="true" Duration="7246" Type="Sacred music" CD_ID="5" Performer="Various" Price="8.5" Title="4 Stabat mater"/>
```

```4d
 Repeat
    MyEvent:=SAX Get XML node(DocRef)
 
    Case of
       :(MyEvent=XML Start Element)
          ARRAY TEXT(arrAttrNames;0)
          ARRAY TEXT(arrAttrValues;0)
          SAX GET XML ELEMENT(DocRef;vName;vPrefix;arrAttrNames;arrAttrValues)
          If(vName="CD")
             CREATE RECORD([CD])
             For($i;1;Size of array(arrAttrNames))
                $attrName:=arrAttrNames{$i}
                Case of
                   :($attrName="CD_ID")
                      XML DECODE(arrAttrValues{$i};[CD]CD_ID)
                   :($attrName="Title")
                      [CD]Work:=arrAttrValues{$i}
                   :($attrName="Price")
                      XML DECODE(arrAttrValues{$i};[CD]Price)
                   :($attrName="Date")
                      XML DECODE(arrAttrValues{$i};[CD]Date entered)
                   :($attrName="Duration")
                      XML DECODE(arrAttrValues{$i};[CD]Total_duration)
                   :($attrName="Double")
                      XML DECODE(arrAttrValues{$i};[CD]Double_CD)
                End case
             End for
          End if
          ...
    End case
 Until(MyEvent=XML End Document)
```

#### Ver también 

[BASE64 DECODE](base64-decode.md)  
[BASE64 ENCODE](base64-encode.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1091 |
| Hilo seguro | &check; |


