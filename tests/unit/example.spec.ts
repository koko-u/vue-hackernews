import { shallowMount } from "@vue/test-utils";
import ItemComponent from "@/components/Item.component.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(ItemComponent);
    expect(wrapper.text()).toMatch("Item");
  });
});
