<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="header">Registration</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form>    
        <ion-item lines="full">
        <ion-label position="floating">Email</ion-label>
        <ion-input type="text" name="email" required></ion-input>
      </ion-item> 

      <ion-item lines="full">
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password" name="password" required></ion-input>
      </ion-item>

      <ion-row>
        <ion-col> 
        <ion-button class="register-button w80" type="submit" router-link="/dashboard" expand="block">Register</ion-button>
        </ion-col>
      </ion-row>
    </form>

    
    <div class="go-to-login">
      <p>Du bist bereits registriert?</p>
      <ion-button router-link="/login/" class="button-login">
        Login
      </ion-button>
    </div>
    
        <ion-fab vertical="bottom" horizontal="start" slot="fixed">
          <ion-fab-button router-link="/home/">
              <p class="fab-text">back</p>
          </ion-fab-button>
        </ion-fab>

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonFab, IonFabButton, IonRow, IonLabel, IonItem, IonCol, IonInput,
} from "@ionic/vue";
export default {
  components: { 
    IonPage, IonContent, IonFab, IonFabButton, IonRow, IonLabel, IonItem, IonCol, IonInput
  }
}
</script>