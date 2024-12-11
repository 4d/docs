---
id: open-form-window
title: Open form window
slug: /commands/open-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Open form window.Syntax-->**Open form window** ( {*laTable* ;} *nomForm* {; *type* {; *posH* {; *posV* {; *}}}} ) : Integer<!-- END REF-->
<!--REF #_command_.Open form window.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table du formulaire ou Table par défaut si ce paramètre est omis |
| nomForm | Text, Object | &#8594;  | Nom du formulaire table ou projet (chaîne), ouChemin POSIX (chaîne) d'un fichier .json décrivant le formulaire, ouObjet décrivant le formulaire |
| type | Integer | &#8594;  | Type de la fenêtre |
| posH | Integer | &#8594;  | Position horizontale de la fenêtre |
| posV | Integer | &#8594;  | Position verticale de la fenêtre |
| * | Opérateur | &#8594;  | Conserver la position et la taille précédentes de la fenêtre |
| Résultat | Integer | &#8592; | Numéro de référence de la fenêtre |

<!-- END REF-->

#### Description 

<!--REF #_command_.Open form window.Summary-->La commande **Open form window** crée une nouvelle fenêtre utilisant les propriétés de taille et de redimensionnement du formulaire *nomForm*, passé en paramètre.<!-- END REF-->

**Note :** Utilisez la commande [FORM GET PROPERTIES](form-get-properties.md) pour connaître les propriétés du formulaire.

Dans le paramètre *nomForm*, vous pouvez passer :

* le nom d'un formulaire (formulaire projet ou formulaire table) à utiliser,
* le chemin (en syntaxe POSIX) d'un fichier .json valide contenant la description du formulaire à utiliser (voir *Chemin d'accès du formulaire*),
* un objet contenant la description du formulaire à utiliser.

A noter que le formulaire *nomForm* n’est pas affiché dans la fenêtre créée. Il vous appartient, si vous le souhaitez, d’afficher le formulaire (par exemple à l’aide de la commande [ADD RECORD](add-record.md)).

Le paramètre optionnel *type* vous permet de spécifier un type de fenêtre. Ce paramètre doit contenir une des constantes prédéfinies suivantes, placées dans le thème "*Creer fenetre formulaire*" :

| Constante                        | Type        | Valeur |
| -------------------------------- | ----------- | ------ |
| Controller form window           | Entier long | 133056 |
| Form has full screen mode Mac    | Entier long | 65536  |
| Form has no menu bar             | Entier long | 2048   |
| Modal form dialog box            | Entier long | 1      |
| Movable form dialog box          | Entier long | 5      |
| Movable form dialog box no title | Entier long | 524293 |
| Palette form window              | Entier long | 1984   |
| Plain form window                | Entier long | 8      |
| Plain form window no title       | Entier long | 524296 |
| Pop up form window               | Entier long | 32     |
| Sheet form window                | Entier long | 33     |
| Toolbar form window              | Entier long | 35     |

Les types de fenêtres utilisables avec **Open form window** sont détaillés dans la section *Types de fenêtres*.

**Note :** Les constantes Form has full screen mode Mac et Form has no menu bar doivent être ajoutées à l'une des autres constantes de type.

Par défaut, si le paramètre *type* n’est pas passé, la fenêtre créée est de type Plain form window. 

**Case de fermeture** 
Les fenêtres de type Movable form dialog box, Plain form window et Palette form window comportent une case de fermeture. Aucune méthode n’est associée à cette case de fermeture : un clic sur la case de fermeture provoquera simplement l’annulation du formulaire, sauf si l’événement On Close Box est activé pour le formulaire, auquel cas le code associé à cet événement sera exécuté.

**Contrôle de taille**  
Si les propriétés "Taille de la fenêtre" du formulaire *nomForm* ne sont pas fixes, la fenêtre créée peut être redimensionnée par l'utilisateur. Une case de zoom peut également être disponible, suivant le type de la fenêtre. Si la propriété **Largeur fixe** et/ou **Hauteur fixe** est cochée dans les propriétés du formulaire, la taille de la fenêtre ne pourra pas être modifiée.

**Note :** Certains attributs de la fenêtre créée (case de contrôle de taille, case de fermeture...) dépendent des spécifications d'interface du système d'exploitation pour le *type* choisi. Il est donc possible d'obtenir des résultats différents en fonction de la plate-forme.

Le paramètre optionnel *posH* vous permet de définir l’emplacement horizontal de la fenêtre. Vous pouvez passer une coordonnée fixe exprimée en pixels ou l’une des constantes prédéfinies suivantes, placées dans le thème "*Creer fenetre formulaire*" :  

| Constante             | Type        | Valeur |
| --------------------- | ----------- | ------ |
| Horizontally centered | Entier long | 65536  |
| On the left           | Entier long | 131072 |
| On the right          | Entier long | 196608 |

Le paramètre optionnel *posV* vous permet de définir l’emplacement vertical de la fenêtre. Vous pouvez passer une coordonnée fixe exprimée en pixels, ou l’une des constantes prédéfinies suivantes, placées dans le thème "*Creer fenetre formulaire*" :  

| Constante           | Type        | Valeur |
| ------------------- | ----------- | ------ |
| At the bottom       | Entier long | 393216 |
| At the top          | Entier long | 327680 |
| Vertically centered | Entier long | 262144 |

Ces paramètres sont exprimés relativement au coin supérieur gauche de la zone de contenu de la fenêtre de l'application (Windows en mode MDI) ou de l'écran principal (macOS et Windows en mode SDI). Ils tiennent compte de la présence de la barre d’outils et de la barre de menus.

Si vous passez le paramètre optionnel *\**, la position et la taille courantes de la fenêtre sont mémorisées au moment où elle est refermée. Lorsque la fenêtre est réouverte par la suite, elle conserve sa position et sa taille précédentes. Dans ce cas, les paramètres *posV* et *posH* ne sont utilisés que pour la première ouverture de la fenêtre.

#### Exemple 1 

L’instruction suivante ouvre une fenêtre standard avec case de fermeture automatiquement ajustée à la taille du formulaire “Entrée”. La taille de fenêtre du formulaire n'est pas fixe, la fenêtre comporte donc également une case de contrôle de taille et une case de zoom :

```4d
 $refFen:=Open form window([Table1];"Entrée")
```

#### Exemple 2 

L’instruction suivante ouvre, en haut et à gauche de l’écran, une palette flottante basée sur un formulaire projet nommé "Outils". Cette palette conservera sa précédente position à chaque nouvelle ouverture :

```4d
 $refFen:=Open form window("Outils";Palette form window;On the left;At the top;*)
```

#### Exemple 3 

Ce code doit être appelé alors qu'une fenêtre document est affichée, par exemple depuis un bouton de formulaire sous macOS :

```4d
 $maFenêtre:=Open form window("sheet form";Form fenêtre feuille)
  // A cet instant la fenêtre est créée mais reste invisible
 DIALOG([Table];"formDial")
  //l'événement Sur chargement est généré puis la fenêtre feuille est affichée, elle "descend"
  //du dessous de la barre de titre
```

#### Exemple 4 

L'exemple suivant utilise le chemin d'un fichier .json décrivant un formulaire permettant d'afficher les enregistrements d'une liste d'employés :

```4d
 Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)
 ALL RECORDS([Personnel])
 Open form window("/RESOURCES/OutputPersonnel.json";*)
```

Résultat :

![](../assets/en/commands/pict3687439.en.png)

#### Voir aussi 

[FORM GET PROPERTIES](form-get-properties.md)  
[Open window](open-window.md)  
*Types de fenêtres*  
*Types de fenêtres (compatibilité)*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 675 |
| Thread safe | &check; |
| Interdite sur le serveur ||


