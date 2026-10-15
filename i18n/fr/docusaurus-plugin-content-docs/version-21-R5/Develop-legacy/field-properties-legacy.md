---
id: field-properties-legacy
title: Champs
---
<!-- REF my.section.id.Desc -->
## Définition

La zone "Définition" de la [palette Inspecteur](../Develop/structure-editor.md#inspector-palette) configure les propriétés de base des champs. Certaines propriétés ne sont disponibles que pour certains types de champs.

### Couleur

Vous pouvez attribuer une couleur à chaque nom de champ afin de distinguer les champs selon leur rôle ou leurs attributs. Par exemple, vous pouvez utiliser une couleur pour les champs uniques et une autre pour les champs obligatoires. Il est également possible d'attribuer une [couleur à chaque table](../Develop/structure-tables.md#color-of-the-table-image) et à chaque relation.

Pour définir la couleur d'un ou plusieurs champs, sélectionnez-les et choisissez une couleur à l'aide :

- du **bouton Couleur** dans la barre d'outils de l'éditeur de Structure ;
- de la commande **Couleur** dans le menu contextuel des champs ;
- de l'option **Couleur** dans la **palette Inspecteur**.

L'option **Automatique** permet d'appliquer au nom du champ sa couleur standard d'origine.

### Invisible

Vous pouvez rendre un champ invisible dans l'environnement Application et pour les plug-ins en sélectionnant la propriété **Invisible**. Cet attribut masque le champ à l'utilisateur. Un champ invisible n'apparaît dans aucun éditeur standard 4D ni dans aucune boîte de dialogue de l'environnement Application. Il ne peut pas non plus être utilisé par les plug-ins. Les éditeurs et boîtes de dialogue suivants sont concernés :

- tous les éditeurs de **requête** ;
- l'**éditeur de tri** ;
- l'**éditeur d'étiquettes** ;
- les **états rapides** ;
- les boîtes de dialogue d'**exportation et d'importation de données** ;
- l'**éditeur de formules**.

Dans chacun de ces emplacements, l'utilisateur ne peut ni voir ni choisir le champ. Par exemple, il ne peut pas choisir un champ invisible pour une présentation créée avec l'[éditeur d'étiquettes](../Desktop/labels.md).

**Note :** lors de l'utilisation des éditeurs, les utilisateurs peuvent enregistrer leurs spécifications (par exemple, la requête ou le tri créé) dans des fichiers sur disque. Dans ce cas, les champs spécifiés qui sont ensuite déclarés invisibles continuent d'être utilisés. De plus, les utilisateurs peuvent saisir le nom des champs invisibles dans l'**éditeur de formules**.

Les champs invisibles s'affichent en *italique* dans la fenêtre de l'éditeur de Structure.

### Unique

Utilisez l'attribut **Unique** pour garantir que chaque enregistrement possède une valeur différente dans ce champ. Cet attribut doit être utilisé pour le champ qui identifie de manière unique chaque enregistrement de la table. Il est utile pour valider les champs contenant des numéros d'employé, de sécurité sociale, de commande, etc.

L'attribut Unique interdit la duplication des valeurs vides, comme celle de toute autre valeur. Un champ vide ne peut pas être dupliqué dans un autre enregistrement.

La [barre d'informations](../Develop/structure-editor.md#information-bar) de l'éditeur de Structure indique si la propriété Unique est sélectionnée pour un champ.

Dans 4D, les champs dotés de l'attribut Unique doivent être indexés. Un indicateur visuel signale qu'un index sera créé (s'il n'existe pas déjà) lorsque vous sélectionnez l'attribut Unique :

![](../assets/en/Develop/field-unique.png)

L'éditeur empêche la suppression de l'index d'un champ Unique (l'option **Aucun** et les commandes de suppression d'index ne sont pas disponibles lorsque ce champ est sélectionné). Pour supprimer l'index d'un champ unique, vous devez d'abord retirer l'attribut Unique.

### Exposer comme ressource REST

Cette option détermine si le [champ est exposé aux requêtes REST](../REST/configuration.md#exposing-field).

:::note Notes

- Cette option peut également être définie au niveau de la table.
- Elle est utilisée dans le contexte des [fonctionnalités de datastore distant ORDA](../ORDA/remoteDatastores.md).

:::

### Refuser la saisie de valeurs NULL

Cette propriété empêche le stockage de valeurs NULL. Lorsqu'elle est sélectionnée pour un champ, il est impossible d'y stocker la valeur NULL. Si un champ doté de cet attribut reçoit une valeur NULL, une erreur est générée. Cette propriété de bas niveau correspond exactement à l'attribut SQL NOT NULL.

:::note

Dans 4D, les champs peuvent également avoir l'attribut "Obligatoire" (voir ci-dessous). Les concepts sont similaires, mais leur portée diffère : l'attribut "Obligatoire" contrôle la saisie des données, tandis que l'attribut "Refuser la saisie de valeurs NULL" agit au niveau du moteur de la base de données.

:::

### Mapper les valeurs NULL sur les valeurs vides

Cette propriété uniformise le traitement des valeurs "vides" et NULL du champ dans le langage 4D.

:::warning Compatibilité avec ORDA

L'utilisation de cette option n'est pas recommandée dans les développements basés sur [ORDA](../ORDA/overview.md), où les valeurs NULL sont entièrement prises en charge.

:::

Pour des raisons de compatibilité, les valeurs NULL stockées dans les tables 4D sont automatiquement converties en valeurs par défaut lorsqu'elles sont manipulées avec le langage 4D. Par exemple, dans l'instruction suivante :

```4d
$myTextVar:=[myTable]myTextField
```

... si le champ *myTextField* contient une valeur NULL, la variable *$myTextVar* contiendra "" (chaîne vide). Les [valeurs par défaut](../Concepts/data-types.md#default-values) dépendent du type de données. En revanche, ce mécanisme ne s'applique en principe pas aux traitements effectués au niveau du moteur de base de données 4D, tels que les requêtes. Une recherche de valeur "vide" (par exemple $myvalue=0) ne trouve donc pas les enregistrements contenant NULL, et inversement. Lorsque les deux types de valeurs (valeurs par défaut et NULL) sont présents dans les enregistrements d'un même champ, certains traitements peuvent être modifiés ou nécessiter du code supplémentaire. Pour éviter ces inconvénients, l'option **Mapper les valeurs NULL sur les valeurs vides** permet d'uniformiser tous les traitements dans le langage 4D. Les champs contenant NULL sont alors systématiquement considérés comme contenant des valeurs par défaut.

:::note Notes

- Les champs Alpha au format UUID qui ne sont pas générés ne sont pas considérés comme NULL (voir Format UUID).
- Cette propriété est prise en compte à un niveau très bas du moteur de base de données. Elle agit notamment sur la commande [`Is field value Null`](../commands/is-field-value-null).

:::

### Incrémentation automatique

La propriété **Incrémentation automatique** génère des numéros de séquence dans la table. Elle peut être utilisée avec les champs de type [Integer, Long Integer et Integer 64 bits](../Concepts/data-types.md).

Un champ doté de cette propriété est incrémenté automatiquement à chaque création d'un enregistrement dans la table. Le numéro de séquence attribué correspond au "compteur interne" de la table, géré par 4D. Ce compteur est également accessible avec les commandes 4D [`Sequence number`](../commands/sequence-number) et [`Get database parameter`](../commands/get-database-parameter), ainsi qu'avec le marqueur `#N` (voir Valeurs par défaut).

Les numéros attribués ne sont jamais réutilisés dans la table, même après la suppression d'enregistrements. Les numéros générés pendant une transaction annulée sont "perdus". La propriété Incrémentation automatique correspond à l'attribut SQL AUTO_INCREMENT. Le libellé AUTO INCREMENT apparaît également dans la zone d'informations SQL de l'[Inspecteur](../Develop/structure-editor.md#inspector-palette) pour les champs dotés de cet attribut.

:::warning

Bien qu'ils soient uniques dans la table au moment de leur génération, les numéros incrémentés automatiquement ne sont PAS recommandés pour remplir les champs de clé primaire identifiant de manière unique les enregistrements, notamment lorsque la structure utilise plusieurs fichiers de données : le compteur interne pourrait alors être désynchronisé. En outre, le compteur interne d'une table peut être réinitialisé avec la commande [`SET DATABASE PARAMETER`](../commands/set-database-parameter). Pour créer des ID d'enregistrement uniques, il est fortement recommandé d'utiliser des UUID, qui présentent les avantages suivants :

- les UUID génèrent des ID uniques entre toutes les tables et bases de données ;
- pour générer un UUID, vous pouvez combiner l'option **UUID auto** (voir ci-dessous) et la commande [`Generate UUID`](../commands/generate-uuid).

:::

### Stockage dans l'enregistrement, dans le fichier de données ou en dehors

Ce menu n'est disponible que pour les champs de type Text, BLOB, Picture et Object [type](../Concepts/data-types.md). Il permet de définir l'emplacement de stockage des données du champ.

#### Dans l'enregistrement

Les données sont stockées avec chaque enregistrement. En général, cette option n'est pas recommandée pour les champs contenant des données volumineuses. Elle est toutefois sélectionnée par défaut pour les champs Text, car ce type de stockage est nécessaire pour utiliser des index B-Tree "standard". Le menu de sélection d'index est masqué lorsque les données Text sont stockées en dehors des enregistrements.

#### Dans le fichier de données

Les données sont stockées dans le fichier de données, mais en dehors de chaque enregistrement. Cette option est sélectionnée par défaut pour les champs BLOB et Picture. Pour optimiser le fonctionnement de la base avec des données volumineuses, vous pouvez stocker les textes, images, Blobs et objets en dehors des enregistrements.

#### En dehors du fichier de données

Les données sont stockées dans des fichiers séparés, en dehors du [fichier de données](../Project/architecture.md#data). Cette option est décrite dans la section **Stockage externe des données**.

:::note Notes

- Cette option ne s'applique qu'aux nouveaux enregistrements créés ensuite dans la table. Si vous l'activez pour une table contenant déjà des enregistrements, ceux-ci ne sont pas modifiés et la table utilise un mode de stockage mixte, interne et externe. Pour appliquer ce mode aux enregistrements existants, vous devez [compacter les données](../MSC/compact.md) avec l'option [**Forcer la mise à jour des enregistrements**](../MSC/compact.md#force-updating-of-the-records).
- Les données stockées en dehors du fichier de données ne sont pas prises en charge par la [fonctionnalité de chiffrement des données](../MSC/encrypt.md), si celle-ci est activée.
- Cette option n'est pas disponible pour les [champs de type Object](../Concepts/dt_object.md).

:::

#### Taille maximale de stockage interne

Par défaut, les données des champs BLOB, Picture, Text et Object sont stockées en dehors des enregistrements ou du fichier de données pour optimiser les performances. Il peut être utile, pour des raisons de performance, de forcer le stockage dans les enregistrements lorsque la taille des données est limitée. Cette méthode est particulièrement optimisée lorsque l'application manipule des données BLOB, Picture, texte ou objet de tailles variables. La valeur saisie représente la taille en octets en dessous de laquelle les données du champ sont stockées dans l'enregistrement. Par exemple, avec une valeur de 30 000 pour un champ Picture, une image de 20 Ko sera stockée dans l'enregistrement et une image de 40 Ko à l'emplacement défini dans les paramètres (dans le fichier de données ou en dehors). La valeur par défaut est 0 : toutes les données du champ sont stockées en dehors des enregistrements.

### Format UUID

Cette propriété est disponible pour les champs de type [Alpha](../Concepts/data-types.md). Elle indique que le champ stocke des identifiants UUID. Les données stockées doivent respecter le format UUID (combinaison de 32 lettres (A-F, a-f) et chiffres (0-9)). Vous pouvez utiliser la propriété [**UUID auto**](#auto-uuid), la commande [`Generate UUID`](../commands/generate-uuid) ou un algorithme personnalisé.

Si vous essayez de stocker dans ce champ une chaîne qui ne respecte pas le format UUID, 4D la convertit automatiquement. La même opération s'applique au contenu des champs existants qui ne sont pas de type Alpha et qui sont convertis en champs UUID : lors du chargement des enregistrements, les valeurs sont reformattées puis stockées à nouveau.

Les champs au format UUID peuvent être affichés dans des formulaires et restent saisissables. Leur contenu apparaît en majuscules. Pour afficher des caractères minuscules, vous devez passer par une variable.

:::note Notes

- Les champs au format UUID ne peuvent pas être associés à des index par mots-clés ni à des listes de choix.
- Vous pouvez créer une relation entre deux champs au format UUID, mais pas entre un champ Alpha standard et un champ au format UUID.
- Un champ UUID initialisé (généré) dont la valeur est NULL renvoie une chaîne vide. Un champ UUID non généré n'est pas NULL et renvoie "000..." (le nombre de zéros correspond au nombre de caractères). La propriété n'est pas prise en compte pour les champs UUID non générés (affichage de "000...").

:::

#### UUID auto

Cette option est active uniquement lorsque la propriété [**Format UUID**](#uuid-format) est sélectionnée. Elle permet de générer automatiquement un UUID dans le champ.

Ce numéro est calculé automatiquement dans les cas suivants :

- lors de la création d'un enregistrement ;
- lors du chargement d'un enregistrement dont le champ UUID contient une valeur Null. Cela concerne notamment les enregistrements créés et sauvegardés avant l'ajout du champ UUID dans la table, lorsque l'option [**Mapper les valeurs NULL sur les valeurs vides**](#map-null-values-to-blank-values) n'était pas sélectionnée.

Dans tous les cas, l'enregistrement doit être sauvegardé pour que l'UUID généré automatiquement soit enregistré dans le champ.

:::note

Lors de l'importation de données, même si cette propriété est sélectionnée, 4D ne génère pas de nouveau numéro : il utilise les valeurs importées (et les transforme si nécessaire lorsque le format n'est pas valide). Toutefois, si la valeur du champ importé est vide, un UUID est généré automatiquement.

:::

<!-- END REF -->

### Requêtes et tris sur texte sans balises

Cette propriété est disponible pour les champs Text et Alpha. Lorsqu'elle est sélectionnée, les requêtes et tris sur les données du champ ignorent les balises de style.

Cette option concerne la possibilité pour 4D d'appliquer différents styles dans une même zone de texte (texte riche) d'un formulaire. Pour plus d'informations, consultez la section Multi-style (zone de texte riche).

Les styles sont définis en insérant des balises HTML dans le texte. Ces balises sont interprétées lors de l'affichage de la zone de texte.

Les balises de style sont stockées avec les données. Par exemple, si vous saisissez "week end" dans un champ Text, 4D stocke `"week <SPAN STYLE = "color: #D81E05">end</SPAN>"`. Cette opération est transparente pour l'utilisateur dans le formulaire. Pour les requêtes et les tris, un paramétrage spécifique est toutefois nécessaire afin que 4D ignore les balises. La requête ne peut trouver "week end" que si vous avez sélectionné l'option Requêtes et tris sur texte sans balises pour le champ dans l'éditeur de Structure.

Note : avec cette option, une requête sur la valeur textuelle du champ équivaut à exécuter l'instruction suivante dans 4D :

```4d
QUERY BY FORMULA(OBJECT Get plain text(thefield)="thevalue")
```

### Indexation

La propriété Index est disponible pour tous les types de champs, à l'exception des BLOB et des images. La propriété Index par mots-clés est disponible pour les champs Alpha, Text et Picture.

Les index accélèrent le traitement et les recherches dans les données.

La gestion des index est détaillée dans la section Création et modification d'index.

## Contrôles de saisie des données

Vous pouvez définir des contrôles de saisie pour les champs et les objets saisissables au niveau du formulaire. Ils limitent ce que l'utilisateur peut saisir dans le champ ou l'objet saisissable d'un formulaire donné.

### Obligatoire

Lorsque l'attribut Obligatoire est défini pour un champ, l'utilisateur doit saisir une valeur dans ce champ lors de la saisie des données. 4D refuse un enregistrement contenant un champ obligatoire vide. Cet attribut convient aux champs contenant des informations essentielles, notamment celui qui identifie de manière unique chaque enregistrement. Les numéros de sécurité sociale, de facture, certaines dates ou les numéros d'employé peuvent nécessiter cet attribut afin de protéger l'intégrité des enregistrements.

Vous pouvez également définir cet attribut pour un champ dans un formulaire particulier. Si l'attribut Obligatoire est sélectionné dans l'éditeur de Structure, vous ne pouvez pas le désélectionner dans un formulaire particulier. En revanche, vous pouvez appliquer cet attribut dans un formulaire à un champ qui ne le possède pas dans l'éditeur de Structure. Pour plus d'informations, consultez la section Attributs Saisissable et Obligatoire et propriétés de champ.

Note : dans 4D, les champs peuvent également avoir la propriété "Refuser la saisie de valeurs NULL" (voir ci-dessus). Les concepts sont similaires, mais leur portée diffère : l'attribut "Obligatoire" contrôle la saisie des données, tandis que l'attribut "Refuser la saisie de valeurs NULL" agit au niveau du moteur de la base de données.

### Non modifiable

Lorsque cet attribut est défini pour un champ, 4D valide la valeur initialement saisie, mais n'autorise pas l'utilisateur à la modifier après la sauvegarde de l'enregistrement. L'utilisateur ne peut modifier le champ que lors de la création initiale de l'enregistrement, avant sa validation. Une fois l'enregistrement sauvegardé, la valeur du champ n'est plus modifiable. Elle ne peut alors être modifiée que par une méthode ou dans l'environnement de conception, après avoir retiré cette option.

Utilisez l'attribut Non modifiable pour les champs devant fournir une piste d'audit, comme la date de réception ou la date de paiement. Il est souvent utilisé pour le champ qui identifie de manière unique chaque enregistrement de la table.

Note : cet attribut fonctionne uniquement pour les champs affichés dans un formulaire de saisie en mode Page. Dans les autres cas (saisie en liste, saisie dans un sous-formulaire en mode Liste ou Page), la valeur du champ peut toujours être modifiée.

### Affichage uniquement

L'utilisateur ne peut pas saisir au clavier de valeurs dans un champ doté de l'attribut Affichage uniquement. Vous devez utiliser une valeur par défaut pour ce champ ou écrire une méthode qui y insère une valeur. Cet attribut est utile pour afficher des valeurs que vous ne souhaitez pas laisser modifier par les utilisateurs, comme des totaux calculés ou un numéro de séquence attribué par une méthode.

Vous pouvez également rendre n'importe quel champ non saisissable dans un formulaire particulier. Pour plus d'informations, consultez la section Attributs Saisissable et Obligatoire et propriétés de champ.

### Multilignes

Cette option est disponible uniquement pour les champs de type Text. Lorsqu'elle est sélectionnée, le champ Text est configuré automatiquement pour contenir plusieurs lignes dans les formulaires créés par la suite. Ses caractéristiques par défaut sont les suivantes :

- hauteur correspondant à plusieurs lignes ;
- barre de défilement horizontale ;
- pendant l'exécution, un retour chariot crée un saut de ligne.

Lorsque cette option n'est pas sélectionnée, l'apparence par défaut des champs Text dans les formulaires est identique à celle des champs Alpha : hauteur d'une ligne, sans barre de défilement ; un retour chariot déplace le curseur vers le champ suivant du formulaire.

Vous pouvez modifier à tout moment l'apparence par défaut du champ avec l'éditeur de Formulaires.

### Autoriser une liste de choix

Utilisez l'attribut Autoriser une liste de choix pour afficher une liste de choix lors de la saisie dans le champ. Vous devez d'abord créer cette liste avec l'éditeur de Listes (voir Listes).

Cet attribut permet d'uniformiser les saisies et d'éviter les erreurs de frappe. Une liste de choix est utile pour un champ possédant un nombre limité de valeurs valides ou courantes. Elle n'empêche pas nécessairement l'utilisateur de saisir une valeur qui ne figure pas dans la liste.

Vous pouvez également associer une liste de choix à un champ dans un formulaire particulier. Toutefois, si la liste est attribuée uniquement dans un formulaire, elle n'apparaît pas dans les autres éditeurs et boîtes de dialogue, comme l'éditeur de Requêtes. Pour plus d'informations, consultez la section Contrôles et assistance à la saisie des données.

Note : il est également possible de définir au niveau du formulaire des listes de choix de valeurs obligatoires et exclues.

Lorsque vous sélectionnez l'option Autoriser une liste de choix, le menu déroulant associé est activé. Vous pouvez alors sélectionner une liste existante à attribuer au champ ou cliquer sur [...] pour ouvrir directement l'éditeur de Listes (voir Listes).

### Info-bulle

Vous pouvez fournir des informations supplémentaires sur un champ en lui ajoutant une info-bulle. Le texte saisi dans la zone Infos-bulles apparaît à côté du champ lorsque l'utilisateur place le pointeur dessus dans un formulaire qui contient ce champ. Les infos-bulles s'affichent sur toutes les plateformes.

Lorsque l'utilisateur place le pointeur de la souris sur le champ, l'info-bulle apparaît en dessous, comme illustré ci-dessous :

Note : les infos-bulles peuvent être activées ou désactivées globalement pour l'application avec le sélecteur Tips enabled de la commande SET DATABASE PARAMETER.

Vous pouvez également associer des messages d'aide aux champs de deux autres manières :

- au niveau de l'éditeur de formulaires ; dans ce cas, l'info-bulle du champ n'apparaît pas dans les autres formulaires. Pour plus d'informations, consultez la section Messages d'aide ;
- avec la commande OBJECT SET HELP TIP, pour le process courant.

### Commentaires

La zone Commentaires de la palette Inspecteur permet de stocker des informations supplémentaires sur le champ. Ces commentaires sont accessibles à tous les développeurs. Chaque table et chaque relation possède également sa propre zone de commentaires.

### SQL

La zone SQL de la palette Inspecteur fournit des informations utiles sur le champ du point de vue de son utilisation avec le langage SQL.

Elle indique notamment si le nom du champ respecte les règles de dénomination SQL (par exemple, contrairement à 4D, SQL n'autorise pas les espaces dans les noms de champs).

Note : SQL définit également une liste de mots réservés, comprenant des fonctions et des mots-clés SQL. Vous pouvez consulter ces mots réservés dans l'éditeur de Méthodes.

Pour les champs, la zone d'informations SQL indique également leurs attributs SQL (type et propriétés).
