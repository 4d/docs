---
id: is-new-record
title: Is new record
slug: /commands/is-new-record
displayed_sidebar: docs
---

<!--REF #_command_.Is new record.Syntax-->**Is new record** {( *laTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is new record.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de l’enregistrement à examiner ou Table par défaut si ce paramètre est omis |
| Résultat | Boolean | &#8592; | Vrai si l’enregistrement est en cours de création, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is new record.Summary-->La commande **Is new record** retourne Vrai lorsque l’enregistrement courant de *laTable* est en cours de création et n’a pas encore été sauvegardé dans le process courant.<!-- END REF-->Il est possible d’obtenir la même information avec la commande existante [Record number](record-number.md), en testant si elle retourne -3\. Toutefois, il est vivement conseillé d’utiliser dans ce cas **Is new record** plutôt que [Record number](record-number.md). En effet, la commande **Is new record** assure une meilleure compatibilité avec les futures versions de 4D.

**4D Server :** Cette commande retourne un résultat différent dans le contexte de l'événement formulaire On Validate suivant qu'elle est exécutée sur 4D en mode local ou 4D en mode distant. En mode local, la commande retourne Faux (l'enregistrement est considéré comme déjà créé). En mode distant, la commande retourne Vrai car dans ce cas, l'enregistrement est également déjà créé sur le serveur mais l'information n'a pas encore été envoyée au client.

#### Exemple 

Les deux instructions suivantes sont identiques, la seconde est conseillée pour que le code reste compatible avec les prochaines versions de 4D :

```4d
 If(Record number([Table])=-3) //Déconseillé
  // ...
 End if
 
 If(Is new record([Table])) //Conseillé
  // ...
 End if
```

#### Voir aussi 

[Modified record](modified-record.md)  
[Record number](record-number.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 668 |
| Thread safe | &check; |


