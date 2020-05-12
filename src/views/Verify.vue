<template>
  <div class="container-sm text-center">
    <div class="Box p-2 m-2 rounded-2">
      <div v-if="token">
        <div class="flash container-sm" v-if="state === 'LOADING'">
          <span>Loading</span>
          <span class="AnimatedEllipsis"></span>
        </div>
        <div class="container-sm" v-else>
          <Errors :errors="errors" v-if="errors.length" />
          <div class="flash flash-success" v-else>
            You have been verified successfully
          </div>
        </div>
      </div>
      <h1 class="text-red" v-else>No token is provided!</h1>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/api';
import Errors from '@/components/Errors';

export default {
  name: 'Verify',
  data() {
    return {
      token: this.$route.query.token,
      state: 'LOADING',
      errors: [],
    };
  },
  mounted() {
    if (typeof this.token !== 'string') return;
    apiService
      .verify(this.token)
      .then(async (r) => {
        if (!r.ok) {
          this.errors = apiService.parseErrors(await r.json());
        }
      })
      .catch((e) => {
        console.error(e);
        this.errors = [e.message];
      })
      .finally(() => {
        this.state = 'RESPONSE';
      });
  },
  components: {
    Errors,
  },
};
</script>
