(function () {
    var vm = this;
    var config = {
      apiKey: "AIzaSyDG2AnvNDb81pot-H0b3OEJt1GJiAOOVH0",
      authDomain: "crypton-materialkit.firebaseapp.com",
      databaseURL: "https://crypton-materialkit.firebaseio.com",
      projectId: "crypton-materialkit",
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
            $('#emailInput, #emailHelp').css("visibility", "hidden");
            $('#submitEmail').prop("disabled", true);
            $("#result").text(email + " was added successfully!");
            // $("#thankYou").text("Thank you for joining Crypton's Beta waitlist.");
            $("#result").css("color", "palegreen");
            delayedAlert();


            //
        } else {
            $('#emailInput').css('border', '2px solid #eee8aa')
            $('#emailInput').css('background', 'rgba(0,0,0, 0.2)')
            $("#result").text(email + " is not a valid email, please try again. 🤔");
            $("#result").css("color", "#eee8aa");
        }
    };

    vm.openModal = () => {
        $('#emailModal').on('shown.bs.modal', function () {
          $('#emailInput').focus();
        });
    }

    vm.hideModal = () => {
        $('#emailModal').modal('hide');
        resetModal();
    }

    function resetModal() {
        $('#emailModal, #emailInput').val('');
        $("#result").text('');
        $("#thankYou").text('');
        $("#result").css("color", "none");
        $('#emailInput').css("border", "1px solid white");
        $('#submitEmail').prop("disabled", false);
        $('#emailInput, #emailHelp').css("visibility", "visible");
        $('#emailInput').css('background', 'rgba(0,0,0, .1)');


    }

    var timeoutID;

    function delayedAlert() {
      timeoutID = window.setTimeout(slowAlert, 800);

    }

    function slowAlert() {
      alert('Thanks for your interest in Crypton.\nYou will receive a confirmation email shortly.');
      $('#emailModal').modal('hide');
      var modaltimeoutID;
      modaltimeoutID = window.setTimeout(resetModal, 500);

    };


})()

function openModal () {
  $('#emailModal').on('shown.bs.modal')
}
