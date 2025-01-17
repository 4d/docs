---
id: on-web-authentication-database-method
title: On Web Authentication database method
slug: /commands/on-web-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Web Authentication database method.Syntax-->$1, $2, $3, $4, $5, $6 -> On Web Authentication database method -> $0<!-- END REF-->
<!--REF #_command_.On Web Authentication database method.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Texte | &#8592; | URL |
| $2 | Texte | &#8592; | En-tête + Corps HTTP |
| $3 | Texte | &#8592; | Adresse IP du navigateur |
| $4 | Texte | &#8592; | Adresse IP appelée du serveur |
| $5 | Texte | &#8592; | Nom d’utilisateur |
| $6 | Texte | &#8592; | Mot de passe |
| $0 | Booléen | &#8592; | Vrai = requête acceptée, Faux = requête rejetée |

<!-- END REF-->

#### Description 

<!--REF #_command_.On Web Authentication database method.Summary-->La **On Web Authentication database method** est chargée de gérer les accès au moteur de serveur Web.<!-- END REF--> Elle est automatiquement appelée par 4D ou 4D Server lorsqu'une requête d'un navigateur Web requiert l'exécution d'une méthode 4D sur le serveur (appel d'une méthode via un URL *4DACTION*, une balise *4DSCRIPT*, etc.). 

La **On Web Authentication database method** reçoit six paramètres de type Texte, passés par 4D ($1, $2, $3, $4, $5 et $6), et retourne un booléen, $0\. Voici la description de ces paramètres :

| **Paramètres** | **Type** | **Description**                                 |
| -------------- | -------- | ----------------------------------------------- |
| $1             | Texte    | URL                                             |
| $2             | Texte    | En-tête + Corps HTTP (32 ko maximum)            |
| $3             | Texte    | Adresse IP du navigateur                        |
| $4             | Texte    | Adresse IP appelée du serveur                   |
| $5             | Texte    | Nom d’utilisateur                               |
| $6             | Texte    | Mot de passe                                    |
| $0             | Booléen  | Vrai = requête acceptée, Faux = requête rejetée |

Vous devez déclarer ces paramètres de la manière suivante :

```4d
  // Méthode base Sur authentification Web
 
 var $1;$2;$3;$4;$5;$6 : Text
 var $0 : Boolean
 
  // Code pour la méthode
```

**Note :** Tous les paramètres de la **On Web Authentication database method** ne sont pas forcément remplis. Les informations reçues par la méthode base dépendent des options que vous avez sélectionnées dans la boîte de dialogue des Propriétés de la base. Référez-vous à la section *Sécurité des connexions*.

* **URL**  
Le premier paramètre (*$1*) est l'URL saisi par l'utilisateur dans la zone 'Adresse' de son navigateur Web, moins l'adresse hôte.  
Prenons l'exemple d'une connexion Intranet. Supposons que l'adresse IP de votre machine serveur Web 4D est *123.45.67.89*. Le tableau suivant liste les valeurs de *$1* selon l'URL saisi dans le navigateur Web :  

| **URL saisi dans le navigateur Web**        | **Valeur du paramètre $1**      |  
| ------------------------------------------- | ------------------------------- |  
| 123.45.67.89                                | /                               |  
| http://123.45.67.89                         | /                               |  
| 123.45.67.89/Clients                        | /Clients                        |  
| http://123.45.67.89/Clients                 | /Clients                        |  
| http://123.45.67.89/Clients/Ajouter         | /Clients/Ajouter                |  
| 123.45.67.89/Faire\_ceci/Si\_OK/Faire\_cela | /Faire\_ceci/Si\_OK/Faire\_cela |
* **En-tête et corps de la requête HTTP**  
Le deuxième paramètre (*$2*) est l'en-tête et le corps de la requête *HTTP* envoyée par le navigateur Web. Notez que ces informations sont passées telles quelles à la **On Web Authentication database method**. Le contenu varie en fonction du type de navigateur Web qui tente de se connecter. Si votre application exploite ces informations, il est de votre ressort d'analyser l'en-tête et le corps.

**Notes :** 

* Pour des raisons de performances, la taille des données transitant via le paramètre $2 ne peut dépasser 32 Ko. Au-delà, elles sont tronquées par le serveur HTTP de 4D.
* Pour plus d'informations sur ce paramètre, reportez-vous à la description de la [On Web Connection database method](on-web-connection-database-method.md).
* **Adresse IP du navigateur**  
Le troisième paramètre (*$3*) reçoit l’adresse IP de la machine du navigateur. Cette information peut vous permettre, en particulier, de distinguer les connexions Intranet des connexions Internet.  
**Note :** 4D retourne les adresses IPv4 dans un format hybride IPv6 comprenant un préfixe de 96 bits, par exemple ::ffff:192.168.2.34 pour l'adresse IPv4 192.168.2.34\. Pour plus d'informations, reportez-vous à la section *Prise en charge d’IP v6*.
* **Adresse IP demandée du serveur**  
Le quatrième paramètre (*$4*) reçoit l’adresse IP demandée du serveur Web 4D. En effet, 4D autorise le multi-homing, permettant d’exploiter des machines disposant de plusieurs adresses IP. Pour plus d’informations sur ce point, reportez-vous à la section *Paramétrages du serveur Web*.
* **Nom d'utilisateur et Mot de passe**  
Les paramètres *$5* et *$6* reçoivent le nom d’utilisateur et le mot de passe saisis par l’utilisateur dans la boîte de dialogue standard d’identification affichée par le navigateur, le cas échéant.  
Cette boîte de dialogue apparaît pour chaque connexion dès qu'une option de gestion des mots de passe est cochée dans les Propriétés de la base (cf. section *Sécurité des connexions*).

**Note :** Si le nom d’utilisateur envoyé par le navigateur existe dans 4D, pour des raisons de confidentialité le paramètre *$6* n’est alors pas rempli (il reçoit une chaîne vide).

* **Paramètre $0**  
La **On Web Authentication database method** retourne un booléen dans $0 :  
   * Si $0 est **Vrai**, la connexion est acceptée.  
   * Si $0 est **Faux**, la connexion est refusée.

La [On Web Connection database method](on-web-connection-database-method.md) n’est exécutée que si la connexion est acceptée par **Sur authentification Web**. 

**ATTENTION :** Si aucune valeur n’est passée dans *$0*, ou si *$0* n’est pas définie dans la **On Web Authentication database method**, la connexion sera considérée comme acceptée, et la [On Web Connection database method](on-web-connection-database-method.md) sera exécutée. 

**Notes :**

* N’appelez aucun élément d’interface dans la **On Web Authentication database method** (([ALERT](alert.md), [DIALOG](../commands/dialog.md), etc.), sinon son exécution sera interrompue et la connexion refusée. Il en est de même si une erreur se produit durant son traitement.
* Il est possible d'interdire l'exécution par *4DACTION* ou *4DSCRIPT* de chaque méthode projet à l'aide de l'option “Disponible via les balises HTML et URLs 4D (4DACTION...)” dans la boîte de dialogue des Propriétés des méthodes. Pour plus d'informations sur ce point, reportez-vous à la section *Sécurité des connexions*.

#### Appels de la Méthode base Sur authentification Web 

La **On Web Authentication database method** est automatiquement appelée, quel que soit le mode, lorsqu’une requête ou un traitement nécessite l'exécution d'une méthode 4D. Elle est également appelée lorsque le serveur Web reçoit un URL statique invalide (par exemple, si la page statique demandée n'existe pas). 

La **On Web Authentication database method** est donc appelée dans les cas suivants :

* lorsque 4D reçoit un URL débutant par *4DACTION/*
* lorsque 4D reçoit un URL débutant par *4DCGI/*
* lorsque 4D reçoit un URL débutant par *4DSYNC/*
* lorsque 4D reçoit un URL demandant une page statique inexistante
* lorsque 4D reçoit un URL d'accès à la racine et qu'aucune page d'accueil n'est définie dans les propriétés de la base ou via la commande [WEB SET HOME PAGE](web-set-home-page.md)
* lorsque 4D traite une balise *4DSCRIPT* dans une page semi-dynamique
* lorsque 4D traite une balise *4DLOOP* basée sur une méthode dans une page semi-dynamique
**Note de compatibilité :** La méthode base est également appelée lorsque 4D reçoit un URL débutant par *4DMETHOD/.* Cet URL obsolète est conservé par compatibilité uniquement.

A noter que la **On Web Authentication database method** n'est PAS appelée lorsque le serveur reçoit un URL demandant une page statique valide. 

#### Exemple 1 

Exemple de **On Web Authentication database method** en mode BASIC :

```4d
  //Méthode base Sur authentification Web
 var $5;$6;$3;$4 : Text
 var $utilisateur;$motPasse;$IPBrowser;$IPServer : Text
 var $utilisateur4D : Boolean
 ARRAY TEXT($utilisateurs;0)
 ARRAY LONGINT($nums;0)
 var $upos : Integer
 var $0 : Boolean
 
 $0:=False
 
 $utilisateur:=$5
 $motPasse:=$6
 $IPBrowser:=$3
 $IPServer:=$4
 
  //Pour des raisons de sécurité, refuser les noms qui contiennent @
 If(AvecJoker($utilisateur)|AvecJoker($motPasse))
    $0:=False
  //La méthode AvecJoker est décrite ci-dessous
 Else
  //Vérifier si c’est un utilisateur 4D
    GET USER LIST($utilisateurs;$nums)
    $upos:=Find in array($utilisateurs;$utilisateur)
    If($upos >0)
       $utilisateur4D:=Not(Is user deleted($nums{$upos}))
    Else
       $utilisateur4D:=False
    End if
 
    If(Not($utilisateur4D))
  //Ce n’est pas un utilisateur défini dans 4D, chercher dans la table des utilisateurs Web
       QUERY([WebUsers];[WebUsers]User=$utilisateur;*)
       QUERY([WebUsers]; & [WebUsers]Password=$motPasse)
       $0:=(Records in selection([WebUsers])=1)
    Else
       $0:=True
    End if
 End if
  //Est-ce une connexion intranet ?
 If(Substring($IPBrowser;1;7)#"192.100.")
    $0:=False
 End if
```

#### Exemple 2 

Exemple de méthode base Sur authentification Web en mode DIGEST :

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
  //La méthode AvecJoker est décrite ci-dessous
 Else
    QUERY([WebUsers];[WebUsers]User=$utilisateur)
    If(OK=1)
       $0:=WEB Validate digest($utilisateur;[WebUsers]Mdp)
    Else
       $0:=False //Utilisateur inexistant
    End if
 End if
 
 La Méthode projet AvecJoker est décrite ci-dessous:
```

```4d
  //Méthode projet AvecJoker
  //AvecJoker ( Chaine ) -> Booléen
  //AvecJoker ( Nom ) -> Contient un joker
 
 C_INTEGER($i)
 var $0 : Boolean
 var $1 : Text
 $0:=False
 For($i;1;Length($1))
    If(Character code(Substring($1;$i;1))=Character code("@"))
       $0:=True
    End if
 End for
```
