---
id: sax-open-xml-element
title: SAX OPEN XML ELEMENT
slug: /commands/sax-open-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT.Syntax-->**SAX OPEN XML ELEMENT** ( *documento* ; *etiqueta* {; *nomeAtrib* ; *valorAtributo*} {; *nomeAtrib2* ; *valorAtributo2* ; ... ; *nomeAtribN* ; *valorAtributoN*} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| etiqueta | Text | &#8594;  | Nome do elemento a abrir |
| nomeAtrib | Text | &#8594;  | Nome de atributo |
| valorAtributo | Text | &#8594;  | Valor do atributo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX OPEN XML ELEMENT.Summary-->O comando SAX OPEN XML ELEMENT permite adicionar um novo elemento no documento XML referenciado por *documento*, assim como, opcionalmente, atributos e seus valores.<!-- END REF-->  
  
O elemento adicionado está “aberto” no documento (a etiqueta de final não foi adicionada). Para fechar um elemento criado utilizando este comando, deve:  

* Utilizar o comando [SAX CLOSE XML ELEMENT](sax-close-xml-element.md), ou
* Fechar o documento XML. Neste caso, 4D adicionará automaticamente as etiquetas XML de fechamento necessárias.
Em *etiqueta*, passe o nome do elemento a criar. Este nome apenas pode conter letras, números e os caracteres “.”, “-“,”\_” e “:”. Se for passado um caractere inválido em etiqueta, se gerará um erro.  
  
Opcionalmente, o comando permite passar um ou vários pares de atributos/valores (em forma de variáveis, campos ou valores literais) utilizando os parâmetros *nomeAtributo e valorAtributo*. Pode passar tantos pares atributo/valor como queira.

#### Exemplo 

A seguinte instrução: 

```4d
 vElement:="Livro"
 SAX OPEN XML ELEMENT($DocRef;vElement)
```

... escreverá a linha abaixo no documento: 

```4d
 <book< pre=""></book<>
```

#### Gestão de erros 

Se passar em tag um caractere inválido, se gera um erro. 

#### Ver também 

[SAX CLOSE XML ELEMENT](sax-close-xml-element.md)  
[SAX OPEN XML ELEMENT ARRAYS](sax-open-xml-element-arrays.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 853 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


