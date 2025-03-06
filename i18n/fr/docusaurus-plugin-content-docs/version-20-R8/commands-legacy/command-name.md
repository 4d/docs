---
id: command-name
title: Command name
slug: /commands/command-name
displayed_sidebar: docs
---

<!--REF #_command_.Command name.Syntax-->**Command name** ( *commande* {; *info* {; *thème*}} ) : Text<!-- END REF-->
<!--REF #_command_.Command name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| commande | Integer | &#8594;  | Numéro de la commande |
| info | Integer | &#8592; | Propriété thread-safe de la commande |
| thème | Text | &#8592; | Thème du langage de la commande |
| Résultat | Text | &#8592; | Nom de la commande |

<!-- END REF-->

#### Description 

<!--REF #_command_.Command name.Summary-->La fonction **Command name** retourne le nom ainsi que (optionnellement) les propriétés de la commande dont le numéro a été passé dans *commande*.<!-- END REF-->Le numéro de chaque commande est indiqué dans l'Explorateur ainsi que dans la zone Propriétés de cette documentation.

**Note de compatibilité :** Le nom d'une commande pouvant varier au fil des versions de 4D (commandes renommées) ou en fonction de la langue de l'application, cette commande était utilisée dans les versions précédentes du programme pour désigner une commande directement via son numéro, en particulier dans les parties de code non tokenisées. Ce besoin a diminué au fil des évolutions de 4D, car pour les instructions non tokenisées (formules), 4D propose désormais une *syntaxe tokenisée* permettant de s'affranchir des variations des noms de commandes mais aussi des autres éléments comme les tables, tout en permettant de les saisir de façon lisible (pour plus d'informations sur ce point, reportez-vous à la section *Utiliser des tokens dans les formules*). Par ailleurs, par défaut la version anglaise du langage est utilisée à compter de 4D v15 (toutefois l'option "Utiliser langage français et paramètres régionaux système" de la [Is a list](is-a-list.md) des Préférences permet de continuer à utiliser la version française dans un 4D français).

Deux paramètres optionnels sont disponibles :

* *info* : propriétés de la commande. La valeur retournée est un champ de bits, dans lequel pour le moment seul le premier bit est signifiant (bit 0). Il est à 1 si la commande est *thread-safe* (i.e. compatible avec une exécution dans un process préemptif) et à 0 si la commande est *thread-unsafe*. Seules les commandes *thread-safe* peuvent être utilisées dans les process préemptifs. Pour plus d'informations sur ce point, veuillez vous reporter à la section *Process 4D préemptifs*.
* *thème* : retourne le nom du thème de la commande dans le langage 4D.

La commande **Command name** met la variable OK à 1 si la commande correspond à un numéro de commande existant, et à 0 dans le cas contraire. A noter cependant que certaines commandes existantes ont été désactivées, auquel cas **Command name** retourne une chaîne vide. 

#### Exemple 1 

Le code suivant vous permet de charger toutes les commandes 4D valides dans un tableau : 

```4d
 var $Lon_id : Integer
 var $Txt_command : Text
 ARRAY LONGINT($tLon_Command_IDs;0)
 ARRAY TEXT($tTxt_commands;0)
 
 Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id)
    If(OK=1) //le numéro de commande existe
       If(Length($Txt_command)>0) //la commande n'est pas désactivée
          APPEND TO ARRAY($tTxt_commands;$Txt_command)
          APPEND TO ARRAY($tLon_Command_IDs;$Lon_id)
       End if
    End if
 Until(OK=0) //fin des commandes existantes
```

#### Exemple 2 

Dans un formulaire, vous voulez afficher une liste déroulante contenant les commandes standard de génération d'états. Dans la méthode objet de cette liste déroulante, vous écrivez :

```4d
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asCommand;4)
       asCommand{1}:=Command name(1)
       asCommand{2}:=Command name(2)
       asCommand{3}:=Command name(3)
       asCommand{4}:=Command name(4)
  // ...
 End case
```

Dans une version anglaise de 4D, la liste déroulante contiendra : Sum, Average, Min et Max.   
Dans une version française\* de 4D, la liste déroulante contiendra : Somme, Moyenne, Min et Max.

\*avec l'application 4D paramétrée pour utiliser le langage français (cf. note de compatibilité),

#### Exemple 3 

Vous souhaitez créer une méthode qui retourne **Vrai** si la commande dont le numéro passé en paramètre est thread-safe, et **Faux** si elle est thread-unsafe.

```4d
  //Méthode projet Is_Thread_Safe
  //Is_Thread_Safe(numCom) -> Booléen
 
 var $1;$threadsafe : Integer
 var $name : Text
 var $0 : Boolean
 $name:=Command name($1;$threadsafe;$theme)
 If($threadsafe ?? 0) //si le premier bit est à 1
    $0:=True
 Else
    $0:=False
 End if
```

Par exemple, pour la commande "STOCKER ENREGISTREMENT", numéro 53, vous pouvez écrire :

```4d
 $isSafe:=Is_Thread_Safe(53)
  // retourne Vrai
```

#### Voir aussi 

[EXECUTE FORMULA](execute-formula.md)  
*Process 4D préemptifs*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 538 |
| Thread safe | &check; |
| Modifie les variables | OK |


