<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <div id="container">
        <div class="headline">
          <img class="mind-match-logo" src="../assets/image/logo.png" />
          <p>Entdecke Personen, welche so denken wie Du!</p>
        </div>
        <div>
          <ion-button router-link="/login/" class="button-login">
            Login
          </ion-button>
        </div>

        <div>
          <ion-button router-link="/register/" class="button-register">
            Register
          </ion-button>
        </div>

        <div>
          <ion-button router-link="/faq/" class="button-faq">
            Was ist Mind Match?
          </ion-button>
        </div>
      </div>
      <footer>
      </footer>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonButton,
} from "@ionic/vue";
export default {
  components: { 
    IonPage, IonContent, IonButton
  }
}
</script>