---
id: compact-data-file
title: Compact data file
slug: /commands/compact-data-file
displayed_sidebar: docs
---

<!--REF #_command_.Compact data file.Syntax-->**Compact data file** ( *cheminStructure* ; *cheminDonnées* {; *dossierArchive* {; *options* {; *méthode*}}} ) : Text<!-- END REF-->
<!--REF #_command_.Compact data file.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminStructure | Text | &#8594;  | Chemin d’accès du fichier de structure |
| cheminDonnées | Text | &#8594;  | Chemin d’accès du fichier de données |
| dossierArchive | Text | &#8594;  | Chemin d’accès du dossier dans lequel placer le fichier de données original |
| options | Integer | &#8594;  | Options de compactage |
| méthode | Text | &#8594;  | Nom de la méthode 4D de rétro-appel |
| Résultat | Text | &#8592; | Chemin d’accès complet du dossier contenant le fichier de données original |

<!-- END REF-->

#### Description 

<!--REF #_command_.Compact data file.Summary-->La commande **Compact data file** effectue un compactage du fichier de données désigné par le paramètre *cheminDonnées* associé au fichier de structure *cheminStructure*.<!-- END REF--> Pour plus d’informations sur le compactage, reportez-vous au manuel Mode Développement.

Pour assurer la continuité du fonctionnement de la base, le nouveau fichier de données compacté remplace automatiquement le fichier original. Par sécurité, le fichier original n’est pas modifié et est déplacé dans un dossier spécial nommé “Replaced files (compacting) AAAA-MM-JJ HH-MM-SS” où AAAA-MM-JJ HH-MM-SS représente la date et l’heure de la sauvegarde. Par exemple : “Replaced files (compacting) 2015-09-27 15-20-35”.

La commande retourne le chemin d’accès complet du dossier effectivement créé pour stocker le fichier de données original. Cette commande peut être exécutée depuis 4D (mode local) ou 4D Server uniquement (procédure stockée). Le fichier de données à compacter doit correspondre au fichier de structure désigné par *cheminStructure*. En outre, il ne doit PAS être ouvert au moment de l’exécution de la commande, sinon une erreur est générée.  
Si une erreur se produit durant le processus de compactage, les fichiers originaux sont conservés à leur emplacement initial. Si un fichier d’index (fichier .4DIndx) est associé au fichier de données, il est également compacté. Comme pour le fichier de données, le fichier original est sauvegardé et la nouvelle version compactée remplace la précédente. 

* Passez dans *cheminStructure* le chemin d’accès complet du fichier de structure associé au fichier de données que vous souhaitez compacter. Cette information est nécessaire à la procédure de compactage. Le chemin d’accès doit être exprimé dans la syntaxe du système d’exploitation. Vous pouvez également passer une chaîne vide, dans ce cas une boîte de dialogue standard d’ouverture de fichiers apparaît, permettant à l’utilisateur de désigner le fichier de structure à utiliser.
* Vous pouvez passer dans *cheminDonnées* une chaîne vide, un nom de fichier ou un chemin d’accès complet, exprimé dans la syntaxe du système d’exploitation. Si vous passez une chaîne vide, la boîte de dialogue standard d’ouverture de fichier apparaît, permettant à l’utilisateur de désigner le fichier de données à compacter. Ce fichier doit correspondre au fichier de structure défini dans le paramètre *cheminStructure*. Si vous passez uniquement un nom de fichier de données, 4D le recherchera au même niveau que le fichier de structure.
* Le paramètre facultatif *dossierArchive* permet de désigner l’emplacement du dossier “Replaced files (compacting) Dateheure” destiné à recueillir les versions originales des fichiers de données ainsi que des éventuels fichiers d’index.  
La commande retourne le chemin d’accès complet du dossier effectivement créé.  
\- Si vous omettez ce paramètre, les fichiers d’origine sont automatiquement déplacés dans un dossier “Replaced files (compacting) Dateheure” créé à côté du fichier de structure.  
\- Si vous passez une chaîne vide, une boîte de dialogue standard d’ouverture de dossier apparaît, permettant à l’utilisateur de désigner l’emplacement du dossier à créer.  
\- Si vous passez un chemin d’accès (exprimé dans la syntaxe du système d’exploitation), la commande créera le dossier “Replaced files (compacting) Dateheure” à cet emplacement.
* Le paramètre facultatif *options* permet de définir diverses options liées au compactage. Pour cela, utilisez les constantes suivantes, placées dans le thème *Maintenance fichier de données*. Vous pouvez passer plusieurs options en les cumulant :  

| Constante               | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |  
| ----------------------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Compact address table   | Entier long | 131072 | Forcer la réécriture de la table d’adresses des enregistrements (ralentit le compactage). A noter que dans ce cas, les numéros des enregistrements sont réécrits. Si vous passez uniquement cette option, 4D active automatiquement l’option ’Mettre à jour enregistrements’.                                                                                                                                                                                                                                    |  
| Create process          | Entier long | 32768  | Lorsque cette option est passée, le compactage sera asynchrone et vous devrez gérer les résultats à l’aide de la méthode de rétro-appel (voir ci-dessous). 4D n’affichera pas de barre de progression (il est possible de le faire via la méthode de rétro-appel). La variable système OK prendra la valeur 1 si le process a été correctement lancé et 0 dans les autres cas. Lorsque cette option n’est pas passée, la variable OK prendra la valeur 1 si le compactage s’est correctement déroulé et sinon 0. |  
| Do not create log file  | Entier long | 16384  | En principe, la commande crée un fichier d’historique au format xml (reportez-vous à la fin de la description de la commande). Vous pouvez annuler ce fonctionnement en passant cette option.                                                                                                                                                                                                                                                                                                                    |  
| Timestamp log file name | Entier long | 262144 | Lorsque cette option est passée, le nom du fichier d'historique généré contiendra la date et l'heure de sa création, par conséquent il ne remplacera aucun fichier d'historique éventuellement déjà généré. Par défaut, si cette option n'est pas passée, le nom du fichier n'est pas horodaté, et chaque nouveau fichier généré remplace le précédent.                                                                                                                                                          |  
| Update records          | Entier long | 65536  | Forcer la réécriture de tous les enregistrements suivant la définition courante des champs dans la structure                                                                                                                                                                                                                                                                                                                                                                                                     |
* Le paramètre *méthode* permet de désigner une méthode de rétro-appel qui sera régulièrement appelée durant le compactage si l’option Create process a été passée. Dans le cas contraire, la méthode de rétro-appel n’est jamais appelée. Pour plus d’informations sur cette méthode, reportez-vous à la description de la commande [VERIFY DATA FILE](verify-data-file.md).

Par défaut, la commande **Compact data file** crée un fichier d'historique au format xml (si vous n'avez pas passé l'option Do not create log file, cf. paramètre *options*). Son nom est basé sur celui du fichier de structure de la base et il est placé dans le dossier **Logs** de cette base. Par exemple, pour un fichier de structure nommé “myDB.4db”, le fichier d’historique sera nommé “myDB\_Compact\_Log.xml”.   
Si vous avez passé l'option Timestamp log file name, le nom du fichier d'historique inclut la date et l'heure de sa création sous la forme "AAAA-MM-JJ HH-MM-SS", ce qui donne par exemple : “myDB\_Compact\_Log\_2015-09-27 15-20-35.xml”. Ce principe permet d'éviter que chaque nouveau fichier d'historique écrase le précédent, mais pourra nécessiter ultérieurement une action manuelle afin de supprimer les fichiers superflus.   
Quelle que soit l'option sélectionnée, dès lors qu'un fichier d'historique est généré, son chemin est retourné dans la variable système *Document* à l'issue de l'exécution de la commande.

#### Exemple 

L’exemple suivant (Windows) effectue le compactage d’un fichier de données :

```4d
 $ficStruc:=Structure file
 $ficDonnées:="C:\\Bases\\Factures\\Janvier\\Factures.4dd"
 $ficOrig:="C:\\Bases\\Factures\\Archives\\Janvier\"
 $dossierArch:=Compact data file($ficStruc;$ficDonnées;$ficOrig)
```

#### Variables et ensembles système 

Si l’opération de compactage s’est déroulée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. Si un fichier d'historique a été généré, son chemin complet est retourné dans la variable système Document. 

#### Voir aussi 

[Table fragmentation](table-fragmentation.md)  
[VERIFY DATA FILE](verify-data-file.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 937 |
| Thread safe | &check; |
| Modifie les variables | OK, Document |


