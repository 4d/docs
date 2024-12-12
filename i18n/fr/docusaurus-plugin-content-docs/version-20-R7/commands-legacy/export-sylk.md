---
id: export-sylk
title: EXPORT SYLK
slug: /commands/export-sylk
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT SYLK.Syntax-->**EXPORT SYLK** ( {*laTable* ;} *nomFichier* )<!-- END REF-->
<!--REF #_command_.EXPORT SYLK.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle effectuer l'export ou Table par défaut si ce paramètres est omis |
| nomFichier | Text | &#8594;  | Document SYLK à exporter |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXPORT SYLK.Summary-->La commande **EXPORT SYLK** écrit dans *document* (document SYLK Windows ou Mac OS) les données des enregistrements de la sélection courante de la table *laTable* du process courant.<!-- END REF-->

L'opération d'export s'effectue par l'intermédiaire du formulaire sortie courant. Les champs et les variables sont écrits en fonction de l'ordre de saisie dans le formulaire sortie. C'est pourquoi vous devez veiller à utiliser un formulaire sortie ne contenant que les champs ou objets saisissables que vous voulez exporter. Ne placez pas de boutons ou autres objets sur le formulaire sortie. Les objets de sous-formulaire sont ignorés.

L'événement On Load est envoyé à la méthode du formulaire pour chaque enregistrement exporté. Utilisez cet événement pour définir les variables utilisées dans le formulaire d'export.

Le paramètre *document* peut créer un nouveau document ou désigner un document existant. Si le document a le même nom qu'un document existant, ce dernier est remplacé. Le document peut contenir un chemin d'accès de volume et/ou de dossiers. Si vous passez une chaîne vide, la boîte de dialogue standard de sauvegarde de fichiers est affichée. Si l'utilisateur annule ce dialogue, l'opération d'export est annulée et la variable système OK est mise à 0\. 

Un thermomètre de progression est affiché pendant l'export. L'utilisateur peut annuler l'opération en cliquant sur le bouton **Stop**. Si l'export s'est correctement déroulé, la variable système OK est mise à 1\. En cas d'erreur ou d'interruption de l'opération, la variable système OK est mise à 0\. Vous pouvez cacher le thermomètre au moyen de la commande [MESSAGES OFF](messages-off.md).

La commande utilise par défaut le jeu de caractères UTF-8\. Les documents au format SYLK utilisant généralement le jeu de caractères ISO-8859-1, il peut être nécessaire d'utiliser la commande [USE CHARACTER SET](use-character-set.md) pour fixer le jeu de caractères approprié. 

Lors de l'utilisation de **EXPORT SYLK**, le délimiteur de champs par défaut est le caractère de tabulation (code 9). Le délimiteur d'enregistrement est par défaut le retour chariot (code 13) sous OS X et le retour chariot+retour à la ligne (code 13 + code 10) sous Windows. Vous pouvez modifier ces valeurs en assignant de nouvelles valeurs aux deux *Variables système* *FldDelimit* et *RecDelimit*. L'utilisateur peut modifier ces valeurs par défaut dans le dialogue d'export du mode Développement. A noter que si des champs exportés contiennent des caractères définis comme délimiteurs de champ ou d'enregistrement, ces caractères sont automatiquement remplacés par des espaces dans le fichier exporté, afin de ne pas perturber le processus d'import. 

#### Exemple 

Cet exemple exporte des données vers un document SYLK. La méthode commence par le choix du formulaire sortie, puis l'export est déclenché :

```4d
 FORM SET OUTPUT([Personnes];"Export")
 EXPORT SYLK([Personnes];"Nouvelles Personnes.slk") // Export vers le document "Nouvelles Personnes.slk"
```

#### Variables et ensembles système 

OK prend la valeur 1 si l'export s'est correctement déroulé, sinon elle prend la valeur 0\. 

#### Voir aussi 

[EXPORT DIF](export-dif.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT SYLK](import-sylk.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 85 |
| Thread safe | &cross; |
| Modifie les variables | OK |


