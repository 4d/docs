---
id: path-to-object
title: Path to object
slug: /commands/path-to-object
displayed_sidebar: docs
---

<!--REF #_command_.Path to object.Syntax-->**Path to object** ( *chemin* {; *typeChemin*} ) : Object<!-- END REF-->
<!--REF #_command_.Path to object.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text | &#8594;  | Chemin |
| typeChemin | Integer | &#8594;  | Type de syntaxe du chemin : Système (par défaut) ou  Posix |
| Résultat | Object | &#8592; | Objet décrivant le contenu du chemin |

<!-- END REF-->

#### Description 

<!--REF #_command_.Path to object.Summary-->La commande **Path to object** retourne un objet contenant les propriétés spécifiques du *chemin* passé en paramètre.<!-- END REF--> 

Par défaut, si vous omettez le paramètre *typeChemin*, il sera présumé que vous passez un *chemin* système, contenant des séparateurs systèmes ("\\" sous Windows, ":" sous macOS). Si vous passez un *chemin* Posix contenant des séparateurs Posix ("/") ou si vous souhaitez expressément indiquer le type du chemin, passez une des constantes suivantes dans le paramètre *typeChemin* : 

| Constante      | Type        | Valeur | Comment                                                                            |
| -------------- | ----------- | ------ | ---------------------------------------------------------------------------------- |
| Path is POSIX  | Entier long | 1      | Le chemin est exprimé en syntaxe POSIX.                                            |
| Path is system | Entier long | 0      | (Défaut) Le chemin est exprimé avec la syntaxe système courante (Windows ou macOS) |

La commande renvoie un objet résultant de l'analyse du *chemin*. Les propriétés suivantes sont disponibles :

| **Propriété** | **Type** | **Description**                                                                                             |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| parentFolder  | Texte    | Description des répertoires constituant le chemin. Le dernier caractère est un séparateur de dossier.       |
| name          | Texte    | Nom du fichier ou du dossier final du chemin spécifié, sans extension.                                      |
| extension     | Texte    | Extension du fichier final ou nom du dossier. Commence toujours par ".". Chaîne vide "" si pas d'extension. |
| isFolder      | Booléen  | "true" si "name" est un nom de dossier, sinon "false" ("false" par défaut)                                  |

4D considère que vous avez passé un chemin de dossier si le dernier caractère du chemin est un séparateur correspondant à son type (par exemple "\\" sous Windows). Sinon, 4D considère que vous avez passé un nom de fichier.  
L'extension est retournée, si elle n'est pas vide, que le chemin désigne un fichier ou un dossier. Dans les deux cas, vous devez concaténer le nom et l'extension pour obtenir le nom complet.

Notez que **Path to object** ne gère que les chaînes. Cette commande ne vérifie pas si le type de chemin est valide, ni l'existence réelle d'un fichier ou d'un dossier.

#### Exemple 1 

Les exemples suivants montrent différents résultats avec les chemins d'accès :

```4d
 var $o : Object
 $o:=Path to object("C:\\first\\second\\fileZ") //sous Windows
  //$o.parentFolder="C:\\first\\second\\"
  //$o.name="fileZ"
  //$o.extension=""
  //$o.isFolder=false
```

```4d
 var $o : Object
 $o:=Path to object("osx:Users:john:Documents:Comments.text") //sous MacOS
  //$o.parentFolder="osx:Users:john:Documents:"
  //$o.name="Comments"
  //$o.extension=".text"
  //$o.isFolder=false
```

```4d
 var $o : Object
 $o:=Path to object("\\images\\jan\\pict1.png";Path is system) //sous Windows
  //$o.parentFolder="\\images\\jan\\"
  //$o.name="pict1"
  //$o.extension=".png"
  //$o.isFolder=false
```

Définir un chemin vers un dossier :

```4d
 var $o : Object
 $o:=Path to object("osx:Users:oscargoldman:Desktop:Databases:") // MacOS
  //$o.parentFolder="osx:Users:oscargoldman:Desktop:"
  //$o.name="Databases"
  //$o.extension=""
  //$o.isFolder=true
```

```4d
 var $o : Object
 $o:=Path to object("C:\\4D\\Main\\216410\\64\\4D\\4D.user\\")  // Windows
  //$o.parentFolder="C:\\4D\\Main\\216410\\64\\4D\\"
  //$o.name="4D"
  //$o.extension=".user"
  //$o.isFolder=true
```

```4d
 var $o : Object
 $o:=Path to object("/first/second.bundle/";Path is POSIX)
  //$o.parentFolder="/first/"
  //$o.name="second"
  //$o.extension=".bundle"
  //$o.isFolder=true
```

Si le chemin est un répertoire racine, parentFolder est vide :

```4d
 var $o : Object
 $o:=Path to object("C:\\")  // sous Windows
  //$o.parentFolder=""
  //$o.name="c:"
  //$o.extension=""
  //$o.isFolder=true
```
  
  
```4d
 var $o : Object
 $o:=Path to object("osx:") // sous MacOS
  //$o.parentFolder=""
  //$o.name="osx"
  //$o.extension=""
  //$o.isFolder=true
```
  
  
Si la dernière partie du chemin est ".something", c'est considéré comme un nom de fichier :  
  
```4d
 var $o : Object
 $o:=Path to object("/folder/.invisible";Path is POSIX)
  //$o.parentFolder="/folder/"
  //$o.name=".invisible"
  //$o.extension=""
  //$o.isFolder=false
```

#### Exemple 2 

Vous pouvez combiner cette commande avec [Object to path](object-to-path.md) pour renommer un fichier dans un chemin :

```4d
 var $o : Object
 var $path : Text
 $o:=Path to object("C:\\4D\\resources\\images\\4D.jpg")
  //$o.parentFolder="C:\\4D\\resources\\images\\"
  //$o.name="4D"
  //$o.extension=".jpg"
  //$o.isFolder=false
 
 $o.name:="4DOld"
 $path:=Object to path($o)
  //$path="C:\4D\resources\images\4DOld.jpg"
```

#### Exemple 3 

Vous voulez connaître le nombre de sous-dossiers contenus dans un chemin :

```4d
 var $o : Object
 var $path : Text
 var $vCount : Integer
 $path:=Select folder // on laisse l'utilisateur sélectionner un dossier
 $o:=Path to object($path)
 Repeat
    $o:=Path to object($o.parentFolder)
    $vCount:=$vCount+1
 Until($o.parentFolder="")
 ALERT("La profondeur du chemin est : "+String($count))
```

#### Voir aussi 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Convert path system to POSIX](convert-path-system-to-posix.md)  
[File](../commands/file.md)    
[Folder](../commands/folder.md)    
[Object to path](object-to-path.md)  
[Test path name](test-path-name.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1547 |
| Thread safe | &check; |


