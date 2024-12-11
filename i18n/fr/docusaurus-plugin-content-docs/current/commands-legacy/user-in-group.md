---
id: user-in-group
title: User in group
slug: /commands/user-in-group
displayed_sidebar: docs
---

<!--REF #_command_.User in group.Syntax-->**User in group** ( *nomUtilisateur* ; *groupe* ) : Boolean<!-- END REF-->
<!--REF #_command_.User in group.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomUtilisateur | Text | &#8594;  | Nom de l'utilisateur (compte) |
| groupe | Text | &#8594;  | Nom du groupe |
| Résultat | Boolean | &#8592; | Vrai = utilisateur est dans groupe Faux = utilisateur n'est pas dans groupe |

<!-- END REF-->

#### Description 

<!--REF #_command_.User in group.Summary-->La fonction **User in group** retourne Vrai si *nomUtilisateur* appartient au *groupe*.<!-- END REF-->

**Note :** Cette commande attend comme paramètre *nomUtilisateur* un nom de compte utilisateur (elle ne prend pas en charge les alias d'utilisateurs). Si vous avez défini des alias d'utilisateurs dans votre application, passez le paramètre 4D user account à la commande [Current user](current-user.md) pour vous assurer qu'elle retourne un nom de compte utilisateur (voir exemple).

#### Exemple 

L'exemple suivant recherche des factures. Si l'utilisateur courant est dans le groupe Administration, il pourra accéder aux formulaires qui affichent des informations confidentielles. Sinon, des formulaires standard sont affichés :

```4d
 QUERY([Factures];[Factures]Prix>100)
 If(User in group(Current user(4D user account);"Administration"))
  //Le paramètre Compte utilisateur 4D est nécessaire si vous
  //utilisez des alias d'utilisateurs 4D dans votre application
    FORM SET OUTPUT([Factures];"Confidentiel_Sortie")
    FORM SET INPUT([Factures];"Conf_Saisie")
 Else
    FORM SET OUTPUT([Factures];"Sortie_Standard")
    FORM SET INPUT([Factures];"Entrée_Standard")
 End if
 MODIFY SELECTION([Factures];*)
```

#### Voir aussi 

[Current user](current-user.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 338 |
| Thread safe | &check; |
| Interdite sur le serveur ||


