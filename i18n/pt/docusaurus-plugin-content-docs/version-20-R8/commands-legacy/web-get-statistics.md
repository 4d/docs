---
id: web-get-statistics
title: WEB GET STATISTICS
slug: /commands/web-get-statistics
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET STATISTICS.Syntax-->**WEB GET STATISTICS** ( *paginas* ; *hits* ; *uso* )<!-- END REF-->
<!--REF #_command_.WEB GET STATISTICS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| paginas | Text array | &#8592; | Nomes das páginas mais consultadas |
| hits | Integer array | &#8592; | Nomes de hits para cada página |
| uso | Integer | &#8592; | Porcentagem de cache usado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB GET STATISTICS.Summary-->O comando WEB GET STATISTICS permite obter a informação sobre as páginas mais consultadas, carregadas na caché do servidor web.<!-- END REF--> Portanto, estas estatísticas são referentes apenas as páginas estáticas, as imagens GIF, as imagens JPEG <100 KB e as folhas de estilo (.css).  

**Nota**: para maior informação sobre o parâmetro da caché do servidor web 4D, consulte a seção [QR DELETE COLUMN](qr-delete-column.md). .  
  
O comando preenche o array de texto páginas com os nomes das páginas mais consultadas. O array inteiro longo *hits* recebe o número de “hits” por cada página. A variável numérica *uso* recebe a porcentagem da caché web utilizada por cada página.

#### Exemplo 

Assumamos que deseja gerar uma página semidinâmica que mostre as estatísticas de utilização da caché web. Para isso, em uma página HTML estática chamada “stats.shtm” (as páginas com sufixo .shtm são analizadas automaticamente pelo servidor web), ponha a etiqueta <!--4DSCRIPT/STATS––> assim como as referências às variáveis vPages e vUsage, por exemplo:  
  
```HTML
<html> 

<head><title>4D Web Stats</title></head>
<!--#4DSCRIPT/STATS-->
<body>
<strong>Porcentagem de caché utilizada: </strong>
<!--#4DTEXT vUsage-->
<hr>
<strong>Páginas mais consultadas: </strong>
<!--#4DHTML vPages-->
</body>
</html>


```

No método de projeto STATS, escreva o código abaixo:

```4d
 var $1 : Text
 var vPages : Text
 ARRAY TEXT(paginas;0)
 ARRAY LONGINT(hits;0)
 var vUsage : Integer
 WEB GET STATISTICS(paginas;hits;vUsage)
 
 For($i;1;Size of array(paginas))
    \\Para cada página apresenta na caché
    vPaginas:=paginas{$i}+" "+String(hits{$i})+"
    " \\Insere o nome da página e o código HTML
 End for
```

Pode enviar a página "stats.shtm" utilizando um link URL ou utilizando o comando [WEB SEND FILE](web-send-file.md).


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 658 |
| Thread-seguro | &check; |


