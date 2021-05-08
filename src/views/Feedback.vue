<template>
  <ion-page>
    <ion-content>

      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-fab-button router-link="/dash/">
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