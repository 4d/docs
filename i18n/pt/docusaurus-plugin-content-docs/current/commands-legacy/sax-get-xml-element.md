---
id: sax-get-xml-element
title: SAX GET XML ELEMENT
slug: /commands/sax-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT.Syntax-->**SAX GET XML ELEMENT** ( *documento* ; *nome* ; *prefixo* ; *nomesAtributos* ; *valoresAtributos*  )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| nome | Text | &#8592; | Element name |
| prefixo | Text | &#8592; | Namespace |
| nomesAtributos | Text array | &#8592; | Attribute names |
| valoresAtributos | Text array | &#8592; | Attribute values |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX GET XML ELEMENT.Summary-->O comando SAX GET XML ELEMENT devolve diversa informação relativa ao elemento nome presente no documento XML referenciado por documento.<!-- END REF--> Este comando deve ser chamado com os eventos XML Start Element ou XML End Element SAX. No caso específico de XML End Element, os parâmetros de atributos não são manipulados. Para maior informação sobre os eventos SAX, consulte a descrição do comando [SAX Get XML node](sax-get-xml-node.md).  

O parâmetro *nome* contém o nome do elemento.  
  
O parâmetro *prefixo* devolve o espaço de nome (namespace) do elemento. Este parâmetro está vazio se nenhum espaço de nome estiver associado ao elemento.  
  
O comando preenche o array *nomsAtributos* com os nomes dos atributos do elemento objetivo. Se for necessário, o comando cria e dimensiona automaticamente o array.  
  
O comando também preenche o array *valoresAtributos* com os valores dos atributos do elemento objetivo. Se for necessário, o comando cria e dimensiona automaticamente o array.

#### Exemplo 

Consideremos o código XML abaixo: 

```4d
 
 MeuTexto
 
```

Quando executar a seguinte instrução: 

```4d
 SAX GET XML ELEMENT(DocRef;vNome;vPrefixo;tAttrNomes;tAttrValores)
```

...*vNome* conterá “Filho”  
*vPrefix* conterá “”  
*tAttrNomes{1}* conterá “Att1”, *tAttrNomes{2}* conterá “Att2”, *tAttrNomes{3}* conterá “Att3”  
*tAttrValores{1}* conterá “111”, *tAttrValores{2}* conterá “222”, *tAttrValores{3}* conterá “333”

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Do contrário, assume o valor e se gera um erro.

#### Ver também 

[SAX Get XML node](sax-get-xml-node.md)  