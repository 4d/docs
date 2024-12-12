---
id: dom-parse-xml-source
title: DOM Parse XML source
slug: /commands/dom-parse-xml-source
displayed_sidebar: docs
---

<!--REF #_command_.DOM Parse XML source.Syntax-->**DOM Parse XML source** ( *nomFichier* {; *validation* {; dtd | schéma}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Parse XML source.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Chemin d’accès du document |
| validation | Boolean | &#8594;  | Vrai = Validation, Faux = Pas de validation |
| dtd &#124; schéma | Chaîne | &#8594;  | Emplacement de la DTD ou du schéma XML |
| Résultat | Text | &#8592; | Référence de l’élément XML |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Parse XML source.Summary-->La commande **DOM Parse XML source** analyse un document contenant une structure XML et retourne une référence pour ce document.<!-- END REF--> La commande peut valider ou non le document via une DTD ou un schéma XML (document XSD, XML Schema Definition).   
Le document peut être situé sur disque ou sur Internet/Intranet. 

**Note :** L'exécution de la commande **DOM Parse XML source** est synchrone.

Vous pouvez passer dans le paramètre *document* :

* soit un chemin d’accès complet standard (du type C:\\\\Dossier\\\\Fichier\\\\... sous Windows et MacintoshHD:Dossier:Fichier sous Mac OS),
* soit un chemin Unix sous Mac OS (débutant obligatoirement par /).
* soit un chemin réseau du type http://www.site.com/Fichier ou ftp://public.ftp.com...

Le paramètre booléen *validation* vous permet d’indiquer si vous souhaitez que la structure soit validée ou non.

* Si *validation* vaut Vrai, la structure sera validée. Dans ce cas, l’analyseur tentera de valider la structure XML du document sur la base de la référence DTD ou XSD incluse dans le document, ou via la DTD ou le schéma XML désigné(e) par le troisième paramètre s'il est passé.
* Si *validation* vaut Faux, la structure ne sera pas validée.

Si vous passez Vrai dans *validation* et omettez le troisième paramètre, la commande tentera de valider la structure XML via une référence DTD ou XSD trouvée dans la structure elle-même. La validation peut être indirecte : si la structure contient une référence vers une fichier DTD qui lui-même contient une référence vers un fichier XSD, la commande tentera d’effectuer les deux validations.

Le troisième paramètre vous permet de désigner une DTD spécifique ou un schéma XML pour l’analyse du document. Si vous utilisez ce paramètre, la commande ne tient pas compte de la DTD référencée dans le document XML. 

**Validation par DTD**  
Il existe deux moyens pour désigner une DTD :

* en tant que référence. Il vous suffit pour cela de passer le chemin d’accès complet de la nouvelle DTD (extension “dtd”) dans le paramètre *dtd*. Si le document désigné ne contient pas de DTD valide, le paramètre *dtd* est ignoré et une erreur est générée.
* directement dans un texte. Dans ce cas, si le contenu du paramètre débute par “<?xml”, 4D considérera qu’il s’agit de la DTD ; dans le cas contraire, 4D considérera qu’il s’agit d’un chemin d’accès.

**Validation par schema**  
Pour valider le document via un schéma XML, il suffit de passer dans le troisième paramètre un fichier ou un URL d’extension“xsd” au lieu de “dtd”. La validation par schéma XML est considérée comme plus souple et plus puissante que la validation par DTD. Le langage des documents XSD est basé sur le langage XML. Les schémas XML prennent notamment en charge des types de données. Pour plus d’informations sur les schémas XML, reportez-vous à l’adresse *http://www.w3.org/XML/Schema*.

Si la validation ne peut être effectuée (pas de DTD ou d'XSD, URL incorrect, etc.), une erreur est générée. La variable système Error indique le numéro de l’erreur. Vous pouvez intercepter cette erreur à l’aide d’une méthode installée par la commande [ON ERR CALL](on-err-call.md). 

La commande retourne une chaîne de 16 caractères (RefElément) constituant la référence en mémoire de la structure virtuelle du document. Cette référence devra être utilisée avec les autres commandes d’analyse XML. 

**Important :** Une fois que vous n'en avez plus besoin, n'oubliez pas d'appeler la commande [DOM CLOSE XML](dom-close-xml.md) avec cette référence afin de libérer la mémoire.

#### Exemple 1 

Ouverture sans validation d’un document XML situé sur disque :

```4d
 $ref_XML_Struct:=DOM Parse XML source("C:\\import.xml")
```

#### Exemple 2 

Ouverture sans validation d’un document XML situé à côté du fichier de structure de la base :

```4d
 $ref_XML_Struct:=DOM Parse XML source("import.xml")
```

#### Exemple 3 

Ouverture d’un document XML situé sur disque et validation à l’aide d’une DTD située sur le disque :

```4d
 $ref_XML_Struct:=DOM Parse XML source("C:\\import.xml";True;"C:\\import_dtd.xml")
```

#### Exemple 4 

Ouverture sans validation d’un document XML situé à un URL spécifique :

```4d
 $ref_XML_Struct:=DOM Parse XML source("http://www.4D.fr/xml/import.xml")
```

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Sinon, elle prend la valeur 0.

#### Voir aussi 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM Parse XML variable](dom-parse-xml-variable.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 719 |
| Thread safe | &check; |
| Modifie les variables | OK |


