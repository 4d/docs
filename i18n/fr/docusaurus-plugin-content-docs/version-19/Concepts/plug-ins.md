---
id: plug-ins
title: Plug-ins
---

Au fur et à mesure que vous développerez une application 4D, vous découvrirez de nombreuses fonctionnalités que vous n'aviez pas remarqué lorsque vous avez démarré. Vous pouvez même étendre la version standard de 4D en ajoutant des **plug-ins** à votre environnement de développement 4D.

## Pourquoi un plug-in ?

Bien que 4D propose des centaines de méthodes intégrées permettant de manipuler des objets et des enregistrements, et d'implémenter une interface utilisateur, une utilisation ou des fonctionnalités spéciales (parfois dépendantes de la plate-forme) peuvent être nécessaires : l'une peut nécessiter ODBC sous Windows, une autre peut nécessiter des services Apple sous macOS, et un autre peut souhaiter implémenter des outils statistiques spécifiques, une connexion à un réseau social, une plateforme de paiement, un accès à un fichier sur le réseau, une interface utilisateur spéciale ou une structure d'image privée.

Il est évident que couvrir tous les domaines des systèmes d'exploitation macOS et Windows au moyen de commandes 4D mènerait certainement à un produit contenant des milliers de commandes et, dans le même temps, la plupart des utilisateurs n'auraient pas besoin d'un si grand ensemble de fonctionnalités. De plus, la création d'un outil aussi complet rendrait l'environnement 4D incroyablement complexe et demanderait des mois d'étude à la plupart des utilisateurs avant de pouvoir obtenir des résultats utiles.

La nature modulaire de l'environnement 4D permet la création d'applications de base, mais n'exclut pas le développement de systèmes extrêmement complexes. L'architecture du plug-in 4D ouvre l'environnement 4D à tout type d'application ou d'utilisateur. Les plug-ins 4D multiplient la puissance et la productivité de cette application ou de l'utilisateur.

## Qu'est-ce qu'un plug-in et à quoi sert-il ?

Un plug-in est un morceau de code que 4D lance au démarrage. Il ajoute des fonctionnalités à 4D et augmente ainsi sa capacité.

Habituellement, un plug-in fait des choses :
- Que 4D ne peut pas effectuer (c'est-à-dire une technologie de plate-forme spécifique),
- Qui sera très difficile à écrire en utilisant uniquement 4D,
- Qui sont uniquement disponibles en tant que point d'entrée de plug-in

Un plug-in contient généralement un ensemble de routines données au développeur 4D. Il peut gérer une zone externe et exécuter un processus externe.

- Une **routine de plug-in** est une routine écrite en langage natif (généralement C ou C ++) qui déclenche une action.
- Une **zone externe** est une partie d'un formulaire pouvant presque tout afficher et interagir avec l'utilisateur si nécessaire.
- Un **processus externe** est un processus qui s'exécute seul, généralement en boucle, et qui fait quasiment tout ce qu'il souhaite. Tout le code de process appartient au plug-in, 4D est simplement présent pour recevoir/envoyer des événements au process.

### Note importante

Un plug-in peut être très simple, avec une seule routine effectuant une très petite tâche, ou très complexe, impliquant une centaine de routines et de domaines. Cependant, chaque développeur de plug-in doit se rappeler qu'un plug-in est un "échantillon" de code. C'est le plug-in qui s'exécute dans 4D, et non l'inverse. En tant que morceau de code, c'est l'hôte de 4D; ce n'est pas une application autonome. Il partage le temps CPU et la mémoire avec 4D et d'autres plug-ins. Il doit donc s'agir d'un code poli, qui utilise exactement ce qui est nécessaire à son fonctionnement. Par exemple, dans les longues boucles, un plug-in doit appeler `PA_Yield ()` pour donner du temps au planificateur 4D, à moins que sa tâche ne soit critique aussi bien pour lui que pour l'application.

## Comment créer un plug-in ?

Sur GitHub, 4D fournit un [**plug-in SDK**](https://github.com/4d/4D-Plugin-SDK) open source, contenant le plug-in API 4D et l'assistant de plug-in 4D :

- le [**Plugin API de 4D**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), écrit en C, ajoute plus de 400 fonctions qui vous aident à créer facilement vos propres plug-ins pour ajouter de nouvelles fonctionnalités à votre application 4D. Les fonctions de l'API 4D Plug-in gèrent toutes les interactions entre l'application 4D et votre plug-in.
- [**L'assistant de plug-in 4D**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) est un outil essentiel qui simplifie la tâche de développement des plug-ins 4D. Il écrit le code dont 4D a besoin pour interagir correctement avec un plug-in et le charger, afin de vous concentrer sur votre propre code.

## Comment installer un plug-in?

L’installation des plug-ins et composants dans l’environnement 4D s’effectue par simple copie des fichiers des plug-ins ou des composants dans des dossiers appropriés.

Les dossiers “NomPlugin.bundle” (appelés paquets ou packages sous Mac Os) contiennent à la fois les versions Windows et Mac Os des plug-ins 4D. Leur architecture interne spécifique permet notamment à 4D Server de charger la version adéquate en fonction de la plate-forme d’exécution du poste client. Pour installer un plug-in dans votre environnement, il vous suffit de placer le dossier ou progiciel “NomPlugin.bundle” concerné dans le dossier **Plugins** souhaité.

Vous pouvez placer les dossiers Plugins et Components à deux endroits :

- Au niveau de l’application 4D exécutable, c'est-à-dire .:
  - Sous Windows : à côté du fichier .exe
  - Sous macOS : au premier niveau du dossier Contents à l'intérieur du package de l'application. Dans ce cas, les plug-ins sont disponibles dans chaque projet ouvert par l'application.
- Au même niveau que le dossier Project. Dans ce cas, les plug-ins et les composants sont disponibles dans cette application uniquement.

Le choix de l’emplacement dépend de votre mode d’utilisation du plug-in ou du composant.

Si un même plug-in ou un même composant est placé aux deux endroits, 4D charge uniquement celui situé à côté de la structure. Dans le cas d’une application compilée et fusionnée avec 4D Volume Desktop, la présence de plusieurs instances d’un même plug-in ou d'un même composant empêchera l’ouverture de l’application.

Les plug-ins et les composants sont chargés par 4D lors du lancement de l’application. Vous devez donc quitter votre application 4D avant d’effectuer vos copies de fichiers ou dossiers. Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. Si l’utilisation d'un plug-in nécessite une licence spécifique, le plug-in est chargé mais n’est pas actif.