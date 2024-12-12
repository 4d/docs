---
id: wa-get-url-history
title: WA GET URL HISTORY
slug: /commands/wa-get-url-history
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL HISTORY.Syntax-->**WA GET URL HISTORY** ( {* ;} *objet* ; *tabsUrls* {; *sens* {; *tabTitres*}} )<!-- END REF-->
<!--REF #_command_.WA GET URL HISTORY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| tabsUrls | Text array | &#8592; | Tableau des URLs visités |
| sens | Integer | &#8594;  | 0 ou omis=Liste des URLs précédents, 1=Liste des URLs suivants |
| tabTitres | Text array | &#8592; | Tableau des titres de fenêtres |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA GET URL HISTORY.Summary-->La commande **WA GET URL HISTORY** retourne un ou deux tableaux contenant les URLs visités au cours de la session dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> Elle permet de construire une interface de navigation personnalisée.

Les informations fournies concernent la session, c’est-à-dire la navigation effectuée dans une même zone Web tant que le formulaire n’a pas été refermé.

Le tableau *tabUrls* est rempli avec la liste des URLs visités. En fonction de la valeur du paramètre *direction* (s’il est passé), le tableau récupère la liste des URLs précédents (fonctionnement par défaut) ou la liste des URLs suivants. Ces listes correspondent au contenu des boutons standard Précédent et Suivant des navigateurs.

Les URLs sont classés par ordre chronologique.

Passez dans *direction* une valeur indiquant la liste à récupérer. Vous pouvez utiliser l’une des constantes suivantes, placées dans le thème "*Zone Web*" :

| Constante        | Type        | Valeur |
| ---------------- | ----------- | ------ |
| WA next URLs     | Entier long | 1      |
| WA previous URLs | Entier long | 0      |

Si vous omettez le paramètre *direction*, la valeur 0 est utilisée.

S’il est passé, le paramètre *tabTitres* contient la liste des noms de fenêtres associés aux URLs. Ce tableau est synchronisé avec le tableau *tabUrls*.

**Note de compatibilité :* A partir de 4D v19 R5, cette commande retourne uniquement l'URL courante dans des tableaux urlsArr et titlesArr pour des zones web à l'aide du moteur de rendu du système de Windows.*

#### Voir aussi 

[WA Create URL history menu](wa-create-url-history-menu.md)  