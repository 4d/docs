---
id: on-web-connection-database-method
title: On Web Connection database method
slug: /commands/on-web-connection-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Web Connection database method.Syntax-->$1, $2, $3, $4, $5, $6 -> On Web Connection database method<!-- END REF-->
<!--REF #_command_.On Web Connection database method.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Texte | &#8592; | URL |
| $2 | Texte | &#8592; | En-tête + corps HTTP |
| $3 | Texte | &#8592; | Adresse IP du navigateur |
| $4 | Texte | &#8592; | Adresse IP appelée du serveur |
| $5 | Texte | &#8592; | Nom d’utilisateur |
| $6 | Texte | &#8592; | Mot de passe |

<!-- END REF-->

#### 

<!--REF #_command_.On Web Connection database method.Summary-->La **On Web Connection database method** peut être appelée dans les cas suivants :

* le serveur Web reçoit une requête débutant par l'URL *4DCGI*.<!-- END REF-->
* le serveur Web reçoit une requête invalide.

Pour plus d'informations, reportez-vous ci-dessous au paragraphe “Appels de la Méthode base Sur connexion Web”.

Le serveur Web doit avoir démarré et la requête doit avoir été "acceptée" par la [On Web Authentication database method](on-web-authentication-database-method.md) (si elle existe).

La **On Web Connection database method** reçoit six paramètres de type Texte, passés par 4D ($1, $2, $3, $4, $5 et $6). Voici leur description :

| **Paramètres** | **Type** | **Description**                      |
| -------------- | -------- | ------------------------------------ |
| $1             | Texte    | URL                                  |
| $2             | Texte    | En-tête + corps HTTP (32 ko maximum) |
| $3             | Texte    | Adresse IP du navigateur             |
| $4             | Texte    | Adresse IP appelée du serveur        |
| $5             | Texte    | Nom d’utilisateur                    |
| $6             | Texte    | Mot de passe                         |

Vous devez déclarer ces six paramètres de la manière suivante :

```4d
  // Méthode base Sur connexion Web
 
 var $1;$2;$3;$4;$5;$6 : Text
 
  // Code pour la méthode
```

* **Données supplémentaires de l’URL**  
Le premier paramètre (*$1*) est l’URL saisi par l'utilisateur dans la zone 'Adresse' de son navigateur Web, moins l’adresse hôte.  
Prenons l’exemple d’une connexion Intranet. Supposons que l’adresse IP de votre machine serveur Web 4D est *123.45.67.89*. Le tableau suivant liste les valeurs de *$1* selon l’URLsaisi dans le navigateur Web :  

| **URL saisi dans le navigateur**            | **Valeur du paramètre $1**      |  
| ------------------------------------------- | ------------------------------- |  
| 123.45.67.89                                | /                               |  
| http://123.45.67.89                         | /                               |  
| 123.45.67.89/Clients                        | /Clients                        |  
| http://123.45.67.89/Clients                 | /Clients                        |  
| http://123.45.67.89/Clients/Ajouter         | /Clients/Ajouter                |  
| 123.45.67.89/Faire\_ceci/Si\_OK/Faire\_cela | /Faire\_ceci/Si\_OK/Faire\_cela |  
    
Notez que vous êtes libre d'utiliser ce paramètre à votre convenance. 4D ignore simplement les valeurs passées au-delà de la partie hôte de l’URL. Par exemple, vous pouvez établir une convention dans laquelle la valeur *"/Clients/Ajouter"* signifie “aller directement à l'ajout d'un nouvel enregistrement dans la table *\[Clients\]*.” En fournissant aux utilisateurs Web de votre base une liste des valeurs possibles et/ou des marqueurs par défaut, vous pouvez proposer des raccourcis vers différentes parties de votre application. Ainsi, les utilisateurs Web peuvent accéder rapidement aux ressources de votre site Web sans devoir naviguer dans toute la base à chaque connexion.

**ATTENTION :** Pour empêcher un utilisateur d'accéder directement à une base à l'aide d'un marqueur créé pendant une session précédente, 4D intercepte tout URL correspondant à un des URLs standard de 4D.

* **En-tête et corps de la requête HTTP**  
Le deuxième paramètre (*$2*) est l'en-tête suivi du corps de la requête *HTTP* envoyée par le navigateur Web. Notez que ces informations sont passées telles quelles à votre **On Web Connection database method**. Le contenu varie en fonction du type de navigateur Web qui tente de se connecter.  
Avec Safari sous Mac OS, vous recevrez un en-tête semblable à celui-ci :  
```RAW  
GET /favicon.ico HTTP/1.1Referer: http://123.45.67.89/4dcgi/testUser-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X; fr-fr) AppleWebKit/523.10.3 (KHTML, like Gecko) Version/3.0.4 Safari/523.10Cache-Control: max-age=0Accept: */*Accept-Language: fr-frAccept-Encoding: gzip, deflateConnection: keep-aliveHost: 123.45.67.89  
```  
    
    
Avec Microsoft Edge sous Windows, vous recevrez un en-tête semblable à celui-ci :  
```RAW  
GET /test HTTP/1.1Accept: text/html, application/xhtml+xml, image/jxr, */*Accept-Encoding: gzip, deflateAccept-Language: fr-FRConnection: Keep-AliveHost: 123.45.67.89User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586  
```  
    
    
Si votre application exploite ces informations, il est de votre ressort d'analyser l'en-tête et le corps.  
    
**Note :** Pour des raisons de performances, la taille de ces données ne peut dépasser 32 Ko. Au-delà, elles sont tronquées par le serveur HTTP de 4D.
* **Adresse IP du navigateur**  
Le troisième paramètre (*$3*) reçoit l’adresse IP de la machine du navigateur. Cette information peut vous permettre, en particulier, de distinguer les connexions Intranet des connexions Internet.  
**Note :** 4D retourne les adresses IPv4 dans un format hybride IPv6 comprenant un préfixe de 96 bits, par exemple ::ffff:192.168.2.34 pour l'adresse IPv4 192.168.2.34\. Pour plus d'informations, reportez-vous à la section *Prise en charge d’IP v6*.
* **Adresse IP demandée du serveur**  
Le quatrième paramètre (*$4*) reçoit l’adresse IP demandée du serveur Web 4D. En effet, 4D autorise le multi-homing, permettant d’exploiter des machines disposant de plusieurs adresses IP. Pour plus d’informations sur ce point, reportez-vous à la section *Paramétrages du serveur Web*.
* **Nom d'utilisateur et Mot de passe**  
Les paramètres *$5* et *$6* reçoivent le nom d’utilisateur et le mot de passe saisis par l’utilisateur dans la boîte de dialogue standard d’identification affichée par le navigateur, le cas échéant.  
Cette boîte de dialogue apparaît pour chaque connexion dès que l’option **Utiliser les mots de passe** est cochée dans les Propriétés de la base (cf. section *Sécurité des connexions*).

**Note :** Si le nom d’utilisateur envoyé par le navigateur existe dans 4D, pour des raisons de confidentialité le paramètre *$6* n’est alors pas rempli (il reçoit une chaîne vide).

#### Appels de la Méthode base Sur connexion Web 

La **On Web Connection database method** peut être utilisée comme point d'entrée dans le serveur Web 4D, soit à l'aide de l'URL spécial *4DCGI*, soit à l'aide d'URLs de commande personnalisés.

**Attention :** L’appel d’une commande 4D affichant un élément d’interface ([DIALOG](../commands/dialog.md), [ALERT](alert.md)...) entraîne l’arrêt du traitement de la méthode.

La **On Web Connection database method** est donc appelée dans les cas suivants :

* lorsque 4D reçoit l’URL */4DCGI*. La méthode base est appelée avec l’URL */4DCGI/<action>* dans *$1*.
* lorsqu’une page Web appelée avec un URL du type *<chemin>/<fichier>* n’est pas trouvée. La méthode base est appelée avec l’URL.
* lorsqu’une page Web est appelée avec un URL du type *<chemin>/* et qu’aucune page d’accueil par défaut n’est définie. La méthode base est appelée avec l’URL.
