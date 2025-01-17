---
id: web-get-statistics
title: WEB GET STATISTICS
slug: /commands/web-get-statistics
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET STATISTICS.Syntax-->**WEB GET STATISTICS** ( *pages* ; *hits* ; *usage* )<!-- END REF-->
<!--REF #_command_.WEB GET STATISTICS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| pages | Text array | &#8592; | Names of the most consulted pages |
| hits | Array integer | &#8592; | Number of hits for each page |
| usage | Integer | &#8592; | Percentage of the cache used |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB GET STATISTICS.Summary-->The **WEB GET STATISTICS** command lets you get information about the most consulted pages loaded in the Web server’s cache.<!-- END REF--> Consequently, these statistics only concern static pages, GIF pictures, JPEG pictures <100 KB and style sheets (.css). 

**Note:** For more information about setting the 4D Web server’s cache, refer to the *Web Server Settings* section. 

The command fills the pages Text array with the names of the most consulted pages. The *hits* Longint array receives the number of “hits” for each page. The *usage* parameter receives the percentage of the Web cache used by each page.

#### Example 

Let’s assume that you want to generate a semi-dynamic page that displays the statistics of the Web cache. For this, in a static HTML page named “stats.shtm” (pages suffixed .shtm are automatically parsed by the Web server), you place the tag *<!––#4DSCRIPT/STATS––>* as well as references to the *vPages* and *vUsage* variables, for example: 

```HTML
<html>
<head><title>4D Web Stats</title></head>
<!--#4DSCRIPT/STATS-->
<body>
<strong>Percentage of cache used: </strong>
<!--#4DTEXT vUsage-->
<hr>
<strong>Pages consulted most often: </strong>
<!--#4DHTML vPages-->
</body>
</html>
```

In the project method STATS, you write the following code:

```4d
 var $1 : Text
 var vPages : Text
 ARRAY TEXT(pages;0)
 ARRAY LONGINT(hits;0)
 var vUsage : Integer
 
 WEB GET STATISTICS(pages;hits;vUsage)
 For($i;1;Size of array(pages))
    \\For each page present in the cache
    vPages:=pages{$i}+"   "+String(hits{$i})+"
"
    \\Insert the name of the page and the HTML code
 End for
```

You can send the "stats.shtm" page using a URL link or using the [WEB SEND FILE](web-send-file.md) command.


#### Properties

|  |  |
| --- | --- |
| Command number | 658 |
| Thread safe | &check; |


