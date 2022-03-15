---
id: method-list
title: Liste des méthodes
---

> **Attention** : Les commandes listées dans cette page ne sont pas thread-safe.

[A](#a) - [C](#c) - [D](#d) - [E](#e) - [F](#f) - [G](#g) - [I](#i) - [M](#m) - [N](#n) - [O](#o) - [P](#p) - [R](#r) - [S](#s)

## A


### VP ADD FORMULA NAME


<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->**VP ADD FORMULA NAME** ( *vpAreaName* : Text ; *vpFormula* : Text ; *name* : Text { ; *options* : Object } )<!-- END REF -->  

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| vpFormula  | Text   | -> | Formule 4D View Pro                     |
| name       | Text   | -> | Nom de la formule                       |
| options    | Object | -> | Options de la formule nommée            |
<!-- END REF -->  

#### Description

La commande `VP ADD FORMULA NAME` <!-- REF #_method_.VP ADD FORMULA NAME.Summary -->permet de créer ou de modifier une formule nommée dans le document courant<!-- END REF -->.
> Les formules nommées créées par cette commande sont stockées dans le document.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez la formule 4D View Pro que vous souhaitez nommer dans *vpFormula*. Pour plus d'informations sur la syntaxe des formules, veuillez consulter la section [Formules et Fonctions](formulas.md).

Passez le nouveau nom de la formule dans *name*. Si le nom est déjà utilisé dans le même scope, la nouvelle formule nommée remplace la formule existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

Vous pouvez passer un objet avec des propriétés additionnelles pour la plage nommée dans *options*. Les propriétés suivantes sont prises en charge :


| Propriété | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Nombre | Scope de la formule. Vous pouvez passer l'indice de la feuille (la numérotation commence à zéro) ou utiliser les constantes suivantes : <p><li>`vk current sheet`</li><li>`vk workbook`</li><p><p>Le scope détermine si le nom d'une formule est propre à une feuille (*scope*=sheet index ou `vk current sheet`), ou s'il s'applique à l'ensemble du classeur (*scope*=`vk workbook`). |
| comment   | Text   | Commentaire associé à une formule nommée                                                                                                                                                                                                                                                                                                                                                                                                                         |


#### Exemple

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### Voir aussi

[Cell references](formulas.md#cell-references)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Get names](#vp-get-names)

### VP ADD RANGE NAME


<!-- REF #_method_.VP ADD RANGE NAME.Syntax -->**VP ADD RANGE NAME** ( *rangeObj* : Object ; *name* : Text { ; *options* : Object } )<!-- END REF -->  

<!-- REF #_method_.VP ADD RANGE NAME.Params -->

| Paramètres | Type   |    | Description                  |
| ---------- | ------ | -- | ---------------------------- |
| rangeObj   | Text   | -> | Objet plage                  |
| name       | Text   | -> | Nom de la formule            |
| options    | Object | -> | Options de la formule nommée |
<!-- END REF -->  

#### Description


La commande `VP ADD RANGE NAME` <!-- REF #_method_.VP ADD RANGE NAME.Summary -->crée ou modifie une plage nommée dans le document ouvert<!-- END REF -->.
> Les plages nommées créées par cette commande sont stockées dans le document.

Dans *rangeObj*, passez la plage que vous souhaitez nommer, et passez le nouveau nom de la plage dans *name*. Si le nom est déjà utilisé dans le même scope, la nouvelle plage nommée remplace la plage existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

In *fontObj*, pass an object containing the font properties. Les propriétés suivantes sont prises en charge :


| Propriété | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| scope     | Nombre | Scope de la plage. Vous pouvez passer l'indice de la feuille (la numérotation commence à zéro) ou utiliser les constantes suivantes : <p><li>`vk current sheet`</li><li>`vk workbook`</li><p><p>Le scope détermine si le nom d'une plage est propre à une feuille (*scope*=sheet index ou `vk current sheet`), ou s'il s'applique à l'ensemble du classeur (*scope*=`vk workbook`). |
| comment   | Text   | Commentaire associé à une plage nommée                                                                                                                                                                                                                                                                                                                                                                                                                       |
> * Une plage nommée est en réalité une formule nommée contenant des coordonnées. `VP ADD RANGE NAME` facilite la création de plages nommées, mais la commande [`VP ADD FORMULA NAME`](#vp-add-formula-name) permet également d'en créer.
> * Les formules définissant des plages nommées peuvent être récupérées à l'aide de la commande [`VP Get formula by name`](#vp-get-formula-by-name).


#### Exemple

Vous souhaitez créer une plage nommée à partir d'une plage contenant une cellule :

```4d
$range:=VP Cell("ViewProArea";2;10)
VP ADD RANGE NAME($range;"Total1")
```

#### Voir aussi

[VP ADD FORMULA NAME](#vp-add-formula-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Get names](#vp-get-names)<br/>[VP Name](#vp-name)



### VP ADD SELECTION

<!-- REF #_method_.VP ADD SELECTION.Syntax -->**VP ADD SELECTION** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF #_method_.VP ADD SELECTION.Params -->

| Paramètres | Type |    | Description |
| ---------- | ---- | -- | ----------- |
| rangeObj   | Text | -> | Objet plage |
<!-- END REF -->  

#### Description

La commande `VP ADD SELECTION` <!-- REF #_method_.VP ADD SELECTION.Summary -->ajoute les cellules spécifiées aux cellules sélectionnées<!-- END REF -->.

Dans *rangeObj*, passez un objet plage de plusieurs cellules à ajouter à la sélection courante.
> La cellule active n'est pas modifiée.

#### Exemple

Les cellules sélectionnées sont les suivantes :

![](assets/en/ViewPro/cmd_vpAddSelection1.PNG)

Le code suivant ajoutera des cellules à votre sélection :

```4d
$currentSelection:=VP Cells("myVPArea";3;4;2;3)
VP ADD SELECTION($currentSelection)
```

Résultat :

![](assets/en/ViewPro/cmd_vpAddSelection2.PNG)

#### Voir aussi

[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP ADD SHEET 

<!-- REF #_method_.VP ADD SHEET.Syntax -->**VP ADD SHEET** ( *vpAreaName* : Text )<br>**VP ADD SHEET** ( *vpAreaName* : Text ; *index* : Integer )<br>**VP ADD SHEET** ( *vpAreaName* : Text ; *index* : Integer ; *name* : Text )
<!-- END REF --> 

<!-- REF #_method_.VP ADD SHEET.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| index      | Integer | -> | Indice de la nouvelle feuille           |
| name       | Text    | -> | Nom de la feuille                       |	
<!-- END REF --> 

#### Description

La commande `VP ADD SHEET` <!-- REF #_method_.VP ADD SHEET.Summary -->insère une feuille dans le document chargé dans *vpAreaName*.<!-- END REF --> 

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *index*, vous pouvez passer un numéro pour la nouvelle feuille. Si l'*index* passé est inférieur ou égal à 0, la commande insère la nouvelle feuille au début. Si l'*index* est supérieur au nombre de feuilles, la commande insère la nouvelle feuille après les feuilles existantes.
> La numérotation démarre à 0.

Dans *name*, vous pouvez passer un nom pour la nouvelle feuille. Le nouveau nom ne peut pas contenir les caractères suivants : `*, :, [, ], ?,\,/`

#### Exemple

Le document comporte actuellement 3 feuilles :

![vp-document-with-3-sheets](assets/en/ViewPro/vp-sheet-3.png)

Pour insérer une feuille à la troisième position (index 2) et la nommer "March" :

```4d
VP ADD SHEET("ViewProArea";2;"March")
```

![vp-add-sheet](assets/en/ViewPro/vp-add-sheet.png)

#### Voir aussi

[VP REMOVE SHEET](#vp-remove-sheet)

### VP ADD SPAN

<!-- REF #_method_.VP ADD SPAN.Syntax -->**VP ADD SPAN** ( *rangeObj* : Object )
<!-- END REF --> 

<!-- REF #_method_.VP ADD SPAN.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |
<!-- END REF --> 

#### Description

La commande `VP ADD SPAN` combine les cellules de *rangeObj* en une seule cellule fusionnée.

Dans *rangeObj*, passez une plage de cellules. Les cellules de la plage sont jointes, afin de créer une cellule plus large qui s'étend sur plusieurs colonnes et/ou lignes. Vous pouvez passer plusieurs plages de cellules pour créer plusieurs fusions de cellules en même temps. A noter que si les plages de cellules se chevauchent, seule la première plage est utilisée.

> - Seules les données contenues dans la cellule supérieure gauche sont affichées. Les données des autres cellules combinées sont cachées jusqu'à ce que la fusion soit retirée.
> - Les données masquées, contenues dans les cellules fusionnées, sont accessibles via des formules (commençant par la cellule supérieure gauche).

#### Exemple

Pour fusionner les cellules First quarter et Second quarter avec les deux cellules côte à côte, et de fusionner la cellule South area avec les deux lignes en-dessous :

![initial-document](assets/en/ViewPro/vp-add-span.png)

```4d
 //  Plage First quarter
 $q1:=VP Cells("ViewProArea";2;3;3;1)

// Plage Second quarter
 $q2:=VP Cells("ViewProArea";5;3;3;1)

  // Plage South area
 $south:=VP Cells("ViewProArea";0;5;1;3)

 VP ADD SPAN(VP Combine ranges($q1;$q2;$south))
```

![vp-add-span-result](assets/en/ViewPro/vp-add-span-2.png)

#### Voir aussi

[4D View Pro Range Object Properties](getting-started.md#using-range-objects)<br/>[VP Get spans](#vp-get-spans)<br/>[VP REMOVE SPAN](#vp-remove-span)


### VP ADD STYLESHEET

<!-- REF #_method_.VP ADD STYLESHEET.Syntax -->**VP ADD STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text ; *styleObj* : Object { ; *scope* : Integer } ) 
<!-- END REF -->  

<!-- REF #_method_.VP ADD STYLESHEET.Params -->

| Paramètres | Type    |    | Description                                    |
| ---------- | ------- | -- | ---------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro        |
| styleName  | Text    | -> | Nom du style                                   |
| styleObj   | Object  | -> | Objet définissant les propriétés de l'attribut |
| scope      | Integer | -> | Cible (par défaut = feuille courante)          |
<!-- END REF -->  

#### Description

La commande `VP ADD STYLESHEET` <!-- REF #_method_.VP ADD STYLESHEET.Summary -->crée ou modifie la feuille de style *styleName* basée sur la combinaison de propriétés indiquées dans *styleObj* dans le document courant<!-- END REF -->. Si une feuille de style ayant le même nom et la même cible existe déjà dans le document, cette commande l'écrasera et le remplacera par les nouvelles valeurs.

> Les feuilles de style créées par cette commande sont sauvegardées avec le document.


Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *styleName* vous permet de nommer la feuille de style. Si le nom existe déjà dans le même scope, la nouvelle feuille de style remplace la feuille existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

Dans *styleObj*, définissez les propriétés de la feuille de style (ex : police, alignement, bordures, etc.). Pour consulter la liste complète des propriétés, reportez-vous à la section [Propriétés des objets de style](configuring.md#style-objects-properties).

Vous pouvez désigner l'emplacement dans lequel vous souhaitez définir la feuille de style dans le paramètre optionnel *scope*, à l'aide de l'indice de la feuille (la numérotation commence à zéro) ou à l'aide des constantes suivantes :

*   `vk current sheet`
*   `vk workbook`

Si une feuille de style *styleName* est définie au niveau du workbook et de la feuille lors de son paramétrage, le niveau de la feuille est prioritaire par rapport à celui du workbook.

Vous pouvez appliquer la feuille de style à l'aide des commandes [VP SET DEFAULT STYLE](#vp-set-default-style) ou [VP SET CELL STYLE](#vp-set-cell-style).


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

créera et appliquera l'objet style *GreenDashDotStyle* suivant :

```
{
    backColor:green,
    borderBottom:{color:green,style:10},
    borderLeft:{color:green,style:10},
    borderRight:{color:green,style:10},
    borderTop:{color:green,style:10}
}
```

#### Voir aussi

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP Get stylesheets](#vp-get-stylesheets)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)


### VP All

<!-- REF #_method_.VP ALL.Syntax -->**VP All** ( *vpAreaName* : Text { ; *sheet* : Integer } )  : Object<!-- END REF -->  

<!-- REF #_method_.VP ALL.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet plage de toutes les cellules              |
<!-- END REF -->  

#### Description


La commande `VP All` <!-- REF #_method_.VP ALL.Summary -->retourne une nouvelle plage référençant toutes les cellules<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.


#### Exemple

Vous souhaitez définir une plage pour toutes les cellules de la feuille courante :

```4d
$all:=VP All("ViewProArea") // toutes les cellules de la feuille courante
```

#### Voir aussi

[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)


## C

### VP Cell

<!-- REF #_method_.VP Cell.Syntax -->**VP Cell** ( *vpAreaName* ; *column* : Integer ; *row* : Integer ; Text { ; *sheet* : Integer } )  : Object<!-- END REF -->  

<!-- REF #_method_.VP Cell.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| column     | Longint | -> | Indice de la feuille (feuille courante si omis) |
| row        | Longint | -> | Indice de la feuille (feuille courante si omis) |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet plage de toutes les cellules              |
<!-- END REF -->  

#### Description

La commande `VP Cell` <!-- REF #_method_.VP Cell.Summary -->retourne une nouvelle plage référençant une cellule spécifique<!-- END REF -->.

> Cette commande s'applique aux plages d'une seule cellule. Pour créer une plage de plusieurs cellules, utilisez la commande [VP Cells](#vp-cells).

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *column* définit la colonne de la plage. Passez l'indice de la colonne dans ce paramètre.

Le paramètre *row* définit la ligne de la plage. Passez l'indice de la ligne dans ce paramètre.

Dans le paramètre optionnel *sheet*, vous pouvez désigner l'indice de la feuille dans laquelle sera définie la plage. Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée par défaut.

> l'indexation démarre à 0.

#### Exemple

Vous souhaitez définir une plage pour la cellule de la feuille courante (sur la feuille courante) :

![vp-cell](assets/en/ViewPro/cmd_vpCell.png)

Le code est le suivant :

```4d
$cell:=VP Cell("ViewProArea";2;4) // C5
```

#### Voir aussi

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)


### VP Cells

<!-- REF #_method_.VP Cells.Syntax -->**VP Cells** ( *vpAreaName* : Text ; *column*: Integer ; *row*: Integer ; *columnCount* : Integer ; *rowCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->  

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajout         |
</details>

<!-- REF #_method_.VP Cells.Params -->

| Paramètres  | Type    |    | Description                                     |
| ----------- | ------- | -- | ----------------------------------------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| column      | Integer | -> | Indice de la colonne                            |
| row         | Integer | -> | Indice de la ligne                              |
| columnCount | Integer | -> | Nombre de colonnes                              |
| rowCount    | Integer | -> | Nombre de lignes                                |
| sheet       | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat    | Object  | <- | Objet plage de toutes les cellules              |
<!-- END REF -->  

#### Description


La commande `VP Cells` <!-- REF #_method_.VP Cells.Summary -->retourne une nouvelle plage référençant des cellules spécifiques<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *column* définit la première colonne de la plage de cellules. Passez l'indice de la colonne (la numérotation commence à zéro) dans ce paramètre. Si la plage contient plusieurs colonnes, vous devez également utiliser le paramètre *columnCount*.

Dans le paramètre *row*, vous pouvez définir l'emplacement de la ou des lignes de la plage de cellules. Passez l'indice de la ligne (la numérotation commence à zéro) dans ce paramètre. Si la plage contient plusieurs lignes, vous devez également utiliser le paramètre *rowCount*.

Le paramètre *columnCount* vous permet de définir le nombre total de colonnes comprises dans la plage. *columnCount* doit être supérieur à 0.

Le paramètre *rowCount* vous permet de définir le nombre total de lignes comprises dans la plage. *rowCount* doit être supérieur à 0.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée par défaut.


#### Exemple

Vous souhaitez définir un objet plage pour les cellules suivantes (de la feuille courante) :

![](assets/en/ViewPro/vp-cells.png)

Le code est le suivant :

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // de C5 à D7
```

#### Voir aussi

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)


### VP Column

<!-- REF #_method_.VP Column.Syntax -->**VP Column** ( *vpAreaName* : Text ; *column*: Integer ; *columnCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Column.Params -->

| Paramètres  | Type    |    | Description                                     |
| ----------- | ------- | -- | ----------------------------------------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| column      | Integer | -> | Indice de la colonne                            |
| columnCount | Integer | -> | Nombre de colonnes                              |
| sheet       | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat    | Object  | <- | Objet plage de toutes les cellules              |
<!-- END REF -->  

#### Description


La commande `VP Column` <!-- REF #_method_.VP Column.Summary -->retourne une nouvelle plage référençant une ou plusieurs colonnes<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *column* définit la première colonne de la plage. Passez l'indice de la colonne (la numérotation commence à zéro) dans ce paramètre. Si la plage contient plusieurs colonnes, vous devez également utiliser le paramètre optionnel *columnCount*.

Le paramètre optionnel *columnCount* vous permet de définir le nombre total de colonnes comprises dans la plage. *columnCount* doit être supérieur à 0. Si le paramètre est omis, la valeur 1 sera définie par défaut et une plage de type colonne sera créée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée par défaut.

#### Exemple

Vous souhaitez définir une plage pour la colonne ci-dessous (dans la feuille courante) :

![](assets/en/ViewPro/cmd_vpColumn.PNG)

Le code est le suivant :

```4d
 $column:=VP Column("ViewProArea";3) // colonne D
```

#### Voir aussi

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)



### VP COLUMN AUTOFIT

<!-- REF #_method_.VP COLUMN AUTOFIT.Syntax -->**VP COLUMN AUTOFIT** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF #_method_.VP COLUMN AUTOFIT.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

<!-- END REF -->  

#### Description

La commande `VP COLUMN AUTOFIT` <!-- REF #_method_.VP COLUMN AUTOFIT.Summary -->dimensionne automatiquement dans *rangeObj* la ou les colonne(s) en fonction de leur contenu<!-- END REF -->.

Dans *rangeObj*, passez un objet plage contenant une plage de colonnes dont la taille doit être gérée automatiquement.

#### Exemple

Les colonnes suivantes sont toutes de la même taille et n'affichent pas certaines parties du texte :

![](assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

La sélection des colonnes et l'exécution du code suivant :

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

redimensionne les colonnes pour correspondre à la taille du contenu :

![](assets/en/ViewPro/cmd_vpColumnAutoFit2.PNG)

#### Voir aussi

[VP ROW AUTOFIT](#vp-row-autofit)

### VP Combine Ranges


<!-- REF #_method_.VP Combine Ranges.Syntax -->**VP Combine Ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {;...*otherRangeObjN* : Object }  ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Combine Ranges.Params -->

| Paramètres    | Type   |    | Description                        |
| ------------- | ------ | -- | ---------------------------------- |
| rangeObj      | Object | -> | Objet plage                        |
| otherRangeObj | Object | -> | Objet plage                        |
| Résultat      | Object | <- | Objet contenant une plage combinée |

<!-- END REF -->  

#### Description

La commande `VP Combine ranges` <!-- REF #_method_.VP Combine Ranges.Summary -->retourne une nouvelle plage qui incorpore au moins deux plages existantes<!-- END REF -->. Toutes les plages doivent provenir de la même zone 4D View Pro.

Dans *rangeObj*, passez la première plage.

Dans *otherRangeObj*, passez une ou plusieurs autres plages à combiner avec *rangeObj*.
> La commande incorpore *rangeObj* et *otherRangeObj* par référence.

#### Exemple

Vous souhaitez combiner des plages de type cellule, colonne et ligne dans une nouvelle plage distincte :


```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // colonne D
 $row:=VP Row("ViewProArea";9) // ligne 10

 $combine:=VP Combine ranges($cell;$column;$row)
```

#### Voir aussi

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)

### VP Convert from 4D View

<!-- REF #_method_.VP Convert from 4D View.Syntax -->**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Convert from 4D View.Params -->

| Paramètres     | Type   |    | Description       |
| -------------- | ------ | -- | ----------------- |
| 4DViewDocument | Blob   | -> | Document 4D View  |
| Résultat       | Object | <- | Objet 4D View Pro |	


<!-- END REF -->  

#### Description

La commande `VP Convert from 4D View` <!-- REF #_method_.VP Convert from 4D View.Summary -->vous permet de convertir un document 4D View existant en un objet 4D View Pro<!-- END REF -->.
> Cette commande ne nécessite pas l'installation du plug-in 4D View dans votre environnement.


Dans le paramètre *4DViewDocument*, passez une variable ou un champ BLOB contenant le document 4D View à convertir. La commande retourne un objet 4D View Pro dans lequel toutes les informations stockées à l'origine dans le document 4D View sont converties en attributs 4D View Pro.

#### Exemple


Vous souhaitez obtenir un objet 4D View Pro à partir d'une zone 4D View stockée dans un BLOB :


```4d
C_OBJECT($vpObj)
$vpObj:=VP Convert from 4D View($pvblob)
```



### VP Convert to picture

<!-- REF #_method_.VP Convert to picture.Syntax -->**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->  

<!-- REF #_method_.VP Convert to picture.Params -->

| Paramètres | Type   |    | Description                                     |
| ---------- | ------ | -- | ----------------------------------------------- |
| vpObject   | Object | -> | Objet 4D View Pro contenant la zone à convertir |
| rangeObj   | Object | -> | Objet plage                                     |
| Résultat   | Object | <- | Image SVG de la zone                            |	


<!-- END REF -->  

#### Description

La commande `VP Convert to picture` <!-- REF #_method_.VP Convert to picture.Summary -->convertit l'objet *vpObject* 4D View Pro (ou la plage *rangeObj* dans *vpObject*) en une image SVG<!-- END REF -->.

Cette commande est utile, par exemple :

*   pour intégrer un document 4D View Pro dans un autre document, tel qu'un document 4D Write Pro
*   pour imprimer un document 4D View Pro sans le charger dans une zone 4D View Pro.

Dans *vpObject*, passez l'objet 4D View Pro que vous souhaitez convertir. Cet objet doit avoir été préalablement analysé à l'aide de [VP Export to object](#vp-export-to-object) ou enregistré avec [VP EXPORT DOCUMENT](#vp-export-document).
> Le processus de conversion SVG nécessite que les expressions et les formats (cf. [Format de cellule](configuring.md#cell-format) 4D View Pro) inclus dans la zone 4D View Pro soient évalués au moins une fois, afin d'être correctement exportés. Si vous convertissez un document qui n'a pas été évalué au préalable, les expressions ou les formats peuvent être rendus de manière inattendue.

Dans *rangeObj*, passez une plage de cellules à convertir. Par défaut, si ce paramètre est omis, tout le contenu du document est converti.

Les contenus de document sont convertis en tenant compte de leurs attributs d'affichage, y compris les formats (voir la note ci-dessus), la visibilité des en-têtes, des colonnes et des lignes. La conversion des éléments suivants est prise en charge :

*   Texte : style / police / taille / alignement / rotation / format
*   Arrière-plan de cellule : couleur / image
*   Bordure de cellule : épaisseur / couleur / style
*   Fusion de cellules
*   Images
*   Hauteur de lignes
*   Largeur de colonnes
*   Visibilité : colonnes / lignes cachées.
> > > Gridline visibility depends on document attribute defined with [VP SET PRINT INFO](#vp-set-print-info).

#### Résultat

La commande retourne une image au format SVG.


#### Exemple

Vous souhaitez convertir une zone 4D View Pro en SVG, prévisualiser le résultat et l'envoyer dans une variable image :


```4d
C_OBJECT($vpAreaObj)
C_PICTURE($vPict)
$vpAreaObj:=VP Export to object("ViewProArea")
$vPict:=VP Convert to picture($vpAreaObj) //exporter toute la zone
```

#### Voir aussi

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP Export to object](#vp-export-to-object)<br/>[VP SET PRINT INFO](#vp-set-print-info)

### VP Copy to object

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19 R4  | Ajout         |
</details>

<!-- REF #_method_.Copy to object.Syntax -->**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object
<!-- END REF -->  

<!-- REF #_method_.Copy to object.Params -->

| Paramètres | Type   |    | Description                              |
| ---------- | ------ | -- | ---------------------------------------- |
| rangeObj   | Object | -> | Objet plage                              |
| options    | Object | -> | Options supplémentaires                  |
| Résultat   | Object | <- | Objet retourné. Contains the copied data |
<!-- END REF -->  
#### Description

La commande `VP Copy to object` <!-- REF #_method_.Copy to object.Summary -->copie les contenus, styles et formules de *rangeObj* dans un objet<!-- END REF -->.

Dans *rangeObj*, passez la plage de cellules contenant les valeurs, formatages et formules à copier. Si *rangeObj* est une plage combinée, seule la première est utilisée.

Vous pouvez passer un paramètre facultatif *options* contenant les propriétés suivantes :

| Propriété   | Type    | Description                                                                                                                       |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| copy        | Booléen | *Vrai* (par défaut) pour conserver les valeurs, formatages et formules après exécution de la commande. *Faux* pour les supprimer. |
| copyOptions | Longint | Spécifie ce qui est copié ou déplacé. Valeurs possibles : <p><table><tr><th>Valeur</th><th>Description</th></tr><tr><td>`vk clipboard options all` (par défaut)</td><td>Copie tous les objets de données, y compris les valeurs, formats et formules.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Copie uniquement les formats.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Copie uniquement les formules.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Copie les formules et les formats.</td></tr><tr><td>`vk clipboard options values`</td><td>Copie uniquement les valeurs.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Copie les valeurs et les formats.</td></tr></table></p>                                                |

Les options de collage définies dans les [options de workbook](#vp-set-workbook-options) sont prises en compte.

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

#### Voir aussi

[VP PASTE FROM OBJECT](#vp-paste-from-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## D

### VP DELETE COLUMNS

<!-- REF #_method_.VP DELETE COLUMNS.Syntax -->**VP DELETE COLUMNS** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF #_method_.VP DELETE COLUMNS.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |
<!-- END REF -->  

#### Description

La commande `VP DELETE COLUMNS` <!-- REF #_method_.VP DELETE COLUMNS.Summary -->supprime les colonnes de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant les colonnes à supprimer. Si la plage qui est passée contient :

*   des lignes et des colonnes, seules les colonnes sont supprimées.
*   uniquement des lignes, la commande ne fait rien.
> Les colonnes sont supprimées de droite à gauche.


#### Exemple

Pour supprimer les colonnes sélectionnées par l'utilisateur (colonnes B, C et D de l'image ci-dessous) :

![](assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

saisissez le code suivant :

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

#### Voir aussi

[VP All](#vp-delete-rows)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)


### VP DELETE ROWS

<!-- REF #_method_.VP DELETE ROWS.Syntax -->**VP DELETE ROWS** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF #_method_.VP DELETE ROWS.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |
<!-- END REF -->  

#### Description

La commande `VP DELETE ROWS` <!-- REF #_method_.VP DELETE ROWS.Summary -->supprime les lignes de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant les lignes à supprimer. Si la plage qui est passée contient :

*   des lignes et des colonnes, seules les lignes sont supprimées.
*   uniquement des colonnes, la commande ne fait rien.
> Les lignes sont supprimées du bas vers le haut.


#### Exemple

Pour supprimer les lignes sélectionnées par l'utilisateur (lignes 1, 2 et 3 de l'image ci-dessous) :

![](assets/en/ViewPro/cmd_vpDeleteRows.PNG)

saisissez le code suivant :

```4d
 VP DELETE ROWS(VP Get selection("ViewProArea"))
```

#### Voir aussi

[VP All](#vp-delete-columns)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)


## E

### VP EXPORT DOCUMENT

<!-- REF #_method_.VP EXPORT DOCUMENT.Syntax -->**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->  

<!-- REF #_method_.VP EXPORT DOCUMENT.Params -->

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| filePath   | Text   | -> | Chemin d'accès du document              |
| paramObj   | Object | -> | Options d'export                        |
<!-- END REF -->  

#### Description

La commande `VP EXPORT DOCUMENT` <!-- REF #_method_.VP EXPORT DOCUMENT.Summary -->exporte l'objet 4D View Pro attaché à la zone 4D View Pro *vpAreaName* vers un document sur disque en fonction des paramètres *filePath* et *paramObj*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *filePath*, passez le chemin de destination et le nom du document que vous souhaitez exporter. Si vous ne spécifiez pas de chemin, le document sera sauvegardé au même niveau que le dossier Projet.

Vous pouvez préciser le format du document en incluant une extension après son nom :

* 4D View Pro (".4vp")
* Microsoft Excel (".xlsx")
* PDF (".pdf")
* CSV (".txt", or ".csv")

Si l'extension n'est pas incluse mais que le format est spécifié dans *paramObj*, le fichier exporté aura l'extension qui correspond au format, à l'exception du format CSV (aucune extension n'est ajoutée dans ce cas).

Le paramètre optionnel *paramObj* vous permet de définir plusieurs propriétés de l'objet 4D View Pro exporté et de lancer une méthode callback (ou méthode de rétro-appel) lorsque l'export est terminé.


| Propriété          | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format             | Texte   | (optionnel) Désigne le format du fichier exporté : ".4vp" (par défaut), ".xlsx", ".pdf", ".csv" ou ".txt". Vous pouvez passer une des constantes suivantes :<li>`vk 4D View Pro format`</li><li>`vk csv format`</li><li>`vk MS Excel format`</li><li>`vk pdf format`</li>4D ajoute l'extension appropriée au nom du fichier si nécessaire. Si le format défini ne correspond pas à l'extension dans le *filePath*, il sera ajouté à la fin du *filePath*. Si un format n'est pas précisé et si aucune extension n'est fournie dans *filePath*, le format de fichier par défaut est utilisé. |
| password           | Texte   | Microsoft Excel uniquement (optionnel) - Mot de passe utilisé pour protéger le document MS Excel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| formula            | object  | Méthode callback à lancer lorsque l'export est terminé. L'utilisation d'une méthode callback est nécessaire lorsque l'export est asynchrone (ce qui est le cas pour les formats PDF et Excel) si vous avez besoin d'un code à exécuter après l'export. La méthode callback doit être utilisée avec la commande [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) (voir ci-dessous pour plus d'informations).                                                                                                                                                      |
| valuesOnly         | boolean | Précise que seules les valeurs issues de formules (le cas échéant) seront exportées.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| includeFormatInfo  | boolean | Vrai pour inclure les informations de formatage, sinon faux (vrai par défaut). Les informations de formatage sont utiles dans certains cas, par exemple pour un export en SVG. D'un autre côté, mettre cette propriété à **faux** permet de réduire la durée de l'export.                                                                                                                                                                                                                                                                                                           |
| sheetIndex         | number  | PDF uniquement (optionnel) - Numéro de la feuille à exporter (débute à 0). -2=toutes les feuilles visibles (par défaut), -1=feuille courante uniquement                                                                                                                                                                                                                                                                                                                                                                                                                             |
| pdfOptions         | object  | PDF uniquement (optionnel) - Options pour l'export en PDF <p><table><tr><th>Propriété</th><th>Type</yh><th>Description</th></tr><tr><td>creator</td><td>Texte</td><td>nom de l'application qui a créé le document original à partir duquel il a été converti.</td></tr><tr><td>title</td><td>Texte</td><td>titre du document.</td></tr><tr><td>author</td><td>Texte</td><td>nom de la personne ayant créé ce document.</td></tr><tr><td>keywords</td><td>Texte</td><td>mots-clés associés au document.</td></tr><tr><td>subject</td><td>Texte</td><td>sujet du document.</td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| csvOptions         | object  | CSV uniquement (optionnel) - Options pour l'export en CSV <p><table><tr><th>Propriété</th><th>Type</th><th>Description</th></tr><tr><td>range</td><td>object</td><td>Objet plage de toutes les cellules</td></tr><tr><td>rowDelimiter</td><td>Texte</td><td>Délimiteur de ligne. Par défaut : "\r\n"</td></tr><tr><td>columnDelimiter</td><td>Texte</td><td>Délimiteur de colonne. Par défaut : ","</td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| \<customProperty> | any     | Propriété personnalisée qui sera disponible via le paramètre $3 dans la méthode de callback.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

**Notes sur le format Excel **:

* Lors de l'export d'un document 4D View Pro en un fichier au format Microsoft Excel, certains paramètres peuvent être perdus. Par exemple, les méthodes et formules 4D ne sont pas prises en charge par Excel. Vous pouvez vérifier les autres paramètres avec [cette liste proposée par GrapeCity](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html).
* L'export dans ce format est exécuté de manière asynchrone, utilisez la propriété *formula* de *paramObj* pour le code à exécuter après l'export.


**Notes sur le format PDF** :

* Lors de l'export d'un document 4D View Pro en un fichier au format PDF, les polices utilisées dans le document sont automatiquement intégrées dans le fichier PDF. Seules les polices OpenType (fichiers .OTF ou .TTF) ayant une table Unicode peuvent être intégrées. Si aucun fichier de polices valide n'est trouvé pour une police, une police par défaut est utilisée à sa place.
* L'export dans ce format est exécuté de manière asynchrone, utilisez la propriété *formula* de *paramObj* pour le code à exécuter après l'export.

**Notes sur le format CSV** :

* Lors de l'export d'un document 4D View Pro en un fichier au format PDF, certains paramètres peuvent être perdus, car seuls le texte et les valeurs sont sauvegardés.
* Toutes les valeurs sont enregistrées sous la forme de chaînes entre guillemets. Pour plus d'informations sur les valeurs séparées par des délimiteurs, consultez [cet article de Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values).

Une fois que l'export est terminé, `VP EXPORT DOCUMENT` exécute automatiquement la méthode définie dans la propriété *formula* de *paramObj*, le cas échéant.

#### Passer une méthode callback (formula)

Lorsque vous passez le paramètre optionnel *paramObj*, la commande `VP EXPORT DOCUMENT` vous permet d'utiliser la commande [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) pour appeler une méthode 4D qui sera exécutée une fois que l'export sera terminé. La méthode callback recevra les valeurs suivantes dans des variables locales :

| Variable |               | Type    | Description                                                |
| -------- | ------------- | ------- | ---------------------------------------------------------- |
| $1       |               | Texte   | Nom de l'objet 4D View Pro                                 |
| $2       |               | Texte   | Chemin d'accès de l'objet 4D View Pro exporté              |
| $3       |               | object  | Référence au *paramObj* de la commande                     |
| $4       |               | object  | Objet retourné par la méthode avec un message de statut    |
|          | .success      | boolean | Vrai si l'export est réussi, Faux sinon.                   |
|          | .errorCode    | entier  | Code d'erreur. Peut être retourné par 4D ou JavaScript.    |
|          | .errorMessage | Texte   | Message d'erreur. Peut être retourné par 4D ou JavaScript. |


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
 $params.format:=vp MS Excel format //".xlsx"
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

![example-export-csv](assets/en/ViewPro/vp-export-document-csv.png)

```4d 
var $params : Object
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
$params.rowDelimiter:="\n"
$params.columnDelimiter:="|"
VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\data.txt";New object("format";vk csv format;"csvOptions";$params))
```

Here's the result:

![example-export-csv](assets/en/ViewPro/vp-export-document-csv-result.png)

#### Voir aussi

[VP Convert to picture](#vp-convert-to-picture)<br/>[VP Export to object](#vp-export-to-object)<br/>[VP Column](#vp-import-document)<br/>[VP Print](#vp-print)

### VP Export to object

<!-- REF #_method_.VP Export to object.Syntax -->**VP Export to object** ( *vpAreaName* : Text {; *option* : Object} ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Export to object.Params -->

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| option     | Object | -> | Option d'export                         |
| Résultat   | Object | <- | Objet 4D View Pro                       |
<!-- END REF -->  

#### Description

La commande `VP Export to object` <!-- REF #_method_.VP Export to object.Summary --> retourne l'objet 4D View Pro associé à la zone 4D View Pro *vpAreaName*<!-- END REF -->. Vous pouvez utiliser cette commande par exemple pour stocker la zone 4D View Pro dans un champ objet de la base de données 4D.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre *option*, vous pouvez passer l'option d'export suivante, si nécessaire :


| Propriété         | Type    | Description                                                                                                                                                                                                                                                                   |
| ----------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeFormatInfo | boolean | Vrai pour inclure les informations de formatage, sinon faux (**vrai** par défaut). Les informations de formatage sont utiles dans certains cas, par exemple pour un export en SVG. D'un autre côté, mettre cette propriété à **faux** permet de réduire la durée de l'export. |

Pour plus d'informations sur les objets 4D View Pro, veuillez vous référer au paragraphe [objet 4D View Pro](configuring.md#objet-4d-view-pro).


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

#### Voir aussi

[VP Convert to picture](#vp-convert-to-picture)<br/>[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP IMPORT FROM OBJECT](#vp-import-from-object)

## F

### VP Find


<!-- REF #_method_.VP Find.Syntax -->**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object } ) : Object<br>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Find.Params -->

| Paramètres      | Type   |    | Description                                      |
| --------------- | ------ | -- | ------------------------------------------------ |
| rangeObj        | Object | -> | Objet plage                                      |
| searchValue     | Text   | -> | Valeur de recherche                              |
| searchCondition | Object | -> | Objet contenant la/les condition(s) de recherche |
| replaceValue    | Text   | -> | Valeur de remplacement                           |
| Résultat        | Object | <- | Objet plage                                      |
<!-- END REF -->  

#### Description
La commande `VP Find` <!-- REF #_method_.VP Find.Summary -->recherche le paramètre *rangeObj* pour *searchValue*<!-- END REF -->. Des paramètres facultatifs peuvent être utilisés pour affiner la recherche et/ou remplacer les résultats trouvés.

Dans le paramètre *rangeObj*, passez un objet contenant une plage à rechercher.

Le paramètre *searchValue* vous permet de passer le texte à rechercher dans le paramètre *rangeObj*.

Vous pouvez passer le paramètre optionnel *searchCondition* pour préciser le fonctionnement de la recherche. Les propriétés suivantes sont prises en charge :


| Propriété   | Type    | Description                                                                                                                                                                                                                          |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| afterColumn | Integer | Le numéro de la colonne située juste avant la colonne de départ de la recherche. Si *rangeObj* est une plage combinée, le numéro de colonne indiqué doit provenir de la première plage. Valeur par défaut : -1 (début de *rangeObj*) |
| afterRow    | Integer | Le numéro de la colonne située juste avant la colonne de départ de la recherche. Si *rangeObj* est une plage combinée, le numéro de ligne indiqué doit provenir de la première plage. Valeur par défaut : -1 (début de *rangeObj*)   |
| all         | Booléen | <li>True -Toutes les cellules de *rangeObj* correspondant à *searchValue* sont retournées</li><li>False - (valeur par défaut) Seule la première cellule de *rangeObj* correspondant à *searchValue* est retournée</li>                                                                                                                                                                                 |
| flags       | Integer | <table><tr><td>`vk find flag exact match`</td><td>Tout le contenu de la cellule doit entièrement correspondre à la valeur de recherche</td></tr><tr><td>`vk find flag ignore case`</td><td>Les majuscules et les minuscules sont considérées comme identiques. Ex : "a" est considérée comme identique à "A".</td></tr><tr><td>`vk find flag none`</td><td>Aucun indicateur de recherche n'est pris en compte (par défaut)</td></tr><tr><td>`vk find flag use wild cards`</td><td>Les caractères génériques (\*,?) peuvent être utilisés dans la chaîne de recherche. Les caractères joker peuvent être utilisés dans n'importe quelle comparaison de chaînes pour correspondre à n'importe quel nombre de caractères :<li>\*  - Pour le caractère zéro ou plusieurs caractères (par exemple, rechercher "bl*" peut donner comme résultat "bl", "black", "blue", et "blob")</li><li>? pour un seul caractère (par exemple, rechercher "h?t" peut donner comme résultat "hot", "hat", et "hit"</li></td></tr></table><p>Ces marqueurs peuvent être combinés. Par exemple :<p> <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code></p>                                                                                                    |
| order       | Integer | <table><tr><td>`vk find order by columns`</td><td>La recherche est effectuée par colonnes. Chaque ligne d'une colonne est recherchée avant que la recherche ne passe à la colonne suivante.</td></tr><tr><td>`vk find order by rows`</td><td>La recherche est effectuée par lignes. Chaque colonne d'une ligne est recherchée avant que la recherche ne passe à la colonne suivante (par défaut)</td></tr></table>                                                                                                                                                                                                           |
| target      | Integer | <table><tr><td>`vk find target formula`</td><td>La recherche est effectuée dans la formule de la cellule</td></tr><tr><td>`vk find target tag`</td><td>La recherche est effectuée dans la balise de la cellule</td></tr><tr><td>`vk find target text`</td><td>La recherche est effectuée dans le texte de la cellule (par défaut)</td></tr></table><p>Ces marqueurs peuvent être combinés. Par exemple :<p> <code>$search.target:=vk find target formula+vk find target text</code></p>                                                                                                    |

Dans le paramètre optionnel *replaceValue*, vous pouvez passer du texte pour remplacer toute instance du texte dans la *searchValue* trouvée dans *rangeObj*.


#### Returned Object

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
 $condition.all:=True //Rechercher le document entier
 $condition.flags:=vk find flag exact match
 
  // Remplacer les cellules contenant uniquement 'Total' dans la feuille courante par "Grand Total"
 $result:=VP Find($range;"Total";$condition;"Grand Total")
 
  // Rechercher un objet de plage vide
 If($result.ranges.length=0)
    ALERT("Aucun résultat trouvé")
 Else
    ALERT($result.ranges.length+" résultats trouvés")
 End if
```


### VP FLUSH COMMANDS

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->**VP FLUSH COMMANDS** (  *vpAreaName* : Text )<!-- END REF -->  

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro |
<!-- END REF -->  

#### Description

La commande `VP FLUSH COMMANDS` exécute <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->immédiatement les commandes empilées et vide le buffer de commandes<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Afin d'améliorer la performance et de réduire le nombre de requêtes envoyées, les commandes 4D View Pro appelées par le développeur sont stockées temporairement dans un buffer de commandes. Lorsqu'elle est appelée, la commande `VP FLUSH COMMANDS` exécute les commandes en lot au moment de quitter la méthode et vide le buffer de commandes.

#### Exemple

Vous souhaitez tracer l'exécution des commandes et vider le buffer :

```4d
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

 VP FLUSH COMMANDS(("ViewProArea1")
 TRACE
```



### VP Font to object

<!-- REF #_method_.VP Font to object.Syntax -->**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Font to object.Params -->

| Paramètres | Type |    | Description                                  |
| ---------- | ---- | -- | -------------------------------------------- |
| font       | Text | -> | Chaîne raccourcie pour la police (shorthand) |
<!-- END REF -->  

#### Description

La commande utilitaire `VP Font to object` <!-- REF #_method_.VP Font to object.Summary -->retourne un objet d'une chaîne raccourcie pour la police (shorthand)<!-- END REF -->. Cet objet peut être utilisé pour définir ou lire les propriétés de la police via la notation objet.

Dans le paramètre *font*, passez une chaîne raccourcie pour la police pour indiquer les différentes propriétés d'une police (ex : "12 pt Arial"). Cliquez [ici](https://www.w3schools.com/cssref/pr_font_font.asp) pour en savoir plus sur les chaînes raccourcies pour la police.

L'objet retourné contient des attributs de police définis comme propriétés. Pour plus d'informations sur les propriétés disponibles, veuillez vous reporter à la commande [VP Object to font](#vp-object-to-font).

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

Voir l'exemple de [`VP Object to font`](#vp-object-to-font).


#### Voir aussi

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)



## G

### VP Get active cell

<!-- REF #_method_.VP Get active cell.Syntax -->**VP Get active cell** (  *vpAreaName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get active cell.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet plage d'une seule cellule                 |
<!-- END REF -->  

#### Description

La commande `VP Get active cell` <!-- REF #_method_.VP Get active cell.Summary -->retourne un nouvel objet plage référençant la cellule active, dans laquelle de nouvelles données seront saisies<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.


#### Exemple


![](assets/en/ViewPro/cmd_vpGetActiveCell.PNG)

Le code suivant récupèrera les coordonnées de la cellule active :

```4d
$activeCell:=VP Get active cell("myVPArea")

  //returns a range object containing: 
  //$activeCell.ranges[0].column=3
  //$activeCell.ranges[0].row=4
  //$activeCell.ranges[0].sheet=0
```

#### Voir aussi

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)



### VP Get cell style

<!-- REF #_method_.VP Get cell style.Syntax -->**VP Get cell style** (  *rangeObj* : Object ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get cell style.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |
| Résultat   | Object | <- | Objet style |
<!-- END REF -->  

#### Description

La commande `VP Get cell style` <!-- REF #_method_.VP Get cell style.Summary -->retourne un [objet style](configuring.md#style-objects) pour la première cellule de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez une plage contenant le style à récupérer.

*   Si *rangeObj* contient une plage cellule, le style de la cellule est retourné.
*   Si *rangeObj* contient une plage qui n'est pas une plage cellule, le style de la première cellule de la plage est retourné.
*   Si *rangeObj* contient plusieurs plages, seul le style de la première cellule de la première plage est retourné.


#### Exemple

Pour obtenir les détails concernant le style de la cellule sélectionnée (B2) :

![](assets/en/ViewPro/cmd_vpGetCellStyle.PNG)

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

#### Voir aussi

[VP GET DEFAULT STYLE](#vp-get-default-style)<br/>[VP SET CELL STYLE](#vp-set-cell-style)

### VP Get column attributes

<!-- REF #_method_.VP Get column attributes.Syntax -->**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get column attributes.Params -->

| Paramètres | Type       |    | Description                          |
| ---------- | ---------- | -- | ------------------------------------ |
| rangeObj   | Object     | -> | Objet plage                          |
| Résultat   | Collection | <- | Collection de propriétés de colonnes |
<!-- END REF -->  

#### Description

La commande `VP Get column attributes` <!-- REF #_method_.VP Get column attributes.Summary -->retourne une collection de propriétés pour les colonnes de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de colonnes dont les attributs seront récupérés.

La collection retournée contient les propriétés des colonnes, qu'elles aient ou non été définies par la commande [VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes).


#### Exemple

Le code suivant :

```4d
C_OBJECT($range)
C_COLLECTION($attr)

$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

... retournera une collection d'attributs de la plage donnée :

![](assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)

#### Voir aussi

[VP Get row attributes](#vp-get-row-attributes)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP Get column count

<!-- REF #_method_.VP Get column count.Syntax -->**VP Get column count** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF -->  

<!-- REF #_method_.VP Get column count.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom de la zone 4D View Pro dans le formulaire   |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat   | Integer | <- | Nombre total de colonnes                        |
<!-- END REF -->  

#### Description

La commande `VP Get column count` <!-- REF #_method_.VP Get column count.Summary -->retourne le nombre total de colonnes de la feuille (*sheet*) désignée<!-- END REF -->.

Dans *vpAreaName*, passez la propriété du nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir l'emplacement du nombre de colonnes dans le paramère optionnel *sheet* à l'aide de l'indice de la feuille (la numérotation démarre à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.


#### Exemple

Le code suivant retourne le nombre de colonnes dans la zone 4D View Pro :

```4d
C_Integer($colCount)
$colCount:=VP Get column count("ViewProarea")
```

#### Voir aussi

[VP Get row count](#vp-get-row-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get current sheet

<!-- REF #_method_.VP Get current sheet.Syntax -->**VP Get current sheet** ( *vpAreaName* : Text )
<!-- END REF --> 

<!-- REF #_method_.VP Get current sheet.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| Résultat   | Integer | <- | Indice de la feuille courante           |
<!-- END REF --> 

#### Description

La commande `VP Get current sheet` <!-- REF #_method_.VP Get current sheet.Summary -->retourne l'indice de la feuille courante dans *vpAreaName*. La feuille courante est la feuille sélectionnée dans le document.
<!-- END REF --> 

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

> La numérotation démarre à 0.

#### Exemple

Lorsque la troisième feuille est sélectionnée :

![third-sheet](assets/en/ViewPro/vp-sheet-3-select.png)

La commande retourne 2 :

```4d
$index:=VP Get current sheet("ViewProArea")
```

#### Voir aussi

[VP SET CURRENT SHEET](#vp-set-current-sheet)

### VP Get default style

<!-- REF #_method_.VP Get default style.Syntax -->**VP Get default style** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF -->  

<!-- REF #_method_.VP Get default style.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom de la zone 4D View Pro dans le formulaire   |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat   | Integer | <- | Nombre total de colonnes                        |
<!-- END REF -->  

#### Description

La commande `VP Get default style` <!-- REF #_method_.VP Get default style.Summary -->retourne un objet feuille de style par défaut pour une feuille<!-- END REF -->. L'objet retourné contient des propriétés basiques de rendu d'un document ainsi que les propriétés du style par défaut (le cas échéant) définies préalablement à l'aide de la méthode [VP SET DEFAULT STYLE](#vp-set-default-style). Pour plus d'informations sur les propriétés de style, consultez [Objets style et feuilles de style](configuring.md#style-objects--style-sheets).

Dans *vpAreaName*, passez la propriété du nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir l'emplacement du nombre de colonnes dans le paramère optionnel *sheet* à l'aide de l'indice de la feuille (la numérotation démarre à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.


#### Exemple

Pour lire les détails du style par défaut de ce document :

![](assets/en/ViewPro/cmd_vpGetDefaultStyle.PNG)

Le code suivant :

```4d
$defaultStyle:=VP Get default style("myDoc")
```

retournera les informations suivantes dans l'objet *$defaultStyle* :

```4d
{
    backColor:#E6E6FA,
    hAlign:0,
    vAlign:0,
    font:12pt papyrus
}
```

#### Voir aussi

[VP Get cell style](#vp-get-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)


### VP Get formula

<!-- REF #_method_.VP Get formula.Syntax -->**VP Get formula** ( *rangeObj* : Object) : Text<!-- END REF -->  

<!-- REF #_method_.VP Get formula.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |
| Résultat   | Text   | <- | Formula     |
<!-- END REF -->  

#### Description


La commande `VP Get formula` <!-- REF #_method_.VP Get formula.Summary -->récupère la formule depuis une plage de cellules désignée<!-- END REF -->.

Dans *rangeObj*, passez la plage dont vous souhaitez récupérer la formule. Si *rangeObj* désigne plusieurs cellules ou plusieurs plages, la formule de la première cellule est retournée. Si *rangeObj* est une cellule qui ne contient pas de formule, la commande retourne une chaine vide.

#### Exemple

```4d
  //fixer une formule
 VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
 
 $result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```
#### Voir aussi

[VP Get formulas](#vp-get-formulas)<br/>[VP SET FORMULA](#vp-set-formula)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get formula by name

<!-- REF #_method_.VP Get formula by name.Syntax -->**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Number } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get formula by name.Params -->

| Paramètres | Type   |    | Description                                           |
| ---------- | ------ | -- | ----------------------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro               |
| name       | Text   | -> | Nom de la plage nommée                                |
| scope      | Nombre | -> | "Scope" cible (par défaut=feuille courante)           |
| Résultat   | Text   | <- | Définition de la formule nommée ou de la plage nommée |
<!-- END REF -->  

#### Description

La commande `VP Get formula by name` <!-- REF #_method_.VP Get formula by name.Summary --> retourne la formule et le commentaire correspondant à la plage nommée ou à la formule nommée qui a été passée dans le paramètre *name*, ou retourne **null** si le nom n'existe pas dans le scope défini<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez la plage nommée ou la formule nommée que vous souhaitez lire dans*name*. A noter que les plages nommées sont retournées sous forme de formules contenant des références absolues de cellules.

Le paramètre *scope* vous permet de définir l'espace de la zone dans lequel lire la formule, en passant l'indice de la feuille (la numérotation débute à 0) ou l'une des constantes suivantes :

*   `vk current sheet`
*   `vk workbook`


##### Returned Object

L'objet retourné contient les propriétés suivantes :

| Propriété | Type | Description                                                                                                                                               |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula   | Text | Texte de la formule correspondant à la formule nommée ou à la plage nommée. Pour les plages nommées, la formule est une séquence de coordonnées absolues. |
| comment   | Text | Commentaire correspondant à la formule nommée ou à la plage nommée                                                                                        |

#### Exemple

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1

$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (if not existing)
```

#### Voir aussi

[VP ADD FORMULA NAME](#vp-add-formula-name)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get names](#vp-get-names)

### VP Get formulas

<!-- REF #_method_.VP Get formulas.Syntax -->**VP Get formulas** ( *rangeObj* : Object ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get formulas.Params -->

| Paramètres | Type       |    | Description                         |
| ---------- | ---------- | -- | ----------------------------------- |
| rangeObj   | Object     | -> | Objet plage                         |
| Résultat   | Collection | <- | Collection de valeurs d'une formule |
<!-- END REF -->  

#### Description

La commande `VP Get formulas` <!-- REF #_method_.VP Get formulas.Summary -->récupère les formules d'un *rangeObj*déterminé<!-- END REF -->.

Dans *rangeObj*, passez une plage dont vous souhaitez récupérer les formules. Si *rangeObj* désigne plusieurs plages, la formule de la première plage est retournée. Si *rangeObj* ne contient pas de formules, la commande retourne une chaîne vide.

La collection retournée est bidemensionnelle :

*   La collection de premier niveau contient des sous-collections de formules. Chaque sous-collection représente une ligne.
*   Chaque sous-collection définit les valeurs des cellules de la ligne. Les valeurs sont des éléments textuels contenant les formules des cellules.

#### Exemple

Ous souhaitez récupérer les formules des colonnes Sum et Average de ce document :


![](assets/en/ViewPro/cmd_vpGetFormulas.PNG)

Vous pouvez utiliser ce code :

```4d
$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))
//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]
//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]
//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]
```

#### Voir aussi

[VP Get formula](#vp-get-formula)<br/>[VP Get values](#vp-get-values)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUES](#vp-set-values)

### VP Get frozen panes

<!-- REF #_method_.VP Get frozen panes.Syntax -->**VP Get frozen panes** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get frozen panes.Params -->

| Paramètres | Type    |    | Description                                                        |
| ---------- | ------- | -- | ------------------------------------------------------------------ |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                            |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis)                    |
| Résultat   | Object  | <- | Objet contenant des informations sur les colonnes et lignes figées |
<!-- END REF -->  

#### Description

La commande `VP Get frozen panes` <!-- REF #_method_.VP Get frozen panes.Summary -->retourne un objet contenant des informations sur les lignes et colonnes figées de *vpAreaName*<!-- END REF -->.

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

![](assets/en/ViewPro/cmd_vpGetFrozenpanes.PNG)

#### Voir aussi

[VP SET FROZEN PANES](#vp-set-frozen-panes)

### VP Get names

<!-- REF #_method_.VP Get names.Syntax -->**VP Get names** ( vpAreaName : Text { ; scope : Number } ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get names.Params -->

| Paramètres | Type       |    | Description                                 |
| ---------- | ---------- | -- | ------------------------------------------- |
| vpAreaName | Text       | -> | Nom d'objet formulaire zone 4D View Pro     |
| scope      | Nombre     | -> | "Scope" cible (par défaut=feuille courante) |
| Résultat   | Collection | <- | Noms existant dans la zone définie          |
<!-- END REF -->  

#### Description

La commande `VP Get names` <!-- REF #_method_.VP Get names.Summary -->retourne une collection de tous les "noms" définis dans la feuille courante ou dans la zone définie dans le paramètre *scope*r<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *scope* vous permet de définir l'espace de la zone dans lequel lire la formule, en passant l'indice de la feuille (la numérotation débute à 0) ou l'une des constantes suivantes :

*   `vk current sheet`
*   `vk workbook`

##### Returned collection

La collection retournée contient un objet par nom. Les propriétés d'objets suivantes peuvent être retournées :

| Propriété           | Type | Description                |
| ------------------- | ---- | -------------------------- |
| result\[ ].name    | Text | nom de cellule ou de plage |
| result\[ ].formula | Text | formula                    |
| result\[ ].comment | Text | Commentaire associé au nom |

Les propriétés disponibles dépendent du type d'élément nommé (cellule nommée, plage nommée ou formule nommée).

#### Exemple

```4d
var $list : Collection
$list:=VP Get names("ViewProArea";2) //noms de la 3e feuille
```

#### Voir aussi

[VP ADD FORMULA NAME](#vp-get-formula)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Name](#vp-name)


### VP Get print info

<!-- REF #_method_.VP Get print info.Syntax -->**VP Get print info** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get print info.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet contenant les informations d'impression   |
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

... retourne les attributs d'impression de la zone 4D View Pro dans la commande [VP SET PRINT INFO](#vp-set-print-info) :

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

#### Voir aussi

[4D View Pro Print Attributes](configuring.md#print-attributes)<br/>[VP SET PRINT INFO](#vp-set-print-info)


### VP Get row attributes

<!-- REF #_method_.VP Get row attributes.Syntax -->**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get row attributes.Params -->

| Paramètres | Type       |    | Description                        |
| ---------- | ---------- | -- | ---------------------------------- |
| rangeObj   | Object     | -> | Objet plage                        |
| Résultat   | Collection | <- | Collection de propriétés de lignes |
<!-- END REF -->  

#### Description

La commande `VP Get row attributes` <!-- REF #_method_.VP Get row attributes.Summary -->retourne une collection de propriétés pour les lignes de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de lignes dont les attributs seront récupérés.

La collection retournée contient les propriétés des lignes, qu'elles aient été définies ou non par la méthode [VP SET ROW ATTRIBUTES](#vp-set-row-attributes).


#### Exemple

Le code suivant retourne une collection d'attributs de la plage donnée :

```4d
var $range : Object
var $attr : Collection

$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get row attributes($range)
```


![](assets/en/ViewPro/cmd_vpGetRowAttributes.PNG)

#### Voir aussi

[VP Get column attributes](#vp-get-column-attributes)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)


### VP Get row count

<!-- REF #_method_.VP Get row count.Syntax -->**VP Get row count** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->  

<!-- REF #_method_.VP Get row count.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom de la zone 4D View Pro dans le formulaire   |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat   | Integer | <- | Nombre total de lignes                          |
<!-- END REF -->  

#### Description

La commande `VP Get row count` <!-- REF #_method_.VP Get row count.Summary -->retourne le nombre total de lignes de la feuille (*sheet*) désignée<!-- END REF -->.

Dans *vpAreaName*, passez la propriété du nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir l'emplacement du nombre de lignes dans le paramère optionnel *sheet* à l'aide de l'indice de la feuille (la numérotation démarre à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.


#### Exemple

Le code suivant retourne le nombre de lignes dans la zone 4D View Pro :

```4d
var $rowCount : Integer
$rowCount:=VP Get row count("ViewProarea")
```

#### Voir aussi

[VP Get column count](#vp-get-column-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)


### VP Get selection

<!-- REF #_method_.VP Get selection.Syntax -->**VP Get selection** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get selection.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom de la zone 4D View Pro dans le formulaire   |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet plage de toutes les cellules              |
<!-- END REF -->  

#### Description

La commande `VP Get selection` <!-- REF #_method_.VP Get selection.Summary -->retourne un nouvel objet plage référençant les cellules courantes sélectionnées<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.



#### Exemple

![](assets/en/ViewPro/cmd_vpGetSelection.PNG)

Le code suivant récupèrera les coordonnées de la cellule active :

```4d
$currentSelection:=VP Get selection("myVPArea")

//retourne un objet plage contenant :  
//$currentSelection.ranges[0].column=5
//$currentSelection.ranges[0].columnCount=2
//$currentSelection.ranges[0].row=8
//$currentSelection.ranges[0].rowCount=6
```

#### Voir aussi

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP Get sheet count

<!-- REF #_method_.VP Get sheet count.Syntax -->**VP Get sheet count** ( *vpAreaName* : Text ) : Integer
<!-- END REF --> 

<!-- REF #_method_.VP Get sheet count.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| Résultat   | Integer | <- | Nombre de feuilles                      |
<!-- END REF --> 

#### Description

La commande `VP Get sheet count` <!-- REF #_method_.VP Get sheet count.Summary -->retourne le nombre de feuilles contenues dans le document chargé dans *vpAreaName*.
<!-- END REF --> 

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

#### Exemple

Dans le document suivant :

![](assets/en/ViewPro/vp-sheet-3.png)

Pour obtenir le nombre de feuilles et définir la feuille courante comme étant la dernière feuille :

```4d
 $count:=VP Get sheet count("ViewProArea")
  //définir la feuille courante comme étant la dernière feuille (l'indexation commence à 0) VP SET CURRENT SHEET("ViewProArea";$count-1)
```

![](assets/en/ViewPro/vp-sheet-3-select.png)

#### Voir aussi

[VP Get sheet index](#vp-get-sheet-index)<br/>[VP SET SHEET COUNT](#vp-set-sheet-count)

### VP Get sheet index

<!-- REF #_method_.VP Get sheet index.Syntax -->**VP Get sheet index** ( *vpAreaName* : Text ; *name* : Text ) : Integer
<!-- END REF --> 

<!-- REF #_method_.VP Get sheet index.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| name       | Text    | -> | Nom de la feuille                       |
| Résultat   | Integer | <- | Sheet index                             |
<!-- END REF --> 

#### Description

The `VP Get sheet index` command <!-- REF #_method_.VP Get sheet index.Summary -->returns the index of a sheet based on its name in *vpAreaName*.
<!-- END REF --> 

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *name*, pass the name of the sheet whose index will be returned. If no sheet named *name* is found in the document, the method returns -1.
> La numérotation démarre à 0.

#### Exemple

Dans le document suivant :

![](assets/en/ViewPro/vp-sheet-index-name.png)

Get the index of the sheet called "Total first quarter":

```4d
$index:=VP Get sheet index("ViewProArea";"Total first quarter") //returns 2
```

#### Voir aussi

[VP Get sheet count](#vp-get-sheet-count)<br/>[VP Get sheet name](#vp-get-sheet-name)

### VP Get sheet name

<!-- REF #_method_.VP Get sheet name.Syntax -->**VP Get sheet name** ( *vpAreaName* : Text ; *sheet* : Integer ) : Text
<!-- END REF --> 


<!-- REF #_method_.VP Get sheet name.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| sheet      | Integer | -> | Sheet index                             |
| Résultat   | Text    | <- | Nom de la feuille                       |
<!-- END REF --> 

#### Description

The `VP Get sheet name` command <!-- REF #_method_.VP Get sheet name.Summary -->returns the name of a sheet based on its index in *vpAreaName*.
<!-- END REF --> 

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *sheet*, pass the index of the sheet whose name will be returned.

If the passed sheet index does not exist, the method returns an empty name.
> La numérotation démarre à 0.

#### Exemple

Get the name of the third sheet in the document:

```4d
$sheetName:=VP Get sheet name("ViewProArea";2)
```

#### Voir aussi

[VP Get sheet index](#vp-get-sheet-index)

### VP Get sheet options

<!-- REF #_method_.VP Get sheet options.Syntax -->**VP Get sheet options** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get sheet options.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom de la zone 4D View Pro dans le formulaire   |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Objet options de la feuille                     |
<!-- END REF -->  

#### Description

La commande `VP Get sheet options` <!-- REF #_method_.VP Get sheet options.Summary -->retourne un objet contenant les options relatives à la feuille courante de la zone *vpAreaName*<!-- END REF -->.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.


#### Objet retourné

La commande retourne un objet contenant les valeurs courantes pour toutes les options de feuille disponibles. La valeur d'une option peut avoir été modifiée par l'utilisateur ou par la méthode [VP SET SHEET OPTIONS](#vp-set-sheet-options).

Pour visualiser la liste complète des options, voir [Options feuille](configuring.md#sheet-options).

#### Exemple

```4d
$options:=VP Get sheet options("ViewProArea")
 If($options.colHeaderVisible) //les en-têtes des colonnes sont visibles
    ... //faire quelque chose
 End if
```

#### Voir aussi

[4D VIEW PRO SHEET OPTIONS](configuring.md#sheet-options)<br/>[VP SET SHEET OPTIONS](#vp-set-sheet-options)

### VP Get show print lines

<!-- REF #_method_.VP Get show print lines.Syntax -->**VP Get show print lines** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Boolean
<!-- END REF --> 

<!-- REF #_method_.VP Get show print lines.Params -->

| Paramètres | Type    |    | Description                                      |
| ---------- | ------- | -- | ------------------------------------------------ |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro          |
| sheet      | Integer | <- | Sheet index                                      |
| Résultat   | Booléen | <- | True if print lines are visible, False otherwise |
<!-- END REF --> 

#### Description

The `VP Get show print lines` command <!-- REF #_method_.VP Get show print lines.Summary -->returns `True` if the print preview lines are visible and `False` if they are hidden.
<!-- END REF --> 

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *sheet*, pass the index of the target sheet. If *sheet* is omitted, the command applies to the current sheet.

> La numérotation démarre à 0.

#### Exemple

The following code checks if preview lines are displayed or hidden in the document:

```4d
 var $result : Boolean
 $result:=VP Get show print lines("ViewProArea";1)
```

#### Voir aussi

[VP SET SHOW PRINT LINES](#vp-set-show-print-lines)

### VP Get spans

<!-- REF #_method_.VP Get spans.Syntax -->**VP Get spans** ( *rangeObj* : Object ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get spans.Params -->

| Paramètres | Type   |    | Description                                                     |
| ---------- | ------ | -- | --------------------------------------------------------------- |
| rangeObj   | Object | -> | Objet plage                                                     |
| Résultat   | Object | <- | Objet de cellules fusionnées (cell spans) dans la plage définie |
<!-- END REF -->  

#### Description

La commande `VP Get spans` <!-- REF #_method_.VP Get spans.Summary -->récupère les cellules fusionnées (cell spans) du paramètre *rangeObj* désigné<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellules fusionnées que vous souhaitez récupérer. Si *rangeObj* ne contient pas de cellules fusionnées, une plage vide est retournée.


#### Exemple

Pour centrer le texte des cellules fusionnées dans ce document :

![](assets/en/ViewPro/cmd_vpGetSpans.PNG)

```4d
// Rechercher toutes les cellules fusionnées
 $range:=VP Get spans(VP All("ViewProArea"))
 
 //centrer le texte
 $style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
 VP SET CELL STYLE($range;$style)
```

#### Voir aussi

[VP ADD SPAN](configuring.md#sheet-options)<br/>[VP REMOVE SPAN](#vp-remove-span)

### VP Get stylesheet

<!-- REF #_method_.VP Get stylesheet.Syntax -->**VP Get stylesheet** ( *vpAreaName* : Text ; *styleName* : Text { ; *scope* : Integer } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get stylesheet.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| styleName  | Text    | -> | Nom du style                            |
| scope      | Integer | -> | Cible (par défaut = feuille courante)   |
| Résultat   | Object  | <- | Objet feuille de style                  |
<!-- END REF -->  

#### Description

La commande `VP Get stylesheet` <!-- REF #_method_.VP Get stylesheet.Summary -->retourne l'objet feuille courante *styleName* qui contient les valeurs de propriété qui ont été définies<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *styleName*, passez le nom de la feuille de style que vous souhaitez lire.

Vous pouvez définir l'emplacement dans lequel vous souhaitez lire la feuille de style dans le paramètre *scope* à l'aide de l'indice de la feuille (la numérotation commence à partir de 0) ou à l'aide des constantes suivantes :

*   `vk current sheet`
*   `vk workbook`

#### Exemple

Le code suivant :

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

... retournera l'objet style *GreenDashDotStyle* de la feuille courante :

```4d
{
backColor:green,
borderBottom:{color:green,style:10},
borderLeft:{color:green,style:10},
borderRight:{color:green,style:10},
borderTop:{color:green,style:10}
}
```

#### Voir aussi

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP ADD STYLESHEET](#vp-set-sheet-options)<br/>[VP Get stylesheets](#vp-get-stylesheets)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)


### VP Get stylesheets

<!-- REF #_method_.VP Get stylesheets.Syntax -->**VP Get stylesheets** ( *vpAreaName* : Text { ; *scope* : Integer } ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get stylesheets.Params -->

| Paramètres | Type       |    | Description                             |
| ---------- | ---------- | -- | --------------------------------------- |
| vpAreaName | Text       | -> | Nom d'objet formulaire zone 4D View Pro |
| scope      | Integer    | -> | Cible (par défaut = feuille courante)   |
| Résultat   | Collection | <- | Collection d'objets feuille de style    |
<!-- END REF -->  

#### Description

La commande `VP Get stylesheets` <!-- REF #_method_.VP Get stylesheets.Summary -->retourne la collection d'objets feuille de style définis de la cible (*scope*) désignée<!-- END REF -->.

Dans *vpAreaName*, passez la propriété du nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir l'emplacement dans lequel vous souhaitez lire les feuilles de style dans le paramètre *scope* à l'aide de l'indice de la feuille (la numérotation commence à partir de 0) ou à l'aide des constantes suivantes :

*   `vk current sheet`
*   `vk workbook`

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
#### Voir aussi

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)


### VP Get value

<!-- REF #_method_.VP Get value.Syntax -->**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get value.Params -->

| Paramètres | Type   |    | Description                           |
| ---------- | ------ | -- | ------------------------------------- |
| rangeObj   | Object | -> | Objet plage                           |
| Résultat   | Object | <- | Objet contenant une valeur de cellule |
<!-- END REF -->  

#### Description

La commande `VP Get value` <!-- REF #_method_.VP Get value.Summary -->récupère la valeur d'une cellule depuis une plage de cellules désignée<!-- END REF -->.

Dans *rangeObj*, passez la plage dont vous souhaitez récupérer la valeur.

#### Objet retourné

L'objet retourné contiendra la propriété `value`, et la propriété `time` dans le cas d'une valeur date :

| Propriété | Type                               | Description                                                               |
| --------- | ---------------------------------- | ------------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date | Value in the *rangeObj* (except- time)                                    |
| time      | Réel                               | Time value (in seconds) if *rangeObj* if the value is of the js date type |

If the object returned includes a date or time, it is treated as a datetime and completed as follows:

*   time value - the date portion is completed as December 30, 1899 in dd/MM/yyyy format (30/12/1899)
*   date value - the time portion is completed as midnight in HH:mm:ss format (00:00:00)

If *rangeObj* contains multiple cells or multiple ranges, the value of the first cell is returned. The command returns a null object if the cell is empty.

#### Exemple

```4d
$cell:=VP Cell("ViewProArea";5;2)
$value:=VP Get value($cell)
If(Value type($value.value)=Is text)
    VP SET TEXT VALUE($cell;New object("value";Uppercase($value.value))
End if
```

#### Voir aussi

[VP Get values](#vp-get-values)<br/>[VP SET VALUE](#vp-set-value)<br/>[VP SET VALUES](#vp-set-values)


### VP Get values

<!-- REF #_method_.VP Get values.Syntax -->**VP Get values** ( *rangeObj* : Object ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get values.Params -->

| Paramètres | Type       |    | Description          |
| ---------- | ---------- | -- | -------------------- |
| rangeObj   | Object     | -> | Objet plage          |
| Résultat   | Collection | <- | Collection of values |
<!-- END REF -->  

#### Description

The `VP Get values` command <!-- REF #_method_.VP Get values.Summary --> retrieves the values from the designated *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range whose values you want to retrieve. If *rangeObj* includes multiple ranges, only the first range is used.

The collection returned by `VP Get values` contains a two-dimensional collection:

*   Each element of the first-level collection represents a row and contains a subcollection of values
*   Each subcollection contains cell values for the row. Values can be Integer, Real, Boolean, Text, Null. If a value is a date or time, it is returned in an object with the following properties:

    | Propriété | Type | Description                                                 |
    | --------- | ---- | ----------------------------------------------------------- |
    | value     | Date | Value in the cell (except- time)                            |
    | time      | Réel | Time value (in seconds) if the value is of the js date type |


Dates or times are treated as a datetime and completed as follows:

* time value - the date portion is completed as December 30, 1899
* date value - the time portion is completed as midnight (00:00:00:000)

#### Exemple

You want to get values from C4 to G6:

![](assets/en/ViewPro/cmd_vpGetValues.PNG)

```4d
$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))
// $result[0]=[4,5,null,hello,world]
// $result[1]=[6,7,8,9,null]
// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]
```

#### Voir aussi

[VP Get formulas](#vp-get-formulas)<br/>[VP Get value](#vp-get-value)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUES](#vp-set-values)

### VP Get workbook options

<!-- REF #_method_.VP Get workbook options.Syntax -->**VP Get workbook options** ( *vpAreaName* : Text ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get workbook options.Params -->
| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| Résultat   | Object | <- | Object containing the workbook options  |
<!-- END REF -->  

#### Description

`VP Get workbook options` <!-- REF #_method_.Get workbook options.Summary -->
returns an object containing all the workbook options in *vpAreaName*
<!-- END REF -->

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

The returned object contains all the workbook options (default and modified ones), in the workbook.

The list of workbook options is referenced in [`VP SET WORKBOOK OPTIONS`'s description](#vp-set-workbook-options).

#### Exemple

```4d
var $workbookOptions : Object

$workbookOptions:=VP Get workbook options("ViewProArea")
```

#### Voir aussi

[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## I

### VP IMPORT DOCUMENT

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->  

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| filePath   | Text   | -> | Chemin d'accès du document              |
| paramObj   | Object | -> | Import options                          |

<!-- END REF -->  

#### Description

The `VP IMPORT DOCUMENT` command <!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->imports and displays the document designated by *filePath* in the 4D View Pro area *vpAreaName*<!-- END REF -->. The imported document replaces any data already inserted in the area.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

In *filePath*, pass the path and name of the document to be imported. The following formats are supported :

* 4D View Pro documents (extension ".4vp")
* Microsoft Excel (extension ".xlsx")
* text documents (extension ".txt", ".csv", the document must be in utf-8)

If the document extension is not a recognized extension, such as `.4vp` or `.xlsx`, the document is considered a text document. You must pass a full path, unless the document is located at the same level as the Project folder, in which case you can just pass its name.

> When importing a Microsoft Excel-formatted file into a 4D View Pro document, some settings may be lost. You can verify your settings with [this list from GrapeCity](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html).

An error is returned if the `filePath` parameter is invalid, or if the file is missing or malformed.

The optional *paramObj* parameter allows you to define properties for the imported document:

| Paramètres |                 | Type   | Description                                                                                                                                                                                                                                              |
| ---------- | --------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    |                 | object | A callback method name to be launched when the import has completed. The method must use the [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) command. See [Passing a callback method (formula)](#passing-a-callback-method-formula). |
| password   |                 | Texte  | Microsoft Excel only (optional) - The password used to protect a MS Excel document.                                                                                                                                                                      |
| csvOptions |                 | object | options for csv import                                                                                                                                                                                                                                   |
|            | range           | object | Cell range that contains the first cell where the data will be written. If the specified range is not a cell range, only the first cell of the range is used.                                                                                            |
|            | rowDelimiter    | Texte  | Délimiteur de ligne. If not present, the delimiter is automatically determined by 4D.                                                                                                                                                                    |
|            | columnDelimiter | Texte  | Délimiteur de colonne. Par défaut : ","                                                                                                                                                                                                                  |

> For more information on the CSV format and delimiter-separated values in general, see [this article on Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values)


#### Exemple 1

You want to import a default 4D View Pro document stored on the disk when the form is open:

```4d
C_TEXT($docPath)
If(Form event code=On VP Ready) //4D View Pro area loaded and ready
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

#### Exemple 2

You want to import a password protected Microsoft Excel document into a 4D View Pro area:


```4d
$o:=New object
$o.password:="excel123"

VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfilefile.xlsx";$o)
```

#### Exemple 2

You want to import a `.txt` file that uses a comma (",") as delimiter:

![example-import-csv](assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

Here's the result: ![example-import-csv](assets/en/ViewPro/vp-import-document-csv-result.png)


#### Voir aussi

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP NEW DOCUMENT](#vp-new-document)


### VP IMPORT FROM OBJECT

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object} ) <!-- END REF -->  


<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| viewPro    | Object | -> | Objet 4D View Pro                       |

<!-- END REF -->  

#### Description

The `VP IMPORT FROM OBJECT` command <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->imports and displays the *viewPro* 4D View Pro object in the *vpAreaName* 4D View Pro area<!-- END REF -->. The imported object contents replaces any data already inserted in the area.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

In *viewPro*, pass a valid 4D View Pro object. This object can have been created using [VP Export to object](#vp-export-to-object) or manually. For more information on 4D View Pro objects, please refer to the [4D View Pro object](languageOverview.html#4d-view-pro-object) section.

An error is returned if the *viewPro* object is invalid.


#### Exemple

You want to import a spreadsheet that was previously saved in an object field:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### Voir aussi

[VP Export to object](#vp-export-to-object)


### VP INSERT COLUMNS

<!-- REF #_method_.VP INSERT COLUMNS.Syntax -->**VP INSERT COLUMNS** ( *rangeObj* : Object ) <!-- END REF -->  

<!-- REF #_method_.VP INSERT COLUMNS.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

<!-- END REF -->  

#### Description

The `VP INSERT COLUMNS` command <!-- REF #_method_.VP INSERT COLUMNS.Summary -->inserts columns into the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the starting column (the column which designates where the new column will be inserted) and the number of columns to insert. If the number of column to insert is omitted (not defined), a single column is inserted.

New columns are inserted on the left, directly before the starting column in the *rangeObj*.


#### Exemple

To insert three columns before the second column:

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

The results is:

![](assets/en/ViewPro/cmd_vpInsertColumns.PNG)

#### Voir aussi

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT ROWS](#vp-insert-rows)


### VP INSERT ROWS

<!-- REF #_method_.VP INSERT ROWS.Syntax -->**VP INSERT ROWS** ( *rangeObj* : Object ) <!-- END REF -->  

<!-- REF #_method_.VP INSERT ROWS.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

<!-- END REF -->  

#### Description

The `VP INSERT ROWS` command <!-- REF #_method_.VP INSERT ROWS.Summary -->inserts rows defined by the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the starting row (the row which designates where the new row will be inserted) and the number of rows to insert. If the number of rows to insert is omitted (not defined), a single row is inserted.

New rows are inserted directly before the first row in the *rangeObj*.


#### Exemple

To insert 3 rows before the first row:

```4d
VP INSERT ROWS(VP Row("ViewProArea";0;3))
```

The results is:

![](assets/en/ViewPro/cmd_vpInsertRows.PNG)

#### Voir aussi

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT COLUMNS](#vp-insert-columns)

## M

### VP MOVE CELLS

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19 R4  | Ajout         |
</details>

<!-- REF #_method_.VP MOVE CELLS.Syntax -->**VP MOVE CELLS** ( *originRange* : Object ; *targetRange* : Object ; *options* : Object )
<!-- END REF -->  

<!-- REF #_method_.VP MOVE CELLS.Params -->

| Paramètres  | Type   |    | Description                                          |
| ----------- | ------ | -- | ---------------------------------------------------- |
| originRange | Object | -> | Cell range to copy from                              |
| targetRange | Object | -> | Target range for the values, formatting and formulas |
| options     | Object | -> | Options supplémentaires                              |

<!-- END REF -->  

#### Description

The `VP MOVE CELLS` command <!-- REF #_method_.VP MOVE CELLS.Summary -->moves or copies the values, style and formulas from *originRange* to *targetRange*<!-- END REF -->.

*originRange* and *targetRange* can refer to different View Pro areas.

In *originRange*, pass a range object containing the values, style, and formula cells to copy or move. If *originRange* is a combined range, only the first one is used.

In *targetRange*, pass the range of cells where the cell values, style, and formulas will be copied or moved.

The *options* parameter has several properties:

| Propriété    | Type    | Description                                                                                                                                                                                            |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| copy         | Booléen | Determines if the values, formatting and formulas of the cells in *originRange* are removed after the command executes:<ul><li>*False* (default) to remove them</li><li>*True* to keep them</li> |
| pasteOptions | Longint | Specifies what is pasted. Valeurs possibles : <p><table><tr><th>Valeur</th><th>Description</th></tr><tr><td>`vk clipboard options all` (par défaut)</td><td>Pastes all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Pastes only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Pastes only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Pastes the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Pastes only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Pastes the values and formatting.</td></tr></table></p>                                                                                                                                |

Les options de collage définies dans les [options de workbook](#vp-set-workbook-options) sont prises en compte.
#### Exemple

To copy the contents, values, formatting and formulas from an origin range:

```4d
var $originRange; $targetRange; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$targetRange:=VP Cells("ViewProArea"; 4; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.pasteOptions:=vk clipboard options all

VP MOVE CELLS($originRange; $targetRange; $options)
```
#### Voir aussi

[VP Copy to object](#vp-copy-to-object)<br/>[VP PASTE FROM OBJECT](#vp-paste-from-object)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## N

### VP Name

<!-- REF #_method_.VP Name.Syntax -->**VP Name** ( *vpAreaName* : Text ; *rangeName* : Text { ; *scope* : Integer }  ) : Object <!-- END REF -->  

<!-- REF #_method_.VP Name.Params -->

| Paramètres | Type    |    | Description                               |
| ---------- | ------- | -- | ----------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro   |
| rangeName  | Text    | -> | Existing range name                       |
| scope      | Integer | -> | Range location (current sheet if omitted) |
| Résultat   | Object  | <- | Range object of name                      |

<!-- END REF -->  

#### Description

The `VP Name` command <!-- REF #_method_.VP Name.Summary -->returns a new range object referencing a named range<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

The *rangeName* parameter specifies an existing named cell range.

In the optional *scope* parameter, you can designate a specific spreadsheet where *rangeName* is defined. If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet or the entire workbook with the following constants:

*   `vk current sheet`
*   `vk workbook`


#### Exemple

You want to give a value to the "Total" named range.

```4d
// name the B5 cell as Total
VP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")
$name:=VP Name("ViewProArea";" Total")
VP SET NUM VALUE($name;285;"$#,###.00")
```

#### Voir aussi

[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP ALL](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Get names](#vp-get-names)<br/>[VP REMOVE NAME](#vp-remove-name)<br/>[VP Row](#vp-row)


### VP NEW DOCUMENT

<!-- REF #_method_.VP NEW DOCUMENT.Syntax -->**VP NEW DOCUMENT** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF #_method_.VP NEW DOCUMENT.Params -->

| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro |

<!-- END REF -->  

#### Description

The `VP NEW DOCUMENT` command <!-- REF #_method_.VP NEW DOCUMENT.Summary -->loads and display a new, default document in the 4D View Pro form area object *vpAreaName*<!-- END REF -->. The new empty document replaces any data already inserted in the area.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.


#### Exemple

You want to display an empty document in the "myVPArea" form object:

```4d
VP NEW DOCUMENT("myVPArea")
```

#### Voir aussi

[VP IMPORT DOCUMENT](#vp-import-document)

---

## O

### VP Object to font

<!-- REF #_method_.VP Object to font.Syntax -->**VP Object to font** ( *fontObj* : Object ) : Text <!-- END REF -->  

<!-- REF #_method_.VP Object to font.Params -->

| Paramètres | Type   |    | Description    |
| ---------- | ------ | -- | -------------- |
| fontObj    | Object | -> | Font object    |
| Résultat   | Text   | <- | Font shorthand |

<!-- END REF -->  

#### Description

The `VP Object to font` command <!-- REF #_method_.VP Object to font.Summary -->returns a font shorthand string from *fontObj*<!-- END REF -->.

In *fontObj*, pass an object containing the font properties. Les propriétés suivantes sont prises en charge :

| Propriété | Type  | Description                                                                                                                                                              | Possible values                                                                                                                                                                                                                                                                                                                                                   | Mandatory |
| --------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| family    | Texte | Specifies the font.                                                                                                                                                      | any standard or generic font family. Ex : Ex : Ex : "Arial", "Helvetica", "serif", "arial,sans-serif"                                                                                                                                                                                                                                                             | Oui       |
| size      | Texte | Defines the size of the font.<p><p>The line-height can be added to the font-size: font-size/line-height: Ex: "15pt/20pt" | a number with one of the following units: <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"</li><p><p>or one of the following:<li>`vk font size large`</li><li>`vk font size larger`</li><li>`vk font size x large`</li><li>`vk font size xx large`</li><li>`vk font size small`</li><li>`vk font size smaller`</li><li>`vk font size x small`</li><li>`vk font size xx small`</li> | Oui       |
| style     | Texte | The style of the font.                                                                                                                                                   | <li>`vk font style italic`</li><li>`vk font style oblique`</li>                                                                                                                                                                                                                                                                                                              | Non       |
| variant   | Texte | Specifies font in small capital letters.                                                                                                                                 | <li>`vk font variant small caps`</li>                                                                                                                                                                                                                                                                                                                                        | Non       |
| weight    | Texte | Defines the thickness of the font.                                                                                                                                       | <li>`vk font weight 100`</li><li>`vk font weight 200`</li><li>`vk font weight 300`</li><li>`vk font weight 400`</li><li>`vk font weight 500`</li><li>`vk font weight 600`</li><li>`vk font weight 700`</li><li>`vk font weight 800`</li><li>`vk font weight 900`</li><li>`vk font weight bold`</li><li>`vk font weight bolder`</li><li>`vk font weight lighter`</li>                                          | Non       |


This object can be created with the [VP Font to object](#vp-font-to-object) command.

The returned shorthand string can be assigned to the "font" property of a cell with the [VP SET CELL STYLE](#vp-set-cell-style), for example.


#### Exemple

```4d
$cellStyle:=VP Get cell style($range)

$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder

$cellStyle.font:=VP Object to font($font)
//$cellStyle.font contains "bolder oblique small-caps 16pt arial"
```

#### Voir aussi

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)


## P

### VP PASTE FROM OBJECT

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19 R4  | Ajout         |
</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->**VP PASTE FROM OBJECT** ( *rangeObj* : Object ; *dataObject* : Object {; *options* : Longint} )
<!-- END REF -->  

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| rangeObj   | Object  | -> | Cell range object                       |
| dataObject | Object  | -> | Object containing the data to be pasted |
| options    | Longint | -> | Specifies what is pasted                |

<!-- END REF -->  

#### Description

The `VP PASTE FROM OBJECT` command <!-- REF #_method_.PASTE FROM OBJECT.Summary -->pastes the contents, style and formulas stored in *dataObject* to the *rangeObj* object<!-- END REF -->.

In *rangeObj*, pass the cell range object where the values, formatting, and/or formula cells will be pasted. If *rangeObj* refers to more than one cell, only the first one is used.

In *dataObject*, pass the object that contains the cell data, formatting, and formulas to be pasted.

In the optional *options* parameter, you can specify what to paste in the cell range. Valeurs possibles :

| Constante                                      | Description                                                          |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| `vk clipboard options all`                     | Pastes all data objects, including values, formatting, and formulas. |
| `vk clipboard options formatting`              | Pastes only the formatting.                                          |
| `vk clipboard options formulas`                | Pastes only the formulas.                                            |
| `vk clipboard options formulas and formatting` | Pastes formulas and formatting.                                      |
| `vk clipboard options values`                  | Pastes only values.                                                  |
| `vk clipboard options value and formatting`    | Pastes values and formatting.                                        |

Les options de collage définies dans les [options de workbook](#vp-set-workbook-options) sont prises en compte.

If *options* refers to a paste option not present in the copied object (e.g. formulas), the command does nothing.

#### Exemple

See example the example from [VP Copy to object](#vp-copy-to-object)

#### Voir aussi

[VP Copy to object](#vp-copy-to-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

### VP PRINT

<!-- REF #_method_.VP PRINT.Syntax -->**VP PRINT** ( *vpAreaName* : Text  { ; *sheet* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP PRINT.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |

<!-- END REF -->  

#### Description

The `VP PRINT` command <!-- REF #_method_.VP PRINT.Summary -->opens a print dialog window to print *vpAreaName*<!-- END REF -->.

Pass the 4D View Pro area to be printed in *vpAreaName*. The command will open the system print dialog window where the printer can be specified and the page properties can be defined.
> The properties defined in the print dialog window are for the printer paper, they are not the printing properties for the 4D View Pro area. Printing properties for 4D View Pro areas are defined using the [VP SET PRINT INFO](#vp-set-print-info) command. It is highly recommended that the properties for both the printer and the 4D View Pro area match, otherwise the printed document may not correspond to your expectations.

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). If omitted, the current sheet is used by default. You can explicitly select the current spreadsheet or entire workbook with the following constants:

*   `vk current sheet`
*   `vk workbook`


> * 4D View Pro areas can only be printed with the `VP PRINT` command. 
> * Commands from the 4D **Printing** language theme are not supported by `VP PRINT`.
> * This command is intended for individual printing by the final end user. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the [VP EXPORT DOCUMENT](#vp-export-document) method.


#### Exemple

Le code suivant :

```4d
 VP PRINT("myVPArea")
```

... will open a print dialog window:

![](assets/en/ViewPro/cmd_vpPrint.PNG)

#### Voir aussi

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP SET PRINT INFO](#vp-set-print-info)

## R

### VP RECOMPUTE FORMULAS

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->

| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro |


<!-- END REF -->  

#### Description

The `VP RECOMPUTE FORMULAS` command <!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->immediately evaluates all formulas in *vpAreaName*<!-- END REF -->. By default, 4D automatically computes formulas when they are inserted, imported, or exported. `VP RECOMPUTE FORMULAS` allows you to force the compute at any time (e.g, in case modifications are made to the formulas or if the formulas contain calls to the database). The command launches the execution of the [VP FLUSH COMMANDS](#vp-flush-commands) command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.
> Be sure the [VP SUSPEND COMPUTING](#vp-suspend-computing) command has not been executed before using `VP RECOMPUTE FORMULAS`, otherwise the command does nothing.


#### Exemple

To refresh all formulas in the workbook:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

#### Voir aussi

[VP RESUME COMPUTING](#vp-resume-computing)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)


### VP REMOVE NAME

<!-- REF #_method_.VP REMOVE NAME.Syntax -->**VP REMOVE NAME** ( *vpAreaName* : Text  ; *name*  : Text { ; *scope* : Integer } ) 
<!-- END REF -->  

<!-- REF #_method_.VP REMOVE NAME.Params -->

| Paramètres | Type    |    | Description                                        |
| ---------- | ------- | -- | -------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro            |
| name       | Text    | -> | Name of the named range or named formula to remove |
| scope      | Integer | -> | "Scope" cible (par défaut=feuille courante)        |

<!-- END REF -->  

#### Description

The `VP REMOVE NAME` command <!-- REF #_method_.VP REMOVE NAME.Summary -->removes the named range or named formula passed in the *name* parameter in the defined *scope*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Pass the named range or named formula that you want to remove in *name*.

You can define where to remove the name in *scope* using either the sheet index (counting begins at 0) or the following constants:

*   `vk current sheet`
*   `vk workbook`


#### Exemple


```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
//$formula=null
```

#### Voir aussi

[VP Name](#vp-name)


### VP REMOVE SHEET

<!-- REF #_method_.VP REMOVE SHEET.Syntax -->**VP REMOVE SHEET** ( *vpAreaName* : Text ; *index*: Integer ) <!-- END REF -->  

<!-- REF #_method_.VP REMOVE SHEET.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| index      | Integer | -> | Index of the sheet to remove            |
<!-- END REF -->

#### Voir aussi

[VP ADD SHEET](#vp-add-sheet)


#### Description

The `VP REMOVE SHEET` command <!-- REF #_method_.VP REMOVE SHEET.Summary -->removes the sheet with the specified *index* from the document loaded in *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *index*, pass the index of the sheet to remove. If the passed *index* does not exist, the command does nothing.
> La numérotation démarre à 0.

#### Exemple

The document currently has three sheets:

![](assets/en/ViewPro/vp-sheet-3.png)

Remove the third sheet:

```4d 
VP REMOVE SHEET("ViewProArea";2)
```

![](assets/en/ViewPro/vp-sheet-2.png)

### VP REMOVE SPAN

<!-- REF #_method_.VP REMOVE SPAN.Syntax -->**VP REMOVE SPAN** ( *rangeObj* : Object ) <!-- END REF -->  

<!-- REF #_method_.VP REMOVE SPAN.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

<!-- END REF -->  
#### Description

The `VP REMOVE SPAN` command <!-- REF #_method_.VP REMOVE SPAN.Summary -->removes the span from the cells in *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range object of the cell span. The spanned cells in the range are divided into individual cells.

#### Exemple

To remove all cell spans from this document:

![](assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 //find all cell spans
 $span:=VP Get spans(VP All("ViewProArea"))


  //remove the cell spans
 VP REMOVE SPAN($span)
```

Résultat :

![](assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

#### Voir aussi

[VP ADD SPAN](#vp-add-span)<br/>[VP Get spans](#vp-get-spans)

### VP REMOVE STYLESHEET

<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->**VP REMOVE STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text { ; *scope* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP REMOVE STYLESHEET.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| styleName  | Text    | -> | Name of style to remove                 |
| scope      | Integer | -> | Cible (par défaut = feuille courante)   |

<!-- END REF -->  

#### Description

The `VP REMOVE STYLESHEET` command <!-- REF #_method_.VP REMOVE STYLESHEET.Summary -->removes the style sheet passed in the *styleName* from the *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Pass the style sheet to remove in the *styleName* parameter.

You can define where to remove the style in the optional *scope* parameter using the sheet index (counting begins at 0) or with the following constants:

*   `vk current sheet`
*   `vk workbook`

#### Exemple

To remove the *GreenDashDotStyle* style object from the current sheet:

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```
#### Voir aussi

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP Get stylesheets](#vp-get-stylesheets)


### VP RESET SELECTION

<!-- REF #_method_.VP RESET SELECTION.Syntax -->**VP RESET SELECTION** ( *vpAreaName* : Text { ; *sheet* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP RESET SELECTION.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |

<!-- END REF -->  

#### Description

The `VP RESET SELECTION` command <!-- REF #_method_.VP RESET SELECTION.Summary -->deselects all cells, resulting in no current selection or visible active cell<!-- END REF -->.

> A default active cell (cell A1) remains defined for 4D View Pro commands.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`


#### Exemple

You want to deselect all cells (the active cell and any selected cells):

```4d
VP RESET SELECTION("myVPArea")
```

#### Voir aussi

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP RESUME COMPUTING

<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->**VP RESUME COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF #_method_.VP RESUME COMPUTING.Params -->

| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro |

<!-- END REF -->  

#### Description

The `VP RESUME COMPUTING` command <!-- REF #_method_.VP RESUME COMPUTING.Summary --> restarts the calculation of formulas in *vpAreaName*<!-- END REF -->.

The command reactivates the calculation service in 4D View Pro. Any formulas impacted by changes made while calculations were suspended are updated, and formulas added after `VP RESUME COMPUTING` is executed are calculated.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

> The 4D View Pro calculation service maintains a counter of suspend/resume actions. Therefore, each execution of `VP RESUME COMPUTING` must be balanced by a corresponding execution of the [VP SUSPEND COMPUTING](#vp-suspend-computing) command.


#### Exemple

See example in [VP SUSPEND COMPUTING](#vp-suspend-computing).

#### Voir aussi

[VP RECOMPUTE FORMULAS](#vp-recompute-formulas)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)

### VP Row

<!-- REF #_method_.VP Row.Syntax -->**VP Row** ( *vpAreaName* : Text; *row* : Integer { ; *rowCount* : Integer { ; *sheet* : Integer } } ) : Object <!-- END REF -->  

<!-- REF #_method_.VP Row.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| row        | Integer | -> | Indice de la ligne                              |
| rowCount   | Integer | -> | Nombre de lignes                                |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |
| Résultat   | Object  | <- | Range object of row(s)                          |

<!-- END REF -->  

#### Description

The `VP Row` command <!-- REF #_method_.VP Row.Summary -->returns a new range object referencing a specific row or rows<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

The *row* parameter defines the first row of the row range. Passez l'indice de la ligne (la numérotation commence à zéro) dans ce paramètre. Pass the row index (counting begins at 0) in this parameter.

The optional *rowCount* parameter allows you to define the total number of rows of the range. *rowCount* doit être supérieur à 0. If omitted, the value will be set to 1 by default.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). If not specified, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`


#### Exemple

You want to define a range object for the row shown below (on the current spreadsheet):

![](assets/en/ViewPro/cmd_vpRow.PNG)

Vous pouvez écrire :

```4d
$row:=VP Row("ViewProArea";9) // row 10
```

#### Voir aussi

[VP All](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)

### VP ROW AUTOFIT#### See also

[VP All](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)

<!-- REF #_method_.VP ROW AUTOFIT.Syntax -->**VP ROW AUTOFIT** ( *rangeObj* : Object) <!-- END REF -->  

<!-- REF #_method_.VP ROW AUTOFIT.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

<!-- END REF -->  

#### Description

The `VP ROW AUTOFIT` command <!-- REF #_method_.VP ROW AUTOFIT.Summary -->automatically sizes the row(s) in *rangeObj* according to their contents<!-- END REF -->.


In *rangeObj*, pass a range object containing a range of the rows whose size will be automatically handled.


#### Exemple

The following rows don't correctly display the text:

![](assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)


```4d
 VP ROW AUTOFIT(VP Row("ViewProArea";1;2))
```

Résultat :

![](assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)

#### Voir aussi

[VP Column autofit](#vp-column-autofit)

### VP Run offscreen area

<!-- REF #_method_.VP Run offscreen area.Syntax -->**VP Run offscreen area** ( *parameters* : Object) : Mixed<!-- END REF -->  

<!-- REF #_method_.VP Run offscreen area.Params -->

| Paramètres | Type   |    | Description                                                                     |
| ---------- | ------ | -- | ------------------------------------------------------------------------------- |
| parameters | Object | -> | Object containing the offscreen area's attributes                               |
| Résultat   | Mixed  | <- | `.result` property of the `.onEvent` object, or Null if does not return a value |

<!-- END REF -->  

#### Description

The `VP Run offscreen area` command <!-- REF #_method_.VP Run offscreen area.Summary -->creates an offscreen area in memory which can be used to process 4D View Pro area commands and functions<!-- END REF -->.

In *parameters* object, pass any of the following optional properties. These properties will be available through the `This` command within the `onEvent` method and reference the instance:

| Propriété          | Type             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| area               | Texte            | The name of the offscreen area. If omitted or null, a generic name is assigned (e.g., "OffscreenArea1").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| onEvent            | object (formula) | A callback method that will be launched when the offscreen area is ready. It can be either:<p><p><li>an `onEvent` function of a class, or</li><li>a `Formula` object</li><p><p>By default, the callback method is called on the [`On VP Ready`](Events/onVpReady.md), [`On Load`](Events/onLoad.md), [`On Unload`](Events/onUnload.md), [`On End URL Loading`](Events/onEndUrlLoading.md), [`On URL Loading Error`](Events/onUrlLoadingError.md), [`On VP Range Changed`](Events/onVpRangeChanged.md), or [`On Timer`](Events/onTimer.md) events. <p><p>The callback method can be used to access the [4D View Pro form object variable](configuring.md#4d-view-pro-form-object-variable). |
| autoQuit           | boolean          | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](Events/onEndUrlLoading.md) or [`On URL Loading Error`](Events/onUrlLoadingError.md) events occur.<p><p>If false, you must use the `CANCEL` or `ACCEPT` commands in the *onEvent* callback method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| timeout            | number           | Maximum time (expressed in seconds) before the area automatically closes if no event is generated. If set to 0, no limitation is applied. Default value: 60                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| result             | mixte            | Result of the processing (if any)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| \<customProperty> | mixte            | Any custom attribute to be available in the *onEvent* callback method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |


The following property is automatically added by the command if necessary:

| Propriété      | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| timeoutReached | boolean | Added with true value if timeout has been exceeded |


> The offscreen area is only available during the execution of the `VP Run offscreen area` command. It will automatically be destroyed once execution has ended.


The following commands can be used in the callback method:

*   `ACCEPT`
*   `CANCEL`
*   `SET TIMER`
*   `WA Evaluate JavaScript`
*   `WA EXECUTE JAVASCRIPT FUNCTION`


#### Exemple 1

You want to create an offscreen 4D View Pro area and get the value of a cell:


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

The *OffscreenArea* callback method:


```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

#### Exemple 2

You want to load a large document offscreen, wait for all calculations to complete evaluating, and export it as a PDF:


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

The *OffscreenArea* callback method:

```4d
$o:=cs.OffscreenArea.new()

$result:=VP Run offscreen area($o)
```

## Voir aussi

[Blog post: End of document loading](https://blog.4d.com/4d-view-pro-end-of-document-loading/)

## S

### VP SET ACTIVE CELL

<!-- REF #_method_.VP SET ACTIVE CELL.Syntax -->**VP SET ACTIVE CELL** ( *rangeObj* : Object) <!-- END REF -->  

<!-- REF #_method_.VP SET ACTIVE CELL.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |

<!-- END REF -->  

#### Description

The `VP SET ACTIVE CELL` command <!-- REF #_method_.VP SET ACTIVE CELL.Summary -->defines a specified cell as active<!-- END REF -->.

In *rangeObj*, pass a range containing a single cell as an object (see [VP Cell](#vp-cell)). If *rangeObj* is not a cell range or contains multiple ranges, the first cell of the first range is used.


#### Exemple

To set the cell in column D, row 5 as the active cell:

```4d
$activeCell:=VP Cell("myVPArea";3;4)
VP SET ACTIVE CELL($activeCell)
```

![](assets/en/ViewPro/cmd_vpSetActiveCell.PNG)

## Voir aussi

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP SET ALLOWED METHODS

<!-- REF #_method_.VP SET ALLOWED METHODS.Syntax -->**VP SET ALLOWED METHODS** ( *methodObj* : Object) <!-- END REF -->  

<!-- REF #_method_.VP SET ALLOWED METHODS.Params -->

| Paramètres | Type   |    | Description                              |
| ---------- | ------ | -- | ---------------------------------------- |
| methodObj  | Object | -> | Allowed methods in the 4D View Pro areas |

<!-- END REF -->  


> **Compatibilité**
> 
> For greater flexiblity, it is recommended to use the [`VP SET CUSTOM FUNCTIONS`](#vp-set-custom-functions) command which allows you to designate 4D formulas that can be called from 4D View Pro areas. As soon as `VP SET CUSTOM FUNCTIONS` is called, `VP SET ALLOWED METHODS` calls are ignored. 4D View Pro also supports 4D's generic `SET ALLOWED METHODS` command if neither `VP SET CUSTOM FUNCTIONS` nor `VP SET ALLOWED METHODS` are called, however using the generic command is not recommended.

#### Description

The `VP SET ALLOWED METHODS` command <!-- REF #_method_.VP SET ALLOWED METHODS.Summary -->designates the project methods that can be called in 4D View Pro formulas<!-- END REF -->. This command applies to all 4D View Pro areas initialized after its call during the session. It can be called multiple times in the same session to initialize different configurations.

By default for security reasons, if you do not execute the `VP SET ALLOWED METHODS` command, no method call is allowed in 4D View Pro areas -- except if 4D's generic `SET ALLOWED METHODS` command was used (see compatibility note). Using an unauthorized method in a formula prints a #NAME? error in the 4D View Pro area.


In the *methodObj* parameter, pass an object in which each property is the name of a function to define in the 4D View Pro areas:

| Propriété              |            |            | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------- | ---------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<functionName>` |            |            | Object              | Custom function definition. The `<functionName>` property name defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)                                                                                                                                                                                                                                                                                                                                                                |
|                        | method     |            | Text                | (mandatory) Name of the existing 4D project method to allow                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                        | parameters |            | Collection d'objets | Collection of parameters (in the order they are defined in the method).                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                        |            | \[ ].name | Text                | Name of a parameter to display for the `<functionName>`.<p><p>**Note**: Parameter names must not contain space characters.                                                                                                                                                                                                                                                                                                                                                   |
|                        |            | \[ ].type | Nombre              | Type of the parameter. Supported types:<li>`Is Boolean`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>If omitted, by default the value is automatically sent with its type, except date or time values which are sent as an object (see [Parameters](formulas.md#parameters) section). If type is `Is object`, the object has the same structure as the object returned by [`VP Get value`](#vp-get-value). |
|                        | summary    |            | Text                | Function description to display in 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                        | minParams  |            | Nombre              | Minimum number of parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                        | maxParams  |            | Nombre              | Maximum number of parameters. Passing a number higher than the length of parameters allows declaring "optional" parameters with default type                                                                                                                                                                                                                                                                                                                                                                                       |



#### Exemple

You want to allow two methods in your 4D View Pro areas:


```4d
C_OBJECT($allowed)
$allowed:=New object //parameter for the command

$allowed.Hello:=New object //create a first simple function named "Hello"
$allowed.Hello.method:="My_Hello_Method" //sets the 4D method
$allowed.Hello.summary:="Hello prints hello world"

$allowed.Byebye:=New object //create a second function with parameters named "Byebye"
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

After this code is executed, the defined functions can be used in 4D View Pro formulas:

![](assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)


> In 4D View Pro formulas, function names are automatically displayed in uppercase.

## Voir aussi

[4D functions](formulas.md#4d-functions)<br/>[VP SET CUSTOM FUNCTIONS](#vp-set-custom-functions)

### VP SET BOOLEAN VALUE

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->**VP SET BOOLEAN VALUE** ( *rangeObj* : Object  ; *boolValue* : Boolean) <!-- END REF -->  

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

| Paramètres | Type    |    | Description          |
| ---------- | ------- | -- | -------------------- |
| rangeObj   | Object  | -> | Objet plage          |
| boolValue  | Booléen | -> | Boolean value to set |

<!-- END REF -->  

#### Description

The `VP SET BOOLEAN VALUE` command <!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->assigns a specified boolean value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *boolValue* parameter allows you to pass the boolean value (**True** or **False**) that will be assigned to the *rangeObj*.


#### Exemple

```4d
//Set the cell value as False
VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```
## Voir aussi

[VP SET VALUE](#vp-set-value)


### VP SET BORDER

<!-- REF #_method_.VP SET BORDER.Syntax -->**VP SET BORDER** ( *rangeObj* : Object ; *borderStyleObj* : Object  ; *borderPosObj* : Object ) <!-- END REF -->  

<!-- REF #_method_.VP SET BORDER.Params -->

| Paramètres     | Type   |    | Description                         |
| -------------- | ------ | -- | ----------------------------------- |
| rangeObj       | Object | -> | Objet plage                         |
| borderStyleObj | Object | -> | Object containing border line style |
| borderPosObj   | Object | -> | Object containing border placement  |

<!-- END REF -->  

#### Description

The `VP SET BORDER` command <!-- REF #_method_.VP SET BORDER.Summary -->applies the border style(s) defined in *borderStyleObj* and *borderPosObj* to the range defined in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cells where the border style will be applied. If the *rangeObj* contains multiple cells, borders applied with `VP SET BORDER` will be applied to the *rangeObj* as a whole (as opposed to the [`VP SET CELL STYLE`](#vp-set-cell-style) command which applies borders to each cell of the *rangeObj*). If a style sheet has already been applied, `VP SET BORDER` will override the previously applied border settings for the *rangeObj*.

The *borderStyleObj* parameter allows you to define the style for the lines of the border. The *borderStyleObj* supports the following properties:

| Propriété | Type    | Description                                       | Possible values                                                                                                                                                                                                                                                                                                                                                              |
| --------- | ------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color     | Texte   | Defines the color of the border. Default = black. | CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)                                                                                                                                                                                                                                           |
| style     | Integer | Defines the style of the border. Default = empty. | <li>`vk line style dash dot`</li><li>`vk line style dash dot dot`</li><li>`vk line style dashed`</li> <li>`vk line style dotted`</li><li>`vk line style double`</li><li>`vk line style empty`</li><li>`vk line style hair`</li> <li>`vk line style medium`</li><li>`vk line style medium dash dot`</li><li>`vk line style medium dash dot dot`</li><li>`vk line style medium dashed`</li><li>`vk line style slanted dash dot`</li><li>`vk line style thick`</li><li>`vk line style thin`</li> |


You can define the position of the *borderStyleObj* (i.e., where the line is applied) with the *borderPosObj*:



| Propriété       | Type    | Description                                                 |
| --------------- | ------- | ----------------------------------------------------------- |
| all             | boolean | Border line style applied to all borders.                   |
| left            | boolean | Border line style applied to left border.                   |
| top             | boolean | Border line style applied to top border.                    |
| right           | boolean | Border line style applied to right border.                  |
| bottom          | boolean | Border line style applied to bottom border.                 |
| outline         | boolean | Border line style applied to outer borders only.            |
| inside          | boolean | Border line style applied to inner borders only.            |
| innerHorizontal | boolean | Border line style applied to inner horizontal borders only. |
| innerVertical   | boolean | Border line style applied to inner vertical borders only.   |


#### Exemple 1

This code produces a border around the entire range:

```4d
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
```


![](assets/en/ViewPro/cmd_vpSETBORDER1.PNG)

#### Exemple 2

This code demonstrates the difference between `VP SET BORDER` and setting borders with the [`VP SET CELL STYLE`](#vp-set-cell-style) command:

```4d
// Set borders using VP SET BORDER
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)

// // Set borders using VP SET CELL STYLE
$cellStyle:=New object
$cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)
$cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)
VP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)
```


![](assets/en/ViewPro/cmd_vpSETBORDER2.PNG)

## Voir aussi

[VP SET CELL STYLE](#vp-set-cell-style)

### VP SET CELL STYLE

<!-- REF #_method_.VP SET CELL STYLE.Syntax -->**VP SET CELL STYLE** ( *rangeObj* : Object  ; *styleObj*  : Object) <!-- END REF -->  

<!-- REF #_method_.VP SET CELL STYLE.Params -->

| Paramètres | Type   |    | Description |
| ---------- | ------ | -- | ----------- |
| rangeObj   | Object | -> | Objet plage |
| styleObj   | Object | -> | Objet style |

<!-- END REF -->  

#### Description

The `VP SET CELL STYLE` command <!-- REF #_method_.VP SET CELL STYLE.Summary -->applies the style(s) defined in the *styleObj* to the cells defined in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cells where the style will be applied. If the *rangeObj* contains multiple cells, the style is applied to each cell.
> Borders applied with `VP SET CELL STYLE` will be applied to each cell of the *rangeObj*, as opposed to the [VP SET BORDER](#vp-set-border) command which applies borders to the *rangeObj* as a whole.

The *styleObj* parameter lets you pass an object containing style settings. You can use an existing style sheet or create a new style. If the *styleObj* contains both an existing style sheet and additional style settings, the existing style sheet is applied first, followed by the additional settings. Giving the *styleObj* parameter a NULL value will remove any style settings from the *rangeObj* and revert to the default style settings (if any).

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

VP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)
```


![](assets/en/ViewPro/cmd_vpSetCellStyle.PNG)
#### Voir aussi

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP Get cell style](#vp-get-cell-style)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET BORDER](#vp-set-border)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)



### VP SET COLUMN ATTRIBUTES

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Syntax -->**VP SET COLUMN ATTRIBUTES** ( *rangeObj* : Object  ; *propertyObj* : Object) <!-- END REF -->  

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Params -->

| Paramètres  | Type   |    | Description                         |
| ----------- | ------ | -- | ----------------------------------- |
| rangeObj    | Object | -> | Objet plage                         |
| propertyObj | Object | -> | Object containing column properties |

<!-- END REF -->  

#### Description

The `VP SET COLUMN ATTRIBUTES` command <!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Summary --> applies the attributes defined in the *propertyObj* to the columns in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range. If the range contains both columns and rows, attributes are applied only to the columns.

The *propertyObj* parameter lets you specify the attributes to apply to the columns in the *rangeObj*. These attributes are:

| Propriété | Type    | Description                                                                  |
| --------- | ------- | ---------------------------------------------------------------------------- |
| width     | number  | Column width expressed in pixels                                             |
| pageBreak | boolean | True to insert a page break before the first column of the range, else false |
| visible   | boolean | True if the column is visible, else false                                    |
| resizable | boolean | True if the column can be resized, else false                                |
| header    | Texte   | Column header text                                                           |


#### Exemple

To change the size of the second column and set the header, you write:

```4d
C_OBJECT($column;$properties)

$column:=VP Column("ViewProArea";1) //column B
$properties:=New object("width";100;"header";"Hello World")

VP SET COLUMN ATTRIBUTES($column;$properties)
```


![](assets/en/ViewPro/cmd_vpSetColumnAttributes.PNG)

#### Voir aussi

[VP Column](#vp-column)<br/>[VP Get column attributes](#vp-get-column-attributes)<br/>[VP Get row attributes](#vp-get-row-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP SET COLUMN COUNT

<!-- REF #_method_.VP SET COLUMN COUNT.Syntax -->**VP SET COLUMN COUNT** ( *vpAreaName* : Text , *columnCount* : Integer { , *sheet* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP SET COLUMN COUNT.Params -->

| Paramètres  | Type    |    | Description                                     |
| ----------- | ------- | -- | ----------------------------------------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| columnCount | Integer | -> | Nombre de colonnes                              |
| sheet       | Integer | -> | Indice de la feuille (feuille courante si omis) |

<!-- END REF -->  

#### Description

The `VP SET COLUMN COUNT` command <!-- REF #_method_.VP SET COLUMN COUNT.Summary -->defines the total number of columns in *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Pass the total number of columns in the *columnCount* parameter. *columnCount* doit être supérieur à 0.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the *columnCount* will be applied (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`

#### Exemple

The following code defines five columns in the 4D View Pro area:

```4d
VP SET COLUMN COUNT("ViewProArea";5)
```

![](assets/en/ViewPro/cmd_vpSetColumnCount.PNG)

#### Voir aussi

[VP Get column count](#vp-get-column-count)<br/>[VP Get row count](#vp-get-row-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP SET CURRENT SHEET

<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->**VP SET CURRENT SHEET** ( *vpAreaName* : Text ; *index* : Integer)
<!-- END REF --> 

<!-- REF #_method_.VP SET CURRENT SHEET.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| index      | Integer | <- | Index of the new current sheet          |
<!-- END REF --> 

#### Description

The `VP SET CURRENT SHEET` command <!-- REF #_method_.VP SET CURRENT SHEET.Summary -->sets the current sheet in *vpAreaName*<!-- END REF --> . La feuille courante est la feuille sélectionnée dans le document.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *index*, pass the index of the sheet to be set as current sheet. If the index passed is inferior to 0 or exceeds the number of sheets, the command does nothing.

> La numérotation démarre à 0.

#### Exemple

The document's current sheet is the first sheet:

![first-sheet-selected](assets/en/ViewPro/vp-sheet-3-select.png)

Set the current sheet to the third sheet:

```4d
VP SET CURRENT SHEET("ViewProArea";2)
```

![](assets/en/ViewPro/vp-sheet-3-select.png)

#### Voir aussi

[VP Get current sheet](#vp-get-current-sheet)
### VP SET CUSTOM FUNCTIONS

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  ) <!-- END REF -->  

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

| Paramètres | Type   |    | Description                             |
| ---------- | ------ | -- | --------------------------------------- |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro |
| formulaObj | Object | -> | Objet formule                           |

<!-- END REF -->  

#### Description

The `VP SET CUSTOM FUNCTIONS` command <!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->designates the 4D formulas that can be called directly from 4D View Pro formulas<!-- END REF -->. Because custom functions are not stored in the document,`VP SET CUSTOM FUNCTIONS` must be executed in the `On Load` form event.

The formulas specified by `VP SET CUSTOM FUNCTIONS` appear in a pop-up menu when the first letter of their name is entered. See the [Formulas and Functions](formulas.md) page.

> If `VP SET CUSTOM FUNCTIONS` is called multiple times for the same area, in the same session, only the last call is taken into account.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

In the *formulaObj* parameter, pass an object containing the 4D formulas that can be called from 4D View Pro formulas as well as additional properties. Each `customFunction` property passed in *formulaObj* becomes the name of a function in the 4D View Pro area.

| Propriété                |            |            | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ---------- | ---------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |            | Object              | Custom function definition. `<customFunction>` defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                          | formula    |            | Object              | 4D formula object (mandatory). See the `Formula` command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                          | parameters |            | Collection d'objets | Collection of parameters (in the order they are defined in the formula)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                          |            | \[ ].name | Text                | Name of parameter to display in 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                          |            | \[ ].type | Nombre              | Type of the parameter. Supported types:<li>`Is Boolean`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>If *type* is omitted or if the default value (-1) is passed, the value is automatically sent with its type, except date or time values which are sent as an object (see [Parameters](formulas.md#parameters) section).<p><p>If *type* is `Is object`, the object has the same structure as the object returned by [VP Get value](#vp-get-value). |
|                          | summary    |            | Text                | Formula description to display in 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                          | minParams  |            | Nombre              | Minimum number of parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                          | maxParams  |            | Nombre              | Maximum number of parameters. Passing a number higher than the length of *parameters* allows declaring "optional" parameters with default type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
> **WARNING**
> 
> * As soon as `VP SET CUSTOM FUNCTIONS` is called, the methods allowed by the [VP SET ALLOWED METHODS](#vp-set-allowed-methods) command (if any) are ignored in the 4D View Pro area.
> * Dès que `VP SET CUSTOM FUNCTIONS` est appelé, les fonctions basées sur les commandes `SET TABLE TITLES` et `SET FIELD TITLES` sont ignorées dans la zone 4D View Pro.

#### Exemple

You want to use formula objects in a 4D View Pro area to add numbers, retrieve a customer's last name and gender:

```4d
Case of
    :(FORM Event.code=On Load)

       var $o : Object
       $o:=New object

// Define "addnum" function from a method named "addnum"
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))

// Define "ClientLastName" function from a database field
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Lastname of the current client"

// Define "label" function from a 4D expression with one parameter
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))

// Define "Title" function from a variable named "Title"
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)

       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)

End case
```

#### Voir aussi

[VP SET ALLOWED METHODS](#vp-set-allowed-methods)

### VP SET DATE TIME VALUE

<!-- REF #_method_.VP SET DATE TIME VALUE.Syntax -->**VP SET DATE TIME VALUE** ( *rangeObj* : Object ; *dateValue* : Date ; *timeValue* : Time {; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF #_method_.VP SET DATE TIME VALUE.Params -->

| Paramètres    | Type   |    | Description       |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | Object | -> | Objet plage       |
| dateValue     | Date   | -> | Date value to set |
| timeValue     | Heure  | -> | Time value to set |
| formatPattern | Text   | -> | Format of value   |

<!-- END REF -->  

#### Description

The `VP SET DATE TIME VALUE` command <!-- REF #_method_.VP SET DATE TIME VALUE.Summary -->assigns a specified date and time value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *dateValue* parameter specifies a date value to be assigned to the *rangeObj*.

The *timeValue* parameter specifies a time value (expressed in seconds) to be assigned to the *rangeObj*.

The optional *formatPattern* defines a pattern for the *dateValue* and *timeValue* parameters. For information on patterns and formatting characters, please refer to the [Date and time formats](configuring.md#date-and-time-formats) section.

#### Exemple


```4d
//Set the cell value as the current date and time
VP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)

//Set the cell value as the 18th of December
VP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)
```

#### Voir aussi

[4D View Pro cell format](configuring.md#cell-format)<br/>[VP SET DATE VALUE](#vp-set-date-value)<br/>[VP SET TIME VALUE](#vp-set-time-value)<br/>[VP SET VALUE](#vp-set-value)


### VP SET DATE VALUE

<!-- REF #_method_.VP SET DATE VALUE.Syntax -->**VP SET DATE VALUE** ( *rangeObj* : Object ; *dateValue* : Date { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF #_method_.VP SET DATE VALUE.Params -->

| Paramètres    | Type   |    | Description       |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | Object | -> | Objet plage       |
| dateValue     | Date   | -> | Date value to set |
| formatPattern | Text   | -> | Format of value   |

<!-- END REF -->  

#### Description

The `VP SET DATE VALUE` command <!-- REF #_method_.VP SET DATE VALUE.Summary -->assigns a specified date value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *dateValue* parameter specifies a date value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a pattern for the *dateValue* parameter. Pass any custom format or you can use one of the following constants:

| Constante               | Description                              | Default US pattern   |
| ----------------------- | ---------------------------------------- | -------------------- |
| `vk pattern long date`  | ISO 8601 format for the full date        | "dddd, dd MMMM yyyy" |
| `vk pattern month day`  | ISO 8601 format for the month and day    | "MMMM dd"            |
| `vk pattern short date` | Abbreviated ISO 8601 format for the date | "MM/dd/yyyy"         |
| `vk pattern year month` | ISO 8601 format for the month and year   | "yyyy MMMM"          |

For information on patterns and formatting characters, please refer to the [Date and time formats](configuring.md#date-and-time-formats) section.


#### Exemple


```4d
//Set the cell value to the current date
VP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))

//Set the cell value to a specific date with a designated format
VP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")
VP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)
```

#### Voir aussi

[4D View Pro cell format](configuring.md#cell-format)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET VALUE](#vp-set-value)

### VP SET DEFAULT STYLE

<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->**VP SET DEFAULT STYLE** ( *vpAreaName* : Text ; *styleObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP SET DEFAULT STYLE.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| styleObj   | Object  | -> | Objet style                             |
| sheet      | Integer | -> | Sheet index (default = current sheet)   |

<!-- END REF -->  

#### Description

The `VP SET DEFAULT STYLE` command <!-- REF #_method_.VP SET DEFAULT STYLE.Summary -->defines the style in the *styleObj* as the default style for a *sheet*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

The *styleObj* lets you pass an object containing style settings. You can use an existing style sheet or you can create a new style. For more information, see the [Style objects](configuring.md#style-objects) paragraph.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the style will be defined. If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`

#### Exemple

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" //light purple color

VP SET DEFAULT STYLE("myDoc";$style)
```


![](assets/en/ViewPro/cmd_vpSetDefaultStyle.PNG)

#### Voir aussi

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP Get default style](#vp-get-default-style)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET BORDER](#vp-set-border)<br/>[VP SET CELL STYLE](#vp-set-cell-style)

### VP SET FIELD

<!-- REF #_method_.VP SET FIELD.Syntax -->**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF #_method_.VP SET FIELD.Params -->

| Paramètres    | Type     |    | Description                             |
| ------------- | -------- | -- | --------------------------------------- |
| rangeObj      | Object   | -> | Objet plage                             |
| field         | Pointeur | -> | Reference to field in virtual structure |
| formatPattern | Text     | -> | Format of field                         |

<!-- END REF -->  

#### Description

The `VP SET FIELD` command <!-- REF #_method_.VP SET FIELD.Summary -->assigns a 4D database virtual field to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) whose value you want to specify. In *rangeObj*, pass a range of the cell(s) whose value you want to specify.

The *field* parameter specifies a 4D database [virtual field](formulas.md#referencing-fields-using-the-virtual-structure) to be assigned to the *rangeObj*. The virtual structure name for *field* can be viewed in the formula bar. If any of the cells in *rangeObj* have existing content, it will be replaced by *field*.

The optional *formatPattern* defines a pattern for the *field* parameter. You can pass any valid [custom format](configuring.md#cell-format).

#### Exemple

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```
#### Voir aussi

[VP SET VALUE](#vp-set-value)

### VP SET FORMULA

<!-- REF #_method_.VP SET FORMULA.Syntax -->**VP SET FORMULA** ( *rangeObj* : Object ; *formula* : Text { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF #_method_.VP SET FORMULA.Params -->

| Paramètres    | Type   |    | Description          |
| ------------- | ------ | -- | -------------------- |
| rangeObj      | Object | -> | Objet plage          |
| formula       | Text   | -> | Formula or 4D method |
| formatPattern | Text   | -> | Format of field      |

<!-- END REF -->  

#### Description

The `VP SET FORMULA` command <!-- REF #_method_.VP SET FORMULA.Summary -->assigns a specified formula or 4D method to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify.

The *formula* parameter specifies a formula or 4D method name to be assigned to the *rangeObj*. If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](#vp-set-allowed-method) command.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *formula*.

You remove the formula in *rangeObj* by replacing it with an empty string ("").

#### Exemple 1

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
```

#### Exemple 2

To remove the formula:

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"")
```

#### Voir aussi

[Cell format](configuring.md#cell-format)<br/>[VP Get Formula](#vp-get-formula)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUE](#vp-set-value)

### VP SET FORMULAS

<!-- REF #_method_.VP SET FORMULAS.Syntax -->**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->  

<!-- REF #_method_.VP SET FORMULAS.Params -->

| Paramètres  | Type       |    | Description            |
| ----------- | ---------- | -- | ---------------------- |
| rangeObj    | Object     | -> | Cell range object      |
| formulasCol | Collection | -> | Collection of formulas |

<!-- END REF -->  

#### Description

The `VP SET FORMULAS` command <!-- REF #_method_.VP SET FORMULAS.Summary -->assigns a collection of formulas starting at the specified cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell (created with [VP Cell](#vp-cell)) whose formula you want to specify. If *rangeObj* includes multiple ranges, only the first range is used.

The *formulasCol* is a two-dimensional collection:

*   La collection de premier niveau contient des sous-collections de formules. Each subcollection defines a row.
*   Chaque sous-collection définit les valeurs des cellules de la ligne. Values must be text elements containing the formulas to assign to the cells. >If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](#vp-set-allowed-methods) command.

You remove the formulas in *rangeObj* by replacing them with an empty string ("").

#### Exemple 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // First row
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Second row

VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Set the cells with the formulas
```

*myMethod*:

```4d
$0:=$1*3.33
```

![](assets/en/ViewPro/cmd_vpSetFormulas.PNG)



#### Exemple 2

To remove formulas:

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // first collection
$formulas.push(New collection("";"")) // second collection

VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assign to cells
```

#### Voir aussi

[VP Get Formulas](#vp-get-formulas)<br/>[VP GET VALUES](#vp-get-values)[VP SET FORMULA](#vp-set-formula)<br/>[VP SET VALUES](#vp-set-values)


### VP SET FROZEN PANES

<!-- REF #_method_.VP SET FROZEN PANES.Syntax -->**VP SET FROZEN PANES** ( *vpAreaName* : Text ; *paneObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP SET FROZEN PANES.Params -->

| Paramètres | Type    |    | Description                                                        |
| ---------- | ------- | -- | ------------------------------------------------------------------ |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                            |
| paneObj    | Object  | -> | Objet contenant des informations sur les colonnes et lignes figées |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis)                    |

<!-- END REF -->  

#### Description

The `VP SET FROZEN PANES` command <!-- REF #_method_.VP SET FROZEN PANES.Summary -->sets the frozen status of the columns and rows in the *paneObj* so they are always displayed in the *vpAreaName*<!-- END REF -->. Frozen columns and rows are fixed in place and do not move when the rest of the document is scrolled. A solid line is displayed to indicate that columns and rows are frozen. The location of the line depends on where the frozen column or row is on the sheet:

*   **Columns on the left or right**: For columns on the left of the sheet, the line is displayed on the right side of the last frozen column. For columns on the right side of the sheet, the line is displayed on the left side of the first frozen column.
*   **Rows on the top or bottom**: For rows at the top of the sheet, the line is displayed below the last frozen row. For rows at the bottom of the sheet, the line is displayed above the first frozen row.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

You can pass an object defining the columns and rows to freeze in the *paneObj* parameter. Setting the value of any of the column or row properties equal to zero resets (unfreezes) the property. If a property is set to less than zero, the command does nothing. Vous pouvez passer :

| Propriété           | Type    | Description                                              |
| ------------------- | ------- | -------------------------------------------------------- |
| columnCount         | Integer | Le nombre de colonnes figées sur la gauche de la feuille |
| trailingColumnCount | Integer | Le nombre de colonnes figées sur la droite de la feuille |
| rowCount            | Integer | Le nombre de lignes figées en haut de la feuille         |
| trailingRowCount    | Integer | Le nombre de lignes figées en bas de la feuille          |

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`

#### Exemple

You want to freeze the first three columns on the left, two columns on the right, and the first row:

```4d
C_OBJECT($panes)

$panes:=New object
$panes.columnCount:=3
$panes.trailingColumnCount:=2
$panes.rowCount:=1

VP SET FROZEN PANES("ViewProArea";$panes)
```


![](assets/en/ViewPro/cmd_vpSetFrozenPanes.PNG)

#### Voir aussi

[VP Get frozen panes](#vp-get-frozen-panes)

### VP SET NUM VALUE

<!-- REF #_method_.VP SET NUM VALUE.Syntax -->**VP SET NUM VALUE** ( *rangeObj* : Object ; *numberValue* : Number { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF #_method_.VP SET NUM VALUE.Params -->

| Paramètres    | Type   |    | Description         |
| ------------- | ------ | -- | ------------------- |
| rangeObj      | Object | -> | Objet plage         |
| numberValue   | Nombre | -> | Number value to set |
| formatPattern | Text   | -> | Format of value     |

<!-- END REF -->  

#### Description

The `VP SET NUM VALUE` command <!-- REF #_method_.VP SET NUM VALUE.Summary -->assigns a specified numeric value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *numberValue* parameter specifies a numeric value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *numberValue* parameter.

#### Exemple

```4d
//Set the cell value to 2
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)

//Set the cell value and format it in dollars
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")
```

#### Voir aussi

[Cell format](configuring.md#cell-format)<br/>[VP SET VALUE](#vp-set-value)

### VP SET PRINT INFO

<!-- REF #_method_.VP SET PRINT INFO.Syntax -->**VP SET PRINT INFO** ( *vpAreaName* : Text ; *printInfo* : Object { ; *sheet* : Integer }  ) <!-- END REF -->  

<!-- REF #_method_.VP SET PRINT INFO.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom de la zone 4D View Pro                      |
| printInfo  | Object  | -> | Object containing printing attributes           |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |

<!-- END REF -->  

#### Description

The `VP SET PRINT INFO` command <!-- REF #_method_.VP SET PRINT INFO.Summary -->defines the attributes to use when printing the *vpAreaName*<!-- END REF -->.

Pass the name of the 4D View Pro area to print in *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

You can pass an object containing definitions for various printing attributes in the *printInfo* parameter. To view the full list of the available attributes, see [Print Attributes](configuring.md#print-attributes).

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`

#### Exemple

The following code will print a 4D View Pro area to a PDF document:

```4d
var $printInfo : Object

//declare print attributes object
$printInfo:=New object

//define print attributes
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

//Add corporate logo
$printInfo.headerLeftImage:=logo.png
$printInfo.headerLeft:="&G"

$printInfo.showRowHeader:=vk print visibility hide
$printInfo.showColumnHeader:=vk print visibility hide
$printInfo.fitPagesWide:=1
$printInfo.fitPagesTall:=1

//print PDF document
VP SET PRINT INFO ("ViewProArea";$printInfo)

//export the PDF
VP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))
```

The PDF:

![](assets/en/ViewPro/cmd_vpSetPrintInfo.PNG)

#### Voir aussi

[4D View Pro print attributes](configuring.md#print-attributes)<br/>[VP Convert to picture](#vp-convert-to-picture)<br/>[VP Get print info](#vp-get-print-info)<br/>[VP PRINT](#vp-print)

### VP SET ROW ATTRIBUTES

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Syntax -->**VP SET ROW ATTRIBUTES** ( *rangeObj* : Object ; *propertyObj* : Object  ) <!-- END REF -->  

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Params -->

| Paramètres  | Type   |    | Description                      |
| ----------- | ------ | -- | -------------------------------- |
| rangeObj    | Object | -> | Range of rows                    |
| propertyObj | Object | -> | Object containing row properties |

<!-- END REF -->  

#### Description

The `VP SET ROW ATTRIBUTES` command <!-- REF #_method_.VP SET ROW ATTRIBUTES.Summary -->applies the attributes defined in the *propertyObj* to the rows in the *rangeObj*<!-- END REF -->.

In the *rangeObj*, pass an object containing a range. If the range contains both columns and rows, attributes are applied only to the rows.

The *propertyObj* parameter lets you specify the attributes to apply to the rows in the *rangeObj*. These attributes are:

| Propriété | Type    | Description                                                               |
| --------- | ------- | ------------------------------------------------------------------------- |
| height    | number  | Row height expressed in pixels                                            |
| pageBreak | boolean | True to insert a page break before the first row of the range, else false |
| visible   | boolean | True if the row is visible, else false                                    |
| resizable | boolean | True if the row can be resized, else false                                |
| header    | Texte   | Row header text                                                           |


#### Exemple

You want to change the size of the second row and set the header:

```4d
var $row; $properties : Object

$row:=VP Row("ViewProArea";1)
$properties:=New object("height";75;"header";"June")

VP SET ROW ATTRIBUTES($row;$properties)
```

![](assets/en/ViewPro/cmd_vpSetRowAttributes.PNG)

#### Voir aussi

[VP Get row attributes](#vp-get-row-attributes)<br/>[VP get column attributes](#vp-get-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP SET ROW COUNT

<!-- REF #_method_.VP SET ROW COUNT.Syntax -->**VP SET ROW COUNT** ( *vpAreaName* : Text ; *rowCount* : Integer { ; *sheet* : Integer }  ) <!-- END REF -->  

<!-- REF #_method_.VP SET ROW COUNT.Params -->

| Paramètres | Type    |    | Description                                     |
| ---------- | ------- | -- | ----------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro         |
| rowCount   | Integer | -> | Nombre de lignes                                |
| sheet      | Integer | -> | Indice de la feuille (feuille courante si omis) |

<!-- END REF -->  

#### Description

The `VP SET ROW COUNT` command <!-- REF #_method_.VP SET ROW COUNT.Summary -->defines the total number of rows in *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Pass the total number of rows in the *rowCount* parameter. *rowCount* doit être supérieur à 0.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the *rowCount* will be applied (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`


#### Exemple

The following code defines five rows in the 4D View Pro area:

```4d
VP SET ROW COUNT("ViewProArea";5)
```

![](assets/en/ViewPro/cmd_vpSetRowCount.PNG)

#### Voir aussi

[VP Get column count](#vp-get-column-count)<br/>[VP get row-count](#vp-get-row-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)

### VP SET SELECTION

<!-- REF #_method_.VP SET SELECTION.Syntax -->**VP SET SELECTION** ( *rangeObj* : Object  ) <!-- END REF -->  

<!-- REF #_method_.VP SET SELECTION.Params -->

| Paramètres | Type   |    | Description                        |
| ---------- | ------ | -- | ---------------------------------- |
| rangeObj   | Object | -> | Objet plage de toutes les cellules |

<!-- END REF -->  

#### Description

The `VP SET SELECTION` command <!-- REF #_method_.VP SET SELECTION.Summary -->defines the specified cells as the selection and the first cell as the active cell<!-- END REF -->.

In *rangeObj*, pass a range object of cells to designate as the current selection.

#### Exemple

```4d
$currentSelection:=VP Combine ranges(VP Cells("myVPArea";3;2;1;6);VP Cells("myVPArea";5;7;1;7))
VP SET SELECTION($currentSelection)
```

![](assets/en/ViewPro/cmd_vpSetSelection.PNG)

#### Voir aussi

[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP ADD SELECTION](#vp-add-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP SET SHEET COUNT

<!-- REF #_method_.VP SET SHEET COUNT.Syntax -->**VP SET SHEET COUNT** ( *vpAreaName* : Text ; *number* : Integer  ) <!-- END REF -->  

<!-- REF #_method_.VP SET SHEET COUNT.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| number     | Integer | -> | Nombre de feuilles                      |

<!-- END REF -->  

#### Description

The `VP SET SHEET COUNT` command <!-- REF #_method_.VP SET SHEET COUNT.Summary -->sets the number of sheets in *vpAreaName*<!-- END REF -->.

In `number`, pass a number corresponding to how many sheets the document will contain after the command is executed.
> **Warning**: The command will delete sheets if the previous amount of sheets in your document is superior to the number passed. For example, if there are 5 sheets in your document and you set the sheet count to 3, the command will delete sheets number 4 and 5.

#### Exemple

The document currently has one sheet:

![](assets/en/ViewPro/vp-sheet-1.png)

To set the number of sheets to 3:

```4d
VP SET SHEET COUNT("ViewProArea";3)
```

![](assets/en/ViewPro/vp-sheet-3.png)

#### Voir aussi

[VP Get sheet count](#vp-get-sheet-count)

### VP SET SHEET NAME

<!-- REF #_method_.VP SET SHEET NAME.Syntax -->**VP SET SHEET NAME** ( *vpAreaName* : Text ; *name* : Text {; index: Integer} ) 
<!-- END REF -->  

<!-- REF #_method_.VP SET SHEET NAME.Params -->

| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |
| name       | Text    | -> | New name for the sheet                  |
| index      | Integer | -> | Index of the sheet to be renamed        |

<!-- END REF -->  

#### Description

The `VP SET SHEET NAME` command <!-- REF #_method_.VP SET SHEET NAME.Summary -->renames a sheet in the document loaded in *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *name*, pass a new name for the sheet.

In *index*, pass the index of the sheet to rename.

> La numérotation démarre à 0.

If no *index* is passed, the command renames the current sheet.

Le nouveau nom ne peut pas contenir les caractères suivants : `*, :, [, ], ?,\,/`

The command does nothing if:

* the new name contains forbidden characters
* the new name's value is blank
* the new name already exists
* the passed *index* does not exist

#### Exemple

Set the third sheet's name to "Total first quarter":

```4d
VP SET SHEET NAME("ViewProArea";"Total first quarter";2)
```

![](assets/en/ViewPro/vp-sheet-index-name.png)


### VP SET SHEET OPTIONS

<!-- REF #_method_.VP SET SHEET OPTIONS.Syntax -->**VP SET SHEET OPTIONS** ( *vpAreaName* : Text; *sheetOptions* : Object { ; *sheet* : Integer}  ) <!-- END REF -->  

<!-- REF #_method_.VP SET SHEET OPTIONS.Params -->

| Paramètres   | Type   |    | Description                                     |
| ------------ | ------ | -- | ----------------------------------------------- |
| vpAreaName   | Object | -> | Nom de la zone 4D View Pro                      |
| sheetOptions | Object | -> | Sheet option(s) to set                          |
| sheet        | Object | -> | Indice de la feuille (feuille courante si omis) |

<!-- END REF -->  

#### Description

The `VP SET SHEET OPTIONS` command <!-- REF #_method_.VP SET SHEET OPTIONS.Summary -->allows defining various sheet options of the *vpAreaName* area<!-- END REF -->.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Pass an object containing definitions for the options to set in the *sheetOptions* parameter. To view the full list of the available options, see the [Sheet Options](configuring.md#sheet-options) paragraph.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`


#### Exemple 1

You want to protect all cells except the range C5:D10:

```4d
// Activate protection on the current sheet
var $options : Object

$options:=New object
$options.isProtected:=True
VP SET SHEET OPTIONS("ViewProArea";$options)

// mark cells C5:D10 as 'unlocked'
VP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))
```


#### Exemple 2

You need to protect your document while your users can resize rows and columns:

```4d
var $options : Object

$options:=New object
// Activate protection
$options.isProtected:=True
$options.protectionOptions:=New object
// Allow user to resize rows
$options.protectionOptions.allowResizeRows=True;
// Allow user to resize columns
$options.protectionOptions.allowResizeColumns=True;

// Apply protection on the current sheet
VP SET SHEET OPTIONS("ViewProArea";$options)
```


#### Exemple 3

You want to customize the colors of your sheet tabs, frozen lines, grid lines, selection background and selection border:

```4d
var $options : Object

$options:=New object
// Customize color of Sheet 1 tab
$options.sheetTabColor:="Black"
$options.gridline:=New object("color";"Purple")
$options.selectionBackColor:="rgb(255,128,0,0.4)"
$options.selectionBorderColor:="Yellow"
$options.frozenlineColor:="Gold"

VP SET SHEET OPTIONS("ViewProArea";$options;0)

// Customize color of Sheet 2 tab
$options.sheetTabColor:="red"

VP SET SHEET OPTIONS("ViewProArea";$options;1)

// Customize color of Sheet 3 tab
$options.sheetTabColor:="blue"

VP SET SHEET OPTIONS("ViewProArea";$options;2)
```

Résultat :

![](assets/en/ViewPro/cmd_vpSetSheetOptions1.PNG)

#### Exemple 4

You want to hide the grid lines as well as the row and column headers.

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

Résultat :

![](assets/en/ViewPro/cmd_vpSetSheetOptions2.PNG)

#### Voir aussi

[4D View Pro sheet options](configuring.md#sheet-options)<br/>[VP Get sheet options](#vp-get-sheet-options)

### VP SET SHOW PRINT LINES

<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->**VP SET SHOW PRINT LINES** ( *vpAreaName* : Text {; visible : Boolean}{; index : Integer} ) 
<!-- END REF -->  

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

| Paramètres | Type    |    | Description                                              |
| ---------- | ------- | -- | -------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                  |
| visible    | Booléen | -> | Print lines displayed if True (default), hidden if False |
| index      | Integer | -> | Sheet index                                              |

<!-- END REF -->  

#### Description

The `VP SET SHOW PRINT LINES` command <!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> sets whether to display print preview lines in a spreadsheet.<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *visible*, pass `True` to display the print lines, and `False` to hide them. `True` is passed by default.

In *index*, pass the index of the target sheet. If no index is specified, the command applies to the current sheet.

> La numérotation démarre à 0.

The position of a spreadsheet's print lines varies according to that spreadsheet's page breaks.


#### Exemple

The following code displays print lines in a document's second sheet:

```4d
VP SET SHOW PRINT LINES("ViewProArea";True;1)

```

![set-show-print-lines](assets/en/ViewPro/vp-set-show-print-lines.png)

With a page break:

![set-show-print-lines-with-page-break](assets/en/ViewPro/vp-set-show-print-lines-page-break.png)

#### Voir aussi

[4D Get show print lines](#vp-get-show-print-lines)

### VP SET TEXT VALUE

<!-- REF #_method_.VP SET TEXT VALUE.Syntax -->**VP SET TEXT VALUE** ( *rangeObj* : Object ; *textValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->  

<!-- REF #_method_.VP SET TEXT VALUE.Params -->

| Paramètres    | Type   |    | Description       |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | Object | -> | Objet plage       |
| textValue     | Text   | -> | Text value to set |
| formatPattern | Text   | -> | Format of value   |

<!-- END REF -->  

#### Description

The `VP SET TEXT VALUE` command <!-- REF #_method_.VP SET TEXT VALUE.Summary -->assigns a specified text value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *textValue* parameter specifies a text value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *textValue* parameter.


#### Exemple

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

#### Voir aussi

[Cell Format](configuring.md#cell-format)<br/>[VP SET VALUE](#vp-set-value)

### VP SET TIME VALUE

<!-- REF #_method_.VP SET TIME VALUE.Syntax -->**VP SET TIME VALUE** ( *rangeObj* : Object ; *timeValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->  

<!-- REF #_method_.VP SET TIME VALUE.Params -->

| Paramètres    | Type   |    | Description       |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | Object | -> | Objet plage       |
| timeValue     | Text   | -> | Time value to set |
| formatPattern | Text   | -> | Format of value   |

<!-- END REF -->  

#### Description

The `VP SET TIME VALUE` command <!-- REF #_method_.VP SET TIME VALUE.Summary -->assigns a specified time value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *timeValue* parameter specifies a time expressed in seconds to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *timeValue* parameter.

#### Exemple

```4d
//Set the value to the current time
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)

//Set the value to a specific time with a designated format
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)
```

#### Voir aussi

[Cell Format](configuring.md#cell-format)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET VALUE](#vp-set-value)

### VP SET VALUE

<!-- REF #_method_.VP SET VALUE.Syntax -->**VP SET VALUE** ( *rangeObj* : Object ; *valueObj* : Object ) <!-- END REF -->  

<!-- REF #_method_.VP SET VALUE.Params -->

| Paramètres | Type   |    | Description                                   |
| ---------- | ------ | -- | --------------------------------------------- |
| rangeObj   | Object | -> | Objet plage                                   |
| valueObj   | Object | -> | Valeurs de la cellule et options de formatage |

<!-- END REF -->  

#### Description

La commande `VP SET VALUE` <!-- REF #_method_.VP SET VALUE.Summary -->assigne une valeur spécifique à une plage de cellules désignée<!-- END REF -->.

Cette commande vous permet d'utiliser du code générique pour fixer et formater les types de valeurs dans *rangeObj*, tandis que d'autres commandes, telles que [`VP SET TEXT VALUE`](#vp-set-text-value) et [`VP SET NUM VALUE`](#vp-set-num-value), limitent les valeurs à des types spécifiques.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.


Le paramètre *valueObj* est un objet qui définit la valeur et le [format](configuring.md#cell-format) à assigner à *rangeObj*. Il peut contenir les propriétés suivantes :

| Propriété | Type                                     | Description                                                                                                                                                                              |
| --------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Null | Valeur à assigner à *rangeObj* (exceptée heure). Passez null pour effacer le contenu de la cellule.                                                                                      |
| time      | Réel                                     | Time value (in seconds) to assign to *rangeObj*                                                                                                                                          |
| format    | Text                                     | Pattern for value/time property. Pour plus d'informations sur les modèles et les caractères de formatage, veuillez consulter la section [Format de cellule](configuring.md#cell-format). |



#### Exemple

```4d
//Fixer la valeur de la cellule à Faux
 VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))
 
 //Fixer la valeur de la cellule à 2
 VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))
 
 //Fixer la valeur de la cellule à $125,571.35
 VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))
 
 //Fixer la valeur de la cellule à Hello World!
 VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))
 
 //Fixer la valeur de la cellule à date du jour
 VP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))
 
 //Fixer la valeur de la cellule à heure courante
 VP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current time))
 
 //Fixer la valeur de la cellule à une date et une heure spécifiques
 VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
 
 //Effacer le contenu de la cellule
 VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))!
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))

VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))

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
#### Voir aussi

[Cell Format](configuring.md#cell-format)<br/>[VP Get values](#vp-get-value)<br/>[VP SET VALUE](#vp-set-value)<br/>[VP SET BOOLEAN VALUE](#vp-set-boolean-value)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET FIELD](#vp-set-field)<br/>[VP SET FORMULA](#vp-set-formula)<br/>[VP SET NUM VALUE](#vp-set-num-value)<br/>[VP SET TEXT VALUE](#vp-set-text-value)<br/>[VP SET TIME VALUE](#vp-set-time-value)

### VP SET VALUES

<!-- REF #_method_.VP SET VALUES.Syntax -->**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->  

<!-- REF #_method_.VP SET VALUES.Params -->

| Paramètres | Type       |    | Description          |
| ---------- | ---------- | -- | -------------------- |
| rangeObj   | Object     | -> | Objet plage          |
| valuesCol  | Collection | -> | Collection of values |

<!-- END REF -->  

#### Description

La commande `VP SET VALUES` <!-- REF #_method_.VP SET VALUES.Summary -->affecte une collection de valeurs qui commence à partir de la plage de cellule spécifiée<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellule (créée via [`VP Cell`](#vp-cell)) dont vous souhaitez indiquer la valeur. La cellule définie dans *rangeObj* est utilisée pour déterminer le point de départ.
> * Si *rangeObj* n'est pas une plage cellule, seule la première cellule de la plage est utilisée.
> * Si *rangeObj* comprend plusieurs plages, seule la première cellule de la première plage est utilisée.

Le paramètre *valuesCol* est bidimensionnel :

*   La collection de premier niveau contient des sous-collections de valeurs. Each subcollection defines a row. Passez une collection vide pour sauter une ligne.
*   Chaque sous-collection définit les valeurs des cellules de la ligne. Les valeurs peuvent être de type entier long, réel, booléen, texte, date, null ou objet. Si la valeur est un objet, elle peut avoir les propriétés suivantes :

    | Propriété | Type                                     | Description                      |
    | --------- | ---------------------------------------- | -------------------------------- |
    | value     | Integer, Real, Boolean, Text, Date, Null | Value in the cell (except- time) |
    | time      | Réel                                     | Valeur heure (en secondes)       |

#### Exemple

```4d
$param:=New collection
 $param.push(Creer collection(1;2;3;False)) //première ligne, 4 valeurs
 $param.push(Creer collection) //deuxième ligne, inchangé
 $param.push(Creer collection(4;5;Null;"hello";"world")) // troisième ligne, 5 valeurs
 $param.push(Creer collection(6;7;8;9)) // quatrième ligne, 4 valeurs
 $param.push(Creer collection(Null;Creer objet("value";Current date;"time";42))) //cinquième ligne, 1 valeur
 VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

![](assets/en/ViewPro/cmd_vpSetValues.PNG)

#### Voir aussi

[VP Get formulas](configuring.md#vp-get-formulas)<br/>[VP Get value](#vp-get-value)<br/>[VP Get Values](#vp-get-values)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUE](#vp-set-value)

### VP SET WORKBOOK OPTIONS 

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Syntax -->**VP SET WORKBOOK OPTIONS** ( *vpAreaName* : Text ; *optionObj* : Object)<!-- END REF -->  

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Params -->
| Paramètres | Type   |    | Description                                      |
| ---------- | ------ | -- | ------------------------------------------------ |
| vpAreaName | Text   | -> | Nom d'objet formulaire zone 4D View Pro          |
| optionObj  | Object | -> | Object containing the workbook options to be set |
<!-- END REF -->  

#### Description

`VP SET WORKBOOK OPTIONS` <!-- REF #_method_.VP SET WORKBOOK OPTIONS.Summary -->
sets the workbook options in *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *optionObj*, pass the workbook options to apply to *vpAreaName*.

If *optionObj* is empty, the command does nothing.

Modified workbook options are saved with the document.

The following table lists the available workbook options:

| Propriété                             | Type                    | Description                                                                                                                                                                                                                                            |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allowUserDragMerge                    | boolean                 | The drag merge operation is allowed (select cells and drag the selection to merge cells)                                                                                                                                                               |
| allowAutoCreateHyperlink              | boolean                 | Enables automatic creation of hyperlinks in the spreadsheet.                                                                                                                                                                                           |
| allowContextMenu                      | boolean                 | The built-in context menu can be opened.                                                                                                                                                                                                               |
| allowCopyPasteExcelStyle              | boolean                 | Styles from a spreadsheet can be copied and pasted to Excel, and vice-versa.                                                                                                                                                                           |
| allowDynamicArray                     | boolean                 | Enables dynamic arrays in worksheets                                                                                                                                                                                                                   |
| allowExtendPasteRange                 | boolean                 | Extends the pasted range if the pasted range is not enough for the pasted data                                                                                                                                                                         |
| allowSheetReorder                     | boolean                 | Sheet reordering is allowed                                                                                                                                                                                                                            |
| allowUndo                             | boolean                 | Undoing edits is allowed.                                                                                                                                                                                                                              |
| allowUserDeselect                     | boolean                 | Deselecting specific cells from a selection is allowed.                                                                                                                                                                                                |
| allowUserDragDrop                     | boolean                 | Drag and drop of range data is allowed                                                                                                                                                                                                                 |
| allowUserDragFill                     | boolean                 | Drag fill is allowed                                                                                                                                                                                                                                   |
| allowUserEditFormula                  | boolean                 | Formulas can be entered in cells                                                                                                                                                                                                                       |
| allowUserResize                       | boolean                 | Columns and rows can be resized                                                                                                                                                                                                                        |
| allowUserZoom                         | boolean                 | Zooming (ctrl + mouse wheel) is allowed                                                                                                                                                                                                                |
| autoFitType                           | number                  | Content is formatted to fit in cells, or cells and headers. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk auto fit type cell </td><td>0</td><td> The content autofits cells</td></tr><tr><td> vk auto fit type cell with header </td><td>1</td><td> The content autofits cells and headers</td></tr></table>                                                                                                                                            |
| backColor                             | string                  | A color string used to represent the background color of the area, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5". The initial backgroundcolor is hidden when a backgroundImage is set.                                                          |
| backgroundImage                       | string / picture / file | Background image for the area.                                                                                                                                                                                                                         |
| backgroundImageLayout                 | number                  | How the background image is displayed. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk image layout center </td><td>1</td><td> In the center of the area.</td></tr><tr><td> vk image layout none </td><td>3</td><td> In the upper left corner of the area with its original size.</td></tr><tr><td> vk image layout stretch </td><td>0</td><td> Fills the area.</td></tr><tr><td> vk image layout zoom </td><td>2</td><td> Displayed with its original aspect ratio.</td></tr></table>                                                                                                                                                                 |
| calcOnDemand                          | boolean                 | Formulas are calculated only when they are demanded.                                                                                                                                                                                                   |
| columnResizeMode                      | number                  | Resize mode for columns. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk resize mode normal </td><td>0</td><td> Use normal resize mode (i.e remaining columns are affected)</td></tr><tr><td> vk resize mode split </td><td>1</td><td> Use split mode (i.e remaining columns are not affected)</td></tr></table>                                                                                                                                                                               |
| copyPasteHeaderOptions                | number                  | Headers to include when data is copied to or pasted. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk copy paste header options all headers</td><td>3</td><td> Includes selected headers when data is copied; overwrites selected headers when data is pasted.</td></tr><tr><td> vk copy paste header options column headers </td><td>2</td><td> Includes selected column headers when data is copied; overwrites selected column headers when data is pasted.</td></tr><tr><td> vk copy paste header options no headers</td><td>0</td><td> Column and row headers are not included when data is copied; does not overwrite selected column or row headers when data is pasted.</td></tr><tr><td> vk copy paste header options row headers</td><td>1</td><td>   Includes selected row headers when data is copied; overwrites selected row headers when data is pasted.</td></tr></table>                                                                                                                                                   |
| customList                            | collection              | The list for users to customize drag fill, prioritize matching this list in each fill. Each collection item is a collection of strings. See on [GrapeCity's website](https://www.grapecity.com/spreadjs/docs/v13/online/AutoFillLists.html#b).         |
| cutCopyIndicatorBorderColor           | string                  | Border color for the indicator displayed when the user cuts or copies the selection.                                                                                                                                                                   |
| cutCopyIndicatorVisible               | boolean                 | Display an indicator when copying or cutting the selected item.                                                                                                                                                                                        |
| defaultDragFillType                   | number                  | The default drag fill type. Available values : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk auto fill type auto </td><td>5</td><td> Automatically fills cells. </td></tr><tr><td> vk auto fill type clear values </td><td>4</td><td> Clears cell values.</td></tr><tr><td> vk auto fill type copycells </td><td>0</td><td> Fills cells with all data objects, including values, formatting, and formulas.</td></tr><tr><td> vk auto fill type fill formatting only </td><td>2</td><td> Fills cells only with formatting.</td></tr><tr><td> vk auto fill type fill series </td><td>1</td><td> Fills cells with series. </td></tr><tr><td> vk auto fill type fill without formatting </td><td>3</td><td> Fills cells with values and not formatting. </td></tr></table>                                                                                                                                                                               |
| enableAccessibility                   | boolean                 | Accessibility support is enabled in the spreadsheet.                                                                                                                                                                                                   |
| enableFormulaTextbox                  | boolean                 | The formula text box is enabled.                                                                                                                                                                                                                       |
| grayAreaBackColor                     | string                  | A color string used to represent the background color of the gray area , such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.                                                                                                              |
| highlightInvalidData                  | boolean                 | Invalid data is highlighted.                                                                                                                                                                                                                           |
| iterativeCalculation                  | boolean                 | Enables iterative calculation. See on [Grapecity's website](https://www.grapecity.com/spreadjs/docs/v14/online/calculating-iterative.html).                                                                                                            |
| iterativeCalculationMaximumChange     | numeric                 | Maximum amount of change between two calculation values.                                                                                                                                                                                               |
| iterativeCalculationMaximumIterations | numeric                 | Number of times the formula should recalculate.                                                                                                                                                                                                        |
| newTabVisible                         | boolean                 | Display a special tab to let users insert new sheets.                                                                                                                                                                                                  |
| numbersFitMode                        | number                  | Changes display mode when date/number data width is longer than column width. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk numbers fit mode mask</td><td>0</td><td> Replace data content with "###" and shows tip</td></tr><tr><td> vk numbers fit mode overflow </td><td>1</td><td> Display data content as a string. If next cell is empty, overflow the content.</td></tr></table>                                                                                                                          |
| pasteSkipInvisibleRange               | boolean                 | Paste or skip pasting data in invisible ranges: <ul><li>False (default): paste data</li><li>True: Skip pasting in invisible ranges</li></ul>See [Grapecity's docs](https://www.grapecity.com/spreadjs/docs/v14/online/paste-skip-data-invisible-range.html) for more information on invisible ranges.                     |
| referenceStyle                        | number                  | Style for cell and range references in cell formulas. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk reference style A1 </td><td>0</td><td> Use A1 style.</td></tr><tr><td> vk reference style R1C1 </td><td>1</td><td> Use R1C1 style</td></tr></table>                                                                                                                                                  |
| resizeZeroIndicator                   | number                  | Drawing policy when the row or column is resized to zero. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk resize zero indicator default </td><td>0</td><td> Uses the current drawing policy when the row or column is resized to zero.</td></tr><tr><td> vk resize zero indicator enhanced </td><td>1</td><td> Draws two short lines when the row or column is resized to zero.</td></tr></table>                                                                                                                                              |
| rowResizeMode                         | number                  | The way rows are resized. Available values are the same as columnResizeMode                                                                                                                                                                            |
| scrollbarAppearance                   | number                  | Scrollbar appearance. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk scrollbar appearance mobile</td><td>1</td><td> Mobile scrollbar appearance.</td></tr><tr><td> vk scrollbar appearance skin (default)</td><td>0</td><td> Excel-like classic scrollbar appearance.</td></tr></table>                                                                                                                                                                                  |
| scrollbarMaxAlign                     | boolean                 | The scroll bar aligns with the last row and column of the active sheet.                                                                                                                                                                                |
| scrollbarShowMax                      | boolean                 | The displayed scroll bars are based on the entire number of columns and rows in the sheet.                                                                                                                                                             |
| scrollByPixel                         | boolean                 | Enable precision scrolling by pixel.                                                                                                                                                                                                                   |
| scrollIgnoreHidden                    | boolean                 | The scroll bar ignores hidden rows or columns.                                                                                                                                                                                                         |
| scrollPixel                           | entier                  | Decides scrolling by that number of pixels at a time when scrollByPixel is true. The final scrolling pixels are the result of `scrolling delta * scrollPixel`. For example: scrolling delta is 3, scrollPixel is 5, the final scrolling pixels are 15. |
| showDragDropTip                       | boolean                 | Display the drag-drop tip.                                                                                                                                                                                                                             |
| showDragFillSmartTag                  | boolean                 | Display the drag fill dialog.                                                                                                                                                                                                                          |
| showDragFillTip                       | boolean                 | Display the drag-fill tip.                                                                                                                                                                                                                             |
| showHorizontalScrollbar               | boolean                 | Display the horizontal scroll bar.                                                                                                                                                                                                                     |
| showResizeTip                         | number                  | How to display the resize tip. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk show resize tip both </td><td>3</td><td> Horizontal and vertical resize tips are displayed.</td></tr><tr><td> vk show resize tip column </td><td>1</td><td> Only the horizontal resize tip is displayed.</td></tr><tr><td> vk show resize tip none </td><td>0</td><td> No resize tip is displayed.</td></tr><tr><td> vk show resize tip row </td><td>2</td><td> Only the vertical resize tip is displayed.</td></tr></table>                                                                                                                                                                         |
| showScrollTip                         | number                  | How to display the scroll tip. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk show scroll tip both </td><td>3</td><td> Horizontal and vertical scroll tips are displayed.</td></tr><tr><td> vk show scroll tip horizontal </td><td>1</td><td> Only the horizontal scroll tip is displayed.</td></tr><tr><td> vk show scroll tip none </td><td> No scroll tip is displayed.</td></tr><tr><td> vk show scroll tip vertical </td><td>2</td><td> Only the vertical scroll tip is displayed.</td></tr></table>                                                                                                                                                                         |
| showVerticalScrollbar                 | boolean                 | Display the vertical scroll bar.                                                                                                                                                                                                                       |
| tabEditable                           | boolean                 | The sheet tab strip can be edited.                                                                                                                                                                                                                     |
| tabNavigationVisible                  | boolean                 | Display the sheet tab navigation.                                                                                                                                                                                                                      |
| tabStripPosition                      | number                  | Position of the tab strip. Valeurs disponibles : <table><tr><th>Constante</th><th>Valeur</th><th>Description</th></tr><tr><td> vk tab strip position bottom </td><td>0</td><td> Tab strip position is relative to the bottom of the workbook.</td></tr><tr><td> vk tab strip position left </td><td>2</td><td> Tab strip position is relative to the left of the workbook.</td></tr><tr><td> vk tab strip position right </td><td>3</td><td> Tab strip position is relative to the right of the workbook.</td></tr><tr><td> vk tab strip position top </td><td>1</td><td> Tab strip position is relative to the top of the workbook.</td></tr></table>                                                                                                                                                                             |
| tabStripRatio                         | number                  | Percentage value (0.x) that specifies how much of the horizontal space will be allocated to the tab strip. The rest of the horizontal area (1 - 0.x) will allocated to the horizontal scrollbar.                                                       |
| tabStripVisible                       | boolean                 | Display the sheet tab strip.                                                                                                                                                                                                                           |
| tabStripWidth                         | number                  | Width of the tab strip when position is left or right. Default and minimum is 80.                                                                                                                                                                      |
| useTouchLayout                        | boolean                 | Whether to use touch layout to present the Spread component.                                                                                                                                                                                           |

#### Exemple

To set the allowExtendpasteRange option in "ViewProArea":

```4d
var $workbookOptions : Object

$workbookOptions:= New Object
$workbookOptions.allowExtendPasteRange:=True

VP SET WORKBOOK OPTIONS("ViewProArea";$workbookOptions)
```

#### Voir aussi

[VP Get workbook options](#vp-get-workbook-options)

### VP SHOW CELL

<!-- REF #_method_.VP SHOW CELL.Syntax -->**VP SHOW CELL** ( *rangeObj* : Object { ; *vPos* : Integer; *hPos* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP SHOW CELL.Params -->

| Paramètres | Type    |    | Description                                                 |
| ---------- | ------- | -- | ----------------------------------------------------------- |
| rangeObj   | Object  | -> | Objet plage                                                 |
| vPos       | Integer | -> | Position verticale de la vue de la cellule ou de la ligne   |
| hPos       | Integer | -> | Position horizontale de la vue de la cellule ou de la ligne |

<!-- END REF -->  

#### Description

La commande `VP SHOW CELL` <!-- REF #_method_.VP SHOW CELL.Summary -->repositionne verticalement et horizontalement la vue de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez, en tant qu'objet, une plage de cellules que vous souhaitez afficher. La vue de *rangeObj* sera positionnée verticalement ou horizontalement (i.e., là où *rangeObj* apparait) en fonction des paramètres *vPos* et *hPos*. Le paramètre *vPos* définit la position verticale souhaitée pour afficher *rangeObj* et le paramètre *vPos* définit la position horizontale souhaitée pour afficher *rangeObj*.

Les sélecteurs suivants sont disponibles :

| Sélecteur             | Description                                                                                                                                                                                                                                                                                                                         | Disponible avec *vPos* | *hPos* |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------ |
| `vk position bottom`  | Alignement vertical vers le bas de la cellule ou de la ligne.                                                                                                                                                                                                                                                                       | X                      |        |
| `vk position center`  | Alignement vers le centre. L'alignement s'appliquera à la limite de la cellule, ligne ou colonne, en fonction de la position de la vue indiquée :<li>Position verticale de la vue - cellule ou ligne</li><li>Position horizontale de la vue - cellule ou ligne</li>                                                                                                                               | X                      | X      |
| `vk position left`    | Alignement horizontal vers la gauche de la cellule ou de la colonne                                                                                                                                                                                                                                                                 |                        | X      |
| `vk position nearest` | Alignement vers la limite la plus proche (haut, bas, gauche, droite, centre). L'alignement s'appliquera à la limite de la cellule, ligne ou colonne, en fonction de la position de la vue indiquée :<li>Position verticale de la vue (haut, centre, bas) - cellule ou ligne </li><li>Position horizontale de la vue (gauche, centre, droite) - cellule ou ligne | X                      | X      |
| `vk position right`   | Alignement horizontal vers la droite de la cellule ou de la colonne                                                                                                                                                                                                                                                                 |                        | X      |
| `vk position top`     | Alignement vertical vers le haut de la cellule ou de la ligne                                                                                                                                                                                                                                                                       | X                      |        |
> Cette commande n'est efficace que si le repositionnement de la vue est possible. Par example, si *rangeObj* est contenu dans la cellule A1 (la première colonne et la première ligne) de la feuille courante, le repositionnement de la vue n'apportera aucun changement, étant donné que les limites verticales et horizontales ont déjà été atteintes (i.e., il n'est pas possible de faire dérouler davantage vers le haut ou vers la gauche). De même si *rangeObj* est contenu dans la cellule C3 et que la vue est repositionnée au centre ou en bas à droite. La vue demeure inchangée.

#### Exemple

Vous souhaitez visualiser la cellule dans la colonne AY, ligne 51, au centre de la zone 4D View Pro. Le code suivant :

```4d
$displayCell:=VP Cell("myVPArea";50;50)
 // Déplacez la vue pour afficher la cellule
 VP SHOW CELL($displayCell;vk position center;vk position center)
```

Résultat :

![](assets/en/ViewPro/cmd_vpShowCell1.PNG)

Le même code ainsi que les sélecteurs verticaux et horizontaux ont été modifiés pour afficher la même cellule en haut à droite de la zone 4D View Pro :

```4d
$displayCell:=VP Cell("myVPArea";50;50)
  // Déplacez la vue pour afficher la cellule
 VP SHOW CELL($displayCell;vk position top;vk position right)
```

Résultat :

![](assets/en/ViewPro/cmd_vpShowCell2.PNG)

#### Voir aussi

[VP ADD CELL](#vp-add-cell)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)

### VP SUSPEND COMPUTING

<!-- REF #_method_.VP SUSPEND COMPUTING.Syntax -->**VP SUSPEND COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF #_method_.VP SUSPEND COMPUTING.Params -->

| Paramètres | Type |    | Description                             |
| ---------- | ---- | -- | --------------------------------------- |
| vpAreaName | Text | -> | Nom d'objet formulaire zone 4D View Pro |

<!-- END REF -->  

#### Description

La commande `VP SUSPEND COMPUTING` <!-- REF #_method_.VP SUSPEND COMPUTING.Summary -->stoppe le calcul de toutes les formules dans *vpAreaName*<!-- END REF -->. Cette commande est utile lorsque vous souhaitez suspendre les calculs dans cette zone 4D View Pro, afin de modifier manuellement les formules sans générer d'erreurs avant la fin de vos modifications.

La commande met en pause les calculs dans 4D View Pro. Les formules déjà calculées restent inchangées, mais les formules ajoutées après `VP SUSPEND COMPUTING` et qui sont exécutées, ne sont pas calculées.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.
> The 4D View Pro calculation service maintains a counter of suspend/resume actions. Ainsi, chaque exécution de `VP SUSPEND COMPUTING` doit être compensée par une exécution correspondante de la commande `VP RESUME COMPUTING`. Toute formule modifiée durant la phase de suspension des calculs sera recalculée lorsque la commande sera exécutée.

#### Exemple

Vous avez ajouté deux boutons au formulaire afin que l'utilisateur puisse suspendre/reprendre les calculs :

![](assets/en/ViewPro/cmd_vpStopCalculations.PNG)

Le code du bouton Suspend Computing :

```4d
 //mettre les calculs sur pause pendant que les utilisateurs saisissent les informations
 If(FORM Event.code=On Clicked)
 
    VP SUSPEND COMPUTING("ViewProArea")
 
 End if
```


```4d
If(FORM Event.code=On Clicked)

    VP RESUME COMPUTING("ViewProArea")

End if
```
#### Voir aussi

[VP RECOMUTE FORMULAS](#vp-recompute-formulas)<br/>[VP RESUME COMPUTING](#vp-resume-computing)


<style> h2 { background: #d9ebff;}</style>
