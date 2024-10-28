---
id: resource-type-list
title: RESOURCE TYPE LIST
slug: /commands/resource-type-list
displayed_sidebar: docs
---

<!--REF #_command_.RESOURCE TYPE LIST.Syntax-->**RESOURCE TYPE LIST** ( *resTypes* {; *resFichier*} )<!-- END REF-->
<!--REF #_command_.RESOURCE TYPE LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resTypes | Text array | &#8592; | Liste des types de ressources disponibles |
| resFichier | Time | &#8594;  | Numéro de référence de fichier de ressources ou tous les fichiers de ressources ouverts (si ce paramètre est omis) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.RESOURCE TYPE LIST.Summary-->La commande **RESOURCE TYPE LIST** remplit le tableau *resTypes* avec les types des ressources présentes dans le(s) fichier(s) de resources ouvert(s).<!-- END REF-->

Si vous passez un numéro de référence de fichier de ressources valide dans le paramètre optionnel *resFichier*, seules les ressources présentes dans ce fichier seront listées. Si vous ne passez pas le paramètre *resFichier*, toutes les ressources de tous les fichiers de ressources ouverts seront listées.

Si vous ne pré-déclarez pas le tableau *resTypes* avant d'appeler **RESOURCE TYPE LIST**, la commande créera par défaut un tableau de type Texte. Si vous pré-déclarez le tableau, vous pouvez lui attribuer le type Alpha ou Texte.

Après l'appel, vous pouvez tester le nombre de types de ressources différents qui ont été trouvés en appliquant la commande [Size of array](size-of-array.md) au tableau *resTypes*.

#### Exemple 1 

L'exemple suivant remplit le tableau *atResType* avec les types de ressources présents dans tous les fichiers de ressource ouverts :

```4d
 RESOURCE TYPE LIST(atResType)
```

#### Exemple 2 

L'exemple suivant vous indique si le fichier de structure Mac OS que vous utilisez contient des plug-ins 4D "ancien modèle", qui devront être mis à jour si vous voulez exploiter la base sous Windows :

```4d
 $vhResFile:=Open resource file(Structure file)
 RESOURCE TYPE LIST(atResType;$vhResFile)
 If(Find in array(atResType;"4DEX")>0)
    ALERT("Cette base contient des plug-ins 4D basés sur l'ancien système."+(Char(13)*2)+
    "Vous devrez les mettre à jour pour pouvoir utiliser la base sous Windows.")
 End if
```

**Note :** Le fichier de structure n'est pas le seul fichier dans lequel des plug-ins "ancien modèle" ont pu être installés. La base peut également être associée à un fichier "Routines Externes" ou "Proc.Ext".

#### Exemple 3 

La méthode projet suivante retourne le nombre de ressources présentes dans un fichier de ressources :

```4d
  // Méthode projet Compter ressources
  // Compter ressources ( Heure ) -> Entier long
  // Compter ressources ( DocRef ) -> Nombre de ressources
 
 var $0 : Integer
 var $1 : Time
 
 $0:=0
 RESOURCE TYPE LIST($atResType;$1)
 For($vlElem;1;Size of array($atResType))
    RESOURCE LIST($atResType{$vlElem};$alResID;$atResName;$1)
    $0:=$0+Size of array($alResID)
 End for
```

Une fois que cette méthode est implémentée dans votre base, vous pouvez écrire par exemple :

```4d
 $vhResFile:=Open resource file("")
 If(OK=1)
    ALERT("Le fichier “"+Document+"” contient "+String(Compter ressources($vhResFile))+
    " ressource(s).")
    CLOSE RESOURCE FILE($vhResFile)
 End if
```

#### Voir aussi 

[RESOURCE LIST](resource-list.md)  