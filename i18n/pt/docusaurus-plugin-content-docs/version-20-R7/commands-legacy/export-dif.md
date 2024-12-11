---
id: export-dif
title: EXPORT DIF
slug: /commands/export-dif
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT DIF.Syntax-->**EXPORT DIF** ( {*tabela* ;} *documento* )<!-- END REF-->
<!--REF #_command_.EXPORT DIF.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela da qual exportar dados, ou tabela padrão, se omitida |
| documento | Text | &#8594;  | documento DIF que recebe os dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.EXPORT DIF.Summary-->O comando EXPORT DIF escreve os dados dos registros da seleção atual de *tabela* no processo atual.<!-- END REF--> Os dados são escritos em *documento*, um documento DIF Windows ou Macintosh, no disco.

A operação de exportação é realizada pelo formulário de saída atual. A operação de exportação escreve os campos e as variáveis baseada na ordem de entrada do formulário de saída. Por esta razão, utilize um formulário de saída que só contenha os campos ou objetos editáveis que quiera exportar. Não localize botões ou outros objetos no formulário de exportação. Os objetos de subformulário são ignorados.

Um evento On Load é enviado ao método do formulário por cada registro exportado. Utilize este evento para definir as variáveis que poderia utilizar no formulário de exportação.

O parâmetro *documento* pode dar nome a um documento novo ou existente. Se *documento* tem o mesmo nome que um documento existente, o documento existente é sobrescrito. O *documento* pode incluir uma rota de acesso que contenha os nomes dos volumens e as pastas. Se passa uma string vazia, aparece a caixa de diálogo padrão de guardar arquivos. Se o usuário cancela este diálogo, se cancela a operação de exportação, e a variável sistema OK toma o valor 0.

Um termômetro de progresso aparece durante a exportação. O usuário pode cancelar a operação clicando no botão Deter. Se a exportação termina com sucesso, a variável sistema OK toma o valor 1\. Em caso de erro ou se a operação é interrompida, a variável OK toma o valor 0\. O termômetro pode ser ocultado com o comando [MESSAGES OFF](messages-off.md).

O comando utiliza por padrão o conjunto de caracteres UTF-8\. Os documentos em formato DIF utilizam geralmente o conjunto de caracteres IBM437, pode utilizar o comando [USE CHARACTER SET](use-character-set.md) para definir o conjunto de caracteres apropriado.

Durante a utilização de EXPORT DIF, o delimitador de campos padrão é o caractere de tabulação (código 9). O delimitador do registro automático é o retorno de carro (código 13). Pode modificar estes valores atribuindo novos valores às duas *Variáveis sistema* FldDelimit e RecDelimit. O usuário pode modificarar estes valores na caixa de diálogo de exportação do ambiente Desenho. Como os campos Texto podem conter retornos de carro, seja cuidadoso se utilizar o retorno de carro como delimitador entre os campos a exportar.

#### Exemplo 

O exemplo a seguir exporta os dados a um documento DIF. O método começa por definir o formulário de saída de maneira que os dados são exportados pelo formulário correto, depois realiza a exportação:

```4d
 FORM SET OUTPUT([Pessoas];"Exportar")
 EXPORT DIF([Pessoas];"Novas_Pessoas.dif") // Exporta o documento "Novas_Pessoas.dif"
```

#### Variáveis e conjuntos do sistema 

OK toma o valor 1 se a exportação termina com sucesso; do contrário, toma o valor 0.

#### Ver também 

[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 84 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


