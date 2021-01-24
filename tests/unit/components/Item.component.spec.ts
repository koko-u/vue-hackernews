import { shallowMount } from "@vue/test-utils";
import ItemComponent from "@/components/Item.component.vue";
import { createApp, defineComponent } from "vue";

describe("Item.component", () => {
  it("contains Item", () => {
    const component = shallowMount(ItemComponent);
    expect(component.text()).toContain("Item");
  });
});
