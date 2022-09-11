<template>
  <div class="absolute top-24 w-full h-full">
    <div class="flex items-center justify-center w-full h-3/4 ">
      <div class="flex flex-col w-full h-full md:pl-24 md:pr-24 pr-5 pl-5">
        <h1 class="md:pt-0 md:font-medium leading-tight md:text-5xl mt-0 mb-10 text-blue-600 text-base "> Service de stockage</h1>
        <div class="font-medium text-left md:text-xl text-base ">
          Durant ma période de stage j'ai été amené à travailler sur un projet ayant pour but de simplifier la gestion de divers médias (image, video, pdf…). 
          En effet au sein de différents projets de notre entreprise, le client final du produit à souvent besoin d'avoir accès à différents types de médias. Par exemple en tant que client je peux vouloir téléverser une photo de moi afin de la mettre en image de profil. 
          Ce besoin se retrouvant dans plusieurs de nos projets , un service nous permettant de pouvoir téléverser et télécharger des fichiers était implémenté dans chacun d’eux.
          Il était dont intéressant de créer un système nous permettant de centraliser ce service afin d’avoir une seule implémentation de celui-ci dans chacun de nos projets.
          J’ai passé  ainsi une partie non négligeable de mon temps de stage à travailler sur ce projet et celui ci ma permis de monter en compétence tant d’un point de vue technique que d’un point de vue méthodologique.
        </div>
        <br>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          D’un point de vue conceptuel le projet peut se résumer ainsi. Un client va vouloir téléverser un fichier sur notre serveur, lorsque le client va envoyer sa requête contenant son fichier celle ci va être proxifier par le back-end du projet  vers le service de stockage qui va lui même l’envoyer au provider. 
          Une fois que le fichier a été intégralement reçu par le provider, le service de stockage enverra une requête au webhook du backend ( avec les informations relatives au fichier; nom du fichier m type du fichier…) afin de notifier le statut du téléversement. 
          De cette manière toutes les informations sensibles du fichier seront inconnues du client qui recevra juste le sattut de sa requête (réussi ou non). De plus toutes les informations relayés entre le service de stockage et le back-end sont cryptés ce qui permet une sécurisation des informations transmises.
        </div>
        <br>
        <br>
        <div class="flex items-center  justify-center w-full ">
          <div class="text-center w-1/2" >
            <img src="@/assets/image1.png" alt="">
          </div>
        </div>
        <br>
        <br>
        <div class="font-medium text-left md:text-xl text-base ">
          Maintenant que l’on a parler succinctement de l’aspect technique, intéressons nous aux compétences que j’ai pu acquérir. Tout d’abord j’ai appris beaucoup de choses sur le node-js en général. Cet environnement d’exécution m’était pas inconnu jusqu’à alors mais j’ai pu grandement approfondir mes connaissances sur ce dernier. En effet travailler sur des fichiers ma permis d’en apprendre plus sur les streams et la façon d’interagir avec ces derniers. L’utilisation de typescript, une extension du langage javascript permettant entre autres tous les avantages d’un language typé, ma également permis de travailler avec de nouvelles contraintes.
        Par ailleurs ce projet ma permis d’étudier une nouvelle méthode de travail le Test-Driven Développement, ou développement piloté par les tests en français. Cette nouvelle façon de travailler ma notamment permis de gagner en  rigueur sur ma façon de coder. Apprendre a tester d’une manière unitaire et fonctionnelle avant même de commencer a coder était jusqu’à alors une pratique qui ,m’était encore  inconnue.
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
export default class Article1 extends Vue {
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

