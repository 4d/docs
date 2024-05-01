---
id: methods
title: Methods
---

Une méthode est essentiellement un morceau de code qui exécute une ou plusieurs action(s). Une méthode est composée d'instructions.

Une instruction exécute une action, et peut être simple ou complexe. Each statement usually consists of one line in the method (if necessary, it can however be [split using the `\` character](quick-tour.md#code-on-several-lines)).

La taille maximale d'une méthode est limitée à 2 Go de texte ou à 32 000 lignes de code.

## Types de méthodes

Dans le langage 4D, il existe plusieurs catégories de méthodes. La catégorie dépend de la façon dont on peut les appeler :

| Type                                                | Contexte d'appel                                                                                                               | Accepte des paramètres             | Description                                                                                                                                                                                                                                             |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Méthode**                                         | On demand, when the project method name is called (see [Calling project methods](#calling-project-methods)) | Oui                                | Peut contenir du code pour exécuter des actions personnalisées. Une fois que votre méthode projet est créée, elle devient partie intégrante du langage du projet.                                                       |
| **Object (widget) method**       | Automatique, lorsqu'un événement implique l'objet auquel la méthode est associée                                               | Non                                | Propriété d'un objet formulaire (également appelé widget)                                                                                                                                                                            |
| **Form method**                                     | Automatique, lorsqu'un événement implique le formulaire auquel la méthode est associée                                         | Non                                | Propriété d'un formulaire. Vous pouvez utiliser une méthode formulaire pour gérer les données et les objets, mais il est généralement plus simple et plus efficace d'utiliser une méthode objet dans ces cas de figure. |
| **Trigger** (aka _Table method_) | Automatique, chaque fois que vous manipulez les enregistrements d'une table (Ajouter, Supprimer, Modifier)  | Non                                | Propriété d'une table. Les triggers sont des méthodes qui permettent d'éviter les opérations "illégales" sur les enregistrements de votre base de données.                                                              |
| **Méthode base**                                    | Automatique, lorsqu'un événement se produit sur la session de travail                                                          | Oui (prédéfini) | Il existe 16 méthodes base dans 4D.                                                                                                                                                                                                     |
| **Type**                                            | [**Class functions**](classes.md#function) are called in the context of an object instance                                     | oui                                | Class functions can be built-in (_e.g._ `collection.orderBy()` or `entity.save()`), or created by the 4D developer. See [**Classes**](classes.md)                                    |

## Méthodes projet

Une méthode projet peut tenir les rôles suivants, en fonction de la manière dont elle est exécutée et utilisée :

- Sous-routine
- Objet formule
- Méthode de menu
- Méthode de gestion de process
- Méthode de gestion d’événements et d'erreurs

Vous pouvez également exécuter les méthodes projet manuellement, à des fins de test par exemple.

### Sous-routines

Une sous-routine est une méthode projet qui peut être considérée comme une méthode asservie. D’autres méthodes lui demandent d’effectuer des tâches. Une sous-routine qui retourne une valeur est appelée une fonction.

Lorsque vous créez une méthode projet, elle devient partie intégrante du langage du projet dans lequel elle a été créée. You can then call the project method from another method (project method, object method...) in the same way that you call 4D’s built-in commands. Une méthode projet utilisée de cette manière est appelée une sous-routine.

L'utilisation de sous-routines procure les avantages suivants :

- Réduction du code répétitif,
- Clarification des méthodes,
- Modification plus facile des méthodes,
- Création de code modulaire

Imaginons par exemple que vous travaillez sur un projet de clients. A mesure que vous construisez le projet, vous vous apercevez que vous répétez souvent certaines tâches, telles que la recherche d’un client et la modification de son enregistrement. Le code nécessaire à l’accomplissement de cette opération pourrait être :

```4d
  // Recherche d'un client
 QUERY BY EXAMPLE([Clients])
  // Sélection du formulaire entrée
 FORM SET INPUT([Clients];"Saisie de données")
  // Modification de l'enregistrement du client
 MODIFY RECORD([Clients])
```

Si vous n’utilisez pas de sous-routines, vous devrez écrire ce code à chaque fois que vous voudrez modifier l’enregistrement d’un client. Si cette opération est réalisée dans dix endroits différents de votre projet, vous devrez la réécrire dix fois. Grâce aux sous-routines, vous ne l’écrirez qu’une seule fois en tout. C’est le premier avantage des sous-routines : réduire la quantité de code à écrire.

If the previously described code was a method called `MODIFY_CUSTOMER`, you would execute it simply by using the name of the method in another method. Par exemple, pour modifier l’enregistrement d’un client puis l’imprimer, vous n’auriez qu’à écrire :

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

Cette possibilité simplifie énormément vos méthodes. In the example, you do not need to know how the `MODIFY_CUSTOMER` method works, just what it does. C’est le deuxième avantage que vous pouvez tirer de l’utilisation de sous-routines : la clarification de votre code. Ainsi, ces méthodes deviennent en quelque sorte des extensions du langage de 4D.

Si vous devez modifier votre mode de recherche des clients, comme dans notre exemple, il vous suffit de modifier une seule méthode, et non dix. C’est un autre avantage des sous-routines : faciliter les modifications de votre code.

Avec les sous-routines, vous rendez votre code modulaire. Cela signifie simplement que vous dissociez votre code en modules (sous-routines), chacun d’entre eux effectuant une tâche logique. Examinez le code suivant, tiré d’un projet de gestion de compte courant :

```4d
 FIND_CLEARED _CHECKS // Rechercher les chèques émis
 RECONCILE_ACCOUNT // Rapprocher le compte
PRINT_CHECK_BOOK_REPORT // Imprimer un relevé
```

Même pour quelqu’un qui ne connaît pas le projet, le code est clair. Il n’est pas nécessaire d’examiner chaque sous-routine. Elles peuvent contenir de nombreuses lignes d’instructions et effectuer des opérations complexes, mais l’important est ce qu’elles font. Nous vous conseillons de découper votre code en tâches logiques, ou modules, à chaque fois que c’est possible.

### Objet formule

You can encapsulate your project methods in **formula** objects and call them from your objects.

The `Formula` or `Formula from string` commands allow you to create native formula objects that you can encapsulate in object properties. Vous pouvez ainsi implémenter des méthodes d'objets personnalisées.

To execute a method stored in an object property, use the **()** operator after the property name. Par exemple :

```4d
//myAlert
ALERT("Hello world!")
```

Then `myAlert` can be encapsulated in any object and called:

```4d
var $o : Object
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //affiche "Hello world!"
```

La syntaxe avec des crochets est également prise en charge :

```4d
$o["custom_Alert"]() //affiche "Hello world!"
```

You can also [pass parameters](Concepts/parameters.md) to your formula when you call it by using $1, $2… just like with 4D project methods:

```4d
//méthode fullName
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

You can encapsulate `fullName` in an object:

```4d
var $o : Object
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
//équivalent à $result:=fullName("param1";"param2")
```

Combined with the `This`function, such object methods allow writing powerful generic code. Par exemple :

```4d
//méthode fullName2 
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

La méthode agit ensuite comme un nouvel attribut calculé qui peut être ajoutée aux autres attributs :

```4d
var $o : Object
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //ajout de la méthode  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```

Note that, even if it does not have parameters, an object method to be executed must be called with `()` parenthesis. Appeler uniquement la propriété retournera une nouvelle référence à la formule (elle ne sera pas exécutée) :

```4d
$o:=$f.message //retourne l'objet formule en $o
```

### Méthodes de menu

Une méthode de menu est appelée lorsque la commande de menu personnalisé à laquelle elle est associée est sélectionnée. Vous assignez la méthode à la commande de menu dans l’éditeur de menus de 4D. Lorsque l’utilisateur sélectionne la commande de menu, la méthode est exécutée. En créant des menus personnalisés qui appellent des méthodes de menu qui exécutent des actions spécifiques, vous créez des interfaces personnalisées pour vos applications de bureau.

Les commandes de menus personnalisés peuvent déclencher une ou plusieurs actions. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `ADD RECORD` command until the user cancels the data entry activity.

L’automatisation de séquences d’actions est une possibilité très puissante du langage de programmation de 4D. A l’aide des menus personnalisés, vous pouvez automatiser des séquences de tâches, vous permettez aux utilisateurs de naviguer plus facilement dans votre application.

### Méthodes de gestion de process

A **process method** is a project method that is called when a process is started. Le process existera tant que la méthode sera en cours d'exécution. Note that a menu method attached to a menu command with _Start a New Process_ property is also the process method for the newly started process.

### Méthodes de gestion d’événements et d'erreurs

An **event catching method** runs in a separate process as the process method for catching events. Généralement, pour la gestion des événements, vous pouvez laisser 4D faire le gros du travail. Par exemple, lors de la saisie de données, 4D détecte les clics souris et les touches enfoncées, puis appelle les méthodes objet et formulaire correspondantes, vous permettant ainsi de prévoir dans ces méthodes les traitements appropriés aux événements. For more information, see the description of the command `ON EVENT CALL`.

An **error catching method** is an interrupt-based project method. Elle est appelée à chaque fois qu'une erreur ou une exception se produit. For more information, see the [Error handling](error-handling.md) section.

### Execution mode

Les méthodes projet écrites dans votre application sont généralement appelées automatiquement lors de l'utilisation de l'application par des commandes de menu, des boutons, d'autres méthodes, etc. Quant aux méthodes base, elles sont exécutées en fonction d'événements spécifiques qui se produisent dans l'application.

Toutefois, à des fins de test et de débogage, 4D vous permet d'exécuter manuellement des méthodes projet et certaines méthodes base en mode Développement. Dans ce cas, il est possible d'exécuter la méthode dans un nouveau process et/ou directement en mode Debug, afin de vérifier son exécution pas à pas.

Vous pouvez exécuter les méthodes de deux manières :

- Dans la fenêtre de l'éditeur de code,
- Dans la boîte de dialogue Exécuter la méthode (méthodes projet).

#### Depuis l'éditeur de code

Each [**Code Editor**](../code-editor/write-class-method.md) window has a button that can be used to run the current method. A l'aide du menu associé à ce bouton, vous pouvez choisir le type d'exécution souhaité.

Ce bouton est uniquement actif pour les méthodes projet et pour les méthodes base suivantes :

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

For more information, see [Toolbar](../code-editor/write-class-method.md#toolbar).

#### Dans la boîte de dialogue Exécuter la méthode

When you select the **Method...** command of the **Run** menu,  displays the **Execute Method** dialog.

Cette boîte de dialogue répertorie toutes les méthodes projet de la base, y compris les méthodes projet partagées des composants. En revanche, les méthodes projet qui ont été déclarées invisibles n'apparaîtront pas.

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section.

If you check the **New Process** check box, the method you selected executes in another process. Si la méthode effectue une tâche qui prend du temps, comme l'impression d'un grand nombre d'enregistrements, vous pouvez continuer à travailler avec votre base, en ajoutant des enregistrements à une table, en créant un graphe pour afficher les données, etc. For more information about processes, refer to [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) the 4D _Language Reference_ manual.

**4D Server Notes**:

- If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call a _stored procedure_, is created on the server machine in order to execute the method. Cette option peut être utilisée pour réduire le trafic réseau et optimiser le fonctionnement de 4D Server, en particulier pour les méthodes qui appellent des données stockées sur le disque. Tous les types de méthodes peuvent être exécutés sur la machine serveur ou sur une autre machine cliente, à l'exception de celles qui modifient l'interface utilisateur. Dans ce cas, les procédures stockées sont inefficaces.
- Vous pouvez également choisir d'exécuter la méthode sur un autre poste client. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](https://doc.4d.com/4dv19/help/command/en/page648.html).

By default, the **locally** option is selected. Avec la version mono-utilisateur de 4D, c'est la seule option disponible.

## Méthode projet récursives

Des méthodes projet peuvent s'appeler les unes les autres. Par exemple :

- Une méthode A peut appeler une méthode B, qui appelle A, donc A appelle B de nouveau, etc.
- Une méthode peut s'appeler elle-même.

Cela s'appelle la récursivité. Le langage de 4D supporte pleinement la récursivité.

Examinons l'exemple suivant : Let’s say you have a `[Friends and Relatives]` table composed of this extremely simplified set of fields:

- `[Amis et parents]Nom`
- `[Amis et parents]Enfant'Nom`

Pour cet exemple, nous supposons que les valeurs des champs sont uniques (il n'existe pas deux personnes avec le même nom). A partir d'un nom, vous voulez écrire la phrase “Un de mes amis, Pierre, qui est le rejeton de Paul qui est le rejeton de Martine qui est le rejeton de Robert qui est le rejeton de Gertrude, fait cela pour gagner sa vie !” :

1. Vous pouvez procéder de la manière suivante :

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       $vtTheWholeStory:="A friend of mine, "+$vsName
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
```

2. Vous pouvez également procéder ainsi :

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

with the recursive function `Genealogy of` listed here:

```4d
  ` Genealogy of project method
  ` Genealogy of ( String ) -> Text
  ` Genealogy of ( Name ) -> Part of sentence
 
 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Note the `Genealogy of` method which calls itself.

The first way is an **iterative algorithm**. The second way is a **recursive algorithm**.

Lorsque vous implémentez du code pour traiter des cas comme celui décrit ci-dessus, vous aurez toujours le choix entre écrire des méthodes utilisant des algorithmes itératifs ou récursifs. Typiquement, la récursivité fournit un code plus concis, plus facile à lire et à maintenir, mais elle est facultative.

Dans 4D, la récursivité est typiquement utilisée pour :

- Traiter les enregistrements de tables liées les unes aux autres de la même manière que décrit dans l'exemple ci-dessus.
- Browsing documents and folders on your disk, using the commands `FOLDER LIST` and `DOCUMENT LIST`. Un dossier peut contenir des dossiers et des documents, les sous-dossiers peuvent eux-mêmes contenir des dossiers et des documents, etc.

**Important:** Recursive calls should always end at some point. In the example, the method `Genealogy of` stops calling itself when the query returns no records. Sans ce test conditionnel, la méthode s'appellerait indéfiniment et 4D pourrait au bout d'un certain temps retourner l'erreur “La pile est pleine” car le programme n'aurait plus assez de place pour "empiler" les appels (ainsi que les paramètres et les variables locales utilisés dans la méthode).
