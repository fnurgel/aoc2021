import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/vue";
import DayView from "@/views/DayView.vue";
import router from "@/router/index";

/**
 * @vitest-environment jsdom
 */

describe("DayView", () => {
  it("view", async () => {
    // The render method returns a collection of utilities to query your component.

    // const { debug, getByText } = render(DayView, {
    //   router: router,
    //   props: {
    //     id: "1",
    //   },
    // });

    // debug();

    // const debug = container.debug();
    // throws an error if no elements match or if more than one match is found.
    // container.getByText("Times clicked: 0");
  });

});
