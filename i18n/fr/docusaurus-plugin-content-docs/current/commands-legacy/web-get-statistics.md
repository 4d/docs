---
id: web-get-statistics
title: WEB GET STATISTICS
slug: /commands/web-get-statistics
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET STATISTICS.Syntax-->**WEB GET STATISTICS** ( *pages* ; *hits* ; *usage* )<!-- END REF-->
<!--REF #_command_.WEB GET STATISTICS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| pages | Text array | &#8592; | Noms des pages les plus consultées |
| hits | Integer array | &#8592; | Nombre de hits pour chaque page |
| usage | Integer | &#8592; | Pourcentages du cache utilisé |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB GET STATISTICS.Summary-->La commande **WEB GET STATISTICS** vous permet d’obtenir des informations sur les pages les plus consultées, chargées dans le cache du serveur Web.<!-- END REF--> Par conséquent, ces statistiques concernent uniquement les pages statiques, les images GIF, les images JPEG <100 ko et les feuilles de style (.css). 

**Note :** Pour plus d’informations sur le paramétrage du cache du serveur Web 4D, reportez-vous à la section *Paramétrages du serveur Web*.

La commande remplit le tableau texte *pages* avec les noms des pages les plus consultées. Le tableau entier long *hits* reçoit le nombre de “hits” pour chaque page. La variable numérique *usage* reçoit le pourcentage du cache Web utilisé par chaque page.

#### Exemple 

Vous souhaitez générer une page semi-dynamique affichant les statistiques d’utilisation du cache Web. Pour cela, dans une page HTML statique appelée “stats.shtm” (les pages suffixées .shtm sont automatiquement analysées par le serveur Web), vous placez la balise *<!––#4DSCRIPT/STATS––>* ainsi que des références aux variables *vPages* et *vUsage*, par exemple :

```HTML
<html>
<head><title>Stats Web 4D</title></head>
<!--#4DSCRIPT/STATS-->
<body>
<strong>Pourcentage du cache utilisé : </strong>
<!--#4DTEXT vUsage-->
<hr>
<strong>Pages les plus consultées : </strong>
<!--#4DHTML vPages-->
</body>
</html>
```

Dans la méthode projet STATS, écrivez le code suivant :

```4d
 var $1 : Text
 var vPages : Text
 ARRAY TEXT(pages;0)
 ARRAY LONGINT(hits;0)
 var vUsage : Integer
 
 WEB GET STATISTICS(pages;hits;vUsage)
 For($i;1;Size of array(pages))
  // For each page présente dans le cache
    vPages:=pages{$i}+"   "+String(hits{$i})+"
"
  //Insertion du nom de la page et du code HTML
 End for
```

Vous pouvez envoyer la page "stats.shtm" via un lien URL ou à l'aide de commande [WEB SEND FILE](web-send-file.md).
