---
id: wp-set-text
title: WP SET TEXT
slug: /WritePro/commands/wp-set-text
displayed_sidebar: docs
---

<!--REF #_command_.WP SET TEXT.Syntax-->**WP SET TEXT** ( *objCible* ; *nouveauTexte* ; *positionTexte* {; *miseAJourPlage*} )<!-- END REF-->
<!--REF #_command_.WP SET TEXT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| nouveauText | Text | &#8594;  | Texte à insérer |
| positionTexte | Number | &#8594;  | Position de l'insertion (remplace, avant, après) |
| miseAJourPlage | Number | &#8594;  | Inclut ou exclut le contenu inséré dans la plage |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP SET TEXT.Summary-->La commande **WP SET TEXT** insère le texte passé dans le paramètre *nouveauTexte* en texte brut dans le paramètre *objCible* à la position spécifiée par le paramètre *positionTexte*.<!-- END REF-->

Dans le paramètre *objCible*, passez un objet plage pour désigner la position où le texte doit être inséré. La plage peut être un emplacement explicite dans le document 4D Write Pro ou peut être basée sur une sélection de l'utilisateur. Vous pouvez passer : 

* une plage, ou
* un élément (tableau / ligne / paragraphe / corps / en-tête / pied / image en ligne / section / sous-section), ou
* un document 4D Write Pro.

Le paramètre *nouveauTexte* contient le texte à insérer dans *objCible*. **WP SET TEXT** insère du texte brut seulement, tel qu'il est écrit, mais sans aucune balise de style.

Dans le paramètre *positionTexte*, l'emplacement du texte inséré peut être précisé en passant l'un des sélecteurs suivants :

| Constante  | Comment                                    |
| ---------- | ------------------------------------------ |
| wk append  | Insère le contenu à la fin de la cible     |
| wk prepend | Le contenu est inséré au début de la cible |
| wk replace | Remplace le contenu de la cible            |

* Si objCible est une plage, vous pouvez utiliser le paramètre optionnel miseAJourPlage pour passer une des constantes suivantes pour préciser si le contenu inséré doit être inclus ou non dans la plage résultante :  
    
| Constante             | Comment                                                         |  
| --------------------- | --------------------------------------------------------------- |  
| wk exclude from range | Le contenu inséré n'est pas inclus dans la plage mise à jour    |  
| wk include in range   | Le contenu inséré est inclus dans la plage mise à jour (défaut) |  
    
Si vous ne passez pas un paramètre miseAJourPlage, le contenu inséré sera inclus par défaut dans la plage résultante.
* Si objCible n'est pas une plage, miseAJourPlage est ignoré.

#### Exemple 

Vous souhaitez ajouter du texte à ce document :

![](../../assets/en/WritePro/commands/pict3772543.en.png)

objCible est un document 4D Write Pro :

```4d
 WP SET TEXT(myDoc;"Hello world";wk append)
 /écrit"The quick brown fox jumps over the lazy dog. Hello world!"
```

objCible est une plage :

Avant le texte existant :  

```4d
 $range:=WP Text range(myDoc;wk start text;wk end text)
 WP SET TEXT($range;" Hello world!";wk prepend) 
  // écrit " Hello world! The quick brown fox jumps over the lazy dog."
```

Après le texte existant :  

```4d
 $range:=WP Text range(myDoc;wk start text;wk end text)
 WP SET TEXT($range;" Hello world!";wk append) 
  // écrit "The quick brown fox jumps over the lazy dog. Hello world!"
```

Remplace le texte existant :  

```4d
 $range:=WP Text range(myDoc;wk start text;wk end text)
 WP SET TEXT($range;" Hello world!";wk replace) 
  // écrit " Hello world!"
```

#### Voir aussi 

[WP Get text](wp-get-text.md)  