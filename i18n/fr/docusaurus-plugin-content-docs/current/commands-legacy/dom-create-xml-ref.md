---
id: dom-create-xml-ref
title: DOM Create XML Ref
slug: /commands/dom-create-xml-ref
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML Ref.Syntax-->**DOM Create XML Ref** ( *racine* {; *nameSpace*} {; *nSNom* ; *nSValeur*} {; *nSNom2* ; *nSValeur2* ; ... ; *nSNomN* ; *nSValeurN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML Ref.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| racine | Text | &#8594;  | Nom de l’élément racine |
| nameSpace | Text | &#8594;  | Valeur de l’espace de nommage (Namespace) |
| nSNom | Text | &#8594;  | Nom d’espace de nommage |
| nSValeur | Text | &#8594;  | Valeur d’espace de nommage |
| Résultat | Text | &#8592; | Référence de l’élément XML racine |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Create XML Ref.Summary-->La commande **DOM Create XML Ref** crée un arbre XML vide en mémoire et retourne sa référence.<!-- END REF-->

Passez dans le paramètre *racine* le nom de l’élément racine de l’arbre XML. 

Passez dans le paramètre facultatif *nameSpace* la déclaration de la valeur de l’espace de nommage (namespace) de l’arbre (par exemple “http://www.4d.com”).   
A noter qu'il est possible de préfixer le paramètre *racine* avec le nom de l’espace de nommage, suivi de *:* (par exemple “MonNameSpace:MaRacine”). Dans ce cas, le paramètre *nameSpace* précisant la valeur de l’espace de nommage est obligatoire.

**Note :** L’espace de nommage (namespace) est une chaîne de caractères permettant de garantir l’unicité des noms de variables XML. En général, un URL du type http://www.monsite.com/monurl est utilisé. Il n’est pas nécessaire que l’URL soit valide sur le site, il faut juste qu’il soit unique. 

Vous pouvez déclarer un ou plusieurs espace(s) de nommage supplémentaire(s) dans l’arbre XML généré, à l’aide de couples *nSNom / nSValeur*. Vous pouvez passer autant de couples nom / valeur d’espace de nommage que vous voulez. 

**Important :** N'oubliez pas d'appeler la commande [DOM CLOSE XML](dom-close-xml.md) afin de libérer la mémoire lorsque vous avez terminé d'utiliser l'arbre XML.

#### Exemple 1 

Création d’un arbre XML simple : 

```4d
 var vRefElem : Text
 vRefElem:=DOM Create XML Ref("MaRacine")
```

Ce code produit le résultat suivant :

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?> 
<MaRacine/>
```

#### Exemple 2 

Création d’un arbre XML avec un espace de nommage : 

```4d
 var vRefElem : Text
 $Racine:="MonNameSpace:MaRacine"
 $Namespace:="http://www.4D.com/tech/namespace"
 vRefElem:=DOM Create XML Ref($Racine;$Namespace)
```

Ce code produit le résultat suivant :

```XML
<MonNameSpace:MaRacine xmlns:MonNameSpace="http://www.4D.com/tech/namespace"/>
```

#### Exemple 3 

Création d’un arbre XML avec plusieurs espaces de nommage : 

```4d
 var vRefElem : Text
 var $aNSNom1;$aNSNom2;$aNSValeur1;$aNSValeur2 : Text
 $Racine:="MonNameSpace:MaRacine"
 $Namespace:="http://www.4D.com/tech/namespace"
 $aNSNom1:="NSNom1"
 $aNSNom2:="NSNom2"
 $aNSValeur1:="http://www.4D.com/Prod/namespace"
 $aNSValeur2:="http://www.4D.com/Mkt/namespace"
 vRefElem:=DOM Create XML Ref($Racine;$Namespace;$aNSNom1;$aNSValeur1;$aNSNom2;$aNSValeur2)
```

Ce code produit le résultat suivant :

```XML
<MonNameSpace:MaRacine xmlns:MonNameSpace="http://www.4D.com/tech/nameSpace"
NSNom1="http://www.4D.com/Prod/namespace"
NSNom2="http://www.4D.com/Mkt/namespace"/>
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée.

#### Voir aussi 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM SET XML DECLARATION](dom-set-xml-declaration.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 861 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


