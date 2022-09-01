---
id: identifiers
title: Identifiants
---

Cette section détaille les règles d'écriture et de nommage appliquées aux divers identifiants utilisés dans le langage de 4D (variables, tableaux, objets, formulaires, etc.).

## Règles de base

Les règles suivantes s'appliquent à toutes les structures de 4D.

- Un nom doit commencer par un caractère alphabétique, un tiret bas ou un dollar ("$") (à noter que le symbole dollar peut désigner un élément local, voir ci-dessous).
- Le nom peut ensuite contenir des caractères alphabétiques, des caractères numériques, des espaces et des tirets bas (_).
- Les points (".") Periods (".") and brackets ("[ ]") are not allowed in table, field, method, or variable names.
- Les virgules, barres de fraction, guillemets et deux points (:) sont interdits.
- Les caractères réservés car utilisés comme opérateurs, comme l’astérisque (*) ou le +, sont interdits.
- Les noms réservés, c'est-à-dire les noms de commandes 4D (`Date`, `Time`, etc), les mots-clés (If, For, etc.) et les constantes.
- 4D ignore les espaces superflus.

### Règles supplémentaires pour les propriétés d'objet et les noms ORDA

- Les espaces sont interdits.
- Les points (".") Periods (".") and brackets ("[ ]") are not allowed.
- Les noms sont sensibles à la casse.

### Règles supplémentaires pour SQL

- Seuls les caractères _0123456789abcdefghijklmnopqrstuvwxyz sont acceptés
- Les noms ne doivent pas comporter de mot-clé SQL (commande, attribut, etc.).

**Note :** La zone "SQL" de l'inspecteur de l'éditeur de Structure signale automatiquement les caractères non autorisés dans un nom de table ou de champ.

## Tables

Vous désignez une table en plaçant son nom entre crochets : [...]. Un nom de table peut contenir jusqu’à 31 caractères.

Exemple :

```4d
DEFAULT TABLE([Commandes])
FORM SET INPUT([Clients];"Entrée")
ADD RECORD([Lettres])
```

## Champs

Vous désignez un champ en spécifiant d’abord la table à laquelle il appartient. Le nom du champ se place immédiatement derrière celui de la table. Un nom de champ peut contenir jusqu’à 31 caractères.

Exemple :

```4d
[Commandes]Total:=Sum([Ligne]Montant)
 QUERY([Clients];[Clients]Nom="Dupont")
 [Lettres]Text:=Capitalize text([Lettres]Texte)
```

## Variables interprocess

You designate an interprocess variable by preceding the name of the variable with the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

The name of an interprocess variable can be up to 31 characters, not including the `<>` symbols.

Exemple :

```4d
<>vlProcessID:=Current process
 <>vsKey:=Char(KeyCode)
If(<>vtNom#"")
```

## Variables process

You designate a process variable by using its name (which cannot start with the `<>` symbols nor the dollar sign $). Ce nom peut contenir jusqu’à 31 caractères.

Exemple :

```4d
vrGrandTotal:=Sum([Comptes]Montant)
 If(bValider=1)
 vsNomCourant:=""
```

## Variables locales

Vous désignez une variable locale en faisant précéder son nom du symbole dollar ($). Le nom d’une variable locale peut contenir jusqu’à 31 caractères, signe dollar non compris.

Exemple :

```4d
For($vlRecord;1;100)
If($vsTempVar="Non")
$vsMyString:="Bonjour à tous"
```

## Tableaux

Vous désignez un tableau en écrivant simplement son nom, qui est celui que vous passez à une commande de déclaration de tableau (par exemple ARRAY LONGINT) lorsque vous créez le tableau. Les tableaux sont des variables, et comme pour les variables, il existe trois types de tableaux qui se différencient par leur portée :

- Tableaux interprocess,
- Tableaux process,
- Tableaux locaux.

### Tableaux interprocess

The name of an interprocess array is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess array name can contain up to 31 characters, not including the `<>` symbols.

Exemple :

```4d
ARRAY TEXT(<>atSujets;Records in table([Topics]))
SORT ARRAY(<>asMotsClés;>)
ARRAY INTEGER(<>aiGrosTableau;10000)
```

### Tableaux process

You designate a process array by using its name (which cannot start with the `<>` symbols nor the dollar sign $). Ce nom peut contenir jusqu’à 31 caractères.

Exemple :

```4d
ARRAY TEXT(atSujets;Records in table([Topics]))
 SORT ARRAY(asMotsClés;>)
 ARRAY INTEGER(aiGrosTableau;10000)
```

### Tableaux locaux

Un tableau est déclaré local lorsque son nom est précédé du signe dollar ($). Le nom d’un tableau local peut contenir jusqu’à 31 caractères, signe dollar non compris.

Exemple :

```4d
ARRAY TEXT($atSujets;Records in table([Topics]))
SORT ARRAY($asMotsClés;>)
ARRAY INTEGER($aiGrosTableau;10000)
```

### Eléments de tableaux

Vous désignez un élément d’un tableau local, process ou interprocess à l’aide d’accolades ({…}). L’élément référencé (l’indice) est indiqué par une expression numérique.

Exemple :

```4d  
 //Addressing an element of an interprocess array
If(<>asKeywords{1}="Stop")
<>atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}

 //Addressing an element of a process array
If(asKeywords{1}="Stop")
atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{Size of array(aiBigArray)}

 //Addressing an element of a local array
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### Eléments de tableaux à deux dimensions

You reference an element of a two-dimensional array by using the curly braces ({…}) twice.   Vous désignez un élément d’un tableau à deux dimensions à l’aide d'une double paire d’accolades ({…})   L’élément référencé (l’indice) est indiqué par deux expressions numériques dans deux paires d’accolades.

Exemple :

```4d
 //Addressing an element of a two-dimensional interprocess array
If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

 //Addressing an element of a two-dimensional process array
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

 //Addressing an element of a two-dimensional local array
If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
```

## Propriétés (attributs) d'objets

When object notation is enabled, you designate an object attribute (also called object property) by placing a point (".") between the name of the object (or attribute) and the name of the attribute. entre le nom de l'objet (ou de l'attribut) et le nom de l'attribut. Un nom d'attribut peut contenir jusqu'à 255 caractères et est sensible à la casse.

Exemple :

```4d
monObjet.monAttribut:="10"
 $valeur:=$clientObj.data.address.city
```

**Note :** Des règles supplémentaires s'appliquent aux noms des attributs d'objets (ils doivent être conformes à la spécification ECMA Script). Pour plus d'informations, reportez-vous à la section [Identificateurs des propriétés d'objets](Concepts/dt_object.md#object-property-identifiers).

## Formulaires

Vous désignez un formulaire en utilisant une expression de type chaîne alphanumérique qui représente son nom. Le nom d’un formulaire peut contenir jusqu’à 31 caractères.

Exemple :

```4d
FORM SET INPUT([Personnes];"Entrée")
FORM SET OUTPUT([Personnes];"Sortie")
 DIALOG([Stock];"Boîte de note"+String($vlStage))
```

## Objets de formulaires

Vous désignez un objet de formulaire en passant son nom sous forme de chaîne, précédée du paramètre *. Un nom d'objet peut contenir jusqu'à 255 octets.

Voici un exemple :

```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Note :** Ne confondez pas les objets de formulaire (boutons, list box, variables saisissables...) et les objets du langage 4D. Les objets du langage de 4D sont créés et manipulés via la notation objet ou des commandes dédiées.

## Méthodes

Vous désignez une méthode (procédure ou fonction utilisateur) en saisissant son nom. Ce nom peut contenir jusqu’à 31 caractères.

**Note :** Une méthode qui ne retourne pas de résultat est appelée une procédure. Une méthode qui retourne un résultat est appelée une fonction utilisateur.

Exemple :

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Conseil :** Nous vous recommandons d'adopter, pour nommer vos méthodes, la même convention que celle utilisée dans le langage de 4D. écrivez les noms de vos procédures en caractères majuscules, et vos fonctions en minuscules avec la première lettre en majuscule. Ainsi, lorsque vous rouvrirez une base au bout de plusieurs mois, vous identifierez immédiatement si une méthode retourne ou non un résultat, en regardant son nom dans la fenêtre de l'Explorateur.

**Note :** Lorsque vous souhaitez appeler une méthode, vous saisissez simplement son nom. Toutefois, certaines commandes intégrées telles que `APPELER SUR EVENEMENT`, ainsi que les commandes des plug-ins, nécessitent que vous passiez le nom d'une méthode en tant que chaîne lorsqu'un paramètre de type méthode est requis. Voici un exemple :

Exemple :

```4d
 //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
 //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

Les méthodes peuvent accepter des paramètres (ou arguments). Les paramètres sont passés à la méthode entre parenthèses, à la suite du nom de la méthode. Chaque paramètre est séparé par des points virgule (;). Les paramètres sont passés à la méthode appelée en tant que variables locales numérotées séquentiellement : $1, $2,…, $n. The parameters are passed to the method in parentheses, following the name of the method.

A l’intérieur d'une fonction, la variable locale $0 contient la valeur à retourner.

Exemple :

```4d
 //Within DROP SPACES $1 is a pointer to the field [People]Name
DROP SPACES(->[People]Name)

 //Within Calc creator:
 //- $1 is numeric and equal to 1
 //- $2 is numeric and equal to 5
 //- $3 is text or string and equal to "Nice"
 //- The result value is assigned to $0
$vsResult:=Calc creator(1;5;"Nice")

 //Within Dump:
 //- The three parameters are text or string
 //- They can be addressed as $1, $2 or $3
 //- They can also be addressed as, for instance, ${$vlParam} where $vlParam is 1, 2 or 3
 //- The result value is assigned to $0
vtClone:=Dump("is";"the";"it")
```

## Commandes de plug-ins

Vous désignez une commande de plug-in en écrivant son nom tel qu'il est défini dans le plug-in. Le nom d'une commande de plug-in peut contenir jusqu'à 31 caractères.

Exemple :

```4d
$erreur:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Ensembles

Dans 4D, il existe deux types d'ensembles qui se distinguent par leur portée :

- Ensembles interprocess
- Ensembles process

On peut également distinguer un troisième type d'ensemble, spécifique à 4D Server :

- Ensembles clients

### Ensembles interprocess

A set is an interprocess set if the name of the set is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess set name can contain up to 255 characters, not including the `<>` symbols.

### Ensembles process

You denote a process set by using a string expression that represents its name (which cannot start with the `<>` symbols or the dollar sign $). Le nom d’un ensemble process peut comporter jusqu’à 255 caractères.

### Ensembles clients

Le nom d'un ensemble client doit être précédé du symbole dollar ($). Ce nom peut comporter jusqu'à 255 caractères, symbole dollar non compris.

**Note :** Les ensembles sont gérés par le serveur. Dans certains cas, pour des raisons particulières ou d'optimisation, vous pourrez avoir besoin d'utiliser des ensembles localement, sur les postes clients. Pour cela, il vous suffit de créer des ensembles clients.

Exemple :

```4d
 //Interprocess sets
USE SET("<>Deleted Records")
CREATE SET([Customers];"<>Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
 //Process sets
USE SET("Deleted Records")
CREATE SET([Customers];"Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
 //Client sets
USE SET("$Deleted Records")
CREATE SET([Customers];"$Customer Orders")
If(Records in set("$Selection"+String($i))>0)
```

## Sélections temporaires

Dans 4D, il existe deux types de sélections temporaires, qui se distinguent par leur portée :

- Sélections temporaires interprocess
- Sélections temporaires process.

### Sélections temporaires interprocess

A named selection is an interprocess named selection if its name is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess named selection name can contain up to 255 characters, not including the `<>` symbols.

### Sélections temporaires process

You denote a process named selection by using a string expression that represents its name (which cannot start with the `<>` symbols nor the dollar sign $). Le nom d’une sélection temporaire process peut comporter jusqu’à 255 caractères.

Exemple :

```4d
 //Interprocess Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
 //Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
```

## Process

En mode mono-utilisateur, ou sur le poste client en mode client/serveur, il existe deux types de process :

- Process globaux
- Process locaux.

### Process globaux

Vous déclarez un process global en passant une expression de type chaîne de caractères qui représente son nom (qui ne doit pas commencer par le symbole $). Le nom d’un process peut comporter jusqu’à 255 caractères.

### Process locaux

Vous déclarez un process local lorsque son nom est précédé du symbole dollar ($). Le nom d’un process peut comporter jusqu’à 255 caractères, symbole dollar non compris.

Exemple :

```4d
 //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```

## Résumé des conventions d'écriture dans 4D

Le tableau suivant résume les principes de nommage des identifiants dans les méthodes.

| Identifiant                       | Longueur Longueur max. | Exemple                            |
| --------------------------------- | ---------------------- | ---------------------------------- |
| Table                             | 31                     | [Factures]                         |
| Champ                             | 31                     | [Employés]Nom                      |
| Variable/Tableau interprocess     | `<>` + 31        | `<>vlNextProcessID`          |
| Variable/Tableau process          | 31                     | vsNomCourant                       |
| Variable/Tableau local(e)         | $ + 31                 | $vlCompteurLocal                   |
| Propriétés d'objets               | 255                    | $o.monAttribut                     |
| Formulaire                        | 31                     | "Formulaire Web perso"             |
| Objet de formulaire               | 255                    | "MonBouton"                        |
| Méthode                           | 31                     | M_AJOUTER_CLIENTS                |
| Commande de plug-in               | 31                     | WR INSERER TEXTE                   |
| Ensemble interprocess             | `<>` + 255       | `"<>Records to be Archived"` |
| Ensemble process                  | 255                    | "Enregistrements actuels"          |
| Ensemble client                   | $ + 255                | "$Sujets précédents"               |
| Sélection temporaire              | 255                    | "Employés de A à Z"                |
| Sélection temporaire interprocess | `<>` + 255       | `"<>Employees Z to A"`       |
| Process local                     | $ + 255                | "$SuivreEvénements"                |
| Process global                    | 255                    | "*P_MODULE_FACTURES*"            |
| Sémaphore                         | 255                    | "monsémaphore"                     |

**Note :** En cas d'utilisation de caractères non romans dans les noms des identifiants, leur taille maximum peut être inférieure.

## Résoudre les conflits de noms

Veillez à utiliser des noms uniques pour les différents éléments de votre base. Si un identifiant d’un certain type a le même nom qu’un autre identifiant d’un autre type (par exemple, si un champ est baptisé Personnes et qu’une variable est également nommée Personnes), 4D utilise un système de priorité.

4D identifie les noms utilisés dans les méthodes en fonction de l’ordre de priorité suivant :

1. Champs
2. Commandes
3. Methods
4. Commandes de plug-in
5. Constantes prédéfinies
6. Variables.

Par exemple, 4D dispose d’une fonction interne appelée `Date`. Si vous appelez *Date* une de vos méthodes, 4D considérera `Date` comme étant la fonction interne et non votre méthode. Vous ne pourrez pas appeler votre méthode. En revanche, si vous nommez un champ “Date”, 4D considérera que vous souhaitez appeler votre champ et non la fonction intégrée.
