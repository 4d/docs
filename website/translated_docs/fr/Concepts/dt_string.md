---
id: string
title: Chaine
---

Chaîne est un terme générique utilisé pour :

- Les variables ou champs de type Texte : un champ, une variable ou une expression de type Texte peut contenir de 0 à 2 Go de texte.
- Les variables ou champs de type alphanumérique : un champ alphanumérique peut contenir de 0 à 255 caractères (la limite est fixée lors de la définition du champ).

## Constantes littérales de type chaîne

Une constante littérale de type chaîne est incluse entre des guillemets droits ("…"). En voici quelques exemples :

```4d
"Ajouter Enregistrements"
"Aucun enregistrement trouvé."
"Facture"
```

Une chaîne vide est spécifiée par la succession de deux guillemets ("").

### Séquences d’échappement
Les séquences d’échappement suivantes peuvent être utilisées dans les chaînes :

| Séquence d’échappement | Caractère remplacé          |
| ---------------------- | --------------------------- |
| \n                    | LF (Retour ligne)           |
| \t                    | HT (Tabulation)             |
| \r                    | CR (Retour chariot)         |
| \\\                 | \ (Barre oblique inversée) |
| \\"                  | " (Guillemets)              |

**Note:** Le caractère \ est utilisé comme séparateur dans les chemins d’accès sous Windows. Vous devez donc saisir un double \\ lorsque vous souhaitez insérer une barre oblique inversée devant un caractère utilisé dans une des séquences d’échappement reconnues par 4D (ex : “C:\\MesDocuments\\Nouveaux.txt”).

## Opérateurs sur les chaînes

| Opération           | Syntaxe          | Retourne | Expression              | Valeur   |
| ------------------- | ---------------- | -------- | ----------------------- | -------- |
| Concaténation       | Chaîne + Chaîne  | Chaine   | "abc" + "def"           | "abcdef" |
| Répétition          | Chaîne * Nombre  | Chaine   | "ab" * 3                | "ababab" |
| Egalité             | Chaîne = Chaîne  | Booléen  | "abc" = "abc"           | Vrai     |
|                     |                  |          | "abc" = "abd"           | Faux     |
| Inégalité           | Chaîne # Chaîne  | Booléen  | "abc" # "abd"           | Vrai     |
|                     |                  |          | "abc" # "abc"           | Faux     |
| Supérieur à         | Chaîne > Chaîne  | Booléen  | "abd" > "abc"           | Vrai     |
|                     |                  |          | "abc" > "abc"           | Faux     |
| Inférieur à         | Chaîne < Chaîne  | Booléen  | "abc" < "abd"           | Vrai     |
|                     |                  |          | "abc" < "abc"           | Faux     |
| Supérieur ou égal à | Chaîne >= Chaîne | Booléen  | "abd" >= "abc"          | Vrai     |
|                     |                  |          | "abc" >= "abd"          | Faux     |
| Inférieur ou égal à | Chaîne <= Chaîne | Booléen  | "abc" <= "abd"          | Vrai     |
|                     |                  |          | "abd" <= "abc"          | Faux     |
| Contient mot-clé    | Chaîne % Chaîne  | Booléen  | "Alpha Bravo" % "Bravo" | Vrai     |
|                     |                  |          | "Alpha Bravo" % "ravo"  | Faux     |
|                     | Image % Chaîne   | Booléen  | Expr_image % "Mer"      | True (*) |

(*) Si le mot-clé "Mer" a été associé à l'image stockée dans l'expression image (champ ou variable).

## Comparaisons de chaînes

- Les chaînes sont toujours comparées caractère par caractère (hormis en cas de recherche par [mot-clé](dt_string.md#keywords), cf. ci-dessous).
- Lors d'une comparaison de chaînes, 4D ne tient pas compte de la casse des caractères ; par exemple, "a"="A" retourne `VRAI`. Pour savoir si des caractères sont en majuscules ou en minuscules, vous devez comparer leurs codes de caractères. Par exemple, l'expression suivante retourne `FAUX` :

```4d
Code de caractere("A")=Code de caractere("a") // 65 n'est pas égal à 97
```
- Lors d'une comparaison de chaînes, les caractères diacritiques sont comparés à l'aide de la table de comparaison des caractères de votre machine. Par exemple, les expressions suivantes retournent `VRAI` :

```4d
     "n"="ñ"
     "n"="Ñ"
     "A"="å"
      // etc
```

**Note :** Les comparaisons de chaîne tiennent compte des spécificités du langage **défini pour le fichier de données 4D** (qui n'est pas toujours identique au langage défini pour le système).

### Le joker (@)

Le langage 4D prend en charge **@** en tant que joker. Ce caractère peut être utilisé dans toute comparaison de chaînes. Ainsi, par exemple, l'expression suivante est évaluée à `TRUE` :

```4d
"abcdefghij"="abc@"
```

Le joker doit être utilisé dans le second opérande (la chaîne qui se trouve à droite de l'opérateur). L'expression suivante est évaluée à `FAUX` car le joker est alors considéré en tant que caractère :

```4d
    "abc@"="abcdefghij"
```

Le joker signifie “un ou plusieurs caractères sinon rien”. Les expressions suivantes sont évaluées à `VRAI` :

```4d
     "abcdefghij"="abcdefghij@"
     "abcdefghij"="@abcdefghij"
     "abcdefghij"="abcd@efghij"
     "abcdefghij"="@abcdefghij@"
     "abcdefghij"="@abcde@fghij@"
```

En revanche, dans tous les cas, lorsque deux jokers consécutifs sont placés dans une comparaison de chaînes, celle-ci sera évaluée à `FAUX`. L'expression suivante est à `FAUX` :

```4d
"abcdefghij"="abc@@fg"
```

Lorsque l'opérateur de comparaison est ou contient un symbole < ou >, seule la comparaison avec un seul joker situé en fin d'opérande est prise en charge :

```4d
     "abcd"<="abc@" //Comparaison valide
 "abcd"<="abc@ef" //Comparaison non valide
```

Si vous souhaitez effectuer des comparaisons ou des recherches utilisant @ en tant que caractère (et non en tant que joker), vous devez utiliser l'instruction `Code de caractere(Arobase)`. Imaginons par exemple que vous souhaitiez savoir si une chaîne se termine par le caractère @. L’expression suivante (si $vaValeur n'est pas vide) retourne toujours `VRAI` :

```4d
($vaValeur[[Longueur($vaValeur)]]="@")
```

L'expression suivante sera correctement évaluée :

```4d
(Code de caractere($vaValeur[[Longueur($vaValeur)]])#64)  
```
**Note :** Une option 4D du mode Développement vous permet de paramétrer le mode d’interprétation du caractère @ lorsque celui-ci est inclus dans une chaîne de caractères.

### Mots-clés

A la différence des autres comparaisons de chaîne, les recherches par mots-clés recherchent des “mots” dans des “textes” : les mots sont évalués individuellement et dans leur globalité. L’opérateur **%** retournera toujours `Faux` si la recherche porte sur plusieurs mots ou une partie de mot (par exemple une syllabe). Les “mots” sont des chaînes de caractères encadrées par des “séparateurs”, qui sont les espaces, les caractères de ponctuation et les tirets. Une apostrophe, comme dans “aujourd'hui”, est généralement considérée comme partie du mot, mais sera ignorée dans certains cas (cf. règles ci-dessous). Les nombres peuvent être recherchés car ils sont évalués dans leur ensemble (incluant les symboles décimaux). Les autres symboles (monnaie, température, etc.) seront ignorés.

```4d
     "Alpha Bravo Charlie"%"Bravo" // Retourne Vrai
 "Alpha Bravo Charlie"%"vo" // Retourne Faux
 "Alpha Bravo Charlie"%"Alpha Bravo" // Retourne Faux
 "Alpha,Bravo,Charlie"%"Alpha" // Retourne Vrai
 "Software and Computers"%"comput@" // Retourne Vrai
```
> **Notes :** - 4D utilise la librairie ICU pour la comparaison des chaînes (à l'aide des opérateurs <>=#) et la détection des mots-clés. Pour plus d'informations sur les règles mises en oeuvre, reportez-vous à l'adresse http://www.unicode.org/unicode/reports/tr29/#Word_Boundaries. En version japonaise, 4D utilise par défaut la librairie Mecab en lieu et place de ICU pour la détection des mots-clés.

## Symboles d'indice de chaîne
Les symboles d'indice de chaîne sont les suivants : [[...]]

Ces symboles sont utilisés pour désigner un caractère particulier dans une chaîne. Cette syntaxe vous permet de référencer un caractère dans un champ ou une variable de type Alpha ou Texte.

Lorsque les symboles d'indice de chaîne sont placés à gauche de l'opérateur d'affectation (:=), un caractère est affecté à la position référencée dans la chaîne. Par exemple, en postulant que la chaîne vsNom n'est pas une chaîne vide, le code suivant passe le premier caractère de la chaîne vsNom en majuscule :

```4d
If(vsNom#"")
    vsNom[[1]]:=Uppercase(vsNom[[1]])
End if
```

Lorsque les symboles d'indice de chaîne apparaissent dans une expression, ils retournent le caractère auquel ils font référence sous la forme d'une chaîne d'un caractère. Par exemple:

```4d
//L'exemple suivant teste si le dernier caractère de vtText est le caractère "@"
 If(vtText#"")
    If(Character code(Substring(vtText;Length(vtText);1))=At sign)
  //...
    End if
 End if

  //En utilisant la syntaxe des caractères d'indice de chaîne, vous écririez plus simplement :
 If(vtText#"")
    If(Character code(vtText[[Length(vtText)]])=At sign)
  // ...
    End if
 End if
```

### Note avancée sur la référence à des caractères invalides

Lorsque vous utilisez les symboles d'indice de chaîne, il est de votre responsabilité de vous référer à des caractères existant dans la chaîne, de la même manière que pour les éléments d'un tableau. Si, par exemple, vous référencez le 20e caractère d'une chaîne, cette chaîne doit contenir au moins 20 caractères.

- Ne pas respecter cette condition en mode interprété n'est pas signalé comme une erreur par 4D.
- Ne pas respecter cette condition en mode compilé (sans options) peut entraîner une "corruption" de la mémoire, si, par exemple, vous écrivez un caractère au-delà de la fin d'une chaîne ou d'un texte.
- Ne pas respecter cette condition en mode compilé est signalé lorsque le contrôle d'exécution est activé. Si, par exemple, vous exécutez le code suivant :

```
//Ne pas faire ça !
 vsAnyText:=""
 vsAnyText[[1]]:="A"
```

L'alerte suivante s'affichera en mode compilé :

![alt-text](assets/en/Concepts/Syntax_Error.en.png)

### Exemple


La méthode projet suivante ajoute une lettre capitale à tous les mots du texte passé en paramètre et retourne le texte modifié :

```4d
  // Méthode projet de passage en capitale
  // PasserEnCap ( Texte ) -> Texte
  // PasserEnCap ( Texte source ) -> Texte avec des lettres capitales

 $0:=$1
 $vlLen:=Length($0)
 If($vlLen>0)
    $0[[1]]:=Uppercase($0[[1]])
    For($vlChar;1;$vlLen-1)
       If(Position($0[[$vlChar]];" !&()-{}:;<>?/,.=+*")>0)
          $0[[$vlChar+1]]:=Uppercase($0[[$vlChar+1]])
       End if
    End for
 End if
```

Une fois cette méthode placée dans la base, la ligne :

```4d
ALERT(Capitalize_text("Bonjour, mon nom est Jean Bon et je me présente aux présidentielles !"))
```

affiche l'alerte suivante :

![alt-text](assets/en/Concepts/Jane_doe.en.png)
