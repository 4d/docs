---
id: convert-path-system-to-posix
title: Convert path system to POSIX
slug: /commands/convert-path-system-to-posix
displayed_sidebar: docs
---

<!--REF #_command_.Convert path system to POSIX.Syntax-->**Convert path system to POSIX** ( *cheminSystème* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Convert path system to POSIX.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminSystème | Text | &#8594;  | Chemin d’accès relatif ou absolu exprimé en syntaxe système |
| * | Opérateur | &#8594;  | Option d’encodage |
| Résultat | Text | &#8592; | Chemin d’accès absolu exprimé en syntaxe POSIX |

<!-- END REF-->

#### Description 

<!--REF #_command_.Convert path system to POSIX.Summary-->La commande **Convert path system to POSIX** convertit un chemin d’accès exprimé avec la syntaxe système en chemin d’accès exprimé avec la syntaxe POSIX (Unix).<!-- END REF--> 

Passez dans le paramètre *cheminSystème* le chemin d’accès à un fichier ou un dossier, exprimé avec la syntaxe système (Mac OS ou Windows). Ce chemin peut être absolu ou relatif au dossier de la base (dossier contenant le fichier de structure de la base). Il n’est pas obligatoire que les éléments du chemin existent réellement sur le disque au moment de l’exécution de la commande (la commande ne teste pas la validité du chemin d’accès). 

La commande retourne le chemin d’accès complet du fichier ou du dossier exprimé dans la syntaxe POSIX. La commande retourne toujours un chemin d’accès absolu, quel que soit le type de chemin passé dans *cheminSystème*. Si vous avez passé un chemin relatif dans *cheminSystème*, 4D complète la valeur retournée en ajoutant le chemin d’accès au dossier de la base. 

Le paramètre optionnel *\** permet de définir l’encodage du chemin POSIX. Par défaut, **Convert path system to POSIX** n’encode pas les caractères spéciaux du chemin POSIX. Si vous passez le paramètre *\**, les caractères seront traduits (par exemple, "Mon dossier" devient "Mon%20dossier").

#### Exemple 1 

Exemples sous OS X

```4d
 $chemin:=Convert path system to POSIX("machd:file 2.txt")
     //machd est le disque de démarrage
     //retourne "/file 2.txt"
 $chemin:=Convert path system to POSIX("disk2:file 2.txt")
     //disk2 est un disque additionnel (pas de démarrage)
     //retourne "/Volumes/disk2/file 2.txt"
 $chemin:=Convert path system to POSIX("machd:file 2.txt";*)
     //retourne "/file%202.txt"
 $chemin:=Convert path system to POSIX(":resources:images") //chemin relatif
     //retourne "/User/marc/Documents/basevideo/resources/images"
 $chemin:=Convert path system to POSIX("resources:images") //chemin absolu
     //retourne "/resources/images"
```

#### Exemple 2 

Exemple sous Windows

```4d
 $chemin:=Convert path system to POSIX("c:\docs\file 2.txt")
     //retourne "c:/docs/file 2.txt"
 $chemin:=Convert path system to POSIX("\\srv\tempo\file.txt")
     //retourne "//srv/tempo/file.txt"
```

#### Voir aussi 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  
[Test path name](test-path-name.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1106 |
| Thread safe | &check; |
| Interdite sur le serveur ||


