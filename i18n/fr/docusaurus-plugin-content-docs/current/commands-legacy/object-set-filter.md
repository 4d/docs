---
id: object-set-filter
title: OBJECT SET FILTER
slug: /commands/object-set-filter
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FILTER.Syntax-->**OBJECT SET FILTER** ( {* ;} *objet* ; *filtreSaisie* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FILTER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié = objet est un nom d'objet (chaîne) Si omis = objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Champ ou Variable (si * omis) |
| filtreSaisie | Text | &#8594;  | Nouveau filtre de saisie pour la zone saisissable |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET FILTER.Summary-->**OBJECT SET FILTER** remplace le filtre de saisie pour *objet* par *filtreSaisie* dans le formulaire courant affiché à l'écran.<!-- END REF--> 

Si vous passez le paramètre optionnel \*, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). Pour plus d'informations sur les noms d'objets, reportez-vous à la section *Objets de formulaires*.

La commande **OBJECT SET FILTER** peut être utilisée dans des formulaires entrée et des dialogues et peut être appliquée aux champs et variables saisissables acceptant les filtres de saisie en mode Développement. 

Pour enlever un filtre, passez une chaîne vide dans le paramètre *filtreSaisie*. 

**Note :** Cette commande ne peut pas être utilisée avec des champs situés dans le formulaire "liste" d'un sous-formulaire.

**Note :** Pour pouvoir exploiter les filtres de saisie que vous avez créés dans la Boîte à outils, préfixez le nom du filtre, dans le paramètre *filtreSaisie*, d'une barre verticale (|). 

#### Exemple 1 

L'exemple suivant définit le filtre de saisie pour le champ code postal. Si l'adresse se trouve en France, le filtre est paramétré pour les codes postaux français. Sinon, le filtre peut accepter toute valeur saisie :   

```4d
 If(Pays="France") // Fixer le filtre au format du code postal français
    OBJECT SET FILTER([Sociétés]Code postal;"&#####")
 Else // Fixer le filtre pour qu'il accepte toute valeur alphanumérique
    OBJECT SET FILTER([Sociétés]Code postal;"~@")
 End if
```

#### Exemple 2 

L'exemple suivant autorise uniquement la saisie des lettres “a”, “b”, “c” ou “g” dans un champ comportant deux lettres : 

```4d
 OBJECT SET FILTER([Table]Champ;"&"+Char(Double quote)+"a;b;c;g"+Char(Double quote)+"##")
```

**Note :** Cet exemple définit le filtre de saisie *&"a;b;c;g"##*.

#### Voir aussi 

[OBJECT Get filter](object-get-filter.md)  
[OBJECT SET FORMAT](object-set-format.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 235 |
| Thread safe | &check; |
| Interdite sur le serveur ||


