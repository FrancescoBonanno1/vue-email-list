const {createApp} = Vue;
createApp({

    data() {
        return {
            arrayemail :[]
    };
    
},

methods :{
   
},
mounted (){
  
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta) {
           this.arrayemail = (risposta.data);
           console.log(arrayemail);
            })}
   
}
}).mount(`#app`);


    
