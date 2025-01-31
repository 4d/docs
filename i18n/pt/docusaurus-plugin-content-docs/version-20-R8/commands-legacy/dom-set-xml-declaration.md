---
id: dom-set-xml-declaration
title: DOM SET XML DECLARATION
slug: /commands/dom-set-xml-declaration
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML DECLARATION.Syntax-->**DOM SET XML DECLARATION** ( *refElemento* ; *codificaçao* {; *autonomo* {; *recuo*}} )<!-- END REF-->
<!--REF #_command_.DOM SET XML DECLARATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| codificaçao | Text | &#8594;  | Conjunto de caracteres usado no documento XML |
| autonomo | Boolean | &#8594;  | True=documento é autônomo; False (padrão) = documento não é autônomo |
| recuo | Boolean | &#8594;  | ***Obsoleto, não usar*** |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM SET XML DECLARATION.Summary-->O comando DOM SET XML DECLARATION permite definir diferentes opções que são úteis na criação da árvore XML designado por *elementRef*.<!-- END REF--> Estas opções fazem referência à codificação e à propriedade autônoma da árvore:  

* codificação: indica o conjunto de caracteres utilizado no documento. Como padrão (se não for chamado ao comando), se utiliza o conjunto de caracteres UTF-8 (Unicode comprimido).  
**Nota:** se passar um conjunto de caracteres que não seja suportado por comandos 4D XML, será usado UTF-8\. Veja *Conjuntos de caracteres* para uma lista de conjuntos de caracteres suportados (entretanto para a maioria dos casos UTF-8 é recomendado).
* autônomo: indica se a árvore é autônoma (True) ou se necesita outros arquivos ou recursos externos para seu funcionamento (False). Como padrão (se o comando não for chamado ou se for omitido o parâmetro), a árvore não é autônoma.
**Nota de compatibilidade**: O parâmetro indentação se conserva por razões de compatibilidade com as versões anteriores de 4D mas seu uso não é recomendado em 4D v12\. De agora em diante, para especificar a indentação do documento, se recomenda utilizar o comando [XML SET OPTIONS](xml-set-options.md)

#### Exemplo 

O exemplo define a codificação a utilizar e a opção autônoma do elemento *elementRef*: 

```4d
 DOM SET XML DECLARATION(elementRef;"UTF-16";True)
```

#### Ver também 

[DOM Create XML Ref](dom-create-xml-ref.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 859 |
| Thread-seguro | &check; |


