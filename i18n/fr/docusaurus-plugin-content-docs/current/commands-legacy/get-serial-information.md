---
id: get-serial-information
title: GET SERIAL INFORMATION
slug: /commands/get-serial-information
displayed_sidebar: docs
---

<!--REF #_command_.GET SERIAL INFORMATION.Syntax-->**GET SERIAL INFORMATION** ( *clé* ; *nomUtilisateur* ; *société* ; *connectés* ; *maxUtilisateurs* )<!-- END REF-->
<!--REF #_command_.GET SERIAL INFORMATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| clé | Integer | &harr; | Clé unique du produit (crypté) |
| nomUtilisateur | Text | &harr; | Nom enregistré |
| société | Text | &harr; | Organisation enregistrée |
| connectés | Integer | &harr; | Nombre d’utilisateurs connectés |
| maxUtilisateurs | Integer | &harr; | Nombre maximum d’utilisateurs |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET SERIAL INFORMATION.Summary-->La commande **GET SERIAL INFORMATION** retourne diverses informations relatives à la sérialisation de l’application 4D courante.<!-- END REF-->

* *clé* : identifiant unique du produit installé. Ce numéro unique correspond à une seule application 4D (4D Server, 4D en mode local, 4D Desktop, etc.) installée sur un seul poste. Bien entendu, ce numéro est crypté.
* *utilisateur* : Nom de l’utilisateur de l’application, tel qu’il a été saisi au moment de l’installation.
* *société* : Nom de la société ou de l’organisation à laquelle appartient l’utilisateur, tel qu’il a été saisi au moment de l’installation.
* *connectés* : Nombre d’utilisateurs connectés au moment de l’exécution de la commande.
* *maxUtilisateurs* : Nombre maximal d’utilisateurs pouvant se connecter simultanément.

**Note :** Les deux derniers paramètres retournent toujours 1 pour les versions monopostes de 4D, sauf lorsqu’il s’agit de versions de démonstration, auquel cas ils retournent 0\. 

La commande **GET SERIAL INFORMATION** s’inscrit dans le schéma général de protection des composants proposé par 4D.  
  
Les développeurs de composants peuvent, s’ils le souhaitent, lier chaque copie de leur produit à une seule application 4D installée, afin d’empêcher toute copie illicite. 

Le principe de fonctionnement du système est le suivant : un utilisateur souhaitant acquérir un composant fournit au développeur sa clé unique — générée à l’aide de la commande **GET SERIAL INFORMATION**. Cette opération peut, par exemple, être effectuée par l’intermédiaire d’un formulaire “Bon de commande” intégré à la version de démonstration du composant. La clé générée est unique : il n’existe qu’une clé par application 4D installée.   
Le développeur du composant peut alors générer son propre numéro de série, en combinant la clé et l’algorithme de cryptage de son choix. Le composant livré comportera une fonction permettant de tester si les informations retournées par **GET SERIAL INFORMATION** correspondent bien à ce numéro de série. Dans le cas contraire, le composant sera rendu inutilisable. 

**Note :** Les développeurs de plug-ins peuvent également bénéficier de ce système de protection. Pour plus d’informations, reportez-vous à la [documentation de 4D Plugin Kit](http://sources.4d.com/trac/4d%5F4dpluginapi#no1).
