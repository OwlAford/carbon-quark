import { shallowMount } from "@vue/test-utils";
import Error from "@/components/Error/index.vue";

describe("Error/index.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Error, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
