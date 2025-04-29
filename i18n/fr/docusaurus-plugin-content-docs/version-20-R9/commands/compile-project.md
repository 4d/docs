---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project** {( {*projectFile*}{;}{*options*} )} : Object<!-- END REF-->

<!--REF #_command_.Compile project.Params-->

| Paramètres  | Type                    |                             | Description                                                   |
| ----------- | ----------------------- | --------------------------- | ------------------------------------------------------------- |
| projectFile | 4D.File | &#8594; | Fichier .4DProject à compiler                 |
| options     | Object                  | &#8594; | Objet qui spécifie les options de compilation                 |
| Résultat    | Object                  | &#8592; | Objet contenant des informations sur le statut de compilation |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                                    |
| ------- | ------------------------------------------------ |
| 20 R8   | Prise en charge du `type` "formObjectExpression" |

</details>

## Description

**Compile project**<!--REF #_command_.Compile project.Summary--> allows you to compile the current host project or the project specified in the *projectFile* parameter.<!-- END REF--> For more information on compilation, check the [Compilation page](../Project/compiler.md).

Par défaut, la commande utilise les options du compilateur définies dans les Paramètres de structure. Vous pouvez les remplacer en passant un paramètre *options*. Les syntaxes suivantes sont prises en charge :

- **Compile project**() : compile le projet ouvert à l'aide des options définies dans les paramètres de structure
- **Compile project**(*options*) : compile le projet ouvert. Les *options* définies remplacent les paramètres de structure
- **Compile project**(*projectFile*) : compile le projet 4D *projectFile* en utilisant les options définies dans les paramètres de structure
- **Compile project**(*projectFile*; *options*) : compile le projet 4D *projectFile* et les *options* définies remplacent les paramètres de structure

\*\*Note :\*\*Les bases de données binaires ne peuvent pas être compilées avec cette commande.

Contrairement à la fenêtre du Compilateur, cette commande nécessite que vous désigniez explicitement le ou les composants à compiler. Lors de la compilation d'un projet avec **Compile project**, vous devez déclarer ses composants à l'aide de la propriété *components* du paramètre *options*. A noter que les composants doivent déjà être compilés (les composants binaires sont pris en charge).

Le code compilé résultant sera stocké dans le dossier DerivedData ou Libraries du projet, en fonction de la propriété *targets* du paramètre *options*. Si vous souhaitez créer des fichiers .4dz, vous devez toujours compresser manuellement le projet compilé ou utiliser la fonctionnalité [build application](../Desktop/building.md).

Si vous passez une collection vide dans *targets*, **Compile project** exécutera une vérification syntaxique sans compiler.

Les erreurs de compilation, le cas échéant, sont retournées sous forme d'objets dans la collection *errors*.

**Note :** Vous ne pouvez pas appeler cette commande quand une autre compilation est en cours d'exécution (par exemple, une compilation lancée depuis la fenêtre de compilation).

### Paramètre options

Le paramètre *options* est un objet. Voici les options de compilation disponibles :

| **Propriété**                                                                      | **Type**                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components                                                                         | Collection                       | Collection d'objets 4D.File vers des composants dépendants (doit être déjà compilé)                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| defaultTypeForButtons                                                              | Integer                          | Valeur possible : Is real ou Is longint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| defaultTypeForNumerics                                                             | Integer                          | Valeur possible : Is real ou Is longint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| generateSymbols                                                                    | Boolean                          | True pour générer des informations sur les symboles dans l'objet .symbols renvoyé                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| generateSyntaxFile                                                                 | Boolean                          | Vrai pour générer un [fichier de syntaxe pour la complétion de code](../settings/general.md#generate-syntax-file-for-code-completion-when-compiled) dans le dossier \\Resources\\en.lproj du projet                                                                                                                                                                                                                                                                                                                                             |
| generateTypingMethods                                                              | Text                             | "reset" ou "append" pour générer des méthodes de typage. Si la valeur est "append", les déclarations de variables existantes ne seront pas modifiées (comportement de la fenêtre du compilateur). Si la valeur est "reset", les déclarations de variables existantes seront supprimées au préalable.                                                                                                                                                                                           |
| plugins                                                                            | 4D.Folder object | Dossier de plug-ins à utiliser à la place du [Dossier de plug-ins du projet courant](../Project/architecture.md#plugins). Cette propriété n'est disponible qu'avec la syntaxe *projectFile*.                                                                                                                                                                                                                                                                                                                                      |
| targets                                                                            | Collection de chaînes            | Valeurs possibles : "x86_64_generic", "arm64_macOS_lib". Passez une collection vide pour exécuter la vérification syntaxique uniquement                                                                                                                                                                                                                                                                                                       |
| typeInference                                                                      | Text                             | "all" : Le compilateur déduit les types de toutes les variables non explicitement déclarées, "locals" : Le compilateur déduit le type des variables locales non déclarées explicitement, "none" : Toutes les variables doivent être explicitement déclarées dans le code (mode legacy), "direct" : Toutes les variables doivent être explicitement déclarées dans le code ([direct typing](../Project/compiler.md#enabling-direct-typing)). |
| warnings                                                                           | Collection d'objets              | Définit le statut des warnings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| \[\].major   | Number                           | Numéro principal du warning, avant le point                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| \[\].minor   | Number                           | Numéro secondaire du warning, après le point                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| \[\].enabled | Boolean                          | Statut d'activation du warning                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

**Note:** Lorsque l'attribut *warnings* n'est pas défini dans l'objet *options*, la commande **Compile project** utilise les statuts de génération de warnings par défaut définis dans les paramètres.

### Résultat

L'objet renvoyé par **Compile project** possède jusqu'à trois propriétés :

| **Propriété**                                                                                                          | **Type**            | **Description**                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                                                                | Boolean             | Vrai si la sauvegarde a été effectuée avec succès, sinon faux.                                                                           |
| errors                                                                                                                 | Collection d'objets | **Disponible uniquement en cas d'erreur ou de warning**. Collection d'objets décrivant les erreurs de compilation ou les warnings        |
| \[\].isError                                     | Boolean             | Erreur si True, sinon warning                                                                                                                            |
| \[\].message                                     | Text                | Message d'erreur                                                                                                                                         |
| \[\].code                                        | Object              | [objet code](#code-object)                                                                                                                               |
| \[\].line                                        | Number              | Numéro de ligne de l'erreur dans le code. Pour les méthodes de classe, le numéro de ligne dans la fonction                               |
| \[\].lineInFile                                  | Number              | Numéro de ligne dans le fichier (différent de "line" pour les méthodes de classe, et prend en compte la ligne de préfixe %attributes) |
| symbols                                                                                                                | Object              | **Disponible uniquement si l'option generateSymbols est fixée à True :**                                                                 |
| symbols.interprocessVariables                                                                          | Object              | Liste de toutes les variables interprocessus                                                                                                             |
| symbols.interprocessVariables.variables                                                | Collection          | Collection d'[objets variables](#objets-variables)                                                                                                       |
| symbols.interprocessVariables.size                                                     | Number              |                                                                                                                                                          |
| symbols.processVariables                                                                               | Object              | Liste de toutes les variables process                                                                                                                    |
| symbols.processVariables.variables                                                     | Collection          | Collection d'[objets variables](#objets-variables)                                                                                                       |
| symbols.processVariables.size                                                          | Number              |                                                                                                                                                          |
| symbols.localVariables                                                                                 | Collection d'objets | Liste des variables locales par méthode                                                                                                                  |
| symbols.localVariables[].code      | Object              | [objet code](#code-object)                                                                                                                               |
| symbols.localVariables[].variables | Collection          | Collection d'[objets variables](#objets-variables)                                                                                                       |
| symbols.methods                                                                                        | Collection d'objets | Liste des méthodes                                                                                                                                       |
| symbols.methods\[\].code         | Object              | [objet code](#code-object)                                                                                                                               |
| symbols.methods\[\].callCount    | Number              | Nombre de fois où cette méthode a été appelée                                                                                                            |
| symbols.methods\[\].params       | Collection          | Collection de types de paramètres (codes numériques des types de valeurs)                                                             |
| symbols.methods\[\]. threadSafe  | Boolean             | Indique si cette méthode est *thread safe*                                                                                                               |

Pour plus d'informations, voir [Outils de compilation](../Project/compiler.md#compilation-tools).

## Objets variables

`interprocessVariables.variables` et `processVariables.variables` contiennent des objets ayant la structure suivante :

| **Propriété**  | **Type** | **Description**                                                                                                            |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| name           | Text     | Nom de la variable                                                                                                         |
| type           | number   | Type de la variable (comme la commande Value type)                                                      |
| arrayDimension | number   | Pour les tableaux uniquement : 1 pour les tableaux mono-dimensionnels, 2 pour les tableaux bidimensionnels |
| code           | Object   | Pour les variables process et interprocess : description de l'endroit où la variable a été définie         |

## Objet code

La propriété `code` dans `methods.code` et `errors.code` est un objet avec les propriétés suivantes :

| **Propriété**  | **Type**                | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type           | Text                    | "projectMethod", "formObjectMethod", "formMethod", "databaseMethod", "triggerMethod", "executeOnServer" (lors de l'appel d'une méthode projet avec l'attribut *Execute on Server*), "executeFormula" (lors de l'exécution d'une formule via [PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) ou de l'évaluation d'une formule dans un document 4D Write Pro), "class", "classFunction", "formObjectExpression" (pour les erreurs survenant dans les expressions associées à des objets formulaire) |
| path           | Text                    | Chemin d'accès de la méthode (même format que [`METHOD OPEN PATH`](../commands-legacy/method-open-path.md))                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| file           | 4D.File | Fichier de méthode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                |                         | **Retourné en fonction de la valeur de la propriété `type`:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| methodName     | Text                    | Méthode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| table          | Number                  | Numéro de la table (retourné pour un trigger, une méthode formulaire table ou une méthode objet de formulaire table)                                                                                                                                                                                                                                                                                                                                                                                                                             |
| formName       | Text                    | Nom du formulaire (renvoyé pour une méthode de formulaire)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| objectName     | Text                    | Nom de l'objet du formulaire (renvoyé pour une méthode objet)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| propertyName   | Text                    | Nom de la propriété de l'objet du formulaire (renvoyé pour une expression de l'objet du formulaire)                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| className      | Text                    | Nom de classe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| functionName   | Text                    | Nom de la fonction de classe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| databaseMethod | Number                  | Indice de méthode base                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Exemples

Pour effectuer un contrôle de syntaxe uniquement, passez une collection vide au paramètre targets :

```4d
 var $status : Object
 var $options:={}
 $options.targets:=New collection //Collection vide pour le contrôle syntaxique
 $status:=Compile project($options)
```

Compilez le projet courant en utilisant uniquement les options de compilateur définies dans les Paramètres de Structure :

```4d
 var $status : Object
 $status:=Compile project
```

Sur un Mac Silicon, compilez le projet courant uniquement pour ARM :

```4d
 var $status : Object
 var $options:={}
 $options.targets:=New collection("arm64_macOS_lib")
 $status:=Compile project($options)
```

Compilez un projet autre que le projet courant :

```4d
 var $status : Object
 var $projectFile: 4D.File
 $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")
 $status:=Compile project($projectFile)
```

Compilez un projet et déclarez son composant :

```4d
 var $status : Object
 var $component : 4D.File
 var $options:={}
 $component:=Folder(fk documents folder).file("Components/myComponent.4dz")
 $options.components:=New collection($component)
 $status:=Compile project($options)
```

Désactivez les warnings 518.1 et 518.2 lors de la compilation de votre projet :

```4d
var $options:={}
$options.warnings:=[]
$options.warnings.push({major: 518; minor: 1; enabled: False})
$options.warnings.push({major: 518; minor: 2; enabled: False})
var $result:=Compile project($options)
```

## Voir également

[BUILD APPLICATION](../commands-legacy/build-application.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1760                        |
| Thread safe        | &cross; |


