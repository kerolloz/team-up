<template>
  <div class="container-sm">
    <div class="border rounded-2 p-3 responsive-form mb-3 m-2">
      <form @submit.prevent="onFormSubmit">
        <dl class="mt-2 form-group">
          <dt>
            <label for="name">Full Name</label>
          </dt>
          <dd>
            <ValidationProvider
              name="Name"
              rules="alpha_spaces"
              v-slot="{ errors: nameErrors }"
            >
              <input
                v-model="name"
                id="name"
                name="name"
                type="text"
                class="form-control bg-white input-lg width-full"
                placeholder="Enter your name"
                minlength="5"
                required
                autofocus
              />
              <span class="text-red">{{ nameErrors[0] }}</span>
            </ValidationProvider>
          </dd>
        </dl>
        <dl class="mt-2 form-group">
          <dt>
            <label for="email">Email Address</label>
          </dt>
          <dd>
            <ValidationProvider name="Email" v-slot="{ errors: emailErrors }">
              <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                class="form-control bg-white input-lg width-full"
                placeholder="Enter your email"
                required
              />
              <span class="text-red">{{ emailErrors[0] }}</span>
            </ValidationProvider>
          </dd>
        </dl>

        <dl class="mt-2 form-group">
          <dt>
            <label for="skills">Skills</label>
          </dt>
          <dd>
            <TagsInput
              ref="skills"
              class="form-control bg-white input-lg width-full"
              name="skills"
              id="skills"
              placeholder="Enter your skills (Space separated)"
            />
            <span class="text-red">{{ skillsErrors }}</span>
          </dd>
        </dl>

        <p class="note">
          What languages, frameworks, technologies, or skills do you have/know?
          <br />
          e.g. html, python, machine-learning.
        </p>

        <input
          class="btn btn-blue btn-block mt-4 p-2"
          type="submit"
          :value="isLoading ? 'Loading...' : 'Register'"
          :disabled="isLoading"
        />
      </form>
      <div class="mt-3" v-show="success || errors.length">
        <div class="flash flash-success" v-show="success">
          <div class="h4 mb-2">Registered Successfully!</div>
          <p>
            Now, please check your inbox and verify your email.
            <br />
            <b>Note:</b> You won't appear in the search results unless you
            verify your email.
          </p>
        </div>
        <Errors :errors="errors" v-if="errors.length" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .responsive-form {
    margin: 10px;
  }
}
</style>

<script>
import Errors from '@/components/Errors';
import TagsInput from '@/components/TagsInput';
import apiService from '@/services/api';
import { ValidationProvider, extend, setInteractionMode } from 'vee-validate';
import {
  required,
  email,
  alpha_spaces as alphaSpaces,
  min,
} from 'vee-validate/dist/rules';

setInteractionMode('lazy');
extend('email', email);
extend('min', {
  ...min,
  message: '{_field_} must have at least 5 chars.',
});
extend('alpha_spaces', {
  ...alphaSpaces,
  message: '{_field_} should have lowercase, uppercase chars or spaces.',
});
extend('required', {
  ...required,
  message: '{_field_} is required.',
});

export default {
  name: 'Registration',
  data() {
    return {
      name: '',
      email: '',
      errors: [],
      success: false,
      isLoading: false,
      skillsErrors: '',
    };
  },
  methods: {
    showErrors(e) {
      if (typeof e === 'string') this.errors = [e];
      else this.errors = e;
    },
    async onFormSubmit() {
      this.isLoading = true;
      this.success = false;
      this.errors = [];
      const { name, email } = this;
      const skills = this.$refs.skills.getTags();
      if (skills.length < 2) {
        this.skillsErrors = 'Skills must have at least 2 items';
        this.isLoading = false;
        return;
      }

      const data = { name, email, skills };
      apiService
        .signup(data)
        .then(async (r) => {
          if (r.ok) {
            this.success = true;
          } else {
            const json = await r.json();
            this.errors = apiService.parseErrors(json);
          }
        })
        .catch((e) => this.showErrors(e))
        .finally(() => (this.isLoading = false));
    },
  },
  mounted() {
    const tagify = this.$refs.skills.getTagify();
    tagify
      .on('add', () => {
        this.skillsErrors = '';
      })
      .on('invalid', (e) => {
        if (e.detail.message === 'pattern mismatch')
          this.skillsErrors = `
            A skill must start with a lowercase char,
            be from 2 to 20 chars long, can have lowercase chars, digits,
            or the following symbols: "- + ."`;
        else this.skillsErrors = e.detail.message;
      });
  },
  components: {
    TagsInput,
    Errors,
    ValidationProvider,
  },
};
</script>
