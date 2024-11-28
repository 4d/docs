---
id: webAreaOverview
title: Zones Web
---

## Vue d’ensemble

Les zones Web (Web Areas) peuvent afficher tout type de contenu Web(*) à l’intérieur de vos formulaires : pages HTML au contenu statique ou dynamique, fichiers, images, JavaScript, etc. Le moteur de rendu de la zone Web dépend de la plate-forme d’exécution de l’application et de [l'option de moteur de rendu](properties_WebArea.md#use-embedded-web-rendering-engine) sélectionnée.

Il est possible de créer plusieurs zones Web dans un même formulaire. Note, however, that the use of Web areas must follow [several rules](#web-area-rules).

Plusieurs [actions standard](#standard-actions), de nombreuses [commandes de langage](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) et [événements formulaires](#form-events) génériques et dédiés permettent au développeur de contrôler le fonctionnement des zones Web. Des variables spécifiques permettent d’échanger des informations entre la zone et l’environnement 4D.
> L'usage de plugins Web et d'applets Java dans les zones Web est déconseillé car ils peuvent entraîner des instabilités dans le fonctionnement de 4D, notamment au niveau de la gestion des événements.

## Propriétés spécifiques

### Variables associées

Deux variables spécifiques sont automatiquement associées à chaque zone Web :

- [`URL`](properties_WebArea.md#url) -- pour contrôler l’URL affiché par la zone Web
- [`Progression`](properties_WebArea.md#progression) -- pour contrôler le pourcentage de chargement de la page affichée dans la zone Web.

### Moteur de rendu Web

Vous pouvez choisir entre [deux moteurs de rendus](properties_WebArea.md#use-embedded-web-rendering-engine) pour la zone Web, en fonction des spécificités de votre application.

Le moteur de rendu Web vous permet d'appeler des méthodes 4D à partir de la zone Web.

### Accéder aux méthodes 4D

Lorsque la propriété [Accès méthodes 4D](properties_WebArea.md#access-4d-methods) est cochée, vous pouvez appeler des méthodes 4D à partir d'une zone Web.

> This property is only available if the Web area [uses the embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

### Objet $4d

The [4D embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.

Par exemple, pour appeler la méthode 4D `HelloWorld`, vous devez simplement exécuter la déclaration suivante :

```js
$4d.HelloWorld();
```
> JavaScript est sensible à la casse. Il est donc important de noter que l'objet est nommé $4d (avec un "d" minuscule).

La syntaxe des appels aux méthodes 4D est la suivante :

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN` : Vous pouvez passer autant de paramètres que vous le souhaitez dans la méthode 4D. Ces paramètres peuvent être de n'importe quel type pris en charge par JavaScript (chaîne, numérique, tableau, objet).

- `function(result)` : Fonction à passer comme dernier argument. Cette fonction "callback" est appelée de manière synchrone une fois que la méthode 4D a fini de s'exécuter. Elle reçoit le paramètre `result`.

- `result`: Résultat de l'exécution de la méthode 4D, retournée dans l'expression "$0". Ce résultat peut être de n'importe quel type pris en charge par JavaScript (chaîne, numérique, tableau, objet). Vous pouvez utiliser la commande `C_OBJECT` pour retourner les objets.

> Par défaut, 4D travaille en UTF-8. Lorsque vous retournez du texte contenant des caractères étendus, tels que des caractères avec des accents, assurez-vous que l'encodage de la page affiché dans la zone Web est déclaré en UTF-8, sinon les caractères risquent de ne pas être retournés correctement. In this case, add the following line in the HTML page to declare the encoding: `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Exemple 1

Considérons une méthode projet 4D nommée `today` qui ne reçoit pas de paramètres et qui retourne la date courante dans une chaîne.

Code 4D de la méthode `today` :

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

Dans la zone Web, la méthode 4D peut être appelée avec la syntaxe suivante :

```js
$4d.today()
```

La méthode 4D ne reçoit aucun paramètre mais elle retourne la valeur $0 à la fonction callback appelée par 4D après avoir exécuté la méthode. Nous souhaitons afficher la date dans la page HTML qui est chargée par la zone Web.

Voici le code de la page HTML :

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

La méthode projet 4D `calcSum` reçoit des paramètres (`$1...$n`) et retourne leur somme dans `$0` :

Code 4D de la méthode `calcSum` :

```4d
 C_REAL(${1}) // reçoit n paramètres de type REEL
 C_REAL($0) // retourne un Réel
 C_LONGINT($i;$n)
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+${$i}
 End for
```

Le code d'exécution JavaScript dans la zone Web est le suivant :

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // le résultat est 262.5
    });
```

## Actions standard

Quatre actions standard sont disponibles pour gérer automatiquement les zones Web : `Open Back URL`, `Open Next URL`, `Refresh Current URL` and `Stop Loading URL`. Ces actions peuvent être associées à des boutons ou des commandes de menu et permettre une implémentation rapide d'interfaces Web basiques. Ces actions sont décrites dans [Actions standard](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).

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
- **Glisser-déposer** : l’utilisateur peut effectuer des glisser-déposer de textes, d’images ou de documents à l’intérieur d’une zone Web ou entre une zone Web et les objets des formulaires 4D, en fonction des propriétés des objets 4D. Pour des raisons de sécurité, le changement du contenu d'une zone Web via le glisser-déposer d'un fichier ou d'un URL n'est pas autorisé par défaut. Dans ce cas, le curseur de la souris affiche une icône d'interdiction ![](../assets/en/FormObjects/forbidden.png). La possibilité de déposer des URL ou des fichiers dans la zone doit être explicitement autorisée à l'aide de la commande `WA SET PREFERENCE`.

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

- [Le moteur de rendu Web intégré doit être sélectionné](properties_WebArea.md#use-embedded-web-rendering-engine) pour la zone (l’inspecteur Web n’est disponible que dans cette configuration).
- [Le menu contextuel](properties_Entry.md#context-menu) de la zone doit être activé (l’appel de l’inspecteur est effectué via ce menu)
- L’usage de l’inspecteur doit être expressément autorisé pour la zone à l’aide de l’instruction suivante :

```4d
 WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

### Utilisation de l’Inspecteur Web

Lorsque les paramétrages décrits ci-dessus sont effectués, vous disposez de nouvelles options telles que **Inspect Element** dans le menu contextuel de la zone. Lorsque vous sélectionnez cette option, le débogueur de la zone Web est alors affiché.

> L’inspecteur Web est inclus dans le moteur de rendu intégré. Pour une description détaillée des fonctionnalités de ce débogueur, veuillez vous reporter à la documentation du moteur de rendu Web utilisé.

## Propriétés prises en charge

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
