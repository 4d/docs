---
id: application-type
title: Application type
slug: /commands/application-type
displayed_sidebar: docs
---

<!--REF #_command_.Application type.Syntax-->**Application type**  : Integer<!-- END REF-->
<!--REF #_command_.Application type.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Valor numérico que denota o tipo de aplicação |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Application type.Summary-->O comando Application type retorna um valor numérico que representa o tipo de ambiente 4D que você está utilizando.<!-- END REF--> 4D oferece as seguintes constantes pré-definidas:

| Constante         | Valor | Comentário                                                                                                  |
| ----------------- | ----- | ----------------------------------------------------------------------------------------------------------- |
| 4D Desktop        | 3     |                                                                                                             |
| 4D Local mode     | 0     |                                                                                                             |
| 4D Remote mode    | 4     |                                                                                                             |
| 4D Server         | 5     |                                                                                                             |
| 4D Volume desktop | 1     |                                                                                                             |
| tool4d            | 6     | Para saber mais, consulte [tool4D](http://developer.4d.com/docs/next/Admin/cli#tool4d) em developer.4d.com. |

**Nota:** *4D Desktop* incorpora certas ofertas de deslocamento, como por exemplo,"4D SQL Desktop".

#### Exemplo 

Em alguma parte do seu código, diferente do método de banco de dados *Método banco de dados On Server Startup*, necessita verificar se 4D Server está sendo executado. Você pode escrever:

```4d
 If(Application type=4D Server)
  //Realizar as ações apropriadas
    'End if
```

#### Ver também 

[Application version](application-version.md)  
[Version type](version-type.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 494 |
| Thread-seguro | &check; |
| Proibido no servidor ||


