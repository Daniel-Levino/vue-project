<template>
  <q-page class="flex column">
    <q-banner inline-actions class="text-white bg-red text-center">
      User is offline.
    </q-banner>
    <div
      class="q-pa-md column col justify-end"
      v-for="message in messages"
      :key="message.text"
    >
      <q-chat-message
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false "
      />
    </div>
    <q-footer elevated>
      <q-toolbar class="q-pa-sm">
        <q-form 
          class="full-width"
        >
          <q-input
              v-model="newMessage"
              bg-color="white"
              rounded
              outlined
              full-width
              dense
            >
            <template v-slot:after>
              <q-btn
                dense
                flat
                rounded
                color="white"
                icon="send"
                @click="sendMessage"
              />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default{
  name: 'PageChat',
  data() {
    return {
      newMessage: '',
      messages: [
        {
          text: 'Oi Amor, como está aí?',
          from: 'me'
        },
        {
          text: 'Tá tudo bem aqui. e vc, como tá?',
          from: 'Ju'
        },
        {
          text: 'Eu tô bem tbm, só com saudade.',
          from: 'me'
        },
        {
          text: 'own, sdd tbm bb',
          from: 'Ju'
        }
        ]
    }
  },
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: 'me'
      });
      this.newMessage = '';
    }
  }
}
</script>
