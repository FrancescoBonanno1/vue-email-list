const {createApp} = Vue;
createApp({

    data() {

        return {
           emailbox :[""]
        
    }
    
},

methods :{
   
},
mounted (){

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta) {
       for (let i = 0; i < 10; i++) {
        console.log(risposta.data);
       }
    })
}
}).mount(`#app`);