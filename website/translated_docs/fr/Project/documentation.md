---
id: documentation
title: Documenter un projet
---

## Aperçu

Dans les bases projet, vous pouvez documenter vos méthodes ainsi que vos formulaires, vos tables ou vos champs. La création d'une documentation est particulièrement appropriée pour les bases de données développées par plusieurs programmeurs et constitue généralement une bonne pratique en matière de programmation. La documentation peut contenir une description d'un élément ainsi que toute information nécessaire à la compréhension du fonctionnement de cet élément d'une base de données.

Les éléments de projet suivants acceptent la documentation :

- Méthodes (méthodes base, méthodes composant, méthodes projet, méthodes formulaire, méthodes 4D Mobile, triggers et classes)
- Formulaires
- Tables et champs

Vos fichiers de documentation sont écrits dans la syntaxe Markdown (fichiers .md) à l'aide de n'importe quel éditeur prenant en charge le Markdown. Ils sont stockés en tant que fichiers indépendants dans votre dossier Project.

La documentation s'affiche dans la zone d'aperçu (panneau de droite) de l'Explorateur :

![](assets/en/Project/explorer_Doc.png)

Il peut également être partiellement exposé en tant que [conseils de l'éditeur de code](#viewing-documentation-in-the-code-editor).

## Fichiers documentation

### Nom du fichier de documentation

Documentation files have the same name as their attached element, with the ".md" extension. For example, the documentation file attached to the `myMethod.4dm` project method will be named `myMethod.md`.

In the Explorer, 4D automatically displays the documentation file with the same name as the selected element (see below).

### Documentation file architecture

All documentation files are stored in the `Documentation` folder, located at the first level of the package folder.

The `Documentation` folder architecture is the following:

- **Documentation**
    
    + **Classes** 
        * myClass.md
    * **DatabaseMethods** 
        * onStartup.md
        * ...
    * **Formulaires** 
        * loginDial.md
        * ...
    * **Méthodes** 
        * myMethod.md
        * ...
    * **TableForms** 
        * **1** 
            - input.md
            - ...
        - ...
    - **Triggers** 
        * table1.md
        * ...
* A project form and its project form method share the same documentation file for form and method.

* A table form and its table form method share the same documentation file for form and method.

> Renaming or deleting a documented element in your project will also rename or delete the element's associated Markdown file.

## Documentation dans l'Explorateur

### Visualiser la documentation

To view documentation in the Explorer window:

1. Make sure the preview area is displayed.
2. Select the documented element in the Explorer list.
3. Click the **Documentation** button located below the preview area.

![](assets/en/Project/comments-explo2.png)

- If no documentation file was found for the selected element, a **Create** button is displayed (see below).

- Otherwise, if a documentation file exists for the selected element, the contents are displayed in the area. The contents are not directly editable in the pane.

### Modifier le fichier documentation

You can create and/or edit a Markdown documentation file from the Explorer window for the selected element.

If there is no documentation file for the selected element, you can:

- click on the **Create** button in the `Documentation` pane or,
- choose the **Edit Documentation...** option in the contextual menu or options menu of the Explorer.

![](assets/en/Project/comments-explo3.png)

4D automatically creates an appropriately named .md file with a basic template at the relevant location and opens it with your default Markdown editor.

If a documentation file already exists for the selected element, you can open it with your Markdown editor by choosing the **Edit Documentation...** option in the contextual menu or options menu of the Explorer.

## Visualiser la documentation dans l'éditeur de code

L'éditeur de code 4D affiche une partie de la documentation d'une méthode dans son info-bulle.

![](assets/en/Project/codeEditor_Comments.png)

Si un fichier nommé "\<MethodName>.md" existe dans le dossier "\<package>/documentation", l'éditeur de code affiche (par priorité) :

- Tout texte saisi dans une balise de `commentaire` HTML (*\<!-- commande documentation -->*) en haut du fichier markdown.

- Ou, si aucune balise de `commentaire` html n'est utilisée, la première phrase après une balise `# Description` du fichier markdown.  
    Dans ce cas, la première ligne contient le **prototype** de la méthode, généré automatiquement par le parseur du code 4D.
    
    > Sinon, l'éditeur de code affiche [le bloc de commentaire en haut du code de la méthode](https://doc.4d.com/4Dv18R2/4D/18-R2/Writing-a-method.300-4824019.en.html#4618226).

## Définition du fichier de documentation

4D utilise un modèle de base pour créer de nouveaux fichiers de documentation. Ce modèle propose des fonctionnalités spécifiques qui vous permettent [d'afficher des informations dans l'éditeur de code](#viewing-documentation-in-the-code-editor).

Cependant, vous pouvez utiliser toutes les [balises Markdown prises en charge](#supported-markdown).

De nouveaux fichiers de documentation sont créés avec les contenus par défaut suivants :

![](assets/en/Project/comments-explo4.png)

<table>
  <tr>
    <th>
      Ligne
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      \<!-- Type your summary here -->
    </td>
    
    <td>
      Commentaire HTML. Used in priority as the method description in the <a href="#viewing-documentation-in-the-code-editor">code editor tips</a>
    </td>
  </tr>
  
  <tr>
    <td>
      ## Description
    </td>
    
    <td>
      Heading level 2 in Markdown. The first sentence after this tag is used as the method description in the code editor tips if HTML comment is not used
    </td>
  </tr>
  
  <tr>
    <td>
      ## Example
    </td>
    
    <td>
      Heading level 2, you can use this area to show sample code
    </td>
  </tr>
  
  <tr>
    <td>
      ```4D <br>Saisissez votre exemple ici ```
    </td>
    
    <td>
      Used to format 4D code examples (uses highlight.js library)
    </td>
  </tr>
</table>

### Prise en charge du markdown

- The title tag is supported:

    # Title 1
    ## Title 2
    ### Title 3
    

- The style tags (italic, bold, strikethrough) are supported:

    _italic_
    **bold**
    **_bold/italic_**
    ~~strikethrough~~
    

- The code block tag (```4d ...```) is supported with 4D code highlight:
    
    \
    
        4d  
          C_TEXT($txt)  
          $txt:="Hello world!"  
          \

- The table tag is supported:

    | Parameter | Type   | Description  |
    | --------- | ------ | ------------ |
    | wpArea    | String |Write pro area|
    | toolbar   | String |Toolbar name  |
    

- The link tag is supported:

    // Case 1
    The [documentation](https://doc.4d.com) of the command ....
    
    // Case 2
    [4D blog][1]
    
    [1]: https://blog.4d.com
    

- The image tags are supported:

    ![image info](pictures/image.png)
    
    ![logo 4D](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")
    
    [![logo 4D blog with link](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")](https://blog.4d.com)
    

[![logo 4D blog with link](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")](https://blog.4d.com)

> For more information, see the [GitHug Markdown guide](https://guides.github.com/features/mastering-markdown/).

## Exemple

In the `WP SwitchToolbar.md` file, you can write:

```4d
<!-- This method returns a different logo depending on the size parameter -->


GetLogo (size) -> logo


| Parameter | Type   | in/out | Description |
| --------- | ------ | ------ | ----------- |
| size      | Longint | in | Logo style selector (1 to 5)  |
| logo      | Picture | out | Selected logo |


## Description

This method returns a logo of a specific size, depending on the value of the *size* parameter value.
1 = smallest size, 5 = largest size.

## Example

C_PICTURE($logo)
C_LONGINT($size)

//Get the largest logo
$logo:=GetLogo(5)
```

- Vue de l'Explorateur : ![](assets/en/Project/explorer_Doc.png)

- Vue de l’Éditeur de code : ![](assets/en/Project/comments-explo5.png)