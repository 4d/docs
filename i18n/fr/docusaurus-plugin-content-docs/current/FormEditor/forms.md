---
id: forms
title: Formulaires
---

Les formulaires fournissent l'interface par laquelle les informations sont saisies, modifiées et imprimées dans une application de bureau. A l'aide des formulaires, les utilisateurs peuvent interagir avec les données d'une base de données et imprimer des rapports. Les formulaires permettent de créer des boîtes de dialogue personnalisées, des palettes ou toute fenêtre personnalisée.

![](../assets/en/FormObjects/form1.png)

Les formulaires peuvent également contenir d'autres formulaires grâce aux fonctionnalités suivantes :

- [objets de sous-formulaire](FormObjects/subform_overview.md)
- [formulaires hérités](./properties_FormProperties.md#inherited-form-name)

## Création de formulaires

Vous pouvez ajouter ou modifier des formulaires 4D à l'aide des éléments suivants :

- **L'interface 4D Developer :** Créez de nouveaux formulaires à partir du menu **Fichier** ou de la fenêtre de l'**Explorateur**.
- **L'éditeur de formulaires **: Modifiez vos formulaires à l'aide de l'**[éditeur de formulaires](FormEditor/formEditor.md)**.
- **Le code JSON :** Créez et concevez vos formulaires à l'aide de JSON et enregistrez les fichiers de formulaire à [l'emplacement approprié](Project/architecture#sources). Exemple :

```
{
    "windowTitle": "Hello World",
    "windowMinWidth": 220,
    "windowMinHeight": 80,
    "method": "HWexample",
    "pages": [
        null,
        {
            "objects": {
                "text": {
                "type": "text",
                "text": "Hello World!",
                "textAlign": "center",
                "left": 50,
                "top": 120,
                "width": 120,
                "height": 80
                },
                "image": {
                "type": "picture",
                "pictureFormat": "scaled",
                "picture": "/RESOURCES/Images/HW.png",
                "alignment":"center", 
                "left": 70,
                "top": 20, 
                "width":75, 
                "height":75        
                },
                "button": {
                "type": "button",
                "text": "OK",
                "action": "Cancel",
                "left": 60,
                "top": 160,


                "width": 100,
                "height": 20
                }
            }
        }
    ]
}
```

## Using forms

Forms are called using specific commands of the 4D Language. In your 4D desktop applications, forms can be used in various ways, depending on their status within your interface needs. A form can be:

- used in its own window for data viewing, processing, editing, or to display on-screen information to the user,
- used as template for printing,
- used embedded in another form (subform),
- or called by specific features like the Label editor.

### Using a project form in a window

When you want to use a form as on-screen dialog, you need to (1) create a window and (2) load the form within the window, along with an event loop to process user actions. The straighforward steps to display a form on screen are:

1. Call the [`Open form window`](../commands/open-form-window) command to create and preconfigure a window tailored for your form. Note that the command only draw aan empty window, it does not display anything.
2. In the same method, call the [`DIALOG`](../commands/dialog) command to actually load the form in the opened form window, ready for user interaction. [`DIALOG`](../commands/dialog) loads form data and places your code in listening mode to user events. When you call this command without asterisk (\*), the dialog will stay on screen and the code execution is frozen until an event occurs (see also ["Event listening" paragraph](../Develop/async.md#event-listening)).
3. (optional) Use the [`Form`](../commands/form) command from within the form context to access form data.

::note Compatibilité

All-in-one commands such as [`ADD RECORD`](../commands/add-record) or [`MODIFY RECORD`](../commands/add-record) merge all steps in a single call. These legacy commands can still be used for prototyping or basic developments but are not adapted to modern, fully controlled interfaces. They directly rely on the 4D database and legacy features such as [table forms](#project-form-and-table-form) and do not benefit from the power and flexibility of [ORDA features](../ORDA/overview.md). Unless specific needs, it is recommended to use project forms for your 4D desktop application interfaces.

:::

#### Simple example

You create the following basic form in the [Form editor](./formEditor.md):

![](../assets/en/FormEditor/example-form-1.png)

The form is [associated with a "myForm" class](./properties_FormProperties.md#form-class), defined as follow:

```4d
    //cs.myForm
property name : Text
property age : Integer

Class constructor
  This.name:=""
  This.age:=0
```

The form class is automatically instantiated by 4D once the form is loaded. If you execute the following project method:

```4d
    // Instantiate a form object that will host form data and UI logic
var $formObject:=cs.myForm.new()

    //Prepare default value within the form object
$formObject.name:="Smith"
$formObject.age:=42

    // Create an empty window with ad-hoc settings that fits the desired form dimensions, resizing properties,
    // and window type (this does not render the form)
var $win:=Open form window("myForm"; Movable form dialog box; Horizontally centered; Vertically centered)

    //Render the form, and provide $formObject's data. Dialog also activates the form event loop
DIALOG("myForm"; $formObject)

    //Without asterisk to Dialog statement, the form waits for a closing action from the user 
    //before executing the rest of the code. Calling Close window is just a good practice 
CLOSE WINDOW($win) //releases reference

    //Display data modified by the user, if any/
ALERT($formObject.name+" is "+String($formObject.age)+" years old!")

```

4D displays:

![](../assets/en/FormEditor/example-form-2.png)

### Using forms as subforms

A form can be embedded within another form, in which case it becomes a [subform object](../FormObjects/subform_overview.md) which follows specific rules. A subform is automatically used when its parent form is [displayed in a window](#using-a-project-form-in-a-window).

In the same way that you pass an object to a form with the [`DIALOG`](../commands/dialog) command, you can also pass an object to a subform area using the property list. Then, you can use it in the subform with the [`Form`](../commands/form) command. In this example, the "InvoiceAddress" object is bound to the subform:

![](../assets/en/FormEditor/subform-example.png)

### Using forms to be printed

You can use forms to print data, either as page or as list.

- To simply print some part of a form, use the [`Print form`](../commands/print-form) command. Par exemple :

```4d
var $formData:={}
$formData.lastname:="Smith"
$formData.firstname:="john"
$formData.request:="I need more COFFEE"
var $h:=Print form("Request_var";$formData;Form detail)
```

- To print a form within a printing job to process data during printing, use [`FORM LOAD`](../commands/form-load) and [`Print object`](../commands/print-object) commands. Par exemple :

```4d
 var $formData : Object
 var $over : Boolean
 var $full : Boolean
 
 OPEN PRINTING JOB
 $formData:={}
 $formData.LBcollection:=[]
 ... //fill the collection with data
 
 FORM LOAD("GlobalForm";$formData) 
 $over:=False
 Repeat
    $full:=Print object(*;"LB") // the datasource of this "LB" listbox is Form.LBcollection
    LISTBOX GET PRINT INFORMATION(*;"LB";lk printing is over;$over)
    If(Not($over))
       PAGE BREAK
    End if
 Until($over)
 FORM UNLOAD
 CLOSE PRINTING JOB
```

### Other form usages

There are several other ways to use forms in the 4D applications, including:

- a form can be [inherited](#inherited-forms) from another form,
- a form can be [associated to a listbox](../FormObjects/properties_ListBox.md#detail-form-name) in response to a user action to display a row using an edit button or a double-click,
- the [label editor can use a form](../Desktop/labels.md#form-to-use) as template to print labels.

## Formulaire projet et formulaire table

Il existe deux catégories de formulaires :

- **Les formulaires projet** - Formulaires indépendants qui ne sont rattachés à aucune table. Ils sont destinés plus particulièrement à la création de boîtes de dialogue d'interface et de composants. Les formulaires projet peuvent être utilisés pour créer des interfaces facilement conformes aux normes du système d'exploitation.

- **Les formulaires table** - Rattachés à des tables spécifiques et bénéficient ainsi de fonctions automatiques utiles pour développer des applications basées sur des bases de données. En règle générale, une table possède des formulaires d'entrée et de sortie séparés.

En règle générale, vous sélectionnez la catégorie de formulaire lorsque vous créez le formulaire, mais vous pouvez la modifier par la suite.

## Pages formulaire

Chaque formulaire est composé d'au moins deux pages :

- une page 1 : une page principale, affichée par défaut
- une page 0 : une page de fond, dont le contenu est affiché sur une page sur deux.

Vous pouvez créer plusieurs pages pour un formulaire d'entrée. Si le nombre de champs ou de variables est supérieur au nombre maximal supporté sur un écran, vous pouvez créer des pages supplémentaires pour les afficher. Plusieurs pages vous permettent d'effectuer les opérations suivantes :

- Placer les informations les plus importantes sur la première page et les informations les moins importantes sur les autres pages.
- Organiser chaque sujet sur sa propre page.
- Réduire ou éliminer le défilement pendant la saisie des données en définissant [l'ordre de saisie](formEditor.md#data-entry-order).
- Définir de l'espace autour des éléments du formulaire pour un design d'écran attrayant.

Les pages multiples sont utiles uniquement pour les formulaires d'entrée. Elles ne sont pas destinées à être imprimées. Lorsqu'un formulaire de plusieurs pages est imprimé, seule la première page est imprimée.

Il n'y a aucune restriction sur le nombre de pages qu'un formulaire peut contenir. Le même champ peut apparaître en un nombre de fois illimité dans un formulaire et sur autant de pages que vous le souhaitez. Toutefois, plus vous aurez de pages dans un formulaire, plus il sera long à afficher.

Un formulaire multi-pages contient à la fois une page d'arrière-plan et plusieurs pages d'affichage. Les objets placés sur la page d'arrière-plan peuvent être visibles sur toutes les pages d'affichage, mais il ne peuvent être sélectionnés et modifiés que sur la page d'arrière-plan. Dans les formulaires multi-pages, vous devez placer votre palette de boutons sur la page d'arrière-plan. Vous devez également inclure un ou plusieurs objets sur la page d'arrière-plan qui fournissent à l'utilisateur des outils de navigation de page.

## Rendu Fluent UI

:::caution Developer Preview

La prise en charge de Fluent UI est actuellement en phase d'aperçu pour les développeurs. Il ne doit pas être utilisé en production.

:::

Sous Windows, 4D prend en charge le rendu de formulaire **Fluent UI**, l'interface utilisateur graphique moderne de Microsoft, basée sur la technologie **WinUI 3**. **WinUI 3** est la base du Windows App SDK et représente les prochaines interfaces graphiques de Windows.

Le rendu Fluent UI offre des contrôles modernes et agréables, la prise en charge des thèmes système dark/light, un rendu plus fluide optimisé pour les écrans haute résolution et une expérience utilisateur cohérente alignée sur les applications Microsoft récentes.

| Thème clair                             | Thème sombre                                 |
| --------------------------------------- | -------------------------------------------- |
| ![](../assets/en/FormEditor/fluent.png) | ![](../assets/en/FormEditor/fluent-dark.png) |

:::info Disponibilité

Cette fonction peut être utilisée **dans les projets 4D sous Windows**. Elle n'est pas disponible sur macOS ou dans les bases de données binaires 4D sous Windows.

:::

:::tip Articles de blog sur le sujet

[Modernisez vos interfaces 4D avec Fluent UI](https://blog.4d.com/modernize-your-4d-interfaces-with-fluent-ui)<br/>
[Déployez Fluent UI sans effort dans vos applications 4D](https://blog.4d.com/deploy-fluent-ui-effortlessly-in-your-4d-applications)

:::

### Conditions requises

Le rendu Fluent UI nécessite que **Windows App SDK** soit installé sur votre machine. Vous devez vous assurer que ce SDK est installé sur toute machine Windows affichant vos formulaires.

[Si nécessaire](https://blog.4d.com/deploy-fluent-ui-effortlessly-in-your-4d-applications), vous pouvez installer le Windows App SDK. Pour plus de commodité, le programme d'installation 4D [fournit un lien](../GettingStarted/Installation.md#installation-on-disk) pour télécharger le programme d'installation Windows App SDK. Vous pouvez également vous rendre sur la [page de téléchargement Microsoft](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/downloads). Nous recommandons d'utiliser la version référencée par le programme d'installation de 4D, qui offre une compatibilité optimale.

Si Windows App SDK n'est pas correctement installé, 4D rendra tous vos formulaires en mode classique sans erreur et le warning suivant sera enregistré dans le [journal de diagnostic](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) : "Fluent UI is required but not available. The application runs in the Classic Windows look."

### Activer le rendu Fluent UI

Vous pouvez activer le mode de rendu Fluent UI au niveau de l'application ou au niveau du formulaire. Le paramétrage du formulaire a la priorité par rapport aux paramètres de l'application.

#### Paramètres de l'application

Cochez l'option **Utiliser Fluent UI sous Windows** dans la page "Interface" de la boîte de dialogue des Propriétés.

![](../assets/en/FormObjects/fluentui-setting.png)

Dans ce cas, le mode de rendu Fluent UI sera utilisé par défaut sur Windows pour tous les formulaires.

:::note

Si la configuration courante n'est pas conforme aux [conditions requises pour Fluent UI](#requirements), un message d'erreur s'affiche à côté de la case à cocher.

:::

#### Paramètres du formulaire

Chaque formulaire peut définir son propre rendu via la propriété **Apparence des contrôles**. Les options suivantes sont disponibles :

- **Hérité** : hérite des propriétés globales de l'application (par défaut),
- **Classic** : utilise le style classique de Windows,
- **Fluent UI** : active le rendu moderne basé sur Fluent UI. <br/>
  ![](../assets/en/FormObjects/fluentui-form.png)

La [propriété de formulaire JSON](./properties_JSONref.md) correspondante est `fluentUI` avec la valeur undefined (i.e. hérité, valeur par défaut), "true" ou "false".

#### CSS

Le [media query CSS **form-theme**](./createStylesheet.md#media-queries) vous permet de configurer plusieurs styles en fonction du thème utilisé.

### Comportements spécifiques

Lorsque vous utilisez les formulaires 4D avec le rendu Fluent UI, vous devez prêter attention aux points suivants :

- La commande [`FORM theme`](../commands/form-theme) renvoie le thème d'affichage réel du formulaire courant. Valeurs possibles : "Classic" ou "FluentUI". S'il n'y a pas de formulaire courant ou si la commande est appelée sous macOS, une chaîne vide est renvoyée.
- La commande [`Application info`](../commands/application-info) vous permet de savoir si Fluent UI peut être utilisé (propriété `canUseFluentUI`) ou est utilisé (propriété `useFluentUI`).
- Si [`GET STYLE SHEET INFO`](../commands/get-style-sheet-info) est appelée dans le contexte d'un formulaire, les informations renvoyées concernent l'apparence courante du formulaire (Classic ou FluentUI). Si la commande est appelée en dehors du contexte d'un formulaire, les informations renvoyées concernent les [propriétés globales du projet](#application-setting).
- [`SET MENU ITEM STYLE`](../commands/set-menu-item-style) avec le paramètre *itemStyle* `Underline` n'est pas pris en charge (ignoré) pour les menus pop up.
- L'objet de formulaire [Stepper](../FormObjects/stepper.md) ne prend pas en charge l'événement [double-clic](../Events/onDoubleClicked.md).
- Les [boutons circulaires](../FormObjects/button_overview.md#circle) sont pris en charge (comme sur macOS).
- Les commandes [`WA ZOOM IN`](../commands/wa-zoom-in) / [`WA ZOOM OUT`](../commands/wa-zoom-out) ne sont pas prises en charge dans les zones Web avec moteur de rendu système.
- Un rectangle de focus peut être ajouté aux [zones de saisie](../FormObjects/input_overview.md) image et texte.

## Formulaires hérités

Les formulaires 4D peuvent utiliser et être utilisés comme «formulaires hérités», ce qui signifie que tous les objets du *Formulaire A* peuvent être utilisés dans le *Formulaire B*. Dans ce cas, *Formulaire B* "hérite" des objets du *Formulaire A*.

Les références à un formulaire hérité est toujours active : si un élément d'un formulaire hérité est modifié (par exemple le style des boutons), tous les formulaires qui l’utilisent seront automatiquement modifiés.

Tous les formulaires (formulaires table et formulaires projet) peuvent être désignés comme un formulaire hérité. Cependant, les éléments qu'ils contiennent doivent être compatibles avec une utilisation dans différentes tables de base de données.

A l’exécution du formulaire, les objets sont chargés et combinés dans l’ordre suivant :

1. Page zéro du formulaire hérité
2. Page 1 du formulaire hérité
3. Page zéro du formulaire ouvert
4. Page courante du formulaire ouvert.

Cet ordre détermine [l'ordre de saisie](formEditor.md#data-entry-order) par défaut des objets dans le formulaire.

> Seules les pages 0 et 1 du formulaire hérité peuvent apparaître dans les autres formulaires.

Les propriétés ainsi que la méthode d’un formulaire ne sont pas prises en compte lorsque celui-ci est utilisé comme formulaire hérité. En revanche, les méthodes des objets qu’il contient sont appelées.

Pour définir un formulaire hérité, les propriétés [Nom du formulaire hérité](properties_FormProperties.md#inherited-form-name) et [Table du formulaire hérité](properties_FormProperties.md#inherited-form-table) (pour un formulaire table) doivent être définies dans le formulaire qui héritera de quelque chose d'un autre formulaire.

Un formulaire peut hériter d'un formulaire projet, en configurant la propriété [Table du formulaire hérité](properties_FormProperties.md#inherited-form-table) sur `\<aucun>` dans la liste des propriétés (ou " " dans JSON).

Pour stopper l’héritage d’un formulaire, choisissez l’option `\<aucun>` dans la Liste des propriétés (ou " " dans JSON) pour la propriété [Nom du formulaire hérité](properties_FormProperties.md#inherited-form-name).

> Il est possible de définir un formulaire hérité dans un formulaire qui servira à son tour de formulaire hérité pour un troisième formulaire. La combinaison des objets s’effectue alors de manière récursive. 4D détecte les boucles récursives (par exemple si le formulaire [table1]form1 est défini comme formulaire hérité de [table1]form1, c’est-à-dire de lui-même) et interrompt le chaînage des formulaires.

## Propriétés prises en charge

[Barre de menu associée](properties_Menu.md#associated-menu-bar) - [Hauteur fixe](properties_WindowSize.md#fixed-height) - [Largeur fixe](properties_WindowSize.md#fixed-width) - [Saut de formulaire](properties_Markers.md#form-break) - [Détail du formulaire](properties_Markers.md#form-detail) - [Pied de formulaire](properties_Markers.md#form-footer) - [En-tête de formulaire](properties_Markers.md#form-header) - [Nom du formulaire](properties_FormProperties.md#form-name) - [Type de formulaire](properties_FormProperties.md#form-type) - [Nom du formulaire hérité](properties_FormProperties.md#inherited-form-name) - [Tableau de formulaire hérité](properties_FormProperties.md#inherited-form-table) - [Hauteur maximale](properties_WindowSize.md#maximum-height-minimum-height) - [Largeur maximale](properties_WindowSize.md#maximum-width-minimum-width) - [Méthode](properties_Action.md#method) - [Hauteur minimale](properties_WindowSize.md#maximum-height-minimum-height) - [Largeur minimale](properties_WindowSize.md#maximum-width-minimum-width) - [Pages](properties_FormProperties.md#pages) - [Paramètres d'impression](properties_Print.md#settings) - [Publié en tant que sous-formulaire](properties_FormProperties.md#published-as-subform) - [Enregistrer la géométrie](properties_FormProperties.md#save-geometry) - [Titre de la fenêtre](properties_FormProperties.md#window-title)

## Supported Events

[On Activate](../Events/onActivate.md) - [On After Edit](../Events/onAfterEdit.md) - [On After Keystroke](../Events/onAfterKeystroke.md) - [On Before Keystroke](../Events/onBeforeKeystroke.md) - [On Begin Drag Over](../Events/onBeginDragOver.md) - [On Bound Variable Change](../Events/onBoundVariableChange.md) - [On Clicked](../Events/onClicked.md) - [On Close Box](../Events/onCloseBox.md) - [On Close Detail](../Events/onCloseDetail.md) - [On Data Change](../Events/onDataChange.md) - [On Deactivate](../Events/onDeactivate.md) - [On Display Detail](../Events/onDisplayDetail.md) - [On Double Clicked](../Events/onDoubleClicked.md) - [On Drop](../Events/onDrop.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Load Record](../Events/onLoadRecord.md) - [On Losing focus](../Events/onLosingFocus.md) - [On Menu Selected](../Events/onMenuSelected.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Open Detail](../Events/onOpenDetail.md) - [On Outside Call](../Events/onOutsideCall.md) - [On Page Change](../Events/onPageChange.md) - [On Plug in Area](../Events/onPlugInArea.md) - [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Resize](../Events/onResize.md) - [On Selection Change](../Events/onSelectionChange.md) - [On Timer](../Events/onTimer.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)