<template>
  <ion-page>
     <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button router-link="/dash"></ion-back-button>
        </ion-buttons>
        <ion-title class="question-header">Fragen-Übersicht</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

  <div class="question-container">

    <div>
      <p class="question-top-info">
        Frage Nr.{{ questions[questionIndex].id }}<br>
        Facette: {{ questions[questionIndex].facette }}
      </p>
      <p class="question-headbox">
        <!-- 
          For wild random Number 1 to 200:
          {{ questions[randomNumber()].text }}
         -->
        
        {{ questions[questionIndex].text }}
      </p>
    </div>

    <div class="answer-box">
      <ion-list radio-group>

        <ion-radio-group class="radio-grp-answer" name="answerValue" allowEmptySelection="false">
    
          <ion-item class="answer-color-5">
            <ion-label>starke Ablehnung</ion-label>
            <ion-radio slot="start" value="1"></ion-radio>
          </ion-item>
      
          <ion-item class="answer-color-4">
            <ion-label>Ablehnung</ion-label>
            <ion-radio slot="start" value="2"></ion-radio>
          </ion-item>
      
          <ion-item class="answer-color-3">
            <ion-label>neutral</ion-label>
            <ion-radio slot="start" value="3"></ion-radio>
          </ion-item>

          <ion-item class="answer-color-2">
            <ion-label>Zustimmung</ion-label>
            <ion-radio slot="start" value="4"></ion-radio>
          </ion-item>

          <ion-item class="answer-color-1">
            <ion-label>starke Zustimmung</ion-label>
            <ion-radio slot="start" value="5"></ion-radio>
          </ion-item>

        </ion-radio-group>
      </ion-list>
    </div>
    <ion-button class="submit-answer-btn" v-on:click="next">
      Weiter
    </ion-button>

  </div>

    </ion-content>
  </ion-page>
</template>


<script>
import {
  IonPage, IonContent, IonBackButton, IonHeader, IonButtons, IonTitle, IonToolbar, IonLabel, IonButton, IonRadio, IonRadioGroup, IonItem, IonList,
} from "@ionic/vue";

export default {
  components: { 
    IonPage, IonContent, IonBackButton, IonHeader, IonButtons, IonTitle, IonToolbar, IonLabel, IonButton, IonRadio, IonRadioGroup, IonItem, IonList
  },
  name: 'Questionlist',
  data({

    questionIndex = 0
  })
  {
    return {
      questionIndex,
      questions: [
          { id: 1, dimension: 'dim-h1', facette: 'Aufrichtigkeit', polung: 1, label: 'h1_1', text: 'Um meine Ziele zu erreichen, bin ich auch zu Personen nett, die mir eigentlich unsympathisch sind.' },
          { id: 2, dimension: 'dim-h1', facette: 'Aufrichtigkeit', polung: 1, label: 'h1_2', text: 'Ich finde es in Ordnung, anderen zu schmeicheln, um im Leben vorwärts zu kommen.' },
          { id: 3, dimension: 'dim-h1', facette: 'Aufrichtigkeit', polung: 1, label: 'h1_3', text: 'Ich beeinflusse manchmal die Gefühle anderer Personen, damit sie tun, was ich möchte.' },
          { id: 4, dimension: 'dim-h1', facette: 'Aufrichtigkeit', polung: 0, label: 'h1_4', text: 'Ich setze keine Schmeicheleien ein, auch wenn ich mir dadurch einen Vorteil verschaffen könnte.' },
          { id: 5, dimension: 'dim-h1', facette: 'Aufrichtigkeit', polung: 1, label: 'h1_5', text: 'Wenn ich von jemandem etwas will, lache ich auch noch über dessen schlechteste Witze.' },
          { id: 6, dimension: 'dim-h1', facette: 'Aufrichtigkeit', polung: 0, label: 'h1_6', text: 'Ich würde nicht vortäuschen, jemanden zu mögen, nur damit mir diese Person eine Gefälligkeit erweist.' },
          { id: 7, dimension: 'dim-h1', facette: 'Aufrichtigkeit', polung: 0, label: 'h1_7', text: 'Wenn ich von Leuten etwas will, frage ich sie direkt danach, anstatt dass ich versuche, sie zu manipulieren.' },
          { id: 8, dimension: 'dim-h1', facette: 'Aufrichtigkeit', polung: 0, label: 'h1_8', text: 'Ich verstelle mich nie, um meine Ziele zu erreichen.' },
        
          { id: 9, dimension: 'dim-h2', facette: 'Fairness', polung: 0, label: 'h2_1', text: 'Wenn ich zu viel Rückgeld bekomme, mache ich immer darauf aufmerksam.' },
          { id: 10, dimension: 'dim-h2', facette: 'Fairness', polung: 0, label: 'h2_2', text: 'Ich würde nie jemanden betrügen, unabhängig davon, wer die andere Person ist.' },
          { id: 11, dimension: 'dim-h2', facette: 'Fairness', polung: 1, label: 'h2_3', text: 'Manchmal halte ich mich nicht an die Spielregeln, wenn die anderen es nicht merken.' },
          { id: 12, dimension: 'dim-h2', facette: 'Fairness', polung: 1, label: 'h2_4', text: 'Wenn ich in Geldnot wäre, würde ich in Versuchung geraten, zu stehlen.' },
          { id: 13, dimension: 'dim-h2', facette: 'Fairness', polung: 0, label: 'h2_5', text: 'Ich würde meine Steuern auch dann zahlen, wenn ich mich unbemerkt davor drücken könnte.' },
          { id: 14, dimension: 'dim-h2', facette: 'Fairness', polung: 0, label: 'h2_6', text: 'Ich würde niemals Bestechungsgeld annehmen, auch wenn es sehr viel wäre.' },
          { id: 15, dimension: 'dim-h2', facette: 'Fairness', polung: 0, label: 'h2_7', text: 'Nie würde ich etwas am Zoll vorbeischmuggeln.' },
          { id: 16, dimension: 'dim-h2', facette: 'Fairness', polung: 0, label: 'h2_8', text: 'Wenn ich merke, dass ich für einen Kauf oder eine Dienstleistung keine Rechnung erhalten habe, frage ich nach.' },
        
          { id: 17, dimension: 'dim-h3', facette: 'Genügsamkeit', polung: 0, label: 'h3_1', text: 'Einen hohen sozialen Status zu haben ist nicht sehr wichtig für mich.' },
          { id: 18, dimension: 'dim-h3', facette: 'Genügsamkeit', polung: 0, label: 'h3_2', text: 'Viel Geld zu haben ist nicht besonders wichtig für mich.' },
          { id: 19, dimension: 'dim-h3', facette: 'Genügsamkeit', polung: 1, label: 'h3_3', text: 'Ich umgebe mich gerne mit Personen mit einem hohen sozialen Status.' },
          { id: 20, dimension: 'dim-h3', facette: 'Genügsamkeit', polung: 1, label: 'h3_4', text: 'Ich würde gerne in einer sehr teuren, angesehenen Nachbarschaft wohnen.' },
          { id: 21, dimension: 'dim-h3', facette: 'Genügsamkeit', polung: 0, label: 'h3_5', text: 'Mein Wohlbefinden ist in keiner Weise an den Besitz von materiellen Gütern gebunden.' },
          { id: 22, dimension: 'dim-h3', facette: 'Genügsamkeit', polung: 1, label: 'h3_6', text: 'Ich träume davon, meine Freizeit an exklusiven Orten zu verbringen, die sich nur wenige leisten können.' },
          { id: 23, dimension: 'dim-h3', facette: 'Genügsamkeit', polung: 1, label: 'h3_7', text: 'Hätte ich viel Geld, würde ich es für Luxusgüter ausgeben.' },
          { id: 24, dimension: 'dim-h3', facette: 'Genügsamkeit', polung: 1, label: 'h3_8', text: 'Beruflicher Erfolg bedeutet für mich dasselbe wie ein hohes Gehalt.' },
        
          { id: 25, dimension: 'dim-h4', facette: 'Bescheidenheit', polung: 1, label: 'h4_1', text: 'Ich verdiene mehr Einfluss und Macht als die meisten anderen Leute.' },
          { id: 26, dimension: 'dim-h4', facette: 'Bescheidenheit', polung: 0, label: 'h4_2', text: 'Ich bin nicht mehr wert als andere Menschen.' },
          { id: 27, dimension: 'dim-h4', facette: 'Bescheidenheit', polung: 0, label: 'h4_3', text: 'Es ist mir unangenehm, behandelt zu werden, als wäre ich etwas Besseres.' },
          { id: 28, dimension: 'dim-h4', facette: 'Bescheidenheit', polung: 1, label: 'h4_4', text: 'Ich fühle mich anderen in vielerlei Hinsicht überlegen.' }, 
          { id: 29, dimension: 'dim-h4', facette: 'Bescheidenheit', polung: 1, label: 'h4_5', text: 'Ich geniesse es, bevorzugt behandelt zu werden.' },
          { id: 30, dimension: 'dim-h4', facette: 'Bescheidenheit', polung: 1, label: 'h4_6', text: 'Ich denke, dass ich mehr Respekt verdiene als die meisten anderen Menschen.' },
          { id: 31, dimension: 'dim-h4', facette: 'Bescheidenheit', polung: 1, label: 'h4_7', text: 'Einige Leute würden sagen, dass ich ein überhöhtes Ego habe.' },
          { id: 32, dimension: 'dim-h4', facette: 'Bescheidenheit', polung: 1, label: 'h4_8', text: 'Es ist mir wichtig, als angesehene Person wahrgenommen zu werden.' },
        
          { id: 33, dimension: 'dim-e1', facette: 'Ängstlichkeit', polung: 0, label: 'e1_1', text: 'Ich hätte grosse Angst, müsste ich während eines starken Unwetters verreisen.' },
          { id: 34, dimension: 'dim-e1', facette: 'Ängstlichkeit', polung: 0, label: 'e1_2', text: 'Die Vorstellung, körperlichen Schmerz ertragen zu müssen, löst Angst in mir aus.' },
          { id: 35, dimension: 'dim-e1', facette: 'Ängstlichkeit', polung: 1, label: 'e1_3', text: 'Ich fürchte mich nicht davor, einige Beulen und Verletzungen davonzutragen.' },
          { id: 36, dimension: 'dim-e1', facette: 'Ängstlichkeit', polung: 1, label: 'e1_4', text: 'Ich schrecke nicht davor zurück, auch gefährliche Arbeiten auszuführen.' },
          { id: 37, dimension: 'dim-e1', facette: 'Ängstlichkeit', polung: 1, label: 'e1_5', text: 'Ich fürchte mich vor nichts.' },
          { id: 38, dimension: 'dim-e1', facette: 'Ängstlichkeit', polung: 0, label: 'e1_6', text: 'Ich meide Risikosportarten konsequent.' },
          { id: 39, dimension: 'dim-e1', facette: 'Ängstlichkeit', polung: 0, label: 'e1_7', text: 'Wenn es um körperliche Gefahren geht, bin ich sehr ängstlich.' },
          { id: 40, dimension: 'dim-e1', facette: 'Ängstlichkeit', polung: 1, label: 'e1_8', text: 'Selbst in einer Notsituation spüre ich keine Angst.' },
          
          { id: 41, dimension: 'dim-e2', facette: 'Besorgtheit', polung: 0, label: 'e2_1', text: 'Ich mache mir oft unnötig auch über ganz kleine Dinge Sorgen.' },
          { id: 42, dimension: 'dim-e2', facette: 'Besorgtheit', polung: 0, label: 'e2_2', text: 'Ich liege oft wach im Bett und mache mir um irgendetwas Sorgen.' },
          { id: 43, dimension: 'dim-e2', facette: 'Besorgtheit', polung: 0, label: 'e2_3', text: 'Hätte ich Kinder, würde ich mir vermutlich ständig Sorgen um sie machen.' },
          { id: 44, dimension: 'dim-e2', facette: 'Besorgtheit', polung: 1, label: 'e2_4', text: 'Ich mache mir viel weniger Sorgen als die meisten Leute.' },
          { id: 45, dimension: 'dim-e2', facette: 'Besorgtheit', polung: 0, label: 'e2_5', text: 'Ich werde in vielen verschiedenen Situationen rasch nervös.' },
          { id: 46, dimension: 'dim-e2', facette: 'Besorgtheit', polung: 1, label: 'e2_6', text: 'Es kommt äusserst selten vor, dass ich nicht schlafen kann, weil mich etwas beschäftigt.' },
          { id: 47, dimension: 'dim-e2', facette: 'Besorgtheit', polung: 1, label: 'e2_7', text: 'Ich bleibe in Situationen gelassen, die bei anderen grosse Anspannung auslösen.' },
          { id: 48, dimension: 'dim-e2', facette: 'Besorgtheit', polung: 0, label: 'e2_8', text: 'Ich warte jeweils unruhig auf Entscheidungen, selbst wenn es etwas Unwichtiges ist.' },
          
          { id: 49, dimension: 'dim-e3', facette: 'Abhängigkeit', polung: 0, label: 'e3_1', text: 'Wenn mich etwas bedrückt, bin ich auf Personen angewiesen, die mich wieder aufheitern.' },
          { id: 50, dimension: 'dim-e3', facette: 'Abhängigkeit', polung: 0, label: 'e3_2', text: 'Ohne die emotionale Unterstützung anderer Leute fühle ich mich manchmal hilflos.' },
          { id: 51, dimension: 'dim-e3', facette: 'Abhängigkeit', polung: 0, label: 'e3_3', text: 'Wenn ich wegen einer schmerzvollen Erfahrung leide, brauche ich jemanden, der mich tröstet.' },
          { id: 52, dimension: 'dim-e3', facette: 'Abhängigkeit', polung: 1, label: 'e3_4', text: 'Ohne die emotionale Unterstützung anderer Leute fühle ich mich manchmal hilflos.' },
          { id: 53, dimension: 'dim-e3', facette: 'Abhängigkeit', polung: 0, label: 'e3_5', text: 'Wenn ich ein Problem habe, verlasse ich mich auf die Ratschläge anderer.' },
          { id: 54, dimension: 'dim-e3', facette: 'Abhängigkeit', polung: 1, label: 'e3_6', text: 'Schwierige Situationen kann ich ohne die emotionale Unterstützung anderer bewältigen.' },
          { id: 55, dimension: 'dim-e3', facette: 'Abhängigkeit', polung: 0, label: 'e3_7', text: 'Ich teile alle meine Sorgen und Ängste mit anderen Personen.' },
          { id: 56, dimension: 'dim-e3', facette: 'Abhängigkeit', polung: 1, label: 'e3_8', text: 'Krisensituationen meistere ich selbständig.' },
        
          { id: 57, dimension: 'dim-e4', facette: 'Verbundenheit', polung: 0, label: 'e4_1', text: 'Ich könnte weinen, wenn ich andere Personen sehe, die weinen.' },
          { id: 58, dimension: 'dim-e4', facette: 'Verbundenheit', polung: 0, label: 'e4_2', text: 'Wenn jemand unglücklich ist, kann ich den Schmerz dieser Person fast selber spüren.' },
          { id: 59, dimension: 'dim-e4', facette: 'Verbundenheit', polung: 0, label: 'e4_3', text: 'Ich fühle starke Emotionen, wenn jemand, der mir nahesteht, für eine längere Zeit weggeht.' },
          { id: 60, dimension: 'dim-e4', facette: 'Verbundenheit', polung: 0, label: 'e4_4', text: 'Ich bin ein ausgesprochen mitfühlender Mensch.' },
          { id: 61, dimension: 'dim-e4', facette: 'Verbundenheit', polung: 0, label: 'e4_5', text: 'Wenn jemand, der mir nahesteht, um etwas besorgt ist, bin ich auch besorgt.' },
          { id: 62, dimension: 'dim-e4', facette: 'Verbundenheit', polung: 1, label: 'e4_6', text: 'Ich bin nicht sehr sensibel in Bezug auf die Gefühle anderer.' },
          { id: 63, dimension: 'dim-e4', facette: 'Verbundenheit', polung: 1, label: 'e4_7', text: 'Situationen, in welchen andere Leute sentimental werden, berühren mich wenig.' },
          { id: 64, dimension: 'dim-e4', facette: 'Verbundenheit', polung: 0, label: 'e4_8', text: 'Ich werde ziemlich sentimental, wenn ich über Personen und Orte aus früheren Zeiten nachdenke.' },
        
          { id: 65, dimension: 'dim-x1', facette: 'Selbstvertrauen', polung: 0, label: 'x1_1', text: 'Im Allgemeinen bin ich mit mir ziemlich zufrieden.' },
          { id: 66, dimension: 'dim-x1', facette: 'Selbstvertrauen', polung: 0, label: 'x1_2', text: 'Ich bin der Meinung, dass ich einige sympathische Eigenschaften besitze.' },
          { id: 67, dimension: 'dim-x1', facette: 'Selbstvertrauen', polung: 0, label: 'x1_3', text: 'Ich glaube, dass die meisten Menschen einige Aspekte meines Charakters mögen.' },
          { id: 68, dimension: 'dim-x1', facette: 'Selbstvertrauen', polung: 0, label: 'x1_4', text: 'Ich glaube, viele Menschen unterhalten sich gerne mit mir.' },
          { id: 69, dimension: 'dim-x1', facette: 'Selbstvertrauen', polung: 1, label: 'x1_5', text: 'Ich bin der Meinung, dass ich nicht beliebt bin.' },
          { id: 70, dimension: 'dim-x1', facette: 'Selbstvertrauen', polung: 1, label: 'x1_6', text: 'Oft zweifle ich, dass mich andere Menschen mögen.' },
          { id: 71, dimension: 'dim-x1', facette: 'Selbstvertrauen', polung: 1, label: 'x1_7', text: 'Manchmal denke ich, dass ich ziemlich nutzlos bin.' },
          { id: 72, dimension: 'dim-x1', facette: 'Selbstvertrauen', polung: 1, label: 'x1_8', text: 'Manchmal habe ich den Eindruck, dass ich weniger wert bin als andere.' },
        
          { id: 73, dimension: 'dim-x2', facette: 'Kühnheit', polung: 0, label: 'x2_1', text: 'Ich fühle mich wohl dabei, mich fremden Personen vorzustellen.' },
          { id: 74, dimension: 'dim-x2', facette: 'Kühnheit', polung: 1, label: 'x2_2', text: 'Bei Gruppentreffen sage ich nur selten meine Meinung.' },
          { id: 75, dimension: 'dim-x2', facette: 'Kühnheit', polung: 0, label: 'x2_3', text: 'In sozialen Situationen bin ich gewöhnlich die Person, welche den ersten Schritt macht.' },
          { id: 76, dimension: 'dim-x2', facette: 'Kühnheit', polung: 0, label: 'x2_4', text: 'In Gruppen bin oft ich die Person, welche im Namen der Gruppe spricht.' },
          { id: 77, dimension: 'dim-x2', facette: 'Kühnheit', polung: 1, label: 'x2_5', text: 'In einer grossen Diskussionsrunde äussere ich meine Meinung nur, wenn ich direkt danach gefragt werde.' },
          { id: 78, dimension: 'dim-x2', facette: 'Kühnheit', polung: 0, label: 'x2_6', text: 'Ich kann mit peinlichen sozialen Situationen besser umgehen als die meisten anderen Leute.' },
          { id: 79, dimension: 'dim-x2', facette: 'Kühnheit', polung: 0, label: 'x2_7', text: 'Ich fühle mich sicher, wenn ich eine Gruppe von Leuten anführe.' },
          { id: 80, dimension: 'dim-x2', facette: 'Kühnheit', polung: 1, label: 'x2_8', text: 'Ich fühle mich unwohl, wenn ich vor einer Gruppe von Leuten spreche.' },
        
          { id: 81, dimension: 'dim-x3', facette: 'Geselligkeit', polung: 0, label: 'x3_1', text: 'Ich geniesse es, mich mit anderen zu unterhalten, auch wenn es nichts Wichtiges zu erörtern gibt.' },
          { id: 82, dimension: 'dim-x3', facette: 'Geselligkeit', polung: 1, label: 'x3_2', text: 'Ich vermeide es, mit anderen Leuten Small Talk zu führen.' },
          { id: 83, dimension: 'dim-x3', facette: 'Geselligkeit', polung: 0, label: 'x3_3', text: 'Ich geniesse es, viele Leute um mich herum zu haben, mit denen ich reden kann.' },
          { id: 84, dimension: 'dim-x3', facette: 'Geselligkeit', polung: 1, label: 'x3_4', text: 'Wenn ich reise, ziehe ich es vor, alleine zu sitzen, anstatt neben anderen.' },
          { id: 85, dimension: 'dim-x3', facette: 'Geselligkeit', polung: 0, label: 'x3_5', text: 'Ich ziehe es vor, im Beruf im Kontakt mit Menschen zu sein, als alleine zu arbeiten.' },
          { id: 86, dimension: 'dim-x3', facette: 'Geselligkeit', polung: 0, label: 'x3_6', text: 'Das Erste, was ich an einem neuen Ort tue, ist Freundschaften zu schliessen.' },
          { id: 87, dimension: 'dim-x3', facette: 'Geselligkeit', polung: 1, label: 'x3_7', text: 'Ich mag es nicht besonders, auf Partys zu gehen.' },
          { id: 88, dimension: 'dim-x3', facette: 'Geselligkeit', polung: 0, label: 'x3_8', text: 'Ich liebe es zu flirten.' },
          
          { id: 89, dimension: 'dim-x4', facette: 'Lebhaftigkeit', polung: 1, label: 'x4_1', text: 'Ich neige dazu, weniger Energie zu haben als die meisten anderen Leute.' },
          { id: 90, dimension: 'dim-x4', facette: 'Lebhaftigkeit', polung: 0, label: 'x4_2', text: 'Ich bin fast immer voller Energie.' },
          { id: 91, dimension: 'dim-x4', facette: 'Lebhaftigkeit', polung: 0, label: 'x4_3', text: 'An den meisten Tagen bin ich fröhlich und optimistisch.' },
          { id: 92, dimension: 'dim-x4', facette: 'Lebhaftigkeit', polung: 1, label: 'x4_4', text: 'Andere sagen mir oft, dass ich versuchen sollte, etwas fröhlicher zu sein.' },
          { id: 93, dimension: 'dim-x4', facette: 'Lebhaftigkeit', polung: 0, label: 'x4_5', text: 'Andere beschreiben mich als lebendige und lebhafte Person.' },
          { id: 94, dimension: 'dim-x4', facette: 'Lebhaftigkeit', polung: 0, label: 'x4_6', text: 'Ich neige mehr als andere dazu, die positive Seite einer Situation zu sehen.' },
          { id: 95, dimension: 'dim-x4', facette: 'Lebhaftigkeit', polung: 1, label: 'x4_7', text: 'Die meisten Leute sind optimistischer und dynamischer als ich es im Allgemeinen bin.' },
          { id: 96, dimension: 'dim-x4', facette: 'Lebhaftigkeit', polung: 1, label: 'x4_8', text: 'Ich spüre selten viel Enthusiasmus für etwas.' },
        
          { id: 97, dimension: 'dim-a1', facette: 'Vergebungsbereitschaft', polung: 0, label: 'a1_1', text: 'Ich bin nicht nachtragend, auch wenn mich jemand sehr ungerecht behandelt hat.' },
          { id: 98, dimension: 'dim-a1', facette: 'Vergebungsbereitschaft', polung: 1, label: 'a1_2', text: 'Ich bleibe lange misstrauisch, wenn eine Person, die meist unfreundlich war, auf einmal nett zu mir ist.' },
          { id: 99, dimension: 'dim-a1', facette: 'Vergebungsbereitschaft', polung: 0, label: 'a1_3', text: 'Meine Einstellung gegenüber Personen, die mich schlecht behandelt haben, ist „vergeben und vergessen“.' },
          { id: 100, dimension: 'dim-a1', facette: 'Vergebungsbereitschaft', polung: 0, label: 'a1_4', text: 'Ich kann Dinge vergeben, die die meisten Leute für eine längere Zeit verbittern würden.' },
          { id: 101, dimension: 'dim-a1', facette: 'Vergebungsbereitschaft', polung: 0, label: 'a1_5', text: 'Ich kann noch immer mit jemandem befreundet sein, der mich in der Vergangenheit schlecht behandelt hat.' },
          { id: 102, dimension: 'dim-a1', facette: 'Vergebungsbereitschaft', polung: 0, label: 'a1_6', text: 'Ich kann mit jemandem gut auskommen, auch wenn er mein Vertrauen missbraucht hat.' },
          { id: 103, dimension: 'dim-a1', facette: 'Vergebungsbereitschaft', polung: 1, label: 'a1_7', text: 'Wenn mich jemand einmal hintergangen hat, bleibe ich dieser Person gegenüber immer misstrauisch.' },
          { id: 104, dimension: 'dim-a1', facette: 'Vergebungsbereitschaft', polung: 1, label: 'a1_8', text: 'Es fällt mir schwer, jemandem vollkommen zu vergeben, der mit etwas Gemeines getan hat.' },
        
          { id: 105, dimension: 'dim-a2', facette: 'Nachsichtigkeit', polung: 0, label: 'a2_1', text: 'Ich mache äusserst selten eine kritische Bemerkung über andere.' },
          { id: 106, dimension: 'dim-a2', facette: 'Nachsichtigkeit', polung: 0, label: 'a2_2', text: 'Ich bin eine sanftmütige und nachsichtige Person.' },
          { id: 107, dimension: 'dim-a2', facette: 'Nachsichtigkeit', polung: 0, label: 'a2_3', text: 'Andere sagen manchmal, dass ich eine Person bin, die „keiner Fliege etwas zuleide tun kann“.' },
          { id: 108, dimension: 'dim-a2', facette: 'Nachsichtigkeit', polung: 1, label: 'a2_4', text: 'Andere sagen mir manchmal, dass ich zu kritisch gegenüber anderen bin.' },
          { id: 109, dimension: 'dim-a2', facette: 'Nachsichtigkeit', polung: 0, label: 'a2_5', text: 'Ich akzeptiere im Allgemeinen die Schwächen anderer, ohne mich darüber zu beschweren.' },
          { id: 110, dimension: 'dim-a2', facette: 'Nachsichtigkeit', polung: 0, label: 'a2_6', text: 'Ich neige dazu nachsichtig zu sein, wenn ich andere beurteile.' },
          { id: 111, dimension: 'dim-a2', facette: 'Nachsichtigkeit', polung: 0, label: 'a2_7', text: 'Selbst wenn Leute viele Fehler machen, sage ich nur selten etwas Negatives.' },
          { id: 112, dimension: 'dim-a2', facette: 'Nachsichtigkeit', polung: 1, label: 'a2_8', text: 'Wenn Leute Dummheiten begehen, neige ich dazu, sie kritisch zu beurteilen.' },
        
          { id: 113, dimension: 'dim-a3', facette: 'Kompromissbereitschaft', polung: 1, label: 'a3_1', text: 'Andere sagen mir manchmal, dass ich zu dickköpfig bin.' },
          { id: 114, dimension: 'dim-a3', facette: 'Kompromissbereitschaft', polung: 0, label: 'a3_2', text: 'Ich kooperiere oft mit anderen Leuten, selbst wenn ich mit ihnen nicht übereinstimme.' },
          { id: 115, dimension: 'dim-a3', facette: 'Kompromissbereitschaft', polung: 1, label: 'a3_3', text: 'Manche Leute beschweren sich darüber, dass alles nach meinem Willen sein soll.' },
          { id: 116, dimension: 'dim-a3', facette: 'Kompromissbereitschaft', polung: 1, label: 'a3_4', text: 'Wenn ich weiss, was ich will, gehe ich keine Kompromisse ein.' },
          { id: 117, dimension: 'dim-a3', facette: 'Kompromissbereitschaft', polung: 0, label: 'a3_5', text: 'Ich passe meine Ansichten gewöhnlich flexibel an, wenn ich keine Zustimmung finde.' },
          { id: 118, dimension: 'dim-a3', facette: 'Kompromissbereitschaft', polung: 1, label: 'a3_6', text: 'Ich neige dazu, in die Defensive zu gehen, wenn andere versuchen, meine Meinung zu ändern.' },
          { id: 119, dimension: 'dim-a3', facette: 'Kompromissbereitschaft', polung: 1, label: 'a3_7', text: 'Wenn andere mir sagen, dass ich falsch liege, reagiere ich mit Widerstand.' },
          { id: 120, dimension: 'dim-a3', facette: 'Kompromissbereitschaft', polung: 1, label: 'a3_8', text: 'Es fällt mir schwer, einen Kompromiss einzugehen, wenn ich überzeugt bin, dass ich recht habe.' },
        
          { id: 121, dimension: 'dim-a4', facette: 'Sanftmut', polung: 1, label: 'a4_1', text: 'Es braucht nicht viel, um mich zu verärgern.' },
          { id: 122, dimension: 'dim-a4', facette: 'Sanftmut', polung: 1, label: 'a4_2', text: 'Andere halten mich für aufbrausend.' },
          { id: 123, dimension: 'dim-a4', facette: 'Sanftmut', polung: 0, label: 'a4_3', text: 'Ich werde selten wütend, selbst wenn ich ziemlich schlecht behandelt werde.' },
          { id: 124, dimension: 'dim-a4', facette: 'Sanftmut', polung: 0, label: 'a4_4', text: 'Die meisten Leute werden schneller ärgerlich als ich.' },
          { id: 125, dimension: 'dim-a4', facette: 'Sanftmut', polung: 0, label: 'a4_5', text: 'Einige Leute sagen, dass sie mich noch nie verärgert gesehen haben.' },
          { id: 126, dimension: 'dim-a4', facette: 'Sanftmut', polung: 1, label: 'a4_6', text: 'Es fällt mir schwer, mich zu beherrschen, wenn mich jemand beleidigt.' },
          { id: 127, dimension: 'dim-a4', facette: 'Sanftmut', polung: 1, label: 'a4_7', text: 'Ich reagiere sehr wütend, wenn ich merke, dass mich jemand täuschen will.' },
          { id: 128, dimension: 'dim-a4', facette: 'Sanftmut', polung: 0, label: 'a4_8', text: 'Andere können mich ansprechen, ohne sich zu sorgen, in welcher Stimmung ich gerade bin.' },
          
          { id: 129, dimension: 'dim-c1', facette: 'Organisiertheit', polung: 0, label: 'c1_1', text: 'Ich mag es, meine Sachen an ihrem richtigen Platz aufzubewahren.' },
          { id: 130, dimension: 'dim-c1', facette: 'Organisiertheit', polung: 0, label: 'c1_2', text: 'Ich putze mein Büro oder Zuhause ziemlich oft.' },
          { id: 131, dimension: 'dim-c1', facette: 'Organisiertheit', polung: 0, label: 'c1_3', text: 'Ich plane und organisiere im Voraus, damit in letzter Minute keine Hektik aufkommt.' },
          { id: 132, dimension: 'dim-c1', facette: 'Organisiertheit', polung: 1, label: 'c1_4', text: 'Bei mir wird es oft sehr unordentlich, bevor ich wieder aufräume.' },
          { id: 133, dimension: 'dim-c1', facette: 'Organisiertheit', polung: 0, label: 'c1_5', text: 'Wenn ich irgendeinen Gegenstand benutzt habe, lege ich ihn sofort wieder an die richtige Stelle zurück.' },
          { id: 134, dimension: 'dim-c1', facette: 'Organisiertheit', polung: 1, label: 'c1_6', text: 'Ich bin bekannt für meine Unordentlichkeit.' },
          { id: 135, dimension: 'dim-c1', facette: 'Organisiertheit', polung: 1, label: 'c1_7', text: 'Ich bin nicht gut darin, meine Schränke, Schubladen oder Ordner zu organisieren.' },
          { id: 136, dimension: 'dim-c1', facette: 'Organisiertheit', polung: 1, label: 'c1_8', text: 'Wenn ich arbeite, habe ich manchmal Schwierigkeiten, weil ich desorganisiert bin.' },
          
          { id: 137, dimension: 'dim-c2', facette: 'Fleiss', polung: 0, label: 'c2_1', text: 'Wenn ich arbeite, setze ich mir oft ehrgeizige Ziele.' },
          { id: 138, dimension: 'dim-c2', facette: 'Fleiss', polung: 0, label: 'c2_2', text: 'Ich treibe mich oft selbst sehr stark an, wenn ich versuche, ein Ziel zu erreichen.' },
          { id: 139, dimension: 'dim-c2', facette: 'Fleiss', polung: 0, label: 'c2_3', text: 'Ich vollbringe Leistungen oft, indem ich mich mehr anstrenge als andere.' },
          { id: 140, dimension: 'dim-c2', facette: 'Fleiss', polung: 0, label: 'c2_4', text: 'Andere nennen mich manchmal arbeitssüchtig oder einen „Workaholic“.' },
          { id: 141, dimension: 'dim-c2', facette: 'Fleiss', polung: 1, label: 'c2_5', text: 'Wenn ich mir ein Ziel setze, gebe ich oft auf, bevor ich es erreicht habe.' },
          { id: 142, dimension: 'dim-c2', facette: 'Fleiss', polung: 1, label: 'c2_6', text: 'Ich leiste bei der Arbeit nur gerade das geforderte Minimum.' },
          { id: 143, dimension: 'dim-c2', facette: 'Fleiss', polung: 1, label: 'c2_7', text: 'Ich neige dazu aufzugeben, wenn eine Aufgabe sehr schwierig zu sein scheint.' },
          { id: 144, dimension: 'dim-c2', facette: 'Fleiss', polung: 1, label: 'c2_8', text: 'Ich schiebe immer wieder auf, bevor ich ernsthaft mit einer anstehenden Arbeit beginne.' },
          
          { id: 145, dimension: 'dim-c3', facette: 'Perfektionismus', polung: 0, label: 'c3_1', text: 'Oft kontrolliere ich meine Arbeit mehrfach, um alle Fehler zu finden.' },
          { id: 146, dimension: 'dim-c3', facette: 'Perfektionismus', polung: 1, label: 'c3_2', text: 'Wenn ich an irgendetwas arbeite, beachte ich kleine Details nicht allzu sehr.' },
          { id: 147, dimension: 'dim-c3', facette: 'Perfektionismus', polung: 0, label: 'c3_3', text: 'Ich versuche immer fehlerfrei zu arbeiten, auch wenn es Zeit kostet.' },
          { id: 148, dimension: 'dim-c3', facette: 'Perfektionismus', polung: 0, label: 'c3_4', text: 'Andere beschreiben mich oft als perfektionistisch.' },
          { id: 149, dimension: 'dim-c3', facette: 'Perfektionismus', polung: 1, label: 'c3_5', text: 'Ich finde es Zeitverschwendung, eine Arbeit zu perfektionieren, die bereits gut genug ist.' },
          { id: 150, dimension: 'dim-c3', facette: 'Perfektionismus', polung: 1, label: 'c3_6', text: 'Es stört mich nicht, wenn es in meinen Texten ein paar Fehler in der Rechtschreibung oder der Zeichensetzung hat.' },
          { id: 151, dimension: 'dim-c3', facette: 'Perfektionismus', polung: 0, label: 'c3_7', text: 'Wenn ich Zahlen berechne, prüfe ich alles sorgfältig, damit ganz sicher keine Fehler vorkommen.' },
          { id: 152, dimension: 'dim-c3', facette: 'Perfektionismus', polung: 0, label: 'c3_8', text: 'Selbst wenn ich einen persönlichen Brief schreibe, prüfe ich gründlich, dass er keine Schreibfehler enthält.' },
          
          { id: 153, dimension: 'dim-c4', facette: 'Besonnenheit', polung: 0, label: 'c4_1', text: 'Andere sagen, dass ich meine Impulse gut kontrollieren kann.' },
          { id: 154, dimension: 'dim-c4', facette: 'Besonnenheit', polung: 1, label: 'c4_2', text: 'Ich treffe Entscheidungen eher aus dem Bauch heraus als durch sogfältiges Nachdenken.' },
          { id: 155, dimension: 'dim-c4', facette: 'Besonnenheit', polung: 1, label: 'c4_3', text: 'Ich mache viele Fehler, weil ich nicht nachdenke, bevor ich handele.' },
          { id: 156, dimension: 'dim-c4', facette: 'Besonnenheit', polung: 0, label: 'c4_4', text: 'Ich lasse nicht zu, dass meine Impulse mein Verhalten steuern.' },
          { id: 157, dimension: 'dim-c4', facette: 'Besonnenheit', polung: 0, label: 'c4_5', text: 'Ich denke sorgfältig nach, bevor ich etwas tue, das gefährlich oder ungesund sein könnte.' },
          { id: 158, dimension: 'dim-c4', facette: 'Besonnenheit', polung: 0, label: 'c4_6', text: 'Ich halte mich gewöhnlich zurück, bevor ich etwas tue, was ich später bereuen könnte.' },
          { id: 159, dimension: 'dim-c4', facette: 'Besonnenheit', polung: 1, label: 'c4_7', text: 'Manchmal tue ich aus einem Impuls heraus Dinge, die sich später als unklug herausstellen.' },
          { id: 160, dimension: 'dim-c4', facette: 'Besonnenheit', polung: 1, label: 'c4_8', text: 'Ich tue lieber, was mir gerade in den Sinn kommt, als einem Plan zu folgen.' },
          
          { id: 161, dimension: 'dim-f1', facette: 'Wertschätzung', polung: 1, label: 'f1_1', text: 'Der Besuch einer Kunstausstellung würde mich ziemlich langweilen.' },
          { id: 162, dimension: 'dim-f1', facette: 'Wertschätzung', polung: 0, label: 'f1_2', text: 'Ich begegne der Schönheit der Natur mit mehr Bewunderung als andere Leute.' },
          { id: 163, dimension: 'dim-f1', facette: 'Wertschätzung', polung: 1, label: 'f1_3', text: 'Es käme mir nicht in den Sinn, einen Gedichtband zu lesen.' },
          { id: 164, dimension: 'dim-f1', facette: 'Wertschätzung', polung: 0, label: 'f1_4', text: 'Wenn ich die Gelegenheit dazu hätte, würde ich gerne ein Konzert mit klassischer Musik besuchen.' },
          { id: 165, dimension: 'dim-f1', facette: 'Wertschätzung', polung: 1, label: 'f1_5', text: 'Ich geniesse es nicht sonderlich, Skulpturen anzusehen.' },
          { id: 166, dimension: 'dim-f1', facette: 'Wertschätzung', polung: 1, label: 'f1_6', text: 'Ins Theater zu gehen, ist nicht etwas, das mir Freude bereitet.' },
          { id: 167, dimension: 'dim-f1', facette: 'Wertschätzung', polung: 0, label: 'f1_7', text: 'Manchmal geniesse ich, einfach zuzuschauen, wie der Wind durch die Bäume streicht.' },
          { id: 168, dimension: 'dim-f1', facette: 'Wertschätzung', polung: 0, label: 'f1_8', text: 'Ich kann lange Zeit ein Gemälde studieren, das mir gefällt.' },
          
          { id: 169, dimension: 'dim-f2', facette: 'Wissbegierde', polung: 0, label: 'f2_1', text: 'Ich bin daran interessiert, etwas über die Geschichte und Politik anderer Länder zu lernen.' },
          { id: 170, dimension: 'dim-f2', facette: 'Wissbegierde', polung: 1, label: 'f2_2', text: 'Ich finde Dokumentarfilme über die Natur sehr langweilig.' },
          { id: 171, dimension: 'dim-f2', facette: 'Wissbegierde', polung: 0, label: 'f2_3', text: 'Ich betrachte gerne Landkarten von anderen Orten.' },
          { id: 172, dimension: 'dim-f2', facette: 'Wissbegierde', polung: 0, label: 'f2_4', text: 'Ich weiss viel über andere Länder und Kulturen.' },
          { id: 173, dimension: 'dim-f2', facette: 'Wissbegierde', polung: 0, label: 'f2_5', text: 'Ich würde gerne die Ruinen früherer Zivilisationen besuchen.' },
          { id: 174, dimension: 'dim-f2', facette: 'Wissbegierde', polung: 1, label: 'f2_6', text: 'Es würde mich langweilen, ein Buch über die Geschichte der Wissenschaft und Technologie zu lesen.' },
          { id: 175, dimension: 'dim-f2', facette: 'Wissbegierde', polung: 0, label: 'f2_7', text: 'Ich mag es, über wissenschaftliche Entdeckungen auf dem Laufenden zu bleiben.' },
          { id: 176, dimension: 'dim-f2', facette: 'Wissbegierde', polung: 1, label: 'f2_8', text: 'Ich bin nicht interessiert, mehr als notwendig über die Natur und die Menschen zu erfahren.' },
          
          { id: 177, dimension: 'dim-f3', facette: 'Kreativität', polung: 1, label: 'f3_1', text: 'Ich ziehe es vor, Dinge so zu tun, wie ich es schon immer getan habe, anstatt Zeit für das Suchen neuer Wege zu verschwenden.' },
          { id: 178, dimension: 'dim-f3', facette: 'Kreativität', polung: 1, label: 'f3_2', text: 'Ich wünsche mir einen Beruf, der von mir mehr Routine als Kreativität verlangt.' },
          { id: 179, dimension: 'dim-f3', facette: 'Kreativität', polung: 0, label: 'f3_3', text: 'Ich glaube, ich könnte einige gute Ideen für Werbespots im Fernsehen entwickeln.' },
          { id: 180, dimension: 'dim-f3', facette: 'Kreativität', polung: 0, label: 'f3_4', text: 'Ich hätte gerne einen Beruf, der von mir immer wieder künstlerische oder kreative Ideen erfordert.' },
          { id: 181, dimension: 'dim-f3', facette: 'Kreativität', polung: 0, label: 'f3_5', text: 'Ich habe schon oft Probleme dank neuartigen Ideen gelöst, welche anderen nie in den Sinn gekommen wären.' },
          { id: 182, dimension: 'dim-f3', facette: 'Kreativität', polung: 0, label: 'f3_6', text: 'Ich hätte grosse Freude daran, einen Roman, ein Musikstück oder ein Kunstwerk zu schaffen.' },
          { id: 183, dimension: 'dim-f3', facette: 'Kreativität', polung: 0, label: 'f3_7', text: 'Man hat mir schon oft gesagt, dass ich eine reiche Vorstellungskraft habe.' },
          { id: 184, dimension: 'dim-f3', facette: 'Kreativität', polung: 1, label: 'f3_8', text: 'Ich halte mich nicht für einen künstlerischen oder kreativen Menschen.' },
        
          { id: 185, dimension: 'dim-f4', facette: 'Unkonventionalität', polung: 0, label: 'f4_1', text: 'Ich mag es, Meinungen zu hören, die deutlich anders sind als die Meinungen der Mehrheit.' },
          { id: 186, dimension: 'dim-f4', facette: 'Unkonventionalität', polung: 1, label: 'f4_2', text: 'Ich denke, es ist Zeitverschwendung, sehr unkonventionellen Ideen Aufmerksamkeit zu schenken.' },
          { id: 187, dimension: 'dim-f4', facette: 'Unkonventionalität', polung: 0, label: 'f4_3', text: 'Andere beschreiben mich manchmal als unkonventionell.' },
          { id: 188, dimension: 'dim-f4', facette: 'Unkonventionalität', polung: 1, label: 'f4_4', text: 'Ich vermeide es, mit Leuten Zeit zu verbringen, die mit ungewöhnlichen Ideen auffallen.' },
          { id: 189, dimension: 'dim-f4', facette: 'Unkonventionalität', polung: 0, label: 'f4_5', text: 'Ich bevorzuge Leute, die unkonventionelle Ideen haben.' },
          { id: 190, dimension: 'dim-f4', facette: 'Unkonventionalität', polung: 0, label: 'f4_6', text: 'Ich finde, meine Einstellungen sind ziemlich unkonventionell.' },
          { id: 191, dimension: 'dim-f4', facette: 'Unkonventionalität', polung: 0, label: 'f4_7', text: 'Andere würden einige meiner Überzeugungen als ziemlich aussergewöhnlich bezeichnen.' },
          { id: 192, dimension: 'dim-f4', facette: 'Unkonventionalität', polung: 1, label: 'f4_8', text: 'Ich finde es langweilig, über Philosophie zu diskutieren.' },
        
          { id: 193, dimension: 'dim-z1', facette: 'Altruismus', polung: 0, label: 'z1_1', text: 'Ich bin ein weichherziger Mensch.' },
          { id: 194, dimension: 'dim-z1', facette: 'Altruismus', polung: 0, label: 'z1_2', text: 'Ich würde mich schrecklich fühlen, wenn ich jemanden verletzen müsste.' },
          { id: 195, dimension: 'dim-z1', facette: 'Altruismus', polung: 0, label: 'z1_3', text: 'Ich habe Mitgefühl mit Menschen, die weniger Glück haben als ich.' },
          { id: 196, dimension: 'dim-z1', facette: 'Altruismus', polung: 0, label: 'z1_4', text: 'Im Rahmen meiner Möglichkeiten unterstütze ich Notleidende grosszügig.' },
          { id: 197, dimension: 'dim-z1', facette: 'Altruismus', polung: 0, label: 'z1_5', text: 'Ich nehme Anteil am Schicksal aller Menschen.' },
          { id: 198, dimension: 'dim-z1', facette: 'Altruismus', polung: 1, label: 'z1_6', text: 'Ich finde es richtig, dass es in einer Gesellschaft Sieger und Verlierer gibt.' },
          { id: 199, dimension: 'dim-z1', facette: 'Altruismus', polung: 1, label: 'z1_7', text: 'Ich bin nur mitfühlend im Umgang mit Menschen, die für mich bedeutsam sind.' },
          { id: 200, dimension: 'dim-z1', facette: 'Altruismus', polung: 1, label: 'z1_8', text: 'Die Schwierigkeiten der Schwächeren der Gesellschaft berühren mich wenig.' }
      ]
    };
  },
  computed: {
    currentQuestion() {
      if (this.questions !== []) {
        return this.questions[this.index];
      }
      return null;
    }
  },
  methods : {
    randomNumber : function(){
      return Math.floor(Math.random() * (200 - 1 + 1)) + 1;
    },
    next: function() {
      this.questionIndex++;
    },
  }
} 


</script>