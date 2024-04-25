---
id: identifiers
title: Identifiants
---

Cette section détaille les règles d'écriture et de nommage appliquées aux divers identifiants utilisés dans le langage de 4D (variables, propriétés d'objets, tableaux, formulaires, etc.).

> En cas d'utilisation de caractères non-romans dans les noms des identifiants, leur longueur maximum peut être inférieure.

## Tableaux

Array names follow the same rules as [variables](#variables).

## Classes

Le nom d’une classe peut contenir jusqu’à 31 caractères.

A class name must be compliant with standard [property naming rules](#object-properties) for dot notation.

> Giving the same name to a class and a [database table](#tables) is not recommended, in order to prevent any conflict.

## Fonctions

Function names must be compliant with standard [property naming rules](#object-properties) for dot notation.

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor.

## Propriétés des objets

The name of an object property (also called object _attribute_) can contain up to 255 characters.

Les propriétés d'objets peuvent référencer des valeurs scalaires, des éléments ORDA, des fonctions de classe, d'autres objets, etc. Whatever their nature, object property names must follow the following rules **if you want to use the [dot notation](dt_object.md#object-properties)**:

- Un nom de propriété doit commencer par une lettre, un trait de soulignement ("_") ou un dollar ("$").
- Ensuite, le nom peut inclure des lettres, des chiffres, des traits de soulignement ("_") ou des dollars ("$").
- Les noms de propriétés sont sensibles à la casse.

Exemples :

```4d
monObjet.monAttribut:="10"
 $valeur:=$clientObj.data.address.city
```

:::tip

Starting an object property name with an underscore character ("_") will exclude the property from the autocompletion features in the 4D code editor. For example, if you declare `$o._myPrivateProperty`, it will not be proposed in the code editor when you type in `"$o. "`.

:::

See also [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

:::note

If you use **string notation** within square brackets, property names can contain any characters (ex: `myObject["1. First property"]`).

:::

## Paramètres

Parameter names must start with a `$` character and follow the same rules as [variable names](#variables).

Exemples :

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## Méthodes

Le nom d’une méthode projet peut contenir jusqu’à 31 caractères.

- Un nom de méthode projet doit commencer par une lettre, un chiffre ou un trait de soulignement
- Ensuite, le nom peut inclure n'importe quelle lettre, chiffre, un trait de soulignement ("_") ou un caractère espace.
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Les noms des méthodes projets ne sont PAS sensibles à la casse.

Exemples :

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tip:** It is a good programming technique to adopt the same naming convention as the one used by 4D for built-in methods. Ecrivez les noms de vos procédures en caractères majuscules, et vos fonctions en minuscules avec la première lettre en majuscule. Ainsi, lorsque vous rouvrirez un projet au bout de plusieurs mois, vous identifierez immédiatement si une méthode retourne ou non un résultat, en regardant son nom dans la fenêtre de l'Explorateur.

> Lorsque vous appelez une méthode, vous saisissez simplement son nom. However, some 4D built-in commands, such as `ON EVENT CALL`, as well as all plug-in commands, expect the name of a method as a string when a method parameter is passed.

Exemples :

```4d
 //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
 //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

## Tables et champs

Vous désignez une table en écrivant son nom entre crochets : [...]. Vous désignez un champ en spécifiant d'abord la table à laquelle il appartient (le nom du champ suit immédiatement celui de la table).

Un nom de table ou de champ peut contenir jusqu’à 31 caractères.

- Un nom de table oiu de champ doit commencer par une lettre, un trait de soulignement ("_") ou un dollar ("$").
- Le nom peut ensuite contenir des caractères alphabétiques, des caractères numériques, des espaces et des tirets bas (_).
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Des règles supplémentaires sont à respecter lorsque la base doit être manipulée via le SQL : seuls les caractères _0123456789abcdefghijklmnopqrstuvwxyz sont acceptés, et le nom ne doit pas comporter de mot-clé SQL (commande, attribut, etc.).

Exemples :

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> Giving the same name to a table and a [class](#classes) is not recommended, in order to prevent any conflict.

## Variables

The name of a variable can be up to 31 characters, not including the scope symbols (`$` or `<>`).

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables).
- A digit as first character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- Ensuite, le nom peut inclure des lettres, chiffres, et traits de soulignement ("_").
- Space character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Les noms de variables ne sont PAS sensibles à la casse.

Exemples :

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
var $vName; $vJob : Text //local variales 
If(bValidate=1) //process variable
<>vlProcessID:=Current process() //interprocess variable
```

## Autres noms

In the 4D language, several elements have their names handled as strings: **forms**, **form objects**, **named selections**, **processes**, **sets**, **menu bars**, etc.

Such string names can contain up to 255 characters, not including the `$` or `<>` characters (if any).

- Les noms sous forme de chaînes peuvent contenir n'importe quel caractère.
- Les noms sous forme de chaînes ne sont pas sensibles à la casse.

Exemples :

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
 //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")//Process set
USE SET("<>Deleted Records") //Interprocess set
If(Records in set("$Selection"+String($i))>0) //Client set

```
