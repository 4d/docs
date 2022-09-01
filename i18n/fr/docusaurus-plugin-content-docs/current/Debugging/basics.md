---
id: basics
title: Principes de base
---

Les erreurs sont courantes. Il serait inhabituel d'écrire un nombre important de lignes de code sans générer aucune erreur. À l'inverse, traiter et/ou corriger des erreurs est également normal !

L'environnement de développement 4D fournit plusieurs outils de débogage pour tous les types d'erreurs.

## Types d'erreurs

### Erreurs de saisie

Les fautes de frappe sont détectées par l'éditeur de méthode. Elles sont affichées en rouge et des informations complémentaires sont fournies en bas de la fenêtre. Voici une erreur de frappe :

![break-point](../assets/en/Debugging/typing-error.png)


Ces erreurs de frappe provoquent généralement des erreurs de syntaxe (dans l'image ci-dessus, le nom de la table est inconnu). Vous obtenez la description de l'erreur lorsque vous validez la ligne de code. Lorsque cela se produit, corrigez l'erreur de frappe et tapez Entrée pour valider la correction.

### Erreurs de syntaxe

Certaines erreurs ne peuvent être détectées que lorsque vous exécutez la méthode. La [fenêtre d'erreur de syntaxe](#syntax-error-window) apparaît lorsqu'une erreur se produit pendant l'exécution du code.

![syntax-error](../assets/en/Debugging/syntax-error.png)

Agrandissez la zone **Détails** pour afficher la dernière erreur et son numéro.

### Erreurs dans l'Environnement

Il peut arriver que la mémoire soit insuffisante pour créer une BLOB. Ou, lorsque vous accédez à un document sur le disque, il se peut que ce document n'existe pas ou qu'il soit déjà ouvert par une autre application. Ces erreurs dans l'Environnementa ne sont pas directement dues à votre code ou à la façon dont vous l'avez écrit. La plupart du temps, ces erreurs sont faciles à traiter avec une [méthode de capture d'erreur](Concepts/error-handling.md) installée à l'aide de la commande `ON ERR CALL`.

### Erreurs de conception ou de logique

Ce sont généralement les types d'erreurs les plus difficiles à trouver. À l'exception des erreurs de frappe, tous les types d'erreurs énumérés ci-dessus sont, dans une certaine mesure, couverts par l'expression "erreur de conception ou de logique". Utilisez le [débogueur](debugger.md) pour les détecter.

- Une *erreur de syntaxe* peut se produire lorsque vous essayez d'utiliser une variable qui n'est pas encore initialisée.
- Une *erreur au niveau de l'Environnement* peut se produire lorsque vous essayez d'ouvrir un document, parce que le nom de ce document est reçu par une sous-routine qui n'a pas obtenu la bonne valeur comme paramètre.

Les erreurs de conception ou de logique comprennent également des situations telles que :

- Un enregistrement n'est pas correctement mis à jour parce que, en appelant `SAVE RECORD`, vous avez oublié de tester d'abord si l'enregistrement était verrouillé ou non.
- Une méthode ne fait pas exactement ce que vous attendez, car la présence d'un paramètre facultatif n'est pas testée.

Parfois, le morceau de code qui affiche l'erreur peut être différent du code qui est en fait à l'origine du problème.

### Erreurs d'exécution

En mode Application, vous pouvez obtenir des erreurs que vous ne voyez pas en mode interprété. Voici un exemple :

![runtime-error](../assets/en/Debugging/runtimeError.png)

Pour trouver rapidement l'origine du problème, rouvrez la version interprétée du fichier de structure, ouvrez la méthode et allez à la ligne correspondante.

## Fenêtre d'erreur de syntaxe

La fenêtre d'erreur de syntaxe apparaît automatiquement lorsque l'exécution d'une méthode est interrompue. Cela peut se produire lorsque :

- une erreur empêche la poursuite de l'exécution du code
- la méthode produit une fausse assertion (voir la commande `ASSERT`)

![syntax-error](../assets/en/Debugging/syntax-error.png)

La zone de texte supérieure affiche un message décrivant l'erreur. La zone de texte inférieure montre la ligne qui était en cours d'exécution lorsque l'erreur s'est produite ; la zone où l'erreur s'est produite est mise en évidence. La section Détails développée contient la "pile" des erreurs liées au processus.

La fenêtre d'erreur de syntaxe propose plusieurs options :

- **Modifier** : arrête l'exécution de toutes les méthodes. 4D bascule en mode Développement et la méthode comportant l'erreur s'ouvre dans l'éditeur de code, ce qui vous permet de la corriger. Utilisez cette option lorsque vous reconnaissez immédiatement l'erreur et que vous pouvez la corriger sans autre forme de procès.

- **Trace** : Accède au mode Trace/Debugger. La fenêtre du [débogueur](debugger.md) s'affiche. Si la ligne en cours n'a été exécutée que partiellement, vous devrez peut-être cliquer plusieurs fois sur le bouton **Trace**.

- **Continuer** : L'exécution se poursuit. La ligne contenant l'erreur peut être partiellement exécutée, selon l'endroit où se trouve l'erreur. Continuez avec prudence : l'erreur peut empêcher le reste de votre méthode de s'exécuter correctement. Nous vous recommandons de cliquer sur **Continuer** uniquement si l'erreur se trouve dans un appel trivial (tel que `SET WINDOW TITLE`) qui n'empêche pas d'exécuter et de tester le reste de votre code.

> Astuce : pour ignorer une erreur qui se répète (par exemple, dans les boucles), vous pouvez transformer le bouton **Continuer** en bouton **Ignorer**. Maintenez la touche **Alt** (Windows) ou **Option** (macOS) enfoncée et cliquez sur le bouton **Continuer** la première fois qu'il apparaît. L'étiquette du bouton devient **Ignorer** si la boîte de dialogue est appelée à nouveau pour la même erreur.

- **Abandonner** : Stoppe l'exécution de la méthode et revient à l'état antérieur au début de l'exécution de la méthode :

    - Si une méthode formulaire ou méthode objet s'exécute en réponse à un événement, elle est arrêtée et vous revenez au formulaire.
    - Si la méthode est exécutée à partir de l'environnement de l'application, vous revenez à cet environnement.

- **Copier** : Copie les informations de débogage dans le presse-papiers. L'info décrit l'environnement interne de l'erreur (numéro, composant interne, etc.). Elles sont formatées sous forme de texte tabulé.

- **Enregistrer...** : Enregistre le contenu de la fenêtre d'erreur syntaxique et de la chaîne d'appel dans un fichier `.txt`.

## Débogueur

Une erreur courante des débutants en matière de détection des erreurs consiste à cliquer sur **Abandonner** dans la fenêtre d'erreur de syntaxe, à revenir à l'éditeur de code et à essayer de comprendre ce qui se passe en regardant le code. Ne faites pas ça ! Vous économiserez beaucoup de temps et d'énergie en utilisant toujours le **Débogueur**.

Le débogueur vous permet d'avancer lentement dans les méthodes. Il affiche toutes les informations dont vous avez besoin pour comprendre pourquoi une erreur s'est produite. Une fois que vous avez ces informations, vous savez comment corriger l'erreur.

Une autre raison d'utiliser le débogueur est le développement du code. Il peut arriver que vous écriviez un algorithme plus complexe que d'habitude. Malgré tous les sentiments d'accomplissement, vous ne pouvez pas être totalement sûr que votre codage est 100% correct. Au lieu de l'exécuter "à l'aveugle", vous pouvez utiliser la commande `TRACE` au début de votre code, puis l'exécuter pas à pas pour garder un œil sur ce qui se passe.

## Ruptures/sauts

Dans le processus de débogage, vous pouvez avoir besoin de sauter le traçage de certaines parties du code jusqu'à une certaine ligne. Ou bien, vous pouvez vouloir tracer le code lorsqu'une expression donnée a une certaine valeur (par exemple "$myVar > 1000"), ou chaque fois qu'une commande 4D spécifique est appelée.

Ces besoins sont couverts par les fonctions **points d'arrêt** et **points d'arrêt sur commande**. Ils peuvent être configurés à partir de l'éditeur de code, du débogueur ou de l'explorateur d'exécution.