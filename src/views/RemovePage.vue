<template>
  <div class="container-sm text-center">
    <div class="Box p-2 m-2 rounded-2">
      <div v-if="token">
        <h2>
          Are you sure you want to
          <em class="text-red">Remove</em> Yourself?
        </h2>
        <div class="m-4 mb-0">
          <div class="flash container-sm" v-if="state === LOADING">
            <span>Loading</span><span class="AnimatedEllipsis"></span>
          </div>
          <div class="container-sm" v-else-if="state === RESPONSE">
            <Errors :errors="errors" v-if="errors.length" />
            <div class="flash flash-success" v-else>
              You have been removed successfully
            </div>
          </div>
          <button @click="remove" class="btn btn-danger col-5" v-else>
            Yes
          </button>
        </div>
      </div>
      <h1 class="text-red" v-else>No token is provided!</h1>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/api';
import Errors from '@/components/Errors';

const PENDING = 1,
  LOADING = 2,
  RESPONSE = 3;

export default {
  name: 'RemovePage',
  data() {
    return {
      PENDING,
      LOADING,
      RESPONSE,
      token: this.$route.query.token,
      state: PENDING,
      errors: [],
    };
  },
  methods: {
    remove() {
      this.state = LOADING;
      apiService
        .remove(this.token)
        .then(async (r) => {
          if (!r.ok) {
            const json = await r.json();
            this.errors = json.message;
          }
        })
        .catch((e) => {
          console.error(e);
          this.errors = [e.message];
        })
        .finally(() => {
          this.state = RESPONSE;
        });
    },
  },
  components: {
    Errors,
  },
};
</script>
