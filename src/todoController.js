const todoModal = require("./todoModal");



const createTask =async (req, res)=>{
    try {
        const userId = req.token.userId;
        const {title, description, deadLine} = req.body;
        const bodyData = req.body;
        bodyData.userId = userId;

        if(!title || !description || !deadLine){
          return res.status(500).send({
            message : "Please provide all detals (title, description, deadline)"
          })  
        };
        const saveTask =await todoModal.create(bodyData);

        return res.status(201).send({
            message : "Task created successfully",
            data : saveTask
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
    }
};

const fetchTask = async (req, res)=>{
    try {
    const userId = req.token.userId;
     const getTask = await todoModal.find({userId: userId});

     return res.status(200).send({
        message: "list fetch successfully.",
        data : getTask
     })
    } catch (error) {
         console.log(error);
        return res.status(500).send(error) 
    }
};

fetchById = async (req, res)=>{
    try {
     const userId = req.query;//we can add more filters
     const getTask = await todoModal.findById({userId});

     return res.status(200).send({
        message: "list fetch successfully.",
        data : getTask
     }) 
    } catch (error) {
         console.log(error);
        return res.status(500).send(error) 
    }
}

module.exports={createTask, fetchTask, fetchById}