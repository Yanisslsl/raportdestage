<template>
  <div class="absolute top-24 w-full h-full">
    <div class="flex items-center justify-center w-full h-3/4 ">
      <div class="flex flex-col w-full h-full md:pl-24 md:pr-24 pr-5 pl-5">
        <h1 class="md:pt-0 md:font-medium leading-tight md:text-5xl mt-0 mb-10 text-blue-600 text-base ">Investissement Personnel et prise de compétences </h1>
        <div class="font-medium text-left md:text-xl text-base ">
          Durant ma période de stage j'ai vu de nombreux concepts et nouvelles technologies. J’ai pu étendre mon bilan de compétences en passant par des concepts théoriques liées au Web comme le principe d’une API REST, les websockets, les serveurs , les frameworks, les proxys… Mais en passant aussi par des concepts techniques comme la programmation orientée objet, les tests unitaires et fonctionnels etc..
        </div>
        <br>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          Cependant malgré toutes ces compétences, il me reste encore beaucoup de choses a apprendre. 
          J’hésite pas alors en parallèle de mes heures de stage à approfondir mes compétences par le biais de différents projets personnels. Le métier de développeur implique un investissement constant et on ne cesse jamais d’apprendre. Je fais donc aussi beaucoup de veille technologique en suivant des personnalités qui partagent mes compétences sur les réseaux sociaux par exemple. 
        </div>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          J’essaye de me former moi même au mieux possible, en hésitant pas a m’intéresser à des notions qui s’écartent de mon travail. J’ai également pu connaitre le bonheur de faire apprendre mes compétences fraichement acquises à des personnes encore plus novices dans mon métier.
En effet j’ai dirigé un labo dans mon école en parallèle de mon stage. Et j’ai pu prendre conscience que partager mes connaissances m’aidait tout autant que mes élèves à prendre du niveau.        </div>
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
export default class Article4 extends Vue {
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

