<template>
  <ion-page>
    <ion-content :fullscreen="true">    
      <div class="dashboard-container">
          <img class="mind-match-logo" src="../assets/image/logo.png" />
          <ion-grid>
              <ion-row class="dashboard-row">
                  <ion-col>
                      <ion-card class="dashboard-card" button="true">
                          <ion-item>
                              <img src="../assets/image/matches-logo.png" />
                              <ion-label class="dashboard-label">Matches</ion-label>
                          </ion-item>
                       </ion-card>
                  </ion-col>
              </ion-row> 
              <ion-row class="dashboard-row">
                  <ion-col>
                      <ion-card class="dashboard-card" button="true"> 
                        <ion-item>
                        <img src="../assets/image/forgot-pw.png" />
                          <ion-label class="dashboard-label">Mindset-Fragen</ion-label>
                        </ion-item>
                      </ion-card>
                  </ion-col>
                </ion-row>
                <ion-row class="dashboard-row">
                  <ion-col>
                        <ion-card class="dashboard-card" button="true">
                          <ion-item>
                          <img src="../assets/image/profil-logo.png" />
                            <ion-label class="dashboard-label">Dein Profil</ion-label>
                          </ion-item>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row class="dashboard-row">
                  <ion-col>
                        <ion-card class="dashboard-card" button="true">
                          <ion-item>
                          <img src="../assets/image/pref-logo.png" />
                            <ion-label class="dashboard-label">Einstellungen</ion-label>
                          </ion-item>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row class="dashboard-row">
                  <ion-col>
                        <ion-card class="dashboard-card" button="true" router-link="/faq/">
                          <ion-item>
                          <img src="../assets/image/faq-logo.png" />
                            <ion-label class="dashboard-label">FAQ</ion-label>
                          </ion-item>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        <div class="logout">
          <ion-button class="button-logout">
            <ion-icon name="caret-back-outline"></ion-icon>
            <p>Logout</p>
          </ion-button>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonIcon, IonRow, IonLabel, IonButton, IonItem, IonCard, IonGrid, IonCol,
} from "@ionic/vue";
export default {
  components: { 
    IonPage, IonContent, IonIcon, IonRow, IonLabel, IonButton, IonItem, IonCard, IonGrid, IonCol
  }
}
</script>