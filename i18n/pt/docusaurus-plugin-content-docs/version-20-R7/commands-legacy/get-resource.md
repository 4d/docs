---
id: get-resource
title: GET RESOURCE
slug: /commands/get-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET RESOURCE.Syntax-->**GET RESOURCE** ( *resTipo* ; *resNum* ; *resDados* {; *resArquivo*} )<!-- END REF-->
<!--REF #_command_.GET RESOURCE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resTipo | Text | &#8594;  | tipo de resource de 4 caracteres |
| resNum | Integer | &#8594;  | Número do recurso |
| resDados | Blob | &#8594;  | Campo BLOB ou variável para receber os dados |
| &#8592; | Conteúdos do resource |
| resArquivo | Time | &#8594;  | Número de referência do arquivo Resource, ou todos os arquivos de referência abertos, se omitido |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.GET RESOURCE.Summary-->o comando GET RESOURCE retorna no campo o a variável BLOB *resDados* o conteúdo do recurso cujo tipo e número se passa em *resTipo* e *resNum*.<!-- END REF-->  
  
**Importante**: deve passar uma string de 4 caracteres em *resTipo*.  
  
Se não se encontra o recurso, o parâmetro *resDados* não muda e a variável OK toma o valor 0 (zero).  
  
Se passa um número de referência de arquivo de recursos válido em *resArquivo*, o recurso é procurado apenas nesse arquivo. Se não passa *resArquivo*, a primeira ocorrência do recurso encontrada na string de arquivos de recursos é retornada.  
  
**Nota**: o tamanho de um recurso pode ser de vários megabytes.

#### Independência de plataforma 

 Lembre que trabalha com recursos baseados em Mac OS. Sem importar a plataforma, os valores internos dos recursos como os Inteiros Longos são armazenados usando ordenação de bytes ("byte ordering") Macintosh. No Windows, para os dados dos recursos padrão (tais como os recursos listas de cadeias e os recursos imagens) a ordenação de bytes é automaticamente inversa ("byte swapping") quando for necessário. Por outra parte, se criar e utilizar suas próprias estruturas de dados internas, você decide se aplica a ordenação inversa aos dados que extraiu do BLOB (por exemplo, ao passar Macintosh byte ordering a um comando como [BLOB to longint](blob-to-longint.md "BLOB to longint")).

#### Exemplo 

Ver o exemplo do comando SET RESOURCE.

#### Variáveis e conjuntos do sistema 

A variável sistema OK assume o valor 1 se o recurso for encontrado, do contrário assume o valor 0 (zero).

#### Gestão de erros 

Se não houver memória suficiente para carregar a imagem, um erro é gerado. Pode interceptar esse erro com a ajuda de um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver também 

*Recursos*  