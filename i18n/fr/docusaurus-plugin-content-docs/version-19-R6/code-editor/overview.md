---
id: overview
title: À propos du code 4D
---


Le code 4D utilisé dans votre application est écrit dans les [méthodes ](../Concepts/methods.md) et les [classes ](../Concepts/classes.md).

L'IDE de 4D vous offre diverses fonctionnalités pour créer, modifier, exporter ou supprimer votre code. Vous utiliserez généralement l'[éditeur de code de 4D](write-class-method.md) pour travailler avec votre code.


## Créer des méthodes

Une méthode dans 4D est stockée dans un fichier **.4dm** situé dans le dossier approprié du dossier [`/Project/Sources/`](../Project/architecture.md#sources) .

Vous pouvez créer [plusieurs types de méthodes](../Concepts/methods.md) :

- Tous les types de méthodes peuvent être créés ou ouverts à partir de la fenêtre de l'**Explorateur** (à l'exception des méthodes Objet qui sont gérées à partir de l'[éditeur de formulaires](../FormEditor/formEditor.md)).
- Les méthodes projet peuvent également être créées ou ouvertes à partir du menu **Fichier ** ou de la barre d'outils (**Nouveau/Méthode...** ou **Ouvrir/Méthode...**) ou à l'aide de raccourcis dans la fenêtre de l'[éditeur de code](write-class-method.md#shortcuts).
- Les triggers peuvent également être créés ou ouverts à partir de l'éditeur de Structure.
- Les méthodes formulaire peuvent également être créées ou ouvertes à partir de l'[éditeur de formulaires](../FormEditor/formEditor.md).

## Créer des classes

Une classe utilisateur dans 4D est définie par un fichier de méthode spécifique (**.4dm**), stocké dans le dossier [`/Project/Sources/Classes/`](../Project/architecture.md#sources) . Le nom du fichier est le nom de la classe.

Vous pouvez créer un fichier de classe à partir du menu ou de la barre d'outils **Fichier** (**Nouveau/Classe...**) ou dans la page **Méthodes** de la fenêtre de l'**Explorateur** .

Pour plus d'informations, reportez-vous à la section [Classes](../Concepts/classes.md).


## Supprimer des méthodes ou des classes

Pour supprimer une méthode ou une classe existante, vous pouvez :

- sur votre disque, supprimer le fichier *.4dm* du dossier "Sources",
- dans l'Explorateur de 4D, sélectionner la classe et cliquer sur ![](../assets/en/Users/MinussNew.png) ou choisir **Déplacer vers la corbeille** dans le menu contextuel.

> Pour supprimer une méthode objet, choisissez **Supprimer la méthode objet** dans l'[éditeur de formulaires](../FormEditor/formEditor.md) (menu **Objet** ou menu contextuel).


## Importer et exporter le code

Vous pouvez importer et exporter une méthode ou le code d'une classe sous la forme d'un fichier. Ces fonctions sont accessibles via des commandes du menu **Méthode** de l'éditeur de code.

- Lorsque vous sélectionnez la commande **Exporter la méthode...** , une boîte de dialogue standard d'enregistrement de fichier apparaît, vous permettant de choisir le nom, l'emplacement et le format du fichier d'export (voir ci-dessous). Comme pour l'impression, l'export ne tient pas compte de l'état contracté des structures de code et le code entier est exporté.
- Lorsque vous sélectionnez la commande **Importer la méthode...**, une boîte de dialogue standard d'ouverture de fichier standard apparaît, vous permettant de désigner le fichier à importer. L'importation remplace le texte sélectionné dans la méthode. Pour remplacer une méthode existante par une méthode importée, il suffit de sélectionner l’ensemble du contenu de la méthode avant d’effectuer l’importation.

La fonction d’import/export est multi-plate-forme : une méthode exportée sous macOS peut être importée sous Windows et inversement, 4D se charge de la conversion des caractères si nécessaire.

4D peut exporter et importer les méthodes dans deux formats :

- Méthode 4D (extension *.c4d*) : Dans ce format, les méthodes sont exportées sous forme encodée. Les noms d’objets sont transformés en références (tokens). Ce format permet notamment d’échanger des méthodes entre des applications 4D et des plug-ins dans langues différentes. En revanche, il n’est pas possible de les visualiser dans un éditeur de texte.
- Texte (extension *.txt*) : Dans ce format, les méthodes sont exportées sous forme de texte uniquement. Dans ce cas, les méthodes sont lisibles à l'aide d'un éditeur de texte standard ou d'un outil de contrôle de sources.


## Propriétés des méthodes projet

Après avoir créé une méthode projet, vous pouvez la renommer et modifier ses propriétés. Les propriétés des méthodes projet définissent principalement leurs conditions d’accès et de sécurité (accès par les utilisateurs, les serveurs intégrés ou les services) ainsi que leur mode d'exécution.

Les autres types de méthodes n'ont pas de propriétés spécifiques. Leurs propriétés sont liées à celles des objets auxquels elles sont attachées.

Pour afficher la boîte de dialogue **Propriétés de la méthode** pour une méthode projet, vous pouvez soit :

- dans l'[éditeur de code](write-class-method.md), sélectionner la commande **Propriétés de la méthode...** dans le menu **Méthode**,
- ou dans la page **Méthodes** de l'Explorateur, **clic droit** sur la méthode projet et sélectionner **Propriétés de la méthode.** dans le menu contextuel ou dans le menu d'options.


> Une fonction de paramétrage global vous permet de modifier une propriété pour tout ou partie des méthodes projet en une seule opération (voir [Modifier attributs globalement](#modifier-attributs-globalement)).

#### Nom

Vous pouvez changer le nom d'une méthode projet dans la zone **Nom** de la fenêtre **Propriétés de la méthode** ou dans l'Explorateur.

Le nouveau nom doit respecter les règles de nommage 4D (voir [Identifiants](../Concepts/identifiers.md)). Si une méthode portant le même nom existe déjà, 4D affiche un message indiquant que ce nom de méthode est déjà utilisé. Si nécessaire, 4D trie à nouveau la liste des méthodes.

**Attention :** Le changement du nom d'une méthode déjà utilisée dans la base de données peut invalider toutes les méthodes ou formules qui utilisent l'ancien nom de la méthode et risque de perturber le fonctionnement de l'application. Vous pouvez renommer la méthode manuellement mais il est fortement recommandé d'utiliser la fonction de renommage des méthodes projet, décrite dans la section [Renommer](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). Avec cette fonction, vous pouvez mettre à jour automatiquement le nom où la méthode partout où elle est appelée dans l'environnement de développement.

Avec 4D Server, le nom de la méthode est changé sur le serveur lorsque vous avez fini de le modifier. Si plus d'un utilisateur modifie le nom de la méthode en même temps, le nom final de la méthode sera le nom spécifié par le dernier utilisateur ayant terminé de l'éditer. Vous pouvez désigner un propriétaire de la méthode pour que seuls certains utilisateurs puissent changer son nom.

> Les méthodes base ne peuvent pas être renommées. Il en va de même pour les triggers, les méthodes formulaire et les méthodes objet, qui sont liés à des objets et tirent leur nom de l'objet concerné.

#### Attributs

Vous pouvez contrôler comment les méthodes projet sont utilisées et/ou appelées dans différents contextes en utilisant des attributs. Notez que vous pouvez définir des attributs globalement pour une sélection de méthodes projet en utilisant l'Explorateur (voir la section suivante).

##### Invisible

Si vous ne voulez pas que les utilisateurs puissent exécuter une méthode projet à l'aide de la commande **Méthode...** du menu **Exécution**, vous pouvez la rendre invisible en cochant cette option. An invisible method does not appear in the method execution dialog box (see [From the Execute Method dialog box](#from-the-execute-method-dialog-box)).

Lorsque vous rendez une méthode projet invisible, elle est toujours disponible pour le développeur. It remains listed on the [Current form table](https://doc.4d.com/4Dv19R5/4D/19-R5/Current-form-table.301-5830420.en.html) of the Explorer and in the list of routines in the Code Editor.

##### Partagée entre composants et projet hôte

Cet attribut est utilisé dans le cadre des composants. Quand il est coché, il indique que la méthode sera disponible pour les composants lorsque l'application sera utilisée comme projet hôte. A l'inverse, lorsque l'application sera utilisée en tant que composant, la méthode sera disponible pour les projets hôtes.

Pour plus d'informations sur les composants, reportez-vous au chapitre [Développer et installer des composants 4D](../Extensions/develop-components.md) .

##### Exécuter sur serveur

Cet attribut est pris en compte uniquement dans le cadre d’une application 4D en client/serveur. Lorsque cette option est cochée, la méthode du projet est toujours exécutée sur le serveur, quelle que soit la manière dont elle est appelée.

For more information on this option, refer to [Execute on Server attribute](#execute-on-server).

#### Mode d’exécution

Cette option vous permet de déclarer la méthode éligible à l'exécution en mode préemptif. Par défaut, 4D exécute toutes les méthodes projet de vos applications en mode coopératif.

Si vous voulez bénéficier de la fonctionnalité du mode préemptif, vous devez déclarer explicitement toutes les méthodes que vous souhaitez démarrer en mode préemptif. Le compilateur vérifiera par la suite que ces méthodes sont effectivement thread-safe.

**Note :** L'exécution en mode préemptif n'est disponible qu'en mode compilé. Pour plus d'informations, reportez-vous à la section [Process 4D préemptifs](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html) .

Les options suivantes sont prises en charge :

-   **Peut être exécutée dans un process préemptif** : En sélectionnant cette option, vous déclarez que la méthode est capable d'être exécutée dans un process préemptif et qu'elle doit donc être exécutée en mode préemptif à chaque fois que cela est possible. La propriété "preemptive" de la méthode prend pour valeur "capable".

Lorsque cette option est sélectionnée, le compilateur de 4D vérifiera que la méthode est effectivement capable et retournera des erreurs si ce n'est pas le cas -- par exemple, si elle appelle directement ou indirectement des commandes ou d'autres méthodes qui, elles, ne peuvent pas être exécutées en mode préemptif (toute la chaîne d'appel est analysée mais les erreurs sont signalées uniquement au premier niveau). Dans ce cas, vous pourrez modifier la méthode afin de la rendre "thread-safe" ou sélectionner une autre option.

Si l'éligibilité de la méthode au mode préemptif est confirmée par le compilateur, elle est étiquetée "thread-safe" en interne et sera exécutée en mode préemptif à chaque fois que les conditions requises seront réunies. Cette propriété atteste de l'éligibilité de la méthode au mode préemptif mais ne garantit pas que la méthode sera effectivement exécutée en mode préemptif, puisque ce mode d'exécution requiert un contexte spécifique (voir [Quand un process est-il démarré en préemptif ?](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html#2822148)).

-   **Ne peut pas être exécutée dans un process préemptif** : En sélectionnant cette option, vous déclarez que la méthode ne doit jamais être exécutée en mode préemptif, et doit par conséquent toujours être exécutée en mode coopératif. La propriété "preemptive" de la méthode prend pour valeur "incapable".

Lorsque cette option est sélectionnée, le compilateur de 4D ne vérifiera pas la compatibilité de la méthode avec le mode préemptif ; elle sera automatiquement étiquetée "thread-unsafe" en interne (même dans le cas où elle est théoriquement compatible). Lorsqu'elle sera appelée en exécution, cette méthode "contaminera" toutes les autres méthodes dans le même thread, les forçant à s'exécuter en mode coopératif, même si elles sont elles-mêmes "thread-safe".

-   **Indifférent** (défaut): En sélectionnant cette option, vous déclarez que vous ne souhaitez pas gérer la propriété du mode préemptif pour la méthode. La propriété "preemptive" de la méthode prend pour valeur "indifferent".

Lorsque cette option est sélectionnée, le compilateur de 4D évaluera la compatibilité de la méthode avec le mode préemptif et lui apposera l'étiquette interne "thread-safe" ou "thread-unsafe". Aucune erreur liée à l'exécution en préemptif ne sera toutefois retournée. Si la méthode est évaluée "thread-safe", à l'exécution elle n'empêchera pas l'utilisation du mode préemptif si elle est appelée dans un contexte préemptif. A l'inverse, si la méthode est évaluée "thread-unsafe", à l'exécution elle empêchera toute utilisation du mode préemptif si elle est appelée.

A noter qu'avec cette option, quel que soit le résultat de l'évaluation de sa compatibilité avec le mode préemptif, la méthode sera toujours exécutée en mode coopératif lorsqu'elle sera appelée directement par 4D en tant que méthode parente (par exemple via la commande [Nouveau process](https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.en.html)). La propriété "thread-safe" interne n'est prise en compte que lorsque la méthode est appelée par d'autres méthodes à l'intérieur de la chaîne d'appel.

***Cas particulier*:** Si la méthode possède également la propriété **Partagée entre composants et base hôte**, l'activation de l'option **Indifferent** marquera automatiquement la méthode comme thread-unsafe. Si vous souhaitez qu'une méthode de composant partagé soit thread-safe, vous devez explicitement lui attribuer l'option **Peut être exécutée dans un process préemptif**.

#### Disponibilité

Les attributs de disponibilité précisent les services externes autorisés à appeler explicitement la méthode.

##### Web Services

Cet attribut vous permet de publier la méthode courante comme service Web accessible via des requêtes SOAP. Pour plus d’informations, reportez-vous au chapitre [Publication et utilisation de Services Web](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html). Lorsque cette option est cochée, l’option **Publié dans WSDL** est active.

Dans l'Explorateur, l'icône ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png) indique une méthode projet bénéficiant de cet attribut.

**Note :** Il n'est pas possible de publier en tant que Web service une méthode dont le nom comporte des caractères non conformes à la nomenclature XML (par exemple des espaces). Si le nom de la méthode n'est pas conforme, 4D refuse l'affectation de la propriété.

##### Publié dans WSDL

Cet attribut est actif uniquement si l'attribut "Web service" est coché. Il permet d’inclure la méthode courante dans le fichier WSDL de l’application 4D. Pour plus d’informations sur ce point, reportez-vous au paragraphe [Génération du WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

Dans l'Explorateur, les méthodes projet offertes comme Web Service et publiées dans le WSDL bénéficient d’une icône spécifique ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

##### Balises HTML et URLs 4D (4DACTION...)

Cette option permet de renforcer la sécurité du serveur Web de 4D : lorsqu’elle est désélectionnée, la méthode projet concernée ne peut pas être exécutée via une requête HTTP contenant l'URL spécial 4DACTION d’appel de méthodes ni les balises spéciales 4DSCRIPT, 4DTEXT et 4DHTML (ainsi que les anciennes balises 4DVAR et 4DHTMLVAR). For more information, refer to [URLs and Form Actions](https://doc.4d.com/4Dv19R5/4D/14-R2/URLs-and-Form-Actions.300-1342176.en.html) and [4D Transformation Tags](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-Transformation-Tags.300-5830552.en.html) in the 4D *Language Reference* manual.

Dans l'Explorateur, l'icône ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png) indique une méthode projet bénéficiant de cet attribut.

Pour des raisons de sécurité, cette option est désélectionnée par défaut. Vous devez désigner individuellement chaque méthode pouvant être exécutée via les URLs et les balises spéciales.

##### SQL

Lorsqu’elle est cochée, cette option autorise l’exécution de la méthode projet par le moteur SQL de 4D. Elle est désélectionnée par défaut, ce qui signifie que, sauf autorisation explicite, les méthodes projet de 4D sont protégées et ne peuvent pas être appelées par le moteur SQL de 4D.

Cette propriété s’applique à toutes les requêtes SQL internes et externes — exécutées via le pilote ODBC, le code SQL inséré dans les balises [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  ou la commande [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html).

**Notes :**

-   Même si une méthode dispose de l’attribut “SQL”, les accès définis au niveau des propriétés de la base et des propriétés de la méthode sont pris en compte pour l’exécution de la méthode.
-   La fonction ODBC **SQLProcedure** retourne uniquement les méthodes projet disposant de l’attribut "SQL".

Pour plus d’informations, reportez-vous à la section [Implémentations du moteur SQL de 4D](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in dans le manuel SQL de 4D.

##### Serveur REST

Cette option est obsolète car elle repose sur d'anciens concepts d'enregistrement courant et de sélection courante. Il est recommandé d'utiliser** [les fonctions de classe du modèle de données ORDA](https://developer.4d.com/docs/en/REST/classFunctions.html) pour les accès REST. *

#### Modifier attributs globalement

La boîte de dialogue “Attributs des méthodes” permet de modifier un attribut de méthode projet (Invisible, Offerte comme Web Service, etc.) pour la totalité ou une partie des méthodes de la base en une seule opération. Cette fonction est très utile pour modifier les attributs d’un grand nombre de méthodes projet. Elle peut également être utilisée en cours de développement pour appliquer rapidement des attributs communs à des groupes homogènes de méthodes.

Pour modifier globalement les attributs des méthodes :

1.  Dans la Page Méthodes de l'Explorateur de 4D, déployez le menu d'options puis choisissez la commande **Modifier attributs globalement...** La boîte de dialogue **Attributs des méthodes** apparaît.
2.  Dans la zone “Méthodes à modifier”, saisissez une chaîne de caractères permettant de désigner les méthodes que vous souhaitez modifier globalement. La chaîne de caractères est utilisée comme critère de recherche des noms de méthodes. Utilisez le caractère générique @ pour vous aider à définir des groupes de méthodes :
   -   pour désigner les méthodes dont le nom débute par..., saisissez @ en fin de chaîne. Par exemple : web@
    -   pour désigner les méthodes dont le nom contient..., saisissez @ en milieu de chaîne. Par exemple : web@write
    -   pour désigner les méthodes dont le nom se termine par..., saisissez @ en début de chaîne. Par exemple : @write
    -   To designate all of the methods, just type @ in the area.\
      **Notes:**
        -   La recherche ne tient pas compte des majuscules et des minuscules.
        -   You can enter several @ characters in the string, for example dtro_@web@pro.@
3.  Dans la zone "Attribut à modifier", choisissez un attribut dans la liste déroulante puis cliquez sur le bouton radio **Vrai** ou **Faux** correspondant à la valeur à appliquer. **Note :** Si l'attribut "Publié dans WSDL" est défini à Vrai, il ne sera appliqué qu'aux méthodes projet qui contiennent déjà l'attribut "Web Service".
4.  Cliquez sur **Appliquer**. La modification est appliquée instantanément à toutes les méthodes projet désignées par la chaîne de caractères saisie.

