---
id: export-sylk
title: EXPORT SYLK
slug: /commands/export-sylk
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT SYLK.Syntax-->**EXPORT SYLK** ( {*tabela* ;} *documento* )<!-- END REF-->
<!--REF #_command_.EXPORT SYLK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela da qual exportar dados, ou tabela padrão, se omitida |
| documento | Text | &#8594;  | documento SYLK a receber os dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.EXPORT SYLK.Summary-->O comando **EXPORT SYLK** escreve os dados dos registros da seleção atual de *tabela* no processo atual.<!-- END REF--> Os dados são escritos em *documento*, um documento Sylk Windows ou Macintosh, no disco.

A operação de exportação é realizada pelo formulário de saída atual. A operação de exportação escreve os campos e as variáveis baseado na ordem de entrada do formulário de saída. Por essa razão, utilize um formulário de saída que só contenha os campos ou objetos editáveis que queira exportar. Não localize botões ou outros objetos no formulário de exportação. Os objetos de subformulário são ignorados.

Um evento On Load é enviado ao método do formulario por cada registro exportado. Utilize este evento para definir as variáveis que poderia utilizar no formulário de exportação. 

O parâmetro *documento* pode dar nome a um documento novo ou existente. Se *documento* tem o mesmo nome que um documento existente, o documento existente é sobrescrito. O *documento* pode incluir uma rota de acesso que contenha os nomes dos volumens e as pastas. Se passa uma string vazia, aparece a caixa de diálogo comum de salvar arquivos. Se o usuário cancela este diálogo, é cancelada a operação de exportação, e a variável sistema OK toma o valor 0.

Um termômetro de progresso aparece durante a exportação. O usuário pode cancelar a operação clicando no botão Deter. Se a exportação termina com sucesso, a variável sistema OK toma o valor 1\. Em caso de erro ou se a operação seja interrompida, a variável OK toma o valor 0\. O termômetro pode ser ocultado com o comando [MESSAGES OFF](messages-off.md). 

O comando utiliza por padrão o conjunto de caracteres UTF-8\. Os documentos em formato SYLK utilizam geralmente o conjunto de caracteres ISO-8859-1, pode utilizar o comando [USE CHARACTER SET](use-character-set.md) para especificar o conjunto de caracteres apropriado.

Durante a utilização de **EXPORT SYLK**, o delimitador de campos padrão é o caractere de tabulação (código 9). O delimitador do registro por padrão é o retorno de carro (código 13) em OS X e o retorno de carro + retorno à linh a (código 13 + códigoi 10) em Windows. Pode modificar estes valores atribuindo novos valores às duas \[#title id="732"/ *FldDelimit* e *RecDelimit*. O usuário pode mudar estes valores na caixa de diálogo de exportação do ambiente Desenho. Preste atenção que se os campos exportados contiverem caracteres definidos como delimitadores de campos ou de registros, estes caracteres são substituídos automaticamente com espaços no arquivo exportado, com o objetivo de naõ perturbar o processo de importação.

#### Exemplo 

O exemplo a seguir exporta dados a um documento SYLK. O método primeiro define o formulário de saída de maneira que os dados são exportados pelo formulário correto, depois realiza a exportação:

```4d
 FORM SET OUTPUT([Pessoas];"Exportar")
 EXPORT SYLK([Pessoas];"Novas _Pessoas.slk") // Exporta ao documento "Novas_Pessoas.slk"
```

#### Variáveis e conjuntos do sistema 

OK toma el valor 1 se a exportação termina com sucesso; do contrário, toma o valor 0.

#### Ver também 

[EXPORT DIF](export-dif.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT SYLK](import-sylk.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 85 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


