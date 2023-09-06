<!-- eslint-disable prettier/prettier -->
<template>
  <main class="projects-page page-container">
    <h1>Projects</h1>

    <p>
        Et irure id nisi consectetur incididunt. Et cupidatat quis cillum reprehenderit nisi anim id magna officia proident tempor velit non.
        Commodo incididunt velit est ullamco exercitation deserunt magna eiusmod occaecat Lorem. Tempor fugiat ea adipisicing mollit aliquip ad aute ea.
    </p>

    <div class="projects">

        <h2>Proyectos personales y de aprendizaje</h2>

        <SmallWindow></SmallWindow>

        <h2>Proyectos a nivel profesional</h2>

    </div>
  </main>
</template>


<script>
import SmallWindow from '@/components/SmallWindow.vue';

export default {
    name: 'Projects',
    components: {
        SmallWindow
    },
    setup() {
        return {};
    },
};
</script>


<style lang="scss" scoped></style>
