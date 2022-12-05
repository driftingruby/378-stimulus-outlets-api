import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="alert"
export default class extends Controller {
  connect() {
  }

  alert(message) {
    alert(message)
  }
}
