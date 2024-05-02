---
id: string
title: String
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

| Séquence d’échappement                                | Caractère remplacé                     |
| ----------------------------------------------------- | -------------------------------------- |
| \n                                                    | LF (Retour ligne)   |
| \t                                                    | HT (Tabulation)     |
| \r                                                    | CR (Retour chariot) |
| \\\\|\ (Barre oblique inversée) |                                        |
| \\"                                                 | " (Guillemets)      |

**Note:** The \ (backslash) character is used as a separator in pathnames under Windows. Vous devez donc saisir un double \\ lorsque vous souhaitez insérer une barre oblique inversée devant un caractère utilisé dans une des séquences d’échappement reconnues par 4D (ex : “C:\\MesDocuments\\Nouveaux.txt”).

## Opérateurs sur les chaînes

| Opération           | Syntaxe          | Retourne | Expression                              | Valeur                       |
| ------------------- | ---------------- | -------- | --------------------------------------- | ---------------------------- |
| Concaténation       | Chaîne + Chaîne  | String   | "abc" + "def"                           | "abcdef"                     |
| Répétition          | Chaîne \* Nombre | String   | "ab" \* 3                               | "ababab"                     |
| Egalité             | Chaîne = Chaîne  | Boolean  | "abc" = "abc"                           | True                         |
|                     |                  |          | "abc" = "abd"                           | False                        |
| Inégalité           | Chaîne # Chaîne  | Boolean  | "abc" # "abd"                           | True                         |
|                     |                  |          | "abc" # "abc"                           | False                        |
| Supérieur à         | Chaîne > Chaîne  | Boolean  | "abd" > "abc"                           | True                         |
|                     |                  |          | "abc" > "abc"                           | False                        |
| Inférieur à         | Chaîne < Chaîne  | Boolean  | "abc" < "abd"                           | True                         |
|                     |                  |          | "abc" < "abc"                           | False                        |
| Supérieur ou égal à | Chaîne >= Chaîne | Boolean  | "abd" >= "abc"                          | True                         |
|                     |                  |          | "abc" >= "abd"                          | False                        |
| Inférieur ou égal à | String <= String | Boolean  | "abc" <= "abd"                          | True                         |
|                     |                  |          | "abd" <= "abc"                          | False                        |
| Contient mot-clé    | Chaîne % Chaîne  | Boolean  | "Alpha Bravo" % "Bravo"                 | True                         |
|                     |                  |          | "Alpha Bravo" % "ravo"                  | False                        |
|                     | Image % Chaîne   | Boolean  | Expr_image % "Mer" | True (\*) |

(\*) Si le mot-clé "Mer" a été associé à l'image stockée dans l'expression image (champ ou variable).

## Comparaisons de chaînes

- Strings are compared on a character-by-character basis (except in the case of searching by [keywords](dt_string.md#keywords), see below).
- When strings are compared, the case of the characters is ignored; thus, "a"="A" returns `TRUE`. Pour savoir si des caractères sont en majuscules ou en minuscules, vous devez comparer leurs codes de caractères. For example, the following expression returns `FALSE`:

```4d
Code de caractere("A")=Code de caractere("a") // 65 n'est pas égal à 97
```

- Lors d'une comparaison de chaînes, les caractères diacritiques sont comparés à l'aide de la table de comparaison des caractères de votre machine. For example, the following expressions return `TRUE`:

```4d
     "n"="ñ"
     "n"="Ñ"
     "A"="å"
      // etc
```

**Note:** String comparison takes into account specificities of the language **defined for the 4D data file** (which is not always the same as the language defined for the system).

### Le joker (@)

The 4D language supports **@** as a wildcard character. Ce caractère peut être utilisé dans toute comparaison de chaînes. For example, the following expression is `TRUE`:

```4d
"abcdefghij"="abc@"
```

Le joker doit être utilisé dans le second opérande (la chaîne qui se trouve à droite de l'opérateur). The following expression is `FALSE`, because the @ is considered only as a one character in the first operand:

```4d
    "abc@"="abcdefghij"
```

Le joker signifie “un ou plusieurs caractères sinon rien”. The following expressions are `TRUE`:

```4d
     "abcdefghij"="abcdefghij@"
     "abcdefghij"="@abcdefghij"
     "abcdefghij"="abcd@efghij"
     "abcdefghij"="@abcdefghij@"
     "abcdefghij"="@abcde@fghij@"
```

On the other hand, whatever the case, a string comparison with two consecutive wildcards will always return `FALSE`. The following expression is `FALSE`:

```4d
"abcdefghij"="abc@@fg"
```

Lorsque l'opérateur de comparaison est ou contient un symbole < ou >, seule la comparaison avec un seul joker situé en fin d'opérande est prise en charge :

```4d
     "abcd"<="abc@" // Valid comparison
     "abcd"<="abc@ef" //Not a valid comparison
```

If you want to execute comparisons or queries using @ as a character (and not as a wildcard), you need to use the `Character code(At sign)` instruction. Imaginons par exemple que vous souhaitiez savoir si une chaîne se termine par le caractère @. The following expression (if $vsValue is not empty) is always `TRUE`:

```4d
($vaValeur[[Longueur($vaValeur)]]="@")
```

L'expression suivante sera correctement évaluée :

```4d
(Code de caractere($vaValeur[[Longueur($vaValeur)]])#64)  
```

**Note:** A 4D option in the Design environment allows you to define how the @ character is interpreted when it is included in a character string.

### Mots-clés

A la différence des autres comparaisons de chaîne, les recherches par mots-clés recherchent des “mots” dans des “textes” : les mots sont évalués individuellement et dans leur globalité. The **%** operator always returns `False` if the query concerns several words or only part of a word (for example, a syllable). Les “mots” sont des chaînes de caractères encadrées par des “séparateurs”, qui sont les espaces, les caractères de ponctuation et les tirets. Une apostrophe, comme dans “aujourd'hui”, est généralement considérée comme partie du mot, mais sera ignorée dans certains cas (cf. règles ci-dessous). Les nombres peuvent être recherchés car ils sont évalués dans leur ensemble (incluant les symboles décimaux). Les autres symboles (monnaie, température, etc.) seront ignorés.

```4d
     "Alpha Bravo Charlie"%"Bravo" // Retourne Vrai
 "Alpha Bravo Charlie"%"vo" // Retourne Faux
 "Alpha Bravo Charlie"%"Alpha Bravo" // Retourne Faux
 "Alpha,Bravo,Charlie"%"Alpha" // Retourne Vrai
 "Software and Computers"%"comput@" // Retourne Vrai
```

> **Notes:**
>
> - 4D uses the ICU library for comparing strings (using `<>=#` operators) and detecting keywords. For more information about the rules implemented, please refer to the following address: http://www.unicode.org/reports/tr29/#Word_Boundaries.
> - Dans la version japonaise, au lieu de ICU, 4D utilise Mecab par défaut pour la détection des mots-clés.

## Symboles d'indice de chaîne

Les symboles d'indice de chaîne sont les suivants : [[...]]

Ces symboles sont utilisés pour désigner un caractère particulier dans une chaîne. Cette syntaxe vous permet de référencer un caractère dans un champ ou une variable de type Alpha ou Texte.

Lorsque les symboles d'indice de chaîne sont placés à gauche de l'opérateur d'affectation (:=), un caractère est affecté à la position référencée dans la chaîne. Par exemple, en postulant que la chaîne vsNom n'est pas une chaîne vide, le code suivant passe le premier caractère de la chaîne vsNom en majuscule :

```4d
If(vsNom#"")
    vsNom[[1]]:=Uppercase(vsNom[[1]])
End if
```

Lorsque les symboles d'indice de chaîne apparaissent dans une expression, ils retournent le caractère auquel ils font référence sous la forme d'une chaîne d'un caractère. Par exemple :

```4d
//The following example tests if the last character of vtText is an At sign "@"
 If(vtText#"")
    If(Character code(Substring(vtText;Length(vtText);1))=At sign)
  //...
    End if
 End if
 
  //Using the character reference syntax, you would write in a simpler manner:
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
//Very bad and nasty thing to do, boo!
 vsAnyText:=""
 vsAnyText[[1]]:="A"
```

L'alerte suivante s'affichera en mode compilé :

![alt-text](../assets/en/Concepts/Syntax_Error.en.png)

### Exemple

La méthode projet suivante ajoute une lettre capitale à tous les mots du texte passé en paramètre et retourne le texte modifié :

```4d
  //Capitalize_text project method
  //Capitalize_text ( Text ) -> Text
  //Capitalize_text ( Source text ) -> Capitalized text
 
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

![alt-text](../assets/en/Concepts/Jane_doe.en.png)
