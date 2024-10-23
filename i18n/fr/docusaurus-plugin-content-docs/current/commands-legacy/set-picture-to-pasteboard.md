---
id: set-picture-to-pasteboard
title: SET PICTURE TO PASTEBOARD
slug: /commands/set-picture-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE TO PASTEBOARD.Syntax-->**SET PICTURE TO PASTEBOARD** ( *image* )<!-- END REF-->
<!--REF #_command_.SET PICTURE TO PASTEBOARD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8594;  | Image à placer dans le conteneur de données |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET PICTURE TO PASTEBOARD.Summary-->**SET PICTURE TO PASTEBOARD** place dans le conteneur de données une copie de l'image que vous avez passée dans *image*.<!-- END REF--> Les données éventuellement présentes dans le conteneur sont préalablement effacées. 

**Note :** Dans le cadre d'une opération de copier/coller, le conteneur de données correspond au Presse-papiers. 

L'image est transportée dans son format natif (jpeg, tif, png, etc.). 

Après avoir placé l'image dans le conteneur, vous pouvez la récupérer à l'aide de la commande [GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md) ou par exemple [GET PASTEBOARD DATA](get-pasteboard-data.md)("com.4d.private.picture.gif";...).

#### Exemple 

Dans une fenêtre flottante, vous affichez un formulaire contenant le tableau *tabNomEmployés* qui liste les noms des employés stockés dans la table \[Employés\]. Chaque fois que vous cliquez sur un nom, vous voulez copier la photographie de l'employé dans le Presse-papiers. Dans la méthode objet du tableau, vous écrivez : 

```4d
 If(tabNomEmployés#0)
    QUERY([Employés];[Employés]Nom=tabNomEmployés{tabNomEmployés})
    If(Picture size([Employés]Photo)>0)
       SET PICTURE TO PASTEBOARD([Employés]Photo) // Copier la photo de l'employée
    Else
       CLEAR PASTEBOARD // Aucune photo trouvée ou aucun enregistrement trouvé
    End if
 End if
```

#### Variables et ensembles système 

Si une copie de l'image est correctement collée dans le conteneur, la variable système OK prend la valeur 1\. S'il n'y a pas assez de mémoire pour coller l'image dans le Presse-papiers, la variable système OK prend la valeur 0, mais aucune erreur n'est générée.

#### Voir aussi 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  