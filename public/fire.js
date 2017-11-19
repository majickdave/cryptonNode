(function () {
    var vm = this;
    var config = {
      apiKey: "AIzaSyDG2AnvNDb81pot-H0b3OEJt1GJiAOOVH0",
      authDomain: "crypton-materialkit.firebaseapp.com",
      databaseURL: "https://crypton-materialkit.firebaseio.com",
      projectId: "crypton-materialkit",
      storageBucket: "crypton-materialkit.appspot.com",
      messagingSenderId: "51893553369"
    };
    firebase.initializeApp(config);

    var db = firebase.database();

    document.getElementById("submitEmail").onclick = submit;

    function submit(e) {
        e.preventDefault();
        var id = Date.now()
        var email = $('#emailModal #emailInput').val();
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.test(email)) {
            db.ref('emails/' + id).set({
                id: id,
                email: email
            });
            $('#emailInput').css("visibility", "hidden");
            $("#result").text(email + " Has been added successfully");
            $("#result").css("color", "lightgreen");
            delayedAlert();

            //
        } else {
            $('#emailInput').css('border', '1px solid red')
            $("#result").text(email + " is not a valid email, please try again.");
            $("#result").css("color", "red");
        }
    };
    vm.hideModal = () => {
        $('#emailModal').modal('hide');
        $('#emailModal').button('hide');
        resetModal();
    }
    vm.openModal = () => {
        $('#emailModal').modal('show');
    }

    function resetModal() {
        $('#emailModal #emailInput').val('');
        $("#result").text('');
        $("#result").css("color", "none");
        $('#emailInput').css("visibility", "visible");
        $('#emailInput').css("border", "none");
    }

    var timeoutID;

    function delayedAlert() {
      timeoutID = window.setTimeout(slowAlert, 800);
    }

    function slowAlert() {
      alert('Thank you for your interest in Crypton.');
      $('#emailModal').modal('hide');
      resetModal();
    }

    function clearAlert() {
      window.clearTimeout(timeoutID);
    }


})()
