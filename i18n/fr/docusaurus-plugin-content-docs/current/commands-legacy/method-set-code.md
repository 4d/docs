---
id: method-set-code
title: METHOD SET CODE
slug: /commands/method-set-code
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET CODE.Syntax-->**METHOD SET CODE** ( *chemin* ; *code* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET CODE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text, Text array | &#8594;  | Texte ou Tableau texte contenant un ou plusieurs chemin(s) de méthode(s) |
| code | Text, Text array | &#8594;  | Code de(s) méthode(s) désignée(s) |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD SET CODE.Summary-->La commande **METHOD SET CODE** modifie le code de la ou des méthode(s) désignée(s) par le paramètre *chemin* avec le contenu passé dans le paramètre *code*.<!-- END REF--> 

La commande peut accéder au code existant de tous les types de méthodes : méthodes bases, définitions de classes, triggers, méthodes projets, méthodes formulaires et méthodes objets. 

Si une méthode n’existe pas, elle est créée avec le contenu de code.

**Note pour les projets :** 

* La création d'une nouvelle méthode avec cette commande n'est possible que pour les méthodes base, les triggers et les méthodes projet.
* Le code est enregistré avec ou sans tokens dans les projets nouvellement créés en fonction de l'option *Inclure les tokens dans les fichiers sources du projet* dans les Préférences.

Vous pouvez utiliser deux types de syntaxes, basées soit sur des tableaux texte, soit sur des variables texte :

```4d
 var vTchemin : Text // variables texte
 var vTcode : Text
 METHOD SET CODE(vTchemin;vTcode) // code d’une seule méthode
```

```4d
 ARRAY TEXT(tabChemins;0) // tableaux texte
 ARRAY TEXT(tabCodes;0)
 METHOD SET CODE(tabChemins;tabCodes) // codes de plusieurs méthodes
```

Il n’est pas possible de mixer les deux syntaxes.

Si un chemin d’accès passé est invalide, la commande ne fait rien. 

Lors de l'appel de **METHOD SET CODE**, par défaut les attributs des méthodes sont réinitialisés. Cependant, si la première ligne du *code* d’une méthode contient des métadonnées valides (exprimées en JSON), elles sont utilisées pour définir les attributs de la méthode et la première ligne n’est pas insérée. Exemple de métadonnées :

```4d
  // %attributes = {"invisible":true,"lang":"fr","folder":"Security"}
```

**Note :** Ces métadonnées sont générées automatiquement par la commande [METHOD GET CODE](method-get-code.md). Pour plus d'informations sur les attributs pris en charge, reportez-vous à la description de la commande [METHOD SET ATTRIBUTES](method-set-attributes.md).

Concernant la propriété "folder" des métadonnées :

* si cette propriété est présente et correspond à un dossier valide, la méthode sera placée dans le dossier parent,
* si cette propriété n’est pas présente ou si le dossier n’existe pas, la commande ne change rien au niveau du dossier parent,
* si cette propriété est présente et contient une chaîne vide, la méthode sera placée au niveau racine.

Vous pouvez exécuter cette commande depuis un composant, mais dans ce cas vous devez passer le paramètre *\** car l’accès en écriture au code du composant n’est pas possible. Si vous omettez le paramètre *\** dans ce contexte, l’erreur -9763 est générée.

#### Exemple 

Cet exemple permet d’exporter et d’importer la totalité des méthodes projet d’une application :

```4d
 $root_t:=Get 4D folder(Database folder)+"methods"+Folder separator
 ARRAY TEXT($fileNames_at;0)
 CONFIRM("Import ou export des méthodes ?";"Import";"Export")
 
 If(OK=1)
    DOCUMENT LIST($root_t;$fileNames_at)
    For($loop_l;1;Size of array($fileNames_at))
       $filename_t:=$fileNames_at{$loop_l}
       DOCUMENT TO BLOB($root_t+$filename_t;$blob_x)
       METHOD SET CODE($filename_t;BLOB to text($blob_x;UTF8 text without length))
    End for
 Else
    If(Test path name($root_t)#Is a folder)
       CREATE FOLDER($root_t;*)
    End if
    METHOD GET PATHS(Path project method;$fileNames_at)
    METHOD GET CODE($fileNames_at;$code_at)
    For($loop_l;1;Size of array($fileNames_at))
       $filename_t:=$fileNames_at{$loop_l}
       SET BLOB SIZE($blob_x;0)
       TEXT TO BLOB($code_at{$loop_l};$blob_x;UTF8 text without length)
       BLOB TO DOCUMENT($root_t+$filename_t;$blob_x)
    End for
 End if
 SHOW ON DISK($root_t)
```

#### Voir aussi 

[METHOD GET CODE](method-get-code.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1194 |
| Thread safe | &cross; |


