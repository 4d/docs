---
id: structure-indexes
title: Index
---

Vous pouvez associer des index aux champs que vous utilisez fréquemment pour effectuer des recherches et des tris. Par exemple, vous pouvez indexer "Nom", "NomEntreprise" ou "NomProduit" si vous prévoyez d'effectuer des recherches ou de trier des entités à l'aide de ces attributs. Vous utilisez également cette propriété pour les champs qui établissent des relations entre les tables.

Lorsqu'un index est associé à un champ, 4D crée une table d'index interne pour ce champ. Cette table permet à 4D d'effectuer des recherches et des tris rapides sur ce champ. Lors d'une recherche ou d'un tri sur un champ non indexé, 4D parcourt les données de manière séquentielle, en examinant chaque enregistrement dans l'ordre. Grâce à l'indexation, 4D peut effectuer des recherches et des tris sans avoir à parcourir chaque enregistrement.

Vous pouvez indexer les champs des types Alpha, Texte, Date, Heure, Booléen, Entier, Entier long, Entier 64 bits, Réel, Image et Objet. Lorsque vous ajoutez ou supprimez des enregistrements, 4D met automatiquement à jour sa table d'index. Si vous créez un index pour un champ qui existe déjà, 4D indexe automatiquement les données existantes. Vous pouvez définir autant de champs indexés que vous le souhaitez. Les index sont également reconstruits lors d'opérations spécifiques, telles que la conversion d'anciennes bases de données ou le [compactage des données](../MSC/compact.md).

Chaque table d'index peut contenir au maximum :

- 128 milliards de clés pour les index Alpha et Texte
- 256 milliards de clés pour les autres types d'index (données scalaires)

N'indexez pas tous les champs. Un index augmente la taille de la base de données, ce qui mobilise davantage d'espace sur le disque. L'utilisation d'un grand nombre d'index allonge également le temps nécessaire à l'écriture d'un enregistrement, car 4D met à jour la table d'index à chaque validation d'enregistrement.

Les champs indexés apparaissent en **gras** dans l'éditeur de structure.

## Types d'index

4D propose différents types d'index. Le choix entre les différents types dépend généralement du résultat attendu et du type de données présentes dans le champ. Il existe quatre grands types d'index :

- **Index standard :** il s'agit d'index à champ unique utilisés pour accélérer les opérations standard sur la base de données (recherches et tri). 4D vous permet de choisir l'architecture interne de ce type d'index (à l'exception des champs de type Objet) : B-Tree ou Cluster B-Tree.
- **Index composés :** cet index stocke les valeurs combinées de deux champs ou plus qui font souvent l'objet de recherches conjointes, par exemple « Nom + Prénom ».
- **Index de mots-clés :** Ces index ne sont disponibles que pour les champs de type Alpha, Texte et Image. Ils ont pour but de faciliter la recherche rapide dans un texte ou, dans le cas des images, parmi les mots-clés associés à celles-ci.
- **Index vectoriels** : ces index sont conçus pour accélérer les requêtes IA portant sur les champs objets stockant des [représentations vectorielles](./field-properties.md#4dvector-class) (ou *embeddings*).

### Index standard

Un index standard a pour but d'accélérer les opérations sur la base de données (par "index standard", on entend un index générique, par opposition à un index par mot-clé ou à un index composite). 4D propose deux types d'architectures pour les index standard : B-Tree et Cluster B-Tree.

- **B-Tree:** Index de type B-Tree standard. Ce type d'index polyvalent répond à la plupart des besoins en matière d'indexation.
- **Cluster B-Tree:** index de type B-Tree utilisant des *clusters*, i.e. des grappes. Cette architecture est plus efficace lorsque l'index ne contient pas un grand nombre de clés, c'est-à-dire lorsque les mêmes valeurs apparaissent fréquemment dans les données.

:::note

Un index B-Tree associé à un champ de type Texte stocke les 1 024 premiers caractères du champ (au maximum). Par conséquent, dans ce contexte, les recherches portant sur des chaînes de caractères contenant plus de 1 024 caractères échoueront.

:::

Lorsque vous choisissez l'architecture d'index, 4D propose également l'option **Automatique**. Dans ce cas, 4D sélectionne automatiquement l'architecture en fonction du type de données concerné.
L'option **Automatique** est la seule disponible pour les champs de type Objet, sauf si vous avez associé une classe 4D.Vector à ce champ ([voir ci-dessous](#vector-index)). En fait, avec l'option **Automatique**, tous les chemins d'accès aux attributs sont automatiquement indexés.

### Indices composés

Les index composés stockent les valeurs combinées de deux champs ou plus pour chaque entrée. L'exemple classique est celui d'un index composite basé sur les champs"Prénom" et "Nom". La recherche de "Peter Smith" sera donc optimisée par rapport à une recherche classique (recherche de "Smith", puis de "Peter").

4D exploite automatiquement les index composés lors des recherches et des tris. Par exemple, si un index composé "Ville+Code postal" existe, il sera utilisé dans le cas d'une recherche du type "nom = carter et ville = new york et code postal = 102@".

Dans l'éditeur de structure, les index composés ne peuvent être créés qu'à l'aide de la boîte de dialogue de création d'index. Pour une description détaillée de cette boîte de dialogue, reportez-vous à la section "Création d'un index" ci-dessous.

### Index de mots-clés

Vous pouvez utiliser un type d'index spécifique avec les champs Alpha, Texte et Image : un index par mots-clés.

- Lorsque vous associez ce type d'index à un champ Alpha ou Texte, le texte stocké dans ce champ sera indexé mot par mot. Tous les mots seront indexés, même s'ils ne comportent qu'un ou deux caractères. Ce type d'index permettra d'accélérer considérablement les recherches ultérieures par mot-clé dans les champs de texte.  
  Il est possible d'associer à la fois un index standard et un index par mot-clé aux champs Alpha et Texte (lorsqu'ils sont stockés dans les enregistrements). 4D utilisera l'index approprié en fonction du contexte.

- Lorsque vous associez ce type d'index à un champ Image, les recherches parmi les mots-clés associés aux images (métadonnées) sont considérablement accélérées. Attention : Les index de mots-clés des images sont exclusivement basés sur les métadonnées du type IPTC/Keywords. Ces types de métadonnées sont notamment pris en charge par les formats TIFF et JPEG (à noter que les formats BMP, PNG et GIF ne les prennent pas en charge). Les autres types de métadonnées ne sont pas gérés par l'indexation.  
  Les index de mots-clés des images sont mis à jour automatiquement par 4D à chaque fois que le champ Image est enregistré (lors de la création ou de la modification d'un enregistrement, lors de l'importation de données, etc.). Les métadonnées de type IPTC/Keywords sont indexées automatiquement par 4D lorsqu'elles sont présentes dans l'image (vous n'avez pas besoin d'utiliser la commande [`SET PICTURE METADATA`](../commands/set-picture-metadata) pour les inclure dans l'index du champ Image).

Vous pouvez utiliser la commande [`DISTINCT VALUES`](../commands/distinct-values) pour obtenir la liste des mots-clés contenus dans un index de mots-clés.

Pour utiliser les index de mots-clés d'images ou de texte, vous devez recourir à l'opérateur [`%`](../Concepts/dt_string.md#keywords) : cet opérateur doit être placé dans les formules de recherche ou de tri afin d'utiliser spécifiquement une valeur d'index. Par exemple :

```4d
QUERY([PICTURES];[PICTURES]Photos %"cats")
// recherche les photos associées au mot-clé "cats"
```

Cela fonctionne de la même manière pour toutes les commandes de recherhce et de tri : [`QUERY BY FORMULA`](../commands/query-by-formula), [`QUERY SELECTION`](../commands/query-selection), [`ORDER BY`](../commands/order-by), etc.

### Index vectoriels

Un index vectoriel peut être associé à un champ de type Objet associé à une [classe](./field-properties.md#4dvector-class) `4D.Vector`. Dans ce cas, les options suivantes sont disponibles :

![](../assets/en/Develop/vector-index.png)

- **Cosine** : l'index vectoriel est optimisé pour les calculs de [similarité cosinus](../API/VectorClass.md#understanding-the-different-vector-computations).
- **Dot** : l'index vectoriel est optimisé pour les calculs de [similarité par produit scalaire](../API/VectorClass.md#understanding-the-different-vector-computations).
- **Euclidien** : l'index vectoriel est optimisé pour les calculs de [distance euclidienne](../API/VectorClass.md#understanding-the-different-vector-computations).
- **Automatique** : type d'index d'objet standard ([voir ci-dessus](#standard-indexes)). Vous pouvez sélectionner ce type d'index pour gérer les vecteurs nuls ; il sera alors automatiquement utilisé.

Vous pouvez sélectionner un ou plusieurs types d'indice pour vos champs vectoriels ; l'indice approprié sera automatiquement utilisé en fonction du calcul effectué. Pour des raisons d'optimisation, il est recommandé de ne sélectionner que les types d'index nécessaires.

:::tip Article(s) de blog sur le sujet

[Indexation vectorielle en 4D : recherche de similarité plus rapide pour les champs vectoriels 4D](http://blog.4d.com/vector-indexing-in-4d-faster-similarity-search-for-4d-vector-fields)

:::

:::warning Limitation : Index vectoriels et transactions

Les index vectoriels ne sont pas compatibles avec le [traitement des transactions](../Develop/transactions). Lorsque des enregistrements indexés par vecteur sont insérés, mis à jour ou supprimés au cours d'une transaction, les modifications apportées à l'index correspondant ne sont ni validées ni annulées avec la transaction. Par conséquent, l'index vectoriel peut ne plus correspondre à l'état de la base de données après une annulation, et les résultats de recherche peuvent ne pas refléter les données enregistrées.

:::

## Liste des index

Le bouton ![](../assets/en/Develop/index-list.png) de la barre d'outils de l'éditeur de structure affiche la fenêtre "Liste des index". Cette fenêtre affiche la liste de tous les index de la structure, quel que soit leur type :

![](../assets/en/Develop/index-window.png)

La liste des index permet de consulter les principales propriétés des index :

- **Type :** Type d'index. Chaque type d'index (B-tree, Cluster B-tree, Keyword, Euclidean, Cosinus, Dot) est représenté par une icône différente.
- **Description :** Table et champ(s) de l'index. Pour un index composé, cette liste contient tous les champs de l'index.
- **Nom :** Nom de l'index. Cette propriété est notamment utilisée par les commandes du langage 4D. Vous pouvez modifier ou ajouter un nom d'index en double-cliquant dans cette colonne.

Le bouton **[+]** affiche la boîte de dialogue des propriétés de l'index et vous permet de modifier l'index sélectionné ou d'ajouter un nouvel index si aucun index n'a été sélectionné.  
Le bouton **[-]** supprime l'index sélectionné (une boîte de dialogue de confirmation s'affiche).  
Ce bouton permet notamment de supprimer des index composés.

Deux commandes supplémentaires sont disponibles dans le menu associé au bouton de l'outil (activées lorsqu'un index est sélectionné) :

- **Modifier :** Affiche les propriétés de l'index sélectionné dans la boîte de dialogue des propriétés de l'index (voir paragraphe suivant). Cette commande a le même effet qu'un double-clic sur une ligne de la liste (sauf dans la zone du nom).
- **Reconstruire :** Permet de supprimer et de reconstruire l'index sélectionné. Une boîte de dialogue de confirmation s'affiche lorsque vous sélectionnez cette commande.

## Création d'un index

Pour créer directement un **index standard** :

1. Sélectionnez un champ, puis choisissez une valeur dans le menu "Index" de la **palette Inspecteur**.
   **OU**  
   Cliquez avec le bouton droit de la souris sur le champ, puis sélectionnez une valeur dans le sous-menu **Index>** du menu contextuel.

Pour créer un **index composé** ou tout autre type d'index à l'aide de la boîte de dialogue de création d'index :

1. Sélectionnez plusieurs champs en maintenant enfoncée la touche **Maj** (pour sélectionner des champs adjacents) ou la touche **Ctrl** (Windows) ou **Commande** (macOS), puis cliquez avec le bouton droit sur l'un des champs et sélectionnez **Nouvel index composite...** dans le menu contextuel.
   **OU**  
   Sélectionnez **Nouvel index...** dans le menu contextuel de la table ou sélectionnez **Index** dans le menu d'ajout d'objets de la barre d'outils de l'éditeur de structure.

La boîte de dialogue de configuration de l'index s'affiche alors.

![](../assets/en/Develop/index-add.png)

Elle contient les propriétés suivantes :

- **Table :** Liste de toutes les tables de la base de données. Sélectionnez dans ce menu la table à laquelle l'index sera associé.
- **Nom :** Zone de saisie du nom de l'index. Ce nom est utilisé par les commandes du langage 4D.
- **Type :** Menu de sélection permettant de choisir le type d'index à créer. Si vous conservez l'option "Automatique", 4D choisira automatiquement le type d'index en fonction du contenu du champ.
- **Liste des champs :** Cette zone permet de spécifier le ou les champ(s) associé(s) à l'index. Il peut contenir un champ par défaut, en fonction de la sélection actuelle dans l'éditeur.

Pour ajouter un champ à l'index, cliquez sur le bouton **[+]**. La liste des champs de la table sélectionnée s'affiche afin que vous puissiez indiquer le champ à ajouter à l'index.

- Si vous souhaitez créer un index composite, ajoutez successivement chaque champ à inclure dans l'index. Une fois la liste complétée, vous pouvez réorganiser les champs à l'aide des boutons fléchés ou par glisser-déposer.
- Si vous créez un index composite basé sur les champs de la clé primaire, veillez à ce que l'ordre des champs soit identique dans la clé primaire et dans l'index.
- Si vous avez choisi le type "Index de mots-clés", seuls les champs Alpha ou Texte peuvent être sélectionnés. Dans ce cas également, vous ne pouvez inclure qu'un seul champ dans l'index.

Pour supprimer un champ de l'index, sélectionnez-le dans la liste et cliquez sur le bouton **[-]**.

Une fois l'index configuré, cliquez sur **OK** pour le générer.

## Suppression d'un index dans l'éditeur de structure

Vous pouvez à tout moment supprimer les index qui ne vous sont plus utiles. Cette opération peut être effectuée directement dans l'éditeur de structure ou à l'aide de la fenêtre [Liste des index](#index-list).

Pour supprimer un index standard dans l'éditeur de structure :

1. Sélectionnez le champ associé à l'index que vous souhaitez supprimer, puis choisissez **Aucun** ou décochez l'option **Index des mots-clés** (pour un index de mots-clés) dans le menu Index de la **palette Inspecteur**
   **OU**  
   Cliquez avec le bouton droit de la souris sur le champ associé à l'index, puis sélectionnez **Aucun** ou décochez l'option **Mots-clés** dans le sous-menu **Index>** du menu contextuel.

La suppression (et la consultation) d'un index composite ne peut s'effectuer qu'à partir de la fenêtre Liste des index, voir ci-dessus.

## Réindexation d'un champ

Vous pouvez réindexer un champ à tout moment ; en d'autres termes, reconstruire la ou les table(s) d'index associée(s), en fonction des données présentes. Cela peut s'avérer utile dans le cadre de la maintenance d'une application.

La réindexation peut être effectuée à l'aide de la commande **Reconstruire** dans la fenêtre [Liste des index](#index-list).

Notez que la modification de la [langue des données](../settings/database.md#text-comparison) ou certaines opérations de maintenance, telles que le [compactage](../MSC/compact.md), entraînent également la reconstruction des index.
