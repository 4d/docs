---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project** {( {*projectFile*}{;}{*options*} )} : Object<!-- END REF-->
<!--REF #_command_.Compile project.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| projectFile | 4D.File | &#8594;  | Fichier .4DProject à compiler |
| options | Object | &#8594;  | Objet indiquant les options de compilation |
| Résultat | Object | &#8592; | Objet contenant des informations sur le statut de la compilation |

<!-- END REF-->

#### Description 

<!--REF #_command_.Compile project.Summary-->**Compile project** vous permet de compiler le projet hôte courant ou le projet spécifié dans le paramètre *projectFile*.<!-- END REF--> Pour plus d'informations sur la compilation, consultez la *page de compilation sur developer.4d.com*.

Par défaut, la commande utilise les options du compilateur définies dans les Paramètres de structure. Vous pouvez les remplacer en passant un paramètre *options*. Les syntaxes suivantes sont prises en charge :

* **Compile project()** : compile le projet ouvert à l'aide des options définies dans les paramètres de structure
* **Compile project** (*options*) : compile le projet ouvert. Les *options* définies remplacent les paramètres de structure
* **Compile project** (*projectFile*) : compile le 4DProject *projectFile* en utilisant les options définies dans les paramètres de structure
* **Compile project** (*projectFile*; *options*) : compile le 4DProject *projectFile* et les *options* définies remplacent les paramètres de structure

**Note :** Les bases de données binaires ne peuvent pas être compilées avec cette commande.

Contrairement à la fenêtre du Compilateur, cette commande nécessite que vous désigniez explicitement le ou les composants à compiler. Lors de la compilation d'un projet avec **Compile project**, vous devez déclarer ses composants à l'aide de la propriété *components* du paramètre *options*. A noter que les composants doivent déjà être compilés (les composants binaires sont pris en charge).

Le code compilé résultant sera stocké dans le dossier DerivedData ou Libraries du projet, en fonction de la propriété *targets* du paramètre *options*. Si vous souhaitez créer des fichiers .4dz, vous devez toujours compresser manuellement le projet compilé ou utiliser la fonctionnalité *Générer l'application*.

Si vous passez une collection vide dans les *targets*, **Compile project** exécutera une vérification de syntaxe sans compiler.

Les erreurs de compilation, le cas échéant, sont retournées sous forme d'objets dans la collection *errors*.

**Note** : Vous ne pouvez pas appeler cette commande lorsqu'une autre compilation est en cours d'exécution (par exemple, une compilation lancée à partir de la fenêtre Compilation).

##### Paramètre options 

Le paramètre *options* est un objet. Voici les options de compilation disponibles :

| **Propriété**          | **Type**              | **Description**                                                                                                                                                                                                                                                        |
| ---------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components             | Collection            | Collection d'objets 4D.File vers des composants dépendants (doit être déjà compilé)                                                                                                                                                                                    |
| defaultTypeForButtons  | Entier                | Valeur possible : Is real ou Is longint                                                                                                                                                                                                                                |
| defaultTypeForNumerics | Entier                | Valeur possible : Is real ou Is longint                                                                                                                                                                                                                                |
| generateSymbols        | Booléen               | Vrai pour générer des informations de symbole dans l'objet retourné .symbol                                                                                                                                                                                            |
| generateSyntaxFile     | Booléen               | Vrai pour générer un fichier de syntaxe pour la complétion de code dans le dossier \\Resources\\en.lproj du projet.                                                                                                                                                    |
| generateTypingMethods  | Chaîne                | "reset" ou "append" pour générer des méthodes de typage. Si la valeur est "append", les déclarations de variables existantes ne seront pas modifiées (comportement de la fenêtre du compilateur)                                                                       |
| plugins                | Objet 4D.Folder       | Dossier Plug-ins à utiliser en lieu et place du [Dossier Plugins du projet courant](../Project/architecture.md#plugins). Cette propriété est disponible uniquement avec la syntaxe utilisant *projectFile*.                                 |
| targets                | collection de chaînes | Valeurs possibles : "x86\_64\_generic", "arm64\_macOS\_lib". Passez une collection vide pour exécuter une vérification de syntaxe uniquement    |
| typeInference          | Chaîne                | "all": le compilateur déduit les types de toutes les variables non déclarées explicitement "locals": le compilateur déduit les types des variables locales non déclarées explicitement, "none": Toutes les variables doivent être explicitement déclarées dans le code |
| warnings               | Collection d'objets   | Définit l'état des warnings   |
| \[\].major             | Numérique             | numéro warning principal, avant le point                                                                           |
| \[\].minor             | Numérique             | numéro warning secondaire, après le point                                                                             |
| \[\].enabled           | Booléen               | État d'activation du warning |

**Note :** Lorsque l'attribut *warnings* n'est pas défini dans l'objet options, la commande **Compile project** utilise les statuts de génération des warnings par défaut définis dans les paramètres.

##### Function result 

L'objet retourné par **Compile project** possède jusqu'à trois propriétés : 

| **Propriété**                                                                      | **Type**            | **Description**                                                                                                                     |
| ---------------------------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                            | Booléen             | Vrai si l'action de sauvegarde est réussie, Faux dans le cas contraire.                                                             |
| ***Disponible uniquement en cas d'erreur ou d'avertissement :***                   |                     |                                                                                                                                     |
| errors                                                                             | Collection d'objets | collection d'objets décrivant les erreurs de compilation ou les avertissements                                                      |
| isError                                                                            | Booléen             | Erreur sir Vrai, sinon, avertissement                                                                                               |
| message                                                                            | Chaîne              | Message d'erreur                                                                                                                    |
| code                                                                               | Objet               | *code object*                                                                                                                       |
| line                                                                               | Numérique           | Numéro de ligne de l'erreur dans le code. Pour des méthodes de classe, le numéro de ligne dans la fonction                          |
| lineInFile                                                                         | Numérique           | Numéro de ligne dans le fichier (différent de la"ligne" des méthodes de classe, et prend en charge la ligne de préfixe %attributes) |
| ***Disponible uniquement si l'option*** **generateSymbols est définie sur Vrai :** |                     |                                                                                                                                     |
| symbol                                                                             | Objet               |                                                                                                                                     |
| interprocessVariables                                                              | Objet               | Liste de toutes les variables interprocess                                                                                          |
| variables                                                                          | Collection          | Collection de *variable objects*                                                                                                    |
| size                                                                               | Numérique           |                                                                                                                                     |
| processVariables                                                                   | Objet               | Liste de toutes les variables process                                                                                               |
| variables                                                                          | Collection          | Collection de *variable objects*                                                                                                    |
| size                                                                               | Numérique           |                                                                                                                                     |
| localVariables                                                                     | Collection d'objets | Liste de variables locales par méthode                                                                                              |
| code                                                                               | Objet               | *code object*                                                                                                                       |
| variables                                                                          | Collection          | Collection de *variable objects*                                                                                                    |
| methods                                                                            | Collection d'objets | List of methods                                                                                                                     |
| code                                                                               | Objet               | *code object*                                                                                                                       |
| callCount                                                                          | Numérique           | Nombre d'appels de cette méthode                                                                                                    |
| params                                                                             | Collection          | Collection de types de paramètre (codes numériques du type de valeur)                                                               |
| threadSafe                                                                         | Booléen             | Indique si la méthode est *thread safe*                                                                                             |

Pour plus d'informations, reportez-vous aux *Outils de compilation*.

###### Objets variable 

interprocessVariables.variables et processVariables.variables contiennent des objets avec la structure suivante :

| **Propriété**  | **Type**  | **Description**                                                                                          |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------- |
| name           | Chaîne    | Nom de la variable                                                                                       |
| type           | numérique | Type de la variable (tel que la commande Value type)                                                     |
| arrayDimension | numérique | Pour les tableaux uniquement : 1 pour les tableaux mono-dimension, 2 pour les tableaux à deux dimensions |
| code           | Objet     | Pour les variables process et interprocess : descripteur de l'emplacement de définition de la variable   |

###### Objet code 

La propriété *code* dans **methods\[ \].code** et **errors\[ \].code** est un objet dont les propriétés sont les suivantes :

| **Propriété**                                        | **Type**  | **Description**                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                                                 | Chaîne    | "projectMethod", "formObjectMethod", "formmethod", "databaseMethod", "triggerMethod", "executeOnServer" (lors de l'appel de la méthode projet avec *Attribut Exécuter sur serveur*.), "executeFormula" (lors de l'exécution d'une formule via [PROCESS 4D TAGS](process-4d-tags.md) ou l'évaluation d'une formule dans un document 4D Write Pro.), "class","classFunction", "formmethod" |
| path                                                 | Chaîne    | Chemin de méthode (format identique à celui de [METHOD OPEN PATH](method-open-path.md))                                                                                                                                                                                                                                                                                                                 |
| file                                                 | 4D.File   | Fichier méthode                                                                                                                                                                                                                                                                                                                                                                                         |
| **Retournée selon la valeur de propriété du type :** |           |                                                                                                                                                                                                                                                                                                                                                                                                         |
| methodName                                           | Chaîne    | Méthode projet                                                                                                                                                                                                                                                                                                                                                                                          |
| table                                                | Numérique | Numéro de table (retourné pour un trigger, une méthode formulaire de table ou une méthode objet formulaire)                                                                                                                                                                                                                                                                                             |
| formName                                             | Chaîne    | Nom de formulaire (retourné pour une méthode formulaire)                                                                                                                                                                                                                                                                                                                                                |
| objectName                                           | Chaîne    | Nom de l'objet formulaire (retourné pour une méthode formulaire)                                                                                                                                                                                                                                                                                                                                        |
| className                                            | Chaîne    | Nom de classe                                                                                                                                                                                                                                                                                                                                                                                           |
| functionName                                         | Chaîne    | Nom de fonction de classe                                                                                                                                                                                                                                                                                                                                                                               |
| databaseMethod                                       | Numérique | Index de la méthode base                                                                                                                                                                                                                                                                                                                                                                                |

#### Alerte 

Pour effectuer un contrôle syntaxique uniquement, passez une collection vide au paramètre targets :  
  
```4d
 var $options;$status : Object
 $options:=New object
 $options.targets:=New collection //Collection vide pour le contrôle syntaxique
 $status:=Compile project($options)
```

Pour compiler le projet en cours, il suffit d'utiliser les options de compilateur des Paramètres de structure :

```4d
 var $status : Object
 $status:=Compile project
```

Sur un Silicon Mac, compilez le projet actuel en ARM uniquement :  
  
```4d
 var $options;$status : Object
 $options:=New object
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
 var $options;$status : Object
 var $component : 4D.File
 $options:=New object
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

#### Voir aussi 

[BUILD APPLICATION](build-application.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1760 |
| Thread safe | &check; |
| Interdite sur le serveur ||


