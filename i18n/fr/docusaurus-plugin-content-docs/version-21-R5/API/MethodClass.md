---
id: MethodClass
title: Méthode
---

Un objet `4D.Method` contient un morceau de code qui est créé à partir d'un texte source et qui peut être exécuté. Les méthodes `4D.Method` s'exécutent toujours en mode interprété, quel que soit le mode d'exécution du projet (interprété/compilé). Cette fonctionnalité est spécialement conçue pour permettre d'exécuter des morceaux de code à la volée de façon dynamique.

Un objet `4D.Method` est créé avec la fonction `4D.Method.new()`.

Les objets `4D.Method` héritent de la classe [`4D.Function`](./FunctionClass.md). Ainsi, pour exécuter l'objet méthode, vous pouvez :

- stocker un objet `4D.Method` dans une propriété d'objet et utiliser l'opérateur `()` après le nom de la propriété,
- ou appeler directement l'objet `4D.Method` en utilisant la fonction [`call()`](#call) ou [`apply()`](#apply).

Voir les exemples dans le paragraphe [Exécution du code dans les objets Function](../API/FunctionClass.md#executing-code-in-function-objects).

:::tip Article(s) de blog sur le sujet

[Exécuter du code à partir d'un texte avec 4D.Method](https://blog.4d.com/execute-code-from-text-with-4d-method)

:::

:::info

Cette classe est [**streamable**](../Concepts/dt_object.md#binary-streaming-variable-to-blob) en binaire.

:::

### Exemples

#### Création d'une méthode dynamique de base

```4d
var $myCode : Text
$myCode:="#DECLARE ($number1:Integer ;$number2:Integer):Integer "+Char(13)+"return $number1*$number2"

var $o:={}
$o.multiplication:=4D.Method.new($myCode) //place l'objet dans une propriété
var $result2:=$o.multiplication(2;3) // 6

var $result3:=4D.Method.new($myCode).call(Null ; 10 ; 5) // 50
```

#### Utilisation de `This` dans le code d'une méthode

```4d
var $myCode:="#DECLARE ($str1:text):text "+Char(13)+"return $str1+This.name"

var $o:={name: "John"}
$o.concat:=4D.Method.new($myCode)

var $result : Text
$result:=$o.concat("Hello ") // $result est "Hello John"
```

#### Utilisation d'un fichier texte avec contrôle syntaxique

```text
//méthode 4d stockée dans un fichier texte
var $newBusinessRules:=New shared object
Use ($newBusinessRules)
	$newBusinessRules.taxRate:=0.2
	$newBusinessRules.discountFormula:="price * quantity * discountRate"
	$newBusinessRules.approvalThreshold:=10000
	$newBusinessRules.freeShippingThreshold:=150
	$newBusinessRules.defaultCurrency:="EUR"
End use 

Use (Storage)
	Storage.businessRules:=$newBusinessRules
End use  
```

Cette méthode est appelée dans le code :

```4d
var $myFile:=File("/DATA/BusinessRules.4dm")

var $myMethod:=4D.Method.new($myFile.getText())
// Vérification des erreurs de syntaxe
If ($myMethod.checkSyntax().success)
   $myMethod.call()
End if 
```

### Objet Méthode

Les objets 4D.Method offrent les propriétés et fonctions suivantes :

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary -->               |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->                  |
| [<!-- INCLUDE #MethodClass.checkSyntax().Syntax -->](#checksyntax)<br/><!-- INCLUDE #MethodClass.checkSyntax().Summary --> |
| [<!-- INCLUDE #MethodClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MethodClass.name.Summary -->                          |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->                |

## 4D.Method.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 21 R3   | Ajout         |

</details>

<!-- REF #4D.Method.new().Syntax -->**4D.Method.new**( *source* : Text {; name : Text } ) : 4D.Method<!-- END REF -->

<!-- REF #4D.Method.new().Params -->

<div class="no-index">

| Paramètres | Type                      |                             | Description                                                                                                          |
| ---------- | ------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------- |
| source     | Text                      |              ->             | Représentation textuelle d'une méthode 4D à encapsuler dans un objet                                                 |
| name       | Text                      |              ->             | Nom de la méthode à afficher dans le débogueur. Si omis, le nom de la méthode sera affiché "anonyme" |
| Résultat   | 4D.Method | <- | Nouvel objet méthode partagé                                                                                         |

</div>
<!-- END REF -->

#### Description

La fonction `4D.Method.new()` <!-- REF #4D.Method.new().Summary -->crée et renvoie un nouvel objet `4D.Method` construit à partir du code *source*<!-- END REF -->.

Dans le paramètre *source*, passez le code source 4D de la méthode sous forme de texte. Tous les caractères de fin de ligne sont pris en charge (LF, CR, CRLF) en utilisant la commande [`Char`](../commands/char) ou une [séquence d'échappement](../Concepts/quick-tour.md#escape-sequences).

Dans le paramètre optionnel *name*, passez le nom de la méthode à afficher dans le débogueur 4D ou l'explorateur d'exécution. Si vous omettez ce paramètre, le nom de la méthode apparaîtra comme "anonyme".

:::tip

Il est recommandé de nommer explicitement votre méthode si vous souhaitez :

- utiliser le nom persistant de la méthode dans la [fenêtre d'évaluation du débogueur](../Debugging/debugger#custom-watch-pane) (les méthodes anonymes ne sont pas persistantes dans le débogueur).
- manipuler la méthode volatile en utilisant des commandes telles que [`Method get path`](../commands/method-get-path) et [`Method resolve path`](../commands/method-resolve-path) (les méthodes anonymes n'ont pas de chemin).

:::

L'objet 4D.Method résultant peut être vérifié en utilisant [`checkSyntax()`](#checksyntax) et exécuté en utilisant `()`, [`.apply()`](#apply) ou [`.call()`](#call).

:::note

Les objets méthode volatils nommés ne sont pas des méthodes projet, ils ne sont pas stockés dans des fichiers disque et ne peuvent pas être appelés par des commandes telles que [`EXECUTE METHOD`](../commands/execute-method). Par ailleurs, comme ils héritent de la classe [`4D.Function`](./FunctionClass.md), ils peuvent être utilisés partout où un objet `4D.Function` est attendu.

:::

#### Exemple

```4d
var $m:=4D.Method.new("#DECLARE ($t : Text) : Texte \nreturn Uppercase($t)")

var $res:=$m.call(Null ; "hello world") //HELLO WORLD
```

<!-- INCLUDE FunctionClass.apply().Desc -->

#### Exemple

```4d
var $coll:=[10 ; 2]
var $myCode:="#DECLARE ($number1:Integer ;$number2:Integer):Integer\n"+\N-
"return $number1*$number2"

$m:=4D.Method.new($myCode; "m_multiple")
var $result:=$m.apply(Null ; $coll) //20

```

<!-- INCLUDE FunctionClass.call().Desc -->

#### Exemple

```4d
 var $m : 4D.Method
 var $myCode:="#DECLARE ($number1:Integer;$number2:Integer):Integer\n"+\
"return $number1*$number2"

$m:=4D.Method.new($myCode; "m_multiple")
var $result:=$m.call(Null; 10; 5) //50
```

## .checkSyntax()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 21 R3   | Ajout         |

</details>

<!-- REF #MethodClass.checkSyntax().Syntax -->**.checkSyntax**() : Object<!-- END REF -->

<!-- REF #MethodClass.checkSyntax().Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                  |
| ---------- | ------ | --------------------------- | -------------------------------------------- |
| Résultat   | Object | <- | Objet résultat de la vérification de syntaxe |

</div>
<!-- END REF -->

#### Description

La fonction `.checkSyntax()` <!-- REF #MethodClass.checkSyntax().Summary -->vérifie la syntaxe du code source de l'objet `4D.Method` et renvoie un objet résultat<!-- END REF -->.

L'objet retourné contient les propriétés suivantes :

| Propriété |                                                                                   | Type                | Description                                                                                                                        |
| --------- | --------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| success   |                                                                                   | Boolean             | Vrai si aucune erreur de syntaxe n'a été détectée, faux sinon                                                                      |
| errors    |                                                                                   | Collection d'objets | **Disponible uniquement en cas d'erreur ou de warning**. Collection d'objets décrivant les erreurs ou les warnings |
|           | [].isError    | Boolean             | Erreur si True, sinon warning                                                                                                      |
|           | [].message    | Text                | Message d'erreur ou de warning                                                                                                     |
|           | [].lineNumber | Integer             | Numéro de ligne de l'erreur dans le code                                                                                           |

#### Exemple

```4d
var $m : 4D.Method
var $check : Object
$m:=4D.Method.new("var $a:=2026\r$a:=current date")
$check:=$m.checkSyntax()
If ($check.success=False)
	ALERT("Syntax error: "+$check.errors[0].message)
End if 
```

## .name

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 21 R3   | Ajout         |

</details>

<!-- REF #MethodClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Description

La propriété `.name` <!-- REF #MethodClass.name.Summary -->contient le nom de l'objet `4D.Method`, s'il a été déclaré dans le paramètre *name* du constructeur `new()`<!-- END REF -->. Sinon, la propriété n'est pas retournée.

Cette propriété est en **lecture seule**.

<!-- INCLUDE FunctionClass.source.Desc -->

#### Exemple

```4d
var $myCode:="#DECLARE ():Real\n"+\
"return random*current time"
$m:=4D.Method.new($myCode)
$src:=$m.source //"#DECLARE() : Real\rreturn Random*Current time"
```
