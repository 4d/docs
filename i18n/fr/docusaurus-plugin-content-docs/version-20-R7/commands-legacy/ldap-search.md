---
id: ldap-search
title: LDAP Search
slug: /commands/ldap-search
displayed_sidebar: docs
---

<!--REF #_command_.LDAP Search.Syntax-->**LDAP Search** ( *dnRootEntry* ; *filtre* {; *scope* {; *attributs* {; *attributsEnTableau*}}} ) : Object<!-- END REF-->
<!--REF #_command_.LDAP Search.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| dnRootEntry | Text | &#8594;  | Distinguished Name de l'élément racine où démarrer la recherche |
| filtre | Text | &#8594;  | Filtre de recherche LDAP |
| scope | Text | &#8594;  | Champ d'action de la recherche : "base" (défaut), "one" ou "sub" |
| attributs | Text array | &#8594;  | Attribut(s) à récupérer |
| attributsEnTableau | Boolean array | &#8594;  | Vrai = forcer le retour des attributs en tableaux, Faux = forcer le retour des attributs en variables simples |
| Résultat | Object | &#8592; | Attributs clé/valeur |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LDAP Search.Summary-->La commande **LDAP Search** recherche sur le serveur LDAP cible la première occurrence correspondant aux critères définis.<!-- END REF--> Cette commande doit être exécutée dans le contexte d'une connexion serveur LDAP ouverte par la commande [LDAP LOGIN](ldap-login.md) dans le process courant ; sinon une erreur 1003 est retournée.

Dans *dnRootEntry*, passez le *Distinguished Name* de l'élément racine du serveur LDAP ; la recherche démarrera à partir de cet élément.

Dans *filtre*, passez le filtre de recherche LDAP à appliquer. Ce filtre doit être conforme à la [rfc2225](http://tools.ietf.org/search/rfc2254). Vous pouvez passer une chaîne vide "" afin de ne pas appliquer de filtre. Le joker "\*" pour chercher des sous-chaînes est pris en charge. 

Dans *scope*, passez une des constantes suivantes du thème "*LDAP*" :

| Constante          | Type   | Valeur | Comment                                                                                                          |
| ------------------ | ------ | ------ | ---------------------------------------------------------------------------------------------------------------- |
| LDAP all levels    | Chaîne | sub    | Chercher dans l'élément racine défini par *dnRootEntry* et dans toutes les branches suivantes                    |
| LDAP root and next | Chaîne | one    | Chercher dans l'élément racine défini par *dnRootEntry* et dans les branches directement suivantes sur un niveau |
| LDAP root only     | Chaîne | base   | Chercher uniquement dans l'élément racine défini par *dnRootEntry* (défaut si omis)                              |

Dans *attributs*, passez un tableau texte contenant la liste de tous les attributs LDAP à récupérer à partir des entrées trouvées. Par défaut, si ce paramètre est omis, tous les attributs sont récupérés.

**Note :** Les noms d'attributs LDAP tiennent compte des majuscules/minuscules. Pour plus d'informations sur les attributs LDAP, vous pouvez consulter [cette page](https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx) qui liste tous les attributs disponibles pour MS Active Directory.

Par défaut, la commande retourne les attributs sous forme de collection si plusieurs résultats sont trouvés, ou sous forme de variable simple si un seul résultat est trouvé. Le paramètre optionnel *attributsEnTableau* vous permet de "forcer" le formatage des attributs retournés en collection ou en variable pour chaque attribut défini :

* Lorsque vous passez **true** dans un élément, l'élément correspondant du paramètre *attributs* sera retourné en collection. Si une seule valeur est trouvée, la commande retourne une collection à un seul élément.
* Lorsque vous passez **false** dans un élément, l'élément correspondant du paramètre *attributs* sera retourné en variable simple. Si plusieurs valeurs sont trouvées, la commande retourne uniquement le premier élément.

#### Exemple 1 

Vous souhaitez obtenir le numéro de téléphone de l'utilisateur "smith" dans l'annuaire de l'entreprise :

```4d
 ARRAY TEXT($_tabAttributes;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes;"phoneNumber")
 LDAP LOGIN($url;$dn;$pwd)
 $filter:="cn=*smith*"
 $vfound:=LDAP Search($dnSearchRootEntry;$filter;LDAP all levels;$_tabAttributes)
 LDAP LOGOUT
```

#### Exemple 2 

Vous voulez obtenir un tableau de toutes les entrées trouvées pour l'attribut "memberOf" :

```4d
 var $entry : Object
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;True)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 $entry:=LDAP Search($dnSearchRootEntry;"cn=adrien*";LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 ARRAY TEXT($_arrMemberOf;0)
 OB GET ARRAY($entry;"memberOf";$_arrMemberOf)
  // $_arrMemberOf est un tableau contenant tous les groupes de l'entrée
```

#### Voir aussi 

*LDAP*  
[LDAP SEARCH ALL](ldap-search-all.md)  