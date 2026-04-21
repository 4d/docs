---
id: get-picture-from-pasteboard
title: GET PICTURE FROM PASTEBOARD
slug: /commands/get-picture-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Syntax-->**GET PICTURE FROM PASTEBOARD** ( *image* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8592; | Image extraite du conteneur de données |
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

<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Summary-->**GET PICTURE FROM PASTEBOARD** retourne l'image présente dans le conteneur de données dans le champ ou la variable *image*.<!-- END REF--> 

**Note :** Dans le cadre d'une opération de copier/coller, le conteneur de données correspond au Presse-papiers. 

## Exemple 

Ci-dessous, la méthode objet d'un bouton affecte l'image au format jpeg ou gif présente dans le conteneur de données, s'il y en a une, au champ \[Employés\]Photo :

```4d
 If((Pasteboard data size("com.4d.private.picture.jfif")>0)|(Pasteboard data size("com.4d.private.picture.gif")>0))
    GET PICTURE FROM PASTEBOARD([Employés]Photo)
 Else
    ALERT("Le Presse-papiers ne contient pas d'image.")
 End if
```

## Variables et ensembles système 

Si l'image est correctement extraite, OK prend la valeur 1\. Sinon, OK prend la valeur 0.

## Voir aussi 

[GET PASTEBOARD DATA](../commands/get-pasteboard-data)  
[Get text from pasteboard](../commands/get-text-from-pasteboard)  
[Pasteboard data size](../commands/pasteboard-data-size)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 522 |
| Thread safe | no |
| Modifie les variables | OK |


