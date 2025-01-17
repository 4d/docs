---
id: get-application-color-scheme
title: Get application color scheme
slug: /commands/get-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.Get application color scheme.Syntax-->**Get application color scheme** {( * )} : Text<!-- END REF-->
<!--REF #_command_.Get application color scheme.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Retorna o esquema de cores do banco de dados host/anfitrião |
| Resultado | Text | &#8592; | Esquema de cores da aplicação atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get application color scheme.Summary-->O comando **Get application color scheme** retorna o nome do esquema de cor atual para uso ao nível da aplicação.<!-- END REF--> 

**Nota:** Em Windows, esse comando sempre retorna "light"/claro.

O esquema de cores é definido por:

* uma chamada ao comando [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md);
* Se [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) não for chamado ou então for chamado com o parâmetro "inherited/herdado", vá em Configurações (Configurações do banco de dados host no caso de um componente);
* Se configurações estiver estabelecido como "inherited", nas preferências de usuário do sistema operativo.

O parâmetro *\** é útil quando o comando for chamado de um componente: quando for passado, o comando retorna o esquema de cores do banco de dados host. 

Veja a descrição do comando [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) para detalhes sobre os nomes de esquema de cores. 

#### Exemplo 

```4d
 var $colorScheme : Text
 
  // Recupera o esquemaCor do banco de dados host
 $colorScheme:=Get application color scheme(*)
```

#### Ver também 

[FORM Get color scheme](form-get-color-scheme.md)  
[SET APPLICATION COLOR SCHEME](set-application-color-scheme.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1763 |
| Thread-seguro | &cross; |


