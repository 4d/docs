---
id: sax-close-xml-element
title: SAX CLOSE XML ELEMENT
slug: /commands/sax-close-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX CLOSE XML ELEMENT.Syntax-->**SAX CLOSE XML ELEMENT** ( *documento* )<!-- END REF-->
<!--REF #_command_.SAX CLOSE XML ELEMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX CLOSE XML ELEMENT.Summary-->O comando SAX CLOSE XML ELEMENT escreve no documento XML referenciado por *documento* as instruções necessárias para fechar o último elemento aberto utilizando o comando [SAX OPEN XML ELEMENT](sax-open-xml-element.md).<!-- END REF-->  

O uso deste comando é opcional. Na verdade, 4D adiciona automaticamente, se for necessário, as etiquetas de final dos elementos não fechados explicitamente, no momento do fechamento dos documentos 

#### Exemplo 

Se o último elemento aberto for *<Book>*, a instrução abaixo: 

```4d
 SAX CLOSE XML ELEMENT($DocRef)
```

... escreverá a seguinte linha no documento: 

```4d
 
```

#### Ver também 

[SAX OPEN XML ELEMENT](sax-open-xml-element.md)  
[SAX OPEN XML ELEMENT ARRAYS](sax-open-xml-element-arrays.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 854 |
| Thread-seguro | &check; |
| Proibido no servidor ||


