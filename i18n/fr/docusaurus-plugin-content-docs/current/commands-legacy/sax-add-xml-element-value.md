---
id: sax-add-xml-element-value
title: SAX ADD XML ELEMENT VALUE
slug: /commands/sax-add-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Syntax-->**SAX ADD XML ELEMENT VALUE** ( *document* ; *données* {; *} )<!-- END REF-->
<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| données | Text, Variable | &#8594;  | Texte ou variable à insérer dans le document |
| * | Opérateur | &#8594;  | Si passé = Encoder les caractères spéciaux en mode 'XML Données brutes' |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Summary-->La commande **SAX ADD XML ELEMENT VALUE** ajoute directement dans le document XML référencé par *document* des *données* sans les convertir.<!-- END REF--> Cette commande équivaut par exemple à insérer une pièce jointe dans le corps (body) d’un email. 

Vous pouvez passer dans le paramètre *données* soit directement une chaîne de caractères, soit une variable 4D. Le contenu de la variable sera converti en texte pour pouvoir être inséré dans le document XML.   
Si vous souhaitez encoder le contenu de *données*, vous devez utiliser la commande [BASE64 ENCODE](base64-encode.md). Dans ce cas bien entendu, vous devez passer un BLOB dans *données*. 

Par défaut, la commande encode les caractères spéciaux (< > ” ’...) contenus dans le paramètre *données*, sauf si vous avez désactivé ce mécanisme pour le process courant à l'aide de la commande [XML SET OPTIONS](xml-set-options.md) en passant la valeur XML raw data à l'option XML string encoding. Par exemple :  

```4d
 XML SET OPTIONS($refDoc;XML string encoding;XML raw data)
```

  
 Dans ce contexte, pour forcer l'encodage des caractères spéciaux lors de l'appel de **SAX ADD XML ELEMENT VALUE**, il est nécessaire de passer le paramètre facultatif *\**. 

Pour que cette commande fonctionne, un élément doit être ouvert. Dans le cas contraire, une erreur est générée.

#### Exemple 

Cet exemple insère le fichier *whitepaper.pdf* dans l’élément XML ouvert :

```4d
 var vBMonBLOB : Blob
 DOCUMENT TO BLOB("c:\\whitepaper.pdf";vBMonBLOB)
 SAX ADD XML ELEMENT VALUE($RefDoc;vBMonBLOB)
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée. 

#### Voir aussi 

[SAX GET XML ELEMENT VALUE](sax-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 855 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


