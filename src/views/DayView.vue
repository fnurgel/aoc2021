<script lang="ts">
import { defineComponent } from "vue";
import FileUpload from "@/components/FileUpload.vue";
import { getDay } from "@/components/Days";

export default defineComponent({
  name: "DayView",
  components: { FileUpload },
  props: {
    id: { type: String },
  },
  data() {
    return {
      result1: undefined as unknown as string,
      result2: undefined as unknown as string,
    };
  },
  methods: {
    async fileContent(input: string[]) {
      const day = getDay(parseInt(this.id ?? ""));
      [this.result1, this.result2] = await Promise.all([
        day?.solution1(input),
        day?.solution2(input),
      ]);
      console.log("Answer1:", this.result1);
      console.log("Answer2:", this.result2);
    },
  },
});
</script>

<template>
  <div>
    <div class="about">
      <h1>Day {{ id }}</h1>
      <FileUpload :id="id" @file-content="fileContent" />
    </div>
    <div>
      <div v-if="!!result1" class="answer">
        {{ result1 }}
      </div>
      <div v-if="!!result2" class="answer">
        {{ result2 }}
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    margin-top: 100px;
    /* min-height: 100vh; */
    display: float;
    align-items: left;
  }
  .answer {
    /* margin-top: 100px;
    min-height: 100vh; */
    display: flex;
    align-items: center;
  }
}
</style>
