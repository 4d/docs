---
id: read-picture-file
title: READ PICTURE FILE
slug: /commands/read-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.READ PICTURE FILE.Syntax-->**READ PICTURE FILE** ( *nomFichier* ; *image* {; *} )<!-- END REF-->
<!--REF #_command_.READ PICTURE FILE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Nom ou chemin d’accès complet du fichier à lire, ou chaîne vide |
| image | Picture | &#8592; | Champ ou variable recevant l’image |
| * | Opérateur | &#8594;  | Si passé = accepter tout type de fichier |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL Release 2|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.READ PICTURE FILE.Summary-->La commande **READ PICTURE FILE** vous permet d’ouvrir l’image stockée dans le fichier disque désigné par *nomFichier* et de la placer dans le champ ou la variable 4D *image*.<!-- END REF--> 

Vous pouvez passer dans *nomFichier* le chemin d’accès complet du fichier à lire, ou uniquement le nom du fichier — auquel cas il doit se trouver à côté du fichier de structure de la base. Sous Windows, vous devez également passer l’extension du fichier.  
Si vous passez une chaîne vide ("") dans *nomFichier*, la boîte de dialogue standard d’ouverture de documents apparaît, permettant à l’utilisateur de sélectionner le fichier à lire, ainsi que les formats disponibles. 

Vous pouvez obtenir la liste des formats disponibles à l’aide de la commande [PICTURE CODEC LIST](../commands/picture-codec-list). 

Passez dans *image* la variable ou le champ image devant recevoir l’image lue. 

**Note :** Le format interne de l’image est conservé au sein de la variable ou du champ 4D. 

Si vous passez le paramètre facultatif *\**, la commande acceptera tout type de fichier. Ce principe permet de manipuler des images sans nécessairement disposer des codecs adéquats (cf. description de la commande [BLOB TO PICTURE](../commands/blob-to-picture)).

## Variables et ensembles système 

Si l’exécution de la commande est correcte, la variable système Document contient le chemin d’accès complet du fichier ouvert et la variable système OK prend la valeur 1\. En cas d’échec, OK prend la valeur 0\. 

## Voir aussi 

[BLOB TO PICTURE](../commands/blob-to-picture)  
*Introduction aux images*  
[PICTURE CODEC LIST](../commands/picture-codec-list)  
[WRITE PICTURE FILE](../commands/write-picture-file)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 678 |
| Thread safe | yes |
| Modifie les variables | OK, Document |


