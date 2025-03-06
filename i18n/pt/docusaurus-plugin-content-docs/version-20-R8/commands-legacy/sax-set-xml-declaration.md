---
id: sax-set-xml-declaration
title: SAX SET XML DECLARATION
slug: /commands/sax-set-xml-declaration
displayed_sidebar: docs
---

<!--REF #_command_.SAX SET XML DECLARATION.Syntax-->**SAX SET XML DECLARATION** ( *documento* ; *codificaçao* {; *autonomo*} )<!-- END REF-->
<!--REF #_command_.SAX SET XML DECLARATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| codificaçao | Text | &#8594;  | Conjunto de caracteres usado no documento XML |
| autonomo | Boolean | &#8594;  | True= o documento é autônomo (standalone); False (padrão) = documento não é standalone |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX SET XML DECLARATION.Summary-->O comando **SAX SET XML DECLARATION** inicializa o documento XML referenciado por *documento* utilizando a codificação especificada.<!-- END REF--> Opcionalmente, pode estabelecer o atributo standalone/autônomo.

* *codificação*: indica o conjunto de caracterees utilizado no documento. Por padrão (se não se llama al comando), se utiliza o conjunto de caracterees UTF-8 (Unicode comprimido).  
**Nota:** se passar um conjunto de caracteres que não seja suportado por comandos 4D XML, será usado UTF-8\. Veja *Conjuntos de caracteres* para uma lista dos conjuntos de caracteres suportados (entretanto na maioria dos casos é recomendado UTF-8).
* *autonômo* (standalone): indica se o documento é autonomo (True) ou se depende, para seu funcionamento, de outros arquivos ou de recursos externos (False). Por padrão (se não for chamado o comando ou se o parâmetro for omitido), o documento não é autônomo.

**Nota**: Pode especificar a indentação do documento graças ao comando [XML SET OPTIONS](xml-set-options.md) antes de escrever qualquer coisa.  
  
Este comando deve ser chamado uma única vez por documento e antes do primeiro comando de escrita XML no documento; do contrário, se gerará uma mensagem de erro.

#### Exemplo 

O código abaixo: 

```4d
 SAX SET XML DECLARATION($DocRef;"UTF-16";True)
```

... escreverá esta linha no documento: 

```4d
 
```

#### Ver também 

[SAX GET XML DOCUMENT VALUES](sax-get-xml-document-values.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 858 |
| Thread-seguro | &check; |


