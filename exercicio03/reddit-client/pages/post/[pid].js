export default (req, res) => {
    
    //Usar a sintaxe do react para resolver esse problema Userrouters
    const{
        
        query:{pid},
    } = req

    res.end(`Post: ${pid}`)
}