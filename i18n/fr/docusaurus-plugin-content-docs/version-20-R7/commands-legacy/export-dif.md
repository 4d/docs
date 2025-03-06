---
id: export-dif
title: EXPORT DIF
slug: /commands/export-dif
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT DIF.Syntax-->**EXPORT DIF** ( {*laTable* ;} *nomFichier* )<!-- END REF-->
<!--REF #_command_.EXPORT DIF.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle effectuer l'export ou Table par défaut si ce paramètre est omis |
| nomFichier | Text | &#8594;  | Document DIF à exporter |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXPORT DIF.Summary-->La commande **EXPORT DIF** écrit dans *document* (document DIF Windows ou Mac OS) les données des enregistrements de la sélection courante de la table *laTable* du process courant.<!-- END REF-->

L'opération d'export s'effectue par l'intermédiaire du formulaire sortie courant. L'opération d'export écrit les champs et les variables en fonction de l'ordre de saisie dans le formulaire sortie. C'est pourquoi vous devez veiller à utiliser un formulaire sortie ne contenant que les champs ou objets saisissables que vous voulez exporter. Ne placez pas de boutons ou autres objets sur le formulaire sortie. Les objets de sous-formulaire sont ignorés.

L'événement On Load est envoyé à la méthode du formulaire pour chaque enregistrement exporté. Utilisez cet événement pour définir les variables utilisées dans le formulaire d'export.

Le paramètre *document* peut créer un nouveau document ou désigner un document existant. Si le document a le même nom qu'un document existant, ce dernier est remplacé. Le document peut contenir un chemin d'accès de volume et/ou de dossiers. Si vous passez une chaîne vide, la boîte de dialogue standard de sauvegarde de fichiers est affichée. Si l'utilisateur annule ce dialogue, l'opération d'export est annulée et la variable système OK est mise à 0\. 

Un thermomètre de progression est affiché pendant l'export. L'utilisateur peut annuler l'opération en cliquant sur le bouton **Stop**. Si l'export s'est correctement déroulé, la variable système OK est mise à 1\. En cas d'erreur ou d'interruption de l'opération, la variable système OK est mise à 0\. Vous pouvez cacher le thermomètre au moyen de la commande [MESSAGES OFF](messages-off.md).

La commande utilise par défaut le jeu de caractères UTF-8\. Les documents au format DIF utilisant généralement le jeu de caractères IBM437, il peut être nécessaire d'utiliser la commande [USE CHARACTER SET](use-character-set.md) pour définir le jeu de caractères approprié. 

Lors de l'utilisation de **EXPORT DIF**, le délimiteur de champs par défaut est le caractère de tabulation (code 9). Le délimiteur d'enregistrement est par défaut le retour chariot (code 13). Vous pouvez modifier ces valeurs en assignant de nouvelles valeurs aux deux *Variables système* *FldDelimit* et *RecDelimit*. L'utilisateur peut modifier ces valeurs par défaut dans le dialogue d'export du mode Développement. Comme les champs Texte peuvent contenir des retours chariot, soyez prudent si vous utilisez le retour chariot comme délimiteur entre les champs à exporter.

#### Exemple 

Cet exemple exporte des données vers un document DIF. Cette méthode commence par le choix du formulaire sortie, puis effectue l'export :

```4d
 FORM SET OUTPUT([Personnes];"Export")
 EXPORT DIF([Personnes];"Nouvelles Personnes.dif") // Export vers le document "Nouvelles Personnes.dif"
```

#### Variables et ensembles système 

OK prend la valeur 1 si l'export s'est correctement déroulé, sinon elle prend la valeur 0.

#### Voir aussi 

[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 84 |
| Thread safe | &cross; |
| Modifie les variables | OK |


