---
id: web-get-statistics
title: WEB GET STATISTICS
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET STATISTICS.Syntax-->**WEB GET STATISTICS** ( *pages* ; *hits* ; *usage* )<!-- END REF-->
<!--REF #_command_.WEB GET STATISTICS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| pages | Text array | <-> | Names of the most consulted pages |
| hits | Longint array | <-> | Number of hits for each page |
| usage | Longint | <-> | Percentage of the cache used |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB GET STATISTICS.Summary-->The **WEB GET STATISTICS** command lets you get information about the most consulted pages loaded in the Web server’s cache.<!-- END REF--> Consequently, these statistics only concern static pages, GIF pictures, JPEG pictures <100 KB and style sheets (.css). 

**Note:** For more information about setting the 4D Web server’s cache, refer to the [Web Server Settings](/4Dv20R6/4D/14-R2/Web-Server-Settings.300-1342174.en.html) section. 

The command fills the pages Text array with the names of the most consulted pages. The *hits* Longint array receives the number of “hits” for each page. The *usage* parameter receives the percentage of the Web cache used by each page.

#### Example 

Let’s assume that you want to generate a semi-dynamic page that displays the statistics of the Web cache. For this, in a static HTML page named “stats.shtm” (pages suffixed .shtm are automatically parsed by the Web server), you place the tag *<!––#4DSCRIPT/STATS––>* as well as references to the *vPages* and *vUsage* variables, for example: 

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

In the project method STATS, you write the following code:

```4d
 C_TEXT($1)

 C_TEXT(vPages)

 ARRAY TEXT(pages;0)

 ARRAY LONGINT(hits;0)

 C_LONGINT(vUsage)
 

 WEB GET STATISTICS(pages;hits;vUsage)

 For($i;1;Size of array(pages))

    \\For each page present in the cache

    vPages:=pages{$i}+"   "+String(hits{$i})+"<br>"

    \\Insert the name of the page and the HTML code

 End for
```

You can send the "stats.shtm" page using a URL link or using the [WEB SEND FILE](web-send-file.md) command.
