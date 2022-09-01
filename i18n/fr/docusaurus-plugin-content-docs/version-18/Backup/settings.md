---
id: settings
title: Préférences de sauvegarde
---

Les paramètres de sauvegarde sont définis sur trois pages dans la boîte de dialogue des Propriétés de la base. Vous pouvez définir :

- la périodicité des sauvegardes automatiques
- les fichiers à inclure dans chaque sauvegarde
- les fonctionnalités avancées permettant d'exécuter des tâches automatiques

> Les propriétés définies dans cette boîte de dialogue sont écrits dans le fichier *Backup.4DSettings*, stocké dans le [dossier Settings](Project/architecture.md#settings-folder).

## Périodicité

Vous pouvez automatiser les sauvegardes de vos bases ouvertes avec 4D ou 4D Server (même lorsqu’aucun poste distant n’est connecté). Le principe consiste à définir une fréquence de sauvegarde (en heures, jours, semaines ou mois) ; à chaque échéance, 4D déclenche automatiquement une sauvegarde en tenant compte des paramètres de sauvegarde courants.

Si l’application n’était pas lancée au moment théorique de la sauvegarde, 4D considère au lancement suivant que la sauvegarde a échoué et applique les paramétrages adéquats, définis dans les Propriétés de la base (cf. paragraphe [En cas de problème au cours de la sauvegarde](backup.md#handling-backup-issues)).

Les paramètres des sauvegardes périodiques sont définis dans la Page **Sauvegarde/Périodicité** des Propriétés de la base :

![](../assets/en/Backup/backup02.png)

Les options regroupées dans cet onglet permettent de définir et de paramétrer des sauvegardes périodiques automatiques de la base. Vous pouvez choisir un paramétrage standard rapide ou personnaliser entièrement la périodicité. Diverses options apparaissent en fonction de la valeur définie dans le menu **Sauvegarde automatique** :

- **Jamais** : la fonction de sauvegarde périodique est inactivée.
- **Toutes les heures** : programme une sauvegarde automatique par heure, à partir de la prochaine heure.
- **Tous les jours** : programme une sauvegarde automatique par jour. Une zone de saisie vous permet d'indiquer l’heure à laquelle la sauvegarde doit être déclenchée.
- **Toutes les semaines** : programme une sauvegarde automatique par semaine. Deux zones de saisie supplémentaires vous permettent d'indiquer le jour et l'heure de la sauvegarde.
- **Tous les mois** : programme une sauvegarde automatique par mois. Deux zones de saisie supplémentaires vous permettent d'indiquer le jour du mois et l'heure de la sauvegarde.
- **Personnalisée** : permet de configurer des sauvegardes périodiques "sur-mesure". Lorsque vous sélectionnez cette, plusieurs zones de saisie supplémentaires apparaissent :
  - **Toutes les N heure(s)** : permet de programmer des sauvegardes sur une base horaire. Vous pouvez saisir une valeur comprise entre 1 et 24.
  - **Tous les N jour(s) à N** : permet de programmer des sauvegardes sur une base journalière. Saisissez par exemple 1 si vous souhaitez une sauvegarde quotidienne. Lorsque vous cochez cette option, vous devez indiquer l’heure à laquelle la sauvegarde doit être déclenchée.
  - **Toutes les N semaine(s), jour à N** : permet de programmer des sauvegardes sur une base hebdomadaire. Saisissez 1 si vous souhaitez une sauvegarde hebdomadaire. Lorsque vous cochez cette option, vous devez indiquer le ou les jour(s) de la semaine et l’heure à laquelle chaque sauvegarde doit être déclenchée. Vous pouvez cocher un ou plusieurs jour(s) de la semaine. Par exemple, vous pouvez utiliser cette option pour définir deux sauvegardes hebdomadaires : une le mercredi et une le vendredi.
  - **Tous les N mois, Ne jour à N** : permet de programmer des sauvegardes sur une base mensuelle. Saisissez 1 si vous souhaitez une sauvegarde mensuelle. Lorsque vous cochez cette option, vous devez indiquer le jour de chaque mois auquel la sauvegarde doit être déclenchée, ainsi que l’heure de déclenchement.

> Les basculements entre l'heure standard et l'heure d'été peuvent affecter temporairement le planificateur automatique et déclencher la sauvegarde suivante avec un décalage d'une heure. Cela ne se produit qu'une seule fois et les sauvegardes ultérieures sont lancées à l'heure prévue.

## Configuration

La Page Sauvegarde/Configuration des Propriétés de la base permet de désigner les fichiers à sauvegarder, l’emplacement des fichiers de sauvegarde et le fichier d’historique. Ces paramètres sont spécifiques à chaque base de données ouverte par l’application 4D.

![](../assets/en/Backup/backup03.png)

> **4D Server** : Ces paramètres peuvent être définis depuis le poste 4D Server uniquement.

### Contenu

Cette zone permet de désigner les fichiers et/ou dossiers à copier lors de la prochaine sauvegarde.

- **Fichier de données** : fichier de données de la base. Lorsque cette option est cochée, le fichier d’historique courant de la base, s’il existe, est sauvegardé en même temps que les données.
- **Fichier de structure** : fichiers et dossiers de la base. Dans le cas de bases compilées, cette option permet de sauvegarder le fichier .4dz.
- **Fichier de structure utilisateur (uniquement pour les bases binaires)** : *fonctionnalité obsolète*
- **Fichiers joints** : cette zone permet de désigner un ensemble de fichiers et/ou de dossiers à sauvegarder en même temps que la base. Ces fichiers peuvent être de tout type (documents ou modèles de plug-ins, étiquettes, états, images, etc.). Vous pouvez désigner soit des fichiers individuels, soit des dossiers dont le contenu sera intégralement sauvegardé. Chaque élément joint est listé avec son chemin d’accès complet dans la zone “Fichiers joints”.
  - **Supprimer** : retire de la liste des fichiers joints l’élément sélectionné.
  - **Ajouter dossier...** : affiche une boîte de dialogue permettant de sélectionner un dossier à joindre à la sauvegarde. En cas de restitution, le dossier sera récupéré avec sa structure interne. Vous pouvez désigner tout dossier ou volume connecté au poste, à l’exception du dossier contenant les fichiers de la base.
  - **Ajouter fichier...** : affiche une boîte de dialogue permettant de sélectionner un fichier à joindre à la sauvegarde.

### Emplacement des fichiers de sauvegarde

Cette zone permet de visualiser et de modifier l’emplacement auquel seront stockés les fichiers de sauvegarde ainsi que les fichiers de sauvegarde du fichier d’historique (le cas échéant).

Pour visualiser l’emplacement des fichiers, cliquez dans la zone afin d’afficher leur chemin d’accès sous forme de pop up menu.

Pour modifier l’emplacement auquel ces fichiers devront être enregistrés, cliquez sur le bouton **[...]**. Une boîte de dialogue de sélection de dossier apparaît, vous permettant de désigner un dossier ou un volume devant accueillir les sauvegardes. Les zones “Espace utilisé” et “Espace libre” sont automatiquement mises à jour et indiquent l’espace disque disponible sur le volume du dossier sélectionné.

### Gestion du fichier d'historique

L’option **Utiliser le fichier d’historique** indique, lorsqu’elle est cochée, que la base exploite un fichier d’historique. Son chemin d’accès est précisé au-dessous de l’option. Lorsque cette option est cochée, il n’est pas possible d’ouvrir la base sans fichier d’historique.

Par défaut, toute base créée avec 4D utilise un fichier d’historique (option cochée dans la **Page Général** des **Préférences** de 4D). Le fichier d’historique est nommé par défaut *data.journal* et est placé dans le dossier Data.

> L’activation d’un nouveau fichier d’historique nécessite que les données de la base soient auparavant sauvegardées. Lorsque vous cochez cette option, un message vous informe qu’une sauvegarde est nécessaire. La création du fichier d’historique est différée et ne sera effective qu’après la prochaine sauvegarde de la base.

## Sauvegarde et restitution

La modification des options de sauvegarde et de restauration est facultative. Leurs valeurs par défaut correspondent à une utilisation standard de la fonction.

![](../assets/en/Backup/backup04.png)

### Paramètres généraux

- **Conserver uniquement les N derniers fichiers de sauvegarde** : ce paramètre permet d’activer et de configurer le mécanisme de suppression des fichiers de sauvegarde les plus anciens, afin d’éviter tout risque de saturation du volume. Le principe de fonctionnement est le suivant : après avoir terminé la sauvegarde courante, 4D efface l’archive la plus ancienne si celle-ci est localisée au même endroit que l’archive à sauvegarder et porte le même nom (vous pouvez, pour des raisons d’économie de place, demander que l’archive la plus ancienne soit effacée avant la sauvegarde). Si, par exemple, le nombre de jeux est fixé à 3, les trois premières sauvegardes créent successivement les archives MaBase-0001, MaBase-0002 et MaBase-0003. Lors de la quatrième sauvegarde, l’archive MaBase-0004 est créée alors que l’archive MaBase-0001 est supprimée. Par défaut, le mécanisme de suppression des jeux est activé et 4D conserve 3 jeux de sauvegarde. Pour ne pas activer le mécanisme, désélectionnez l’option.
> Ce paramètre concerne à la fois les sauvegardes de la base et les sauvegardes de l’historique.

- **Sauvegarder uniquement si le fichier de données a été modifié** : lorsque cette option est cochée, 4D déclenche les sauvegardes périodiques uniquement si des données ont été ajoutées, modifiées ou supprimées dans la base depuis la dernière sauvegarde. Dans le cas contraire, la sauvegarde prévue est annulée et reportée à l’échéance suivante. Aucune erreur n’est générée ; le report est toutefois indiqué dans le Journal des sauvegardes. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. A noter qu'elle ne prend pas en compte les éventuelles modifications apportées au fichier de structure ou aux fichiers joints.

> Ce paramètre concerne à la fois les sauvegardes de la base et les sauvegardes de l’historique.

- **Effacer la sauvegarde la plus ancienne avant sauvegarde / après sauvegarde** : cette option n’est utilisée que si l’option “Conserver uniquement les N derniers fichiers de sauvegarde” est cochée. Elle vous permet de spécifier si 4D doit commencer par effacer l’archive la plus ancienne avant d’effectuer une sauvegarde (option **avant**) ou si l’effacement doit être effectué après la sauvegarde (option **après**). Pour que ce mécanisme fonctionne, l’archive la plus ancienne ne doit pas avoir été renommée ou déplacée.

- **Si la sauvegarde échoue** : cette option permet de définir le mécanisme de prise en charge des échecs des sauvegardes (sauvegarde impossible). Lorsqu’une sauvegarde est impossible, 4D permet d’effectuer une nouvelle tentative.
  - **Réessayer à la nouvelle date et heure programmée** : cette option n’a de sens que dans le cadre de sauvegardes automatiques périodiques. Elle revient à annuler la sauvegarde ayant échoué. Une erreur est générée.
  - **Réessayer dans N seconde(s), minute(s) ou heure(s)** : lorsque cette option est cochée, une nouvelle tentative de sauvegarde est effectuée à l’issue du délai défini. Ce mécanisme permet d’anticiper certaines circonstances bloquant la sauvegarde. Vous pouvez fixer un délai en secondes, minutes ou heures à l’aide du menu correspondant. Si la nouvelle tentative échoue également, une erreur est générée et l’échec est inscrit dans les zones de statut de la dernière sauvegarde et dans le Journal des sauvegardes.
  - **Annuler l’opération au bout de N tentatives** : ce paramètre permet de définir le nombre de fois que le module de sauvegarde réessaiera de lancer la sauvegarde en cas d’échec. Si, à l’issue du nombre d’essais défini, la sauvegarde n’a pas pu être effectuée, elle est annulée et l’erreur 1401 est générée (“Le nombre maximal de tentatives de sauvegarde est atteint, la sauvegarde automatique est temporairement désactivée”). Dans ce cas, aucune nouvelle sauvegarde automatique ne sera lancée tant que l’application n’aura pas été redémarrée ou qu’une sauvegarde manuelle n’aura été effectuée avec succès. Ce paramètre est utile notamment pour éviter qu’en cas d’impossibilité prolongée de la sauvegarde (nécessitant une intervention humaine), l’application n’effectue inutilement de nombreuses tentatives au détriment de ses performances. Par défaut, ce paramètre n’est pas coché.

> 4D considère qu’une sauvegarde a échoué si la base n’était pas lancée au moment théorique de la sauvegarde automatique périodique.

### Archive

Ces options s’appliquent aux fichiers de sauvegarde principaux et aux fichiers de sauvegarde de l’historique.

- **Segment Size (Mb)** 4D allows you to segment archives, i.e., to cut it up into smaller sizes. Ce fonctionnement permet par exemple de stocker une sauvegarde sur plusieurs volumes (DVDs, usb, etc.). Au moment de la restitution, 4D fusionnera automatiquement les segments. **Segment Size (Mb)** 4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.). Le menu **Taille du segment** est une combo box permettant de définir la taille en Mo de chaque segment de sauvegarde. Vous pouvez choisir une des tailles prédéfinies ou saisir une taille spécifique entre 0 et 2048. Si vous passez 0, aucune segmentation n’est effectuée (équivaut à la valeur **Aucune**).

- **Compression Rate** By default, 4D compresses backups to help save disk space. En contrepartie, la phase de compression des fichiers peut ralentir sensiblement les sauvegardes dans le cas de la manipulation de gros volumes de données. L’option **Taux de compression** vous permet d’ajuster la compression :
  - **Aucun** : aucune compression n’est appliquée. La sauvegarde peut être sensiblement plus rapide mais les fichiers d’archives sont plus volumineux sur le disque.
  - **Normal** (par défaut) : cette option constitue un compromis vitesse de sauvegarde/taille des archives.
  - **Elevé** : le taux de compression maximal est appliqué aux archives. Les fichiers d’archives prennent le moins de place possible sur le disque mais la sauvegarde peut être sensiblement ralentie.

- **Interlacing Rate and Redundancy Rate** 4D generates archives using specific algorithms that are based on optimization (interlacing) and security (redundancy) mechanisms. Vous pouvez paramétrer ces mécanismes en fonction de vos besoins. Les menus associés à ces options vous permettent de choisir un taux **Faible**, **Moyen**, **Elevé** ou **Aucun** (défaut).
  - **Taux d’entrelacement** : l’entrelacement consiste à stocker les données dans des secteurs non contigus afin de limiter les risques en cas d’endommagement des secteurs. Plus le taux est élevé, plus la sécurité est élevée ; en contrepartie, le traitement des données consomme davantage de mémoire.
  - **Taux de redondance** : la redondance permet de sécuriser les données présentes dans un fichier en répétant plusieurs fois les mêmes informations. Plus le taux est élevé, plus le fichier est sécurisé, mais plus le stockage est lent et la taille du fichier importante.

### Restitution automatique

- **Restituer la dernière sauvegarde si la base est endommagée** : lorsque cette option est cochée, le programme déclenche automatiquement la restitution du fichier de données de la dernière sauvegarde valide de la base s’il détecte une anomalie (fichier corrompu par exemple) lors du lancement de la base. Aucune intervention de l’utilisateur n’est requise ; l’opération est cependant consignée dans le Journal des sauvegardes.

> En cas de restitution automatique, seul le fichier de données est restitué. Si vous souhaitez récupérer les fichiers joints ou le fichier de structure, vous devez effectuer une restitution manuelle.

- **Intégrer le dernier historique si la base est incomplète** : lorsque cette option est cochée, le programme intègre automatiquement l’historique lors de l’ouverture ou de la restitution de la base de données.
  - Lors de l’ouverture de la base, l’historique courant est automatiquement intégré si 4D détecte que des opérations stockées dans l’historique ne sont pas présentes dans les données. Cette situation se produit par exemple lorsqu’une panne de courant a lieu alors que des opérations non encore écrites sur le disque se trouvaient dans le cache de données.
  - Lors de la restitution de la base, si le fichier d’historique courant ou un fichier de sauvegarde d’historique ayant le même numéro que le fichier de sauvegarde est stocké dans le même dossier, 4D examine son contenu. S’il contient des opérations non présentes dans le fichier de données, le programme l’intègre automatiquement.

Aucune boîte de dialogue n’est présentée à l’utilisateur, l’opération est entièrement automatique. Le but est de faciliter au maximum la remise en route de l’exploitation. L’opération est consignée dans le Journal des sauvegardes.
