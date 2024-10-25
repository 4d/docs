---
id: wa-set-page-content
title: WA SET PAGE CONTENT
slug: /commands/wa-set-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PAGE CONTENT.Syntax-->**WA SET PAGE CONTENT** ( {* ;} *objet* ; *contenu* ; *baseURL* )<!-- END REF-->
<!--REF #_command_.WA SET PAGE CONTENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| contenu | Text | &#8594;  | Code HTML source |
| baseURL | Text | &#8594;  | URL pour les références relatives (Mac OS) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Note de compatibilité 

<!--REF #_command_.WA SET PAGE CONTENT.Summary-->Cette commande historique n'est plus vraiment utile.<!-- END REF--> Avec le renforcement de la sécurité dans les navigateurs modernes, il existe de plus en plus de restrictions sur la modification du contenu des pages "à la volée". Une approche plus fiable consiste à créer un fichier local (par exemple dans le dossier temporaire) et à utiliser [WA OPEN URL](wa-open-url.md) pour le charger. Pour effacer le contenu, il suffit d'appeler **WA OPEN URL**(myArea;”about:blank”).

#### Description 

La commande **WA SET PAGE CONTENT** remplace la page affichée dans la zone Web désignée par les paramètres *\** et *objet* par le code HTML passé dans le paramètre *contenu*.

Le paramètre *baseURL* permet de définir sous Mac OS un URL de base qui sera ajouté devant les liens relatifs éventuellement présents dans la page.   
Sous Windows, ce paramètre est sans effet, l’URL de base est indéfini. Il n’est donc pas possible d’utiliser des références relatives sur cette plate-forme. 

**Note :** Sous Windows, il est impératif qu’une page ait déjà été chargée dans la zone Web avant que cette commande puisse être appelée. Si nécessaire, vous pouvez passer l’URL "about:blank" afin de charger une page blanche. 

#### Exemple 

Affichage de la phrase "Hello world !" et définition d’un URL de base "file:///" (Mac OS uniquement) :

```4d
 WA SET PAGE CONTENT(MaZoneW;"

[Hello World!]

";"file:///")
```

#### Voir aussi 

[WA Get page content](wa-get-page-content.md)  