---
id: import-text
title: IMPORT TEXT
slug: /commands/import-text
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT TEXT.Syntax-->**IMPORT TEXT** ( {*tabela* ;} *documento* )<!-- END REF-->
<!--REF #_command_.IMPORT TEXT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual se importará os dados, ou tabela Padrão, se omitido |
| documento | Text | &#8594;  | Documento texto do qual se importará os dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.IMPORT TEXT.Summary-->O comando IMPORT TEXT lê dados de *documento*, um documento texto Windows ou Macintosh e os escreve em *tabela* criando novos registros para essa tabela.<!-- END REF--> 

A operação de importação é realizada através do formulário de entrada atual. A operação de importação lê os campos e as variáveis em função do plano dos objetos no formulário de entrada. Por esta razão, deve ter muito cuidado em relação à ordem dos objetos texto (campos e variáveis) no formulário. O primeiro objeto no qual os dados serão importados deve estar ao fundo do formulário, etc. Se o número de campos ou variáveis no formulário não corresponde ao número de campos a importar, os campos extras são ignorados. Um formulário de entrada utilizado para importar não pode conter botões. Os objetos de sub-formulário são ignorados.

**Nota:** Uma maneira de ter certeza que os dados sejam importados nos objetos corretos é selecionar o objeto no qual deve ser importado o primeiro campo e movê-lo ao primeiro plano. Continue movendo os campos e variáveis ao primeiro plano, em ordem, tendo certeza de que tenha um campo ou variável para cada campo a importar. 

Um evento On Validate é enviado ao método de formulário para cada registro que seja importado. Utilize este evento para copiar os dados das variáveis aos campos, se utiliza as variáveis no formulário de importação. 

O parâmetro *documento* pode incluir uma rota de acesso que contenha os nomes de volumes e pastas. Se passa uma cadeia vazia, aparece a caixa de diálogo padrão de abertura de arquivos. Se usuário cancela este diálogo, se cancela a operação de importação, e a variável sistema OK toma o valor 0.

Um termômetro de progresso aparece durante a importação. O usuário pode cancelar a operação clicando no botão Parar. Os registros que tenham sido importados não serão removidos se usuário pressiona o botão Parar. Se a importação termina com sucesso, a variável sistema OK toma o valor 1\. Se ocorre um erro ou se a operação é interrompida, a variável sistema toma o valor 0\. O termômetro pode ser ocultado com o comando [MESSAGES OFF](messages-off.md).

O comando utiliza por padrão o conjunto de caracteres UTF-8\. Pode utilizar o comando [USE CHARACTER SET](use-character-set.md) para modificar esse conjunto de caracteres.

Durante a utilização de IMPORT TEXT, o delimitador de campos automaticamente é o caractere de tabulação (código 9). O delimitador do registro por padrão é o retorno de carro (código 13). Pode modificar estes valores atribuindo novos valores às *Variáveis sistema*: *FldDelimit* e *RecDelimit*. O usuário pode mudar estes valores na caixa de diálogo de importação do ambiente Desenho. Como os campos Texto podem conter retorno de carro, seja cuidadoso se utilizar o retorno de carro como delimitador se está importando campos texto.

#### Exemplo 

O exemplo a seguir importa dados de um documento texto. O método define em primeiro lugar o formulário de entrada de modo a que os dados sejam importados ao formulário correto, muda o delimitador de variáveis 4D, depois realiza a importação:

```4d
 FORM SET INPUT([Pessoas];"Importar")
 FldDelimit:=27 // Definir caractere delimitador de campos: Escape
 RecDelimit:=10 // Definir caractere delimitador de registros: Line Feed
 IMPORT TEXT([Pessoas];"Novas_Pessoas.txt") // Importação do documento “Novas_Pessoas.txt”
```

#### Variáveis e conjuntos do sistema 

OK toma o valor 1 se a importação termina com sucesso; do contrário, toma o valor 0.

#### Ver também 

[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 168 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


