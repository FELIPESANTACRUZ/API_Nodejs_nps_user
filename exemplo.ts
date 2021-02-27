// **
//  * GET => Buscar
//  * POST => Salvar
//  * PUT => Alterar
//  * DELETE => Deletar
//  * PATCH => Alteração específica
//  */

//  //http://localhost:3333/
//  app.get("/", (request, response) => {
//      return response.json({ message: "Hello NLW4!" });
//  });

//  // 1 param => Rota(Recurso API)
//  // 2 param => request,response

//  app.post("/", (request,response) => {
//      //Recebeu os dados para salvar
//      return response.json({ message: "Os dados foram salvos com sucesso!" });
//  });

//  app.listen(3333, () => {
//      console.log("server is running!");
//  })

 //COMANDO PARA CRIAR MIGRATION:
 //yarn typeorm migration:create -n CreateUsers

//##RODAR APLICATION(configurada no package.json):##
 //yarn dev

 //yarn typeorm migration:run 

//##desfaz a ultima migration que fez##
 //yarn typeorm migration:revert

 //DEV/DEPENDENCIAS
 // yarn add @types/uuid -D (exemplo)