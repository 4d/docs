---
id: wp-get-links
title: WP Get links
slug: /WritePro/commands/wp-get-links
displayed_sidebar: docs
---

<!--REF #_command_.WP Get links.Syntax-->**WP Get links** ( *objCible* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get links.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| Résultat | Collection | &#8592; | Collection de liens |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get links.Summary-->La commande **WP Get links** retourne la collection de tous les liens définis dans le paramètre *objCible*.<!-- END REF-->

Dans le paramètre *objCible*, vous pouvez passer :

* une plage, ou
* un élément (tableau / ligne / paragraphe / corps / en-tête / pied / section / sous-section / zone de texte), ou
* un document 4D Write Pro

**Valeur retournée**

**WP Get links** retourne une collection d'objets liens, chacun d'entre eux contenant au moins l'une des propriétés suivantes :

| **Propriété**   | **Type**           | **Description**                                     | **Disponible pour**               |
| --------------- | ------------------ | --------------------------------------------------- | --------------------------------- |
| \[ \].url       | Texte              | Contenu cible du lien                               | Liens URL                         |
| \[ \].method    | Texte              | Nom de la méthode contenue dans le lien             | Liens de méthode                  |
| \[ \].parameter | Texte \| Numérique | Valeur du paramètre utilisateur passée au lien      | Liens de méthode (le cas échéant) |
| \[ \].bookmark  | Texte              | Nom de signet contenu dans le lien                  | Liens de signet                   |
| \[ \].range     | Objet              | Plage du libellé du lien. Voir *Gestion des plages* | Tous les liens                    |

#### Exemple 

Vous souhaitez modifier la couleur de tous les libellés des liens URL dans un document 4D Write Pro :

```4d
 var $links : Collection
 var $link : Object
 
 $links:=WP Get links(myDoc)
 
 For each($link;$links)
    If($link.url#Null) //ceci est un lien URL
       WP SET ATTRIBUTES($link.range;wk text color;"rouge")
    End if
 End for each
```

#### Voir aussi 

  
[WP Get formulas](wp-get-formulas.md)  
[WP SET LINK](wp-set-link.md)  