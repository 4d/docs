---
id: dom-find-xml-element
title: DOM Find XML element
slug: /commands/dom-find-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Find XML element.Syntax-->**DOM Find XML element** ( *refElément* ; *xPath* {; *tabRefEléments*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Find XML element.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| xPath | Text | &#8594;  | Chemin XPath de l’élément à chercher |
| tabRefEléments | Text array | &#8592; | Liste des références d’éléments trouvés (le cas échéant) |
| Résultat | Text | &#8592; | Référence de l’élément trouvé (le cas échéant) |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Find XML element.Summary-->La commande **DOM Find XML element** vous permet de rechercher des éléments XML spécifiques dans une structure XML.<!-- END REF--> La recherche débute à l’élément désigné par le paramètre *refElément*.

Le noeud XML à chercher est défini et exprimé en notation XPath à l'aide du paramètre *xPath* (pour plus d'informations, reportez-vous à la section *Utilisation de la notation XPath* section). Les expressions de chemin suivantes sont prises en charge :

| **Expression**                   | **Action**                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| *nodename*                       | Sélectionne tous les noeuds enfants du noeud contextuel avec le nom "*nodename*"                                                            |
| /                                | Sélectionne des noeuds à partir du noeud racine (chemin absolu)                                                                             |
| //                               | Sélectionne les noeuds du document à partir du noeud courant qui correspond à la sélection, quelle que soit leur emplacement                |
| @                                | Sélectionne les attributs                                                                                                                   |
| .                                | Sélectionne le noeud courant                                                                                                                |
| ..                               | Sélectionne le parent du noeud courant                                                                                                      |
| \*                               | Sélectionne tous les éléments enfants du noeud contextuel                                                                                   |
| @\*                              | Sélectionne tous les attributs du noeud contextuel                                                                                          |
| text()                           | Sélectionne tous les enfants du noeud de type texte du noeud contextuel                                                                     |
| node()                           | Sélectionne tous les enfants de l'élément du noeud contextuel, quel que soit le type de noeud                                               |
| local-name()                     | Retourne une chaîne représentant le nom local du premier noeud d'un ensemble de noeuds                                                      |
| para\[1\]                        | Sélectionne le premier para enfant du noeud contextuel                                                                                      |
| para\[last()\]                   | Sélectionne le dernier para enfant du noeud contextuel                                                                                      |
| chapitre\[titre="Introduction"\] | Sélectionne les chapitre enfants du noeud contextuel ayant un ou plusieurs titre enfant(s) avec la chaîne-valeur équivalente à Introduction |
| chapitre\[titre\]                | Sélectionne les chapitre enfants du noeud contextuel ayant un ou plusieurs titre enfant(s)                                                  |
| para\[@type="attention"\]        | Sélectionne tous les para enfants du noeud contextuel dont l'attribut est "type" et la valeur est "warning"                                 |
| para\[@type="warning"\]\[5\]     | Sélectionne le cinquième para enfant du noeud contextuel dont l'attribut est "type" et la valeur est "warning"                              |
| para\[5\]\[@type="warning"\]     | Sélectionne le cinquième para enfant du noeud contextuel si cet enfant a un attribut "type" et une valeur égale à "warning"                 |
| para\[contains(@type,'bg')\]     | Sélectionne tous les para enfants du noeud contextuel ayant un attribut "type"contenant la chaîne "bg"                                      |
| //titre \| //prix                | Sélectionne tous les éléments titre et prix du document                                                                                     |

**Note de compatibilité :** *A compter de v18 R3, le niveau de conformité de l'implémentation de XPath dans 4D est nettement plus élevé et permet la prise en charge des expressions ci-dessus. Pour des raisons de compatibilité, l'implémentation antérieure non standard est maintenue par défaut dans les bases converties. Si vous souhaitez obtenir les fonctionnalités avancées dans vos bases converties, vous devez cocher l'option de compatibilité *Utiliser XPath standard* de la* **Page Compatibilité.* 

**Note :** Les requêtes sont sensibles à la casse.

La commande retourne la référence XML de(s) élément(s) trouvé(s). Lorsque le tableau chaîne *tabRefEléments* est passé, la commande le remplit avec la liste des références XML trouvées. Dans ce cas, la commande retourne en résultat le premier élément du tableau *tabRefEléments*. Ce paramètre est utile lorsque plusieurs éléments de même nom existent à l’emplacement désigné par le paramètre *xPath*.

#### Exemple 1 

Soit la structure XML suivante :

```RAW
  Harry Potter  29.99  Apprendre le XML  39.95
```

Cet exemple permet de rechercher rapidement un élément XML et d’afficher sa valeur :

```4d
 vRefElem:=DOM Parse XML source("books.xml")
 vTrouvé:=DOM Find XML element(vRefElem;"book[2]/title") // chemin relatif du noeud courant
 DOM GET XML ELEMENT VALUE(vTrouvé;valeur)
 ALERT("La valeur de l’élément est : \""+valeur+"\"") // Apprendre le XML
```

La même recherche peut également être effectuée ainsi :

```4d
 vRefElem:=DOM Parse XML source("books.xml")
 vTrouvé:=DOM Find XML element(vRefElem;"book[2]/title") // chemin relatif du noeud courant
 DOM GET XML ELEMENT VALUE(vTrouvé;valeur)
 ALERT("La valeur de l’élément est : \""+valeur+"\"") // Apprendre le XML
```

#### Exemple 2 

Soit la structure XML suivante : 

```RAW
         aaa      bbb      ccc   
```

Le code suivant permet de récupérer la référence de chaque élément Elem2 dans le tableau tAtrouvés :

```4d
 vRefElem:=DOM Parse XML source("exemple.xml")
 ARRAY TEXT(tAtrouves;0)
 vTrouvé:=DOM Find XML element(vRefElem;"/Racine/Elem1/Elem2";tAtrouvés)
```

#### Exemple 3 

Vous souhaitez sélectionner tous les éléments "rect" avec des attributs "class" contenant la chaîne "bgcontainer" :

```4d
 $node:=DOM Find XML element($root;" //rect[contains(@class,'bgcontainer')")
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée. 

#### Gestion des erreurs 

Une erreur est générée lorsque :

* la référence de l’élément n’est pas valide
* le chemin xPath passé n’est pas valide.

#### Voir aussi 

[DOM Count XML elements](dom-count-xml-elements.md)  
[DOM Create XML element](dom-create-xml-element.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 864 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


