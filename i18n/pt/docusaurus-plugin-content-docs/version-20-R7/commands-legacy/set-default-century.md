---
id: set-default-century
title: SET DEFAULT CENTURY
slug: /commands/set-default-century
displayed_sidebar: docs
---

<!--REF #_command_.SET DEFAULT CENTURY.Syntax-->**SET DEFAULT CENTURY** ( *seculo* {; *anoPivo*} )<!-- END REF-->
<!--REF #_command_.SET DEFAULT CENTURY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| seculo | Integer | &#8594;  | Século por padrão (menos um) para a entrada de anos com dois dígitos |
| anoPivo | Integer | &#8594;  | Ano pivô para a entrada de anos com dois dígitos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET DEFAULT CENTURY.Summary-->O comando SET DEFAULT CENTURY permite especificar o século por padrão e o ano pivô utilizado por 4D quando introduz uma data com só dois dígitos para o ano.<!-- END REF-->

O valor do ano pivô define a forma como 4D interpretará a entrada de dados de uma data com um ano de dois dígitos:

* Se o ano é maior ou igual ao ano pivô, 4D utiliza o século atual automaticamente.
* Se o ano é menor que o ano pivô, 4D utiliza o seguinte século (relativo ao século atual automaticamente).

Automaticamente, 4D estabelece o século 20 como o século automaticamente e utiliza 30 como ano pivô. Por exemplo:

* 25/01/97 significa 25 de janeiro de 1997.
* 25/01/30 significa 25 de janeiro de 1930.
* 25/01/29 significa 25 de janeiro de 2029.
* 25/01/07 significa 25 de janeiro de 2007.

Para mudar este comportamento por padrão, execute o comando SET DEFAULT CENTURY. O efeito do comando é imediato. Pode passar unicamente um novo século por padrão, ou um novo século por padrão e um ano pivô.

Se passar só um novo século por padrão menos um em *seculo*, 4D interpretará todos os anos introduzidos com dois dígitos como que pertencem a este século.   
  
Por exemplo, depois de chamar:

```4d
 SET DEFAULT CENTURY(20) // Fixar o século 21 como século por padrão
```

* 25/01/97 significa 25 de janeiro de 2097
* 25/01/07 significa 25 de janeiro de 2007

Adicionalmente, pode especificar o parâmetro opcional *anoPivo*.  
  
Por exemplo, depois deste chamado, no qual o ano pivô é 1995:

```4d
 SET DEFAULT CENTURY(19;95) // Fixar o século 21 como século automaticamente se o ano for menor que 95
```

* 25/01/97 significa 25 de janeiro de 1997
* 25/01/07 significa 25 de janeiro de, 2007

**Nota:** este comando afeta unicamente como 4D interpreta as datas introduzidas com anos de dois dígitos.   
  
Em todos os casos:

* 25/01/1997 significa janeiro 25, 1997
* 25/01/2097 significa janeiro 25, 2097
* 25/01/1907 significa janeiro 25, 1907
* 25/01/2007 significa janeiro 25, 2007

Este comando afeta só a entrada de dados. Não tem nenhum efeito no armazenamento de dados, cálculos, etc.
