new Vue({
    el: '#root',
    data: {
        emailList: [],
        sentence: "",
    },
    methods: {
        getEmail() {
            axios
              .get("https://flynn.boolean.careers/exercises/api/random/mail")
              .then((res) => {
                const response = res.data.response;
                this.emailList.push(response);
            });
        },
    },
  });