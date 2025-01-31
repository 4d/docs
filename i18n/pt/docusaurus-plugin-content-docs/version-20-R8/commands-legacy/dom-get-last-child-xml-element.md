---
id: dom-get-last-child-xml-element
title: DOM Get last child XML element
slug: /commands/dom-get-last-child-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get last child XML element.Syntax-->**DOM Get last child XML element** ( *refElemento* {; *nomElemFilho* {; *valorElemFilho*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get last child XML element.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| nomElemFilho | Text | &#8592; | Nome do elemento filho |
| valorElemFilho | Text | &#8592; | Valor do elemento filho |
| Resultado | Text | &#8592; | Referência do elemento XML |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Get last child XML element.Summary-->O comando DOM Get last child XML element retorna uma referência XML ao último “filho” do elemento XML passado como referência em *refElemento*.<!-- END REF--> Esta referência pode ser utilizado com outros comandos de análise XML.  

Os parâmetros opcionais *nomElemFilho* e *valorElemFilho*, se forem passados, recebem respectivamente o nome e o valor do elemento “filho”.

#### Exemplo 

Recuperação da referência do último elemento XML do padre raiz. A estrutura XML (C:\\\\importar.xml) se carrega previamente em um BLOB: 

```4d
 var meuVarBlob : Blob
 var $ref_XML_Pai;$ref_XML_Filho : Text
 var $nomeFilho;$valorFilho : Text
 
 DOCUMENT TO BLOB("c:\\importar.xml";meuVarBlob)
 $ref_XML_Pai:=DOM Parse XML variable(meuVarBlob)
 $ref_XML_Filho:=DOM Get last child XML element($ref_XML_Pai;$nomeFilho;$valorFilho)
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema OK assume o valor 1\. Do contrário, assume o valor 0.

#### Ver também 

[DOM Get first child XML element](dom-get-first-child-xml-element.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 925 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


