---
id: structure-exporting-and-importing
title: Exportation et importation de définitions de structure
---

4D permet d'exporter la définition de la structure de la base de données au format XML ou HTML. Inversement, une définition de structure enregistrée au format XML peut être utilisée pour générer une nouvelle base 4D à la volée. Ces possibilités répondent à différents besoins :

- représenter les structures dans des formats personnalisés (rapports, tableaux, etc.) ou les analyser dans d'autres environnements ;
- générer des bases de données à partir de fichiers de définition.

## Format d'une définition de structure 4D

Les définitions de structure 4D sont basées sur le format XML. Vous pouvez afficher une définition de structure avec un simple éditeur de texte. Le format XML permet également d'envisager tout type d'utilisation, notamment au moyen de transformations XSL. De plus, 4D utilise un fichier .XSL pour exporter la définition de structure au format HTML.

Une définition de structure comprend les tables, champs, index et relations, ainsi que leurs attributs et les différentes caractéristiques nécessaires à la description complète de la structure. La "grammaire" interne des définitions de structure 4D est documentée dans des fichiers DTD, également utilisés pour valider les fichiers XML. Les fichiers DTD utilisés par 4D sont regroupés dans le dossier DTD, situé à côté de l'application 4D. Les fichiers **base_core.dtd** et **common.dtd** sont utilisés pour définir la structure. Pour plus d'informations, consultez ces fichiers et les commentaires qu'ils contiennent.

## Exporter une définition de structure

4D permet d'exporter une structure au format XML ou HTML. Choisissez le format le mieux adapté à vos besoins :

- **Format XML :** une structure XML peut être affichée dans un éditeur de texte ou utilisée de différentes façons (transformation XSL personnalisée, importation et analyse dans un autre logiciel, etc.). Choisissez ce format pour utiliser la définition de structure afin de créer de nouvelles bases de données.
- **Format HTML :** ce format représente la structure sous la forme d'un rapport, consultable et imprimable dans un navigateur.

Pour exporter une définition de structure au format XML :

1. Sélectionnez **Exporter > Définition de structure dans un fichier XML...** dans le menu Fichier de 4D.
2. Une boîte de dialogue Enregistrer sous standard apparaît pour indiquer le nom, l'emplacement et le type du fichier à exporter.
3. Indiquez le nom et l'emplacement de l'exportation, puis validez la boîte de dialogue.

Pour exporter une définition de structure au format HTML :

1. Sélectionnez **Exporter > Définition de structure dans un fichier HTML...** dans le menu Fichier de 4D.
2. Une boîte de dialogue de sélection de dossier apparaît pour indiquer l'emplacement où les fichiers HTML seront enregistrés.
3. Cliquez sur **Créer un nouveau dossier** ou indiquez un dossier existant. 4D crée automatiquement à cet emplacement un dossier nommé *"Mystructure.4db Structure Export"*, qui contient les éléments exportés (*Mystructure.4db* représente le nom de la base de données).
4. Une boîte de dialogue permet de visualiser directement le résultat de l'exportation dans le navigateur par défaut. Les définitions de structure au format HTML ressemblent à ceci :

[picture here]

### Personnaliser la transformation XSL

Par défaut, pour générer les pages HTML de la définition de structure, 4D effectue des transformations XSL à l'aide du fichier **"Structure_to_html.xsl"**, placé dans le sous-dossier */Resource/language.lproj* de l'application.

:::note

Si ce fichier est absent, l'exportation au format HTML n'est pas disponible dans la boîte de dialogue d'exportation.

:::

Vous pouvez personnaliser ces transformations avec une feuille de style XSL personnalisée. Pour cela, créez un fichier nommé **"Structure_to_html.xsl"** (vous pouvez dupliquer le fichier par défaut) et placez-le au même niveau que le fichier *.4db*. 4D utilisera alors ce fichier pour générer la définition de structure au format HTML.

## Créer une base de données à partir d'une définition de structure

Les définitions de structure exportées au format XML peuvent être utilisées pour créer à la volée de nouvelles bases de données identiques. La définition de structure peut alors être considérée comme un modèle qu'il est possible de dupliquer à volonté.

Une définition de structure XML peut être utilisée telle quelle ou modifiée au préalable avec un éditeur XML. Il est ainsi possible d'envisager tout type de mécanisme de génération de structures par programmation.

De plus, puisque le format interne des fichiers XML de définition de structure 4D est public (voir la section "Format d'une définition de structure 4D" ci-dessus), il est possible de créer ce type de fichier à partir d'autres environnements de base de données ou de toute application de conception afin de générer automatiquement des bases 4D.

Pour créer une base de données à partir d'une définition de structure :

1. Sélectionnez **Nouveau > Base de données à partir d'une définition de structure...** dans le menu Fichier de 4D. Une boîte de dialogue standard d'ouverture de document apparaît pour vous permettre d'indiquer le fichier de définition. Vous devez sélectionner un fichier XML conforme à la "grammaire" des définitions de structure 4D (le programme valide le fichier DTD).
2. Sélectionnez un fichier XML de définition de structure, puis cliquez sur **OK**. 4D affiche une boîte de dialogue permettant de choisir le nom et l'emplacement de la base à créer.
3. Choisissez le nom et l'emplacement de la base à créer, puis cliquez sur **OK**.

Si le fichier XML est valide, 4D ferme la base courante (le cas échéant), crée la nouvelle base à partir du fichier de définition de structure et affiche sa fenêtre Explorateur. Un fichier de données vide est également créé.
