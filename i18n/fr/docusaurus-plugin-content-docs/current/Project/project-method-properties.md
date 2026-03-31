---
id: project-method-properties
title: Méthodes projet
---

## Roles

Une méthode projet peut tenir les rôles suivants, en fonction de la manière dont elle est exécutée et utilisée :

- Sous-routine
- Objet formule
- Méthode de menu
- Méthode de gestion de process
- Méthode de gestion d’événements et d'erreurs
- APIs to be called from the web server, transformation tags, extensions...
- Vous pouvez également exécuter les méthodes projet manuellement, à des fins de test par exemple.

### Sous-routines

Une sous-routine est une méthode projet qui peut être considérée comme une méthode asservie. D’autres méthodes lui demandent d’effectuer des tâches. Une sous-routine qui retourne une valeur est appelée une fonction.

Lorsque vous créez une méthode projet, elle devient partie intégrante du langage du projet dans lequel elle a été créée. Vous pouvez procéder de la manière suivante : Vous pouvez procéder de la manière suivante : Vous pouvez procéder de la manière suivante : de la même manière que vous appelez les commandes intégrées de 4D. Une méthode projet utilisée de cette manière est appelée une sous-routine.

L'utilisation de sous-routines procure les avantages suivants :

- Réduction du code répétitif,
- Clarification des méthodes,
- Modification plus facile des méthodes,
- Création de code modulaire

Imaginons par exemple que vous travaillez sur un projet de clients. A mesure que vous construisez le projet, vous vous apercevez que vous répétez souvent certaines tâches, telles que la recherche d’un client et la modification de son enregistrement. Le code nécessaire à l’accomplissement de cette opération pourrait être :

```4d
  // Recherche d'un client
 QUERY BY EXAMPLE([Clients])
  // Sélection du formulaire entrée
 FORM SET INPUT([Clients];"Saisie de données")
  // Modification de l'enregistrement du client
 MODIFY RECORD([Clients])
```

Si vous n’utilisez pas de sous-routines, vous devrez écrire ce code à chaque fois que vous voudrez modifier l’enregistrement d’un client. Si cette opération est réalisée dans dix endroits différents de votre projet, vous devrez la réécrire dix fois. Grâce aux sous-routines, vous ne l’écrirez qu’une seule fois en tout. C’est le premier avantage des sous-routines : réduire la quantité de code à écrire.

Si le code ci-dessus était une méthode projet appelée `MODIFY_CUSTOMER`, vous l’exécuteriez simplement en inscrivant son nom dans une autre méthode. Par exemple, pour modifier l’enregistrement d’un client puis l’imprimer, vous n’auriez qu’à écrire :

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

Cette possibilité simplifie énormément vos méthodes. Dans l’exemple ci-dessus, il n’est pas nécessaire de savoir comment fonctionne la méthode `MODIFY_CUSTOMER`, mais uniquement ce qu’elle fait. C’est le deuxième avantage que vous pouvez tirer de l’utilisation de sous-routines : la clarification de votre code. Ainsi, ces méthodes deviennent en quelque sorte des extensions du langage de 4D.

Si vous devez modifier votre mode de recherche des clients, comme dans notre exemple, il vous suffit de modifier une seule méthode, et non dix. C’est un autre avantage des sous-routines : faciliter les modifications de votre code.

Avec les sous-routines, vous rendez votre code modulaire. Cela signifie simplement que vous dissociez votre code en modules (sous-routines), chacun d’entre eux effectuant une tâche logique. Examinez le code suivant, tiré d’un projet de gestion de compte courant :

```4d
 FIND_CLEARED _CHECKS // Rechercher les chèques émis
 RECONCILE_ACCOUNT // Rapprocher le compte
PRINT_CHECK_BOOK_REPORT // Imprimer un relevé
```

Même pour quelqu’un qui ne connaît pas le projet, le code est clair. Il n’est pas nécessaire d’examiner chaque sous-routine. Elles peuvent contenir de nombreuses lignes d’instructions et effectuer des opérations complexes, mais l’important est ce qu’elles font. Nous vous conseillons de découper votre code en tâches logiques, ou modules, à chaque fois que c’est possible.

### Objet formule

Vous pouvez encapsuler vos méthodes projets dans les objets **formule** et les appeler à partir de vos objets.

The [`Formula`](../commands/formula) or [`Formula from string`](../commands/formula-from-string) commands allow you to create [native formula objects](../API/FormulaClass.md) that you can encapsulate in object properties. Vous pouvez ainsi implémenter des méthodes d'objets personnalisées.

Pour exécuter une méthode stockée dans une propriété d'objet, utilisez l'opérateur **()** après le nom de la propriété. Par exemple :

```4d
//myAlert
ALERT("Hello world!")
```

`myAlert` peut ensuite être encapsulé dans n'importe quel objet et peut être appelé :

```4d
var $o : Object
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //affiche "Hello world!"
```

La syntaxe avec des crochets est également prise en charge :

```4d
$o["custom_Alert"]() //affiche "Hello world!"
```

For more information, see the [`4D.Formula` class description](../API/FormulaClass.md) and the [Using object properties as named parameters](../Concepts/parameters.md#using-object-properties-as-named-parameters) paragraph.

### Méthodes de menu

Une méthode de menu est appelée lorsque la commande de menu personnalisé à laquelle elle est associée est sélectionnée. You assign the method to the menu command using the Menu editor or a [command of the "Menus" theme](../commands/theme/Menus.md). Lorsque l’utilisateur sélectionne la commande de menu, la méthode est exécutée. En créant des menus personnalisés qui appellent des méthodes de menu qui exécutent des actions spécifiques, vous créez des interfaces personnalisées pour vos applications de bureau.

Les commandes de menus personnalisés peuvent déclencher une ou plusieurs actions. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the [`ADD RECORD`(../commands/add-record)] command until the user cancels the data entry activity.

Automating sequences of activities is a very powerful capability of the 4D programming language. A l’aide des menus personnalisés, vous pouvez automatiser des séquences de tâches, vous permettez aux utilisateurs de naviguer plus facilement dans votre application.

### Méthodes de gestion de process

Une **méthode process** est une méthode projet appelée lorsqu’un process est démarré. The process lasts only as long as the process method continues to execute, except if it is a [Worker process](../Develop/processes.md#worker-processes). Note that a menu method attached to a menu command with [*Start a New Process*](../Menus/properties.md#start-a-new-process) property is also the process method for the newly started process.

### Méthodes de gestion d’événements et d'erreurs

Une **méthode de gestion d’événements** est une méthode dédiée à la gestion des événements, qui s'exécute dans un process différent de celui de la méthode de gestion des process. Généralement, pour la gestion des événements, vous pouvez laisser 4D faire le gros du travail. Par exemple, lors de la saisie de données, 4D détecte les clics souris et les touches enfoncées, puis appelle les méthodes objet et formulaire correspondantes, vous permettant ainsi de prévoir dans ces méthodes les traitements appropriés aux événements. For more information, see the description of the command [`ON EVENT CALL`](../commands/on-event-call).

Une **méthode de gestion d’erreurs** est une méthode projet d'interruption. Elle est appelée à chaque fois qu'une erreur ou une exception se produit. Pour plus d'informations, consultez la section [Gestion des erreurs](../Concepts/error-handling.md).

### API Methods

Project methods can be called from external contexts such as other applications, web apps, processed files, etc., in which case they can be seen as API. Such calls include:

- calls to the web server through [http request handlers](../WebServer/http-request-handler.md) or [`4DACTION` URLs](../WebServer/httpRequests.md#4daction),
- [tag processing](../Tags/transformation-tags.md)
- expressions called from extensions ([4D Write Pro](../WritePro/commands/wp-insert-formula.md), [4D View Pro](../ViewPro/formulas.md) or form objects (e.g. [`ST INSERT EXPRESSION`](../commands/st-insert-expression)).

External calls to project methods must be allowed in the [project method properties](../Project/project-method-properties.md).

### Execution mode

Les méthodes projet écrites dans votre application sont généralement appelées automatiquement lors de l'utilisation de l'application par des commandes de menu, des boutons, d'autres méthodes, etc. Quant aux méthodes base, elles sont exécutées en fonction d'événements spécifiques qui se produisent dans l'application.

Toutefois, à des fins de test et de débogage, 4D vous permet d'exécuter manuellement des méthodes projet et certaines méthodes base en mode Développement. Dans ce cas, il est possible d'exécuter la méthode dans un nouveau process et/ou directement en mode Debug, afin de vérifier son exécution pas à pas.

Vous pouvez exécuter les méthodes de deux manières :

- Dans la fenêtre de l'éditeur de code,
- Dans la boîte de dialogue Exécuter la méthode (méthodes projet).

#### Depuis l'éditeur de code

Chaque fenêtre de l'[**Éditeur de code**](../code-editor/write-class-method.md) dispose d'un bouton qui peut être utilisé pour exécuter la méthode courante. A l'aide du menu associé à ce bouton, vous pouvez choisir le type d'exécution souhaité.

Ce bouton est uniquement actif pour les méthodes projet et pour les méthodes base suivantes :

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

Pour plus d'informations, voir [Barre d'outils](../code-editor/write-class-method.md#toolbar).

#### Dans la boîte de dialogue Exécuter la méthode

Lorsque vous sélectionnez la commande **Méthode...** du menu **Exécution**, la boîte de dialogue **Méthode** s'affiche.

Cette boîte de dialogue répertorie toutes les méthodes projet de la base, y compris les méthodes projet partagées des composants. En revanche, les méthodes projet qui ont été déclarées invisibles n'apparaîtront pas.

Pour exécuter une méthode de projet, il suffit de sélectionner son nom dans la liste et de cliquer sur **Exécuter**. Pour exécuter une méthode étape par étape en mode Debug, cliquez sur **Debug**. Pour plus d'informations sur le débogueur 4D, reportez-vous à la section [Debugging](../Debugging/basics.md) .

Si vous cochez la case **Nouveau Process** , la méthode que vous avez sélectionnée s'exécute dans un autre process. Si la méthode effectue une tâche qui prend du temps, comme l'impression d'un grand nombre d'enregistrements, vous pouvez continuer à travailler avec votre base, en ajoutant des enregistrements à une table, en créant un graphe pour afficher les données, etc. Pour plus d'informations sur les process, voir [Process](../Develop/processes.md).

**Notes 4D Server**:

- Si vous souhaitez que la méthode soit exécutée sur la machine serveur plutôt que sur la machine cliente, sélectionnez l'option **Sur 4D Server** dans le menu Exécuter : Dans ce cas, un nouveau process, appelé *procédure stockée*, est créé sur la machine serveur afin d'exécuter la méthode. Dans ce cas, un nouveau process, appelé *procédure stockée*, est créé sur la machine serveur afin d'exécuter la méthode. Cette option peut être utilisée pour réduire le trafic réseau et optimiser le fonctionnement de 4D Server, en particulier pour les méthodes qui appellent des données stockées sur le disque. Tous les types de méthodes peuvent être exécutés sur la machine serveur ou sur une autre machine cliente, à l'exception de celles qui modifient l'interface utilisateur. Dans ce cas, les procédures stockées sont inefficaces.
- Vous pouvez également choisir d'exécuter la méthode sur un autre poste client. Les autres postes clients n'apparaîtront pas dans le menu, sauf s'ils ont été préalablement "enregistrés" (pour plus d'informations, se référer à la description de [REGISTER CLIENT](../commands/register-client).

Par défaut, l'option **En local** est sélectionnée. Avec la version mono-utilisateur de 4D, c'est la seule option disponible.

### Méthode projet récursives

Des méthodes projet peuvent s'appeler les unes les autres. Par exemple :

- Une méthode A peut appeler une méthode B, qui appelle A, donc A appelle B de nouveau, etc.
- Une méthode peut s'appeler elle-même.

Cela s'appelle la récursivité. Le langage de 4D supporte pleinement la récursivité.

Examinons l'exemple suivant : Examinons l'exemple suivant : Examinons l'exemple suivant : Examinons l'exemple suivant : Supposons que vous disposiez d'une table `[Friends and Relatives]` composée de cet ensemble de champs extrêmement simplifié :

- `[Amis et parents]Nom`
- `[Amis et parents]Enfant'Nom`

Pour cet exemple, nous supposons que les valeurs des champs sont uniques (il n'existe pas deux personnes avec le même nom). A partir d'un nom, vous voulez écrire la phrase “Un de mes amis, Pierre, qui est le rejeton de Paul qui est le rejeton de Martine qui est le rejeton de Robert qui est le rejeton de Gertrude, fait cela pour gagner sa vie !” :

1. Vous pouvez procéder de la manière suivante :

```4d
 var $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       var $vtTheWholeStory:="A friend of mine, "+$vsName
       var $vlQueryResult : Integer
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
```

2. Vous pouvez également procéder ainsi :

```4d
 var $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

en utilisant la fonction récursive `Genealogy of` suivante :

```4d
  //Genealogy of project method
  //Genealogy of ( String ) -> Text
  //Genealogy of ( Name ) -> Part of sentence
 
 #DECLARE($name : Text) -> $result : Text
 $result:=$name
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$name)
 If(Records in selection([Friends and Relatives])>0)
    $result:=$result+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Vous notez que la méthode `Genealogy of` s'appelle elle-même.

La première manière de procéder utilise un **algorithme itératif**. La seconde manière utilise un **algorithme récursif**.

Lorsque vous implémentez du code pour traiter des cas comme celui décrit ci-dessus, vous aurez toujours le choix entre écrire des méthodes utilisant des algorithmes itératifs ou récursifs. Typiquement, la récursivité fournit un code plus concis, plus facile à lire et à maintenir, mais elle est facultative.

Dans 4D, la récursivité est typiquement utilisée pour :

- Traiter les enregistrements de tables liées les unes aux autres de la même manière que décrit dans l'exemple ci-dessus.
- Browsing documents and folders on your disk, using the commands [`FOLDER LIST`](../commands/folder-list) and [`DOCUMENT LIST`](document-list). Un dossier peut contenir des dossiers et des documents, les sous-dossiers peuvent eux-mêmes contenir des dossiers et des documents, etc.

:::warning

Recursive calls should always end at some point. Dans l'exemple ci-dessus, la méthode `Généalogie de` cesse de s'appeler elle-même lorsque la recherche ne trouve plus d'enregistrement. Sans ce test conditionnel, la méthode s'appellerait indéfiniment et 4D pourrait au bout d'un certain temps retourner l'erreur “La pile est pleine” car le programme n'aurait plus assez de place pour "empiler" les appels (ainsi que les paramètres et les variables locales utilisés dans la méthode).

:::

## Propriétés

Après avoir créé une méthode projet, vous pouvez la renommer et modifier ses propriétés. Les propriétés des méthodes projet définissent principalement leurs conditions d’accès et de sécurité (accès par les utilisateurs, les serveurs intégrés ou les services) ainsi que leur mode d'exécution.

Les autres types de méthodes n'ont pas de propriétés spécifiques. Leurs propriétés sont liées à celles des objets auxquels elles sont attachées.

Pour afficher la boîte de dialogue **Propriétés de la méthode** pour une méthode projet, vous pouvez soit :

- dans l'[éditeur de code](../code-editor/write-class-method.md), sélectionnez la commande **Propriétés de la méthode...** dans le menu **Méthode**,
- ou dans la page **Méthodes** de l'Explorateur, **clic droit** sur la méthode projet et sélectionner **Modifier les propriétés** dans le menu contextuel ou dans le menu d'options.

> Une fonction de paramétrage global vous permet de modifier une propriété pour tout ou partie des méthodes projet en une seule opération (voir [Modifier attributs globalement](#modifier-attributs-globalement)).

### Nom

Vous pouvez changer le nom d'une méthode projet dans la zone **Nom** de la fenêtre **Propriétés de la méthode** ou dans l'Explorateur.

Le nouveau nom doit respecter les règles de nommage 4D (voir [Identifiants](../Concepts/identifiers.md)). Si une méthode portant le même nom existe déjà, 4D affiche un message indiquant que ce nom de méthode est déjà utilisé. Si nécessaire, 4D trie à nouveau la liste des méthodes.

:::caution

Renommer une méthode déjà utilisée dans le projet peut invalider les méthodes ou formules qui utilisent l'ancien nom de la méthode et risque de perturber le fonctionnement de l'application. Il est fortement recommandé d'utiliser la [fonction de renommage des méthodes projet](../Project/search-replace.md#renaming-project-methods-and-variables). Avec cette fonction, vous pouvez mettre à jour automatiquement le nom où la méthode partout où elle est appelée dans l'environnement de développement.

Avec 4D Server, le nom de la méthode est changé sur le serveur lorsque vous avez fini de le modifier. Si plus d'un utilisateur modifie le nom de la méthode en même temps, le nom final de la méthode sera le nom spécifié par le dernier utilisateur ayant terminé de l'éditer. Vous pouvez spécifier un propriétaire de la méthode afin que seuls certains utilisateurs puissent changer le nom de la méthode.

:::

:::info

Les méthodes base ne peuvent pas être renommées. Il en va de même pour les triggers, les méthodes formulaire et les méthodes objet, qui sont liés à des objets et tirent leur nom de l'objet concerné.

:::

### Attributs

Vous pouvez contrôler comment les méthodes projet sont utilisées et/ou appelées dans différents contextes en utilisant des attributs. Notez que vous pouvez définir des attributs globalement pour une sélection de méthodes projet en utilisant l'Explorateur (voir la section suivante).

#### Invisible

Si vous ne voulez pas que les utilisateurs puissent exécuter une méthode projet à l'aide de la commande **Méthode...** du menu **Exécution**, vous pouvez la rendre invisible en cochant cette option. Une méthode invisible n'apparaît pas dans la boîte de dialogue d'exécution de méthode.

Lorsque vous rendez une méthode projet invisible, elle est toujours disponible pour le développeur. Elle reste listée dans l'Explorateur et de l'éditeur de code.

#### Partagée entre composants et projet hôte

Cet attribut est utilisé dans le cadre des composants. Quand il est coché, il indique que la méthode sera disponible pour les composants lorsque l'application sera utilisée comme projet hôte. A l'inverse, lorsque l'application sera utilisée en tant que composant, la méthode sera disponible pour les projets hôtes.

Pour plus d'informations sur les composants, reportez-vous au chapitre [Développer et installer des composants 4D](../Extensions/develop-components.md) .

#### Exécuter sur serveur

Cet attribut est pris en compte uniquement dans le cadre d’une application 4D en client/serveur. Lorsque cette option est cochée, la méthode du projet est toujours exécutée sur le serveur, quelle que soit la manière dont elle est appelée.

Pour plus d'informations sur cette option, reportez-vous à [Attribut Exécuter sur serveur](https://doc.4d.com/4Dv20/4D/20/Execute-on-Server-attribute.300-6330555.en.html).

### Mode d’exécution

Cette option vous permet de déclarer la méthode éligible à l'exécution en mode préemptif. Elle est décrite dans la section [Process préemptifs](../Develop/preemptive.md).

### Disponibilité

Les attributs de disponibilité précisent les services externes autorisés à appeler explicitement la méthode.

#### Web Services

Cet attribut vous permet de publier la méthode courante comme service Web accessible via des requêtes SOAP. Pour plus d’informations, reportez-vous au chapitre [Publication et utilisation de Services Web](https://doc.4d.com/4Dv20/4D/20.2/Publication-and-use-of-Web-Services.200-6750103.en.html). Lorsque cette option est cochée, l’option **Publié dans WSDL** est active.

Dans l'explorateur, les méthodes projet qui sont proposées en tant que service Web sont dotées d'une icône spécifique.

**Note :** Il n'est pas possible de publier en tant que Web service une méthode dont le nom comporte des caractères non conformes à la nomenclature XML (par exemple des espaces). Si le nom de la méthode n'est pas conforme, 4D refuse l'affectation de la propriété.

#### Publié dans WSDL

Cet attribut est actif uniquement si l'attribut "Web service" est coché. Il permet d’inclure la méthode courante dans le fichier WSDL de l’application 4D. Pour plus d’informations sur ce point, reportez-vous au paragraphe [Génération du WSDL](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html#502689).

Dans l'explorateur, les méthodes projet proposées en tant que service Web et publiées dans le WSDL sont dotées d'une icône spécifique.

#### Balises HTML et URLs 4D (4DACTION...)

Cette option permet de renforcer la sécurité du serveur Web 4D : lorsqu'elle n'est pas cochée, la méthode projet ne peut pas être exécutée via une requête HTTP contenant l'URL spéciale [4DACTION](../WebServer/httpRequests.md#4daction) utilisée pour appeler les méthodes 4D, ni les balises spéciales [4DSCRIPT, 4DTEXT et 4DHTML](../Tags/transformation-tags.md).

Dans l'explorateur, les méthodes projet ayant cet attribut sont dotées d'une icône spécifique.

Pour des raisons de sécurité, cette option est désélectionnée par défaut. Vous devez désigner individuellement chaque méthode pouvant être exécutée via les URLs et les balises spéciales.

#### SQL

Lorsqu’elle est cochée, cette option autorise l’exécution de la méthode projet par le moteur SQL de 4D. Elle est désélectionnée par défaut, ce qui signifie que, sauf autorisation explicite, les méthodes projet de 4D sont protégées et ne peuvent pas être appelées par le moteur SQL de 4D.

Cette propriété s'applique à toutes les requêtes SQL internes et externes --- exécutées via le driver ODBC, le code SQL inséré entre les balises [Begin SQL](../commands/begin-sql)/[End SQL](../commands/end-sql) ou la commande [`QUERY BY SQL`](../commands/query-by-sql).

**Notes :**

- Même si une méthode dispose de l’attribut “SQL”, les accès définis au niveau des propriétés de la base et des propriétés de la méthode sont pris en compte pour l’exécution de la méthode.
- La fonction ODBC **SQLProcedure** retourne uniquement les méthodes projet disposant de l’attribut "SQL".

Pour plus d’informations, reportez-vous à la section [Implémentations du moteur SQL de 4D](https://doc.4d.com/4Dv20/4D/20/4D-SQL-engine-implementation.300-6342089.en.html) in dans le manuel SQL de 4D.

#### Serveur REST

_Cette option est obsolète. L'appel de code par le biais d'appels REST n'est possible qu'avec les [fonctions de classe du modèle de données ORDA](../REST/ClassFunctions.md).\*

### Modifier attributs globalement

La boîte de dialogue "Attributs des méthodes" permet de modifier un attribut (Invisible, Disponible via Web Services etc.) pour tout ou partie des méthodes projet de la base de données en une seule opération. Cette fonction est très utile pour modifier les attributs d’un grand nombre de méthodes projet. Elle peut également être utilisée en cours de développement pour appliquer rapidement des attributs communs à des groupes homogènes de méthodes.

Pour modifier globalement les attributs des méthodes :

1. Dans la [Page Méthodes](https://doc.4d.com/4Dv20/4D/20.2/Methods-Page.300-6750119.en.html) de l'explorateur 4D, développez le menu des options, puis choisissez la commande **Modifier attributs globalement...**. La boîte de dialogue **Attributs des méthodes** apparaît.

2. Dans la zone “Méthodes à modifier”, saisissez une chaîne de caractères permettant de désigner les méthodes que vous souhaitez modifier globalement.
   La chaîne de caractères est utilisée comme critère de recherche des noms de méthodes.

Utilisez le caractère générique @ pour vous aider à définir des groupes de méthodes :

- pour désigner les méthodes dont le nom débute par..., saisissez @ en fin de chaîne. Par exemple : `web@`
- pour désigner les méthodes dont le nom contient..., saisissez @ en milieu de chaîne. Par exemple : `web@write`
- pour désigner les méthodes dont le nom se termine par..., saisissez @ en début de chaîne. Par exemple : `@write`
- Pour désigner toutes les méthodes, il suffit de taper @ dans la zone.

**Notes :**

- La recherche ne tient pas compte des majuscules et des minuscules.
- Vous pouvez saisir plusieurs caractères @ dans la chaîne, par exemple `dtro_@web@pro.@`

3. Dans la zone "Attribut à modifier", choisissez un attribut dans la liste déroulante puis cliquez sur le bouton radio **Vrai** ou **Faux** correspondant à la valeur à appliquer.

**Note :** Si l'attribut "Publié dans WSDL" est défini à Vrai, il ne sera appliqué qu'aux méthodes projet qui contiennent déjà l'attribut "Web Service".

4. Cliquez sur **Appliquer**. La modification est appliquée instantanément à toutes les méthodes projet désignées par la chaîne de caractères saisie.


