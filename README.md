# devWeb
Treinamento de Angular
Requisitos – Gestão de Projetos 
Será um sistema para gestão e cadastro de projetos da uma empresa, ao qual o funcionário com as devidas credenciais pode cadastrar, listar, editar e excluir informações.

#REQ 01 CADASTRO DE PROJETO.
O usuário deverá preencher os seguintes campos obrigatórios e clicar em cadastrar. 
•	Nome do projeto;
•	Descrição do projeto; 
•	Gestor do projeto;
•	Equipe do projeto;
•	Período (data de início e data de fim).

VALIDADORES:
Nome do projeto: valor máximo de caracteres: 65 e min: 10;
Descrição do projeto: valor máximo de caracteres: 250 e min: 20;
Gestor do projeto: valor máximo de caracteres: 65 e min: 10;
Equipe do projeto: valor máximo de caracteres: 100 e min: 50
Período: Data início deve ser menor do que a data de termino. 
Botão de Cadastrar: O sistema deve exibir uma mensagem de que o projeto foi cadastrado com sucesso. 

#REQ 02 LISTAGEM DE PROJETOS
Os projetos cadastrados devem ser exibidos em tabela com as suas informações obrigatórias.
VALIDADORES:  Todos os campos obrigatórios devem estar sendo exibidos corretamente na tela de listagem. 

#REQ 03 EDITAR PROJETOS 
Os projetos podem ser editados no botão de editar na coluna de “ações” e serem atualizados.
VALIDADORES: As informações devem estar previamente apresentadas na tela, para poderem serem editadas e atualizadas. 
#REQ 04 EXCLUIR PROJETOS
Os projetos podem ser excluídos no botão de “excluir” na coluna de “ações”.
VALIDADORES: Os projetos ao serem excluídas deve ser exibido uma mensagem de confirmação de exclusão de projeto. 
O projeto deve ser excluído corretamente e as informações da tabela devem ser atualizadas.
