---
id: edit-access
title: EDIT ACCESS
slug: /commands/edit-access
displayed_sidebar: docs
---

<!--REF #_command_.EDIT ACCESS.Syntax-->**EDIT ACCESS**<!-- END REF-->
<!--REF #_command_.EDIT ACCESS.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.EDIT ACCESS.Summary-->**EDIT ACCESS** permet de modifier le système de mots de passe.<!-- END REF--> Lorsque cette commande est exécutée, la fenêtre de la boîte à outils de 4D contenant les pages Utilisateurs et Groupes est appelée pour modifier les privilèges.

**Note :** Cette commande ouvre une fenêtre modale. Par conséquent, vous ne devez pas l'appeler depuis une autre fenêtre modale, sinon l'ouverture de la fenêtre sera impossible et la commande ne fera rien.

Les groupes peuvent être modifiés par le Super\_Utilisateur et l'Administrateur et par les propriétaires de groupe. Seuls le Super\_Utilisateur et l'Administrateur peuvent modifier tous les groupes. Les propriétaires de groupe ne peuvent modifier que leur propre groupe. Des utilisateurs peuvent être ajoutés et retirés des groupes. Cette commande ne fait rien si aucun groupe n'est défini.

Le Super\_Utilisateur et l'Administrateur peuvent créer des utilisateurs et les placer dans des groupes.

#### Exemple 

L'exemple suivant affiche la fenêtre de gestion des utilisateur et des groupes :

```4d
 EDIT ACCESS
```

#### Voir aussi 

[CHANGE CURRENT USER](change-current-user.md)  
[CHANGE PASSWORD](change-password.md)  