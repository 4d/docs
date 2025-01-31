---
id: font-file
title: Font file
slug: /commands/font-file
displayed_sidebar: docs
---

<!--REF #_command_.Font file.Syntax-->**Font file** ( *famillePolice* {; *stylePolice*} ) : any<!-- END REF-->
<!--REF #_command_.Font file.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| famillePolice | Text | &#8594;  | Nom de la famille de police |
| stylePolice | Integer | &#8594;  | Style de police : 0=normale (par défaut), 1=gras, 2=italique |
| Résultat | Null, Object | &#8592; | Objet fichier police |

<!-- END REF-->

#### Description 

<!--REF #_command_.Font file.Summary-->La commande **Font file** retourne un objet décrivant le fichier de polices de votre système d'exploitation correspondant à *famillePolice* et, éventuellement, à *stylePolice* que vous avez passé dans le paramètre.<!-- END REF-->

Si la police sélectionnée dans *famillePolice* n'est pas installée dans le système d'exploitation, la commande retourne un objet *Null* .

Le paramètre optionnel *stylePolice* permet de définir une variation de style. Vous pouvez passer une ou plusieurs des constantes du thème *Styles de caractères* suivantes (toutes les autres valeurs sont ignorées) :

| Constante | Type        | Valeur |
| --------- | ----------- | ------ |
| Bold      | Entier long | 1      |
| Italic    | Entier long | 2      |
| Plain     | Entier long | 0      |

#### Exemple 

Vous souhaitez vérifier que la police utilisée dans une zone de texte est intégrée à votre systeme pour qu'elle soit affichée correctement :

```4d
 var $fontName : Text
 var $fontStyle : Integer
 var $fontFile : Object
 $fontName:=OBJECT Get font(*;"vText")
 $fontStyle:=OBJECT Get font style(*;"vText")
 $fontFile:=Font file($fontName;$fontStyle)
 If($fontFile=Null)
    $webFolder:=Folder(fk dossier resources).folder("webFolder")
    $fontFile.copyTo($webFolder)
 End if
```

#### Voir aussi 

[OBJECT SET FONT](object-set-font.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1700 |
| Thread safe | &check; |


