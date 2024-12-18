---
id: on-err-call
title: ON ERR CALL
slug: /commands/on-err-call
displayed_sidebar: docs
---

<!--REF #_command_.ON ERR CALL.Syntax-->**ON ERR CALL** ( *méthodErreur* {; *portée*} )<!-- END REF-->
<!--REF #_command_.ON ERR CALL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| méthodErreur | Text | &#8594;  | Méthode de gestion d'erreur à appeler ou Chaîne vide pour désinstaller la méthode |
| portée | Integer | &#8594;  | Portée de la méthode de gestion d'erreur |

<!-- END REF-->

#### Description 

<!--REF #_command_.ON ERR CALL.Summary-->**ON ERR CALL** installe la méthode projet dont le nom est passé dans *méthodErreur* comme méthode d'interception des erreurs pour le contexte d'exécution défini dans le projet courant.<!-- END REF--> Cette méthode est aussi appelée méthode de gestion des erreurs. 

Les méthodes de gestion d'erreurs sont installées par projet : un projet composant et un projet hôte peuvent définir leur propre méthode d'interception d'erreurs, seule la méthode du projet dans lequel s'est produite l'erreur sera appelée. 

Après l'installation, 4D appelle cette méthode lorsqu'une erreur se produit lors de l'exécution d'une commande du langage 4D dans le contexte d'exécution défini. 

La *portée* de la commande désigne le contexte d'exécution depuis lequel une erreur déclenchera l'appel de *méthodErreur*. Par défaut, si le paramètre *portée* est omis, la portée de la commande est le contexte d'exécution local, c'est-à-dire le process courant. Vous pouvez passer l'une des constantes suivantes dans le paramètre *portée* :

| Constante                 | Valeur | Comment                                                                                     |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| ek errors from components | 2      | Erreurs générées dans les composants (et non interceptées par les composants)               |
| ek global                 | 1      | Erreurs générées dans le contexte d'exécution global du projet                              |
| ek local                  | 0      | Erreurs générées dans le contexte d'exécution local (par défaut si paramètre *portée* omis) |

* si *portée* \= ek local (ou si *portée* est omis), seules les erreurs qui se sont produites dans le process courant appelleront méthodErreur. Il ne peut y avoir qu'une seule méthode de gestion des erreurs par process, mais il peut exister différentes méthodes de gestions d'erreurs pour plusieurs process.
* si *portée* \= ek global, toutes les erreurs survenues dans l'application, quel que soit le process (sauf les composants), appelleront méthodErreur. Notez que si un gestionnaire d'erreurs ek local est aussi défini pour un process, le gestionnaire d'erreurs ek global n'est pas appelé. Ce principe vous permet de définir une méthode de gestion des erreurs générique qui interceptera toutes les erreurs, tandis que des méthodes locales de gestion d'erreurs peuvent être définies pour certains process spécifiques.  
Notez également qu'une méthode globale de gestion des erreurs est utile sur le serveur, où elle permet de gérer les erreurs dans les fonctions côté serveur.
* si *portée* \= ek errors from components, seules les erreurs générées par les composants installés dans l'application appelleront méthodErreur. Notez que, si une méthode de gestion d'erreurs est définie dans un composant, elle est appelée en cas d'erreur dans le composant et le gestionnaire d'erreurs ek errors from components défini dans l'application hôte n'est pas appelé.

**Note :** Si **ON ERR CALL** est appelée depuis un process dont vous avez demandé l'exécution en préemptif (en mode compilé), le compilateur vérifiera le caractère thread-safe de *méthodErreur* et retournera des erreurs si elle n'est pas compatible avec le mode préemptif. Pour plus d'informations, reportez-vous à la section *Process 4D préemptifs*.

Pour désinstaller une méthode de gestion des erreurs, appelez de nouveau **ON ERR CALL** avec le paramètre *portée* souhaité (le cas échéant) et passez une chaîne vide dans *méthodErreur*.

Vous pouvez identifier les erreurs en lisant la variable système Error, qui contient le code de l'erreur. Les codes d'erreurs retournés par 4D sont traités dans les sections *Codes d'erreurs*. Reportez-vous par exemple à la section *Erreurs de syntaxe (1 -> 81)*. La variable Error n'est définie qu'à l'intérieur de la méthode de gestion des erreurs ; si vous souhaitez que le code soit accessible dans la méthode ayant provoqué l'erreur, copiez la variable Error dans votre propre variable process. Vous pouvez également accéder aux variables système Error method, Error line et Error formula contenant respectivement le nom de la méthode, le numéro de ligne et le texte de la formule à l'origine de l'erreur (cf. [Gérer les erreurs dans une méthode](https://developer.4d.com/docs/fr/Concepts/error-handling/#g%C3%A9rer-les-erreurs-dans-une-m%C3%A9thode)).

Vous pouvez utiliser la commande [Last errors](last-errors.md) ou [Last errors](last-errors.md)  pour obtenir la séquence d'erreurs (c'est-à-dire la "pile" d'erreurs) à l'origine de l'interruption.

La méthode de gestion des erreurs doit généralement traiter les erreurs de manière appropriée ou afficher un message d'erreur à l'utilisateur. Les erreurs peuvent être générées lors de traitements effectués sur :

* Le moteur de base de données de 4D ; par exemple, lorsque la sauvegarde d'un enregistrement provoquerait la violation d'une règle de trigger.
* L'environnement de 4D ; par exemple, lorsque vous n'avez pas assez de mémoire pour remplir un tableau.
* Le système d'exploitation sur lequel la base est lancée ; par exemple, disque plein ou erreurs d'entrée/sortie.

La commande [ABORT](abort.md) peut être utilisée pour stopper le traitement. Si vous n'appelez pas [ABORT](abort.md) dans la méthode installée, 4D retourne à la méthode interrompue et reprend son exécution. Utilisez la commande [ABORT](abort.md) lorsque l'exécution ne peut se poursuivre.

Si une erreur se produit dans la méthode de gestion d'erreurs elle-même, 4D reprend le contrôle de la gestion des erreurs. En conséquence, assurez-vous que la méthode de gestion des erreurs installée ne puisse pas elle-même générer d'erreur. Aussi, vous ne pouvez pas utiliser la commande **ON ERR CALL** dans une méthode de gestion des erreurs.

#### Exemple 1 

Vous souhaitez définir un gestionnaire d'erreur global, par exemple dans la méthode base Sur ouverture :

```4d
 ON ERR CALL("myGlobalErrorHandler";ek global)
```

#### Exemple 2 

La méthode projet suivante tente de créer un document dont le nom est reçu en paramètre et retourne 0 (zéro) ou un code d'erreur si le document n'a pas pu être créé : 

```4d
  // Méthode projet Créer doc
  // Créer doc ( Chaîne ; Pointeur ) -> Entier long
  // Créer doc ( NomDoc ; ->DocRef ) -> Code d'erreur résultant
 
 gError:=0
 ON ERR CALL("IO TRAITEMENT ERREURS")
 $2->:=Create document($1)
 ON ERR CALL("")
 $0:=gError
```

La méthode projet IO TRAITEMENT ERREURS est la suivante :

```4d
  // Méthode projet IO TRAITEMENT ERREURS
```

```4d
 gError:=Error // Simple copie du code d'erreur dans la variable process gError
```

Notez l'utilisation de la variable process *gError* pour récupérer le code d'erreur dans la méthode en train de s'exécuter. Une fois que ces méthodes sont présentes dans votre base, vous pouvez écrire par exemple :

```4d
  // ...
 var vhDocRef : Time
 $vlErrCode:=Créer doc($vsDocumentNom;->vhDocRef)
 If($vlErrCode=0)
  //...
    CLOSE DOCUMENT($vlErrCode)
 Else
    ALERT("Le document n'a pas pu être créé, erreur d'E/S "+String($vlErrCode))
 End if
```

#### Exemple 3 

Alors que vous implémentez un ensemble complexe d'opérations, vous pouvez terminer avec de multiples sous-routines qui nécessitent différentes méthodes de gestion des erreurs. Comme ne pouvez avoir qu'une seule méthode à la fois de gestion des erreurs par process, vous devez soit repérer la méthode courante à chaque fois que vous appelez **ON ERR CALL**, soit utiliser une variable tableau process (ici *tabErrorMethod*) pour “empiler” les méthodes de gestion d'erreur ainsi qu'une méthode projet (ici APPEL SUR ERR) pour les installer et les désinstaller. Le tableau doit être initialisé au tout début de l'exécution du process : 

```4d
  // N'oubliez pas d'initialiser le tableau au début
  // de la méthode de gestion du process
 ARRAY STRING(63;tabErrorMethod;0)
```

Voici la méthode personnalisée APPEL SUR ERR :

```4d
  // Méthode projet APPEL SUR ERR
  // APPEL SUR ERR { ( Chaîne ) }
  // APPEL SUR ERR { ( Nom de la méthode ) }
 
 C_STRING(63;$1;$ErrorMethod)
 var $vlElem : Integer
 
 If(Count parameters>0)
    $ErrorMethod:=$1
 Else
    $ErrorMethod:=""
 End if
 
 If($ErrorMethod#"")
    var gError : Integer
    gError:=0
    $vlElem:=1+Size of array(tabErrorMethod)
    INSERT IN ARRAY(tabErrorMethod;$vlElem)
    tabErrorMethod{$vlElem}:=$1
    ON ERR CALL($1)
 Else
    ON ERR CALL("")
    $vlElem:=Size of array(tabErrorMethod)
    If($vlElem>0)
       DELETE FROM ARRAY(tabErrorMethod;$vlElem)
       If($vlElem>1)
          ON ERR CALL(tabErrorMethod{$vlElem-1})
       End if
    End if
 End if
```

Vous pouvez alors l'appeler de la manière suivante :

```4d
 gError:=0
 APPEL SUR ERR("ERREURS ES") //Installe la méthode de gestion d'erreurs ERREURS ES
  // ...
 APPEL SUR ERR("TOUTES ERREURS") //Installe la méthode de gestion d'erreurs TOUTES ERREURS
  // ...
 APPEL SUR ERR //Désinstalle la méthode de gestion d'erreurs TOUTES ERREURS et réinstalle ERREURS ES
  // ...
 APPEL SUR ERR //Désinstalle la méthode de gestion d'erreurs ERREURS ES
  // ...
```

#### Exemple 4 

La méthode de gestion d'erreurs suivante ignore les interruptions de l'utilisateur et affiche le texte de l'erreur :

```4d
  //Méthode projet Montrer_seulement_erreurs
 If(Error#1006) //ce n'est pas une interruption utilisateur
    ALERT("L'erreur "+String(Error)+" s'est produite. Le code en cause est : \""+Error formula+"\"")
 End if
```

#### Voir aussi 

[ABORT](abort.md)  
*Gestionnaire d'erreur*  
[Last errors](last-errors.md)   
[Last errors](last-errors.md)  
[Method called on error](method-called-on-error.md)  
*Variables système*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 155 |
| Thread safe | &check; |


