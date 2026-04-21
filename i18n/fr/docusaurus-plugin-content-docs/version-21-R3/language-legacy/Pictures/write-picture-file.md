---
id: write-picture-file
title: WRITE PICTURE FILE
slug: /commands/write-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.WRITE PICTURE FILE.Syntax-->**WRITE PICTURE FILE** ( *nomFichier* ; *image* {; *codec*} )<!-- END REF-->
<!--REF #_command_.WRITE PICTURE FILE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Nom ou chemin d’accès complet du fichier à écrire, ou chaîne vide |
| image | Picture | &#8594;  | Champ ou variable image à écrire |
| codec | Text | &#8594;  | Identifiant de codec d'image |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.WRITE PICTURE FILE.Summary-->La commande **WRITE PICTURE FILE** vous permet de sauvegarder dans un fichier sur disque l’image passée dans le paramètre *image*, au format défini par *codec*.<!-- END REF--> 

Vous pouvez passer dans *nomFichier* le chemin d’accès complet du fichier à créer, ou uniquement le nom du fichier — auquel cas le fichier sera créé à côté du fichier de structure de la base. Vous devez également passer l’extension du fichier à créer.   
Si vous passez une chaîne vide ("") dans *nomFichier*, la boîte de dialogue standard d’enregistrement de fichier apparaît, permettant à l’utilisateur de désigner le nom, l’emplacement et le format du fichier à créer. Si un nom par défaut a été associé au champ image, il est proposé dans la boîte de dialogue (cf. commande [SET PICTURE FILE NAME](../commands/set-picture-file-name)). 

Passez dans *image* la variable ou le champ image contenant l’image à stocker sur le disque. 

Le paramètre optionnel *codec* vous permet de définir le format dans lequel l’image doit être sauvegardée. Un codec peut être une extension (par exemple “.gif”) ou un type Mime (par exemple “image/jpg”). Vous pouvez obtenir la liste des codecs disponibles via la commande [PICTURE CODEC LIST](../commands/picture-codec-list).

Si vous omettez le paramètre *codec*, la commande tentera de déterminer le codec sur la base de l’extension du nom de fichier passé dans le paramètre *nomFichier*. Par exemple, si vous passez l’instruction :  

```4d
 WRITE PICTURE FILE("c:\dossier\photo.jpg";maphoto)
```

  
... la commande utilisera le codec JPEG pour stocker l’image.   
Si l’extension utilisée ne correspond à aucun codec disponible, le fichier n’est pas enregistré et la variable système OK prend la valeur 0\. Si vous ne passez ni *codec* ni extension de fichier, le fichier image est enregistré au format PICT. 

**Note :** Si le format d'écriture de l'*image* (indiqué via l'extension de *nomFichier* ou le paramètre *codec*) est égal à son type d'origine et si aucune opération de transformation ne lui a été appliquée, l'image est écrite telle quelle, sans aucune modification. 

Si l’exécution de la commande est correcte, la variable système Document contient le chemin d’accès complet du fichier créé et la variable système OK prend la valeur 1\. En cas d’échec, OK prend la valeur 0.

## Voir aussi 

*Introduction aux images*  
[PICTURE TO BLOB](../commands/picture-to-blob)  
[READ PICTURE FILE](../commands/read-picture-file)  
[SET PICTURE FILE NAME](../commands/set-picture-file-name)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 680 |
| Thread safe | yes |
| Modifie les variables | OK, Document |


