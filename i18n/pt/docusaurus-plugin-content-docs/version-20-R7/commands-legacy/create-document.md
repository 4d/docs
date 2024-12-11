---
id: create-document
title: Create document
slug: /commands/create-document
displayed_sidebar: docs
---

<!--REF #_command_.Create document.Syntax-->**Create document** ( *documento* {; *tipoArquivo*} ) : Time<!-- END REF-->
<!--REF #_command_.Create document.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Nome de documento ou rota de acesso completa ou string vazia para caixa de diálogo de arquivo |
| tipoArquivo | Text | &#8594;  | Lista de tipos de documentos a serem pesquisados, ou "*" para não pesquisar os documentos |
| Resultado | Time | &#8592; | Número de referência de documento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Create document.Summary-->O comando Create document cria um novo documento e retorna seu número de referência.<!-- END REF-->  
  
Passe o nome ou rota completa do novo documento em *documento*. Se *documento* já existir no disco, é substituído. Entretanto, se *documento* estiver bloqueado ou aberto, um erro é gerado.

Se passa uma string vazia em *documento*, aparece uma caixa de diálogo padrão Salvar Como e o usuário pode especificar o nome do documento que deseja criar. Se cancela o diálogo, não se cria o documento; Create document retorna uma referência de documento nula e a variável OK toma o valor 0.  
  
Se o documento for criado corretamente e for aberto, Create document retorna seu número de referência e a variável OK toma o valor 1\. O documento da variável sistema Document é atualizado e retorna a rota de acesso completa do documento criado.

Use ou não a caixa de diálogo Salvar como,Create document cria por padrão um documento de tipo .TXT (Windows) ou TEXT (Macintosh). Para criar outro tipo de documento, passe o parâmetro *tipoArquivo*.  
  
No parâmetro *tipoArquivo*, pode passar um ou vários tipos de arquivo com o objetivo de configurar a lista de tipos autorizados na caixa de diálogo. Pode passar uma lista de vários tipos separados por um ; (ponto e vírgula). Para cada tipo definido, se adicionará uma linha ao menu de eleição do tipo de caixa de diálogo.  
  
Em Mac OS, pode passar um tipo Mac OS clássico (TEXT, APPL, etc.), ou um tipo UTI (Uniform Tipo Identifier). Os tipos UTIs são definidos por Apple para cumprir com as necessidades de padronização de tipos de arquivos. Por exemplo, "public.text" é o tipo UTI dos arquivos de tipo texto. Para maior informação sobre UTIs, consulte o seguinte endereço: *https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html* (documentação em inglês).   
  
Em Windows, pode passar igualmente um tipo de arquivo clássico Mac OS, 4D realiza a correspondência internamente, ou a extensão de arquivos (.txt, .exe, etc.). Note que em Windows, o usuário pode “forçar” a visualização de todos os tipos de arquivos introduzindo \*.\* na caixa de diálogo. Entretanto, neste caso, 4D realizará uma verificação adicional dos tipos de arquivos selecionados: se o usuário seleciona um tipo de arquivo não autorizado, o comando retorna um erro.  
  
Se não deseja restringir os arquivos mostrados a um ou mais tipos, passe "\*" (asterisco) ou ".\*" em *tipoArquivo*.  
  
Em Windows passe uma extensão de arquivo Windows ou um tipo de arquivo Mac OS associado com a ajuda do comando *\_o\_MAP FILE TYPES*. Se deseja criar um documento sem extensão, um documento com várias extensões, ou um documento com uma extensão de mais de três caracteres, não utilize o parâmetro *Tipo* e passe o nome completo em documento (ver exemplo 2).  
  
Quando tiver criado e aberto um documento, pode escrever ou ler os valores do documento utilizando os comandos [RECEIVE PACKET](receive-packet.md) e [SEND PACKET](send-packet.md) que pode combinar com os comandos [Get document position](get-document-position.md) e [SET DOCUMENT POSITION](set-document-position.md) para acessar diretamente a certas partes do documento.  
  
Não esqueça de finalmente chamar [CLOSE DOCUMENT](close-document.md) para o documento.

#### Exemplo 1 

O exemplo abaixo e cria e abre um novo documento chamado Nota, escreve a string “Olá” e fecha o documento: 

```4d
 var vhDoc : Time
 vhDoc:=Create document("Nota.txt") // Criar um novo documento chamado Nota
 If(OK=1)
    SEND PACKET(vhDoc;"Olá") // Escrever uma palavra no documento
    CLOSE DOCUMENT(vhDoc) // Fechar o documento
 End if
```

#### Exemplo 2 

O exemplo abaixo cria documentos com extensões que não são padrão em Windows: 

```4d
 $vtMinhaDoc:=Create document("Doc.ext1.ext2") //Várias extensões
 $vtMeuDoc:=Create document("Doc.shtml") //Extensão longo
 $vtMeuDoc:=Create document("Doc.") //Sem extensão (o ponto "." é obrigatório)
```

#### Variáveis e conjuntos do sistema 

Se o documento for criado corretamente, a variável sistema OK assume o valor 1 e a variável sistema Document contem a rota completa e o nome do arquivo *documento*.

#### Ver também 

[Append document](append-document.md)  
[Open document](open-document.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 266 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, Document, error |
| Proibido no servidor ||


