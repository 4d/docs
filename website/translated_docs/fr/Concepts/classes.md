---
id: classes
title: Classes
---


## Aperçu

Le langage 4D prend en charge le concept de **classes**. Dans un langage de programmation, l'utilisation d'une classe vous permet de définir le comportement d'un objet avec des propriétés et des fonctions associées.

Une fois qu'une classe est définie, vous pouvez **instancier** des objets de cette classe n'importe où dans votre code. Chaque objet est une instance de sa classe. Une classe peut `s'étendre` à une autre classe, puis hériter de ses fonctions.

Les modèles de classe 4D et de classe JavaScript sont similaires, et sont basés sur une chaîne de prototypes.

### L'objet classe

Une classe est un objet de classe "Class". Un objet de classe a les propriétés et méthodes suivantes :

- `name` qui doit être conforme à ECMAScript
- un objet `superclass` (facultatif, nul s'il n'y en a aucun)
- une méthode `new()` permettant d'instancier des objets de classe.

De plus, un objet de classe peut référencer :
- un objet `constructeur` (facultatif)
- un objet `prototype`, contenant des objets de fonction nommés (facultatif).

Un objet de classe est un objet partagé et est donc accessible simultanément à partir de différents processus 4D.


### Recherche et prototype des propriétés

Tous les objets de 4D sont liés en interne à un objet de classe. Lorsque 4D ne trouve pas de propriété dans un objet, il effectue un recherche dans l'objet prototype de sa classe; s'il ne la trouve pas, 4D poursuit sa recherche dans l'objet prototype de sa classe mère (superclass), et ainsi de suite jusqu'à ce qu'il n'y ait plus de superclass.

Tous les objets héritent de la classe "Object" comme classe supérieure d'arbre d'héritage.

```4d
  //Class: Polygon
Class constructor
C_LONGINT($1;$2)
This.area:=$1*$2

 //C_OBJECT($poly)
C_BOOLEAN($instance)
$poly:=cs.Polygon.new(4;3)

$instance:=OB Instance of($poly;cs.Polygon)  
 // true
$instance:=OB Instance of($poly;4D.Object)
 // true
```

Lors de l'énumération des propriétés d'un objet, son prototype de classe n'est pas énuméré. Par conséquent, l'instruction `For each` et la commande `JSON Stringify` ne retournent pas les propriétés de l'objet du prototype de classe. La propriété d'objet prototype d'une classe est une propriété cachée interne.

### Définition d'une classe

Un fichier de classe utilisateur définit un modèle d'objet qui peut être instancié dans le code de la base de données en appelant la méthode membre de la classe `new()`. Vous utiliserez généralement des [mots-clés de classe](#class-keywords) et des [commandes de classe](#class-commands) spécifiques dans le fichier de classe.

Par exemple :

```4d  
//Class: Person.4dm
Class constructor
  C_TEXT($1) // FirstName
  C_TEXT($2) // LastName
  This.firstName:=$1
  This.lastName:=$2
```

Dans une méthode, créons une "Personne" :

```
C_OBJECT($o)
$o:=cs.Person.new("John";"Doe")  
// $o: {firstName: "John";lastName: "Doe" }
```

A noter que vous pouvez créer un fichier de classe vide et instancier des objets vides. Par exemple, si vous créez le fichier de classe `Empty.4dm suivant` :

```4d  
//Fichier classe Empty.4dm
//Rien
```

Vous pouvez saisir dans une méthode :


```4d
$o:=cs.Empty.new()  
//$o : {}
$cName:=OB Class($o).name //"Empty"
```


## Class stores

Available classes are accessible from their class stores. The following class stores are available:

- a class store for built-in 4D classes. It is returned by the `4D` command.
- a class store for each opened database or component. It is returned by the `cs` command. These are "user classes".

For example, you create a new instance of an object of myClass using the `cs.myClass.new()` statement (`cs` means *classtore*).


## Gestion des classes utilisateur

### Fichiers de classe (class files)

A user class in 4D is defined by a specific method file (.4dm), stored in the `/Project/Sources/Classes/` folder. The name of the file is the class name.

For example, if you want to define a class named "Polygon", you need to create the following file:

- Dossier Project
    + Project
        * Sources
            - Classes
                + Polygon.4dm

### Noms de classe

When naming classes, you should keep in mind the following rules:

- A class name must be ECMAScript compliant.
- Class names are case sensitive.
- Giving the same name to a class and a database table is not recommended, in order to prevent any conflict.


### Interface 4D Developer

Class files are automatically stored at the appropriate location when created through the 4D Developer interface, either via the **File** menu or the Explorer.

#### File menu and toolbar

You can create a new class file for the project by selecting **New > Class...** in the 4D Developer **File** menu or from the toolbar.

You can also use the **Ctrl+Shift+Alt+k** shortcut.

#### Explorer

In the **Methods** page of the Explorer, classes are grouped in the **Classes** category.

To create a new class, you can:

- select the **Classes** category and click on the ![](assets/en/Users/PlussNew.png) button.
- select **New Class...** from the action menu at the bottom of the Explorer window, or from the contexual menu of the Classes group. ![](assets/en/Concepts/newClass.png)
- select **New > Class...** from the contexual menu of the Explorer's Home page.

#### Class code support

In the various 4D Developer windows (code editor, compiler, debugger, runtime explorer), class code is basically handled like a project method with some specificities:

- In the code editor:
    - a class cannot be run
    - a class function is a code block
    - **Goto definition** on an object member searches for class Function declarations; for example, "$o.f()" will find "Function f".
    - **Search references** on class function declaration searches for the function used as object member; for example, "Function f" will find "$o.f()".
- In the Runtime explorer and Debugger, class functions are displayed with the \<ClassName> constructor or \<ClassName>.\<FunctionName> format.


### Deleting a class

To delete an existing class, you can:

- on your disk, remove the .4dm class file from the "Classes" folder,
- in the Explorer, select the class and click ![](assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.


## Class keywords

Specific 4D keywords can be used in class definitions:

- `Function <Name>` to define member methods of the objects.
- `Class constructor` to define the properties of the objects (i.e. the prototype).
- `Class extends <ClassName>` to define inheritance.


### Fonction de classe (class function)

#### Syntaxe

```js
Fonction <name>
// code
```

Class functions are properties of the prototype object of the owner class. They are objects of the "Function" class.

In the class definition file, function declarations use the `Function` keyword, and the name of the function. The function name must be ECMAScript compliant.

Within a class function, the `This` is used as the object instance. Par exemple:

```4d  
Fonction getFullName
  C_TEXT($0)
  $0:=This.firstName+" "+Uppercase(This.lastName)

Function getAge
  C_LONGINT($0)
  $0:=(Current date-This.birthdate)/365.25
```

Pour une fonction de classe, la commande `Current method name` retourne: "*\<ClassName>.\<FunctionName>*", par exemple "MyClass.myMethod".

Dans le code de l'application, les fonctions de classe sont appelées en tant que méthodes membres de l'instance d'objet et peuvent recevoir des paramètres le cas échéant. Les syntaxes suivantes sont prises en charge :

- utilisation de l'opérateur `()`. Par exemple `myObject.methodName("hello")`.
- utilisation des méthodes membres d'une classe "Function"
    - `apply()`
    - `call()`


> **Avertissement lié au thread-safe :** Si une fonction de classe n'est pas thread-safe et est appelée par une méthode avec l'attribut "Peut être exécuté en mode préemptif" :  
> - le compilateur ne génère aucune erreur (contrairement aux méthodes habituelles), - une erreur est générée par 4D uniquement à l'exécution.


#### Exemple

```4d
// Classe : Rectangle
Class Constructor
    C_LONGINT($1;$2)
    This.name:="Rectangle"
    This.height:=$1
    This.width:=$2

// Définition de la fonction
Fonction getArea
    C_LONGINT($0)
    $0:=(This.height)*(This.width)

```

```4d
// Dans une méthode projet
C_OBJECT($o)  
C_REAL($area)

$o:=cs.Rectangle.new()  
$area:=$o.getArea(50;100) //5000
```


### Class constructor

#### Syntaxe

```js
// Classe : MyClass
Class Constructor
// code
```

Une fonction de class constructor, qui peut accepter des paramètres, peut être utilisée pour définir une classe utilisateurs.

Dans ce cas, lorsque vous appelez la méthode membre `new()` de la classe, le class constructor est appelé avec les paramètres  passés initialement à la fonction `new()`.

Pour une fonction de class constructor, la commande `Current method name` retourne : "*\<ClassName>.constructor*", par exemple "MyClass.constructor".


#### Exemple :

```4d
// Classe : MyClass
// Class constructor de MyClass
Class Constructor
C_TEXT($1)
This.name:=$1
```

```4d
// Dans une méthode projet
// Vous pouvez instancier un objet
C_OBJECT($o)
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```




### Class extends \<ClassName>

#### Syntaxe

```js
// Classe : ChildClass
Class extends <ParentClass>
```

Le mot-clé de `Class extends` est utilisé dans une déclaration de classe pour créer une classe utilisateur qui est l'enfant d'une autre classe utilisateur. La classe enfant hérite de toutes les fonctions de la classe parente.

L'extension de classe doit respecter les règles suivantes :

- Une classe utilisateurs ne peut pas étendre une classe intégrée (sauf 4D.Object qui est étendu par défaut pour les classes d'utilisateurs)
- Une classe utilisateurs ne peut pas étendre une classe utilisateurs à partir d'un autre projet ou composant.
- Une classe utilisateurs ne peut pas s'étendre.
- Il n'est pas possible d'étendre les classes de manière circulaire (c'est-à-dire "a" étend "b" qui étend "a").

Briser cette règle n'est pas détecté par l'éditeur de code ou l'interpréteur, seuls le compilateur et la `syntaxe de contrôle` généreront une erreur dans ce cas.

Une classe étendue peut appeler le constructeur de sa classe parente à l'aide de la commande [`Super`](#super).

#### Exemple

Cet exemple crée une classe appelée `Square` à partir d'une classe appelée `Polygon`.

```4d
 // Classe: Square
  // chemin: Classes/Square.4dm

 La classe étend Polygon

 Class constructor
 C_LONGINT (1 $)

  // Il appelle le constructeur de la classe parente avec des longueurs
  // fourni pour la largeur et la hauteur de Polygon
Super($1;$1)
  // Dans les classes dérivées, Super doit être appelé avant que vous
  // ne puissiez utiliser 'This'
 This.name:="Square "

Fonction getArea
C_LONGINT($0)
$0:=This.height*This.width
```

### Super

#### Super {(param {; ...; paramN})} {-> Object}

| Paramètre | Type   |    | Description                                  |
| --------- | ------ | -- | -------------------------------------------- |
| param     | mixed  | -> | Paramètre(s) à passer au constructeur parent |
| Résultat  | object | <  | Parent de l'objet                            |

Le mot-clé `Super` autorise les appels à la `superclasse`, c'est-à-dire la classe parente.

`Super` a deux objectifs différents :

- à l'intérieur d'un [code constructeur](#class-constructor), `Super` est une commande qui permet d'appeler le constructeur de la superclasse. the parent class.</p>

`Super` serves two different purposes:

- inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.
    - If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid.
    - If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.
    - If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
  // inside myClass constructor
 C_TEXT($1;$2)
 Super($1) //calls superclass constructor with a text param
 This.param:=$2 // use second param
```

- inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
 Super.doSomething(42) //calls "doSomething" function  
    //declared in superclasses
```

#### Example 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```4d
  //Class: Rectangle

 Class constructor
 C_LONGINT($1;$2)
 This.name:="Rectangle"
 This.height:=$1
 This.width:=$2

 Function sayName
 ALERT("Hi, I am a "+This.name+".")

 Function getArea
 C_LONGINT($0)
 $0:=This.height*This.width
```

```4d
  //Class: Square

 Class extends Rectangle

 Class constructor
 C_LONGINT($1)

  // It calls the parent class's constructor with lengths
  // provided for the Rectangle's width and height
 Super($1;$1)

  // In derived classes, Super must be called before you
  // can use 'This'
 This.name:="Square"
```

#### Example 2

This example illustrates the use of `Super` in a class member method. Function getArea C_LONGINT($0) $0:=This.height*This.width </code></pre>

```4d
  //Class: Square

 Class extends Rectangle

 Class constructor
 C_LONGINT($1)

  // It calls the parent class's constructor with lengths
  // provided for the Rectangle's width and height
 Super($1;$1)

  // In derived classes, Super must be called before you
  // can use 'This'
 This.name:="Square"
```

#### Example 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

```4d
  //Class: Rectangle

 Function nbSides
 C_TEXT($0)
 $0:="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
  //Class: Square

 Class extends Rectangle

 Function description
 C_TEXT($0)
 $0:=Super.nbSides()+" which are all equal"
```

Then you can write in a project method:

```4d
 C_OBJECT($square)
 C_TEXT($message)
 $square:=cs.Square.new()
 $message:=$square.description() //I have 4 sides which are all equal
```

### This

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |

The `This` keyword returns a reference to the currently processed object. Il ne peut pas être défini par affectation lors de l'exécution, et il peut être différent à chaque fois que la fonction est appelée.

Lorsqu'une formule est appelée en tant que méthode membre d'un objet, son `This` est défini sur l'objet sur lequel la méthode est appelée. Par exemple :

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

Lorsqu'une fonction de [class constructor](#class-constructor) est utilisée (avec le mot clé `new()`), son `This` est lié au nouvel objet en cours de construction..

```4d
  //Classe : ob

Class Constructor  
    // Créer des propriétés sur This 
    // en leur assignant
    This.a:=42
```

```4d
    // dans une méthode 4D  
$o:=cs.ob.new()
$val:=$o.a //42
```

> Lorsque vous appelez le superclass constructor dans un constructeur à l'aide du mot clé [Super](#super), gardez à l'esprit que `This` ne doit pas être appelé avant le superclass constructor, sinon une erreur est générée. For example:
> 
> ```4d
> $o:=New object("prop";42;"f";Formula(This.prop))
> $val:=$o.f() //42
> ```
> 
> When a [class constructor](#class-constructor) function is used (with the `new()` keyword), its `This` is bound to the new object being constructed.
> 
> ```4d
>   //Class: ob
> 
> Class Constructor  
>     // Create properties on This as
>     // desired by assigning to them
>     This.a:=42 
> ```
> 
> ```4d
>     // in a 4D method  
> $o:=cs.ob.new()
> $val:=$o.a //42
> ```
> 
> > When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. Puisque *f* est appelée comme une méthode de $o, son `This` fait référence à $o.
> > 
> > ## Commandes de classe
> > 
> > Plusieurs commandes du langage 4D permettent de gérer les fonctionnalités de classe.
> > 
> > ### OB Class
> > 
> > #### OB Class (objet) -> Objet | Null
> > 
> > `OB Class` renvoie la classe de l'objet passé en paramètre.
> > 
> > ### OB Instance of
> > 
> > #### OB Instance of (objet; classe) -> Booléen
> > 
> > `OB Instance of` renvoie `true` si `object` appartient à `class` ou à l'une de ses classes héritées, et `false` dans le cas contraire
