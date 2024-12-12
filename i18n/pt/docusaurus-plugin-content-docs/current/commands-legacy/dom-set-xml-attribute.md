---
id: dom-set-xml-attribute
title: DOM SET XML ATTRIBUTE
slug: /commands/dom-set-xml-attribute
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ATTRIBUTE.Syntax-->**DOM SET XML ATTRIBUTE** ( *refElemento* ; *nomeAtrib* ; *valorAtrib* {; *nomeAtrib2* ; *valorAtrib2* ; ... ; *nomeAtribN* ; *valorAtribN*} )<!-- END REF-->
<!--REF #_command_.DOM SET XML ATTRIBUTE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| nomeAtrib | Text | &#8594;  | Atributo a estabelecer |
| valorAtrib | Text, Boolean, Integer, Real, Time, Date | &#8594;  | Novo valor de atributo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM SET XML ATTRIBUTE.Summary-->O comando DOM SET XML ATTRIBUTE permite adicionar uno ou vários atributos ao elemento XML cuja referência se passa no parâmetro *refElemento*.<!-- END REF--> Também permite definir o valor de cada atributo definido.  

Passe nos parâmetros *nomeAtrib e valorAtrib* respectivamente o atributo a escrever e seu valor (em forma de variáveis, campos, ou valores literais). Pode passar tantos atributos/valores como queira.

O parâmetro *valorAtrib* pode ser de tipo texto ou de outro tipo (Booleano, inteiro, real, data ou hora). Se passar um valor de um tipo diferente a texto, 4D cuida de sua conversão a texto, de acordo com os seguintes princípios:

| **Tipo** | **Exemplo de valor convertido**            |
| -------- | ------------------------------------------ |
| Booleano | "true" ou "false"                          |
| Inteiro  | "123456"                                   |
| Real     | "12.34" (o separador decimal sempre é ".") |
| Data     | "2006-12-04T00:00:00Z" (RFC 3339 standard) |
| Hora     | "5233" (número de segundos)                |

#### Exemplo 

Na seguinte fonte XML: 

```XML
<Book>
   <Title>O melhor vendedor</Title>
</Book>
```

Se for executado o código abaixo:

```4d
 vAtrNom:="Font"
 vAtrVal:="Verdana"
 DOM SET XML ATTRIBUTE(vRefElem;vAtrNom;vAtrVal)
```

Obtemos:

```XML
<Book>
   <Title Font=Verdana>O melhor vendedor</Title>
</Book>
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Ver também 

[DOM GET XML ATTRIBUTE BY INDEX](dom-get-xml-attribute-by-index.md)  
[DOM GET XML ATTRIBUTE BY NAME](dom-get-xml-attribute-by-name.md)  
[DOM REMOVE XML ATTRIBUTE](dom-remove-xml-attribute.md)  
[XML SET OPTIONS](xml-set-options.md)  