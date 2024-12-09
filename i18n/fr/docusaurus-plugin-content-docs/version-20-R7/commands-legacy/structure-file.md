---
id: structure-file
title: Structure file
slug: /commands/structure-file
displayed_sidebar: docs
---

<!--REF #_command_.Structure file.Syntax-->**Structure file** {( * )} : Text<!-- END REF-->
<!--REF #_command_.Structure file.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Retourner le fichier de structure de la base hôte |
| Résultat | Text | &#8592; | Nom long du fichier de structure de la base |

<!-- END REF-->

#### Description 

<!--REF #_command_.Structure file.Summary-->La fonction **Structure file** retourne le chemin d'accès du fichier de structure de la base en cours d'utilisation.<!-- END REF--> 

* Avec les bases binaires, la commande retourne le chemin d'accès du fichier **.4db.**
* Avec les bases projets, la commande retourne le chemin d'accès du fichier **.4dproject.**

**Note :** Dans le cas particulier d'une base compilée et fusionnée avec 4D Volume Desktop, cette commande retourne le chemin d'accès du fichier de l'application (fichier exécutable) sous Windows et macOS. Sous macOS, ce fichier est situé à l’intérieur du progiciel, dans le dossier \[Contents:MacOS\]. Ce fonctionnement provient d’un ancien mécanisme, conservé pour des raisons de compatibilité. Si vous souhaitez obtenir le nom long du progiciel lui-même, il est préférable d’utiliser la commande [Application file](application-file.md). L’astuce consiste à tester l’application à l’aide de la commande [Application type](application-type.md) puis à exécuter **Structure file** ou [Application file](application-file.md) en fonction du contexte.

**ATTENTION :** Si vous appelez cette commande lorsque vous utilisez 4D en mode distant, seul le nom du fichier de structure est renvoyé, pas le nom long.

Le paramètre facultatif *\** est utile dans le cadre d'une architecture utilisant des composants : il permet de déterminer la structure (hôte ou composant) dont vous souhaitez obtenir le chemin d'accès en fonction du contexte d'appel de la commande :

* Lorsque la commande est appelée depuis un composant :  
   * si le paramètre *\** est passé, la commande retourne le chemin d'accès du fichier de structure de la base hôte  
   * si le paramètre *\** n’est pas passé, la commande retourne le chemin d'accès du fichier de structure du composant.  
   Le fichier de structure d’un composant correspond au fichier de stucture (.4db, .4dc, .4dproject, .4dz) du composant situé dans le dossier “Components” de la base. Cependant, un composant peut également être installé sous la forme d’un alias/raccourci ou d’un dossier/package .4dbase :  
         * dans le cas d’un composant installé sous forme d’alias/raccourci, la commande retourne le chemin d’accès du fichier original (l’alias ou le raccourci est résolu).  
         * dans le cas d’un composant installé sous forme de dossier/package .4dbase, la commande retourne le chemin d’accès du fichier à l’intérieur de ce dossier/package.
* Lorsque la commande est appelée depuis une méthode d’une base hôte, elle retourne toujours le chemin d'accès du fichier de structure/projet de la base hôte, que le paramètre *\** soit passé ou non.

#### Exemple 1 

Cet exemple affiche le nom et l'emplacement du fichier de structure que vous utilisez :

```4d
 var $fullpath : Object
 var $name;$path : Text
 If(Application type#4D mode distant)
    $fullpath:=Path to object(Structure file)
    $name:=$fullpath.name
    $path:=$fullpath.parentFolder
    ALERT("Vous êtes en train d'utiliser la base "+Char(34)+$name+Char(34)+" qui se trouve au "+Char(34)+$path+Char(34)+".")
 Else
    ALERT("Vous êtes connecté à la base "+Char(34)+Structure file+Char(34))
 End if
```

#### Exemple 2 

L’exemple suivant permet de savoir si la méthode est appelée depuis un composant :

```4d
 var $0 : Boolean
 $0:=(Structure file#Structure file(*))
  // $0=Vrai si la méthode est appelée depuis un composant
```

#### Voir aussi 

[Application file](application-file.md)  
[COMPONENT LIST](component-list.md)  
[Data file](data-file.md)  