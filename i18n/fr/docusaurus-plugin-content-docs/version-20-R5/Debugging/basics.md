---
id: basics
title: Débogage
---

Les erreurs sont courantes. Il serait inhabituel d'écrire un nombre important de lignes de code sans générer aucune erreur. À l'inverse, traiter et/ou corriger des erreurs est également normal !

L'environnement de développement 4D fournit plusieurs outils de débogage pour tous les types d'erreurs.

## Types d'erreurs

### Erreurs de saisie

Les fautes de frappe sont détectées par l'éditeur de méthode. Elles sont affichées en rouge et des informations complémentaires sont fournies en bas de la fenêtre. Voici une erreur de frappe :

![break-point](../assets/en/Debugging/typing-error.png)

Ces erreurs de frappe provoquent généralement des erreurs de syntaxe (dans l'image ci-dessus, le nom de la table est inconnu). Vous obtenez la description de l'erreur lorsque vous validez la ligne de code. Lorsque cela se produit, corrigez l'erreur de frappe et tapez Entrée pour valider la correction.

### Erreurs de syntaxe

Certaines erreurs ne peuvent être détectées que lorsque vous exécutez la méthode. The [Syntax Error Window](#syntax-error-window) appears when an error occurs during code execution. Par exemple :

![syntax-error](../assets/en/Debugging/syntax-error.png)

Expand the **Details** area to display the last error and its number.

### Erreurs dans l'Environnement

Il peut arriver que la mémoire soit insuffisante pour créer une BLOB. Ou, lorsque vous accédez à un document sur le disque, il se peut que ce document n'existe pas ou qu'il soit déjà ouvert par une autre application. Ces erreurs dans l'Environnementa ne sont pas directement dues à votre code ou à la façon dont vous l'avez écrit. Most of the time, these errors are easy to treat with an [error catching method](Concepts/error-handling.md) installed using the `ON ERR CALL` command.

### Erreurs de conception ou de logique

Ce sont généralement les types d'erreurs les plus difficiles à trouver. À l'exception des erreurs de frappe, tous les types d'erreurs énumérés ci-dessus sont, dans une certaine mesure, couverts par l'expression "erreur de conception ou de logique". Use the [Debugger](debugger.md) to detect them. Par exemple :

- A _syntax error_ may occur when you try to use a variable that is not yet initialized.
- An _environmental error_ can occur when you try to open a document, because that document's name is received by a subroutine that did not get the right value as a parameter.

Les erreurs de conception ou de logique comprennent également des situations telles que :

- A record is not properly updated because, while calling `SAVE RECORD`, you forgot to first test whether or not the record was locked.
- Une méthode ne fait pas exactement ce que vous attendez, car la présence d'un paramètre facultatif n'est pas testée.

Parfois, le morceau de code qui affiche l'erreur peut être différent du code qui est en fait à l'origine du problème.

### Erreurs d'exécution

En mode Application, vous pouvez obtenir des erreurs que vous ne voyez pas en mode interprété. Voici un exemple :

![runtime-error](../assets/en/Debugging/runtimeError.png)

Pour trouver rapidement l'origine du problème, rouvrez la version interprétée du fichier de structure, ouvrez la méthode et allez à la ligne correspondante.

## Fenêtre d'erreur de syntaxe

La fenêtre d'erreur de syntaxe apparaît automatiquement lorsque l'exécution d'une méthode est interrompue. Cela peut se produire lorsque :

- une erreur empêche la poursuite de l'exécution du code
- the method produces a false assertion (see the `ASSERT` command)

![syntax-error](../assets/en/Debugging/syntax-error.png)

La zone de texte supérieure affiche un message décrivant l'erreur. La zone de texte inférieure montre la ligne qui était en cours d'exécution lorsque l'erreur s'est produite ; la zone où l'erreur s'est produite est mise en évidence. La section Détails développée contient la "pile" des erreurs liées au processus.

La fenêtre d'erreur de syntaxe propose plusieurs options :

- **Edit**: Stops all method execution. 4D bascule en mode Développement et la méthode comportant l'erreur s'ouvre dans l'éditeur de code, ce qui vous permet de la corriger. Utilisez cette option lorsque vous reconnaissez immédiatement l'erreur et que vous pouvez la corriger sans autre forme de procès.

- **Trace**: Enters Trace/Debugger mode. The [Debugger](debugger.md) window is displayed. If the current line has only executed partially, you may have to click the **Trace** button several times.

- **Continue**: Execution continues. La ligne contenant l'erreur peut être partiellement exécutée, selon l'endroit où se trouve l'erreur. Continuez avec prudence : l'erreur peut empêcher le reste de votre méthode de s'exécuter correctement. We recommend clicking **Continue** only if the error is in a trivial call (such as `SET WINDOW TITLE`) that does not prevent executing and testing the rest of your code.

> Tip: To ignore an error that occurs repeatedly (for example, in loops), you can turn the **Continue** button into an **Ignore** button. Hold down **Alt** (Windows) or **Option** (macOS) key and click the **Continue** button the first time it appears. The button label changes to **Ignore** if the dialog is called again for the same error.

- **Abort**: Stops method execution and returns to the state before the method started executing:

  - Si une méthode formulaire ou méthode objet s'exécute en réponse à un événement, elle est arrêtée et vous revenez au formulaire.
  - Si la méthode est exécutée à partir de l'environnement de l'application, vous revenez à cet environnement.

- **Copy**: Copies the debugging information into the clipboard. L'info décrit l'environnement interne de l'erreur (numéro, composant interne, etc.). Elles sont formatées sous forme de texte tabulé.

- **Save...**: Saves the contents of the syntax error window and the call chain in a `.txt` file.

## Débogueur

A common beginner mistake in dealing with error detection is to click **Abort** in the Syntax Error Window, go back to the Code Editor, and try to figure out what's going by looking at the code. Ne faites pas ça ! You will save plenty of time and energy by always using the **Debugger**.

Le débogueur vous permet d'avancer lentement dans les méthodes. Il affiche toutes les informations dont vous avez besoin pour comprendre pourquoi une erreur s'est produite. Une fois que vous avez ces informations, vous savez comment corriger l'erreur.

Une autre raison d'utiliser le débogueur est le développement du code. Il peut arriver que vous écriviez un algorithme plus complexe que d'habitude. Malgré tous les sentiments d'accomplissement, vous ne pouvez pas être totalement sûr que votre codage est 100% correct. Instead of running it "blind", you can use the `TRACE` command at the beginning of your code, then execute it step by step to keep an eye on what happens.

## Ruptures/sauts

Dans le processus de débogage, vous pouvez avoir besoin de sauter le traçage de certaines parties du code jusqu'à une certaine ligne. Or, you may want to trace the code when a given expression has a certain value (e.g. "$myVar > 1000"), or every time a specific 4D command is called.

These needs are covered by **breakpoints** and **command catching** features. Ils peuvent être configurés à partir de l'éditeur de code, du débogueur ou de l'explorateur d'exécution.
