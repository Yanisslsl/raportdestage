<template>
  <div class="absolute top-24 w-full h-full">
    <div class="flex items-center justify-center w-full h-3/4 ">
      <div class="flex flex-col w-full h-full md:pl-24 md:pr-24 pr-5 pl-5">
        <h1 class="md:pt-0 md:font-medium leading-tight md:text-5xl mt-0 mb-10 text-blue-600 text-base ">Mon entreprise</h1>
        <div class="font-medium text-left md:text-xl text-base ">
          Wikodit est une SAS (société par actions simplifiée) bordelaise spécialisée dans le développement d'applications mobiles, desktop et web sur mesure.  
          Elle dispose donc de divers projets clients centrés sur deniers technologies Web et possède une expertise pointue sur différents domaines relatifs à la conception, la maintenance, la performance et la sécurité d’applications Web.
        </div>
        <br>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          C’est une société avec un effectif moyen, ce qui permet donc aux collaborateurs d’être relativement polyvalents sur les  différentes technologies utilisés. 
          De la gestion de base de données, de la réalisation d’API  efficaces et de la conception d’interfaces intuitives Wikodit accompagne ses clients tout au long de la réalisation de leurs projets et reste à leur entière disposition.
        </div>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          L’équipe sait se tenir à jour des nouvelles technologies en vogue ce qui lui permet d’être en évolution constante et d’utiliser toujours les technologies les plus stratégiques pour un besoin donné. 
          C’est aussi une équipe de passionnés qui cherche toujours à s’améliorer en attachant une attention particulière au besoin et a la satisfaction des clients. 
        </div>
        <br>
        <br>
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
components: {
},
})
export default class Contact extends Vue {
}
</script>


<style scoped>
#main {
font-family: Cormorant;
left: 10%;
}


#image {
position: relative;
z-index: -10;
top: -25%;
left: 15%;
height: 90%;
width: 100%;
}

#img-first-page {
max-width: 100%;
max-height: 100%;
object-fit: contain;
}

@media screen and (min-width: 640px) {
}



</style>

