const getAdmin=async(req,res)=>{
    try{
        // req.role='admin'
        res.status(200).json({msg:'admin accessed',role:req.role})
    }
    catch(err){
        res.status(401).json({msg:err.message})
    }
}

module.exports=getAdmin