---
id: web-validate-digest
title: WEB Validate digest
slug: /commands/web-validate-digest
displayed_sidebar: docs
---

<!--REF #_command_.WEB Validate digest.Syntax-->**WEB Validate digest** ( *nomUtilisateur* ; *motDePasse* ) : Boolean<!-- END REF-->
<!--REF #_command_.WEB Validate digest.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomUtilisateur | Text | &#8594;  | Nom de l'utilisateur |
| motDePasse | Text | &#8594;  | Mot de passe de l'utilisateur |
| Résultat | Boolean | &#8592; | Vrai=Authentification correcte, Faux=Echec de l’authentification |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Validate digest.Summary-->La commande **WEB Validate digest** permet de vérifier la validité des identifiants (nom et mot de passe) fournis par un utilisateur se connectant au serveur Web.<!-- END REF--> Cette commande doit être utilisée dans la *Méthode base Sur authentification Web* dans le cadre d’une authentification Web en mode Digest (cf. section *Sécurité des connexions*). 

Passez dans les paramètres *nomUtilisateur* et *motDePasse* les identifiants de l’utilisateur conservés en local. La commande utilise ces identifiants pour générer une valeur qu’elle compare aux informations envoyées par le navigateur Web.

Si les valeurs sont identiques, la commande retourne Vrai. Sinon, elle retourne Faux.

Ce mécanisme vous permet de gérer et de maintenir par programmation votre propre système sécurisé d’accès au serveur Web. A noter que la validation Digest ne peut pas être utilisée conjointement avec les mots de passe 4D.

**Note :** Si le navigateur ne prend pas en charge l’authentification Digest, une erreur est retournée (erreur d’authentification).

#### Exemple 

Exemple de *Méthode base Sur authentification Web* en mode Digest 

```4d
  // Méthode base Sur authentification Web
 var $1;$2;$5;$6;$3;$4 : Text
 var $utilisateur : Text
 var $0 : Boolean
 $0:=False
 $utilisateur:=$5
     //Pour des raisons de sécurité, refuser les noms qui contiennent @
 If(AvecJoker($utilisateur))
       $0:=False
           //La méthode AvecJoker est décrite dans la section "Méthode base Sur authentification Web"
 Else
       QUERY([WebUsers];[WebUsers]User=$utilisateur)
       If(OK=1)
          $0:=WEB Validate digest($utilisateur;[WebUsers]Mdp)
       Else
          $0:=False //Utilisateur inexistant
       End if
 End if
```

#### Voir aussi 

[Generate digest](generate-digest.md)  
[Validate password](validate-password.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 946 |
| Thread safe | &check; |


