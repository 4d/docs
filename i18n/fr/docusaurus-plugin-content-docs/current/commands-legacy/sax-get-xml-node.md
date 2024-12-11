---
id: sax-get-xml-node
title: SAX Get XML node
slug: /commands/sax-get-xml-node
displayed_sidebar: docs
---

<!--REF #_command_.SAX Get XML node.Syntax-->**SAX Get XML node** ( *document* ) : Integer<!-- END REF-->
<!--REF #_command_.SAX Get XML node.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| Résultat | Integer | &#8592; | Evénement retourné par la fonction |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX Get XML node.Summary-->La commande **SAX Get XML node** retourne un entier long indiquant le type d’événement SAX retourné durant l’analyse du document XML référencé par *document*.<!-- END REF--> 

Les événements pouvant être retournés sont fournis sous forme de constantes dans le thème “*XML*” :

| Constante                  | Type        | Valeur |
| -------------------------- | ----------- | ------ |
| XML CDATA                  | Entier long | 7      |
| XML comment                | Entier long | 2      |
| XML DATA                   | Entier long | 6      |
| XML end document           | Entier long | 9      |
| XML end element            | Entier long | 5      |
| XML entity                 | Entier long | 8      |
| XML processing instruction | Entier long | 3      |
| XML start document         | Entier long | 1      |
| XML start element          | Entier long | 4      |

#### Exemple 

Exemple de traitement des événements : 

```4d
 RefDoc:=Open document("";"xml";Read Mode) //Ouverture en lecture seule obligatoire
 If(OK=1)
    Repeat
       MonEvénement:=SAX Get XML node(RefDoc)
       Case of
          :(MonEvénement=XML Start Document)
             FaireQuelqueChose
          :(MonEvénement=XML Comment)
             FaireAutreChose
       End case
    Until(MonEvénement=XML End Document)
    CLOSE DOCUMENT(RefDoc)
 End if
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée. 


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 860 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


