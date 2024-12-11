---
id: listbox-insert-column
title: LISTBOX INSERT COLUMN
slug: /commands/listbox-insert-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX INSERT COLUMN.Syntax-->**LISTBOX INSERT COLUMN** ( {* ;} *objet* ; *positionCol* ; *nomCol* ; *variableCol* ; *nomEnTête* ; *variableEntête* {; *nomPied* ; *variablePied*} )<!-- END REF-->
<!--REF #_command_.LISTBOX INSERT COLUMN.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| positionCol | Integer | &#8594;  | Emplacement de la colonne à insérer |
| nomCol | Text | &#8594;  | Nom d’objet de la colonne |
| variableCol | Array, Field, Variable, Pointer | &#8594;  | Nom de la variable tableau de la colonne ou champ ou variable |
| nomEnTête | Text | &#8594;  | Nom d’objet de l’en-tête de la colonne |
| variableEntête | Integer, Pointer | &#8594;  | Variable d’en-tête de la colonne |
| nomPied | Text | &#8594;  | Nom d’objet du pied de la colonne |
| variablePied | Variable, Pointer | &#8594;  | Variable du pied de la colonne |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX INSERT COLUMN.Summary-->La commande **LISTBOX INSERT COLUMN** insère une colonne dans la list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

**Note :** Cette commande ne fait rien si elle est appliquée à la première colonne d’une list box affichée en mode hiérarchique. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*.

La nouvelle colonne est insérée juste avant la colonne désignée par le paramètre *positionCol*. Si le paramètre *positionCol* est supérieur au nombre total de colonnes, la colonne est ajoutée après la dernière colonne. 

Passez dans les paramètres *nomCol* et *variableCol* le nom d’objet et la variable de la colonne insérée. 

* Dans le cadre d'une list box de type tableau, le nom de la variable correspond au nom du tableau dont le contenu sera affiché dans la colonne. Vous pouvez passer un pointeur Nil (->\[\]) si vous utilisez la commande dans un contexte dynamique à l'exécution du formulaire (cf. ci-dessous).
* Dans le cadre d'une list box de type sélection, vous pouvez passer un champ ou une variable dans le paramètre *variableCol*. Le contenu de la colonne sera alors la valeur du champ ou de la variable, évaluée pour chaque enregistrement de la sélection associée à la list box. Ce type de contenu ne peut être utilisé que lorsque la propriété “Source de données” de la list box est Sélection courante ou Sélection temporaire (cf. section *Gestion programmée des objets de type List box*). Vous pouvez utiliser des champs ou des variables de type chaîne, numérique, Date, Heure, Image et Booléen.

Dans le contexte de list box basées sur des sélections d'enregsitrements, **LISTBOX INSERT COLUMN** permet d’insérer des éléments simples (champs ou variables). Si vous souhaitez manipuler des expressions plus complexes (telles que des formules ou des méthodes), vous devez utiliser la commande [LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md).  
Les list box de type collection ou entity selection sont également prises en charge, mais comme le paramètre *variableCol* n'accepte pas les expressions, vous devrez utiliser la commande [LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md) pour assigner la source de données. Il est plus judicieux dans ce cas d'utiliser directement la commande [LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md).

**Note :** Il n’est pas possible de combiner dans une même list box des colonnes de type tableau (source de données tableaux) et des colonnes de type champ ou variable (source de données sélection).

Passez dans les paramètres *nomEntête* et *variableEntête* le nom d’objet et la variable de l’en-tête de la colonne insérée.

Vous pouvez également passer dans les paramètres *nomPied* et *variablePied* le nom d’objet et la variable du pied de la colonne insérée.

**Note :** Les noms d’objets doivent être uniques dans un formulaire. Vous devez veiller à ce que les noms passés dans les paramètres *nomCol*, *nomEntête* et *nomPied* ne soient pas déjà utilisés. Sinon, la colonne n’est pas créée et une erreur est générée.

##### Insertion dynamique 

Vous pouvez utiliser cette commande pour insérer dynamiquement des colonnes dans les list box à l'exécution du formulaire, 4D prenant automatiquement en charge les définitions de variables nécessaires (colonne, pied et en-tête).

Pour cela, **LISTBOX INSERT COLUMN** accepte un pointeur **Nil** (**\->\[\]**) comme valeur pour les paramètres *variableCol* (list box de type tableau uniquement), *variableEntête* et *variablePied*. Dans ce cas, 4D va créer dynamiquement les variables requises lors de l'exécution de la commande (pour plus d'informations, reportez-vous à la section ). 

A noter que les variables d'en-tête et de pied sont toujours créées avec un type spécifique (respectivement entier long et texte). A l'inverse, les variables de colonne ne peuvent pas être typées à la création car les list box acceptent différents types de tableaux pour ces variables (tableau texte, tableau entier, etc.). Vous devez donc définir manuellement le type du tableau (cf. exemple 3). Il est important d'effectuer ce typage avant d'appeler des commandes telles que [LISTBOX INSERT ROWS](listbox-insert-rows.md) pour insérer des nouveaux éléments dans le tableau. Ou bien, il est possible d'utiliser [APPEND TO ARRAY](append-to-array.md) pour à la fois typer le tableau et insérer des éléments. 

#### Exemple 1 

Nous souhaitons ajouter une colonne à la fin de la list box : 

```4d
 var NomVarHeader;$Der;$NbEnr : Integer
 ALL RECORDS([Table 1])
 $NbEnr:=Records in table([Table 1])
 ARRAY PICTURE(tabImage;$NbEnr)
 
 $Der:=LISTBOX Get number of columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN(*;"ListBox1";$Der;"ColumnPicture";tabImage;"HeaderPicture";NomVarHeader)
```

#### Exemple 2 

Nous souhaitons ajouter une colonne à la droite de la list box et lui associer les valeurs du champ \[Envois\]Frais : 

```4d
 $der:=LISTBOX Get number of columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN(*;"ListBox1";$der;"ColChamp";[Envois]Frais;"NomEntete";VarEntete)
```

#### Exemple 3 

Vous souhaitez insérer dynamiquement une colonne dans une list box de type tableau et définir son en-tête :

```4d
 var $NilPtr : Pointer
 LISTBOX INSERT COLUMN(*;"MyListBox";1;"MyNewColumn";$NilPtr;"MyNewHeader";$NilPtr)
 ColPtr:=OBJECT Get pointer(Object named;"MyNewColumn")
 ARRAY TEXT(ColPtr->;10)
     //Définition de l'en-tête
 headprt:=OBJECT Get pointer(Object named;"MyNewHeader")
 OBJECT SET TITLE(headprt->;"Entête inséré")
```

#### Voir aussi 

[LISTBOX DELETE COLUMN](listbox-delete-column.md)  
[LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 829 |
| Thread safe | &check; |
| Interdite sur le serveur ||


