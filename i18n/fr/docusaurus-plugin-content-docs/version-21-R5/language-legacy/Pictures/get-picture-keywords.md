---
id: get-picture-keywords
title: GET PICTURE KEYWORDS
slug: /commands/get-picture-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE KEYWORDS.Syntax-->**GET PICTURE KEYWORDS** ( *image* : Picture ; *tabMotsclés* : Text array {; *} )<!-- END REF-->
<!--REF #_command_.GET PICTURE KEYWORDS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8594;  | Image dont vous souhaitez lire les mots-clés associés |
| tabMotsclés | Text array | &#8592; | Tableau contenant les mots-clés extraits |
| * | Opérateur | &#8594;  | Si passé = utiliser les valeurs distinctes |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|13|Créé|

</details>
</div>

## Description 

<!--REF #_command_.GET PICTURE KEYWORDS.Summary-->La commande **GET PICTURE KEYWORDS** retourne dans le tableau *tabMotsclés* la liste des mots-clés associés à l’image passée en paramètre.<!-- END REF--> 

Seuls les mots-clés définis via les métadonnées **IPTC/Keywords** sont pris en compte. Les autres types de métadonnées sont ignorés par la commande. La commande fonctionne uniquement avec les types d’images qui prennent en charge ce type de métadonnées (JPEG, TIFF...).

**Note :** Les métadonnées de type IPTC/Keywords sont indexables dans 4D (cf. manuel *Mode Développement*). 

Si vous passez le paramètre *\**, la méthode ne retourne que les "valeurs disctinctes" de mots-clés, c’est-à-dire une liste sans doublons. 

Si l’image ne contient pas de mots-clés ou de métadonnées IPTC/Keywords, la commande retourne un tableau vide, aucune erreur n’est générée. 

**Note :** Les résultats retournés par cette commande peuvent différer en fonction de la valeur courante de la propriété de la base "N’utiliser que les caractères non alphanumériques pour les mots clés" (cf. paragraphe [DOM GET XML CHILD NODES](../commands/dom-get-xml-child-nodes)). 

## Voir aussi 

[GET PICTURE METADATA](../commands/get-picture-metadata)  
[SET PICTURE METADATA](../commands/set-picture-metadata)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1142 |
| Thread safe | yes |


