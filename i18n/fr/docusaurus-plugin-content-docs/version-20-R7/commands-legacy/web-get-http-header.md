---
id: web-get-http-header
title: WEB GET HTTP HEADER
slug: /commands/web-get-http-header
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET HTTP HEADER.Syntax-->**WEB GET HTTP HEADER** ( entête | tabChamps {; *tabValeurs*} )<!-- END REF-->
<!--REF #_command_.WEB GET HTTP HEADER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| entête &#124; tabChamps | Texte, Tableau texte | &#8592; | En-tête HTTP de la requête ou Champs de l’en-tête HTTP |
| tabValeurs | Text array | &#8592; | Contenu des champs de l’en-tête HTTP |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB GET HTTP HEADER.Summary-->La commande **WEB GET HTTP HEADER** retourne, soit sous forme de chaîne, soit sous forme de deux tableaux, l’en-tête HTTP de la requête en cours de traitement.<!-- END REF-->

Cette commande peut être appelée depuis toute méthode (*Méthode base Sur authentification Web*, [QR SET DESTINATION](qr-set-destination.md), méthode appelée par "*/4DACTION*"...) exécutée dans un process Web.

* **Première syntaxe :** **WEB GET HTTP HEADER** **(entête)**

Lorsque vous utilisez cette syntaxe, le résultat retourné dans la variable *entête* est du type suivant :  

```4d
 "GET /page.html HTTP\1.0"+Char(13)+Char(10)+"User-Agent: browser"+Char(13)+Char(10)+"Cookie: C=HELLO"
```

Chaque champ d’en-tête est séparé par une séquence CR+LF (Retour chariot+Retour à la ligne), sous Windows et Mac OS. 

* **Seconde syntaxe :** **WEB GET HTTP HEADER** **(tabChamps; tabValeurs)**
Lorsque vous utilisez cette syntaxe, les résultats retournés dans les tableaux *tabChamps* et *tabValeurs* sont du type suivant :

| *tabChamps{1} = "X-METHOD"*   | *tabValeurs{1} = "GET" \**        |
| ----------------------------- | --------------------------------- |
| *tabChamps{2} = "X-URL"*      | *tabValeurs{2} = "/page.html" \** |
| *tabChamps{3} = "X-VERSION"*  | *tabValeurs{3} = "HTTP/1.0" \**   |
| *tabChamps{4} = "User-Agent"* | *tabValeurs{4} = "browser"*       |
| *tabChamps{5} = "Cookie"*     | *tabValeurs{5} = "C=HELLO"*       |

  
*\** Ces trois premiers éléments ne correspondent pas à des champs HTTP. Ils constituent la première ligne de la requête.

Conformément à la norme HTTP, les noms des champs sont toujours libellés en anglais.

A titre indicatif, voici une liste non exhaustive des champs HTTP pouvant être présents dans une requête :

* [Accept](accept.md "Accept") : ce que le navigateur est susceptible d’accepter comme contenu.
* Accept-Language : la ou les langue(s) acceptée(s) par le navigateur (pour information). Permet de choisir une page d’accueil en fonction de la langue préférée du navigateur.
* Cookie : liste des cookies.
* From : adresse e-mail de l’utilisateur du navigateur.
* Host : nom ou adresse du serveur (par exemple, dans le cas de l’URL http://monserveurweb/mapage.html, Host prend la valeur "monserveurweb"). Permet de gérer les cas où plusieurs noms pointent vers la même adresse IP (virtual hosting).
* Referer : provenance de la requête (par exemple http://monserveurweb/mapage1.html), c’est-à-dire la page que l’utilisateur affiche s’il clique sur le bouton **Précédent** de son navigateur.
* User-Agent : nom et version du navigateur ou du proxy.

#### Exemple 

* Cette méthode permet de récupérer le contenu de tout champ d’en-tête de requête HTTP :

```4d
  // Méthode projet GetHTTPField
  // GetHTTPField ( Texte ) -> Texte
  // GetHTTPField ( Nom en-tête HTTP ) -> Contenu en-tête HTTP
 var $0;$1 : Text
 var $vlElem : Integer
 ARRAY TEXT($noms;0)
 ARRAY TEXT($valeurs;0)
 $0:=""
 WEB GET HTTP HEADER($noms;$valeurs)
 $vlElem:=Find in array($noms;$1)
 If($vlElem>0)
    $0:=$valeurs{$vlElem}
 End if
```

* Une fois que cette méthode projet est écrite, vous pouvez l’appeler ainsi :

```4d
  // Contenu de l’en-tête Cookie
 $cookie:=GetHTTPField("Cookie")
```

* Vous pouvez également envoyer des pages différentes en fonction de la langue du navigateur (par exemple dans la [QR SET DESTINATION](qr-set-destination.md)) :

```4d
 $langue:=GetHTTPField("Accept-Language")
 Case of
    :($langue="@fr@") //Français (cf. liste ISO 639)
       WEB SEND FILE("index_fr.html")
    :($langue="@es@") //Espagnol (cf. liste ISO 639)
       WEB SEND FILE("index_es.html")
    Else
       WEB SEND FILE("index.html")
 End case
```

**Note :** Les navigateurs Web permettent de définir plusieurs langues par défaut. Elles sont listées dans le champ “Accept-Language”, séparées par des ";". Leur priorité est définie par leur position au sein de la chaîne ; il peut donc être utile de tester la position des langues dans la chaîne. 

* Exemple de gestion des hôtes virtuels (par exemple dans la [QR SET DESTINATION](qr-set-destination.md)). Les trois noms “home\_site.com”, “home\_site1.com” et “home\_site2.com” pointent vers la même adresse IP, par exemple 192.1.2.3.

```4d
 $host:=GetHTTPField("Host")
 Case of
    :($host="www.site1.com")
       WEB SEND FILE("home_site1.com")
    :($host="www.site2.com")
       WEB SEND FILE("home_site2.com")
    Else
       WEB SEND FILE("home_site.com")
 End case
```

#### Voir aussi 

[WEB GET HTTP BODY](web-get-http-body.md)  
[WEB SET HTTP HEADER](web-set-http-header.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 697 |
| Thread safe | &check; |


