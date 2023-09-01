document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.getElementById("predict-form");

    // Attach a submit event handler
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // Collect data from form
        //Declaration af variabler
 



        function parseFeat() {
        console.log("parseFeat running")
        sex = køn.toLowerCase()
            if (sex === 'male' || sex === 'mand') {
                køn = 1
            } else if (sex === 'female' || sex === 'kvinde') {
                køn = 0;
            }
            else {
            document.getElementById("result").innerText = "Det ser ud som om det data du har indtastet er forkert";
            }
        }
        function dataTypeTjekker() {
        console.log("dataTypeTjekker running")
         if (typeof klasse !== "number" || typeof alder !== "number" || typeof nSøskende !== "number" || typeof nParch !== "number" ||  isNaN(klasse) ||  isNaN(alder) ||  isNaN(nSøskende) ||  isNaN(nParch) ) {
            document.getElementById("result").innerText = "Det ser ud som om det data du har indtastet er forkert";
            return false
            }
            else  {
            document.getElementById("result").innerText = "tænker";
            return true
            }
        }
        const klasse = parseInt(document.getElementById("klasse").value);
        var køn = document.getElementById("køn").value;
        const alder = parseInt(document.getElementById("alder").value);
        const nSøskende = parseInt(document.getElementById("nSøskende").value);
        const nParch = parseInt(document.getElementById("nParch").value);
        parseFeat()
//Objekt opbygges og sendes til server
        const data = {'Pclass': {'0':klasse}, 'Sex': {'0':køn}, 'Age': {'0':alder}, 'SibSp': {'0':nSøskende}, 'Parch': {'0':nParch}}

    //make a POST request to the Flask API
    if (dataTypeTjekker()){
        fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Display the prediction result
            document.getElementById("result").innerText = /*"Prediction: " +*/ data.prediction;
            const pmeter = document.querySelector('.p-meter');
            pmeter.style.height = data.prediction *100 + "%"
        })
        /*.catch((error) => {
            console.log("Error:", error);
        });*/
        }
    })
});
