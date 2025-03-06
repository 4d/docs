---
id: get-pasteboard-data
title: GET PASTEBOARD DATA
slug: /commands/get-pasteboard-data
displayed_sidebar: docs
---

<!--REF #_command_.GET PASTEBOARD DATA.Syntax-->**GET PASTEBOARD DATA** ( *typeDonnées* ; *données* )<!-- END REF-->
<!--REF #_command_.GET PASTEBOARD DATA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeDonnées | Text | &#8594;  | Type de données à extraire du conteneur |
| données | Blob | &#8592; | Données extraites du conteneur |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PASTEBOARD DATA.Summary-->**GET PASTEBOARD DATA** retourne dans le champ ou la variable de type BLOB *données* les données qui se trouvent dans le conteneur de données et dont le type est passé dans *typeDonnées*.<!-- END REF--> (Si le conteneur de données contient du texte copié depuis 4D, le jeu de caractères du BLOB sera probablement UTF-16.)

**Note :** Dans le cadre d'une opération de copier/coller, le conteneur de données correspond au Presse-papiers. 

Passez dans *typeDonnées* une valeur définissant le type de données à extraire. Vous pouvez passer une signature 4D, un type UTI (Mac OS), un nom/numéro de format (Windows), ou un type de 4 caractères (compatibilité). Pour plus d'informations sur ces types, reportez-vous à la section *Gestion du conteneur de données*. 

**Note :** Il n'est pas possible de lire les données de type fichier avec cette commande, pour cela vous devez utiliser la commande [Get file from pasteboard](get-file-from-pasteboard.md). 

#### Exemple 

Les méthodes objet suivantes sont celles de deux boutons qui copient et collent des données dans le tableau *taOptions* (pop up menu, liste déroulante...) se trouvant dans le formulaire :

```4d
  //Méthode objet bCopiertaOptions
 If(Size of array(taOptions)>0) //Est-ce qu'il y a quelque chose à copier ?
    VARIABLE TO BLOB(taOptions;$vxClipData) //Mettre les éléments du tableau dans un BLOB
    CLEAR PASTEBOARD //Vider le Presse-papiers
    APPEND DATA TO PASTEBOARD("artx";$vxClipData) //Le type de données est choisi arbitrairement
 End if
 
  // Méthode objet bCollertaOptions
 If(Pasteboard data size("artx")>0) //Est-ce qu'il y a les données du type "artx" dans le Presse-papiers?
    GET PASTEBOARD DATA("artx";$vxClipData) //Extraire les données du Presse-papiers
    BLOB TO VARIABLE($vxClipData;taOptions) //Remplir le tableau avec les données venant du BLOB
    taOptions:=0 //Réinitialiser l'élément sélectionné du tableau
 End if
```

#### Variables et ensembles système 

Si les données sont extraites correctement, la variable OK prend la valeur 1\. Sinon, elle prend la valeur 0.

#### Voir aussi 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 401 |
| Thread safe | &cross; |
| Modifie les variables | OK |


