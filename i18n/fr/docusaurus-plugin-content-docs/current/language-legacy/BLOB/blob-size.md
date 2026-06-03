---
id: blob-size
title: BLOB size
slug: /commands/blob-size
displayed_sidebar: docs
---

<!--REF #_command_.BLOB size.Syntax-->**BLOB size** ( *blob* : Blob ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB size.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | Champ ou variable de type BLOB |
| Résultat | Integer | &#8592; | Taille en octets du BLOB |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.BLOB size.Summary-->**BLOB size** retourne la taille de *blob* exprimée en octets.<!-- END REF-->

## Exemple 

La ligne de code suivante ajoute 100 octets au BLOB *monBlob* :

```4d
 SET BLOB SIZE(monBlob;BLOB size(monBlob)+100)
```

## Voir aussi 

[SET BLOB SIZE](../commands/set-blob-size)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 605 |
| Thread safe | yes |


