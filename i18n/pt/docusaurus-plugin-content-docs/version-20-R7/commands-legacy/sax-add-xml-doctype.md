---
id: sax-add-xml-doctype
title: SAX ADD XML DOCTYPE
slug: /commands/sax-add-xml-doctype
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML DOCTYPE.Syntax-->**SAX ADD XML DOCTYPE** ( *documento* ; *docType* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML DOCTYPE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| docType | Text | &#8594;  | DOCTYPE a ser adicionado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX ADD XML DOCTYPE.Summary-->O comando SAX ADD XML DOCTYPE adiciona a instrução DocType definida pelo parâmetro *docType* no documento XML referenciado por *documento*.<!-- END REF-->  

A instrução DocType permite indicar o tipo de XML no qual o documento foi escrito e especificar a Declaração de tipo de documento (DTD) utilizada. Uma instrução DocType geralmente tem a seguinte forma: <!DOCTYPE XML\_type "DTD\_address">.

#### Exemplo 

A instrução: 

```4d
 vDocType:="SYSTEM Books \"Book.DTD\""
 SAX ADD XML DOCTYPE($DocRef;vDocType)
```

... escreverá a linha abaixo no documento:  

```4d
 
```

#### Variáveis e conjuntos do sistema 

 Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Gestão de erros 

Em caso de erro, o comando retorna um erro que possa ser interceptado usando um método de gestão de erros.

#### Ver também 

[SAX ADD XML COMMENT](sax-add-xml-comment.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 851 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |
| Proibido no servidor ||


