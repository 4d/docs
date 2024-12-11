---
id: get-pasteboard-data
title: GET PASTEBOARD DATA
slug: /commands/get-pasteboard-data
displayed_sidebar: docs
---

<!--REF #_command_.GET PASTEBOARD DATA.Syntax-->**GET PASTEBOARD DATA** ( *tipoDados* ; *dados* )<!-- END REF-->
<!--REF #_command_.GET PASTEBOARD DATA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoDados | Text | &#8594;  | Tipo de dados a adicionar |
| dados | Blob | &#8592; | Dados extraídos da área de transferência |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET PASTEBOARD DATA.Summary-->O comando GET PASTEBOARD DATA devolve no campo ou variável de tipo BLOB ou na variável *dados*, os dados que se encontram na área de transferência e cujo tipo se passa em *tipoDados*.<!-- END REF-->(Se a cópia contiver texto copiado dentro de 4D, então o conjunto de caracteres do BLOB é provavelmente UTF-16)

**Nota:** No contexto de operações copiar/colar, o espaço de copiar corresponde ao clipboard. 

Passe em *tipoDados* um valor que defina o tipo de dados a extrair. Pode passar uma assinatura 4D, um tipo UTI (Mac OS), um nome/número de formato (Windows), ou um tipo de 4 caracteres (compatibilidade). Para maior informação sobre estes tipos, consulte a seção *Gerenciar área de transferência*.

**Nota:** Não pode ler arquivos de tipo dados com este comando, para fazer isso deve usar o comando [Get file from pasteboard](get-file-from-pasteboard.md). 

#### Exemplo 

Os métodos de objeto a seguir são os dos botões que copiam e colam dados no array *asOpçoes* (menu pop-up, lista pop up,...) localizado num formulário:

```4d
  // Método de objeto bCopiar_asOpçoes
 If(Size of array(asOpçoes)>0) // Há algo para copiar?
    VARIABLE TO BLOB(asOpçoes;$vxClipData) // Acumular os elementos do array em um BLOB
    CLEAR PASTEBOARD // Esvaziar a área de transferência
    APPEND DATA TO PASTEBOARD("artx";$vxClipData) // Note que o tipo de dados é escolhido arbitrariamente
 End if
 
  // Método de objeto bColarOpçoes
 If(Pasteboard data size("artx")>0) // Há dados de tipo "artx" na área de transferência?
    GET PASTEBOARD DATA("artx";$vxClipData) // Extrair os dados da área de transferência
    BLOB TO VARIABLE($vxClipData;asOpçoes) // Preencher o array com os dados do BLOB
    asOpçoes:=0 // Reiniciar o elemento selecionado do array
 End if
```

#### Variáveis e conjuntos do sistema 

Se os dados são extraídos corretamente, a variável OK toma o valor 1; do contrário OK toma o valor 0 e é gerado um erro.

#### Ver também 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 401 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


