---
id: dom-append-xml-child-node
title: DOM Append XML child node
slug: /commands/dom-append-xml-child-node
displayed_sidebar: docs
---

<!--REF #_command_.DOM Append XML child node.Syntax-->**DOM Append XML child node** ( *refElemento* ; *tipoFilho* ; *valorFilho* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Append XML child node.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | elemento de referência XML |
| tipoFilho | Integer | &#8594;  | Tipo de filho a anexar |
| valorFilho | Text, Blob | &#8594;  | Texto ou variável (texto ou BLOB) cujo valor deve ser inserido como um nodo filho |
| Resultado | Text | &#8592; | Refência do elemento filho XML |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Append XML child node.Summary-->O comando DOM Append XML child node se utiliza para anexar o valor *valorFilho* ao nodo XML designado por *refElement*.<!-- END REF-->  
  
O tipo de nodo criado é especificado pelo parâmetro *tipoFilho*. Neste parâmetro se pode passar uma das seguintes constantes, do tema "*XML*":  

| Constante                  | Tipo          | Valor |
| -------------------------- | ------------- | ----- |
| XML CDATA                  | Inteiro longo | 7     |
| XML comment                | Inteiro longo | 2     |
| XML DATA                   | Inteiro longo | 6     |
| XML DOCTYPE                | Inteiro longo | 10    |
| XML ELEMENT                | Inteiro longo | 11    |
| XML processing instruction | Inteiro longo | 3     |
  
  
Em *valorFilho*, passe os dados a inserir. Passe uma string ou uma variável 4D (string ou BLOB). O conteúdo deste parâmetro sempre será convertido em texto.  
  
**Nota**: se o parâmetro *refElement* determina o nodo Document (nodo de nivel superior), o comando insere um nodo "Doctype" antes de qualquer outro nodo. O mesmo ocurre com as instruções de processamento e os comentários, que sempre são inseridos antes do nodo raiz (mas depois do nodo Doctype).

#### Exemplo 1 

Adição de um nodo de tipo texto:

```4d
 Reference:=DOM Create XML element(refElement;"myElement")
 DOM SET XML ELEMENT VALUE(Reference;"Hola")
 temp:=DOM Create XML element(Reference;"br")
 temp:=DOM Append XML child node(Reference;XML DATA;"Nueva")
 temp:=DOM Create XML element(Reference;"br")
 temp:=DOM Append XML child node(Reference;XML DATA;"York")
```

Resultado:  

```XML
<myElement>Olá<br/>Nova<br/>York</myElement>
```

#### Exemplo 2 

Adição de um nodo de tipo instrução de processo:

```4d
 $Txt_instruction:="xml-stylesheet type = \"text/xsl\" href=\"style.xsl\""
 Reference:=DOM Append XML child node(elementRef;XML Processing Instruction;$Txt_instruction)
```

Resultado (inserido antes do primeiro elemento):  

```XML
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

#### Exemplo 3 

Adição de um nodo de tipo comentário:

```4d
 Reference:=DOM Append XML child node(elementRef;XML Comment;"Olá mundo")
```

Resultado:  

```XML
<!--Olá mundo-->
```

#### Exemplo 4 

Adição de um nodo de tipo CDATA:

```4d
 Reference:=DOM Append XML child node(elementRef;XML CDATA;"12 < 18")
```

Resultado:  

```XML
<element><![CDATA[12 < 18]]></element>
```

#### Exemplo 5 

Adição ou substituição de um nodo de tipo declaração Doctype:

```4d
 Reference:=DOM Append XML child node(elementRef;XML DOCTYPE;"Books SYSTEM \"Book.DTD\"")
```

Resultado (insido antes do primeiro elemento):  

```XML
<!DOCTYPE Books SYSTEM  "Book.DTD">
```

#### Exemplo 6 

Adição ou substituição de um nodo de tipo Element.

* se o parâmetro *valorHijo* é um fragmento XML, se insere como nodos filhos:  
```4d  
 Reference:=DOM Append XML child node(refElement;XML ELEMENT;"simoneva")  
```  
    
Resultado:  
```XML  
<parent>  
    <child>simon</child>  
    <child>eva</child>  
</parent>  
```
* do contrário, se adicionar um novo elemento filho vazio:  
```4d  
 Reference:=DOM Append XML child node(elementRef;XML ELEMENT;"tbreak")  
```  
    
Resultado:  
```XML  
<parent>  
     <tbreak/>  
 </parent>  
```

Se o conteúdo de *valorFilho* não é válido, se devolve um erro. 

#### Ver também 

[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  
[DOM Get XML document ref](dom-get-xml-document-ref.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1080 |
| Thread-seguro | &check; |


