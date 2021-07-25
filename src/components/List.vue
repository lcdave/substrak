<template>
  <div class="container">
    <div class="list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Period</th>
            <th>Price</th>
            <th>Expires</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spotify</td>
            <td>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</td>
            <td><span class="tag var_monthly">Monthly</span></td>
            <td>9.90 CHF</td>
            <td class="expires-soon">29.05.2021</td>
            <td class="icons">
              <font-awesome-icon :icon="penIcon" />
              <font-awesome-icon :icon="trashIcon" />
            </td>
          </tr>
          <tr>
            <td>Netflix</td>
            <td>Nulla quis lorem ut libero malesuada feugiat.</td>
            <td><span class="tag var_monthly">Monthly</span></td>
            <td>19.90 CHF</td>
            <td class="expires-soon">27.07.2021</td>
            <td class="icons">
              <font-awesome-icon :icon="penIcon" />
              <font-awesome-icon :icon="trashIcon" />
            </td>
          </tr>
          <tr>
            <td>Office 365</td>
            <td>Donec rutrum congue leo eget malesuada.</td>
            <td><span class="tag var_yearly">Yearly</span></td>
            <td>139.90 CHF</td>
            <td class="expires-late">17.09.2022</td>
            <td class="icons">
              <font-awesome-icon :icon="penIcon" />
              <font-awesome-icon :icon="trashIcon" />
            </td>
          </tr>
          <tr>
            <td>GIT Kraken</td>
            <td>Curabitur arcu erat, accumsan id imperdiet et congue.</td>
            <td><span class="tag var_monthly">Monthly</span></td>
            <td>4.95 CHF</td>
            <td class="expires-soon">29.07.2021</td>
            <td class="icons">
              <font-awesome-icon :icon="penIcon" />
              <font-awesome-icon :icon="trashIcon" />
            </td>
          </tr>
          <tr>
            <td>Office 365</td>
            <td>Donec rutrum congue leo eget malesuada.</td>
            <td><span class="tag var_yearly">Yearly</span></td>
            <td>139.90 CHF</td>
            <td class="expires-soon">17.09.2022</td>
            <td class="icons">
              <font-awesome-icon :icon="penIcon" />
              <font-awesome-icon :icon="trashIcon" />
            </td>
          </tr>
          <tr>
            <td>Adobe creative suite</td>
            <td>Donec rutrum congue leo eget malesuada.</td>
            <td><span class="tag var_yearly">Yearly</span></td>
            <td>139.90 CHF</td>
            <td class="expires-late">17.09.2022</td>
            <td class="icons">
              <font-awesome-icon :icon="penIcon" />
              <font-awesome-icon :icon="trashIcon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  data () {
    return {
      penIcon: faPen,
      trashIcon: faTrashAlt,
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped src="../scss/components/_list.scss" />
