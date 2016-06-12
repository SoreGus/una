window.addEventListener("load", function () {
    funcionalidadesDisponiveis();
    carregando = new Carregando();
    alerta = new Alerta();
    valida = new Valida();
    //banco = new Banco();
    if (typeof document.getElementById("pagina").empty != typeof Function) {
        Element.prototype.empty = function () {
            while (this.firstChild) this.removeChild(this.firstChild);
        }
        console.log("Element.empty() criado manualmente.");
    }
    $('.button-collapse').sideNav({
        edge: 'right',
    });

    $('.modal-trigger').leanModal();
    pagina = new Pagina();

    if (window.localStorage.getItem("usuario") != null) {
        pagina.abrirPaginas("aguardaPagamento");
    } else {
        pagina.abrirPaginas("login");
    }

    onLoad();

    //FACEBOOK CORDOVA
    function onLoad() {
        document.addEventListener("deviceready", function () {

            facebookConnectPlugin.login(["public_profile", "user_friends", "user_photos"], fbLoginSuccess,
                function loginError(error) {
                    console.error(error)
                }
            );

        }, false);
    }

    var fbLoginSuccess = function (userData) {

        facebookConnectPlugin.api('/me/friends', ["public_profile", "user_friends", "user_photos"], function (response) {
            amigosFacebook = response;
        }, function (response) {
            console.log('teste2');
        });

        facebookConnectPlugin.api('/1019134094830146/picture', ["public_profile", "user_friends", "user_photos"], function (response) {

        }, function (response) {
            console.log('teste2');
        });
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Now safe to use device APIs
    }

    carregando.fechar();
});

function masterPassCanceledHandler() {
    console.log("MasterPass canceled")
}

function masterPassResponseHandler(data, status) {
    var $paymentForm = $("#simplify-payment-form");
    // Remove all previous errors
    $(".error").remove();
    // Check for errors
    if (data.error) {
        // Show any validation errors
        if (data.error.code == "validation") {
            var fieldErrors = data.error.fieldErrors,
                fieldErrorsLength = fieldErrors.length,
                errorList = "";
            for (var i = 0; i < fieldErrorsLength; i++) {
                errorList += "<div class='error'>Field: '" + fieldErrors[i].field + "' is invalid - " + fieldErrors[i].message + "</div>";
            }
            // Display the errors
            $paymentForm.after(errorList);
        }
    } else {
        // The token contains id, last4, and card type
        var token = data.cardToken["id"];
        // Insert the token into the form so it gets submitted to the server
        $paymentForm.append("<input type='hidden' name='simplifyToken' value='" + token + "' />");
        // Submit the form to the server
        $("#cc-number").val("XXXX-XXXX-XXXX-" + data.cardToken.card.last4);
        $("#cc-number").prop('disabled', true);
        $paymentForm.after("<div class='confirmation'>Please confirm your payment details before submitting</div>");
    }
}

function simplifyResponseHandler(data) {
    var $paymentForm = $("#simplify-payment-form");
    // Remove all previous errors
    $(".error").remove();
    // Check for errors
    if (data.error) {
        // Show any validation errors
        if (data.error.code == "validation") {
            var fieldErrors = data.error.fieldErrors,
                fieldErrorsLength = fieldErrors.length,
                errorList = "";
            for (var i = 0; i < fieldErrorsLength; i++) {
                errorList += "<div class='error'>Field: '" + fieldErrors[i].field + "' is invalid - " + fieldErrors[i].message + "</div>";
            }
            // Display the errors
            $paymentForm.after(errorList);
        }
        // Re-enable the submit button
        $("#process-payment-btn").removeAttr("disabled");
    } else {
        // The token contains id, last4, and card type
        var token = data["id"];
        // Insert the token into the form so it gets submitted to the server
        $paymentForm.append("<input type='hidden' name='simplifyToken' value='" + token + "' />");
        // Submit the form to the server
        $paymentForm.get(0).submit();
    }

}