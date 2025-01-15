---
id: web-set-http-header
title: WEB SET HTTP HEADER
slug: /commands/web-set-http-header
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET HTTP HEADER.Syntax-->**WEB SET HTTP HEADER** ( entête | tabChamps {; *tabValeurs*} )<!-- END REF-->
<!--REF #_command_.WEB SET HTTP HEADER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| entête &#124; tabChamps | Texte, Tableau texte | &#8594;  | Champ ou variable contenant l'en-tête HTTP de la requête ou Tableau des champs de l'en-tête HTTP |
| tabValeurs | Text array | &#8594;  | Contenu des champs de l’en-tête HTTP |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SET HTTP HEADER.Summary-->La commande **WEB SET HTTP HEADER** permet de fixer les champs de l’en-tête HTTP de la réponse faite au navigateur Web par 4D.<!-- END REF--> Elle n’a d’effet que dans un process Web.  
Cette commande vous permet, en particulier, de gérer des “cookies”.

**WEB SET HTTP HEADER** admet deux syntaxes : 

* **Première syntaxe :** **WEB SET HTTP HEADER** **(entête)**
Vous passez dans le paramètre *entête*, de type variable ou champ texte, les champs de l’en-tête HTTP que vous souhaitez fixer. Les champs doivent être séparés entre eux par un retour chariot ou une séquence cr/lf (retour chariot/retour à la ligne), sous Windows et Mac OS, 4D se charge du formatage de la réponse. 

Voici un exemple de “cookie” personnalisé :

```4d
 var $vTcookie : Text
 $vTcookie:="Set-Cookie: USER="+String(Abs(Hasard))+"; PATH=/"
 WEB SET HTTP HEADER($vTcookie)
```

**Note :** Il n'est pas possible de passer une constante texte littérale directement dans le paramètre *entête*. Vous devez utiliser une variable ou un champ intermédiaire.  
  
Pour plus d’informations sur la syntaxe à appliquer dans les en-têtes HTTP, veuillez consulter sur Internet les R.F.C (Request For Comments) à l’adresse <http://www.w3c.org>.

* **Deuxième syntaxe :** **WEB SET HTTP HEADER** **(tabChamps; tabValeurs)**
L’en-tête HTTP est défini à l’aide de deux tableaux texte, *tabChamps* et *tabValeurs*.   
L’en-tête sera écrit de la manière suivante :  

```4d
 tabChamps{1}:="X-VERSION"
 tabChamps{2}:="X-STATUS"
 tabChamps{3}:="Set-Cookie"
 tabChamps{4}:="Server"
 
 tabValeurs{1}:="HTTP/1.0"*
 tabValeurs{2}:="200 OK"*
 tabValeurs{3}:="C=HELLO"
 tabValeurs{4}:="North_Carolina"
```

\* Ces deux premiers éléments constituent la première ligne de la réponse. Lorsqu’ils sont saisis, ils doivent impérativement être les éléments 1 et 2 des tableaux. Il est toutefois possible de les omettre et d’écrire seulement — 4D se chargeant de formater l’en-tête :

```4d
 tabChamps{1}:="Set-Cookie"
 tabValeurs{1}:="C=HELLO"
```

Si vous ne spécifiez pas de statut, celui-ci est automatiquement HTTP/1.0 200 OK. Le champ **Server** est par défaut "4D/<version>". Les champs **Content-Length** et **Date** sont également définis par défaut par 4D.

#### Voir aussi 

[WEB GET HTTP HEADER](web-get-http-header.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 660 |
| Thread safe | &check; |


