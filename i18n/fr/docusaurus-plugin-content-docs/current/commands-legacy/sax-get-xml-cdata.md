---
id: sax-get-xml-cdata
title: SAX GET XML CDATA
slug: /commands/sax-get-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML CDATA.Syntax-->**SAX GET XML CDATA** ( *document* ; *valeur* )<!-- END REF-->
<!--REF #_command_.SAX GET XML CDATA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| valeur | Text, Blob | &#8592; | Valeur de l’élément |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML CDATA.Summary-->La commande **SAX GET XML CDATA** permet de récupérer la *valeur* CDATA d’un élément XML existant dans le document XML référencé par *document*.<!-- END REF--> Elle doit être appelée dans le contexte d’un événement SAX XML CDATA. Pour plus d'informations sur les événements SAX, reportez-vous à la description de la commande [SAX Get XML node](sax-get-xml-node.md). 

Passez une variable *valeur* de type Texte si vous souhaitez récupérer des données de taille supérieure à 32 Ko (la base doit fonctionner en mode Unicode). 

**Note de compatibilité :** A compter de 4D v12, les contenus CDATA encodés en base64 sont automatiquement décodés par la commande **SAX GET XML CDATA**, il est donc inutile d'appeler la commande [BASE64 DECODE](base64-decode.md). 

#### Exemple 

Considérons l’extrait de code XML suivant :

```XML
<RootElement>
   <Child>MonTexte<![CDATA[MonCData]]</Child>
</RootElement>
```

Le code 4D suivant retournera “MonCData” dans *vDonnéesTexte* : 

```4d
 var vDonnées : Blob
 var vDonnéesTexte : Text
 SAX GET XML CDATA(RefDoc;vDonnées)
 vDonnéesTexte:=BLOB to text(vDonnées;UTF8 C string)
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée.

#### Voir aussi 

[SAX ADD XML CDATA](sax-add-xml-cdata.md)  
[SAX Get XML node](sax-get-xml-node.md)  