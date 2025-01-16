---
id: wp-print
title: WP PRINT
slug: /WritePro/commands/wp-print
displayed_sidebar: docs
---

<!--REF #_command_.WP PRINT.Syntax-->**WP PRINT** ( *docWP* {; *optionsImpr*} )<!-- END REF-->
<!--REF #_command_.WP PRINT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| optionsImpr | Integer | &#8594;  | Options d'impression pour le document 4D Write Pro |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WP PRINT.Summary-->La commande **WP PRINT** lance une tâche d'impression pour le document 4D Write Pro désigné par *docWP*, ou ajoute le document dans la tâche d'impression courante si elle est appelée entre les commandes [OPEN PRINTING JOB](../../commands-legacy/open-printing-job.md) et [CLOSE PRINTING JOB](../../commands-legacy/close-printing-job.md).<!-- END REF--> **WP PRINT** utilise les paramètres d'impression définis par les commandes 4D [PRINT SETTINGS](../../commands-legacy/print-settings.md) ou [SET PRINT OPTION](../../commands-legacy/set-print-option.md), excepté pour les marges des pages qui sont toujours définies avec les options d'impression du document 4D Write Pro. **WP PRINT** utilise les options courantes de mise en page (comme la taille de la page et l'orientation), ou celles du document si [WP USE PAGE SETUP](wp-use-page-setup.md) a été appelée au préalable.

Le paramètre optionnel *optionsImpr* permet l'utilisation de la vue WYSIWYG HTML pour les sorties impression et le calcul de la formule. Vous pouvez utiliser une combinaison des constantes suivantes ou l'une des constantes suivantes, placées dans le thème "4D Write Pro" :

| Constante                       | Type        | Valeur | Comment                                                                                                                                                          |
| ------------------------------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk 4D Write Pro layout          | Entier long | 0      | Format 4D Write Pro standard, pouvant inclure des attributs de style spécifiques                                                                                 |
| wk do not recompute expressions | Entier long | 2      | Indique que toutes les expressions contenues dans le document ne sont pas recalculées pour l'impression ou le gel.                                               |
| wk html wysiwyg                 | Entier long | 1      | Dans ce format, les éventuels attributs avancés de 4D Write Pro non disponibles dans tous les navigateurs sont supprimés (multi-colonnes, double interlignes...) |
| wk recompute expressions        | Entier long | 0      | Indique que toutes les expressions contenues dans le document sont recalculées pour l'impression ou le gel (valeur par défaut).                                  |

Si *optionsImpr* est omis, le format standard 4D Write Pro est utilisé et les expressions sont recalculées (le cas échéant).

**Note :** Lorsqu'ils sont imprimés avec la commande **WP PRINT**, les documents 4D Write Pro sont toujours imprimés en mode Page, indépendamment de la valeur de la propriété **Mode d'affichage** pour la zone (cf. *Configurer les propriétés d'affichage*). 

**Note de compatibilité :** La couche legacy d'impression basée sur GDI (qui peut être définie à l'aide de la commande [SET PRINT OPTION](../../commands-legacy/set-print-option.md)) est **obsolète** et ne doit pas être utilisée avec **WP PRINT**, car elle peut entraîner des artefacts de rendu. Il est recommandé de n'utiliser que la couche d'impression par défaut avec cette commande. 

#### Exemple 

Vous souhaitez imprimer un document 4D Write Pro en format standard ou wysiwyg HTML en fonction de la valeur d'une variable :

```4d
  // impression en mode wysiwyg HTML ou 4D Write Pro standard
 If(rb_htmlwysiwyg=1)
    WP PRINT(writeProDoc;wk html wysiwyg)
 Else
    WP PRINT(writeProDoc;wk 4D Write Pro layout)
 End if
```

#### Voir aussi 

[WP Get position](wp-get-position.md)  
[WP USE PAGE SETUP](wp-use-page-setup.md)  