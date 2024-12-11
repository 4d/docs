---
id: modified-record
title: Modified record
slug: /commands/modified-record
displayed_sidebar: docs
---

<!--REF #_command_.Modified record.Syntax-->**Modified record** {( *laTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Modified record.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle tester si l'enregistrement courant a été modifié ou Table par défaut si paramètre omis |
| Résultat | Boolean | &#8592; | L'enregistrement a été modifié (Vrai) ou L'enregistrement n'a pas été modifié (Faux) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Modified record.Summary-->**Modified record** retourne Vrai si l'enregistrement courant de *laTable* a été modifié et non encore stocké.<!-- END REF--> Sinon, elle retourne Faux. Cette fonction vous permet de déterminer rapidement s'il faut stocker l'enregistrement. Dans les formulaires entrée, vous pouvez effectuer le test avant d'aller à l'enregistrement suivant. 

A noter que cette fonction retourne toujours Vrai dans les contextes suivants :

* l'enregistrement courant est un nouvel enregistrement,
* après l'exécution des commandes [PUSH RECORD](push-record.md) et [POP RECORD](pop-record.md),
* dès qu'une valeur a été affectée à un champ de l'enregistrement, même s'il s'agit d'une valeur identique à la précédente. Par exemple, **Modified record** retourne Vrai après l'exécution de l'instruction suivante :  
```4d  
 [Table_1]Champ_1:=[Table_1]Champ_1  
```

#### Exemple 

L'exemple suivant montre une utilisation typique de **Modified record** :

```4d
 If(Modified record([Clients]))
    SAVE RECORD([Clients])
 End if
```

#### Voir aussi 

[Modified](modified.md)  
[Old](old.md)  
[SAVE RECORD](save-record.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 314 |
| Thread safe | &check; |
| Interdite sur le serveur ||


