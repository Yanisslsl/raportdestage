<template>
  <div class="absolute top-24 w-full h-full">
    <div class="flex items-center justify-center w-full h-3/4 ">
      <div class="flex flex-col w-full h-full md:pl-24 md:pr-24 pr-5 pl-5">
        <h1 class="md:pt-0 md:font-medium leading-tight md:text-5xl mt-0 mb-10 text-blue-600 text-base ">Qui je suis ?</h1>
        <div class="font-medium text-left md:text-xl text-base ">
          Bonjour je m’appelle Yaniss Loisel, j’ai 22 ans et j’habite a Bordeaux. Étudiant en Bachelor Informatique en 3eme année à Ynov Campus, je suis un futur développeur Web en formation. Je consacre mon temps libre à la réalisation de mes projets personnels comme le développement de sites web et d’applications mobiles. 
        </div>
        <br>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          Actuellement en alternance chez Wikodit, j’ai également occupé divers postes dans différents domaines. 
          Passant par l’éducation en tant qu’éducateur spécialisé pour jeunes en difficulté mais aussi maçon , j’ai pu acquérir avant même d’occuper mon poste actuel une certaine expérience professionnelle. 
          En effet à l’issue de mon bac S au lycée Gustave Eiffel, j'ai entrepris une année de faculté en économie et gestion en occupant en parallèle un poste d’employé polyvalent à Dominos Pizza. Relativement déçu de ce cursus, j'ai décide avec le grand dam de mes parents de prendre une année sabbatique afin de me rapprocher du monde professionnel. J'ai ensuite travaillé en tant que commercial au profit du fournisseur d’énergie ENI. 
        </div>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          Quelques mois après j’ai occupé divers emplois en tant qu’intérimaire, comme préparateur de commandes, agent de préfabrication ou encore vendangeur. Finalement à l’issue de cette année sabbatique je me suis fortement intéressé au domaine de l’informatique et de la programmation en général. C’est ainsi que j'ai suivi des formations relatives au web notamment sur le célèbre site OpenClassroom. Très motivé à en apprendre plus sur ce domaine, j'ai décidé d’intégrer une école me permettant de me former tout en intégrant en parallèle de ma formation une entreprise ou je pouvais mettre en pratique mes compétences fraîchement acquises. Ynov campus semblait le meilleur choix parmi toutes les autres écoles, et après maintenant deux ans au sein de cette école je tiens a dire que je suis franchement content de celle ci et de la formation qu'elle me propose. 
        </div>
        <br>
        <br>

        <div style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
        padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
        border-radius: 8px; will-change: transform;">
          <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEHGi5i1oE&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
        <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEHGi5i1oE&#x2F;view?utm_content=DAEHGi5i1oE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
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
export default class About extends Vue {
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

