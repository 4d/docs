---
id: compact
title: Page compactage
sidebar_label: Page compactage
---

Cette page permet d’accéder aux fonctions de compactage du fichier de données et de structure.

## Pourquoi compacter ?

Le compactage d'un fichier répond à deux types de besoins :

- **Réduction de taille et optimisation des fichiers** : les fichiers peuvent comporter des emplacements inutilisés (des “trous”). En effet, lorsque vous supprimez des enregistrements, des formulaires, etc., l’emplacement qu’ils occupaient précédemment dans le fichier devient vacant. 4D réutilise ces emplacements vides lorsque c’est possible, mais la taille des données étant variable, les suppressions ou modifications successives génèrent inévitablement des espaces inutilisables pour le programme. Il en va de même lorsqu’une grande quantité de données vient d’être supprimée : les emplacements vides restent inaffectés dans le fichier. Le rapport entre la taille du fichier de données et l’espace réellement utilisé pour les données est le taux d’occupation des données. Un taux trop faible peut entraîner, outre un gaspillage de place, une dégradation des performances de la base. La fonction de compactage permet de réorganiser et d’optimiser le stockage des données afin de faire disparaître les “trous”. Les zones “Informations” résument les données relatives à la fragmentation des fichiers et suggèrent les opérations à effectuer. Les onglets de la page [Informations](information.md#data) du CSM indiquent la fragmentation courante des fichiers de la base.

- **Réenregistrement intégral des données** en appliquant le formatage courant défini dans le fichier de structure. Ce principe est utile lorsque les données d'une même table ont été stockées dans différents formats, par exemple après un changement dans la structure de la base.
> Le compactage n’est disponible qu’en mode maintenance. Si vous tentez d’effectuer cette opération en mode standard, une boîte de dialogue d’alerte vous prévient que l'application va être fermée puis relancée en mode maintenance. Il est possible de compacter un fichier de données non ouvert par l'application (cf. paragraphe [Compacter les enregistrements et les index](#compact-records-and-indexes) ci-dessous).

## Le compactage standard

Pour démarrer directement le compactage du fichier de données ou de structure, cliquez sur le bouton correspondant dans la fenêtre du CSM.

![](../assets/en/MSC/MSC_compact.png)
> Le compactage entraînant la duplication du fichier d’origine, le bouton est désactivé si la place sur le disque contenant le fichier est insuffisante.

Cette opération défragmente le fichier principal ainsi que les éventuels fichiers d’index. 4D effectue une copie des fichiers d’origine et les place dans un dossier nommé **Replaced Files (Compacting)**, créé à côté du fichier d’origine. Si vous effectuez plusieurs compactages, un nouveau dossier est créé à chaque fois. Il est nommé “Replaced Files (Compacting)_1”, “Replaced Files (Compacting)_2”, etc. Vous pouvez modifier le dossier dans lequel les fichiers d’origine sont sauvegardés via le mode avancé.

A l’issue de l’opération, les fichiers défragmentés remplacent automatiquement les fichiers d’origine. L'application est immédiatement opérationnelle sans aucune autre manipulation.
> Lorsque la base est chiffrée, le compactage comprend le chiffrement et le déchiffrement et requiert ainsi la clé de chiffrement des données courante. Si aucune clé de chiffrement valide n'a encore été fournie, une boîte de dialogue s'affiche pour vous demander de saisir la phrase secrète ou la clé des données.

**Attention :** Chaque compactage entraîne la duplication du fichier d’origine et donc l’augmentation de la taille du dossier de l’application. Il est important de tenir compte de ce mécanisme (notamment sous macOS où les applications 4D apparaissent sous forme de packages) pour que l’application ne grossisse pas de façon excessive. Une intervention manuelle à l’intérieur du package peut être utile afin de supprimer les copies des fichiers d’origine.

## Voir le compte rendu

Une fois le compactage terminé, 4D génère un fichier de compte-rendu dans le dossier Logs du projet. Ce fichier liste l’ensemble des opérations qui ont été menées. Il est créé au format xml et est nommé *ApplicationName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml*" où :

- *ApplicationName* est le nom du fichier de structure sans extension, par exemple "Factures",
- *aaaa-mm-jj hh-mm-ss* est l'horodatage du fichier, basé sur la date et l'heure système locales au moment du lancement de l'opération de vérification, par exemple "2019-02-11 15-20-45".

Lorsque vous cliquez sur le bouton **Voir le compte rendu**, 4D affiche le fichier de compte-rendu le plus récent dans le navigateur par défaut de l’ordinateur.


## Mode avancé

La page Compactage comporte un bouton **Avancé**, permettant d’accéder à une page d’options pour le compactage des fichiers de données et de structure.

### Compacter les enregistrements et les index

La zone **Compacter les enregistrements et les index** affiche le chemin d’accès du fichier de données courant ainsi qu’un bouton **[...]** permettant de désigner un autre fichier de données. Lorsque vous cliquez sur ce bouton, une boîte de dialogue standard d’ouverture de documents s’affiche, vous permettant de désigner le fichier de données à compacter. Vous devez sélectionner un fichier de données compatible avec le fichier de structure ouvert. Une fois la boîte de dialogue validée, le chemin d’accès du fichier à compacter est indiqué dans la fenêtre.

Le second bouton **[...]** permet de désigner un autre emplacement pour les sauvegardes des fichiers originaux effectuées avant compactage. Cette option permet notamment de compacter des fichiers volumineux en utilisant différents disques.

### Forcer la mise à jour des enregistrements

Lorsque cette option est cochée, 4D réécrit chaque enregistrement de chaque table lors de l’opération de compactage, en fonction de sa description en structure. Lorsque l’option n’est pas cochée, 4D réorganise uniquement le stockage des données sur le disque. Cette option est utile dans les cas suivants :

- Lorsque des modifications de types de champs ont été apportées à la structure d’une application après que des données ont été saisies. Par exemple, vous pouvez avoir changé le type d’un champ Entier long en Réel. 4D autorise même des modifications entre des types très différents (avec risques de pertes de données), par exemple un champ Réel peut être changé en Texte et inversement. Dans ce cas, 4D ne convertit pas rétroactivement les données déjà saisies, elles ne sont converties que si les enregistrements sont chargés puis sauvegardés. L’option permet de forcer la conversion de toutes les données.

- Lorsqu’une option de stockage externe des données de type Texte, Image ou BLOB a été modifiée après que des données aient été saisies. Ce cas peut notamment se produire après conversion d’une base en version 4D antérieure à la v13. Comme pour le cas du retypage ci-dessus, 4D ne modifie pas rétroactivement les données déjà saisies. Pour cela, vous pouvez forcer la mise à jour des enregistrements afin d’appliquer le nouveau mode de stockage aux enregistrements déjà saisis.

- Lorsque des champs ou des tables ont été supprimé(e)s. Dans ce cas, le compactage avec mise à jour des enregistrements permet de récupérer la place de ces données supprimées et donc de réduire la taille du fichier.
> La sélection de cette option entraîne la mise à jour de tous les index.

### Compacter la table d’adresses

(option accessible uniquement lorsque la précédente est cochée)

Cette option provoque la reconstruction complète de la table d’adresses des enregistrements au moment du compactage. Cette opération permet d’optimiser la taille de la table d’adresses. Elle est principalement utile dans les bases de données où de très nombreux enregistrements ont été créés puis supprimés. Dans les autres cas, l’optimisation ne sera pas déterminante.

A noter que cette option ralentit le compactage de façon conséquente et qu’elle rend invalides les ensembles sauvegardés via la commande `SAVE SET`. Il est d’ailleurs fortement recommandé dans ce cas de supprimer les ensembles sauvegardés car leur utilisation peut conduire à des sélections de données erronées.

:::note Notes

- Le compactage tient compte des enregistrements des tables placées dans la corbeille. La présence d’un grand nombre d’enregistrements dans la corbeille peut constituer un facteur de ralentissement supplémentaire pour l’opération.
- L'utilisation de cette option rend la table d'adresses, et donc la base de données, incompatibles avec le fichier d'historique courant (s'il en existe un). Il sera automatiquement sauvegardé et un nouveau fichier d'historique devra être créé au prochain lancement de l'application.
- Vous pouvez déterminer si la table d'adresses a besoin d'être compactée en comparant sa taille avec le nombre total d'enregistrements dans la Page [Informations](information.md) du CSM.
- La commande [`TRUNCATE TABLE`](https://doc.4d.com/4dv19R/help/command/en/page1051.html) réinitialise automatiquement la table d'adresses pour la table spécifiée.

:::
