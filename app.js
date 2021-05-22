
const App = Vue.createApp({
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    modalToggle() {
      this.showModal = !this.showModal;
    },

  }
})

// Vue.createApp(App)

App.component("modal", {
  template: "#modal-template",
  data(){
    return{
      salaryValue:null,
      annualPayments: [],
    }
  },
  methods:{
    isNumber(event) {
      event = (event) ? event : window.event;
      var charCode = (event.which) ? event.which : event.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    },
  },
  watch:{
    salaryValue: function(value){
      this.annualPayments = [];
      if (value > 10000){
        const maxValue = 260000;
        let count = 0;
        let taxesDeduction = Math.round((value * 12) * 0.13);
        while ((count + taxesDeduction) < maxValue){
          count += taxesDeduction;
          this.annualPayments.push(taxesDeduction);
        } 
        this.annualPayments.push(maxValue - count);
        console.log(this.annualPayments);
      }

    }
  }
  
});

App.mount("#app");