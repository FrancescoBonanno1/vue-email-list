const {createApp} = Vue;
createApp({

    data() {
        
        return {
            arrayemail : []
            
    };
    
},

methods :{
 generaemail(){
     for (let i = 0; i < 10; i++) {
         axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risposta) =>{
         this.arrayemail.push(risposta.data.response);
         console.log(this.arrayemail);
        })}
    }

},
mounted (){
  
   
}
}).mount(`#app`);


    
