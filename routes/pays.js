const express=require("express");
const router=express.Router();
//importation du model pays pour traiter les fonctions 4 et 5
const pays=require("../model/pays");
const paysController=require("../controller/paysController");
//fonction 1 (getAll on va la traiter dans le paysController.js du dossier controller)
router.get("/getAll",paysController.getAll);




//fonction 2 (getById on va la traiter dans le paysController.js du dossier controller)

router.get("/getById/:id",paysController.getbyid);


//fonction 3 (addPays on va la traiter dans le paysController.js du dossier controller)

router.post("/addPays",paysController.add);




//fonction 4 delete on va la traiter içi (un choix)
router.delete("/delete/:id", async function (req, res) {
    try {
        console.log(req.params.id);
      await pays.findByIdAndDelete(req.params.id);
  
  
    } catch (err) {
      res.send(err);
    }
  });
  




//fonction 5 update on va la traiter içi (un choix)
router.put("/update/:id", async function (req, res) {
    try {
      
      await pays.findByIdAndUpdate(req.params.id, req.body, { new: true });
     
    } catch (err) {
      res.send(err);
    }
  });


module.exports=router;