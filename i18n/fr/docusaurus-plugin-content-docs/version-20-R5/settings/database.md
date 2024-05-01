---
id: database
title: Page Base de données
---

## Page Stockage de données

Cette page vous permet de paramétrer le stockage des données de la base 4D sur le disque.

### Paramètres généraux

#### Autoriser l'ouverture du fichier de données en lecture seule

Cette option permet de paramétrer le fonctionnement de l’application en cas d’ouverture d’un fichier de données verrouillé au niveau du système d’exploitation. 4D intègre un dispositif permettant d’empêcher automatiquement l’ouverture d’une base lorsque son fichier de données ou l’un de ses segments est verrouillé. Dans ce cas, lorsque la détection est activée, 4D affiche un message d’alerte et la base quitte :

![](../assets/en/settings/data-locked.png)

Lorsque l’option n’est pas cochée, il n’est pas possible d’ouvrir la base avec un fichier de données verrouillé (fonctionnement par défaut pour les bases 4D).

#### A propos du verrouillage des fichiers

Les fichiers verrouillés peuvent être lus mais leur contenu ne peut pas être modifié. Par exemple, les fichiers sont verrouillés lorsqu’ils sont stockés sur un support non réinscriptible (type DVD) ou lorsqu’ils sont recopiés depuis un tel support. 4D peut travailler de manière transparente avec des fichiers de données verrouillés, ce qui permet notamment d’exploiter des bases en lecture sur DVD. Toutefois, ce fonctionnement induit le risque d’utilisation involontaire d’un fichier de données verrouillé dans lequel les modifications ne seront pas sauvegardées. C’est la raison pour laquelle par défaut 4D n’autorise pas l’ouverture des bases avec un fichier de données verrouillé.

### Emplacement du dossier temporaire

Cette zone vous permet de modifier l’emplacement des fichiers temporaires créés lors de l’exécution de 4D. Le dossier des fichiers temporaires est utilisé par l’application, en cas de nécessité, pour écrire provisoirement sur disque des données se trouvant en mémoire.

L’emplacement courant de ce dossier est affiché dans la zone “Actuel :”. Vous pouvez cliquer dans cette zone pour faire apparaître le chemin d’accès sous forme de pop up menu :

![](../assets/en/settings/temporary-file-location.png)

Trois options d’emplacement sont proposées :

- **System**: When this option is selected, the 4D temporary files are created in a folder placed at the location specified by Windows and/or macOS. You can find out the current location defined by your system using the [`Temporary folder`](https://doc.4d.com/4dv19R/help/command/en/page486.html) 4D command. Les fichiers sont placés dans un sous-dossier dont le nom est construit à partir du nom de la base et d’un identifiant unique.
- **Data File Folder** (default option): When this option is selected, the 4D temporary files are created in a folder named "temporary files" located at the same level as the data file of the database.
- **User Defined**: This option is used to set a custom location. En cas de modification de cette option, sa prise en compte nécessitera le redémarrage de la base. 4D vérifie que le dossier sélectionné est accessible en écriture. Si ce n’est pas le cas, l’application essaiera les autres options jusqu’à ce qu’un dossier valide soit trouvé.

> This option is stored in the "extra properties" of the structure that is available when the structure definition is exported in XML (see [Exporting and importing structure definitions](https://doc.4d.com/4Dv19/4D/19/Exporting-and-importing-structure-definitions.300-5416829.en.html)).

### Comparaison de texte

> Si vous modifiez ces options, vous devez quitter et rouvrir la base afin que la modification soit prise en compte. A la réouverture, une réindexation automatique est effectuée sur tous les index de la base.

- **Consider @ as a wildcard only when at the beginning or end of text patterns**: Allows you to set how the at sign "@" will be interpreted when used in a query or a character string comparison, when it is located in a word.
  When this option is not checked (default value), the at sign is used as the wildcard character, in other words, it replaces any character (see [Wildcard character (@)](https://doc.4d.com/4Dv19/4D/19/Query-editor.300-5416813.en.html#463876)).

  Lorsque l’option est cochée, le caractère @ est considéré comme un simple caractère s’il se trouve au milieu d’un mot. Cette possibilité est particulièrement utile pour les bases de données stockant des adresses e-mail (qui se présentent sous la forme “nom@fournisseur.xx”). Cette option influe sur les recherches, les tris et les comparaisons de chaînes de caractères, pour les données stockées dans les tables ou en mémoire (tableaux). Sont concernés les champs alpha (indexés ou non) et texte ainsi que les variables alpha et texte.

  **Notes:**

  - En ce qui concerne les recherches, il est important de noter que si le critère de recherche commence ou se termine par @, le caractère @ est toujours considéré comme un joker. Seul le fait que ce caractère soit placé à l’intérieur d’un mot (exemple : bill@cgi.com) entraîne un traitement différent de la part de 4D.
  - This option can also have an influence on the behavior of the commands in the [Objects (Forms)](https://doc.4d.com/4Dv19/4D/19/Objects-Forms.201-5391558.en.html) theme that accept the wildcard character ("@") in the object parameter.
  - Pour des raisons de sécurité, seuls l’Administrateur et le Super_Utilisateur de la base peuvent modifier ce paramètre.

- **Current data language:** Used to configure the language used for character string processing and comparison. Le choix d’une langue de comparaison influe sur le tri et la recherche des textes ainsi que le passage en minuscules/majuscules mais n’a pas d’incidence sur la traduction des libellés ou sur les formats de dates, d’heure ou monétaires qui restent, eux, dans la langue du système. Par défaut, 4D utilise la langue du système.

  Un projet 4D peut ainsi fonctionner dans une langue différente de celle du système. A l’ouverture d’un projet, le moteur de 4D détecte la langue utilisée par le fichier de données et la fournit au langage (interpréteur ou mode compilé). Les comparaisons de texte, qu’elles soient effectuées par le moteur de base de données ou par le langage, sont donc toujours effectuées dans la même langue.

  > You can modify this setting in the application Preferences (see [General Page](../Preferences/general.md)). Dans ce cas, il s'applique à toutes les nouvelles bases créées par 4D.

- **Consider only non-alphanumeric chars for keywords**: Modifies the algorithm used by 4D to identify keyword separators and hence build their indexes. Par défaut, lorsque cette option n'est pas cochée, 4D utilise un algorithme sophistiqué tenant compte des spécificités linguistiques.

  Cet algorithme est semblable à celui utilisé de façon standard par les logiciels de traitement de texte pour déterminer les limites d'une sélection en cas de double-clic dans un mot. For more information about this algorithm, refer to the following address: `http://userguide.icu-project.org/boundaryanalysis`.

  Lorsque cette option est cochée, 4D utilise un algorithme simplifié. Dans cette configuration, tout caractère non alphanumérique (c'est-à-dire qui n'est ni une lettre ni un chiffre) est considéré comme séparateur de mot-clé. Ce paramétrage répond à des besoins spécifiques associés à certaines langues telles que le japonais.

- **Sorting order appropriate for searching**: This option is only displayed when the Japanese language is selected. Elle modifie l'interprétation de caractères tels que "Marques Katakana-Hiragana de son prolongé" ou "長音記号" ou les "Marques d'itération japonaises" telles que "ゝ" ou "ゞ". Un locuteur japonais préférera les résultats issus d'une recherche effectuée lorsque le paramètre est activé.

#### Prise en charge de Mecab (version japonaise)

On Japanese systems, 4D supports the _MeCab_ library, with a indexing algorithm for keywords that is particularly suited for the Japanese language.

Cet algorithme est utilisé par défaut dans les versions japonaises de 4D. If needed, you can disable the use of the _MeCab_ algorithm and use the conventional _ICU_ library.

To disable _MeCab_, just check the **Consider only non-alphanumeric chars for keywords** option:

![](../assets/en/settings/non-alphanumeric-chars.png)

## Page Mémoire

Utilisez les paramètres de cet onglet pour configurer la mémoire cache de la base.

### Paramètres du cache pour la base

- **Calculation of adaptive cache**: When this option is checked, management of the memory cache is done dynamically by the system --- respecting limits that you set. Ce principe permet de configurer une mémoire cache performante, adaptée à la plupart des configurations. La taille du cache est alors calculée dynamiquement en fonction des paramétrages définis. Les valeurs proposées par défaut correspondent à une utilisation standard de 4D.

  - **Memory to be reserved for other applications and for the system**: Portion of the RAM memory to reserve for the System and other applications. Cette valeur peut être augmentée à des fins d’optimisation lorsque d’autres applications consommatrices de mémoire tournent sur le même poste que 4D.
  - **Percentage of available memory used for cache**: Percentage of the remaining memory allocated to the cache by default.\
    To obtain the size allocated by default to the cache, simply perform the following calculation: (Physical memory -- Physical memory to be reserved) X Percentage of the memory used for the cache. Dans le mode adaptatif, la taille de mémoire cache varie dynamiquement en fonction des besoins de l’application et du système. Vous pouvez fixer les bornes de ces variations à l’aide des deux options suivantes :
  - **Minimum Size**: Minimum amount of memory that must be reserved for the cache. Cette valeur ne peut être inférieure à 100 Mo.
  - **Maximum Size**: Maximum amount of memory that can be used by the cache. This value is virtually unlimited.\\
    Setting limits is particularly useful for databases that are distributed on machines for which you do not know the memory configuration a priori. Dans ce cas, les bornes vous permettent de garantir des performances minimales dans tous les cas. Le schéma suivant illustre ce fonctionnement :

  Example for calculating cache memory:
  _Physical memory to reserve = 256 MB
  Percentage of the available memory used for the cache = 50%
  Maximum size = 1 GB Minimum size = 128 MB_

  ![](../assets/en/settings/memory-maximum-size.png)

- **Calculation of adaptive cache not checked**:  this mode, you set the size of the memory cache for the database yourself. 4D affiche alors une zone de saisie permettant de définir la mémoire cache à utiliser ainsi que les informations relatives à la mémoire physique (mémoire RAM disponible sur la machine), le cache actuel et le cache après redémarrage (tenant compte de vos modifications).

  La taille de mémoire cache que vous saisissez sera réservée pour la base 4D, quel que soit l’état des ressources de la machine. Ce paramétrage peut être utilisé dans certaines configurations spécifiques, ou lorsque la base est destinée à fonctionner sur des systèmes disparates en termes de mémoire. Dans la plupart des cas, le cache adaptatif est plus performant.

- **Flush Cache every ... Seconds/Minutes**: Specifies the time period between each automatic saving of the data cache, i.e., its writing to disk.
  4D écrit les données placées dans le cache à intervalles fixes. Vous pouvez définir tout intervalle compris entre 1 seconde et 500 minutes. Par défaut, 4D stocke vos données toutes les 20 secondes. L’application écrit aussi vos données sur disque lorsque vous changez de mode ou quittez l’application. You can also call the [FLUSH CACHE](https://doc.4d.com/4dv19R/help/command/en/page297.html) command to trigger the flush at any moment.

  Quand vous prévoyez de saisir beaucoup de données, il est souhaitable de fixer un intervalle court. En effet, en cas de coupure de courant, vous ne perdriez que les données saisies depuis la dernière écriture (si la base fonctionne sans fichier d’historique).

  Si chaque opération d’écriture du cache est accompagnée d’un fort ralentissement de la base de données, il faut ajuster la fréquence. Ce symptôme signifie une sauvegarde massive d’enregistrements. Dans ce cas, une fréquence d’écriture plus élevée, donc plus rapide, est plus efficace.

  Par défaut, 4D affiche une petite fenêtre lors de l'écriture du cache. If you do not want this visual reminder, you can uncheck the **Flushing progress** option on the [Interface page](./interface.md).
