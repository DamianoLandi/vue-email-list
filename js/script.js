new Vue({
    el: '#root',
    data: {
        emailList: [],
        sentence: "",
    },
    methods: {
    },
    created(){
        this.emailList = [];
        for(let i = 0; i < 10; i++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) => {
              const response = res.data.response;
              this.emailList.push(response);
          });
        }
    }
  });