<template>
  <div class="fileUpload">
    <span v-if="fileLoaded">{{ fileLoaded }}</span>
    <input
      v-if="!fileLoaded"
      data-test-id="fileselector"
      type="file"
      name="file"
      ref="upload"
      @change="filesUpdated"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { readFile } from "./FileReader";

export default defineComponent({
  name: "FileUpload",
  components: {},

  props: {
    id: { type: String },
  },

  created() {
    this.emitStoredFileContent();
    console.log(`the component is now created.`);
  },

  data() {
    return {
      fileLoaded: undefined as unknown as string | undefined,
    };
  },

  watch: {
    id: {
      handler(v) {
        console.log("v", v);
        this.emitStoredFileContent();
      },
    },
  },
  computed: {
    upload(): HTMLInputElement {
      return this.$refs.upload as HTMLInputElement;
    },
  },

  methods: {
    emitStoredFileContent() {
      this.fileLoaded = undefined;
      if (this.id) {
        const localStorageContent = localStorage.getItem(this.id);
        if (localStorageContent) {
          const fileLoaded = localStorage.getItem(`${this.id}-filename`);
          if (fileLoaded) {
            this.fileLoaded = fileLoaded;
          }
          const input = localStorageContent.split(/\r?\n/);
          this.$emit("file-content", input);
        }
      }
    },
    async filesUpdated() {
      const files: ReadonlyArray<File> = [
        ...(this.upload.files ? Array.from(this.upload.files) : []),
      ];

      files.forEach(async (file) => {
        console.log(`File: ${file.name}`);
        const content = await readFile(file);
        if (this.id && typeof content == "string") {
          const input = content.split(/\r?\n/);
          localStorage.setItem(this.id, content);
          localStorage.setItem(`${this.id}-filename`, file.name);
          this.$emit("file-content", input);
        }
      });
    },
  },
});
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.fileUpload {
  position: fixed;
  top: 50px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

/* .greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
