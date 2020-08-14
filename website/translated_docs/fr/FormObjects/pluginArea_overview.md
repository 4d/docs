---
id: pluginAreaOverview
title: Zone de plug-in
---

## Aperçu

Une zone de plug-in est une zone du formulaire contrôlée par un plug-in. La capacité d’intégrer des plug-ins dans les formulaires permet d’accéder à des possibilités illimitées lorsque vous créez des applications personnalisées. Une zone de plug-in peut réaliser une tâche simple comme l’affichage d’une horloge numérique dans un formulaire, ou plus complexe comme proposer un environnement de traitement de textes, un tableur ou un éditeur graphique.

When opening an application, 4D creates an internal list of the plug-ins [installed in your application](#installing-plug-ins). Once you have inserted a Plug-in Area in a form, you can assign a plug-in to the area directly in the **Type** list in the Property List:

![](assets/en/FormObjects/pluginArea.png)

> Certains plug-ins, comme 4D Internet Commands, ne peuvent pas être utilisés dans des formulaires ou des fenêtres externes. Dans ce cas, ils n’apparaissent pas dans la liste de propriétés.

Si vous dessinez une zone de plug-in trop petite, 4D l’affiche sous forme de bouton dont le libellé est le nom de la variable associée à la zone. En exécution, l’utilisateur peut cliquer sur ce bouton afin d’ouvrir une fenêtre spécifique affichant le plug-in.


### Propriétés avancées

If advanced options are provided by the author of the plug-in, a **Plug-in** theme containing an [**Advanced Properties**](properties_Plugins.md) button may be enabled in the Property list. In this case, you can click this button to set these options, usually through a custom dialog box.


## Installer un plug-in

Pour ajouter un plug-in dans votre environnement 4D, vous devez dans un premier temps quitter votre application 4D. Le chargement des plug-ins s’effectue au lancement de l’application 4D. Pour plus d’informations sur l’installation d’un plug-in, reportez-vous à la section [Installer des plugins ou des composants](https://doc.4d.com/4Dv17R6/4D/17-R6/Installing-plugins-or-components.300-4354866.en.html).


## Créer des plug-ins

Si vous souhaitez concevoir vos propres plug-ins, vous pouvez obtenir des informations détaillées sur l'écriture et la création de plug-ins. 4D fournit un [kit complet (sur github)](https://github.com/4d/4D-Plugin-SDK) pour vous aider à écrire des plug-ins personnalisés.


## Propriétés prises en charge
[Style de la bordure](properties_BackgroundAndBorder.md#border-line-style) - [Bas](properties_CoordinatesAndSizing.md#bottom) - [Propriétés avancées](properties_Plugins.md) - [Class](properties_Object.md#css-class) - [Glissable](properties_Action.md#draggable-and-droppable) - [Déposable](properties_Action.md#draggable-and-droppable) - [Type d'expression](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Hauteur](properties_CoordinatesAndSizing.md#height) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Gauche](properties_CoordinatesAndSizing.md#left) - [Méthode](properties_Action.md#method) - [Nom](properties_Object.md#object-name) - [Type de Plug-in](properties_Object.md#plug-in-kind) - [Droite](properties_CoordinatesAndSizing.md#right) - [Haut](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable ou expression](properties_Object.md#variable-or-expression) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilté](properties_Display.md#visibility) - [Largeur](properties_CoordinatesAndSizing.md#width) 