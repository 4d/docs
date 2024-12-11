---
id: text-to-document
title: TEXT TO DOCUMENT
slug: /commands/text-to-document
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO DOCUMENT.Syntax-->**TEXT TO DOCUMENT** ( *nomeArquivo* ; *texto* {; *conjCaracteres* {; *modoRetorno*}} )<!-- END REF-->
<!--REF #_command_.TEXT TO DOCUMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArquivo | Text | &#8594;  | Nome do documento ou caminho de acesso ao documento |
| texto | Text | &#8594;  | Texto a armazenar no documento |
| conjCaracteres | Text, Integer | &#8594;  | Nome ou número do conjunto de caracteres |
| modoRetorno | Integer | &#8594;  | Modo de processamento para os retornos de linha |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.TEXT TO DOCUMENT.Summary-->O comando **TEXT TO DOCUMENT** le permite escrever o *texto* diretamente no arquivo de disco.<!-- END REF-->

Em *nomeArquivo*, passe o nome ou caminho de acesso do arquivo a escrever. Se o arquivo não existe, é criado. Quando o arquivo já existe no disco, seu conteúdo anterior será excluído, exceto se já está aberto, em cujo caso, seu conteúdo se bloqueia e é gerado um erro. Em *nomeArquivo*, que pode passar:

* Só o nome do arquivo, por exemplo "meuArquivo.txt": Neste caso, o arquivo se coloca junto ao arquivo de estrutura da aplicação.
* Um caminho de acesso relativo ao arquivo de estrutura da aplicação, por exemplo, "\\\\docs\\\\meuArquivo.txt" em Windows ou ":docs:meuArquivo.txt" em OS X.
* Um caminho de acesso absoluto, por exemplo, "c:\\\\app\\\\docs\\\\meuArquivo.txt" em Windows ou "MacHD:docs:meuArquivo.txt" em OS X.

Se deseja que o usuário seja capaz de indicar o nome ou a localização do documento, utilize os comandos [Open document](open-document.md) ou [Create document](create-document.md) , assim como a variável do sistema *Document*.

**Nota:** Por padrão, os documentos gerados por este comando não tem uma extensão. Deve passar uma extensão em *nomeArquivo*. Também pode utilizar o comando *\_o\_SET DOCUMENT TYPE*.  
  
Em *texto*, passe o texto a escrever no disco. Pode ser uma constante literal ("meu texto"), ou um campo ou variável texto 4D.  
  
Em *conjCaracteres*, passe o conjunto de caracteres a utilizar para a escritura do documento. Pode passar uma cadeia com o nome padrão do conjunto (por exemplo, "ISO-8859-1" ou "UTF-8") ou seu ID MIBEnum (inteiro longo). Para mais informação sobre a lista de conjuntos de caracteres suportados por 4D, consulte a descrição do comando [CONVERT FROM TEXT](convert-from-text.md). Se um Byte Order Mark (BOM) existe para o conjunto de caracteres, 4D o insere no documento. Se não se especifica um conjunto de caracteres, 4D utiliza por padrão o conjunto de caracteres "UTF\_8 " e um BOM.  
  
Em *modoRetorno*, pode passar um inteiro longo que indica o processo a aplicar aos caracteres de fim de linha antes de guardar eles no arquivo. Pode passar uma das seguintes constantes, localizadas no tema "*Documentos Sistema*":

| Constante                   | Tipo          | Valor | Comentário                                                                                                                                                                  |
| --------------------------- | ------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Document unchanged          | Inteiro longo | 0     | Sem processamento                                                                                                                                                           |
| Document with CR            | Inteiro longo | 3     | As linhas de ruptura se convertem ao formato OS X: CR (*retorno de carro*)                                                                                                  |
| Document with CRLF          | Inteiro longo | 2     | As linhas de ruptura se convertem ao formato Windows: CRLF (*return + salto de linha*)                                                                                      |
| Document with LF            | Inteiro longo | 4     | As linhas de ruptura se convertem ao formato Unix: LF (*salto de linha*)                                                                                                    |
| Document with native format | Inteiro longo | 1     | (Por padrão) as linhas de ruptura se convertem ao formato nativo do sistema operativo: CR (retorno de carro) em OS X, CRLF (*retorno de carro + salto de linha*) em Windows |

Por padrão, se omitir o parâmetro *modoRetorno*, os caracteres de fim de linha se processam em modo nativo (1).

**Nota de Compatibilidade**: Opções de Compatibilidade estão disponíveis para gerenciamento EOL e BOM. Veja *Página Compatibilidade*.

**Nota:** Este comando não modifica a variável OK. Em caso de falha, é gerado um erro que pode interceptar utilizando um método instalado pelo comando [ON ERR CALL](on-err-call.md).

#### Exemplo 1 

Estes são alguns exemplos típicos de uso deste comando:

```4d
 TEXT TO DOCUMENT("myTest.txt";"Esta é uma prova")
 TEXT TO DOCUMENT("myTest.xml";"Esta é uma prova")
```

#### Exemplo 2 

Exemplo que permite ao usuário indicar a localização do arquivo a criar:

```4d
 $MyTextVar:="Esta é uma prova"
 ON ERR CALL("IO ERROR HANDLER")
 $vhDocRef :=Create document("")
  // Guardar documento com a extensão ".txt"
  // Neste caso, a extensão .txt sempre se adiciona ao nome; não é possível mudar ela
 If(OK=1) // Se o documento foi criado com sucesso
    CLOSE DOCUMENT($vhDocRef) //Fechar o documento
    TEXT TO DOCUMENT(Document;$MyTextVar )
  // Escrevemos o documento
 Else
  // Gestão de erro
 End if
```

#### Ver também 

[Document to text](document-to-text.md)  
*Documentos Sistema*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1237 |
| Thread-seguro | &check; |
| Proibido no servidor ||


