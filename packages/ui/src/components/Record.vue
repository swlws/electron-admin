<template>
  <table class="record-component">
    <tr>
      <th>Index</th>
      <th>Account</th>
      <th>Key</th>
      <!-- <th>Expires</th> -->
      <th>Aside</th>
    </tr>

    <tr v-for="(item, index) in list" :key="item.id">
      <td>{{ index }}</td>
      <td><ShowAndWrite v-model:value="item.account" /></td>
      <td>
        <ShowAndWrite v-model:value="item.key" />
      </td>
      <!-- <td>
        <ShowAndWrite v-model:value="item.expires" />
      </td> -->
      <td>
        <ShowAndWrite v-model:value="item.aside" />
      </td>
    </tr>
  </table>

  <footer>
    <button @click="add">Add Record</button>
  </footer>
</template>

<script lang="ts" setup>
import { globalStorage } from "@/util/storage";
import ShowAndWrite from "./ShowAndWrite.vue";

type Record = {
  id: string;
  account: string;
  key: string;
  expires: string;
  aside: string;
};

const key = "key-list";
if (!globalStorage.getItem(key)) {
  globalStorage.setItem<Record[]>(key, []);
}

const list = globalStorage.getItem<Record[]>(key);

function add() {
  (list as Record[]).push({
    id: "" + Date.now(),
    account: "",
    key: "",
    expires: new Date().toISOString(),
    aside: "",
  });
}
</script>

<style lang="scss" scoped>
.record-component {
  width: 80%;
  margin: 10px auto;

  font-size: 14px;
  border-color: #e8e8e8;

  th {
    color: #333;
    text-align: left;
  }
  td {
    padding: 10px 3px;
    border-top: 1px solid #e8e8e8;
    word-break: break-all;
  }
  tr td:first-child,
  th:first-child {
    min-width: 20px;
    text-align: center;
    vertical-align: top;
  }

  tr,
  th {
    width: 20%;
  }
}

footer {
  text-align: center;
}
</style>
