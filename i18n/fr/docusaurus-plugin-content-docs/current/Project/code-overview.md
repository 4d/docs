---
id: code-overview
title: Methods and classes
---

The 4D code used across your project is written in [methods](../Concepts/methods.md) and [classes](../Concepts/classes.md).

L'IDE de 4D vous offre diverses fonctionnalités pour créer, modifier, exporter ou supprimer votre code. You will usually use the 4D [code editor](../code-editor/write-class-method.md) to work with your code.

## Créer des méthodes

A method in 4D is stored in a **.4dm** file located in the appropriate folder of the [`/Project/Sources/`](../Project/architecture.md#sources) folder.

You can create [several types of methods](../Concepts/methods.md):

- All types of methods can be created or opened from the **Explorer** window (except Object methods which are managed from the [Form editor](../FormEditor/formEditor.md)).
- Project methods can also be created or opened from the **File** menu or toolbar (**New/Method...** or **Open/Method...**) or using shortcuts in the [Code editor window](../code-editor/write-class-method.md#shortcuts).
- Les triggers peuvent également être créés ou ouverts à partir de l'éditeur de Structure.
- Form methods can also be created or opened from the [Form editor](../FormEditor/formEditor.md).

## Créer des classes

A user class in 4D is defined by a specific method file (**.4dm**), stored in the [`/Project/Sources/Classes/`](../Project/architecture.md#sources) folder. Le nom du fichier est le nom de la classe.

You can create a class file from the **File** menu or toolbar (**New/Class...**) or in the **Methods** page of the **Explorer** window.

For more information, please refer to the [Classes](../Concepts/classes.md) section.

## Supprimer des méthodes ou des classes

Pour supprimer une méthode ou une classe existante, vous pouvez :

- on your disk, remove the _.4dm_ file from the "Sources" folder,
- in the 4D Explorer, select the method or class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.

> To delete an object method, choose **Clear Object Method** from the [Form editor](../FormEditor/formEditor.md) (**Object** menu or context menu).

## Importer et exporter le code

Vous pouvez importer et exporter une méthode ou le code d'une classe sous la forme d'un fichier. These commands are found in the **Method** menu of the [Code editor](../code-editor/write-class-method.md).

- When you select the **Export Method...** command, a standard file saving dialog box appears, allowing you to choose the name, location and format of the export file (see below). Comme pour l'impression, l'export ne tient pas compte de l'état contracté des structures de code et le code entier est exporté.
- When you select the **Import Method...** command, a standard file opening dialog box appears, allowing you to designate the file to be imported. L'importation remplace le texte sélectionné dans la méthode. Pour remplacer une méthode existante par une méthode importée, il suffit de sélectionner l’ensemble du contenu de la méthode avant d’effectuer l’importation.

La fonction d’import/export est multi-plate-forme : une méthode exportée sous macOS peut être importée sous Windows et inversement, 4D se charge de la conversion des caractères si nécessaire.

4D peut exporter et importer les méthodes dans deux formats :

- 4D method (extension _.c4d_): In this format, methods are exported in encoded form. Les noms d’objets sont transformés en références (tokens). Ce format permet notamment d’échanger des méthodes entre des applications 4D et des plug-ins dans langues différentes. En revanche, il n’est pas possible de les visualiser dans un éditeur de texte.
- Text (extension _.txt_): In this format, methods are exported in text-only form. Dans ce cas, les méthodes sont lisibles à l'aide d'un éditeur de texte standard ou d'un outil de contrôle de sources.

## Propriétés des méthodes projet

Après avoir créé une méthode projet, vous pouvez la renommer et modifier ses propriétés. Les propriétés des méthodes projet définissent principalement leurs conditions d’accès et de sécurité (accès par les utilisateurs, les serveurs intégrés ou les services) ainsi que leur mode d'exécution.

Les autres types de méthodes n'ont pas de propriétés spécifiques. Leurs propriétés sont liées à celles des objets auxquels elles sont attachées.

To display the **Method Properties** dialog box for a project method, you can either:

- in the [Code Editor](../code-editor/write-class-method.md), select the **Method Properties...** command in the **Method** menu,
- or on the **Methods** page of the Explorer, **right-click** on the project method and select **Method Properties...** in the context menu or options menu.

> A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see [Batch setting for method attributes](#batch-setting-for-method-attributes)).

### Nom

You can change the name of a project method in the **Name** area of the **Method Properties** window or in the Explorer.

The new name must comply with 4D naming rules (see [Identifiers](../Concepts/identifiers.md)). Si une méthode portant le même nom existe déjà, 4D affiche un message indiquant que ce nom de méthode est déjà utilisé. Si nécessaire, 4D trie à nouveau la liste des méthodes.

:::caution

Changer le nom d'une méthode déjà utilisée dans la base de données peut invalider toutes les méthodes ou formules qui utilisent l'ancien nom de méthode et risque de perturber le fonctionnement de l'application. You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in [Renaming](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). Avec cette fonction, vous pouvez mettre à jour automatiquement le nom où la méthode partout où elle est appelée dans l'environnement de développement.

Avec 4D Server, le nom de la méthode est changé sur le serveur lorsque vous avez fini de le modifier. Si plus d'un utilisateur modifie le nom de la méthode en même temps, le nom final de la méthode sera le nom spécifié par le dernier utilisateur ayant terminé de l'éditer. Vous pouvez désigner un propriétaire de la méthode pour que seuls certains utilisateurs puissent changer son nom.

:::

:::info

Les méthodes base ne peuvent pas être renommées. Il en va de même pour les triggers, les méthodes formulaire et les méthodes objet, qui sont liés à des objets et tirent leur nom de l'objet concerné.

:::

### Attributs

Vous pouvez contrôler comment les méthodes projet sont utilisées et/ou appelées dans différents contextes en utilisant des attributs. Notez que vous pouvez définir des attributs globalement pour une sélection de méthodes projet en utilisant l'Explorateur (voir la section suivante).

#### Invisible

If you do not want users to be able to run a project method using the **Method...** command of the **Run** menu, you can make it Invisible by checking this option. Une méthode invisible n'apparaît pas dans la boîte de dialogue d'exécution de méthode.

Lorsque vous rendez une méthode projet invisible, elle est toujours disponible pour le développeur. Elle reste listée dans l'Explorateur et de l'éditeur de code.

#### Partagée entre composants et projet hôte

Cet attribut est utilisé dans le cadre des composants. Quand il est coché, il indique que la méthode sera disponible pour les composants lorsque l'application sera utilisée comme projet hôte. A l'inverse, lorsque l'application sera utilisée en tant que composant, la méthode sera disponible pour les projets hôtes.

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

#### Exécuter sur serveur

Cet attribut est pris en compte uniquement dans le cadre d’une application 4D en client/serveur. Lorsque cette option est cochée, la méthode du projet est toujours exécutée sur le serveur, quelle que soit la manière dont elle est appelée.

For more information on this option, refer to [Execute on Server attribute](https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html).

### Mode d’exécution

Cette option vous permet de déclarer la méthode éligible à l'exécution en mode préemptif. It is described in the [Preemptive processes section](../Develop/processes.md#preemptive-processes).

### Disponibilité

Les attributs de disponibilité précisent les services externes autorisés à appeler explicitement la méthode.

#### Web Services

Cet attribut vous permet de publier la méthode courante comme service Web accessible via des requêtes SOAP. For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). Si le nom de la méthode n'est pas conforme, 4D refuse l'affectation de la propriété.

#### Publié dans WSDL

Cet attribut est actif uniquement si l'attribut "Web service" est coché. Il permet d’inclure la méthode courante dans le fichier WSDL de l’application 4D. For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

#### Balises HTML et URLs 4D (4DACTION...)

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special [4DACTION URL](../WebServer/httpRequests.md#4daction) used for calling 4D methods, nor the special [4DSCRIPT, 4DTEXT and 4DHTML tags](../Tags/transformation-tags.md).

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

Pour des raisons de sécurité, cette option est désélectionnée par défaut. Vous devez désigner individuellement chaque méthode pouvant être exécutée via les URLs et les balises spéciales.

#### SQL

Lorsqu’elle est cochée, cette option autorise l’exécution de la méthode projet par le moteur SQL de 4D. Elle est désélectionnée par défaut, ce qui signifie que, sauf autorisation explicite, les méthodes projet de 4D sont protégées et ne peuvent pas être appelées par le moteur SQL de 4D.

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**Notes:**

- Même si une méthode dispose de l’attribut “SQL”, les accès définis au niveau des propriétés de la base et des propriétés de la méthode sont pris en compte pour l’exécution de la méthode.
- The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

#### Serveur REST

_Cette option est obsolète. Calling code through REST calls is only supported with [ORDA data model class functions](../REST/ClassFunctions.md)._

#### Modifier attributs globalement

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. Cette fonction est très utile pour modifier les attributs d’un grand nombre de méthodes projet. Elle peut également être utilisée en cours de développement pour appliquer rapidement des attributs communs à des groupes homogènes de méthodes.

Pour modifier globalement les attributs des méthodes :

1. On the [Methods Page](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. The **Attributes for methods** dialog appears.

2. Dans la zone “Méthodes à modifier”, saisissez une chaîne de caractères permettant de désigner les méthodes que vous souhaitez modifier globalement.
   La chaîne de caractères est utilisée comme critère de recherche des noms de méthodes.

Utilisez le caractère générique @ pour vous aider à définir des groupes de méthodes :

- pour désigner les méthodes dont le nom débute par..., saisissez @ en fin de chaîne. For example: `web@`
- pour désigner les méthodes dont le nom contient..., saisissez @ en milieu de chaîne. For example: `web@write`
- pour désigner les méthodes dont le nom se termine par..., saisissez @ en début de chaîne. For example: `@write`
- Pour désigner toutes les méthodes, il suffit de taper @ dans la zone.

**Notes:**

- La recherche ne tient pas compte des majuscules et des minuscules.
- You can enter several @ characters in the string, for example `dtro_@web@pro.@`

3. In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the **True** or **False** radio button corresponding to the value to be applied.

**Note:** If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.

4. Click on **Apply**. La modification est appliquée instantanément à toutes les méthodes projet désignées par la chaîne de caractères saisie.
