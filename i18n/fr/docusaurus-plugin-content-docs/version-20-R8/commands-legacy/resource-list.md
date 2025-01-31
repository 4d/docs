---
id: resource-list
title: RESOURCE LIST
slug: /commands/resource-list
displayed_sidebar: docs
---

<!--REF #_command_.RESOURCE LIST.Syntax-->**RESOURCE LIST** ( *resType* ; *resNums* ; *resNoms* {; *resFichier*} )<!-- END REF-->
<!--REF #_command_.RESOURCE LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resType | Text | &#8594;  | Type de ressource (4 caractères) |
| resNums | Integer array | &#8592; | Numéros des ressources de ce type |
| resNoms | Text array | &#8592; | Noms des ressources de ce type |
| resFichier | Time | &#8594;  | Numéro de référence de fichier de ressources ou tous les fichiers de ressources ouverts si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESOURCE LIST.Summary-->La commande **RESOURCE LIST** remplit les tableaux *resNums* et *resNoms* avec les numéros et les noms des ressources dont vous avez passé le type dans *resType*.<!-- END REF-->

**Important :** Vous devez passez dans *resType* une chaîne de 4 caractères.

Si vous passez un numéro de référence de fichier de ressources valide dans le paramètre optionnel *resFichier*, seules les ressources présentes dans ce fichier seront listées. Si vous ne passez pas le paramètre *resFichier*, toutes les ressources de tous les fichiers de ressources ouverts seront listées. 

Si vous ne pré-déclarez pas les tableaux *resNums* et *resNoms* avant d'appeler **RESOURCE LIST**, la commande créera par défaut le tableau *resNums* avec le type Entier long et *resNoms* avec le type Texte. Si vous pré-déclarez les tableaux, vous devez attribuer le type Entier long à *resNums*, mais pouvez attribuer le type Alpha ou Texte à *resNoms*.

Après l'appel, vous pouvez tester le nombre de ressources qui ont été trouvées en appliquant la commande [Size of array](size-of-array.md) au tableau *resNums* ou *resNoms*.

#### Exemple 1 

L'exemple suivant remplit les tableaux *$alResNum* et *$atResNom* avec les numéros et les noms des ressources de type Listes de chaînes présentes dans le fichier de structure de la base : 

```4d
 If(Sous Windows)
    $vhStructureResFile:=Open resource file(Replace string(Structure file;".4DB";".RSR"))
 Else
    $vhStructureResFile:=Open resource file(Structure file)
 End if
 If(OK=1)
    RESOURCE LIST("STR#";$alResNum;$atResNom;$vhStructureResFile)
 End if
```

#### Exemple 2 

L'exemple suivant copie dans la bibliothèque d'images de la base les ressources image présentes dans tous les fichiers de ressources ouverts :

```4d
 RESOURCE LIST("PICT";$alResNum;$atResNom)
 Open window(50;50;550;120;5;"Copie des ressources PICT...")
 For($vlElem;1;Size of array($alResNum))
    GET PICTURE RESOURCE($alResNum{$vlElem};$vgImage)
    If(OK=1)
       $vsNom:=$atResNom{$vlElem}
       If($vsNom="")
          $vsNom:="PICT resID="+String($alResNum{$vlElem})
       End if
       ERASE WINDOW
       GOTO XY(2;1)
       MESSAGE("Ajout de l'image “"+$vsNom+"” à la bibliothèque d'images de la base.")
       SET PICTURE TO LIBRARY($vgImage;$alResNum{$vlElem};$vsNom)
    End if
 End for
 CLOSE WINDOW
```

#### Voir aussi 

[RESOURCE TYPE LIST](resource-type-list.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 500 |
| Thread safe | &cross; |


