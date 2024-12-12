---
id: export-data
title: EXPORT DATA
slug: /commands/export-data
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT DATA.Syntax-->**EXPORT DATA** ( *nomFichier* {; *projet* {; *}} )<!-- END REF-->
<!--REF #_command_.EXPORT DATA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Chemin d’accès et nom du fichier d’export |
| projet | Text, Blob | &#8594;  | Contenu du projet d’export (XML ou référence d'élément DOM ou BLOB) |
| &#8592; | Nouveau contenu du projet d’export (si le paramètre * a été passé) |
| * | Opérateur | &#8594;  | Affichage de la boîte de dialogue d’export et mise à jour du projet |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.EXPORT DATA.Summary-->La commande **EXPORT DATA** permet d’exporter des données dans le fichier *nomFichier*.<!-- END REF--> 4D peut exporter des données au format Texte, Texte de longueur fixe, XML, SYLK, DIF, DBF (dBase), et 4D. 

Si vous passez une chaîne vide dans le *nomFichier*, **EXPORT DATA** provoque l’affichage d’une boîte de dialogue standard d’enregistrement de fichiers, permettant à l’utilisateur de définir le nom, le type et l’emplacement du fichier d’export. Une fois la boîte de dialogue validée, la variable système Document contient le chemin d’accès et le nom de ce fichier. Si l’utilisateur clique sur le bouton **Annuler**, l’exécution est stoppée et la variable système OK prend la valeur 0.

Le paramètre optionnel *projet* vous permet d'utiliser un projet pour l'export des données. Lorsque vous passez ce paramètre, l’export s’effectue directement, sans intervention de l’utilisateur (sauf si vous utilisez l'option *\**, cf. ci-dessous). Si vous ne passez pas ce paramètre, la boîte de dialogue de paramétrage d’export s’affiche, permettant à l’utilisateur de définir ses paramètres d’export ou de charger un projet d’export existant. 

Un projet d’export contient tous les paramètres de l’export, tels que les tables et champs exportés, les délimiteurs, etc. Vous pouvez passer dans *projet* soit une variable texte contenant du XML, soit une variable texte contenant la référence à un élément DOM préexistant, soit un BLOB. Les projets peuvent avoir été créés par programmation (projets au format XML uniquement) ou être issus du chargement de paramètres préalablement définis dans la boîte de dialogue d’export. Dans ce dernier cas, vous disposez de deux solutions :

* utiliser la commande **EXPORT DATA** avec un paramètre *projet* vide et le paramètre optionnel *\** (cf. ci-dessous), puis stocker le paramètre *projet* résultant dans un champ Texte ou BLOB. Cette solution permet notamment de conserver le projet avec le fichier de données.
* sauvegarder le projet sur disque, puis le charger par exemple à l’aide de la commande [DOM Parse XML source](dom-parse-xml-source.md) et passer sa référence dans le paramètre *projet*.

**Note de compatibilité :** A compter de la version 12 de 4D, les projets d'export sont encodés en XML. 4D peut ouvrir les projets d'export générés avec des versions précédentes de 4D (format BLOB), mais les projets créés à compter de la v12 ne peuvent plus être rouverts avec une v11 ou antérieure. Il est désormais conseillé d'utiliser des variables Texte pour manipuler les fichiers d'export. 

Le paramètre optionnel *\**, s’il est est spécifié, provoque l’affichage de la boîte de dialogue de paramétrage d’export avec les paramétrages définis dans le projet. Ce fonctionnement permet d’utiliser un projet prédéfini, tout en ayant la possibilité de modifier un ou plusieurs paramètres. En outre, le paramètre projet contient, après la fermeture de la boîte de dialogue d’export, les paramètres du “nouveau” projet au format XML. Vous pouvez alors le stocker dans un champ Texte, dans un fichier sur disque, etc. 

Si l’export se déroule correctement, la variable système OK prend la valeur 1.

#### Exemple 1 

Cet exemple illustre l'utilisation de la commande **EXPORT DATA** pour exporter en format binaire les données d'une base.

* Cette méthode effectue une boucle sur toutes les tables de la base et appelle la méthode ExportBinary :

```4d
 var $ExportPath : Text
 var $i : Integer
 $ExportPath:=Select folder("Veuillez sélectionner le dossier d'export :")
 If(Ok=1)
    For($i;1;Last table number)
       If(Is table number valid($i))
          ExportBinary(Table($i);$ExportPath+Table name($i);True)
       End if
    End for
 End if
```

* Voici le code de la méthode ExportBinary :

```4d
 var $1 : Pointer //table
 var $2 : Text //chemin du fichier de destination
 var $3 : Boolean //exporter tous les enregistrements
 var $i : Integer
 var $ref : Text
 $ref:=DOM Create XML Ref("settings-import-export")
  // Exporter la table "$1" au format binaire '4D', tous les enregistrements ou uniquement la sélection courante
 DOM SET XML ATTRIBUTE($ref;"table_no";Table($1);"format";"4D";"all_records";$3)
  // Définition des champs à exporter
 For($i;1;Last field number($1))
    If(Is field number valid($1;$i))
       $elt:=DOM Create XML element($ref;"field";"table_no";Table($1);"field_no";$i)
    End if
 End for
 EXPORT DATA($2;$ref)
 If(Ok=0)
    ALERT("Erreur lors de l'export de la table "+Table name($1))
 End if
 DOM CLOSE XML($ref)
```

#### Exemple 2 

Cet exemple crée un projet vide et y stockera les paramètres définis par l'utilisateur dans la boîte de dialogue d’export : 

```4d
 var $exportParams : Text
 EXPORT DATA("DocExport.txt";$exportParams;*) //Affichage de la boîte de dialogue d'export
```

#### Variables et ensembles système 

Si l'utilisateur clique sur **Annuler** dans une des boîtes de dialogue (d'enregistrement de projet ou de paramétrage d'export), la variable système OK prend la valeur 0\. Si l’export se déroule correctement, la variable système OK prend la valeur 1.

#### Voir aussi 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DATA](import-data.md)  