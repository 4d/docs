---
id: verify
title: Page Vérification
sidebar_label: Page Vérification
---

Cette page permet de vérifier l’intégrité des données et de la structure. La vérification peut porter sur les enregistrements et/ou les index ainsi que sur les objets du développement (méthodes, formulaires...).
La page effectue uniquement une vérification des objets. Si des erreurs sont trouvées et des réparations requises, il vous sera nécessaire d’utiliser la [Page Réparation](repair.md).

## Actions

La page comporte quatre boutons d’action permettant un accès direct aux fonctions de vérification.

> Lorsque la base est chiffrée, la cohérence des données chiffrées est vérifiée. Si aucune clé de données valide n'a été fournie, une boîte de dialogue s'affiche pour vous demander de saisir une phrase secrète ou la clé des données.

- **Vérifier les enregistrements et les index :** lance la procédure de vérification globale des données.
- **Vérifier uniquement les enregistrements :** lance la procédure de vérification des enregistrements uniquement (les index ne sont pas vérifiés).
- **Vérifier uniquement les index :** lance la procédure de vérification des index uniquement (les enregistrements ne sont pas vérifiés).

> La vérification des enregistrements et des index peut également être effectuée en mode détaillé, table par table (cf. paragraphe “Détails” ci-dessous).

## Voir le compte rendu

Quelle que soit la vérification demandée, 4D génère un fichier de compte-rendu dans le dossier `Logs` de l'application. Ce fichier liste l’ensemble des vérifications effectuées et signale chaque erreur rencontrée, le cas échéant ([OK] est affiché lorsque la vérification est correcte). Il est créé au format XML et est nommé : *ApplicationName**Verify_Log**yyyy-mm-dd hh-mm-ss*.xml où :

- *ApplicationName* est le nom du fichier de structure sans extension, par exemple "Factures",
- *aaaa-mm-jj hh-mm-ss* est l'horodatage du fichier, basé sur la date et l'heure système locales au moment du lancement de l'opération de vérification, par exemple "2019-02-11 15-20-45".

Lorsque vous cliquez sur le bouton **Voir le compte rendu**, 4D affiche le fichier de compte-rendu le plus récent dans le navigateur par défaut de l’ordinateur.

## Détails

Le bouton **Liste des tables** provoque l’affichage d’une page détaillée permettant de visualiser et de sélectionner les enregistrements et les index à vérifier :

![](../assets/en/MSC/MSC_Verify.png)

La désignation des éléments à vérifier permet notamment de gagner du temps lors de la vérification.

La liste principale affiche toutes les tables de la base. Pour chaque table, vous pouvez limiter la vérification aux enregistrements et/ou à chaque index. Cliquez sur l’icône en forme de triangle pour déployer le contenu d’une table ou les index d’un champ et sélectionnez/ désélectionnez les cases à cocher en fonction de vos souhaits. Par défaut, tout est sélectionné. Vous pouvez également utiliser les boutons raccourcis **Tout sélectionner**, **Tout désélectionner**, **Tous les enregistrements** et **Tous les index**.

Pour chaque ligne de table, la colonne “Action” résume les opérations à effectuer. Lorsque la table est déployée, les lignes “Enregistrements” et “Champs indexés” indiquent le nombre d’éléments concernés.

La colonne "Etat" affiche le statut de la vérification de chaque élément à l’aide de symboles :

| ![](../assets/en/MSC/MSC_OK.png)  | Vérification effectuée, pas de problème      |
| --------------------------------- | -------------------------------------------- |
| ![](../assets/en/MSC/MSC_KO2.png) | Vérification effectuée, problèmes rencontrés |
| ![](../assets/en/MSC/MSC_KO3.png) | Vérification partielle effectuée             |
| ![](../assets/en/MSC/MSC_KO.png)  | Vérification non effectuée                   |

Cliquez sur le bouton **Vérifier** pour lancer la vérification ou sur le bouton **Standard** pour retourner à la page standard.

Le bouton **Voir le compte rendu** permet d’afficher le fichier de compte-rendu dans le navigateur par défaut de l’ordinateur (cf. paragraphe [Voir le compte rendu](#open-log-file) ci-dessus).

> La page standard ne tient pas compte des modifications effectuées dans la page détaillée : lorsque vous cliquez sur un bouton de vérification dans la page standard, tous les éléments sont vérifiés. En revanche, les paramétrages effectués dans la page détaillée sont conservés d’une session à l’autre.
