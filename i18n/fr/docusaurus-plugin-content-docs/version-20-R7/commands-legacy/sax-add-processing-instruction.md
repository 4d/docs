---
id: sax-add-processing-instruction
title: SAX ADD PROCESSING INSTRUCTION
slug: /commands/sax-add-processing-instruction
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Syntax-->**SAX ADD PROCESSING INSTRUCTION** ( *document* ; *instruction* )<!-- END REF-->
<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| instruction | Text | &#8594;  | Instruction à insérer dans le document |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Summary-->La commande **SAX ADD PROCESSING INSTRUCTION** ajoute dans le document XML référencé par *document* une *instruction* de traitement XML.<!-- END REF--> 

Une instruction de traitement permet d’indiquer le type d’application et éventuellement des paramètres additionnels permettant de traiter une entité externe non analysable. 

La commande formate les données d’instruction conformément au XML. En revanche, les instructions elles-mêmes ne sont pas analysées, il revient au développeur de s’assurer qu’elles sont valides.

#### Exemple 

Le code suivant : 

... inscrira cette ligne dans le document : 

```4d
 vtInstruct:="xml-stylesheet type="+Char(Double quote)+"text/xsl"+Char(Double quote)+"href="+
 Char(Double quote)+"style.xsl"+Char(Double quote)
 SAX ADD PROCESSING INSTRUCTION($RefDoc;vtInstruct)
```

... inscrira cette ligne dans le document : 

```XML
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée. 

#### Voir aussi 

[SAX GET XML PROCESSING INSTRUCTION](sax-get-xml-processing-instruction.md)  