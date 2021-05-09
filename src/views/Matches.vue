<template>
  <ion-page>
  <ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button router-link="/dash"></ion-back-button>
    </ion-buttons>
    <ion-title class="match-header">Match Liste</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>

  <!-- maybe.. TO DO: use NAV from ionic for this list:
  https://ionicframework.com/docs/api/nav -->

    <!-- List for higest Matches -->
    <ion-list class="best-matches">
      <ion-list-header lines="none">
        <ion-label class="list-header">Deine Top 5 Matches:</ion-label>
      </ion-list-header>

      <ion-item class="list-box" router-link="/member" lines="none">
        <h2 class="match-percent">89%</h2><h2 class="match-usernumber">User #237</h2><ion-icon class="match-icon" name="person-circle-outline"></ion-icon>
      </ion-item>

      <ion-item class="list-box" router-link="/member" lines="none">
        <h2 class="match-percent">84%</h2><h2 class="match-usernumber">User #928</h2><ion-icon class="match-icon" name="person-circle-outline"></ion-icon>
      </ion-item>

      <ion-item class="list-box" router-link="/member" lines="none">
        <h2 class="match-percent">83%</h2><h2 class="match-usernumber">User #522</h2><ion-icon class="match-icon" name="person-circle-outline"></ion-icon>
      </ion-item>

      <ion-item class="list-box" router-link="/member" lines="none">
        <h2 class="match-percent">77%</h2><h2 class="match-usernumber">User #287</h2><ion-icon class="match-icon" name="person-circle-outline"></ion-icon>
      </ion-item>

      <ion-item class="list-box" router-link="/member" lines="none">
        <h2 class="match-percent">74%</h2><h2 class="match-usernumber">User #761</h2><ion-icon class="match-icon" name="person-circle-outline"></ion-icon>
      </ion-item>
    </ion-list>

    <!-- List for lowest Matches -->
    <ion-list class="worst-matches">
      <ion-list-header lines="none">
        <ion-label class="list-header">Deine Matches mit den größten Unterschieden:</ion-label>
      </ion-list-header>
      <p class="worst-matches-subheader">"Unterschiede ziehen sich an? Finde es heraus!"</p>

      <ion-item class="list-box" router-link="/member" lines="none">
        <h2 class="match-percent">10%</h2><h2 class="match-usernumber">User #067</h2><ion-icon class="match-icon" name="person-circle-outline"></ion-icon>
      </ion-item>

      <ion-item class="list-box" router-link="/member" lines="none">
        <h2 class="match-percent">12%</h2><h2 class="match-usernumber">User #912</h2><ion-icon class="match-icon" name="person-circle-outline"></ion-icon>
      </ion-item>

      <ion-item class="list-box" router-link="/member" lines="none">
        <h2 class="match-percent">17%</h2><h2 class="match-usernumber">User #085</h2><ion-icon class="match-icon" name="person-circle-outline"></ion-icon>
      </ion-item>

      <ion-item class="list-box" router-link="/member" lines="none">
        <h2 class="match-percent">22%</h2><h2 class="match-usernumber">User #345</h2><ion-icon class="match-icon" name="person-circle-outline"></ion-icon>
      </ion-item>

      <ion-item class="list-box" router-link="/member" lines="none">
        <h2 class="match-percent">22%</h2><h2 class="match-usernumber">User #167</h2><ion-icon class="match-icon" name="person-circle-outline"></ion-icon>
      </ion-item>
    </ion-list>

</ion-content>

  </ion-page>
</template>

<script>
import {
  IonPage, IonContent, IonBackButton, IonHeader, IonButtons, IonTitle, IonToolbar, IonItem, IonLabel, IonListHeader, IonIcon, IonList,
} from "@ionic/vue";
export default {
  components: { 
    IonPage, IonContent, IonBackButton, IonHeader, IonButtons, IonTitle, IonToolbar, IonItem, IonLabel, IonListHeader, IonIcon, IonList
  }
}
</script>