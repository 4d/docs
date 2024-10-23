---
id: ldap-search-all
title: LDAP SEARCH ALL
slug: /commands/ldap-search-all
displayed_sidebar: docs
---

<!--REF #_command_.LDAP SEARCH ALL.Syntax-->**LDAP SEARCH ALL** ( *dnRootEntry* ; *tabRésultat* ; *filtre* {; *scope* {; *attributs* {; *attributsEnTableau*}}} )<!-- END REF-->
<!--REF #_command_.LDAP SEARCH ALL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| dnRootEntry | Text | &#8594;  | Distinguished Name de l'élément racine où démarrer la recherche |
| tabRésultat | Object array | &#8592; | Résultat de la recherche |
| filtre | Text | &#8594;  | Filtre de recherche LDAP |
| scope | Text | &#8594;  | Champ d'action de la recherche : "base" (défaut), "one" ou "sub" |
| attributs | Text array | &#8594;  | Attribut(s) à récupérer |
| attributsEnTableau | Boolean array | &#8594;  | Vrai = forcer le retour des attributs en tableaux, Faux = forcer le retour des attributs en variables simples |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LDAP SEARCH ALL.Summary-->La commande **LDAP SEARCH ALL** recherche sur le server LDAP cible toutes les occurrences correspondant aux critères définis.<!-- END REF--> Cette commande doit être exécutée dans le contexte d'une connexion serveur LDAP ouverte par la commande [LDAP LOGIN](ldap-login.md) dans le process courant ; sinon une erreur 1003 est retournée.

A noter que les serveurs LDAP imposent généralement un nombre maximum d'entrées qui peuvent être récupérées lors d'une recherche. Par exemple, Microsoft Active directory limite de nombre à 1000 entrées par défaut.

Dans *dnRootEntry*, passez le *Distinguished Name* de l'élément racine du serveur LDAP ; la recherche démarrera à partir de cet élément. 

Dans *tabResult*, passez un tableau objet qui sera rempli avec les entrées trouvées ; dans ce tableau, chaque élément est un objet contenant les paires attributs/valeurs retournées pour une entrée trouvée. Vous pouvez utiliser le paramètre *attributs* pour définir les paramètres à retourner. 

Dans *filtre*, passez le filtre de recherche LDAP à appliquer. Ce filtre doit être conforme à la [rfc2225](http://tools.ietf.org/search/rfc2254). Vous pouvez passer une chaîne vide "" afin de ne pas appliquer de filtre. Le joker "\*" pour chercher des sous-chaînes est pris en charge. 

Dans *scope*, passez une des constantes suivantes du thème "*LDAP*" :

| Constante          | Type   | Valeur | Comment                                                                                                          |
| ------------------ | ------ | ------ | ---------------------------------------------------------------------------------------------------------------- |
| LDAP all levels    | Chaîne | sub    | Chercher dans l'élément racine défini par *dnRootEntry* et dans toutes les branches suivantes                    |
| LDAP root and next | Chaîne | one    | Chercher dans l'élément racine défini par *dnRootEntry* et dans les branches directement suivantes sur un niveau |
| LDAP root only     | Chaîne | base   | Chercher uniquement dans l'élément racine défini par *dnRootEntry* (défaut si omis)                              |

Dans *attributs*, passez un tableau texte contenant la liste de tous les attributs LDAP à récupérer à partir des entrées trouvées. Par défaut, si ce paramètre est omis, tous les attributs sont récupérés.

**Note :** Les noms d'attributs LDAP tiennent compte des majuscules/minuscules. Pour plus d'informations sur les attributs LDAP, vous pouvez consulter [cette page](https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx) qui liste tous les attributs disponibles pour MS Active Directory.

Par défaut, la commande retourne les attributs sous forme de tableau si plusieurs résultats sont trouvés, ou sous forme de variable simple si un seul résultat est trouvé. Le paramètre optionnel *attributsEnTableau* vous permet de "forcer" le formatage des attributs retournés en tableau ou en variable pour chaque attribut défini :

* Lorsque vous passez **true** dans un élément, l'élément correspondant du paramètre *attributs* sera retourné en tableau. Si une seule valeur est trouvée, la commande retourne un tableau à un seul élément.
* Lorsque vous passez **false** dans un élément, l'élément correspondant du paramètre *attributs* sera retourné en variable simple. Si plusieurs valeurs sont trouvées, la commande retourne uniquement le premier élément.

#### Exemple 1 

Nous voulons récupérer les numéros de téléphone de tous les utilisateurs nommés "smith" dans l'annuaire d'enterprise :

```4d
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"telephoneNumber")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 ARRAY OBJECT($_entry;0)
 
 LDAP LOGIN($url;$myLogin;$pwd)
 $filter:="cn=*smith*"
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes)
 LDAP LOGOUT
 
 
  //$_entry contiendra par exemple
  // $_entry{1} = {"cn":"John Smith","telephoneNumber":"01 40 87 00 00"}
  // $_entry{2} = {"cn":"Adele Smith","telephoneNumber":"01 40 87 00 01"}
  // $_entry{3} = {"cn":"Adrian Smith","telephoneNumber":"01 23 45 67 89"}
  // ...
```

#### Exemple 2 

Ces exemples illustrent plus particulièrement l'utilisation du paramètre *attributsEnTableau* :

```4d
 ARRAY OBJECT($_entry;0)
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;True)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 ARRAY TEXT($_arrMemberOf;0)
 OB GET ARRAY($_entry{1};"memberOf";$_arrMemberOf)
  // $_arrMemberOf est un tableau contenant tous les groupes de l'entrée
```

```4d
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 $memberOf:=OB Get($_entry{1};"memberOf")
  // $memberOf est une variable contenant le premier groupe de l'entrée
```

#### Voir aussi 

*LDAP*  
[LDAP Search](ldap-search.md)  