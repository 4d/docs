---
id: webAreaOverview
title: Zone Web
---

## Aperçu

Web areas can display various types of web content within your forms: HTML pages with static or dynamic contents, files, pictures, JavaScript, etc. The rendering engine of the web area depends on the execution platform of the application and the selected [rendering engine option](properties_WebArea.md#use-embedded-web-rendering-engine).

It is possible to create several web areas in the same form. Note, however, that the use of web areas must follow [several rules](#web-areas-rules).

Several dedicated [standard actions](#standard-actions), numerous [language commands](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) as well as generic and specific [form events](#form-events) allow the developer to control the functioning of web areas. Des variables spécifiques permettent d’échanger des informations entre la zone et l’environnement 4D.
> The use of web plugins and Java applets is not recommended in web areas because they may lead to instability in the operation of 4D, particularly at the event management level.


## Propriétés spécifiques

### Variables associées

Two specific variables can be associated with each web area:
- [`URL`](properties_WebArea.md#url) --to control the URL displayed by the web area
- [`Progression`](properties_WebArea.md#progression) -- to control the loading percentage of the page displayed in the web area.

### Moteur de rendu Web

You can choose between [two rendering engines](properties_WebArea.md#use-embedded-web-rendering-engine) for the web area, depending on the specifics of your application.

Selecting the embedded web rendering engine allows you to call 4D methods from the web area.

### Accéder aux méthodes 4D
When the [Access 4D methods](properties_WebArea.md#access-4d-methods) property is selected, you can call 4D methods from a web area.

> This property is only available if the web area [uses the embedded web rendering engine](#use-embedded-web-rendering-engine).

### Objet $4d




The [4D embedded web rendering engine](#use-embedded-web-rendering-engine) supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.

Par exemple, pour appeler la méthode 4D `HelloWorld`, vous devez simplement exécuter la déclaration suivante :

```codeJS
$4d.HelloWorld();
```
> JavaScript est sensible à la casse. Il est donc important de noter que l'objet est nommé $4d (avec un "d" minuscule).

La syntaxe des appels aux méthodes 4D est la suivante :

```codeJS
$4d.4DMethodName(param1,paramN,function(result){})
```
- `param1...paramN` : Vous pouvez passer autant de paramètres que vous le souhaitez dans la méthode 4D. Ces paramètres peuvent être de n'importe quel type pris en charge par JavaScript (chaîne, numérique, tableau, objet).

- `function(result)` : Fonction à passer comme dernier argument. Cette fonction "callback" est appelée de manière sychronisée une fois que la méthode 4D a fini de s'exécuter. Elle reçoit le paramètre `result`.

- `result`: Résultat de l'exécution de la méthode 4D, retournée dans l'expression "$0". Ce résultat peut être de n'importe quel type pris en charge par JavaScript (chaîne, numérique, tableau, objet). Vous pouvez utiliser la commande `C_OBJECT` pour retourner les objets.

> Par défaut, 4D opère en UTF-8. Lorsque vous retournez du texte contenant des caractères étendus, tels que des caractères avec des accents, assurez-vous que l'encodage de la page affiché dans la zone Web est déclaré en UTF-8, sinon les caractères risquent de ne pas être retournés correctement. Dans ce cas, ajoutez la ligne suivante dans la page HTML pour déclarer l'encodage : `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Exemple 1
Considérons une méthode projet 4D nommée `today` qui ne reçoit pas de paramètres et qui retourne la date courante dans une chaîne.

Code 4D de la méthode `today` :

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

In the web area, the 4D method can be called with the following syntax:

```js
$4d.today()
```

La méthode 4D ne reçoit aucun paramètre mais elle retourne la valeur $0 à la fonction callback appelée par 4D après avoir exécuté la méthode. We want to display the date in the HTML page that is loaded by the web area.

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

The JavaScript code run in the web area is:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // le résultat est 262.5
    });
```


## Actions standard

Four specific standard actions are available for managing web areas automatically: `Open Back URL`, `Open Next URL`, `Refresh Current URL` and `Stop Loading URL`. These actions can be associated with buttons or menu commands and allow quick implementation of basic web interfaces. Ces actions sont décrites dans [Actions standard](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).


## Evénements formulaire

Specific form events are intended for programmed management of web areas, more particularly concerning the activation of links:

- `On Begin URL Loading`
- `On URL Resource Loading`
- `On End URL Loading`
- `On URL Loading Error`
- `On URL Filtering`
- `On Open External Link`
- `On Window Opening Denied`

In addition, web areas support the following generic form events:

- `On Load`
- `On Unload`
- `On Getting Focus`
- `On Losing Focus`


## Notes d'utilisation des zones Web

### Interface utilisateur

When the form is executed, standard browser interface functions are available to the user in the web area, which permit interaction with other form areas:

- **Edit menu commands**: When the web area has the focus, the **Edit** menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.
- **Context menu**: It is possible to use the standard [context menu](properties_Entry.md#context-menu) of the system with the web area. L’affichage de ce menu peut également être contrôlé via la commande `WA SET PREFERENCE`.
- **Drag and drop**: The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties. For security reasons, changing the contents of a web area by means of dragging and dropping a file or URL is not allowed by default. In this case, the cursor displays a "forbidden" icon ![](assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE` command to explicitly allow the dropping of URLs or files in the web area.

### Sous-formulaires
For reasons related to window redrawing mechanisms, the insertion of a web area into a subform is subject to the following constraints:

- Le sous-formulaire ne doit pas pouvoir défiler,
- The limits of the web area must not exceed the size of the subform

> Superimposing a web area on top of or beneath other form objects is not supported.


### Conflit Zone Web et serveur Web (Windows)
In Windows, it is not recommended to access, via a web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own web server.

### Plugins Web et applets Java
The use of web plugins and Java applets is not recommended in web areas because they may lead to instability in the operation of 4D, particularly at the event management level.

### Insertion du protocole (macOS)
The URLs handled by programming in web areas in macOS must begin with the protocol. Par exemple, vous devez passer la chaîne "http://www.monsite.fr" et non uniquement "www.monsite.fr".


## Access to web inspector
You can view and use a web inspector within web areas in your forms or in offscreen web areas. The web inspector is a debugger which is provided by the embedded Web engine. It allows parsing the code and the flow of information of the web pages.

### Displaying the web inspector
To display the web inspector, you can either execute the `WA OPEN WEB INSPECTOR` command, or use the context menu of the web area.

- **Execute the `WA OPEN WEB INSPECTOR` command**<br> This command can be used directly with onscreen (form object) and offscreen web areas. In the case of an onscreen web area, you must have [selected the embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) for the area (the web inspector is only available with this configuration).

- **Use the web area context menu**<br> This feature can only be used with onscreen web areas and requires that the following conditions are met:
    - the embedded web rendering engine is selected for the area
    - the [context menu](properties_Entry.md#context-menu) for the web area is enabled
    - the use of the inspector is expressly enabled in the area by means of the following statement:

```4d
    WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

For more information, refer to the description of the `WA SET PREFERENCE` command.

### Using the web inspector
When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. When you select this option, the web inspector window is displayed.

> The web inspector is included in the embedded web rendering engine. For a detailed description of the features of this debugger, refer to the documentation provided by the web rendering engine.




## Propriétés prises en charge

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 





