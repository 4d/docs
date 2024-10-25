---
id: wa-open-url
title: WA OPEN URL
slug: /commands/wa-open-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN URL.Syntax-->**WA OPEN URL** ( {* ;} *objet* ; *url* )<!-- END REF-->
<!--REF #_command_.WA OPEN URL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| url | Text | &#8594;  | URL à charger dans la zone Web |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA OPEN URL.Summary-->La commande **WA OPEN URL** charge dans la zone Web désignée par les paramètres *\** et *objet* l’URL passé dans le paramètre *url*.<!-- END REF--> 

Si une chaîne vide est passée dans *url*, la commande **WA OPEN URL** ne fait rien et aucune erreur n’est générée. Pour charger une page vide dans la zone Web, passez la chaîne "about:blank" dans *url*. 

Comme la commande [OPEN URL](open-url.md), **WA OPEN URL** accepte plusieurs types de syntaxes dans le paramètre *url* pour désigner les fichiers :

* syntaxe posix : "file:///c:/Mon%20Fichier"
* syntaxe système : "c:\\MonDossier\\MonFichier" (Windows) ou "MonDisque:MonDossier:MonFichier" (Mac OS).

**Note :** Par compatibilité, la syntaxe "file://" (utilisation de deux "/") est acceptée dans 4D mais elle n'est pas conforme aux RFC. Il est conseillé d'utiliser la syntaxe "file:///" (trois "/") qui est conforme aux RFC.

Sous Mac OS, quand FileVault est activé, vous devez utiliser la syntaxe posix. Vous pouvez transformer les chemins système via la commande [Convert path system to POSIX](convert-path-system-to-posix.md). 

Cette commande a le même effet que la modification de la valeur de la variable "URL" associée à la zone. Par exemple, si la variable de la zone est nommée MaZoneW\_url :

```4d
 MaZoneW_url:="http://www.4d.com/"
```

équivaut à :

```4d
 WA OPEN URL(MaZoneW;"http://www.4d.com/")
```

#### Voir aussi 

[OPEN URL](open-url.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  
[WA OPEN FORWARD URL](wa-open-forward-url.md)  