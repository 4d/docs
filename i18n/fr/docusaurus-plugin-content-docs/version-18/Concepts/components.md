---
id: components
title: Composants
---

Un composant 4D est un ensemble d’objets 4D représentant une ou plusieurs fonctionnalité(s), qu’il est possible d’installer dans différentes bases. Par exemple, vous pouvez développer un composant 4D de courrier électronique gérant tous les aspects de l’envoi, la réception et le stockage d’emails au sein des bases 4D.

La création et l’installation des composants 4D s’effectuent directement depuis 4D. Schématiquement, les composants sont gérés comme des [plug-ins](Concepts/plug-ins.md). Les principes sont les suivants :

- Un composant est un simple fichier de structure (compilé ou non compilé) d’architecture standard ou sous forme de package (cf. paragraphe Extension .4dbase).
- Pour installer un composant dans une base, il suffit de le copier dans le dossier “Components” de la base, placé à côté du fichier de structure ou à côté de l'application 4D exécutable.
- Un composant peut appeler la plupart des éléments 4D : des méthodes projet, des formulaires projet, des barres de menus, des listes à choix multiples, des images issues de la bibliothèque, etc. Il ne peut pas appeler des méthodes base et des triggers.
- Il n’est pas possible d’exploiter des tables standard ou des fichiers de données dans les composants 4D. En revanche, un composant peut créer et/ou utiliser des tables, des champs et des fichiers de données via les mécanismes des bases externes. Les bases externes sont des bases 4D indépendantes manipulées via les commandes SQL.

## Définitions

Les mécanismes de gestion des composants dans 4D nécessitent la mise en oeuvre des concepts et de la terminologie suivants :

- **Base matrice :** base de données 4D utilisée pour développer le composant. La base matrice est une base standard, sans attribut spécifique. Une base matrice constitue un seul composant. La base matrice est destinée à être copiée, compilée ou non, dans le dossier Components de l'application 4D ou de la base devant utiliser le composant (la base hôte).
- **Base hôte :** base dans laquelle est installé et utilisé un composant.
- **Composant :** base matrice, compilée ou non, copiée dans le dossier Components de l'application 4D ou de la base hôte et dont le contenu est utilisé dans les bases hôtes.

Il est à noter qu’une base peut donc être à la fois “matrice” et “hôte”, c’est-à-dire qu’une base matrice peut elle-même utiliser un ou plusieurs composants. En revanche, une base utilisée comme composant ne peut pas elle-même utiliser un composant : un seul niveau de composant est chargé.

### Protection des composants : la compilation

Par défaut, toutes les méthodes projet d’une base matrice installée comme composant sont virtuellement visibles depuis la base hôte. En particulier :

- Les méthodes projet partagées sont accessibles dans la Page Méthodes de l’Explorateur et peuvent être appelées dans les méthodes de la base hôte. Leur contenu peut être sélectionné et copié dans la zone de prévisualisation de l’Explorateur. Elles peuvent également être visualisées dans le débogueur. Il n’est toutefois pas possible de les ouvrir dans l’éditeur de méthodes ni de les modifier.
- Les autres méthodes projet de la base matrice n’apparaissent pas dans l’Explorateur mais peuvent également être visualisées dans le débogueur de la base hôte.

Pour protéger efficacement les méthodes projet d’un composant, il vous suffit simplement de compiler la base matrice et de la fournir sous forme de fichier .4dc (base compilée ne contenant pas le code interprété). Lorsqu’une base matrice compilée est installée comme composant :

- Les méthodes projet partagées sont accessibles dans la Page Méthodes de l’Explorateur et peuvent être appelées dans les méthodes de la base hôte. En revanche, leur contenu n’apparaît pas dans la zone de prévisualisation ni dans le débogueur.
- Les autres méthodes projet de la base matrice n’apparaissent jamais.

## Partage des méthodes projet

Toutes les méthodes projet d’une base matrice sont par définition incluses dans le composant (la base est le composant), ce qui signifie qu’elles peuvent être appelées et exécutées par le composant.

En revanche, par défaut ces méthodes projet ne seront ni visibles ni appelables par la base hôte. Vous devez explicitement désigner dans la base matrice les méthodes que vous souhaitez partager avec la base hôte. Ces méthodes projet peuvent être appelées dans le code la base hôte (mais elles ne pourront pas être modifiées dans l’éditeur de méthodes de la base hôte). Ces méthodes constituent les **points d’entrée** dans le composant.

**Note :** A l’inverse, pour des raisons de sécurité, par défaut un composant ne peut pas exécuter de méthode projet appartenant à la base hôte. Dans certains cas, vous pourrez avoir besoin d’autoriser un composant à accéder à des méthodes projet de votre base hôte. Pour cela, vous devez explicitement désigner les méthodes projet de la base hôte que vous souhaitez rendre accessibles aux composants.

![](../assets/en/Concepts/pict516563.en.png)

## Passage de variables

Les composants et les bases hôtes ne partagent pas de variables locales, process ou interprocess. Le seul moyen d’accéder aux variables du composant depuis la base hôte et inversement est d’utiliser des pointeurs.

Exemple utilisant un tableau :

```4d
//Dans la base hôte :
    ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//Dans le composant, la méthode projet UneMéthode contient : 
     APPEND TO ARRAY($1->;2)
```

Exemples utilisant des variables :

```4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```

L’utilisation de pointeurs pour faire communiquer les composants et la base hôte nécessite de prendre en compte les spécificités suivantes :

- La commande `Pointeur vers` ne retournera pas un pointeur vers une variable de la base hôte si elle est appelée depuis un composant et inversement.

- L’architecture des composants autorise la coexistence, au sein d’une même base interprétée, de composants interprétés et compilés (à l’inverse, seuls des composants compilés peuvent être utilisés dans une base compilée). L’usage de pointeurs dans ce cas doit respecter le principe suivant : l’interpréteur peut dépointer un pointeur construit en mode compilé mais à l’inverse, en mode compilé, il n’est pas possible de dépointer un pointeur construit en mode interprété. In order to use pointers in this case, you must respect the following principle: the interpreter can unpoint a pointer built in compiled mode; however, in compiled mode, you cannot unpoint a pointer built in interpreted mode.
- Si le composant C définit la variable `mavarC`, le composant I peut accéder à la valeur de cette variable en utilisant le pointeur `->mavarC`.
- Si le composant I définit la variable `mavarI`, le composant C ne peut pas accéder à cette variable en utilisant le pointeur `->mavarI`. Cette syntaxe provoque une erreur d’exécution.

- La comparaison de pointeurs via la commande `RESOUDRE POINTEUR` est déconseillée avec les composants car le principe de cloisonnement des variables autorise la coexistence de variables de même nom mais au contenu radicalement différente dans un composant et la base hôte (ou un autre composant). Le type de la variable peut même être différent dans les deux contextes. Si les pointeurs `monptr1` et `monptr2` pointent chacun sur une variable, la comparaison suivante produira un résultat erroné :

```4d
     RESOLVE POINTER(monptr1;vNomVar1;vnumtable1;vnumchamp1)
      RESOLVE POINTER(monptr2;vNomVar2;vnumtable2;vnumchamp2)
      If(vNomVar1=vNomVar2)
       //Ce test retourne Vrai alors que les variables sont différentes
```

Dans ce cas, il est nécessaire d’utiliser la comparaison de pointeurs :

```4d
     If(monptr1=monptr2) //Ce test retourne Faux
```

## Accès aux tables de la base hôte

Bien que les composants ne puissent pas utiliser de tables, les pointeurs permettent à la base hôte et au composant de communiquer dans ce cas. Par exemple, voici une méthode pouvant être appelée depuis un composant :

```4d
// appeler une méthode composant
methCreateRec(->[PERSONNES];->[PERSONNES]Nom;"Julie Andrews")
```

Dans le composant, le code de la méthode `methCreateRec` :

```4d
C_POINTER($1) //Pointeur vers une table de la base hôte
C_POINTER($2) //Pointeur vers un champ de la base hôte
C_TEXT($3) // Valeur à insérer

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

## Portée des commandes du langage

Hormis les [Commandes non utilisables](#unusable-commands), un composant peut utiliser toute commande du langage 4D.

Lorsqu’elles sont appelées depuis un composant, les commandes s’exécutent dans le contexte du composant, à l’exception de la commande `EXECUTE METHOD` qui utilise le contexte de la méthode désignée par la commande. A noter également que les commandes de lecture du thème “Utilisateurs et groupes” sont utilisables depuis un composant mais lisent les utilisateurs et les groupes de la base hôte (un composant n’a pas d’utilisateurs et groupes propres).

Les commandes `EXECUTE METHOD` et `Get database parameter` constituent aussi une exception à ce principe : leur portée est globale à la base. Lorsque ces commandes sont appelées depuis un composant, elles s’appliquent à la base hôte.

Par ailleurs, des dispositions spécifiques sont définies pour les commandes `Structure file` et `Get 4D folder` lorsqu’elles sont utilisées dans le cadre des composants.

La commande `COMPONENT LIST` permet de connaître la liste des composants chargés par la base hôte.

### Commandes non utilisables

Les commandes suivantes ne sont pas compatibles avec une utilisation dans le cadre d’un composant car elles modifient le fichier de structure — ouvert en lecture. Leur exécution dans un composant provoque l’erreur -10511, “La commande NomCommande ne peut pas être appelée depuis un composant” :

- `ON EVENT CALL`
- `Method called on event`
- `SET PICTURE TO LIBRARY`
- `REMOVE PICTURE FROM LIBRARY`
- `SAVE LIST`
- `ARRAY TO LIST`
- `EDIT FORM`
- `CREATE USER FORM`
- `DELETE USER FORM`
- `CHANGE PASSWORD`
- `EDIT ACCESS`
- `Set group properties`
- `Set user properties`
- `DELETE USER`
- `CHANGE LICENSES`
- `BLOB TO USERS`
- `SET PLUGIN ACCESS`

**Notes :**

- La commande `Table du formulaire courant` retourne `Nil` lorsqu’elle est appelée dans le contexte d’un formulaire projet. Par conséquent, elle ne peut pas être utilisée dans un composant.
- Les commandes SQL de définition de données (`CREATE TABLE`, `DROP TABLE`, etc.) ne peuvent pas être utilisées dans les composants. Elles sont néanmoins prises en charge avec des bases de données externes (voir la commande SQL `CREATE DATABASE`).

## Gestion des erreurs

Une [méthode de gestion d'erreurs](Concepts/error-handling.md) installée par la commande `ON ERR CALL` s'applique à la base en cours d'exécution uniquement. En cas d'erreur générée par un composant, la méthode d'appel sur erreur de la base hôte n'est pas appelée, et inversement.

## Utilisation de formulaires

- Seuls les "formulaires projet" (formulaires non associés à une table en particulier) peuvent être exploités directement dans un composant. Only “project forms” (forms that are not associated with any specific table) can be used in a component.
- Un composant peut faire appel à des formulaires table de la base hôte. A noter qu’il est nécessaire dans ce cas d’utiliser des pointeurs plutôt que des noms de table entre [] pour désigner les formulaires dans le code du composant.

**Note :** Si un composant utilise la commande `ADD RECORD`, le formulaire Entrée courant de la base hôte sera affiché, dans le contexte de la base hôte. Par conséquent, si le formulaire comporte des variables, le composant n’y aura pas accès.

- Vous pouvez publier des formulaires de composants comme sous-formulaires dans les bases hôtes. Avec ce principe, vous pouvez notamment développer des composants proposant des objets graphiques. Par exemple, les Widgets proposés par 4D sont basés sur l’emploi de sous-formulaires en composants.

## Utilisation de tables et de champs

Un composant ne peut pas utiliser les tables et les champs définis dans la structure 4D de la base matrice. En revanche, il peut créer et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Les bases externes sont créées et gérées via le langage SQL. However, you can create and use external databases, and then use their tables and fields according to your needs. Utiliser une base externe signifie désigner temporairement cette base comme base courante, c’est-à-dire comme base cible des requêtes SQL exécutées par 4D. Les bases externes sont créées à l'aide de la commande SQL `CREATE DATABASE`.

### Exemple

Le code suivant est inclus dans un composant et effectue trois actions élémentaires avec une base de données externe :

- création de la base de données externe si elle n'existe pas déjà,
- ajout de données dans la base de données externe,
- lecture de données depuis la base de données externe.

Création de la base de données externe :

```4d
<>MyDatabase:=Get 4D folder+"\MyDB" // (Windows) stocke les données dans un répertoire autorisé
 Begin SQL
        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];
        USE DATABASE DATAFILE :[<>MyDatabase];
        CREATE TABLE IF NOT EXISTS KEEPIT
        (
        ID INT32 PRIMARY KEY,
        kind VARCHAR,
        name VARCHAR,
        code TEXT,
        sort_order INT32
        );

        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);

        USE DATABASE SQL_INTERNAL;

 End SQL
```

Ecriture dans la base de données externe :

```4d
 $Ptr_1:=$2 // récupération des données de la base hôte via des pointeurs
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 Begin SQL

        USE DATABASE DATAFILE :[<>MyDatabase];

        INSERT INTO KEEPIT
        (ID, kind, name, code, sort_order)
        VALUES
        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);

        USE DATABASE SQL_INTERNAL;

 End SQL
```

Lecture dans une base de données externe :

```4d
 $Ptr_1:=$2 // accès aux données de la base hôte via des pointeurs
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6

 Debut SQL

    USE DATABASE DATAFILE :[<>MyDatabase];

    SELECT ALL ID, kind, name, code, sort_order
    FROM KEEPIT
    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;

    USE DATABASE SQL_INTERNAL;

 Fin SQL
```

## Utilisation de ressources

Les composants peuvent utiliser des ressources. Si le composant est d’architecture .4dbase (architecture conseillée), le dossier Resources doit être placé à l’intérieur de ce dossier.

Les mécanismes automatiques sont opérationnels : les fichiers XLIFF présents dans le dossier Resources d’un composant seront chargés par ce composant.

Dans une base de données hôte contenant un ou plusieurs composants, chaque composant ainsi que les bases de données hôte ont leur propre «chaîne de ressources» In a host database containing one or more components, each component as well as the host databases has its own “resources string.” Resources are partitioned between the different databases: it is not possible to access the resources of component A from component B or the host database.

## Aide en ligne des composants

Un mécanisme spécifique a été mis en place afin de permettre aux développeurs d’ajouter des aides en ligne à leurs composants. Le principe est semblable à celui proposé pour les bases de données 4D :

- L’aide du composant doit être fournie sous le forme d’un fichier suffixé .htm, .html ou (Windows uniquement) .chm,
- Le fichier d’aide doit être placé à côté du fichier de structure du composant et porter le même nom que le fichier de structure,
- L’aide est alors automatiquement chargée dans le menu Aide de l’application avec le libellé “Aide de...” suivi du nom du fichier d’aide.
