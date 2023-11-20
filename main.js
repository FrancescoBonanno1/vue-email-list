const {createApp} = Vue;
createApp({

    data() {
        return {
            arrayemail : [""]
    }
    
},

methods :{
   
},
mounted (){
  
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta) {
       for (let i = 0; i < 10; i++) {
       this.arrayemail.push(risposta.data);
       console.log(arrayemail);
       }
    })
}
}).mount(`#app`);