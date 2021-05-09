<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button router-link="/home"></ion-back-button>
        </ion-buttons>
        <ion-title class="header">Anmelden</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form>    
        <ion-item lines="full">
          <ion-label position="floating">Email</ion-label>
          <ion-input type="text"></ion-input>
        </ion-item> 

        <ion-item lines="full">
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password"></ion-input>
        </ion-item>

        <ion-row>
          <ion-button router-link="/dash" class="login-button w80" type="submit"  expand="block">Login</ion-button>
        </ion-row>
      </form>

      <div class="forgot-pw">
        <ion-row>
          <ion-button router-link="/forgotpw" class="login-button w80">
            Passwort vergessen?
          </ion-button>
        </ion-row>
      </div>

      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-fab-button router-link="/home">
            <p class="fab-text">back</p>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonRow, IonLabel, IonButton, IonItem, 
} from "@ionic/vue";
export default {
  components: { 
    IonPage, IonContent, IonRow, IonLabel, IonButton, IonItem
  }
}
</script>