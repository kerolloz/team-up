<template>
  <div class="container-lg mb-3 faq-cards">
    <InfoCard title="What is the idea of TEAM UP?" id="1">
      <p>
        The main idea is to help students to team up for their graduation
        project. You know, since our first year, we have always been struggling
        to team up for a project.
      </p>
      <p>
        In short, students who haven't joined a team will register. Students who
        have an idea will search for other students who haven't joined a team
        yet.
      </p>
    </InfoCard>

    <InfoCard title="How it works?">
      <div class="ml-4">
        <ol>
          <li class="mb-2">
            <p class="h4">If you haven't joined a team yet:</p>
            <ol class="ml-3">
              <li><router-link to="/registration">Register</router-link>.</li>
              <li>
                Verify your email. A verification mail is sent once you
                register.
              </li>
              <li>Someone will contact you to join his/her team.</li>
              <li>
                Remove yourself. You will find a link in the verification mail.
              </li>
            </ol>
          </li>

          <li>
            <p class="h4">
              If you have an idea and searching for team:
            </p>
            <ol class="ml-3">
              <li>
                <router-link to="/students">Search for a student</router-link>
                whose skills match your project needs.
              </li>
              <li>
                Send him/her an email to see if he would like to join your team.
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </InfoCard>

    <InfoCard title="Why should I register in TEAM UP?">
      <p>
        As <a href="#1">mentioned before</a> it would make our life easier.<br />
      </p>

      <p class="pullquote text-bold text-italic m-2 p-1 pl-3">
        Save the hassle for the project!
      </p>

      <p>
        For example, Let's say that I have an idea for a project. I need a team.
        My idea will need someone who is good at <em>python</em>. With TEAM UP,
        that's a pice of cake. I will just
        <router-link to="/students">search for students</router-link>
        who have python in their skill set. Send him/her an email.
      </p>
      <p>
        On the other hand, If I don't have an idea for a project. I would go
        <router-link to="/registration">register</router-link> myself, fill up a
        3-field small form, and booom. Now, I am into the database, someone will
        find me suitable to join his project according to my skills.
      </p>
      <p>
        Easy, isn't it?
      </p>
    </InfoCard>

    <InfoCard title="Why there is no full list of all the students?">
      <p>
        We see no need for this.<br />
        You should only see the search results according to skills or name.
      </p>
    </InfoCard>

    <InfoCard title="Why email? Why not Facebook profile or phone number?">
      <p>
        We see that email would be much easier means of communication, more
        formal as well. It's up to you, you can ask for the student's facebook
        profile or phone number when you contact him/her via email.
      </p>
    </InfoCard>

    <InfoCard title="Why should I trust TEAM UP?">
      <p>
        It's an open-source project. In other words, you can see the code that
        powers this website.
        <br />
        It's available on <Octicon name="logo-github" class="octicon" />
      </p>
      <div>
        <a href="//github.com/kerolloz/team-up" target="_blank">
          <Octicon name="globe" class="octicon text-gray-dark" />
          Frontend
        </a>
        <div class="m-1"></div>
        <a href="//github.com/kerolloz/team-up-backend" target="_blank">
          <Octicon name="server" class="octicon text-gray-dark" />
          Backend
        </a>
      </div>
    </InfoCard>

    <InfoCard title="Why my name doesn't appear when I search for it?">
      <p>
        Please, make sure that you have verified your email.
      </p>
      <p>
        When you register, an email will be sent for you to verify that this is
        your email. Just open the link for verification.
      </p>
      <p>
        Still have the same problem? <br />
        Please open an issue here
        <a href="//github.com/kerolloz/team-up/issues" target="_blank">
          <Octicon name="octoface" class="octicon" />
        </a>
      </p>
    </InfoCard>

    <InfoCard title='What does "team up" mean?'>
      <p class="m-0">
        It means to join another person, or form a group with other people, in
        order to do something together.
      </p>
      <a
        class="text-small"
        href="//dictionary.cambridge.org/dictionary/english/team-up"
        target="_blank"
      >
        <Octicon name="book" />
        Cambridge dictionary
      </a>
    </InfoCard>

    <InfoCard title="Like the project?">
      <iframe
        src="https://ghbtns.com/github-btn.html?user=kerolloz&repo=team-up&type=star&count=true"
        frameborder="0"
        scrolling="0"
        width="160px"
        height="20px"
      ></iframe>
      <br />
      <iframe
        src="https://ghbtns.com/github-btn.html?user=kerolloz&type=follow&count=true"
        frameborder="0"
        scrolling="0"
        width="220px"
        height="20px"
      ></iframe>
    </InfoCard>

    <InfoCard title="Feedback and suggestions!">
      <p>
        Your feedback is welcomed
        <a href="mailto: team.up.fci@gmail.com"> team.up.fci@gmail.com</a>
      </p>
    </InfoCard>
  </div>
</template>

<style scoped>
.faq-cards {
  font-size: 16px;
}
</style>

<script>
import Octicon from '@/components/Octicon';
import InfoCard from '@/components/InfoCard';
export default {
  name: 'Home',
  components: { InfoCard, Octicon },
};
</script>
