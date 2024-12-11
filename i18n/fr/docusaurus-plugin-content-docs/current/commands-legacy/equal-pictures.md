---
id: equal-pictures
title: Equal pictures
slug: /commands/equal-pictures
displayed_sidebar: docs
---

<!--REF #_command_.Equal pictures.Syntax-->**Equal pictures** ( *image1* ; *image2* ; *masque* ) : Boolean<!-- END REF-->
<!--REF #_command_.Equal pictures.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image1 | Picture, Picture | &#8594;  | Image source originale |
| image2 | Picture, Picture | &#8594;  | Image à comparer |
| masque | Picture, Picture | &#8592; | Masque résultant |
| Résultat | Boolean | &#8592; | Vrai si les deux images sont identiques, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.Equal pictures.Summary-->La commande **Equal pictures** vous permet de comparer précisément deux images, tant au niveau de leurs dimensions que de leur contenu.<!-- END REF--> 

Passez dans *image1* l’image source et dans *image2* une image à comparer à l’image source. 

* Si les deux images sont de dimensions différentes, la commande retourne **Faux** et le paramètre *masque* contient une image vide.
* Si les deux images sont de même dimension mais ont des contenus différents, la commande retourne **Faux** et le paramètre *masque* contient l’image masque résultante de la comparaison des deux images. La comparaison est effectuée par pixel. Chaque pixel différent apparaît en blanc sur fond noir.
* Si les deux images sont identiques, la commande retourne **Vrai** et le paramètre *masque* contient une image noire.

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si les deux images ont pu être comparées. En cas d'anomalie, notamment si au moins une des deux images n'est pas initialisée (image vide), la variable OK prend la valeur 0.

#### Exemple 

Dans l’exemple suivant, on compare deux images (pict1 et pict2) et on affiche le masque résultant : 

![](../assets/en/commands/pict847365.fr.png)

Le code du bouton **Compare** est le suivant :

```4d
 $equal :=Equal pictures($pict1;$pict2;$mask)
```


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1196 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


