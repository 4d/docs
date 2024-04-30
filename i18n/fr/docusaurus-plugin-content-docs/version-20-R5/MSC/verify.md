---
id: verify
title: Page Vérification
sidebar_label: Page Vérification
---

Cette page permet de vérifier l’intégrité des données et de la structure. La vérification peut porter sur les enregistrements et/ou les index ainsi que sur les objets du développement (méthodes, formulaires...).
La page effectue uniquement une vérification des objets. If errors are found and repairs are needed, you will be advised to use the [Repair page](repair.md).

## Actions

La page comporte quatre boutons d’action permettant un accès direct aux fonctions de vérification.

> Lorsque la base est chiffrée, la cohérence des données chiffrées est vérifiée. Si aucune clé de données valide n'a été fournie, une boîte de dialogue s'affiche pour vous demander de saisir une phrase secrète ou la clé des données.

- **Verify the records and the indexes:** Starts the total data verification procedure.
- **Verify the records only**: Starts the verification procedure for records only (indexes are not verified).
- **Verify the indexes only**: Starts the verification procedure for indexes only (records are not verified).

> La vérification des enregistrements et des index peut également être effectuée en mode détaillé, table par table (cf. paragraphe “Détails” ci-dessous).

## Voir le compte rendu

Regardless of the verification requested, 4D generates a log file in the `Logs` folder of the application. Ce fichier liste l’ensemble des vérifications effectuées et signale chaque erreur rencontrée, le cas échéant ([OK] est affiché lorsque la vérification est correcte). It is created in XML format and is named: _ApplicationName__Verify_Log__yyyy-mm-dd hh-mm-ss_.xml where:

- _ApplicationName_ is the name of the project file without any extension, for example "Invoices",
- _yyyy-mm-dd hh-mm-ss_ is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.

## Détails

The **Table list** button displays a detailed page that can be used to view and select the actual records and indexes to be checked:

![](../assets/en/MSC/MSC_Verify.png)

La désignation des éléments à vérifier permet notamment de gagner du temps lors de la vérification.

La liste principale affiche toutes les tables de la base. Pour chaque table, vous pouvez limiter la vérification aux enregistrements et/ou à chaque index. Cliquez sur l’icône en forme de triangle pour déployer le contenu d’une table ou les index d’un champ et sélectionnez/ désélectionnez les cases à cocher en fonction de vos souhaits. Par défaut, tout est sélectionné. You can also use the **Select all**, **Deselect all**, **All records** and **All indexes** shortcut buttons.

Pour chaque ligne de table, la colonne “Action” résume les opérations à effectuer. Lorsque la table est déployée, les lignes “Enregistrements” et “Champs indexés” indiquent le nombre d’éléments concernés.

La colonne "Etat" affiche le statut de la vérification de chaque élément à l’aide de symboles :

| ![](../assets/en/MSC/MSC_OK.png)  | Vérification effectuée, pas de problème      |
| --------------------------------- | -------------------------------------------- |
| ![](../assets/en/MSC/MSC_KO2.png) | Vérification effectuée, problèmes rencontrés |
| ![](../assets/en/MSC/MSC_KO3.png) | Vérification partielle effectuée             |
| ![](../assets/en/MSC/MSC_KO.png)  | Vérification non effectuée                   |

Click on **Verify** to begin the verification or on **Standard** to go back to the standard page.

The **Open log file** button can be used to display the log file in the default browser of the machine (see [Open log file](#open-log-file) above).

> La page standard ne tient pas compte des modifications effectuées dans la page détaillée : lorsque vous cliquez sur un bouton de vérification dans la page standard, tous les éléments sont vérifiés. En revanche, les paramétrages effectués dans la page détaillée sont conservés d’une session à l’autre.
