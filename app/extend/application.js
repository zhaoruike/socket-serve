const BAR = Symbol("bar")
module.exports={
    get bar(){
        if(!this.bar){
            this.bar = "xixi"
        }
        return this.bar
    }
}
