---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project** {( {*projectFile*}{;}{*options*} )} : Object<!-- END REF-->

<!--REF #_command_.Compile project.Params-->

| Paramètres  | Type                    |   | Description                                                   |
| ----------- | ----------------------- | - | ------------------------------------------------------------- |
| projectFile | 4D.File | → | Fichier .4DProject à compiler                 |
| options     | Object                  | → | Objet qui spécifie les options de compilation                 |
| Résultat    | Object                  | ← | Objet contenant des informations sur le statut de compilation |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                                    |
| ------- | ------------------------------------------------ |
| 20 R8   | Prise en charge du `type` "formObjectExpression" |

</details>

#### Description

**Compile project**<!--REF #_command_.Compile project.Summary--> vous permet de compiler le projet hôte courant ou le projet spécifié dans le paramètre *projectFile*.<!-- END REF--> Pour plus d'informations sur la compilation, consultez la [page Compilation](../Project/compiler.md).

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

##### Paramètre options

Le paramètre *options* est un objet. Voici les options de compilation disponibles :

| **Propriété**                                                                      | **Type**                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components                                                                         | Collection                       | Collection d'objets 4D.File vers des composants dépendants (doit être déjà compilé)                                                                                                                                                                                                                                                                                                                                                                                    |
| defaultTypeForButtons                                                              | Integer                          | Valeur possible : Is real ou Is longint                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| defaultTypeForNumerics                                                             | Integer                          | Valeur possible : Is real ou Is longint                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| generateSymbols                                                                    | Boolean                          | True pour générer des informations sur les symboles dans l'objet .symbols renvoyé                                                                                                                                                                                                                                                                                                                                                                                                         |
| generateSyntaxFile                                                                 | Boolean                          | Vrai pour générer un [fichier de syntaxe pour la complétion de code](../settings/general.md#generate-syntax-file-for-code-completion-when-compiled) dans le dossier \\Resources\\en.lproj du projet                                                                                                                                                                                                                                                                                     |
| generateTypingMethods                                                              | Text                             | "reset" ou "append" pour générer des méthodes de typage. Si la valeur est "append", les déclarations de variables existantes ne seront pas modifiées (comportement de la fenêtre du compilateur). Si la valeur est "reset", les déclarations de variables existantes seront supprimées au préalable.                                                                                                                                   |
| plugins                                                                            | 4D.Folder object | Plug-ins folder to be used instead of the [Plugins folder of the current project](../Project/architecture.md#plugins). This property is only available with the *projectFile* syntax.                                                                                                                                                                                                                                                                                     |
| targets                                                                            | Collection de chaînes            | Possible values: "x86_64_generic", "arm64_macOS_lib". Pass an empty collection to execute syntax check only                                                                                                                                                                                                                                                                           |
| typeInference                                                                      | Text                             | "all": The compiler deduces the types of all variables not explicitly declared, "locals": The compiler deduces the types of local variables not explicitly declared, "none": All variables must be explicitly declared in the code (legacy mode), "direct": All variables must be explicitly declared in the code ([direct typing](../Project/compiler.md#enabling-direct-typing)). |
| warnings                                                                           | Collection d'objets              | Defines the warnings state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| \[\].major   | Number                           | Warning main number, before the dot                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| \[\].minor   | Number                           | Warning second number, after the dot                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| \[\].enabled | Boolean                          | Warning activation state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

**Note:** When the *warnings* attribute is not defined in the *options* object, the **Compile project** command uses the default warning generation statuses defined in the settings.

##### Résultat

The object returned by **Compile project** has up to three properties:

| **Propriété**                                                                                                          | **Type**            | **Description**                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                                                                | Boolean             | Vrai si la sauvegarde a été effectuée avec succès, sinon faux.                                                           |
| errors                                                                                                                 | Collection d'objets | **Available only in case of error or warning**. Collection of objects describing compilation errors or warnings          |
| \[\].isError                                     | Boolean             | Error if True, warning otherwise                                                                                                         |
| \[\].message                                     | Text                | Message d'erreur                                                                                                                         |
| \[\].code                                        | Object              | [code object](#code-object)                                                                                                              |
| \[\].line                                        | Number              | Line number of error in the code. For class methods, line number in the function                                         |
| \[\].lineInFile                                  | Number              | Line number in the file (different from "line" for class methods, and takes into account the %attributes prefix line) |
| symbols                                                                                                                | Object              | **Available only if generateSymbols option is set to True:**                                                             |
| symbols.interprocessVariables                                                                          | Object              | Liste de toutes les variables interprocessus                                                                                             |
| symbols.interprocessVariables.variables                                                | Collection          | Collection d'[objets variables](#objets-variables)                                                                                       |
| symbols.interprocessVariables.size                                                     | Number              |                                                                                                                                          |
| symbols.processVariables                                                                               | Object              | List of all process variables                                                                                                            |
| symbols.processVariables.variables                                                     | Collection          | Collection d'[objets variables](#objets-variables)                                                                                       |
| symbols.processVariables.size                                                          | Number              |                                                                                                                                          |
| symbols.localVariables                                                                                 | Collection d'objets | Liste des variables locales par méthode                                                                                                  |
| symbols.localVariables[].code      | Object              | [code object](#code-object)                                                                                                              |
| symbols.localVariables[].variables | Collection          | Collection d'[objets variables](#objets-variables)                                                                                       |
| symbols.methods                                                                                        | Collection d'objets | Liste des méthodes                                                                                                                       |
| symbols.methods\[\].code         | Object              | [code object](#code-object)                                                                                                              |
| symbols.methods\[\].callCount    | Number              | Number of times this method has been called                                                                                              |
| symbols.methods\[\].params       | Collection          | Collection of parameter types (Value type numerical codes)                                                            |
| symbols.methods\[\]. threadSafe  | Boolean             | Indicates if this method is thread safe                                                                                                  |

Pour plus d'informations, voir [Outils de compilation](../Projet/compiler.md#compilation-tools).

###### variable objects

`interprocessVariables.variables` and `processVariables.variables` contain objects with the following structure:

| **Propriété**  | **Type** | **Description**                                                                                           |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| name           | Text     | Name of the variable                                                                                      |
| type           | number   | Type of the variable (like Value type command)                                         |
| arrayDimension | number   | For arrays only: 1 for mono dimension arrays, 2 for two-dimension arrays                  |
| code           | Object   | For process and interprocess variables: descriptor of where the variable has been defined |

###### code object

The `code` property in `methods.code` and `errors.code` is an object with the following properties:

| **Propriété**  | **Type**                | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type           | Text                    | "projectMethod", "formObjectMethod", "formMethod", "databaseMethod", "triggerMethod", "executeOnServer" (when calling a project method with the *Execute on Server attribute*), "executeFormula" (when executing a formula via [PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) or evaluation of a formula in a 4D Write Pro document), "class", "classFunction", "formObjectExpression" (for errors occuring in expressions associated to form objects) |
| path           | Text                    | Method path (same format as [METHOD OPEN PATH](../commands-legacy/method-open-path.md))                                                                                                                                                                                                                                                                                                                                                                                                                |
| file           | 4D.File | Method file                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                |                         | **Returned depending on the value of the `type` property:**                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| methodName     | Text                    | Méthode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| table          | Number                  | Number of the table (returned for a trigger, a table form method or a table form object method)                                                                                                                                                                                                                                                                                                                                                                                                        |
| formName       | Text                    | Form name (returned for a form method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| objectName     | Text                    | Form object name (returned for an object method)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| propertyName   | Text                    | Form object property name (returned for a form object expression)                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| className      | Text                    | Class name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| functionName   | Text                    | Nom de la fonction de classe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| databaseMethod | Number                  | Database method index                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

#### Exemples

Pour effectuer un contrôle de syntaxe uniquement, passez une collection vide au paramètre targets :

```4d
 var $status : Object
 var $options:={}
 $options.targets:=New collection //Collection vide pour le contrôle syntaxique
 $status:=Compile project($options)
```

Compilez le projet actuel en utilisant uniquement les options de compilateur définies dans les Paramètres de Structure :

```4d
 var $status : Object
 $status:=Compile project
```

Sur un Mac Silicon, compilez le projet actuel uniquement pour ARM :

```4d
 var $status : Object
 var $options:={}
 $options.targets:=New collection("arm64_macOS_lib")
 $status:=Compile project($options)
```

Compilez un projet autre que le projet actuel :

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

Désactivez les avertissements 518.1 et 518.2 lors de la compilation de votre projet :

```4d
var $options:={}
$options.warnings:=[]$options.warnings.push({major: 518; minor: 1; enabled: False})
$options.warnings.push({major: 518; minor: 2; enabled: False})
var $result:=Compile project($options)
```

#### Voir également

[BUILD APPLICATION](../commands-legacy/build-application.md)

#### Propriétés

|                    |                                 |
| ------------------ | ------------------------------- |
| Numéro de commande | 1760                            |
| Thread safe        | &amp;cross; |
