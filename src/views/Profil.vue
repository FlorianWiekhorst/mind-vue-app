<template>
  <ion-page>
   <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button router-link="/dash"></ion-back-button>
        </ion-buttons>
        <ion-title class="profil-header">Profil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="profil-content">
        <p class="id-text">Deine User-ID: <b>#925</b></p>
        <div class="selfmade-br"></div>
        <p class="match-member-text">Du hast <span class="prim-color"><b>40</b></span> von den derzeit <b>150</b> Fragen beantwortet. (26.6%)</p>
        <ion-progress-bar class="question-bar" value="0.24"></ion-progress-bar>
        <p class="match-member-text">Zur <span class="link-button prim-color" routerLink="/questions"><b>Fragenseite</b></span> und weitere Fragen beantworten.</p>
        <div class="selfmade-br"></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonBackButton, IonHeader, IonButtons, IonTitle, IonToolbar, IonProgressBar,
} from "@ionic/vue";
export default {
  components: { 
    IonPage, IonContent, IonBackButton, IonHeader, IonButtons, IonTitle, IonToolbar, IonProgressBar
  }
}
</script>