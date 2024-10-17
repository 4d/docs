---
id: components
title: Composants
---

Un composant 4D est un ensemble d’objets 4D représentant une ou plusieurs fonctionnalité(s), qu’il est possible d’installer dans différentes applications. Par exemple, vous pouvez développer un composant 4D de courrier électronique gérant tous les aspects de l’envoi, la réception et le stockage d’emails au sein des applications 4D.

## Présentation

### Définitions

- **Projet utilisé comme matrice** : Projet 4D utilisé pour le développement du composant. C'est un projet standard, sans attribut spécifique. Il constitue un seul composant.
- **Projet hôte :** projet dans lequel un composant est installé et utilisé.
- **Composant** : Projet utilisé comme matrice, compilé ou non, copié dans le dossier [`Components`](Project/architecture.md) de l'application hôte et dont le contenu est utilisé dans l'application hôte.

### Principes

La création et l’installation des composants 4D s’effectuent directement depuis 4D. Schématiquement, les composants sont gérés comme des [plug-ins](Concepts/plug-ins.md). Les principes sont les suivants :

- Un composant consiste en un fichier de projet 4D classique.
- Pour installer un composant, il suffit de le copier dans le dossier [`Components` du projet](Project/architecture.md). Vous pouvez utiliser des alias ou des raccourcis.
- Un projet peut être à la fois une "matrice" et un "hôte", c'est-à-dire qu'un projet utilisé comme matrice peut lui-même utiliser un ou plusieurs composants. En revanche, une base utilisée comme composant ne peut pas elle-même utiliser un composant : un seul niveau de composant est chargé.
- Un composant peut appeler la plupart des éléments 4D : des méthodes projet, des formulaires projet, des barres de menus, des listes à choix multiples, etc. Il ne peut pas appeler des méthodes base et des triggers.
- Il n’est pas possible d’exploiter des tables standard ou des fichiers de données dans les composants 4D. En revanche, un composant peut créer et/ou utiliser des tables, des champs et des fichiers de données via les mécanismes des bases externes. Les bases externes sont des bases 4D indépendantes manipulées via les commandes SQL.
- Un projet hôte fonctionnant en mode interprété peut utiliser des composants interprétés ou compilés. Un projet hôte fonctionnant en mode compilé ne peut pas utiliser de composants interprétés. Dans ce cas, seuls les composants compilés peuvent être utilisés.

## Portée des commandes du langage

Hormis les [Commandes non utilisables](#unusable-commands), un composant peut utiliser toute commande du langage 4D.

Lorsqu’elles sont appelées depuis un composant, les commandes s’exécutent dans le contexte du composant, à l’exception de la commande `EXECUTE METHOD` ou `EXECUTE FORMULA` qui utilise le contexte de la méthode désignée par la commande. A noter également que les commandes de lecture du thème “Utilisateurs et groupes” sont utilisables depuis un composant mais lisent les utilisateurs et les groupes du projet hôte (un composant n’a pas d’utilisateurs et groupes propres).

Les commandes `EXECUTE METHOD` et `Get database parameter` constituent aussi une exception à ce principe : leur portée est globale à l'application. Lorsque ces commandes sont appelées depuis un composant, elles s’appliquent au projet d'application hôte.

Par ailleurs, des dispositions spécifiques sont définies pour les commandes `Structure file` et `Get 4D folder` lorsqu’elles sont utilisées dans le cadre des composants.

La commande `COMPONENT LIST` permet de connaître la liste des composants chargés par le projet hôte.

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

## Partage des méthodes projet

Toutes les méthodes projet d’un projet utilisé comme matrice sont par définition incluses dans le composant (le projet est le composant), ce qui signifie qu’elles peuvent être appelées et exécutées par le composant.

En revanche, par défaut ces méthodes projet ne seront ni visibles ni appelables par le projet hôte. Vous devez explicitement désigner, dans le projet utilisé comme matrice, les méthodes que vous souhaitez partager avec le projet hôte. Ces méthodes projet peuvent être appelées dans le code de le projet hôte (mais elles ne pourront pas être modifiées dans l’éditeur de méthodes de le projet hôte). Ces méthodes constituent les **points d’entrée** dans le composant.

A l’inverse, pour des raisons de sécurité, par défaut un composant ne peut pas exécuter de méthode projet appartenant au projet hôte. Dans certains cas, vous pourrez avoir besoin d’autoriser un composant à accéder à des méthodes projet de votre projet hôte. In certain cases, you may need to allow a component to access the project methods of your host project.

![](../assets/en/Concepts/pict516563.en.png)

Une fois que les méthodes projets hôtes sont disponibles pour les composants, vous pouvez exécuter une méthode hôte depuis l'intérieur d'un composant à l'aide des commandes `EXECUTE FORMULA` ou `EXECUTE METHOD`. Par exemple :

```4d
// Méthode hôte
component_method("host_method_name")
```

```4d
// component_method
 C_TEXT($1)
 EXECUTE METHOD($1)
```

> Vous pouvez compiler ou effectuer une vérification syntaxique dans une base hôte interprétée qui contient des composants interprétés si elle n'appelle pas de méthodes du composant interprété. Dans le cas contraire, une boîte de dialogue d'avertissement apparaît lorsque vous tentez de lancer la compilation ou un contrôle syntaxique et il n'est pas possible d'effectuer l'opération. N'oubliez pas qu'une méthode interprétée peut appeler une méthode compilée, mais pas l'inverse, sauf en utilisant les commandes `EXECUTE METHOD` et `EXECUTE FORMULA` .

## Passage de variables

Les composants et les projets hôtes ne partagent pas de variables locales, process ou interprocess. La seule façon de modifier les variables de composants du projet hôte et vice versa est d'utiliser des pointeurs.

Exemple utilisant un tableau :

```4d
//Dans le projet hôte :
    ARRAY INTEGER(MyArray;10)
    AMethod(->MyArray)

//Dans le composant, la méthode projet UneMéthode contient : 
     APPEND TO ARRAY($1->;2)
```

Exemples utilisant des variables :

```4d
C_TEXT(myvariable)
component_method1(->myvariable)
```

```4d
C_POINTER($p)
$p:=component_method2(...)
```

Sans pointeur, un composant peut toujours accéder à la valeur d'une variable de base hôte (mais pas à la variable elle-même) et vice versa :

```4d
//Dans la base hôte
C_TEXT($input_t)
$input_t:="DoSomething"
component_method($input_t)
// component_method obtient "DoSomething" in $1 (mais pas la variable $input_t)
```

L’utilisation de pointeurs pour faire communiquer les composants et le projet hôte nécessite de prendre en compte les spécificités suivantes :

- La commande `Get pointer` ne retournera pas un pointeur vers une variable du projet hôte si elle est appelée depuis un composant et inversement.

- L'architecture des composants permet la coexistence, au sein du même projet interprété, de composants à la fois interprétés et compilés (inversement, seuls des composants compilés peuvent être utilisés dans un projet compilé). L’usage de pointeurs dans ce cas doit respecter le principe suivant : l’interpréteur peut dépointer un pointeur construit en mode compilé mais à l’inverse, en mode compilé, il n’est pas possible de dépointer un pointeur construit en mode interprété. Illustrons ce principe par l’exemple suivant : soient deux composants, C (compilé) et I (interprété) installés dans le même projet hôte.
- Si le composant C définit la variable `mavarC`, le composant I peut accéder à la valeur de cette variable en utilisant le pointeur `->mavarC`.
- Si le composant I définit la variable `mavarI`, le composant C ne peut pas accéder à cette variable en utilisant le pointeur `->mavarI`. Cette syntaxe provoque une erreur d’exécution.

- La comparaison de pointeurs via la commande `RESOLVE POINTER` est déconseillée avec les composants car le principe de cloisonnement des variables autorise la coexistence de variables de même nom mais au contenu radicalement différent dans un composant et le projet hôte (ou un autre composant). Le type de la variable peut même être différent dans les deux contextes. Si les pointeurs `monptr1` et `monptr2` pointent chacun sur une variable, la comparaison suivante produira un résultat erroné :

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

## Gestion des erreurs

Une [méthode de gestion d'erreurs](Concepts/error-handling.md) installée par la commande `ON ERR CALL` s'applique à l'application en cours d'exécution uniquement. En cas d'erreur générée par un composant, la méthode d'appel sur erreur `ON ERR CALL` du projet hôte n'est pas appelée, et inversement.

## Accès aux tables du projet hôte

Bien que les composants ne puissent pas utiliser de tables, les pointeurs permettent au projet hôte et au composant de communiquer. Par exemple, voici une méthode pouvant être appelée depuis un composant :

```4d
// appeler une méthode composant
methCreateRec(->[PERSONNES];->[PERSONNES]Nom;"Julie Andrews")
```

Dans le composant, le code de la méthode `methCreateRec` :

```4d
C_POINTER($1) //Pointeur vers une table du projet hôte
C_POINTER($2) //Pointeur vers un champ du projet hôte
C_TEXT($3) // Valeur à insérer

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

> Dans le contexte d'un composant, 4D suppose qu'une référence à un formulaire table est une référence au formulaire table hôte (car les composants ne peuvent pas avoir de tables)

## Utilisation de tables et de champs

Un composant ne peut pas utiliser les tables et les champs définis dans la structure 4D du projet utilisé comme matrice. En revanche, il peut créer et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Les bases externes sont créées et gérées via le langage SQL. En revanche, il peut créer et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Utiliser une base externe signifie désigner temporairement cette base comme base courante, c’est-à-dire comme base cible des requêtes SQL exécutées par 4D. Les bases externes sont créées à l'aide de la commande SQL `CREATE DATABASE`.

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
 $Ptr_1:=$2 // récupère des données depuis le projet hôte via des pointeurs
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
 $Ptr_1:=$2 // accède aux données du projet hôte via des pointeurs
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6

 Begin SQL

    USE DATABASE DATAFILE :[<>MyDatabase];

    SELECT ALL ID, kind, name, code, sort_order
    FROM KEEPIT
    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;

    USE DATABASE SQL_INTERNAL;

 End SQL
```

## Utilisation de formulaires

- Seuls les "formulaires projet" (formulaires non associés à une table en particulier) peuvent être exploités directement dans un composant. Tous les formulaires projet présents dans le projet matrice peuvent être utilisés par le composant.
- Un composant peut faire appel à des formulaires table du projet hôte. A noter qu’il est nécessaire dans ce cas d’utiliser des pointeurs plutôt que des noms de table entre [] pour désigner les formulaires dans le code du composant.

> Si un composant utilise la commande `ADD RECORD`, le formulaire Entrée courant du projet hôte sera affiché, dans le contexte du projet hôte. Par conséquent, si le formulaire comporte des variables, le composant n’y aura pas accès.

- Vous pouvez publier des formulaires de composants comme sous-formulaires dans les projets hôtes. Avec ce principe, vous pouvez notamment développer des composants proposant des objets graphiques. Par exemple, les Widgets proposés par 4D sont basés sur l’emploi de sous-formulaires en composants.

> Dans le contexte d'un composant, tout formulaire projet référencé doit appartenir au composant. Par exemple, à l'intérieur d'un composant, le fait de référencer un formulaire projet hôte à l'aide de `DIALOG` ou de `Open form window` déclenchera une erreur.

## Utilisation de ressources

Les composants peuvent utiliser des ressources situées dans le dossier Ressources du composant.

Les mécanismes automatiques sont opérationnels : les fichiers XLIFF présents dans le dossier Resources d’un composant seront chargés par ce composant.

Dans un projet hôte contenant un ou plusieurs composants, chaque composant ainsi que les projets hôtes ont leur propre «chaîne de ressources» Les ressources sont réparties entre les différents projets : il n'est pas possible d'accéder aux ressources du composant A à partir du composant B ou du projet hôte.

## Exécution du code d'initialisation

Un composant peut exécuter automatiquement du code 4D lors de l'ouverture ou de la fermeture de la base hôte, par exemple pour charger et/ou sauvegarder les préférences ou les états utilisateur liés au fonctionnement de la base hôte.

L'exécution du code d'initialisation ou de fermeture se fait au moyen de la méthode base `On Host Database Event`.

> Pour des raisons de sécurité, vous devez autoriser explicitement l'exécution de la méthode base `On Host Database Event` dans la base hôte afin de pouvoir l'appeler. Pour ce faire, vous devez cocher l'option **Exécuter la méthode "Sur événement base hôte" des composants** dans la page Sécurité des Paramètres.

## Protection des composants : la compilation

Par défaut, toutes les méthodes projet d’un projet utilisé comme matrice et installé comme composant sont virtuellement visibles depuis le projet hôte. En particulier :

- Les méthodes projet partagées sont accessibles dans la Page Méthodes de l’Explorateur et peuvent être appelées dans les méthodes du projet hôte. Leur contenu peut être sélectionné et copié dans la zone de prévisualisation de l’Explorateur. Elles peuvent également être visualisées dans le débogueur. Il n’est toutefois pas possible de les ouvrir dans l’éditeur de méthodes ni de les modifier.
- Les autres méthodes projet du projet utilisé comme matrice n’apparaissent pas dans l’Explorateur mais peuvent également être visualisées dans le débogueur du projet hôte.

Pour protéger efficacement les méthodes projet d'un composant, il suffit de compiler le projet utilisé comme matrice et de le fournir sous la forme d'un fichier .4dz. Lorsqu’un projet compilé utilisé comme matrice est installé comme composant :

- Les méthodes projet partagées se trouvent dans la Page Méthodes de l’Explorateur et peuvent être appelées dans les méthodes du projet hôte. En revanche, leur contenu n’apparaît pas dans la zone de prévisualisation ni dans le débogueur.
- Les autres méthodes projet du projet utilisé comme matrice n’apparaissent jamais.
