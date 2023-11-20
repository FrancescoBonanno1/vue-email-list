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
    arrayemail = [""]
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta) {
       for (let i = 0; i < 10; i++) {
       arrayemail.push(risposta.data[i]);
       console.log(arrayemail);
       }
    })
}
}).mount(`#app`);