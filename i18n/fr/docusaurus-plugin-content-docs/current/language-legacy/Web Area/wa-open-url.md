---
id: wa-open-url
title: WA OPEN URL
slug: /commands/wa-open-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN URL.Syntax-->**WA OPEN URL** ( {* ;} *objet* ; *url* )<!-- END REF-->
<!--REF #_command_.WA OPEN URL.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| url | Text | &#8594;  | URL à charger dans la zone Web |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL Release 2|Créé|

</details>
</div>

## Description 

<!--REF #_command_.WA OPEN URL.Summary-->La commande **WA OPEN URL** charge dans la zone Web désignée par les paramètres *\** et *objet* l’URL passé dans le paramètre *url*.<!-- END REF--> 

Si une chaîne vide est passée dans *url*, la commande **WA OPEN URL** ne fait rien et aucune erreur n’est générée. Pour charger une page vide dans la zone Web, passez la chaîne "about:blank" dans *url*. 

Comme la commande [OPEN URL](../commands/open-url), **WA OPEN URL** accepte plusieurs types de syntaxes dans le paramètre *url* pour désigner les fichiers :

* syntaxe posix : "file:///c:/Mon%20Fichier"
* syntaxe système : "c:\\MonDossier\\MonFichier" (Windows) ou "MonDisque:MonDossier:MonFichier" (macOS).

**Note :** Par compatibilité, la syntaxe "file://" (utilisation de deux "/") est acceptée dans 4D mais elle n'est pas conforme aux RFC. Il est conseillé d'utiliser la syntaxe "file:///" (trois "/") qui est conforme aux RFC.

Sous Mac OS, quand FileVault est activé, vous devez utiliser la syntaxe posix. Vous pouvez transformer les chemins système via la commande [Convert path system to POSIX](../commands/convert-path-system-to-posix). 

Cette commande a le même effet que la modification de la valeur de la variable "URL" associée à la zone. Par exemple, si la variable de la zone est nommée MaZoneW\_url :

```4d
 MaZoneW_url:="http://www.4d.com/"
```

équivaut à :

```4d
 WA OPEN URL(MaZoneW;"http://www.4d.com/")
```

## Voir aussi 

[OPEN URL](../commands/open-url)  
[WA OPEN BACK URL](../commands/wa-open-back-url)  
[WA OPEN FORWARD URL](../commands/wa-open-forward-url)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1020 |
| Thread safe | no |


