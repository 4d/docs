---
id: new-process
title: New process
slug: /commands/new-process
displayed_sidebar: docs
---

<!--REF #_command_.New process.Syntax-->**New process** ( *méthode* ; *pile* {; *nom* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.New process.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| méthode | Text | &#8594;  | Méthode à exécuter dans le process |
| pile | Integer | &#8594;  | Taille de la pile en octets (0 = taille par défaut) |
| nom | Text | &#8594;  | Nom du process créé |
| param | Expression | &#8594;  | Paramètre(s) de la méthode |
| * | Opérateur | &#8594;  | Process unique |
| Résultat | Integer | &#8592; | Numéro du process nouvellement créé ou du process déjà en cours d'exécution |

<!-- END REF-->

#### Description 

<!--REF #_command_.New process.Summary-->La commande **New process** lance un nouveau process (sur la même machine) et retourne le numéro de ce process.<!-- END REF-->

Si le process n'a pas pu être créé, par exemple s'il n'y a pas assez de mémoire, **New process** retourne zéro et une erreur est générée. Vous pouvez intercepter cette erreur à l'aide d'une méthode de gestion d'erreurs installée par la commande [ON ERR CALL](on-err-call.md).

##### Méthode du process 

Vous passez le nom de la méthode de gestion du nouveau process dans *méthode*. Une fois que 4D a défini le contexte pour le nouveau process, il démarre l'exécution de cette méthode qui devient alors la méthode du process.

Si le contexte d'exécution prend en charge le mode préemptif, et si *méthode* est déclarée "thread-safe", le nouveau process 4D sera exécuté dans un *thread* préemptif lorsque l'application sera exécutée en mode compilé. Pour plus d'informations, veuillez consulter la page *Process 4D préemptifs*. 

##### Pile du process 

Le paramètre *pile* permet d'indiquer la quantité de mémoire allouée pour la pile du process. Cette valeur représente la place utilisée en mémoire pour "empiler" les appels de méthode, les variables locales, les paramètres des sous-routines et les enregistrements empilés.

* Passez 0 dans *pile* pour utiliser une taille de pile par défaut, adaptée à la plupart des applications (paramétrage recommandé).
* Dans certains cas particuliers, vous pouvez souhaiter utiliser une valeur personnalisée. Elle doit être exprimée en octets. Ce paramétrage doit être utilisé avec précaution, et dépend de la chaîne d'appel dans le process et de la plateforme.

**Note :** La pile n'est pas la mémoire totale réservée au process. Les process se partagent la mémoire pour les enregistrements, les variables interprocess, etc. Un process utilise également de la mémoire supplémentaire pour stocker ses variables process. La pile contient diverses informations internes à 4D ; la taille de ces informations varie en fonction du nombre d'appels de méthodes imbriquées.

##### Nom du process 

Vous passez le nom du nouveau process dans *nomProcess*. Ce nom s'affichera dans la **liste des process** de l'Explorateur d'exécution et sera retourné par la commande [Process info](../commands/process-info.md). Vous pouvez omettre ce paramètre ; dans ce cas, le nom du process sera une chaîne vide. Vous pouvez créer un process local en préfixant son nom d'un symbole dollar (*$*). 

**Important :** Rappelez-vous que, en client/serveur, les process locaux ne doivent pas accéder aux données. Pour plus d'informations, veuillez consulter la section *Process globaux et locaux*.

##### Paramètres de la méthode process 

Vous pouvez passer des paramètres à la méthode process via un ou plusieurs paramètre(s) *param*. Vous pouvez le faire de la même manière que pour les sous-routines (cf. paragraphe ). Une fois qu'elle a commencé à s'exécuter dans le contexte du nouveau process, la méthode process reçoit les valeurs des paramètres dans *$1*, *$2*, etc. N'oubliez pas que les tableaux ne peuvent pas être passés comme paramètres à une méthode. En outre, des considérations supplémentaires sont à prendre en compte dans le contexte de la commande **New process** :

* les pointeurs vers des tables ou des champs sont autorisés,
* les pointeurs vers des variables, en particulier des variables process et locales, sont déconseillés car les variables peuvent être indéfinies au moment où la méthode process y accède.
* les paramètres de type Objet ou Collection sont passés **par copie**, *i.e.* 4D créera une copie de l'objet ou de la collection dans le process de destination, et non une référence. Si vous souhaitez passer un paramètre de type objet ou collection **par référence**, vous devez utiliser un objet ou une collection partagé(e) (voir *Objets partagés et collections partagées*).

**Note :** Si vous passez des paramètres à la méthode process, vous devez passer le paramètre *nom*, il ne peut être omis dans ce cas. 

##### Paramètre optionnel \* 

Si vous passez le dernier paramètre (optionnel) *\**, vous indiquez à 4D de vérifier en premier lieu si un process du même nom que celui que vous avez passé dans *nom* est déjà en cours d'exécution. Si c'est le cas, 4D ne démarre pas de nouveau process et retourne le numéro du process existant.

#### Exemple 

Examinons la méthode projet suivante : 

```4d
  // AJOUT CLIENTS
 SET MENU BAR(1)
 Repeat
    ADD RECORD([Clients];*)
 Until(OK=0)
```

Si vous associez cette méthode projet à une commande de menu créé dans l'éditeur de barres de menus et que vous lui affectez la propriété **Démarrer un process**, 4D va automatiquement créer un nouveau process lors de l'exécution de la méthode. L'instruction [SET MENU BAR](set-menu-bar.md)(1) associe cette barre de menus au nouveau process. En l'absence de toute fenêtre (que vous pourriez avoir ouverte avec [Open window](open-window.md)), l'appel à [ADD RECORD](add-record.md) en créera une automatiquement.

Si maintenant vous voulez pouvoir démarrer le process Ajout Clients lorsque vous cliquez sur un bouton situé dans un tableau de contrôle personnalisé, vous pouvez écrire : 

```4d
  // Méthode objet bouton bAjoutClients
 $vlProcessID:=New process("Ajout Clients";0;"Ajout de clients")
```

Ce bouton fait la même chose que la commande de menu personnalisée.

Si, maintenant, lorsque la commande de menu est sélectionnée ou lorsque le bouton reçoit un clic, vous voulez que le process soit lancé s'il n'existe pas ou qu'il soit passé au premier plan s'il existe déjà, vous pouvez créer la méthode DEMARRER AJOUT CLIENTS :

```4d
  // DEMARRER AJOUT CLIENTS
 $vlProcessID:=New process("Ajout Clients";0;"Ajout de clients ";*)
 If($vlProcessID#0)
    BRING TO FRONT($vlProcessID)
 End if
```

La méthode objet de *bAjoutClient* devient :

```4d
  // Méthode objet bouton bAjoutClients
 DEMARRER AJOUT CLIENTS
```

Dans l'éditeur de barres de menus, vous remplacez AJOUT CLIENTS par la méthode DEMARRER AJOUT CLIENTS. Désélectionnez l'option **Démarrer un process** pour la commande de menu.

#### Voir aussi 

[Execute on server](execute-on-server.md)  
*Introduction aux process*  
*Process 4D préemptifs*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 317 |
| Thread safe | &check; |
| Interdite sur le serveur ||


