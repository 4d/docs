---
id: classes
title: Classes
---

## Vue d’ensemble

Le langage 4D prend en charge le concept de **classes**. Dans un langage de programmation, l'utilisation d'une classe vous permet de définir le comportement d'un objet avec des propriétés et des fonctions associées.

Une fois qu'une classe utilisateur est définie, vous pouvez **instancier des objets** de cette classe n'importe où dans votre code. Chaque objet est une instance de sa classe. Chaque objet est une instance de sa classe.

> Les modèles de classe 4D et JavaScript sont similaires, et basés sur une chaîne de prototypes.

Par exemple, vous pouvez créer une classe `Person` avec la définition suivante :

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function sayHello() -> $welcome : Text

 $welcome:="Hello "+This.fullName
```

Dans une méthode, créons une "Person" :

```4d
var $person : cs.Person //objet de classe Person
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe"; fullName: "John Doe"}
$hello:=$person.sayHello() //"Hello John Doe"
```

Les fichiers de classe sont gérés via l'Explorateur 4D (voir [Créer des classes](../Project/code-overview.md#creating-classes)).

#### Supprimer une classe

Pour supprimer une classe existante, sélectionnez-la dans l'explorateur et cliquez sur ![](../assets/en/Users/MinussNew.png) ou choisissez **Déplacer vers la corbeille** dans le menu contextuel.

Vous pouvez également supprimer le fichier de classe .4dm du dossier "Classes" de votre disque.

## Class stores

Les classes disponibles sont accessibles depuis leurs class stores. Il existe deux class stores dans 4D :

- [`cs`](../commands/cs) pour les classes utilisateurs et les class stores des composants
- [`4D`](../commands/4d) pour les classes intégrées

#### `cs`

<!-- REF #_command_.cs.Syntax -->**cs** : Object<!-- END REF -->

<!-- REF #_command_.cs.Params -->

<div class="no-index">

| Paramètres | Type                                                       |                             | Description                                                         |
| ---------- | ---------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------- |
| classStore | [4D.ClassStore](../API/ClassStoreClass.md) | &#8592; | Class store utilisateur utilisateurs pour le projet ou le composant |

</div>
<!-- END REF -->

La commande `cs` <!-- REF #_command_.cs.Summary -->retourne le class store utilisateur pour le projet ou le composant courant<!-- END REF -->. Elle retourne toutes les classes utilisateur [définies](../Project/code-overview.md#creating-classes) dans le projet ou le composant ouvert. Par défaut, seules les [classes ORDA](ORDA/ordaClasses.md) du projet sont disponibles.

#### Exemple

Vous souhaitez créer une nouvelle instance d'un objet de `myClass` :

```4d
$instance:=cs.myClass.new()
```

#### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : Object <!-- END REF -->

<!-- REF #_command_.4D.Params -->

<div class="no-index">

| Paramètres | Type                                                       |                             | Description    |
| ---------- | ---------------------------------------------------------- | --------------------------- | -------------- |
| classStore | [4D.ClassStore](../API/ClassStoreClass.md) | &#8592; | Class store 4D |

</div>
<!-- END REF -->

La commande `4D` <!-- REF #_command_.4D.Summary -->retourne le class store des classes 4D intégrées disponibles<!-- END REF -->. Elle donne accès à des API spécifiques telles que [CryptoKey](API/CryptoKeyClass.md).

#### Exemples

Vous souhaitez créer une nouvelle clé dans la classe `CryptoKey` :

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

Vous voulez lister les classes 4D intégrées :

```4d
 var $keys : Collection
 $keys:=OB Keys(4D)
 ALERT("There are "+String($keys.length)+" built-in classes.")
```

## L'objet class

Lorsqu'une classe est [définie](../Project/code-overview.md#creating-classes) dans le projet, elle est chargée dans l'environnement de langage 4D. Une classe est un objet lui-même de la [classe "Class"](API/ClassClass.md). Un objet classe possède les propriétés et fonctions suivantes :

- chaîne [`name`](API/ClassClass.md#name)
- objet [`superclass`](API/ClassClass.md#superclass) (null s'il n'y en a pas)
- fonction [`new()`](API/ClassClass.md#new), permettant d'instancier les objets de la classe
- propriété [`isShared`](API/ClassClass.md#isshared), true si la classe est [partagée](#shared-classes)
- propriété [`isSingleton`](API/ClassClass.md#issingleton), true si la classe définit une [classe singleton](#singleton-classes).
- propriété [`isSessionSingleton`](API/ClassClass.md#issessionsingleton) true si la classe définit une [session singleton](#singleton-classes).
- propriété [`me`](API/ClassClass.md#me), permettant d'instancier et d'accéder aux [singletons](#singleton-classes).

De plus, un objet classe peut référencer un objet [`constructor`](#class-constructor) (facultatif).

Un objet classe lui-même est un [objet partagé](shared.md) et est donc accessible simultanément à partir de différents process 4D.

### Héritage

Si une classe hérite d'une autre classe (c'est-à-dire que le mot-clé [Class extends](classes.md#class-extends-classname) est utilisé dans sa définition), la classe parente est sa [`superclass`](API/ClassClass.md#superclass).

Quand 4D ne trouve pas une fonction ou une propriété dans une classe, elle la recherche dans sa [`superclass`](API/ClassClass.md#superclass); si elle n'est pas trouvée, 4D continue la recherche dans la superclass de la superclass, et ainsi de suite, jusqu'à ce qu'il n'y ait plus de superclass (tous les objets héritent de la superclass "Object").

## Mots-clés de classe

Des mots-clés 4D spécifiques peuvent être utilisés dans les définitions de classe :

- `Function <Name>` pour définir les fonctions de classe des objets.
- `Class constructor` pour initialiser les nouveaux objets de la classe.
- `property` pour définir les propriétés statiques des objets d'un type donné.
- `Function get <Name>` et `Function set <Name>` pour définir les propriétés calculées des objets.
- `Class extends <ClassName>` pour définir l'héritage.
- `This` et `Super` sont des commandes qui ont des fonctionnalités spéciales dans les classes.

### `Function`

#### Syntaxe

```4d
{local | server} {shared} Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

:::note

Il n'y a pas de mot-clé de fin pour le code d'une fonction. Le langage 4D détecte automatiquement la fin du code d'une fonction par le mot clé `Function` suivant ou la fin du fichier de classe.

:::

Les fonctions de classe sont des propriétés spécifiques de la classe. Ce sont des objets de la classe [4D.Function](API/FunctionClass.md). Dans le fichier de définition de classe, les déclarations de fonction utilisent le mot-clé `Function` suivi du nom de la fonction.

Si les fonctions sont déclarées dans une [classe partagée](#shared-classes), vous pouvez utiliser le mot-clé `shared` avec elles afin qu'elles puissent être appelées sans [structure `Use...End use`](shared.md#useend-use). Pour plus d'informations, consultez le paragraphe sur les [fonctions partagées](#shared-functions) ci-dessous.

Dans le contexte d'une application client/serveur, le mot-clé `local` ou `server` permet de spécifier sur quelle machine la fonction doit être exécutée. Ces mots-clés ne peuvent être utilisés qu'avec les fonctions du modèle de données ORDA et les fonctions singleton partagées/session. Pour plus d'informations, reportez-vous au paragraphe [fonctions locales et serveur](#local-and-server) ci-dessous.

Le nom de la fonction doit être conforme aux [règles de nommage des objets](Concepts/identifiers.md#object-properties).

:::note

Étant donné que les propriétés et les fonctions partagent le même espace de nommage, il n'est pas permis d'utiliser le même nom pour une propriété et une fonction de la même classe (une erreur est générée dans ce cas).

:::

:::tip

Si vous préfixez le nom d'une fonction par un trait de soulignement ("_"), elle ne sera pas proposée par les fonctionnalités d'auto-complétion dans l'éditeur de code 4D. Par exemple, si vous déclarez `Function _myPrivateFunction` dans `MyClass`, elle ne sera pas proposée dans l'éditeur de code lorsque vous tapez `"cs.MyClass. "`.

:::

Immédiatement après le nom de la fonction, des [paramètres](#parameters) peuvent être déclarés pour la fonction avec un nom et un type de données, y compris le paramètre de retour (facultatif). Par exemple :

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Dans une fonction de classe, la commande `This` est utilisée comme instance d'objet. Par exemple :

```4d
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

Pour une fonction de classe, la commande `Current method name` retourne: `<ClassName>.<FunctionName>`, par exemple "MyClass.myFunction".

Dans le code de l'application, les fonctions de classes sont appelées comme des méthodes membres des instances d'objets et peuvent recevoir des [paramètres](#parameters) si besoin. Les syntaxes suivantes sont prises en charge :

- utilisation de l'opérateur `()`. Par exemple, `myObject.methodName("hello")`
- utilisation d'une méthode membre de la classe "4D.Function" :
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

:::warning Attention thread-safety

Si une fonction de classe n'est pas thread-safe et qu'elle est appelée par une méthode ayant l'attribut "Peut être exécutée dans un process préemptif" :

- le compilateur ne génère pas d'erreur (ce qui est différent par rapport aux méthodes standard),
- une erreur est déclenchée par 4D uniquement au moment de l'exécution.

:::

#### Paramètres

Les paramètres des fonctions sont déclarés via le nom du paramètre et son type, séparés par deux-points. Le nom du paramètre doit être conforme aux [règles de nommage des propriétés](Concepts/identifiers.md#object-properties). Les paramètres multiples (et leurs types) sont séparés par des points-virgules (;).

```4d
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```

:::note

Si le type n'est pas fourni, le paramètre sera défini comme `Variant`.

:::

#### Valeur retournée

Vous déclarez le paramètre de retour d'une fonction (optionnel) en ajoutant une flèche (`->`) et la définition du paramètre de retour après la liste des paramètres d'entrée, ou les deux points (`:`) et le type de paramètre de retour uniquement. Par exemple :

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
```

Vous pouvez également déclarer le paramètre de retour en ajoutant seulement `: type` et utiliser l'expression [`return`](parameters.md#return-expression) (elle mettra également fin à l'exécution de la fonction). Par exemple :

```4d
Function add($x : Variant; $y : Integer): Integer
 // some code
 return $x+$y
```

#### Exemple 1

```4d
property name : Text
property height; width : Integer

// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width

// Function definition
Function getArea()->$result : Integer
 $result:=(This.height)*(This.width)
```

```4d
// Dans une méthode projet

var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```

#### Exemple 2

Cet exemple utilise l'expression [`return`](parameters.md#return-expression) :

```4d
Function getRectArea($width : Integer; $height : Integer) : Integer
 If ($width > 0 && $height > 0)
  return $width * $height
 Else
  return 0
 End if
```

### `Class Constructor`

#### Syntaxe

```4d
// Class: MyClass
{shared} {{session} singleton} Class Constructor({$parameterName : type; ...})
// code
```

:::note

Il n'y a pas de mot-clé de fin pour le code d'une fonction de constructeur de classe. Le langage 4D détecte automatiquement la fin du code d'une fonction par le mot clé `Function` suivant ou la fin du fichier de classe.

:::

Une fonction class constructor accepte des [paramètres](#parameters) facultatifs et peut être utilisée pour créer et initialiser des objets de la classe utilisateur.

Lorsque vous appelez la fonction [`new()`](API/ClassClass.md#new), le constructeur de classe est appelé avec les paramètres éventuellement passés à la fonction `new()`.

Il ne peut y avoir qu'une seule fonction constructor dans une classe (sinon une erreur est renvoyée). La commande [`Super`](../commands/super.md) permet d'appeler la [`superclass`](../API/ClassClass#superclass), c'est-à-dire la classe mère de la fonction.

Vous pouvez créer et saisir des propriétés d'instance dans le constructeur (voir exemple). Alternativement, si les valeurs de vos propriétés d'instance ne dépendent pas des paramètres passés au constructeur, vous pouvez les définir en utilisant le mot-clé [`property`](#property).

L'utilisation du mot-clé `shared` crée une **classe partagée**, utilisée pour n'instancier que des objets partagés. Pour plus d'informations, reportez-vous au paragraphe [Classes partagées](#shared-classes).

Pour plus d'informations, référez-vous au paragraphe [Classes singleton](#singleton-classes). L'utilisation du mot-clé `singleton` crée un **singleton**, utilisé pour créer une seule instance de la classe. Un `singleton session` crée une seule instance par session.

:::note

Les [classes d'entités ORDA](../ORDA/ordaClasses.md#entity-class) peuvent également bénéficier d'une fonction `Class constructor`. L'implémentation est similaire à celle des classes régulières mais [avec quelques différences](../ORDA/ordaClasses.md#class-constructor-1).

:::

#### Exemple

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text ; $age : Integer)
 This.name:=$name
 This.age:=$age
```

```4d
// Dans une méthode projet
// Vous pouvez instancier un objet
var $o : cs.MyClass
$o:=cs.MyClass.new("John";42)  
// $o = {"name" : "John" ; "age":42}
```

### `property`

#### Syntaxe

`property <propertyName>{; <propertyName2>;...}{ : <propertyType>}`

Le mot-clé `property` permet de déclarer une propriété à l'intérieur d'une classe utilisateur. Une propriété de classe a un nom et un type.

La déclaration des propriétés des classes améliore les suggestions de l'éditeur de code, les fonctions d'auto-complétion et la détection des erreurs.

Les propriétés sont déclarées pour les nouveaux objets lorsque vous appelez la fonction [`new()`](API/ClassClass.md#new), mais elles ne sont pas automatiquement ajoutées aux objets (elles ne sont ajoutées que lorsqu'une valeur leur est assignée).

:::note

Une propriété est automatiquement ajoutée à l'objet lorsqu'elle est [initialisée dans la ligne de déclaration](#initializing-the-property-in-the-declaration-line).

:::

Les noms des propriétés doivent être conformes aux [règles de nommage des propriétés](Concepts/identifiers.md#object-properties).

:::note

Étant donné que les propriétés et les fonctions partagent le même espace de nommage, il n'est pas permis d'utiliser le même nom pour une propriété et une fonction de la même classe (une erreur est générée dans ce cas).

:::

Le type de propriété peut être l'un des suivants :

| propertyType                 | Contenu                                                                   |
| ---------------------------- | ------------------------------------------------------------------------- |
| `Text`                       | Valeur texte                                                              |
| `Date`                       | Valeur date                                                               |
| `Time`                       | Valeur Heure                                                              |
| `Boolean`                    | Valeur booléen                                                            |
| `Integer`                    | Valeur entier long                                                        |
| `Real`                       | Valeur réel                                                               |
| `Pointer`                    | Valeur pointeur                                                           |
| `Picture`                    | Valeur image                                                              |
| `Blob`                       | Valeur Blob scalaire                                                      |
| `Collection`                 | Valeur collection                                                         |
| `Variant`                    | Valeur variant                                                            |
| `Object`                     | Objet de classe par défaut (4D.Object) |
| `4D.<className>`             | Objet de la classe 4D className                                           |
| `cs.<className>`             | Objet de la classe utilisateur className                                  |
| `cs.<namespace>.<className>` | Object de la classe className du composant `<namespace>`                  |

Si vous omettez le type dans la ligne de déclaration, la propriété est créée en tant que variant.

:::info

Le mot-clé `property` ne peut être utilisé que dans les méthodes de classe et en dehors de tout bloc `Function` ou `Class Constructor` .

:::

#### Initialisation de la propriété dans la ligne de déclaration

Lorsque vous déclarez une propriété, vous avez la flexibilité de spécifier son type de données et sa valeur dans une seule instruction. La syntaxe prise en charge est :

`property <propertyName> { : <propertyType>} := <Propertyvalue>`

:::note

Lorsque vous utilisez cette syntaxe, vous ne pouvez pas déclarer plusieurs propriétés dans la ligne de déclaration.

:::

Vous pouvez omettre le type dans la ligne de déclaration, auquel cas le type sera déduit si possible. Par exemple :

```4d
// Class: MyClass

property name : Text := "Smith"
property age : Integer := 42

property birthDate := !1988-09-29! //date est déduit
property fuzzy //variant
```

Lorsque vous initialisez une propriété dans sa ligne de déclaration, elle est ajoutée à l'objet de classe après son instanciation avec la fonction [`new()`](API/ClassClass.md#new) mais avant que le constructeur ne soit appelé.

Si une classe [étend](#class-extends-classname) une autre classe, les propriétés de la classe parente sont instanciées avant les propriétés de la classe enfant.

:::note

Si vous initialisez une propriété dans sa ligne de déclaration avec un objet ou une collection dans une [classe partagée](#classes-partagees), la valeur est automatiquement transformée en une valeur partagée :

```4d
// dans une classe partagée
property myCollection := ["something"]
// myCollection sera une collection partagée
// équivalent à:
myCollection := New shared collection("something")
```

:::

#### Exemple

```4d
// Class: MyClass

property name : Text
property age : Integer
property color : Text := "Blue"
```

Dans une méthode :

```4d
var $o : cs.MyClass
$o:=cs.MyClass.new() //$o:{"color" : "Blue"}
$o.name:="John" //$o:{"color" : "Blue"; "name" : "John"}
$o.age:="Smith"  //erreur de syntaxe
```

### `Function get` et `Function set`

#### Syntaxe

```4d
{local | server} {shared} Function get <name>()->$result : type
// code
```

```4d
{local | server} {shared} Function set <name>($parameterName : type)
// code
```

`Function get` et `Function set` sont des accesseurs définissant des **propriétés calculées** dans la classe. Une propriété calculée est une propriété nommée avec un type de données qui masque un calcul. Lorsqu'on accède à la valeur d'une propriété calculée, 4D substitue le code de l'accesseur correspondant :

- lorsque la propriété est lue, `Function get` est exécutée,
- lorsque la propriété est écrite, `Function set` est exécutée.

Si la propriété n'est pas accédée, le code n'est jamais exécuté.

:::note

Les [classes d'entités ORDA](../ORDA/ordaClasses.md#entity-class) bénéficient d'une implémentation étendue des propriétés calculées avec [deux fonctions supplémentaires](../ORDA/ordaClasses.md#computed-attributes-1) : `query` et `orderBy`.

:::

Les propriétés calculées sont conçues pour gérer les données qui n'ont pas besoin d'être conservées en mémoire. Elles sont généralement basées sur des propriétés persistantes. Par exemple, si un objet de classe contient comme propriété persistante le *prix brut* et le *taux de TVA*, le *prix net* pourrait être traité par une propriété calculée.

Dans le fichier de définition de la classe, les déclarations de propriétés calculées utilisent les mots-clés `Function get` (le *getter*) et `Function set` (le *setter*), suivis du nom de la propriété. Le nom doit être conforme aux [règles de nommage des propriétés](Concepts/identifiers.md#object-properties).

`Function get` retourne une valeur du type de la propriété et `Function set` prend un paramètre du type de la propriété. Les deux arguments doivent être conformes aux [paramètres de fonction](#parameters) standard.

Lorsque les deux fonctions sont définies, la propriété calculée est en **lecture-écriture**. Si seule une `Function get` est définie, la propriété calculée est en **lecture seule**. Dans ce cas, une erreur est retournée si le code tente de modifier la propriété. Dans ce cas, une erreur est retournée si le code tente de modifier la propriété.

Si une fonction définie à l'intérieur d'une classe partagée modifie les objets de la classe, elle devrait appeler la structure [`Use...End use`](shared.md#useend-use) pour protéger l'accès aux objets partagés. Pour plus d'informations, consultez le paragraphe sur les [fonctions partagées](#shared-functions) ci-dessous.

Dans le contexte d'une application client/serveur, le mot-clé `local` ou `server` permet de spécifier sur quelle machine la fonction doit être exécutée. Ces mots-clés ne peuvent être utilisés qu'avec les fonctions du modèle de données ORDA et les fonctions singleton partagées/session. Pour plus d'informations, reportez-vous au paragraphe [fonctions locales et serveur](#local-and-server) ci-dessous.

Le type de la propriété calculée est défini par la déclaration de type `$return` du *getter*. Il peut s'agir de n'importe quel [type de propriété valide](dt_object.md).

> Assigner *undefined* à une propriété d'objet efface sa valeur tout en préservant son type. Pour ce faire, la `Function get` est d'abord appelée pour récupérer le type de valeur, puis `Function set` est appelée avec une valeur vide de ce type.

:::note

Les classes d'entités ORDA peuvent également bénéficier d'une fonction `Class constructor`. L'implémentation est similaire à celle des classes régulières mais [avec quelques différences](../ORDA/ordaClasses.md#class-constructor-1).

:::

#### Exemple 1

```4d
//Class: Person.4dm
property firstName; lastName : Text

Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function set fullName( $fullName : Text )
 $p:=Position(" "; $fullName)
 This.firstName:=Substring($fullName; 1; $p-1)
 This.lastName:=Substring($fullName; $p+1)
```

```4d
//dans une méthode projet
$fullName:=$person.fullName // Function get fullName() est appelée
$person.fullName:="John Smith" // Function set fullName() est appelée
```

#### Exemple 2

```4d
Function get fullAddress()->$result : Object

 $result:=New object

 $result.fullName:=This.fullName
 $result.address:=This.address
 $result.zipCode:=This.zipCode
 $result.city:=This.city
 $result.state:=This.state
 $result.country:=This.country
```

### `Class extends <ClassName>`

#### Syntaxe

```4d
// Class enfant
Class extends <ParentClass>
```

Le mot-clé `Class extends` est utilisé dans une déclaration de classe pour créer une classe utilisateur "enfant" d'une autre classe utilisateur. La classe "enfant" hérite de toutes les fonctions de la classe "parente".

L'extension de classe doit respecter les règles suivantes :

- Une classe utilisateur ne peut pas étendre une classe intégrée (sauf 4D.Object et les [classes ORDA](../ORDA/ordaClasses.md) qui sont étendues par défaut pour les classes utilisateur).
- Une classe utilisateur ne peut pas étendre une classe utilisateur d'un autre projet ou composant.
- Une classe utilisateur ne peut pas s'étendre elle-même.
- Il n'est pas possible d'étendre des classes de manière circulaire (i.e. "a" étend "b" qui étend "a").
- Il n'est pas possible de définir une classe utilisateur [partagée](#shared-classes) à partir d'une classe utilisateur non partagée.

La violation de ces règles n'est pas détectable par l'éditeur de code ou l'interpréteur, seul le compilateur et la fonction `vérifier syntaxe` retourneront une erreur dans ce cas.

Une classe étendue peut appeler le constructeur de sa classe parente en utilisant la commande [`Super`](#super).

#### Exemple

Cet exemple crée une classe nommée `Square` à partir d'une classe nommée `Polygon`.

```4d
//Class: Square

//path: Classes/Square.4dm 

Class extends Polygon

Class constructor ($side : Integer)

 // Appelle le constructeur de la classe parente avec les longueurs
 // fournies pour la largeur et la hauteur du Polygone
 Super($side;$side)
 // Dans les classes dérivées, Super doit être appelé
 // avant que vous puissiez utiliser 'This'
 This.name:="Square"



 Function getArea() -> $area : Integer
 $area:=This.height*This.width
```

## Commandes de fonctions de classe

Les commandes suivantes ont des caractéristiques spécifiques lorsqu'elles sont utilisées dans les fonctions de classe :

### `Super`

La commande [`Super`](../commands/super) permet d'appeler la [`superclass`](../API/ClassClass#superclass), c'est-à-dire la classe mère de la fonction. Il ne peut y avoir qu'une seule fonction constructor dans une classe (sinon une erreur est renvoyée).

Pour plus de détails, voir la description de la commande [`Super`](../commands/super).

### `This`

La commande [`This`](../commands/this) renvoie une référence à l'objet en cours de traitement. Dans la plupart des cas, la valeur de `This` est déterminée par la manière dont une fonction de classe est appelée. Habituellement, `This` fait référence à l'objet sur lequel la fonction a été appelée, comme si la fonction était sur l'objet.

Exemple :

```4d
//Classe : ob

Function f() : Integer
 return This.a+This.b
```

Ensuite, vous pouvez écrire dans une méthode :

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```

Pour plus de détails, voir la description de la commande [`This`](../commands/this).

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` retourne la classe de l'objet passé en paramètre.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` retourne `true` si `object` appartient à la `class` ou à l'une de ses classes héritées, et `false` sinon.

## Classes partagées

Vous pouvez créer des **classes partagées**. Une classe partagée est une classe utilisateur qui instancie un [objet partagé](shared.md) lorsque la fonction [`new()`](../API/ClassClass.md#new) est appelée dans la classe. Une classe partagée ne peut créer que des objets partagés.

Les classes partagées prennent également en charge les **fonctions partagées** qui peuvent être appelées sans [`Use...End use`](shared.md#useend-use).

La propriété [`.isShared`](../API/ClassClass.md#isshared) des objets Class permet de savoir si la classe est partagée.

:::info

- Une classe [héritant](#class-extends-classname) d'une classe non partagée ne peut pas être définie comme partagée.
- Les classes partagées ne sont pas prises en charge par les [classes basées sur ORDA](../ORDA/ordaClasses.md).

:::

### Création d'une classe partagée

Pour créer une classe partagée, ajoutez le mot-clé `shared` avant le [Class Constructor](#class-constructor). Par exemple :

```4d
	//shared class: Person
shared Class Constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

```

```4d
//myMethod
var $person := cs.Person.new("John"; "Smith")
OB Is shared($person) // true
cs.Person.isShared //true
```

### Fonctions partagées

Si les fonctions sont déclarées dans une [classe partagée](#constructeur-de-classe-partagee), vous pouvez utiliser le mot-clé `shared` avec elles afin qu'elles puissent être appelées sans la structure [`Use...End use`](shared.md#useend-use). Pour plus d'informations, consultez le paragraphe sur les [fonctions partagées](#shared-functions) ci-dessous.

Pour créer une fonction partagée, ajoutez le mot-clé `shared` avant le mot-clé [Function](#function) dans une classe partagée. Par exemple :

```4d
	//classe partagée Foo
shared Class Constructor()
  This.variable:=1

shared Function Bar($value : Integer)
  This.variable:=$value //pas besoin de use/end use
```

:::note

Si le mot-clé `shared` est utilisé devant une fonction dans une classe utilisateur non partagée, il est ignoré.

:::

## Classes Singleton

Une **classe singleton** est une classe utilisateur qui ne produit qu'une seule instance. Pour plus d’informations sur le concept de singleton, veuillez consulter la [page Wikipédia sur les singletons](https://en.wikipedia.org/wiki/Singleton_pattern).

### Types de singletons

Les singletons sont utiles pour définir des valeurs qui doivent être disponibles partout dans une application, une session ou un process.

4D prend en charge trois types de singletons :

- un **singleton process** a une instance unique pour le process dans lequel il est instancié,
- un **singleton partagé** a une instance unique pour tous les process sur la machine.
- un **singleton session** est un singleton partagé, mais avec une instance unique pour tous les process de la [session](../API/SessionClass.md). Les singletons de session sont partagés au sein d'une même session mais varient d'une session à l'autre. Dans le contexte d'une application client-serveur ou web, les singletons de session permettent de créer et d'utiliser une instance différente pour chaque session, et donc pour chaque utilisateur. Les singletons de session sont particulièrement appropriés pour les [applications Qodly](https://developer.4d.com/qodly/).

:::info

Les classes Singleton ne sont pas prises en charge par [les classes ORDA](../ORDA/ordaClasses.md).

:::

Le tableau suivant indique la portée d'une instance de singleton en fonction de l'endroit où elle a été créée :

| Singleton créé sur      | Portée d'un singleton process                                                                                        | Portée d'un singleton partagé | Portée d'un singleton session                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------- |
| **4D mono-utilisateur** | Process                                                                                                              | Application                   | Application ou session Web/REST                                            |
| **4D Server**           | Process                                                                                                              | Machine 4D Server             | Session client/serveur ou session Web/REST ou session de procédure stockée |
| **4D mode distant**     | Process (*note*: les singletons ne sont pas synchronisés sur les process jumeaux) | Machine 4D distant            | Machine distante 4D ou session Web/REST                                    |

Une fois instanciée, une classe singleton (et son singleton) existe aussi longtemps qu'une référence à cette classe existe quelque part dans l'application sur le poste.

### Création et utilisation de singletons

Vous déclarez des classes singleton en ajoutant le(s) mot(s) clé(s) approprié(s) devant le [`Class constructor`](#class-constructor) :

- Pour déclarer une classe singleton process, écrivez `singleton Class Constructor()`.
- Pour déclarer une classe singleton partagée, écrivez `shared singleton Class constructor()`.
- Pour déclarer une classe singleton de session, écrivez `session singleton Class constructor()`.

:::note

- Les singletons de session sont automatiquement des singletons partagés (il n'est pas nécessaire d'utiliser le mot-clé `shared` dans le constructeur de la classe).
- Les fonctions de singletons partagés prennent en charge le mot-clé [`onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword).

:::

Le singleton de la classe est instancié au premier appel de la fonction [`cs.<class>.me`](../API/ClassClass.md#me) propriété. Le singleton instancié de la classe est ensuite toujours renvoyé lorsque la propriété [`me`](../API/ClassClass.md#me) est utilisée.

Si vous avez besoin d'instancier un singleton avec des paramètres, vous pouvez également appeler la fonction [`new()`](../API/ClassClass.md#new). Dans ce cas, il est recommandé d'instancier le singleton dans du code exécuté au démarrage de l'application.

La propriété [`.isSingleton`](../API/ClassClass.md#issingleton) des objets de classe permet de savoir si la classe est un singleton.

La propriété [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton) des objets de classe permet de savoir si la classe est un singleton de session.

### Fonctions singleton exposées

Les fonctions singleton partagées et de session prennent en charge le mot-clé [`exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions). Une fonction singleton exposée peut être directement appelée par des requêtes REST. Cette fonctionnalié est utile pour la conception de [pages Qodly appelant des fonctions 4D](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#class-functions).

### Exemples

#### Singleton process

```4d
	//class: ProcessTag
singleton Class Constructor()
 This.tag:=Random
```

Pour utiliser le singleton :

```4d
	//dans un process
var $mySingleton := cs.ProcessTag.me //Première instanciation
	//$mySingleton.tag = 5425 par exemple  
...  
var $myOtherSingleton := cs.ProcessTag.me
	//$myOtherSingleton.tag = 5425

```

```4d
	//dans un autre process
var $mySingleton := cs.ProcessTag.me //Première instanciation
	//$mySingleton.tag = 14856 par exemple  
...  
var $myOtherSingleton := cs.ProcessTag.me  
	//$myOtherSingleton.tag = 14856
```

#### Singleton partagé

```4d
//Class VehicleFactory

property vehicleBuilt : Integer

shared singleton Class constructor()
  This.vehicleBuilt := 0 //Nombre de véhiclues produits par l'usine

shared Function buildVehicle ($type : Text) -> $vehicle : cs.Vehicle

  Case of
    : $type="car"
      $vehicle:=cs.Car.new()
    : $type="truck"
      $vehicle:=cs.Truck.new()
    : $type="sport car"
      $vehicle:=cs.SportCar.new()
    : $type="motorbike"
      $vehicle:=cs.Motorbike.new()
  Else
    $vehicle:=cs.Car.new()
  End case
  This.vehicleBuilt+=1
```

Vous pouvez alors appeler le singleton **cs.VehicleFactory** pour obtenir un nouveau véhicule depuis n'importe où dans votre application sur le poste avec une seule ligne :

```4d
$vehicle:=cs.VehicleFactory.me.buildVehicle("truck")
```

Étant donné que la fonction *buildVehicle()* modifie le singleton **cs.VehicleFactory** (en incrémentant `This.vehicleBuilt`), vous devez ajouter le mot-clé `shared` à celle-ci.

#### Singleton session

Dans une application d'inventaire, vous souhaitez mettre en œuvre un inventaire d'articles à l'aide de singletons de session.

```4d
//class ItemInventory

property itemList : Collection:=[]

session singleton Class constructor()

shared function addItem($item:object)
    This.itemList.push($item)
```

En définissant la classe ItemInventory comme un singleton de session, vous vous assurez que chaque session, et donc chaque utilisateur, dispose de son propre inventaire. Pour accéder à l'inventaire de l'utilisateur, rien de plus simple :

```4d
//dans une session utilisateur
$myList := cs.ItemInventory.me.itemList
//liste d'objets de l'utilisateur courant

```

:::tip Articles de blog sur le sujet

[Singletons dans 4D](https://blog.4d.com/singletons-in-4d)  
[Présentation des singletons de session](https://blog.4d.com/introducing-session-singletons)

:::

## `local` et `server`

Dans [l'architecture client/serveur](../Desktop/clientServer.md), les mots-clés `local` et `server` vous permettent de spécifier où vous voulez que la fonction soit exécutée : côté client ou côté serveur. Le contrôle de l'emplacement d'exécution est utile pour des raisons de performance ou pour la mise en de fonctions métier logiques.

La syntaxe formelle est la suivante :

```4d
// déclarer une fonction à exécuter sur un client dans le cadre du client/serveur
local Function <functionName>   
```

```4d
// déclarer une fonction à exécuter sur le serveur en client/serveur
server Function <functionName>   
```

Les mots-clés `local` et `server` ne sont disponibles que pour les fonctions des classes suivantes :

- [Modèle de données ORDA](../ORDA/ordaClasses.md) classes
- classes [singleton partagées ou de session](#singleton-classes).

:::tip Article(s) de blog sur le sujet

[Une nouvelle façon d'exécuter la logique commerciale sur le serveur](https://blog.4d.com/a-new-way-to-execute-business-logic-on-the-server)

:::

### Vue d’ensemble

Les fonctions prises en charge ont un **emplacement d'exécution par défaut** lorsqu'aucun mot-clé d'emplacement n'est utilisé. Vous pouvez néanmoins insérer un mot-clé `local` ou `server` pour modifier le lieu d'exécution, ou pour rendre le code plus explicite.

| Fonctions prises en charge                            | Exécution par défaut | avec le mot-clé `local`                                                  | avec le mot-clé `server`                                                                                                                                                                  |
| ----------------------------------------------------- | -------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Modèle de données ORDA](../ORDA/ordaClasses.md)      | sur le serveur       | La fonction est exécutée sur le client si elle est appelée sur le client |                                                                                                                                                                                           |
| [Singleton partagé ou de session](#singleton-classes) | Local                |                                                                          | La fonction est exécutée sur le serveur sur l'instance serveur du singleton. <br/>S'il n'y a aucune instance du singleton sur le serveur, elle est créée. |

Si les mots-clés `local` et `server` sont utilisés dans un autre contexte, une erreur est retournée.

:::note

Pour une description globale des emplacements où le code est réellement exécuté en client/serveur, veuillez vous référer à [cette section](../Desktop/clientServer.md#code-execution-location).

::::

### `local`

Dans l'[architecture client/serveur] (../Desktop/clientServer.md), le mot-clé `local` spécifie que la fonction doit être exécutée **sur la machine à partir de laquelle elle est appelée**.

:::note Rappel

Le mot-clé `local` est inutile pour les [fonctions singleton partagées ou de session](#singleton-classes), qui sont exécutées localement par défaut.

:::

Par défaut, les [fonctions du modèle de données ORDA](../ORDA/ordaClasses.md) sont exécutées sur le serveur. Cela garantit généralement les meilleures performances puisque seuls la requête de fonction et le résultat sont envoyés sur le réseau. Cependant, [pour des raisons d'optimisation](../ORDA/client-server-optimization.md#using-the-local-keyword), vous pouvez vouloir exécuter une fonction de modèle de données sur le client. Vous pouvez alors utiliser le mot clé `local`.

#### Exemple: Calcul de l'âge

Considérons une entité avec un attribut *birthDate*. Nous souhaitons définir une fonction `age()` qui serait appelée dans une list box. Cette fonction peut être exécutée sur le client, ce qui évite de déclencher une requête au serveur pour chaque ligne de la list box.

Dans la classe *StudentsEntity* :

```4d
Class extends Entity

local Function age() -> $age: Variant

If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else
    $age:=Null
End if
```

### `server`

Dans l'[architecture client/serveur](../Desktop/clientServer.md), le mot-clé `server` spécifie que la fonction doit être exécutée **sur le serveur**.

:::note Rappel

Le mot clé `server` est inutile avec les [fonctions du modèle de données ORDA](../ORDA/ordaClasses.md), qui sont exécutées sur le serveur par défaut.

:::

Les paramètres et le résultat de la fonction `server` doivent être [**streamable**](./dt_object.md#streaming-support). Par exemple, [4D.Datastore](../API/DataStoreClass.md), [File handle](../API/FileHandleClass.md), ou [WebServer](../API/WebServerClass.md) sont des classes non streamables mais [4D.File](../API/FileClass.md) est streamable.

Cette fonctionnalité est particulièrement utile dans le cadre des [sessions utilisateur à distance](../Desktop/sessions.md# remote-user-sessions), vous permettant d'implémenter la logique métier dans un [singleton de session](#shared-or-session-singleton-functions) afin de la partager entre tous les processus de la session, étendant ainsi les fonctionnalités de la commande [`Session`](../commands/session). Dans ce cas, vous pourrez vouloir que la logique applicative soit exécutée **sur le serveur** afin que toutes les informations relatives à la session soient rassemblées sur le serveur.

Par défaut, les fonctions singleton partagées ou de session sont exécutées localement. L'ajout du mot-clé `server` dans la définition de la fonction de la classe permet à 4D d'utiliser l'instance singleton sur le serveur. Notez que cela peut entraîner l'instanciation du singleton sur le serveur s'il n'existe pas encore d'instance.

Pour les [sessions singleton](#singleton-classes), la fonction est exécutée sur le serveur dans l'instance de singleton correspondante, c'est-à-dire l'instance de singleton pour la session courante.

:::note

Si vous déclarez une `server Function` dans un singleton partagé puis :

- vous instanciez un singleton *S1* sur le client (nommé *s1*),
- vous exécutez *s1.function()* sur le client.

Si aucune instance de *S1* n'existe sur le serveur à ce moment-là, *S1* est instancié sur le serveur (le constructeur est exécuté) et *function()* s'exécute sur cette instance de serveur. Par conséquent, deux instances de *S1* peuvent coexister (côté client et côté serveur), avec des valeurs de propriété distinctes. Dans ce cas, *s1.property* est toujours accessible localement. Il n'est pas possible d'y accéder sur le serveur, par exemple à partir de code côté serveur utilisant la notation à point directe (une erreur est renvoyée).

:::

#### Exemple : singleton Administration

Le singleton partagé *Administration* possède une fonction "server" qui exécute la commande [`Process activity`](../commands/process-activity). Ce singleton est instancié sur un 4D distant mais la fonction renvoie l'activité du serveur sur le serveur.

```4d
  // Administration class

shared singleton Class constructor

  // Cette fonction est exécutée sur le serveur
server Function processActivity() : Object
  return Process activity


Function localProcessActivity() : Object
  return Process activity
```

Code s'exécutant sur le client :

```4d
var $localActivity; $serverActivity : Object
var $administration : cs.Administration

// Le singleton Administration est instancié sur le client 4D
$administration:=cs.Administration.me

// Obtenir les process en cours d'exécution sur le serveur 4D distant
$localActivity:=$administration.localProcessActivity()

// Obtenir les process et les sessions en cours d'exécution sur le serveur 4D
$serverActivity:=$administration.processActivity()

```

#### Exemple: singleton de session

Vous stockez vos utilisateurs dans une table Users et vous gérez une authentification personnalisée. Vous utilisez un singleton de session pour l'authentification :

```4d
// Classe singleton session UserSession

server Function checkUser($credentials : Object) : Boolean
	
var $user : cs.UsersEntity
var $result:=False
	
If ($credentials#Null)
	$user:=ds.Users.query("Email === :1"; $credentials.identifier).first()
		
	If (($user#Null) && (Verify password hash($credentials.password; $user.Password)))
		Use (Session.storage)
			Session.storage.userInfo:=New shared object("userId"; $user.ID)
		End use 
			
		$result:=True
	End if 
End if 
	
return $result
```

Pour fournir l'utilisateur courant aux clients 4D, le singleton expose une propriété calculée de l'utilisateur obtenue du serveur :

```4d
server Function get user() : cs.UsersEntity
	return ds.Users.get(Session.storage.userInfo.userId)
```

