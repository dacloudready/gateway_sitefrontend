<template>
    <div id="app">
       <header>
           <navbar :navitems = navitems></navbar>
       </header>
       <main>
           <router-view :Sites="microsites" :units="units"></router-view>
        </main>
        <credits></credits>
    </div>
    
</template>
<script>
import navbar from './components/Navbar'
import banner from './components/Banner'
import credits from './components/Footer'
export default {
    name: 'App',
    components: {
        navbar, banner, credits
    },

    data() 
    {
        return {
            units:[],
             navitems: [
                { text:'HOME', url:'/home', dropdown: false, dropdown_menu:[] },

                { text:'OUR BRANDS', url:'', dropdown: true, 
                    dropdown_menu: [
                    { text: 'Nissan', url: 'nissan' },
                    { text: 'KIA', url: 'kia' },
                    { text: 'BMW', url: 'bmw' },
                    { text: 'MG', url: 'mg' },
                    { text: 'Geely', url: 'geely' },
                    { text: 'Suzuki', url: 'suzuki' },
                    { text: 'Foton', url: 'foton' },
                    { text: 'Chery', url: 'chery' },
                    ]
                },

             ],

             microsites: [
                {
                    id: 1,
                    name: 'Nissan',
                    slug: 'nissan',
                    banner:[{ img: 'terra_banner1.jpg', alt:'Nissan Terra'}],

                    dealerships: [
                        { brand: "nissan", group: "luzon",  name: "Nissan Mantrade - Makati", address: "2280 Chino Roces, Pasong Tamo, Makati City", contact: "(02)8293-6888" },
                        { brand: "nissan", group: "luzon", name: "Nissan Otis - Manila", address: "1535 Paz Mendoza Guazon Street, Paco, Maynila, Kalakhang Maynila", contact: "(02)8293-6888" },
                        { brand: "nissan", group: "luzon", name: "Nissan Global City", address: "9th Floor Ecoprime Building, 32nd Street corner 9th Avenue Bonifacio Global City, Taguig City, Metro Manila", contact: "(02)8293-6888"},
                        { brand: "nissan", group: "visayas", name: "Nissan Cebu South", address: "Highway Linao, Talisay, Cebu City", contact: "(02)8293-6888" },
                        { brand: "nissan", group: "visayas", name: "Nissan Cebu South - V.RAMA", address: "Vicente Rama Avenue, cor Dr Pablo U. Abella St, Cebu City, 6000 Cebu", contact: "(02)8293-6888" }
                    ]
                },

                {
                    id: 2,
                    name: 'Kia',
                    slug: 'kia',
                    banner: [],
                    dealerships: [
                        {brand: "kia", group: "visayas", name:"KIA Mandaue", address: " Everjust Building, A. C. Cortes Ave, Mandaue City, 6014 Cebu", contact: "(032) 888-5888"},
                        {brand: "kia", group: "visayas", name: "KIA Cebu-Gorordo", address: "128 Gorordo Avenue, Lahug, Cebu City, 6000, Philippines", contact: "(032) 888-5888"},
                        {brand: "kia", group:"", name:"KIA Talisay", address: "Cebu S Rd, Talisay, 6045 Cebu", contact: "(032) 888-5888"}
                    ]
                }, 

                {
                    id: 3,
                    name: 'BMW',
                    slug: 'bmw',
                    banner: [],
                    dealerships: [
                        {brand: "bmw", group: "visayas", name:"Autowelt BMW", address: "Cebu Veterans Dr, Nivel Hills, Cebu City, 6000 Cebu", contact: "(032) 268 9888"},
                    ]
                },
                
                {
                    id: 4,
                    name: 'MG',
                    slug: 'mg',
                    banner: [],
                    dealerships: [
                        {brand: "mg", group: "visayas", name:"MG Pasay", address: "2316 Aurora Blvd, Pasay City. ", contact: "(032)8293-6888"},
                    ]
                },

                
             ]
        }
       
    },

    created(){
           fetch('https://autoweltbmw.com.ph/gateway/api/brand/')
                .then(response => response.json())
                .then( data => {
                    this.units = data
            })
      },
    
    computed: {

      GetMicrositeData: function() {
          return this.Microsites.filter((site) => {
              return site.slug.match(this.$route.params.id)
          });
      },

    },
    
}
</script>