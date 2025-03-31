---
id: wp-find-next
title: WP Find next
slug: /WritePro/commands/wp-find-next
displayed_sidebar: docs
---

<!--REF #_command_.WP Find next.Syntax-->**WP Find next** ( *objCible* ; *rechercherAprès* ; *rechercherValeur* ; *conditionRecherche* {; *remplacerValeur*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Find next.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| rechercherAprès | Object | &#8594;  | Plage après laquelle la recherche va démarrer |
| rechercherValeur | Text | &#8594;  | Rechercher une valeur |
| conditionRecherche | Integer | &#8594;  | Règle(s) de recherche |
| remplacerValeur | Text | &#8594;  | Chaîne de remplacement |
| Résultat | Object | &#8592; | Plage de la valeur trouvée/remplacée |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Find next.Summary-->La commande **WP Find next** recherche le paramètre *objCible,* après la plage rechercherAprès, pour le paramètre rechercherValeur fondé sur conditionRecherche.<!-- END REF--> Un paramètre optionnel peut être utilisé pour remplacer les résultats trouvés.

**Note** : **WP Find next** ne recherche pas ou ne remplace pas le texte dans les formules. Utilisez la commande [WP Get formulas](wp-get-formulas.md) dans ce cas. 

Dans le paramètre *objCible*, passez un objet contenant :

* une plage, ou
* un élément (tableau / ligne / cellule(s) / paragraphe / corps / en-tête / pied de page / section / sous-section / zone de texte), ou
* un document 4D Write Pro

Passez une plage dans le paramètre rechercherAprès. La recherche démarrera immédiatement après la plage définie ou bien passez NULL pour identifier la première valeur de objCible.

**Note** : Si objCible est le document 4D Write Pro et rechercherAprès est dans une zone de texte, la commande recherche les occurrences d'abord dans la zone de texte parent, puis dans la ou les zones de texte suivantes, dans un ordre croissant -- selon l'ordre décrit ci-dessous.

Le paramètre rechercherValeur vous permet de passer le texte à rechercher dans *objCible*.

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

Dans le paramètre optionnel remplacerValeur, vous pouvez passer du texte pour remplacer toute instance du texte de rechercherValeur identifiée dans *objCible*.

**Plage retournée**

La fonction retourne une plage de la valeur trouvée ou remplacée :

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

Une plage vide est retournée si aucun résultat est trouvé. 

#### Exemple 

```4d
 var $userSel ;$target ;$alphaRanges ;$nextRanges: object
 var $options : Integer
 
  // définir les options de recherche
 $options:=wk case insensitive+wk diacritic insensitive
 
  // lire la position courante de l'utilisateur
 $userSel:=WP Selection range(*;"WParea")
 
  // définir la cible
 $target:=WP Get body(WParea) // effectuer la recherche uniquement dans le corps
 
  // lancer la RECHERCHE des PROCHAINES occurences de la chaîne "alpha" (fondée sur la sélection courante)
 $previousRanges:=WP Find next($target;$userSel;"alpha";$options)
```

#### Voir aussi 

[WP Find all](wp-find-all.md)  
[WP Find previous](wp-find-previous.md)  