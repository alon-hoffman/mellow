<template>
  <div class="container home">
    <ul class="car-list">
      <li v-for="car in cars" :key="car._id">
        <p>
          {{ car.vendor }}
        </p>
        <p>${{ car.price.toLocaleString() }}</p>
        <button @click="removeCar(car._id)">x</button>
        <button @click="updateCar(car)">Update</button>
      </li>
    </ul>
    <hr />
    <form @submit.prevent="addCar()">
      <h2>Add car</h2>
      <input type="text" v-model="carToAdd.vendor" />
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { carService } from "../services/board.service";
import { getActionRemoveCar, getActionUpdateCar } from "../store/board.store";
export default {
  data() {
    return {
      carToAdd: carService.getEmptyCar(),
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    cars() {
      return this.$store.getters.cars;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadCars" });
  },
  methods: {
    async addCar() {
      try {
        await this.$store.dispatch({ type: "addCar", car: this.carToAdd });
        showSuccessMsg("Car added");
        this.carToAdd = carService.getEmptyCar();
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot add car");
      }
    },
    async removeCar(carId) {
      try {
        await this.$store.dispatch(getActionRemoveCar(carId));
        showSuccessMsg("Car removed");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot remove car");
      }
    },
    async updateCar(car) {
      try {
        car = { ...car };
        car.price = +prompt("New price?", car.price);
        await this.$store.dispatch(getActionUpdateCar(car));
        showSuccessMsg("Car removed");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot remove car");
      }
    },
  },
};
</script>
