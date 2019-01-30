module.exports={
    set foo(value){
        return this.set("x-request-foo",value)
    }
}