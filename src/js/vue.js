import { createApp } from 'vue'
import card from '@/components/card.vue'
import item from '@/components/item.vue'
import itemcompra from '@/components/itemCompra.vue'

const app = createApp({
    data() {
        return {
            items:[
              {
                "image": "/img/star-wars/trooper-1.webp",
                "alt": "Figura coleccionable Funko de un Stormtrooper",
                "title": "STORMTROOPER LIGHTSABER",
                "brand": "STAR WARS",
                "price": "$ 1799,99.-",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
                "image": "/img/pokemon/pidgeotto-1.webp",
                "alt": "Figura coleccionable Funko de Pidgeotto",
                "title": "PIDGEOTTO",
                "brand": "POKEMON",
                "price": "$ 1799,99.-",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
                "image": "/img/harry-potter/luna-1.webp",
                "alt": "Figura coleccionable Funko de Luna Lovegood",
                "title": "LUNA LOVEGOOD LION MASK",
                "brand": "HARRY POTTER",
                "price": "$ 1799,99.-",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
                "image": "/img/star-wars/baby-yoda-1.webp",
                "alt": "Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.",
                "title": "BABY YODA BLUEBALL",
                "brand": "STAR WARS",
                "price": "$ 1799,99.-",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              }
            ]
        }
    },
    components: {
      card,
      item,
      itemcompra,
    },
})

app.config.compilerOptions = {
  isCustomElement: (tag) => tag === 'iconify-icon'
}

app.mount('#app')
app.config.errorHandler = (err) => {
    /* handle error */
    console.log(err)
  }