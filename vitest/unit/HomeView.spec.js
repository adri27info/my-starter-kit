import { mount } from "@vue/test-utils";
import HomeView from "../../src/views/HomeView.vue";

describe("HomeView.vue", () => {
  it("the title should be correct", () => {
    const wrapper = mount(HomeView);
    const h1 = wrapper.find("h1");
    expect(h1.text()).toBe("Home view");
  });
});
