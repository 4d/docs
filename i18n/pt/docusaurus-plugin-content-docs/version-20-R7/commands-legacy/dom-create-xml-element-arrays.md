---
id: dom-create-xml-element-arrays
title: DOM Create XML element arrays
slug: /commands/dom-create-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML element arrays.Syntax-->**DOM Create XML element arrays** ( *arrayNomesAtrib* ; *xRota* {; *atribNomesArray* ; *atribValoresArray*} {; *atribNomesArray2* ; *atribValoresArray2* ; ... ; *atribNomesArrayN* ; *atribValoresArrayN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML element arrays.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrayNomesAtrib | Text | &#8594;  | Array dos nomes de atributo |
| xRota | Text | &#8594;  | Caminho xRota do elemento XML a ser criado |
| atribNomesArray | Text array | &#8594;  | Array de nomes de atributo |
| atribValoresArray | Text array | &#8594;  | Array dos valores de atributos |
| Resultado | Text | &#8592; | Referência do elemento XML criado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Create XML element arrays.Summary-->O comando DOM Create XML element arrays é utilizado para adicionar um novo elemento no elemento XML de *refElement*, além de, opcionalmente, atributos e seus valores em forma de arrays.<!-- END REF-->  
  
Exceto pelos arrays compatíveis (ver abaixo), este comando é idêntico a DOM Criate XML element. Por favor consulte a descrição deste comando para conhecer maiores detalhes de seu funcionamento.   
  
Opcionalmente, o comando permite passar vários pares de atributos e valores de atributos na forma de arrays nos parâmetros *arrayNomsAtrib* e *arrayValoresAtrib*. Em *arrayValoresAtrib*, pode passar arrays de tipo texto, data, numérico e imagem. 4D realiza automaticamente as conversões necessarias; pode modificar estas conversões utilizando o comando [XML SET OPTIONS](xml-set-options.md).  
  
Os arrays devem ter sido criados previamente e funcionar aos pares. Pode passar tantos pares de arrays e de elementos quantos queira em cada par.

#### Exemplo 

Se quisermos criar o elemento abaixo:

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<RootElement>
   <Elem1>
      <Elem2>
         <Elem3 Font="Verdana" Size="10" Style="Bold"></Elem3>
      </Elem2>
   </Elem1>
</RootElement>
```

Para isso, basta escrever:

```4d
 ARRAY TEXT(arrAttNames;3)
 ARRAY TEXT(arrAttValues;3)
 arrAttNames{1}:="Font"
 arrAttValues{1}:="Verdana"
 arrAttNames{2}:="Size"
 arrAttValues{2}:="10"
 arrAttNames{3}:="Style"
 arrAttValues{3}:="Bold"
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElementRef:=DOM Create XML element arrays(vRootRef;vxPath;arrAttNames;arrAttValues)
```

#### Ver também 

[DOM Create XML element](dom-create-xml-element.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1097 |
| Thread-seguro | &check; |
| Proibido no servidor ||


