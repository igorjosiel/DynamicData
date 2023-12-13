NodeJs - Ejs, dados dinâmicos e arquivos estáticos

Projeto criado com a intenção de praticar um pouco de mais de NodeJs, utilizando das artimanhas que tenho aprendido ultimanente sobre Node e a utilização de um mecanismo de renderização para trabalhar com dados dinâmicos.
O projeto foi estruturado da seguinte maneira:
	app: é o ponto incial do projeto. Arquivo onde é configurado a criação do servidor e o roteamento do sistema assim como a definição de todos os middlewares que estão sendo usados no mesmo.
	views: pasta utilizada para armazenar os arquivos de apresentação dos dados e componentes visuais ao usuário. Está subdividida em duas pastas internas: pages e partials. Pages renderiza as páginas existentes no site e partials são as partes 
	reutilizáveis do sistema.
	public: nessa pasta estão inseridos todos os arquivos estáticos que devem ser servidos ao sistema.
	
Tecnologias utilizadas: express, nodemon, ejs, body-parser, bootstrap.
