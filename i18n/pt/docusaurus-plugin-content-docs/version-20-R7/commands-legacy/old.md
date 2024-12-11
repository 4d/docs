---
id: old
title: Old
slug: /commands/old
displayed_sidebar: docs
---

<!--REF #_command_.Old.Syntax-->**Old** ( *campo* ) : any<!-- END REF-->
<!--REF #_command_.Old.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo ao qual devolver o valor anterior |
| Resultado | any | &#8592; | Valor original do campo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Old.Summary-->O comando Old devolve o valor armazenado em *campo* antes de que se tenha atribuído um valor por programação ou modificado durante a entrada de dados.<!-- END REF--> 

Cada vez que mudar o registro atual para uma tabela, 4D cria e mantém em memória um duplicado da “imagem” do novo registro atual no momento em que é carregado na memória (por razões de otimização, 4D faz caso omisso de campo de tipo Texto, Imagem e BLOB.) Quando modificar um registro, trabalha com a imagem atual do registro, não com seu duplicado. Esta imagem é apagada quando mudar novamente o registro atual.

Old devolve o valor da imagem duplicada. Em outras palavras, para um registro existente, devolve ol valor do campo tal como está guardado no disco. Se um registro é novo, Old devolve o valor vazio por padrão de acordo ao tipo de *campo*. Por exemplo, se *campo* é um campo Alfa, Old devolve uma string vazia. Se *campo* é de tipo numérico, Old retorna zero (0), etc.

Old funciona com *campo* se o campo tiver sido modificado por um método ou pelo usuário durante a entrada de dados. Old pode ser aplicada a todos os tipos de campo.

Para restaurar o valor original de um campo, atribua-lhe o valor retornado por Old.

**Nota**: por razões técnicas, Old não pode ser passada como parâmetro a outros comandos com campos tipo imagem e BLOB. É necessário passar o valor por uma variável intermediária. Por exemplo:

```4d
  //Não escreva (causa erro de sintaxe):
 $tamano :=BLOB size(Old([Tabela]Blob)) //INCORRETO
  //Escreva:
 $antBLOB:=Old([Tabela]Blob)
 $tamano :=BLOB size($antBLOB) //CORRETO
```

#### Ver também 

[Modified](modified.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 35 |
| Thread-seguro | &check; |
| Proibido no servidor ||


