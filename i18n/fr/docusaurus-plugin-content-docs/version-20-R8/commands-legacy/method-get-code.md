---
id: method-get-code
title: METHOD GET CODE
slug: /commands/method-get-code
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET CODE.Syntax-->**METHOD GET CODE** ( *chemin* ; *code* {; *option*} {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET CODE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text, Text array | &#8594;  | Texte ou Tableau texte contenant un ou plusieurs chemin(s) de méthode(s) |
| code | Text, Text array | &#8592; | Code de(s) méthode(s) désignée(s) |
| option | Integer | &#8594;  | 0 ou omis = export simple (sans tokens), 1 = export avec tokens |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD GET CODE.Summary-->La commande **METHOD GET CODE** retourne dans le paramètre *code* le contenu de la ou des méthode(s) désignée(s) par le paramètre *chemin*.<!-- END REF--> La commande peut retourner le code de tous les types de méthodes : méthodes base, définitions de classes, triggers, méthodes projet, méthodes formulaire et méthodes objet.

Vous pouvez utiliser deux types de syntaxes, basées soit sur des tableaux texte, soit sur des variables texte :  

```4d
 var vTchemin : Text // variables texte
 var vTcode : Text
 METHOD GET CODE(vTchemin;vTcode) // code d’une seule méthode
```

```4d
 ARRAY TEXT(tabChemins;0) // tableaux texte
 ARRAY TEXT(tabCodes;0)
 METHOD GET CODE(tabChemins;tabCodes) // codes de plusieurs méthodes
```

Il n’est pas possible de mixer les deux syntaxes.

Si un chemin d’accès passé est invalide, le paramètre *code* est laissé vide et une erreur est générée. 

Dans le texte du *code* généré par la commande :

* Les noms des commandes sont écrits en anglais, hormis si vous utilisez une version française de 4D et avez coché la préférence "Utiliser langage français et paramètres régionaux système" (cf. [Is a list](is-a-list.md)). Le code peut contenir les *tokens* du langage afin de le rendre indépendant de la langue et de la version, si vous utilisez le paramètre *option* (cf. ci-dessous).
* Le texte est indenté avec des caractères de tabulation en fonction des structures de programmation, à l'instar de l'éditeur de méthodes, afin d'augmenter la lisibilité du code.
* Une ligne est ajoutée en en-tête du code généré, contenant des métadonnées utilisées lors de l’import du code, par exemple :  
```4d  
  // %attributes = {"lang":"fr","invisible":true,"folder":"Web3"}  
```  
    
En cas d’import, cette ligne n’est pas importée, elle est utilisée pour définir les attributs à appliquer (les attributs non spécifiés sont remis à leur valeur par défaut). L’attribut "lang" définit la langue d’export, il permet d’empêcher un import dans une application en langue différente (dans ce cas, une erreur est générée). L'attribut "folder" contient le nom du dossier parent de la méthode, il n’apparaît pas si la méthode n’a pas de dossier parent.  
Des attributs supplémentaires peuvent être définis. Pour plus d'informations, reportez-vous à la description de la commande [METHOD SET ATTRIBUTES](method-set-attributes.md).

Le paramètre *option* vous permet de sélectionner le mode d'exportation du code concernant les éléments "tokenisés" de la ou des méthode(s) :

* Si vous passez 0 ou omettez le paramètre *option*, le code de la méthode est exporté sans tokens, c'est-à-dire exactement comme affiché dans l'éditeur de méthodes.
* Si vous passez 1 ou la constante Code with tokens, le code de la méthode est exporté avec des tokens, c'est-à-dire que les éléments "tokenisés" sont suivis de leur référence interne dans le contenu du *code* exporté. Par exemple, l'expression "[String](string.md)(a)" est exportée "[String](string.md):C10(a)", où "C10" est la référence interne de la commande [String](string.md).

Les éléments tokenisés du langage sont :

* les commandes et constantes 4D,
* les noms de tables et de champs,
* les commandes des plug-ins 4D.

Le code exporté avec ses tokens est indépendant de tout renommage ultérieur des éléments du langage. Grâce aux tokens, le code fourni sous forme de texte sera toujours correctement interprété par 4D, que ce soit via la commande [METHOD SET CODE](method-set-code.md) ou même le copier-coller. Pour plus d'informations sur la syntaxe tokens 4D, veuillez vous reporter à la section *Utiliser des tokens dans les formules*.

Si la commande est exécutée depuis un composant, elle s’applique par défaut aux méthodes du composant. Si vous passez le paramètre *\**, elle accède aux méthodes de la base hôte.

#### Exemple 1 

Reportez-vous à l'exemple de la commande [METHOD SET CODE](method-set-code.md).

#### Exemple 2 

Cet exemple illustre les effets du paramètre *option*.

Vous voulez importer le code de la méthode "simple\_init" suivante :

```4d
 Case of
    :(Form event code=On Load)
       ALL RECORDS([Customer])
 End case
```

Si vous exécutez le code suivant :

```4d
 var $path : Text
 var $contents : Text
 $code:=METHOD Get path(Chemin méthode projet;"simple_init")
 METHOD GET CODE($path;$contents;0) //pas de tokens
 TEXT TO DOCUMENT("simple_init.txt";$contents)
```

Le document résultant contient :

```RAW
  //%attributes = {"lang":"fr"} commentaire réservé, ajouté par 4DAu cas ou    : (Evenement formulaire code=Sur chargement)        TOUT SELECTIONNER([Customer])Fin de cas
```

Si vous exécutez le code suivant :

```4d
 var $path : Text
 var $contents : Text
 $code:=METHOD Get path(Chemin méthode projet;"simple_init")
 METHOD GET CODE($path;$contents;Code with tokens) //ajouter tokens
 TEXT TO DOCUMENT("simple_init.txt";$contents)
```

Le document résultant contient alors :

```RAW
  //%attributes = {"lang":"fr"} commentaire réservé, ajouté par 4DAu cas ou    : (Evenement formulaire code:C388=Sur chargement:K2:1)        TOUT SELECTIONNER:C47([Customer:1])Fin de cas
```

#### Voir aussi 

[METHOD SET CODE](method-set-code.md)  
*Utiliser des tokens dans les formules*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1190 |
| Thread safe | &cross; |


