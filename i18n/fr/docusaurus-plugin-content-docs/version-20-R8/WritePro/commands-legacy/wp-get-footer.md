---
id: wp-get-footer
title: WP Get footer
slug: /WritePro/commands/wp-get-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP Get footer.Syntax-->**WP Get footer** ( *objCible* ) | (*docWP* ; *indexSection* {; *typeSousSection*} )  -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get footer.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément section/sous-section 4D Write Pro |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| indexSection | Integer | &#8594;  | Numéro de la section |
| typeSousSection | Integer | &#8594;  | Type de sous-section (wk first page, wk left page ou wk right page) |
| Résultat | Object | &#8592; | Pied de page 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get footer.Summary-->La commande **WP Get footer** retourne le pied de page associé à la plage *objCible* ou à la section *indexSection* du document 4D Write Pro *docWP*.<!-- END REF--> Si aucun pied de page n'est trouvé par rapport au(x) paramètre(s), la commande retourne **Null**.

* Avec la première syntaxe (utilisation du paramètre *objCible*), la commande retourne le pied de la première page de la plage ou de la section/sous-section passée dans le paramètre. Si une sous-section est active sur la page, la commande retourne le pied de page de la sous-section active, elle retourne ainsi toujours le pied de page visible.
* Avec la seconde syntaxe (utilisation du paramètre *docWP*), la commande retourne le pied de la section *indexSection* spécifiée (la valeur de *indexSection* doit être >=1).  
Si le paramètre *typeSousSection* est passé, la commande retourne le pied associé au type de sous-section spécifié. Vous pouvez utiliser une des constantes suivantes dans le paramètre *typeSousSection* :  

| Constante     | Type        | Valeur |  
| ------------- | ----------- | ------ |  
| wk first page | Entier long | 1      |  
| wk left page  | Entier long | 2      |  
| wk right page | Entier long | 3      |  
    
Si le *typeSousSection* n'est pas spécifié, le pied de section principal est retourné. Dans ce cas, si une sous-section est active, l'objet pied de section principal est *undefined* (le pied de section principal est disponible uniquement s'il n'y a pas de sous-section wk first page ou wk left page active).

#### Exemple 

Vous voulez copier le pied de la première page d'un document 4D Write Pro vers les pieds de toutes les pages d'un autre document 4D Write Pro :

```4d
 var $footerSource;$rangeSource;$tempoc;$footerTarget;$rangeTarget : Object
 
 $footerSource:=WP Get footer([TEMPLATES]WPtemplate;1;wk first page) //récupérer le pied de la 1re page de la section 1
 $rangeSource:=WP Get footer($footerSource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $footerTarget:=WP Get footer([Docs]MyWPDoc;1) //toutes les pages de la section 1
 $rangeTarget:=WP Get footer($footerTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### Voir aussi 

*Utiliser une zone 4D Write Pro*  
[WP DELETE FOOTER](wp-delete-footer.md)  
[WP Get frame](wp-get-frame.md)  
[WP Get header](wp-get-header.md)  
[WP New footer](wp-new-footer.md)  