---
id: identifiers
title: Identifiants
---

Cette section détaille les règles d'écriture et de nommage appliquées aux divers identifiants utilisés dans le langage de 4D (variables, propriétés d'objets, tableaux, formulaires, etc.).

> En cas d'utilisation de caractères non-romans dans les noms des identifiants, leur longueur maximum peut être inférieure.

## Tableaux

Les noms de tableaux suivent les mêmes règles que les noms de [variables](#variables).

## Classes

Le nom d’une classe peut contenir jusqu’à 31 caractères.

Un nom de classe doit être conforme aux [règles standard de nommage des propriétés](#propriétés-des-objets) au regard de la notation à points.

> Donner le même nom à une classe et à une [table de la base](#tables) est déconseillé afin d'éviter tout conflit.

## Fonctions

Les noms de fonctions doivent être conformes aux [règles standard de nommage des propriétés](#propriétés-des-objets) au regard de la notation à points.

> **Astuce :** Si vous préfixez le nom d'une fonction par un trait de soulignement ("_"), elle ne sera pas proposée par les fonctionnalités d'auto-complétion dans l'éditeur de code 4D.

## Propriétés des objets

Le nom d'une propriété d'objet (aussi appelé *attribut*) peut contenir jusqu'à 255 caractères.

Les propriétés d'objets peuvent référencer des valeurs scalaires, des éléments ORDA, des fonctions de classe, d'autres objets, etc. Quelle que soit leur nature, les noms des propriétés d'objets doivent suivre certaines règles **si vous souhaitez utiliser la [notation à point](dt_object.md#propriétés-des-objets)** :

- Un nom de propriété doit commencer par une lettre, un trait de soulignement ("_") ou un dollar ("$").
- Ensuite, le nom peut inclure des lettres, des chiffres, des traits de soulignement ("_") ou des dollars ("$").
- Les noms de propriétés sont sensibles à la casse.

Exemples :

```4d
monObjet.monAttribut:="10"
 $valeur:=$clientObj.data.address.city
```

:::tip

Faire commencer un nom de propriété d'objet avec un caractère de soulignement ("_") exclura la propriété des fonctionnalités d'auto-complétion dans l'éditeur de code 4D. Par exemple, si vous déclarez `$o._myPrivateProperty`, il ne sera pas proposé dans l'éditeur de code lorsque vous tapez `"$o. "`.

:::

Voir également le [standard ECMA Script](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

:::note

Si vous utilisez la **notation chaine** avec des crochets, les noms de propriété peuvent contenir n'importe quel caractère (ex: `myObject["1. First property"]`).

:::

## Paramètres

Les noms de paramètres doivent commencer par un caractère `$` et suivent les mêmes règles que les [noms de variables](#variables).

Exemples :

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## Méthodes

Le nom d’une méthode projet peut contenir jusqu’à 31 caractères.

- Un nom de méthode projet doit commencer par une lettre, un chiffre ou un trait de soulignement
- Ensuite, le nom peut inclure n'importe quelle lettre, chiffre, un trait de soulignement ("_") ou un caractère espace.
- N'utilisez pas de noms réservés, i.e. des noms de commandes 4D (`Date`, `Time`, etc), des mots-clés (`If`, `For`, etc.), des noms de constantes (`Euro`, `Black`, `Friday`), etc.
- Les noms des méthodes projets ne sont PAS sensibles à la casse.

Exemples :

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Conseil :** Nous vous recommandons d'adopter, pour nommer vos méthodes, la même convention que celle utilisée dans le langage de 4D. Ecrivez les noms de vos procédures en caractères majuscules, et vos fonctions en minuscules avec la première lettre en majuscule. Ainsi, lorsque vous rouvrirez un projet au bout de plusieurs mois, vous identifierez immédiatement si une méthode retourne ou non un résultat, en regardant son nom dans la fenêtre de l'Explorateur.

> Lorsque vous appelez une méthode, vous saisissez simplement son nom. Toutefois, certaines commandes 4D intégrées telles que `ON EVENT CALL`, ainsi que les commandes des plug-ins, nécessitent que vous passiez le nom d'une méthode en tant que chaîne lorsqu'un paramètre de type méthode est attendu.

Exemples :

```4d
 // Cette commande attend une méthode (fonction) ou une formule
 QUERY BY FORMULA([aTable];Special query)
 // Cette commande attend une méthode (procédure) ou une formule
 APPLY TO SELECTION([Employees];INCREASE SALARIES)
 // Mais cette commande attend un nom de méthode
ON EVENT CALL("HANDLE EVENTS")
```

## Tables et champs

Vous désignez une table en écrivant son nom entre crochets : [...]. Vous désignez un champ en spécifiant d'abord la table à laquelle il appartient (le nom du champ suit immédiatement celui de la table).

Un nom de table ou de champ peut contenir jusqu’à 31 caractères.

- Un nom de table oiu de champ doit commencer par une lettre, un trait de soulignement ("_") ou un dollar ("$").
- Le nom peut ensuite contenir des caractères alphabétiques, des caractères numériques, des espaces et des tirets bas (_).
- N'utilisez pas de noms réservés, i.e. des noms de commandes 4D (`Date`, `Time`, etc), des mots-clés (`If`, `For`, etc.), des noms de constantes (`Euro`, `Black`, `Friday`), etc.
- Des règles supplémentaires sont à respecter lorsque la base doit être manipulée via le SQL : seuls les caractères _0123456789abcdefghijklmnopqrstuvwxyz sont acceptés, et le nom ne doit pas comporter de mot-clé SQL (commande, attribut, etc.).

Exemples :

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> Donner le même nom à une table et à une [classe](#classes) est déconseillé afin d'éviter tout conflit.

## Variables

Le nom d'une variable peut comporter jusqu'à 31 caractères, sans compter les symboles de portée (`$` ou `<>`).

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables) (deprecated).
- Ensuite, le nom peut inclure des lettres, chiffres, et traits de soulignement ("_").
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), system variable names (`OK`, `document`...), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Les noms de variables ne sont PAS sensibles à la casse.

Exemples :

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
var $vName; $vJob : Text //local variales
If(bValidate=1) //process variable
<>vlProcessID:=Current process() //interprocess variable
```

### Compatibilité

Some naming practices were previously allowed but are no longer supported when the [direct typing mode is enabled](../Project/compiler.md#enabling-direct-typing) (introduced in 4D 20 R7). Enabling this mode will produce syntax errors if:

- a variable name has a digit as first character,
- a variable name contains space characters,
- you declared variables named $0, $1, etc.

## Autres noms

Dans le langage de 4D, plusieurs éléments ont des noms manipulés sous forme de chaînes : **formulaires**, **objets de formulaires**, **sélections temporaires**, **process**, **ensembles**, **barres de menus**, etc.

Ces noms peuvent contenir jusqu'à 255 caractères, sans compter les éventuels caractères `$` ou `<>`.

- Les noms sous forme de chaînes peuvent contenir n'importe quel caractère.
- Les noms sous forme de chaînes ne sont pas sensibles à la casse.

Exemples :

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")//Sélection temporaire process
USE NAMED SELECTION([Customers];"<>;ByZipcode") //Sélection temporaire interprocess
 //Démarrage du process global "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Démarrage du process local "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")//Ensemble process
USE SET("<>Deleted Records") //Ensemble interprocess
If(Records in set("$Selection"+String($i))>0) //Ensemble client

```
