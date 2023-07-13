<template>
  <div class="pb-20 pt-20">
    <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">
      <div class="bg-white rounded-md shadow-md p-3">
        <img src="@/assets/images/qris-infaq-baznastuba.png" />

        <div v-if="maxDate(campaign.max_date) == true">
          <div class="mt-5">
            <button
              class="bg-yellow-500 py-3 rounded-md shadow-md text-xl w-full uppercase font-bold focus:outline-none opacity-50 cursor-not-allowed"
            >
              Ditutup!
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">
      <div class="bg-white rounded-md shadow-md p-3">
        <button
          @click="konfirmasi()"
          class="bg-yellow-500 py-3 rounded-md text-xl w-full uppercase font-bold focus:outline-none focus:bg-yellow-600"
        >
          KONFIRMAMSI PEMBAYARAN
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//hook vue
import { computed, onMounted } from "vue"; // computed dan onMounted

//hook vuex
import { useStore } from "vuex";

//hook vue router
import { useRoute } from "vue-router";

export default {
  name: "CampaignShowComponent",

  setup() {
    //vue route
    const route = useRoute();

    //store vuex
    const store = useStore();

    //onMounted akan menjalankan action "getDetailCampaign" di module "campaign"
    onMounted(() => {
      store.dispatch("campaign/getDetailCampaign", route.params.slug);
    });

    //digunakan untuk mendapatkan data detail campaign dari state "campaign" di module "campaign" Vuex
    const campaign = computed(() => {
      return store.state.campaign.campaign;
    });

    //digunakan untuk mendapatkan data detail user dari state "user" di module "campaign" Vuex
    const user = computed(() => {
      return store.state.campaign.user;
    });

    //digunakan untuk mendapatkan data jumlah donasi state "sumDonation" di module "campaign" Vuex
    const sumDonation = computed(() => {
      return store.state.campaign.sumDonation;
    });

    //digunakan untuk mendapatkan data donation dari state "donations" di module "campaign" Vuex
    const donations = computed(() => {
      return store.state.campaign.donations;
    });

    function konfirmasi() {
      window.location.href =
        "https://api.whatsapp.com/send?phone=62882005905827";
    }

    return {
      campaign, // <-- campaign
      user, // <-- user
      sumDonation, // <-- sumDonation
      donations, // <-- donations
      route, // <-- route
      konfirmasi,
    };
  },
};
</script>

<style></style>
