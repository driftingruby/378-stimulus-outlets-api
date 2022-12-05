import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="something"
export default class extends Controller {
  static outlets = ["alert"]

  connect() {
  }

  clicked() {
    if (this.hasAlertOutlet) {
      this.alertOutlet.alert("something clicked")
      // this.alertOutlets.forEach( alert => alert.alert("something") )
    }
  }
}
