---
id: compact
title: Page compactage
sidebar_label: Page compactage
---

Cette page permet d’accéder aux fonctions de compactage du fichier de données et de structure.

## Pourquoi compacter ?

Le compactage d'un fichier répond à deux types de besoins :

- **Reducing size and optimization of files**: Files may contain unused spaces (“holes”). En effet, lorsque vous supprimez des enregistrements, des formulaires, etc., l’emplacement qu’ils occupaient précédemment dans le fichier devient vacant. 4D réutilise ces emplacements vides lorsque c’est possible, mais la taille des données étant variable, les suppressions ou modifications successives génèrent inévitablement des espaces inutilisables pour le programme. Il en va de même lorsqu’une grande quantité de données vient d’être supprimée : les emplacements vides restent inaffectés dans le fichier.
  Le rapport entre la taille du fichier de données et l’espace réellement utilisé pour les données est le taux d’occupation des données. Un taux trop faible peut entraîner, outre un gaspillage de place, une dégradation des performances de la base. La fonction de compactage permet de réorganiser et d’optimiser le stockage des données afin de faire disparaître les “trous”.
  Les zones “Informations” résument les données relatives à la fragmentation des fichiers et suggèrent les opérations à effectuer. The [Data](information.md#data) tab on the “Information” page of the MSC indicates the fragmentation of the current data file.

- **Complete updating of data** by applying the current formatting set in the structure file. Ce principe est utile lorsque les données d'une même table ont été stockées dans différents formats, par exemple après un changement dans la structure de la base.

> Le compactage n’est disponible qu’en mode maintenance. Si vous tentez d’effectuer cette opération en mode standard, une boîte de dialogue d’alerte vous prévient que l'application va être fermée puis relancée en mode maintenance. You can compact a data file that is not opened by the application (see [Compact records and indexes](#compact-records-and-indexes) below).

## Le compactage standard

Pour démarrer directement le compactage du fichier de données ou de structure, cliquez sur le bouton correspondant dans la fenêtre du CSM.

![](../assets/en/MSC/MSC_compact.png)

> Le compactage entraînant la duplication du fichier d’origine, le bouton est désactivé si la place sur le disque contenant le fichier est insuffisante.

Cette opération défragmente le fichier principal ainsi que les éventuels fichiers d’index. 4D copies the original files and puts them in a folder named **Replaced Files (Compacting)**, which is created next to the original file. Si vous effectuez plusieurs compactages, un nouveau dossier est créé à chaque fois. Il est nommé “Replaced Files (Compacting)_1”, “Replaced Files (Compacting)_2”, etc. Vous pouvez modifier le dossier dans lequel les fichiers d’origine sont sauvegardés via le mode avancé.

A l’issue de l’opération, les fichiers défragmentés remplacent automatiquement les fichiers d’origine. L'application est immédiatement opérationnelle sans aucune autre manipulation.

> Lorsque la base est chiffrée, le compactage comprend le chiffrement et le déchiffrement et requiert ainsi la clé de chiffrement des données courante. Si aucune clé de chiffrement valide n'a encore été fournie, une boîte de dialogue s'affiche pour vous demander de saisir la phrase secrète ou la clé des données.

**Warning:** Each compacting operation involves the duplication of the original file which increases the size of the application folder. Il est important de tenir compte de ce mécanisme (notamment sous macOS où les applications 4D apparaissent sous forme de packages) pour que l’application ne grossisse pas de façon excessive. Une intervention manuelle à l’intérieur du package peut être utile afin de supprimer les copies des fichiers d’origine.

## Voir le compte rendu

Une fois le compactage terminé, 4D génère un fichier de compte-rendu dans le dossier Logs du projet. Ce fichier liste l’ensemble des opérations qui ont été menées. Il est créé au format xml et est nommé _ApplicationName\*\*_Compact_Log_yyyy-mm-dd hh-mm-ss.xml_" où :

- _ApplicationName_ is the name of the project file without any extension, for example "Invoices",
- _yyyy-mm-dd hh-mm-ss_ is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.

## Mode avancé

The Compact page contains an **Advanced>** button, which can be used to access an options page for compacting data file.

### Compacter les enregistrements et les index

The **Compact records and indexes** area displays the pathname of the current data file as well as a **[...]** button that can be used to specify another data file. Lorsque vous cliquez sur ce bouton, une boîte de dialogue standard d’ouverture de documents s’affiche, vous permettant de désigner le fichier de données à compacter. Vous devez sélectionner un fichier de données compatible avec le fichier de structure ouvert. Une fois la boîte de dialogue validée, le chemin d’accès du fichier à compacter est indiqué dans la fenêtre.

The second **[...]** button can be used to specify another location for the original files to be saved before the compacting operation. Cette option permet notamment de compacter des fichiers volumineux en utilisant différents disques.

### Forcer la mise à jour des enregistrements

Lorsque cette option est cochée, 4D réécrit chaque enregistrement de chaque table lors de l’opération de compactage, en fonction de sa description en structure. Lorsque l’option n’est pas cochée, 4D réorganise uniquement le stockage des données sur le disque. Cette option est utile dans les cas suivants :

- Lorsque des modifications de types de champs ont été apportées à la structure d’une application après que des données ont été saisies. Par exemple, vous pouvez avoir changé le type d’un champ Entier long en Réel. 4D autorise même des modifications entre des types très différents (avec risques de pertes de données), par exemple un champ Réel peut être changé en Texte et inversement.
  Dans ce cas, 4D ne convertit pas rétroactivement les données déjà saisies, elles ne sont converties que si les enregistrements sont chargés puis sauvegardés. L’option permet de forcer la conversion de toutes les données.

- Lorsqu’une option de stockage externe des données de type Texte, Image ou BLOB a été modifiée après que des données aient été saisies. Ce cas peut notamment se produire après conversion d’une base en version 4D antérieure à la v13. Comme pour le cas du retypage ci-dessus, 4D ne modifie pas rétroactivement les données déjà saisies. Pour cela, vous pouvez forcer la mise à jour des enregistrements afin d’appliquer le nouveau mode de stockage aux enregistrements déjà saisis.

- Lorsque des champs ou des tables ont été supprimé(e)s. Dans ce cas, le compactage avec mise à jour des enregistrements permet de récupérer la place de ces données supprimées et donc de réduire la taille du fichier.

> La sélection de cette option entraîne la mise à jour de tous les index.

### Compacter la table d’adresses

(option accessible uniquement lorsque la précédente est cochée)

Cette option provoque la reconstruction complète de la table d’adresses des enregistrements au moment du compactage. Cette opération permet d’optimiser la taille de la table d’adresses. Elle est principalement utile dans les bases de données où de très nombreux enregistrements ont été créés puis supprimés. Dans les autres cas, l’optimisation ne sera pas déterminante.

Note that this option substantially slows compacting and invalidates any sets saved using the `SAVE SET` command. Il est d’ailleurs fortement recommandé dans ce cas de supprimer les ensembles sauvegardés car leur utilisation peut conduire à des sélections de données erronées.

:::note Notes

- Le compactage tient compte des enregistrements des tables placées dans la corbeille. La présence d’un grand nombre d’enregistrements dans la corbeille peut constituer un facteur de ralentissement supplémentaire pour l’opération.
- L'utilisation de cette option rend la table d'adresses, et donc la base de données, incompatibles avec le fichier d'historique courant (s'il en existe un). Il sera automatiquement sauvegardé et un nouveau fichier d'historique devra être créé au prochain lancement de l'application.
- You can decide if the address table needs to be compacted by comparing the total number of records and the address table size in the [Information](information.md) page of the MSC.
- The [`TRUNCATE TABLE`](https://doc.4d.com/4dv19R/help/command/en/page1051.html) command automatically resets the address table for the specified table.

:::
