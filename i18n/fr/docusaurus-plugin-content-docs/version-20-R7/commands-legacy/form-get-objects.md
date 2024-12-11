---
id: form-get-objects
title: FORM GET OBJECTS
slug: /commands/form-get-objects
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET OBJECTS.Syntax-->**FORM GET OBJECTS** ( *tabObjets* {; *tabVariables* {; *tabPages*}} {; optionPage | *} )<!-- END REF-->
<!--REF #_command_.FORM GET OBJECTS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabObjets | Text array | &#8592; | Noms des objets du formulaire |
| tabVariables | Pointer array | &#8592; | Pointeurs sur les variables ou champs associés aux objets |
| tabPages | Array integer | &#8592; | Numéro de page de chaque objet |
| optionPage &#124; * | Entier long, Opérateur | &#8594;  | 1=Page courante du formulaire, 2=Toutes les pages, 4=Pages héritées<br/>Si * passé (obsolète) = page courante avec objets hérités |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET OBJECTS.Summary-->La commande **FORM GET OBJECTS** retourne sous forme de tableau(x) la liste de tous les objets présents dans le formulaire courant.<!-- END REF--> Cette liste peut être restreinte à la page courante du formulaire et peut exclure les objets des formulaires hérités. La commande peut être utilisée avec les formulaires entrée et sortie. 

Si un tableau passé en paramètre n’est pas préalablement déclaré, la commande le crée et le dimensionne automatiquement. Toutefois, dans la perspective de la compilation de l’application, il est recommandé de déclarer explicitement chaque tableau. 

Passez dans *tabObjets* le nom du tableau texte devant être rempli avec les noms des objets (chaque nom d’objet est unique au sein d’un formulaire). L’ordre dans lequel les objets apparaissent dans le tableau n’est pas significatif.

Les autres tableaux remplis facultativement par la commande sont synchronisés avec le premier. 

Passez dans le paramètre facultatif *tabVariables* le nom du tableau de pointeurs devant être rempli avec des pointeurs vers les variables ou champs associés aux objets. Si un objet n’a pas de variable associée, le pointeur Nil est retourné. Dans le cas d’un objet de type “sous-formulaire”, un pointeur sur la table du sous-formulaire est retourné.

Le troisième tableau (facultatif), *tabPages*, est rempli avec les numéros de pages du formulaire. Chaque ligne de ce tableau contient le numéro de la page sur laquelle se trouve l’objet correspondant. 

Le paramètre optionnel *optionPage* vous permet de désigner la ou les partie(s) du formulaire dont vous souhaitez lire les objets. Par défaut, si le paramètre *optionPage* est omis (ainsi que le paramètre *\**), les objets de toutes les pages, y compris les objets hérités, sont retournés. Pour délimiter la portée de la commande, vous pouvez passer une (ou une combinaison) des constantes suivantes du thème "*Objets de formulaire (Accès)*" dans le paramètre *optionPage* : 

| Constante         | Type        | Valeur | Comment                                                                                                   |
| ----------------- | ----------- | ------ | --------------------------------------------------------------------------------------------------------- |
| Form all pages    | Entier long | 2      | Retourne tous les objets de toutes les pages, mais exclut les objets hérités                              |
| Form current page | Entier long | 1      | Retourne tous les objets de la page courante, y compris ceux de la page 0, mais exclut les objets hérités |
| Form inherited    | Entier long | 4      | Retourne uniquement les objets hérités                                                                    |

**Note de compatibilité :** Passer le paramètre *\** équivaut à passer Form current page+Form inherited. Cependant, la syntaxe utilisant le paramètre *\** est obsolète et ne doit plus être utilisée.

#### Exemple 1 

Vous souhaitez obtenir les objets de toutes les pages, y compris ceux des formulaires hérités (le cas échéant):

```4d
  //Formulaire ouvert
 FORM GET OBJECTS(tabObjets;tabVariables;tabPages)
```

Ou :

```4d
  //Formulaire chargé
 FORM LOAD([Table1];"MonForm")
 FORM GET OBJECTS(tabObjets;tabVariables;tabPages;Form all pages+Form inherited)
```

#### Exemple 2 

Vous souhaitez obtenir les objets de la page courante du formulaire chargé, incluant la page 0 de ce formulaire ainsi que les objets des formulaires hérités (le cas échéant) :

```4d
 FORM LOAD("MonForm")
 FORM GOTO PAGE(2)
 FORM GET OBJECTS(tabObjets;tabVariables;tabPages;Form current page+Form inherited)
```

#### Exemple 3 

Vous souhaitez obtenir les objets des formulaires hérités. S'il n'y a pas de formulaire hérité, les tableaux seront retournés vides. 

```4d
 FORM LOAD("MonForm")
 FORM GET OBJECTS(tabObjets;tabVariables;tabPages;Form inherited)
```

#### Exemple 4 

Vous souhaitez obtenir les objets de la page 4, ainsi que ceux de la page 0, mais pas ceux des formulaires hérités (le cas échéant) :

```4d
 FORM LOAD([Table1];"MyForm")
 FORM GOTO PAGE(4)
 FORM GET OBJECTS(tabObjets;tabVariables;tabPages;Form current page)
```

#### Exemple 5 

Vous souhaitez obtenir les objets de toutes les pages, mais sans ceux des formulaires hérités :

```4d
 FORM LOAD([Table1];"MonForm")
 FORM GET OBJECTS(tabObjets;tabVariables;tabPages;Form all pages)
```

#### Exemple 6 

Vous souhaitez charger un formulaire et obtenir la liste de tous les objets des list box qu’il contient.

```4d
 FORM LOAD("MonFormulaire")
 ARRAY TEXT(tabObjets;0)
 FORM GET OBJECTS(tabObjets)
 ARRAY LONGINT(ar_type;Taille tableau(tabObjets))
 For($i;1;Size of array(tabObjets))
       ar_type{$i}:=OBJECT Get type(*;tabObjets{$i})
       If(ar_type{$i}=Object type listbox)
          ARRAY TEXT(tabObjetsLB;0)
          LISTBOX GET OBJECTS(*;tabObjets{$i};tabObjetsLB)
       End if
 End for
 FORM UNLOAD
```

#### Voir aussi 

[FORM GET PROPERTIES](form-get-properties.md)  
*Objets (Formulaires)*  
*Objets de formulaire (Accès)*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 898 |
| Thread safe | &check; |
| Interdite sur le serveur ||


