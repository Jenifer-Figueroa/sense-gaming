module.exports={
    index:((req,res,next)=>{
        res.render("index",{
            title:"SENSE GAMING",
            css:"styles.css"
        })
    })
}