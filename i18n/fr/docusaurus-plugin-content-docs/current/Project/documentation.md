---
id: documentation
title: Documenter un projet
---



In application projects, you can document your methods as well as your forms, tables, or fields. Creating documentation is particularly appropriate for projects being developed by multiple programmers and is generally good programming practice. Documentation can contain a description of an element as well as any information necessary to understand how the element functions in the application.

Les éléments de projet suivants acceptent la documentation :

- Méthodes (méthodes base, méthodes composant, méthodes projet, méthodes formulaire, méthodes 4D Mobile, triggers et classes)
- Formulaires
- Tables et champs

Vos fichiers de documentation sont écrits dans la syntaxe Markdown (fichiers .md) à l'aide de n'importe quel éditeur prenant en charge le Markdown. Ils sont stockés en tant que fichiers indépendants dans votre dossier Project.

La documentation s'affiche dans la zone d'aperçu (panneau de droite) de l'Explorateur :

![](../assets/en/Project/explorer_Doc.png)

Il peut également être partiellement exposé en tant que [conseils de l'éditeur de code](#viewing-documentation-in-the-code-editor).


## Fichiers documentation

### Nom du fichier de documentation

Les fichiers de documentation ont le même nom que l'élément auquel ils sont rattachés, avec l'extension ".md". Par exemple, le fichier de documentation rattaché à la méthode projet `myMethod.4dm` sera nommé `myMethod.md`.

Dans l'Explorateur, 4D affiche automatiquement le fichier de documentation avec le même nom que l'élément sélectionné (voir ci-dessous).


### Architecture des fichiers de documentation

Tous les fichiers de documentation sont stockés dans le dossier `Documentation`, situé au premier niveau du dossier Package.

L'architecture du dossier `Documentation` est la suivante :

- `Documentation`
    + `Classes`
        * myClass.md
    + `DatabaseMethods`
        * onStartup.md
        * ...
    + `Formulaires`
        * loginDial.md
        * ...
    + `Methods`
        * myMethod.md
        * ...
    + `TableForms`
        * **1**
            - input.md
            - ...
        * ...
    + `Triggers`
        * table1.md
        * ...

- Un formulaire projet et sa méthode de formulaire projet partagent le même fichier de documentation pour le formulaire et la méthode.
- Un formulaire table et sa méthode de formulaire table partagent le même fichier de documentation pour le formulaire et la méthode.

> Renommer ou supprimer un élément documenté dans votre projet renomme ou supprime également le fichier Markdown associé à l'élément.


## Documentation dans l'Explorateur

### Visualiser la documentation

Pour afficher la documentation dans la fenêtre de l'Explorateur :

1. Assurez-vous que la zone d'aperçu est affichée.
2. Sélectionnez l'élément documenté dans la liste de l'Explorateur.
3. Cliquez sur le bouton **Documentation** situé sous la zone d'aperçu.

![](../assets/en/Project/comments-explo2.png)

- Si aucun fichier de documentation n'a été trouvé pour l'élément sélectionné, un bouton **Créer** s'affiche (voir ci-dessous).

- Sinon, s'il existe un fichier de documentation pour l'élément sélectionné, le contenu est affiché dans la zone. Le contenu n'est pas directement modifiable dans le volet.

### Modifier le fichier documentation

Vous pouvez créer et/ou modifier un fichier de documentation Markdown à partir de la fenêtre de l'Explorateur pour l'élément sélectionné.

S'il n'y a pas de fichier de documentation pour l'élément sélectionné, vous pouvez :

- cliquez sur le bouton **Créer** dans le volet `Documentation` ou,
- choisissez l'option **Modifier la documentation...** dans le menu contextuel ou le menu d'options de l'Explorateur.

![](../assets/en/Project/comments-explo3.png)

4D crée automatiquement un fichier .md nommé correctement avec un modèle de base à l'emplacement approprié et l'ouvre avec votre éditeur Markdown par défaut.

Si un fichier de documentation existe déjà pour l'élément sélectionné, vous pouvez l'ouvrir avec votre éditeur Markdown en choisissant l'option **Modifier la documentation...** dans le menu contextuel ou le menu d'options de l'Explorateur.



## Visualiser la documentation dans l'éditeur de code

L'éditeur de code 4D affiche une partie de la documentation d'une méthode dans son info-bulle.

![](../assets/en/Project/codeEditor_Comments.png)

If a file named `\&#060;MethodName&#062;.md` exists in the `\&#060;package&#062;/documentation` folder, the code editor displays (by priority):

- Any text entered in an HTML `comment` tag (*\<!-- command documentation -->*) at the top of the markdown file.

- Ou, si aucune balise de `commentaire` html n'est utilisée, la première phrase après une balise `# Description` du fichier markdown.  
  Dans ce cas, la première ligne contient le **prototype** de la méthode, généré automatiquement par le parseur du code 4D.

    > Sinon, l'éditeur de code affiche [le bloc de commentaire en haut du code de la méthode](https://doc.4d.com/4Dv18R2/4D/18-R2/Writing-a-method.300-4824019.en.html#4618226).



## Définition du fichier de documentation

4D utilise un modèle de base pour créer de nouveaux fichiers de documentation. Ce modèle propose des fonctionnalités spécifiques qui vous permettent [d'afficher des informations dans l'éditeur de code](#viewing-documentation-in-the-code-editor).

Cependant, vous pouvez utiliser toutes les [balises Markdown prises en charge](#supported-markdown).

De nouveaux fichiers de documentation sont créés avec les contenus par défaut suivants :

![](../assets/en/Project/comments-explo4.png)

| Ligne                                                  | Description                                                                                                                                                                                         |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "\<!-- Type your summary here -->"          | Commentaire HTML. Utilisé en priorité comme description de méthode dans les [astuces de l'éditeur de code](#viewing-documentation-in-the-code-editor)                                               |
| ## Description                                        | Titre de niveau 2 en Markdown. La première phrase qui suit cette balise est utilisée comme description d'une méthode dans les astuces de l'éditeur de code si le commentaire HTML n'est pas utilisé |
| ## Example                                            | Titre de niveau 2, vous pouvez utiliser cette zone pour afficher un exemple de code                                                                                                                 |
| \``` 4D <br/>Insérez votre exemple ici \` `` | Utilisé pour formater des exemples de code 4D (utilise la bibliothèque highlight.js)                                                                                                                |


### Prise en charge du markdown
- La balise de titre est prise en charge :
```
# Title 1
## Title 2
### Title 3
```

- Les balises de style (italique, gras, barré) sont prises en charge :

```
_italic_
**bold**
**_bold/italic_**
~~strikethrough~~
```


- La balise du bloc de code (\```4d ... ```) est supportée avec le surlignage du code 4D :

    \``` 4d  
C_TEXT($txt)  
$txt:="Hello world!"  
  \` ``


- La balise de tableau est prise en charge :

```
| Parameter | Type   | Description  |
| --------- | ------ | ------------ |
| wpArea    | String |Write pro area|
| toolbar   | String |Toolbar name  |
```


- La balise de lien est prise en charge :

```
// Case 1
The [documentation](https://doc.4d.com) of the command ....

// Case 2
[4D blog][1]

[1]: https://blog.4d.com
```

- Les balises d'image sont prises en charge :

```
![image info](pictures/image.png)

![logo 4D](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")

[![logo 4D blog with link](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")](https://blog.4d.com)
```
[![logo blog 4D avec lien](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")](https://blog.4d.com)

> Pour plus d'informations, consultez le [guide Markdown de GitHub](https://guides.github.com/features/mastering-markdown/).




## Exemple

Dans le fichier `WP SwitchToolbar.md`, vous pouvez entrer le code suivant :

```4d
| Parameter | Type   | in/out | Description |
| --------- | ------ | ------ | ----------- |
| size      | Longint | in | Logo style selector (1 to 5)  |
| logo      | Picture | out | Selected logo |


## Description

Cette méthode retourne un logo de taille spécifique, selon la valeur du paramètre *size*.
1 = plus petite taille, 5 = plus grande taille.

## Exemple

C_PICTURE($logo)
C_LONGINT($size)

//Obtenir le plus grand logo
$logo:=GetLogo(5)
```

- Explorer view: ![](../assets/en/Project/explorer_Doc.png)

- Code editor view: ![](../assets/en/Project/comments-explo5.png)
