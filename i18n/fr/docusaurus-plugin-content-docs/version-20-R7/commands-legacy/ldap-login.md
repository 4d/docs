---
id: ldap-login
title: LDAP LOGIN
slug: /commands/ldap-login
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGIN.Syntax-->**LDAP LOGIN** ( *url* ; *login* ; *motDePasse* {; *digest*} )<!-- END REF-->
<!--REF #_command_.LDAP LOGIN.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| url | Text | &#8594;  | URL du serveur LDAP auquel se connecter |
| login | Text | &#8594;  | Compte de l'utilisateur |
| motDePasse | Text | &#8594;  | Mot de passe de l’utilisateur |
| digest | Integer | &#8594;  | 0 = envoyer mot de passe en digest MD5 (défaut), 1 = envoyer mot de passe sans encryptage |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LDAP LOGIN.Summary-->La commande **LDAP LOGIN** ouvre une connexion en lecture seule sur le serveur LDAP désigné par le paramètre *url* avec les identifiants *login* et *motDePasse* fournis.<!-- END REF--> Si elle est acceptée par le serveur, cette connexion sera utilisée pour toutes les recherches LDAP effectuées par la suite dans le process courant, jusqu'à ce que la commande [LDAP LOGOUT](ldap-logout.md) soit exécutée (ou que le process soit terminé). 

Dans *url*, passez l'URL complet du serveur LDAP auquel se connecter, incluant le *scheme* et le port (389 by default). Ce paramètre doit être conforme à la [rfc2255](https://www.ietf.org/rfc/rfc2255.txt).   
Vous pouvez ouvrir une connexion sécurisée via TLS en passant un *url* qui débute par "ldaps" et qui utilise un numéro de port spécifique (par exemple "ldaps://svr.ldap.acme.com:1389"). Le serveur LDAP doit généralement disposer d'un certificat SSL (c'est le cas pour MS Active Directory). Il est fortement recommandé d'utiliser une connexion TLS lorsque le mot de passe est transmis en texte brut (voir ci-dessous).

**Note :** Si vous passez une chaîne vide dans le paramètre *url*, la commande tentera de se connecter au serveur LDAP par défaut disponible sur le domaine (cette fonction est destinée uniquement aux besoins liés aux tests, pour des raisons de performances elle ne doit pas être utilisée en production). 

Dans *login*, passez le compte utilisateur sur le serveur LDAP et dans *motDePasse*, passez le mot de passe du compte. Le *login* peut prendre l'une des formes suivantes, en fonction de la configuration du serveur LDAP :

* un Distinguished Name (DN), par exemple "CN=John Smith,OU=users,DC=example,DC=com"
* un nom d'utilisateur (CN), par exemple "CN=John Smith"
* une adresse email, par exemple "johnsmith@4d.fr"
* un SAM-Account-Name, par exemple "jsmith".

Notez que les valeurs admises pour le *login* sont liées au mode de transmission du mot de passe, défini par le paramètre *digest*. Par exemple, dans une configuration par défaut de MS Active Directory :

* Lorsque le mode de transmission est LDAP password MD5, la seule valeur acceptée pour une connexion utilisateur est le SAM-Account-Name.
* Lorsque le mode de transmission est LDAP password plain text (texte brut), le paramètre *login* peut contenir soit un DN, un CN ou une adresse email. Un SAM-Account-Name peut être utilisé s'il est précédé du nom de domaine (par exemple "dc-acme.com/jsmith").

Le paramètre *digest* vous permet de modifier le mode de transmission du mot de passe sur le réseau. Vous pouvez utiliser une des constantes suivantes, placées dans le thème "*LDAP*" :

| Constante                | Type        | Valeur | Comment                                                           |
| ------------------------ | ----------- | ------ | ----------------------------------------------------------------- |
| LDAP password MD5        | Entier long | 0      | (Défaut) Envoi du mot de passe encrypté en MD5                    |
| LDAP password plain text | Entier long | 1      | Envoi du mot de passe sans encryptage (connexion TLS recommandée) |

Par défaut, le *motDePasse* est transmis en digest MD5\. Passez LDAP password plain text si nécessaire, par exemple si vous voulez utiliser des chaîne de *login* différentes avec le serveur LDAP. Dans un environnement de production, il est fortement recommandé dans ce cas de recourir à une connexion TLS dans le paramètre *url*. 

**Note :** L'authentification avec un mot de passe vide vous permet d'activer le mode de connexion anonyme (s'il est autorisé par le serveur LDAP). Cependant, des erreurs pourront être générées si vous essayez d'effectuer des opérations non autorisées dans ce mode spécifique. 

Si les paramètres de connexion sont valides, une connexion au serveur LDAP est ouverte dans le process 4D. Vous pouvez alors rechercher et récupérer des informations à l'aide des commandes LDAP.

N'oubliez pas d'appeler la commande [LDAP LOGOUT](ldap-logout.md) lorsque la connexion au serveur LDAP n'est plus nécessaire. 

#### Exemple 1 

Vous voulez vous connecter à un serveur LDAP et effectuer une recherche :

```4d
 ARRAY TEXT($_tabAttributes;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes;"phoneNumber")
 LDAP LOGIN("ldap://srv.dc.acme.com:389";"John Smith";"qrnSurBret2elburg")
 $vfound:=LDAP Search("OU=UO_Users,DC=ACME,DC=com";”cn=John Doe";LDAP all levels;$_tabAttributes)
 LDAP LOGOUT //ne pas oublier de se déconnecter
```

#### Exemple 2 

Cet exemple tente de se connecter à une application :

```4d
 ON ERR CALL("ErrHdlr") //gestion d'erreurs
 errOccured:=False
 errMsg:=""
 If(ppBindMode=1) //si mot de passe transmis en mode par défaut
    LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password MD5)
 Else
    LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password plain text)
 End if
 
 Case of
    :(Not(errOccurred))
       ALERT("Vous êtes connecté au serveur LDAP. ")
 
    :(errOccurred)
       ALERT("Erreurs dans les paramètres")
 End case
 
 LDAP LOGOUT
 ON ERR CALL("")
```

#### Voir aussi 

*LDAP*  
[LDAP LOGOUT](ldap-logout.md)  