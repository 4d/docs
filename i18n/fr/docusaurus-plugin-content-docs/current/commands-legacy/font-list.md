---
id: font-list
title: FONT LIST
slug: /commands/font-list
displayed_sidebar: docs
---

<!--REF #_command_.FONT LIST.Syntax-->**FONT LIST** ( *polices* {; typeListe | *} )<!-- END REF-->
<!--REF #_command_.FONT LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| polices | Text array | &#8592; | Tableau des noms des polices vectorielles disponibles |
| typeListe &#124; * | Entier long, Opérateur | &#8594;  | Type de liste de police à retourner ou * pour retourner des noms de police sous OS X |

<!-- END REF-->

#### Description 

<!--REF #_command_.FONT LIST.Summary-->La commande   **FONT LIST** remplit le tableau Texte *polices* avec les noms des polices vectorielles disponibles dans votre système.<!-- END REF-->

Le paramètre *typeListe* vous permet de désigner le type de liste de police à obtenir. Pour cela, vous pouvez passer dans le paramètre *typeListe* l’une des constantes suivantes, placées dans le thème "*Type de liste des polices*" :

| Constante      | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Favorite fonts | Entier long | 1      | *polices* contient la liste des polices favorites.<br/>- Sous Windows : liste des noms de famille des polices actives.<br/>- Sous OS X : liste des noms de famille des polices présente dans le panneau de configuration nommé "Favorites" en anglais, "Favoris" en français", "Favoriten" en allemand, etc. Cette collection peut être vide si l’utilisateur n’a ajouté aucune police favorite. |
| Recent fonts   | Entier long | 2      | *polices* contient la liste des polices récentes (liste des polices utilisées lors de la session 4D). Cette liste est notamment utilisée par les zones de texte multistyle.                                                                                                                                                                                                                                      |
| System fonts   | Entier long | 0      | *polices* contient la liste de toutes les polices système. Option par défaut si *typeListe* est omis.                                                                                                                                                                                                                                                                                                            |

Si vous passez le paramètre optionnel *\**, sous OS X la commande remplira le tableau *polices* avec les noms des polices elles-mêmes et non avec les noms des famillesde police. Le fonctionnement par défaut simplifie la gestion programmée des zones de texte multistyle, qui utilisent des familles de police. Si vous passez le paramètre *\**, les noms de police, par exemple "Arial bold", "Arial italic", "Arial narrow italic", seront retournés au lieu des familles "Arial", "Arial black" ou "Arial narrow".  
Sous Windows, le paramètre *\** n’a aucun effet. La commande retourne toujours les familles de police.

**Note :** Sous OS X, si vous utilisez le résultat de cette commande avec la commande [ST SET ATTRIBUTES](st-set-attributes.md) dans une zone de texte multistyle, il est impératif de ne pas passer le paramètre *\** (seuls les noms de familles sont acceptés comme Attribute font name). Cette limitation ne s'applique pas aux zones 4D Write Pro, qui acceptent des noms de polices ou des noms de familles. 

##### A propos des polices vectorielles 

Cette commande ne retourne que les polices vectorielles. En effet, l'utilisation de polices non vectorielles (i.e. polices bitmap) pour dessiner des interfaces est déconseillé car elles sont basées sur une technologie dépassée et souffrent de limitations quant aux variations de taille. Elles ne sont pas prises en charge dans les fonctionnalités les plus récentes de 4D telles que les zones 4D Write Pro.

Sous OS X, ce principe est appliqué depuis OS X 10.4 (les polices bitmap *QuickDraw* sont obsolètes à compter de cette version).

Sous Windows, ce principe est appliqué à compter de 4D v15 R4 afin d'aider les développeurs 4D à ne sélectionner que des polices modernes pour leurs interfaces. Seules les polices vectorielles "trueType" ou "openType" sont listées. Par exemple, "ASI\_Mono", "MS Sans Serif" ou encore "System" ne sont pas proposées. De plus, les noms GDI sont également ignorés ; seuls les noms de familles de police DirectWrite sont pris en charge. Par exemple, les familles "Arial Black" ou "Segoe UI Black" ne sont pas dans la liste ; seuls "Arial" et "Segoe" sont retournés. 

**Notes de compatibilité Windows :**

* Les polices bitmap peuvent toujours être utilisées dans vos formulaires 4D (à l'exception des zones 4D Write Pro). Elles sont uniquement supprimées de la liste retournée par cette commande. Cependant, pour assurer la compatibilité de vos applications avec les versions futures de 4D et de Windows, nous recommandons dès à présent d'utiliser uniquement les familles de police DirectWrite.
* Comme les polices bitmap sont filtrées dans le paramètre *polices* sous Windows, la liste résultante est différente dans les applications 4D v15 R4 et suivantes par rapport aux versions précédentes. Pensez à adapter votre code si vous utilisiez cette commande pour sélectionner une police non vectorielle.

#### Exemple 1 

Dans un formulaire, vous voulez obtenir une liste déroulante qui affiche les polices disponibles dans le système. Ecrivez la méthode suivante pour votre objet liste déroulante :

```4d
 Case of
    :(FORM Event=On Load)
       ARRAY TEXT(taPolices;0)
       FONT LIST(taPolices)
  // ...
 End case
```

#### Exemple 2 

Vous souhaitez obtenir la liste des polices récentes :

```4d
 FONT LIST($tabPolices;Recent fonts)
```

#### Voir aussi 

[FONT STYLE LIST](font-style-list.md)  
[OBJECT SET FONT](object-set-font.md)  
[SET RECENT FONTS](set-recent-fonts.md)  
[ST SET ATTRIBUTES](st-set-attributes.md)  
*Type de liste des polices*  