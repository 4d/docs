---
id: flush-cache
title: FLUSH CACHE
slug: /commands/flush-cache
displayed_sidebar: docs
---

<!--REF #_command_.FLUSH CACHE.Syntax-->**FLUSH CACHE** {( tamanho|* )}<!-- END REF-->
<!--REF #_command_.FLUSH CACHE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tamanho&#124;* | Real, Operador | &#8594;  | *para completamente liberar a memória cache, ou números de bytes a liberar em cache |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FLUSH CACHE.Summary-->O comando FLUSH CACHE salva imediatamente os buffers de dados em disco.<!-- END REF--> Todas as alterações que foram feitas no banco de dados são armazenados no disco.

Como padrão, a memória cache atual é deixada sem mexer, ou seja, os dados continuam a ser usados para acessos de leitura subsequentes De maneira opcional, pode passar um parâmetro para modificar seus conteúdos:

* passe *\** para salvar a cache e liberar a memória cache inteira.
* passe um valor *tamanho* para salvar a cache e liberar apenas o número de bytes *tamanho* da cache.

**Nota:** Passar um parâmetro a este comando é reservado para propósitos de teste. Por razões de performance, não é recomendado liberar a cache no ambiente de produção.

Geralmente não precisa chamar este comando, já que 4D salva modificações de dados regularmente. A opção **Flush Cache every X Seconds (Minutes) em** [Database page](https://developer.4d.com/docs/pt/settings/database/) das configurações de banco de dados, que especifica quão frequente vai salvar, é tipicamente usado para controlar o esvaziamento da cache.Nós recomendamos usar o valor padrão de 20 segundos. Note que o parâmetro Cache flush periodicity pode ser estabelecido e lido usando os comandos [SET DATABASE PARAMETER](set-database-parameter.md) e [Get database parameter](get-database-parameter.md). 

#### Ver também 

[Get database parameter](get-database-parameter.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  