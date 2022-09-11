<template>
  <div class="absolute top-24 w-full h-full">
    <div class="flex items-center justify-center w-full h-3/4 ">
      <div class="flex flex-col w-full h-full md:pl-24 md:pr-24 pr-5 pl-5">
        <h1 class="md:pt-0 md:font-medium leading-tight md:text-5xl mt-0 mb-10 text-blue-600 text-base ">Initiation au DevOps</h1>
        <div class="font-medium text-left md:text-xl text-base ">
          Essayons d’abord de définir ce qu’est le DevOps, malgré tout ce que l’on peut entendre sur internet à ce sujet, le DevOps reste avant tout la liaison entre deux métiers SysOps et Développeur. 
          C’est ainsi que l’ingénieur DevOps s’occupe donc d'automatiser et d'intégrer les processus entre les équipes de développement informatiques, en mettant notamment l’accent sur l’autonomisation des équipes ainsi que la communication et la collaboration transverses.
          J’ai essayé d’en donner une définition succincte de l’ensemble de définitions trouvables sur internet.
        </div>
        <br>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          En somme, en tant que Developpeur je m’étais jamais vraiment intéressé à ce domaine pourtant indispensable dans le Web. 
          J’ai donc étudié ce domaine dans le cas de mon stage car d'une part dans notre équipe tout le monde possède des compétences sur ce sujet, et d’autre part parce que dans le cas de l’un de nos projets j’ai utilisé un des outils fortement utilisé dans ce domaine: <a href="https://kubernetes.io/fr/">Kubernetes.</a> 
        </div>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          Pour résumer Kubernetes est une solution d’orchestration d’applications  passant par des conteneurs. Il faut voir un conteneur comme une boîte qui nous permet d’envelopper une application de façon légère et isolé. 
          J’ai donc passer pas mal de temps a étudier cette technologie. Ceci m'a permis de mieux appréhender les différents aspects de la mise en service d’une application en m’écartant juste de la programmation de celle ci. Kubernetes est un outil qui est de plus en plus utilisé en entreprise car elle permet une meilleure mise à l’échelle des applications et également une meilleure disponibilité. Ces grâce notamment à ces avantages que Google peut gérer des milliards de conteneurs par semaine. 
          C’est une technologie qui est très facile d’accès en terme d’apprentissage et je ne peux que vous conseiller de l’apprendre rapidement.
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
export default class Article5 extends Vue {
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

