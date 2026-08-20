---
id: current-selection
title: Sélection courante
slug: /Develop/current-selection
displayed_sidebar: docs
---


## Vue d'ensemble

Lorsque vous gérez des données, vous sélectionnez le groupe d'enregistrements avec lequel vous souhaitez travailler. Ce groupe d'enregistrements est appelé la **sélection courante**. La sélection courante peut ne contenir aucun, un, plusieurs ou tous les enregistrements d'une table. Chaque table et chaque process possède sa propre sélection courante d'enregistrements.

La **sélection courante** est un concept important dans 4D. Les opérations de gestion de données les plus courantes sur les [**enregistrements**](./records.md) sont effectuées dans la sélection courante. Ces opérations comprennent :

- le tri des enregistrements,
- l'affichage et la modification d'enregistrements individuels,
- la mise à jour d'un groupe d'enregistrements,
- l'impression d'un état,
- la génération d'étiquettes,
- la création de graphes de données,
- l'exportation d'enregistrements.

Autrement dit, la création d'une sélection courante dans une table est la première étape vers de nombreuses autres opérations de gestion de données.

La sélection courante d'enregistrements est toujours l'ensemble des enregistrements sélectionnés le plus récemment. Par exemple, vous pourriez disposer d'une base de données d'entreprise qui utilise une table Employés pour suivre les fiches des employés. Supposons que vous décidiez de rechercher les fiches de tous les ingénieurs de l'entreprise.
Lorsque cette recherche débute, la sélection courante peut contenir les fiches de tous les employés de l'entreprise — commerciaux, personnel de production, ingénieurs, et ainsi de suite. Une fois la recherche terminée, la sélection courante ne contient plus que les fiches des ingénieurs. Si vous imprimiez une liste d'enregistrements, cette liste ne contiendrait que les enregistrements de la sélection courante — dans ce cas, les fiches de tous les ingénieurs de l'entreprise. Si vous créiez un graphe des salaires des employés, votre graphe afficherait les salaires de tous les ingénieurs de l'entreprise.

La sélection courante reste identique jusqu'à ce que vous effectuiez une opération qui la modifie. Vous pouvez modifier la sélection courante en :

- sélectionnant tous les enregistrements,
- sélectionnant manuellement un sous-ensemble d'enregistrements,
- recherchant des enregistrements.

La barre de titre du formulaire de sortie vous indique combien d'enregistrements comporte la table courante et combien d'enregistrements de la table figurent dans la sélection courante. Dans un 4D distant, seul le nombre d'enregistrements de la sélection courante est affiché.

Chaque table d'une base de données possède sa propre sélection courante. Dans une base de données relationnelle, la modification de la sélection courante d'une table peut modifier les sélections courantes des tables liées. Par exemple, dans une base de données constituée des tables liées [Employés] et [Services], l'ouverture d'un formulaire entrée dans la table [Services] modifie la sélection courante de la table [Employés]. Autrement dit, les employés appartenant à ce service deviennent la nouvelle sélection courante de la table [Employés].

Si vous utilisez des [process](../Develop/processes.md) pour effectuer des tâches dans la base de données, il peut y avoir plusieurs sélections courantes simultanées par table. Chaque process se comporte comme un environnement 4D individuel, ce qui vous permet d'effectuer des tâches distinctes. Il peut être utile de disposer de plusieurs sélections courantes, en particulier lorsque vous comparez deux types de données ou plus, comme la facturation mensuelle de plusieurs régions commerciales différentes.

## Afficher tous les enregistrements

Lorsque vous utilisez un formulaire de sortie pour afficher des enregistrements, vous pouvez réinitialiser la sélection courante afin qu'elle contienne tous les enregistrements de la table courante. Cette opération peut être réalisée via l'[action standard `Select All`](../Desktop-legacy/standard-actions.md#selectall) ou la commande [`ALL RECORDS`](../commands/all-records).

Dans l'environnement de développement, vous pouvez utiliser la commande **Tout montrer** du menu **Enregistrements**. Tous les enregistrements de la table courante sont alors inclus dans la sélection courante. La commande **Tout montrer** est désactivée lorsque vous utilisez un formulaire entrée.

## Créer un sous-ensemble d'enregistrements

Vous pouvez définir une nouvelle sélection courante dans un formulaire de sortie en « marquant » manuellement certains enregistrements, puis en les définissant comme nouvelle sélection courante. C'est ce qu'on appelle la création d'un sous-ensemble. Dans l'environnement de développement, il existe une commande **Montrer sous-ensemble** spécifique dans le menu **Enregistrements**.

Dans vos développements, vous pouvez gérer les enregistrements marqués par les utilisateurs à l'aide des [Ensembles](./sets.md).

Vous parcourez et manipulez les sélections courantes via les commandes du thème [Sélection](../commands/theme/Selection).
