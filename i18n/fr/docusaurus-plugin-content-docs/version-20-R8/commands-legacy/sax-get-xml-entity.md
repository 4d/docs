---
id: sax-get-xml-entity
title: SAX GET XML ENTITY
slug: /commands/sax-get-xml-entity
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ENTITY.Syntax-->**SAX GET XML ENTITY** ( *document* ; *nom* ; *valeur* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ENTITY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| nom | Text | &#8592; | Nom de l’entité |
| valeur | Text | &#8592; | Valeur de l’entité |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX GET XML ENTITY.Summary-->La commande **SAX GET XML ENTITY** permet de récupérer le *nom* et la *valeur* d’une entité XML présente dans le document XML référencé par *document*.<!-- END REF--> Elle doit être appelée dans le contexte d’un événement SAX XML entity. Pour plus d'informations sur les événements SAX, reportez-vous à la description de la commande [SAX Get XML node](sax-get-xml-node.md). 

#### Exemple 

Considérons l’extrait de code XML suivant :

```XML
<?xml version="1.0" encoding="UTF-8"?> 
<!DOCTYPE body [ <
<!ELEMENT body (element*)> 
<!ELEMENT element (#PCDATA)> 
<!ENTITY nom "Le remplacement">
]>
<body> 
<element>L’entité est mise à jour par &nom; 
</body>
```

L’instruction suivante retournera “nom” dans *vNom* et “Le remplacement” dans *vValeur*. 

```4d
 SAX GET XML ENTITY(RefDoc;vNom;vValeur)
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée. 

#### Voir aussi 

[SAX Get XML node](sax-get-xml-node.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 879 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


