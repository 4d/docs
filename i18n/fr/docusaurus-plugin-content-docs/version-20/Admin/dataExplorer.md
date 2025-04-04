---
id: dataExplorer
title: Explorateur de données
---

L'Explorateur de données fournit une interface web pour visualiser et rechercher les données de votre datastore. Grâce à cet outil, vous pouvez facilement naviguer parmi toutes vos entités et rechercher, ordonner ou filtrer les valeurs des attributs. Il vous aide à contrôler les données et à identifier rapidement les problèmes rencontrés à chaque étape du développement.

![alt-text](../assets/en/Admin/dataExplorer1.png)

## Configuration

L'Explorateur de données s'appuie sur le composant serveur web [`WebAdmin`](webAdmin.md) pour la configuration et les paramètres d'authentification.

- **configuration** : la configuration de l'Explorateur de données réutilise les [paramètres du serveur web `WebAdmin`](webAdmin.md#webadmin-settings),
- **authentification** : l'accès à l'Explorateur de données est accordé lorsque [l'utilisateur de la session est authentifié](webAdmin.md#authentication-and-session) et détient le privilège "WebAdmin". Lorsque l'on accède à l'Explorateur de données via l'élément de menu **Explorateur de données** (voir ci-dessous), une authentification automatique est fournie.

> L'accès à l'Explorateur de données peut être désactivé à l'aide de la fonction [`.setAdminProtection().`](API/DataStoreClass.md#setadminprotection)

## Ouverture de l'Explorateur de données

[Le serveur web `WebAdmin`](webAdmin.md#starting-the-webadmin-web-server) est démarré automatiquement si nécessaire lorsque l'on clique sur l'explorateur de données.

Pour se connecter à la page web de l'Explorateur de données :

- A partir d'une application 4D (avec interface) :
  - Pour ouvrir une nouvelle fenêtre 4D avec la page de l'Explorateur de données affichée dans une zone web, sélectionnez **Explorateur de données** dans le menu **Enregistrements** ou cliquez sur le bouton **Données** dans la barre d'outils principale.
  - Pour ouvrir l'Explorateur de données dans un onglet de navigateur externe, sélectionnez **Explorateur de données dans le navigateur** dans le menu **Enregistrements** ou appuyez sur la touche **Alt** (Windows)/**Option** (macOS) et cliquez sur le bouton **Données** dans la barre d'outils principale.
- À partir de 4D Server, sélectionnez **Explorateur de données dans le navigateur** dans le menu **Fenêtre** (l'Explorateur de données ne peut être ouvert que dans un navigateur externe).

- Que vous utilisiez une application 4D sans interface ou non, vous pouvez ouvrir votre navigateur web et entrer l'adresse suivante :

 `IPaddress:HTTPPort/dataexplorer` or `IPaddress:HTTPSPort/dataexplorer`

 Dans ce contexte, vous serez invité à saisir la [clé d'accès](webAdmin.md#access-key) pour ouvrir une session `WebAdmin` sur le serveur :

![alt-text](../assets/en/Admin/accessKeyEnter.png)

> Les valeurs [HTTPPort](webAdmin.md#http-port) et [HTTPSPort](webAdmin.md#https-port) sont configurées dans les paramètres de `WebAdmin`.

## Utilisation de l'Explorateur de données

En plus d'une vue complète et personnalisable de vos données, l'Explorateur de données vous permet de rechercher et d'ordonner vos données.

### Conditions requises

L'Explorateur de données prend en charge les navigateurs Web suivants :

- Chrome
- Safari
- Edge
- FireFox

La résolution minimale pour utiliser l'Explorateur de données est de 1280x720. La résolution recommandée est de 1920x1080.

### Principes de base

L'Explorateur de données fournit un accès global au modèle de données ORDA conformément aux [règles de mapping ORDA](ORDA/dsMapping.md#general-rules).

Vous pouvez passer au thème d'affichage **mode sombre** à l'aide du sélecteur situé en bas de la page :

![alt-text](../assets/en/Admin/dark.png)

![alt-text](../assets/en/Admin/dataExplorer2.png)

La page contient plusieurs zones :

- Sur le côté gauche, se trouvent la **zone des Dataclass** et la **zone des attributs**, pour sélectionner les dataclass et les attributs à afficher. Les attributs sont classés selon l'ordre de création de la structure sous-jacente. Les clés primaires et les attributs indexés ont une icône spécifique. Vous pouvez filtrer la liste des noms de dataclasses et d'attributs proposés en utilisant les zones de recherche respectives. ![alt-text](../assets/en/Admin/dataExplorer3.png)

- La partie centrale contient la **Zone de recherche** et la **Grille de données** (liste des entités de la dataclass sélectionnée). Chaque colonne de la grille représente un attribut du datastore.
  - Par défaut, toutes les entités sont affichées. Vous pouvez filtrer les entités affichées en utilisant la zone de recherche. Two query modes are available: [Query on attributes](#query-on-attributes) (selected by default), and the [Advanced query with expression](#advanced-queries-with-expression). Vous sélectionnez le mode de requête en cliquant sur le bouton correspondant (le bouton **X** permet de réinitialiser la zone de requête et donc de stopper le filtrage) : ![alt-text](../assets/en/Admin/dataExplorer4b.png)
  - Le nom de la dataclass sélectionnée est ajouté sous forme d'onglet au-dessus de la grille de données. A l'aide de ces onglets, vous pouvez passer d'une dataclasse à une autre qui a déjà été sélectionnée. Vous pouvez supprimer une dataclasse référencée en cliquant sur l'icône "supprimer" à droite du nom de la dataclass.
  - Vous pouvez réduire le nombre de colonnes en décochant les attributs dans la partie gauche. Vous pouvez également changer les colonnes dans la grille de données à l'aide du glisser-déposer. Vous pouvez cliquer sur l'en-tête d'une colonne pour [trier les entités](#ordering-entities) en fonction de ses valeurs (lorsque cela est possible).
  - Si une opération nécessite beaucoup de temps, une barre de progression s'affiche. Vous pouvez arrêter l'opération en cours à tout moment en cliquant sur le bouton rouge :<br/> ![alt-text](../assets/en/Admin/dataExplorer5.png)

- Sur la droite se trouve la zone **Détails** : elle affiche les valeurs des attributs de l'entité actuellement sélectionnée ainsi que les **données liées**, le cas échéant. Vous pouvez naviguer entre les entités de la dataclass en cliquant sur les liens **Premier** / **Précédent** / **Suivant** / **Dernier** en bas de la zone.
  - Tous les types d'attributs sont affichés, y compris les images, les objets (exprimés en json) ainsi que les [attributs calculés](../ORDA/ordaClasses.md#computed-attributes-1) et les [alias](../ORDA/ordaClasses.md#alias-attributes-1) .
  - Les données liées (relations N-vers-1 et 1-versN) peuvent être affichées par le biais de zones extensibles/réductibles :<br/> ![alt-text](../assets/en/Admin/dataExplorerRelated.png)
  - **Ctrl+Click** (Windows) ou **Command+Click** (macOS) sur un nom d'attribut lié dans la zone de droite affiche les valeurs de l'attribut dans une zone flottante indépendante :<br/> ![alt-text](../assets/en/Admin/dataExplorerFloat.png)

### Mise à jour des contenus

Lorsque les données ou le modèle ORDA sont modifiés du côté de la base de données (ajout de table, enregistrement édité ou supprimé, etc.), il suffit de rafraîchir la page de l'Explorateur de données dans le navigateur (à l'aide de la touche F5, par exemple).

### Ordonner les entités

Vous pouvez réorganiser la liste des entités affichées en fonction des valeurs des attributs. Tous les types d'attributs peuvent être utilisés pour un tri, sauf l'image et l'objet.

- Cliquez sur un en-tête de colonne pour ordonner les entités en fonction des valeurs d'attribut correspondantes. Par défaut, le tri est ascendant. Cliquez deux fois pour un tri décroissant. Une colonne utilisée pour trier les entités est affichée avec une petite icône et son nom est en *italique*.

![alt-text](../assets/en/Admin/dataExplorer7.png)

- Vous pouvez trier les attributs sur plusieurs niveaux. Par exemple, vous pouvez trier les employés par ville, puis par salaire. Pour ce faire, maintenez la touche **Maj** enfoncée et cliquez successivement sur chaque en-tête de colonne à inclure dans l'ordre de tri.

### Requête sur les attributs

Dans ce mode, vous pouvez filtrer les entités en saisissant les valeurs à rechercher (ou à exclure) dans les zones situées au-dessus de la liste des attributs. Vous pouvez filtrer un ou plusieurs attributs. La liste des entités est automatiquement mise à jour lors de la saisie.

![alt-text](../assets/en/Admin/dataExplorer6.png)

Si vous saisissez plusieurs attributs, un "ET" est automatiquement appliqué. Par exemple, le filtre suivant affiche les entités dont l'attribut *prénom* commence par "flo" ET la valeur de l'attribut *salaire* > 50000 :

![alt-text](../assets/en/Admin/dataExplorer9.png)

Le bouton **X** permet de supprimer les attributs saisis et de stopper ainsi le filtrage.

Différents opérateurs et options de requête sont disponibles, en fonction du type de données de l'attribut.

> Vous ne pouvez pas filtrer sur les attributs d'image ou d'objet.

#### Opérateurs numériques

Avec les attributs numériques, de date et d'heure, l'opérateur "=" est sélectionné par défaut. Toutefois, vous pouvez sélectionner un autre opérateur dans la liste des opérateurs (cliquez sur l'icône "=" pour afficher la liste) :

![alt-text](../assets/en/Admin/DEFilter1.png)

#### Dates

Avec les attributs de date, vous pouvez saisir la date à utiliser à l'aide d'un widget de sélection de date (cliquez sur la zone de la date pour afficher le calendrier) :

![alt-text](../assets/en/Admin/DEFilter2.png)

#### Booléens

Lorsque vous cliquez sur une zone d'attribut booléen, vous pouvez filtrer sur les valeurs **true**/**false** mais aussi sur les valeurs **null**/**not null** :

![alt-text](../assets/en/Admin/DEFilter3.png)

- **null** indique que la valeur de l'attribut n'a pas été définie
- **not null** indique que la valeur de l'attribut est définie (donc true ou false).

#### Text

Les filtres texte ne sont pas diacritiques (a = A).

Le filtre est du type "commence par". Par exemple, si vous saisissez "Jim", vous obtiendrez les valeurs "Jim" et "Jimmy".

Vous pouvez également utiliser le caractère générique (@) pour remplacer un ou plusieurs caractères de départ. Par exemple :

| Un filtre avec | Résultats                                                 |
| -------------- | --------------------------------------------------------- |
| Bel            | Toutes les valeurs qui commencent par "Bel"               |
| @do            | Toutes les valeurs contenant "do"                         |
| Bel@do         | Toutes les valeurs commençant par "Bel" et contenant "do" |

Si vous souhaitez créer des requêtes plus spécifiques, telles que "est exactement", vous devrez utiliser la fonction de requêtes avancées.

### Requêtes avancées avec des expressions

Lorsque vous sélectionnez cette option, une zone de requête s'affiche au-dessus de la liste des entités, et vous permet de saisir une expression à utiliser pour filtrer le contenu :

![alt-text](../assets/en/Admin/dataExplorer8.png)

Vous pouvez saisir des requêtes avancées qui ne sont pas disponibles en tant que requêtes d'attributs. Par exemple, si vous voulez trouver des entités dont l'attribut *firstname* contient "Jim" mais pas "Jimmy", vous pouvez écrire :

```
firstname=="Jim"
```

Vous pouvez utiliser n'importe quelle expression de requête ORDA, comme [documenté avec la fonction `query()`](API/DataClassClass.md#query), avec les limitations ou différences suivantes :

- Par sécurité, vous ne pouvez pas exécuter de formules en utilisant `eval()`.
- Les placeholders ne peuvent pas être utilisés ; vous devez saisir une *queryString* avec des valeurs.
- Les valeurs de chaîne contenant des caractères d'espacement doivent être intégrées dans des guillemets doubles ("").

Par exemple, avec la dataclass Employee, vous pouvez écrire :

```
firstname = "Marie Sophie" ET manager.lastname = "@th"
```

Vous pouvez cliquer sur l'icône `v` pour afficher le [`queryPlan`](API/EntitySelectionClass.md#queryplan) et le [`queryPath`](API/EntitySelectionClass.md#querypath). Dans cette zone, vous pouvez survoler les blocs de sous-requêtes pour avoir des informations détaillées par sous-requête :

![alt-text](../assets/en/Admin/dataExplorer12.png)

Faites un clic droit dans la zone des requêtes pour afficher les précédentes requêtes valides :

![alt-text](../assets/en/Admin/dataExplorer11.png)
