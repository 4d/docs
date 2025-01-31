---
id: sax-get-xml-node
title: SAX Get XML node
slug: /commands/sax-get-xml-node
displayed_sidebar: docs
---

<!--REF #_command_.SAX Get XML node.Syntax-->**SAX Get XML node** ( *documento* ) : Integer<!-- END REF-->
<!--REF #_command_.SAX Get XML node.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| Resultado | Integer | &#8592; | Event returned by function |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX Get XML node.Summary-->O comando SAX Get XML node devolve um inteiro longo indicando o tipo de evento SAX devolvido durante a análise do documento XML referenciado por *documento*.<!-- END REF--> 

Os eventos que podem ser devolvidos estão disponíveis como constantes do tema “*XML*”:

| Constante                  | Tipo          | Valor |
| -------------------------- | ------------- | ----- |
| XML CDATA                  | Inteiro longo | 7     |
| XML Comment                | Inteiro longo | 2     |
| XML DATA                   | Inteiro longo | 6     |
| XML End Document           | Inteiro longo | 9     |
| XML End Element            | Inteiro longo | 5     |
| XML Entity                 | Inteiro longo | 8     |
| XML Processing Instruction | Inteiro longo | 3     |
| XML Start Document         | Inteiro longo | 1     |
| XML Start Element          | Inteiro longo | 4     |

#### Exemplo 

O exemplo abaixo processa um evento:

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

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Do contrário assume o valor 0 e um erro é gerado.


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 860 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |


