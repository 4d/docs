---
id: pasteboard-data-size
title: Pasteboard data size
slug: /commands/pasteboard-data-size
displayed_sidebar: docs
---

<!--REF #_command_.Pasteboard data size.Syntax-->**Pasteboard data size** ( *typeDonnées* ) : Integer<!-- END REF-->
<!--REF #_command_.Pasteboard data size.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeDonnées | Text | &#8594;  | Type de données |
| Résultat | Integer | &#8592; | Taille (en octets) des données présentes dans le conteneur ou code d'erreur |

<!-- END REF-->

#### Description 

<!--REF #_command_.Pasteboard data size.Summary-->**Pasteboard data size** vous permet de savoir s'il y a des données du type *typeDonnées* dans le conteneur de données.<!-- END REF--> 

**Note :** Dans le cadre d'une opération de copier/coller, le conteneur de données correspond au Presse-papiers. 

Si le conteneur de données est vide ou ne contient pas de données du type spécifié, la fonction retourne une erreur -102\. Si le conteneur contient des données du type spécifié, la fonction retourne la taille des données exprimée en octets. 

Passez dans *typeDonnées* une valeur définissant le type de données à tester. Vous pouvez passer une signature 4D, un type UTI (Mac OS), un nom/numéro de format (Windows), ou un type de 4 caractères (compatibilité). Pour plus d'informations sur ces types, reportez-vous à la section *Gestion du conteneur de données*. 

Après avoir vérifié que le conteneur contient bien des données du type que vous voulez, vous pouvez les récupérer à l'aide d'une des commandes suivantes :

* Si le conteneur contient du texte, vous pouvez l'extraire à l'aide de la commande [Get text from pasteboard](get-text-from-pasteboard.md), qui retourne une valeur texte. Sinon, vous pouvez utiliser la commande [GET PASTEBOARD DATA](get-pasteboard-data.md), qui retourne le texte dans un BLOB.
* Si le conteneur contient une image, vous pouvez l'extraire à l'aide de la commande [GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md), qui retourne l'image dans un champ ou une variable. Sinon, vous pouvez utiliser la commande [GET PASTEBOARD DATA](get-pasteboard-data.md), qui retourne l'image dans un BLOB.
* Si le conteneur contient un chemin d'accès de fichier, vous pouvez l'extraire à l'aide de la commande [Get file from pasteboard](get-file-from-pasteboard.md), qui retourne le chemin d'accès du fichier.
* Pour tout type de données, vous pouvez utiliser la commande [GET PASTEBOARD DATA](get-pasteboard-data.md), qui retourne les données dans un BLOB.

#### Exemple 1 

L'exemple suivant teste si le Presse-papiers contient une image jpeg et, si oui, la copie dans une variable 4D : 

```4d
 If(Pasteboard data size("com.4d.private.picture.jfif")>0) // Y a-t-il une image jpeg dans le Presse-papiers ?
    GET PICTURE FROM PASTEBOARD($vPicVariable) // Si oui, extraire l'image du Presse-papiers
 Else
    ALERT("Il n'y a pas d'image dans le Presse-papiers.")
 End if
```

  
**Note :** Si vous passez le type générique 'PICT' (ou la constante Picture data) à la commande, elle retournera toujours 1 et non une taille si le Presse-papiers contient une image. 

#### Exemple 2 

Généralement, après un couper ou un copier, les applications placent des données de type Texte ou Image dans le Presse-papiers, ces deux types de données standard sont reconnus par la plupart des applications. Cependant, une application peut placer dans le Presse-papiers plusieurs copies des mêmes données sous des formats différents. Par exemple, chaque fois que vous copiez ou coupez un tableau, l'application tableur peut placer les données dans un format propriétaire — par exemple, ‘SPSH’ — ou dans les formats SYLK et TEXT. La copie ‘SPSH’ contient les données structurées dans le format interne de l'application. La copie SYLK contient les mêmes données, mais dans le format SYLK, reconnu par la plupart des tableurs. Enfin, la copie TEXT contient les mêmes données, mais sans les informations de formatage supplémentaires présentes dans les formats SYLK ou ‘SPSH’. Donc, lorsque vous écrivez des routines de Couper/Copier/Coller entre 4D et une application tableur, en prenant l'hypothèse que vous connaissez la description du format ‘SPSH’ et que vous pouvez analyser les données SYLK, vous pouvez écrire le code suivant :

```4d
 Case of
  // D'abord, vérifier si le Presse-papiers contient les données venant du tableur
    :(Pasteboard data size('SPSH')>0)
  // ...
  // Ensuite, vérifier si le Presse-papiers contient des données au format SYLK
    :(Pasteboard data size('SYLK')>0)
  // ...
  // Enfin, vérifier si le Presse-papiers contient des données au format TEXT
    :(Pasteboard data size('TEXT')>0)
  // ...
 End case
```

Autrement dit, vous essayez d'extraire du Presse-papiers la copie des données la plus riche en informations originales.

#### Exemple 3 

Vous voulez déplacer des données en format privé entre divers objets de votre formulaire. Vous pouvez écrire :

```4d
  //objet source
 If(FORM Event=On Begin Drag Over)
    APPEND DATA TO PASTEBOARD("some.private.data";$data)
 End if
```

```4d
  //objet cible
 If(FORM Event=On Drag Over)
    $0:=Choose(Pasteboard data size("some.private.data")>0;0;-1)
 End if
```

#### Exemple 4 

Référez-vous à l'exemple de la commande [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md).

#### Voir aussi 

*Conteneur de données*  
[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 400 |
| Thread safe | &cross; |
| Modifie les variables | error |


