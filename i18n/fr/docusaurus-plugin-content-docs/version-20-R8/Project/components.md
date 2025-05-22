---
id: components
title: Composants
---

Un composant 4D est un ensemble de code 4D et de formulaires représentant une ou plusieurs fonctionnalité(s) que vous pouvez installer et utiliser dans vos projets. Par exemple, le composant [4D SVG](https://github.com/4d/4D-SVG) ajoute des commandes avancées et un moteur de rendu intégré qui peut être utilisé pour afficher des fichiers SVG.

Vous pouvez [développer](../Extensions/develop-components.md) et [construire](../Desktop/building.md) vos propres composants 4D, ou télécharger des composants publics partagés par la communauté 4D qui se trouvent sur GitHub.

Lorsque vous développez dans 4D, les fichiers de composants peuvent être stockés de manière transparente sur votre ordinateur ou sur un dépôt Github.

## Composants interprétés et compilés

Les composants peuvent être interprétés ou [compilés](../Desktop/building.md).

- Un projet 4D fonctionnant en mode interprété peut utiliser des composants interprétés ou compilés.
- Un projet 4D exécuté en mode compilé ne peut pas utiliser de composants interprétés. Dans ce cas, seuls les composants compilés peuvent être utilisés.

### Dossier racine (package)

Le dossier racine d'un composant (dossier *MyComponent.4dbase*) peut contenir :

- pour les **composants interprétés** : un [dossier project](../Project/architecture.md) standard. Le nom du dossier du dossier racine doit être suffixé **.4dbase** si vous voulez l'installer dans le dossier [**Components**](architecture.md#components) de votre projet.
- pour les **composants compilés** :
 - soit un dossier "Contents" contenant un fichier .4DZ, un dossier *Resources*, un fichier *Info.plist* (architecture recommandée)
 - soit directement un fichier .4DZ avec d'autres dossiers tels que *Resources*.

:::note

L'architecture de dossier "Contents" est recommandée pour les composants si vous voulez [notariser](../Desktop/building.md#about-notarization) vos applications sur macOS.

:::

## Chargement des composants

:::note

Cette page décrit comment travailler avec les composants dans les environnements **4D** et **4D Server**. Dans les autres environnements, les composants sont gérés différemment :

- dans [4D en mode distant](../Desktop/clientServer.md), les composants sont chargés par le serveur et envoyés à l'application distante.
- dans les applications fusionnées, les composants sont [inclus à l'étape de construction](../Desktop/building.md#plugins--components-page).

:::

### Vue d’ensemble

Pour charger un composant dans votre projet 4D, vous pouvez soit :

- copier les fichiers des composants dans le [dossier **Components** de votre projet](architecture.md#components) (les dossiers des composants interprétés doivent être suffixés avec ".4dbase", voir ci-dessus),
- ou déclarer le composant dans le fichier **dependencies.json** de votre projet ; ceci est fait automatiquement pour les fichiers locaux lorsque vous [**ajoutez une dépendance en utilisant l'interface du Gestionnaire de dépendances**](#adding-a-github-dependency).

Les composants déclarés dans le fichier **dependencies.json** peuvent être stockés à différents endroits :

- au même niveau que le dossier racine de votre projet 4D : c'est l'emplacement par défaut,
- n'importe où sur votre machine : le chemin du composant doit être déclaré dans le fichier **environment4d.json**
- sur un dépôt GitHub : le chemin du composant peut être déclaré dans le fichier **dependencies.json** ou dans le fichier **environment4d.json**, ou dans les deux.

Si le même composant est installé à différents endroits, un [ordre de priorité](#priority) est appliqué.

### dependencies.json et environment4d.json

#### dependencies.json

Le fichier **dependencies.json** référence tous les composants nécessaires à votre projet 4D. Ce fichier doit être placé dans le dossier **Sources** du dossier du projet 4D, par exemple :

```
	/MyProjectRoot/Project/Sources/dependencies.json
```

Il peut contenir :

- les noms des composants [stockés localement](#local-components) (chemin par défaut ou chemin défini dans un fichier **environment4d.json**),
- les noms des composants [stockés sur des dépôts GitHub](#components-stored-on-github) (leur chemin peut être défini dans ce fichier ou dans un fichier **environment4d.json**).

#### environment4d.json

Le fichier **environment4d.json** est facultatif. Il vous permet de définir des **chemins personnalisés** pour certains ou tous les composants déclarés dans le fichier **dependencies.json**. Ce fichier peut être stocké dans le dossier racine de votre projet ou dans l'un de ses dossiers parents, à n'importe quel niveau (jusqu'à la racine).

Les principaux avantages de cette architecture sont les suivants :

- vous pouvez stocker le fichier **environment4d.json** dans un dossier parent de vos projets et décider de ne pas le livrer (*commit*), ce qui vous permet d'avoir une organisation locale pour vos composants.
- si vous souhaitez utiliser le même dépôt GitHub pour plusieurs de vos projets, vous pouvez le référencer dans le fichier **environment4d.json** et le déclarer dans le fichier **dependencies.json**.

### Priorité

Puisque les composants peuvent être installés de différentes manières, un ordre de priorité est appliqué lorsque le même composant est référencé à plusieurs endroits :

**Priorité la plus élevée**

1. Composants stockés dans le [dossier **Components** du projet](architecture.md#components).
2. Composants déclarés dans le fichier **dependencies.json** (le chemin déclaré dans **environment4d.json** remplace le chemin **dependencies.json** pour configurer un environnement local).
3. Composants utilisateurs 4D internes (par exemple 4D NetKit, 4D SVG...)

**Priorité la plus basse**

```mermaid
flowchart TB
    id1("1<br/>Composants du dossier Components du projet")
	~~~
    id2("2<br/>Composants listés dans dependencies.json")
	~~
    id2 -- environment4d.json donne le chemin --> id4("Charger le composant basé sur le chemin déclaré dans environment4d.json")
    ~~~
    id3("3<br/>Composants utilisateurs 4D internes")
    id2 -- environment4d.json ne donne pas de chemin --> id5("Charger le composant à côté du dossier raciner")
    ~~~
    id3("3<br/>Composants utilisateurs 4D internes")
```

Lorsqu'un composant ne peut pas être chargé à cause d'une autre instance du même composant située à un niveau de priorité plus élevé, les deux obtiennent un [statut](#dependency-status) spécifique : le composant non chargé reçoit le statut *Overloaded*, tandis que le composant chargé a le statut *Overloading*.

### Composants locaux

Vous déclarez un composant local dans le fichier [**dependencies.json** ](#dependenciesjson) de la manière suivante :

```json
{
    "dependencies": {
        "myComponent1" : {},
        "myComponent2" : {}
    }
}
```

... où "myComponent1" et "myComponent2" sont les noms des composants à charger.

Par défaut, si "myComponent1" et "myComponent2" ne sont pas déclarés dans un fichier [**environment4d.json**](#environment4djson), 4D cherchera le dossier package du composant (c'est-à-dire le dossier racine du projet du composant) au même niveau que le dossier du package de votre projet 4D, par exemple :

```
	/MyProjectRoot/
	/MyProjectComponentRoot/
```

Grâce à cette architecture, vous pouvez simplement copier tous vos composants au même niveau que vos projets et les référencer dans vos fichiers **dependencies.json**.

:::note

Si vous ne souhaitez pas utiliser l'architecture **dependencies.json**, vous pouvez installer des composants locaux en copiant leurs fichiers dans le [dossier **Components** de votre projet](architecture.md#components).

:::

#### Personnalisation des chemins des composants

Si vous souhaitez personnaliser l'emplacement des composants locaux, vous devez déclarer dans le fichier [**environment4d.json**](#environment4djson) les chemins des dépendances qui ne sont pas stockées au même niveau que le dossier projet.

Vous pouvez utiliser des chemins **relatifs** ou **absolus** (voir ci-dessous).

Exemples :

```json
{
	"dependencies": {
		"myComponent1" : "MyComponent1",
		"myComponent2" : "../MyComponent2",
    "myComponent3" : "file:///Users/jean/MyComponent3"
    }
}
```

:::note

Si un chemin de composant déclaré dans le fichier **environment4d.json** n'est pas trouvé lorsque le projet est démarré, le composant n'est pas chargé et récupère le [statut](#dependency-status) *Not found*, même si une version du composant existe à côté du dossier racine du projet.

:::

#### Chemins relatifs vs chemins absolus

Les chemins sont exprimés en syntaxe POSIX comme décrit dans [ce paragraphe](../Concepts/paths#posix-syntax).

Les chemins relatifs sont relatifs au fichier [`environment4d.json`](#environment4djson). Les chemins absolus sont liés à la machine de l'utilisateur.

L'utilisation de chemins relatifs est **recommandée** dans la plupart des cas, puisqu'ils fournissent flexibilité et portabilité de l'architecture des composants, surtout si le projet est hébergé dans un outil de contrôle de source.

Les chemins absolus ne doivent être utilisés que pour les composants spécifiques à une machine et à un utilisateur.

### Composants stockés sur GitHub

Des composants 4D disponibles en tant que releases GitHub peuvent être référencés et automatiquement chargés et mis à jour dans vos projets 4D.

:::note

En ce qui concerne les composants stockés sur GitHub, les fichiers [**dependencies.json**](#dependenciesjson) et [**environment4d.json**](#environment4djson) prennent en charge le même contenu.

:::

#### Configuration du dépôt GitHub

Pour pouvoir référencer et utiliser directement un composant 4D stocké sur GitHub, vous devez configurer le dépôt du composant GitHub :

- Compressez les fichiers des composants au format ZIP.
- Nommez cette archive avec le même nom que le dépôt GitHub.
- Intégrez l'archive dans une [release GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) du dépôt.

Ces étapes peuvent être facilement automatisées, avec du code 4D ou en utilisant des actions GitHub, par exemple.

#### Déclaration des chemins

Vous déclarez un composant stocké sur GitHub dans le fichier [**dependencies.json** ](#dependenciesjson) de la manière suivante :

```json
{
	"dependencies": {
		"myGitHubComponent1": {
			"github" : "JohnSmith/myGitHubComponent1"
		},
		"myGitHubComponent2": {}
	}
}
```

... où "myGitHubComponent1" est référencé et déclaré pour le projet, tandis que "myGitHubComponent2" est seulement référencé. Vous devez le déclarer dans le fichier [**environment4d.json**](#environment4djson) :

```json
{
	"dependencies": {
		"myGitHubComponent2": {
			"github" : "JohnSmith/myGitHubComponent2"
		}
	}
}
```

"myGitHubComponent2" peut être utilisé par plusieurs projets.

#### Tags et versions

Lorsqu'une release est créée dans GitHub, elle est associée à un **tag** et à une **version**. Le gestionnaire de dépendances utilise ces informations pour gérer la disponibilité automatique des composants.

- Les **Tags** sont des textes qui référencent de manière unique une release. Dans les fichiers [**dependencies.json**](#dependenciesjson) et [**environment4d.json**](#environment4djson), vous pouvez indiquer le release tag que vous souhaitez utiliser dans votre projet. Par exemple :

```json
{
	"dependencies": {
		"myFirstGitHubComponent": {
			"github": "JohnSmith/myFirstGitHubComponent",
			"tag": "beta2"
		}
	}
}
```

- Une release est également identifiée par une **version**. Le système de versionnement utilisé est basé sur le concept de [*Semantic Versioning*](https://regex101.com/r/Ly7O1x/3/), qui est le plus couramment utilisé. Chaque numéro de version est identifié comme suit : `majorNumber.minorNumber.pathNumber`. De la même manière que pour les tags, vous pouvez indiquer la version du composant que vous souhaitez utiliser dans votre projet, comme dans cet exemple :

```json
{
	"dependencies": {
		"myFirstGitHubComponent": {
			"github": "JohnSmith/myFirstGitHubComponent",
			"version": "2.1.3"
		}
	}
}
```

Un intervalle est défini par deux versions sémantiques, un minimum et un maximum, avec les opérateurs "\< | > | >= | <= | =". Le `*` peut être utilisé comme substitut pour toutes les versions. Les préfixes ~ et ^ définissent les versions à partir d'un numéro, et jusqu'à respectivement la version majeure et mineure suivante.

Voici quelques exemples :

- "latest" : la version ayant le badge "latest" dans les releases GitHub.
- "\*" : la dernière version publiée.
- "1.\*" : toutes les versions de la version majeure 1.
- "1.2.\*" : tous les correctifs de la version mineure 1.2.
- ">=1.2.3" : la dernière version, à partir de la version 1.2.3.
- ">1.2.3" : la dernière version, en commençant par la version juste après la 1.2.3.
- "^1.2.3" : la dernière version 1, à partir de la version 1.2.3 et strictement inférieure à la version 2.
- "~1.2.3" : la dernière version 1.2, à partir de la version 1.2.3 et strictement inférieure à la version 1.3.
- "<=1.2.3" : la dernière version jusqu'à la 1.2.3.
- "1.0.0 - 1.2.3" ou ">=1.0.0 <=1.2.3" : version comprise entre 1.0.0 et 1.2.3.
- "`<1.2.3 || >=2`" : version qui n'est pas comprise entre 1.2.3 et 2.0.0.

Si vous ne spécifiez pas de tag ou de version, 4D récupère automatiquement la version "latest".

Le Gestionnaire de dépendances vérifie périodiquement si des mises à jour de composants sont disponibles sur Github. Si une nouvelle version est disponible pour un composant, un indicateur de mise à jour est alors affiché pour le composant dans la liste des dépendances, [en fonction de vos paramètres](#defining-a-github-dependency-version-range).

#### Dépôts privés

Si vous souhaitez intégrer un composant situé dans un référentiel privé, vous devez indiquer à 4D d'utiliser un token (*jeton*) de connexion pour y accéder.

Pour cela, dans votre compte GitHub, créez un token **classic** avec les droits d'accès au **dépôt**.

:::note

Pour plus d'informations, veuillez vous référer à [GitHub token interface](https://github.com/settings/tokens).

:::

Vous devez ensuite [fournir votre token de connexion](#providing-your-github-access-token) au Gestionnaire de dépendances.

#### Cache local pour les dépendances

Les composants GitHub référencés sont téléchargés dans un dossier de cache local puis chargés dans votre environnement. Le dossier de cache local est stocké à l'emplacement suivant :

- sous macOs : `$HOME/Library/Caches/<app name>/Dependencies`
- sous Windows : `C:\Users\<username>\AppData\Local\<app name>\Dependencies`

...où `<app name>` peut être "4D", "4D Server" ou "tool4D".

### dependency-lock.json

Un fichier `dependency-lock.json` est créé dans le dossier [`userPreferences`](architecture.md#userpreferencesusername) de votre projet.

Ce fichier enregistre des informations telles que le statut des dépendances, les chemins d'accès, les Url, les erreurs de chargement, ainsi que d'autres informations. Il peut être utile pour la gestion du chargement de composants ou le dépannage.

## Suivi des dépendances du projet

Dans un projet ouvert, vous pouvez ajouter, supprimer, mettre à jour et obtenir des informations sur les dépendances et leur statut courant de chargement dans la fenêtre **Dépendances**.

Pour afficher la fenêtre Dépendances :

- avec 4D, sélectionnez la ligne de menu **Développement/Dépendances du projet** (environnement de développement),<br/>
 ![dependency-menu](../assets/en/Project/dependency-menu.png)

- avec 4D Server, sélectionnez la ligne de menu **Fenêtre/Dépendances du projet**.<br/>
 ![menu-dépendances-serveur](../assets/en/Project/dependency-menu-server.png)

La fenêtre Dépendances s'affiche alors. Les dépendances sont classées par nom par ordre alphabétique :

![dependency](../assets/en/Project/dependency.png)

L'interface de la fenêtre Dépendances vous permet de gérer les dépendances (sur 4D monoposte et 4D Server).

### Filtrer les dépendances

Par défaut, toutes les dépendances identifiées par le Gestionnaire de dépendances sont listées, quel que soit leur [statut](#dependency-status). Vous pouvez filtrer les dépendances affichées en fonction de leur statut en sélectionnant l'onglet approprié en haut de la fenêtre :

![dependency-tabs](../assets/en/Project/dependency-tabs.png)

- **Actifs** : Dépendances chargées et utilisables dans le projet. Il comprend des dépendances *overloading*, qui sont effectivement chargées. Les dépendances *overloaded* sont listées dans l'onglet **Conflits**, ainsi que toutes les dépendances conflictuelles.
- **Inactifs** : Dépendances qui ne sont pas chargées dans le projet et qui ne sont pas disponibles. Diverses raisons peuvent expliquer ce statut : fichiers manquants, incompatibilité de version...
- **Conflit** : Dépendances qui sont chargées mais qui surchargent au moins une autre dépendance à un [niveau de priorité](#priority) inférieur. Les dépendances surchargées sont également affichées afin que vous puissiez vérifier l'origine du conflit et prendre les mesures appropriées.

### Statut des dépendances

Les dépendances nécessitant l'attention du développeur sont signalées par une **étiquette de statut** à droite de la ligne et une couleur de fond spécifique :

![dependency-status](../assets/en/Project/dependency-conflict2.png)

Les étiquettes de statut suivantes sont disponibles :

- **Overloaded** : La dépendance n'est pas chargée car elle est surchargée par une autre dépendance portant le même nom et ayant un [niveau de priorité](#priority) plus élevé.
- **Overloading** : La dépendance est chargée et surcharge une ou plusieurs autres dépendances avec le même nom à un [niveau de priorité](#priority) inférieur.
- **Non trouvé** : La dépendance est déclarée dans le fichier dependencies.json mais n'est pas trouvée.
- **Inactif** : La dépendance n'est pas chargée car elle n'est pas compatible avec le projet (par exemple, le composant n'est pas compilé pour la plate-forme actuelle).
- **Dupliqué** : La dépendance n'est pas chargée car une autre dépendance portant le même nom existe au même endroit (et est chargée).
- **Disponible après redémarrage** : La référence de la dépendance vient d'être ajoutée ou mise à jour [à l'aide de l'interface](#monitoring-project-dependencies), elle sera chargée une fois que l'application aura redémarré.
- **Déchargé après redémarrage** : La référence à la dépendance vient d'être supprimée [en utilisant l'interface](#removing-a-dependency), elle sera déchargée une fois que l'application aura redémarré.
- **Mise à jour disponible \<version\>** : Une nouvelle version de la dépendance GitHub correspondant à votre [configuration de version du composant](#defining-a-github-dependency-version-range) a été détectée.
- **Actualisé après redémarrage** : La [configuration de version](#defining-a-github-dependency-version-range) de la dépendance GitHub a été modifiée, elle sera ajustée au prochain démarrage.
- **Mise à jour récente** : Une nouvelle version de la dépendance GitHub a été chargée au démarrage.

Une infobulle s'affiche lorsque vous survolez la ligne de dépendance, fournissant des informations supplémentaires sur le statut :

![dependency-tips](../assets/en/Project/dependency-tip1.png)

### Origine de la dépendance

Le panneau Dépendances liste toutes les dépendances du projet, quelle que soit leur origine, c'est-à-dire d'où qu'elles viennent. L'origine de la dépendance est fournie par l'étiquette sous son nom :

![dependency-origin](../assets/en/Project/dependency-origin.png)

Les options suivantes sont disponibles :

| Étiquette d'origine               | Description                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------ |
| Composant 4D                      | Composant 4D intégré, stocké dans le dossier `Components` de l'application 4D  |
| dependencies.json | Composant déclaré dans le fichier [`dependencies.json`](#dependenciesjson)     |
| Environnement                     | Composant déclaré dans le fichier [`environnement4d.json`](#environment4djson) |
| Composant du projet               | Composant situé dans le dossier [`Components`](architecture.md#components)     |

**Cliquez avec le bouton droit de la souris** dans une ligne de dépendance et sélectionnez **Afficher sur le disque** pour révéler l'emplacement d'une dépendance :

![dependency-show](../assets/en/Project/dependency-show.png)

:::note

Cet élément n'est pas affiché si la dépendance est inactive parce que ses fichiers sont introuvables.

:::

L'icône du composant et le logo de l'emplacement fournissent des informations supplémentaires :

- Le logo du composant indique s'il est fourni par 4D ou par un développeur tiers.
- Les composants locaux peuvent être différenciés des composants GitHub par une petite icône.

![dependency-origin](../assets/en/Project/dependency-github.png)

### Ajouter une dépendance locale

Pour ajouter une dépendance locale, cliquez sur le bouton **+** dans la zone inférieure de la page. La fenêtre suivante s'affiche :

![dependency-add](../assets/en/Project/dependency-add.png)

Assurez-vous que l'onglet **Local** est sélectionné et cliquez sur le bouton **...**. Une boîte de dialogue standard d'ouverture de fichier s'affiche, vous permettant de sélectionner le composant à ajouter. Vous pouvez sélectionner un fichier [**.4DZ**](../Desktop/building.md#build-component) ou [**.4DProject**](architecture.md#applicationname4dproject-file).

Si l'élément sélectionné est valide, son nom et son emplacement sont affichés dans la boîte de dialogue.

![dependency-selected](../assets/en/Project/local-selected.png)

Si l'élément sélectionné n'est pas valide, un message d'erreur s'affiche.

Cliquez sur **Ajouter** pour ajouter la dépendance au projet.

- Si vous sélectionnez un composant situé à côté du dossier racine du projet (emplacement par défaut), il est déclaré dans le fichier [**dependencies.json**](#dependenciesjson).
- Si vous sélectionnez un composant qui n'est pas situé à côté du dossier racinedu projet, il est déclaré dans le fichier [**dependencies.json**](#dependenciesjson) et son chemin est déclaré dans le fichier [**environment4d.json**](#environment4djson) (voir note). Le panneau Dépendances vous demande si vous souhaitez enregistrer un [chemin relatif ou absolu](#relative-paths-vs-absolute-paths).

:::note

Si aucun fichier [**environment4d.json**](#environment4djson) n'est déjà défini pour le projet à cette étape, il est automatiquement créé dans le dossier racine du projet (emplacement par défaut).

:::

La dépendance est ajoutée à la [liste des dépendances inactives](#dependency-status) avec le statut **Disponible après redémarrage**. Elle sera chargée une fois que l'application aura redémarré.

### Ajouter une dépendance GitHub

Pour ajouter une [dépendance GitHub](#components-stored-on-github), cliquez sur le bouton **+** dans la zone de bas de page du tableau de bord et sélectionnez l'onglet **GitHub**.

![dependency-add-git](../assets/en/Project/dependency-add-git.png)

Entrez l'adresse du dépôt GitHub de la dépendance. Il peut s'agir d'une **URL de dépôt** ou d'une **chaîne de nom de compte/dépôt-Github**, par exemple :

![dependency-add-git-2](../assets/en/Project/dependency-add-git-2.png)

Une fois la connexion établie, l'icône GitHub ![dependency-gitlogo](../assets/en/Project/dependency-gitlogo.png) s'affiche sur le côté droit de la zone de saisie. Vous pouvez cliquer sur cette icône pour ouvrir le dépôt dans votre navigateur par défaut.

:::note

Si le composant est stocké sur un [dépôt GitHub privé](#private-repositories) et que votre token personnel est manquant, un message d'erreur s'affiche et un bouton **Ajouter un jeton d'accès personnel...** s'affiche (voir [Fournir votre jeton d'accès GitHub](#providing-your-github-access-token)).

:::

Définissez la [plage de versions des dépendances](#tags-and-versions) à utiliser pour ce projet. Par défaut, l'option "Latest" est sélectionnée, ce qui signifie que la dernière version sera automatiquement utilisée.

Cliquez sur le bouton **Ajouter** pour ajouter la dépendance au projet.

The GitHub dependency is declared in the [**dependencies.json**](#dependenciesjson) file and added to the [inactive dependency list](#dependency-status) with the **Available at restart** status. Elle sera chargée une fois que l'application aura redémarré.

#### Définir une plage de versions pour une dépendance GitHub

Vous pouvez définir l'option [règle de dépendance](#tags-and-versions) pour une dépendance :

![dependency-git-tag](../assets/en/Project/dependency-git-tag.png)

- **La dernière** : Sélectionné par défaut et permet de télécharger la version qui est étiquetée comme la dernière version (stable).
- **Jusqu'à la version majeure suivante** : Définit une [plage sémantique de versions](#tags-and-versions) pour limiter les mises à jour à la version majeure suivante.
- **Jusqu'à la prochaine version mineure** : De même, limite les mises à jour à la version mineure suivante.
- **Version exacte (balise)** : Sélectionnez ou saisissez manuellement un [tag spécifique](#tags-and-versions) dans la liste disponible.

La version courante de la dépendance GitHub est affichée sur le côté droit de l'élément de la dépendance :

![dependency-origin](../assets/en/Project/dependency-version.png)

#### Modifier la plage de versions des dépendances GitHub

Vous pouvez modifier la [règle de dépendance](#defining-a-github-dependency-version-range) pour une dépendance GitHub listée : sélectionnez la dépendance à modifier et sélectionnez **Editer la dépendance...** dans le menu contextuel. Dans la boîte de dialogue "Editer la dépendance", modifiez le menu Règle de dépendance et cliquez sur **Appliquer**.

La modification de la plage de versions est utile par exemple si vous utilisez la fonction de mise à jour automatique et que vous souhaitez verrouiller une dépendance à un numéro de version spécifique.

### Mise à jour des dépendances GitHub

Le Gestionnaire de dépendances permet une gestion intégrée des mises à jour sur GitHub. Les fonctionnalités suivantes sont prises en charge :

- Vérification automatique et manuelle des versions disponibles
- Mise à jour automatique et manuelle des composants

Les opérations manuelles peuvent être effectuées **par dépendance** ou **pour toutes les dépendances**.

#### Vérification des nouvelles versions

Les mises à jour des dépendances sont régulièrement vérifiées sur GitHub. Cette vérification est effectuée de manière transparente en arrière-plan.

:::note

Si vous fournissez un [token d'accès](#providing-your-github-access-token), les vérifications sont effectuées plus fréquemment, car GitHub autorise alors une plus grande fréquence de requêtes aux dépôts.

:::

En outre, vous pouvez vérifier les mises à jour à tout moment, pour une seule dépendance ou pour toutes les dépendances :

- Pour vérifier les mises à jour d'une seule dépendance, cliquez avec le bouton droit de la souris sur la dépendance et sélectionnez **Vérifier les mises à jour** dans le menu contextuel.

![check component](../assets/en/Project/check-component-one.png)

- Pour vérifier les mises à jour de toutes les dépendances, cliquez sur le menu **options** en bas de la fenêtre du gestionnaire de dépendances et sélectionnez **Vérifier les mises à jour**.

![check components](../assets/en/Project/check-component-all.png)

Si une nouvelle version de composant correspondant à votre [règle de version des dépendances](#defining-a-github-dependency-version-range) est détectée sur GitHub, un statut de dépendance spécifique est affiché :

![dependency-new-version](../assets/en/Project/dependency-available.png)

Vous pouvez décider de [mettre à jour le composant](#updating-dependencies) ou non.

Si vous ne souhaitez pas utiliser la mise à jour des composants (par exemple, vous souhaitez conserver une version spécifique), laissez simplement le statut courant (assurez-vous que l'option [**Mise à jour automatique**](#automatic-update) n'est pas cochée).

#### Mise à jour des dépendances

**Mettre à jour une dépendance** signifie télécharger une nouvelle version de la dépendance depuis GitHub et la garder prête à être chargée lors du prochain démarrage du projet.

Vous pouvez mettre à jour les dépendances à tout moment, pour une seule dépendance ou pour toutes les dépendances :

- Pour mettre à jour une seule dépendance, cliquez avec le bouton droit de la souris sur la dépendance et sélectionnez **Mettre à jour<component name\> au prochain démarrage** dans le menu contextuel ou dans le menu **options** en bas de la fenêtre du gestionnaire de dépendances :

![check component](../assets/en/Project/update-component-one.png)

- Pour mettre à jour toutes les dépendances en une seule fois, cliquez sur le menu **options** en bas de la fenêtre du gestionnaire de dépendances et sélectionnez **Mettre à jour toutes les dépendances distantes au prochain démarrage** :

![check components](../assets/en/Project/update-component-all.png)

Dans tous les cas, quel que soit le statut courant de la dépendance, une vérification automatique est effectuée sur GitHub avant de mettre à jour la dépendance, afin de s'assurer que la version la plus récente est récupérée, [en fonction de la règle de version de votre composant](#defining-a-github-dependency-version-range).

Lorsque vous sélectionnez une commande de mise à jour :

- une boîte de dialogue s'affiche et propose de **redémarrer le projet**, afin que les dépendances mises à jour soient immédiatement disponibles. Il est généralement recommandé de redémarrer le projet pour évaluer les dépendances mises à jour.
- si vous cliquez sur Plus tard, la commande de mise à jour n'est plus disponible dans le menu, ce qui signifie que l'action a été planifiée pour le prochain démarrage.

#### Mise à jour automatique

L'option **Mise à jour automatique** est disponible dans le menu **options** en bas de la fenêtre du gestionnaire de dépendances.

Lorsque cette option est cochée (par défaut), les nouvelles versions des composants GitHub correspondant à vos [règles de version des composants](#defining-a-github-dependency-version-range) sont automatiquement mises à jour lors du prochain démarrage du projet. Cette option facilite la gestion quotidienne des mises à jour des dépendances, en éliminant la nécessité de sélectionner manuellement les mises à jour.

Lorsque cette option n'est pas cochée, une nouvelle version de composant correspondant à votre [règle de version des composants](#defining-a-github-dependency-version-range) n'est indiquée que comme disponible et nécessitera une [mise à jour manuelle](#updating-dependencies). Désélectionnez l'option **Mise à jour automatique** si vous souhaitez contrôler précisément les mises à jour des dépendances.

### Fournir votre jeton d'accès GitHub

L'enregistrement de votre *token* (jeton) d'accès personnel dans le gestionnaire de dépendances est :

- obligatoire si le composant est stocké sur un [dépôt GitHub privé](#private-repositories),
- recommandé pour une [vérification des mises à jour des dépendances](#updating-github-dependencies) plus fréquente.

Pour fournir votre jeton d'accès à GitHub, vous pouvez soit :

- cliquez sur le bouton **Ajouter un jeton d'accès personnel...** qui est affiché dans la boîte de dialogue "Ajouter une dépendance" après avoir entré un chemin de dépôt privé GitHub.
- ou sélectionner **Ajouter un jeton d'accès personnel GitHub...** dans le menu du Gestionnaire de dépendances à tout moment.

![dependency-add-token](../assets/en/Project/dependency-add-token.png)

Vous pouvez ensuite saisir votre jeton d'accès personnel :

![dependency-add-token-2](../assets/en/Project/dependency-add-token-2.png)

Vous ne pouvez saisir qu'un seul jeton d'accès personnel. Une fois le jeton saisi, vous pouvez le modifier.

Le jeton fourni est stocké dans un fichier **github.json** dans le [dossier actif 4D](../commands-legacy/get-4d-folder.md#active-4d-folder).

### Suppression d'une dépendance

Pour supprimer une dépendance de la fenêtre Dépendances, sélectionnez la dépendance à supprimer et cliquez sur le bouton **-** ou sélectionnez **Supprimer la dépendance** dans le menu contextuel. Vous pouvez sélectionner plusieurs dépendances, auquel cas l'action est appliquée à toutes les dépendances sélectionnées.

:::note

Seules les dépendances déclarées dans le fichier [**dependencies.json**](#dependenciesjson) peuvent être supprimées depuis la fenêtre du Gestionnaire de dépendances. Si une dépendance sélectionnée ne peut pas être supprimée, le bouton **-** est désactivé et l'élément de menu **Supprimer la dépendance** est masqué.

:::

Une boîte de dialogue de confirmation s'affiche. Si la dépendance a été déclarée dans le fichier **environment4d.json**, une option permet de la supprimer :

![dependency-remove](../assets/en/Project/remove-comp.png)

Si vous confirmez la boîte de dialogue, le [statut](#dependency-status) de la dépendance supprimée est automatiquement modifié en "Déchargé après redémarrage". Elle sera libérée de la mémoire une fois que l'application aura redémarré.


