---
id: xml-decode
title: XML DECODE
slug: /commands/xml-decode
displayed_sidebar: docs
---

<!--REF #_command_.XML DECODE.Syntax-->**XML DECODE** ( *valorXML* ; *objeto4D* )<!-- END REF-->
<!--REF #_command_.XML DECODE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| valorXML | Text | &#8594;  | Valor do tipo Texto que vem de uma estrutura XML |
| objeto4D | Field, Variable | &#8592; | Variável 4D ou campo que recebe o valor XML convertido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.XML DECODE.Summary-->O comando XML DECODE converte um valor salvado como uma string XML em um valor 4D.<!-- END REF--> A conversão se realiza automaticamente dependendo das seguintes regras: 

| **Valor** | **Exemplos**                                                                          | Conversão em sistema inglês                                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| numérico  | <Price>8,5</Price><Price>8.5</Price>                                                  | Real: 8.5                                                                                                                                                                                                 |
| Booleano  | <Double>1</Double> <Double>0</Double> ou <Double>true</Double> <Double>false</Double> | Boolean: True/False                                                                                                                                                                                       |
| BLOB      | Base64 decoding                                                                       |                                                                                                                                                                                                           |
| Imagens   | Base64 decoding + BLOB to picture command                                             |                                                                                                                                                                                                           |
| Datas     | 2009-10-25T01:03:20+01:00                                                             | Elimina a parte hora e a zona horária: !10/25/2009!                                                                                                                                                       |
| Horas     | 2009-10-25T01:03:20+01:00                                                             | Elimina a parte data e a zona horária: ?01:03:20? *Aviso*: zona horária é usada se for diferente da hora local. Por exemplo: "2009-10-25T01:03:20+05:00" será decodificado ?21:03:20? em UTC+1 hora local |

Se o parâmetro tipo *4Dvar* não for definido, o tipo texto é usado como padrão. 

#### Exemplo 

Importação de dados desde um documento XML no qual os valores são guardados como atributos.  
Exemplo do documento XML:  

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

#### Ver também 

[BASE64 DECODE](base64-decode.md)  
[BASE64 ENCODE](base64-encode.md)  