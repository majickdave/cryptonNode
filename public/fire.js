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

    function submit() {
        var id = Date.now()
        var email = $('#emailModal #emailInput').val();
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.test(email)) {
            db.ref('emails/' + id).set({
                id: id,
                email: email
            });
            alert('Thank you for your interest, we will be contacting you shortly.')
            $('#emailModal').modal('hide');
            resetModal();
        } else {
            $('emailInput').css('border', '1px solid red')
            $("#result").text(email + " is not a valid email.");
            $("#result").css("color", "red");

        }

    };
    vm.hideModal = () => {
        $('#emailModal').modal('hide');
        resetModal();
    }
    vm.openModal = () => {
        $('#emailModal').on('shown.bs.modal', function () {
          $('#emailInput').focus()
        })
    }


    function resetModal() {
        $('#emailModal #emailInput').val('')
        $("#result").text('');
        $("#result").css("color", "none");
    }

})()
