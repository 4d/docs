---
id: read-only-state
title: Read only state
slug: /commands/read-only-state
displayed_sidebar: docs
---

<!--REF #_command_.Read only state.Syntax-->**Read only state** {( *laTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Read only state.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle il faut tester l'état ou Table par défaut si ce paramètre est omis |
| Résultat | Boolean | &#8592; | Accès à la table est lecture seulement (Vrai) ou Accès à la table est lecture-écriture (Faux) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Read only state.Summary-->La fonction **Read only state** est utilisé pour tester si *laTable* est en mode lecture seulement dans le process où la fonction est appelée.<!-- END REF-->retourne Vrai si *laTable* est en lecture seulement, et Faux si *laTable* est en lecture-écriture.

#### Exemple 

L'exemple suivant teste le statut de la table \[Factures\]. Si elle est en lecture seulement, le mode lecture-écriture lui est appliqué et l'enregistrement courant est rechargé.

```4d
 If(Read only state([Factures]))
    READ WRITE([Factures])
    LOAD RECORD([Factures])
 End if
```

**Note :** L'enregistrement courant est rechargé pour permettre à l'utilisateur de le modifier. En effet, un enregistrement précédemment chargé en mode lecture seulement reste verrouillé jusqu'à ce qu'il soit rechargé en mode lecture-écriture.

#### Voir aussi 

[READ ONLY](read-only.md)  
[READ WRITE](read-write.md)  
*Verrouillage d'enregistrements*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 362 |
| Thread safe | &check; |
| Interdite sur le serveur ||


