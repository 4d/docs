---
id: application-file
title: Application file
slug: /commands/application-file
displayed_sidebar: docs
---

<!--REF #_command_.Application file.Syntax-->**Application file**  : Text<!-- END REF-->
<!--REF #_command_.Application file.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom long du fichier 4D exécutable ou de l'application 4D |

<!-- END REF-->

#### Description 

<!--REF #_command_.Application file.Summary-->La fonction **Application file** retourne le nom long (c'est-à-dire le chemin d'accès complet au fichier, y compris son nom) du fichier exécutable ou de l'application 4D que vous utilisez.<!-- END REF--> 
Si, par exemple, vous utilisez 4D qui se trouve dans le répertoire \\PROGRAMMES\\4D sur le volume E, **Application file** renvoie E:\\PROGRAMMES\\4D\\4D.EXE.

*Sous Mac OS*  
Si, par exemple, vous utilisez 4D qui se trouve dans le dossier Programmes sur le disque Disque Dur, **Application file** renvoie Disque Dur:Programmes:4D.app.

#### Exemple 

Lorsque vous démarrez votre base sous Windows, vous souhaitez vérifier qu'une librairie DLL se trouve au même niveau que le fichier exécutable de 4D. Dans la , vous pouvez écrire les instructions suivantes :

```4d
 If(Is Windows&(Application type#4D Server))
    var $appPath : Object
    $appPath:=Path to object(Application file)
    If(Test path name(($appPath.parentFolder)+"XRAYCAPT.DLL")#Is a document)
       ALERT("XRAYCAPT.DLL n'est pas présent. La saisie de radios n'est pas disponible.")
    End if
 End if
```

#### Voir aussi 

[Data file](data-file.md)  
[Structure file](structure-file.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 491 |
| Thread safe | &check; |
| Interdite sur le serveur ||


