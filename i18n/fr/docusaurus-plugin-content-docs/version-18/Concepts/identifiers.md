---
id: identifiers
title: Identifiants
---

Cette section détaille les règles d'écriture et de nommage appliquées aux divers identifiants utilisés dans le langage de 4D (variables, tableaux, objets, formulaires, etc.).

## Règles de base

Les règles suivantes s'appliquent à toutes les structures de 4D.

- Un nom doit commencer par un caractère alphabétique, un tiret bas ou un dollar ("$") (à noter que le symbole dollar peut désigner un élément local, voir ci-dessous).
- Le nom peut ensuite contenir des caractères alphabétiques, des caractères numériques, des espaces et des tirets bas (_).
- Les points (".") Les points (".") Periods (".") and brackets ("[ ]") are not allowed in table, field, method, or variable names.
- Les virgules, barres de fraction, guillemets et deux points (:) sont interdits.
- Les caractères réservés car utilisés comme opérateurs, comme l’astérisque (*) ou le +, sont interdits.
- Les noms réservés, c'est-à-dire les noms de commandes 4D (`Date`, `Time`, etc), les mots-clés (If, For, etc.) et les constantes.
- 4D ignore les espaces superflus.

### Règles supplémentaires pour les propriétés d'objet et les noms ORDA

- Les espaces sont interdits.
- Les points (".") Les points (".") Periods (".") and brackets ("[ ]") are not allowed.
- Les noms sont sensibles à la casse.

### Règles supplémentaires pour SQL

- Seuls les caractères _0123456789abcdefghijklmnopqrstuvwxyz sont acceptés
- Les noms ne doivent pas comporter de mot-clé SQL (commande, attribut, etc.).

**Note :** La zone "SQL" de l'inspecteur de l'éditeur de Structure signale automatiquement les caractères non autorisés dans un nom de table ou de champ.

## Tables

Vous désignez une table en plaçant son nom entre crochets : [...]. Un nom de table peut contenir jusqu’à 31 caractères.

Exemples :

```4d
DEFAULT TABLE([Commandes])
FORM SET INPUT([Clients];"Entrée")
ADD RECORD([Lettres])
```

## Champs

Vous désignez un champ en spécifiant d’abord la table à laquelle il appartient. Le nom du champ se place immédiatement derrière celui de la table. Un nom de champ peut contenir jusqu’à 31 caractères.

Exemples :

```4d
[Commandes]Total:=Sum([Ligne]Montant)
 QUERY([Clients];[Clients]Nom="Dupont")
 [Lettres]Text:=Capitalize text([Lettres]Texte)
```

## Variables interprocess

Vous définissez une variable interprocess en faisant précédant son nom avec les symboles (`<>`) — un signe « moins que » suivi d'un signe « plus grand que ».

Le nom d’une variable interprocess peut contenir jusqu’à 31 caractères, symbole <> non compris.

Exemples :

```4d
<>vlProcessID:=Current process
 <>vsKey:=Char(KeyCode)
If(<>vtNom#"")
```

## Variables process

Vous désignez une variable process en écrivant simplement son nom (qui ne doit pas commencer par les symboles $ ou <>). Ce nom peut contenir jusqu’à 31 caractères.

Exemples :

```4d
vrGrandTotal:=Sum([Comptes]Montant)
 If(bValider=1)
 vsNomCourant:=""
```

## Variables locales

Vous désignez une variable locale en faisant précéder son nom du symbole dollar ($). Le nom d’une variable locale peut contenir jusqu’à 31 caractères, signe dollar non compris.

Exemples :

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

Le nom d’un tableau interprocess est précédé du symbole (<>), formé des caractères “inférieur à” suivi de “supérieur à”.

Le nom d’un tableau interprocess peut contenir jusqu’à 31 caractères, symboles <> non compris.

Exemples :

```4d
ARRAY TEXT(<>atSujets;Records in table([Topics]))
SORT ARRAY(<>asMotsClés;>)
ARRAY INTEGER(<>aiGrosTableau;10000)
```

### Tableaux process

Vous désignez un tableau process en écrivant simplement son nom (qui ne doit pas commencer par les symboles $ ou <>). Ce nom peut contenir jusqu’à 31 caractères.

Exemples :

```4d
ARRAY TEXT(atSujets;Records in table([Topics]))
 SORT ARRAY(asMotsClés;>)
 ARRAY INTEGER(aiGrosTableau;10000)
```

### Tableaux locaux

Un tableau est déclaré local lorsque son nom est précédé du signe dollar ($). Le nom d’un tableau local peut contenir jusqu’à 31 caractères, signe dollar non compris.

Exemples :

```4d
ARRAY TEXT($atSujets;Records in table([Topics]))
SORT ARRAY($asMotsClés;>)
ARRAY INTEGER($aiGrosTableau;10000)
```

### Eléments de tableaux

Vous désignez un élément d’un tableau local, process ou interprocess à l’aide d’accolades ({…}). L’élément référencé (l’indice) est indiqué par une expression numérique.

Exemples :

```4d  
 //Adresser un élément d'un tableau interprocess
If(<>asKeywords{1}="Stop")
<>atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}

//Adresser un élément d'un tableau process
If(asKeywords{1}="Stop")
atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{Size of array(aiBigArray)}

//Adresser un élément d'un tableau local
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### Eléments de tableaux à deux dimensions

Vous désignez un élément d’un tableau à deux dimensions à l’aide d'une double paire d’accolades ({…})   L'élément référencé est décrit par deux expressions numériques dans deux ensembles d'accolades.

Exemples :

```4d
 //Adresser un élément d'un tableau interprocess à deux dimensions
If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

//Adresser un élément d'un tableau process à deux dimensions
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

//Adresser un élément d'un tableau local à deux dimensions
If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
```

## Propriétés (attributs) d'objets

Lorsque la notation objet est activée, vous désignez un attribut d'objet (également appelé propriété d'objet) en plaçant un point (".") entre le nom de l'objet (ou de l'attribut) et le nom de l'attribut. Un nom d'attribut peut contenir jusqu'à 255 caractères et est sensible à la casse.

Exemples :

```4d
monObjet.monAttribut:="10"
 $valeur:=$clientObj.data.address.city
```

**Note :** Des règles supplémentaires s'appliquent aux noms des attributs d'objets (ils doivent être conformes à la spécification ECMA Script). Pour plus d'informations, reportez-vous à la section [Identificateurs des propriétés d'objets](Concepts/dt_object.md#object-property-identifiers).

## Formulaires

Vous désignez un formulaire en utilisant une expression de type chaîne alphanumérique qui représente son nom. Le nom d’un formulaire peut contenir jusqu’à 31 caractères.

Exemples :

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

Exemples :

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Conseil :** Nous vous recommandons d'adopter, pour nommer vos méthodes, la même convention que celle utilisée dans le langage de 4D. écrivez les noms de vos procédures en caractères majuscules, et vos fonctions en minuscules avec la première lettre en majuscule. Ainsi, lorsque vous rouvrirez une base au bout de plusieurs mois, vous identifierez immédiatement si une méthode retourne ou non un résultat, en regardant son nom dans la fenêtre de l'Explorateur.

**Note :** Lorsque vous souhaitez appeler une méthode, vous saisissez simplement son nom. Toutefois, certaines commandes intégrées telles que `APPELER SUR EVENEMENT`, ainsi que les commandes des plug-ins, nécessitent que vous passiez le nom d'une méthode en tant que chaîne lorsqu'un paramètre de type méthode est requis. Voici un exemple :

Exemples :

```4d
 // Cette commande attend une méthode (fonction) ou une formule
 QUERY BY FORMULA([aTable];Special query)
  // Cette commande attend une méthode (procédure) ou une formule
 APPLY TO SELECTION([Employees];INCREASE SALARIES)
  // Mais cette commande attend un nom de méthode
ON EVENT CALL("HANDLE EVENTS")
```

Les méthodes peuvent accepter des paramètres (ou arguments). Les paramètres sont passés à la méthode entre parenthèses, à la suite du nom de la méthode. Chaque paramètre est séparé par des points virgule (;). Les paramètres sont passés à la méthode appelée en tant que variables locales numérotées séquentiellement : $1, $2,…, $n. De plus, plusieurs paramètres consécutifs (s'ils sont les derniers) peuvent être adressés à l'aide de la syntaxe ${n} où n, expression numérique, est le numéro du paramètre.

A l’intérieur d'une fonction, la variable locale $0 contient la valeur à retourner.

Exemples :

```4d
 //Dans DROP SPACES $1 est un pointeur vers le champ [People]Name
DROP SPACES(->[People]Name)

 //Dans Calc creator :
 //- $1 est un numérique et égal à 1
 //- $2 est un numérique et égal à 5
 //- $3 est un texte ou une chaîne et égal à "Nice"
 //- La valeur résultante est assignée à $0
$vsResult:=Calc creator(1;5;"Nice")

 //Dans Dump :
 //- Les trois paramètres sont des textes ou des chaînes
 //- Ils peuvent être adressés en tant que $1, $2 ou $3
 //- Ils peuvent également être adressés comme, par exemple, ${$vlParam} où $vlParam est 1, 2 ou 3
 //- La valeur résultante est assignée à $0
vtClone:=Dump("is";"the";"it")
```

## Commandes de plug-ins

Vous désignez une commande de plug-in en écrivant son nom tel qu'il est défini dans le plug-in. Le nom d'une commande de plug-in peut contenir jusqu'à 31 caractères.

Exemples :

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

Un ensemble est un ensemble temporaire interprocess si le nom de l'ensemble est précédé des caractères (`<>`) — un symbole “inférieur à” suivi de “supérieur à”.

Le nom d'un ensemble interprocess peut comporter jusqu'à 255 caractères, symbole <> non compris.

### Ensembles process

Déclarez un ensemble process en utilisant une expression de chaîne qui représente son nom (qui ne peut pas commencer par les symboles <> ou le signe dollar $). Le nom d’un ensemble process peut comporter jusqu’à 255 caractères.

### Ensembles clients

Le nom d'un ensemble client doit être précédé du symbole dollar ($). Ce nom peut comporter jusqu'à 255 caractères, symbole dollar non compris.

**Note :** Les ensembles sont gérés par le serveur. Dans certains cas, pour des raisons particulières ou d'optimisation, vous pourrez avoir besoin d'utiliser des ensembles localement, sur les postes clients. Pour cela, il vous suffit de créer des ensembles clients.

Exemples :

```4d
 // Ensembles interprocess
USE SET("<>Enregistrements supprimés")
CREATE SET([Clients];"<>Commandes clients")
 If(Records in set("<>Sélection"+Chaine($i))>0)
  // Ensembles process
  USE SET("Enregistrements supprimés")
  CREATE SET([Clients];"Commandes clients")
   If(Records in set("Sélection"+Chaine($i))>0)
  // Ensembles client
    USE SET("$Enregistrements supprimés")
  CREATE SET([Clients];"$Commandes clients")
      If(Records in set("$Sélection"+Chaine($i))>0)
```

## Sélections temporaires

Dans 4D, il existe deux types de sélections temporaires, qui se distinguent par leur portée :

- Sélections temporaires interprocess
- Sélections temporaires process.

### Sélections temporaires interprocess

Une sélection temporaire est interprocess si son nom est précédé des caractères (`<>`) — un symbole “inférieur à” suivi de “supérieur à”.

Le nom d'une sélection temporaire interprocess peut contenir jusqu’à 255 caractères, symbole `<>` non compris.

### Sélections temporaires process

Vous déclarez une sélection temporaire process en utilisant une expression chaîne qui représente son nom (qui ne peut pas commencer par les symboles `<>` ni le signe dollar $). Le nom d’une sélection temporaire process peut comporter jusqu’à 255 caractères.

Exemples :

```4d
 // Sélection temporaire interprocess
USE NAMED SELECTION([Clients];"<>ParCodePostal")
 // Sélection temporaire process
USE NAMED SELECTION([Clients];"ParCodePostal")
```

## Process

En mode mono-utilisateur, ou sur le poste client en mode client/serveur, il existe deux types de process :

- Process globaux
- Process locaux.

### Process globaux

Vous déclarez un process global en passant une expression de type chaîne de caractères qui représente son nom (qui ne doit pas commencer par le symbole $). Le nom d’un process peut comporter jusqu’à 255 caractères.

### Process locaux

Vous déclarez un process local lorsque son nom est précédé du symbole dollar ($). Le nom d’un process peut comporter jusqu’à 255 caractères, symbole dollar non compris.

Exemples :

```4d
 // Lancer le process global "Ajouter Clients"
$vlProcessID:=New process("P_AJOUT_CLIENTS";48*1024;"Ajouter Clients")
 // Lancer le process local "$Suivre Souris"
$vlProcessID:=New process("P_SUIVRE_SOURIS";16*1024;"$Suivre Souris")
```

## Résumé des conventions d'écriture dans 4D

Le tableau suivant résume les principes de nommage des identifiants dans les méthodes.

| Identifiant                       | Longueur Longueur max. | Exemple                             |
| --------------------------------- | ---------------------- | ----------------------------------- |
| Table                             | 31                     | [Factures]                          |
| Champ                             | 31                     | [Employés]Nom                       |
| Variable/Tableau interprocess     | `<>` + 31           | `<>vlProcessSuivantID`           |
| Variable/Tableau process          | 31                     | vsNomCourant                        |
| Variable/Tableau local(e)         | $ + 31                 | $vlCompteurLocal                    |
| Propriétés d'objets               | 255                    | $o.monAttribut                      |
| Formulaire                        | 31                     | "Formulaire Web perso"              |
| Objet de formulaire               | 255                    | "MonBouton"                         |
| Méthode                           | 31                     | M_AJOUTER_CLIENTS                 |
| Commande de plug-in               | 31                     | WR INSERER TEXTE                    |
| Ensemble interprocess             | `<>` + 255          | `"<>Enregistrements à archiver"` |
| Ensemble process                  | 255                    | "Enregistrements actuels"           |
| Ensemble client                   | $ + 255                | "$Sujets précédents"                |
| Sélection temporaire              | 255                    | "Employés de A à Z"                 |
| Sélection temporaire interprocess | `<>` + 255          | `"<>Employés de Z à A"`          |
| Process local                     | $ + 255                | "$SuivreEvénements"                 |
| Process global                    | 255                    | "*P_MODULE_FACTURES*"             |
| Sémaphore                         | 255                    | "monsémaphore"                      |

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
