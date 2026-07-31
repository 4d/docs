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

### Formulaire projet et formulaire table

Il existe deux catégories de formulaires :

- **Les formulaires projet** - Formulaires indépendants qui ne sont rattachés à aucune table. Ils sont destinés plus particulièrement à la création de boîtes de dialogue d'interface et de composants. Les formulaires projet peuvent être utilisés pour créer des interfaces facilement conformes aux normes du système d'exploitation.

- **Les formulaires table** - Rattachés à des tables spécifiques et bénéficient ainsi de fonctions automatiques utiles pour développer des applications basées sur des bases de données. En règle générale, une table possède des formulaires d'entrée et de sortie séparés.

En règle générale, vous sélectionnez la catégorie de formulaire lorsque vous créez le formulaire, mais vous pouvez la modifier par la suite.

## Utilisation des formulaires

Les formulaires sont appelés à l'aide de commandes spécifiques du langage 4D. Dans vos applications de bureau 4D, les formulaires peuvent être utilisés de différentes manières, en fonction de leur statut par rapport à vos besoins d'interface. Un formulaire peut être :

- utilisé dans sa propre fenêtre pour la visualisation de données, le traitement, l'édition ou l'affichage à l'écran d'informations à l'utilisateur,
- utilisé dans un autre formulaire (sous-formulaire),
- utilisé comme modèle pour l'impression,
- ou appelé par des fonctionnalités spécifiques comme l'éditeur d'étiquettes.

### Utilisation d'un formulaire projet dans une fenêtre

Lorsque vous voulez utiliser un formulaire comme boîte de dialogue à l'écran, vous devez (1) créer une fenêtre et (2) charger le formulaire dans la fenêtre, avec une boucle d'événements pour traiter les actions de l'utilisateur. Les principales étapes pour afficher un formulaire à l'écran sont les suivantes :

1. Appelez la commande [`Open form window`](../commands/open-form-window) pour créer et préconfigurer une fenêtre adaptée à votre formulaire. Notez que la commande dessine uniquement une fenêtre vide, elle n'affiche **rien**.
2. Dans la même méthode, appelez la commande [`DIALOG`](../commands/dialog) pour effectivement charger le formulaire dans la fenêtre formulaire ouverte, prêt à l'interaction avec l'utilisateur. [`DIALOG`](../commands/dialog) charge les données du formulaire et place votre code en [mode d'écoute des événements utilisateur](../Develop/async.md#event-listening). Lorsque vous appelez cette commande sans astérisque (\*), la boîte de dialogue restera à l'écran et l'exécution du code sera bloquée jusqu'à ce qu'un événement se produise.
3. (facultatif) Utilisez la commande [`Form`](../commands/form) depuis le contexte du formulaire pour accéder aux données du formulaire.

:::note Compatibilité

Les commandes tout-en-un telles que [`ADD RECORD`](../commands/add-record) ou [`MODIFY RECORD`](../commands/add-record) fusionnent toutes les étapes en un seul appel. Ces commandes anciennes peuvent toujours être utilisées pour le prototypage ou les développements simples, mais ne sont pas adaptées aux interfaces modernes nécessitant un contrôle granulaire. Elles s'appuient directement sur la base de données 4D et les fonctionnalités historiques telles que les [formulaires tables](#project-form-and-table-form) et ne bénéficient pas de la puissance et de la flexibilité des [fonctionnalités ORDA](../ORDA/overview.md). Hormis pour des besoins spécifiques, il est recommandé d'utiliser des formulaires projet pour vos interfaces d'applications de bureau 4D.

:::

#### Exemple simple

Vous créez le formulaire de base suivant dans l'[éditeur de formulaires](./formEditor.md) :

![](../assets/en/FormEditor/example-form-1.png)

Le formulaire est [associé à une classe "myForm"](./properties_FormProperties.md#form-class), définie comme suit :

```4d
    //cs.myForm
property name : Text
property age : Integer

Class constructor
  This.name:=""
  This.age:=0
```

La classe du formulaire est automatiquement instanciée par 4D une fois que le formulaire est chargé. Si vous exécutez la méthode projet suivante :

```4d
    // Instancie un objet formulaire qui va héberger les données du formulaire et la logique UI
var $formObject:=cs.myForm.new()

    //Prépare les valeurs par défaut dans l'objet formulaire
$formObject.name:="Smith"
$formObject.age:=42

    // Crée une fenêtre vide avec des paramètres ad hoc correspondant aux propriétés de dimensions et de redimensionnement souhaitées,
    // ainsi que de type de fenêtre (le formulaire n'est pas dessiné)
var $win:=Open form window("myForm"; Movable form dialog box; Horizontally centered; Vertically centered)

    //Dessine le formulaire et fournit les données de $formObject. Active également la boucle d'événements du formulaire
DIALOG("myForm"; $formObject)

    //Sans astérisque à DIALOG, le formulaire attend une action de fermeture de l'utilisateur 
    //avant d'exécuter le reste du code. Appeler CLOSE WINDOW est juste une bonne pratique 
CLOSE WINDOW($win) //libère la référence

    //Affiche les données modifiées par l'utilisateur, le cas échéant
ALERT($formObject.name+" is "+String($formObject.age)+" years old!")

```

4D affiche:

![](../assets/en/FormEditor/example-form-2.png)

### Utilisation de formulaires comme sous-formulaires

Un formulaire peut être intégré dans un autre formulaire, auquel cas il devient un [objet sous-formulaire](../FormObjects/subform_overview.md) qui suit des règles spécifiques. Un sous-formulaire est automatiquement utilisé lorsque son formulaire parent est [affiché dans une fenêtre](#using-a-project-form-in-a-window).

De la même manière que vous passez un objet à un formulaire avec la commande [`DIALOG`](../commands/dialog), vous pouvez également passer un objet à une zone de sous-formulaire en utilisant la liste des propriétés. Vous pouvez ensuite l'utiliser dans le sous-formulaire avec la commande [`Form`](../commands/form). Dans cet exemple, l'objet "InvoiceAddress" est lié au sous-formulaire :

![](../assets/en/FormEditor/subform-example.png)

### Utilisation de formulaires pour l'impression

Dans les applications de bureau 4D, les formulaires peuvent être imprimés à l'aide des différentes [commandes du thème **Printing**](../commands/theme/Printing).

#### Exemples

Vous pouvez utiliser les formulaires pour imprimer des données, soit sous forme de page, soit sous forme de liste.

- Pour imprimer simplement une partie d'un formulaire, utilisez la commande [`Print form`](../commands/print-form). Par exemple :

```4d
var $formData:={}
$formData.lastname:="Smith"
$formData.firstname:="john"
$formData.request:="I need more COFFEE"
var $h:=Print form("Request_var";$formData;Form detail)
```

- Pour imprimer un formulaire dans une tâche d'impression pour traiter les données pendant l'impression, utilisez les commandes [`FORM LOAD`](../commands/form-load) et [`Print object`](../commands/print-object). Par exemple :

```4d
 var $formData : Object
 var $over : Boolean
 var $full : Boolean
 
 OPEN PRINTING JOB
 $formData:={}
 $formData.LBcollection:=[]
 ... //remplir la collection avec des données
 
 FORM LOAD("GlobalForm";$formData) 
 $over:=False
 Repeat
    $full:=Print object(*;"LB") // La source de données de cette list box "LB" est Form.LBcollection
    LISTBOX GET PRINT INFORMATION(*;"LB";lk printing is over;$over)
    If(Not($over))
       PAGE BREAK
    End if
 Until($over)
 FORM UNLOAD
 CLOSE PRINTING JOB
```

#### Moteur de rendu d'impression

4D utilise un moteur de rendu d'impression dédié pour générer des états avec un design adapté à l'impression. Il inclut les principales fonctionnalités suivantes :

- Les widgets interactifs tels que boutons, boutons radio, listes déroulantes, etc. et les effets des interfaces utilisateur modernes tels que le verre, le flou, la transparence ou les effets d'ombre sont convertis en représentations statiques adaptées et mis à plat sous forme de styles imprimables, afin que le document reste lisible et d'apparence professionnelle une fois imprimé.
- La structure, l'espacement et l'alignement sont conservés de sorte que le document imprimé reflète la structure logique du fomulaire à l'écran.
- Le même rendu est produit que le formulaire soit imprimé à partir de macOS ou Windows.

Par exemple, le formulaire suivant :

![](../assets/en/FormEditor/screen_rendering.png)

... sera imprimé avec ce rendu :

![](../assets/en/FormEditor/print_rendering.png)

:::tip Article(s) de blog sur le sujet

[Impression d'interfaces modernes avec une sortie sobre et cohérente](https://blog.4d.com/printing-modern-interfaces-with-clean-consistent-output)

:::

#### Ancien moteur de rendu d'impression

Dans les versions antérieures à 4D 21 R3, un autre moteur de rendu d'impression était utilisé. Cet ancien moteur de rendu dessine simplement les widgets tels qu'ils apparaissent à l'écran. Pour des raisons de compatibilité, cet ancien moteur de rendu est **activé par défaut** dans les projets ou les bases de données converti(e)s depuis des versions antérieures à 4D 21 R3, afin que les formulaires conçus avec ce moteur de rendu continuent d'être imprimés comme précédemment.

Vous pouvez cependant activer le moteur de rendu d'impression moderne à tout moment :

- soit en désélectionnant l'option **Utiliser l'ancien rendu d'impression** dans la [page Compatibilité des propriétés](../settings/compatibility.md) (paramétrage permanent),
- soit en exécutant la commande [`SET DATABASE PARAMETER`](../commands/set-database-parameter) avec le sélecteur `Use legacy print rendering` à 1 (paramétrage volatile).

:::warning Limitation

Pour des raisons techniques, l'ancien rendu d'impression n'est pas disponible avec les formulaires affichés avec [Fluent UI](#fluent-ui-rendering) sur Windows et [Liquid Glass](../Notes/updates.md#support-of-liquid-glass-on-macos) sur macOS. Dans ces contextes, les formulaires sont **toujours imprimés avec le moteur de rendu d'impression moderne**, quelle que soit l'option de compatibilité.

:::

### Autres utilisations des formulaires

Il y a plusieurs autres façons d'utiliser les formulaires dans les applications 4D, en particulier :

- un formulaire peut être [hérité](#inherited-forms) d'un autre formulaire,
- un formulaire peut être [associé à une listbox](../FormObjects/properties_ListBox.md#detail-form-name) pour afficher une ligne en réponse à une action utilisateur via un bouton d'édition ou un double-clic,
- l'[éditeur d'étiquettes peut utiliser un formulaire](../Desktop/labels.md#form-to-use) comme modèle pour imprimer des étiquettes.

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

## Événements pris en charge

[On Activate](../Events/onActivate.md) - [On After Edit](../Events/onAfterEdit.md) - [On After Keystroke](../Events/onAfterKeystroke.md) - [On Before Keystroke](../Events/onBeforeKeystroke.md) - [On Begin Drag Over](../Events/onBeginDragOver.md) - [On Bound Variable Change](../Events/onBoundVariableChange.md) - [On Clicked](../Events/onClicked.md) - [On Close Box](../Events/onCloseBox.md) - [On Close Detail](../Events/onCloseDetail.md) - [On Data Change](../Events/onDataChange.md) - [On Deactivate](../Events/onDeactivate.md) - [On Display Detail](../Events/onDisplayDetail.md) - [On Double Clicked](../Events/onDoubleClicked.md) - [On Drop](../Events/onDrop.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Load Record](../Events/onLoadRecord.md) - [On Losing focus](../Events/onLosingFocus.md) - [On Menu Selected](../Events/onMenuSelected.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Open Detail](../Events/onOpenDetail.md) - [On Outside Call](../Events/onOutsideCall.md) - [On Page Change](../Events/onPageChange.md) - [On Plug in Area](../Events/onPlugInArea.md) - [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Resize](../Events/onResize.md) - [On Selection Change](../Events/onSelectionChange.md) - [On Timer](../Events/onTimer.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)