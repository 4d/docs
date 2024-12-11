---
id: dom-get-first-child-xml-element
title: DOM Get first child XML element
slug: /commands/dom-get-first-child-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get first child XML element.Syntax-->**DOM Get first child XML element** ( *refElemento* {; *nomElemFilho* {; *valorElemFilho*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get first child XML element.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| nomElemFilho | Text | &#8592; | Nome do elemento filho XML |
| valorElemFilho | Text | &#8592; | Valor do elemento filho XML |
| Resultado | Text | &#8592; | Referência do elemento filho XML |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Get first child XML element.Summary-->O comando DOM Get first child XML element retorna uma referência XML ao primeiro “filho” do elemento XML passado em *refElemento*.<!-- END REF--> Esta referência pode ser utilizada com outros comandos de análise XML.  

Os parâmetros *nomElemFilho e valorElemFilho*, se forem passados, recebem respectivamente o nome e o valor do elemento filho.

![](../assets/en/commands/pict39972.en.png)

#### Exemplo 1 

Recuperação da referência do primeiro elemento XML do pai raiz. A estrutura XML (C:\\\\import.xml) é carregado previamente em um BLOB: 

```4d
 var meuVarBlob : Blob
 var $xml_Pai_Ref;$xml_Filho_Ref : Text
 
 DOCUMENT TO BLOB("c:\\importar.xml";minhaVarBlob)
 $xml_Pai_Ref:=DOM Parse XML variável(minhaVarBlob)
 $xml_Filho_Ref:=DOM Get first child XML element($xml_Pai_Ref)
```

#### Exemplo 2 

Recuperação da referência, nome e valor do primeiro elemento XML do pai raiz. A estrutura XML (C:\\\\importar.xml) é carregada previamente em um BLOB: 

```4d
 var meuVarBlob : Blob
 var $xml_Pai_Ref;$xml_Filho_Ref : Text
 var $filhoNom;$filhoValor : Text
 
 DOCUMENT TO BLOB("c:\\importar.xml";meuVarBlob)
 $xml_Pai_Ref:=DOM Parse XML variable(minhaVarBlob)
 $xml_Filho_Ref:=DOM Get first child XML element($xml_Pai_Ref;$filhoNom;$filhoValor)
```

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK assume o valor 1\. Do contrário, assume o valor 0.

#### Ver também 

[DOM Get next sibling XML element](dom-get-next-sibling-xml-element.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 723 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


