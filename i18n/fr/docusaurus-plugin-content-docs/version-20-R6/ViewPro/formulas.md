---
id: formulas
title: Formules et fonctions
---

## Utilisation des formules

Une formule de feuille de calcul est une expression qui calcule la valeur d'une cellule.

### Saisie des formules

Pour saisir une formule dans une zone de 4D View Pro :

1. Sélectionnez la cellule dans laquelle vous allez saisir la formule ou la fonction.
2. Saisissez = (le signe égal).
3. Type the formula and hit the **Enter** key.

Lorsque vous écrivez une formule, vous pouvez utiliser différents raccourcis :

- cliquez sur une cellule pour entrer sa référence dans la formule :

![](../assets/en/ViewPro/formulas.PNG)

- tapez la première lettre d'une fonction à saisir. Un menu contextuel listant les fonctions et références disponibles apparaît, pour vous permettre de sélectionner les éléments souhaités :

![](../assets/en/ViewPro/formula2.png)

Vous pouvez également créer des formules nommées qui peuvent être appelées via leur nom. To do so, enter these formulas using the [VP ADD FORMULA NAME](commands/vp-add-formula-name.md) command.

### Opérateurs et opérandes

Toutes les formules ont des opérandes et des opérateurs :

- **Operators**: see [Values and operators](#values-and-operators) below.
- **Operands** include several categories:
  - [values](#values-and-operators) (5 data types are supported)
  - [references to other cells](#cell-references) (relative, absolute, mixed or by name)
  - [standard spreadsheet functions](#using-functions)
  - [4D functions](#4d-functions) based upon 4D formulas and providing access to 4D variables, fields, methods, commands, or expressions.

## Valeurs et opérateurs

4D View Pro prend en charge cinq types de données. Pour chaque type de données, des valeurs littérales et des opérateurs spécifiques sont pris en charge.

| Types de données                  | Valeurs                                                                                             | Opérateurs                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Number](Concepts/dt_number.md)   | 1.2<br/>1.2 E3<br/>1.2E-3<br/>10.3x | - (addition)<br/>- (soustraction)<br/>\* (multiplication)<br/>/ (division)<br/>^ (exposant, le nombre de fois qu'il faut multiplier un nombre par lui-même)<br/>% (pourcentage -- diviser par cent le nombre précédant l'opérateur) |
| [Date](Concepts/dt_date.md)       | 10/24/2017                                                                                          | * (date + number of days -> date)<br/>+ (date + time -> date + time of day)<br/>- (date - number of days -> date)<br/>- (date - date -> number of days between the two)                                                                                                   |
| [Time](Concepts/dt_time.md)       | 10:12:10                                                            | Duration operators:<br/>+ (addition)<br/>- (subtraction)<br/>\* (duration \* number -> duration)<br/>/ (duration / number -> duration)                                                                                                                    |
| [String](Concepts/dt_string.md)   | 'Sophie' ou "Sophie"                                                                                | & (concaténation)                                                                                                                                                                                                                                                                                              |
| [Boolean](Concepts/dt_boolean.md) | TRUE ou FALSE                                                                                       | -                                                                                                                                                                                                                                                                                                                                                     |

### Opérateurs de comparaison

Les opérateurs suivants peuvent être utilisés avec deux opérandes de même type :

| Opérateur | Comparaison         |
| --------- | ------------------- |
| =         | est égal à          |
| `<>`      | est différent de    |
| >         | supérieur à         |
| <         | inférieur à         |
| > =       | supérieur ou égal à |
| <=        | inférieur ou égal à |

### Préséance des opérateurs

Liste des opérateurs, du plus important au moins important :

| Opérateur                   | Description                                    |
| --------------------------- | ---------------------------------------------- |
| ()       | Parenthèse (pour regrouper) |
| -                           | Négatif                                        |
| *                           | Plus                                           |
| %                           | Pourcentage                                    |
| ^                           | Exposant                                       |
| - et /                      | Multiplier et diviser                          |
| * et -                      | Ajouter et soustraire                          |
| &       | Concaténer                                     |
| `=`  `>` `<` `>=` `<=` `<>` | Comparer                                       |

## Références de cellules

Les formules font souvent référence à d'autres cellules par des adresses de cellule. Vous pouvez copier ces formules dans d'autres cellules. Par exemple, la formule suivante, saisie dans la cellule C8, additionne les valeurs des deux cellules situées au-dessus et affiche le résultat.

```
= C6 + C7
```

Cette formule fait référence aux cellules C6 et C7. En d'autres termes, le logiciel 4D View Pro reçoit l'instruction de se référer à ces autres cellules pour trouver les valeurs à utiliser dans la formule.

Lorsque vous copiez ou déplacez ces formules vers de nouveaux emplacements, chaque adresse de cellule dans cette formule change ou reste la même, selon la façon dont elle est tapée.

- A reference that changes is called a **relative reference**, and refers to a cell by how far left/right and up/down it is from the cell with the formula.
- A reference that always points to a particular cell is called an **absolute reference**.
- Vous pouvez également créer une référence mixte qui pointe toujours vers une ligne ou une colonne fixe.

### Notation des références

If you use only cell coordinates, for example, `C5`, 4D View Pro interprets the reference as relative. You may make the reference an absolute reference by putting a dollar sign in front of the letter and the number, as in `$C$5`.

You can mix absolute and relative references by inserting a dollar sign in front of the letter or the number alone, for example, `$C5` or `C$5`. Une référence mixte vous permet de spécifier la ligne ou la colonne comme absolue, tout en permettant à l'autre partie de l'adresse de se référer de manière relative.

Un moyen pratique, rapide et précis de spécifier une référence absolue consiste à nommer la cellule et à utiliser ce nom à la place de l'adresse de la cellule. Une référence à une cellule nommée est toujours absolue. You can create or modify named cells or named cell ranges using the [`VP ADD RANGE NAME`](commands/vp-add-range-name.md) command.

Le tableau suivant montre l'effet des différentes notations :

| Exemple        | Type de référence | Description                                                                                                                                                                                          |
| -------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C5             | Relative          | La référence concerne l'emplacement relatif de la cellule C5, en fonction de l'emplacement de la cellule dans laquelle la référence est utilisée pour la première fois                               |
| $C$5           | Absolue           | La référence est absolue. Elle fait toujours référence à la cellule C5, quel que soit l'endroit où elle est utilisée.                                                |
| $C5            | Mixed             | La référence est toujours faite à la colonne C, mais la référence de ligne est relative à l'emplacement de la cellule dans laquelle la référence est utilisée pour la première fois. |
| C$5            | Mixed             | La référence est toujours la ligne 5, mais la référence de la colonne est relative à l'emplacement de la cellule dans laquelle la référence est utilisée pour la première fois                       |
| Nom de cellule | Absolue           | La référence est absolue. Will always refer to the [named cell or range](commands/vp-add-range-name.md) no matter where the reference is used.                       |

## Fonctions intégrées

Les fonctions de tableur sont des formules prédéfinies utilisées pour calculer les valeurs des cellules. Lorsque vous tapez la première lettre de la fonction à saisir, un menu contextuel répertoriant les fonctions et références disponibles apparaît, vous permettant de sélectionner les éléments souhaités :

![](../assets/en/ViewPro/vpFormula2.PNG)

See [**SpreadJS's extented list of functions**](https://developer.mescius.com/spreadjs/docs/formulareference/FormulaFunctions) for details and examples.

## Fonctions 4D

4D View Pro allows you to define and call **4D custom functions**, which execute [4D formulas](API/FunctionClass.md). L'utilisation de fonctions personnalisées 4D étend les possibilités de vos documents 4D View Pro et permet des interactions avancées avec la base de données 4D.

Les fonctions personnalisées 4D permettent d'accéder, à partir de vos formules 4D View Pro :

- aux variables process 4D,
- aux champs,
- aux méthodes projet,
- aux commandes de langage 4D,
- ou à toute autre expression 4D valide.

4D custom functions can receive [parameters](#parameters) from the 4D View Pro area, and return values.

You declare all your functions using the [`VP SET CUSTOM FUNCTIONS`](commands/vp-set-custom-functions) command. Exemples :

```4d
$o:=New object

//Name of the function in 4D View Pro: "DRIVERS_LICENCE"
$o.DRIVERS_LICENCE:=New object

//process variable
$o.DRIVERS_LICENCE.formula:=Formula(DriverLicence)

//table field
$o.DRIVERS_LICENCE.formula:=Formula([Users]DriverLicence)

//project method
$o.DRIVERS_LICENCE.formula:=Formula(DriverLicenceState)

//4D command
$o.DRIVERS_LICENCE:=Formula(Choose(DriverLicence; "Obtained"; "Failed"))

//4D expression and parameter
$o.DRIVERS_LICENCE.formula:=Formula(ds.Users.get($1).DriverLicence)
$o.DRIVERS_LICENCE.parameters:=New collection
$o.DRIVERS_LICENCE.parameters.push(New object("name"; "ID"; "type"; Is longint))
```

> **See also** [4D View Pro: Use 4D formulas in your spreadsheet (blog post)](https://blog.4d.com/4d-view-pro-use-4d-formulas-in-your-spreadsheet/)

### Exemple avec Hello World

Nous souhaitons imprimer "Hello World" dans une cellule de la zone 4D View Pro en utilisant une méthode projet 4D :

1. Créez une méthode projet "myMethod" avec le code suivant :

```4d
 #DECLARE->$hw :Text
 $hw:="Hello World"

```

2. Exécutez le code suivant avant d'ouvrir tout formulaire contenant une zone 4D View Pro :

```4d
  Case of
    :(Form event code=On Load)
       var $o : Object
       $o:=New object
  // Définir la fonction "vpHello" à partir de la méthode "myMethod"
       $o.vpHello:=New object
       $o.vpHello.formula:=Formula(myMethod)
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 End case
```

3. Modifiez le contenu d'une cellule dans une zone 4D View Pro et saisissez :

   ![](../assets/en/ViewPro/vpProjMeth1.PNG)

   "myMethod" est alors appelé par 4D et la cellule s'affiche :

   ![](../assets/en/ViewPro/vpProjMeth2.PNG)

### Paramètres

Les paramètres peuvent être passés aux fonctions 4D qui appellent les méthodes projet en utilisant la syntaxe suivante :

```
=METHODNAME(param1,param2,...,paramN)
```

These parameters are received in _methodName_ in $1, $2...$N.

A noter que les ( ) sont obligatoires, même si aucun paramètre n'est passé :

```
=METHODWITHOUTNAME()
```

You can declare the name, type, and number of parameters through the _parameters_ collection of the function you declared using the [VP SET CUSTOM FUNCTIONS](commands/vp-set-custom-functions.md) command. Optionally, you can control the number of parameters passed by the user through _minParams_ and _maxParams_ properties.

For more information on supported incoming parameter types, please refer to the [VP SET CUSTOM FUNCTIONS](commands/vp-set-custom-functions) command description.

If you do not declare parameters, values can be sequentially passed to methods (they will be received in $1, $2...) and their type will be automatically converted.

Date and Object parameters are handled in the following way:

- Dates in _jstype_ will be passed as [object](Concepts/dt_object.md) in 4D code with two properties:

| Propriété | Type | Description       |
| --------- | ---- | ----------------- |
| value     | Date | Valeur date       |
| time      | Real | Heure en secondes |

- Objects will be passed as [object](Concepts/dt_object.md) with a  `.value` property containing the parameter:

| Propriété | Type   | Description      |
| --------- | ------ | ---------------- |
| value     | Object | Object parameter |

### Returned values

Les méthodes projet 4D peuvent également retourner des valeurs dans la formule de la cellule 4D View Pro via $0. Les types de données suivants sont pris en charge pour les paramètres retournés :

- [text](Concepts/dt_string.md) (converted to string in 4D View Pro)
- [real](Concepts/dt_number.md)/[longint](Concepts/dt_number.md) (converted to number in 4D View Pro)
- [date](Concepts/dt_date.md) (converted to JS Date type in 4D View Pro - hour, minute, sec = 0)
- [time](Concepts/dt_time.md) (converted to JS Date type in 4D View Pro - date in base date, i.e. 12/30/1899)
- [boolean](Concepts/dt_boolean.md) (converted to bool in 4D View Pro)
- [picture](Concepts/dt_picture.md) (jpg,png,gif,bmp,svg other types converted into png) creates a URI (data:image/png;base64,xxxx) and then used as the background in 4D View Pro in the cell where the formula is executed
- [object](Concepts/dt_object.md) with the following two properties (allowing passing a date and time):

  | Propriété | Type | Description       |
  | --------- | ---- | ----------------- |
  | value     | Date | Valeur date       |
  | time      | Real | Heure en secondes |

Si la méthode 4D ne retourne rien, une chaîne vide est automatiquement retournée.

Une erreur est retournée dans la cellule 4D View Pro si :

- la méthode 4D retourne un autre type que ceux listés ci-dessus,
- une erreur s'est produite pendant l'exécution de la méthode 4D (lorsque l'utilisateur clique sur le bouton "abort").

#### Exemple

```4d
var $o : Object

$o.BIRTH_INFORMATION:=New object
$o.BIRTH_INFORMATION.formula:=Formula(BirthInformation)
$o.BIRTH_INFORMATION.parameters:=New collection
$o.BIRTH_INFORMATION.parameters.push(New object("name";"First name";"type";Is text))
$o.BIRTH_INFORMATION.parameters.push(New object("name";"Birthday";"type";Is date))
$o.BIRTH_INFORMATION.parameters.push(New object("name";"Time of birth";"type";Is time))
$o.BIRTH_INFORMATION.summary:="Returns a formatted string from given information"

VP SET CUSTOM FUNCTIONS("ViewProArea"; $o)
```

![](../assets/en/ViewPro/params.png)

## Compatibilité

Des solutions alternatives sont disponibles pour déclarer des champs ou des méthodes en tant que fonctions dans vos zones 4D View Pro. Ces solutions sont maintenues pour des raisons de compatibilité et peuvent être utilisées dans des cas spécifiques. However, using the [`VP SET CUSTOM FUNCTIONS`](commands/vp-set-custom-functions.md) command is recommended.

### Référencement de champs à l'aide de la structure virtuelle

4D View Pro allows you to reference 4D fields using the virtual structure of the database, i.e. declared through the [`SET TABLE TITLES`](https://doc.4d.com/4dv19/help/command/en/page601.html) and/or [`SET FIELD TITLES`](https://doc.4d.com/4dv19/help/command/en/page602.html) commands with the \* parameter. This alternate solution could be useful if your application already relies on a virtual structure (otherwise, [using `VP SET CUSTOM FUNCTIONS`](#4d-functions) is recommended).

> **WARNING:** You cannot use the virtual structure and `VP SET CUSTOM FUNCTIONS` simultaneously. As soon as `VP SET CUSTOM FUNCTIONS` is called, the functions based upon `SET TABLE TITLES` and `SET FIELD TITLES` commands are ignored in the 4D View Pro area.

#### Conditions requises

- The field must belong to the virtual structure of the database, i.e. it must be declared through the [`SET TABLE TITLES`](https://doc.4d.com/4dv19/help/command/en/page601.html) and/or [`SET FIELD TITLES`](https://doc.4d.com/4dv19/help/command/en/page602.html) commands with the \* parameter (see example),
- Table and field names must be ECMA compliant (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)),
- Le type de champ doit être pris en charge par 4D View Pro (voir ci-dessus).

Une erreur est retournée dans la cellule 4D View Pro si la formule appelle un champ qui n'est pas conforme.

#### Appel d'un champ virtuel dans une formule

Pour insérer une référence à un champ virtuel dans une formule, saisissez le champ avec la syntaxe suivante :

```
TABLENAME_FIELDNAME()
```

Par exemple, si vous avez déclaré le champ "Name" de la table "People" dans la structure virtuelle, vous pouvez appeler les fonctions suivantes :

```
=PEOPLE_NAME()
=LEN(PEOPLE_NAME())
```

> If a field has the same name as a [4D method](../Concepts/methods.md), it takes priority over the method.

#### Exemple

Nous souhaitons imprimer le nom d'une personne dans une cellule de la zone 4D View Pro en utilisant un champ virtuel 4D :

1. Créez une table "Employee" avec un champ "L_Name" :

![](../assets/en/ViewPro/vpFieldMeth1.PNG)

2. Exécuter le code suivant pour initialiser une structure virtuelle :

   ```4d
   ARRAY TEXT($tableTitles;1)
   ARRAY LONGINT($tableNum;1)
   $tableTitles{1}:="Emp"
   $tableNum{1}:=2
   SET TABLE TITLES($tableTitles;$tableNum;*)
    
   ARRAY TEXT($fieldTitles;1)
   ARRAY LONGINT($fieldNum;1)
   $fieldTitles{1}:="Name"
   $fieldNum{1}:=2 //last name
   SET FIELD TITLES([Employee];$fieldTitles;$fieldNum;*)
   ```

3. Modifiez le contenu d'une cellule de la zone 4D View Pro et saisir "=e" :

![](../assets/en/ViewPro/vpFieldMeth2.PNG)

4. Sélectionnez EMP_NAME (utilisez la touche Tab) et saisissez la fermeture ).

![](../assets/en/ViewPro/vpFieldMeth3.PNG)

5. Validez le champ pour afficher le nom de l'employé courant :

![](../assets/en/ViewPro/vpFieldMeth4.PNG)

> La table \[Employee] doit avoir un enregistrement en cours.

### Déclarer des méthodes autorisées

Vous pouvez appeler directement des méthodes du projet 4D à partir de vos formules 4D View Pro. For security reasons, you must declare explicitly methods that can be called by the user with the [VP SET ALLOWED METHODS](commands/vp-set-allowed-methods.md) command.

#### Conditions requises

Pour être appelée dans une formule 4D View Pro, une méthode projet doit être :

- **Allowed**: it was explicitly declared using the [VP SET ALLOWED METHODS](commands/vp-set-allowed-methods.md) command.
- **Runnable**: it belongs to the host project or a loaded component with the "Shared by components and host project" option enabled (see [Sharing of project methods](../Concepts/components.md#sharing-of-project-methods)).
- **Not in conflict** with an existing 4D View Pro spreadsheet function: if you call a project method with the same name as a 4D View Pro built-in function, the function is called.

> If neither the [VP SET CUSTOM FUNCTIONS](commands/vp-set-custom-functions.md) nor the [VP SET ALLOWED METHODS](commands/vp-set-allowed-methods.md) command has been executed during the session, 4D View Pro custom functions rely on allowed methods defined by 4D's generic `SET ALLOWED METHODS` command. In this case, the project method names must comply with JavaScript Identifier Grammar (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)). The global filtering option in the Settings dialog box (see _Data Access_) is ignored in all cases.
