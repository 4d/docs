---
id: sax-get-xml-processing-instruction
title: SAX GET XML PROCESSING INSTRUCTION
slug: /commands/sax-get-xml-processing-instruction
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Syntax-->**SAX GET XML PROCESSING INSTRUCTION** ( *document* ; *nom* ; *valeur* )<!-- END REF-->
<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| nom | Text | &#8592; | Nom de l’instruction |
| valeur | Text | &#8592; | Valeur de l’instruction |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Summary-->La commande **SAX GET XML PROCESSING INSTRUCTION** retourne le *nom* et la *valeur* de l’instruction de traitement XML analysée dans le document XML référencé par *document*.<!-- END REF--> Cette commande doit être appelée dans le contexte d’un événement XML processing instruction. Pour plus d'informations sur les événements SAX, reportez-vous à la description de la commande [SAX Get XML node](sax-get-xml-node.md). 

#### Exemple 

Considérons l’extrait de code XML suivant :

```XML
<?xml version="1.0" encoding="UTF-8"?> 
<!-- Edited with XML Spy v3.0.7 NT (http://www.xmlspy.com) by Myself (4D SA)--> 
<?PI TextProcess?> 
<!DOCTYPE RootElement SYSTEM "ParseTest.dtd">
```

L’instruction suivante retournera “PI” dans *vNom* et “TextProcess” dans *vValeur* : 

```4d
 SAX GET XML PROCESSING INSTRUCTION($RefDoc;vNom;vValeur)
```

#### Voir aussi 

[SAX ADD PROCESSING INSTRUCTION](sax-add-processing-instruction.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 875 |
| Thread safe | &check; |


