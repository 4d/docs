---
id: interpreted-compiled
title: Modes interprété et compilé
---

Les applications 4D fonctionnent en mode **interprété** ou en mode **compilé** :

- En mode interprété, les déclarations sont lues et traduites en langage machine lorsqu'elles sont exécutées. Vous pouvez ajouter ou modifier le code là où vous le souhaitez, l'application se met à jour automatiquement.
- En mode compilé, toutes les méthodes sont lues et traduites une seule fois, lors de la compilation. Par la suite, l'application contient uniquement des instructions au niveau de l'assemblage, il n'est donc plus possible de modifier le code.

Les avantages procurés par le compilateur sont les suivants :

- **Vitesse :** votre application s'exécute de 3 à 1000 fois plus vite.
- **Vérification du code** : la cohérence interne du code de votre application est entièrement contrôlée. Les conflits de logique et de syntaxe sont détectés.
- **Protection :** une fois votre application compilée, vous pouvez en supprimer le code interprété. Alors, l'application compilée dispose des mêmes fonctionnalités que la base originale, à la différence près que la structure et les méthodes ne peuvent plus être visualisées ni modifiées délibérément ou par inadvertance.
- **Application indépendantes "double-cliquables"** : une application compilée peut également être transformée en application indépendante (sous Windows, des fichiers ".EXE") comportant sa propre icône.
- **Exécution en mode préemptif** : seul le code compilé peut être exécuté dans un process préemptif.

## Différences entre le code interprété et le code compilé
Bien que l'application fonctionnera de la même manière en modes interprété et compilé, il est important de connaitre les différences que l'on peut rencontrer pendant la saisie du code qui sera compilé. L'interpréteur de 4D est généralement plus souple que le compilateur.

| Compilé                                                                                                                                                                                                                                  | Interprété                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Vous ne devez pas avoir une méthode qui aurait le même nom qu’une variable.                                                                                                                                                              | Aucune erreur n'est générée, mais la méthode est prioritaire                         |
| Toutes les variables doivent être typées, soit via une directive de compilateur (ex : `C_ENTIER LONG`), soit via le compilateur au moment de la compilation.                                                                             | Les variables peuvent être typées à la volée (non recommandé)                        |
| Vous ne pouvez pas modifier le type d'une variable ou d'un tableau.                                                                                                                                                                      | La modification du type d'une variable ou d'un tableau est possible (non recommandé) |
| Vous ne pouvez pas convertir un tableau simple en tableau à deux dimensions, et vice-versa.                                                                                                                                              | Possible                                                                             |
| Bien que le compilateur déduise le type des variables si nécessaire, il est conseillé de déclarer le type des variables à l'aide des directives de compilation lorsque le type de données est ambigu, en particulier dans un formulaire. |                                                                                      |
| La fonction `Indefinie` retournera toujours Faux. Les variables sont toujours définies.                                                                                                                                                  |                                                                                      |
| Si vous avez coché la propriété "Peut être exécutée dans un process préemptif" pour la méthode, le code ne doit pas appeler de commandes thread-unsafe ou d'autres méthodes thread-unsafe.                                               | Les propriétés du process préemptif sont ignorées                                    |
| La commande `APPELER 4D` est nécessaire pour appeler des boucles spécifiques                                                                                                                                                             | Il est toujours possible d'interrompre 4D                                            |

## Utiliser les directives du compilateur avec l'interpréteur

Les directives de compilateur ne sont pas requises pour les applications non compilées. L'interpréteur type automatiquement chaque variable selon son utilisation dans la déclaration, et une variable peut être retypée librement dans le projet d'application.

Grâce à cet aspect flexible, il est possible qu'une application agisse différemment en modes interprété et compilé.

Par exemple, si vous écrivez :

```4d
C_ENTIER LONG(MyInt)
```

et ailleurs dans l'application, vous écrivez :
```4d
MyInt:=3.1416
```

Dans cet exemple, `MyInt` se voit assigner la même valeur (3) dans les modes interprété et compilé, étant donné que la directive du compilateur est interprétée *avant* la déclaration d'affectation.

L'interpréteur 4D utilise des directives de compilateur pour typer les variables. Lorsque l'interpréteur rencontre une directive de compilateur, il type la variable en fonction de la directive. Si une déclaration ultérieure tente d'affecter une valeur incorrecte (ex : affecter une valeur alphanumérique à une variable numérique), l'affectation n'aura pas lieu et générera une erreur.

L'ordre d'apparition des deux déclarations importe peu au compilateur, car il scanne d'abord le projet dans son intégralité pour les directives du compilateur. En revanche, l'interpréteur n'est pas systématique. Il interprète les déclarations dans leur ordre d'exécution. Cet ordre peut évidemment changer d'une session à l'autre, en fonction de ce que fait l'utilisateur. C'est pourquoi il est important de concevoir votre projet afin que vos directives de compilateur s'exécutent avant n'importe quelle déclaration contenant des variables déclarées.


## Utiliser des pointeurs pour éviter les retypages

Il n’est pas possible de retyper une variable. Il est, en revanche, tout à fait possible de faire pointer un pointeur successivement sur des variables de type différent. Par exemple, le code suivant s'applique aussi bien dans le mode interprété que dans le mode compilé :

```4d
C_POINTER($p)
C_TEXT($name)
C_LONGINT($age)

$name:="Smith"
$age:=50

$p:=->$name //texte cible pour le pointeur
$p->:="Wesson" //assigne une valeur texte

$p:=->$age  
// nouvelle cible de type différent pour le pointeur
$p->:=55 //assigne une valeur numérique
```

Imaginez une fonction qui retourne la longueur (nombre de caractères) de valeurs de tout type.

```4d
  // Calc_Length (combien de caractères)
  // $1 = pointeur vers un type de variable flexible, numérique, text, heure, booléen

C_POINTER($1)
C_TEXT($result)  
C_LONGINT($0)
$result:=String($1->)
$0:=Length($result)
```

La méthode peut alors être appelée :
```4d
$var1:="my text"
$var2:=5.3
$var3:=?10:02:24?
$var4:=True

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length(->$var3)+Calc_Length(->$var4)

ALERT("Total length: "+String($vLength))
```
