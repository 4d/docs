---
id: sax-add-processing-instruction
title: SAX ADD PROCESSING INSTRUCTION
slug: /commands/sax-add-processing-instruction
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Syntax-->**SAX ADD PROCESSING INSTRUCTION** ( *documento* ; *instruçao* )<!-- END REF-->
<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| instruçao | Text | &#8594;  | Instrução a inserir no documento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Summary-->O comando SAX ADD PROCESSING INSTRUCTION adiciona no *documento* XML referenciado por documento, uma *instruçao* de processamento XML.<!-- END REF-->  

Uma instrução de processamento permite indicar o tipo de aplicação e quando seja necessário os parâmetros adicionais que lhe permitem processar uma entidade externa não analisável.  
  
O comando dá formato aos dados da instrução em conformidade com XML. Entretanto, as instruções em si não são analisadas e depende do desenvolvedor garantir que sejam válidas.

#### Exemplo 

O código abaixo: 

```4d
 vtInstruccion:="xml-stylesheet type="+Char(Quotes)+"text/xsl"+Char(Quotes)+
 "href="+Char(Quotes)+"style.xsl"+Char(Quotes)
 SAX ADD PROCESSING INSTRUCTION($DocRef;vtInstruccion)
```

... escreverá a seguinte linha no documento: 

```4d
 
```

#### Variáveis e conjuntos do sistema 

Se ou comando tiver sido executado corretamente, a variável sistema Ok assume ou valor 1\. Se ocorrer um erro, assume ou valor 0.

#### Ver também 

[SAX GET XML PROCESSING INSTRUCTION](sax-get-xml-processing-instruction.md)  