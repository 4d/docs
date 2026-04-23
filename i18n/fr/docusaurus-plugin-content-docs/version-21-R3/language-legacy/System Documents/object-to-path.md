---
id: object-to-path
title: Object to path
slug: /commands/object-to-path
displayed_sidebar: docs
---

<!--REF #_command_.Object to path.Syntax-->**Object to path** ( *objetChemin* ) : Text<!-- END REF-->
<!--REF #_command_.Object to path.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objetChemin | Object | &#8594;  | Objet décrivant un contenu de chemin |
| Résultat | Text | &#8592; | Chemin de fichier ou de dossier |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|16 R6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Object to path.Summary-->La commande **Object to path** retourne un chemin (chaîne) basé sur les informations passées dans le paramètre *objetChemin*.<!-- END REF--> Les chemins suivants sont pris en charge :

* Chemin système (Windows / macOS) ou chemin POSIX. Le type de chemin est défini par le dernier caractère de la propriété *parentFolder* (voir ci-dessous).
* Chemin relatif ou chemin absolu (voir *Chemin d'accès absolu ou relatif* pour plus d'informations).

Dans *objetChemin*, passez un objet définissant le chemin que vous souhaitez générer. Il doit contenir les propriétés suivantes :

| **Propriété** | **Type** | **Description**                                                                                                                                                                                                                                                                                                           |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parentFolder  | Texte    | Description des répertoires constituant le chemin. Le dernier caractère doit être un séparateur de dossier. Ce caractère est utilisé par la commande pour détecter le type de chemin. S'il s'agit du séparateur POSIX ("/"), le chemin est créé avec des séparateurs POSIX; sinon, des séparateurs système sont utilisés. |
| name          | Texte    | Nom du fichier ou du dossier final du chemin spécifié, sans extension.                                                                                                                                                                                                                                                    |
| extension     | Texte    | Extension du fichier ou du dossier final. Commence par "." (peut être omis). Chaîne vide "" si pas d'extension.                                                                                                                                                                                                           |
| isFolder      | Booléen  | "true" si "name" est un nom de dossier, sinon "false" ("false" par défaut)                                                                                                                                                                                                                                                |

*objetChemin* sera généralement fourni par la commande [Path to object](../commands/path-to-object), mais en principe l'objet peut être créé de manière personnaliée. Notez que **Object to path** manipule uniquement des chaînes de caractères. La commande ne vérifie ni la validité du chemin par rapport à son type, ni l'existence réelle des dossiers et fichiers sur le disque. 

## Exemple 

Nous voulons dupliquer et renommer un fichier dans son dossier actuel :

```4d
 var $o : Object
 $o:=New object
 var $path : Text
 $path:="C:\\MyDocs\\file.txt"
 
 $o:=Path to object($path)
 $o.name:=$o.name+"_copy"
 COPY DOCUMENT($path;Object to path($o))
```

## Voir aussi 

[Convert path POSIX to system](../commands/convert-path-posix-to-system)  
[Convert path system to POSIX](../commands/convert-path-system-to-posix)  
[File](../commands/file)    
[Folder](../commands/folder)    
[Path to object](../commands/path-to-object)  
[Test path name](../commands/test-path-name)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1548 |
| Thread safe | yes |


