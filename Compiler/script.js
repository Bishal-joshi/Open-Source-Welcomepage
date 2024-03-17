document.getElementById('run-btn').addEventListener('click', function() {
    var code = document.getElementById('code').value;
    try {
        var consoleLogOutput = '';
        var originalConsoleLog = console.log;
        console.log = function(message) {
            consoleLogOutput += message + '\n';
        };
        eval(code);
        console.log = originalConsoleLog; // Restore original console.log function
        document.getElementById('output').innerText = consoleLogOutput;
    } catch (error) {
        document.getElementById('output').innerText = 'Error: ' + error.message;
    }
});

