<template>
  <div class="absolute top-24 w-full h-full">
    <div class="flex items-center justify-center w-full h-3/4 ">
      <div class="flex flex-col w-full h-full md:pl-24 md:pr-24 pr-5 pl-5">
        <h1 class="md:pt-0 md:font-medium leading-tight md:text-5xl mt-0 mb-10 text-blue-600 text-base ">Méthode Agile </h1>
        <div class="font-medium text-left md:text-xl text-base ">
          Lors de mon stage, j’ai été également amené à apprendre de nouvelles choses concernant ma gestion de projet. 
          Dans notre entreprise  et comme dans beaucoup d’autres la relation avec nos clients est primordiale. 
          Il est en effet essentiel de satisfaire leurs demandes au mieux possible tout en essayant d'assurer une coopération permanente entre le client et l’équipe. 
        </div>
        <br>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          Au sein de notre entreprise on dispose ainsi de différents outils qui nous aident à mettre en place ces méthodes agiles. 
          Comme un outil de gestion des tâches, qui nous permet entre autres de renseigner les demandes des clients regroupés en sprints. 
          Grâce à ces renseignements on peut donner une estimation du temps de travail aux clients et leur donner de cette manière un aperçu de l’avancement de leur projets. 
          Grâce à cette approche par itération, j’ai acquis une méthodologie rigoureuse quotidienne qui structure tout au long de mes journées ma façon de travailler.
        </div>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          L’ensemble de ces méthodes et outils qui composent la méthodologie agile ma fait prendre conscience de l’interêt de la gestion de projet. 
          Par ailleurs, cela ma également permis de mettre au centre de ma méthode de travail la relation avec le client, en m’impliquant davantage sur la compréhension du besoin client et d’être encore pus réactif vis à vis de ses demandes. 
          Ainsi en planifiant mes tâches quotidiennes je réagis rapidement aux changements du client et aux imprévus.  
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
export default class Article2 extends Vue {
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

