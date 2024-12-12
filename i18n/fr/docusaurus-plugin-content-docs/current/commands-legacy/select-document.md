---
id: select-document
title: Select document
slug: /commands/select-document
displayed_sidebar: docs
---

<!--REF #_command_.Select document.Syntax-->**Select document** ( *répertoire* ; *typesFichiers* ; *titre* ; *options* {; *sélectionnés*} ) : Text<!-- END REF-->
<!--REF #_command_.Select document.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| répertoire | Text, Integer | &#8594;  | • Chemin d’accès du répertoire à afficher par défaut dans la boîte de dialogue de sélection, ou• Chaîne vide pour afficher le dossier d’utilisateur par défaut (“Mes documents” sous Windows, “Documents” sous Mac OS), ou• Numéro de chemin d’accès mémorisé |
| typesFichiers | Text | &#8594;  | Liste des types de documents à filtrer, ou "*" pour ne pas filtrer les documents |
| titre | Text | &#8594;  | Titre de la boîte de dialogue de sélection |
| options | Integer | &#8594;  | Option(s) de sélection |
| sélectionnés | Text array | &#8592; | Tableau contenant la liste des chemins d’accès + les noms des fichiers sélectionnés |
| Résultat | Text | &#8592; | Nom du fichier sélectionné (premier fichier de la liste en cas de sélection multiple) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Select document.Summary-->La commande **Select document** affiche une boîte de dialogue standard d’ouverture de documents, permettant à l’utilisateur de désigner un ou plusieurs fichier(s), et retourne le nom et/ou le chemin d’accès complet du ou des fichier(s) sélectionné(s).<!-- END REF-->

Le paramètre *répertoire* indique le dossier dont le contenu doit être affiché initialement dans la boîte de dialogue d’ouverture de documents. Vous pouvez passer trois types de valeurs :

* un texte contenant le chemin d’accès complet du répertoire à afficher.
* une chaîne vide ("") pour afficher le dossier d’utilisateur par défaut du système (“Mes documents” sous Windows, “Documents” sous Mac OS).
* un numéro de chemin d’accès mémorisé (de 1 à 32000) pour afficher le dossier associé.  
Avec ce principe, vous pouvez conserver en mémoire le chemin d’accès du dossier ouvert au moment où l’utilisateur a cliqué sur le bouton de sélection, c’est-à-dire le dossier choisi par l’utilisateur. Lors du premier appel d’un numéro arbitraire (par exemple 5), la commande affiche le dossier d’utilisateur par défaut du système (équivaut à passer une chaîne vide). L’utilisateur pourra alors éventuellement naviguer parmi les dossiers de son disque dur. Au moment où il cliquera sur le bouton de sélection, le chemin d’accès sera mémorisé et associé au numéro 5\. Lors des appels suivants du numéro 5, le chemin d’accès mémorisé sera utilisé par défaut. En cas de sélection d’un nouvel emplacement, le chemin numéro 5 sera mis à jour, et ainsi de suite.  
Ce mécanisme vous permet de mémoriser jusqu’à 32000 chemins d’accès. Sous Windows, chaque chemin est conservé durant la session uniquement. Sous Mac OS, les chemins sont conservés par le système, ils restent mémorisés d’une session à l’autre.

**Note :** Ce mécanisme est identique à celui utilisé par la commande [Select folder](select-folder.md). Les numéros de chemins d’accès mémorisés sont partagés entre les deux commandes.

Passez dans le paramètre *typeFichiers* le ou les type(s) de fichier(s) pouvant être sélectionnés dans la boîte de dialogue d’ouverture. Vous pouvez passer une liste de plusieurs types séparés par un *;* (point virgule). Pour chaque type défini, une ligne sera ajoutée dans le menu de choix de type de la boîte de dialogue. 

* Sous Mac OS, vous pouvez passer soit un type Mac OS classique (TEXT, APPL, etc.), soit un type UTI (Uniform Type Identifier). Les types UTIs ont été définis par Apple afin de répondre aux besoins d'uniformisation des types de fichiers. Par exemple, "public.text" est le type UTI des fichiers de type texte. Pour plus d'informations sur les UTIs, reportez-vous à [cette page sur developer.apple.com](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_conc/understand_utis_conc.html) (documentation en anglais).
* Sous Windows, vous pouvez également passer un type de fichier classique Mac OS — 4D effectue la correspondance en interne — ou l’extension des fichiers (.txt, .exe, etc.). A noter que sous Windows, l’utilisateur aura la possibilité de “forcer” l’affichage de tous les types de fichiers en saisissant \*.\* dans la boîte de dialogue. Toutefois dans ce cas, 4D effectuera une vérification supplémentaire des types des fichiers sélectionnés : si l’utilisateur sélectionne un type de fichier non autorisé, la commande retourne une erreur.

Si vous ne souhaitez pas restreindre les fichiers affichés à un ou plusieurs types, passez la chaîne "\*" (étoile) ou ".\*" dans *typeFichiers*. 

Passez dans le paramètre *titre* le libellé devant apparaître dans la boîte de dialogue. Par défaut, si vous passez une chaîne vide, le libellé “Ouvrir” est affiché.

Le paramètre *options* permet de spécifier les fonctions avancées autorisées dans la boîte de dialogue d’ouverture. 4D vous propose les constantes prédéfinies suivantes, placées dans le thème *Documents système*. Vous pouvez passer une constante ou une combinaison de constantes. 

| Constante         | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Alias selection   | Entier long | 8      | Autorise la sélection de raccourcis (Windows) ou d’alias (Mac OS) en tant que documents. Par défaut, si cette constante n’est pas utilisée, la commande n’autorise pas la sélection de raccourcis ou d’alias en tant que tels. Si l’utilisateur sélectionne ce type de document, la commande retourne le chemin de l’élément cible. Lorsque vous passez la constante, la commande retourne le chemin de l’alias ou du raccourci lui-même.                                                  |
| File name entry   | Entier long | 32     | Permet à l’utilisateur à saisir un nom de fichier dans une boîte de dialogue de sauvegarde. Aucun fichier n’est sauvegardé, il revient au développeur de créer un fichier en réponse à cette action (la variable système Document est mise à jour). Dans ce contexte, il est possible de passer un chemin de fichier dans le paramètre *répertoire*. Le nom du fichier sera suggéré dans la boîte de dialogue de sauvegarde et son répertoire parent sera utilisé comme chemin par défaut. |
| Multiple files    | Entier long | 1      | Autorise la sélection simultanée de plusieurs fichiers à l’aide des combinaisons **Maj+clic** (sélection contiguë) et **Ctrl+clic** (Windows) ou **Commande+clic** (Mac OS). Dans ce cas, le paramètre *sélectionnés*, s’il est passé, contient la liste de tous les fichiers sélectionnés. Par défaut, si cette constante n’est pas utilisée, la commande n’autorise pas la sélection de plusieurs fichiers.                                                                              |
| Package open      | Entier long | 2      | (Mac OS uniquement) Autorise l’ouverture des progiciels (packages) en tant que dossiers et donc la visualisation/sélection de leur contenu. Par défaut, si cette constante n’est pas utilisée, la commande n’autorise pas l’ouverture des progiciels.                                                                                                                                                                                                                                      |
| Package selection | Entier long | 4      | (macOS uniquement) Autorise la sélection de progiciels (packages) en tant qu’entités (par défaut, si omise). Utilisez la constante Ouverture progiciel si vous souhaitez autoriser les utilisateurs à visualisre/sélectionner le contenu des progiciels.                                                                                                                                                                                                                                   |
| Use sheet window  | Entier long | 16     | (Mac OS uniquement) Affiche la boîte de dialogue de sélection sous forme de fenêtre feuille (cette option est ignorée sous Windows). <br/>Les fenêtres feuilles sont des fenêtres spécifiques de l’interface Mac OS X, bénéficiant notamment d’une animation graphique (pour plus d’informations, reportez-vous à la section *Types de fenêtres (compatibilité)*). Par défaut, si cette constante n’est pas utilisée, la commande affiche une boîte de dialogue standard.          |

Si vous ne souhaitez pas utiliser d’option, passez 0 dans le paramètre *options*. 

Le paramètre facultatif *sélectionnés* permet de récupérer le chemin d’accès complet (chemin d’accès + nom) de chaque fichier sélectionné par l’utilisateur. La commande crée, dimensionne et remplit le tableau en fonction de la sélection de l’utilisateur. Ce paramètre est utile lorsque l’option Multiple files est utilisée, ou lorsque vous souhaitez connaître le chemin d’accès du fichier sélectionné (il suffit dans ce cas de soustraire de la valeur du tableau le nom du fichier retourné par la commande). Si aucun fichier n’a été sélectionné, le tableau est retourné vide. 

**Note :** Sous Mac OS, un progiciel sélectionné est considéré comme un dossier. Le chemin d'accès retourné dans le tableau *sélectionnés* comporte un caractère ":" final. Par exemple : Disque:Applications:4D:4D v11.4:FR:4D Volume Desktop.app: 

La commande retourne le nom (nom+extension sous Windows) du fichier sélectionné. Si plusieurs fichiers ont été sélectionnés, la commande retourne le nom du premier fichier de la liste des fichiers sélectionnés. La liste des fichiers peut être récupérée dans le paramètre *sélectionnés*. Si aucun fichier n’a été sélectionné, la commande retourne une chaîne vide. 

#### Exemple 1 

Cet exemple permet de désigner un fichier de données 4D :

```4d
 var $platForm : Integer
 PLATFORM PROPERTIES($platForm)
 If($platForm=Windows)
    $DocType:=".4DD"
 Else
    $DocType:="com.4d.4d.data-file" //Type UTI
 End if
 $Options:=Alias selection+Package open+Use fenêtre feuille
 $Doc:=Select document("";$DocType;"Sélectionner le fichier de données";$Options)
```

#### Exemple 2 

Création d’un document personnalisé par l’utilisateur : 

```4d
 $doc:=Select document(System folder(Documents folder)+"Report.pdf";"pdf";"Nom de l’état :";File name entry)
 If(OK=1)
    BLOB TO DOCUMENT(Document;$blob) // $blob contient le document à enregistrer
 End if
```

#### Variables et ensembles système 

Si la commande a été correctement exécutée et qu’un document valide a été sélectionné, la variable système OK prend la valeur 1 et la variable système Document contient le chemin d’accès complet du fichier sélectionné.   
Si aucun fichier n’a été sélectionné (par exemple si l’utilisateur a cliqué sur le bouton **Annuler** dans la boîte de dialogue d’ouverture), la variable système OK prend la valeur 0 et la variable système Document est vide. 

#### Voir aussi 

[Open document](open-document.md)  
[Select folder](select-folder.md)  