<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead
                  class="
                    bg-gray-700
                    text-purple-500
                    uppercase
                    font-medium
                    tracking-wider
                  "
                >
                  <tr>
                    <th
                      scope="col"
                      class="text-center text-left text-xs font-small pr-5 pl-5"
                    >
                      ID
                    </th>
                    <th scope="col" class="pr-10 py-3 text-left text-xs">
                      Descrição
                    </th>
                    <th scope="col" class="px-10 py-3 text-center text-xs">
                      Linguagem
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="cleanCode in listCleanCode"
                    :key="cleanCode.id"
                    v-on:click="openModal(cleanCode)"
                    class="cursor-pointer hover:bg-purple-100"
                  >
                    <td
                      v-if="cleanCode.id > -1"
                      class="
                        text-purple-500 text-center
                        whitespace-nowrap
                        font-small
                        pr-5
                        pl-5
                      "
                    >
                      #{{ cleanCode.id }}
                    </td>

                    <td v-if="cleanCode.id > -1" class="pr-10 py-3">
                      <div class="flex items-center">
                        <div>
                          <div class="text-sm font-medium text-gray-900">
                            {{ cleanCode.title }}
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ cleanCode.subtitle }}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td
                      v-if="cleanCode.id > -1"
                      class="
                        px-10
                        whitespace-nowrap
                        text-center text-sm
                        font-medium
                      "
                    >
                      <button v-on:click="openModal(cleanCode)">
                        <svg
                          width="36px"
                          height="58px"
                          viewBox="0 0 256 288"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          preserveAspectRatio="xMidYMid"
                        >
                          <g>
                            <path
                              d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 C250.393,68.089376 247.32,65.070376 243.198,62.683376 C209.173,43.064376 175.115,23.505376 141.101,3.86637605 C131.931,-1.42762395 123.04,-1.23462395 113.938,4.13537605 C100.395,12.122376 32.59,50.969376 12.385,62.672376 C4.064,67.489376 0.015,74.861376 0.013,84.443376 C0,123.898376 0.013,163.352376 0,202.808376 C0,207.532376 0.991,211.717376 2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 C254.589,211.707376 255.582,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376"
                              fill="#A179DC"
                              fill-rule="nonzero"
                            ></path>
                            <path
                              d="M128.182,143.241376 L2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 L128.182,143.241376"
                              fill="#280068"
                              fill-rule="nonzero"
                            ></path>
                            <path
                              d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 L128.182,143.241376 L252.595,215.315376 C254.589,211.707376 255.58,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376"
                              fill="#390091"
                              fill-rule="nonzero"
                            ></path>
                            <path
                              d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z"
                              fill="#FFFFFF"
                            ></path>
                            <path
                              d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z"
                              fill="#FFFFFF"
                              fill-rule="nonzero"
                            ></path>
                          </g>
                        </svg>
                      </button>
                      <Modal :open="cleanCode.modalOpen" @close="closeModal()">
                        <div
                          class="
                            max-w-lg
                            w-full
                            bg-white
                            rounded-lg
                            shadow-2xl
                            px-6
                            py-6
                          "
                        >
                          <div class="mb-5 text-center underline">
                            <label
                              class="
                                font-semibold
                                text-gray-700
                                hover:underline
                              "
                            >
                              {{ cleanCode.title }}
                            </label>
                          </div>

                          <label
                            class="font-semibold text-gray-600 hover:underline"
                          >
                            #{{ cleanCode.id }} Código ruim</label
                          >
                          <div v-highlight>
                            <pre>
                              <code class="language-csharp"> {{ cleanCode.badCode }}</code>
                            </pre>
                          </div>

                          <label
                            class="font-semibold text-gray-600 hover:underline"
                            >#{{ cleanCode.id }} Código melhorado</label
                          >
                          <div v-highlight>
                            <pre>
                              <code class="language-csharp"> {{ cleanCode.goodCode }}</code>
                            </pre>
                          </div>
                        </div>
                      </Modal>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Vue from "vue";
import vueHljs from "vue-hljs";
import hljs from "highlight.js";
import "vue-hljs/dist/style.css";
Vue.use(vueHljs, { hljs });

export default {
  name: "ListCleanCodeExamples",
  components: {
    Modal,
  },
  data() {
    return {
      listCleanCode: [],
    };
  },
  created() {
    import(`../data/${this.$route.params.section}.json`).then((data) => {
      console.log(data);
      this.listCleanCode = data;
    });
  },
  methods: {
    changeModal: function(itemList) {
      let initialList = this.listCleanCode.default
        ? this.listCleanCode.default
        : this.listCleanCode;

      this.listCleanCode = initialList.map((item) => {
        if (itemList && item.id == itemList.id) item.modalOpen = true;
        else item.modalOpen = false;
        return item;
      });
    },
    openModal: function(itemList) {
      this.changeModal(itemList);
    },
    closeModal: function() {
      this.changeModal();
    },
  },
};
</script>
