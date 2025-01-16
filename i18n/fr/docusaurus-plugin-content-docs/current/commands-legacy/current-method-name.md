---
id: current-method-name
title: Current method name
slug: /commands/current-method-name
displayed_sidebar: docs
---

<!--REF #_command_.Current method name.Syntax-->**Current method name**  : Text<!-- END REF-->
<!--REF #_command_.Current method name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom de la méthode d’appel |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current method name.Summary-->La commande **Current method name** retourne le nom de la méthode dans laquelle elle est appelée.<!-- END REF--> Cette commande est utile dans le cadre du débogage de méthodes génériques.

En fonction du type de méthode d’appel, la chaîne retournée peut prendre l’une des formes suivantes :

| **Méthode d’appel**                          | **Chaîne retournée**                                 |
| -------------------------------------------- | ---------------------------------------------------- |
| Méthode base                                 | NomMéthode                                           |
| Trigger                                      | Trigger sur \[NomTable\]                             |
| Méthode projet                               | NomMéthode                                           |
| Méthode formulaire table                     | \[NomTable\].NomFormulaire                           |
| Méthode formulaire projet                    | NomFormulaire                                        |
| Méthode objet formulaire table               | \[NomTable\].NomFormulaire.NomObjet                  |
| Méthode objet formulaire projet              | NomFormulaire.NomObjet                               |
| Classe constructeur                          | NomClasse:Constructor                                |
| Classe fonction                              | NomClasse.NomFonction                                |
| Méthode projet de composant                  | NomMéthode                                           |
| Méthode formulaire projet de composant       | NomFormulaire (NomComposant)                         |
| Méthode objet formulaire projet de composant | NomFormulaire (NomComposant).NomObjet (NomComposant) |

Cette commande ne doit pas être appelée depuis une formule 4D.

**Note :** Pour que cette commande fonctionne en mode compilé, elle ne doit pas figurer dans le code dont le contrôle d'exécution a été désactivé. Voir *Contrôle d’exécution*.


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 684 |
| Thread safe | &check; |


