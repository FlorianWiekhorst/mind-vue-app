<template>
  <ion-page>
        <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="no-padding forgot-header">PW vergessen?</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content>
      <div class="forgot-pw-icon">
        <img src="../assets/image/forgot-pw.png" />
      </div>

      <p class="resend-pw-headline">Trage deine Email ein und wir schicken dir ein neues Passwort zu.</p>

      <form>    
        <ion-item lines="full">
          <ion-label position="floating">Email</ion-label>
          <ion-input type="text" required></ion-input>
        </ion-item> 

        <ion-row>
          <ion-col> 
          <ion-button class="w80" type="submit" expand="block">Abschicken</ion-button>
          </ion-col>
        </ion-row>
      </form>

      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-fab-button router-link="/login">
            <p class="fab-text">back</p>
        </ion-fab-button>
      </ion-fab>
    </ion-content>

      
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonFab, IonFabButton,
} from "@ionic/vue";
export default {
  components: { 
    IonPage, IonContent, IonFab, IonFabButton
  }
}
</script>