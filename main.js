

    var timer = 30 * 60; // 30 minutes in seconds

    function updateTimer() {
        var minutes = Math.floor(timer / 60);
        var seconds = timer % 60;

        document.getElementById("timer").innerText = "Time remaining: " +
            (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (timer > 0) {
            timer--;
            setTimeout(updateTimer, 1000);
        } else {
            // Time's up!
            alert("Time's up! Your test will be submitted.");
            submitTest(); // Automatically submit the test
        }
    }

    updateTimer(); // Start the timer

    function submitTest() {
        // Add your logic to collect and evaluate answers
        alert("Test submitted! The webpage will now close.");
        // Optionally, you can redirect or close the page here
        window.close(); // Close the window
    }

