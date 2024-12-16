<template>
    <v-container class="fill-height" fluid>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card>
            <v-card-title class="text-h5">Contact Us</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="isValid" lazy-validation>
                <v-text-field
                  label="Full Name"
                  v-model="formData.name"
                  :rules="[rules.required]"
                  outlined
                  required
                ></v-text-field>
  
                <v-text-field
                  label="Email"
                  v-model="formData.email"
                  :rules="[rules.required, rules.email]"
                  outlined
                  required
                ></v-text-field>
  
                <v-textarea
                  label="Message"
                  v-model="formData.message"
                  :rules="[rules.required]"
                  outlined
                  required
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" :disabled="!isValid" @click="submitForm">
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
        isValid: false,
        rules: {
          required: (value) => !!value || "This field is required.",
          email: (value) =>
            /.+@.+\..+/.test(value) || "E-mail must be valid.",
        },
      };
    },
    methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          alert(
            `Thank you, ${this.formData.name}. Your message has been sent successfully!`
          );
          this.formData = {
            name: "",
            email: "",
            message: "",
          };
          this.$refs.form.reset();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .fill-height {
    min-height: 100vh;
  }
  </style>
  