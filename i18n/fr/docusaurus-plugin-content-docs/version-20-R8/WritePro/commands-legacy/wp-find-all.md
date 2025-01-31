---
id: wp-find-all
title: WP Find all
slug: /WritePro/commands/wp-find-all
displayed_sidebar: docs
---

<!--REF #_command_.WP Find all.Syntax-->**WP Find all** ( *objCible* ; *valeurRecherche* ; *conditionRecherche* {; *remplacerValeur*} )  -> Résultat<!-- END REF-->
<!--REF #_command_.WP Find all.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| valeurRecherche | Text | &#8594;  | Valeur à rechercher |
| conditionRecherche | Integer | &#8594;  | Règle(s) de recherche |
| remplacerValeur | Text | &#8594;  | Chaîne de remplacement |
| Résultat | Collection | &#8592; | Collection d'objets plage |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Find all.Summary-->La commande **WP Find all** recherche *valeurRecherche* dans *objCible* en utilisant les options de *conditionRecherche*.<!-- END REF--> Un paramètre optionnel peut être utilisé pour remplacer les résultats trouvés.

**Note** : **WP Find all** ne recherche pas ou ne remplace pas le texte dans les formules. Utilisez la commande [WP Get formulas](wp-get-formulas.md) dans ce cas. 

Dans le paramètre *objCible*, passez un objet contenant :

* une plage, ou
* un élément (tableau / ligne / cellule(s) / paragraphe / corps / en-tête / pied de page / section / sous-section / zone de texte), ou
* un document 4D Write Pro

Le paramètre *valeurRecherche* vous permet de passer le texte à rechercher dans *objCible*.

Vous pouvez spécifier la recherche à effectuer avec le paramètre conditionRecherche. Vous pouvez utiliser une (ou une combinaison) des constantes suivantes :

| Constante                | Comment                                                                                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wk case insensitive      | Les chaînes sont comparées sans tenir compte des différences de majuscules. A noter que les signes diacritiques sont pris en compte. Par exemple, "A" est considéré comme "a", mais "a" n'est pas considéré comme "à".                                                         |
| wk diacritic insensitive | Les chaînes sont comparées mais le signe diacritique (par exemple, l'accent ou le symbole) des lettres est ignoré. Par exemple, "a" est considéré comme "à".                                                                                                                   |
| wk find reverse          | La recherche est effectuée dans l'ordre inverse.                                                                                                                                                                                                                               |
| wk kana insensitive      | Pour la langue japonaise. Les chaînes sont comparées selon le sens (et non le style d'écriture). Par exemple, "あ" est considéré comme "ア". Lorsque cette option est définie, wk width insensitive est implicite (considéré comme défini). Cependant, l'inverse n'est pas vrai. |
| wk keep character style  | Lorsque vous remplacez du texte, le style de caractère existant est conservé (si possible).                                                                                                                                                                                    |
| wk override protected    | La protection en lecture/écriture est ignorée et les chaînes des zones protégées peuvent être remplacées.                                                                                                                                                                      |
| wk use keyboard language | Pour la comparaison de chaînes, utilisez la propriété de langue du clavier à partir de l'objet formulaire en cours de modification au lieu de la langue de données actuelle (par défaut). **Note** : ignorée si le document est hors écran.                                    |
| wk whole word            | Seules les chaînes qui sont des mots complets sont prises en compte. Les chaînes correspondantes dans d'autres chaînes ne sont pas prises en compte. Par exemple, "where" n'est pas pris en compte lorsqu'il se trouve dans le mot "somewhere".                                |
| wk width insensitive     | Pour la langue japonaise. Les chaînes sont comparées par largeur de caractère. Par exemple, "ｱ" est considéré comme étant identique à "ア".                                                                                                                                     |

**Note** : Les chaînes sont comparées au langage de données courant, sauf si wk use keyboard language est utilisé.

Dans le paramètre optionnel remplacerValeur, vous pouvez passer du texte pour remplacer toute instance du texte dans *valeurRecherche* identifiée dans *objCible*.

**Collection retournée**

La fonction retourne une collection d'objets plage décrivant chaque valeur trouvée ou remplacée :

* opérations de recherche - les plages correspondent aux positions des chaînes trouvées
* opérations de remplacement - les plages correspondent aux positions des chaînes remplacées

Si objCible est une plage ou un élément, les valeurs trouvées sont retournées dans l'ordre où elles sont identifiées. 

Si objCible est un document 4D Write Pro, les valeurs trouvées sont retournées dans l'ordre suivant :

1. corps
2. en-tête de première page de la section 1 (le cas échéant)
3. pied de page de la première page de la section 1 (le cas échéant)
4. en-tête de la page de gauche pour la section 1 (le cas échéant)
5. pied de la page de gauche pour la section 1 (le cas échéant)
6. en-tête de la page de droite pour la section (le cas échéant)
7. pied de la page de droite pour la section 1 (le cas échéant)
8. en-tête principal de la section 1 (le cas échéant)
9. pied de page principal de la section 1 (le cas échéant)
10. faire de même avec la section 2, la section 3, et ainsi de suite.
11. zones de texte.

L'ordre est inversé si wk find reverse est utilisé.

Une collection vide est retournée si aucun résultat est tourné. 

#### Exemple 

```4d
 var $userSel ;$target ;$alphaRanges : Object
 var $bravoRanges:  Collection
 var $options : Integer
 
  // définir les options de recherche
 $options:=wk case insensitive+wk diacritic insensitive
 
  // obtenir les positions courantes de l'utilisateur
 $userSel:=WP Selection range(*;"WParea")
 
  // définir la cible
 $target:=WP Get body(WParea) // effectuer la recherche uniquement dans le corps
 
  // lancer le REMPLACEMENT de TOUTES les occurences de "alpha" par "bravo" dans le corps
 $bravoRanges:=WP Find all($target;"alpha";$options;"bravo")
```

#### Voir aussi 

[WP Find next](wp-find-next.md)  
[WP Find previous](wp-find-previous.md)  