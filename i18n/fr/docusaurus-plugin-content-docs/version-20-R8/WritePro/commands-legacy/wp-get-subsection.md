---
id: wp-get-subsection
title: WP Get subsection
slug: /WritePro/commands/wp-get-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP Get subsection.Syntax-->**WP Get subsection** ( *objCible* ) | (*wpSection* ; *typeSousSection* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get subsection.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément |
| wpSection | Object | &#8594;  | Section 4D Write Pro |
| typeSousSection | Integer | &#8594;  | Type de sous-section (wk first page, wk left page ou wk right page) |
| Résultat | Object | &#8592; | Sous-section |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get subsection.Summary-->La commande **WP Get subsection** retourne soit la première sous-section intersectée par la plage ou par l'élément *objCible*, soit la sous-section *typeSousSection* spécifiée de la section *wpSection*.<!-- END REF-->

* Avec la première syntaxe (utilisant le paramètre *objCible*), la commande retourne la première sous-section qui intersecte la plage ou l'élément. Si aucune sous-section n'intersecte la plage ou l'élément, un objet **null** est retourné. Vous pouvez passer dans *objCible* :  
   * une plage, ou  
   * un élément (tableau / ligne / paragraphe / corps / zone de texte / en-tête / pied ).  
Si la plage ou l'élément est ou est associé(e) à un en-tête, un pied ou une zone de texte, **WP Get subsection** retourne la sous-section à laquelle l’objCible est associé. Si l’objCible n'est pas associé à une sous-section, un objet **null** est retourné.  
Si la plage ou l'élément est associé(e) à une image ancrée, une erreur est retournée.
* Avec la deuxième syntaxe (utilisant les paramètres *wpSection* et *typeSousSection*), la commande retourne un objet *wpSubSection* (enfant de *wpSection*) de type *typeSousSection*. Passez l'une des constantes suivantes dans le paramètre *typeSousSection* :  
    
| Constante     | Type        | Valeur |  
| ------------- | ----------- | ------ |  
| wk first page | Entier long | 1      |  
| wk left page  | Entier long | 2      |  
| wk right page | Entier long | 3      |  
    
    
Si aucune sous-section *typeSousSection* n'est définie pour la *wpSection* spécifiée, la commande retourne un objet indéfini (aucune erreur n'est retournée).

#### Exemple 

Vous souhaitez appliquer un fond bleu aux pages de gauche :

```4d
 var $section;$subsection : Object
  //Récupère la référence de la première section
 $section:=WP Get section(wpDoc;1)
  //Récupère la référence de la première sous-section gauche de la première section
 $subsection:=WP Get subsection($section;wk left page)
 
  //Si la sous-section existe, fixe le fond en bleu
 If($subsection#Null)
    WP SET ATTRIBUTES($subsection;wk background color;"#87CEEB")
 Else
    ALERT("Veuillez créer des sous-sections gauche et droite")
 End if
```

#### Voir aussi 

[WP DELETE SUBSECTION](../commands/wp-delete-subsection.md)  
[WP Get section](wp-get-section.md)  
[WP New subsection](wp-new-subsection.md)  