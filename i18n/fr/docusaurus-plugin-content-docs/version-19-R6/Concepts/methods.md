---
id: methods
title: Methods
---


Une méthode est un morceau de code qui exécute une ou plusieurs actions. Une méthode est composée de plusieurs lignes d’instructions. Une ligne d’instructions effectue une action. Cette ligne d’instruction peut être simple ou complexe. Cette ligne peut être aussi longue que vous voulez (elle peut comporter jusqu’à 32 000 caractères, ce qui est normalement suffisant pour la plupart des instructions).

La taille maximale d’une méthode est limitée à 2 Go de texte ou 32 000 lignes de code.

## Types de méthodes

Dans le langage 4D, il existe plusieurs catégories de méthodes : La catégorie dépend de la façon dont elle a été appelée : La catégorie dépend de la façon dont elle a été appelée : La catégorie dépend de la façon dont elle a été appelée : La catégorie dépend de la façon dont elle a été appelée : La catégorie dépend de la façon dont elle a été appelée :

| Type                             | Contexte d'appel                                                                                                            | Accepte les paramètres | Description                                                                                                                                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Méthode**                      | À la demande, lorsque le nom de la méthode projet est appelé (voir [Appel de méthodes de projet](#calling-project-methods)) | Oui                    | Peut contenir du code pour exécuter des actions personnalisées. Une fois que votre méthode projet est créée, elle devient partie intégrante du langage du projet.                                                       |
| **Méthode objet (widget)**       | Automatique, lorsqu'un événement implique l'objet auquel la méthode est associée                                            | Non                    | Propriété d'un objet formulaire (également appelé widget)                                                                                                                                                               |
| **Méthode formulaire**           | Automatique, lorsqu'un événement implique le formulaire auquel la méthode est associée                                      | Non                    | Propriété d'un formulaire. Vous pouvez utiliser une méthode formulaire pour gérer les données et les objets, mais il est généralement plus simple et plus efficace d'utiliser une méthode objet dans ces cas de figure. |
| **Trigger** (ou *méthode table*) | Automatique, chaque fois que vous manipulez les enregistrements d'une table (Ajouter, Supprimer, Modifier)                  | Non                    | Propriété d'une table. Les triggers sont des méthodes qui peuvent éviter les opérations 'illégales' effectuées avec les enregistrements de votre base.                                                                  |
| **Méthode base**                 | Automatique, lorsqu'un événement se produit sur la session de travail                                                       | Oui (prédéfini)        | Il existe 16 méthodes base dans 4D. Voir la section Méthodes bases                                                                                                                                                      |

> Le langage 4D prend également en charge les **fonctions de classe** (Class functions), qui peuvent être appelées dans le contexte d'une instance d'objet. Les fonctions de classe peuvent être intégrées (par exemple `collection.orderBy()` ou `entity.save()`), ou [créées par le développeur 4D](classes.md#function).

## Méthodes projet

Une méthode projet peut tenir les rôles suivants, en fonction de la manière dont elle est exécutée et utilisée :

- Sous-routine
- Objet formule
- Méthode de menu
- Méthode de gestion de process
- Méthode de gestion d’événements et d'erreurs

You can also execute your project methods manually, for testing purpose for example.

### Sous-routines

Une sous-routine est une méthode projet qui peut être considérée comme une méthode asservie. D’autres méthodes lui demandent d’effectuer des tâches. Une sous-routine qui retourne une valeur est appelée une fonction.

Lorsque vous créez une méthode projet, elle devient partie intégrante du langage du prjoet dans lequel elle a été créée. Vous pouvez alors l'appeler à partir d'autres méthodes (méthode projet, méthode objet, etc.) de la même manière que vous appelez les commandes intégrées de 4D. Une méthode projet utilisée de cette manière est appelée une sous-routine.

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

Si vous n’utilisez pas de sous-routines, vous devrez écrire ce code à chaque fois que vous voudrez modifier l’enregistrement d’un client. Si vous n’utilisez pas de sous-routines, vous devrez écrire ce code à chaque fois que vous voudrez modifier l’enregistrement d’un client. Grâce aux sous-routines, vous ne l’écrirez qu’une seule fois en tout. C’est le premier avantage des sous-routines : réduire la quantité de code à écrire.

Si le code ci-dessus était une méthode projet appelée `MODIFY_CUSTOMER`, vous l’exécuteriez simplement en inscrivant son nom dans une autre méthode. Par exemple, pour modifier l’enregistrement d’un client puis l’imprimer, vous n’auriez qu’à écrire :

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

Cette possibilité simplifie énormément vos méthodes. Dans l’exemple ci-dessus, il n’est pas nécessaire de savoir comment fonctionne la méthode `MODIFY_CUSTOMER`, mais uniquement ce qu’elle fait. C’est le deuxième avantage que vous pouvez tirer de l’utilisation de sous-routines : la clarification de votre code. Ainsi, ces méthodes deviennent en quelque sorte des extensions du langage de 4D.

Si vous devez modifier votre mode de recherche des clients, comme dans notre exemple, il vous suffit de modifier une seule méthode, et non dix. C’est un autre avantage des sous-routines : faciliter les modifications de votre code.

Avec les sous-routines, vous rendez votre code modulaire. Cela signifie simplement que vous dissociez votre code en modules (sous-routines), chacun d’entre eux effectuant une tâche logique. Examinez le code suivant, tiré d’un projet de gestion de compte courant :

```4d
 FIND_CLEARED _CHECKS // Rechercher les chèques émis
 RECONCILE_ACCOUNT // Rapprocher le compte
PRINT_CHECK_BOOK_REPORT // Imprimer un relevé
```

Même pour quelqu’un qui ne connaît pas le projet, le code est clair. Il n’est pas nécessaire d’examiner chaque sous-routine. Elles peuvent contenir de nombreuses lignes d’instructions et effectuer des opérations complexes, mais l’important est ce qu’elles font. Nous vous conseillons de découper votre code en tâches logiques, ou modules, à chaque fois que c’est possible.

### Objet formule

Vous pouvez encapsuler vos méthodes projets dans les objets **formule** et les appeler à partir de vos objets.

Les commandes `Formula` ou `Formula from string` vous permettent de créer des objets formule natifs que vous pouvez encapsuler dans des propriétés d'objets. Vous pouvez ainsi implémenter des méthodes d'objets personnalisées.

Pour exécuter une méthode stockée dans une propriété d'objet, utilisez l'opérateur **( )** après le nom de la propriété.

```4d
//myAlert
ALERT("Hello world!")
```

`myAlert` peut ensuite être encapsulé dans n'importe quel objet et peut être appelé :

```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //affiche "Hello world!"
```

La syntaxe avec des crochets est également prise en charge :

```4d
$o["custom_Alert"]() //affiche "Hello world!"
```

Vous pouvez appeler votre formule en lui [passant des paramètres](Concepts/parameters.md) $1, $2, etc., tout comme pour les méthodes projet de 4D :

```4d
//méthode fullName
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

Vous pouvez encapsuler `fullName` dans un objet :

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// équivalent à $result:=fullName("param1";"param2")
```

Lorsqu'elles sont associées à la fonction `This`, ces méthodes objets vous permettent d'écrire du code générique très puissant.

```4d
//méthode fullName2 
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

La méthode agit ensuite comme un nouvel attribut calculé qui peut être ajoutée aux autres attributs :

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //ajouter la méthode  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```

A note que même si elle n'a pas de paramètres, une méthode objet devant être exécutée doit être appelée avec des parenthèses ( ). En appelant uniquement une seule propriété, une nouvelle référence à la formule sera retournée (et ne sera pas exécutée) :

```4d
$o:=$f.message //retourne l'objet formule en $o
```

### Méthodes de menu

Une méthode de menu est appelée lorsque la commande de menu personnalisé à laquelle elle est associée est sélectionnée. Vous assignez la méthode à la commande de menu dans l’éditeur de menus de 4D. Lorsque l’utilisateur sélectionne la commande de menu, la méthode est exécutée. En créant des menus personnalisés qui appellent des méthodes de menu qui exécutent des actions spécifiques, vous créez des interfaces personnalisées pour vos applications de bureau.

Les commandes de menus personnalisés peuvent déclencher une ou plusieurs actions. Par exemple, une commande de menu de saisie d’enregistrements peut appeler une méthode effectuant deux actions : afficher le formulaire entrée approprié et appeler la commande `AJOUTER ENREGISTREMENT` jusqu’à ce que l’utilisateur annule la saisie de nouveaux enregistrements.

L’automatisation de séquences d’actions est une possibilité très puissante du langage de programmation de 4D. A l’aide des menus personnalisés, vous pouvez automatiser des séquences de tâches, vous permettez aux utilisateurs de naviguer plus facilement dans votre application.

### Méthodes de gestion de process

Une **méthode projet** est une méthode projet appelée lorsqu’un process est démarré. Le process existera tant que la méthode sera en cours d'exécution. A noter qu'une méthode de menu associée à une commande de menu pour laquelle la propriété *Démarrer un nouveau process* est sélectionnée, est aussi la méthode de gestion de process pour le process créé.

### Méthodes de gestion d’événements et d'erreurs

Une **méthode de gestion d’événements** est une méthode dédiée à la gestion des événements, qui s'exécute dans un process différent de celui de la méthode de gestion des process. Généralement, pour la gestion des événements, vous pouvez laisser 4D faire le gros du travail. Par exemple, lors de la saisie de données, 4D détecte les clics souris et les touches enfoncées, puis appelle les méthodes objet et formulaire correspondantes, vous permettant ainsi de prévoir dans ces méthodes les traitements appropriés aux événements. Pour plus d'informations, reportez-vous à la description de la commande `APPELER SUR EVENEMENT`.

Une **méthode de gestion d’erreurs** est une méthode projet d'interruption. Elle s'exécute à l'intérieur du process dans lequel elle a été installée à chaque fois qu'une erreur se produit. Pour plus d'informations, reportez-vous à la description de la commande `APPELER SUR ERREUR`.

### Execution mode

Project methods written in your application are usually called automatically during the use of the application via menu commands, buttons, other methods, and so on. As for database methods, they are executed in relation to specific events that occur in the application.

However, for testing and debugging purposes, 4D lets you manually execute project methods and certain database methods in Design mode. In this case, it is possible to run the method in a new process and/or directly in Debug mode, in order to check its execution step by step.

The following execution modes are available:

- Une méthode A peut appeler une méthode B, qui appelle A, donc A appelle B de nouveau, etc.
- Une méthode peut s'appeler elle-même.

#### From the Code Editor

Each [**Code Editor**](../code-editor/overview.md) window has a button that can be used to run the current method. Using the menu associated with this button, you can choose the type of execution desired

This button is only active for project methods and for the following database methods:

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

From the [Code Editor](../code-editor/overview.md) window,

#### From the Execute Method dialog box

Dans 4D, la récursivité est typiquement utilisée pour :

This dialog box lists all the project methods of the database, including shared project methods of components. On the other hand, project methods that have been declared invisible will not appear.

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section.

If you check the **New Process** check box, the method you selected executes in another process. If the method is performing a time-consuming task such as printing a large set of records, you can continue to work with your database, adding records to a table, creating a graph to display data, and so on. For more information about processes, refer to [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) the 4D *Language Reference* manual.

To modify the properties of a project method:

- If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call the *stored procedure*, is created on the server machine in order to execute the method. This option can be used to reduce network traffic and optimize the functioning of 4D Server, in particular for methods that call data stored on the disk. All types of methods can be executed on the server machine or on another client machine, except for those that modify the user interface. In this case, stored procedures are ineffective.
- You can also choose to run the method on another client workstation. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](https://doc.4d.com/4Dv19R5/4D/19-R5/REGISTER-CLIENT.301-5830908.en.html).

By default, the **locally** option is selected. With the 4D single-user version, this is the only option available.

## Méthode projet récursives

Des méthodes projet peuvent s'appeler les unes les autres.

- Une méthode A peut appeler une méthode B, qui appelle A, donc A appelle B de nouveau, etc.
- Une méthode peut s'appeler elle-même.

Cela s'appelle la récursivité. Le langage de 4D supporte pleinement la récursivité.

Examinons l'exemple suivant : Examinons l'exemple suivant : vous disposez d'une table `[Amis et relations]` composée de l'ensemble de champs suivant (très simplifié) :

- `[Amis et parents]Nom`
- `[Amis et parents]Enfant'Nom`

Pour cet exemple, nous supposons que les valeurs des champs sont uniques (il n'existe pas deux personnes avec le même nom). A partir d'un nom, vous voulez écrire la phrase “Un de mes amis, Pierre, qui est le rejeton de Paul qui est le rejeton de Martine qui est le rejeton de Robert qui est le rejeton de Gertrude, fait cela pour gagner sa vie !” :

1. Vous pouvez procéder de la manière suivante :

```4d
 $vsName:=Request("Saisissez le nom :";"Pierre")
 Si(OK=1)
    QUERY([Amis et parents];[Amis et parents]Nom=$vsNom)
    If(Records in selection([Amis et parents])>0)
       $vtHistoireComplète:="Un de mes amis, "+$vsNom
       Repeat
          QUERY([Amis et parents];[Amis et parents]Enfant'Nom=$vsNom)
          $vlResultRecherche:=Records in selection([Amis et parents])
          If($vlResultRecherche>0)
             $vtHistoireComplète:=$vtHistoireComplète+" qui est le rejeton de "+[Amis et parents]Nom
             $vsNom:=[Amis et parents]Nom
          End if
       Until($vlResultRecherche=0)
       $vtHistoireComplète:=$vtHistoireComplète+", fait cela pour gagner sa vie !"
       ALERT($vtHistoireComplète)
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
    End if
 End if
```

en utilisant la fonction récursive `Généalogie de` suivante :

```4d
  // Méthode projet Généalogie de
  // Généalogie de ( Chaîne ) -> Texte
  // Généalogie de ( Nom ) -> Partie de la phrase

 $0:=$1
 QUERY([Amis et parents];[Amis et parents]Enfant'Nom=$1)
If(Enregistrements trouves([Amis et parents])>0)
    $0:=$0+" qui est le rejeton de "+Généalogie de([Amis et parents]Nom)
End if
```

Vous notez que la méthode `Généalogie de` s'appelle elle-même.

La première manière de procéder utilise un **algorithme itératif**. La seconde manière utilise un **algorithme récursif**.

Lorsque vous implémentez du code pour traiter des cas comme celui décrit ci-dessus, vous aurez toujours le choix entre écrire des méthodes utilisant des algorithmes itératifs ou récursifs. Typiquement, la récursivité fournit un code plus concis, plus facile à lire et à maintenir, mais elle est facultative.

Dans 4D, la récursivité est typiquement utilisée pour :

- Traiter les enregistrements de tables liées les unes aux autres de la même manière que décrit dans l'exemple ci-dessus.
- Naviguer parmi les documents et les dossiers de votre disque à l'aide des commandes `LISTE DES DOSSIERS` et `LISTE DES DOCUMENTS`. Un dossier peut contenir des dossiers et des documents, les sous-dossiers peuvent eux-mêmes contenir des dossiers et des documents, etc.

**Important :** Les appels récursifs doivent toujours se terminer à un moment donné. Dans l'exemple ci-dessus, la méthode `Généalogie de` cesse de s'appeler elle-même lorsque la recherche ne trouve plus d'enregistrement. Sans ce test conditionnel, la méthode s'appellerait indéfiniment et 4D pourrait au bout d'un certain temps retourner l'erreur “La pile est pleine” car le programme n'aurait plus assez de place pour "empiler" les appels (ainsi que les paramètres et les variables locales utilisés dans la méthode).
