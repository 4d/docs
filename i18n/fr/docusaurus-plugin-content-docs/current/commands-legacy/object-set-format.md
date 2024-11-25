---
id: object-set-format
title: OBJECT SET FORMAT
slug: /commands/object-set-format
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FORMAT.Syntax-->**OBJECT SET FORMAT** ( {* ;} *objet* ; *formatAffich* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FORMAT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Champ ou Variable (si * omis) |
| formatAffich | Text | &#8594;  | Nouveau format d'affichage de l'objet |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET FORMAT.Summary-->**OBJECT SET FORMAT** remplace le format d'affichage du ou des objet(s) spécifié(s) par *objet* avec le format que vous avez passé dans *formatAffich*.<!-- END REF--> Le nouveau format est utilisé uniquement pour l'affichage courant, il n'est pas stocké avec le formulaire.

Si vous passez le paramètre optionnel \*, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). Pour plus d'informations sur les noms d'objets, reportez-vous à la section *Objets de formulaires*.

La commande **OBJECT SET FORMAT** peut être indifféremment utilisée dans des formulaires entrée ou sortie (affichés ou imprimés) et appliquée aux champs ou aux variables (saisissables ou non saisissables). Bien entendu, vous devez utiliser un format d'affichage compatible avec le type de données présentes dans l'objet ou avec l'objet lui-même.

##### Booléens 

Pour formater des champs booléens :

* (toutes versions) vous pouvez passer une valeur simple dans *formatAffich*. Dans ce cas, le champ sera affiché sous forme de case à cocher, son libellé sera la valeur définie.
* (bases binaires uniquement) vous pouvez passer deux valeurs séparées par un point-virgule (;) dans *formatAffich*. Dans ce cas, le champ sera affiché sous forme de deux boutons radio.

##### Dates et heures 

Pour formater des champs ou des variables de type Date ou Heure, vous pouvez utiliser :

* soit un **format prédéfini** disponible via des constantes du thème *Formats d'affichage des dates* ou *Formats d'affichage des heures* (valeur longint). Dans ce cas, il faut passer [Char](char.md)(n) dans *formatAffich*, où *n* est la constante :  
    
Dates :  

| Constante                   | Valeur | Comment                                                                                                                          |  
| --------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |  
| Blank if null date          | 100    | À ajouter à la constante format. Indique que dans le cas d'une valeur nulle, 4D doit retourner une chaîne vide au lieu de zéros. |  
| Date RFC 1123               | 10     | Fri, 10 Sep 2010 13:07:20 GMT                                                                                                    |  
| Internal date abbreviated   | 6      | 29 déc 2006                                                                                                                      |  
| Internal date long          | 5      | 29 décembre 2006                                                                                                                 |  
| Internal date short         | 7      | 29/12/2006                                                                                                                       |  
| Internal date short special | 4      | 06/12/06 (mais 06/12/1896 ou 06/12/2096)                                                                                         |  
| ISO Date                    | 8      | 2006-06-12T00:00:00                                                                                                              |  
| ISO Date GMT                | 9      | 2010-09-13T16:11:53Z                                                                                                             |  
| System date abbreviated     | 2      | mer. 25 déc. 2006                                                                                                                |  
| System date long            | 3      | mercredi 6 décembre 2006                                                                                                         |  
| System date short           | 1      | 06/12/2006                                                                                                                       |  
    
Heures :  

| Constante                    | Valeur | Comment                                                                                                                                                                                                                                        |  
| ---------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Blank if null time           | 100    | À ajouter à la constante format. Indique que dans le cas d'une valeur nulle, 4D doit retourner une chaîne vide au lieu de zéros.                                                                                                               |  
| HH MM                        | 2      | 01:02                                                                                                                                                                                                                                          |  
| HH MM AM PM                  | 5      | 1:02 du matin                                                                                                                                                                                                                                  |  
| HH MM SS                     | 1      | 01:02:03                                                                                                                                                                                                                                       |  
| Hour min                     | 4      | 1 heure 2 minutes                                                                                                                                                                                                                              |  
| Hour min sec                 | 3      | 1 heure 2 minutes 3 secondes                                                                                                                                                                                                                   |  
| ISO time                     | 8      | 0000-00-00T01:02:03\. Correspond à la norme ISO8601, contenant en principe une date et une heure. Comme ce format ne prend pas en charge les dates/heures combinées, la partie date est remplie avec des 0\. Ce format exprime l'heure locale. |  
| Min sec                      | 7      | 62 minutes 3 secondes                                                                                                                                                                                                                          |  
| MM SS                        | 6      | 62:03                                                                                                                                                                                                                                          |  
| System time long             | 11     | 1:02:03 AM HNEC (Mac uniquement)                                                                                                                                                                                                               |  
| System time long abbreviated | 10     | 1•02•03 AM (Mac uniquement)                                                                                                                                                                                                                    |  
| System time short            | 9      | 01:02:03                                                                                                                                                                                                                                       |
* ou un [format personnalisé basé sur un modèle](https://developer.4d.com/docs/Project/date-time-formats.md) (valeur de chaîne). Par exemple :  
    
```4d  
 OBJECT SET FORMAT(*;"myDate";"dd/MM/yyyy")  
```  
    
Voir également l'exemple 2.  
    
**Notes**:  
\- Pour appliquer l'option "Vide si date nulle" à un format personnalisé, ajoutez "blankIfNull" à la fin de la chaîne de format (sensible à la casse). Exemple :  
```4d  
 OBJECT SET FORMAT(*;"myDate";"dd/MM/yyyy blankIfNull")  
```  
    
\- Afin d'éviter les conflits lors du formatage des dates ou des heures, les formats à un seul caractère doivent être préfixés par ":" Exemple :  
```4d  
 OBJECT SET FORMAT(*;"timeinput";":m")  
```

##### Images 

Pour formater des champs ou variables de type Image, passez [Char](char.md)(n) dans *formatAffich*, où *n* peut être une des constantes prédéfinies suivantes (thème *Formats d'affichage des images*) :  

| Constante                   | Type        | Valeur |
| --------------------------- | ----------- | ------ |
| On background               | Entier long | 3      |
| Replicated                  | Entier long | 7      |
| Scaled to fit               | Entier long | 2      |
| Scaled to fit prop centered | Entier long | 6      |
| Scaled to fit proportional  | Entier long | 5      |
| Truncated centered          | Entier long | 1      |
| Truncated non centered      | Entier long | 4      |

##### Alphas et numériques 

Pour formater des champs ou variables de type alpha ou numérique, passez directement le libellé du format dans le paramètre *formatAffich*.

Pour plus d'informations sur les formats d'affichage, reportez-vous aux sections *Formats numériques* et *Formats alphanumériques* dans le manuel *Mode Développement* de 4D.

**Note :** Pour pouvoir exploiter les formats d'affichage personnalisés que vous avez créés dans la boîte à outils, préfixez le nom du format, dans le paramètre *formatAffich*, d'une barre verticale (|). 

##### Boutons image 

Pour formater des boutons image, passez dans le paramètre *formatAffich* une chaîne de caractères respectant la syntaxe suivante :  
*cols;lignes;image;mode{;ticks}*

* *cols* \= nombre de colonnes de l'image
* *lignes* \= nombre de lignes de l'image
* *image* \= image utilisée, provenant de la bibliothèque d'images, d'une variable image ou d'un fichier du dossier Resources :  
   * si l'image provient de la bibliothèque d'images, saisissez son numéro, précédé d'un point d'interrogation (ex. : "?250").  
   * si l'image provient d'une variable image, saisissez le nom de la variable.  
   * si l'image provient d'un fichier stocké dans le dossier Resources de la base, saisissez un chemin du type "#{dossier/}nomimage" ou "file:{dossier/}nomimage".
* *mode* \= mode d'affichage et de fonctionnement du bouton image. Ce paramètre peut prendre les valeurs 0, 1, 2, 16, 32, 64 et 128, chaque valeur représentant un mode d’affichage ou de fonctionnement. Ces valeurs sont cumulatives ; en d’autres termes, pour sélectionner les valeurs 64 et 1, passez 65 dans le paramètre *mode*. Voici le détail de chaque valeur :  
   * *mode* \= 0 (pas d'option)  
   Affiche l’image suivante de la série lorsque l’utilisateur clique sur le bouton. Affiche l’image précédente de la série lorsque l’utilisateur effectue Maj+clic sur le bouton. La séquence d’images s’arrête lorsqu’on atteint la dernière image de la série. En d’autres termes, le bouton ne retourne pas à la première image de la série.  
   * *mode* \= 1 (Défilement continu sur clic)  
   Similaire au précédent, à la différence près que lorsque l’utilisateur clique sur l’image et maintient le bouton de la souris enfoncé, l’enchaînement des images est continu (c’est-à-dire que la série défile comme une animation). La séquence d’images s’arrête lorsqu’on atteint la dernière image de la série.  
   * *mode* \= 2 (Recommencer la séquence)  
   Similaire au précédent, à la différence près que le défilement des images est “rebouclé” lorsqu’on atteint la dernière image de la séquence de défilement : une fois la dernière image atteinte, la première image est de nouveau affichée et la séquence recommence.  
   * *mode* \= 16 (Bascule sur passage du curseur)  
   Le contenu du bouton image est modifié lorsque le curseur de la souris passe au-dessus de lui, sans que l’utilisateur ne clique. L’image initiale est rétablie lorsque le curseur quitte la zone du bouton. Ce mode, aussi appelé “Roll over”, est fréquemment utilisé dans les navigateurs Web et dans les applications multimedia. L’image affichée est la dernière du tableau d’imagettes, sauf si le mode 128 (Dernière imagette si désactivé) est également sélectionné — dans ce cas, c’est l’avant-dernière imagette qui est utilisée comme “bascule”.  
   * *mode* \= 32 (Retour sur relâchement du clic)  
   Ce mode fonctionne avec deux images ; il indique que le bouton doit toujours afficher la première image, sauf quand l’utilisateur clique dessus. En d’autres termes, le bouton affiche l’image A par défaut, l’image B lorsqu’il reçoit un clic souris, et de nouveau l’image A dès que le bouton de la souris est relâché. Ce mode permet de réaliser un bouton d’action avec une image différente pour chaque état (normal et enfoncé). Vous pouvez ainsi créer un effet 3D personnalisé ou toute image symbolisant l’action effectuée par bouton.  
   * *mode* \= 64 (Transparent)  
   Permet de rendre transparent le fond de l’image.  
   * *mode* \= 128 (Dernière imagette si désactivé)  
   Permet d’indiquer que la dernière image de la série doit être utilisée lorsque le bouton est inactivé. Avec ce paramétrage, 4D affiche la dernière “partie” de l’image référencée lorsque le bouton image est inactivé. L’image d’inactivation est traitée à part par 4D : lorsque vous combinez cette option avec les valeurs 0, 1 ou 2 dans le paramètre *mode*, la dernière image est exclue de la séquence associée au bouton et n’apparaîtra que lorsqu’il sera inactivé.
* *ticks* \= activation du mode “défilement automatique tous les N ticks” et intervalle de temps séparant l'affichage de chaque image. Ce paramètre optionnel, s'il est passé, provoque le défilement automatique et en boucle du contenu du bouton image à la vitesse spécifiée. Par exemple, si vous passez "2;3;?16807;0;10", la variation du bouton image s’effectuera tous les 10 ticks. Dans ce mode, toutes les autres options sont ignorées — à l’exception de l’option “Transparent” (mode 64).

##### Pop up menus image 

Pour formater des pop up menus image, passez dans le paramètre *formatAffich* une chaîne de caractères respectant la syntaxe suivante :  
*cols;lignes;image;margeH;margeV;mode*  

* *cols* \= nombre de colonnes de l'image
* *lignes* \= nombre de lignes de l'image
* *image* \= image utilisée, provenant de la bibliothèque d'images ou d'une variable image :  
   * si l'image provient de la bibliothèque d'images, saisissez son numéro, précédé d'un point d'interrogation (ex. : "?250"),  
   * si l'image provient d'une variable image, saisissez le nom de la variable.
* *margeH* \= marge en pixels entre les limites horizontales du menu et l’image.
* *margeV* \= marge en pixels entre les limites verticales du menu et l’image.
* *mode* \= mode de transparence du pop up menu image. Accepte les valeurs 0 et 64 :  
   * *mode* \= 0 : le pop-up menu image n'est pas transparent,  
   * *mode* \= 64 : le pop-up menu image est transparent.

##### Thermomètres et règles 

Pour formater des objets de type thermomètre ou règle, passez dans le paramètre *formatAffich* une chaîne de caractères respectant la syntaxe suivante :  
*min;max;unité;pas;mode{;format* *{;affichage}* *}*  

* *min* \= valeur de la graduation d'origine de la jauge
* *max* \= valeur de la graduation de fin de la jauge
* *unité* \= intervalle entre les graduations de la jauge
* *pas* \= intervalle de déplacement du curseur dans la jauge
* *mode* \= mode d'affichage et de fonctionnement de la jauge. Ce paramètre accepte les valeurs 0, 2, 3, 16, 32 et 128\. Ces valeurs peuvent être cumulées afin de définir plusieurs options (hormis le mode 128). Voici le détail de chaque valeur :  
   * *mode* \= 0 : ne pas afficher les libellés  
   * *mode* \= 2 : afficher les libellés à droite ou au-dessous de la jauge  
   * *mode* \= 3 : afficher les libellés à gauche ou au-dessus de la jauge  
   * *mode* \= 16 : afficher les graduations en regard des libellés  
   * *mode* \= 32 : déclencher la méthode objet avec l’événement On Data Change pendant que l’utilisateur change la valeur de la jauge. Par défaut, la méthode est exécutée après la modification.  
   * *mode* \= 128: activer le mode "Barber shop" (animation continue). Cette valeur ne peut pas être cumulée. Dans ce mode, les autres paramètres sont ignorés (hormis le paramètre *affichage* s'il est passé). Pour plus d'informations sur ce mode, reportez-vous au manuel Mode Développement.
* *format* \= format d'affichage des graduations de la jauge.  
A noter les libellés et les graduations sont automatiquement masqués si la taille de l'objet jauge ne permet pas de les afficher correctement.
* *affichage* \= options d'affichage spécifiques. Dans le cas des thermomètres, ce paramètre n'est pris en compte que si le sous-paramètre *mode* vaut 128.  
   * *affichage* \= 0 (ou est omis) : afficher une règle standard / afficher un thermomètre en animation continue "barber shop".  
   * *affichage* \= 1 : activer le mode "Stepper" pour une règle / activer le mode "Progression asynchrone" pour un thermomètre. Pour plus d'informations sur ces options, reportez-vous au manuel *Mode Développement*.

##### Cadrans 

Pour formater des objets de type cadran, passez dans le paramètre *formatAffich* une chaîne de caractères respectant la syntaxe suivante :  
*min;max;unité;pas{;mode}*  

* *min* \= valeur de la graduation d'origine du cadran
* *max* \= valeur de la graduation de fin du cadran
* *unité* \= intervalle entre les graduations du cadran
* *pas* \= intervalle de déplacement du curseur dans le cadran
* *mode* \= mode de fonctionnement du cadran (facultatif). Ce paramètre accepte uniquement la valeur 32 : déclencher la méthode objet avec l’événement On Data Change pendant que l’utilisateur change la valeur du cadran. Par défaut, la méthode est exécutée après la modification.

##### Grilles de boutons 

Pour formater des grilles de boutons, passez dans le paramètre *formatAffich* une chaîne de caractères respectant la syntaxe suivante :  
*cols;lignes*  

* *cols* \= nombre de colonnes de la grille
* *lignes* \= nombre de lignes de la grille

**Note :** Pour plus d'informations sur les formats d'affichage des objets de formulaire, reportez-vous au manuel Mode Développement de 4D.

##### Boutons 3D 

Pour formater des boutons 3D, passez dans le paramètre *formatAffich* une chaîne de caractères respectant la syntaxe suivante :  
*titre;image;imageFond;posTitre;titreVisible;icôneVisible;style;margeHor;margeVert;décalageIcône;popupMenu;hyperlien;nbEtats;i*mageHugsTitle

* *titre* \= titre du bouton. Cette valeur peut être exprimée sous forme de texte ou de numéro de ressource (ex. : “:16800,1”)
* *image* \= image associée au bouton, provenant de la bibliothèque d’images, d’une variable image ou d'un fichier du dossier Resources :  
   * si l’image provient de la bibliothèque d’images, saisissez son numéro, précédé d’un point d’interrogation (ex. : “?250”).  
   * si l’image provient d’une variable image, saisissez le nom de la variable.  
   * si l'image provient d'un fichier stocké dans le dossier Resources de la base, saisissez un chemin du type "#{dossier/}nomimage" ou "file:{dossier/}nomimage".
* *imageFond* \= image de fond associée au bouton (style Personnalisé), provenant de la bibliothèque d’images, d’une variable image ou d'un fichier stocké dans le dossier Resources (cf. ci-dessus).
* *posTitre* \= position du titre du bouton. Cinq valeurs sont possibles :  
   * *posTitre* \= 1 : Gauche  
   * *posTitre* \= 2 : Haut  
   * *posTitre* \= 3 : Droite  
   * *posTitre* \= 4 : Bas  
   * *posTitre* \= 5 : Centre
* *titreVisible* \= Titre visible ou non. Deux valeurs sont possibles :  
   * *titreVisible* \= 0 : le titre est masqué  
   * *titreVisible* \= 1 : le titre est affiché
* *icôneVisible* \= Icône visible ou non. Deux valeurs sont possibles :  
   * *icôneVisible* \= 0 : l’icône est masquée  
   * *icôneVisible* \= 1 : l’icône est affichée
* *style* \= Style du bouton. La valeur de cette option détermine la prise en compte de certaines autres options (par exemple imageFond). Les valeurs de style suivantes sont possibles :  
   * *style* \= 0 : Aucun  
   * *style* \= 1 : Décalage du fond  
   * *style* \= 2 : Bouton poussoir  
   * *style* \= 3 : Bouton barre outils  
   * *style* \= 4 : Personnalisé  
   * *style* \= 5 : Rond  
   * *style* \= 6 : Petit carré système  
   * *style* \= 7 : Office XP  
   * *style* \= 8 : Bevel  
   * *style* \= 9 : Bevel arrondi  
   * *style* \= 10 : Contracter/Déployer  
   * *style* \= 11 : Aide  
   * *style* \= 12 : OS X Textured  
   * *style* \= 13 : OS X Gradient
* *margeHor* \= Marge horizontale. Nombre de pixels délimitant les marges internes à droite et à gauche du bouton (zones dans lesquelles l’icône et le texte ne doivent pas empiéter).
* *margeVert* \= Marge verticale. Nombre de pixels délimitant les marges internes en haut et en bas du bouton (zones dans lesquelles l’icône et le texte ne doivent pas empiéter).
* *décalageIcône* \= Décalage de l’icône vers la droite et le bas. Cette valeur, exprimée en pixels, indique le décalage de l’icône du bouton vers la droite et le bas en cas de clic (la même valeur est utilisée pour les deux directions).
* *popupMenu* \= Association d’un pop up menu au bouton. Trois valeurs sont possibles :  
   * *popupMenu* \= 0 : Sans pop up menu  
   * *popupMenu* \= 1 : Avec pop up menu lié  
   * *popupMenu* \= 2 : Avec pop up menu séparé
* *hyperlien* \= Soulignement du titre sur le passage du curseur de la souris pour évoquer un lien hypertexte (mécanisme obsolète). Deux valeurs sont possibles :  
   * *hyperlien* \= 0 : le titre n'est pas souligné au passage de la souris  
   * *hyperlien* \= 1 : le titre est souligné au passage de la souris
* *nbEtats* \= Nombre d’états présents dans l’image utilisée comme icône pour le bouton 3D, et qui seront utilisées par 4D pour représenter les états standard du bouton (de 0 à 4).
* *imageHugsTitle* \= Définit si l'icône et le titre doivent être séparés ou accolés. Deux valeurs sont possibles :  
   * *imageHugsTitle* \= 0 : l'icône et le titre sont éloignés l'un de l'autre  
   * *imageHugsTitle* \= 1 : l'icône et le titre sont accolés

Certaines options ne sont pas prises en charge dans tous les styles de boutons 3D. De plus, dans certains cas vous pourrez souhaiter ne pas modifier toutes les options. Pour ne pas passer une option, il suffit d’omettre la valeur correspondante. Par exemple, pour ne pas passer les options *titreVisible*, *margeVert* et *hyperlien*, vous pouvez écrire :

```4d
 OBJECT SET FORMAT(maVar;"JoliBouton;?256;:562;1;;1;4;5;;5;0;;2")
```

##### En-têtes de list box 

Pour formater l'icône d'un en-tête de list box, passez dans le paramètre *formatAffich* une chaîne de caractères respectant la syntaxe suivante :  
*image;posIcone*

* *image* \= image de l'en-tête, provenant de la bibliothèque d'images, d'une variable image ou d'un fichier image :  
   * si l'image provient de la bibliothèque d'images, saisissez son numéro, précédé d'un point d'interrogation (ex. : "?250").  
   * si l'image provient d'une variable image, saisissez le nom de la variable.  
   * si l'image provient d'un fichier stocké dans le dossier Resources de la base, saisissez un URL du type "#{dossier/}nomimage" ou "file:{dossier/}nomimage".
* *posIcone* \= position de l'icône dans l'en-tête. Deux valeurs sont possibles :  
   * *posIcone* \= 1 : gauche  
   * *posIcone* \= 2 : droite

Cette fonctionnalité est utile par exemple lorsque vous voulez travailler avec une icône de tri personnalisée. 

#### Exemple 1 

La ligne de code suivante formate le champ *\[Employés\]Date embauche* au cinquième format de date. 

```4d
 OBJECT SET FORMAT([Employés]Date embauche;Char(Internal date long))
```

#### Exemple 2 

Cet exemple formate une variable de date et une variable d'heure en utilisant des [formats personnalisés](https://developer.4d.com/docs/Project/date-time-formats.md) :

```4d
 OBJECT SET FORMAT(*;"mydate";"(yyyy) MMM dd") // (2023) Dec 12
 OBJECT SET FORMAT(*;"mytime";"hh'h' mm'mn' ss'sec.'") // 15h 12mn 17sec.
```

#### Exemple 3 

L'exemple suivant change le format d'un champ *\[Sociétés\]Code postal* selon la longueur du code postal : 

```4d
 If(Length([Sociétés]Code postal)=9)
    OBJECT SET FORMAT([Sociétés]Code postal;"#####–####")
 Else
    OBJECT SET FORMAT([Sociétés]Code postal;"#####")
 End if
```

#### Exemple 4 

L'exemple suivant formate la valeur d'un champ numérique selon qu'elle est positive, négative ou nulle :

```4d
 OBJECT SET FORMAT([Stats]Résultat;"### ##0.00;(### ##0.00);")
```

#### Exemple 5 

L'exemple suivant définit le format d'un champ booléen pour afficher soit "Marié" soit "Célibataire" au lieu des valeurs par défaut "Oui" et "Non" : 

```4d
 OBJECT SET FORMAT([Employés]Situation;"Marié;Célibataire")
```

#### Exemple 6 

En supposant que vous avez stocké un fichier image nommé "envelope\_open.png" dans le dossier Resources de la base, vous pouvez écrire :

```4d
 vIcon:="#envelope_open.png"
 vPos:="2" // Droite
 OBJECT SET FORMAT(*;"Header1";vIcon+";"+vPos)
```

![](../assets/en/commands/pict2878245.en.png)

#### Exemple 7 

L'exemple suivant définit le format d'un champ booléen pour afficher une case à cocher libellée "Classé" : 

```4d
 OBJECT SET FORMAT([Dossier]Classement;"Classé")
```

#### Exemple 8 

Vous disposez d’un tableau d’imagettes contenant 1 ligne et 4 colonnes, destiné à afficher un bouton image (“actif par défaut”, “bouton cliqué”, “survol du curseur” et “inactivé”). Vous souhaitez lui associer les options Bascule sur passage du curseur, Retour sur relâchement du clic et Dernière imagette si désactivé : 

```4d
 OBJECT SET FORMAT(*;"BoutonImage";"4;1;?15000;176")
```

#### Exemple 9 

Passage d'un thermomètre en mode "Barber shop" : 

```4d
 OBJECT SET FORMAT($Monthermo;";;;;128")
 $Monthermo:=1 //Déclencher l'animation
```

#### Voir aussi 

  
[GET SYSTEM FORMAT](get-system-format.md)  
[OBJECT Get format](object-get-format.md)  
[OBJECT SET FILTER](object-set-filter.md)  