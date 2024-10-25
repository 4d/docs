---
id: set-cache-size
title: SET CACHE SIZE
slug: /commands/set-cache-size
displayed_sidebar: docs
---

<!--REF #_command_.SET CACHE SIZE.Syntax-->**SET CACHE SIZE** ( *tamanho* {; *libMin*} )<!-- END REF-->
<!--REF #_command_.SET CACHE SIZE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tamanho | Real | &#8594;  | Tamanho do banco de dados em bytes |
| libMin | Real | &#8594;  | Mínimo número de bytes a liberar quando cache estiver cheia |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET CACHE SIZE.Summary-->O comando SET CACHE SIZE define dinâmicamente o tamanho da cache do banco de dados e, opcionalmente, permite definir o tamanho minino em bytes a partir do qual começa a liberar memória.<!-- END REF-->

Nota: este comando só funciona em modo local (4D Server y 4D); não deve ser utilizado desde um 4D em modo remoto.

Em tam, passe o novo tamanho da memória cache do banco de dados em bytes. Este novo tamanho se aplica de forma dinâmica quando for executao o comando.

Em libMin, passe o tamanho mínimo de memória a liberar da caché do banco de dados quando o motor necessitar espaço para assignar um objeto a ele (valor em bytes). O propósito desta opção é reduzir o número de vezes que os dados são liberados da memória caché com o objetivo de obter um melhor rendimento. Como padrão, se esta opção não for utilizada, 4D descarrega pelo menos 10% da caché quando for necessário espaço. Se seu banco de dados funcionar com um grande cache, pode ser vantajoso utilizar um tamanho fixo que não dependa de tamanho da memória caché. Pode ajustar esta configuração de acordo com o tamanho dos blocos de dados que maneja em seu banco de datos.

#### Exemplo 

Se quiser adicionar 100 MB ao tamanho da cache de seu banco de ados atual. Pode escrever:

```4d
 var $currentCache : Real
 $currentCache:=Get cache size
  // o tamanho da caché atual, e por exemplo, 419430400
 SET CACHE SIZE($currentCache+100000000)
  // o tamanho da caché atual agora é 519430400
```

#### Ver também 

[Get cache size](get-cache-size.md)  