(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();
      /*
      if (document.title === "Payment form example") {

        //begin modal stuff
        var SUBMIT_SELECTOR = '[type="submit"]';
        var MODAL_SELECTOR = '[class="modal"]';
        var CLOSE_SELECTOR = '[class="close-button"]';
        var TY_SELECTOR = '[class="thank-you"]';
        var modal = document.querySelector(MODAL_SELECTOR);
        var submit = document.querySelector(SUBMIT_SELECTOR);
        var closeButton = document.querySelector(CLOSE_SELECTOR);
        var ptitle = "abc";
        var pname = "123";
        var data = {};
        $(this).serializeArray().forEach(function(item) {
          data[item.name] = item.value;
          console.log(item.name + ' is ' + item.value);
        })
        console.log(data);
        console.log(data['title']);
        console.log(data['username']);
        ptitle = data['title'];
        pname = data['username'];

        function toggleModal() {
          var thankYouMessage = document.querySelector(TY_SELECTOR);
          thankYouMessage.textContent = 'Thank you for your purchase, ' + ptitle + ' ' + pname + '!';
          modal.classList.toggle("show-modal");
        }

        function windowOnClick(event) {
          if (event.target === modal) {
            toggleModal();
          }
        }

        function closeWindow(event) {
          window.close();
        }

        submit.addEventListener("click", toggleModal(data));
        closeButton.addEventListener("click", closeWindow);
        window.addEventListener("click", windowOnClick);
        //end modal stuff
        console.log("Payment processed.");
        //window.close();
      } else {  //else commented out due to if being commented out, end of Modal stuff.  Removed modal stuff because not in this assignment.
        */
        var data = {};
        $(this).serializeArray().forEach(function(item) {
          data[item.name] = item.value;
          console.log(item.name + ' is ' + item.value);
        });
        console.log(data);
        fn(data);
        this.reset();
        this.elements[0].focus();
        //window.open("payment-form.html", 'popUpWindow', 'height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
      //} //end of else block that was commented out
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
