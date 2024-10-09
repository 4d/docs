---
id: process-properties
title: PROCESS PROPERTIES
slug: /commands/process-properties
displayed_sidebar: docs
---

<!--REF #_command_.PROCESS PROPERTIES.Syntax-->**PROCESS PROPERTIES** ( *process* ; *procNom* ; *procStatut* ; *procTemps* {; *procMode* {; *uniqueID* {; *origine*}}} )<!-- END REF-->
<!--REF #_command_.PROCESS PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &srarr; | Numéro du process |
| procNom | Text | &harr; | Nom du process |
| procStatut | Integer | &harr; | Statut du process |
| procTemps | Integer | &harr; | Temps d'exécution cumulé du process en ticks |
| procMode | Boolean, Integer | &harr; | Si booléen : Visible (Vrai) ou Caché (Faux)Si entier long (champ de bits) : bit 0 = Visibilité, bit 1 = Exécution en préemptif |
| uniqueID | Integer | &harr; | Numéro unique du process |
| origine | Integer | &harr; | Origine du process |

<!-- END REF-->

#### Description 

<!--REF #_command_.PROCESS PROPERTIES.Summary-->La commande **PROCESS PROPERTIES** retourne diverses informations sur le process dont vous passez le numéro dans *process*.<!-- END REF-->

**Note :** Si le process n'existe pas, ce qui veut dire que vous n'avez pas passé, dans process, un nombre inclus dans l'intervalle \[1>[Count tasks](count-tasks.md)\], **PROCESS PROPERTIES** laisse les valeurs des variables passées en paramètres inchangées.

Après l'appel :

* *procNom* retourne le nom du process. Quelques points sont à noter à propos du nom du process :  
   * Si le process a été démarré depuis la boîte de dialogue **Exécuter une méthode** (avec l'option **Nouveau process** sélectionnée), son nom est “P\_” suivi d'un numéro.  
   * Si le process a été démarré à partir d'une commande de menu personnalisé dont la propriété **Démarrer un process** est sélectionnée, le nom du process est “M\_” ou “ML\_” suivi d'un numéro.  
   * Si le process a été démarré par le serveur Web, son nom est "Web Process#" suivi d'un identifiant UUID.  
   * Si un process a été stoppé (et son “espace” non encore réutilisé), son nom est encore retourné. Pour détecter si un process est stoppé, testez *procStatut*\=-1 (voir ci-dessous).
* *procStatut* retourne le statut du process au moment de l'appel. Ce paramètre peut retourner l'une des valeurs fournies par les constantes prédéfinies suivantes :  
| Constante                 | Type        | Valeur |  
| ------------------------- | ----------- | ------ |  
| Does not exist            | Entier long | \-100  |  
| Aborted                   | Entier long | \-1    |  
| Executing                 | Entier long | 0      |  
| Delayed                   | Entier long | 1      |  
| Waiting for user event    | Entier long | 2      |  
| Waiting for input output  | Entier long | 3      |  
| Waiting for internal flag | Entier long | 4      |  
| Paused                    | Entier long | 5      |

* *procTemps* retourne le cumul du temps que le process a utilisé depuis qu'il a été démarré, en ticks (1/60e de seconde).
* Le paramètre optionnel *procMode* peut être une variable de type booléen ou entier long :  
   * s'il est de type booléen, il retourne Vrai si le process est visible et Faux s'il est caché.  
   * s'il est de type entier long, il contient après l’exécution de la méthode un champ de bits où les deux premiers bits sont définis :  
         * le bit 0 retourne la propriété de visibilité : 1 si le process est visible, et 0 s'il est caché  
         * le bit 1 retourne la propriété de mode préemptif : 1 si le process est exécuté en mode préemptif, et 0 s'il est exécuté en mode coopératif. Pour plus d'informations, reportez-vous à la section *Process 4D préemptifs*.
* *uniqueID*, s'il est spécifié, retourne le numéro unique du process. En effet, chaque process se voit attribuer un numéro de process ainsi qu’un numéro unique de process par session. Ce dernier permet de différencier strictement deux process ou sessions de process. Il correspond au nombre de process ayant été lancés au cours de la session de l’application 4D.

##### 

* *origin*, s'il est spécifié, retourne une valeur décrivant l’origine du process. 4D propose les constantes prédéfinies suivantes (thème "*Type du process*") :  
    
| Constante                     | Type        | Valeur | Comment                                |  
| ----------------------------- | ----------- | ------ | -------------------------------------- |  
| Apple event manager           | Entier long | \-7    |                                        |  
| Backup process                | Entier long | \-19   |                                        |  
| Cache manager                 | Entier long | \-4    |                                        |  
| Client manager process        | Entier long | \-31   |                                        |  
| Compiler process              | Entier long | \-29   |                                        |  
| Created from execution dialog | Entier long | 3      |                                        |  
| Created from menu command     | Entier long | 2      |                                        |  
| Design process                | Entier long | \-2    |                                        |  
| Event manager                 | Entier long | \-8    |                                        |  
| Execute on client process     | Entier long | \-14   |                                        |  
| Execute on server process     | Entier long | 1      |                                        |  
| External task                 | Entier long | \-9    |                                        |  
| HTTP Log flusher              | Entier long | \-58   |                                        |  
| Indexing process              | Entier long | \-5    |                                        |  
| Internal 4D server process    | Entier long | \-18   |                                        |  
| Internal timer process        | Entier long | \-25   |                                        |  
| Log file process              | Entier long | \-20   |                                        |  
| Main 4D process               | Entier long | \-39   |                                        |  
| Main process                  | Entier long | \-1    |                                        |  
| Method editor macro process   | Entier long | \-17   |                                        |  
| Monitor process               | Entier long | \-26   |                                        |  
| MSC process                   | Entier long | \-22   |                                        |  
| None                          | Entier long | 0      |                                        |  
| On exit process               | Entier long | \-16   |                                        |  
| Other 4D process              | Entier long | \-10   |                                        |  
| Other user process            | Entier long | 4      |                                        |  
| Restore Process               | Entier long | \-21   |                                        |  
| Serial Port Manager           | Entier long | \-6    |                                        |  
| Server interface process      | Entier long | \-15   |                                        |  
| SOAP process                  | Entier long | \-33   |                                        |  
| SQL Method execution process  | Entier long | \-24   |                                        |  
| Web process on 4D remote      | Entier long | \-12   |                                        |  
| Web process with no context   | Entier long | \-3    |                                        |  
| Web server process            | Entier long | \-13   |                                        |  
| Web server spare process      | Entier long | \-32   |                                        |  
| Worker process                | Entier long | 5      | Process worker lancé par l’utilisateur |  
    
    
**Note:** Les process internes à 4D retournent une valeur négative et les process générés par l’utilisateur retournent une valeur positive.

#### Exemple 1 

L'exemple suivant retourne le nom, le statut, et le temps écoulé dans les variables *vNom*, *vStatut*, et *vTempsPassé* pour le process courant :

```4d
 var vNom : Text //Initialiser les variables
 var vStatut : Integer
 var vTempsPassé : Integer
 PROCESS PROPERTIES(Current process;vNom;vStatut;vTempsPassé)
```

#### Exemple 2 

Voir l'exemple de la section [Semaphore](semaphore.md).

#### Exemple 3 

Pour connaître la visibilité et le mode d'exécution du process courant, vous pouvez écrire :

```4d
 var vNom : Text
 var vStatut : Integer
 var vDurée : Integer
 var vMode : Integer //peut être déclaré en booléen si on veut juste connaître la visibilité
 var estVisible : Boolean
 var estPreemptif : Boolean
 PROCESS PROPERTIES(Current process;vNom;vStatut;vDurée;vMode)
 estVisible:=vMode?? 0 //vrai si visible
 estPreemptif:=vMode?? 1 //vrai si préemptif
```

#### Voir aussi 

[Count tasks](count-tasks.md)  
[Get process activity](get-process-activity.md)  
*Process 4D préemptifs*  
[Process state](process-state.md)  