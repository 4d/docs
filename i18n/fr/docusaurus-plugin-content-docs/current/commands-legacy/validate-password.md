---
id: validate-password
title: Validate password
slug: /commands/validate-password
displayed_sidebar: docs
---

<!--REF #_command_.Validate password.Syntax-->**Validate password** ( *utilisateur* ; *motDePasse* {; *digest*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Validate password.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| utilisateur | Integer, Text | &#8594;  | N° de référence unique ou Nom de l’utilisateur |
| motDePasse | Text | &#8594;  | Mot de passe non crypté |
| digest | Boolean | &#8594;  | Mot de passe digest = Vrai, <br/>Mot de passe en clair (défaut)= Faux |
| Résultat | Boolean | &#8592; | Vrai = mot de passe correct, Faux = mot de passe incorrect |

<!-- END REF-->

#### Description 

<!--REF #_command_.Validate password.Summary-->La commande **Validate password** retourne Vrai si la chaîne passée dans *motDePasse* est le mot de passe du compte utilisateur dont le n° de référence ou le nom est passé dans *utilisateur*.<!-- END REF-->

Le paramètre optionnel *digest* vous permet d’indiquer si le paramètre *motDePasse* contient un mot de passe en clair ou un mot de passe sous forme hachée (mode digest) :

* si vous passez **Vrai**, vous indiquez que le paramètre *motDePasse* contient un mot de passe sous forme hachée (mode digest),
* si vous passez **Faux** ou omettez ce paramètre, vous indiquez que le paramètre *motDePasse* contient un mot de passe en clair.

Ce paramètre est particulièrement utile dans le contexte de l’utilisation des méthodes base d'authentification, notamment [On REST Authentication database method](on-rest-authentication-database-method.md). 

La commande est temporisée afin d’éviter des attaques par “force brute” (essais automatiques de multiples combinaisons de noms d’utilisateurs/mots de passe). Ainsi, au bout du quatrième appel à la commande, elle n’est exécutée qu’après 10 secondes d’attente. Cette temporisation est globale au poste de travail. 

#### Exemple 1 

L’exemple suivant vérifie que “Laurel” est le mot de passe de l’utilisateur “Hardy” :

```4d
 GET USER LIST(atNomUtil;alRefUtil)
 $vlElem:=Find in array(atNomUtil;"Hardy")
 If($vlElem>0)
    If(Validate password(alRefUtil{$vlElem};"Laurel"))
       ALERT("Oui !")
    Else
       ALERT("Dommage !")
    End if
 Else
    ALERT("Nom d'utilisateur inconnu")
 End if
```

#### Exemple 2 

Dans la [On REST Authentication database method](on-rest-authentication-database-method.md), vous souhaitez tester une requête de connexion (vous utilisez les utilisateurs 4D de la base). Il vous suffit d’écrire :

```4d
 $0:=Validate password($1;$2;$3)
```

#### Voir aussi 

[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  
[WEB Validate digest](web-validate-digest.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 638 |
| Thread safe | &check; |
| Interdite sur le serveur ||


