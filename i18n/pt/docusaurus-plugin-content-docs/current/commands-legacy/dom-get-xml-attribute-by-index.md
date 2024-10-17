---
id: dom-get-xml-attribute-by-index
title: DOM GET XML ATTRIBUTE BY INDEX
slug: /commands/dom-get-xml-attribute-by-index
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Syntax-->**DOM GET XML ATTRIBUTE BY INDEX** ( *refElemento* ; *indexAtrib* ; *nomeAtrib* ; *valorAtrib* )<!-- END REF-->
<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| indexAtrib | Integer | &#8594;  | Número de índice de atributo |
| nomeAtrib | Variable | &#8592; | Nome atributo |
| valorAtrib | Variable | &#8592; | Valor atributo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Summary-->O comando DOM GET XML ATTRIBUTE BY INDEX permite conhecer o nome assim como o valor de um atributo especificado por seu número de índice.<!-- END REF-->

Passe em *refElemento* a referência de um elemento XML e em *indexAtrib* o número de índice do atributo que queira conhecer o nome. O nome se retorna no parâmetro *nomeAtrib* e seu valor se retorna no parâmetro *valorAtrib*. 4D tentará converter o valor obtido no tipo de variável passada como parâmetro. Se o tipo variável não for definido, o valor é retornado em tipo texto como padrão.  
  
**Nota**: O número de índice não corresponde à localização do atributo no arquivo XML mostrado em forma de texto. Em XML, o índice de um atributo indica sua posição entre os atributos classificados por ordem alfabética (em função de seu nome). Para ver uma ilustração deste principio, consulte o exemplo do comando [DOM Count XML attributes](dom-count-xml-attributes.md).  
  
Se o valor passado em *indexAtrib* é superior ao número de atributos presentes no elemento XML, se retorna um erro.

#### Exemplo 

Consulte o exemplo do comando [DOM Count XML attributes](dom-count-xml-attributes.md). .

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema OK assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Ver também 

[DOM GET XML ATTRIBUTE BY NAME](dom-get-xml-attribute-by-name.md)  
[DOM REMOVE XML ATTRIBUTE](dom-remove-xml-attribute.md)  