const app = {
    data() {
        return {
            // msg: 'Hello ,Vue3',
            // shown: true ,
            // url: 'http://www.sit.kmutt.ac.th/'
            firstname: 'Krit' ,
            lastname: 'Jarungchairittikul' ,
            image: './images/pic.jpg' ,
            loca: 'BKK',
            buac:'Bussiness account' ,
            fmg:'Finance management' ,
            tran:'Transactions' ,
            sana:'Spending analysis' ,
        }
    },
}
var mountedApp = Vue.createApp(app).mount('#app')