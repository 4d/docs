---
id: change-licenses
title: CHANGE LICENSES
slug: /commands/change-licenses
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE LICENSES.Syntax-->**CHANGE LICENSES**<!-- END REF-->
<!--REF #_command_.CHANGE LICENSES.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.CHANGE LICENSES.Summary-->La commande **CHANGE LICENSES** affiche la boîte de dialogue du Gestionnaire de licences 4D.<!-- END REF--> 

Cette commande est utilisable avec une application 4D monoposte uniquement et ne peut pas être appelée depuis un composant. Lorsque les mots de passe sont activés, elle peut être exécutée uniquement par le Super\_Utilisateur ou l'Administrateur ; elle ne fait rien si elle est appelée par un utilisateur ne disposant pas des privilèges adéquats.

La boîte de dialogue du Gestionnaire de licences vous permet notamment d’activer des plug-ins ou le serveur Web sur le poste où elle est exécutée. Dans 4D, vous pouvez afficher cette boîte de dialogue en sélectionnant la commande **Gestionnaire de licences...** dans le menu **Aide**. 

**CHANGE LICENSES** permet d’activer des licences et d’ajouter des numéros d'expansion dans une application monoposte compilée diffusée à vos clients. Les développeurs 4D et les administrateurs de systèmes peuvent utiliser cette commande pour diffuser une application 4D, en laissant à leurs clients le soin de saisir eux-même les numéros sans devoir leur faire parvenir une mise à jour de l’application. 

Pour plus d'informations sur le fonctionnement de cette boîte de dialogue, reportez-vous à la section *Installation et activation* du Guide d'installation de 4D.

#### Exemple 

Dans une boîte de dialogue de configuration ou de préférences personnalisée, vous placez un bouton auquel la méthode suivante est associée :

```4d
  // Méthode objet du bouton bLicence
 CHANGE LICENSES
```

Vous permettrez ainsi à un utilisateur d‘activer des licences sans avoir à modifier la base de données.

#### Voir aussi 

[License info](license-info.md)  
[Is license available](is-license-available.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 637 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


