---
id: templates
title: Pages templates
---

Le serveur Web de 4D vous permet d'utiliser des pages de modèles HTML contenant des balises, c'est-à-dire un mélange de code HTML statique et de références 4D ajoutées via des [balises de transformation](Tags/tags.md) telles que 4DTEXT, 4DIF ou 4DINCLUDE. These tags are usually inserted as HTML type comments (`<!--#4DTagName TagValue-->`) into the HTML source code.

Lorsque ces pages sont envoyées par le serveur HTTP, elles sont analysées et les balises qu'elles contiennent sont interprétées et remplacées par les données résultantes. Les pages reçues par les navigateurs sont donc une combinaison d'éléments statiques et de valeurs provenant du traitement 4D.

Par exemple, si vous écrivez dans une page HTML:

```html
Welcome to <!--#4DTEXT vtSiteName-->!</P>
```

The value of the 4D variable *vtSiteName* will be inserted in the HTML page.

## Balises pour les templates

Les balises 4D suivantes sont disponibles :

- 4DTEXT, pour insérer des variables et des expressions 4D en tant que texte,
- 4DHTML, pour insérer du code HTML,
- 4DEVAL, pour évaluer toute expression 4D,
- 4DSCRIPT, pour exécuter une méthode 4D,
- 4DINCLUDE, pour inclure une page dans une autre,
- 4DBASE, pour modifier le dossier par défaut utilisé par la balise 4DINCLUDE,
- 4DCODE, pour insérer du code 4D,
- 4DIF, 4DELSE, 4DELSEIF et 4DENDIF, pour insérer des conditions dans le code HTML,
- 4DLOOP et 4DENDLOOP, pour faire des boucles dans le code HTML,
- 4DEACH et 4DENDEACH, pour boucler des collections, des entity selections ou des propriétés d'objets.

Ces balises sont décrites dans la page [Balises de transformation](Tags/tags.md).

Il est possible de combiner des balises. Par exemple, le code HTML suivant est autorisé :

```html
<HTML>
...
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Method call)
<!--#4DIF (myvar=1)-->   (If condition)
   <!--#4DINCLUDE banner1.html-->   (Subpage insertion)
<!--#4DENDIF-->   (End if)
<!--#4DIF (myvar=2)-->

   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->

<!--#4DLOOP [TABLE]-->   (loop on the current selection)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (subpage insertion)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>
      (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   (End for)
</BODY>
</HTML>
```

## Analyse des balises

Pour des raisons d'optimisation, l'analyse du code source HTML n'est pas effectuée par le serveur Web 4D lorsque les pages HTML sont appelées à l'aide d'URL simples suffixées par ".HTML" ou ".HTM".

Parsing of the contents of template pages sent by 4D web server takes place when `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB) or `WEB SEND TEXT` commands are called, as well as when sending pages called using URLs. Dans ce dernier cas, à des fins d'optimisation, les pages suffixées par ".htm" et ".html" ne sont PAS parsées. In order to "force" the parsing of HTML pages in this case, you must add the suffix “.shtm” or “.shtml” (for example, `http://www.server.com/dir/page.shtm`). An example of the use of this type of page is given in the description of the `WEB GET STATISTICS` command. Les pages XML (.xml, .xsl) sont également prises en charge et toujours analysées par 4D.

You can also carry out parsing outside of the Web context when you use the `PROCESS 4D TAGS` command.

En interne, l'analyseur fonctionne avec des chaînes UTF-16, mais les données à analyser peuvent avoir été encodées différemment. When tags contain text (for example `4DHTML`), 4D converts the data when necessary depending on its origin and the information available (charset). Voici les cas où 4D analyse les balises contenues dans les pages HTML, ainsi que toutes les conversions effectuées :

| Action / Commande                              | Analyse du contenu des pages envoyées                           | Prise en charge de la syntaxe $(*)                              | Jeu de caractères utilisé pour l'analyse des balises                                                                                                                                                                                                |
| ---------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pages appelées via les URLs                    | X, à l'exception des pages avec une extension ".htm" ou ".html" | X, à l'exception des pages avec une extension ".htm" ou ".html" | Utilisation du jeu de caractères passé en paramètre de l'en-tête "Content-Type" de la page. S'il n'y en a pas, recherche d'une balise META-HTTP EQUIV avec un jeu de caractères. Sinon, utilisation du jeu de caractères par défaut du serveur HTTP |
| `WEB SEND FILE`                                | X                                                               | -                                                               | Utilisation du jeu de caractères passé en paramètre de l'en-tête "Content-Type" de la page. S'il n'y en a pas, recherche d'une balise META-HTTP EQUIV avec un jeu de caractères. Sinon, utilisation du jeu de caractères par défaut du serveur HTTP |
| `WEB SEND TEXT`                                | X                                                               | -                                                               | Aucune conversion nécessaire                                                                                                                                                                                                                        |
| `WEB SEND BLOB`                                | X, si le BLOB est de type "text/html"                           | -                                                               | Utilisation du jeu de caractères défini dans l'en-tête "Content-Type" de la réponse. Sinon, utilisation du jeu de caractères par défaut du serveur HTTP                                                                                             |
| Inclusion by the `<!--#4DINCLUDE-->` tag | X                                                               | X                                                               | Utilisation du jeu de caractères passé en paramètre de l'en-tête "Content-Type" de la page. S'il n'y en a pas, recherche d'une balise META-HTTP EQUIV avec un jeu de caractères. Sinon, utilisation du jeu de caractères par défaut du serveur HTTP |
| `PROCESS 4D TAGS`                              | X                                                               | X                                                               | Données texte : pas de conversion. Données BLOB : conversion automatique à partir de l'ensemble de caractères Mac-Roman pour la compatibilité                                                                                                       |

(*) La syntaxe alternative basée sur $ est disponible pour les balises 4DHTML, 4DTEXT et 4DEVAL.

## Accès aux méthodes 4D via le Web

L'exécution d'une méthode 4D avec `4DEACH`, `4DELSEIF`, `4DEVAL`, `4DHTML`, `4DIF`, `4DLOOP`, `4DSCRIPT`, ou `4DTEXT` à partir d'une requête web est soumise à la valeur de l'attribut [disponible via des balises 4D et des URL (4DACTION...)](allowProject.md) définie dans les propriétés de la méthode. Si cet attribut n'est pas vérifié pour la méthode, celle-ci ne peut pas être appelée à partir d'une requête Web.

## Prévention de l'insertion de code malveillant

Les balises 4D acceptent différents types de données en tant que paramètres : texte, variables, méthodes, noms de commande, etc. Lorsque ces données sont fournies par votre propre code, il n'y a aucun risque d'insertion de code malveillant puisque vous contrôlez l'entrée. Cependant, votre code de base de données fonctionne souvent avec des données qui ont été, à un moment donné, introduites par une source externe (saisie de l'utilisateur, importation, etc.).

In this case, it is advisable to **not use** tags such as `4DEVAL` or `4DSCRIPT`, which evaluate parameters, directly with this sort of data.

De plus, selon le [principe de la récursivité](Tags/tags.md#recursive-processing), le code malveillant peut lui-même inclure des balises de transformation. In this case, it is imperative to use the `4DTEXT` tag. Imaginez, par exemple, un champ de formulaire Web nommé "Nom", où les utilisateurs doivent entrer leur nom. This name is then displayed using a `<!--#4DHTML vName-->` tag in the page. If text of the "\<!--#4DEVAL QUIT 4D-->" type is inserted instead of the name, interpreting this tag will cause the application to be exited. To avoid this risk, you can just use the `4DTEXT` tag systematically in this case. Étant donné que cette balise échappe les caractères spéciaux HTML, tout code récursif malveillant qui aurait pu être inséré ne sera pas réinterprété. Pour se référer à l'exemple précédent, le champ "Name" contiendra, dans ce cas, "`&lt;!--#4DEVAL QUIT 4D--&gt;`" qui ne sera pas transformé.
