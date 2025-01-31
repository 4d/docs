---
id: wp-get-header
title: WP Get header
slug: /WritePro/commands/wp-get-header
displayed_sidebar: docs
---

<!--REF #_command_.WP Get header.Syntax-->**WP Get header** ( *objCible* ) | (*docWP* ; *indexSection* {; *typeSousSection*} )  -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get header.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément section/sous-section 4D Write Pro |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| indexSection | Integer | &#8594;  | Numéro de la section |
| typeSousSection | Integer | &#8594;  | Type de sous-section (wk first page, wk left page ou wk right page) |
| Résultat | Object | &#8592; | En-tête 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get header.Summary-->La commande **WP Get header** retourne l'en-tête associé à *objCible* ou à la section *indexSection* du document 4D Write Pro *docWP*.<!-- END REF--> Si aucun en-tête n'est trouvé par rapport au(x) paramètre(s), la commande retourne **Null**.

* Avec la première syntaxe (utilisation du paramètre *objCible*), la commande retourne l'en-tête de la première page de la plage ou de la section/sous-section passée dans le paramètre. Si une sous-section est active sur la page, la commande retourne l'en-tête de la sous-section active, elle retourne ainsi toujours l'en-tête visible.
* Avec la seconde syntaxe (utilisation du paramètre *docWP*), la commande retourne l'en-tête de la section *indexSection* spécifiée (la valeur de *indexSection* doit être >=1).  
Si le paramètre *typeSousSection* est passé, la commande retourne l'en-tête associé au type de sous-section spécifié. Vous pouvez utiliser une des constantes suivantes dans le paramètre *typeSousSection* :  

| Constante     | Type        | Valeur |  
| ------------- | ----------- | ------ |  
| wk first page | Entier long | 1      |  
| wk left page  | Entier long | 2      |  
| wk right page | Entier long | 3      |  
    
Si le *typeSousSection* n'est pas spécifié, l'en-tête de section principal est retourné. Dans ce cas, si une sous-section est active, l'objet en-tête de section principal est *undefined* (l'en-tête de section principal est disponible uniquement s'il n'y a pas de sous-section wk first page ou wk left page active).

#### Exemple 

Vous souhaitez copier l'en-tête de la première page d'un document 4D Write Pro vers les en-têtes de toutes les pages d'un autre document 4D Write Pro :

```4d
 var $headerSource;$rangeSource;$tempoc;$headerTarget;$rangeTarget : Object
 
 $headerSource:=WP Get header([TEMPLATES]WPtemplate;1;wk first page) //récupérer l'en-tête de la 1re page de la section 1
 $rangeSource:=WP Text range($headerSource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $headerTarget:=WP Get header([Docs]MyWPDoc;1) //toutes les pages de la section 1
 $rangeTarget:=WP Text range($headerTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### Voir aussi 

*Utiliser une zone 4D Write Pro*  
[WP DELETE HEADER](wp-delete-header.md)  
[WP Get footer](wp-get-footer.md)  
[WP New header](wp-new-header.md)  
[WP Text range](wp-text-range.md)  