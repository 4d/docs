---
id: webAreaOverview
title: Zones Web
---

## Aperçu

Les zones Web (Web Areas) peuvent afficher tout type de contenu Web(*) à l’intérieur de vos formulaires : pages HTML au contenu statique ou dynamique, fichiers, images, JavaScript, etc. Le moteur de rendu de la zone Web dépend de la plate-forme d’exécution de l’application et de [l'option de moteur de rendu](properties_WebArea.md#use-embedded-web-rendering-engine) sélectionnée.

Il est possible de créer plusieurs zones Web dans un même formulaire. A noter cependant que l'insertion de zones Web est soumis à [quelques limitations](#web-areas-rules).

Plusieurs [actions standard](#standard-actions), de nombreuses [commandes de langage](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) et [événements formulaires](#form-events) génériques et dédiés permettent au développeur de contrôler le fonctionnement des zones Web. Des variables spécifiques permettent d’échanger des informations entre la zone et l’environnement 4D.
> (*) L'usage de plugins Web et d'applets Java est toutefois déconseillé dans les zones Web car ils peuvent déstabiliser une opération menée par 4D, notamment au niveau de la gestion d'événement.


## Propriétés spécifiques

### Variables associées

Deux variables spécifiques sont automatiquement associées à chaque zone Web :
- [`URL`](properties_WebArea.md#url) -- pour contrôler l’URL affiché par la zone Web
- [`Progression`](properties_WebArea.md#progression) -- pour contrôler le pourcentage de chargement de la page affichée dans la zone Web.

### Moteur de rendu Web

Vous pouvez choisir entre [deux moteurs de rendus](properties_WebArea.md#use-embedded-web-rendering-engine) pour la zone Web, en fonction des spécificités de votre application.

Le moteur de rendu Web vous permet d'appeler des méthodes 4D à partir de la zone Web.

### Accès aux méthodes 4D
Lorsque la propriété [Accès méthodes 4D](properties_WebArea.md#access-4d-methods) est cochée, vous pouvez appeler des méthodes 4D à partir d'une zone Web.

> Cette propriété n'est disponible que si la zone Web [utilise le moteur de rendu Web intégré](#use-embedded-web-rendering-engine).

### $4d object

The [4D embedded Web rendering engine](#use-embedded-web-rendering-engine) supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.

For example, to call the `HelloWorld` 4D method, you just execute the following statement:

```codeJS
$4d.HelloWorld();
```
> JavaScript is case sensitive so it is important to note that the object is named $4d (with a lowercase "d").

The syntax of calls to 4D methods is as follows:

```codeJS
$4d.4DMethodName(param1,paramN,function(result){})
```
- `param1...paramN`: You can pass as many parameters as you need to the 4D method. These parameters can be of any type supported by JavaScript (string, number, array, object).

- `function(result)`: Function to pass as last argument. This "callback" function is called synchronously once the 4D method finishes executing. It receives the `result` parameter.

- `result`: Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). You can use the `C_OBJECT` command to return the objects.

> By default, 4D works in UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding: `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Exemple 1
Given a 4D project method named `today` that does not receive parameters and returns the current date as a string.

4D code of `today` method:

```code4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

In the Web area, the 4D method can be called with the following syntax:

```js
$4d.today()
```

The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. We want to display the date in the HTML page that is loaded by the Web area.

Here is the code of the HTML page:

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 <script type="text/javascript">
$4d.today(function(dollarZero)
{
    var curDate = dollarZero;
    document.getElementById("mydiv").innerHTML=curDate;
});
</script>
</head>
<body>Today is: <div id="mydiv"></div>
</body>
</html>
```

#### Exemple 2

The 4D project method `calcSum` receives parameters (`$1...$n`) and returns their sum in `$0`:

4D code of `calcSum` method:

```code4d
 C_REAL(${1}) // receives n REAL type parameters
 C_REAL($0) // returns a Real
 C_LONGINT($i;$n)
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+${$i}
 End for
```

The JavaScript code run in the Web area is:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // result is 262.5
    });
```


## Standard actions

Four specific standard actions are available for managing Web areas automatically: `Open Back URL`, `Open Next URL`, `Refresh Current URL` and `Stop Loading URL`. These actions can be associated with buttons or menu commands and allow quick implementation of basic Web interfaces. These actions are described in [Standard actions](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).


## Evénements formulaire

Des événements formulaire spécifiques sont destinés à la gestion programmée des zones Web, concernant notamment l'activation des liens :

- `On Begin URL Loading`
- `On URL Resource Loading`
- `On End URL Loading`
- `On URL Loading Error`
- `On URL Filtering`
- `On Open External Link`
- `On Window Opening Denied`

En outre, les zones Web prennent en charge les événements formulaire génériques suivants :

- `On Load`
- `On Unload`
- `On Getting Focus`
- `On Losing Focus`


## Notes d'utilisation des zones Web

### Interface utilisateur

Lors de l’exécution du formulaire, l’utilisateur dispose des fonctions d’interface standard des navigateurs dans la zone Web, ce qui lui permet d’interagir avec les autres zones du formulaire :

- **Commandes Edit menu** : lorsque la zone Web a le focus, les commandes du menu **Edit** permettent d’effectuer les actions de copier, coller, tout sélectionner, etc., en fonction de la sélection.
- **Le menu contextuel** : il est possible d'utiliser le [menu contextuel](properties_Entry.md#context-menu) standard du système avec la zone Web. L’affichage de ce menu peut également être contrôlé via la commande `WA SET PREFERENCE`.
- **Glisser-déposer** : l’utilisateur peut effectuer des glisser-déposer de textes, d’images ou de documents à l’intérieur d’une zone Web ou entre une zone Web et les objets des formulaires 4D, en fonction des propriétés des objets 4D. Pour des raisons de sécurité, le changement du contenu d'une zone Web via le glisser-déposer d'un fichier ou d'un URL n'est pas autorisé par défaut. Dans ce cas, le curseur de la souris affiche une icône d'interdiction ![](assets/en/FormObjects/forbidden.png). La possibilité de déposer des URL ou des fichiers dans la zone doit être explicitement autorisée à l'aide de la commande `WA SET PREFERENCE`.

### Sous-formulaires
Pour des raisons liées aux mécanismes de redessinement des fenêtres, l'insertion d'une zone Web dans un sous-formulaire est soumise aux contraintes suivantes :

- Le sous-formulaire ne doit pas pouvoir défiler,
- Les limites de la zone Web ne doivent pas dépasser de la zone du sous-formulaire

> La superposition d'une zone Web au dessus ou en-dessous d'autres objets formulaires n'est pas prise en charge.


### Conflit Zone Web et serveur Web (Windows)
Sous Windows, il est déconseillé d’accéder via une zone Web au serveur Web de l’application 4D contenant la zone car cette configuration peut provoquer un conflit paralysant l’application. Bien entendu, un 4D distant peut accéder au serveur Web du 4D Server, mais pas à son propre serveur Web.

### Plugins Web et applets Java
L'usage de plugins Web et d'applets Java dans les zones Web est déconseillé car ils peuvent entraîner des instabilités dans le fonctionnement de 4D, notamment au niveau de la gestion des événements.

### Insertion du protocole (macOS)
Les URLs manipulés par programmation dans les zones Web sous Mac OS doivent débuter par le protocole. Par exemple, vous devez passer la chaîne "http://www.monsite.fr" et non uniquement "www.monsite.fr".


## Accès à l’inspecteur Web
Il est possible d’afficher et d’utiliser un inspecteur Web au sein des zones Web de vos formulaires. L’inspecteur Web est un débogueur, proposé par le moteur de rendu Web intégré. Il permet d’analyser le code et les flux d’information des pages Web.

### Afficher l’inspecteur Web
Pour que vous puissiez afficher l’inspecteur Web dans une zone Web, les conditions suivantes doivent être réunies :

- You must [select the embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) for the area (the Web inspector is only available with this configuration).
- You must enable the [context menu](properties_Entry.md#context-menu) for the area (this menu is used to call the inspector)
- You must expressly enable the use of the inspector in the area by means of the following statement:

```code4d
 WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

### Using the Web inspector
When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. When you select this option, the Web inspector window is displayed.

> The Web inspector is included in the embedded Web rendering engine. For a detailed description of the features of this debugger, refer to the documentation provided by the Web rendering engine.




## Propriétés prises en charge

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 





