<template>
  <div class="wrapper" data-testid="register-wrapper">
    <div class="container">
      <div class="foreground" v-if="isLoading || isSuccessRegistered"></div>
      <div class="header">
        <span class="header title">Registration</span>
        <div class="header error-box">
          <ErrorTooltip
            :content="errorMessage"
            v-if="errorMessage"
            data-testid="error-tooltip"
          />
        </div>
      </div>
      <form class="form-registration" @submit="onClickRegister">
        <div class="section">
          <input
            class="styled-input-text"
            placeholder="Enter mobile phone number"
            v-model="mobileNumber"
            required
            :disabled="isLoading || isSuccessRegistered"
            type="tel"
            data-testid="mobile-phone-field"
          />
        </div>
        <div class="section">
          <input
            class="styled-input-text"
            placeholder="First Name"
            v-model="firstName"
            required
            :disabled="isLoading || isSuccessRegistered"
            data-testid="first-name-field"
          />
        </div>
        <div class="section">
          <input
            class="styled-input-text"
            placeholder="Last Name"
            v-model="lastName"
            required
            :disabled="isLoading || isSuccessRegistered"
            data-testid="last-name-field"
          />
        </div>
        <div class="section">
          <label class="section-label">Date of birth</label>
          <div class="date-of-birth-container">
            <Dropdown
              placeholder="Month"
              :options="getMonthOptions"
              :onChange="handleSelectMonthBirthDate"
              :disabled="isLoading || isSuccessRegistered"
            />
            <Dropdown
              placeholder="Date"
              :options="getDateOptions"
              :onChange="handleSelectDatehBirthDate"
              :disabled="isLoading || isSuccessRegistered"
            />
            <Dropdown
              placeholder="Year"
              :options="getYearOptions"
              :onChange="handleSelectYearBirthDate"
              :disabled="isLoading || isSuccessRegistered"
            />
          </div>
        </div>
        <div class="section gender">
          <RadioButton
            label="Male"
            :onClick="onSelectGender"
            :checked="gender === 'male'"
            :disabled="isLoading || isSuccessRegistered"
          />
          <RadioButton
            label="Female"
            :onClick="onSelectGender"
            :checked="gender === 'female'"
            :disabled="isLoading || isSuccessRegistered"
          />
        </div>
        <div class="section">
          <input
            class="styled-input-text"
            placeholder="Email"
            v-model="email"
            required
            type="email"
            :disabled="isLoading || isSuccessRegistered"
            data-testid="email-field"
          />
        </div>
        <div class="section">
          <!-- prevent onClick props undefined, so send empty function -->
          <Button
            title="Register"
            :onClick="() => {}"
            :disabled="isLoading || isSuccessRegistered"
            data-testid="register-button"
          />
        </div>
      </form>
    </div>
    <div class="container" v-if="isSuccessRegistered">
      <Button
        title="Login"
        :onClick="handleNavigateToLoginPage"
        :disabled="isLoading"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

// config
import { baseURL } from "../../config/baseURL";

// components
import Button from "../components/global/Button";
import Dropdown from "../components/global/Dropdown";
import ErrorTooltip from "../components/global/ErrorTooltip";
import RadioButton from "../components/global/RadioButton";

// utils
import validateFormRegister from "../utils/validateFormRegister";

export default {
  components: {
    Button,
    Dropdown,
    ErrorTooltip,
    RadioButton,
  },
  data() {
    return {
      email: "",
      mobileNumber: "",
      firstName: "",
      lastName: "",
      gender: "",
      isLoading: false,
      errorMessage: "",
      month: "",
      date: "",
      year: "",
      isSuccessRegistered: false,
    };
  },
  computed: {
    getMonthOptions() {
      return [
        { label: "January", value: "01" },
        { label: "February", value: "02" },
        { label: "March", value: "03" },
        { label: "April", value: "04" },
        { label: "May", value: "05" },
        { label: "June", value: "06" },
        { label: "July", value: "07" },
        { label: "August", value: "08" },
        { label: "September", value: "09" },
        { label: "October", value: "10" },
        { label: "November", value: "11" },
        { label: "Desember", value: "12" },
      ];
    },
    getDateOptions() {
      const dates = [];
      for (let i = 1; i <= 31; i++) {
        let date = i;
        if (i < 10) {
          date = "0" + i;
        }
        dates.push({ label: i, value: date });
      }

      return dates;
    },
    getYearOptions() {
      const years = [];
      for (let i = 1900; i <= 2020; i++) {
        years.push({ label: i, value: i });
      }
      return years;
    },
  },

  methods: {
    handleNavigateToLoginPage() {
      this.$router.push({ name: "Login" });
    },
    handleSelectMonthBirthDate(e) {
      this.month = e.target.value;
    },
    handleSelectDatehBirthDate(e) {
      this.date = e.target.value;
    },
    handleSelectYearBirthDate(e) {
      this.year = e.target.value;
    },
    onSelectGender(selectedGender) {
      this.gender = selectedGender;
    },
    onClickRegister(e) {
      e.preventDefault();
      this.isLoading = true;

      this.errorMessage = "";

      const {
        email,
        mobileNumber,
        firstName,
        lastName,
        gender,
        year,
        month,
        date,
      } = this;

      let dateOfBirth = null;
      if (year && month && date) {
        dateOfBirth = `${year}-${month}-${date}`;
      }

      const data = {
        email,
        mobileNumber,
        firstName,
        lastName,
        gender,
        dateOfBirth,
      };

      const errorMessage = validateFormRegister(data);
      this.errorMessage = errorMessage;

      if (!errorMessage) {
        // set data to server
        axios
          .post(`${baseURL}/register`, data)
          .then((response) => {
            if (response.status === 201) {
              this.isSuccessRegistered = true;
            } else {
              const errorMessage = response.data.message;
            }
          })
          .catch((error) => {
            if (error.response) {
              const errorMessage = error.response.data.message;
              this.errorMessage = errorMessage;
            } else {
              this.errorMessage = "Uknown error. Please try again later.";
            }
          });
      }

      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container {
  background: #fafafa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 500px;

  position: relative;
}

.container:not(:first-child) {
  margin-top: 15px;
}

.foreground {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0px;
  top: 0px;
  background-color: #fff;
  opacity: 0.5;
  pointer-events: none;

  z-index: 1;
}

.date-of-birth-container {
  display: flex;
  margin-top: 5px;
}

.date-of-birth-container .dropdown-select:not(:first-child) {
  margin-left: 10px;
}

.gender {
  display: flex;
  flex-direction: row;
}

.container-radio-button:not(:first-child) {
  margin-left: 25px;
}

.header {
  width: 100%;
  margin-bottom: 5px;
}

.header .title {
  font-size: 24px;
  line-height: 32px;
}

.header .error-box {
  display: flex;
  justify-content: center;
}

.form-registration {
  display: flex;
  flex-direction: column;
}

.section {
  width: 100%;
}

.section-label {
  font-size: 14px;
}

.section:not(:first-child) {
  margin-top: 10px;
}

.styled-input-text {
  /*  total width minus padding */
  width: calc(100% - 20px);

  border: solid 1px #000000;
  padding: 7px 10px;
}

.styled-input-text:focus {
  outline-color: #9033aa;
  outline-width: 0.1px;
}
</style>
