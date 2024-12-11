---
id: document-to-blob
title: DOCUMENT TO BLOB
slug: /commands/document-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.DOCUMENT TO BLOB.Syntax-->**DOCUMENT TO BLOB** ( *documento* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.DOCUMENT TO BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Nome do documento gerado |
| Blob | Blob | &#8596;  | Campo ou variável de tipo BLOB a receber o documento |
| || | Conteúdo do documento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOCUMENT TO BLOB.Summary-->DOCUMENT TO BLOB carrega todo o conteúdo do *documento* em *blob*.<!-- END REF--> Você deve passar o nome de um documento existente que não esteja aberto, caso contrário um erro será gerado. Para deixar o usuário escolher o documento a ser carregado para o BLOB, use o comando [Open document](open-document.md) e variável de processo do *documento* (ver exemplo).

#### Exemplo 

Você escreve um Sistema de Informação que permite rapidamente armazenar e recuperar documentos. Em um formulário de entrada de dados, você cria um botão que permite carregar um documento em um campo BLOB. O método para este botão pode ser:

```4d
 $vhDocRef:=Open document("") // Selecionar um documento
 If(OK=1) // Se um documento foi selecionado
    CLOSE DOCUMENT($vhDocRef) // Não necessitamos manter aberto
    DOCUMENT TO BLOB(Document;[SuTabla]SuCampoBLOB) // Carregar o documento
    If(OK=0)
  // Controlar erro
    End if
 End if
```

#### Variáveis e conjuntos do sistema 

OK é definido como 1 se o documento foi carregado corretamente, caso contrário, OK é definido como 0 e um erro é gerado.

#### Tratamento de erros 

* Se você tentar carregar (em um BLOB), um documento que não existe ou que já está aberto por outro processo ou aplicativo, o erro adequado do Gerenciador de Arquivos é gerado.
* Um erro de E / S pode ocorrer se o documento está bloqueado, localizado em um volume fechado, ou se houver problema na leitura do documento.
* Se não houver memória suficiente para carregar o documento, um erro -108 é gerado.

Em cada caso, você pode interceptar o erro usando um método de interrupção [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver também 

[BLOB TO DOCUMENT](blob-to-document.md)  
[Open document](open-document.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 525 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


