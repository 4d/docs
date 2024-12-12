---
id: import-text
title: IMPORT TEXT
slug: /commands/import-text
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT TEXT.Syntax-->**IMPORT TEXT** ( {*laTable* ;} *nomFichier* )<!-- END REF-->
<!--REF #_command_.IMPORT TEXT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle effectuer l'import ou Table par défaut si ce paramètre est omis |
| nomFichier | Text | &#8594;  | Document texte à importer |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.IMPORT TEXT.Summary-->La commande **IMPORT TEXT** lit les données de *document* (document texte Windows ou Mac OS) et les écrit dans la table *laTable* en créant de nouveaux enregistrements.<!-- END REF-->

L'opération d'import s'effectue par l'intermédiaire du formulaire entrée courant. Les champs et les variables sont lus en fonction du plan où ils se trouvent dans le formulaire entrée. Soyez donc attentif à ce qui se trouve au premier ou au deuxième plan en matière d'objets (champs et variables) dans le formulaire. Le premier objet dans lequel des données sont importées doit être à l'arrière-plan du formulaire. Si le nombre de champs et de variables dans le formulaire ne correspond pas au nombre de champs à importer, les champs supplémentaires sont ignorés. Un formulaire entrée utilisé pour l'import ne peut contenir de boutons. Les objets de sous-formulaire sont ignorés.

**Note :** Un moyen de s'assurer que les données sont importées dans les bons objets est de sélectionner l'objet dans lequel sera importé le premier champ. Cet objet doit être au premier plan. Pour l'import dans le deuxième champ, placer ce champ devant le premier et ainsi de suite, pour tous les champs et variables. Le champ qui se trouve au premier plan est donc celui dans lequel sont placées les dernières données du document à importer.

L'événement On Validate est envoyé à la méthode du formulaire pour chaque enregistrement importé. Utilisez cet événement pour copier les données des variables vers les champs, si vous utilisez des variables dans le formulaire d'import.

Le paramètre *document* peut contenir un chemin d'accès aux noms de volumes et de dossiers. Si vous passez une chaîne vide, la boîte de dialogue standard d'ouverture de fichiers est affichée. Si l'utilisateur annule le dialogue, l'opération d'import est annulée et la variable système OK est mise à 0\. 

Un thermomètre de progression est affiché pendant l'import. L'utilisateur peut annuler l'opération en cliquant sur le bouton **Stop**. Les enregistrements déjà importés le resteront. Si l'import s'est correctement déroulé, la variable système OK est mise à 1\. En cas d'erreur ou d'interruption de l'opération, la variable système OK est mise à 0\. Vous pouvez cacher le thermomètre au moyen de la commande [MESSAGES OFF](messages-off.md).

La commande utilise par défaut le jeu de caractères UTF-8\. Vous pouvez utiliser la commande [USE CHARACTER SET](use-character-set.md) pour modifier ce jeu de caractères. 

Lors de l'utilisation de **IMPORT TEXT**, le délimiteur de champs par défaut est le caractère de tabulation (code 9). Le délimiteur d'enregistrements par défaut est le retour chariot (code 13). Vous pouvez modifier ces valeurs par défaut en assignant de nouvelles valeurs aux variables système FldDelimit et RecDelimit. L'utilisateur peut modifier ces valeurs par défaut dans la boîte de dialogue d'import du mode Développement. Comme les champs Texte peuvent contenir des Retours chariot, soyez prudent si vous utilisez le Retour chariot comme délimiteur entre les champs à importer.

#### Exemple 

Cet exemple importe des données d'un document texte. Cette méthode commence par le choix du formulaire. Ici, vous changez les délimiteurs, et vous faites l'import :

```4d
 FORM SET INPUT([Personnes];"Import")
 FldDelimit:=27 // caractère de délimitation : Escape
 RecDelimit:=10 // caractère de délimitation : Line Feed
 IMPORT TEXT([Personnes];"Nouvelles Personnes.txt") // Import du document “Nouvelles Personnes.txt”
```

#### Variables et ensembles système 

OK prend la valeur 1 si l'import s'est correctement déroulé, sinon elle prend la valeur 0\. 

#### Voir aussi 

[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[USE CHARACTER SET](use-character-set.md)  