---
id: web-set-home-page
title: WEB SET HOME PAGE
slug: /commands/web-set-home-page
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET HOME PAGE.Syntax-->**WEB SET HOME PAGE** ( *pagInicio* )<!-- END REF-->
<!--REF #_command_.WEB SET HOME PAGE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pagInicio | Text | &#8594;  | Nome da página ou rota de acesso HTML a página ou "" para não enviar a home page personalizada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SET HOME PAGE.Summary-->O comando WEB SET HOME PAGE lhe permite modificar a página de início personalizada para o processo web atual.<!-- END REF-->  

A página definida está associada ao processo web, portanto você pode definir diferentes páginas de inicio dependendo, por exemplo, do usuário que estiver conectado. Esta página pode ser estática ou semidinâmica.  
  
Passe no parâmetro *pagInicio* o nome da página HTML ou da rota de acesso HTML a página.

**Nota:** Se a página especificada no parâmetro *pagInicio* não existir quando o processo Web acessá;la pela primeira vez, o servidor Web a cria e a assigna os conteúdos da página início padrão (ver ).

Para não enviar *pagInicio* como página de inicio para o processo web atual, execute WEB SET HOME PAGE com uma string vazia ("") passada em *pagInicio*.  
  
**Nota**: a página de boas vindas por padrão do servidor web se definido nas Propriedades do banco.


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 639 |
| Thread-seguro | &check; |
| Proibido no servidor ||


