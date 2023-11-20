const {createApp} = Vue;
createApp({

    data() {
        return {
        
    }
    
},

methods :{
   
},
mounted (){

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta) {
       for (let i = 0; i < 10; i++) {
        var emailbox =[risposta.data];
       console.log(emailbox);
       }
    })
}
}).mount(`#app`);