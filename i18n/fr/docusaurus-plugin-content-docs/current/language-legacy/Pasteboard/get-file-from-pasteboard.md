---
id: get-file-from-pasteboard
title: Get file from pasteboard
slug: /commands/get-file-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get file from pasteboard.Syntax-->**Get file from pasteboard** ( *indiceN* ) : Text<!-- END REF-->
<!--REF #_command_.Get file from pasteboard.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| indiceN | Integer | &#8594;  | Nième fichier inclus dans le glisser |
| Résultat | Text | &#8592; | Chemin d'accès de fichier extrait du conteneur de données |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Get file from pasteboard.Summary-->La commande **Get file from pasteboard** retourne le chemin d’accès absolu d’un fichier inclus dans une opération de glisser-déposer.<!-- END REF--> Plusieurs fichiers pouvant être sélectionnés et déplacés simulanément, le paramètre *indiceN* permet de désigner un fichier parmi l’ensemble des fichiers sélectionnés.

S’il n’y a pas de Nième fichier dans le conteneur de données, la commande retourne une chaîne vide.

## Exemple 

L’exemple suivant permet de récupérer dans un tableau tous les chemins d’accès des fichiers inclus dans le glisser-déposer :

```4d
 ARRAY TEXT($tabFichiers;0)
 var $vtfichier : Text
 var $n : Integer
 $n:=1
 Repeat
    $vtfichier:=Get file from pasteboard($n)
    If($vtfichier#"")
       APPEND TO ARRAY($tabFichiers;$vtfichier)
       $n:=$n+1
    End if
 Until($vtfichier="")
```

## Voir aussi 

[SET FILE TO PASTEBOARD](../commands/set-file-to-pasteboard)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 976 |
| Thread safe | no |


