<script setup>
import Technology from '@/components/Technology.vue';
import Project from '@/components/Project.vue';
import { Icon } from 'skillicons-tooltip';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n'; // Only for Vue 3 Composition API

onMounted(() => {
  const savedLang = localStorage.getItem('user-language');
  if (savedLang) {
    locale.value = savedLang;
  }
});

const { locale, t } = useI18n(); // `locale` is a ref, `t` is the translate function

const projects = [
  {
    i: 0,
    name: 'golden-ball-race.eu',
    text: 'projects.golden-ball',
    tech: ['Node.js', 'TailwindCSS', 'Vue', 'Fotmob'],
    imageUrl: 'public/images/golden-ball.png',
  },
  {
    i: 1,
    name: 'webgames demos',
    text: 'projects.webgames',
    tech: ['Vue', 'HTML', 'CSS', 'TailwindCSS'],
    imageUrl: 'public/images/mindweb.png',
  },
  {
    i: 2,
    name: 'DocMagic',
    text: 'projects.docmagic',
    tech: ['check out their github: https://github.com/Muneerali199/DocMagic'],
    imageUrl: 'public/images/docmagic.png',
  },
  {
    i: 3,
    name: 'skillicons-tooltip',
    text: 'projects.skillicons-tooltip',
    tech: ['check out github: https://github.com/madfozjer/skillicons-tooltip'],
    imageUrl: 'public/images/skillicons.png',
  },
  {
    i: 4,
    name: 'onlineshop',
    text: 'projects.ecommerce',
    tech: ['check out github: https://github.com/madfozjer/onlineshop'],
    imageUrl: 'public/images/ourshop.png',
  },
];

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem('user-language', lang);
};
</script>

<template>
  <div
    class="h-screen w-screen overflow-x-hidden border-lime-500 bg-gray-200/50 sm:border-yellow-500 md:border-green-500 lg:border-pink-500 xl:border-purple-500 2xl:border-red-500"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="roboto-mono mt-64 flex flex-col border-purple-500 text-4xl font-light">
        <span class="pl-8 text-2xl sm:text-4xl">
          <span class="font-normal">{{ $t('header.name') }} </span> (<span class="text-purple-800"
            >madfozjer</span
          >)
        </span>
        <span class="text-md flex gap-4 pl-8 sm:text-3xl">
          <span class="w-full text-lg sm:text-2xl">{{ $t('header.hobbies') }}</span>
          <span class="flex gap-2 text-sm sm:text-3xl"
            ><button
              class="underline underline-offset-2 opacity-65 hover:cursor-pointer hover:opacity-100"
              @click="changeLanguage('en')"
            >
              eng.</button
            ><button
              class="underline underline-offset-2 opacity-65 hover:cursor-pointer hover:opacity-100"
              @click="changeLanguage('pl')"
            >
              pl.</button
            ><button
              class="underline underline-offset-2 opacity-65 hover:cursor-pointer hover:opacity-100"
              @click="changeLanguage('ua')"
            >
              ukr.</button
            ><button
              class="underline underline-offset-2 opacity-65 hover:cursor-pointer hover:opacity-100"
              @click="changeLanguage('ru')"
            >
              ru.
            </button></span
          >
        </span>
      </div>
      <div class="collapse-arrow collapse mt-6 ml-4 items-center justify-center sm:mt-0 sm:ml-auto">
        <input type="checkbox" />
        <div class="collapse-title flex gap-4 font-semibold">
          <Technology
            src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg"
            color="#f7e018"
            header="JavaScript"
            difficulty="Proficient"
            subheader="Empowering dynamic web interfaces and complex client-side logic, driving engaging user experiences across the web."
          />
          <Technology
            src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/HTML.svg"
            color="#e14e1d"
            header="HTML5"
            difficulty="Proficient"
            subheader="Provides the essential framework and elements for web content, upon which styling (CSS) and interactivity (JavaScript) are built"
          />
          <Technology
            src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg"
            color="#0277bd"
            header="CSS3"
            difficulty="Familiar"
            subheader="Provides comprehensive control over colors, fonts, spacing, animations, and the overall visual presentation of web content."
          />
          <Technology
            src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg"
            color="#7fcb38"
            header="Node.js"
            difficulty="Familiar"
            subheader="Open-source, cross-platform runtime built on Chrome's V8 engine, ideal for building fast, scalable network applications and APIs due to its non-blocking I/O."
          />
          <Technology
            src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg"
            color="#24bbbc"
            header="TailwindCSS"
            difficulty="Proficient"
            subheader="Enables rapid, design-system-driven styling with a focus on utility classes, resulting in highly optimized and maintainable CSS."
          />
          <Technology
            src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/VueJS-Dark.svg"
            color="#41b883"
            header="Vue.js"
            difficulty="Proficient"
            subheader="Versatile framework enabling efficient development of responsive and engaging user interfaces, known for its gentle learning curve and strong ecosystem."
          />
          <Technology
            src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MongoDB.svg"
            color="#10aa50"
            header="MongoDB"
            difficulty="Familiar"
            subheader="Scalable and flexible NoSQL database, ideal for modern applications requiring agile schema design and high performance."
          />
          <Technology
            src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg"
            color="#00d8ff"
            header="React"
            difficulty="Familiar"
            subheader="Component-based JavaScript library focused on creating efficient and interactive front-end experiences."
          />
        </div>
        <div class="collapse-content text-sm">
          <div class="flex gap-3">
            <Technology
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CPP.svg"
              color="#026BBF"
              header="C++"
              difficulty="Familiar"
              subheader="Powerful, high-performance, general-purpose programming language often used for system/application software, game development, embedded systems, and high-performance computing."
            />
            <Technology
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CS.svg"
              color="#953cad"
              header="C#"
              difficulty="Familiar"
              subheader="Modern, object-oriented, type-safe programming language that runs on the .NET platform, used for building various applications from web and mobile to desktop, games, and cloud services."
            />
            <Technology
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Git.svg"
              color="#f03c2e"
              header="git"
              difficulty="Familiar"
              subheader="Distributed version control system used for tracking changes in source code during software development, enabling collaboration among developers."
            />
            <Technology
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Github-Dark.svg"
              color="#242938"
              header="GitHub"
              difficulty="Familiar"
              subheader="Web-based platform for version control and collaboration, hosting Git repositories and providing tools for issue tracking, project management, and continuous integration."
            />
            <Technology
              src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Npm-Dark.svg"
              color="#cb3837"
              header="npm"
              difficulty="Familiar"
              subheader="Package manager for Node.js, used for installing and managing project dependencies, publishing packages, and running scripts for development workflows."
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center border-yellow-500">
        <span class="font-semibold"> {{ $t('contact.header') }}</span>
        <span
          >{{ $t('contact.email') }}
          <a class="font-mono hover:underline" href="mailto:dimatsarevskyi@proton.me"
            >dimatsarevskyi@proton.me</a
          ></span
        >
        <span
          >{{ $t('contact.twitter') }}
          <a href="https://x.com/secondvahn" class="font-mono hover:underline">@secondvahn</a></span
        >
        <span
          >{{ $t('contact.github') }}
          <a href="https://github.com/madfozjer" class="font-mono hover:underline"
            >madfozjer</a
          ></span
        >
        <a href="https://www.google.com/" class="font-bold underline hover:cursor-pointer">{{
          $t('contact.cv')
        }}</a>
      </div>
      <div class="mt-12 footer justify-center border-green-500 text-9xl opacity-85">↓</div>
      <div class="mt-[18rem] mr-auto -mb-[64rem] ml-4 border-red-500">
        <span class="roboto-mono text-5xl font-light">{{ $t('projects.header') }}</span>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            v-for="project in projects"
            :project="project"
            :key="project.id"
            class="flex flex-col rounded-xl p-4 pl-0"
          >
            <Project :project="project" />
          </div>
        </div>
        <div class="mt-[8rem] mr-auto mb-32 border-red-500">
          <span class="roboto-mono text-5xl font-light">BI0:</span>
          <div class="roboto-mono mt-2 ml-1 flex flex-col text-xl">
            <span>{{ $t('bio.line1') }}</span>
            <span>{{ $t('bio.line2') }}</span>
            <span>{{ $t('bio.line3') }}</span>
            <span>{{ $t('bio.line4') }}</span>
            <span>{{ $t('bio.line5') }}</span>
            <span>{{ $t('bio.line6') }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
