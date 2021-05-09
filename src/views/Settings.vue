<template>
  <ion-page>
    <ion-content>
      <ion-row class="feedback-row">
          <ion-col>
              <ion-card class="feedback-card" button="true" router-link="/feedback/"> 
                <ion-item>
                  <ion-label class="feedback-label">Feedback geben</ion-label>
                </ion-item>
              </ion-card>
          </ion-col>
      </ion-row>
      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-fab-button router-link="/dash">
          <p class="fab-text">back</p>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonFab, IonFabButton, IonRow, IonLabel, IonItem, IonCard, IonCol,
} from "@ionic/vue";
export default {
  components: { 
    IonPage, IonContent, IonFab, IonFabButton, IonRow, IonLabel, IonItem, IonCard, IonCol
  }
}
</script>