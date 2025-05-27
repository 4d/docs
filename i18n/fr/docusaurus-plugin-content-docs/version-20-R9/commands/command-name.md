---
id: command-name
title: Command name
slug: /commands/command-name
displayed_sidebar: docs
---

<!--REF #_command_.Command name.Syntax-->**Command name** ( *command* {; *info* {; *theme*}} ) : Text<!-- END REF-->

<!--REF #_command_.Command name.Params-->

| Paramètres | Type    |                             | Description                        |
| ---------- | ------- | --------------------------- | ---------------------------------- |
| command    | Integer | &#8594; | Numéro de commande                 |
| info       | Integer | &#8592; | Propriété de la commande à évaluer |
| theme      | Text    | &#8592; | Thème du langage de la commande    |
| Résultat   | Text    | &#8592; | Nom de la commande                 |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                            |
| ------- | ---------------------------------------- |
| 20 R9   | Prise en charge de la propriété obsolète |

</details>

## Description

La commande **Command name** <!--REF #_command_.Command name.Summary-->retourne le nom ainsi que (optionnellement) les propriétés de la commande dont vous passez le numéro dans *commande*<!-- END REF-->. Le numéro de chaque commande est indiqué dans l'explorateur ainsi que dans la zone Propriétés de cette documentation.

**Note de compatibilité :** Le nom d'une commande pouvant varier d'une version à l'autre de 4D (commandes renommées), cette commande était utilisée dans les versions précédentes pour désigner une commande directement par son numéro, notamment dans les portions de code non tokenisées. Ce besoin a diminué au fil du temps alors que 4D continue d'évoluer parce que, pour les requêtes non tokenisées (formules), 4D fournit maintenant une syntaxe avec tokens. Cette syntaxe de s'affranchir des variations des noms de commandes mais aussi des autres éléments comme les tables, tout en permettant de les saisir de façon lisible (pour plus d'informations, se référer à la section *Utilisation des tokens dans les formules*). Notez également que l'option [*Utiliser les paramètres régionaux du système* des Préférences](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) vous permet de continuer à utiliser le langage en Français dans une version française de 4D.

Deux paramètres optionnels sont disponibles :

- *info* : propriétés de la commande. La valeur renvoyée est un *champ de bits*, où les bits suivants sont significatifs :
 - Premier bit (bit 0) : il vaut 1 si la commande est [**thread-safe**](../Develop/preemptive.md#thread-safe-vs-thread-unsafe-code) (c'est-à-dire compatible avec une exécution dans un processus préemptif) et 0 si elle est **thread-unsafe**. Seules les commandes thread-safe peuvent être utilisées dans les [process préemptifs](../Develop/preemptive.md).
 - Deuxième bit (bit 1) : mis à 1 si la commande est **obsolète**, et à 0 si elle ne l'est pas. Une commande obsolète (ou dépréciée) continuera à fonctionner normalement tant qu'elle sera prise en charge, mais elle doit être remplacée dans la mesure du possible et ne doit plus être utilisée dans le nouveau code. Les commandes obsolètes dans votre code génèrent des avertissements dans le [live checker et le compilateur](../code-editor/write-class-method.md#warnings-and-errors).

*thème* : nom du thème du langage 4D pour la commande.

La commande **Command name** met la variable *OK* à 1 si *command* correspond à un numéro de commande existant, et à 0 sinon. Notez toutefois que certaines commandes existantes ont été désactivées, auquel cas **Command name** renvoie une chaîne vide (voir le dernier exemple).

## Exemple 1

Le code suivant permet de charger toutes les commandes 4D valides dans un tableau :

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

## Exemple 2

Dans un formulaire, vous voulez afficher une liste déroulante contenant les commandes standard de génération d'états. Dans la méthode objet de cette liste déroulante, vous écrivez :

```4d
 Case of
    :(Form event code=On Before)
       ARRAY TEXT(asCommand;4)
       asCommand{1}:=Command name(1)
       asCommand{2}:=Command name(2)
       asCommand{3}:=Command name(4)
       asCommand{4}:=Command name(3)
  // ...
 End case
```

Dans la version anglaise de 4D, la liste déroulante contiendra : Sum, Average, Min et Max. Dans la version française\*, la liste déroulante contiendra : Somme, Moyenne, Min et Max.

\*avec une application 4D configurée pour utiliser le langage de programmation français (voir note de compatibilité)

## Exemple 3

Vous souhaitez créer une méthode qui renvoie **True** si la commande, dont le numéro est passé en paramètre, est thread-safe, et **False** dans le cas contraire.

```4d
  //Is_Thread_Safe project method
 #declare($command : Integer) : Boolean
 var $threadsafe : Integer
 var $name; $theme : Text
 $name:=Command name($command;$threadsafe;$theme)
 If($threadsafe ?? 0) //si le premier bit est à 1
    return True
 Else
    return False
 End if
```

Ensuite, pour la commande "SAVE RECORD" (53) par exemple, vous pouvez écrire :

```4d
 $isSafe:=Is_Thread_Safe(53)
  // renvoie True
```

## Exemple 4

Vous souhaitez renvoyer une collection de toutes les commandes obsolètes dans votre version de 4D.

```4d
var $info; $Lon_id : Integer
var $Txt_command : Text
var $deprecated : Collection

Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id;$info)
    If($info ?? 1) //le 2e bit est à 1
            //alors la commande est dépréciée
        $deprecated.push($Txt_command)
    End if
Until(OK=0) //fin des commandes existantes

```

## Voir également

[EXECUTE FORMULA](../commands-legacy/execute-formula.md)\
[Preemptive Processes](../Develop/preemptive.md)

## Propriétés

|                       |                             |
| --------------------- | --------------------------- |
| Numéro de commande    | 538                         |
| Thread safe           | &check; |
| Modifie les variables | OK                          |


