---
id: convert-path-posix-to-system
title: Convert path POSIX to system
slug: /commands/convert-path-posix-to-system
displayed_sidebar: docs
---

<!--REF #_command_.Convert path POSIX to system.Syntax-->**Convert path POSIX to system** ( *cheminPosix* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Convert path POSIX to system.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminPosix | Text | &#8594;  | Chemin d’accès POSIX |
| * | Opérateur | &#8594;  | Option d’encodage |
| Résultat | Text | &#8592; | Chemin d’accès exprimé en syntaxe système |

<!-- END REF-->

#### Description 

<!--REF #_command_.Convert path POSIX to system.Summary-->La commande **Convert path POSIX to system** convertit un chemin d’accès exprimé avec la syntaxe POSIX (Unix) en chemin d’accès exprimé avec la syntaxe système.<!-- END REF--> 

Passez dans le paramètre *cheminPosix* le chemin d’accès complet à un fichier ou un dossier, exprimé avec la syntaxe POSIX. Ce chemin doit être absolu (il doit débuter par le caractère "/"). Vous devez passer un chemin disque, il n’est pas possible de passer de chemin réseau (débutant par exemple par ftp://ftp.monsite.fr).

La commande retourne le chemin d’accès complet du fichier ou du dossier exprimé dans la syntaxe du système courant. 

Le paramètre optionnel *\** vous permet d’indiquer si le paramètre *cheminPosix* est encodé. Si c’est le cas, vous devez passer ce paramètre sinon la conversion sera invalide. La commande retourne le chemin d’accès sans encodage. 

#### Exemple 1 

Exemple sous Mac OS :

```4d
 $chemin:=Convert path POSIX to system("/Volumes/machd/file 2.txt") //retourne "machd:file 2.txt"
 $chemin:=Convert path POSIX to system("/Volumes/machd/file%202.txt";*)  //retourne "machd:file 2.txt"
 $chemin:=Convert path POSIX to system("/file 2.txt") //retourne "machd:file 2.txt" si machd est le disque de démarrage
```

#### Exemple 2 

Exemples sous Windows :

```4d
 $chemin:=Convert path POSIX to system("c:/docs/file 2.txt") //retourne "c:\\docs\\file 2.txt"
 $chemin:=Convert path POSIX to system("c:/docs/file%202.txt";*) //retourne "c:\\docs\\file 2.txt"
```

#### Voir aussi 

[Convert path system to POSIX](convert-path-system-to-posix.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  