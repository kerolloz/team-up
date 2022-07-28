<template>
  <div class="container-sm">
    <div class="m-2">
      <div class="flash-messages text-center">
        <div class="flash">
          <p>
            <b>Have an idea? Searching for team!</b>
            <br />You can search either by <em>name</em> or <em>skills</em>.
          </p>
        </div>
      </div>
      <!-- tabs -->
      <div class="tabnav text-center mb-0">
        <nav class="tabnav-tabs d-flex flex-justify-between">
          <button
            @click="tab = 'name'"
            :class="{ 'text-blue': tab === 'name' }"
            class="tabnav-tab width-full btn btn-invisible btn-outline"
            :aria-current="tab === 'name'"
          >
            Name
          </button>
          <button
            @click="tab = 'skills'"
            :class="{ 'text-blue': tab === 'skills' }"
            class="tabnav-tab width-full btn btn-invisible btn-outline"
            :aria-current="tab === 'skills'"
          >
            Skills
          </button>
        </nav>
      </div>
      <!-- tab content -->
      <div class="border border-top-0 rounded-bottom-2 width-full p-2">
        <!-- search forms -->
        <div class="m-2 pt-5">
          <form @submit.prevent="searchByName" v-if="tab === 'name'">
            <input
              name="name"
              type="text"
              class="form-control bg-white input-lg width-full"
              placeholder="Search by Name..."
              v-model="name"
            />
          </form>
          <form v-else>
            <div>
              <TagsInput
                v-on:search="searchBySkills"
                name="skills"
                type="text"
                class="form-control bg-white input-lg width-full"
                placeholder="Search by Skills (Space separated)"
                ref="skills"
              />
            </div>
          </form>

          <p class="note mt-2">
            Press
            <kbd>
              <b>Enter</b>
            </kbd>
            to Search!
          </p>
        </div>
        <div class="m-2 mt-3">
          <div class="flash container-sm" v-if="state === LOADING">
            <span>Loading</span>
            <span class="AnimatedEllipsis"></span>
          </div>
          <div class="container-sm" v-else-if="state === RESPONSE">
            <!-- students -->
            <div v-if="students.length">
              <StudentCard
                v-for="student in students"
                :student="student"
                :key="student._id"
              />
            </div>
            <Errors :errors="errors" v-else-if="errors.length" />
            <Errors
              title="We are sorry!"
              errors="No one matches your search query"
              v-else
            />
          </div>
          <!-- note -->
          <div class="Toast width-fit width-full m-0" v-else>
            <span class="Toast-icon">
              <Octicon name="info" :options="{ width: '30' }" />
            </span>
            <span class="Toast-content">
              <b>Having a problem?</b>
              <p>
                Please let us know by opening an issue on GitHub
                <a
                  href="https://github.com/kerolloz/team-up-front/issues"
                  target="_blank"
                  class="text-gray-dark ml-1"
                >
                  <Octicon name="mark-github" :options="{ width: '20' }" />
                </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Octicon from '@/components/OcticonElement';
import Errors from '@/components/Errors';
import StudentCard from '@/components/StudentCard';
import TagsInput from '@/components/TagsInput';
import apiService from '@/services/api';

const PENDING = 1,
  LOADING = 2,
  RESPONSE = 3;

export default {
  name: 'StudentsPage',
  data() {
    return {
      PENDING,
      LOADING,
      RESPONSE,
      tab: 'name',
      name: '',
      students: [],
      errors: [],
      state: PENDING,
    };
  },
  methods: {
    showStudents(s) {
      this.students = s;
    },
    showErrors(e) {
      if (typeof e === 'string') this.errors = [e];
      else this.errors = e;
    },
    searchByName() {
      this.students = this.errors = [];
      if (this.name.trim().length) {
        this.state = LOADING;
        apiService
          .findByName(this.name)
          .then((r) => r.json())
          .then((r) => this.showStudents(r))
          .catch((e) => this.showErrors(e))
          .finally(() => (this.state = RESPONSE));
      } else {
        this.errors = ['Enter a name to search'];
        this.state = RESPONSE;
      }
    },
    searchBySkills() {
      this.students = this.errors = [];
      const skills = this.$refs.skills.getTags();
      if (skills.length) {
        this.state = LOADING;
        apiService
          .findBySkills(skills)
          .then((r) => r.json())
          .then((r) => this.showStudents(r))
          .catch((e) => this.showErrors(e))
          .finally(() => (this.state = RESPONSE));
      } else {
        this.errors = ['Enter skills to search'];
        this.state = RESPONSE;
      }
    },
  },
  watch: {
    tab() {
      this.state = PENDING;
    },
  },
  components: {
    Octicon,
    TagsInput,
    StudentCard,
    Errors,
  },
};
</script>
