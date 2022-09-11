<template>
  <div class="absolute top-24 w-full h-full">
    <div class="flex items-center justify-center w-full h-3/4 ">
      <div class="flex flex-col w-full h-full md:pl-24 md:pr-24 pr-5 pl-5">
        <h1 class="md:pt-0 md:font-medium leading-tight md:text-5xl mt-0 mb-10 text-blue-600 text-base ">Bilan du stage</h1>
        <div class="font-medium text-left md:text-xl text-base ">
          Si je devais donner mes impressions sur ce stage, je dirai que je n’ai jamais été autant fier de faire partie d’une entreprise. Le directeur général et l’ensemble de l’équipe a réellement su me faire confiance et je tiens donc a leur exprimer ma plus profonde gratitude.
          Je me sens extrêmement bien au sein de cette entreprise et pour être tout à fait honnête je n’aurais pas rêver mieux comme première entreprise. Je suis content de compter parmi une équipe de développeurs aux compétences variés et solides. 
          Je suis confiant à l'idée d’augmenter ma position au sein de l’entreprise et je commence étrangement a apprécier le léger stress qu’implique une montée en compétences et surtout en responsabilités.
        </div>
        <br>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          A l’issue de mon stage j’ai pu constater une énorme progression tant sur l’aspect technique, professionnel, et relationnel. 
          Aujourd’hui je suis capable de réaliser une tâche  dans le cas d’une  demande par un client, en anticipant en amont le besoin et les problèmes éventuels que je pourrais être à même de rencontrer même si cette compétence reste de loin perfectible. 
          Je suis également capable de prendre position dans le cas d’une réunion avec un client , en donnant par exemple mon avis sur un sujet technique ou encore en omettant des objections sur la faisabilité et la cohérence d’une demande.
        </div>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          Je suis aussi capable d’assumer mes responsabilités dans le cas d’une erreur que j’ai pu être amené a causé et ce grâce a la prise de conscience des responsabilités et des enjeux que peuvent causés mon travail sur l’intégrité et le fonctionnement d’un de nos projets.
        </div>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          Je possède cependant quelques lacunes et points d’améliorations. En effet, je pêche encore sur ma rigueur au niveau de mes méthodes de travail. Il est parfois difficile de prendre en compte tous les aspects d’un développement d’une nouvelle fonctionnalité mais il incombe au développeur d’anticiper chacun de ces aspects et je sais que malgré ma progression il me reste encore beaucoup apprendre. 
          J’espère aussi combler mes lacunes en terme d'algorithmie, mais je sais cependant que l’amélioration passe essentiellement par la pratique.
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
export default class Article6 extends Vue {
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

