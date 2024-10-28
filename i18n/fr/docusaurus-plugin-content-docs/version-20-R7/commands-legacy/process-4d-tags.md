---
id: process-4d-tags
title: PROCESS 4D TAGS
slug: /commands/process-4d-tags
displayed_sidebar: docs
---

<!--REF #_command_.PROCESS 4D TAGS.Syntax-->**PROCESS 4D TAGS** ( *templateEntrée* ; *résultatSortie* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.PROCESS 4D TAGS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| templateEntrée | Text | &#8594;  | Données contenant des balises à traiter |
| résultatSortie | Text | &#8592; | Résultat de l'exécution du template |
| param | Expression | &#8594;  | Paramètre(s) à passer au template en exécution |

<!-- END REF-->

#### Description 

<!--REF #_command_.PROCESS 4D TAGS.Summary-->La commande **PROCESS 4D TAGS** provoque le traitement des balises de transformation 4D contenues dans le paramètre *templateEntrée* en leur injectant optionnellement des valeurs via le(s) paramètre(s) *param* et retourne le résultat dans *résultatSortie*.<!-- END REF--> Pour une description complète de ces balises, veuillez vous reporter à la section *Balises de transformation 4D*.

Cette commande permet d'exécuter un texte de type "template" contenant des balises et des références à des expressions ou des variables 4D et de produire un résultat dépendant du contexte d'exécution et/ou des valeurs passées en paramètre.   
Par exemple, vous pouvez utiliser cette commande pour générer et stocker des pages HTML à partir de **pages semi-dynamiques** contenant des balises de transformation 4D (sans qu’il soit nécessaire que le serveur Web de 4D soit démarré). Vous pouvez l’employer pour envoyer via 4D Internet Commands des courriels au format HTML contenant des traitements et/ou des références à des données contenues dans la base. Il est possible de traiter tout type de données basées sur du texte, comme le XML, le SVG ou encore le texte multistyle.

Passez les données contenant les balises à traiter dans le paramètre *templateEntrée*. Ce paramètre peut être un champ ou une variable de type Texte. 

Toutes les balises de transformation de 4D sont prises en charge (*4DTEXT*, *4DHTML, 4DSCRIPT*, *4DLOOP*, *4DEVAL*, etc.).

**Note :** En cas d’utilisation de la balise *4DINCLUDE* hors du cadre du serveur Web (process Web) :

* avec 4D en mode local et 4D Server, le dossier par défaut est le dossier contenant le fichier de structure de la base,
* avec 4D en mode distant, le dossier par défaut est le dossier contenant l’application 4D.

La commande **PROCESS 4D TAGS** prend en charge un nombre indéfini de paramètres *param* à injecter dans le code exécuté. Tout comme pour les méthodes projet, ces paramètres peuvent contenir des valeurs scalaires de type varié (texte, date, heure, entier long, réel, booléen) ainsi que des pointeurs, des objets et des collections. Vous pouvez également utiliser des tableaux, par l'intermédiaire de pointeurs de tableaux. A l'intérieur du code traité par les balises 4D, ces paramètres sont accessibles via les arguments standard $1, $2..., comme dans les méthodes 4D (voir exemple).  
Un ensemble dédié de variables locales est défini dans le contexte d'exécution de la commande **PROCESS 4D TAGS**. Ces variables peuvent être lues ou écrites pendant le traitement.

Après l’exécution de la commande, le paramètre *résultatSortie* reçoit le résultat de l'exécution de *templateEntrée* incluant le traitement des balises 4D qu’il contenait, le cas échéant. Si *templateEntrée* ne contient pas de balises 4D ou s'il génère une chaîne vide, le contenu de *résultatSortie* est identique à celui de *templateEntrée*.

Le paramètre *résultatSortie* peut être un champ ou une variable de type Texte.

**Note :** Cette commande ne provoque jamais l'appel de la [On Web Authentication database method](on-web-authentication-database-method.md).

#### Exemple 1 

Cet exemple charge un document de type 'template', traite les balises qu'il contient puis le stocke :

```4d
 var $inputText_t : Text
 var $outputText_t : Text
 
 $inputText_t:=Document to text(File("/PACKAGE/mytemplate.txt").platformPath)
 PROCESS 4D TAGS($inputText_t;$outputText_t)
 TEXT TO DOCUMENT(File("/PACKAGE/myfile.txt").platformPath;$outputText_t)
```

#### Exemple 2 

Cet exemple permet de générer un texte à l'aide de données dans des tableaux :

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:=""
 $input:=$input+""
 $input:=$input+" "
 $input:=$input+""
 PROCESS 4D TAGS($input;$output;"éléments = ";->$array)
  // $output = "éléments = hello world"
```

#### Voir aussi 

*Balises de transformation 4D*  