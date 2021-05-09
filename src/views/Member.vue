<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button router-link="/matches"></ion-back-button>
        </ion-buttons>
        <ion-title class="member-header">MemberView</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
    <div class="member-content">
        <p class="match-member-text">Die <b>Übereinstimmung</b> eurer Antworten liegt bei:</p>
        <ion-row class="match-member">
          <ion-col size="6" offset="1"><div class="circle"></div></ion-col>
          <ion-col size="4"><p class="circle-text">30%</p></ion-col>
        </ion-row>
        <div class="selfmade-br"></div>
        <section class="full-width">
          <header><p class="match-member-text">Nutze die <b>Chatfunktion</b> um direkt Kontakt zu User-#728 aufnehmen!</p></header>
          <ion-button expand="full" class="chat-button-member" color="primary">Chat starten</ion-button>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonBackButton, IonHeader, IonButtons, IonTitle, IonToolbar, IonCol, IonRow, IonButton,
} from "@ionic/vue";
export default {
  components: { 
    IonPage, IonContent, IonBackButton, IonHeader, IonButtons, IonTitle, IonToolbar, IonCol, IonRow, IonButton
  }
}
</script>