---
id: method-list
title: Liste des méthodes
---

> **Warning**: The commands on this page are not thread-safe.

[A](#a) -
[C](#c) -
[D](#d) -
[E](#e) -
[F](#f) -
[G](#g) -
[I](#i) -
[M](#m) -
[N](#n) -
[O](#o) -
[P](#p) -
[R](#r) -
[S](#s)

## A

### VP ADD FORMULA NAME

<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->

**VP ADD FORMULA NAME** ( *vpAreaName* : Text ; *vpFormula* : Text ; *name* : Text { ; *options* : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| vpFormula  | Text   | -> | Formule 4D View Pro                     |
| name       | Text   | -> | Nom de la formule                       |
| options    | Object | -> | Options de la formule nommée            |

</div>
<!-- END REF -->

#### Description

La commande `VP ADD FORMULA NAME` <!-- REF #_method_.VP ADD FORMULA NAME.Summary -->permet de créer ou de modifier une formule nommée dans le document courant<!-- END REF -->.

> Les formules nommées créées par cette commande sont stockées dans le document.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez la formule 4D View Pro que vous souhaitez nommer dans *vpFormula*. Pour plus d'informations sur la syntaxe des formules, veuillez consulter la page [Formules et Fonctions](formulas.md).

Passez le nouveau nom de la formule dans *name*. Si le nom est déjà utilisé dans le même scope, la nouvelle formule nommée remplace la formule existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

Vous pouvez passer un objet avec des propriétés additionnelles pour la formule nommée dans *options*. Les propriétés suivantes sont prises en charge :

| Propriété | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Number | Scope de la formule. Vous pouvez passer l'index de la feuille (la numérotation commence à zéro) ou utiliser les constantes suivantes : <li>`vk current sheet`</li><li>`vk workbook`</li>Le scope détermine si le nom d'une formule est propre à une feuille (*scope*=sheet index ou `vk current sheet`), ou s'il s'applique à l'ensemble du classeur (*scope*=`vk workbook`). |
| comment   | Text   | Commentaire associé à une formule nommée                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Exemple

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### Voir également

[Cell references](formulas.md#cell-references)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Get names](#vp-get-names)

### VP ADD RANGE NAME

<!-- REF #_method_.VP ADD RANGE NAME.Syntax -->

**VP ADD RANGE NAME** ( *rangeObj* : Object ; *name* : Text { ; *options* : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD RANGE NAME.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                  |
| ---------- | ------ | -- | ---------------------------- |
| rangeObj   | Object | -> | Objet plage                  |
| name       | Text   | -> | Nom de la formule            |
| options    | Object | -> | Options de la formule nommée |

</div>
<!-- END REF -->

#### Description

La commande `VP ADD RANGE NAME` <!-- REF #_method_.VP ADD RANGE NAME.Summary -->crée ou modifie une plage nommée dans le document courant<!-- END REF -->.

> Les plages nommées créées par cette commande sont stockées dans le document.

Dans *rangeObj*, passez la plage que vous souhaitez nommer et dans *name*, passez le nouveau nom pour la plage. Si le nom est déjà utilisé dans le même scope, la nouvelle plage nommée remplace la plage existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

Vous pouvez passer un objet avec des propriétés supplémentaires pour la plage nommée dans *options*. Les propriétés suivantes sont prises en charge :

| Propriété | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Number | Scope de la plage. Vous pouvez passer l'index de la feuille (la numérotation commence à zéro) ou utiliser les constantes suivantes: <li>`vk current sheet`</li><li>`vk workbook`</li>Le scope détermine si le nom d'une plage est propre à une feuille (*scope*=sheet index ou `vk current sheet`), ou s'il s'applique à l'ensemble du classeur (*scope*=`vk workbook`). |
| comment   | Text   | Commentaire associé à une plage nommée                                                                                                                                                                                                                                                                                                                                                                                                                                            |

> - Une plage nommée est en réalité une formule nommée contenant des coordonnées. La commande `VP ADD RANGE NAME` facilite la création de plages nommées, mais vous pouvez également utiliser la méthode [`VP ADD FORMULA NAME`](#vp-add-formula-name) pour créer des plages nommées.
> - Les formules définissant des plages nommées peuvent être récupérées à l'aide de la commande [`VP Get formula by name`](#vp-get-formula-by-name).

#### Exemple

Vous souhaitez créer une plage nommée à partir d'une plage contenant une cellule :

```4d
$range:=VP Cell("ViewProArea";2;10)
VP ADD RANGE NAME($range;"Total1")
```

#### Voir également

[VP Get names](#vp-get-names)<br/>[VP Name](#vp-name)

### VP ADD SELECTION

<!-- REF #_method_.VP ADD SELECTION.Syntax -->

**VP ADD SELECTION** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SELECTION.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

</div>
<!-- END REF -->

#### Description

La commande `VP ADD SELECTION` <!-- REF #_method_.VP ADD SELECTION.Summary -->ajoute les cellules spécifiées aux cellules actuellement sélectionnées<!-- END REF -->.

Dans *rangeObj*, passez un objet plage de plusieurs cellules à ajouter à la sélection courante.

> La cellule active n'est pas modifiée.

#### Exemple

Les cellules sélectionnées sont les suivantes :

![](../assets/en/ViewPro/cmd_vpAddSelection1.PNG)

Le code suivant ajoutera des cellules à votre sélection :

```4d
$currentSelection:=VP Cells("myVPArea";3;4;2;3)
VP ADD SELECTION($currentSelection)
```

Résultat:

![](../assets/en/ViewPro/cmd_vpAddSelection2.PNG)

#### Voir également

[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP ADD SHEET

<!-- REF #_method_.VP ADD SHEET.Syntax -->

**VP ADD SHEET** ( *vpAreaName* : Text )<br/>**VP ADD SHEET** ( *vpAreaName* : Text ; *index* : Integer )<br/>**VP ADD SHEET** ( *vpAreaName* : Text ; *index* : Integer ; *name* : Text )<!-- END REF -->

<!-- REF #_method_.VP ADD SHEET.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| index      | Integer | -> | Indice de la nouvelle feuille           |
| name       | Text    | -> | Nom de la feuille                       |

</div>
<!-- END REF -->

#### Description

La commande `VP ADD SHEET` <!-- REF #_method_.VP ADD SHEET.Summary -->insère une feuille dans le document chargé dans *vpAreaName*.<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Si l'*index* est supérieur au nombre de feuilles, la commande insère la nouvelle feuille après les feuilles existantes. Dans *index*, vous pouvez passer un numéro pour la nouvelle feuille. Si l'*index* passé est inférieur ou égal à 0, la commande insère la nouvelle feuille au début.

> La numérotation démarre à 0.

Dans *name*, vous pouvez passer un nom pour la nouvelle feuille. Le nouveau nom ne peut pas contenir les caractères suivants : `*, :, [, ], ?,\,/`

#### Exemple

Le document comporte actuellement 3 feuilles :

![vp-document-with-3-sheets](../assets/en/ViewPro/vp-sheet-3.png)

Pour insérer une feuille à la troisième position (index 2) et la nommer "March" :

```4d
VP ADD SHEET("ViewProArea";2;"March")
```

![vp-add-sheet](../assets/en/ViewPro/vp-add-sheet.png)

#### Voir également

[VP REMOVE SHEET](#vp-remove-sheet)

### VP ADD SPAN

<!-- REF #_method_.VP ADD SPAN.Syntax -->

**VP ADD SPAN** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SPAN.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

</div>
<!-- END REF -->

#### Description

La commande `VP ADD SPAN` combine les cellules dans *rangeObj* en une seule cellule fusionnée.

Dans *rangeObj*, passez un objet de plage de cellules. Les cellules de la plage sont jointes, afin de créer une cellule plus large qui s'étend sur plusieurs colonnes et/ou lignes. Vous pouvez passer plusieurs plages de cellules pour créer plusieurs fusions de cellules en même temps. A noter que si les plages de cellules se chevauchent, seule la première plage est utilisée.

> - Seules les données contenues dans la cellule supérieure gauche sont affichées. Les données des autres cellules combinées sont cachées jusqu'à ce que la fusion soit retirée.
> - Les données masquées, contenues dans les cellules fusionnées, sont accessibles via des formules (commençant par la cellule supérieure gauche).

#### Exemple

Pour fusionner les cellules First quarter et Second quarter avec les deux cellules côte à côte, et de fusionner la cellule South area avec les deux lignes en-dessous :

![initial-document](../assets/en/ViewPro/vp-add-span.png)

```4d
 // First quarter range
 $q1:=VP Cells("ViewProArea";2;3;3;1)

  // Second quarter range
 $q2:=VP Cells("ViewProArea";5;3;3;1)

  // South area range
 $south:=VP Cells("ViewProArea";0;5;1;3)

 VP ADD SPAN(VP Combine ranges($q1;$q2;$south))
```

![vp-add-span-result](../assets/en/ViewPro/vp-add-span-2.png)

#### Voir également

[4D View Pro Range Object Properties](getting-started.md#using-range-objects)<br/>[VP Get spans](#vp-get-spans)<br/>[VP REMOVE SPAN](#vp-remove-span)

### VP ADD STYLESHEET

<!-- REF #_method_.VP ADD STYLESHEET.Syntax -->

**VP ADD STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text ; *styleObj* : Object { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP ADD STYLESHEET.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| styleName  | Text    | -> | Nom du style                                                                |
| styleObj   | Object  | -> | Objet définissant les propriétés de l'attribut                              |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP ADD STYLESHEET` <!-- REF #_method_.VP ADD STYLESHEET.Summary -->crée ou modifie la feuille de style *styleName* en fonction de la combinaison des propriétés spécifiées dans *styleObj* dans le document courant<!-- END REF -->. Si une feuille de style ayant le même nom et le même index existe déjà dans le document, cette commande l'écrasera et le remplacera avec les nouvelles valeurs.

> Les feuilles de style créées par cette commande sont sauvegardées avec le document.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *styleName* vous permet de nommer la feuille de style. Si le nom existe déjà dans le même scope, la nouvelle feuille de style remplace la feuille existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

Dans *styleObj*, définissez les propriétés de la feuille de style (ex : police, alignement, bordures, etc.). Pour consulter la liste complète des propriétés de style, voir [Propriétés des objets de style](configuring.md#style-object-properties).

Vous pouvez indiquer l'endroit où définir la feuille de style dans le paramètre optionnel *sheet* à l'aide de l'index de la feuille (l'indexation commence à 0) ou à l'aide des constantes suivantes :

- `vk current sheet`
- `vk workbook`

Si une feuille de style *styleName* est définie au niveau du workbook ainsi qu'au niveau de la feuille, le niveau de la feuille est prioritaire sur celui du workbook lorsque la feuille de style est définie.

Pour appliquer la feuille de style, utilisez les commandes [VP SET DEFAULT STYLE](#vp-set-default-style) ou [VP SET CELL STYLE](#vp-set-cell-style).

#### Exemple

Le code suivant :

```4d
$styles:=New object
$styles.backColor:="green"

//Objet Bordure de ligne
$borders:=New object("color";"green";"style";vk line style medium dash dot)

$styles.borderBottom:=$borders
$styles.borderLeft:=$borders
$styles.borderRight:=$borders
$styles.borderTop:=$borders

VP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)

//Pour appliquer le style
VP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))
```

créera et appliquera l'objet de style suivant nommé *GreenDashDotStyle*:

```
{
 backColor:green,
 borderBottom:{color:green,style:10},
 borderLeft:{color:green,style:10},
 borderRight:{color:green,style:10},
 borderTop:{color:green,style:10}
}
```

#### Voir également

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP Get stylesheets](#vp-get-stylesheets)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)

### VP All

<!-- REF #_method_.VP All.Syntax -->

**VP All** ( *vpAreaName* : Text { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP All.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet plage de toutes les cellules                                          |

</div>
<!-- END REF -->

#### Description

La commande `VP ALL` <!-- REF #_method_.VP All.Summary -->retourne une nouvelle plage référençant toutes les cellules<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Exemple

Vous souhaitez définir une plage pour toutes les cellules de la feuille courante :

```4d
$all:=VP All("ViewProArea") // toutes les cellules de la feuille courante
```

#### Voir également

[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)

## C

### VP Cell

<!-- REF #_method_.VP Cell.Syntax -->

**VP Cell** ( *vpAreaName* ; *column* : Integer ; *row* : Integer ; Text { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP Cell.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| column     | Integer | ->                          | Indice de la colonne                                                        |
| row        | Integer | ->                          | Indice de la ligne                                                          |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet plage d'une seule cellule                                             |

</div>
<!-- END REF -->

#### Description

La commande `VP Cell` <!-- REF #_method_.VP Cell.Summary -->retourne une nouvelle plage référençant une cellule spécifique<!-- END REF -->.

> Cette commande s'applique aux plages d'une seule cellule. Pour créer un objet plage pour plusieurs cellules, utilisez la commande [VP Cells](#vp-cells).

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *column* définit la colonne de la position de la plage de cellules. Passez l'indice de la colonne dans ce paramètre.

Le paramètre *row* définit la ligne de la position de la plage de cellules. Passez l'indice de la ligne dans ce paramètre.

Dans le paramètre optionnel *sheet*, vous pouvez indiquer l'index de la feuille où la plage sera définie. Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée par défaut.

> l'indexation démarre à 0.

#### Exemple

Vous souhaitez définir une plage pour la cellule de la feuille courante (sur la feuille courante) :

![vp-cell](../assets/en/ViewPro/cmd_vpCell.png)

Le code est le suivant :

```4d
$cell:=VP Cell("ViewProArea";2;4) // C5
```

#### Voir également

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)

### VP Cells

<!-- REF #_method_.VP Cells.Syntax -->

**VP Cells** ( *vpAreaName* : Text ; *column*: Integer ; *row*: Integer ; *columnCount* : Integer ; *rowCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R4   | Ajout         |

</details>

<!-- REF #_method_.VP Cells.Params -->

<div class="no-index">

| Paramètres  | Type    |                             | Description                                                                 |
| ----------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName  | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| column      | Integer | ->                          | Indice de la colonne                                                        |
| row         | Integer | ->                          | Indice de la ligne                                                          |
| columnCount | Integer | ->                          | Nombre de colonnes                                                          |
| rowCount    | Integer | ->                          | Nombre de lignes                                                            |
| sheet       | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat    | Object  | <- | Objet plage de toutes les cellules                                          |

</div>
<!-- END REF -->

#### Description

La commande `VP Cells` <!-- REF #_method_.VP Cells.Summary -->retourne un nouvel objet de plage référencant des cellules spécifiques<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *column* définit la première colonne de la plage de cellules. Passez l'indice de la colonne (la numérotation commence à zéro) dans ce paramètre. Passez l'indice de la colonne (la numérotation commence à zéro) dans ce paramètre.

Dans le paramètre *row*, vous pouvez définir la ou les lignes de la position de la plage de cellules. Passez l'indice de la ligne (la numérotation commence à zéro) dans ce paramètre. Si la plage se situe sur plusieurs lignes, vous devez également utiliser le paramètre *rowCount*.

Le paramètre *columnCount* vous permet de définir le nombre total de colonnes dans lesquelles se trouve la plage. *columnCount* doit être supérieur à 0.

Le paramètre *rowCount* vous permet de définir le nombre total de lignes dans lesquelles se trouve la plage. *rowCount* doit être supérieur à 0.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée par défaut.

#### Exemple

Vous souhaitez définir un objet plage pour les cellules suivantes (de la feuille courante) :

![](../assets/en/ViewPro/vp-cells.png)

Le code est le suivant :

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // de C5 à D7
```

#### Voir également

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)

### VP Column

<!-- REF #_method_.VP Column.Syntax -->

**VP Column** ( *vpAreaName* : Text ; *column*: Integer ; *columnCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Column.Params -->

<div class="no-index">

| Paramètres  | Type    |                             | Description                                                                 |
| ----------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName  | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| column      | Integer | ->                          | Indice de la colonne                                                        |
| columnCount | Integer | ->                          | Nombre de colonnes                                                          |
| sheet       | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat    | Object  | <- | Objet plage de toutes les cellules                                          |

</div>
<!-- END REF -->

#### Description

La commande `VP Column` <!-- REF #_method_.VP Column.Summary -->retourne un nouvel objet de plage référencant une ou des colonnes spécifiques<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *column* définit la première colonne de la plage de colonnes. Passez l'indice de la colonne (la numérotation commence à zéro) dans ce paramètre. Passez l'indice de la colonne (la numérotation commence à zéro) dans ce paramètre.

Le paramètre optionnel *columnCount* permet de définir le nombre total de colonnes de la plage. *columnCount* doit être supérieur à 0. Si le paramètre est omis, la valeur 1 sera définie par défaut et une plage de type colonne sera créée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée par défaut.

#### Exemple

Vous souhaitez définir une plage pour la colonne ci-dessous (dans la feuille courante) :

![](../assets/en/ViewPro/cmd_vpColumn.PNG)

Le code est le suivant :

```4d
 $column:=VP Column("ViewProArea";3) // colonne D
```

#### Voir également

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)

### VP COLUMN AUTOFIT

<!-- REF #_method_.VP COLUMN AUTOFIT.Syntax -->

**VP COLUMN AUTOFIT** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP COLUMN AUTOFIT.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

</div>
<!-- END REF -->

#### Description

La commande `VP COLUMN AUTOFIT` <!-- REF #_method_.VP COLUMN AUTOFIT.Summary -->dimensionne automatiquement les colonnes dans *rangeObj* en fonction de leur contenu<!-- END REF -->.

Dans *rangeObj*, passez un objet plage contenant une plage de colonnes dont la taille doit être gérée automatiquement.

#### Exemple

Les colonnes suivantes sont toutes de la même taille et n'affichent pas certaines parties du texte :

![](../assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

La sélection des colonnes et l'exécution du code suivant :

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

... redimensionne les colonnes pour correspondre à la taille du contenu :

![](../assets/en/ViewPro/cmd_vpColumnAutoFit2.PNG)

#### Voir également

[VP ROW AUTOFIT](#vp-row-autofit)

### VP Combine ranges

<!-- REF #_method_.VP Combine ranges.Syntax -->

**VP Combine ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {;...*otherRangeObjN* : Object }  ) : Object<!-- END REF -->

<!-- REF #_method_.VP Combine ranges.Params -->

<div class="no-index">

| Paramètres    | Type   |                             | Description                        |
| ------------- | ------ | --------------------------- | ---------------------------------- |
| rangeObj      | Object | ->                          | Objet plage                        |
| otherRangeObj | Object | ->                          | Objet plage                        |
| Résultat      | Object | <- | Objet contenant une plage combinée |

</div>
<!-- END REF -->

#### Description

La commande `VP Combine Ranges` <!-- REF #_method_.VP Combine ranges.Summary -->retourne un nouvel objet de plage qui incorpore deux ou plusieurs objets de plage existants<!-- END REF -->. Toutes les plages doivent provenir de la même zone 4D View Pro.

Dans *rangeObj*, passez le premier objet de plage.

Dans *otherRangeObj*, passez un ou plusieurs autres objets de plage à combiner avec *rangeObj*.

> La commande incorpore les objets *rangeObj* et *otherRangeObj* par référence.

#### Exemple

Vous souhaitez combiner des plages de type cellule, colonne et ligne dans une nouvelle plage distincte :

```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // colonne D
 $row:=VP Row("ViewProArea";9) // ligne 10

 $combine:=VP Combine ranges($cell;$column;$row)
```

#### Voir également

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)

### VP Convert from 4D View

<!-- REF #_method_.VP Convert from 4D View.Syntax -->

**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->

<!-- REF #_method_.VP Convert from 4D View.Params -->

<div class="no-index">

| Paramètres     | Type   |                             | Description       |
| -------------- | ------ | --------------------------- | ----------------- |
| 4DViewDocument | Blob   | ->                          | Document 4D View  |
| Résultat       | Object | <- | Objet 4D View Pro |

</div>
<!-- END REF -->

#### Description

La commande `VP Convert from 4D View` <!-- REF #_method_.VP Convert from 4D View.Summary -->vous permet de convertir un document 4D View legacy en un objet 4D View Pro<!-- END REF -->.

> Cette commande ne nécessite pas l'installation du plug-in 4D View dans votre environnement.

Dans le paramètre *4DViewDocument*, passez une variable ou un champ BLOB contenant le document 4D View à convertir. La commande retourne un objet 4D View Pro dans lequel toutes les informations stockées à l'origine dans le document 4D View sont converties en attributs 4D View Pro.

#### Exemple

Vous souhaitez obtenir un objet 4D View Pro à partir d'une zone 4D View stockée dans un BLOB :

```4d
var $vpObj : Object
$vpObj:=VP Convert from 4D View($pvblob)
```

### VP Convert to picture

<!-- REF #_method_.VP Convert to picture.Syntax -->

**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->

<!-- REF #_method_.VP Convert to picture.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                     |
| ---------- | ------- | --------------------------- | ----------------------------------------------- |
| vpObject   | Object  | ->                          | Objet 4D View Pro contenant la zone à convertir |
| rangeObj   | Object  | ->                          | Objet plage                                     |
| Résultat   | Picture | <- | Image SVG de la zone                            |

</div>
<!-- END REF -->

#### Description

La commande `VP Convert to picture` <!-- REF #_method_.VP Convert to picture.Summary -->convertit l'objet 4D View Pro *vpObject* (ou la plage *rangeObj* dans *vpObject*) en une image SVG<!-- END REF -->.

Cette commande est utile, par exemple :

- pour intégrer un document 4D View Pro dans un autre document, tel qu'un document 4D Write Pro
- pour imprimer un document 4D View Pro sans le charger dans une zone 4D View Pro.

Dans *vpObject*, passez l'objet 4D View Pro que vous souhaitez convertir. Cet objet doit avoir été préalablement analysé à l'aide de [VP Export to object](#vp-export-to-object) ou enregistré avec [VP EXPORT DOCUMENT](#vp-export-document).

> Le processus de conversion SVG exige que les expressions et les formats (cf. [Format des cellules](configuring.md#cell-format)) inclus dans la zone 4D View Pro soient évalués au moins une fois, afin qu'ils puissent être correctement exportés. Si vous convertissez un document qui n'a pas été évalué au préalable, les expressions ou les formats peuvent être rendus de manière inattendue.

Dans *rangeObj*, passez une plage de cellules à convertir. Par défaut, si ce paramètre est omis, tout le contenu du document est converti.

Les contenus de document sont convertis en tenant compte de leurs attributs d'affichage, y compris les formats (voir la note ci-dessus), la visibilité des en-têtes, des colonnes et des lignes. La conversion des éléments suivants est prise en charge :

- Texte : style / police / taille / alignement / rotation / format
- Arrière-plan de cellule : couleur / image
- Bordure de cellule : épaisseur / couleur / style
- Fusion de cellules
- Images
- Hauteur de lignes
- Largeur de colonnes
- Visibilité : colonnes / lignes cachées.

> La visibilité du quadrillage dépend de l'attribut du document défini avec [VP SET PRINT INFO](#vp-set-print-info).

#### Résultat de la fonction

La commande retourne une image au format SVG.

#### Exemple

Vous souhaitez convertir une zone 4D View Pro en SVG, prévisualiser le résultat et l'envoyer dans une variable image :

```4d
var $vpAreaObj : Object
var $vPict : Picture
$vpAreaObj:=VP Export to object("ViewProArea")
$vPict:=VP Convert to picture($vpAreaObj) //exporter l'ensemble de la zone
```

#### Voir également

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP Export to object](#vp-export-to-object)<br/>[VP SET PRINT INFO](#vp-set-print-info)

### VP Copy to object

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

<!-- REF #_method_.VP Copy to object.Syntax -->

**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Copy to object.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------ |
| rangeObj   | Object | ->                          | Objet plage                                                  |
| options    | Object | ->                          | Options supplémentaires                                      |
| Résultat   | Object | <- | Objet retourné. Contient les données copiées |

</div>
<!-- END REF -->

#### Description

La commande `VP Copy to object` <!-- REF #_method_.VP Copy to object.Summary -->copie le contenu, le style et les formules de *rangeObj* vers un objet<!-- END REF -->.

Dans *rangeObj*, passez la plage de cellules contenant les valeurs, formatages et formules à copier. Si *rangeObj* est une plage combinée, seule la première est utilisée.

Vous pouvez passer un paramètre facultatif *options* contenant les propriétés suivantes :

| Propriété   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| copy        | Boolean | *Vrai* (par défaut) pour conserver les valeurs copiées, le formatage et les formules après l'exécution de la commande. *Faux* pour les supprimer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| copyOptions | Integer | Spécifie ce qui est copié ou déplacé. Spécifie ce qui est copié ou déplacé.Valeurs possibles :<p><table><tr><th>Valeur</th><th>Description</th></tr><tr><td>`vk clipboard options all` (par défaut)</td><td>Copie tous les objets de données, y compris les valeurs, la mise en forme et les formules.</td></tr><tr><td>`vk clipboard options formatting` (options du presse-papier)</td><td>Copie uniquement la mise en forme.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Copie uniquement les formules.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Copie les formules et la mise en forme.</td></tr><tr><td>`vk clipboard options values`</td><td>Copie uniquement les valeurs.</td></tr><tr><td>`vk clipboard options value and formatting` </td><td>Copie les valeurs et la mise en forme.</td> |

Les options de collage définies dans [workbook options](#vp-set-workbook-options) sont prises en compte.

La commande retourne un objet qui contient les données copiées.

#### Exemple

Cet exemple de code copie d'abord le contenu, valeurs, formats et formules d'une plage dans un objet puis les colle dans une autre plage :

```4d
var $originRange; $targetRange; $dataObject; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.copyOptions:=vk clipboard options all

$dataObject:=VP Copy to object($originRange; $options)

$targetRange:=VP Cell("ViewProArea"; 4; 0)
VP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)
```

#### Voir également

[VP PASTE FROM OBJECT](#vp-paste-from-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

### VP CREATE TABLE

<details><summary>Historique</summary>

| Release | Modifications                                                                                                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 19 R8   | Prise en charge des options de thème : `bandColumns`, `bandRows`, `highlightFirstColumn`, `highlightLastColumn`, `theme` |
| 19 R7   | Support de l'option `allowAutoExpand`                                                                                                    |
| 19 R6   | Ajout                                                                                                                                    |

</details>

<!-- REF #_method_.VP CREATE TABLE.Syntax -->

**VP CREATE TABLE** ( *rangeObj* : Object ; *tableName* : Text {; *source* : Text} {; *options* : cs.ViewPro.TableOptions} )<!-- END REF -->

<!-- REF #_method_.VP CREATE TABLE.Params -->

<div class="no-index">

| Paramètres | Type                                                                               |    | Description                                                  |
| ---------- | ---------------------------------------------------------------------------------- | -- | ------------------------------------------------------------ |
| rangeObj   | Object                                                                             | -> | Objet plage                                                  |
| tableName  | Text                                                                               | -> | Nom de la table                                              |
| source     | Text                                                                               | -> | Nom de la propriété du Data context à afficher dans la table |
| options    | [cs.ViewPro.TableOptions](classes.md#tableoptions) | -> | Options supplémentaires                                      |

</div>
<!-- END REF -->

#### Description

La commande `VP CREATE TABLE` <!-- REF #_method_.VP CREATE TABLE.Summary -->crée une table dans la plage spécifiée<!-- END REF -->. Vous pouvez créer une table dans une plage de cellules pour faciliter la gestion et l'analyse d'un groupe de données connexes. Une table contient généralement des données connexes en lignes et en colonnes, et tire parti d'un [contexte de données](#vp-set-data-context).

![](../assets/en/ViewPro/vp-create-table.png)

Dans *rangeObj*, passez la plage de cellules où la table sera créée.

Dans *tableName*, passez un nom pour la table. Le nom doit :

- être unique dans la feuille
- inclure au moins 5 caractères
- ne pas inclure d'espaces ou commencer par un nombre

Dans *source*, vous pouvez passer un nom de propriété d'un [data context] (#vp-set-data-context) pour afficher ses données dans le tableau. Cela relie la table au contexte de données. Lorsque le contexte de données est mis à jour, les données affichées dans la table sont mises à jour en conséquence. La propriété *source* doit contenir une collection d'objets et chaque élément représente une ligne.

- Si vous ne spécifiez pas de *source*, la commande crée une table vide avec la taille définie dans *rangeObj*.
- Si la *source* spécifiée ne peut pas être entièrement affichée dans le document, aucune table n'est créée.

Dans le paramètre *options*, passez un objet de la [classe`cs.ViewPro.TableOptions`](classes.md#tableoptions) qui contient les propriétés de la table à définir.

Dans l'objet *options*, la collection *tableColumns* détermine la structure des colonnes de la table. La longueur de la collection *tableColumns* doit être égale au nombre de colonnes de la plage :

- Lorsque le nombre de colonnes dans *rangeObj* dépasse le nombre de colonnes dans *tableColumns*, la table est remplie avec des colonnes vides supplémentaires.
- Lorsque le nombre de colonnes dans *rangeObj* est inférieur au nombre de *tableColumns*, le tableau affiche un nombre de colonnes correspondant au nombre de colonnes de la plage.

Si vous passez une option *source* mais pas une option *tableColumn*, la commande génère automatiquement des colonnes. Dans ce cas, *rangeObj* doit être une plage de cellules. Sinon, la première cellule de la plage est utilisée. Lors de la génération automatique de colonnes, les règles suivantes s'appliquent :

- Si les données passées à la commande sont une collection d'objets, les noms de propriétés sont utilisés comme titres de colonnes. Par exemple :

```4d
([{ LastName: \"Freehafer\", FirstName: \"Nancy\"},{ LastName: \"John\", FirstName: \"Doe\"})
```

Ici, les titres des colonnes seraient `LastName` et `FirstName`.

- Si les données passées à la commande sont une collection de valeurs scalaires, elle doit contenir une collection de sous-collections :

  - La collection de premier niveau contient des sous-collections de valeurs. Chaque sous-collection définit une ligne. Passez une collection vide pour sauter une ligne. Le nombre de valeurs dans la première sous-collection détermine le nombre de colonnes créées.
  - Les indices des sous-collections sont utilisés comme titres de colonnes.
  - Chaque sous-collection définit les valeurs des cellules de la ligne. Les valeurs peuvent être `Integer`, `Real`, `Boolean`, `Text`, `Date`, `Null`, `Time` ou `Picture`. Une valeur `Time` doit être un objet contenant un attribut time, comme décrit dans [VP SET VALUE](#vp-set-value).

> Cela ne fonctionne que lors de la génération automatique de colonnes. Vous ne pouvez pas utiliser une collection de données scalaires avec l'option *tableColumns*.

#### Exemple

Pour créer une table en utilisant un contexte de données :

```4d
// Définition du contexte de données
var $data : Object

$data:=New object()
$data.people:=New collection()
$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))
$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))


VP SET DATA CONTEXT("ViewProArea"; $data)

// Définitions des colonnes de la table
var $options : cs.ViewPro.TableOptions

$options:=cs.ViewPro.TableOptions.new()
$options.tableColumns:=New collection()
$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "First name"; "dataField"; "firstName"))
$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "Last name"; "dataField"; "lastName"))
$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "Email"; "dataField"; "email"))

// Création d'une table à partir de la collection "people"
VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)
```

Voici le résultat :

![](../assets/en/ViewPro/vp-create-table.png)

#### Voir également

[VP Find table](#vp-find-table)<br/>[VP Get table column attributes](#vp-get-table-column-attributes)<br/>[VP Get table column index](#vp-get-table-column-index)<br/>[VP INSERT TABLE COLUMNS](#vp-insert-table-columns)<br/>[VP INSERT TABLE ROWS](#vp-insert-table-rows)<br/>[VP REMOVE TABLE](#vp-remove-table)<br/>[VP RESIZE TABLE](#vp-resize-table)<br/>[VP SET DATA CONTEXT](#vp-set-data-context)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)<br/>[VP SET TABLE THEME](#vp-set-table-theme)

## D

### VP DELETE COLUMNS

<!-- REF #_method_.VP DELETE COLUMNS.Syntax -->

**VP DELETE COLUMNS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE COLUMNS.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

</div>
<!-- END REF -->

#### Description

La commande `VP DELETE COLUMNS` <!-- REF #_method_.VP DELETE COLUMNS.Summary -->supprime les colonnes de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de colonnes à supprimer. Si la plage qui est passée contient :

- des lignes et des colonnes, seules les colonnes sont supprimées.
- uniquement des lignes, la commande ne fait rien.

> Les colonnes sont supprimées de droite à gauche.

#### Exemple

Pour supprimer les colonnes sélectionnées par l'utilisateur (colonnes B, C et D de l'image ci-dessous) :

![](../assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

saisissez le code suivant :

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

#### Voir également

[VP All](#vp-delete-rows)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)

### VP DELETE ROWS

<!-- REF #_method_.VP DELETE ROWS.Syntax -->

**VP DELETE ROWS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE ROWS.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

</div>
<!-- END REF -->

#### Description

La commande `VP DELETE ROWS` <!-- REF #_method_.VP DELETE ROWS.Summary -->supprime les lignes de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de lignes à supprimer. Si la plage qui est passée contient :

- des lignes et des colonnes, seules les lignes sont supprimées.
- uniquement des colonnes, la commande ne fait rien.

> Les lignes sont supprimées du bas vers le haut.

#### Exemple

Pour supprimer les lignes sélectionnées par l'utilisateur (lignes 1, 2 et 3 de l'image ci-dessous) :

![](../assets/en/ViewPro/cmd_vpDeleteRows.PNG)

saisissez le code suivant :

```4d

 VP DELETE ROWS(VP Get selection("ViewProArea"))
```

#### Voir également

[VP All](#vp-delete-columns)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)

## E

### VP EXPORT DOCUMENT

<!-- REF #_method_.VP EXPORT DOCUMENT.Syntax -->

**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->

<!-- REF #_method_.VP EXPORT DOCUMENT.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| filePath   | Text   | -> | Chemin d'accès du document              |
| paramObj   | Object | -> | Options d'export                        |

</div>
<!-- END REF -->

#### Description

La commande `VP EXPORT DOCUMENT` <!-- REF #_method_.VP EXPORT DOCUMENT.Summary -->exporte l'objet 4D View Pro attaché à la zone 4D View Pro *vpAreaName* vers un document sur disque en fonction des paramètres *filePath* et *paramObj*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *filePath*, passez le chemin de destination et le nom du document à exporter. Si vous ne spécifiez pas de chemin, le document sera sauvegardé au même niveau que le dossier Projet.

Vous pouvez préciser le format du document en incluant une extension après son nom :

- 4D View Pro (".4vp")
- Microsoft Excel (".xlsx")
- PDF (".pdf")
- CSV (".txt", or ".csv")

Si l'extension n'est pas incluse, mais que le format est spécifié dans *paramObj*, le fichier exporté aura l'extension correspondant au format, sauf pour le format CSV (aucune extension n'est ajoutée dans ce cas).

Le paramètre optionnel *paramObj* vous permet de définir plusieurs propriétés pour l'objet 4D View Pro exporté, ainsi que lancer une méthode de callback lorsque l'exportation est terminée.

| Propriété            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format               | text    | (optionnel) Désigne le format du fichier exporté : ".4vp" (par défaut), ".xlsx", ".pdf", ".csv" ou ".txt". You can use the following constants:<li>`vk 4D View Pro format`</li><li>`vk csv format`</li><li>`vk MS Excel format`</li><li>`vk pdf format`</li>4D adds the appropriate extension to the file name if needed. Si le format défini ne correspond pas à l'extension dans *filePath*, il sera ajouté à la fin de *filePath*. Si aucun format n'est spécifié et qu'aucune extension n'est indiquée dans *filePath*, le format de fichier par défaut est utilisé.                 |
| password             | text    | Microsoft Excel uniquement (optionnel) - Mot de passe utilisé pour protéger le document MS Excel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| formula              | object  | Méthode callback à lancer lorsque l'export est terminé. L'utilisation d'une méthode callback est nécessaire lorsque l'export est asynchrone (ce qui est le cas pour les formats PDF et Excel) si vous avez besoin d'un code à exécuter après l'export. The callback method must be used with the [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) command (see below for more information).                                                                                                                                                                                                                                                                                                           |
| valuesOnly           | boolean | Précise que seules les valeurs issues de formules (le cas échéant) seront exportées.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| includeFormatInfo    | boolean | True pour inclure les informations de formatage, sinon False (True par défaut). Les informations de formatage sont utiles dans certains cas, par exemple pour un export en SVG. D'un autre côté, mettre cette propriété à **False** permet de réduire la durée de l'export.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| includeBindingSource | Boolean | 4DVP et Microsoft Excel uniquement. True (par défaut) pour exporter les valeurs du contexte de données courant en tant que valeurs de cellule dans le document exporté (les contextes de données eux-mêmes ne sont pas exportés). Sinon Faux. La liaison de cellule est toujours exportée. For data context and cell binding management, see [VP SET DATA CONTEXT](#vp-set-data-context) and [VP SET BINDING PATH](#vp-set-binding-path).                                                                                                                                                                                                                                                |
| sheetIndex           | number  | PDF uniquement (optionnel) - Numéro de la feuille à exporter (débute à 0). -2=toutes les feuilles visibles (**par défaut**), -1=feuille courante uniquement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| pdfOptions           | object  | PDF only (optional) - Options for pdf export <p><table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>creator</td><td>text</td><td>name of the application that created the original document from which it was converted.</td></tr><tr><td>title</td><td>text</td><td>title of the document.</td></tr><tr><td>author</td><td>text</td><td>name of the person who created that document.</td></tr><tr><td>keywords</td><td>text</td><td>keywords associated with the document.</td></tr><tr><td>subject</td><td>text</td><td>subject of the document.</td></tr><tr><td>`vk clipboard options value and formatting` </td><td>Copie les valeurs et la mise en forme.</td> |
| csvOptions           | object  | CSV only (optional) - Options for csv export <p><table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>range</td><td>object</td><td>Range object of cells</td></tr><tr><td>rowDelimiter</td><td>text</td><td>Row delimiter. Default: "\r\n"</td></tr><tr><td>columnDelimiter</td><td>text</td><td>Column delimiter. Default: ","</td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                   |
| `\<customProperty>` | any     | Propriété personnalisée qui sera disponible via le paramètre $3 dans la méthode de callback.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

**Notes sur le format Excel** :

- Lors de l'export d'un document 4D View Pro en un fichier au format Microsoft Excel, certains paramètres peuvent être perdus. Par exemple, les méthodes et formules 4D ne sont pas prises en charge par Excel. You can verify other settings with [this list from GrapeCity](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html).
- Exporting in this format is run asynchronously, use the *formula* property of the *paramObj* for code to be executed after the export.

**Notes sur le format PDF** :

- Lors de l'export d'un document 4D View Pro en un fichier au format PDF, les polices utilisées dans le document sont automatiquement intégrées dans le fichier PDF. Seules les polices OpenType (fichiers .OTF ou .TTF) ayant une table Unicode peuvent être intégrées. Si aucun fichier de polices valide n'est trouvé pour une police, une police par défaut est utilisée à sa place.
- Exporting in this format is run asynchronously, use the *formula* property of the *paramObj* for code to be executed after the export.

**Notes sur le format CSV** :

- Lors de l'export d'un document 4D View Pro en un fichier au format PDF, certains paramètres peuvent être perdus, car seuls le texte et les valeurs sont sauvegardés.
- Toutes les valeurs sont enregistrées sous la forme de chaînes entre guillemets. Pour plus d'informations sur les valeurs séparées par des délimiteurs, voir [cet article sur Wikipédia](https://en.wikipedia.org/wiki/Delimiter-separated_values).

Une fois l'opération d'exportation terminée, `VP EXPORT DOCUMENT` déclenche automatiquement l'exécution de la méthode définie dans la propriété *formula* de *paramObj*, si elle est utilisée.

#### Passer une méthode callback (formula)

When including the optional *paramObj* parameter, the `VP EXPORT DOCUMENT` command allows you to use the [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) command to call a 4D method which will be executed once the export has completed. La méthode callback recevra les valeurs suivantes dans des variables locales :

| Variable |                               | Type    | Description                                                                                |
| -------- | ----------------------------- | ------- | ------------------------------------------------------------------------------------------ |
| $1       |                               | text    | Nom de l'objet 4D View Pro                                                                 |
| $2       |                               | text    | Chemin d'accès de l'objet 4D View Pro exporté                                              |
| $3       |                               | object  | Une référence au *paramObj* de la commande                                                 |
| $4       |                               | object  | Objet retourné par la méthode avec un message de statut                                    |
|          | .success      | boolean | Vrai si l'export est réussi, Faux sinon.                                   |
|          | .errorCode    | integer | Code d'erreur. Peut être retourné par 4D ou JavaScript.    |
|          | .errorMessage | text    | Message d'erreur. Peut être retourné par 4D ou JavaScript. |

#### Exemple 1

Vous souhaitez exporter le contenu de la zone "VPArea" vers un document 4D View Pro sur le disque :

```4d
var $docPath: Text

$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
VP EXPORT DOCUMENT("VPArea";$docPath)
//MyExport.4VP est sauvegardé sur votre disque
```

#### Exemple 2

Vous souhaitez exporter la feuille courante au format PDF :

```4d
var $params: Object
$params:=New object
$params.format:=vk pdf format
$params.sheetIndex:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```

#### Exemple 3

Vous souhaitez exporter un document 4D View Pro au format ".xlsx" et appeler une méthode qui lance Microsoft Excel avec le document ouvert une fois que l'export est terminé :

```4d
 $params:=New object
 $params.formula:=Formula(AfterExport)
 $params.format:=vk MS Excel format //".xlsx"
 $params.valuesOnly:=True

 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile";$params)
```

Méthode ***AfterExport*** :

```4d
 C_TEXT($1;$2)
 C_OBJECT($3;$4)
 $areaName:=$1
 $filePath:=$2
 $params:=$3
 $status:=$4

 If($status.success=False)
    ALERT($status.errorMessage)
 Else
    LAUNCH EXTERNAL PROCESS("C:\\Program Files\\Microsoft Office\\Office15\\excel "+$filePath)
 End if
```

#### Exemple 4

Vous souhaitez exporter la feuille courante dans un fichier `.txt` avec des valeurs séparées par des "|" :

![example-export-csv](../assets/en/ViewPro/vp-export-document-csv.png)

```4d
var $params : Object
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
$params.rowDelimiter:="\n"
$params.columnDelimiter:="|"
VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\data.txt";New object("format";vk csv format;"csvOptions";$params))
```

Voici le résultat :

![example-export-csv](../assets/en/ViewPro/vp-export-document-csv-result.png)

#### Voir également

[VP Convert to picture](#vp-convert-to-picture)<br/>[VP Export to object](#vp-export-to-object)<br/>[VP Column](#vp-import-document)<br/>[VP Print](#vp-print)

### VP Export to object

<!-- REF #_method_.VP Export to object.Syntax -->

**VP Export to object** ( *vpAreaName* : Text {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Export to object.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                             |
| ---------- | ------ | --------------------------- | --------------------------------------- |
| vpAreaName | Text   | ->                          | Nom d'objet formulaire zone 4D View Pro |
| options    | Object | ->                          | Options d'export                        |
| Résultat   | Object | <- | Objet 4D View Pro                       |

</div>
<!-- END REF -->

#### Description

La commande `VP Export to object` <!-- REF #_method_.VP Export to object.Summary --> retourne l'objet 4D View Pro attaché à la zone 4D View Pro *vpAreaName*<!-- END REF -->. .

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre *options*, vous pouvez passer les options d'exportation suivantes, si nécessaire :

| Propriété            | Type    | Description                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeFormatInfo    | Boolean | True (défaut) pour inclure les informations de formatage, sinon False. Les informations de formatage sont utiles dans certains cas, par exemple pour un export en SVG. D'un autre côté, mettre cette propriété à <strong x-id="1">false</strong> permet de réduire la durée de l'export. |
| includeBindingSource | Boolean | True (par défaut) pour exporter les valeurs du contexte de données courant en tant que valeurs de cellule dans l'objet exporté (les contextes de données eux-mêmes ne sont pas exportés). Sinon Faux. La liaison de cellule est toujours exportée.                    |

For more information on 4D View Pro objects, please refer to the [4D View Pro object](configuring.md#4d-view-pro-object) paragraph.

#### Exemple 1

Vous souhaitez lire la propriété "version" de la zone 4D View Pro courante :

```4d
var $vpAreaObj : Object
var $vpVersion : Number
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```

#### Exemple 2

Vous souhaitez exporter la zone, en excluant les informations de formatage :

```4d
var $vpObj : Object
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```

#### Voir également

[VP Convert to picture](#vp-convert-to-picture)<br/>[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP IMPORT FROM OBJECT](#vp-import-from-object)

## F

### VP Find

<!-- REF #_method_.VP Find.Syntax -->

**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Find.Params -->

<div class="no-index">

| Paramètres      | Type   |                             | Description                                                         |
| --------------- | ------ | --------------------------- | ------------------------------------------------------------------- |
| rangeObj        | Object | ->                          | Objet plage                                                         |
| searchValue     | Text   | ->                          | Valeur de recherche                                                 |
| searchCondition | Object | ->                          | Objet contenant la/les condition(s) de recherche |
| replaceValue    | Text   | ->                          | Valeur de remplacement                                              |
| Résultat        | Object | <- | Objet plage                                                         |

</div>
<!-- END REF -->

#### Description

La commande `VP Find` <!-- REF #_method_.VP Find.Summary -->recherche le paramètre *rangeObj* pour la *searchValue*<!-- END REF -->. Des paramètres facultatifs peuvent être utilisés pour affiner la recherche et/ou remplacer les résultats trouvés.

Dans le paramètre *rangeObj*, passez un objet contenant une plage à rechercher.

Le paramètre *searchValue* vous permet de passer le texte à rechercher dans *rangeObj*.

Vous pouvez passer le paramètre optionnel *searchCondition* pour préciser la manière dont la recherche est effectuée. Les propriétés suivantes sont prises en charge :

| Propriété   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| afterColumn | Integer | Le numéro de la colonne située juste avant la colonne de départ de la recherche. Si *rangeObj* est une plage combinée, le numéro de colonne indiqué doit provenir de la première plage. Valeur par défaut : -1 (début de *rangeObj*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| afterRow    | Integer | Le numéro de la colonne située juste avant la colonne de départ de la recherche. Le numéro de la colonne située juste avant la colonne de départ de la recherche. Valeur par défaut : -1 (début de *rangeObj*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| all         | Boolean | <li>True - Toutes les cellules de *rangeObj* correspondant à *searchValue* sont renvoyées</li><li>False - (valeur par défaut) Seule la première cellule de *rangeObj* correspondant à *searchValue* est renvoyée</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| flags       | Integer | <table><tr><td>`vk find flag exact match`</td><td>Le contenu entier de la cellule doit correspondre exactement à la valeur recherchée</td></tr><tr><td>`vk find flag ignore case`</td><td>Les majuscules et les minuscules sont considérées comme identiques. <table><tr><td>`vk find flag exact match`</td><td>The entire content of the cell must completely match the search value</td></tr><tr><td>`vk find flag ignore case`</td><td>Capital and lower-case letters are considered the same.Ex : "a" est la même chose que "A".</td> peuvent être utilisé dans la chaîne de recherche. Les caractères joker peuvent être utilisés dans toute comparaison de chaînes de caractères pour correspondre à un nombre quelconque de caractères :<li>* pour zéro ou plusieurs caractères (par exemple, la recherche de « bl* » permet de trouver « bl », « black » ou « blob »)</li><li>? pour un seul caractère (par exemple, une recherche sur « h?t » permet de trouver « hot » ou « hit »</li></td></tr></table>Ces options peuvent être combinées. Par exemple: <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code> |
| order       | Integer | <table><tr><td>`vk find order by columns`</td><td>La recherche s'effectue par colonnes. <table><tr><td>`vk find order by columns`</td><td>The search is performed by columns.Chaque ligne d'une colonne est recherchée avant que la recherche ne passe à la colonne suivante.</td> Chaque colonne d'une ligne est parcourue avant que la recherche ne passe à la ligne suivante (par défaut)</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| target      | Integer | <table><tr><td>`vk find target formula`</td><td>La recherche est effectuée dans la formule de cellule</td></tr><tr><td>`vk find target tag`</td><td>La recherche est effectuée dans la balise de cellule</td></tr><tr><td> `vk find target text`</td><td>La recherche est effectuée dans le texte de la cellule (défaut)</td></tr></table><p>Ces options peuvent être combinées. Par exemple ::<code>$search.target:=vk find target formula+vk find target text</code></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

Dans le paramètre optionnel *replaceValue*, vous pouvez passer du texte pour remplacer toute instance du texte dans la *searchValue* trouvée dans *rangeObj*.

#### Objet retourné

La fonction retourne un objet de plage décrivant chaque valeur de recherche trouvée ou remplacée. Un objet de plage vide est retourné si aucun résultat n'est trouvé.

#### Exemple 1

Pour trouver la première cellule contenant le mot "Total" :

```4d
var $range;$result : Object

$range:=VP All("ViewProArea")

$result:=VP Find($range;"Total")
```

#### Exemple 2

Pour trouver "Total" et le remplacer par "Grand Total" :

```4d
var $range;$condition;$result : Object

$range:=VP All("ViewProArea")

$condition:=New object
$condition.target:=vk find target text
$condition.all:=True //Search entire document
$condition.flags:=vk find flag exact match

$result:=VP Find($range;"Total";$condition;"Grand Total")

  // Check for empty range object
If($result.ranges.length=0)
    ALERT("No result found")
Else
    ALERT($result.ranges.length+" results found")
End if
```

### VP Find table

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Find table.Syntax -->

**VP Find table** ( *rangeObj* : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Find table.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description      |
| ---------- | ------ | --------------------------- | ---------------- |
| rangeObj   | Object | ->                          | Plage de cellule |
| Résultat   | Text   | <- | Nom de table     |

</div>
<!-- END REF -->

#### Description

La commande `VP Find table` <!-- REF #_method_.VP Find table. ummary -->retourne le nom de la table à laquelle appartient la cellule *rangeObj* <!-- END REF -->.

Dans *rangeObj*, passez un objet de plage de cellules. Si les cellules désignées n'appartiennent pas à une table, la commande retourne une chaîne vide.

Si *rangeObj* n'est pas une plage de cellules ou contient plusieurs plages, la première cellule de la première plage est utilisée.

#### Exemple

```4d
If (FORM Event.code=On After Edit && FORM Event.action="valueChanged")
     $tableName:=VP Find table(FORM Event.range)
     If ($tableName#"")
         ALERT("The "+$tableName+" table has been modified.")
     End if
End if
```

#### Voir également

[VP Get table range](#vp-get-table-range)

### VP FLUSH COMMANDS

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->

**VP FLUSH COMMANDS** (  *vpAreaName* : Text )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

<div class="no-index">

| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro |

</div>
<!-- END REF -->

#### Description

La commande `VP FLUSH COMMANDS` <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->exécute immédiatement les commandes stockées et vide le buffer de commandes<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Afin d'améliorer la performance et de réduire le nombre de requêtes envoyées, les commandes 4D View Pro appelées par le développeur sont stockées temporairement dans un buffer de commandes. Lorsqu'il est appelé, `VP FLUSH COMMANDS` exécute les commandes comme un lot en quittant la méthode et vide le contenu du buffer de commandes.

#### Exemple

Vous souhaitez tracer l'exécution des commandes et vider le buffer :

```4d

 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

 VP FLUSH COMMANDS("ViewProArea1")
 TRACE
```

### VP Font to object

<!-- REF #_method_.VP Font to object.Syntax -->

**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Font to object.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                                                        |
| ---------- | ------ | --------------------------- | ---------------------------------------------------------------------------------- |
| font       | Text   | ->                          | Chaîne raccourcie pour la police (shorthand)                    |
| Résultat   | Object | <- | <strong x-id="1">Notes sur le format de fichier SpreadJS</strong>: |

</div>
<!-- END REF -->

#### Description

La commande utilitaire `VP Font to object` <!-- REF #_method_.VP Font to object.Summary -->retourne un objet à partir d'une chaîne de raccourci de police<!-- END REF -->. .

Dans le paramètre *font*, passez une chaîne de caractères abrégée pour spécifier les différentes propriétés d'une police (par exemple, "12 pt Arial"). Vous pouvez en savoir plus sur les chaînes de caractères [dans cette page](https://www.w3schools.com/cssref/pr_font_font.asp) par exemple.

L'objet retourné contient les attributs de police définis comme propriétés. For more information about the available properties, see the [VP Object to font](#vp-object-to-font) command.

#### Exemple 1

Le code suivant :

```4d
$font:=VP Font to object("16pt arial")
```

retournera l'objet $font suivant :

```4d
{

family:arial
size:16pt
}
```

#### Exemple 2

See example for [`VP Object to font`](#vp-object-to-font).

#### Voir également

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)

## G

### VP Get active cell

<!-- REF #_method_.VP Get active cell.Syntax -->

**VP Get active cell** (  *vpAreaName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get active cell.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet plage d'une seule cellule                                             |

</div>
<!-- END REF -->

#### Description

La commande `VP Get active cell` <!-- REF #_method_.VP Get active cell.Summary -->retourne un nouvel objet de plage référençant la cellule qui a le focus et où de nouvelles données seront entrées (la cellule active)<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Exemple

![](../assets/en/ViewPro/cmd_vpGetActiveCell.PNG)

Le code suivant récupèrera les coordonnées de la cellule active :

```4d
$activeCell:=VP Get active cell("myVPArea")

  //retourne un objet de plage contenant :
  //$activeCell.ranges[0].column=3
  //$activeCell.ranges[0].row=4
  //$activeCell.ranges[0].sheet=0
```

#### Voir également

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP Get binding path

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #_method_.VP Get binding path.Syntax -->

**VP Get binding path** ( *rangeObj* : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get binding path.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                            |
| ---------- | ------ | --------------------------- | -------------------------------------- |
| rangeObj   | Object | ->                          | Objet plage                            |
| Résultat   | Text   | <- | Nom de l'attribut associé à la cellule |

</div>
<!-- END REF -->

#### Description

La commande `VP Get binding path` <!-- REF #_method_.VP Get binding path.Summary -->retourne le nom de l'attribut lié à la cellule spécifiée dans *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet qui est soit une plage de cellules, soit une plage combinée de cellules. A noter que :

- Si *rangeObj* est une plage avec plusieurs cellules, la commande retourne le nom de l'attribut lié à la première cellule de l'intervalle.
- Si *rangeObj* contient plusieurs plages de cellules, la commande retourne le nom de l'attribut lié à la première cellule de la première plage.

#### Exemple

```4d
var $p; $options : Object
var $myAttribute : Text

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $p)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

$myAttribute:=VP Get binding path(VP Cell("ViewProArea"; 1; 0)) // "lastName"
```

#### Voir également

[VP SET BINDING PATH](#vp-set-binding-path)<br/>[VP Get data context](#vp-get-data-context)<br/>[VP SET DATA CONTEXT](#vp-get-data-context)

### VP Get cell style

<!-- REF #_method_.VP Get cell style.Syntax -->

**VP Get cell style** (  *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get cell style.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                                                    |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------------ |
| rangeObj   | Object | ->                          | Objet plage                                                                    |
| Résultat   | Object | <- | Le nom de la troisième feuille est "Total premier trimestre" : |

</div>
<!-- END REF -->

#### Description

The `VP Get cell style` command <!-- REF #_method_.VP Get cell style.Summary -->returns a [style object](configuring.md#style-objects) for the first cell in the *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez une plage contenant le style à récupérer.

- Si *rangeObj* contient une plage de cellules, le style de cellule est retourné.
- Si *rangeObj* contient une plage qui n'est pas une plage cellule, le style de la première cellule de la plage est retourné.
- Si *rangeObj* contient plusieurs lignes, seul le style de la première cellule de la première plage est retourné.

#### Exemple

Pour obtenir les détails concernant le style de la cellule sélectionnée (B2) :

![](../assets/en/ViewPro/cmd_vpGetCellStyle.PNG)

Le code suivant :

```4d
$cellStyle:=VP Get cell style(VP Get selection("myDoc"))
```

... retournera cet objet :

```4d
{
  "backColor":"Azure",
  "borderBottom":
   {
     "color":#800080,
     "style":5
   }
  "font":"8pt Arial",
  "foreColor":"red",
  "hAlign":1,
  "isVerticalText":"true",
  "vAlign":0
}
```

#### Voir également

[VP GET DEFAULT STYLE](#vp-get-default-style)<br/>[VP SET CELL STYLE](#vp-set-cell-style)

### VP Get column attributes

<!-- REF #_method_.VP Get column attributes.Syntax -->

**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get column attributes.Params -->

<div class="no-index">

| Paramètres | Type       |                             | Description                          |
| ---------- | ---------- | --------------------------- | ------------------------------------ |
| rangeObj   | Object     | ->                          | Objet plage                          |
| Résultat   | Collection | <- | Collection de propriétés de colonnes |

</div>
<!-- END REF -->

#### Description

La commande `VP Get column attributes` <!-- REF #_method_.VP Get column attributes.Summary -->retourne une collection de propriétés pour n'importe quelle colonne de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de colonnes dont les attributs seront récupérés.

The returned collection contains any properties for the columns, whether or not they have been set by the [VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes) command.

#### Exemple

Le code suivant :

```4d
var $range : Object
var $attr: Collection

$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

... retournera une collection d'attributs de la plage donnée :

![](../assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)

#### Voir également

[VP Get row attributes](#vp-get-row-attributes)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP Get column count

<!-- REF #_method_.VP Get column count.Syntax -->

**VP Get column count** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get column count.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Integer | <- | Nombre total de colonnes                                                    |

</div>
<!-- END REF -->

#### Description

La commande `VP Get column count` <!-- REF #_method_.VP Get column count.Summary -->retourne le nombre total de colonnes de la *sheet* désignée<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir où obtenir le nombre de colonnes dans le paramètre optionnel *sheet* en utilisant l'index de la feuille (compter commence à 0). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Exemple

Le code suivant retourne le nombre de colonnes dans la zone 4D View Pro :

```4d
var $colCount : Integer
$colCount:=VP Get column count("ViewProarea")
```

#### Voir également

[VP Get row count](#vp-get-row-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get current sheet

<!-- REF #_method_.VP Get current sheet.Syntax -->

**VP Get current sheet** ( *vpAreaName* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get current sheet.Params -->

<div class="no-index">

| Paramètres              | Type    |                             | Description                             |
| ----------------------- | ------- | --------------------------- | --------------------------------------- |
| vpAreaName              | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro |
| Résultat de la fonction | Integer | <- | Indice de la feuille courante           |

</div>
<!-- END REF -->

#### Description

La commande `VP Get current sheet` <!-- REF #_method_.VP Get current sheet.Summary -->retourne l'index de la feuille courante dans *vpAreaName*. La feuille courante est la feuille sélectionnée dans le document.<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

> La numérotation démarre à 0.

#### Exemple

Lorsque la troisième feuille est sélectionnée :

![third-sheet](../assets/en/ViewPro/vp-sheet-3-select.png)

La commande retourne 2 :

```4d
$index:=VP Get current sheet("ViewProArea")
```

#### Voir également

[VP SET CURRENT SHEET](#vp-set-current-sheet)

### VP Get data context

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #_method_.VP Get data context.Syntax -->

**VP Get data context** ( *vpAreaName* : Text {; *sheet* : Integer } ) : any<!-- END REF -->

<!-- REF #_method_.VP Get data context.Params -->

<div class="no-index">

| Paramètres | Type                                         |                             | Description                                              |
| ---------- | -------------------------------------------- | --------------------------- | -------------------------------------------------------- |
| vpAreaName | Text                                         | ->                          | Nom d'objet formulaire zone 4D View Pro                  |
| sheet      | Integer                                      | ->                          | Indice de la feuille de laquelle obtenir le data context |
| Résultat   | Object &#124; Collection | <- | Data context                                             |

</div>
<!-- END REF -->

#### Description

La commande `VP Get data context` <!-- REF #_method_.VP Get data context.Summary -->retourne le contexte de données courant d'une feuille de travail<!-- END REF -->. Le contexte retourné inclut toutes les modifications apportées au contenu du contexte de données.

Dans la *sheet*, passez l'index de la feuille pour récupérer le contexte des données. Si aucun index n'est passé, la commande retourne le contexte de données de la feuille de travail courante. Si aucun index n'est passé, la commande retourne le contexte de données de la feuille de travail courante.

The function returns an object or a collection depending on the type of data context set with [VP SET DATA CONTEXT](#vp-set-data-context).

#### Exemple

Pour obtenir le contexte de données lié aux cellules suivantes :

![](../assets/en/ViewPro/vp-set-data-context-bind.png)

```4d
var $dataContext : Object

$dataContext:=VP Get data context("ViewProArea") // {firstName:Freehafer,lastName:Nancy}
```

#### Voir également

[VP SET DATA CONTEXT](#vp-set-data-context)<br/>[VP Get binding path](#vp-get-binding-path)<br/>[VP SET BINDING PATH](#vp-set-binding-path)

### VP Get default style

<!-- REF #_method_.VP Get default style.Syntax -->

**VP Get default style** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get default style.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Paramètres de style par défaut                                              |

</div>
<!-- END REF -->

#### Description

La commande `VP Get default style` <!-- REF #_method_.VP Get default style.Summary -->retourne un objet de style par défaut pour une feuille<!-- END REF -->. The returned object contains basic document rendering properties as well as the default style settings (if any) previously set by the [VP SET DEFAULT STYLE](#vp-set-default-style) method. For more information about style properties, see [Style Objects & Style Sheets](configuring.md#style-objects--style-sheets).

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir où obtenir le nombre de colonnes dans le paramètre optionnel *sheet* en utilisant l'index de la feuille (compter commence à 0). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Exemple

Pour lire les détails du style par défaut de ce document :

![](../assets/en/ViewPro/cmd_vpGetDefaultStyle.PNG)

Le code suivant :

```4d
$defaultStyle:=VP Get default style("myDoc")
```

retournera ces informations dans l'objet *$defaultStyle* :

```4d
{
 backColor:#E6E6FA,
 hAlign:0,
 vAlign:0,
 font:12pt papyrus
}
```

#### Voir également

[VP Get cell style](#vp-get-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)

### VP Get formula

<!-- REF #_method_.VP Get formula.Syntax -->

**VP Get formula** ( *rangeObj* : Object) : Text<!-- END REF -->

<!-- REF #_method_.VP Get formula.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description |
| ---------- | ------ | --------------------------- | ----------- |
| rangeObj   | Object | ->                          | Objet plage |
| Résultat   | Text   | <- | Formula     |

</div>
<!-- END REF -->

#### Description

La commande `VP Get formula` <!-- REF #_method_.VP Get formula.Summary -->récupère la formule à partir d'une plage de cellules désignées<!-- END REF -->.

Dans *rangeObj*, passez une plage dont vous voulez récupérer la formule. Si *rangeObj* désigne plusieurs cellules ou plusieurs plages, la formule de la première cellule est retournée. Si *rangeObj* est une cellule qui ne contient pas de formule, la méthode retourne une chaîne vide.

#### Exemple

```4d
  //set a formula
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")

$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```

#### Voir également

[VP Get formulas](#vp-get-formulas)<br/>[VP SET FORMULA](#vp-set-formula)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get formula by name

<!-- REF #_method_.VP Get formula by name.Syntax -->

**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Number } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get formula by name.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                                    |
| ---------- | ------ | --------------------------- | -------------------------------------------------------------- |
| vpAreaName | Text   | ->                          | Nom d'objet formulaire zone 4D View Pro                        |
| name       | Text   | ->                          | Nom de la plage nommée                                         |
| scope      | Number | ->                          | "Scope" cible (par défaut=feuille courante) |
| Résultat   | Object | <- | Définition de la formule nommée ou de la plage nommée          |

</div>
<!-- END REF -->

#### Description

La commande `VP Get formula by name` <!-- REF #_method_.VP Get formula by name.Summary --> retourne la formule et le commentaire correspondant à la plage nommée ou à la formule nommée passée dans le paramètre *name*, ou **null** si elle n'existe pas dans l'étendue définie<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez la plage nommée ou la formule nommée que vous voulez obtenir avec *name*. A noter que les plages nommées sont retournées sous forme de formules contenant des références absolues de cellules.

Vous pouvez définir où obtenir la formule dans *scope* en utilisant soit l'index de la feuille ( la numération commence à 0), soit les constantes suivantes :

- `vk current sheet`
- `vk workbook`

##### Objet retourné

L'objet retourné contient les propriétés suivantes :

| Propriété | Type | Description                                                                                                                                                                               |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula   | Text | Texte de la formule correspondant à la formule nommée ou à la plage nommée. Pour les plages nommées, la formule est une séquence de coordonnées absolues. |
| comment   | Text | Commentaire correspondant à la formule nommée ou à la plage nommée                                                                                                                        |

#### Exemple

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1

$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (if not existing)
```

#### Voir également

[VP ADD FORMULA NAME](#vp-add-formula-name)<br/>[VP Get names](#vp-get-names)

### VP Get formulas

<!-- REF #_method_.VP Get formulas.Syntax -->

**VP Get formulas** ( *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get formulas.Params -->

<div class="no-index">

| Paramètres | Type       |                             | Description                         |
| ---------- | ---------- | --------------------------- | ----------------------------------- |
| rangeObj   | Object     | ->                          | Objet plage                         |
| Résultat   | Collection | <- | Collection de valeurs d'une formule |

</div>
<!-- END REF -->

#### Description

La commande `VP Get formulas` <!-- REF #_method_.VP Get formulas.Summary -->récupère les formules d'une *rangeObj* désignée<!-- END REF -->.

Dans *rangeObj*, passez une plage dont vous voulez récupérer les formules. Si *rangeObj* désigne plusieurs plages, la formule de la première plage est retournée. Si *rangeObj* ne contient aucune formule, la commande retourne une chaîne vide.

La collection retournée est bidemensionnelle :

- La collection de premier niveau contient des sous-collections de formules. Chaque sous-collection représente une ligne.
- Chaque sous-collection définit les valeurs des cellules de la ligne. Les données passées en paramètre sont une collection qui contient des sous-collections.

#### Exemple

Vous souhaitez récupérer les formules des colonnes Sum et Average de ce document :

![](../assets/en/ViewPro/cmd_vpGetFormulas.PNG)

Vous pouvez utiliser ce code :

```4d
$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))
//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]
//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]
//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]
```

#### Voir également

[VP Get formula](#vp-get-formula)<br/>[VP Get values](#vp-get-values)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUES](#vp-set-values)

### VP Get frozen panes

<!-- REF #_method_.VP Get frozen panes.Syntax -->

**VP Get frozen panes** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get frozen panes.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet contenant des informations sur les colonnes et lignes figées          |

</div>
<!-- END REF -->

#### Description

La commande `VP Get frozen panes` <!-- REF #_method_.VP Get frozen panes.Summary -->retourne un objet contenant des informations sur les colonnes et les lignes gelées dans *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

##### Objet retourné

La commande retourne un objet décrivant les lignes et colonnes figées. Cet objet peut avoir les propriétés suivantes :

| Propriété           | Type    | Description                                              |
| ------------------- | ------- | -------------------------------------------------------- |
| columnCount         | Integer | Le nombre de colonnes figées sur la gauche de la feuille |
| trailingColumnCount | Integer | Le nombre de colonnes figées sur la droite de la feuille |
| rowCount            | Integer | Le nombre de lignes figées en haut de la feuille         |
| trailingRowCount    | Integer | Le nombre de lignes figées en bas de la feuille          |

#### Exemple

Vous souhaitez récupérer des informations sur le nombre de colonnes et de lignes figées :

```4d
var $panesObj : Object

$panesObj:=VP Get frozen panes("ViewProArea")
```

L'objet retourné contient, par exemple :

![](../assets/en/ViewPro/cmd_vpGetFrozenpanes.PNG)

#### Voir également

[VP SET FROZEN PANES](#vp-set-frozen-panes)

### VP Get names

<!-- REF #_method_.VP Get names.Syntax -->

**VP Get names** ( vpAreaName : Text { ; scope : Number } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get names.Params -->

<div class="no-index">

| Paramètres | Type       |                             | Description                                                    |
| ---------- | ---------- | --------------------------- | -------------------------------------------------------------- |
| vpAreaName | Text       | ->                          | Nom d'objet formulaire zone 4D View Pro                        |
| scope      | Number     | ->                          | "Scope" cible (par défaut=feuille courante) |
| Résultat   | Collection | <- | Noms existant dans la zone définie                             |

</div>
<!-- END REF -->

#### Description

La commande `VP Get names` <!-- REF #_method_.VP Get names.Summary -->retourne une collection de tous les "noms" définis dans la feuille courante ou dans le champ d'application désigné par le paramètre *scope*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir où obtenir les noms dans *scope* en utilisant soit l'index de la feuille (la numération commence à partir de 0), soit les constantes suivantes :

- `vk current sheet`
- `vk workbook`

##### Collection retournée

La collection retournée contient un objet par nom. Les propriétés d'objets suivantes peuvent être retournées :

| Propriété                                                                               | Type | Description                |
| --------------------------------------------------------------------------------------- | ---- | -------------------------- |
| result\[ ].name    | Text | nom de cellule ou de plage |
| result\[ ].formula | Text | formula                    |
| result\[ ].comment | Text | Commentaire associé au nom |

Les propriétés disponibles dépendent du type d'élément nommé (cellule nommée, plage nommée ou formule nommée).

#### Exemple

```4d
var $list : Collection


$list:=VP Get names("ViewProArea";2) //noms de la 3e feuille
```

#### Voir également

[VP ADD FORMULA NAME](#vp-get-formula)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Name](#vp-name)

### VP Get print info

<!-- REF #_method_.VP Get print info.Syntax -->

**VP Get print info** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get print info.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet contenant les informations d'impression                               |

</div>
<!-- END REF -->

#### Description

La commande `VP Get print info` <!-- REF #_method_.VP Get print info.Summary -->retourne un objet contenant les attributs d'impression de *vpAreaName*<!-- END REF -->.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique (la numérotation commence à zéro) dont vous souhaitez retourner les attributs d'impression.  Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Exemple

Le code suivant :

```4d
$pinfo:=VP Get print info("ViewProArea")
```

... returns the print attributes of the 4D View Pro area set in the [VP SET PRINT INFO](#vp-set-print-info) command:

```4d
{
bestFitColumns:false,
bestFitRows:false,
blackAndWhite:false,
centering:0,
columnEnd:8,
columnStart:0,
firstPageNumber:1,
fitPagesTall:1,
fitPagesWide:1,
footerCenter:"&BS.H.I.E.L.D. &A Sales Per Region",
footerCenterImage:,
footerLeft:,
footerLeftImage:,
footerRight:"page &P of &N",
footerRightImage:,
headerCenter:,
headerCenterImage:,
headerLeft:"&G",
headerLeftImage:logo.png,
headerRight:,
headerRightImage:,
margin:{top:75,bottom:75,left:70,right:70,header:30,footer:30},
orientation:2,
pageOrder:0,
pageRange:,
paperSize:{width:850,height:1100,kind:1},
qualityFactor:2,
repeatColumnEnd:-1,
repeatColumnStart:-1,
repeatRowEnd:-1,
repeatRowStart:-1,
rowEnd:24,
rowStart:0,
showBorder:false,
showColumnHeader:0,
showGridLine:false,
showRowHeader:0,
useMax:true,
watermark:[],
zoomFactor:1
}
```

#### Voir également

[4D View Pro Print Attributes](configuring.md#print-attributes)<br/>[VP SET PRINT INFO](#vp-set-print-info)

### VP Get row attributes

<!-- REF #_method_.VP Get row attributes.Syntax -->

**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get row attributes.Params -->

<div class="no-index">

| Paramètres | Type       |                             | Description                        |
| ---------- | ---------- | --------------------------- | ---------------------------------- |
| rangeObj   | Object     | ->                          | Objet plage                        |
| Résultat   | Collection | <- | Collection de propriétés de lignes |

</div>
<!-- END REF -->

#### Description

La commande `VP Get row row attributes` <!-- REF #_method_.VP Get row attributes.Summary -->retourne une collection de propriétés pour n'importe quelle ligne dans la *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de lignes dont les attributs seront récupérés.

The returned collection contains any properties for the rows, whether or not they have been set by the [VP SET ROW ATTRIBUTES](#vp-set-row-attributes) method.

#### Exemple

Le code suivant retourne une collection d'attributs de la plage donnée :

```4d
var $range : Object
var $attr : Collection

$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get row attributes($range)
```

![](../assets/en/ViewPro/cmd_vpGetRowAttributes.PNG)

#### Voir également

[VP Get column attributes](#vp-get-column-attributes)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP Get row count

<!-- REF #_method_.VP Get row count.Syntax -->

**VP Get row count** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get row count.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Integer | <- | Nombre total de lignes                                                      |

</div>
<!-- END REF -->

#### Description

La commande `VP Get row count` <!-- REF #_method_.VP Get row count.Summary -->retourne le nombre total de lignes de la *sheet* désignée<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir où obtenir le nombre de lignes dans le paramètre facultatif *sheet* en utilisant l'index de la feuille (la numération commence à 0). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Exemple

Le code suivant retourne le nombre de lignes dans la zone 4D View Pro :

```4d
var $rowCount : Integer
$rowCount:=VP Get row count("ViewProarea")
```

#### Voir également

[VP Get column count](#vp-get-column-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get selection

<!-- REF #_method_.VP Get selection.Syntax -->

**VP Get selection** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get selection.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet plage de toutes les cellules                                          |

</div>
<!-- END REF -->

#### Description

La commande `VP Get selection` <!-- REF #_method_.VP Get selection.Summary -->retourne un nouvel objet plage référençant les cellules courantes sélectionnées<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Exemple

![](../assets/en/ViewPro/cmd_vpGetSelection.PNG)

Le code suivant récupèrera les coordonnées de la cellule active :

```4d
$currentSelection:=VP Get selection("myVPArea")


//returns a range object containing:  
//$currentSelection.ranges[0].column=5
//$currentSelection.ranges[0].columnCount=2
//$currentSelection.ranges[0].row=8
//$currentSelection.ranges[0].rowCount=6
```

#### Voir également

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP Get sheet count

<!-- REF #_method_.VP Get sheet count.Syntax -->

**VP Get sheet count** ( *vpAreaName* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet count.Params -->

<div class="no-index">

| Paramètres              | Type    |                             | Description                             |
| ----------------------- | ------- | --------------------------- | --------------------------------------- |
| vpAreaName              | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro |
| Résultat de la fonction | Integer | <- | Nombre de feuilles                      |

</div>
<!-- END REF -->

#### Description

La commande `VP Get sheet count` <!-- REF #_method_.VP Get sheet count.Summary -->retourne le nombre de feuilles dans le document chargé dans *vpAreaName*.<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

#### Exemple

Dans le document suivant :

![](../assets/en/ViewPro/vp-sheet-3.png)

Pour obtenir le nombre de feuilles et définir la feuille courante comme étant la dernière feuille :

```4d
 $count:=VP Get sheet count("ViewProArea")
  //définir la feuille courante comme étant la dernière feuille (l'indexation commence à 0)
 VP SET CURRENT SHEET("ViewProArea";$count-1)
```

![](../assets/en/ViewPro/vp-sheet-3-select.png)

#### Voir également

[VP Get sheet index](#vp-get-sheet-index)<br/>[VP SET SHEET COUNT](#vp-set-sheet-count)

### VP Get sheet index

<!-- REF #_method_.VP Get sheet index.Syntax -->

**VP Get sheet index** ( *vpAreaName* : Text ; *name* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet index.Params -->

<div class="no-index">

| Paramètres              | Type    |                             | Description                             |
| ----------------------- | ------- | --------------------------- | --------------------------------------- |
| vpAreaName              | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro |
| name                    | Text    | ->                          | Nom de la feuille                       |
| Résultat de la fonction | Integer | <- | Indice de la feuille                    |

</div>
<!-- END REF -->

#### Description

La commande `VP Get sheet index` <!-- REF #_method_.VP Get sheet index.Summary -->retourne l'index d'une feuille basé sur son nom dans *vpAreaName*.<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *name*, passez le nom de la feuille dont l'index sera retourné. Si aucune feuille nommée *name* n'est trouvée dans le document, la méthode retourne -1.

> La numérotation démarre à 0.

#### Exemple

Dans le document suivant :

![](../assets/en/ViewPro/vp-sheet-index-name.png)

Lire l'index de la feuille appelée "Total premier trimestre" :

```4d
$index:=VP Get sheet index("ViewProArea";"Total premier trimestre") //retourne 2
```

#### Voir également

[VP Get sheet count](#vp-get-sheet-count)<br/>[VP Get sheet name](#vp-get-sheet-name)

### VP Get sheet name

<!-- REF #_method_.VP Get sheet name.Syntax -->

**VP Get sheet name** ( *vpAreaName* : Text ; *sheet* : Integer ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get sheet name.Params -->

<div class="no-index">

| Paramètres              | Type    |                             | Description                             |
| ----------------------- | ------- | --------------------------- | --------------------------------------- |
| vpAreaName              | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro |
| sheet                   | Integer | ->                          | Indice de la feuille                    |
| Résultat de la fonction | Text    | <- | Nom de la feuille                       |

</div>
<!-- END REF -->

#### Description

La commande `VP Get sheet name` <!-- REF #_method_.VP Get sheet name.Summary -->retourne le nom d'une feuille basé sur son index dans *vpAreaName*.<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *sheet*, passez l'index de la feuille dont le nom sera retourné.

Si l'index passé n'existe pas, la méthode retourne un nom vide.

> La numérotation démarre à 0.

#### Exemple

Lire le nom de la troisième feuille du document :

```4d
$sheetName:=VP Get sheet name("ViewProArea";2)
```

#### Voir également

[VP Get sheet index](#vp-get-sheet-index)

### VP Get sheet options

<!-- REF #_method_.VP Get sheet options.Syntax -->

**VP Get sheet options** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get sheet options.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet options de la feuille                                                 |

</div>
<!-- END REF -->

#### Description

La commande `VP Get sheet options` <!-- REF #_method_.VP Obtenir les options de la feuille.Summary -->retourne un objet contenant les options de la feuille courante de la zone *vpAreaName* <!-- END REF -->.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Objet retourné

La commande retourne un objet contenant les valeurs courantes pour toutes les options de feuille disponibles. An option value may have been modified by the user or by the [VP SET SHEET OPTIONS](#vp-set-sheet-options) method.

To view the full list of the options, see [Sheet Options](configuring.md#sheet-options).

#### Exemple

```4d
$options:=VP Get sheet options("ViewProArea")
 If($options.colHeaderVisible) //les en-têtes des colonnes sont visibles
    ... //faire quelque chose
 End if
```

#### Voir également

[4D VIEW PRO SHEET OPTIONS](configuring.md#sheet-options)<br/>[VP SET SHEET OPTIONS](#vp-set-sheet-options)

### VP Get show print lines

<!-- REF #_method_.VP Get show print lines.Syntax -->

**VP Get show print lines** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #_method_.VP Get show print lines.Params -->

<div class="no-index">

| Paramètres              | Type    |                             | Description                                                |
| ----------------------- | ------- | --------------------------- | ---------------------------------------------------------- |
| vpAreaName              | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                    |
| sheet                   | Integer | ->                          | Indice de la feuille                                       |
| Résultat de la fonction | Boolean | <- | True si les lignes d'impression sont visibles, sinon False |

</div>
<!-- END REF -->

#### Description

La commande `VP Get show print lines`<!-- REF #_method_.VP Get show print lines.Summary -->retourne `True` si les lignes d'aperçu avant impression sont visibles et `False` si elles sont masquées.<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *sheet*, passez le numéro de la page cible. Si *sheet* est omis, la commande s'applique à la feuille courante.

> La numérotation démarre à 0.

#### Exemple

Le code suivant permet de vérifier si les lignes d'aperçu sont visibles ou masquées dans le document :

```4d
 var $result : Boolean
 $result:=VP Get show print lines("ViewProArea";1)
```

#### Voir également

[VP SET SHOW PRINT LINES](#vp-set-show-print-lines)

### VP Get spans

<!-- REF #_method_.VP Get spans.Syntax -->

**VP Get spans** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get spans.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                                                        |
| ---------- | ------ | --------------------------- | ---------------------------------------------------------------------------------- |
| rangeObj   | Object | ->                          | Objet plage                                                                        |
| Résultat   | Object | <- | Objet de cellules fusionnées (cell spans) dans la plage définie |

</div>
<!-- END REF -->

#### Description

La commande `VP Get spans` <!-- REF #_method_.VP Get spans.Summary -->récupère les cellules fusionnées (cell spans) dans le *rangeObj* désigné<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellules fusionnées que vous souhaitez récupérer. Si *rangeObj* ne contient pas de cellules fusionnées, une plage vide est retournée.

#### Exemple

Pour centrer le texte des cellules fusionnées dans ce document :

![](../assets/en/ViewPro/cmd_vpGetSpans.PNG)

```4d
// Rechercher toutes les cellules fusionnées 
$range:=VP Get spans(VP All("ViewProArea"))

//centrer le texte
$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
VP SET CELL STYLE($range;$style)
```

#### Voir également

[VP ADD SPAN](configuring.md#sheet-options)<br/>[VP REMOVE SPAN](#vp-remove-span)

### VP Get stylesheet

<!-- REF #_method_.VP Get stylesheet.Syntax -->

**VP Get stylesheet** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get stylesheet.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| styleName  | Text    | ->                          | Nom du style                                                                |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet feuille de style                                                      |

</div>
<!-- END REF -->

#### Description

La commande `VP Get stylesheet` <!-- REF #_method_.VP Get stylesheet.Summary -->retourne l'objet de la feuille de style *styleName* contenant les valeurs de propriété qui ont été définies<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *styleName*, passez le nom de la feuille de style que vous souhaitez lire.

Vous pouvez définir où obtenir la feuille de style dans le paramètre optionnel *sheet* en utilisant l'index de la feuille (la numérotation commence à partir de 0) ou avec les constantes suivantes :

- `vk current sheet`
- `vk workbook`

#### Exemple

Le code suivant :

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

... retournera l'objet de style *GreenDashDotStyle* de la feuille courante :

```4d
{
backColor:green,
borderBottom:{color:green,style:10},
borderLeft:{color:green,style:10},
borderRight:{color:green,style:10},
borderTop:{color:green,style:10}
}
```

#### Voir également

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP ADD STYLESHEET](#vp-set-sheet-options)<br/>[VP Get stylesheets](#vp-get-stylesheets)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)

### VP Get stylesheets

<!-- REF #_method_.VP Get stylesheets.Syntax -->

**VP Get stylesheets** ( *vpAreaName* : Text { ; *sheet* : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get stylesheets.Params -->

<div class="no-index">

| Paramètres | Type       |                             | Description                             |
| ---------- | ---------- | --------------------------- | --------------------------------------- |
| vpAreaName | Text       | ->                          | Nom d'objet formulaire zone 4D View Pro |
| sheet      | Integer    | ->                          | \|                                      |
| Résultat   | Collection | <- | Collection d'objets feuille de style    |

</div>
<!-- END REF -->

#### Description

La commande `VP Get stylesheets` <!-- REF #_method_.VP Get stylesheets.Summary -->retourne la collection d'objets feuille de style définis à partir de la *feuille* désignée<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir où lire les feuilles de style via le paramètre *sheet* en passant le numéro d'indice de la feuille (la numérotation commence à partir de 0) ou à l'aide des constantes suivantes :

- `vk current sheet`
- `vk workbook`

#### Exemple

Le code suivant retournera une collection de tous les objets style de la feuille courante :

```4d
$styles:=VP Get stylesheets("ViewProArea")
```

Dans ce cas, la feuille courante utilise deux objets style :

```4d
[
   {
     backColor:green,
     borderLeft:{color:green,style:10},
     borderTop:{color:green,style:10},
     borderRight:{color:green,style:10},
     borderBottom:{color:green,style:10},
     name:GreenDashDotStyle
   },
   {
     backColor:red,
     textIndent:10,
     name:RedIndent
   }
]
```

#### Voir également

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)

### VP Get table column attributes

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Get table column attributes.Syntax -->

**VP Get table column attributes** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table column attributes.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| tableName  | Text    | ->                          | Nom de table                                                                |
| column     | Integer | ->                          | Numéro de colonne de la table                                               |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Numéro d'indice de *column*                                                 |

</div>
<!-- END REF -->

#### Description

La commande `VP Get table column attributes` <!-- REF #_method_.VP Get table column attributes.Summary -->retourne les attributs courants de la colonne spécifiée *column* dans la table *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *sheet*, passez le numéro de la page cible. Si aucune feuille nommée <em x-id="3">name</em> n'est trouvée dans le document, la méthode retourne -1.

> La numérotation démarre à 0.

La commande retourne un objet décrivant les attributs courants de la *column*:

| Propriété           | Type    | Description                                                                                                                                      |
| ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| dataField           | text    | Nom de la propriété de la colonne de la table dans le contexte de données. Non retourné si la table est affichée automatiquement |
| name                | text    | Nom de la colonne de la table.                                                                                                   |
| footerText          | text    | Valeur du pied de colonne.                                                                                                       |
| footerFormula       | text    | Formule de pied de colonne.                                                                                                      |
| filterButtonVisible | boolean | True si le bouton de filtre de la colonne de la table est affiché, False sinon.                                                  |

Si *tableName* n'est pas trouvé ou si l'index *column* est supérieur au nombre de colonnes, la commande retourne **null**.

#### Exemple

```4d
var $attributes : Object
$attributes:=VP Get table column attributes("ViewProArea"; $tableName; 1)
If ($attributes.dataField#"")
     ...
End if
```

#### Voir également

[VP CREATE TABLE](#vp-create-table)<br/>[VP Find table](#vp-find-table)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)<br/>[VP RESIZE TABLE](#vp-resize-table)

### VP Get table column index

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Get table column index.Syntax -->

**VP Get table column index** ( *vpAreaName* : Text ; *tableName* : Text ; *columnName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get table column index.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| tableName  | Text    | ->                          | Nom de table                                                                |
| columnName | Text    | ->                          | Nom de la colonne de la table                                               |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Integer | <- | Numéro d'indice de *columnName*                                             |

</div>
<!-- END REF -->

#### Description

La commande `VP Get table column index` <!-- REF #_method_.VP Get table column index.Summary -->retourne l'index du *columnName* dans la table *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *columnName*, passez le nom de la colonne de la table pour laquelle vous souhaitez obtenir l'index.

Dans *sheet*, passez le numéro de la page cible. Si aucune feuille nommée <em x-id="3">name</em> n'est trouvée dans le document, la méthode retourne -1.

> La numérotation démarre à 0.

Si *tableName* ou *columnName* n'est pas trouvé, la commande retourne -1.

#### Exemple

```4d
	// Rechercher l'id colonne en fonction du nom de la colonne
var $id : Integer
$id:=VP Get table column index($area; $tableName; "Weight price")
	// Supprimer la colonne par id
VP REMOVE TABLE COLUMNS($area; $tableName; $id)
```

#### Voir également

[VP CREATE TABLE](#vp-create-table)<br/>[VP Find table](#vp-find-table)<br/>[VP Get table column attributes](#vp-get-table-column-attributes)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)

### VP Get table dirty rows

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R8   | Ajout         |

</details>

<!-- REF #_method_.VP Get table dirty rows.Syntax -->

**VP Get table dirty rows** ( *vpAreaName* : Text ; *tableName* : Text { ; *reset* : Boolean {; *sheet* : Integer }} ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get table dirty rows.Params -->

<div class="no-index">

| Paramètres | Type       |                             | Description                                                                                                              |
| ---------- | ---------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| vpAreaName | Text       | ->                          | Nom d'objet formulaire zone 4D View Pro                                                                                  |
| tableName  | Text       | ->                          | Nom de table                                                                                                             |
| reset      | Boolean    | ->                          | True pour effacer le statut dirty de la table courante, False pour ne pas le modifier. Par défaut = True |
| sheet      | Integer    | ->                          | Numéro d'indice de la feuille (feuille courante si omis)                                              |
| Résultat   | Collection | <- | Collection d'objets avec tous les éléments modifiés depuis la dernière réinitialisation                                  |

</div>
<!-- END REF -->

#### Description

La commande `VP Get table dirty rows` <!-- REF #_method_.VP Get table dirty rows.Summary -->retourne une collection d'objets *dirty row*, contenant les éléments qui ont été modifiés depuis la dernière réinitialisation dans la table spécifiée *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *tableName*, passez le nom de la table pour laquelle vous souhaitez obtenir les lignes modifiées. Only modified columns bound to a [data context](#vp-set-data-context) will be taken into account.

Par défaut, appeler la commande effacera le statut *dirty* de la table courante. Pour garder ce statut intact, passez `False` dans le paramètre *reset*.

Dans *sheet*, passez le numéro de la page cible. Si aucune feuille nommée <em x-id="3">name</em> n'est trouvée dans le document, la méthode retourne -1.

> La numérotation démarre à 0.

Chaque objet *dirty row* dans la collection retournée contient les propriétés suivantes:

| Propriété    | Type    | Description                        |
| ------------ | ------- | ---------------------------------- |
| item         | object  | Objet modifié de la ligne modifiée |
| originalItem | object  | Objet avant modification           |
| row          | integer | Index de la ligne modifiée         |

Si *tableName* n'est pas trouvé ou s'il ne contient pas de colonne modifiée, la commande retourne une collection vide.

#### Exemple

Vous souhaitez compter le nombre de lignes éditées :

```4d
var $dirty : Collection
$dirty:=VP Get table dirty rows("ViewProArea"; "ContextTable"; False)
VP SET NUM VALUE(VP Cell("ViewProArea"; 0; 0); $dirty.length)
```

#### Voir également

[VP CREATE TABLE](#vp-create-table)<br/>[VP Find table](#vp-find-table)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)<br/>[VP RESIZE TABLE](#vp-resize-table)

### VP Get table range

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Get table range.Syntax -->

**VP Get table range** ( *vpAreaName* : Text ; *tableName* : Text {; *onlyData* : Integer {; *sheet* : Integer }} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table range.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                    |
| ---------- | ------- | --------------------------- | ------------------------------------------------------------------------------ |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                        |
| tableName  | Text    | ->                          | Nom de table                                                                   |
| onlyData   | Integer | ->                          | `vk table full range` (par défaut) ou `vk table data range` |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis)    |
| Résultat   | Object  | <- | Plage contenant la table                                                       |

</div>
<!-- END REF -->

#### Description

La commande `VP Get table range` <!-- REF #_method_.VP Get table range.Summary -->retourne la plage de *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans le paramètre *onlyData*, vous pouvez passer l'une des constantes suivantes pour indiquer si vous souhaitez obtenir uniquement les données :

| Constante             | Valeur | Description                                                                                                                  |
| --------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `vk table full range` | 0      | Récupérer la plage de cellules pour la zone de la table avec pied de page et en-tête (par défaut si omis) |
| `vk table data range` | 1      | Récupérer la plage de cellules uniquement pour la zone de données de la table                                                |

Dans *sheet*, passez le numéro de la page cible. Si aucun numéro n'est spécifié, la commande s'applique à la feuille en cours.

> La numérotation démarre à 0.

Si *tableName* n'est pas trouvé, la commande retourne **null**.

#### Voir également

[VP RESIZE TABLE](#vp-resize-table)<br/>
[VP Find table](#vp-find-table)

### VP Get table theme

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R8   | Ajout         |

</details>

<!-- REF #_method_.VP Get table theme.Syntax -->

**VP Get table theme** ( *vpAreaName* : Text ; *tableName* : Text ) : cs.ViewPro.TableTheme<!-- END REF -->

<!-- REF #_method_.VP Get table theme.Params -->

<div class="no-index">

| Paramètres | Type                                                                           |                             | Description                                          |
| ---------- | ------------------------------------------------------------------------------ | --------------------------- | ---------------------------------------------------- |
| vpAreaName | Text                                                                           | ->                          | Nom d'objet formulaire zone 4D View Pro              |
| tableName  | Text                                                                           | ->                          | Nom de table                                         |
| Résultat   | [cs.ViewPro.TableTheme](classes.md#tabletheme) | <- | Valeurs des propriétés du thème de la table actuelle |

</div>
<!-- END REF -->

#### Description

La commande `VP Get table theme` <!-- REF #_method_.VP Get table theme.Summary -->retourne les valeurs des propriétés du thème actuel de la table *tableName*<!-- END REF -->. A table theme can be set using the [`VP CREATE TABLE`](#vp-create-table) or [`VP SET TABLE THEME`](#vp-set-table-theme) commands, or through the interface.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro et dans *tableName*, le nom de la table.

La commande retourne un objet de la classe [cs.ViewPro.TableTheme](classes.md#tabletheme) avec des propriétés et des valeurs qui décrivent le thème de la table courante.

#### Exemple

La commande retourne un objet de `thème` complet même si un nom de [thème natif SpreadJS](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes) a été utilisé pour définir le thème.

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="dark10" //utilisation d'un nom de thème natif

VP SET TABLE THEME("ViewProArea"; "ContextTable"; $param)
$vTheme:=VP Get table theme("ViewProArea"; "ContextTable")
$result:=Asserted(Value type($vTheme.theme)=Is object) //vrai
```

#### Voir également

[VP CREATE TABLE](#vp-create-table)<br/>[VP SET TABLE THEME](#vp-set-table-theme)

### VP Get tables

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Get tables.Syntax -->

**VP Get tables** ( *vpAreaName* : Text { ; *sheet* : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get tables.Params -->

<div class="no-index">

| Paramètres | Type       |                             | Description                                                                 |
| ---------- | ---------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text       | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer    | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Collection | <- | Collection de textes avec tous les noms des tables                          |

</div>
<!-- END REF -->

#### Description

La commande `VP Get tables` <!-- REF #_method_.VP Get tables.Summary -->retourne une collection de tous les noms de tables définis dans *sheet*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *sheet*, passez le numéro de la page cible. Si aucun numéro n'est spécifié, la commande s'applique à la feuille en cours.

> La numérotation démarre à 0.

#### Exemple

Le code suivant retournera une collection de tous les noms de tables de la feuille courante :

```4d
$tables:=VP Get tables("ViewProArea")
//$tables contient par exemple ["contextTable","emailTable"]

```

#### Voir également

[VP CREATE TABLE](#vp-create-table)

### VP Get value

<!-- REF #_method_.VP Get value.Syntax -->

**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get value.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                           |
| ---------- | ------ | --------------------------- | ------------------------------------- |
| rangeObj   | Object | ->                          | Objet plage                           |
| Résultat   | Object | <- | Objet contenant une valeur de cellule |

</div>
<!-- END REF -->

#### Description

La commande `VP Get value` <!-- REF #_method_.VP Get value.Summary -->récupère la valeur d'une cellule depuis une plage de cellules désignées<!-- END REF -->.

Dans *rangeObj*, passez une plage dont vous souhaitez récupérer la valeur.

#### Objet retourné

L'objet retourné contiendra la propriété `value` et, dans le cas d'une valeur de date js, une propriété `time` :

| Propriété | Type                                    | Description                                                               |
| --------- | --------------------------------------- | ------------------------------------------------------------------------- |
| value     | Entier long, Réel, Booléen, Texte, Date | Valeur de *rangeObj* (exceptée - time)                 |
| time      | Real                                    | Valeur heure (en secondes) si la valeur est du type js |

Si l'objet retourné inclut une date ou une heure, il est traité en tant que datetime et est complété comme suit :

- valeur heure - la date est complétée comme suit : December 30, 1899 au format dd/MM/yyyy (30/12/1899)
- valeur date - l'heure est complétée comme suit : minuit au format HH:mm:ss (00:00:00)

Si *rangeObj* contient plusieurs cellules ou plusieurs plages, la valeur de la première cellule est retournée. La commande retourne un objet null si la cellule est vide.

#### Exemple

```4d
$cell:=VP Cell("ViewProArea";5;2)
$value:=VP Get value($cell)
If(Value type($value.value)=Is text)
    VP SET TEXT VALUE($cell;New object("value";Uppercase($value.value))
End if
```

#### Voir également

[VP Get values](#vp-get-values)<br/>[VP SET VALUE](#vp-set-value)<br/>[VP SET VALUES](#vp-set-values)

### VP Get values

<!-- REF #_method_.VP Get values.Syntax -->

**VP Get values** ( *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get values.Params -->

<div class="no-index">

| Paramètres | Type       |                             | Description           |
| ---------- | ---------- | --------------------------- | --------------------- |
| rangeObj   | Object     | ->                          | Objet plage           |
| Résultat   | Collection | <- | Collection de valeurs |

</div>
<!-- END REF -->

#### Description

La commande `VP Get values` <!-- REF #_method_.VP Get values.Summary --> récupère les valeurs du *rangeObj* désigné<!-- END REF -->.

Dans *rangeObj*, passez une plage dont vous souhaitez récupérer les valeurs. Si *rangeObj* comprend plusieurs plages, seule la première plage est utilisée.

La collection retournée par `VP Get values` contient une collection bidimensionnelle:

- Chaque élément de la collection de premier niveau représente une ligne et contient une sous-collection de valeurs
- Chaque sous-collection contient des valeurs des cellule de la ligne. Les valeurs peuvent être de type entier, réel, booléen, texte, null. Si une valeur est de type date ou heure, elle est retournée en un objet dont les propriétés sont les suivantes :

| Propriété | Type | Description                                                               |
| --------- | ---- | ------------------------------------------------------------------------- |
| value     | Date | Valeur dans la cellule (sauf heure)                    |
| time      | Real | Valeur heure (en secondes) si la valeur est du type js |

Les dates ou les heures sont considérées comme un datetime et sont complétées comme suit :

- valeur de type heure - la partie date est complétée comme étant le 30 décembre 1899
- valeur de type date - la partie heure est complétée comme étant minuit (00:00:00:000)

#### Exemple

Vous souhaitez lire les valeurs allant de C4 à G6 :

![](../assets/en/ViewPro/cmd_vpGetValues.PNG)

```4d
$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))
// $result[0]=[4,5,null,hello,world]
// $result[1]=[6,7,8,9,null]
// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]
```

#### Voir également

[VP Get formulas](#vp-get-formulas)<br/>[VP Get value](#vp-get-value)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUES](#vp-set-values)

### VP Get workbook options

<!-- REF #_method_.VP Get workbook options.Syntax -->

**VP Get workbook options** ( *vpAreaName* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get workbook options.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                             |
| ---------- | ------ | --------------------------- | --------------------------------------- |
| vpAreaName | Text   | ->                          | Nom d'objet formulaire zone 4D View Pro |
| Résultat   | Object | <- | Objet contenant les options de workbook |

</div>
<!-- END REF -->

#### Description

`VP Get workbook options` <!-- REF #_method_.Get workbook options.Summary -->
retourne un objet contenant toutes les options du workbook dans *vpAreaName*<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

L'objet retourné contient toutes les options du classeur (par défaut et modifiées) dans le classeur.

La liste des options du workbook est référencée dans la description de [`VP SET WORKBOOK OPTIONS`](#vp-set-workbook-options).

#### Exemple

```4d
var $workbookOptions : Object

$workbookOptions:=VP Get workbook options("ViewProArea")
```

#### Voir également

[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## I

### VP IMPORT DOCUMENT

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->

**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| filePath   | Text   | -> | Chemin d'accès du document              |
| paramObj   | Object | -> | Options d'import                        |

</div>
<!-- END REF -->

#### Description

La commande `VP IMPORT DOCUMENT` <!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->importe et affiche le document désigné par *filePath* dans la zone 4D View Pro *vpAreaName*<!-- END REF -->. Le document importé remplace toutes les données déjà présentes dans la zone.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *filePath*, passez le chemin et le nom du document à importer. Les formats suivants sont pris en charge :

- Les documents 4D View Pro (extension ".4vp")

- Microsoft Excel (extension ".xlsx")

- documents texte (extension ".txt", ".csv", le document doit être en utf-8)

Si l'extension du document n'est pas une extension reconnue, telle que `.4vp` ou `.xlsx`, le document est considéré comme un document texte. Vous devez passer un chemin d'accès complet, sauf si le document est situé au même niveau que le dossier Project, auquel cas vous pouvez simplement passer son nom.

> Lors de l'importation d'un fichier au format Microsoft Excel dans un document 4D View Pro, certains paramètres peuvent être perdus. You can verify your settings with [this list from GrapeCity](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html).

Une erreur est retournée si le paramètre `filePath` est invalide, ou si le fichier est manquant ou mal-formé.

Le paramètre optionnel *paramObj* vous permet de définir les propriétés du document importé:

| Paramètres |                 | Type   | Description                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | --------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    |                 | object | Nom d'une méthode callback (ou méthode rétro-rappel) à lancer lorsque l'import est terminé. The method must use the [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) command. Voir [Passer une méthode de callback (formula)](#passing-a-callback-method-formula). |
| password   |                 | text   | Microsoft Excel uniquement (optionnel) - Mot de passe utilisé pour protéger un document Microsoft Excel.                                                                                                                                                                                                                                 |
| csvOptions |                 | object | options d'import csv                                                                                                                                                                                                                                                                                                                                                        |
|            | range           | object | Plage de cellules contenant la première cellule dans laquelle les données seront saisies. Si la plage spécifiée n'est pas une plage de cellules, seule la première cellule de la plage est utilisée.                                                                                                                                        |
|            | rowDelimiter    | text   | Délimiteur de ligne. S'il n'est pas défini, le délimiteur est automatiquement déterminé par 4D.                                                                                                                                                                                                                                             |
|            | columnDelimiter | text   | Délimiteur de colonne. Par défaut : ","                                                                                                                                                                                                                                                                                                     |

> Pour plus d'informations sur le format CSV et les valeurs séparées par des délimiteurs en général, voir [cet article sur Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values)

#### Exemple 1

Vous souhaitez importer un document 4D View Pro stocké sur le disque, à l'ouverture du formulaire :

```4d
C_TEXT($docPath)
If(Form event code=On VP Ready) //La zone 4D View Pro est chargée et prête
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

#### Exemple 2

Vous souhaitez importer un document Microsoft Excel protégé par un mot de passe dans 4D View Pro :

```4d
$o:=New object
$o.password:="excel123"

VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfilefile.xlsx";$o)
```

```4d
	//myImport callback method
#DECLARE($area : Text; $filePath : Text; $param : Object; $status : Object)

If ($status.success)
     ALERT("Import successfully completed")
Else
     ALERT("Error: "+$status.errorMessage)
End if
```

#### Exemple 3

Vous souhaitez importer un fichier `.txt` qui utilise une virgule (",") comme délimiteur:

![example-import-csv](../assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

Voici le résultat :
![example-import-csv](../assets/en/ViewPro/vp-import-document-csv-result.png)

#### Voir également

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP NEW DOCUMENT](#vp-new-document)

### VP IMPORT FROM OBJECT

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| viewPro    | Object | -> | Objet 4D View Pro                       |

</div>
<!-- END REF -->

#### Description

La commande `VP IMPORT FROM OBJECT` <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->importe et affiche l'objet 4D View Pro *viewPro* dans la zone 4D View Pro *vpAreaName*<!-- END REF -->. Le contenu de l'objet importé remplace toutes les données insérées auparavant dans la zone.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *viewPro*, passez un objet 4D View Pro valide. Cet objet peut avoir été créé en utilisant [VP Export to object](#vp-export-to-object) ou manuellement. For more information on 4D View Pro objects, please refer to the [4D View Pro object](configuring.md#4d-view-pro-object) section.

Une erreur est retournée si l'objet *viewPro* est invalide.

#### Exemple

Vous souhaitez importer une feuille de calcul précédemment stockée dans un champ objet :

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### Voir également

[VP Export to object](#vp-export-to-object)

### VP INSERT COLUMNS

<!-- REF #_method_.VP INSERT COLUMNS.Syntax -->

**VP INSERT COLUMNS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT COLUMNS.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

</div>
<!-- END REF -->

#### Description

La commande `VP INSERT COLUMNS` <!-- REF #_method_.VP INSERT COLUMNS.Summary -->insère les colonnes définies dans l'objet *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passer un objet contenant une plage de la colonne de début (la colonne qui indique l'emplacement de la nouvelle colonne à insérer) et le nombre de colonnes à insérer. Si le nombre de colonnes à insérer est omis (non défini), une seule colonne est insérée.

De nouvelles colonnes sont insérées sur la gauche, directement avant la première colonne de *rangeObj*.

#### Exemple

Pour insérer 3 colonnes avant la deuxième colonne :

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

Le résultat est le suivant :

![](../assets/en/ViewPro/cmd_vpInsertColumns.PNG)

#### Voir également

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT ROWS](#vp-insert-rows)

### VP INSERT ROWS

<!-- REF #_method_.VP INSERT ROWS.Syntax -->

**VP INSERT ROWS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT ROWS.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

</div>
<!-- END REF -->

#### Description

La commande `VP INSERT ROWS` <!-- REF #_method_.VP INSERT ROWS.Summary -->insère les lignes définies dans *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de la ligne de début (la ligne qui indique où la nouvelle ligne sera insérée) et le nombre de lignes à insérer. Si le nombre de lignes à insérer est omis (non défini), une seule ligne est insérée.

De nouvelles lignes sont insérées directement avant la première ligne dans *rangeObj*.

#### Exemple

Pour insérer 3 lignes avant la première ligne :

```4d
VP INSERT ROWS(VP Row("ViewProArea";0;3))
```

Le résultat est le suivant :

![](../assets/en/ViewPro/cmd_vpInsertRows.PNG)

#### Voir également

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT COLUMNS](#vp-insert-columns)

### VP INSERT TABLE COLUMNS

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Syntax -->

**VP INSERT TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

<div class="no-index">

| Paramètres  | Type    |    | Description                                                                 |
| ----------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| tableName   | Text    | -> | Nom de table                                                                |
| column      | Integer | -> | Résultat:                                                   |
| count       | Text    | -> | Nombre de colonnes à ajouter (doit être >0)              |
| insertAfter | Integer | -> | `vk table insert before` ou `vk table insert after` *column*                |
| sheet       | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP INSERT TABLE COLUMNS` <!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary --> insère une ou *count* colonne(s) vide(s) dans le *tableName* spécifié à l'index *column* spécifié<!-- END REF -->.

Lorsqu'une colonne a été insérée avec cette commande, son contenu est généralement modifié à l'aide de la commande [VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes).

Dans le paramètre *insertAfter*, vous pouvez passer une des constantes suivantes pour indiquer si la ou les colonnes doivent être insérées avant ou après l'index *column* :

| Constante                | Valeur | Description                                                                                                                |
| ------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| `vk table insert before` | 0      | Insérer la(les) colonne(s) avant la *column* (par défaut si omis) |
| `vk table insert after`  | 1      | Insérer la(les) colonne(s) après la *column*                                         |

Cette commande insère certaines colonnes dans la table *tableName*, PAS dans la feuille. Le nombre total de colonnes de la feuille n'est pas impacté par la commande. Les données présentes à droite de la table (le cas échéant) sont automatiquement déplacées à droite en fonction du nombre de colonnes ajoutées.

Si *tableName* n'existe pas ou s'il n'y a pas assez d'espace dans la feuille, rien ne se passe.

#### Exemple

Voir les exemples pour [VP INSERT TABLE ROWS](#vp-insert-table-rows) et [VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes).

#### Voir également

[VP INSERT TABLE ROWS](#vp-insert-table-rows)<br/>[VP REMOVE TABLE COLUMNS](#vp-remove-table-columns)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)

### VP INSERT TABLE ROWS

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP INSERT TABLE ROWS.Syntax -->

**VP INSERT TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE ROWS.Params -->

<div class="no-index">

| Paramètres  | Type    |    | Description                                                                 |
| ----------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| tableName   | Text    | -> | Nom de table                                                                |
| row         | Integer | -> | Indice dans la table de la ligne de départ à insérer                        |
| count       | Text    | -> | Nombre de lignes à ajouter (doit être >0)                |
| insertAfter | Integer | -> | `vk table insert before` ou `vk table insert after` *row*                   |
| sheet       | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP INSERT TABLE ROWS` <!-- REF #_method_.VP INSERT TABLE ROWS.Summary -->insère une ou *count* ligne(s) vide(s) dans la *tableName* spécifiée à l'index *row* spécifié<!-- END REF -->.

Dans le paramètre *insertAfter*, vous pouvez passer l'une des constantes suivantes pour indiquer si la ou les lignes doivent être insérées avant ou après l'index *row* :

| Constante                | Valeur | Description                                                                                                        |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------ |
| `vk table insert before` | 0      | Insérer la(les) ligne(s) avant *row* (par défaut si omis) |
| `vk table insert after`  | 1      | Insérer la(les) ligne(s) après *row*                                         |

Cette commande insère des lignes dans la table *tableName*, PAS dans la feuille. Le nombre total de lignes de la feuille n'est pas impacté par la commande. Les données présentes sous la table (le cas échéant) sont automatiquement déplacées vers le bas en fonction du nombre de lignes ajoutées.

Si la table *tableName* est liée à un [contexte de données](#vp-set-data-context), la commande insère de nouveaux élément(s) vides dans la collection.

Si *tableName* n'existe pas ou s'il n'y a pas assez d'espace dans la feuille, rien ne se passe.

#### Exemple

Vous créez une table avec un contexte de données :

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500))

VP SET DATA CONTEXT("ViewProArea"; $context)

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../assets/en/ViewPro/table-base.png)

Vous voulez insérer deux lignes et deux colonnes dans la table, vous pouvez écrire :

```4d
VP INSERT TABLE ROWS("ViewProArea"; "PeopleTable"; 1; 2)
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 2)
```

![](../assets/en/ViewPro/table-insert.png)

#### Voir également

[VP INSERT TABLE COLUMNS](#vp-insert-table-columns)<br/>[VP REMOVE TABLE ROWS](#vp-remove-table-rows)

## M

### VP MOVE CELLS

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

<!-- REF #_method_.VP MOVE CELLS.Syntax -->

**VP MOVE CELLS** ( *originRange* : Object ; *targetRange* : Object ; *options* : Object )<!-- END REF -->

<!-- REF #_method_.VP MOVE CELLS.Params -->

<div class="no-index">

| Paramètres  | Type   |    | Description                                                |
| ----------- | ------ | -- | ---------------------------------------------------------- |
| originRange | Object | -> | Plage de cellules à copier                                 |
| targetRange | Object | -> | Plage cible pour les valeurs, le formatage et les formules |
| options     | Object | -> | Options supplémentaires                                    |

</div>
<!-- END REF -->

#### Description

La commande `VP MOVE CELLS` <!-- REF #_method_.VP MOVE CELLS.Summary -->déplace ou copie les valeurs, le style et les formules de *originRange* vers *targetRange*<!-- END REF -->.

*OrigRange* et *targetRange* peuvent se référer à différentes zones View Pro.

Dans *originRange*, passez un objet de plage contenant les valeurs, le style et les cellules de formule à copier ou à déplacer. Si *originRange* est une plage combinée, seule la première est utilisée.

Dans *targetRange*, passez la plage de cellules où les valeurs, le style et les formules des cellules seront copiées ou déplacées.

Le paramètre *options* a plusieurs propriétés :

| Propriété    | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| copy         | Boolean | Détermine si les valeurs, la mise en forme et les formules des cellules de *originRange* sont supprimés après l'exécution de la commande :<ul><li>*False* (par défaut) pour les supprimer</li><li>*True* pour les conserver</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| pasteOptions | Integer | Spécifie ce qui est collé. Spécifie ce qui est collé.Valeurs possibles : <p><table><tr><th>Valeur</th><th>Description</th></tr><tr><td>`vk clipboard options all` (par défaut)</td><td>Colle tous les objets de données, y compris les valeurs, la mise en forme et les formules.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Ne colle que la mise en forme..</td></tr><tr><td>`vk clipboard options formulas`</td><td>Ne colle que les formules.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Colle les formules et la mise en forme.</td></tr><tr><td>`vk clipboard options values`</td><td>Ne colle que les valeurs.</td></tr><tr><td>`vk clipboard options value and formatting` </td><td>Copie les valeurs et la mise en forme.</td> |

Les options de collage définies dans [workbook options](#vp-set-workbook-options) sont prises en compte.

#### Exemple

Pour copier le contenu, les valeurs, le formatage et les formules d'une plage d'origine :

```4d
var $originRange; $targetRange; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$targetRange:=VP Cells("ViewProArea"; 4; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.pasteOptions:=vk clipboard options all

VP MOVE CELLS($originRange; $targetRange; $options)
```

#### Voir également

[VP Copy to object](#vp-copy-to-object)<br/>[VP PASTE FROM OBJECT](#vp-paste-from-object)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## N

### VP Name

<!-- REF #_method_.VP Name.Syntax -->

**VP Name** ( *vpAreaName* : Text ; *rangeName* : Text { ; *sheet* : Integer }  ) : Object <!-- END REF -->

<!-- REF #_method_.VP Name.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                                                                                                |
| ---------- | ------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                                                                                                    |
| rangeName  | Text    | ->                          | Cet exemple de code copie d'abord le contenu, valeurs, formats et formules d'une plage dans un objet puis les colle dans une autre plage : |
| sheet      | Integer | ->                          | Résultat:                                                                                                                                  |
| Résultat   | Object  | <- | Plage nommée                                                                                                                                               |

</div>
<!-- END REF -->

#### Description

La commande `VP Name` <!-- REF #_method_.VP Name.Summary -->retourne un nouvel objet plage faisant référence à une plage nommée<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *rangeName* spécifie une plage de cellules nommée existante.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille de calcul spécifique où *rangeName* est défini. Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante ou l'intégralité du classeur (workbook) à l'aide des constantes suivantes :

- `vk current sheet`
- `vk workbook`

#### Exemple

Vous souhaitez assigner une valeur à une plage nommée "Total".

```4d
// nommer la cellule B5 Total
 VP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")
 $name:=VP Name("ViewProArea";" Total")
 VP SET NUM VALUE($name;285;"$#,###.00")
```

#### Voir également

[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP ALL](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Get names](#vp-get-names)<br/>[VP REMOVE NAME](#vp-remove-name)<br/>[VP Row](#vp-row)

### VP NEW DOCUMENT

<!-- REF #_method_.VP NEW DOCUMENT.Syntax -->

**VP NEW DOCUMENT** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP NEW DOCUMENT.Params -->

<div class="no-index">

| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro |

</div>
<!-- END REF -->

#### Description

La commande `VP NEW DOCUMENT` <!-- REF #_method_.VP NEW DOCUMENT. ummary -->charge et affiche un nouveau document par défaut dans l'objet zone de formulaire 4D View Pro *vpAreaName*<!-- END REF -->. Le nouveau document vide remplace toutes les données auparavant insérées dans la zone.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

#### Exemple

Vous souhaitez afficher un document vide dans l'objet formulaire "myVPArea" :

```4d
VP NEW DOCUMENT("myVPArea")
```

#### Voir également

[VP IMPORT DOCUMENT](#vp-import-document)

---

## O

### VP Object to font

<!-- REF #_method_.VP Object to font.Syntax -->

**VP Object to font** ( *fontObj* : Object ) : Text <!-- END REF -->

<!-- REF #_method_.VP Object to font.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                                                        |
| ---------- | ------ | --------------------------- | ---------------------------------------------------------------------------------- |
| fontObj    | Object | ->                          | <strong x-id="1">Notes sur le format de fichier SpreadJS</strong>: |
| Résultat   | Text   | <- | Police raccourcie (shorthand)                                   |

</div>
<!-- END REF -->

#### Description

La commande `VP Object to font` <!-- REF #_method_.VP Object to font.Summary -->retourne une chaîne de raccourci de police de *fontObj*<!-- END REF -->.

Dans *fontObj*, passez un objet contenant les propriétés de police. Les propriétés suivantes sont prises en charge :

| Propriété | Type | Description                                                                                                                             | Valeurs possibles                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Obligatoire |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| family    | text | Définit la police.                                                                                                      | tout type de famille de police standard ou générique. Ex : Ex : Ex : "Arial", "Helvetica", "serif", "arial,sans-serif"                                                                                                                                                                                                                                                                                    | Oui         |
| size      | text | Le line-height peut être ajouté au font-size : font-size/line-height : Ex : "15pt/20pt" | un nombre avec l'une des unités suivantes : <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"</li>ou l'une des constantes suivantes :<li>`vk font size large`</li><li>`vk font size larger`</li><li>`vk font size x large`</li><li>`vk font size xx large`</li><li>`vk font size small`</li><li>`vk font size smaller`</li><li>`vk font size x small`</li><li>`vk font size xx small`</li> | Oui         |
| style     | text | Style de police.                                                                                                        | <li>`vk font style italic`</li><li>`vk font style oblique`</li>                                                                                                                                                                                                                                                                                                                                                                                                           | Non         |
| variant   | text | Police en petites majuscules.                                                                                           | <li>`vk font variant small caps`</li>                                                                                                                                                                                                                                                                                                                                                                                                                                     | Non         |
| weight    | text | Définit l'épaisseur de la police.                                                                                       | <li>`vk font weight 100`</li><li>`vk font weight 200`</li><li>`vk font weight 300`</li><li>`vk font weight 400`</li><li>`vk font weight 500`</li><li>`vk font weight 600`</li><li>`vk font weight 700`</li><li>`vk font weight 800`</li><li>`vk font weight 900`</li><li>`vk font weight bold`</li><li>`vk font weight bolder`</li><li>`vk font weight lighter`</li>                                                                                                      | Non         |

Cet objet peut être créé à l'aide de la commande [VP Font to object](#vp-font-to-object).

La chaîne raccourcie retournée peut être affectée à la propriété "font" d'une cellule avec [VP SET CELL STYLE](#vp-set-cell-style), par exemple.

#### Exemple

```4d
$cellStyle:=VP Get cell style($range)

$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder

$cellStyle.font:=VP Object to font($font)
///$cellStyle.font contient "bolder oblique small-caps 16pt arial"
```

#### Voir également

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)

## P

### VP PASTE FROM OBJECT

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->

**VP PASTE FROM OBJECT** ( *rangeObj* : Object ; *dataObject* : Object {; *options* : Integer} )<!-- END REF -->

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                |
| ---------- | ------- | -- | -------------------------------------------------------------------------- |
| rangeObj   | Object  | -> | Pour lire les détails du style par défaut de ce document : |
| dataObject | Object  | -> | Objet contenant les données à coller                                       |
| options    | Integer | -> | Spécifie ce qui est collé                                                  |

</div>
<!-- END REF -->

#### Description

La commande `VP PASTE FROM OBJECT` <!-- REF #_method_.PASTE FROM OBJECT. ummary -->colle les contenus, styles et formules stockés dans *dataObject* dans l'objet *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez l'objet de plage de cellules dans lequel les valeurs, le formatage et/ou les cellules de formule seront collés. Si *rangeObj* fait référence à plusieurs cellules, seule la première est utilisée.

Dans *dataObject*, passez l'objet qui contient les données de la cellule, la mise en forme et les formules à coller.

Dans le paramètre facultatif *options*, vous pouvez spécifier ce qu'il faut coller dans la plage de cellules. Valeurs possibles :

| Constante                                      | Description                                                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `vk clipboard options all`                     | Colle tous les objets de données, y compris les valeurs, la mise en forme et les formules. |
| `vk clipboard options formatting`              | Ne colle que la mise en forme.                                                             |
| `vk clipboard options formulas`                | Colle uniquement les formules.                                                             |
| `vk clipboard options formulas and formatting` | Colle les formules et la mise en forme.                                                    |
| `vk clipboard options values`                  | Ne colle que les valeurs.                                                                  |
| `vk clipboard options value and formatting`    | Colle les valeurs et la mise en forme.                                                     |

Les options de collage définies dans [workbook options](#vp-set-workbook-options) sont prises en compte.

Si *options* fait référence à une option de collage qui n'est pas présente dans l'objet copié (par exemple, les formules), la commande ne fait rien.

#### Exemple

Voir l'exemple de [VP Copy to object](#vp-copy-to-object)

#### Voir également

[VP Copy to object](#vp-copy-to-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

### VP PRINT

<!-- REF #_method_.VP PRINT.Syntax -->

**VP PRINT** ( *vpAreaName* : Text  { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP PRINT.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP PRINT` <!-- REF #_method_.VP PRINT.Summary -->ouvre une fenêtre de dialogue d'impression pour imprimer *vpAreaName*<!-- END REF -->.

Passez la zone 4D View Pro à imprimer dans *vpAreaName*. La commande ouvrira la fenêtre de dialogue d'impression permettant de définir l'imprimante et les propriétés de la page.

> Les propriétés définies dans la fenêtre de dialogue d'impression concernent le papier de l'imprimante, ce ne sont pas les propriétés d'impression de la zone 4D View Pro. Printing properties for 4D View Pro areas are defined using the [VP SET PRINT INFO](#vp-set-print-info) command. Il est fortement recommandé que les propriétés de l'imprimante et de la zone 4D View Pro correspondent, sinon le document imprimé pourrait ne pas correspondre à vos attentes.

Dans le paramètre optionnel *sheet*, vous pouvez définir une feuille (sheet) spécifique à imprimer (la numérotation démarre à zéro). S'il est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante ou le workbook entier à l'aide des constantes suivantes :

- `vk current sheet`
- `vk workbook`

> * Les zones 4D View Pro ne peuvent être imprimées qu'avec la commande `VP PRINT`.
> * Les commandes du thème de langage 4D **Printing** ne sont pas supportées par `VP PRINT`.
> * Cette commande est destinée à l'impression individuelle par l'utilisateur final. Pour les tâches d'impression automatisés, il est conseillé d'exporter la zone 4D View Pro en format PDF avec la méthode [VP EXPORT DOCUMENT] (#vp-export-document).

#### Exemple

Le code suivant :

```4d
 VP PRINT("myVPArea")
```

... ouvrira une fenêtre de dialogue d'impression :

![](../assets/en/ViewPro/cmd_vpPrint.PNG)

#### Voir également

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP SET PRINT INFO](#vp-set-print-info)

## R

### VP RECOMPUTE FORMULAS

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->

**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->

<div class="no-index">

| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro |

</div>
<!-- END REF -->

#### Description

La commande `VP RECOMPUTE FORMULAS` <!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->évalue immédiatement toutes les formules dans *vpAreaName*<!-- END REF -->. . Par défaut, 4D calcule automatiquement les formules lorsqu'elles sont insérées, importées ou exportées. `VP RECOMPUTE FORMULAS` vous permet de forcer le calcul à tout moment (par exemple, si des modifications sont apportées aux formules ou si les formules contiennent des appels à la base de données). La commande lance l'exécution de la commande [VP FLUSH COMMANDS](#vp-flush-commands) pour exécuter toutes les commandes stockées et vider le buffer de commandes, puis calcule toutes les formules du classeur.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

> Assurez-vous que la commande [VP SUSPEND COMPUTING](#vp-suspend-computing) n'a pas été exécutée avant d'utiliser `VP RECOMPUTE FORMULAS`, sinon la commande ne fait rien.

#### Exemple

Pour actualiser toutes les forumules du workbook, saisissez le code suivant :

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

#### Voir également

[VP RESUME COMPUTING](#vp-resume-computing)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)

### VP REMOVE NAME

<!-- REF #_method_.VP REMOVE NAME.Syntax -->

**VP REMOVE NAME** ( *vpAreaName* : Text  ; *name*  : Text { ; *scope* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP REMOVE NAME.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                    |
| ---------- | ------- | -- | -------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                        |
| name       | Text    | -> | Résultat:                                      |
| scope      | Integer | -> | "Scope" cible (par défaut=feuille courante) |

</div>
<!-- END REF -->

#### Description

La commande `VP REMOVE NAME` <!-- REF #_method_.VP REMOVE NAME.Summary -->supprime la plage nommée ou la formule nommée passée dans le paramètre *name* dans le *scope* défini<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez la plage nommée ou la formule nommée que vous voulez supprimer avec *name*.

Vous pouvez définir où supprimer le nom dans *scope* en utilisant soit l'index de la feuille (le comptage commence à 0), soit les constantes suivantes :

- `vk current sheet`
- `vk workbook`

#### Exemple

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
//$formula=null
```

#### Voir également

[VP Name](#vp-name)

### VP REMOVE SHEET

<!-- REF #_method_.VP REMOVE SHEET.Syntax -->

**VP REMOVE SHEET** ( *vpAreaName* : Text ; *index*: Integer ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SHEET.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| index      | Integer | -> | Index de la feuille à supprimer         |

</div>
<!-- END REF -->

#### Voir également

[VP ADD SHEET](#vp-add-sheet)

#### Description

La commande `VP REMOVE SHEET` <!-- REF #_method_.VP REMOVE SHEET.Summary -->supprime la feuille avec l'*index* spécifié du document chargé dans *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *index*, passez l'index de la feuille à supprimer. Si le *index* passé n'existe pas, la commande ne fait rien.

> La numérotation démarre à 0.

#### Exemple

Le document comporte actuellement 3 feuilles :

![](../assets/en/ViewPro/vp-sheet-3.png)

Supprimer la troisième feuille :

```4d
VP REMOVE SHEET("ViewProArea";2)
```

![](../assets/en/ViewPro/vp-sheet-2.png)

### VP REMOVE SPAN

<!-- REF #_method_.VP REMOVE SPAN.Syntax -->

**VP REMOVE SPAN** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SPAN.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

</div>
<!-- END REF -->
#### Description

La commande `VP REMOVE SPAN` <!-- REF #_method_.VP REMOVE SPAN.Summary -->supprime la portée (span) des cellules dans *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet plage de la portée de la cellule. Les cellules fusionnées de la plage sont divisées en cellules individuelles.

#### Exemple

Pour retirer toutes les fusions de cellules de ce document :

![](../assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 //identifier toutes les cellules fusionnées 
 $span:=VP Get spans(VP All("ViewProArea"))

  //retirer les fusions
 VP REMOVE SPAN($span)
```

Résultat:

![](../assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

#### Voir également

[VP ADD SPAN](#vp-add-span)<br/>[VP Get spans](#vp-get-spans)

### VP REMOVE STYLESHEET

<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->

**VP REMOVE STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE STYLESHEET.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                                                                           |
| ---------- | ------- | -- | ------------------------------------------------------------------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                                                                               |
| styleName  | Text    | -> | Indique si les formules doivent être calculées uniquement lorsqu'elles sont demandées, la valeur par défaut est faux. |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis)                                                           |

</div>
<!-- END REF -->

#### Description

La commande `VP REMOVE STYLESHEET` <!-- REF #_method_.VP REMOVE STYLESHEET.Summary -->supprime la feuille de style passée dans le *styleName* du *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez la feuille de style à supprimer dans le paramètre *styleName*.

Vous pouvez définir, dans le paramètre optionnel *sheet*, l'emplacement dans lequel vous souhaitez supprimer le style, à l'aide de l'indice de la feuille (la numérotation commence à partir de 0) ou à l'aide des constantes suivantes :

- `vk current sheet`
- `vk workbook`

#### Exemple

Pour supprimer l'objet de style *GreenDashDotStyle* de la feuille courante :

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```

#### Voir également

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP Get stylesheets](#vp-get-stylesheets)

### VP REMOVE TABLE

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R6   | Ajout         |

</details>

<!-- REF #_method_.VP REMOVE TABLE.Syntax -->

**VP REMOVE TABLE** ( *vpAreaName* : Text; *tableName* : Text {; *options* : Integer} {; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Résultat:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| tableName  | Text    | -> | $param:=New collection&#xA;$param.push(New collection(1;2;3;False)) //première ligne, 4 valeurs&#xA;$param.push(New collection) //deuxième ligne, inchangé&#xA;$param.push(New collection(4;5;Null;"hello";"world")) // troisième ligne, 5 valeurs&#xA;$param.push(New collection(6;7;8;9)) // quatrième ligne, 4 valeurs&#xA;$param.push(New collection(Null;New object("value";Current date;"time";42))) //cinquième ligne, 1 valeur&#xA;VP SET VALUES(VP Cell("ViewProArea";2;1);$param) |
| options    | Integer | -> | Options supplémentaires                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

</div>
<!-- END REF -->

#### Description

La commande `VP REMOVE TABLE` <!-- REF #_method_.VP REMOVE TABLE.Summary -->supprime une table<!-- END REF --> que vous avez créée avec [VP CREATE TABLE](#vp-create-table).

Dans *vpAreaName*, passez le nom de la zone contenant la table à supprimer.

Dans *tableName*, passez le nom de la table à supprimer.

Dans les *options*, vous pouvez spécifier des comportements supplémentaires. Valeurs possibles :

| Constante             | Valeur | Description                                      |
| --------------------- | ------ | ------------------------------------------------ |
| vk table remove all   | 0      | Tput supprimer y compris le style et les données |
| vk table remove style | 1      | Supprimer le style mais conserver les données    |
| vk table remove data  | 2      | Supprimer les données mais conserver le style    |

Les noms des tables sont définis au niveau de la feuille. Vous pouvez spécifier où se trouve la table en utilisant le paramètre facultatif *sheet* (la numérotation commence à 0).

#### Exemple

Pour supprimer la table "people" dans la deuxième feuille et conserver les données dans les cellules :

```4d
VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)
```

#### Voir également

[VP CREATE TABLE](#vp-create-table)

### VP REMOVE TABLE COLUMNS

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Syntax -->

**VP REMOVE TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *sheet* : Integer }} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| tableName  | Text    | -> | Nom de table                                                                |
| column     | Integer | -> | Indice dans la table de la colonne de départ à supprimer                    |
| count      | Text    | -> | Nombre de colonnes à supprimer (doit être >0)            |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP REMOVE TABLE COLUMNS` <!-- REF #_method_.VP REMOVE TABLE COLUMNS.Summary -->supprime une ou *count* colonne(s) dans la *tableName* spécifiée à l'index *column* spécifié<!-- END REF -->. La commande supprime les valeurs et les styles.

La commande supprime les colonnes de la table *tableName*, PAS de la feuille. Le nombre total de colonnes de la feuille n'est pas impacté par la commande. Le nombre total de colonnes de la feuille n'est pas impacté par la commande.

Si *tableName* n'existe pas, rien ne se passe.

#### Exemple

Pour supprimer deux colonnes à partir de la 3ème colonne de la table "dataTable" :

```4d
VP REMOVE TABLE COLUMNS("ViewProArea"; "dataTable"; 3; 2)
```

#### Voir également

[VP INSERT TABLE COLUMNS](#vp-insert-table-columns)<br/>[VP REMOVE TABLE ROWS](#vp-remove-table-rows)

### VP REMOVE TABLE ROWS

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP REMOVE TABLE ROWS.Syntax -->

**VP REMOVE TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *sheet* : Integer }} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE ROWS.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| tableName  | Text    | -> | Nom de table                                                                |
| row        | Integer | -> | Indice dans la table de la ligne de départ à supprimer                      |
| count      | Text    | -> | Nombre de lignes à supprimer (doit être >0)              |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP REMOVE TABLE ROWS` <!-- REF #_method_.VP REMOVE TABLE ROWS.Summary -->supprime une ou *count* ligne(s) de la *tableName* spécifiée à l'index *row* spécifié<!-- END REF -->. La commande supprime les valeurs et les styles.

Cette commande supprime les lignes de la table *tableName*, PAS de la feuille. Le nombre total de lignes de la feuille n'est pas impacté par la commande. Le nombre total de lignes de la feuille n'est pas impacté par la commande.

Vous avez ajouté deux boutons au formulaire afin que l'utilisateur puisse suspendre/reprendre les calculs :

Si *tableName* n'existe pas, rien ne se passe.

#### Exemple

Pour supprimer deux lignes à partir de la 3e ligne de la table "dataTable" :

```4d
VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)
```

#### Voir également

[VP INSERT TABLE ROWS](#vp-insert-table-rows)<br/>[VP REMOVE TABLE COLUMNS](#vp-remove-table-columns)

### VP RESET SELECTION

<!-- REF #_method_.VP RESET SELECTION.Syntax -->

**VP RESET SELECTION** ( *vpAreaName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP RESET SELECTION.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP RESET SELECTION` <!-- REF #_method_.VP RESET SELECTION.Summary -->désélectionne toutes les cellules, ce qui entraîne l'absence de sélection courante ou de cellule active visible<!-- END REF -->.

> Une cellule active par défaut (cellule A1) reste définie pour les commandes 4D View Pro.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

#### Exemple

Vous souhaitez déselectionner toutes les cellules (la cellule active et toute autre cellule sélectionée) :

```4d
VP RESET SELECTION("myVPArea")
```

#### Voir également

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP RESIZE TABLE

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP RESIZE TABLE.Syntax -->

**VP RESIZE TABLE** ( *rangeObj* : Object; *tableName* : Text )<!-- END REF -->

<!-- REF #_method_.VP RESIZE TABLE.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                                                                                                                              |
| ---------- | ------ | -- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| rangeObj   | Object | -> | Une erreur est retournée si le paramètre <code>filePath</code> est invalide, ou si le fichier est manquant ou mal-formé. |
| tableName  | Text   | -> | Nom de la table                                                                                                                          |

</div>
<!-- END REF -->

#### Description

La commande `VP RESIZE TABLE` <!-- REF #_method_.VP RESIZE TABLE.Summary -->modifie la taille de la *tableName* par rapport à *rangeObj*<!-- END REF -->.

Les règles suivantes s'appliquent :

- Les en-têtes doivent rester dans la même ligne et la plage de table résultante doit chevaucher la plage de table originale.
- Si le nombre de lignes de la table redimensionnée est inférieur au nombre de lignes initiales, les valeurs à l'intérieur des lignes ou colonnes recadrées sont conservées si elles n'étaient pas liées à un [contexte de données](#vp-set-data-context), sinon elles sont supprimées.
- Si la table se développe sur des cellules contenant des données :
  - si des lignes sont ajoutées, les données sont supprimées,
  - si des colonnes sont ajoutées, les données sont conservées et affichées dans de nouvelles colonnes.

Si *tableName* n'existe pas, rien ne se passe.

#### Exemple

Vous créez une table avec un contexte de données :

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500))

VP SET DATA CONTEXT("ViewProArea"; $context)

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../assets/en/ViewPro/table-base.png)

Vous voulez ajouter une colonne avant et après la table ainsi que deux lignes vides. Vous pouvez écrire :

```4d
VP RESIZE TABLE(VP Cells("ViewProArea"; 0; 1; 4; 6); "PeopleTable")
```

![](../assets/en/ViewPro/table-resize.png)

#### Voir également

[VP CREATE TABLE](#vp-create-table)<br/>[VP Get table range](#vp-get-table-range)

### VP RESUME COMPUTING

<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->

**VP RESUME COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RESUME COMPUTING.Params -->

<div class="no-index">

| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro |

</div>
<!-- END REF -->

#### Description

La commande `VP RESUME COMPUTING` <!-- REF #_method_.VP RESUME COMPUTING.Summary --> relance le calcul des formules dans *vpAreaName*<!-- END REF -->.

La commande réactive le service de calcul de 4D View Pro. Toutes les formules impactées par les changements effectués pendant que les calculs étaient suspendus sont mises à jour, et les formules ajoutées après l'exécution de `VP RESUME COMPUTING` sont calculées.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

> Le service de calcul de 4D View Pro maintient un compteur d'actions de suspension/reprise. Par conséquent, chaque exécution de `VP RESUME COMPUTING` doit être équilibrée par une exécution correspondante de la commande [VP SUSPEND COMPUTING](#vp-suspend-computing).

#### Exemple

Voir l'exemple dans [VP SUSPEND COMPUTING](#vp-suspend-computing).

#### Voir également

[VP RECOMPUTE FORMULAS](#vp-recompute-formulas)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)

### VP Row

<!-- REF #_method_.VP Row.Syntax -->

**VP Row** ( *vpAreaName* : Text; *row* : Integer { ; *rowCount* : Integer { ; *sheet* : Integer } } ) : Object <!-- END REF -->

<!-- REF #_method_.VP Row.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                 |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |
| row        | Integer | ->                          | Indice de la ligne                                                          |
| rowCount   | Integer | ->                          | Nombre de lignes                                                            |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Plage de ligne(s)                                        |

</div>
<!-- END REF -->

#### Description

La commande `VP Row` <!-- REF #_method_.VP Row.Summary -->retourne un nouvel objet plage référençant une ou plusieurs lignes spécifiques<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *row* définit la première ligne de la plage de lignes. Passez l'indice de la ligne (la numérotation commence à zéro) dans ce paramètre. *rowCount* doit être supérieur à 0.

Le paramètre optionnel *rowCount* vous permet de définir le nombre total de lignes comprises dans la plage. *rowCount* doit être supérieur à 0. Si omis, la valeur sera définie à 1 par défaut.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

#### Exemple

Vous souhaitez définir une plage pour la ligne ci-dessous (dans la feuille courante) :

![](../assets/en/ViewPro/cmd_vpRow.PNG)

Vous pouvez écrire :

```4d
$row:=VP Row("ViewProArea";9) // row 10
```

#### Voir également

[VP All](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)

### VP ROW AUTOFIT

<!-- REF #_method_.VP ROW AUTOFIT.Syntax -->

**VP ROW AUTOFIT** ( *rangeObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP ROW AUTOFIT.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

</div>
<!-- END REF -->

#### Description

La commande `VP ROW AUTOFIT` <!-- REF #_method_.VP ROW AUTOFIT.Summary -->dimensionne automatiquement les ligne(s) de *rangeObj* en fonction de leur contenu<!-- END REF -->.

Dans *rangeObj*, passez un objet plage contenant une plage de lignes dont la taille sera automatiquement gérée.

#### Exemple

Les lignes suivantes n'affichent pas correctement le texte :

![](../assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)

```4d
 VP ROW AUTOFIT(VP Row("ViewProArea";1;2))
```

Résultat:

![](../assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)

#### Voir également

[VP Column autofit](#vp-column-autofit)

### VP Run offscreen area

<!-- REF #_method_.VP Run offscreen area.Syntax -->

**VP Run offscreen area** ( *parameters* : Object) : Mixed<!-- END REF -->

<!-- REF #_method_.VP Run offscreen area.Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                                                            |
| ---------- | ------ | --------------------------- | -------------------------------------------------------------------------------------- |
| parameters | Object | ->                          | Objet contenant les attributs de la zone hors écran                                    |
| Résultat   | Mixed  | <- | La propriété `.result` de l'objet `.onEvent`, ou Null si aucune valeur n'est retournée |

</div>
<!-- END REF -->

#### Description

La commande `VP Run offscreen area` <!-- REF #_method_.VP Run offscreen area. ummary -->crée une zone hors écran en mémoire qui peut être utilisée pour traiter les commandes et les fonctions de la zone 4D View Pro<!-- END REF -->.

Dans l'objet *parameters*, passez une ou plusieurs des propriétés optionnelles suivantes. Ces propriétés seront accessibles via la commande `This` au sein de la méthode `onEvent` et feront référence à l'instance :

| Propriété          | Type                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| area               | text                               | Le nom de la zone hors écran. S'il est omis ou null, un nom générique est assigné (ex : OffscreenArea1).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| onEvent            | objet (formula) | Une méthode callback qui sera lancée lorsque la zone hors écran sera prête. Il peut s'agir soit<li>d'une fonction `onEvent` d'une classe,</li><li>soit d'un objet `Formula`.</li>Par défaut, la méthode de rappel est appelée lors de l'événement [`On VP Ready`](../Events/onVpReady.md), [`On Load`](../Events/onLoad.md), [`On Unload`](../Events/onUnload.md), [`On End URL Loading`](../Events/onEndUrlLoading.md), [`On URL Loading Error`](../Events/onUrlLoadingError.md), [`On VP Range Changed`](../Events/onVpRangeChanged.md) ou [`On Timer`](../Events/onTimer.md). La méthode de rappel peut être utilisée pour accéder à la [variable de l'objet de formulaire 4D View Pro](configuring.md#4d-view-pro-form-object-variable). |
| autoQuit           | boolean                            | True (valeur par défaut) si la commande doit interrompre l'exécution de la formule lorsque les événements [`On End URL Loading`](../Events/onEndUrlLoading.md) ou [`On URL Loading Error`](../Events/onUrlLoadingError.md) sont générés. Si False, vous devez utiliser les commandes `CANCEL` ou `ACCEPT` dans la méthode callback *onEvent*.                                                                                                                                                                                                                                                                                                                                                                                                             |
| timeout            | number                             | Durée maximale (exprimée en secondes) avant la fermeture de la zone si aucun événement n'est généré. Si elle est fixée à 0, aucune limitation n'est appliquée. Valeur par défaut : 60                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Résultat           | mixte                              | Résultat du traitement (le cas échéant)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `<customProperty>` | mixte                              | Tout attribut personnalisé qui sera disponible dans la méthode callback *onEvent*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

La propriété suivante est automatiquement ajoutée par la commande, si nécessaire :

| Propriété      | Type    | Description                                            |
| -------------- | ------- | ------------------------------------------------------ |
| timeoutReached | boolean | Ajouté avec la valeur vrai si le timeout a été dépassé |

> La zone hors écran n'est disponible que lors de l'exécution de la commande `VP Run offscreen area`. Elle sera automatiquement détruite à la fin de l'exécution.

Les commandes suivantes peuvent être utilisées dans la méthode callback (de rétro-appel) :

- `ACCEPT`
- `CANCEL`
- `SET TIMER`
- `WA Evaluate JavaScript`
- `WA EXECUTE JAVASCRIPT FUNCTION`

#### Exemple 1

Vous souhaitez créer une zone 4D View Pro hors écran et lire la valeur d'une cellule :

```4d
// cs.OffscreenArea class declaration
Class constructor ($path : Text)
 This.filePath:=$path

// This function will be called on each event of the offscreen area
Function onEvent()
 Case of
  :(FORM Event.code=On VP Ready)
      VP IMPORT DOCUMENT(This.area;This.filePath)
       This.result:=VP Get value(VP Cell(This.area;6;22))

       ALERT("The G23 cell contains the value: "+String(This.result))
 End case

```

La méthode callback *OffscreenArea* :

```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

#### Exemple 2

Vous souhaitez charger un grand document hors écran, attendre que tous les calculs soient terminés et l'exporter au format PDF :

```4d
//cs.OffscreenArea class declaration
Class constructor($pdfPath : Text)
 This.pdfPath:=$pdfPath
 This.autoQuit:=False
 This.isWaiting:=False

Function onEvent()
 Case of
     :(FORM Event.code=On VP Ready)
 // Document import
   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
         This.isWaiting:=True

 // Start a timer to verify if all calculations are finished.
 // If during this period the "On VP Range Changed" is thrown, the timer will be restarted
 // The time must be defined according to the computer configuration.
   SET TIMER(60)

  :(FORM Event.code=On VP Range Changed)
 // End of calculation detected. Restarts the timer
         If(This.isWaiting)
           SET TIMER(60)
         End if

  :(FORM Event.code=On Timer)
 // To be sure to not restart the timer if you call others 4D View command after this point
         This.isWaiting:=False

 // Stop the timer
   SET TIMER(0)

 // Start the PDF export
        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))

     :(FORM Event.code=On URL Loading Error)
         CANCEL
 End case
```

La méthode callback *OffscreenArea* :

```4d
$o:=cs.OffscreenArea.new()

$result:=VP Run offscreen area($o)
```

#### Voir également

[Article de blog : Fin du chargement du document](https://blog.4d.com/4d-view-pro-end-of-document-loading/)

## S

### VP SET ACTIVE CELL

<!-- REF #_method_.VP SET ACTIVE CELL.Syntax -->

**VP SET ACTIVE CELL** ( *rangeObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET ACTIVE CELL.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

</div>
<!-- END REF -->

#### Description

La commande `VP SET ACTIVE CELL` <!-- REF #_method_.VP SET ACTIVE CELL.Summary -->définit une cellule spécifiée comme active<!-- END REF -->.

In *rangeObj*, pass a range containing a single cell as an object (see [VP Cell](#vp-cell)). Si *rangeObj* n'est pas une plage de cellules ou contient plusieurs plages, la première cellule de la première plage est utilisée.

#### Exemple

Le code suivant déterminera comme active la cellule de la colonne D, ligne 5 :

```4d
$activeCell:=VP Cell("myVPArea";3;4)
VP SET ACTIVE CELL($activeCell)
```

![](../assets/en/ViewPro/cmd_vpSetActiveCell.PNG)

#### Voir également

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP SET ALLOWED METHODS

<!-- REF #_method_.VP SET ALLOWED METHODS.Syntax -->

**VP SET ALLOWED METHODS** ( *methodObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET ALLOWED METHODS.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                                    |
| ---------- | ------ | -- | ---------------------------------------------- |
| methodObj  | Object | -> | Méthodes autorisées dans les zones 4D View Pro |

</div>
<!-- END REF -->

> **Compatibilité**
>
> For greater flexiblity, it is recommended to use the [`VP SET CUSTOM FUNCTIONS`](#vp-set-custom-functions) command which allows you to designate 4D formulas that can be called from 4D View Pro areas. Dès que `VP SET CUSTOM FUNCTIONS` est appelé, les appels de `VP SET ALLOWED METHODS` sont ignorés. 4D View Pro supporte également la commande générique `SET ALLOWED METHODS` de 4D si ni `VP SET CUSTOM FUNCTIONS` ni `VP SET ALLOWED METHODS` ne sont appelés, Cependant, l'utilisation de la commande générique n'est pas recommandée.

#### Description

La commande `VP SET ALLOWED METHODS` <!-- REF #_method_.VP SET ALLOWED METHODS.Summary -->désigne les méthodes projets qui peuvent être appelées dans des formules 4D View Pro<!-- END REF -->. Cette commande s'applique à toutes les zones 4D View Pro qui ont été crées après l'appel de la commande durant la session. Elle peut être appelée à plusieurs reprises dans la même session pour créer différentes configurations.

Par défaut, pour des raisons de sécurité, si vous n'exécutez pas la commande `VP SET ALLOWED METHODS`, aucun appel de méthode n'est autorisé dans les zones de 4D View Pro -- sauf si la commande générique `SET ALLOWED METHODS` de 4D a été utilisée (voir la note de compatibilité). L'utilisation d'une méthode non autorisée dans une formule affiche une erreur #NAME? dans la zone 4D View Pro.

Dans le paramètre *methodObj*, passez un objet dans lequel chaque propriété est le nom d'une fonction à définir dans les zones 4D View Pro:

| Propriété        |            |                                                                                | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ---------- | ------------------------------------------------------------------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<functionName>` |            |                                                                                | Object              | Description de la fonction personnalisée. Le nom de propriété `<functionName>` définit le nom de la fonction personnalisée à afficher dans les formules de 4D View Pro (les espaces ne sont pas autorisés)                                                                                                                                                                                                                                                                                                                     |
|                  | method     |                                                                                | Text                | (obligatoire) Nom de la méthode projet 4D existante à autoriser                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                  | parameters |                                                                                | Collection d'objets | Collection de paramètres (dans l'ordre dans lequel ils sont définis dans la méthode).                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                  |            | \[ ].name | Text                | Nom du paramètre à afficher pour le `<functionName>`.**Note** : les noms de paramètres ne doivent pas contenir d'espaces.                                                                                                                                                                                                                                                                                                                                                                                         |
|                  |            | \[ ].type | Number              | Type de paramètre. Supported types:<li>`Is Boolean`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>If omitted, by default the value is automatically sent with its type, except date or time values which are sent as an object (see [Parameters](formulas.md#parameters) section). If type is `Is object`, the object has the same structure as the object returned by [`VP Get value`](#vp-get-value). |
|                  | summary    |                                                                                | Text                | Description de la fonction à afficher dans 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                  | minParams  |                                                                                | Number              | Nombre minimum de paramètres                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | maxParams  |                                                                                | Number              | Nombre maximum de paramètres. Si vous passez un nombre supérieur à la largeur de parameters, il est possible de déclarer des paramètres "optionnels" avec leur type par défaut                                                                                                                                                                                                                                                                                                                                                                    |

#### Exemple

Vous souhaitez autoriser deux méthodes dans vos zones 4D View Pro :

```4d
var $allowed : Object
$allowed:=New object //paramètre de la commande

$allowed.Hello:=New object //Créer une première fonction simple nommée "Hello"
$allowed.Hello.method:="My_Hello_Method" //définit la méthode 4D
$allowed.Hello.summary:="Hello prints hello world"

$allowed.Byebye:=New object //Créer une deuxième fonction avec des paramètres nommée "Byebye"
$allowed.Byebye.method:="My_ByeBye_Method"
$allowed.Byebye.parameters:=New collection
$allowed.Byebye.parameters.push(New object("name";"Message";"type";Is text))
$allowed.Byebye.parameters.push(New object("name";"Date";"type";Is date))
$allowed.Byebye.parameters.push(New object("name";"Time";"type";Is time))
$allowed.Byebye.summary:="Byebye prints a custom timestamp"
$allowed.Byebye.minParams:=3
$allowed.Byebye.maxParams:=3

VP SET ALLOWED METHODS($allowed)
```

Une fois ce code exécuté, les fonctions définies peuvent être utilisées dans des formules 4D View Pro :

![](../assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)

> Dans les formules de 4D View Pro, les noms des fonctions sont automatiquement affichés en majuscules.

#### Voir également

[4D functions](formulas.md#4d-functions)<br/>[VP SET CUSTOM FUNCTIONS](#vp-set-custom-functions)

### VP SET BINDING PATH

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #_method_.VP SET BINDING PATH.Syntax -->

**VP SET BINDING PATH** ( *rangeObj* : Object  ; *dataContextAttribute*  : Text) <!-- END REF -->

<!-- REF #_method_.VP SET BINDING PATH.Params -->

<div class="no-index">

| Paramètres           | Type   |    | Description                           |
| -------------------- | ------ | -- | ------------------------------------- |
| rangeObj             | Object | -> | Objet plage                           |
| dataContextAttribute | Text   | -> | Nom de l'attribut à lier à *rangeObj* |

</div>
<!-- END REF -->

#### Description

La commande `VP SET BINDING PATH` <!-- REF #_method_.VP SET BINDING PATH.Summary -->lie un attribut du contexte de données d'une feuille à *rangeObj*<!-- END REF -->. After you set a data context using the [SET DATA CONTEXT](#vp-set-data-context) method. Lors du chargement, si le contexte de données contient l'attribut, la valeur de *dataContextAttribute* est automatiquement affichée dans les cellules de *rangeObj*.

Dans *rangeObj*, passez un objet qui est soit une plage de cellules, soit une plage combinée de cellules.

- Si *rangeObj* est une plage avec plusieurs cellules, la commande lie l'attribut à la première cellule de la plage.
- Si *rangeObj* contient plusieurs plages de cellules, la commande lie l'attribut à la première cellule de chaque plage.

Dans *dataContextAttribute*, passez le nom de l'attribut à lier à *rangeObj*. Si *dataContextAttribute* est une chaîne vide, la fonction supprime la liaison courante.

> Les attributs de type collection ne sont pas pris en charge. Lorsque vous passez le nom d'un attribut de collection, la commande ne fait rien.

#### Exemple

Définir un contexte de données et lier les attributs `firstName` et `lastName` aux cellules :

```4d
var $p : Object

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $p)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")
```

![](../assets/en/ViewPro/vp-set-data-context-bind.png)

#### Voir également

[VP Get binding path](#vp-get-binding-path)<br/>[VP Get data context](#vp-get-data-context)<br/>[VP SET DATA CONTEXT](#vp-get-data-context)

### VP SET BOOLEAN VALUE

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->

**VP SET BOOLEAN VALUE** ( *rangeObj* : Object  ; *boolValue* : Boolean) <!-- END REF -->

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description               |
| ---------- | ------- | -- | ------------------------- |
| rangeObj   | Object  | -> | Objet plage               |
| boolValue  | Boolean | -> | Valeur du booléen à fixer |

</div>
<!-- END REF -->

#### Description

La commande `VP SET BOOLEAN VALUE` <!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->assigne une valeur booléenne spécifiée à une plage de cellules désignées<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

Le paramètre *boolValue* vous permet de passer la valeur booléenne (**True** ou **False**) qui sera assignée à *rangeObj*.

#### Exemple

```4d
//Fixez la valeur de la cellule à False
 VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```

#### Voir également

[VP SET VALUE](#vp-set-value)

### VP SET BORDER

<!-- REF #_method_.VP SET BORDER.Syntax -->

**VP SET BORDER** ( *rangeObj* : Object ; *borderStyleObj* : Object  ; *borderPosObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET BORDER.Params -->

<div class="no-index">

| Paramètres     | Type   |    | Description                               |
| -------------- | ------ | -- | ----------------------------------------- |
| rangeObj       | Object | -> | Objet plage                               |
| borderStyleObj | Object | -> | Voici le résultat :       |
| borderPosObj   | Object | -> | Objet contenant la position de la bordure |

</div>
<!-- END REF -->

#### Description

La commande `VP SET BORDER` <!-- REF #_method_.VP SET BORDER.Summary -->applique le(s) style(s) de bordure défini(s) dans *borderStyleObj* et *borderPosObj* à la plage définie dans *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellules où le style de bordure sera appliqué. If the *rangeObj* contains multiple cells, borders applied with `VP SET BORDER` will be applied to the *rangeObj* as a whole (as opposed to the [`VP SET CELL STYLE`](#vp-set-cell-style) command which applies borders to each cell of the *rangeObj*). Si une feuille de style a déjà été appliquée, `VP SET BORDER` remplacera les paramètres de bordure précédemment appliqués pour le *rangeObj*.

Le paramètre *borderStyleObj* vous permet de définir le style des lignes de la bordure. Le *borderStyleObj* prend en charge les propriétés suivantes :

| Propriété | Type    | Description                                                         | Valeurs possibles                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------- | ------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color     | text    | Définit la couleur de la bordure. . | Couleur CSS syntaxe "#rrggbb" (syntaxe préférée), couleur CSS syntaxe "rgb(r,g,b)" (syntaxe alternative), nom de couleur CSS (syntaxe alternative)                                                                                                                                                                                                                                                                |
| style     | Integer | Définit le style de la bordure. .   | <li>`vk line style dash dot`</li><li>`vk line style dash dot dot`</li><li>`vk line style dashed`</li> <li>`vk line style dotted`</li><li>`vk line style double`</li><li>`vk line style empty`</li><li>`vk line style hair`</li> <li>`vk line style medium`</li><li>`vk line style medium dash dot`</li><li>`vk line style medium dash dot dot`</li><li>`vk line style medium dashed`</li><li>`vk line style slanted dash dot`</li><li>`vk line style thick`</li><li>`vk line style thin`</li> |

Vous pouvez définir la position du *borderStyleObj* (c'est-à-dire l'endroit où la ligne est appliquée) avec le *borderPosObj* :

| Propriété       | Type    | Description                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| all             | boolean | Style de la ligne de bordure appliqué à toutes les bordures.                           |
| left            | boolean | Style de la ligne de bordure appliqué à la bordure de gauche.                          |
| top             | boolean | Style de la ligne de bordure appliqué à la bordure supérieure.                         |
| right           | boolean | Style de la ligne de bordure appliqué à la bordure de droite.                          |
| bottom          | boolean | Style de la ligne de bordure appliqué à la bordure inférieure.                         |
| outline         | boolean | Style de la ligne de bordure appliqué uniquemet aux bordures extérieures.              |
| inside          | boolean | Style de la ligne de bordure appliqué uniquemet aux bordures intérieures.              |
| innerHorizontal | boolean | Style de la ligne de bordure appliqué uniquemet aux bordures horizontales intérieures. |
| innerVertical   | boolean | Style de la ligne de bordure appliqué uniquemet aux bordures verticales intérieures.   |

#### Exemple 1

Ce code applique la bordure suivante autour de la plage :

```4d
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
```

![](../assets/en/ViewPro/cmd_vpSETBORDER1.PNG)

#### Exemple 2

This code demonstrates the difference between `VP SET BORDER` and setting borders with the [`VP SET CELL STYLE`](#vp-set-cell-style) command:

```4d
// Appliquer des bordure à l'aide de VP SET BORDER
 $border:=New object("color";"red";"style";vk line style thick)
 $option:=New object("outline";True)
 VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)

 // // Appliquer des bordures à l'aide de VP SET CELL STYLE
 $cellStyle:=New object
 $cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)
 $cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)
 VP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)
```

![](../assets/en/ViewPro/cmd_vpSETBORDER2.PNG)

#### Voir également

[VP SET CELL STYLE](#vp-set-cell-style)

### VP SET CELL STYLE

<!-- REF #_method_.VP SET CELL STYLE.Syntax -->

**VP SET CELL STYLE** ( *rangeObj* : Object  ; *styleObj*  : Object) <!-- END REF -->

<!-- REF #_method_.VP SET CELL STYLE.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                                                                    |
| ---------- | ------ | -- | ------------------------------------------------------------------------------ |
| rangeObj   | Object | -> | Objet plage                                                                    |
| styleObj   | Object | -> | Le nom de la troisième feuille est "Total premier trimestre" : |

</div>
<!-- END REF -->

#### Description

La commande `VP SET CELL STYLE` <!-- REF #_method_.VP SET CELL STYLE.Summary -->applique le(s) style(s) défini(s) dans *styleObj* aux cellules définies dans *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellules où le style sera appliqué. Si le *rangeObj* contient plusieurs cellules, le style est appliqué à chaque cellule.

> Borders applied with `VP SET CELL STYLE` will be applied to each cell of the *rangeObj*, as opposed to the [VP SET BORDER](#vp-set-border) command which applies borders to the *rangeObj* as a whole.

Le paramètre *styleObj* permet de transmettre un objet contenant des paramètres de style. Vous pouvez utiliser une feuille de style existante ou créer un nouveau style. Vous pouvez utiliser une feuille de style existante ou créer un nouveau style.

Attribuez la valeur NULL pour supprimer un style et rétablir les paramètres de style par défaut (le cas échéant) :

- si vous attribuez la valeur NULL au paramètre *styleObj*, tous les paramètres de style seront supprimés de *rangeObj*,
- si vous attribuez la valeur NULL à un attribut, cet attribut spécifique sera supprimé de *rangeObj*.

For more information about style objects and style sheets, see the [Style Objects](configuring.md#style-objects) paragraph.

#### Exemple

```4d
$style:=New object
$style.font:="8pt Arial"
$style.backColor:="Azure"
$style.foreColor:="red"
$style.hAlign:=1
$style.isVerticalText:=True
$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)
$style.backgroundImage:=Null //supprimer un attribut spécifique

VP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)
```

![](../assets/en/ViewPro/cmd_vpSetCellStyle.PNG)

#### Voir également

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP Get cell style](#vp-get-cell-style)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET BORDER](#vp-set-border)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)

### VP SET COLUMN ATTRIBUTES

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Syntax -->

**VP SET COLUMN ATTRIBUTES** ( *rangeObj* : Object  ; *propertyObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Params -->

<div class="no-index">

| Paramètres  | Type   |    | Description                                |
| ----------- | ------ | -- | ------------------------------------------ |
| rangeObj    | Object | -> | Objet plage                                |
| propertyObj | Object | -> | Objet contenant des propriétés de colonnes |

</div>
<!-- END REF -->

#### Description

La commande `VP SET COLUMN ATTRIBUTES`<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Summary --> applique les attributs définis dans le paramètre *propertyObj* pour les colonnes de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage. Si la plage contient des colonnes et des lignes, les attributs s'appliquent uniquement aux colonnes.

Le paramètre *propertyObj* vous permet de renseigner les attributs à appliquer aux colonnes de *rangeObj*. Ces attributs sont :

| Propriété | Type    | Description                                                                         |
| --------- | ------- | ----------------------------------------------------------------------------------- |
| width     | number  | Largeur de colonne exprimée en pixels                                               |
| pageBreak | boolean | Vrai pour insérer un saut de page avant la première colonne de la plage, sinon faux |
| visible   | boolean | Vrai si la colonne est visible, sinon faux                                          |
| resizable | boolean | Vrai si la colonne peut être redimensionnée, sinon faux                             |
| header    | text    | Texte de l'en-tête de la colonne                                                    |

#### Exemple

Pour modifier la taille de la deuxième colonne et définir un en-tête, le code suivant :

```4d
var $column; $properties : Object

$column:=VP Column("ViewProArea";1) //column B
$properties:=New object("width";100;"header";"Hello World")

VP SET COLUMN ATTRIBUTES($column;$properties)
```

![](../assets/en/ViewPro/cmd_vpSetColumnAttributes.PNG)

#### Voir également

[VP Column](#vp-column)<br/>[VP Get column attributes](#vp-get-column-attributes)<br/>[VP Get row attributes](#vp-get-row-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP SET COLUMN COUNT

<!-- REF #_method_.VP SET COLUMN COUNT.Syntax -->

**VP SET COLUMN COUNT** ( *vpAreaName* : Text ; *columnCount* : Integer { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN COUNT.Params -->

<div class="no-index">

| Paramètres  | Type    |    | Description                                                                 |
| ----------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| columnCount | Integer | -> | Nombre de colonnes                                                          |
| sheet       | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP SET COLUMN COUNT` <!-- REF #_method_.VP SET COLUMN COUNT.Summary -->définit le nombre total de colonnes dans *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez le nombre total de colonnes dans le paramètre *columnCount*. *columnCount* doit être supérieur à 0.

Dans le paramètre facultatif *sheet*, vous pouvez désigner une feuille de calcul spécifique où le *columnCount* sera appliqué (le comptage commence à 0). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

#### Exemple

Le code suivant définit cinq colonnes dans la zone 4D View Pro :

```4d
VP SET COLUMN COUNT("ViewProArea";5)
```

![](../assets/en/ViewPro/cmd_vpSetColumnCount.PNG)

#### Voir également

[VP Get column count](#vp-get-column-count)<br/>[VP Get row count](#vp-get-row-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP SET CURRENT SHEET

<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->

**VP SET CURRENT SHEET** ( *vpAreaName* : Text ; *sheet* : Integer)<!-- END REF -->

<!-- REF #_method_.VP SET CURRENT SHEET.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| sheet      | Integer | -> | Index de la nouvelle feuille courante   |

</div>
<!-- END REF -->

#### Description

La commande `VP SET CURRENT SHEET` <!-- REF #_method_.VP SET CURRENT SHEET.Summary -->définit la feuille courante dans *vpAreaName*<!-- END REF -->. La feuille courante est la feuille sélectionnée dans le document.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *sheet*, passez l'index de la feuille à définir comme feuille courante. Si le nombre passé est inférieur à 0 ou dépasse le nombre de feuilles, la commande ne fait rien.

> La numérotation démarre à 0.

#### Exemple

La feuille courante du document est la première feuille :

![first-sheet-selected](../assets/en/ViewPro/vp-sheet-3-select.png)

Définit la feuille courante à la troisième feuille :

```4d
VP SET CURRENT SHEET("ViewProArea";2)
```

![](../assets/en/ViewPro/vp-sheet-3-select.png)

#### Voir également

[VP Get current sheet](#vp-get-current-sheet)

### VP SET CUSTOM FUNCTIONS

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->

**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| formulaObj | Object | -> | Objet formule                           |

</div>
<!-- END REF -->

#### Description

La commande `VP SET CUSTOM FUNCTIONS` <!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->désigne les formules 4D qui peuvent être appelées directement à partir de formules 4D View Pro<!-- END REF -->. Les fonctions personnalisées n'étant pas stockées dans le document, la commande `VP SET CUSTOM FUNCTIONS` doit être exécutée dans l'événement formulaire `On Load`.

Les formules spécifiées par `VP SET CUSTOM FUNCTIONS` apparaissent dans un menu pop-up lorsque la première lettre de leur nom est saisie. See the [Formulas and Functions](formulas.md) page.

> Si `VP SET CUSTOM FUNCTIONS` est appelé plusieurs fois pour la même zone, dans la même session, seul le dernier appel est pris en compte.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre *formulaObj*, passez un objet contenant les formules 4D qui peuvent être appelées à partir des formules 4D View Pro ainsi que des propriétés supplémentaires. Chaque propriété `customFunction` passée dans *formulaObj* devient le nom d'une fonction dans la zone 4D View Pro.

| Propriété          |            |                                                                                | Type                | Description                                                                                                                                                                                                                 |
| ------------------ | ---------- | ------------------------------------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |                                                                                | Object              | Description de la fonction personnalisée. `<customFunction>` définit le nom de la fonction personnalisée à afficher dans les formules de 4D View Pro (les espaces ne sont pas autorisés) |
|                    | formula    |                                                                                | Object              | Objet formule 4D (obligatoire). Voir la commande `Formula`.                                                                                                              |
|                    | parameters |                                                                                | Collection d'objets | Collection de paramètres (dans l'ordre dans lequel ils sont définis dans la formule)                                                                                                                     |
|                    |            | \[ ].name | Text                | Nom du paramètre à afficher dans 4D View Pro                                                                                                                                                                                |
|                    |            | \[ ].type | Number              | Type de paramètre. Nom de table                                                                                                                                                                             |
|                    | summary    |                                                                                | Text                | Description de la formule à afficher dans 4D View Pro                                                                                                                                                                       |
|                    | minParams  |                                                                                | Number              | Nombre minimum de paramètres                                                                                                                                                                                                |
|                    | maxParams  |                                                                                | Number              | Nombre maximum de paramètres. Passer un nombre supérieur à la taille de *parameters* permet de déclarer des paramètres "optionnels" avec un type par défaut                                                 |

> **ATTENTION**

> - As soon as `VP SET CUSTOM FUNCTIONS` is called, the methods allowed by the [VP SET ALLOWED METHODS](#vp-set-allowed-methods) command (if any) are ignored in the 4D View Pro area.
> - Dès que `VP SET CUSTOM FUNCTIONS` est appelé, les fonctions basées sur les commandes `SET TABLE TITLES` et `SET FIELD TITLES` sont ignorées dans la zone 4D View Pro.

#### Exemple

Vous souhaitez utiliser des objets Formule dans une zone 4D View Pro pour ajouter des chiffres, récupérer le sexe et le nom de famille d'un client :

```4d
Case of
    :(FORM Event.code=On Load)

       var $o : Object
       $o:=New object

// Définir la fonction "addnum" d'une méthode nommée "addnum"
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))

// Définir la fonction "ClientLastName" d'un champ de base de données
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Nom de famille du client courant"

// Définir la fonction "label" d'une expression 4D avec un paramètre
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))

// Définir la fonction "Title" d'une variable nommée "Title"
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)

       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)

End case
```

#### Voir également

[VP SET ALLOWED METHODS](#vp-set-allowed-methods)

### VP SET DATA CONTEXT

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #_method_.VP SET DATA CONTEXT.Syntax -->

**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataObj* : Object {; *options* : Object } {; *sheet* : Integer} )<br/>**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataColl* : Collection ; {*options* : Object } {; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET DATA CONTEXT.Params -->

<div class="no-index">

| Paramètres | Type       |    | Description                                                                                                                                                             |
| ---------- | ---------- | -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vpAreaName | Text       | -> | Nom d'objet formulaire zone 4D View Pro                                                                                                                                 |
| dataObj    | Object     | -> | Le même code ainsi que les sélecteurs verticaux et horizontaux ont été modifiés pour afficher la même cellule en haut à droite de la zone 4D View Pro : |
| dataColl   | Collection | -> | \|                                                                                                                                                                      |
| options    | Object     | -> | Options supplémentaires                                                                                                                                                 |
| sheet      | Integer    | -> | Indice de la feuille                                                                                                                                                    |

</div>
<!-- END REF -->

#### Description

La commande `VP SET DATA CONTEXT` <!-- REF #_method_.VP SET DATA CONTEXT.Summary -->définit le contexte de données d'une feuille<!-- END REF -->. A data context is an object or a collection bound to a worksheet, and whose contents can be used to automatically fill the sheet cells, either by using an autogenerate option or the [VP SET BINDING PATH](#vp-set-binding-path) method. On the other hand, the [VP Get data context](#vp-get-data-context) command can return a context containing user modifications.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *dataObj* ou *dataColl*, passez un objet ou une collection contenant les données à charger dans le contexte de données. Les images sont converties en schémas URI de données.

Pour passer une valeur Time dans *dataObj* ou *dataColl*, encapsulez-la dans un objet avec les propriétés suivantes (voir [exemple 4](#example-4---date-and-time-syntax)):

| Propriété | Type                                     | Description                                                             |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Null | Valeur à placer dans le contexte                                        |
| time      | Real                                     | Valeur heure (en secondes) à placer dans le contexte |

Dans *options*, vous pouvez passer un objet qui spécifie des options supplémentaires. Il peut contenir les propriétés suivantes :

| Propriété           | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| reset               | Object | Vrai pour réinitialiser le contenu de la feuille avant de charger le nouveau contexte, Faux (par défaut) dans le cas contraire.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| autoGenerateColumns | Object | Utilisé uniquement lorsque les données sont une collection. Vrai (par défaut) pour spécifier que les colonnes doivent être générées automatiquement lorsque le contexte de données est lié. Dans ce cas, les règles suivantes s'appliquent : <ul><li>Si *dataColl* est une collection d'objets, les noms d'attributs sont utilisés comme titres de colonnes (voir exemple 2).</li><li>Si *dataColl* contient des sous-collections de valeurs scalaires, chaque sous-collection définit les valeurs d'une ligne (voir exemple 3). La première sous-collection détermine le nombre de colonnes créées.</li></ul> |

Dans *sheet*,, transmettez l'index de la feuille qui recevra le contexte de données. Si aucun numéro d'indice n'est passé, le contexte est appliqué à la feuille courante.

If you export your document to an object using [VP Export to object](#vp-export-to-object), or to a 4DVP document using [VP EXPORT DOCUMENT](#vp-export-document), the `includeBindingSource` option lets you copy the contents of the current contexts as cell values in the exported object or document. Pour plus de détails, reportez-vous à la description de ces méthodes.

#### Exemple

Passer un objet et lier les données de contexte aux cellules de la première ligne :

```4d
var $data : Object

$data:=New object

$data.firstName:="Freehafer"
$data.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $data)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

```

![](../assets/en/ViewPro/vp-set-data-context-bind.png)

#### Exemple 2

Passer une collection d'objets et générer automatiquement des colonnes :

```4d
var $options : Object
var $data : Collection

$data:=New collection()
$data.push(New object("firstname"; "John"; "lastname"; "Smith"))
$data.push(New object("firstname"; "Mary"; "lastname"; "Poppins"))

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../assets/en/ViewPro/vp-set-data-context-2.png)

#### Exemple 3

Les *données* passées en paramètre sont une collection qui contient des sous-collections. Chaque sous-collection définit une ligne.

```4d
var $data : Collection
var $options : Object

$data:=New collection
$data.push(New collection(1; 2; 3; False; ""))  // 5 colonnes sont créées
$data.push(New collection)  // la 2e ligne est vide
$data.push(New collection(4; 5; Null; "hello"; "world"))  // la 3e ligne a 5 valeurs
$data.push(New collection(6; 7; 8; 9))  // la 4e ligne a 4 valeurs

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../assets/en/ViewPro/vp-set-data-context-3.png)

#### Exemple 4 - Syntaxe date et heure

```4d
var $data : Collection
var $options : Object

$data:= New collection()

// Les dates peuvent être passées en valeurs scalaires
$data.push(New collection("Date"; Current date))

// Les heures doivent être passées en tant qu'attributs d'objet
$data.push(New collection("Time"; New object("time"; 5140)))

// exemple Date + heure
$data.push(New collection("Date + Time"; New object("value"; Current date; "time"; 5140)))

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

Voici le résultat une fois les colonnes générées :

![](../assets/en/ViewPro/vp-set-data-context-date-time.png)

#### Voir également

[VP SET BINDING PATH](#vp-set-binding-path)<br/>[VP Get binding path](#vp-get-binding-path)<br/>[VP Get data context](#vp-get-data-context)

### VP SET DATE TIME VALUE

<!-- REF #_method_.VP SET DATE TIME VALUE.Syntax -->

**VP SET DATE TIME VALUE** ( *rangeObj* : Object ; *dateValue* : Date ; *timeValue* : Time {; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE TIME VALUE.Params -->

<div class="no-index">

| Paramètres    | Type   |    | Description                                                                                                           |
| ------------- | ------ | -- | --------------------------------------------------------------------------------------------------------------------- |
| rangeObj      | Object | -> | Objet plage                                                                                                           |
| dateValue     | Date   | -> | Valeur date à fixer                                                                                                   |
| timeValue     | Time   | -> | Dans les formules de 4D View Pro, les noms des fonctions sont automatiquement affichés en majuscules. |
| formatPattern | Text   | -> | Format de la valeur                                                                                                   |

</div>
<!-- END REF -->

#### Description

La commande `VP SET DATE TIME VALUE` <!-- REF #_method_.VP SET DATE TIME VALUE.Summary -->assigne une valeur date et heure spécifique à une plage de cellule désignée<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

Le paramètre *dateValue* indique une valeur date à assigner à *rangeObj*.

Le paramètre *timeValue* indique une valeur heure (exprimée en secondes) à assigner à *rangeObj*.

Le paramètre optionnel *formatPattern* définit un modèle pour les paramètres *dateValue* et *timeValue*. For information on patterns and formatting characters, please refer to the [Date and time formats](configuring.md#date-and-time-formats) section.

#### Exemple

```4d
//Attribuer la date et l'heure locales à la valeur de la cellule 

 VP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)

 //Attribuer le 18 décembre à la valeur de la cellule
 VP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)
```

#### Voir également

[4D View Pro cell format](configuring.md#cell-format)<br/>[VP SET DATE VALUE](#vp-set-date-value)<br/>[VP SET TIME VALUE](#vp-set-time-value)<br/>[VP SET VALUE](#vp-set-value)

### VP SET DATE VALUE

<!-- REF #_method_.VP SET DATE VALUE.Syntax -->

**VP SET DATE VALUE** ( *rangeObj* : Object ; *dateValue* : Date { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE VALUE.Params -->

<div class="no-index">

| Paramètres    | Type   |    | Description         |
| ------------- | ------ | -- | ------------------- |
| rangeObj      | Object | -> | Objet plage         |
| dateValue     | Date   | -> | Valeur date à fixer |
| formatPattern | Text   | -> | Format de la valeur |

</div>
<!-- END REF -->

#### Description

La commande `VP SET DATE VALUE` <!-- REF #_method_.VP SET DATE VALUE.Summary --> attribue une valeur de date spécifiée à une plage de cellules désignée<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellule(s) dont vous voulez spécifier la valeur. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

Le paramètre *dateValue* indique une valeur date à assigner à *rangeObj*.

L'option *formatPattern* définit un modèle pour le paramètre *dateValue*. Passez un format personnalisé ou utilisez ou utilisez l'une des constantes suivantes :

| Constante               | Description                             | Configuration par défaut des US |
| ----------------------- | --------------------------------------- | ------------------------------- |
| `vk pattern long date`  | Format ISO 8601 long pour la date       | "dddd, dd MMMM yyyy"            |
| `vk pattern month day`  | Format ISO 8601 pour le mois et le jour | "MMMM dd"                       |
| `vk pattern short date` | Format ISO 8601 court pour la date      | "MM/dd/yyyy"                    |
| `vk pattern year month` | Format ISO 8601 pour le mois et l'année | "yyyy MMMM"                     |

For information on patterns and formatting characters, please refer to the [Date and time formats](configuring.md#date-and-time-formats) section.

#### Exemple

```4d
//Définir la valeur de la cellule à la date du jour
 VP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))

 //Définir la valeur de la cellule à une date spécifique avec un format désigné
 VP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")
 VP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)
```

#### Voir également

[4D View Pro cell format](configuring.md#cell-format)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET VALUE](#vp-set-value)

### VP SET DEFAULT STYLE

<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->

**VP SET DEFAULT STYLE** ( *vpAreaName* : Text ; *styleObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET DEFAULT STYLE.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                    |
| ---------- | ------- | -- | ------------------------------------------------------------------------------ |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                        |
| styleObj   | Object  | -> | Le nom de la troisième feuille est "Total premier trimestre" : |
| sheet      | Integer | -> | Indice de la feuille (par défaut = feuille courante)        |

</div>
<!-- END REF -->

#### Description

La commande `VP SET DEFAULT STYLE` <!-- REF #_method_.VP SET DEFAULT STYLE. ummary -->définit le style dans le *styleObj* comme style par défaut pour une feuille *sheet*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le *styleObj* vous permet de passer un objet contenant des paramètres de style. Vous pouvez utiliser une feuille de style existante ou créer un nouveau style. For more information, see the [Style objects](configuring.md#style-objects) paragraph.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille de calcul spécifique où le style sera défini. Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

#### Exemple

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" //couleur light purple

VP SET DEFAULT STYLE("myDoc";$style)
```

![](../assets/en/ViewPro/cmd_vpSetDefaultStyle.PNG)

#### Voir également

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP Get default style](#vp-get-default-style)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET BORDER](#vp-set-border)<br/>[VP SET CELL STYLE](#vp-set-cell-style)

### VP SET FIELD

<!-- REF #_method_.VP SET FIELD.Syntax -->

**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FIELD.Params -->

<div class="no-index">

| Paramètres    | Type    |    | Description     |
| ------------- | ------- | -- | --------------- |
| rangeObj      | Object  | -> | Objet plage     |
| champ         | Pointer | -> | \|              |
| formatPattern | Text    | -> | Format du champ |

</div>
<!-- END REF -->

#### Description

La commande `VP SET FIELD` <!-- REF #_method_.VP SET FIELD.Summary -->attribue un champ virtuel de la base de données 4D à une plage de cellules désignée<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellule(s) dont vous voulez spécifier la valeur. Dans *rangeObj*, passez une plage de cellule(s) dont vous voulez spécifier la valeur.

The *field* parameter specifies a 4D database [virtual field](formulas.md#referencing-fields-using-the-virtual-structure) to be assigned to the *rangeObj*. Le nom de la structure virtuelle pour *field* peut être visualisé dans la barre de formule. Si l'une des cellules de *rangeObj* a un contenu existant, elle sera remplacée par *field*.

L'option *formatPattern* définit un modèle pour le paramètre *field*. You can pass any valid [custom format](configuring.md#cell-format).

#### Exemple

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

#### Voir également

[VP SET VALUE](#vp-set-value)

### VP SET FORMULA

<!-- REF #_method_.VP SET FORMULA.Syntax -->

**VP SET FORMULA** ( *rangeObj* : Object ; *formula* : Text { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULA.Params -->

<div class="no-index">

| Paramètres    | Type   |    | Description                                                                                                                                                                                                                                            |
| ------------- | ------ | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| rangeObj      | Object | -> | Objet plage                                                                                                                                                                                                                                            |
| formula       | Text   | -> | Nom d'un paramètre à afficher pour <code>&lt;functionName&gt;</code>.<strong x-id="1">Note</strong>: Les noms des paramètres ne doivent pas contenir d'espace. |
| formatPattern | Text   | -> | Format du champ                                                                                                                                                                                                                                        |

</div>
<!-- END REF -->

#### Description

La commande `VP SET FORMULA` <!-- REF #_method_.VP SET FORMULA.Summary -->assigne une formule spécifiée ou une méthode 4D à une plage de cellules désignées<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. Si *rangeObj* comprend plusieurs cellules, la formule spécifiée sera liée à chaque cellule.

Le paramètre *formula* spécifie une formule ou un nom de méthode 4D à affecter à la *rangeObj*.

> Si *formula* est une chaîne de caractères, utilisez le point `.` comme séparateur numérique et la virgule `,` comme séparateur de paramètres.
> If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](#vp-set-allowed-methods) command.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *formula*.

Vous supprimez la formule dans *rangeObj* en la remplaçant par une chaîne vide ("").

#### Exemple 1

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
```

#### Exemple 2

Pour supprimer la formule :

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"")
```

#### Exemple 3

```4d
VP SET FORMULA($range; "SUM(A1,B7,C11)") //"," pour séparer les paramètres
```

#### Voir également

[Cell format](configuring.md#cell-format)<br/>[VP Get Formula](#vp-get-formula)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUE](#vp-set-value)

### VP SET FORMULAS

<!-- REF #_method_.VP SET FORMULAS.Syntax -->

**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULAS.Params -->

<div class="no-index">

| Paramètres  | Type       |    | Description                                                                |
| ----------- | ---------- | -- | -------------------------------------------------------------------------- |
| rangeObj    | Object     | -> | Pour lire les détails du style par défaut de ce document : |
| formulasCol | Collection | -> | Collection de formules                                                     |

</div>
<!-- END REF -->

#### Description

La commande `VP SET FORMULAS` <!-- REF #_method_.VP SET FORMULAS.Summary -->attribue une collection de formules à partir de la plage de cellules spécifiée<!-- END REF -->.

In *rangeObj*, pass a range of the cell (created with [VP Cell](#vp-cell)) whose formula you want to specify. Si *rangeObj* comprend plusieurs plages, seule la première plage est utilisée.

Le *formulesCol* est une collection à deux dimensions :

- La collection de premier niveau contient des sous-collections de formules. Chaque sous-collection définit une ligne.
- Chaque sous-collection définit les valeurs des cellules de la ligne. Les valeurs doivent être des éléments textuels contenant les formules à associer aux cellules.

> Si la formule est une chaîne de caractères, utilisez le point `.` comme séparateur numérique et la virgule `,` comme séparateur de paramètres.
> If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](#vp-set-allowed-methods) command.

Vous supprimez les formules dans *rangeObj* en les remplaçant par une chaîne vide ("").

#### Exemple 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // Première ligne
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Deuxième ligne

VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Associer les formules et les formules
```

*myMethod* :

```4d
$0:=$1*3.33
```

![](../assets/en/ViewPro/cmd_vpSetFormulas.PNG)

#### Exemple 2

Pour supprimer des formules :

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // première collection
$formulas.push(New collection("";"")) // deuxième collection

VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assigner à des cellules
```

#### Voir également

[VP Get Formulas](#vp-get-formulas)<br/>[VP GET VALUES](#vp-get-values)[VP SET FORMULA](#vp-set-formula)<br/>[VP SET VALUES](#vp-set-values)

### VP SET FROZEN PANES

<!-- REF #_method_.VP SET FROZEN PANES.Syntax -->

**VP SET FROZEN PANES** ( *vpAreaName* : Text ; *paneObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET FROZEN PANES.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| paneObj    | Object  | -> | Objet contenant des informations sur les colonnes et lignes figées          |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP SET FROZEN PANES` <!-- REF #_method_.VP SET FROZEN PANES.Summary -->définit l'état gelé des colonnes et des lignes du *paneObj* afin qu'elles soient toujours affichées dans le *vpAreaName*<!-- END REF -->. . Un trait continu s'affiche pour indiquer que des lignes et colonnes sont figées. L'emplacement du trait dépend de l'emplacement de la ligne ou colonne figée dans la feuille :

- **Colonnes à gauche ou à droite** : Pour les colonnes situées à gauche de la feuille, la ligne est affichée sur le côté droit de la dernière colonne gelée. Pour les colonnes situées à droite de la feuille, le trait s'affiche sur le côté gauche de la prmeière colonne figée.
- **Lignes en haut ou en bas**: Pour les lignes en haut de la feuille, la ligne est affichée en dessous de la dernière ligne gelée. Pour les lignes situées en bas de la feuille, le trait s'affiche au-dessus de la première ligne figée.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez passer un objet définissant les colonnes et les lignes à geler dans le paramètre *paneObj*. Si vous fixez la valeur d'une propriété de colonne ou de ligne à zéro, cela réinitialise (ne fige plus) la propriété. Si une propriété est définie sur une valeur inférieure à zéro, la commande ne fait rien. Vous pouvez passer :

| Propriété           | Type    | Description                                              |
| ------------------- | ------- | -------------------------------------------------------- |
| columnCount         | Integer | Le nombre de colonnes figées sur la gauche de la feuille |
| trailingColumnCount | Integer | Le nombre de colonnes figées sur la droite de la feuille |
| rowCount            | Integer | Le nombre de lignes figées en haut de la feuille         |
| trailingRowCount    | Integer | Le nombre de lignes figées en bas de la feuille          |

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

#### Exemple

Vous souhaitez figer les trois premières colonnes de gauche, deux colonnes de droite et la première ligne :

```4d
var $panes : Object

$panes:=New object
$panes.columnCount:=3
$panes.trailingColumnCount:=2
$panes.rowCount:=1

VP SET FROZEN PANES("ViewProArea";$panes)
```

![](../assets/en/ViewPro/cmd_vpSetFrozenPanes.PNG)

#### Voir également

[VP Get frozen panes](#vp-get-frozen-panes)

### VP SET NUM VALUE

<!-- REF #_method_.VP SET NUM VALUE.Syntax -->

**VP SET NUM VALUE** ( *rangeObj* : Object ; *numberValue* : Number { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET NUM VALUE.Params -->

<div class="no-index">

| Paramètres    | Type   |    | Description                                                                                                          |
| ------------- | ------ | -- | -------------------------------------------------------------------------------------------------------------------- |
| rangeObj      | Object | -> | Objet plage                                                                                                          |
| numberValue   | Number | -> | Les colonnes suivantes sont toutes de la même taille et n'affichent pas certaines parties du texte : |
| formatPattern | Text   | -> | Format de la valeur                                                                                                  |

</div>
<!-- END REF -->

#### Description

La commande `VP SET NUM VALUE` <!-- REF #_method_.VP SET NUM VALUE.Summary -->assigne une valeur numérique spécifique à une plage de cellules désignée<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

Le paramètre *numberValue* indique une valeur numérique à assigner à *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *numberValue* parameter.

#### Exemple

```4d
//Définir la valeur de la cellule à 2
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)

//Définir la valeur de la cellule et la formater en dollars
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")
```

#### Voir également

[Cell format](configuring.md#cell-format)<br/>[VP SET VALUE](#vp-set-value)

### VP SET PRINT INFO

<!-- REF #_method_.VP SET PRINT INFO.Syntax -->

**VP SET PRINT INFO** ( *vpAreaName* : Text ; *printInfo* : Object { ; *sheet* : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET PRINT INFO.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom de la zone 4D View Pro                                                  |
| printInfo  | Object  | -> | Objet contenant les propriétés de la ligne                                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP SET PRINT INFO` <!-- REF #_method_.VP SET PRINT INFO.Summary -->définit les attributs à utiliser lors de l'impression du *vpAreaName*<!-- END REF -->.

Passez le nom de la zone 4D View Pro pour l'imprimer dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez passer un objet contenant des définitions pour divers attributs d'impression dans le paramètre *printInfo*. To view the full list of the available attributes, see [Print Attributes](configuring.md#print-attributes).

Dans le paramètre optionnel *sheet*, vous pouvez définir une feuille (sheet) spécifique à imprimer (la numérotation démarre à zéro). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

#### Exemple

Le code suivant imprimera une nouvelle zone 4D View Pro dans un document PDF :

```4d
var $printInfo : Object

//Déclarer l'objet attributs d'impression
$printInfo:=New object

//Définir attributs d'impression
$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"
$printInfo.firstPageNumber:=1
$printInfo.footerRight:="page &P of &N"
$printInfo.orientation:=vk print page orientation landscape
$printInfo.centering:=vk print centering horizontal
$printInfo.columnStart:=0
$printInfo.columnEnd:=8
$printInfo.rowStart:=0
$printInfo.rowEnd:=24

$printInfo.showGridLine:=True

//Ajouter le logo de l'entreprise
$printInfo.headerLeftImage:=logo.png
$printInfo.headerLeft:="&G"

$printInfo.showRowHeader:=vk print visibility hide
$printInfo.showColumnHeader:=vk print visibility hide
$printInfo.fitPagesWide:=1
$printInfo.fitPagesTall:=1

//Imprimer le document PDF
VP SET PRINT INFO ("ViewProArea";$printInfo)

//Exporter le PDF
VP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))
```

Le PDF :

![](../assets/en/ViewPro/cmd_vpSetPrintInfo.PNG)

#### Voir également

[4D View Pro print attributes](configuring.md#print-attributes)<br/>[VP Convert to picture](#vp-convert-to-picture)<br/>[VP Get print info](#vp-get-print-info)<br/>[VP PRINT](#vp-print)

### VP SET ROW ATTRIBUTES

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Syntax -->

**VP SET ROW ATTRIBUTES** ( *rangeObj* : Object ; *propertyObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Params -->

<div class="no-index">

| Paramètres  | Type   |    | Description                                                                                                                                                                                                              |
| ----------- | ------ | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| rangeObj    | Object | -> | Une fois que l'export est terminé, <code>VP EXPORT DOCUMENT</code> exécute automatiquement la méthode définie dans la propriété <em x-id="3">formula</em> de <em x-id="3">paramObj</em>, le cas échéant. |
| propertyObj | Object | -> | Objet contenant des propriétés de lignes                                                                                                                                                                                 |

</div>
<!-- END REF -->

#### Description

La commande `VP SET ROW ATTRIBUTES` <!-- REF #_method_.VP SET ROW ATTRIBUTES.Summary -->applique les attributs définis dans *propertyObj* aux lignes de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage. Si la plage contient des colonnes et des lignes, les attributs s'appliquent uniquement aux lignes.

Le paramètre *propertyObj* vous permet de spécifier les attributs à appliquer aux lignes dans *rangeObj*. Ces attributs sont :

| Propriété | Type    | Description                                                                       |
| --------- | ------- | --------------------------------------------------------------------------------- |
| height    | number  | Hauteur de la ligne exprimée en pixels                                            |
| pageBreak | boolean | Vrai pour insérer un saut de page avant la première ligne de la plage, sinon faux |
| visible   | boolean | Vrai si la ligne est visible, sinon faux                                          |
| resizable | boolean | Vrai si la ligne peut être redimensionnée, sinon faux                             |
| header    | text    | Texte de l'en-tête de la ligne                                                    |

#### Exemple

Pour modifier la taille de la deuxième ligne et définir l'en-tête, saisissez le code suivant :

```4d
var $row; $properties : Object

$row:=VP Row("ViewProArea";1)
$properties:=New object("height";75;"header";"June")

VP SET ROW ATTRIBUTES($row;$properties)
```

![](../assets/en/ViewPro/cmd_vpSetRowAttributes.PNG)

#### Voir également

[VP Get row attributes](#vp-get-row-attributes)<br/>[VP get column attributes](#vp-get-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP SET ROW COUNT

<!-- REF #_method_.VP SET ROW COUNT.Syntax -->

**VP SET ROW COUNT** ( *vpAreaName* : Text ; *rowCount* : Integer { ; *sheet* : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET ROW COUNT.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| rowCount   | Integer | -> | Nombre de lignes                                                            |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP SET ROW COUNT` <!-- REF #_method_.VP SET ROW COUNT.Summary -->définit le nombre total de lignes dans *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez le nombre total de lignes dans le paramètre *rowCount*. *rowCount* doit être supérieur à 0.

Dans le paramètre facultatif *sheet*, vous pouvez désigner une feuille de calcul spécifique où le *rowCount* sera appliqué (la numérotation commence à 0). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

#### Exemple

Le code suivant définit cinq lignes dans la zone 4D View Pro :

```4d
VP SET ROW COUNT("ViewProArea";5)
```

![](../assets/en/ViewPro/cmd_vpSetRowCount.PNG)

#### Voir également

[VP Get column count](#vp-get-column-count)<br/>[VP get row-count](#vp-get-row-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)

### VP SET SELECTION

<!-- REF #_method_.VP SET SELECTION.Syntax -->

**VP SET SELECTION** ( *rangeObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET SELECTION.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                        |
| ---------- | ------ | -- | ---------------------------------- |
| rangeObj   | Object | -> | Objet plage de toutes les cellules |

</div>
<!-- END REF -->

#### Description

La commande `VP SET SELECTION` <!-- REF #_method_.VP SET SELECTION.Summary -->définit les cellules spécifiées comme la sélection et la première cellule comme la cellule active<!-- END REF -->.

Dans *rangeObj*, passez un objet plage de cellule(s) à désigner comme sélection courante.

#### Exemple

```4d
$currentSelection:=VP Combine ranges(VP Cells("myVPArea";3;2;1;6);VP Cells("myVPArea";5;7;1;7))
VP SET SELECTION($currentSelection)
```

![](../assets/en/ViewPro/cmd_vpSetSelection.PNG)

#### Voir également

[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP ADD SELECTION](#vp-add-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP SET SHEET COUNT

<!-- REF #_method_.VP SET SHEET COUNT.Syntax -->

**VP SET SHEET COUNT** ( *vpAreaName* : Text ; *number* : Integer  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET COUNT.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| number     | Integer | -> | Nombre de feuilles                      |

</div>
<!-- END REF -->

#### Description

La commande `VP SET SHEET COUNT` <!-- REF #_method_.VP SET SHEET COUNT.Summary -->définit le nombre de feuilles dans *vpAreaName*<!-- END REF -->.

Dans `number`, passez un nombre correspondant au nombre de feuilles que le document contiendra après l'exécution de la commande.

> **Avertissement** : La commande supprimera des feuilles si le nombre précédent de feuilles dans votre document est supérieur au nombre transmis. Par exemple, si votre document comporte 5 feuilles et que vous avez fixé le nombre de feuilles à 3, la commande supprimera les feuilles numérotées 4 et 5.

#### Exemple

Le document comporte actuellement une feuille :

![](../assets/en/ViewPro/vp-sheet-1.png)

Pour régler le nombre de feuilles sur 3 :

```4d
VP SET SHEET COUNT("ViewProArea";3)
```

![](../assets/en/ViewPro/vp-sheet-3.png)

#### Voir également

[VP Get sheet count](#vp-get-sheet-count)

### VP SET SHEET NAME

<!-- REF #_method_.VP SET SHEET NAME.Syntax -->

**VP SET SHEET NAME** ( *vpAreaName* : Text ; *name* : Text {; *sheet*: Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHEET NAME.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                                                       |
| ---------- | ------- | -- | ----------------------------------------------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                                                           |
| name       | Text    | -> | La collection retournée par <code>VP Get values</code> contient une collection bidimensionnelle : |
| sheet      | Integer | -> | Index de la feuille à renommer                                                                                    |

</div>
<!-- END REF -->

#### Description

La commande `VP SET SHEET NAME` <!-- REF #_method_.VP SET SHEET NAME.Summary -->renomme une feuille dans le document chargé dans *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *name*, passez le nouveau nom de la feuille.

Dans *sheet*, passez le numéro de la feuille à renommer.

> La numérotation démarre à 0.

Si aucune *sheet* n'est fournie, la commande renomme la feuille courante.

Le nouveau nom ne peut pas contenir les caractères suivants : `*, :, [, ], ?,\,/`

La commande ne fait rien si :

- le nouveau nom contient des caractères interdits
- la valeur du nouveau nom est vide
- le nouveau nom existe déjà
- the passed *sheet* does not exist

#### Exemple

Le nom de la troisième feuille est "Total premier trimestre" :

```4d
VP SET SHEET NAME("ViewProArea";"Total first quarter";2)
```

![](../assets/en/ViewPro/vp-sheet-index-name.png)

### VP SET SHEET OPTIONS

<!-- REF #_method_.VP SET SHEET OPTIONS.Syntax -->

**VP SET SHEET OPTIONS** ( *vpAreaName* : Text; *sheetOptions* : Object { ; *sheet* : Integer}  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET OPTIONS.Params -->

<div class="no-index">

| Paramètres   | Type    |    | Description                                                                                 |
| ------------ | ------- | -- | ------------------------------------------------------------------------------------------- |
| vpAreaName   | Text    | -> | Nom de la zone 4D View Pro                                                                  |
| sheetOptions | Object  | -> | Une erreur est retournée si l'objet <em x-id="3">viewPro</em> est invalide. |
| sheet        | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis)                 |

</div>
<!-- END REF -->

#### Description

La commande `VP SET SHEET OPTIONS` <!-- REF #_method_.VP SET SHEET OPTIONS.Summary -->permet de définir différentes options de feuille de la zone *vpAreaName* <!-- END REF -->.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Passez un objet contenant les options à définir dans le paramètre *sheetOptions*. To view the full list of the available options, see the [Sheet Options](configuring.md#sheet-options) paragraph.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique (la numérotation commence à zéro). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

#### Exemple 1

Vous souhaitez protéger toutes les cellules à l'exception de la plage C5:D10 :

```4d
// Activer la protection sur la feuille courante
var $options : Object

$options:=New object
$options.isProtected:=True
VP SET SHEET OPTIONS("ViewProArea" ;$options)

// marquer les cellules C5:D10 comme 'déverrouillées'
VP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))
```

#### Exemple 2

Vous souhaitez protéger votre document pendant que vos utilisateurs redimensionnent les lignes et colonnes :

```4d
var $options : Object

$options:=New object
// Activer la protection
$options.isProtected:=True
$options.protectionOptions:=New object
// Permettre à l'utilisateur de redimensionner les lignes
$options.protectionOptions.allowResizeRows=True;
// Permettre à l'utilisateur de redimensionner les colonnes
$options.protectionOptions.allowResizeColumns=True;

// Appliquer la protection à la feuille courante
VP SET SHEET OPTIONS("ViewProArea";$options)
```

#### Exemple 3

Vous souhaitez personnaliser la couleur des onglets, des lignes figées, du quadrillage, du fond de la sélection et de la bordure de la sélection :

```4d
var $options : Object

$options:=New object
// Personnaliser la couleur de l'onglet de la feuille 1
$options.sheetTabColor:="Black"
$options.gridline:=New object("color";"Purple")
$options.selectionBackColor:="rgb(255,128,0,0.4)"
$options.selectionBorderColor:="Yellow"
$options.frozenlineColor:="Gold"

VP SET SHEET OPTIONS("ViewProArea";$options;0)

// Personnaliser la couleur de l'onglet de la feuille 2
$options.sheetTabColor:="red"

VP SET SHEET OPTIONS("ViewProArea";$options;1)

// Personnaliser la couleur de l'onglet de la feuille 3
$options.sheetTabColor:="blue"

VP SET SHEET OPTIONS("ViewProArea";$options;2)
```

Résultat:

![](../assets/en/ViewPro/cmd_vpSetSheetOptions1.PNG)

#### Exemple 4

Vous souhaitez masquer le quadrillage et les en-têtes des lignes et colonnes.

```4d
var $options : Object

$options:=New object

$options.gridline:=New object()
$options.gridline.showVerticalGridline:=False
$options.gridline.showHorizontalGridline:=False
$options.rowHeaderVisible:=False
$options.colHeaderVisible:=False

VP SET SHEET OPTIONS("ViewProArea";$options)
```

Résultat:

![](../assets/en/ViewPro/cmd_vpSetSheetOptions2.PNG)

#### Voir également

[4D View Pro sheet options](configuring.md#sheet-options)<br/>[VP Get sheet options](#vp-get-sheet-options)

### VP SET SHOW PRINT LINES

<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->

**VP SET SHOW PRINT LINES** ( *vpAreaName* : Text {; visible : Boolean}{; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| visible    | Boolean | -> | Collection de formules\|                                                    |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP SET SHOW PRINT LINES` <!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> détermine si les lignes de l'aperçu avant impression sont affichées dans une feuille de calcul.<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *visible*, passez `True` pour afficher les lignes d'impression, et `False` pour les cacher. `True` est passé par défaut.

Dans *sheet*, passez le numéro de la page cible. Si aucun numéro n'est spécifié, la commande s'applique à la feuille en cours.

> La numérotation démarre à 0.

La position des lignes d'impression d'une feuille de calcul varie en fonction des sauts de page de cette feuille.

#### Exemple

Le code suivant affiche les lignes d'impression dans la deuxième feuille d'un document :

```4d
VP SET SHOW PRINT LINES("ViewProArea";True;1)

```

![set-show-print-lines](../assets/en/ViewPro/vp-set-show-print-lines.png)

Avec un saut de page :

![set-show-print-lines-with-page-break](../assets/en/ViewPro/vp-set-show-print-lines-page-break.png)

#### Voir également

[4D Get show print lines](#vp-get-show-print-lines)

### VP SET TABLE COLUMN ATTRIBUTES

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Syntax -->

**VP SET TABLE COLUMN ATTRIBUTES** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer ; *attributes* : Object {; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| tableName  | Text    | -> | Nom de table                                                                |
| column     | Integer | -> | Numéro de colonne de la table                                               |
| attributes | Object  | -> | Attribut(s) à appliquer à *column*                       |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

</div>
<!-- END REF -->

#### Description

La commande `VP SET TABLE COLUMN ATTRIBUTES` <!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES. ummary -->applique les *attributs* définis à la *colonne* dans le *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans le paramètre *attributes*, passez un objet qui contient les propriétés à définir :

| Propriété           | Type    | Description                                                                                                                                                                                                                              |
| ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataField           | text    | Nom de la propriété de la colonne de la table dans le contexte de données.                                                                                                                                               |
| name                | text    | Nom de la colonne de la table. Doit être unique dans la table. Si ce nom est déjà utilisé par une autre colonne, il n'est pas appliqué et un nom par défaut est automatiquement utilisé. |
| formula             | text    | Définit la formule pour chaque cellule de la colonne. See [Structured Reference Formulas in the SpreadJS documentation](https://www.grapecity.com/spreadjs/docs/features/tablegen/structref)                             |
| footerText          | text    | Valeur du pied de colonne.                                                                                                                                                                                               |
| footerFormula       | text    | Formule de pied de colonne.                                                                                                                                                                                              |
| filterButtonVisible | boolean | Définit si le bouton de filtre de la colonne de la table est affiché (par défaut `True` lors de la création de la table).                                                                             |

Dans *sheet*, passez le numéro de la page cible. Si aucune feuille nommée <em x-id="3">name</em> n'est trouvée dans le document, la méthode retourne -1.

> La numérotation démarre à 0.

Si *tableName* n'est pas trouvé ou si *colonne* est supérieure au nombre de colonnes, la commande ne fait rien.

#### Exemple

Vous créez une table avec un contexte de données :

```4d
var $context;$options : Object

$context:=New object()
$context.col:=New collection()
$context.col.push(New object("name"; "Smith"; "firstname"; "John"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "firstname"; "Jim"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "firstname"; "Maria"; "salary"; 10500))
VP SET DATA CONTEXT("ViewProArea"; $context)

	//Définition des colonnes de la table
$options:=New object()
$options.tableColumns:=New collection()
$options.tableColumns.push(New object("name"; "Last Name"; "dataField"; "name"))
$options.tableColumns.push(New object("name"; "Salary"; "dataField"; "salary"))

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 2; 3); "PeopleTable"; "col"; $options)
```

![](../assets/en/ViewPro/table-inserta.png)

Vous souhaitez ensuite insérer une colonne contenant des données provenant du contexte de données et masquer certains boutons de filtrage :

```4d
	//insérer une colonne
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 1)

var $param : Object
$param:=New object()
	// Lier la colonne au champ firstname du datacontext
$param.dataField:="firstname"
	// Changer le nom par défaut de la colonne en "First name"
	// et cacher le bouton de filtrage
$param.name:="Prénom"
$param.filterButtonVisible:=False

VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 1; $param)

	// Masquer le bouton de filtrage de la première colonne
VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 0; \
	New object("filterButtonVisible"; False))

```

![](../assets/en/ViewPro/table-insertb.png)

#### Voir également

[VP CREATE TABLE](#vp-create-table)<br/>[VP Find table](#vp-find-table)<br/>[VP Get table column attributes](#vp-get-table-column-attributes)<br/>[VP RESIZE TABLE](#vp-resize-table)

### VP SET TABLE THEME

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R8   | Ajout         |

</details>

<!-- REF #_method_.VP SET TABLE THEME.Syntax -->

**VP SET TABLE THEME** ( *vpAreaName* : Text ; *tableName* : Text ; *options* : cs.ViewPro.TableTheme )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE THEME.Params -->

<div class="no-index">

| Paramètres | Type                                                                           |    | Description                                |
| ---------- | ------------------------------------------------------------------------------ | -- | ------------------------------------------ |
| vpAreaName | Text                                                                           | -> | Nom d'objet formulaire zone 4D View Pro    |
| tableName  | Text                                                                           | -> | Nom de table                               |
| options    | [cs.ViewPro.TableTheme](classes.md#tabletheme) | -> | Propriétés du thème de la table à modifier |

</div>
<!-- END REF -->

#### Description

La commande `VP SET TABLE THEME` <!-- REF #_method_.VP SET TABLE THEME.Summary --> modifie le thème actuel de la *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro et dans *tableName*, le nom de la table à modifier.

In the *options* parameter, pass an object of the [`cs.ViewPro.TableTheme` class](classes.md#tabletheme) that contains the theme properties to modify.

#### Exemple 1

Vous souhaitez définir un thème prédéfini pour une table :

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="medium2"
VP SET TABLE THEME("ViewProArea"; "myTable"; $param)
```

#### Exemple 2

Vous souhaitez obtenir ce rendu de colonne alterné :

![](../assets/en/ViewPro/col-bandering.png)

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()

// Activer le rendu bandColumn
$param.bandColumns:=True
$param.bandRows:=False

// Créer l'objet thème avec les styles d'en-tête et de colonne
$param.theme:=cs.ViewPro.TableThemeOptions.new()

var $styleHeader; $styleColumn; $styleColumn2 : cs.ViewPro.TableStyle

$styleHeader:=cs.ViewPro.TableStyle.new()
$styleHeader.backColor:="Gold"
$styleHeader.foreColor:="#03045E"
$param.theme.headerRowStyle:=$styleHeader

$styleColumn1:=cs.ViewPro.TableStyle.new()
$styleColumn1.backColor:="SkyBlue"
$styleColumn1.foreColor:="#03045E"
$param.theme.firstColumnStripStyle:=$styleColumn1

$styleColumn2:=cs.ViewPro.TableStyle.new()
$styleColumn2.backColor:="LightCyan"
$styleColumn2.foreColor:="#03045E"
$param.theme.secondColumnStripStyle:=$styleColumn2

VP SET TABLE THEME("ViewProArea" ; "myTable" ; $param)

```

#### Voir également

[VP CREATE TABLE](#vp-create-table)<br/>[VP Get table theme](#vp-get-table-theme)

### VP SET TEXT VALUE

<!-- REF #_method_.VP SET TEXT VALUE.Syntax -->

**VP SET TEXT VALUE** ( *rangeObj* : Object ; *textValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TEXT VALUE.Params -->

<div class="no-index">

| Paramètres    | Type   |    | Description                                     |
| ------------- | ------ | -- | ----------------------------------------------- |
| rangeObj      | Object | -> | Objet plage                                     |
| textValue     | Text   | -> | Nom de la zone 4D View Pro dans le formulaire\| |
| formatPattern | Text   | -> | Format de la valeur                             |

</div>
<!-- END REF -->

#### Description

La commande `VP SET TEXT VALUE` <!-- REF #_method_.VP SET TEXT VALUE.Summary -->assigne une valeur texte spécifique à une plage de cellules désignée<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

Le paramètre *textValue* indique une valeur texte à assigner à *rangeObj*.

Un objet de plage vide est retourné si aucun résultat n'est trouvé.

#### Exemple

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

#### Voir également

[Cell Format](configuring.md#cell-format)<br/>[VP SET VALUE](#vp-set-value)

### VP SET TIME VALUE

<!-- REF #_method_.VP SET TIME VALUE.Syntax -->

**VP SET TIME VALUE** ( *rangeObj* : Object ; *timeValue* : Time { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TIME VALUE.Params -->

<div class="no-index">

| Paramètres    | Type   |    | Description                                                                                                           |
| ------------- | ------ | -- | --------------------------------------------------------------------------------------------------------------------- |
| rangeObj      | Object | -> | Objet plage                                                                                                           |
| timeValue     | Time   | -> | Dans les formules de 4D View Pro, les noms des fonctions sont automatiquement affichés en majuscules. |
| formatPattern | Text   | -> | Format de la valeur                                                                                                   |

</div>
<!-- END REF -->

#### Description

La commande `VP SET TIME VALUE` <!-- REF #_method_.VP SET TIME VALUE.Summary --> attribue une valeur de temps spécifiée à une plage de cellules désignée<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

Le paramètre \*timeValue \* spécifie une durée exprimée en secondes à attribuer à *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *timeValue* parameter.

#### Exemple

```4d
//Définit la valeur à l'heure courante
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)

//Définit la valeur à une heure spécifique avec un format désigné
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)
```

#### Voir également

[Cell Format](configuring.md#cell-format)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET VALUE](#vp-set-value)

### VP SET VALUE

<!-- REF #_method_.VP SET VALUE.Syntax -->

**VP SET VALUE** ( *rangeObj* : Object ; *valueObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUE.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                                   |
| ---------- | ------ | -- | --------------------------------------------- |
| rangeObj   | Object | -> | Objet plage                                   |
| valueObj   | Object | -> | Valeurs de la cellule et options de formatage |

</div>
<!-- END REF -->

#### Description

La commande `VP SET VALUE` <!-- REF #_method_.VP SET VALUE.Summary -->attribue une valeur spécifiée à une plage de cellules désignée<!-- END REF -->.

The command allows you to use a generic code to set and format the types of values in *rangeObj*, whereas other commands, such as [`VP SET TEXT VALUE`](#vp-set-text-value) and [`VP SET NUM VALUE`](#vp-set-num-value), reduce the values to specific types.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

The parameter *valueObj* is an object that includes properties for the value and the [format](configuring.md#cell-format) to assign to *rangeObj*. Il peut contenir les propriétés suivantes :

| Propriété | Type                                     | Description                                                                                                                                                                                          |
| --------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Null | Valeur à attribuer à *rangeObj* (sauf pour time). Passez null pour effacer le contenu de la cellule.                                              |
| time      | Real                                     | Valeur heure (en secondes) à assigner à *rangeObj*                                                                                                                                |
| format    | Text                                     | Modèle pour la propriété value/time. For information on patterns and formatting characters, please refer to the [Cell Format](configuring.md#cell-format) paragraph. |

#### Exemple

```4d
//Set the cell value as False
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))

//Set the cell value as 2
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))

//Set the cell value as $125,571.35
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))

//Set the cell value as Hello World!
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))

//Set the cell value as current date
VP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))

//Set the cell value as current hour
VP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))

//Set the cell value as specific date and time
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))

//Erase cell content
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))
```

#### Voir également

[Cell Format](configuring.md#cell-format)<br/>[VP Get values](#vp-get-value)<br/>[VP SET VALUE](#vp-set-value)<br/>[VP SET BOOLEAN VALUE](#vp-set-boolean-value)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET FIELD](#vp-set-field)<br/>[VP SET FORMULA](#vp-set-formula)<br/>[VP SET NUM VALUE](#vp-set-num-value)<br/>[VP SET TEXT VALUE](#vp-set-text-value)<br/>[VP SET TIME VALUE](#vp-set-time-value)

### VP SET VALUES

<!-- REF #_method_.VP SET VALUES.Syntax -->

**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUES.Params -->

<div class="no-index">

| Paramètres | Type       |    | Description           |
| ---------- | ---------- | -- | --------------------- |
| rangeObj   | Object     | -> | Objet plage           |
| valuesCol  | Collection | -> | Collection de valeurs |

</div>
<!-- END REF -->

#### Description

La commande `VP SET VALUES` <!-- REF #_method_.VP SET VALUES.Summary --> attribue une collection de valeurs commençant à la plage de cellules spécifiée<!-- END REF -->.

In *rangeObj*, pass a range for the cell (created with [`VP Cell`](#vp-cell)) whose value you want to specify. La cellule définie dans *rangeObj* est utilisée pour déterminer le point de départ.

> - Si *rangeObj* n'est pas une plage de cellules, seule la première cellule de la plage est utilisée.
> - Si *rangeObj* comprend plusieurs plages, seule la première cellule de la première plage est utilisée.

Le paramètre *valuesCol* est bidimensionnel :

- La collection de premier niveau contient des sous-collections de valeurs. Chaque sous-collection définit une ligne. Passez une collection vide pour sauter une ligne.
- Chaque sous-collection définit les valeurs des cellules de la ligne. Les valeurs peuvent être de type entier long, réel, booléen, texte, date, null ou objet. Si la valeur est un objet, elle peut avoir les propriétés suivantes :

| Propriété | Type                                     | Description                                            |
| --------- | ---------------------------------------- | ------------------------------------------------------ |
| value     | Integer, Real, Boolean, Text, Date, Null | Valeur dans la cellule (sauf heure) |
| time      | Real                                     | Valeur heure (en secondes)          |

#### Exemple

```4d
$param:=New collection
 $param.push(New collection(1;2;3;False)) //première ligne, 4 valeurs
 $param.push(New collection) //deuxième ligne, inchangé
 $param.push(New collection(4;5;Null;"hello";"world")) // troisième ligne, 5 valeurs
 $param.push(New collection(6;7;8;9)) // quatrième ligne, 4 valeurs
 $param.push(New collection(Null;New object("value";Current date;"time";42))) //cinquième ligne, 1 valeur
 VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

![](../assets/en/ViewPro/cmd_vpSetValues.PNG)

#### Voir également

[VP Get formulas](#vp-get-formulas)<br/>[VP Get value](#vp-get-value)<br/>[VP Get Values](#vp-get-values)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUE](#vp-set-value)

### VP SET WORKBOOK OPTIONS

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Syntax -->

**VP SET WORKBOOK OPTIONS** ( *vpAreaName* : Text ; *optionObj* : Object)<!-- END REF -->

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Params -->

<div class="no-index">

| Paramètres | Type   |    | Description                                       |
| ---------- | ------ | -- | ------------------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro           |
| optionObj  | Object | -> | Objet contenant les options du workbook à définir |

</div>
<!-- END REF -->

#### Description

`VP SET WORKBOOK OPTIONS` <!-- REF #_method_.VP SET WORKBOOK OPTIONS.Summary -->
définit les options du classeur (workbook) dans *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *optionObj*, passez les options du classeur à appliquer à *vpAreaName*.

Si *optionObj* est vide, la commande ne fait rien.

Les options modifiées du classeur sont enregistrées avec le document.

Le tableau suivant répertorie les options de classeur disponibles :

| Propriété                             | Type                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowUserDragMerge                    | boolean                 | L'opération de fusion par glisser est autorisée (sélection des cellules et glisser de la sélection pour fusionner les cellules)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| allowAutoCreateHyperlink              | boolean                 | Permet la création automatique d'hyperliens dans la feuille de calcul.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| allowContextMenu                      | boolean                 | Le menu contextuel intégré peut être ouvert.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| allowCopyPasteExcelStyle              | boolean                 | Les styles d'une feuille de calcul peuvent être copiés et collés dans Excel, et vice-versa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| allowDynamicArray                     | boolean                 | Active les tableaux dynamiques dans les feuilles de travail                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| allowExtendPasteRange                 | boolean                 | Étend la plage collée si la plage collée n'est pas suffisante pour les données collées                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| allowSheetReorder                     | boolean                 | La réorganisation de la feuille est autorisée                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| allowUndo                             | boolean                 | L'annulation des modifications est autorisée.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| allowUserDeselect                     | boolean                 | La désélection de cellules spécifiques d'une sélection est autorisée.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| allowUserDragDrop                     | boolean                 | Glisser-déposer des données de plage est autorisé                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| allowUserDragFill                     | boolean                 | Le remplissage par glisser est autorisé                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| allowUserEditFormula                  | boolean                 | Des formules peuvent être saisies dans les cellules                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| allowUserResize                       | boolean                 | Les colonnes et les lignes peuvent être redimensionnées                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| allowUserZoom                         | boolean                 | Le zoom (ctrl + molette de la souris) est autorisé                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| autoFitType                           | number                  | Le contenu est formaté pour tenir dans les cellules, les cellules et les en-têtes. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk auto fit type cell </td><td>0</td><td> Le contenu ajuste automatiquement les cellules</td></tr><tr><td> vk auto fit type cell with header </td><td>1</td><td> Le contenu ajuste automatiquement les cellules et les en-têtes</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| backColor                             | string                  | Chaîne de couleur utilisée pour représenter la couleur de fond de la zone, comme "rouge", "#FFFF00", "rgb(255,0,0)", "Accent 5". La couleur de fond initiale est masquée lorsqu'une image de fond est définie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| backgroundImage                       | string / picture / file | Image de fond de la zone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| backgroundImageLayout                 | number                  | Comment l'image de fond s'affiche. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk image layout center </td><td>1</td><td> Au centre de la zone.</td></tr><tr><td> vk mise en page d'image aucun </td><td>3</td><td> Dans le coin supérieur gauche de la zone à sa taille originale.</td></tr><tr><td> vk image layout stretch </td><td>0</td><td> Remplit la zone.</td></tr><tr><td> vk image layout zoom </td><td>2</td><td> Affiché avec son rapport d'aspect d'origine.</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| calcOnDemand                          | boolean                 | Les formules ne sont calculées que lorsqu'elles sont demandées.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| columnResizeMode                      | number                  | Mode redimensionnement pour les colonnes. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk resize mode normal </td><td>0</td><td> Utilise le mode de redimensionnement normal (c'est-à-dire que les colonnes restantes sont affectées)</td></tr><tr><td> vk resize mode split </td><td>1</td><td> Utiliser le mode fractionné (les colonnes restantes ne sont pas affectées)</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| copyPasteHeaderOptions                | number                  | En-têtes à inclure lorsque les données sont copiées ou collées. En-têtes à inclure lorsque les données sont copiées ou collées.Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk copy paste header options all headers</td><td>3</td><td> Inclut les en-têtes sélectionnés lors de la copie des données ; surcharge les en-têtes sélectionnés lors du collage des données.</td></tr><tr><td> vk copy paste header options column headers </td><td>2</td><td> Inclut les en-têtes de colonnes sélectionnés lors de la copie des données ; surcharge les en-têtes de colonnes sélectionnés lors du collage des données.</td></tr><tr><td> vk copy paste header options no headers</td><td>0</td><td> Les en-têtes de colonnes et de lignes ne sont pas incluses lors de la copie des données ; les en-têtes de colonnes ou de lignes sélectionnées ne sont pas superposées lors du collage des données.</td></tr></table>                  |
| customList                            | collection              | Liste pour que les utilisateurs personnalisent le remplissage par glisser-déposer, en priorisant la correspondance de cette liste dans chaque remplissage. Chaque élément de collection est une collection de strings. See on [GrapeCity's website](https://www.grapecity.com/spreadjs/docs/v13/online/AutoFillLists.html#b).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| cutCopyIndicatorBorderColor           | string                  | Couleur de bordure de l'indicateur affiché lorsque l'utilisateur coupe ou copie la sélection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| cutCopyIndicatorVisible               | boolean                 | Afficher un indicateur lors du copier ou du coller de l'élément sélectionné.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| defaultDragFillType                   | number                  | Le type de remplissage par défaut du glisser-déposer. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk auto fill type auto </td><td>5</td><td> Remplit automatiquement les cellules. Le type de remplissage par défaut du glisser-déposer.Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk auto fill type auto </td><td>5</td><td> Remplit automatiquement les cellules.</td></tr><tr><td> vk auto fill type clear values </td><td>4</td><td> Efface les valeurs des cellules.</td></tr><tr><td> vk auto fill type copycells </td><td>0</td><td> Remplit les cellules avec tous les objets de données, y compris les valeurs, la mise en forme et les formules.</td> </td></tr><tr><td> vk auto fill type fill without formatting </td><td>3</td><td> Remplit les cellules avec des valeurs sans les formater. </td></tr></table> |
| enableAccessibility                   | boolean                 | La prise en charge de l'accessibilité est activée dans la feuille de calcul.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| enableFormulaTextbox                  | boolean                 | La zone de texte de la formule est activée.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| grayAreaBackColor                     | string                  | Une chaîne de couleur utilisée pour représenter la couleur de fond de la zone grise, comme "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| highlightInvalidData                  | boolean                 | Les données non valides sont surlignées.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| iterativeCalculation                  | boolean                 | Active le calcul itératif. See on [Grapecity's website](https://www.grapecity.com/spreadjs/docs/v14/online/calculating-iterative.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| iterativeCalculationMaximumChange     | numérique               | Montant maximum de changement entre deux valeurs de calcul.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| iterativeCalculationMaximumIterations | numérique               | Nombre de fois maximum que la formule doit recalculer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| newTabVisible                         | boolean                 | Afficher un onglet spécial pour permettre aux utilisateurs d'insérer de nouvelles feuilles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| numbersFitMode                        | number                  | Modifie le mode d'affichage lorsque la largeur des données date/nombre est plus longue que la largeur des colonnes. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk numbers fit mode mask</td><td>0</td><td> Remplace le contenu des données par "###" et affiche l'astuce </td></tr><tr> vk<td> numbers fit mode overflow </td><td>1</td><td> Affiche le contenu des données sous forme de chaîne de caractères. Si la cellule suivante est vide, le contenu est débordé.</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| pasteSkipInvisibleRange               | boolean                 | Paste or skip pasting data in invisible ranges: <ul><li>False (default): paste data</li><li>True: Skip pasting in invisible ranges</li></ul>See [Grapecity's docs](https://www.grapecity.com/spreadjs/docs/v14/online/paste-skip-data-invisible-range.html) for more information on invisible ranges.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| referenceStyle                        | number                  | Style pour les références de cellules et de plages dans les formules de cellules. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk reference style A1</td><td>0</td><td> Utilise le style A1.</td></tr><tr><td> vk reference style R1C1 </td><td>1</td><td> Utiliser le style R1C1</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| resizeZeroIndicator                   | number                  | Règle de dessin lorsque la ligne ou la colonne est redimensionnée à zéro. Règle de dessin lorsque la ligne ou la colonne est redimensionnée à zéro.Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk resize zero indicator default </td><td>0</td><td> Utilise la politique de dessin actuelle lorsque la ligne ou la colonne est redimensionnée à zéro.</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| rowResizeMode                         | number                  | La façon dont les lignes sont redimensionnées. Les valeurs disponibles sont les mêmes que columnResizeMode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| scrollbarAppearance                   | number                  | Apparence de la barre de défilement. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk scrollbar appearance mobile</td><td>1</td><td> Apparence de la barre de défilement mobile</td>Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk scrollbar appearance mobile</td><td>1</td><td> Apparence de la barre de défilement mobile</td></tr><tr><td> vk scrollbar appearance skin (default)</td><td>0</td><td> Apparence classique de la barre de défilement, similaire à celle d'Excel.</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                         |
| scrollbarMaxAlign                     | boolean                 | La barre de défilement s'aligne sur la dernière ligne et la dernière colonne de la feuille courante.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| scrollbarShowMax                      | boolean                 | Les barres de défilement affichées sont basées sur le nombre total de colonnes et de lignes dans la feuille.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| scrollByPixel                         | boolean                 | Activer le défilement de précision par pixel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| scrollIgnoreHidden                    | boolean                 | La barre de défilement ignore les lignes ou colonnes cachées.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| scrollPixel                           | integer                 | Définit le défilement par ce nombre de pixels lorsque scrollByPixel est true. Définit le défilement par ce nombre de pixels lorsque scrollByPixel est true. Par exemple : le delta de défilement est de 3, scrollPixel est de 5, le défilement final de pixels est de 15.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| showDragDropTip                       | boolean                 | Afficher l'info bulle de glisser-déposer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| showDragFillSmartTag                  | boolean                 | Afficher la boîte de dialogue de remplissage par glisser-déplacer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| showDragFillTip                       | boolean                 | Afficher l'info bulle de glisser-remplir.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| showHorizontalScrollbar               | boolean                 | Afficher la barre de défilement horizontale.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| showResizeTip                         | number                  | Comment afficher l'info-bulle de redimensionnement. Comment afficher l'info-bulle de redimensionnement.Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk show resize tip both </td><td>3</td><td> Des conseils pour le redimensionnement horizontal et vertical s'affichent.</td></tr><tr><td> vk show resize tip column </td><td>1</td><td> Seul le conseil de redimensionnement horizontal s'affiche.</td></tr><tr><td> vk show resize tip none </td><td>0</td><td> Aucune conseil de redimensionnement n'est affiché.</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                               |
| showScrollTip                         | number                  | Comment afficher les info-bulles de défilement. Comment afficher les info-bulles de défilement.Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk show scroll tip both </td><td>3</td><td> Des conseils de défilement horizontal et vertical s'affichent.</td></tr><tr><td> vk show scroll tip none </td><td>0</td><td> No scroll tip is displayed.</td></tr><tr><td> vk show scroll tip none </td><td> Aucun conseil de défilement n'est affiché.</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| showVerticalScrollbar                 | boolean                 | Afficher la barre de défilement verticale.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| tabEditable                           | boolean                 | La barre d'onglets de la feuille peut être modifiée.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| tabNavigationVisible                  | boolean                 | Afficher l'onglet de navigation de la feuille.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| tabStripPosition                      | number                  | Position de la barre d'onglets. Position de la barre d'onglets.Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk tab strip position bottom </td><td>0</td><td>La position de la barre de tabulation est relative au bas du classeur.</td></tr><tr><td> vk tab strip position left </td><td>2</td><td> La position de la barre de tabulation est relative à la gauche du classeur.</td></tr><tr><td> vk tab strip position right </td><td>3</td><td> La position de la barre de tabulation est relative à la droite du classeur.</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                        |
| tabStripRatio                         | number                  | Valeur de pourcentage (0.x) qui spécifie combien d'espace horizontal sera alloué à la barre d'onglets. Le reste de la zone horizontale (1 - 0.x) sera alloué à la barre de défilement horizontale.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| tabStripVisible                       | boolean                 | Afficher la barre d'onglets de la feuille.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| tabStripWidth                         | number                  | Largeur de la barre d'onglets lorsque la position est à gauche ou à droite. Par défaut et minimum 80.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| useTouchLayout                        | boolean                 | Utiliser ou non le format tactile pour présenter le composant Spread.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Exemple

Pour définir l'option allowExtendpasteRange dans "ViewProArea" :

```4d
var $workbookOptions : Object

$workbookOptions:= New Object
$workbookOptions.allowExtendPasteRange:=True

VP SET WORKBOOK OPTIONS("ViewProArea";$workbookOptions)
```

#### Voir également

[VP Get workbook options](#vp-get-workbook-options)

### VP SHOW CELL

<!-- REF #_method_.VP SHOW CELL.Syntax -->

**VP SHOW CELL** ( *rangeObj* : Object { ; *vPos* : Integer; *hPos* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SHOW CELL.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                 |
| ---------- | ------- | -- | ----------------------------------------------------------- |
| rangeObj   | Object  | -> | Objet plage                                                 |
| vPos       | Integer | -> | Position verticale de la vue de la cellule ou de la ligne   |
| hPos       | Integer | -> | Position horizontale de la vue de la cellule ou de la ligne |

</div>
<!-- END REF -->

#### Description

La commande VP SHOW CELL <!-- REF #_method_.VP SHOW CELL.Summary -->repositionne verticalement et horizontalement la vue de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet plage de cellules que vous souhaitez afficher. La vue de *rangeObj* sera positionnée verticalement ou horizontalement (i.e., là où *rangeObj* apparait) en fonction des paramètres *vPos* et *hPos*. Le paramètre *vPos* définit la position verticale souhaitée pour afficher *rangeObj* et le paramètre *hPos* définit la position horizontale souhaitée pour afficher *rangeObj*.

Les sélecteurs suivants sont disponibles :

| Sélecteur             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Disponible avec *vPos* | Disponible avec *hPos* |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------- |
| `vk position bottom`  | Alignement vertical vers le bas de la cellule ou de la ligne.                                                                                                                                                                                                                                                                                                                                                                                                                         | X                      |                        |
| `vk position center`  | Alignement vers le centre. L'alignement s'effectuera par rapport à la limite de la cellule, de la ligne ou de la colonne, selon la position de vue indiquée :<li>Position de vue verticale : cellule ou ligne ;</li><li>Position de vue horizontale : cellule ou colonne</li>                                                                                                                                                         | X                      | X                      |
| `vk position left`    | Alignement horizontal vers la gauche de la cellule ou de la colonne                                                                                                                                                                                                                                                                                                                                                                                                                                   |                        | X                      |
| `vk position nearest` | Alignement vers la limite la plus proche (haut, bas, gauche, droite, centre). L'alignement s'effectuera par rapport à la limite de la cellule, de la ligne ou de la colonne, selon la position de vue indiquée :<li>Position de vue verticale (haut, milieu, bas) : cellule ou ligne ;</li><li>Position de vue horizontale (gauche, centre, droit) : cellule ou colonne</li> | X                      | X                      |
| `vk position right`   | Alignement horizontal vers la droite de la cellule ou de la colonne                                                                                                                                                                                                                                                                                                                                                                                                                                   |                        | X                      |
| `vk position top`     | Alignement vertical vers le haut de la cellule ou de la ligne                                                                                                                                                                                                                                                                                                                                                                                                                                         | X                      |                        |

> Cette commande n'est efficace que si le repositionnement de la vue est possible. Par example, si *rangeObj* est contenu dans la cellule A1 (la première colonne et la première ligne) de la feuille courante, le repositionnement de la vue n'apportera aucun changement, étant donné que les limites verticales et horizontales ont déjà été atteintes (i.e., il n'est pas possible de faire dérouler davantage vers le haut ou vers la gauche). De même si *rangeObj* est contenu dans la cellule C3 et que la vue est repositionnée au centre ou en bas à droite. La vue demeure inchangée.

#### Exemple

Vous souhaitez visualiser la cellule dans la colonne AY, ligne 51, au centre de la zone 4D View Pro.

```4d
$displayCell:=VP Cell("myVPArea";50;50)
 // Déplacez la vue pour afficher la cellule
 VP SHOW CELL($displayCell;vk position center;vk position center)
```

Résultat:

![](../assets/en/ViewPro/cmd_vpShowCell1.PNG)

Le même code ainsi que les sélecteurs verticaux et horizontaux ont été modifiés pour afficher la même cellule en haut à droite de la zone 4D View Pro :

```4d
$displayCell:=VP Cell("myVPArea";50;50)
  // Déplacez la vue pour afficher la cellule
 VP SHOW CELL($displayCell;vk position top;vk position right)
```

Résultat:

![](../assets/en/ViewPro/cmd_vpShowCell2.PNG)

#### Voir également

[VP CELL](#vp-cell)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)

### VP SUSPEND COMPUTING

<!-- REF #_method_.VP SUSPEND COMPUTING.Syntax -->

**VP SUSPEND COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP SUSPEND COMPUTING.Params -->

<div class="no-index">

| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro |

</div>
<!-- END REF -->

#### Description

La commande `VP SUSPEND COMPUTING` <!-- REF #_method_.VP SUSPEND COMPUTING.Summary -->arrête le calcul de toutes les formules dans *vpAreaName*<!-- END REF -->. Cette commande est utile lorsque vous souhaitez suspendre les calculs dans cette zone 4D View Pro, afin de modifier manuellement les formules sans générer d'erreurs avant la fin de vos modifications.

La commande met en pause les calculs dans 4D View Pro. Les formules déjà calculées restent inchangées, mais les formules ajoutées après l'exécution de la commande `VP SUSPEND COMPUTING` ne sont pas calculées.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

> Le service de calcul de 4D View Pro maintient un compteur d'actions de suspension/reprise. Par conséquent, chaque exécution de la commande `VP SUSPEND COMPUTING` doit être balancée par une exécution correspondante de la commande `VP RESUME COMPUTING`. Toute formule modifiée durant la phase de suspension des calculs sera recalculée lorsque la commande sera exécutée.

#### Exemple

Vous avez ajouté deux boutons au formulaire afin que l'utilisateur puisse suspendre/reprendre les calculs :

![](../assets/en/ViewPro/cmd_vpStopCalculations.PNG)

Le code du bouton Suspend Computing :

```4d
 //pause calculations while users enter information
 If(FORM Event.code=On Clicked)

    VP SUSPEND COMPUTING("ViewProArea")

 End if
```

```4d
If(FORM Event.code=On Clicked)

    VP RESUME COMPUTING("ViewProArea")

End if
```

#### Voir également

[VP RECOMPUTE FORMULAS](#vp-recompute-formulas)<br/>[VP RESUME COMPUTING](#vp-resume-computing)
