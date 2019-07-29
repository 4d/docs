---
id: methods
title: Méthodes
---


A method is basically a piece of code that executes one or several actions. In the 4D Language, there are two categories of methods:

- **built-in methods**, which are provided by 4D or third-party developers and can be only called in your code. Built-in methods include:
    
    - Commands and functions of the 4D API, such as `ALERT` or `Current date`. 
        - Methods attached to collections or native objects, such as `collection.orderBy()` or `entity.save()`.
        - Commands from plug-ins or components, provided by 4D or third-party developers, such as `SVG_New_arc`.
    
    Built-in methods are detailed in the *4D Language reference* manual or dedicated manuals for plug-ins or components.

- **project methods**, where you can write your own code to execute any custom actions. Once a project method is created, it becomes part of the language of the database in which you create it. A project method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks). The maximum size of a project method is limited to 2 GB of text or 32,000 lines of command.

**Note:** 4D also provides specific methods that are automatically executed depending on database or form events. See [Specialized methods](#specialized-methods).

## Méthodes projet

Une méthode projet peut tenir les rôles suivants, en fonction de la manière dont elle est exécutée et utilisée :

- Sous-routine et fonction
- Method attached to object 
- Méthode de menu
- Méthode de gestion de process
- Méthode de gestion d’événements et d'erreurs

### Sous-routines et fonctions

Une sous-routine est une méthode projet qui peut être considérée comme une méthode asservie. D’autres méthodes lui demandent d’effectuer des tâches. Une sous-routine qui retourne une valeur est appelée une fonction.

Lorsque vous avez écrit une méthode projet, elle devient partie intégrante du langage de la base dans laquelle elle a été créée. Vous pouvez alors l'appeler à partir d'autres méthodes projets, ou à partir des [méthodes prédéfinies](#predefined-methods) de la même manière que vous appelez les commandes intégrées de 4D. Une méthode projet utilisée de cette manière est appelée une sous-routine.

L'utilisation de sous-routines procure les avantages suivants :

- Réduction du code répétitif,
- Clarification des méthodes,
- Modification plus facile des méthodes,
- Création de code modulaire

Imaginons par exemple que vous travaillez avec une base de clients. A mesure que vous construisez la base, vous vous apercevez que vous répétez souvent certaines tâches, telles que la recherche d’un client et la modification de son enregistrement. Le code nécessaire à l’accomplissement de cette opération pourrait être :

```code4d
  // Recherche d'un client
 CHERCHER PAR EXEMPLE([Clients])
  // Sélection du formulaire entrée
 FORM FIXER ENTREE([Clients];"Saisie de données")
  // Modification de l'enregistrement du client
 MODIFIER ENREGISTREMENT([Clients])
```

Si vous n’utilisez pas de sous-routines, vous devrez écrire ce code à chaque fois que vous voudrez modifier l’enregistrement d’un client. Si cette opération peut être réalisée dans dix endroits différents de votre base, vous devrez la réécrire dix fois. Grâce aux sous-routines, vous ne l’écrirez qu’une seule fois en tout. C’est le premier avantage des sous-routines : réduire la quantité de code à écrire.

Si le code ci-dessus était une méthode projet appelée `MODIFIER CLIENT`, vous l’exécuteriez simplement en inscrivant son nom dans une autre méthode. Par exemple, pour modifier l’enregistrement d’un client puis l’imprimer, vous n’auriez qu’à écrire :

```code4d
 MODIFIER CLIENT
 IMPRIMER SELECTION([Clients])
```

Cette possibilité simplifie énormément vos méthodes. Dans l’exemple ci-dessus, il n’est pas nécessaire de savoir comment fonctionne la méthode `MODIFIER CLIENT`, mais uniquement ce qu’elle fait. C’est le deuxième avantage que vous pouvez tirer de l’utilisation de sous-routines : la clarification de votre code. Ainsi, ces méthodes deviennent en quelque sorte des extensions du langage de 4D.

Si vous devez modifier votre mode de recherche des clients, comme dans notre exemple, il vous suffit de modifier une seule méthode, et non dix. C’est un autre avantage des sous-routines : faciliter les modifications de votre code.

Avec les sous-routines, vous rendez votre code modulaire. Cela signifie simplement que vous dissociez votre code en modules (sous-routines), chacun d’entre eux effectuant une tâche logique. Examinez le code suivant, tiré d’une base de gestion de comptes chèques :

```code4d
 CHERCHER CHEQUES EMIS // Rechercher les chèques émis
 RAPPROCHER COMPTE // Rapprocher le compte
 IMPRIMER RELEVE // Imprimer un relevé
```

Même pour quelqu’un qui ne connaît pas la base, le code est clair. Il n’est pas nécessaire d’examiner chaque sous-routine. Elles peuvent contenir de nombreuses lignes d’instructions et effectuer des opérations complexes, mais l’important est ce qu’elles font. Nous vous conseillons de découper votre code en tâches logiques, ou modules, à chaque fois que c’est possible.

### Methods attached to objects

You can encapsulate your project methods in **formula** objects and call them from your objects.

The `New formula` or `New formula from string` commands allow you to create native formula objects that you can encapsulate in object properties. It allows you to implement custom object methods.

To execute a method stored in an object property, use the **( )** operator after the property name. Par exemple:

```code4d
//myAlert
ALERT("Hello world!")
```

Then `myAlert` can be encapsulated in any object and called:

```code4d
C_OBJECT($o)
$o:=New object("custom_Alert";New formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
```

Syntax with brackets is also supported:

```code4d
$o["custom_Alert"]() //displays "Hello world!"
```

You can also [pass parameters](Concepts/parameters.md) to your formula when you call it by using $1, $2… just like with 4D project methods:

```code4d
//fullName method
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

You can encapsulate `fullName` in an object:

```code4d
C_OBJECT($o)
$o:=New object("full_name";New formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
```

Combined with the `This`function, such object methods allow writing powerful generic code. Par exemple:

```code4d
//fullName2 method
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

Then the method acts like a new, calculated attribute that can be added to other attributes:

```code4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=New formula(fullName2) //add the method  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```

Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):

```code4d
$o:=$f.message //returns the formula object in $o
```

### Méthodes de menu

Une méthode de menu est appelée lorsque la commande de menu personnalisé à laquelle elle est associée est sélectionnée. Vous assignez la méthode à la commande de menu dans l’éditeur de menus de 4D. Lorsque l’utilisateur sélectionne la commande de menu, la méthode est exécutée. Ce fonctionnement est l’un des principaux aspects de la personnalisation d’une base de données. C’est en créant des menus qui appellent des méthodes de menu que vous personnalisez votre base.

Les commandes de menus personnalisés peuvent déclencher une ou plusieurs actions. Par exemple, une commande de menu de saisie d’enregistrements peut appeler une méthode effectuant deux actions : afficher le formulaire entrée approprié et appeler la commande `AJOUTER ENREGISTREMENT` jusqu’à ce que l’utilisateur annule la saisie de nouveaux enregistrements.

L’automatisation de séquences d’actions est une possibilité très puissante du langage de programmation de 4D. A l’aide des menus personnalisés, vous pouvez automatiser des séquences de tâches, vous permettez aux utilisateurs de naviguer plus facilement dans votre base.

### Méthodes de gestion de process

Une **méthode projet** est une méthode projet appelée lorsqu’un process est démarré. Le process existera tant que la méthode sera en cours d'exécution. A noter qu'une méthode de menu associée à une commande de menu pour laquelle la propriété *Démarrer un nouveau process* est sélectionnée, est aussi la méthode de gestion de process pour le process créé.

### Méthodes de gestion d’événements et d'erreurs

Une **méthode de gestion d’événements** est une méthode dédiée à la gestion des événements, qui s'exécute dans un process différent de celui de la méthode de gestion des process. Généralement, pour la gestion des événements, vous pouvez laisser 4D faire le gros du travail. Par exemple, lors de la saisie de données, 4D détecte les clics souris et les touches enfoncées, puis appelle les méthodes objet et formulaire correspondantes, vous permettant ainsi de prévoir dans ces méthodes les traitements appropriés aux événements. Pour plus d'informations, reportez-vous à la description de la commande `APPELER SUR EVENEMENT`.

Une **méthode de gestion d’erreurs** est une méthode projet d'interruption. Elle s'exécute à l'intérieur du process dans lequel elle a été installée à chaque fois qu'une erreur se produit. Pour plus d'informations, reportez-vous à la description de la commande `APPELER SUR ERREUR`.

## Méthode projet récursives

Des méthodes projet peuvent s'appeler les unes les autres. Par exemple :

- Une méthode A peut appeler une méthode B, qui appelle A, donc A appelle B de nouveau, etc.
- Une méthode peut s'appeler elle-même.

Cela s'appelle la récursivité. Le langage de 4D supporte pleinement la récursivité.

Examinons l'exemple suivant : vous disposez d'une table `[Amis et relations]` composée de l'ensemble de champs suivant (très simplifié) :

- `[Amis et parents]Nom`
- `[Amis et parents]Enfant'Nom`

Pour cet exemple, nous supposons que les valeurs des champs sont uniques (il n'existe pas deux personnes avec le même nom). A partir d'un nom, vous voulez écrire la phrase “Un de mes amis, Pierre, qui est le rejeton de Paul qui est le rejeton de Martine qui est le rejeton de Robert qui est le rejeton de Gertrude, fait cela pour gagner sa vie !” :

1. Vous pouvez procéder de la manière suivante :

```code4d
 $vsNom:=Demander("Saisissez le nom :";"Pierre")
 Si(OK=1)
    CHERCHER([Amis et parents];[Amis et parents]Nom=$vsNom)
    Si(Enregistrements trouves([Amis et parents])>0)
       $vtHistoireComplète:="Un de mes amis, "+$vsNom
       Repeter
          CHERCHER([Amis et parents];[Amis et parents]Enfant'Nom=$vsNom)
          $vlResultRecherche:=Enregistrements trouves([Amis et parents])
          Si($vlResultRecherche>0)
             $vtHistoireComplète:=$vtHistoireComplète+" qui est le rejeton de "+[Amis et parents]Nom
             $vsNom:=[Amis et parents]Nom
          Fin de si
       Jusque($vlResultRecherche=0)
       $vtHistoireComplète:=$vtHistoireComplète+", fait cela pour gagner sa vie !"
       ALERTE($vtHistoireComplète)
    Fin de si
 Fin de si
```

2. Vous pouvez également procéder ainsi :

```code4d
 $vsNom:=Demander("Saisissez le nom :";"Pierre")
 Si(OK=1)
    CHERCHER([Amis et parents];[Amis et parents]Nom=$vsNom)
    Si(Enregistrements trouves([Amis et parents])>0)
       ALERTE("Un de mes amis, "+Généalogie de($vsNom)+", fait cela pour gagner sa vie !")
    Fin de si
 Fin de si
```

en utilisant la fonction récursive `Généalogie de` suivante :

```code4d
  // Méthode projet Généalogie de
  // Généalogie de ( Chaîne ) -> Texte
  // Généalogie de ( Nom ) -> Partie de la phrase
 
 $0:=$1
 CHERCHER([Amis et parents];[Amis et parents]Enfant'Nom=$1)
 Si(Enregistrements trouves([Amis et parents])>0)
    $0:=$0+" qui est le rejeton de "+Généalogie de([Amis et parents]Nom)
 Fin de si
```

Vous notez que la méthode `Généalogie de` s'appelle elle-même.

La première manière de procéder utilise un **algorithme itératif**. La seconde manière utilise un **algorithme récursif**.

Lorsque vous implémentez du code pour traiter des cas comme celui décrit ci-dessus, vous aurez toujours le choix entre écrire des méthodes utilisant des algorithmes itératifs ou récursifs. Typically, recursion provides more concise, readable, and maintainable code, but using it is not mandatory.

Dans 4D, la récursivité est typiquement utilisée pour :

- Traiter les enregistrements de tables liées les unes aux autres de la même manière que décrit dans l'exemple ci-dessus.
- Naviguer parmi les documents et les dossiers de votre disque à l'aide des commandes `LISTE DES DOSSIERS` et `LISTE DES DOCUMENTS`. Un dossier peut contenir des dossiers et des documents, les sous-dossiers peuvent eux-mêmes contenir des dossiers et des documents, etc.

**Important :** Les appels récursifs doivent toujours se terminer à un moment donné. Dans l'exemple ci-dessus, la méthode `Généalogie de` cesse de s'appeler elle-même lorsque la recherche ne trouve plus d'enregistrement. Sans ce test conditionnel, la méthode s'appellerait indéfiniment et 4D pourrait au bout d'un certain temps retourner l'erreur “La pile est pleine” car le programme n'aurait plus assez de place pour "empiler" les appels (ainsi que les paramètres et les variables locales utilisés dans la méthode).

## Specialized Methods

In addition to generic **project methods**, 4D supports several specific method types, that are automatically called depending on events:

| Type                             | Calling context                                                                          | Accepts parameters | Description                                                                                                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Object (widget) method**       | Automatic, when an event involves the object to which the method is attached             | No                 | Property of a form object (also called widget)                                                                                                                       |
| **Form method**                  | Automatic, when an event involves the form to which the method is attached               | No                 | Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. |
| **Trigger** (aka *Table method*) | Automatic, each time that you manipulate the records of a table (Add, Delete and Modify) | No                 | Property of a table. Triggers are methods that can prevent “illegal” operations with the records of your database.                                                   |
| **Database method**              | Automatic, when a working session event occurs                                           | Yes (predefined)   | There are 16 database methods in 4D. See XXX section                                                                                                                 |