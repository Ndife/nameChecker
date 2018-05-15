function names (name){
    var success = "yah, you guess correctly mah friend";
    var failed = "sorry please try again, friend";

var names = ["uche","klye","james","mike"];
for(let a=0; a<=names.length; a++){
    if(name==names[a]){
        return success;
    }else{
        return failed;
    }
}

}


var result = names("kly");
console.log(result);