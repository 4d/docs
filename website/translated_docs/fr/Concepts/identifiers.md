---
id: identifiers
title: Identifiants
---

Cette section détaille les règles d'écriture et de nommage appliquées aux divers identifiants utilisés dans le langage de 4D (variables, tableaux, objets, formulaires, etc.).


## Règles de base

Les règles suivantes s'appliquent à toutes les structures de 4D.

- A name must begin with an alphabetic character, an underscore, or a dollar ("$") (note that a dollar sign can denote a local element, see below).
- Le nom peut ensuite contenir des caractères alphabétiques, des caractères numériques, des espaces et des tirets bas (_).
- Les points (".") Les points (".") et les crochets ("[ ]") sont interdits dans les noms de tables, champs, méthodes ou variables.
- Les virgules, barres de fraction, guillemets et deux points (:) sont interdits.
- Les caractères réservés car utilisés comme opérateurs, comme l’astérisque (*) ou le +, sont interdits.
- Les noms réservés, c'est-à-dire les noms de commandes 4D (`Date`, `Time`, etc), les mots-clés (If, For, etc.) et les constantes.
- 4D ignore les espaces superflus.

### Règles supplémentaires pour les propriétés d'objet et les noms ORDA

- Les espaces sont interdits.
- Les points (".") Les points (".") et les crochets ("[ ]") sont interdits.
- Les noms sont sensibles à la casse.

### Règles supplémentaires pour SQL

- Seuls les caractères _0123456789abcdefghijklmnopqrstuvwxyz sont acceptés
- Les noms ne doivent pas comporter de mot-clé SQL (commande, attribut, etc.).

**Note :** La zone "SQL" de l'inspecteur de l'éditeur de Structure signale automatiquement les caractères non autorisés dans un nom de table ou de champ.




## Tableaux

Vous désignez un tableau en écrivant simplement son nom, qui est celui que vous passez à une commande de déclaration de tableau (par exemple ARRAY LONGINT) lorsque vous créez le tableau. Arrays are variables, and like variables, the name of an array can be up to 31 characters, not including the scope symbols, and there are three different types of arrays:

- The name of a **local** array is preceded by the dollar sign ($).
- The name of a **process** array cannot start with the <> symbols nor the dollar sign $).
- The name of an **interprocess** array is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

Voici quelques exemples :
```4d
ARRAY TEXT($atSubjects;Records in table([Topics])) //local array
SORT ARRAY(asKeywords;>) //process array
ARRAY BOOLEAN(<>settings;Records in table([MySettings])) //interprocess array
```


### Eléments de tableaux
Vous désignez un élément d’un tableau local, process ou interprocess à l’aide d’accolades ({…}). L’élément référencé (l’indice) est indiqué par une expression numérique.

Voici quelques exemples :
```4d   
    //Addressing an element of a local array
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### Eléments de tableaux à deux dimensions
Vous désignez un élément d’un tableau à deux dimensions à l’aide d'une double paire d’accolades ({…})   Vous désignez un élément d’un tableau à deux dimensions à l’aide d'une double paire d’accolades ({…})   L’élément référencé (l’indice) est indiqué par deux expressions numériques dans deux paires d’accolades.

Voici quelques exemples :
```4d
    //Addressing an element of a two-dimensional process array
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}
```

## Champs

Vous désignez un champ en spécifiant d’abord la table à laquelle il appartient. Le nom du champ se place immédiatement derrière celui de la table. Un nom de champ peut contenir jusqu’à 31 caractères.

Voici quelques exemples :
```4d
[Commandes]Total:=Sum([Ligne]Montant)
 QUERY([Clients];[Clients]Nom="Dupont")
 [Lettres]Text:=Capitalize text([Lettres]Texte)
```

## Objets de formulaires

Vous désignez un objet de formulaire en passant son nom sous forme de chaîne, précédée du paramètre *. Un nom d'objet peut contenir jusqu'à 255 octets.

Exemple :
```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Note :** Ne confondez pas les objets de formulaire (boutons, list box, variables saisissables...) et les objets du langage 4D. Les objets du langage de 4D sont créés et manipulés via la notation objet ou des commandes dédiées.

## Formulaires

Vous désignez un formulaire en utilisant une expression de type chaîne alphanumérique qui représente son nom. Le nom d’un formulaire peut contenir jusqu’à 31 caractères.

Voici quelques exemples :
```4d
FORM SET INPUT([Personnes];"Entrée")
FORM SET OUTPUT([Personnes];"Sortie")
 DIALOG([Stock];"Boîte de note"+String($vlStage))
```

## Sélections temporaires

A named selection name can contain up to 255 characters, not including scope character(s).

- You denote a **process** named selection by using a string expression that represents its name (which cannot start with the <> symbols nor the dollar sign $).
- You denote an **interprocess** named selection if its name is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

Voici quelques exemples :
```4d
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
```


## Propriétés (attributs) d'objets

You designate an object attribute (also called object property) by placing a point (".") between the name of the object and the name of the attribute. Un nom d'attribut peut contenir jusqu'à 255 caractères et est sensible à la casse.

Voici quelques exemples :
```4d
monObjet.monAttribut:="10"
 $valeur:=$clientObj.data.address.city
```

**Note :** Des règles supplémentaires s'appliquent aux noms des attributs d'objets (ils doivent être conformes à la spécification ECMA Script). For more information, see \[additional rules above\](#additional-rules-for-object-property-and-ORDA names) and [Object property identifiers](Concepts/dt_object.md#object-property-identifiers).


## Commandes de plug-ins

Vous désignez une commande de plug-in en écrivant son nom tel qu'il est défini dans le plug-in. Le nom d'une commande de plug-in peut contenir jusqu'à 31 caractères.

Voici quelques exemples :
```4d
$erreur:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Process

A process name can contain up to 255 characters, not including scope character.

In the single-user version, or in Client/Server on the Client side, there are two process scopes: **global** or **local**.

- You denote a **global** process by using a string expression that represents its name (which cannot start with the dollar sign $).
- You denote a **local** process if the name of the process is preceded by a dollar ($) sign.

Voici quelques exemples :
```4d
    // Lancer le process global "Ajouter Clients"
 $vlProcessID:=New process("P_AJOUT_CLIENTS";48*1024;"Ajouter Clients")
  // Lancer le process local "$Suivre Souris"
 $vlProcessID:=New process("P_SUIVRE_SOURIS";16*1024;"$Suivre Souris")
```


## Méthodes

Vous désignez une méthode (procédure ou fonction utilisateur) en saisissant son nom. Ce nom peut contenir jusqu’à 31 caractères.

**Note :** Une méthode qui ne retourne pas de résultat est appelée une procédure. Une méthode qui retourne un résultat est appelée une fonction utilisateur.

Voici quelques exemples :
```4d
If(Nouveau client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employés];AUGMENTER SALARIES)
```

**Conseil :** Nous vous recommandons d'adopter, pour nommer vos méthodes, la même convention que celle utilisée dans le langage de 4D : écrivez les noms de vos procédures en caractères majuscules, et vos fonctions en minuscules avec la première lettre en majuscule. écrivez les noms de vos procédures en caractères majuscules, et vos fonctions en minuscules avec la première lettre en majuscule. By doing so, when you reopen a project for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window.

**Note :** Lorsque vous souhaitez appeler une méthode, vous saisissez simplement son nom. Toutefois, certaines commandes intégrées telles que `APPELER SUR EVENEMENT`, ainsi que les commandes des plug-ins, nécessitent que vous passiez le nom d'une méthode en tant que chaîne lorsqu'un paramètre de type méthode est requis. Voici quelques exemples :
```4d
    // Cette commande attend une méthode (fonction) ou une formule
 QUERY BY FORMULA([aTable];Recherche Spéciale)
  // Cette commande attend une méthode (procédure) ou une formule
 APPLY TO SELECTION([Employés];AUGMENTER SALARIES)
  // Mais cette commande attend un nom de méthode
ON EVENT CALL("GERER EVENEMENTS")
```

Les méthodes peuvent accepter des paramètres (ou arguments). Les paramètres sont passés à la méthode entre parenthèses, à la suite du nom de la méthode. Chaque paramètre est séparé par des points virgule (;). Les paramètres sont passés à la méthode appelée en tant que variables locales numérotées séquentiellement : $1, $2,…, $n. De plus, plusieurs paramètres consécutifs (s'ils sont les derniers) peuvent être adressés à l'aide de la syntaxe ${n}où n, expression numérique, est le numéro du paramètre.

A l’intérieur d'une fonction, la variable locale $0 contient la valeur à retourner.

Voici quelques exemples :
```4d
    // Dans DROP SPACES, $1 est pointeur sur le champ [Personnes]Nom
 DROP SPACES(->[Personnes]Nom)

  // Dans Créateur tableau :
  // - $1 est un numérique qui vaut 1
  // - $2 est un numérique qui vaut 5
  // - $3 est un texte ou un alpha qui vaut "Super"
  // - La valeur résultante est assignée à $0
 $vsRésultat:=Calc creator(1;5;"Super")

  // Dans Poubelle :
  // - Les trois paramètres sont de type Texte ou Alpha
  // - Vous pouvez y accéder par $1, $2 ou $3
  // - Vous pouvez y accéder en écrivant, par exemple, ${$vlParam} où $vlParam vaut 1, 2 ou 3
  // - La valeur résultante est assignée à $0
 vtClone:=Dump("est";"le";"il")
```

## Ensembles

A set name can contain up to 255 characters, not including scope character()s).

- You denote a **process** set by using a string expression that represents its name (which cannot start with the <> symbols or the dollar sign $).
- You denote an **interprocess** set if the name of the set is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.
- On 4D Server, the name of a **client** set is preceded by the dollar sign ($). Ce nom peut comporter jusqu'à 255 caractères, symbole dollar non compris.

> Sets are maintained on the Server machine. Dans certains cas, pour des raisons particulières ou d'optimisation, vous pourrez avoir besoin d'utiliser des ensembles localement, sur les postes clients. To do so, you use client sets.

Voici quelques exemples :
```4d
CREATE SET([Customers];"Customer Orders")//Process set
USE SET("<>Deleted Records") //Interprocess set
If(Records in set("$Selection"+String($i))>0) //Client set
```




## Tables

Vous désignez une table en plaçant son nom entre crochets : [...]. Un nom de table peut contenir jusqu’à 31 caractères.

Voici quelques exemples :
```4d
DEFAULT TABLE([Commandes])
FORM SET INPUT([Clients];"Entrée")
ADD RECORD([Lettres])
```

## Variables

The name of a variable can be up to 31 characters, not including the scope symbols.

- You designate a **local** variable by placing a dollar sign ($) before the variable name.
- You designate a **process** variable by using its name (which cannot start with the <> symbols nor the dollar sign $)
- You designate an **interprocess** variable by preceding the name of the variable with the symbols (<>) — a “less than” sign followed by a “greater than” sign.

Voici quelques exemples :

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
If(bValidate=1) //process variable
<>vlProcessID:=Current process //interprocess variable
```



## Summary of Identifiers

Le tableau suivant résume les principes de nommage des identifiants dans les méthodes.

| Identifiant                       | Longueur Longueur max. | Exemple                        |
| --------------------------------- | ---------------------- | ------------------------------ |
| Table                             | 31                     | [Factures]                     |
| Champ                             | 31                     | [Employés]Nom                  |
| Variable/Tableau interprocess     | <> + 31                | <>vlProcessSuivantID           |
| Variable/Tableau process          | 31                     | vsNomCourant                   |
| Variable/Tableau local(e)         | $ + 31                 | $vlCompteurLocal               |
| Propriétés d'objets               | 255                    | $o.monAttribut                 |
| Formulaire                        | 31                     | "Formulaire Web perso"         |
| Objet de formulaire               | 255                    | "MonBouton"                    |
| Méthode                           | 31                     | M_AJOUTER_CLIENTS            |
| Commande de plug-in               | 31                     | WR INSERER TEXTE               |
| Ensemble interprocess             | <> + 255               | "<>Enregistrements à archiver" |
| Ensemble process                  | 255                    | "Enregistrements actuels"      |
| Ensemble client                   | $ + 255                | "$Sujets précédents"           |
| Sélection temporaire              | 255                    | "Employés de A à Z"            |
| Sélection temporaire interprocess | <> + 255               | "<>Employés de Z à A"          |
| Process local                     | $ + 255                | "$SuivreEvénements"            |
| Process global                    | 255                    | "*P_MODULE_FACTURES*"        |
| Sémaphore                         | 255                    | "monsémaphore"                 |

**Note :** En cas d'utilisation de caractères non romans dans les noms des identifiants, leur taille maximum peut être inférieure.

## Résoudre les conflits de noms

Be sure to use unique names for the different elements in your project. If a particular element has the same name as another element of a different type (for example, if a field is named Person and a variable is also named Person), 4D uses a priority system.

4D identifie les noms utilisés dans les méthodes en fonction de l’ordre de priorité suivant :

1. Champs
2. Commandes
3. Méthodes
4. Commandes de plug-in
5. Constantes prédéfinies
6. Variables.

Par exemple, 4D dispose d’une fonction interne appelée `Date`. Si vous appelez *Date* une de vos méthodes, 4D considérera `Date` comme étant la fonction interne et non votre méthode. Vous ne pourrez pas appeler votre méthode. En revanche, si vous nommez un champ “Date”, 4D considérera que vous souhaitez appeler votre champ et non la fonction intégrée.
