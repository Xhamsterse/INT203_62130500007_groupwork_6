const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    loca: {
        presence: true,
    },
}
const app = {
    data() {
        return {
            // msg: 'Hello ,Vue3',
            // shown: true ,
            // url: 'http://www.sit.kmutt.ac.th/'
            firstname: null ,
            lastname: null ,
            image: './images/pic.jpg' ,
            loca: null,
            buac:'Bussiness account' ,
            fmg:'Finance management' ,
            tran:'Transactions' ,
            sana:'Spending analysis' ,
            errors: null,
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    loca: this.loca,                                    
                                    },
                                    constraints)
            if(!this.errors){
                alert("Your profile is updated successfully.")
            }
        }
    }
}
var mountedApp = Vue.createApp(app).mount('#app')