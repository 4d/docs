---
id: change-password
title: CHANGE PASSWORD
slug: /commands/change-password
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE PASSWORD.Syntax-->**CHANGE PASSWORD** ( *motDePasse* )<!-- END REF-->
<!--REF #_command_.CHANGE PASSWORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| motDePasse | Text | &#8594;  | Nouveau mot de passe |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.CHANGE PASSWORD.Summary-->**CHANGE PASSWORD** permet de changer le mot de passe de l'utilisateur courant.<!-- END REF--> Cette commande remplace le mot de passe courant par le nouveau mot de passe que vous passez dans *motDePasse*. 

**Attention :** Les mots de passe différencient les caractères majuscules et minuscules.

#### Exemple 

L'exemple suivant permet à l'utilisateur de modifier son mot de passe :

```4d
 CHANGE CURRENT USER // Afficher la boîte de dialogue des mots de passe
 If(OK=1)
    $pw1:=Request("Saisissez le nouveau mot de passe pour "+Current user)
  // Le mot de passe doit comporter au moins cinq caractères
    If(((OK=1)&($pw1#""))&(Length($pw1)>5))
  // Vérifier qu'un mot de passe valide a été saisi
       $pw2:=Request("Saisissez de nouveau le mot de passe")
       If((OK=1)&($pw1=$pw2))
          CHANGE PASSWORD($pw2) // Modifier le mot de passe
       End if
    End if
 End if
```

#### Voir aussi 

[CHANGE CURRENT USER](change-current-user.md)  
[OBJECT SET FONT](object-set-font.md)  