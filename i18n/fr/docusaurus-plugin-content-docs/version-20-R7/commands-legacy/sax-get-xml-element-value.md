---
id: sax-get-xml-element-value
title: SAX GET XML ELEMENT VALUE
slug: /commands/sax-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Syntax-->**SAX GET XML ELEMENT VALUE** ( *document* ; *valeur* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT VALUE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| valeur | Text, Blob | &#8592; | Valeur de l’élément |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Summary-->La commande **SAX GET XML ELEMENT VALUE** permet de récupérer la *valeur* d’un élément XML existant dans le document XML référencé par *document*.<!-- END REF--> Elle doit être appelée dans le contexte d’un événement SAX XML DATA. Pour plus d'informations sur les événements SAX, reportez-vous à la description de la commande [SAX Get XML node](sax-get-xml-node.md). 

Passez dans le paramètre *valeur* une variable de type Texte ou BLOB devant récupérer les données. Si vous passez un BLOB, la commande tentera automatiquement de le décoder en base64.

#### Exemple 

Considérons l’extrait de code XML suivant :

```XML
<RootElement>
   <Child Att1="111" Att2="222" Att3="333">MonTexte</Child>
</RootElement>
```

L’instruction suivante retournera “MonTexte” dans *vValeur* :

```4d
 SAX GET XML ELEMENT VALUE(RefDoc;vValeur)
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée.

#### Voir aussi 

[SAX ADD XML ELEMENT VALUE](sax-add-xml-element-value.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 877 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


