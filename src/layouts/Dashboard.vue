<template>
  <div>
    <!-- Sidebar -->
    <sidebar-menu :menu="menu" />
    <div>
      <!-- Header -->
      <div class="flex">
        <router-view />
        <!-- Footer -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SidebarMenu } from "vue-sidebar-menu";

export default defineComponent({
  name: "DashboardLayout",
  components: { SidebarMenu },
  data() {
    return {
      menu: [
        {
          header: "Main Navigation",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user",
        },
        {
          href: "/charts",
          title: "Charts",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/charts/sublink",
              title: "Sub Link",
            },
          ],
        },
      ],
    };
  },
});
</script>

<style></style>
